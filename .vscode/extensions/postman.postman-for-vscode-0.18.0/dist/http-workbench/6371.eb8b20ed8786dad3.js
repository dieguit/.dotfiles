"use strict";(self.webpackChunkhttp_workbench=self.webpackChunkhttp_workbench||[]).push([[6371],{60766:(e,s,r)=>{r.r(s),r.d(s,{subscribeToWorkspaceEvents:()=>h,useActiveWorkspaceId:()=>t,useActiveWorkspaceInfo:()=>d,useNavigateToWorkspace:()=>w,useWorkspace:()=>i});var a=r(60607);const t=()=>{const{workspaceId:e}=(0,a.useParams)();return e?(e=>(null==e?void 0:e.split("~").pop())||"")(e):""};var o=r(7560),n=r(98283),c=r(69461),u=r(34925),l=r(84492);const p=["data"],i=e=>{const s=(0,c.useDataFetch)(((e,s)=>({queryKey:["workspace",e],queryFn:()=>(async(e,s)=>await u.postmanGateway.post({url:`${l.Z.HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:`/workspaces/${e}`,method:"GET",signal:s,service:"workspaces"}))(e),enabled:!!e,useErrorBoundary:void 0}))(e)),{data:r}=s,a=(0,n.Z)(s,p);return(0,o.Z)({data:null==r?void 0:r.data},a)},d=()=>{const e=t();return i(e)};var b=r(40540),k=r(43353),v=r(77736);const w=()=>{const e=(0,k.useNavigate)();return(0,b.useCallback)((s=>{(0,v.onWorkspaceChange)(s),s&&e("/workspace/"+s)}),[e])},h=e=>{const s=new AbortController;return{asyncObserver:u.postmanWebsocketGateway.subscribe({signal:s.signal,subscribeRequest:{method:"GET",url:"/ws/proxy",body:{},path:`/workspaces/${e}/subscribe`,service:"workspaces"},subscriptionEvents:["update","update_roles","workspace_v1","create","destroy"],responseFilter:e=>{var s;return null==e||null==(s=e.body)||null==(s=s.data)?void 0:s.id},broadcastFilter:e=>{var s;return null==e||null==(s=e.meta)||null==(s=s.timeline)?void 0:s.model_id},unsubscribeRequest:{method:"delete",url:"/ws/proxy",body:{},path:`/workspaces/${e}/subscribe`,service:"workspaces"}}),abortController:s}}}}]);
//# sourceMappingURL=6371.eb8b20ed8786dad3.js.map