"use strict";(self.webpackChunkworkbench_import_entity=self.webpackChunkworkbench_import_entity||[]).push([[3911],{3911:(e,s,n)=>{n.r(s),n.d(s,{Modals:()=>i});var t={};n.r(t),n.d(t,{ModalDialog:()=>m});var i={};n.r(i),n.d(i,{Ui:()=>t,getModals:()=>a});var r=n(7736);class o{async showWarningDialog(e){const{subject:s,message:n,options:t}=e;return r.VSCodeCommunicationsService.postMessageToExtensionAsPromise({type:"UI_SHOW_MODAL_DIALOG",payload:{severity:"warning",subject:s,message:n,options:t}})}}function a(){return new o}var l=n(540),c=n(8983),d=n(8560),u=n(605),p=n(2322);const m=e=>{const[s,n]=(0,l.useState)(null),[t,i]=(0,l.useState)(!1);return(0,l.useEffect)((()=>{function s(s){const{detail:t}=s;e.uid===t.uid&&(n(t),i(!0))}return window.addEventListener("pm:modal:request",s),()=>{window.removeEventListener("pm:modal:request",s)}}),[e.uid]),s?(0,p.jsxs)(c.u_,{isOpen:t,size:"small",onClose:()=>i(!1),children:[(0,p.jsx)(c.xB,{heading:s.subject}),(0,p.jsx)(c.hz,{children:(0,p.jsx)("p",{children:s.message})}),(0,p.jsx)(c.mz,{children:(0,p.jsx)(d.Z,{justifyContent:"flex-end",grow:1,shrink:1,gap:"spacing-m",children:s.options.map((e=>(0,p.jsx)(u.Z,{type:!0===e.isPrimary?"primary":"secondary",text:e.title,onClick:()=>{s.callback(e),i(!1)}},e.title)))})})]}):null}}}]);
//# sourceMappingURL=3911.ac2da4a1e8679e9b.js.map