var folder_workbench;(()=>{"use strict";var e,t,a,n,r,o,l={4685:(e,t,a)=>{var n={"./FolderWorkbench":()=>Promise.all([a.e(364),a.e(605),a.e(157),a.e(4691),a.e(3251),a.e(2605),a.e(540),a.e(7736),a.e(1730),a.e(2229),a.e(6242),a.e(607),a.e(2932),a.e(8722),a.e(9461),a.e(3353),a.e(7376),a.e(916),a.e(814),a.e(8217),a.e(2465),a.e(3301),a.e(7380),a.e(1945),a.e(5650)]).then((()=>()=>a(25650)))},r=(e,t)=>(a.R=t,t=a.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),a.R=void 0,t),o=(e,t)=>{if(a.S){var n="default",r=a.S[n];if(r&&r!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return a.S[n]=e,a.I(n,t)}};a.d(t,{get:()=>r,init:()=>o}),function(){var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};e.SENTRY_RELEASES=e.SENTRY_RELEASES||{},e.SENTRY_RELEASES["vscode-extension-webview@postman-labs"]={id:"prod.2024-01-16.06-27"}}()}},s={};function d(e){var t=s[e];if(void 0!==t)return t.exports;var a=s[e]={id:e,loaded:!1,exports:{}};return l[e].call(a.exports,a,a.exports,d),a.loaded=!0,a.exports}d.m=l,d.c=s,d.amdO={},d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},d.d=(e,t)=>{for(var a in t)d.o(t,a)&&!d.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((t,a)=>(d.f[a](e,t),t)),[])),d.u=e=>e+"."+{75:"bcc865db14a3db26",157:"dfe636703a26682e",364:"70c92abfc6a11939",540:"ea79961e23b34c35",605:"70f31d28893df26d",607:"106de957a306e787",686:"a704c18677801695",721:"e6db0a8f208e0243",730:"2490ef64b6f82bf0",731:"0a06b5a18f4b72b5",766:"b1b45d47da11356a",770:"6342edf6b8f9fc85",814:"b00915a89eb25b95",897:"0b0f80b38eb8b595",916:"1f41d25ee200cab5",949:"9f45c692e84414b8",966:"6660255ea8ab3884",1013:"5bc0f9a3019e4320",1312:"522f2d1d2206b568",1327:"b48de865bfd5ef06",1344:"631d1214cd7975f2",1351:"cad80b8fd44966bb",1597:"8b8cf2bf6d6d685c",1685:"313c39bd308b26ad",1730:"eb3abbd4efdb652b",1945:"9d3620fc9c020973",2006:"811edc29eaed1a0c",2223:"d4c9c6ceb40820da",2229:"493e4c2ea83ae130",2367:"84daf3bb29823a8c",2465:"a565701b2f87c3bb",2543:"c6b1ce319a83a91b",2589:"ba00af420c41159e",2605:"72df4fe5d43264cf",2668:"d785073e0c4ec69b",2723:"4e1f195a64822602",2772:"16c1bd7c65735545",2784:"fd103c10b8c028e1",2932:"3a14562bc953dfa3",2940:"c7535729a99d6ffa",2955:"23d0e3b94738c0a6",2985:"ada0441609476132",3193:"25ce30f12a12b63f",3251:"e16a71022466db81",3301:"ebf3539222177cf3",3353:"b186bb5a7a4a57a3",3356:"914f6cdf925a843e",3640:"a8fbcbc35f9d283d",3723:"0b8b83407db5e370",3836:"81b4a2b2a0fbf4e2",3911:"64efab9f5ff07e30",3931:"5b651965f04273d2",3980:"cef25d954e756c96",4024:"0d401b5b8c2100b3",4211:"6cf5a236d21d5f5b",4422:"bf461cae0777aee9",4475:"e5ca0fb4ce72bffe",4489:"059933f350163884",4492:"792cc21e579628f8",4613:"d237359245f1d45a",4691:"c28bd6aba1832fbf",4721:"69a2c290adf85499",4803:"f93166d57ca3ddca",4925:"6c6687dca0d42688",5047:"b8b494b7f9bf9941",5077:"51844ee0bf4cb734",5132:"592b5a16092b9468",5191:"18f9e44d4d7c65a3",5241:"e96216764181b8e7",5348:"14bcb6264b9ce326",5362:"32672ca148fac18e",5397:"61e6a8f4305d4125",5493:"087b366bf64269c9",5534:"28d64c49b864b734",5624:"7084bb18fd210b92",5630:"4a0b07d142eb156b",5650:"a3edc8cb2c94317b",5729:"ba61c6960e99f808",6206:"92c4e5d5b5a7f537",6242:"2ae67f10ec66ff41",6277:"f9fbe44e0b75ac2b",6353:"66152ccc1cae859b",6371:"25043518000cfc8a",6445:"db5da02c9075af9f",6462:"ce069409267c454f",6591:"419084af18f2f289",6686:"c78be6bb3ab67d34",6764:"8061dcb5a9fb1c50",6776:"d6a5741b9f9b1fd0",7235:"801bea61d0478d3b",7376:"c309f3b127045c19",7380:"3d3aa355f5bc1f6c",7397:"486c6d486b064be3",7484:"b8c04264b154e00d",7494:"f9c57bd1f0cf882a",7569:"a927097ac1a3226f",7669:"cff2da73647aa56a",7736:"48d8a5504eb14094",7768:"9bdb2220dcff57e8",7864:"8d6620bb70cf6684",7867:"3fb6624326319ce5",7908:"53b58095626f295d",7973:"f925a348f9ccdbb8",8013:"6a820a76b0852ff5",8210:"70458e94f702f2e9",8217:"8239292c19a05cef",8283:"25168f9479a52a6b",8316:"3d7bc9d7738d7352",8381:"a54dc4db454159b4",8405:"32305517e127428b",8495:"55ec929967984ff9",8529:"f989287d095e4697",8537:"f4b2799755f43b9b",8609:"30ccdc15655cc9ae",8665:"802bed60d1b4d9c3",8722:"90e35da7de99b24f",8761:"40fc3c016fdac27e",8778:"2100da23d4787e07",8785:"68800118e997782e",8834:"2d81fbbf139ea648",8864:"7de538ef8205ff35",9065:"ccf4776d7f4eb44f",9205:"aa68114ee71ec08e",9239:"a8fad5faadecda13",9304:"615e9ee1b91d3cac",9461:"1ad3cab7bf2b7915",9543:"ae976821d0e904b4",9721:"c72e362258d85830",9792:"7c7f521847fb1ade",9907:"9cacc57feef68350"}[e]+".js",d.miniCssF=e=>e+"."+{1312:"64fdea4f37179a4a",1344:"64fdea4f37179a4a"}[e]+".css",d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="folder-workbench:",d.l=(a,n,r,o)=>{if(e[a])e[a].push(n);else{var l,s;if(void 0!==r)for(var f=document.getElementsByTagName("script"),i=0;i<f.length;i++){var c=f[i];if(c.getAttribute("src")==a||c.getAttribute("data-webpack")==t+r){l=c;break}}l||(s=!0,(l=document.createElement("script")).type="text/javascript",l.charset="utf-8",l.timeout=120,d.nc&&l.setAttribute("nonce",d.nc),l.setAttribute("data-webpack",t+r),l.src=a),e[a]=[n];var p=(t,n)=>{l.onerror=l.onload=null,clearTimeout(u);var r=e[a];if(delete e[a],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((e=>e(n))),t)return t(n)},u=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),a={},n={},d.f.remotes=(e,t)=>{d.o(a,e)&&a[e].forEach((e=>{var a=d.R;a||(a=[]);var r=n[e];if(!(a.indexOf(r)>=0)){if(a.push(r),r.p)return t.push(r.p);var o=t=>{t||(t=new Error("Container missing")),"string"==typeof t.message&&(t.message+='\nwhile loading "'+r[1]+'" from '+r[2]),d.m[e]=()=>{throw t},r.p=0},l=(e,a,n,l,s,d)=>{try{var f=e(a,n);if(!f||!f.then)return s(f,l,d);var i=f.then((e=>s(e,l)),o);if(!d)return i;t.push(r.p=i)}catch(e){o(e)}},s=(e,t,n)=>l(t.get,r[1],a,0,f,n),f=t=>{r.p=1,d.m[e]=e=>{e.exports=t()}};l(d,r[2],0,0,((e,t,a)=>e?l(d.I,r[0],0,e,s,a):o()),1)}}))},(()=>{d.S={};var e={},t={};d.I=(a,n)=>{n||(n=[]);var r=t[a];if(r||(r=t[a]={}),!(n.indexOf(r)>=0)){if(n.push(r),e[a])return e[a];d.o(d.S,a)||(d.S[a]={});var o=d.S[a],l="folder-workbench",s=(e,t,a,n)=>{var r=o[e]=o[e]||{},s=r[t];if(!s||!s.__postman_local_chunk__)if(window.__local_apps__&&window.__local_apps__.includes(l)){if(s&&s.loaded&&s.__postman_local_chunk__)return;r[t]={get:a,from:l,eager:!!n,__postman_local_chunk__:!0}}else(!s||!s.loaded&&(!n!=!s.eager?n:l>s.from))&&(r[t]={get:a,from:l,eager:!!n})},f=[];return"default"===a&&(s("@postman-app-next/analytics-service","1.0.0",(()=>Promise.all([d.e(7736),d.e(9907),d.e(721)]).then((()=>()=>d(40721))))),s("@postman-app-next/auth","1.0.0",(()=>d.e(2668).then((()=>()=>d(62668))))),s("@postman-app-next/authentication-methods","1.0.0",(()=>Promise.all([d.e(364),d.e(605),d.e(157),d.e(8529),d.e(3251),d.e(731),d.e(5362),d.e(540),d.e(7736),d.e(1730),d.e(2229),d.e(6242),d.e(8722),d.e(3353),d.e(916),d.e(8217),d.e(2465),d.e(2940),d.e(3301),d.e(9792),d.e(7380),d.e(949),d.e(2006),d.e(5534),d.e(7867)]).then((()=>()=>d(99951))))),s("@postman-app-next/collection-service","1.0.0",(()=>Promise.all([d.e(540),d.e(8722),d.e(9461),d.e(814),d.e(4925),d.e(5397),d.e(5493),d.e(4492)]).then((()=>()=>d(55493))))),s("@postman-app-next/data-fetching","1.0.0",(()=>Promise.all([d.e(540),d.e(7736),d.e(7864),d.e(8013)]).then((()=>()=>d(98013))))),s("@postman-app-next/desktop-communication-sdk","1.0.0",(()=>Promise.all([d.e(540),d.e(966)]).then((()=>()=>d(20966))))),s("@postman-app-next/dialogs","1.0.0",(()=>Promise.all([d.e(364),d.e(605),d.e(5348),d.e(540),d.e(7736),d.e(1730),d.e(2229),d.e(6242),d.e(8778)]).then((()=>()=>d(23911))))),s("@postman-app-next/environment-service","1.0.0",(()=>Promise.all([d.e(364),d.e(605),d.e(8529),d.e(5241),d.e(540),d.e(7736),d.e(1730),d.e(2229),d.e(6242),d.e(607),d.e(2932),d.e(8722),d.e(9461),d.e(3353),d.e(4925),d.e(2465),d.e(3301),d.e(9792),d.e(5397),d.e(2985),d.e(4721)]).then((()=>()=>d(52985))))),s("@postman-app-next/error-handling","1.0.0",(()=>Promise.all([d.e(364),d.e(157),d.e(540),d.e(7736),d.e(1730),d.e(2229),d.e(6242),d.e(607),d.e(2772),d.e(5624)]).then((()=>()=>d(730))))),s("@postman-app-next/kv-editor","1.0.0",(()=>Promise.all([d.e(364),d.e(605),d.e(157),d.e(4691),d.e(8529),d.e(3251),d.e(731),d.e(540),d.e(1730),d.e(2229),d.e(6242),d.e(2932),d.e(3723),d.e(2723),d.e(916),d.e(8217),d.e(949),d.e(7569),d.e(2006),d.e(8381)]).then((()=>()=>d(48381))))),s("@postman-app-next/navigation","1.0.0",(()=>Promise.all([d.e(364),d.e(605),d.e(4691),d.e(1013),d.e(540),d.e(7736),d.e(1730),d.e(2229),d.e(6242),d.e(607),d.e(8722),d.e(3723),d.e(8217),d.e(5191),d.e(3931),d.e(8283)]).then((()=>()=>d(73931))))),s("@postman-app-next/network","1.0.0",(()=>Promise.all([d.e(540),d.e(7736),d.e(7376),d.e(4475),d.e(9907),d.e(8405),d.e(4489)]).then((()=>()=>d(68405))))),s("@postman-app-next/performance-utils","1.0.0",(()=>Promise.all([d.e(540),d.e(8722),d.e(2465),d.e(1597)]).then((()=>()=>d(31597))))),s("@postman-app-next/runtime-agent","1.0.0",(()=>Promise.all([d.e(7973),d.e(9065),d.e(7736),d.e(2932),d.e(8722),d.e(2940),d.e(4475),d.e(5191),d.e(7235),d.e(4613)]).then((()=>()=>d(47235))))),s("@postman-app-next/storage","1.0.0",(()=>Promise.all([d.e(540),d.e(7736),d.e(9907),d.e(4422)]).then((()=>()=>d(44422))))),s("@postman-app-next/test-utils","1.0.0",(()=>Promise.all([d.e(364),d.e(6445),d.e(540),d.e(1730),d.e(2229),d.e(6242),d.e(607),d.e(9461),d.e(7376),d.e(814),d.e(1351)]).then((()=>()=>d(25630))))),s("@postman-app-next/ui","1.0.0",(()=>Promise.all([d.e(364),d.e(605),d.e(157),d.e(540),d.e(7736),d.e(1730),d.e(2229),d.e(6242),d.e(3723),d.e(3353),d.e(7569),d.e(2367),d.e(1312)]).then((()=>()=>d(287))))),s("@postman-app-next/variable-session","1.0.0",(()=>Promise.all([d.e(9792),d.e(7494)]).then((()=>()=>d(57494))))),s("@postman-app-next/variable-suggestions","1.0.0",(()=>Promise.all([d.e(364),d.e(605),d.e(8529),d.e(3640),d.e(540),d.e(1730),d.e(2229),d.e(6242),d.e(3723),d.e(2723),d.e(7380),d.e(949),d.e(9304),d.e(2589)]).then((()=>()=>d(59304))))),s("@postman-app-next/vscode-utils","1.0.0",(()=>Promise.all([d.e(540),d.e(607),d.e(8722),d.e(770)]).then((()=>()=>d(30770))))),s("@postman-app-next/workspace-service","1.0.0",(()=>Promise.all([d.e(540),d.e(7736),d.e(607),d.e(9461),d.e(3353),d.e(4925),d.e(6371)]).then((()=>()=>d(60766))))),s("@postman/aether-design-tokens","1.4.0",(()=>d.e(7908).then((()=>()=>d(86462))))),s("@postman/protobufjs","7.2.0-postman.2",(()=>d.e(7973).then((()=>()=>d(87973))))),s("@postman/script-examples","0.3.0",(()=>d.e(7484).then((()=>()=>d(47484))))),s("@sentry/react","7.91.0",(()=>Promise.all([d.e(3193),d.e(540)]).then((()=>()=>d(3193))))),s("@tanstack/react-query-devtools","4.36.1",(()=>d.e(2223).then((()=>()=>d(92223))))),s("@tanstack/react-query","4.36.1",(()=>Promise.all([d.e(8609),d.e(540)]).then((()=>()=>d(8609))))),s("@tippyjs/react","4.2.0",(()=>Promise.all([d.e(9721),d.e(540),d.e(1730)]).then((()=>()=>d(39721))))),s("buffer","6.0.3",(()=>d.e(8834).then((()=>()=>d(48834))))),s("clone-deep","4.0.1",(()=>Promise.all([d.e(2940),d.e(6206)]).then((()=>()=>d(96206))))),s("clsx","1.2.1",(()=>d.e(6277).then((()=>()=>d(6277))))),s("date-fns","2.30.0",(()=>Promise.all([d.e(8761),d.e(897)]).then((()=>()=>d(68761))))),s("eventemitter3","5.0.1",(()=>d.e(686).then((()=>()=>d(30686))))),s("immer","9.0.6",(()=>d.e(5729).then((()=>()=>d(15729))))),s("lexical","0.11.3",(()=>d.e(2543).then((()=>()=>d(22543))))),s("long","5.2.3",(()=>d.e(6764).then((()=>()=>d(16764))))),s("mobx-react-lite","3.4.3",(()=>Promise.all([d.e(540),d.e(1730),d.e(2932),d.e(6776)]).then((()=>()=>d(46776))))),s("mobx-react","7.6.0",(()=>Promise.all([d.e(8495),d.e(540),d.e(2932),d.e(916)]).then((()=>()=>d(18495))))),s("mobx","6.12.0",(()=>d.e(75).then((()=>()=>d(80075))))),s("postman-collection-transformer","4.1.8",(()=>d.e(8785).then((()=>()=>d(98785))))),s("prop-types","15.8.1",(()=>d.e(3980).then((()=>()=>d(13980))))),s("react-dom","16.14.0",(()=>Promise.all([d.e(8316),d.e(540)]).then((()=>()=>d(28316))))),s("react-draggable","4.4.6",(()=>Promise.all([d.e(1327),d.e(540),d.e(1730),d.e(2229),d.e(3723)]).then((()=>()=>d(41327))))),s("react-error-boundary","4.0.12",(()=>Promise.all([d.e(540),d.e(2955)]).then((()=>()=>d(32955))))),s("react-router-dom","6.11.2",(()=>Promise.all([d.e(6591),d.e(540)]).then((()=>()=>d(16591))))),s("react-window","1.8.10",(()=>Promise.all([d.e(4211),d.e(540),d.e(7397)]).then((()=>()=>d(54211))))),s("react","16.14.0",(()=>d.e(2784).then((()=>()=>d(2784))))),s("rxjs/operators","7.8.1",(()=>Promise.all([d.e(6686),d.e(4803)]).then((()=>()=>d(34803))))),s("rxjs","7.8.1",(()=>Promise.all([d.e(6686),d.e(8210)]).then((()=>()=>d(28210))))),s("shallowequal","1.1.0",(()=>d.e(8665).then((()=>()=>d(88665))))),s("socket.io-client","2.5.0",(()=>Promise.all([d.e(7768),d.e(2940),d.e(8864)]).then((()=>()=>d(17768))))),s("styled-components","5.3.6",(()=>Promise.all([d.e(3356),d.e(540),d.e(2723)]).then((()=>()=>d(63356))))),s("ua-parser-js","1.0.37",(()=>d.e(6353).then((()=>()=>d(46353))))),s("uuid","8.3.2",(()=>d.e(3836).then((()=>()=>d(39304))))),s("web-vitals","3.5.1",(()=>d.e(9543).then((()=>()=>d(59543)))))),e[a]=f.length?Promise.all(f).then((()=>e[a]=1)):1}}})(),(()=>{var e;d.g.importScripts&&(e=d.g.location+"");var t=d.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var n=a.length-1;n>-1&&!e;)e=a[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),d.p=e})(),(()=>{var e=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),a=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=a[1]?t(a[1]):[];return a[2]&&(n.length++,n.push.apply(n,t(a[2]))),a[3]&&(n.push([]),n.push.apply(n,t(a[3]))),n},t=e=>{var a=e[0],n="";if(1===e.length)return"*";if(a+.5){n+=0==a?">=":-1==a?"<":1==a?"^":2==a?"~":a>0?"=":"!=";for(var r=1,o=1;o<e.length;o++)r--,n+="u"==(typeof(s=e[o]))[0]?"-":(r>0?".":"")+(r=2,s);return n}var l=[];for(o=1;o<e.length;o++){var s=e[o];l.push(0===s?"not("+d()+")":1===s?"("+d()+" || "+d()+")":2===s?l.pop()+" "+l.pop():t(s))}return d();function d(){return l.pop().replace(/^\((.+)\)$/,"$1")}},a=(t,n)=>{if(0 in t){n=e(n);var r=t[0],o=r<0;o&&(r=-r-1);for(var l=0,s=1,d=!0;;s++,l++){var f,i,c=s<t.length?(typeof t[s])[0]:"";if(l>=n.length||"o"==(i=(typeof(f=n[l]))[0]))return!d||("u"==c?s>r&&!o:""==c!=o);if("u"==i){if(!d||"u"!=c)return!1}else if(d)if(c==i)if(s<=r){if(f!=t[s])return!1}else{if(o?f>t[s]:f<t[s])return!1;f!=t[s]&&(d=!1)}else if("s"!=c&&"n"!=c){if(o||s<=r)return!1;d=!1,s--}else{if(s<=r||i<c!=o)return!1;d=!1}else"s"!=c&&"n"!=c&&(d=!1,s--)}}var p=[],u=p.pop.bind(p);for(l=1;l<t.length;l++){var h=t[l];p.push(1==h?u()|u():2==h?u()&u():h?a(h,n):!u())}return!!u()},n=(t,a)=>{var n=t[a];return Object.keys(n).reduce(((t,a)=>!t||!n[t].loaded&&((t,a)=>{t=e(t),a=e(a);for(var n=0;;){if(n>=t.length)return n<a.length&&"u"!=(typeof a[n])[0];var r=t[n],o=(typeof r)[0];if(n>=a.length)return"u"==o;var l=a[n],s=(typeof l)[0];if(o!=s)return"o"==o&&"n"==s||"s"==s||"u"==o;if("o"!=o&&"u"!=o&&r!=l)return r<l;n++}})(t,a)?a:t),0)},r=(e,a,n,r)=>"Unsatisfied version "+n+" from "+(n&&e[a][n].from)+" of shared singleton module "+a+" (required "+t(r)+")",o=(e,t,o,l)=>{var d=n(e,o);if(!a(l,d))throw new Error(r(e,o,d,l));return s(e[o][d])},l=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},s=e=>(e.loaded=1,e.get()),f=e=>function(t,a,n,r){var o=d.I(t);return o&&o.then?o.then(e.bind(e,t,d.S[t],a,n,r)):e(t,d.S[t],a,n,r)},i=f(((e,t,a,n)=>(((e,t)=>{var a=d.S[e];if(!a||!d.o(a,t))throw new Error("Shared module "+t+" doesn't exist in shared scope "+e)})(e,a),o(t,0,a,n)))),c=f(((e,t,o,f,i)=>t&&d.o(t,o)?((e,t,o,d)=>{var f=n(e,o);return a(d,f)||l(r(e,o,f,d)),s(e[o][f])})(t,0,o,f):i())),p=f(((e,t,a,n,r)=>t&&d.o(t,a)?o(t,0,a,n):r())),u={},h={77736:()=>c("default","@postman-app-next/vscode-utils",[4,1,0,0],(()=>Promise.all([d.e(540),d.e(607),d.e(8722),d.e(770)]).then((()=>()=>d(30770))))),9907:()=>c("default","@postman-app-next/auth",[4,1,0,0],(()=>d.e(2668).then((()=>()=>d(62668))))),46468:()=>p("default","web-vitals",[1,3,0,4],(()=>d.e(9543).then((()=>()=>d(59543))))),54515:()=>p("default","ua-parser-js",[1,1,0,33],(()=>d.e(6353).then((()=>()=>d(46353))))),40540:()=>p("default","react",[4,16,14,0],(()=>d.e(2784).then((()=>()=>d(2784))))),21730:()=>p("default","react-dom",[4,16,14,0],(()=>d.e(8316).then((()=>()=>d(28316))))),72229:()=>p("default","prop-types",[1,15,8,1],(()=>d.e(3980).then((()=>()=>d(13980))))),65577:()=>p("default","@postman/aether-design-tokens",[1,1,2,0],(()=>d.e(6462).then((()=>()=>d(86462))))),15626:()=>p("default","@tippyjs/react",[1,4,2,0],(()=>d.e(9721).then((()=>()=>d(39721))))),25892:()=>p("default","styled-components",[4,5,3,6],(()=>Promise.all([d.e(3356),d.e(2723)]).then((()=>()=>d(63356))))),48722:()=>p("default","uuid",[1,8,3,2],(()=>d.e(3836).then((()=>()=>d(39304))))),43353:()=>c("default","@postman-app-next/navigation",[4,1,0,0],(()=>Promise.all([d.e(364),d.e(605),d.e(4691),d.e(1013),d.e(1730),d.e(2229),d.e(6242),d.e(607),d.e(8722),d.e(3723),d.e(8217),d.e(5191),d.e(3931)]).then((()=>()=>d(73931))))),50916:()=>p("default","mobx-react-lite",[1,3,4,3],(()=>Promise.all([d.e(1730),d.e(2932),d.e(4024)]).then((()=>()=>d(46776))))),78217:()=>c("default","@postman-app-next/dialogs",[4,1,0,0],(()=>Promise.all([d.e(5348),d.e(7736),d.e(3911)]).then((()=>()=>d(23911))))),92465:()=>c("default","@postman-app-next/analytics-service",[4,1,0,0],(()=>Promise.all([d.e(7736),d.e(9907),d.e(721)]).then((()=>()=>d(40721))))),32940:()=>p("default","buffer",[1,6,0,3],(()=>d.e(8834).then((()=>()=>d(48834))))),93301:()=>c("default","@postman-app-next/workspace-service",[4,1,0,0],(()=>Promise.all([d.e(607),d.e(9461),d.e(4925),d.e(766)]).then((()=>()=>d(60766))))),29792:()=>c("default","@postman-app-next/storage",[4,1,0,0],(()=>Promise.all([d.e(540),d.e(7736),d.e(9907),d.e(4422)]).then((()=>()=>d(44422))))),47380:()=>c("default","@postman-app-next/environment-service",[4,1,0,0],(()=>Promise.all([d.e(8529),d.e(5241),d.e(7736),d.e(607),d.e(2932),d.e(8722),d.e(9461),d.e(3353),d.e(4925),d.e(2465),d.e(3301),d.e(9792),d.e(5397),d.e(2985)]).then((()=>()=>d(52985))))),60949:()=>p("default","react-window",[1,1,8,8],(()=>d.e(4211).then((()=>()=>d(54211))))),72006:()=>c("default","@postman-app-next/variable-suggestions",[4,1,0,0],(()=>Promise.all([d.e(3640),d.e(3723),d.e(2723),d.e(7380),d.e(9304)]).then((()=>()=>d(59304))))),6790:()=>c("default","@postman-app-next/runtime-agent",[4,1,0,0],(()=>Promise.all([d.e(7973),d.e(9065),d.e(2932),d.e(4475),d.e(5191),d.e(7235)]).then((()=>()=>d(47235))))),24926:()=>p("default","date-fns",[1,2,29,3],(()=>d.e(8761).then((()=>()=>d(68761))))),32018:()=>p("default","clone-deep",[1,4,0,1],(()=>d.e(5132).then((()=>()=>d(96206))))),49623:()=>i("default","buffer",[1,6,0,3]),97082:()=>c("default","@postman-app-next/kv-editor",[4,1,0,0],(()=>Promise.all([d.e(4691),d.e(2932),d.e(3723),d.e(2723),d.e(7569),d.e(8381)]).then((()=>()=>d(48381))))),69461:()=>c("default","@postman-app-next/data-fetching",[4,1,0,0],(()=>Promise.all([d.e(7736),d.e(7864),d.e(1685)]).then((()=>()=>d(98013))))),80814:()=>c("default","@postman-app-next/ui",[4,1,0,0],(()=>Promise.all([d.e(364),d.e(605),d.e(157),d.e(7736),d.e(1730),d.e(2229),d.e(6242),d.e(3723),d.e(3353),d.e(7569),d.e(2367),d.e(1344)]).then((()=>()=>d(287))))),34925:()=>c("default","@postman-app-next/network",[4,1,0,0],(()=>Promise.all([d.e(7736),d.e(7376),d.e(4475),d.e(9907),d.e(8405)]).then((()=>()=>d(68405))))),55397:()=>c("default","@postman-app-next/variable-session",[4,1,0,0],(()=>Promise.all([d.e(9792),d.e(7494)]).then((()=>()=>d(57494))))),54479:()=>p("default","immer",[4,9,0,6],(()=>d.e(5729).then((()=>()=>d(15729))))),22600:()=>p("default","@tanstack/react-query-devtools",[1,4,29,1],(()=>d.e(2223).then((()=>()=>d(92223))))),14527:()=>p("default","@tanstack/react-query",[1,4,29,1],(()=>d.e(8609).then((()=>()=>d(8609))))),60607:()=>p("default","react-router-dom",[4,6,11,2],(()=>d.e(6591).then((()=>()=>d(16591))))),62932:()=>p("default","mobx",[1,6,6,2],(()=>d.e(75).then((()=>()=>d(80075))))),89886:()=>c("default","@postman-app-next/performance-utils",[4,1,0,0],(()=>d.e(9239).then((()=>()=>d(31597))))),25304:()=>p("default","@sentry/react",[1,7,49,0],(()=>d.e(3193).then((()=>()=>d(3193))))),20609:()=>p("default","react-error-boundary",[1,4,0,4],(()=>d.e(8537).then((()=>()=>d(32955))))),53723:()=>p("default","clsx",[1,1,2,1],(()=>d.e(6277).then((()=>()=>d(6277))))),22723:()=>p("default","shallowequal",[1,1,1,0],(()=>d.e(8665).then((()=>()=>d(88665))))),57569:()=>p("default","react-draggable",[1,4,4,5],(()=>d.e(1327).then((()=>()=>d(41327))))),85191:()=>c("default","@postman-app-next/desktop-communication-sdk",[4,1,0,0],(()=>Promise.all([d.e(540),d.e(966)]).then((()=>()=>d(20966))))),97376:()=>c("default","@postman-app-next/error-handling",[4,1,0,0],(()=>Promise.all([d.e(364),d.e(157),d.e(7736),d.e(1730),d.e(2229),d.e(6242),d.e(607),d.e(2772),d.e(730)]).then((()=>()=>d(730))))),94475:()=>p("default","eventemitter3",[1,5,0,0],(()=>d.e(686).then((()=>()=>d(30686))))),18160:()=>p("default","rxjs/operators",[1,7,8,1],(()=>Promise.all([d.e(6686),d.e(4803)]).then((()=>()=>d(34803))))),61801:()=>p("default","socket.io-client",[1,2,1,1],(()=>Promise.all([d.e(7768),d.e(2940),d.e(8864)]).then((()=>()=>d(17768))))),94021:()=>p("default","rxjs",[1,7,8,1],(()=>Promise.all([d.e(6686),d.e(8210)]).then((()=>()=>d(28210))))),10541:()=>p("default","long",[1,5,2,1],(()=>d.e(6764).then((()=>()=>d(16764))))),64354:()=>p("default","@postman/protobufjs",[1,7,2,0,,"postman",2],(()=>()=>d(87973))),98403:()=>p("default","postman-collection-transformer",[1,4,1,6],(()=>d.e(8785).then((()=>()=>d(98785))))),8851:()=>p("default","mobx-react",[1,7,6,0],(()=>Promise.all([d.e(8495),d.e(2932),d.e(916)]).then((()=>()=>d(18495))))),61531:()=>c("default","@postman-app-next/test-utils",[4,1,0,0],(()=>Promise.all([d.e(6445),d.e(607),d.e(9461),d.e(7376),d.e(814),d.e(5630)]).then((()=>()=>d(25630))))),64490:()=>c("default","@postman-app-next/collection-service",[4,1,0,0],(()=>Promise.all([d.e(4925),d.e(5397),d.e(5493)]).then((()=>()=>d(55493))))),66893:()=>p("default","@postman/script-examples",[2,0,3,0],(()=>d.e(7484).then((()=>()=>d(47484))))),86681:()=>c("default","@postman-app-next/authentication-methods",[4,1,0,0],(()=>Promise.all([d.e(8529),d.e(731),d.e(5362),d.e(2940),d.e(9792),d.e(949),d.e(2006),d.e(5534)]).then((()=>()=>d(99951))))),11271:()=>p("default","lexical",[2,0,11,1],(()=>d.e(2543).then((()=>()=>d(22543)))))},b={540:[40540],607:[60607],721:[46468,54515],814:[80814],916:[50916],949:[60949],1730:[21730],1945:[64490,66893,86681],2006:[72006],2229:[72229],2367:[8851],2465:[92465],2723:[22723],2772:[25304,20609],2932:[62932],2940:[32940],2985:[89886],3301:[93301],3353:[43353],3723:[53723],4475:[94475],4925:[34925],5191:[85191],5397:[55397],5493:[54479],5534:[6790,24926,32018,49623,97082],6242:[65577,15626,25892],7235:[10541,64354,98403],7376:[97376],7380:[47380],7569:[57569],7736:[77736],7864:[22600,14527],8217:[78217],8405:[18160,61801,94021],8722:[48722],9205:[11271],9304:[61531],9461:[69461],9792:[29792],9907:[9907]};d.f.consumes=(e,t)=>{d.o(b,e)&&b[e].forEach((e=>{if(d.o(u,e))return t.push(u[e]);var a=t=>{u[e]=0,d.m[e]=a=>{delete d.c[e],a.exports=t()}},n=t=>{delete u[e],d.m[e]=a=>{throw delete d.c[e],t}};try{var r=h[e]();r.then?t.push(u[e]=r.then(a).catch(n)):a(r)}catch(e){n(e)}}))}})(),r=e=>new Promise(((t,a)=>{var n=d.miniCssF(e),r=d.p+n;if(((e,t)=>{for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var r=(l=a[n]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(r===e||r===t))return l}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){var l;if((r=(l=o[n]).getAttribute("data-href"))===e||r===t)return l}})(n,r))return t();((e,t,a,n)=>{var r=document.createElement("link");r.rel="stylesheet",r.type="text/css",r.onerror=r.onload=o=>{if(r.onerror=r.onload=null,"load"===o.type)a();else{var l=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=l,d.request=s,r.parentNode.removeChild(r),n(d)}},r.href=t,document.head.appendChild(r)})(e,r,t,a)})),o={1271:0},d.f.miniCss=(e,t)=>{o[e]?t.push(o[e]):0!==o[e]&&{1312:1,1344:1}[e]&&t.push(o[e]=r(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))},(()=>{var e={1271:0};d.f.j=(t,a)=>{var n=d.o(e,t)?e[t]:void 0;if(0!==n)if(n)a.push(n[2]);else if(/^(1(312|344|730)|2(006|229|465|723|772|932|940)|3(301|353|723)|5(191|397|40)|7(376|380|569|736|864)|8(14|217|722)|9(16|461|49|792|907)|4475|4925|607|6242)$/.test(t))e[t]=0;else{var r=new Promise(((a,r)=>n=e[t]=[a,r]));a.push(n[2]=r);var o=d.p+d.u(t),l=new Error;d.l(o,(a=>{if(d.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var r=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}}),"chunk-"+t,t)}};var t=(t,a)=>{var n,r,[o,l,s]=a,f=0;if(o.some((t=>0!==e[t]))){for(n in l)d.o(l,n)&&(d.m[n]=l[n]);s&&s(d)}for(t&&t(a);f<o.length;f++)r=o[f],d.o(e,r)&&e[r]&&e[r][0](),e[r]=0},a=self.webpackChunkfolder_workbench=self.webpackChunkfolder_workbench||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),d.nc=void 0;var f=d(4685);folder_workbench=f})();
//# sourceMappingURL=remoteEntry.js.map