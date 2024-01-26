"use strict";(self.webpackChunkcollection_runner=self.webpackChunkcollection_runner||[]).push([[2339,7688],{7688:(e,t,i)=>{i.r(t),i.d(t,{default:()=>p});var r=i(40540),n=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},a=void 0;a="undefined"!=typeof window?window:"undefined"!=typeof self?self:i.g;var _=null,l=null,c=a.clearTimeout,d=a.setTimeout,h=a.cancelAnimationFrame||a.mozCancelAnimationFrame||a.webkitCancelAnimationFrame,f=a.requestAnimationFrame||a.mozRequestAnimationFrame||a.webkitRequestAnimationFrame;null==h||null==f?(_=c,l=function(e){return d(e,20)}):(_=function(e){var t=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var i=[],r=!0,n=!1,s=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(i.push(o.value),!t||i.length!==t);r=!0);}catch(e){n=!0,s=e}finally{try{!r&&a.return&&a.return()}finally{if(n)throw s}}return i}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}(e,2),i=t[0],r=t[1];h(i),c(r)},l=function(e){var t=f((function(){c(i),e()})),i=d((function(){h(t),e()}),20);return[t,i]});var u=function(e){function t(){var e,i,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,s=Array(n),a=0;a<n;a++)s[a]=arguments[a];return i=r=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.state={height:r.props.defaultHeight||0,width:r.props.defaultWidth||0},r._onResize=function(){var e=r.props,t=e.disableHeight,i=e.disableWidth,n=e.onResize;if(r._parentNode){var s=r._parentNode.offsetHeight||0,o=r._parentNode.offsetWidth||0,a=window.getComputedStyle(r._parentNode)||{},_=parseInt(a.paddingLeft,10)||0,l=parseInt(a.paddingRight,10)||0,c=parseInt(a.paddingTop,10)||0,d=parseInt(a.paddingBottom,10)||0,h=s-c-d,f=o-_-l;(!t&&r.state.height!==h||!i&&r.state.width!==f)&&(r.setState({height:s-c-d,width:o-_-l}),n({height:s,width:o}))}},r._setRef=function(e){r._autoSizer=e},o(r,i)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidMount",value:function(){var e=this.props.nonce;this._autoSizer&&this._autoSizer.parentNode&&this._autoSizer.parentNode.ownerDocument&&this._autoSizer.parentNode.ownerDocument.defaultView&&this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement&&(this._parentNode=this._autoSizer.parentNode,this._detectElementResize=function(e){var t=void 0,i=void 0,r=void 0,n=void 0,s=void 0,o=void 0,c=void 0,d="undefined"!=typeof document&&document.attachEvent;if(!d){o=function(e){var t=e.__resizeTriggers__,i=t.firstElementChild,r=t.lastElementChild,n=i.firstElementChild;r.scrollLeft=r.scrollWidth,r.scrollTop=r.scrollHeight,n.style.width=i.offsetWidth+1+"px",n.style.height=i.offsetHeight+1+"px",i.scrollLeft=i.scrollWidth,i.scrollTop=i.scrollHeight},s=function(e){return e.offsetWidth!==e.__resizeLast__.width||e.offsetHeight!==e.__resizeLast__.height},c=function(e){if(!(e.target.className&&"function"==typeof e.target.className.indexOf&&e.target.className.indexOf("contract-trigger")<0&&e.target.className.indexOf("expand-trigger")<0)){var t=this;o(this),this.__resizeRAF__&&_(this.__resizeRAF__),this.__resizeRAF__=l((function(){s(t)&&(t.__resizeLast__.width=t.offsetWidth,t.__resizeLast__.height=t.offsetHeight,t.__resizeListeners__.forEach((function(i){i.call(t,e)})))}))}};var h=!1,f="";r="animationstart";var u="Webkit Moz O ms".split(" "),p="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),g=document.createElement("fakeelement");if(void 0!==g.style.animationName&&(h=!0),!1===h)for(var m=0;m<u.length;m++)if(void 0!==g.style[u[m]+"AnimationName"]){f="-"+u[m].toLowerCase()+"-",r=p[m],h=!0;break}t="@"+f+"keyframes "+(i="resizeanim")+" { from { opacity: 0; } to { opacity: 0; } } ",n=f+"animation: 1ms "+i+"; "}return{addResizeListener:function(s,_){if(d)s.attachEvent("onresize",_);else{if(!s.__resizeTriggers__){var l=s.ownerDocument,h=a.getComputedStyle(s);h&&"static"===h.position&&(s.style.position="relative"),function(i){if(!i.getElementById("detectElementResize")){var r=(t||"")+".resize-triggers { "+(n||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',s=i.head||i.getElementsByTagName("head")[0],o=i.createElement("style");o.id="detectElementResize",o.type="text/css",null!=e&&o.setAttribute("nonce",e),o.styleSheet?o.styleSheet.cssText=r:o.appendChild(i.createTextNode(r)),s.appendChild(o)}}(l),s.__resizeLast__={},s.__resizeListeners__=[],(s.__resizeTriggers__=l.createElement("div")).className="resize-triggers";var f=l.createElement("div");f.className="expand-trigger",f.appendChild(l.createElement("div"));var u=l.createElement("div");u.className="contract-trigger",s.__resizeTriggers__.appendChild(f),s.__resizeTriggers__.appendChild(u),s.appendChild(s.__resizeTriggers__),o(s),s.addEventListener("scroll",c,!0),r&&(s.__resizeTriggers__.__animationListener__=function(e){e.animationName===i&&o(s)},s.__resizeTriggers__.addEventListener(r,s.__resizeTriggers__.__animationListener__))}s.__resizeListeners__.push(_)}},removeResizeListener:function(e,t){if(d)e.detachEvent("onresize",t);else if(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),!e.__resizeListeners__.length){e.removeEventListener("scroll",c,!0),e.__resizeTriggers__.__animationListener__&&(e.__resizeTriggers__.removeEventListener(r,e.__resizeTriggers__.__animationListener__),e.__resizeTriggers__.__animationListener__=null);try{e.__resizeTriggers__=!e.removeChild(e.__resizeTriggers__)}catch(e){}}}}}(e),this._detectElementResize.addResizeListener(this._parentNode,this._onResize),this._onResize())}},{key:"componentWillUnmount",value:function(){this._detectElementResize&&this._parentNode&&this._detectElementResize.removeResizeListener(this._parentNode,this._onResize)}},{key:"render",value:function(){var e=this.props,t=e.children,i=e.className,n=e.disableHeight,o=e.disableWidth,a=e.style,_=this.state,l=_.height,c=_.width,d={overflow:"visible"},h={},f=!1;return n||(0===l&&(f=!0),d.height=0,h.height=l),o||(0===c&&(f=!0),d.width=0,h.width=c),(0,r.createElement)("div",{className:i,ref:this._setRef,style:s({},d,a)},!f&&t(h))}}]),t}(r.PureComponent);u.defaultProps={onResize:function(){},disableHeight:!1,disableWidth:!1,style:{}};const p=u}}]);
//# sourceMappingURL=2339.250e77ddabfbb776.js.map