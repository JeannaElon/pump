import{cW as e,cP as t,cQ as i,cR as c}from"./b078beb4-8bc4-43e9-9b2e-86af4eb31ae3.js";const r=e`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;let o=class extends t{render(){return i`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};o.styles=r,o=function(e,t,i,c){var r,o=arguments.length,l=o<3?t:null===c?c=Object.getOwnPropertyDescriptor(t,i):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,c);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(l=(o<3?r(l):o>3?r(t,i,l):r(t,i))||l);return o>3&&l&&Object.defineProperty(t,i,l),l}([c("w3m-transactions-view")],o);export{o as W3mTransactionsView};
