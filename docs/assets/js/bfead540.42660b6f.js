"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3029],{5318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(7378),a=n(8944),o=n(5161),i=n(1884),c=n(5626),s=n(9213);const l={cardContainer:"cardContainer_H47c",cardTitle:"cardTitle_tTnA",cardDescription:"cardDescription_rTl4"};function p(e){let{href:t,children:n}=e;return r.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",l.cardContainer)},n)}function u(e){let{href:t,icon:n,title:o,description:i}=e;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",l.cardTitle),title:o},n," ",o),i&&r.createElement("p",{className:(0,a.Z)("text--truncate",l.cardDescription),title:i},i))}function m(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?r.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function d(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(t.docId??void 0);return r.createElement(u,{href:t.href,icon:n,title:t.label,description:a?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(d,{item:t});case"category":return r.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const n=(0,o.jA)();return r.createElement(h,{items:n.items,className:t})}function h(e){const{items:t,className:n}=e;if(!t)return r.createElement(f,e);const i=(0,o.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},i.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(g,{item:e})))))}},257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(5773),a=(n(7378),n(5318)),o=n(5162);const i={hide_table_of_contents:!0},c="Agents",s={unversionedId:"modules/agents/agents/index",id:"modules/agents/agents/index",title:"Agents",description:"Conceptual Guide",source:"@site/docs/modules/agents/agents/index.mdx",sourceDirName:"modules/agents/agents",slug:"/modules/agents/agents/",permalink:"/langchainjs/docs/modules/agents/agents/",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/docs/modules/agents/agents/index.mdx",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"sidebar",previous:{title:"VectorStore Agent Toolkit",permalink:"/langchainjs/docs/modules/agents/toolkits/examples/vectorstore"},next:{title:"Examples",permalink:"/langchainjs/docs/modules/agents/agents/examples/"}},l={},p=[{value:"Which agent to choose?",id:"which-agent-to-choose",level:2},{value:"All Agents",id:"all-agents",level:2}],u={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"agents"},"Agents"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://docs.langchain.com/docs/components/agents/agent"},"Conceptual Guide"))),(0,a.kt)("p",null,"An agent is a stateless wrapper around an agent prompt chain (such as MRKL) which takes care of formatting tools into the prompt, as well as parsing the responses obtained from the chat model. It takes in user input and returns a response corresponding to an \u201caction\u201d to take and a corresponding \u201caction input\u201d."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface AgentStep {\n  action: AgentAction;\n  observation: string;\n}\n\ninterface AgentAction {\n  tool: string; // Tool.name\n  toolInput: string; // Tool.call argument\n}\n\ninterface AgentFinish {\n  returnValues: object;\n}\n\nclass Agent {\n  plan(steps: AgentStep[], inputs: object): Promise<AgentAction | AgentFinish>;\n}\n")),(0,a.kt)("h2",{id:"which-agent-to-choose"},"Which agent to choose?"),(0,a.kt)("p",null,"The agent you choose depends on the type of task you want to perform. Here's a quick guide to help you pick the right agent for your use case:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you're using a text LLM, first try ",(0,a.kt)("inlineCode",{parentName:"li"},"zero-shot-react-description"),", aka. the ",(0,a.kt)("a",{parentName:"li",href:"./examples/llm_mrkl"},"MRKL agent for LLMs"),"."),(0,a.kt)("li",{parentName:"ul"},"If you're using a Chat Model, try ",(0,a.kt)("inlineCode",{parentName:"li"},"chat-zero-shot-react-description"),", aka. the ",(0,a.kt)("a",{parentName:"li",href:"./examples/chat_mrkl"},"MRKL agent for Chat Models"),"."),(0,a.kt)("li",{parentName:"ul"},"If you're using a Chat Model and want to use memory, try ",(0,a.kt)("inlineCode",{parentName:"li"},"chat-conversational-react-description"),", the ",(0,a.kt)("a",{parentName:"li",href:"./examples/conversational_agent"},"Conversational agent"),".")),(0,a.kt)("h2",{id:"all-agents"},"All Agents"),(0,a.kt)(o.Z,{mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);