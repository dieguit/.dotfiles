(self.webpackChunkvscode_auth=self.webpackChunkvscode_auth||[]).push([[32],{3032:(t,e,n)=>{"use strict";n.r(e),n.d(e,{initSentry:()=>p,sentryRouter:()=>R});var s=n(7560),o=n(9730),a=n.n(o);const r=(0,s.Z)({},a(),{DISABLE_ANALYTICS:!1,ANALYTICS_URL:"https://events.getpostman.com/events",IDENTITY_URL:"https://identity.getpostman.com",ARTEMIS_URL:"https://go.postman.co",HTTPS_GATEWAY_PRIVATE_URL:"https://bifrost-extension-https-global.gw.postman.com",WEBSOCKET_GATEWAY_URL:"wss://bifrost-extension-global.gw.postman.com",WEB_URL:"https://www.getpostman.com",DASHBOARD_URL:"https://go.postman.co",EXPLORE_URL:"https://www.postman.com",SENTRY_DSN:"https://0fd0f21b182549f18b0e01ce62f8adb0@o1224273.ingest.sentry.io/4505072910139392",OAUTH2_CALLBACK_URL:"https://oauth.pstmn.io/v1/vscode-callback",IMAGE_UPLOAD_URL:"https://content.pstmn.io",IDENTITY_SERVICE_URL:"https://iapub.postman.co",RUNTIME_ASSET_URL:"https://runtime-assets.pstmn.io"});var i=n(5304);function c(t){var e;if(null!=t&&null!=(e=t.exception)&&e.values)for(const e of t.exception.values){var n;if(null!=e&&null!=(n=e.stacktrace)&&n.frames)for(const t of e.stacktrace.frames)null!=t&&t.filename&&t.filename.replace(/\\/g,"/").includes("/dist/")&&(t.filename=["/",t.filename.replace(/\\/g,"/").split("/dist/").pop()].join(""))}return t}function p(t){r.SENTRY_DSN&&i.init((0,s.Z)({},t,{dsn:r.SENTRY_DSN,sampleRate:.2,tracesSampleRate:0,environment:"prod",release:"prod.2024-01-16.06-27",ignoreErrors:["ResizeObserver loop limit exceeded"],beforeSend:c}))}var l=n(540),u=n(607),m=n(3353);const R=t=>{if(r.SENTRY_DSN){var e;const n=null==(e=i.getCurrentHub())?void 0:e.getClient();if(null!=n&&n.addIntegration)return n.addIntegration(new i.BrowserTracing({routingInstrumentation:i.reactRouterV6Instrumentation(l.useEffect,m.useLocation,u.useNavigationType,u.createRoutesFromChildren,u.matchRoutes)})),i.wrapCreateBrowserRouter(t)}return t}},9730:()=>{}}]);
//# sourceMappingURL=32.2b5f7776fbcf59a2.js.map