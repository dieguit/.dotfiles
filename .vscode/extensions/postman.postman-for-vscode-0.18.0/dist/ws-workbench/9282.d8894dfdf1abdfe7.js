(self.webpackChunkws_workbench=self.webpackChunkws_workbench||[]).push([[9282],{4721:(e,t,r)=>{"use strict";r.r(t);var s=r(40540),o=r(21730),a=r(60607),n=r(58442),c=r(97376),i=r(69461),u=r(34925),p=r(84492);const w=e=>({queryKey:["ws-raw-history-item",e],queryFn:async()=>{return t=e,u.postmanGateway.post({body:JSON.stringify({method:"get",service:"scribe",path:`/history/${t}`}),service:"scribe",path:`/history/${t}`,url:`${p.Z.HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`});var t}});var d=r(6122),h=r(56093);const l=()=>{if(window.NAVIGATION_CONTEXT){const r=JSON.parse(window.NAVIGATION_CONTEXT);try{var e,t;const s=JSON.parse(d.Base64.decode(null==r||null==(e=r.options)?void 0:e.requestData));return[{item:{id:"",title:"Untitled WebSocket Request",type:h.HI.RAW,payload:{url:null==(t=s.data)?void 0:t.url,queryParams:[],headers:[],settings:h.gT},autoRunRequest:s.data.autoRunRequest}}]}catch(e){return{}}}return{}};var m=r(52322);let y="/";try{var R;y=JSON.parse(null==(R=window)?void 0:R.NAVIGATION_CONTEXT).to}catch(e){}const E=[{path:"/workspace/:workspaceId/ws-raw-request/create",element:(0,m.jsx)(n.Z,{}),errorElement:(0,m.jsx)(c.RouteErrorBoundary,{appId:"ws-workbench",errorElementId:"create-ws-raw-request-route"}),loader:async()=>(0,a.defer)({wsRawRequestData:l()})},{path:"/workspace/:workspaceId/ws-raw-request/history/:historyId",element:(0,m.jsx)(n.Z,{}),errorElement:(0,m.jsx)(c.RouteErrorBoundary,{appId:"ws-workbench",errorElementId:"ws-raw-history-request"}),loader:async({params:e})=>{const t=await(async e=>i.cacheClient.getQueryData(w(e).queryKey)||await i.cacheClient.fetchQuery(w(e)))(e.historyId);return(0,a.defer)({wsRawRequestData:t})}},{path:"/workspace/:workspaceId/ws-socketio-request/create",element:(0,m.jsx)(n.Z,{}),errorElement:(0,m.jsx)(c.RouteErrorBoundary,{appId:"ws-workbench",errorElementId:"create-ws-socketio-request-route"})}],I=(0,a.createMemoryRouter)(E,{initialEntries:[y],initialIndex:0});function T(){return(0,m.jsx)(a.RouterProvider,{router:I})}var A=r(80814);(0,r(92465).initializeAnalytics)(),r(27086);const _=document.querySelector("#ws-workbench_root");o.render((0,m.jsx)(s.StrictMode,{children:(0,m.jsx)(c.CustomErrorBoundary,{appId:"ws-workbench",errorElementId:"global-error-boundary",children:(0,m.jsx)(A.ThemeContextProvider,{children:(0,m.jsx)(i.DataFetchCacheProvider,{children:(0,m.jsx)(T,{})})})})}),_)},84492:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(7560),o=r(69730),a=r.n(o);const n=(0,s.Z)({},a(),{DISABLE_ANALYTICS:!1,ANALYTICS_URL:"https://events.getpostman.com/events",IDENTITY_URL:"https://identity.getpostman.com",ARTEMIS_URL:"https://go.postman.co",HTTPS_GATEWAY_PRIVATE_URL:"https://bifrost-extension-https-global.gw.postman.com",WEBSOCKET_GATEWAY_URL:"wss://bifrost-extension-global.gw.postman.com",WEB_URL:"https://www.getpostman.com",DASHBOARD_URL:"https://go.postman.co",EXPLORE_URL:"https://www.postman.com",SENTRY_DSN:"https://0fd0f21b182549f18b0e01ce62f8adb0@o1224273.ingest.sentry.io/4505072910139392",OAUTH2_CALLBACK_URL:"https://oauth.pstmn.io/v1/vscode-callback",IMAGE_UPLOAD_URL:"https://content.pstmn.io",IDENTITY_SERVICE_URL:"https://iapub.postman.co",RUNTIME_ASSET_URL:"https://runtime-assets.pstmn.io"})},27086:(e,t,r)=>{"use strict";r.r(t)},69730:()=>{}}]);
//# sourceMappingURL=9282.d8894dfdf1abdfe7.js.map