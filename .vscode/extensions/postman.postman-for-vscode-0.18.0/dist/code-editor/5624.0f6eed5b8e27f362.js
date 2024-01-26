"use strict";(self.webpackChunkcode_editor=self.webpackChunkcode_editor||[]).push([[5624,730],{730:(r,e,t)=>{t.r(e),t.d(e,{AwaitErrorBoundary:()=>b,CustomErrorBoundary:()=>Z,GenericErrorMessage:()=>h,RouteErrorBoundary:()=>k,logError:()=>i}),t(540);var o=t(607),n=t(7560),s=t(8283),a=t(7736),l=t(5304);const c=["crash"],i=(r,e)=>{let{crash:t=!1}=e,o=(0,s.Z)(e,c);((r,e)=>{var t;null==(t=window)||null==(t=t.newrelic)||null==t.noticeError||t.noticeError(r,e)})(r,(0,n.Z)({crash:t},o)),((r,e)=>{l.withScope((t=>{t.setExtra("ErrorStack",e.stack),t.setExtra("ErrorAppId",e.appId),t.setExtra("ErrorElementId",e.errorElementId),l.captureException(r)}))})(r,(0,n.Z)({crash:t},o)),((r,e)=>{a.VSCodeCommunicationsService.postMessageToExtension({type:"LOG_ERROR_TO_EXTENSION_LOGS",payload:{appId:e.appId,error:(null==r.toString?void 0:r.toString())||r.message,info:e}})})(r,o)};var d=t(9437),p=t(47);const E="Something Went Wrong",m="Postman has encountered an error. If this problem persists, contact us at help@postman.com";var u=t(2322);const I=["title","description","message","illustration","error"],h=r=>{let{title:e=E,description:t=m,message:o,illustration:a="illustration-unable-to-load",error:l}=r,c=(0,s.Z)(r,I);const i=o||l&&l.message;return(0,u.jsxs)(d.Z,(0,n.Z)({title:e,description:t},c,{children:[i&&(0,u.jsx)("p",{children:(0,u.jsx)("i",{children:i})}),(0,u.jsx)(p.Z,{name:a})]}))},k=({children:r,title:e,description:t,message:n,appId:s,errorElementId:a})=>{const l=(0,o.useRouteError)();return i(l,{stack:l.stack,appId:s,errorElementId:a}),r||(0,u.jsx)(h,{title:e,description:t,error:l,message:n})};var g=t(609);const x=["children","onError","appId","errorElementId","FallbackComponent"],S=(r,e,t,o)=>{i(r,{stack:e.componentStack,appId:t,crash:!0,errorElementId:o})},Z=r=>{let{children:e,onError:t,appId:o,errorElementId:a,FallbackComponent:l=h}=r,c=(0,s.Z)(r,x);return(0,u.jsx)(g.ErrorBoundary,(0,n.Z)({FallbackComponent:null!=c&&c.fallback?void 0:l,onError:(r,e)=>(t||S)(r,e,o,a)},c,{children:e}))},b=({children:r,title:e,description:t,message:n,appId:s,errorElementId:a})=>{const l=(0,o.useAsyncError)();return i(l,{stack:l.stack,appId:s,errorElementId:a}),r||(0,u.jsx)(h,{title:e,description:t,error:l,message:n})}}}]);
//# sourceMappingURL=5624.0f6eed5b8e27f362.js.map