var context_bar;(()=>{"use strict";var e,t,r,a,n,o,d,l,i,s,f,c,u,p,h,b,m,v,g,y,x={6326:(e,t,r)=>{var a={"./ContextBar":()=>Promise.all([r.e(6204),r.e(540),r.e(1730),r.e(2229),r.e(427),r.e(3353),r.e(452),r.e(5650)]).then((()=>()=>r(5650)))},n=(e,t)=>(r.R=t,t=r.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),r.R=void 0,t),o=(e,t)=>{if(r.S){var a="default",n=r.S[a];if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return r.S[a]=e,r.I(a,t)}};r.d(t,{get:()=>n,init:()=>o}),function(){var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};e.SENTRY_RELEASES=e.SENTRY_RELEASES||{},e.SENTRY_RELEASES["vscode-extension-webview@postman-labs"]={id:"prod.2024-01-16.06-27"}}()}},w={};function _(e){var t=w[e];if(void 0!==t)return t.exports;var r=w[e]={id:e,loaded:!1,exports:{}};return x[e].call(r.exports,r,r.exports,_),r.loaded=!0,r.exports}_.m=x,_.c=w,_.amdO={},_.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return _.d(t,{a:t}),t},_.d=(e,t)=>{for(var r in t)_.o(t,r)&&!_.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},_.f={},_.e=e=>Promise.all(Object.keys(_.f).reduce(((t,r)=>(_.f[r](e,t),t)),[])),_.u=e=>e+"."+{157:"3b7ad0973742ec98",287:"827f3557ea1ea9dd",427:"6fc9cbb59e4da751",452:"1c42413dcd2e71ea",540:"d6e66a63f1f6f179",607:"9eb6699b2b9006c4",770:"b31ef3cb5f76767a",966:"17bff89048b291e7",1148:"09bb285fcace4c8f",1312:"f90e44a1624fd04d",1327:"1b4332fb9e160c6e",1730:"1b0b58fcf77ca5e8",2223:"2362545fce118ce0",2229:"874c81d7d04d854f",2660:"2260eb2d03323d5c",2668:"881999fb0692e872",2772:"35cd3fc8d5557e66",2784:"15c28329a95618ca",2955:"1db99fd2439a8720",3005:"0271611a1e71bded",3013:"2e82751386256513",3193:"7b777dd8e360bdfe",3353:"1e13ce1ab11e57df",3723:"50dbd3bb6cfd4b33",3911:"595ae5fcf57316be",3931:"9af457ae8db9868b",3980:"c6ac55487fb7c18b",4007:"cbd5d59f221028c2",5348:"f7007a48751bec4d",5473:"be2d7f6cb183f189",5505:"f2aafb67d5bab8a8",5650:"964bed3235ecb91b",6204:"c180c26dcacba4b8",6277:"b27fc9a63b7343c3",6353:"1a4c26b1ba8380c4",6410:"12e65d7550f78b00",6462:"ff8379a086b76396",6486:"b59b7225014ee6b1",6591:"1028fec8c78dd3bf",7736:"ef1a30a4a6432a04",7864:"d65111a4947fc902",7908:"e78094df01e6d50a",8007:"ed20bf5b88b1fdb1",8013:"f2c83d8e120c648c",8316:"152df8e859c9fb09",8537:"cbdedf5d14bc18dc",8609:"df915ea369ef22dd",8722:"ea775eb7d6db50a1",9211:"9a0adc68c995e133",9304:"66f46d7c4239de99",9460:"96e211544d5c8541",9543:"86520ffe5b8b23eb"}[e]+".js",_.miniCssF=e=>e+"."+{1312:"c2442dda3f79eb93",3005:"c2442dda3f79eb93"}[e]+".css",_.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),_.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),_.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="context-bar:",_.l=(r,a,n,o)=>{if(e[r])e[r].push(a);else{var d,l;if(void 0!==n)for(var i=document.getElementsByTagName("script"),s=0;s<i.length;s++){var f=i[s];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+n){d=f;break}}d||(l=!0,(d=document.createElement("script")).type="text/javascript",d.charset="utf-8",d.timeout=120,_.nc&&d.setAttribute("nonce",_.nc),d.setAttribute("data-webpack",t+n),d.src=r),e[r]=[a];var c=(t,a)=>{d.onerror=d.onload=null,clearTimeout(u);var n=e[r];if(delete e[r],d.parentNode&&d.parentNode.removeChild(d),n&&n.forEach((e=>e(a))),t)return t(a)},u=setTimeout(c.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=c.bind(null,d.onerror),d.onload=c.bind(null,d.onload),l&&document.head.appendChild(d)}},_.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{_.S={};var e={},t={};_.I=(r,a)=>{a||(a=[]);var n=t[r];if(n||(n=t[r]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[r])return e[r];_.o(_.S,r)||(_.S[r]={});var o=_.S[r],d="context-bar",l=(e,t,r,a)=>{var n=o[e]=o[e]||{},l=n[t];if(!l||!l.__postman_local_chunk__)if(window.__local_apps__&&window.__local_apps__.includes(d)){if(l&&l.loaded&&l.__postman_local_chunk__)return;n[t]={get:r,from:d,eager:!!a,__postman_local_chunk__:!0}}else(!l||!l.loaded&&(!a!=!l.eager?a:d>l.from))&&(n[t]={get:r,from:d,eager:!!a})},i=[];return"default"===r&&(l("@postman-app-next/analytics-service","1.0.0",(()=>Promise.all([_.e(7736),_.e(3013),_.e(2660)]).then((()=>()=>_(2660))))),l("@postman-app-next/auth","1.0.0",(()=>_.e(2668).then((()=>()=>_(2668))))),l("@postman-app-next/data-fetching","1.0.0",(()=>Promise.all([_.e(540),_.e(7736),_.e(7864),_.e(8013)]).then((()=>()=>_(8013))))),l("@postman-app-next/desktop-communication-sdk","1.0.0",(()=>Promise.all([_.e(540),_.e(9211)]).then((()=>()=>_(966))))),l("@postman-app-next/dialogs","1.0.0",(()=>Promise.all([_.e(9460),_.e(6204),_.e(6486),_.e(5348),_.e(540),_.e(7736),_.e(1730),_.e(2229),_.e(427),_.e(3911)]).then((()=>()=>_(3911))))),l("@postman-app-next/error-handling","1.0.0",(()=>Promise.all([_.e(9460),_.e(6204),_.e(157),_.e(540),_.e(7736),_.e(1730),_.e(2229),_.e(427),_.e(607),_.e(2772),_.e(1148)]).then((()=>()=>_(730))))),l("@postman-app-next/navigation","1.0.0",(()=>Promise.all([_.e(9460),_.e(6204),_.e(6486),_.e(4007),_.e(540),_.e(7736),_.e(1730),_.e(2229),_.e(427),_.e(607),_.e(3723),_.e(8722),_.e(3931)]).then((()=>()=>_(3931))))),l("@postman-app-next/ui","1.0.0",(()=>Promise.all([_.e(9460),_.e(6204),_.e(6486),_.e(157),_.e(540),_.e(7736),_.e(1730),_.e(2229),_.e(427),_.e(3723),_.e(3353),_.e(287),_.e(3005)]).then((()=>()=>_(287))))),l("@postman-app-next/vscode-utils","1.0.0",(()=>Promise.all([_.e(540),_.e(607),_.e(8722),_.e(5473)]).then((()=>()=>_(770))))),l("@postman/aether-design-tokens","1.4.0",(()=>_.e(6462).then((()=>()=>_(6462))))),l("@sentry/react","7.91.0",(()=>Promise.all([_.e(3193),_.e(540)]).then((()=>()=>_(3193))))),l("@tanstack/react-query-devtools","4.36.1",(()=>_.e(2223).then((()=>()=>_(2223))))),l("@tanstack/react-query","4.36.1",(()=>Promise.all([_.e(8609),_.e(540)]).then((()=>()=>_(8609))))),l("clsx","1.2.1",(()=>_.e(6277).then((()=>()=>_(6277))))),l("mobx-react","7.6.0",(()=>Promise.all([_.e(8007),_.e(540),_.e(1730)]).then((()=>()=>_(8007))))),l("prop-types","15.8.1",(()=>_.e(3980).then((()=>()=>_(3980))))),l("react-dom","16.14.0",(()=>Promise.all([_.e(8316),_.e(540)]).then((()=>()=>_(8316))))),l("react-draggable","4.4.6",(()=>Promise.all([_.e(1327),_.e(540),_.e(1730),_.e(2229),_.e(3723)]).then((()=>()=>_(1327))))),l("react-error-boundary","4.0.12",(()=>Promise.all([_.e(540),_.e(2955)]).then((()=>()=>_(2955))))),l("react-router-dom","6.11.2",(()=>Promise.all([_.e(6591),_.e(540)]).then((()=>()=>_(6591))))),l("react","16.14.0",(()=>_.e(2784).then((()=>()=>_(2784))))),l("styled-components","5.3.6",(()=>Promise.all([_.e(5505),_.e(540)]).then((()=>()=>_(5505))))),l("ua-parser-js","1.0.37",(()=>_.e(6353).then((()=>()=>_(6353))))),l("uuid","8.3.2",(()=>_.e(9304).then((()=>()=>_(9304))))),l("web-vitals","3.5.1",(()=>_.e(9543).then((()=>()=>_(9543)))))),e[r]=i.length?Promise.all(i).then((()=>e[r]=1)):1}}})(),(()=>{var e;_.g.importScripts&&(e=_.g.location+"");var t=_.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),_.p=e})(),r=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=r[1]?t(r[1]):[];return r[2]&&(a.length++,a.push.apply(a,t(r[2]))),r[3]&&(a.push([]),a.push.apply(a,t(r[3]))),a},a=(e,t)=>{e=r(e),t=r(t);for(var a=0;;){if(a>=e.length)return a<t.length&&"u"!=(typeof t[a])[0];var n=e[a],o=(typeof n)[0];if(a>=t.length)return"u"==o;var d=t[a],l=(typeof d)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&n!=d)return n<d;a++}},n=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var a=1,o=1;o<e.length;o++)a--,r+="u"==(typeof(l=e[o]))[0]?"-":(a>0?".":"")+(a=2,l);return r}var d=[];for(o=1;o<e.length;o++){var l=e[o];d.push(0===l?"not("+i()+")":1===l?"("+i()+" || "+i()+")":2===l?d.pop()+" "+d.pop():n(l))}return i();function i(){return d.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,t)=>{if(0 in e){t=r(t);var a=e[0],n=a<0;n&&(a=-a-1);for(var d=0,l=1,i=!0;;l++,d++){var s,f,c=l<e.length?(typeof e[l])[0]:"";if(d>=t.length||"o"==(f=(typeof(s=t[d]))[0]))return!i||("u"==c?l>a&&!n:""==c!=n);if("u"==f){if(!i||"u"!=c)return!1}else if(i)if(c==f)if(l<=a){if(s!=e[l])return!1}else{if(n?s>e[l]:s<e[l])return!1;s!=e[l]&&(i=!1)}else if("s"!=c&&"n"!=c){if(n||l<=a)return!1;i=!1,l--}else{if(l<=a||f<c!=n)return!1;i=!1}else"s"!=c&&"n"!=c&&(i=!1,l--)}}var u=[],p=u.pop.bind(u);for(d=1;d<e.length;d++){var h=e[d];u.push(1==h?p()|p():2==h?p()&p():h?o(h,t):!p())}return!!p()},d=(e,t)=>{var r=e[t];return Object.keys(r).reduce(((e,t)=>!e||!r[e].loaded&&a(e,t)?t:e),0)},l=(e,t,r,a)=>"Unsatisfied version "+r+" from "+(r&&e[t][r].from)+" of shared singleton module "+t+" (required "+n(a)+")",i=(e,t,r,a)=>{var n=d(e,r);return o(a,n)||f(l(e,r,n,a)),c(e[r][n])},s=(e,t,r,a)=>{var n=d(e,r);if(!o(a,n))throw new Error(l(e,r,n,a));return c(e[r][n])},f=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},c=e=>(e.loaded=1,e.get()),p=(u=e=>function(t,r,a,n){var o=_.I(t);return o&&o.then?o.then(e.bind(e,t,_.S[t],r,a,n)):e(t,_.S[t],r,a,n)})(((e,t,r,a,n)=>t&&_.o(t,r)?i(t,0,r,a):n())),h=u(((e,t,r,a,n)=>t&&_.o(t,r)?s(t,0,r,a):n())),b={},m={7736:()=>p("default","@postman-app-next/vscode-utils",[4,1,0,0],(()=>Promise.all([_.e(540),_.e(607),_.e(8722),_.e(770)]).then((()=>()=>_(770))))),9907:()=>p("default","@postman-app-next/auth",[4,1,0,0],(()=>_.e(2668).then((()=>()=>_(2668))))),4515:()=>h("default","ua-parser-js",[1,1,0,33],(()=>_.e(6353).then((()=>()=>_(6353))))),6468:()=>h("default","web-vitals",[1,3,0,4],(()=>_.e(9543).then((()=>()=>_(9543))))),540:()=>h("default","react",[4,16,14,0],(()=>_.e(2784).then((()=>()=>_(2784))))),2600:()=>h("default","@tanstack/react-query-devtools",[1,4,29,1],(()=>_.e(2223).then((()=>()=>_(2223))))),4527:()=>h("default","@tanstack/react-query",[1,4,29,1],(()=>_.e(8609).then((()=>()=>_(8609))))),1730:()=>h("default","react-dom",[4,16,14,0],(()=>_.e(8316).then((()=>()=>_(8316))))),2229:()=>h("default","prop-types",[1,15,8,1],(()=>_.e(3980).then((()=>()=>_(3980))))),5577:()=>h("default","@postman/aether-design-tokens",[1,1,2,0],(()=>_.e(7908).then((()=>()=>_(6462))))),5892:()=>h("default","styled-components",[4,5,3,6],(()=>_.e(5505).then((()=>()=>_(5505))))),607:()=>h("default","react-router-dom",[4,6,11,2],(()=>_.e(6591).then((()=>()=>_(6591))))),5304:()=>h("default","@sentry/react",[1,7,49,0],(()=>_.e(3193).then((()=>()=>_(3193))))),609:()=>h("default","react-error-boundary",[1,4,0,4],(()=>_.e(8537).then((()=>()=>_(2955))))),3723:()=>h("default","clsx",[1,1,2,1],(()=>_.e(6277).then((()=>()=>_(6277))))),8722:()=>h("default","uuid",[1,8,3,2],(()=>_.e(9304).then((()=>()=>_(9304))))),5191:()=>p("default","@postman-app-next/desktop-communication-sdk",[4,1,0,0],(()=>_.e(966).then((()=>()=>_(966))))),8217:()=>p("default","@postman-app-next/dialogs",[4,1,0,0],(()=>Promise.all([_.e(5348),_.e(6410)]).then((()=>()=>_(3911))))),3353:()=>p("default","@postman-app-next/navigation",[4,1,0,0],(()=>Promise.all([_.e(9460),_.e(6486),_.e(4007),_.e(7736),_.e(607),_.e(3723),_.e(8722),_.e(3931)]).then((()=>()=>_(3931))))),7569:()=>h("default","react-draggable",[1,4,4,5],(()=>_.e(1327).then((()=>()=>_(1327))))),8851:()=>h("default","mobx-react",[1,7,6,0],(()=>_.e(8007).then((()=>()=>_(8007))))),814:()=>p("default","@postman-app-next/ui",[4,1,0,0],(()=>Promise.all([_.e(9460),_.e(6486),_.e(157),_.e(7736),_.e(3723),_.e(287),_.e(1312)]).then((()=>()=>_(287)))))},v={287:[7569,8851],427:[5577,5892],452:[814],540:[540],607:[607],1730:[1730],2229:[2229],2772:[5304,609],3013:[9907,4515,6468],3353:[3353],3723:[3723],3931:[5191,8217],7736:[7736],7864:[2600,4527],8722:[8722]},_.f.consumes=(e,t)=>{_.o(v,e)&&v[e].forEach((e=>{if(_.o(b,e))return t.push(b[e]);var r=t=>{b[e]=0,_.m[e]=r=>{delete _.c[e],r.exports=t()}},a=t=>{delete b[e],_.m[e]=r=>{throw delete _.c[e],t}};try{var n=m[e]();n.then?t.push(b[e]=n.then(r).catch(a)):r(n)}catch(e){a(e)}}))},g=e=>new Promise(((t,r)=>{var a=_.miniCssF(e),n=_.p+a;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var n=(d=r[a]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(n===e||n===t))return d}var o=document.getElementsByTagName("style");for(a=0;a<o.length;a++){var d;if((n=(d=o[a]).getAttribute("data-href"))===e||n===t)return d}})(a,n))return t();((e,t,r,a)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=o=>{if(n.onerror=n.onload=null,"load"===o.type)r();else{var d=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=d,i.request=l,n.parentNode.removeChild(n),a(i)}},n.href=t,document.head.appendChild(n)})(e,n,t,r)})),y={7578:0},_.f.miniCss=(e,t)=>{y[e]?t.push(y[e]):0!==y[e]&&{1312:1,3005:1}[e]&&t.push(y[e]=g(e).then((()=>{y[e]=0}),(t=>{throw delete y[e],t})))},(()=>{var e={7578:0};_.f.j=(t,r)=>{var a=_.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(3(01|35|72)3|(131|277|872)2|1730|2229|427|540|607|7736|7864)$/.test(t))e[t]=0;else{var n=new Promise(((r,n)=>a=e[t]=[r,n]));r.push(a[2]=n);var o=_.p+_.u(t),d=new Error;_.l(o,(r=>{if(_.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,a[1](d)}}),"chunk-"+t,t)}};var t=(t,r)=>{var a,n,[o,d,l]=r,i=0;if(o.some((t=>0!==e[t]))){for(a in d)_.o(d,a)&&(_.m[a]=d[a]);l&&l(_)}for(t&&t(r);i<o.length;i++)n=o[i],_.o(e,n)&&e[n]&&e[n][0](),e[n]=0},r=self.webpackChunkcontext_bar=self.webpackChunkcontext_bar||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),_.nc=void 0;var E=_(6326);context_bar=E})();
//# sourceMappingURL=remoteEntry.js.map