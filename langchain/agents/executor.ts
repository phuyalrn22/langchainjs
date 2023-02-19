import { ChainValues, BaseChain } from "../chains";
import { BaseCallbackManager } from "../callbacks";
import { Agent, Tool, StoppingMethod, AgentStep, AgentFinish } from "./index";
import { SerializedLLMChain } from "../chains/llm_chain";

type AgentExecutorInput = {
  agent: Agent;
  tools: Tool[];
  returnIntermediateSteps?: boolean;
  maxIterations?: number;
  earlyStoppingMethod?: StoppingMethod;
  callbackManager?: BaseCallbackManager;
  verbose?: boolean;
};

/**
 * A chain managing an agent using tools.
 * @augments BaseChain
 */
export class AgentExecutor extends BaseChain {
  agent: Agent;

  tools: Tool[];

  returnIntermediateSteps = false;

  maxIterations?: number = 15;

  earlyStoppingMethod: StoppingMethod = "force";

  constructor(input: AgentExecutorInput) {
    super({
      callbackManager: input.callbackManager,
      verbose: input.verbose,
    });
    this.agent = input.agent;
    this.tools = input.tools;
    this.returnIntermediateSteps =
      input.returnIntermediateSteps ?? this.returnIntermediateSteps;
    this.maxIterations = input.maxIterations ?? this.maxIterations;
    this.earlyStoppingMethod =
      input.earlyStoppingMethod ?? this.earlyStoppingMethod;
  }

  /** Create from agent and a list of tools. */
  static fromAgentAndTools(
    fields: {
      agent: Agent;
      tools: Tool[];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } & Record<string, any>
  ): AgentExecutor {
    return new AgentExecutor(fields);
  }

  private shouldContinue(iterations: number): boolean {
    return this.maxIterations === undefined || iterations < this.maxIterations;
  }

  async _call(inputs: ChainValues): Promise<ChainValues> {
    this.agent.prepareForNewCall();
    const toolsByName = Object.fromEntries(
      this.tools.map((t) => [t.name.toLowerCase(), t])
    );
    const steps: AgentStep[] = [];
    let iterations = 0;

    const getOutput = (finishStep: AgentFinish) => {
      const { returnValues } = finishStep;
      this.callbackManager(
        { event: "agent.end", action: finishStep },
        { verbose: this.verbose }
      );
      if (this.returnIntermediateSteps) {
        return { ...returnValues, intermediateSteps: steps };
      }
      return returnValues;
    };

    while (this.shouldContinue(iterations)) {
      const action = await this.agent.plan(steps, inputs);
      if ("returnValues" in action) {
        return getOutput(action);
      }

      const tool = toolsByName[action.tool.toLowerCase()];
      this.callbackManager(
        {
          event: "agent.tool_start",
          tool: { name: tool?.name ?? "N/A" },
          action,
        },
        { verbose: this.verbose }
      );

      let observation;
      try {
        observation = tool
          ? await tool.call(action.toolInput)
          : `${action.tool} is not a valid tool, try another one.`;
      } catch (err) {
        this.callbackManager(
          { event: "agent.tool_error", err },
          { verbose: this.verbose }
        );
        throw err;
      }

      this.callbackManager(
        { event: "agent.tool_end", output: observation },
        { verbose: this.verbose }
      );

      steps.push({ action, observation });
      if (tool?.returnDirect) {
        return getOutput({
          returnValues: { [this.agent.returnValues[0]]: observation },
          log: "",
        });
      }
      iterations += 1;
    }

    const finish = await this.agent.returnStoppedResponse(
      this.earlyStoppingMethod,
      steps,
      inputs
    );

    return getOutput(finish);
  }

  _chainType() {
    return "agent_executor" as const;
  }

  serialize(): SerializedLLMChain {
    throw new Error("Cannot serialize an AgentExecutor");
  }
}