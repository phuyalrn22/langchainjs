import deepcopy from "deepcopy";
import { BaseCallbackManager, defaultCallbackManager } from "../callbacks";
import {
  LLMChain,
  StuffDocumentsChain,
  VectorDBQAChain,
  ChatVectorDBQAChain,
} from "./index";
import { BaseMemory } from "../memory";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ChainValues = Record<string, any>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type LoadValues = Record<string, any>;

const chainClasses = [
  LLMChain,
  StuffDocumentsChain,
  VectorDBQAChain,
  ChatVectorDBQAChain,
];

export type SerializedBaseChain = ReturnType<
  InstanceType<(typeof chainClasses)[number]>["serialize"]
>;

export interface ChainInputs {
  memory?: BaseMemory;
}

/**
 * Base interface that all chains must implement.
 */
export abstract class BaseChain implements ChainInputs {
  callbackManager: BaseCallbackManager;

  verbose?: boolean = false;

  memory?: BaseMemory;

  constructor(fields?: {
    callbackManager?: BaseCallbackManager;
    verbose?: boolean;
  }) {
    this.callbackManager = fields?.callbackManager ?? defaultCallbackManager;
    this.verbose = fields?.verbose ?? false;
  }

  /**
   * Run the core logic of this chain and return the output
   */
  abstract _call(values: ChainValues): Promise<ChainValues>;

  /**
   * Return the string type key uniquely identifying this class of chain.
   */
  abstract _chainType(): string;

  /**
   * Return a json-like object representing this chain.
   */
  abstract serialize(): SerializedBaseChain;

  /**
   * Run the core logic of this chain and add to output if desired.
   *
   * Wraps {@link _call} and handles memory.
   */
  async call(values: ChainValues): Promise<ChainValues> {
    const fullValues = deepcopy(values);
    if (!(this.memory == null)) {
      const newValues = await this.memory.loadMemoryVariables(values);
      for (const [key, value] of Object.entries(newValues)) {
        fullValues[key] = value;
      }
    }

    this.callbackManager(
      {
        event: "chain.start",
        chain: { name: this._chainType() },
        inputs: fullValues,
      },
      { verbose: this.verbose }
    );
    const outputValues = this._call(fullValues);
    if (!(this.memory == null)) {
      this.memory.saveContext(values, outputValues);
    }
    try {
      const output = await outputValues;

      this.callbackManager(
        { event: "chain.end", output },
        { verbose: this.verbose }
      );

      return output;
    } catch (err) {
      this.callbackManager(
        { event: "chain.error", err },
        { verbose: this.verbose }
      );
      throw err;
    }
  }

  /**
   * Call the chain on all inputs in the list
   */
  apply(inputs: ChainValues[]): ChainValues[] {
    return inputs.map(this.call);
  }

  /**
   * Load a chain from a json-like object describing it.
   */
  static deserialize(
    data: SerializedBaseChain,
    values: LoadValues = {}
  ): Promise<BaseChain> {
    switch (data._type) {
      case "llm_chain":
        return LLMChain.deserialize(data);
      case "stuff_documents_chain":
        return StuffDocumentsChain.deserialize(data);
      case "vector_db_qa":
        return VectorDBQAChain.deserialize(data, values);
      default:
        throw new Error(
          `Invalid prompt type in config: ${
            (data as SerializedBaseChain)._type
          }`
        );
    }
  }
}