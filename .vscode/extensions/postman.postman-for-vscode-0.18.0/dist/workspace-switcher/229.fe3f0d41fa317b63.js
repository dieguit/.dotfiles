"use strict";(self.webpackChunkworkspace_switcher=self.webpackChunkworkspace_switcher||[]).push([[229,7560,3911],{7560:(e,s,n)=>{function t(){return t=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var n=arguments[s];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},t.apply(this,arguments)}n.d(s,{Z:()=>t})},3911:(e,s,n)=>{n.r(s),n.d(s,{Modals:()=>r});var t={};n.r(t),n.d(t,{ModalDialog:()=>h});var r={};n.r(r),n.d(r,{Ui:()=>t,getModals:()=>o});var i=n(7736);class a{async showWarningDialog(e){const{subject:s,message:n,options:t}=e;return i.VSCodeCommunicationsService.postMessageToExtensionAsPromise({type:"UI_SHOW_MODAL_DIALOG",payload:{severity:"warning",subject:s,message:n,options:t}})}}function o(){return new a}var c=n(540),l=n(8983),u=n(8560),d=n(605),p=n(2322);const h=e=>{const[s,n]=(0,c.useState)(null),[t,r]=(0,c.useState)(!1);return(0,c.useEffect)((()=>{function s(s){const{detail:t}=s;e.uid===t.uid&&(n(t),r(!0))}return window.addEventListener("pm:modal:request",s),()=>{window.removeEventListener("pm:modal:request",s)}}),[e.uid]),s?(0,p.jsxs)(l.u_,{isOpen:t,size:"small",onClose:()=>r(!1),children:[(0,p.jsx)(l.xB,{heading:s.subject}),(0,p.jsx)(l.hz,{children:(0,p.jsx)("p",{children:s.message})}),(0,p.jsx)(l.mz,{children:(0,p.jsx)(u.Z,{justifyContent:"flex-end",grow:1,shrink:1,gap:"spacing-m",children:s.options.map((e=>(0,p.jsx)(d.Z,{type:!0===e.isPrimary?"primary":"secondary",text:e.title,onClick:()=>{s.callback(e),r(!1)}},e.title)))})})]}):null}}}]);
//# sourceMappingURL=229.fe3f0d41fa317b63.js.map