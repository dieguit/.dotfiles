(self.webpackChunkfolder_workbench=self.webpackChunkfolder_workbench||[]).push([[6371,4492,8283,4489,4613,766],{98283:(s,e,t)=>{"use strict";function o(s,e){if(null==s)return{};var t,o,r={},a=Object.keys(s);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(r[t]=s[t]);return r}t.d(e,{Z:()=>o})},84492:(s,e,t)=>{"use strict";t.d(e,{Z:()=>a});var o=t(69730),r=t.n(o);const a=Object.assign({},r(),{DISABLE_ANALYTICS:!1,ANALYTICS_URL:"https://events.getpostman.com/events",IDENTITY_URL:"https://identity.getpostman.com",ARTEMIS_URL:"https://go.postman.co",HTTPS_GATEWAY_PRIVATE_URL:"https://bifrost-extension-https-global.gw.postman.com",WEBSOCKET_GATEWAY_URL:"wss://bifrost-extension-global.gw.postman.com",WEB_URL:"https://www.getpostman.com",DASHBOARD_URL:"https://go.postman.co",EXPLORE_URL:"https://www.postman.com",SENTRY_DSN:"https://0fd0f21b182549f18b0e01ce62f8adb0@o1224273.ingest.sentry.io/4505072910139392",OAUTH2_CALLBACK_URL:"https://oauth.pstmn.io/v1/vscode-callback",IMAGE_UPLOAD_URL:"https://content.pstmn.io",IDENTITY_SERVICE_URL:"https://iapub.postman.co",RUNTIME_ASSET_URL:"https://runtime-assets.pstmn.io"})},60766:(s,e,t)=>{"use strict";t.r(e),t.d(e,{subscribeToWorkspaceEvents:()=>h,useActiveWorkspaceId:()=>r,useActiveWorkspaceInfo:()=>l,useNavigateToWorkspace:()=>_,useWorkspace:()=>i});var o=t(60607);const r=()=>{const{workspaceId:s}=(0,o.useParams)();return s?(s=>(null==s?void 0:s.split("~").pop())||"")(s):""};var a=t(98283),n=t(69461),c=t(34925),p=t(84492);const u=["data"],i=s=>{const e=(0,n.useDataFetch)(((s,e)=>({queryKey:["workspace",s],queryFn:()=>(async(s,e)=>await c.postmanGateway.post({url:`${p.Z.HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:`/workspaces/${s}`,method:"GET",signal:e,service:"workspaces"}))(s),enabled:!!s,useErrorBoundary:void 0}))(s)),{data:t}=e,o=(0,a.Z)(e,u);return Object.assign({data:null==t?void 0:t.data},o)},l=()=>{const s=r();return i(s)};var b=t(40540),d=t(43353),w=t(77736);const _=()=>{const s=(0,d.useNavigate)();return(0,b.useCallback)((e=>{(0,w.onWorkspaceChange)(e),e&&s("/workspace/"+e)}),[s])},h=s=>{const e=new AbortController;return{asyncObserver:c.postmanWebsocketGateway.subscribe({signal:e.signal,subscribeRequest:{method:"GET",url:"/ws/proxy",body:{},path:`/workspaces/${s}/subscribe`,service:"workspaces"},subscriptionEvents:["update","update_roles","workspace_v1","create","destroy"],responseFilter:s=>{var e;return null==s||null==(e=s.body)||null==(e=e.data)?void 0:e.id},broadcastFilter:s=>{var e;return null==s||null==(e=s.meta)||null==(e=e.timeline)?void 0:e.model_id},unsubscribeRequest:{method:"delete",url:"/ws/proxy",body:{},path:`/workspaces/${s}/subscribe`,service:"workspaces"}}),abortController:e}}},69730:()=>{}}]);
//# sourceMappingURL=6371.25043518000cfc8a.js.map