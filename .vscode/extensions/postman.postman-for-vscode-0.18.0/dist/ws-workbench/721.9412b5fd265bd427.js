(self.webpackChunkws_workbench=self.webpackChunkws_workbench||[]).push([[721,7397,4492,25],{7560:(t,e,n)=>{"use strict";function s(){return s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},s.apply(this,arguments)}n.d(e,{Z:()=>s})},98283:(t,e,n)=>{"use strict";function s(t,e){if(null==t)return{};var n,s,i={},a=Object.keys(t);for(s=0;s<a.length;s++)n=a[s],e.indexOf(n)>=0||(i[n]=t[n]);return i}n.d(e,{Z:()=>s})},84492:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var s=n(7560),i=n(69730),a=n.n(i);const o=(0,s.Z)({},a(),{DISABLE_ANALYTICS:!1,ANALYTICS_URL:"https://events.getpostman.com/events",IDENTITY_URL:"https://identity.getpostman.com",ARTEMIS_URL:"https://go.postman.co",HTTPS_GATEWAY_PRIVATE_URL:"https://bifrost-extension-https-global.gw.postman.com",WEBSOCKET_GATEWAY_URL:"wss://bifrost-extension-global.gw.postman.com",WEB_URL:"https://www.getpostman.com",DASHBOARD_URL:"https://go.postman.co",EXPLORE_URL:"https://www.postman.com",SENTRY_DSN:"https://0fd0f21b182549f18b0e01ce62f8adb0@o1224273.ingest.sentry.io/4505072910139392",OAUTH2_CALLBACK_URL:"https://oauth.pstmn.io/v1/vscode-callback",IMAGE_UPLOAD_URL:"https://content.pstmn.io",IDENTITY_SERVICE_URL:"https://iapub.postman.co",RUNTIME_ASSET_URL:"https://runtime-assets.pstmn.io"})},40721:(t,e,n)=>{"use strict";n.r(e),n.d(e,{AnalyticsService:()=>l,initializeAnalytics:()=>b});var s=n(7560),i=n(98283),a=n(84492),o=n(9907);const r=["propertyId"],c=new Set(["category","action","label","value","meta","workspaceId","workspaceType","entityId","entityType","traceId","variantId","experimentId","utm_source","utm_medium","utm_campaign","utm_content","utm_term"]),d={initialize:function(){this.payloads=[],this.enabled=!0,window.addEventListener("beforeunload",(()=>{try{this.sendPayloads({isFlushBeforePageClose:!0})}catch(t){}}),{capture:!0}),a.Z.DISABLE_ANALYTICS&&(this.enabled=!1),setInterval(function(){this.sendPayloads()}.bind(this),3e4)},setBaseObject:function(t={id:(0,o.getUserId)(),organizations:[{id:(0,o.getTeamId)()}]}){var e,s,a,c;const d=n(54515)(navigator.userAgent),u=(null==d?void 0:d.browser)||{};let l,p;l=null!=(e=window.APP_VERSION)?e:"10.0.3-web-platform",p="web";const h={type:"events-general",indexType:"client-events",env:"production",propertyId:"web",userId:(null!=(s=null==t?void 0:t.id)?s:(0,o.getUserId)())||"0",teamId:(null!=(a=null==t||null==(c=t.organizations[0])?void 0:c.id)?a:(0,o.getTeamId)())||"0"},b=(0,i.Z)(h,r);this.baseObject=b,this.baseObject=h,this.baseObject.propertyVersion=u.name?`${l};${u.name};${u.version}`:`${l};unknown;unknown`,this.baseObject.property="postman-web-public"},isLinuxOnChromeOS:function(){return!1},_extendEventWithBaseObject:function(t){this.baseObject||this.setBaseObject({id:(0,o.getUserId)(),organizations:[{id:(0,o.getTeamId)(),organization_id:(0,o.getTeamId)(),user_id:(0,o.getUserId)()}]});const e=(new Date).toISOString();return(0,s.Z)({},this.baseObject,{timestamp:e},Object.entries(t).reduce(((t,[e,n])=>c.has(e)&&n?(0,s.Z)({},t,{[e]:n}):t),{}))},addCurrentEvent:function(t){const e=this._extendEventWithBaseObject(t);this.queuePayload(e)},addCurrentSyncDiscarded:function(t,e,n,i){try{if("history"===t)return;this.baseObject||this.setBaseObject();const a=(0,s.Z)({},this.baseObject,{verb:t,entity:e,data:JSON.stringify(n),type:"sync",indexType:"client-errors"});i&&(a.error=JSON.stringify(i)),this.queuePayload(a)}catch(t){}},queuePayload:function(t){this.enabled&&this.payloads.push(t)},sendPayloads:function(t){if(this.enabled){if(this.payloads.length>0){let e,n="";for(const t of this.payloads)n+=JSON.stringify(t)+"\n";t&&t.isFlushBeforePageClose&&(e={useBeacon:t.isFlushBeforePageClose}),this.sendRequest(n,e),this.clearPayloads()}}else this.clearPayloads()},sendRequest:function(t,e){const n=a.Z.ANALYTICS_URL;let s,i;try{s=btoa(t)}catch(t){return}e&&e.useBeacon&&navigator.sendBeacon&&(i=navigator.sendBeacon(n,s)),i||fetch(n,{method:"POST",headers:{"Content-Type":"text/plain"},body:s,credentials:"omit"})},clearPayloads:function(){this.payloads=[]},_sendEventImmediately:function(t){const e=this._extendEventWithBaseObject(t),n=JSON.stringify(e);this.sendRequest(n)}};var u=n(77736);const l={addEvent:function(t,e,n,s,i,a){if(null!=a&&a.noActiveWorkspace)return d.addCurrentEvent({category:t,action:e,label:n,value:s,meta:i});const o=function(){var t;switch(null==(t=window)||null==(t=t.pm)||null==(t=t.windowConfig)?void 0:t.process){case"runner":case"requester":try{return{}}catch(t){return{}}default:return{}}}();return d.addCurrentEvent({category:t,action:e,label:n,value:s,meta:i,workspaceId:o.id,workspaceType:o.type})},addEventV2:function(t,e){u.VSCodeCommunicationsService.postMessageToExtension({type:"SEND_ANALYTICS",payload:t})},addEventV2AndPublish:function(t,e={}){this.addEventV2(t,e),d.sendPayloads()}};var p=n(46468);const h=t=>{window.newrelic.addPageAction("InitialLoadMetrics",(0,s.Z)({route:window.location.pathname,userId:"0"},t))},b=()=>{try{d.initialize(),null==(t=window.newrelic)||null==t.setCustomAttribute||t.setCustomAttribute("postman-app-type","distributed-frontend"),(()=>{if(!window.newrelic)throw new Error("New Relic not initialized");(0,p.onTTFB)((({value:t})=>t&&h({timeToFirstByte:t}))),(0,p.onFCP)((({value:t})=>t&&h({firstContentfulPaint:t}))),(0,p.onLCP)((({value:t})=>t&&h({largestContentfulPaint:t}))),(0,p.onFID)((({value:t})=>t&&h({firstInputDelay:t}))),(0,p.onCLS)((({value:t})=>t&&h({cumulativeLayoutShift:t})))})()}catch(t){}var t}},69730:()=>{}}]);
//# sourceMappingURL=721.9412b5fd265bd427.js.map