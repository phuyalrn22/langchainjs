"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[315],{5318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,g=m["".concat(o,".").concat(u)]||m[u]||d[u]||l;return n?r.createElement(g,p(p({ref:t},c),{},{components:n})):r.createElement(g,p({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:a,p[1]=i;for(var s=2;s<l;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(5773),a=(n(7378),n(5318));const l={id:"prompts.internal.LengthBasedExampleSelectorArgs",title:"Interface: LengthBasedExampleSelectorArgs",sidebar_label:"prompts.internal.LengthBasedExampleSelectorArgs",custom_edit_url:null},p=void 0,i={unversionedId:"api/interfaces/prompts.internal.LengthBasedExampleSelectorArgs",id:"api/interfaces/prompts.internal.LengthBasedExampleSelectorArgs",title:"Interface: LengthBasedExampleSelectorArgs",description:"prompts.internal.LengthBasedExampleSelectorArgs",source:"@site/docs/api/interfaces/prompts.internal.LengthBasedExampleSelectorArgs.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/prompts.internal.LengthBasedExampleSelectorArgs",permalink:"/langchainjs/docs/api/interfaces/prompts.internal.LengthBasedExampleSelectorArgs",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"prompts.internal.LengthBasedExampleSelectorArgs",title:"Interface: LengthBasedExampleSelectorArgs",sidebar_label:"prompts.internal.LengthBasedExampleSelectorArgs",custom_edit_url:null},sidebar:"sidebar",previous:{title:"prompts.internal.ChatPromptTemplateInput",permalink:"/langchainjs/docs/api/interfaces/prompts.internal.ChatPromptTemplateInput"},next:{title:"retrievers.internal.ChatGPTPluginRetrieverFilter",permalink:"/langchainjs/docs/api/interfaces/retrievers.internal.ChatGPTPluginRetrieverFilter"}},o={},s=[{value:"Properties",id:"properties",level:2},{value:"examplePrompt",id:"exampleprompt",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"getTextLength",id:"gettextlength",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in-1",level:4},{value:"maxLength",id:"maxlength",level:3},{value:"Defined in",id:"defined-in-2",level:4}],c={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/prompts"},"prompts"),".",(0,a.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/modules/prompts.internal"},"internal"),".LengthBasedExampleSelectorArgs"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"exampleprompt"},"examplePrompt"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"examplePrompt"),": ",(0,a.kt)("a",{parentName:"p",href:"/langchainjs/docs/api/classes/prompts.PromptTemplate"},(0,a.kt)("inlineCode",{parentName:"a"},"PromptTemplate"))),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/prompts/selectors/LengthBasedExampleSelector.ts#L10"},"langchain/src/prompts/selectors/LengthBasedExampleSelector.ts:10")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"gettextlength"},"getTextLength"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"getTextLength"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"text"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("p",null,"\u25b8 (",(0,a.kt)("inlineCode",{parentName:"p"},"text"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h5",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"text")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))))),(0,a.kt)("h5",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/prompts/selectors/LengthBasedExampleSelector.ts#L12"},"langchain/src/prompts/selectors/LengthBasedExampleSelector.ts:12")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"maxlength"},"maxLength"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"maxLength"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/hwchase17/langchainjs/blob/0092eb5/langchain/src/prompts/selectors/LengthBasedExampleSelector.ts#L11"},"langchain/src/prompts/selectors/LengthBasedExampleSelector.ts:11")))}d.isMDXComponent=!0}}]);