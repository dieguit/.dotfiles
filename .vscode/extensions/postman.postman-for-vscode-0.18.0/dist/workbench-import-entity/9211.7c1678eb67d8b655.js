"use strict";(self.webpackChunkworkbench_import_entity=self.webpackChunkworkbench_import_entity||[]).push([[9211,7560,966],{7560:(e,n,t)=>{function r(){return r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},r.apply(this,arguments)}t.d(n,{Z:()=>r})},966:(e,n,t)=>{t.r(n),t.d(n,{DESKTOP_WINDOW_EVENT_CHANNEL:()=>_,INTERNAL_CHANNEL_BROADCAST_MAIN:()=>m,TOGGLE_WINDOW_MAXIMIZE_EVENT:()=>E,desktopCommunicationService:()=>f,useOpenNativeMenu:()=>l,useScreenParams:()=>p,useZoomFactor:()=>b});const r={invoke:()=>{throw new Error("Function not implemented.")},send:()=>{throw new Error("Function not implemented.")},subscribe:()=>{throw new Error("Function not implemented.")}},u=()=>r,c=(e,...n)=>u().invoke(e,...n);var i=t(7560),o=t(540);function s(e){return[e.label,e.id,e.accelerator].filter(Boolean).join("_")}function a(e,n=new Map){return Array.isArray(e)?{menu:null==e?void 0:e.map((e=>{var t;return e.click&&n.set(s(e),e.click),(0,i.Z)({},e,{click:s(e),submenu:null==(t=a(e.submenu,n))?void 0:t.menu})})),clickHandlers:n}:{}}function l(e){const n=(0,o.useRef)();return(0,o.useEffect)((()=>u().subscribe("CLOSE_POPUP_MENU",(function(t,r){e&&"function"==typeof e&&!r&&e();const u=r&&n.current&&n.current.get(r);u&&u()}))),[]),e=>{const{menu:t,clickHandlers:r}=a(e);n.current=r,c("setNativeElectronMenuOpen",{menu:t})}}const f={send:(e,...n)=>u().send(e,...n),invoke:c,subscribe:(e,n)=>u().subscribe(e,n)||(()=>null)},m="PM_EB_INT_BROADCAST_MAIN",E="toggle-maximize",_="requester-window-events";function b(){const[e]=(0,o.useState)((()=>1));return(0,o.useEffect)((()=>{}),[]),e}function p(){const[e]=(0,o.useState)((()=>({isFullScreen:!1,isMaximized:!1,isBlurred:!1})));return(0,o.useEffect)((()=>{}),[]),e}}}]);
//# sourceMappingURL=9211.7c1678eb67d8b655.js.map