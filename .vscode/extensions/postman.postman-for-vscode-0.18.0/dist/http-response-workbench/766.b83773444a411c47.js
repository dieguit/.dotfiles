"use strict";(self.webpackChunkhttp_response_workbench=self.webpackChunkhttp_response_workbench||[]).push([[766],{60766:(e,s,r)=>{r.r(s),r.d(s,{subscribeToWorkspaceEvents:()=>w,useActiveWorkspaceId:()=>t,useActiveWorkspaceInfo:()=>i,useNavigateToWorkspace:()=>v,useWorkspace:()=>l});var a=r(60607);const t=()=>{const{workspaceId:e}=(0,a.useParams)();return e?(e=>(null==e?void 0:e.split("~").pop())||"")(e):""};var o=r(98283),n=r(69461),c=r(34925),u=r(84492);const p=["data"],l=e=>{const s=(0,n.useDataFetch)(((e,s)=>({queryKey:["workspace",e],queryFn:()=>(async(e,s)=>await c.postmanGateway.post({url:`${u.Z.HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:`/workspaces/${e}`,method:"GET",signal:s,service:"workspaces"}))(e),enabled:!!e,useErrorBoundary:void 0}))(e)),{data:r}=s,a=(0,o.Z)(s,p);return Object.assign({data:null==r?void 0:r.data},a)},i=()=>{const e=t();return l(e)};var d=r(40540),b=r(43353),k=r(77736);const v=()=>{const e=(0,b.useNavigate)();return(0,d.useCallback)((s=>{(0,k.onWorkspaceChange)(s),s&&e("/workspace/"+s)}),[e])},w=e=>{const s=new AbortController;return{asyncObserver:c.postmanWebsocketGateway.subscribe({signal:s.signal,subscribeRequest:{method:"GET",url:"/ws/proxy",body:{},path:`/workspaces/${e}/subscribe`,service:"workspaces"},subscriptionEvents:["update","update_roles","workspace_v1","create","destroy"],responseFilter:e=>{var s;return null==e||null==(s=e.body)||null==(s=s.data)?void 0:s.id},broadcastFilter:e=>{var s;return null==e||null==(s=e.meta)||null==(s=s.timeline)?void 0:s.model_id},unsubscribeRequest:{method:"delete",url:"/ws/proxy",body:{},path:`/workspaces/${e}/subscribe`,service:"workspaces"}}),abortController:s}}}}]);
//# sourceMappingURL=766.b83773444a411c47.js.map