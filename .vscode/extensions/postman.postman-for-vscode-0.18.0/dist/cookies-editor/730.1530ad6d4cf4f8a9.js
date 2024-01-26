"use strict";(self.webpackChunkcookies_editor=self.webpackChunkcookies_editor||[]).push([[730,5624],{730:(e,t,n)=>{n.r(t),n.d(t,{AwaitErrorBoundary:()=>_,CustomErrorBoundary:()=>b,GenericErrorMessage:()=>E,RouteErrorBoundary:()=>g,logError:()=>l}),n(540);var r=n(607),a=n(8283),o=n(7736),s=n(5304);const i=["crash"],l=(e,t)=>{let{crash:n=!1}=t,r=(0,a.Z)(t,i);((e,t)=>{var n;null==(n=window)||null==(n=n.newrelic)||null==n.noticeError||n.noticeError(e,t)})(e,Object.assign({crash:n},r)),((e,t)=>{s.withScope((n=>{n.setExtra("ErrorStack",t.stack),n.setExtra("ErrorAppId",t.appId),n.setExtra("ErrorElementId",t.errorElementId),s.captureException(e)}))})(e,Object.assign({crash:n},r)),((e,t)=>{o.VSCodeCommunicationsService.postMessageToExtension({type:"LOG_ERROR_TO_EXTENSION_LOGS",payload:{appId:t.appId,error:(null==e.toString?void 0:e.toString())||e.message,info:t}})})(e,r)};var c=n(9437),d=n(47);const p="Something Went Wrong",m="Postman has encountered an error. If this problem persists, contact us at help@postman.com";var u=n(2322);const h=["title","description","message","illustration","error"],E=e=>{let{title:t=p,description:n=m,message:r,illustration:o="illustration-unable-to-load",error:s}=e,i=(0,a.Z)(e,h);const l=r||s&&s.message;return(0,u.jsxs)(c.Z,Object.assign({title:t,description:n},i,{children:[l&&(0,u.jsx)("p",{children:(0,u.jsx)("i",{children:l})}),(0,u.jsx)(d.Z,{name:o})]}))},g=({children:e,title:t,description:n,message:a,appId:o,errorElementId:s})=>{const i=(0,r.useRouteError)();return l(i,{stack:i.stack,appId:o,errorElementId:s}),e||(0,u.jsx)(E,{title:t,description:n,error:i,message:a})};var k=n(609);const I=["children","onError","appId","errorElementId","FallbackComponent"],y=(e,t,n,r)=>{l(e,{stack:t.componentStack,appId:n,crash:!0,errorElementId:r})},b=e=>{let{children:t,onError:n,appId:r,errorElementId:o,FallbackComponent:s=E}=e,i=(0,a.Z)(e,I);return(0,u.jsx)(k.ErrorBoundary,Object.assign({FallbackComponent:null!=i&&i.fallback?void 0:s,onError:(e,t)=>(n||y)(e,t,r,o)},i,{children:t}))},_=({children:e,title:t,description:n,message:a,appId:o,errorElementId:s})=>{const i=(0,r.useAsyncError)();return l(i,{stack:i.stack,appId:o,errorElementId:s}),e||(0,u.jsx)(E,{title:t,description:n,error:i,message:a})}},9437:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(540),a=n.n(r),o=n(5892),s=n.n(o),i=n(2229),l=n.n(i),c=n(8560),d=n(9460),p=n(4962),m=s().div.withConfig({displayName:"BlankState__StyledBlankStateWrapper",componentId:"sc-4dvps6-0"})(["height:100%;width:100%;display:flex;justify-content:center;align-items:center;background-color:transparent;"]),u=s()(c.Z).withConfig({displayName:"BlankState__StyledBlankState",componentId:"sc-4dvps6-1"})(["max-width:480px;"]),h=s().div.withConfig({displayName:"BlankState__BlankStateInfo",componentId:"sc-4dvps6-2"})(["text-align:center;& > *:not(:last-child){margin-bottom:",";}.blank-state__title{margin-bottom:",";}"],(function(e){return e.theme["spacing-l"]}),(function(e){return e.theme["spacing-s"]})),E=s()(c.Z).withConfig({displayName:"BlankState__ActionsContainer",componentId:"sc-4dvps6-3"})(["width:fit-content;.aether-blank-state__button{font-size:",";line-height:1.4;width:100%;}"],(function(e){return e.theme["text-size-m"]}));function g(e){var t,n,r=e.className,o=e.title,s=e.description,i=e.children,l=e.primaryAction,g=e.secondaryAction,k=e["data-testid"];return a().createElement(m,null,a().createElement(u,{direction:"column",gap:"spacing-l",alignItems:"center",padding:"spacing-xl",width:"fit-content",className:r,"data-aether-id":"aether-blankState","data-testid":k},i,a().createElement(h,null,a().createElement("div",null,a().createElement(p.Z,{type:"h3",styleAs:"h4",text:o,className:"blank-state__title"}),"string"==typeof s?a().createElement(d.ZP,{type:"para"},s):s),a().createElement(c.Z,{justifyContent:"center"},a().createElement(E,{direction:"column",gap:"spacing-m",alignItems:"center"},(n=l)&&a().isValidElement(n)?a().cloneElement(n,{className:"aether-blank-state__button"}):null,(t=g)&&a().isValidElement(t)?a().cloneElement(t,{className:"aether-blank-state__button"}):null)))))}g.defaultProps={title:"",description:"",className:"",children:null,primaryAction:null,secondaryAction:null,"data-testid":"aether-blank-state"},g.propTypes={title:l().string,description:l().node,className:l().string,children:l().node,primaryAction:l().node,secondaryAction:l().node,"data-testid":l().string}}}]);
//# sourceMappingURL=730.1530ad6d4cf4f8a9.js.map