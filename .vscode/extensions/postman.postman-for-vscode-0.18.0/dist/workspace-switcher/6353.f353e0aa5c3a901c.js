(self.webpackChunkworkspace_switcher=self.webpackChunkworkspace_switcher||[]).push([[6353],{6353:function(i,e,o){var a;!function(r,n){"use strict";var t="function",s="undefined",b="object",w="string",l="major",d="model",c="name",u="type",p="vendor",m="version",h="architecture",f="console",v="mobile",g="tablet",k="smarttv",x="wearable",y="embedded",_="Amazon",T="Apple",S="ASUS",q="BlackBerry",z="Browser",N="Chrome",A="Firefox",C="Google",E="Huawei",O="LG",U="Microsoft",j="Motorola",M="Opera",P="Samsung",R="Sharp",B="Sony",V="Xiaomi",D="Zebra",I="Facebook",L="Chromium OS",F="Mac OS",G=function(i){for(var e={},o=0;o<i.length;o++)e[i[o].toUpperCase()]=i[o];return e},H=function(i,e){return typeof i===w&&-1!==Z(e).indexOf(Z(i))},Z=function(i){return i.toLowerCase()},W=function(i,e){if(typeof i===w)return i=i.replace(/^\s\s*/,""),typeof e===s?i:i.substring(0,500)},$=function(i,e){for(var o,a,r,s,w,l,d=0;d<e.length&&!w;){var c=e[d],u=e[d+1];for(o=a=0;o<c.length&&!w&&c[o];)if(w=c[o++].exec(i))for(r=0;r<u.length;r++)l=w[++a],typeof(s=u[r])===b&&s.length>0?2===s.length?typeof s[1]==t?this[s[0]]=s[1].call(this,l):this[s[0]]=s[1]:3===s.length?typeof s[1]!==t||s[1].exec&&s[1].test?this[s[0]]=l?l.replace(s[1],s[2]):n:this[s[0]]=l?s[1].call(this,l,s[2]):n:4===s.length&&(this[s[0]]=l?s[3].call(this,l.replace(s[1],s[2])):n):this[s]=l||n;d+=2}},X=function(i,e){for(var o in e)if(typeof e[o]===b&&e[o].length>0){for(var a=0;a<e[o].length;a++)if(H(e[o][a],i))return"?"===o?n:o}else if(H(e[o],i))return"?"===o?n:o;return i},K={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},Q={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[m,[c,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[m,[c,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[c,m],[/opios[\/ ]+([\w\.]+)/i],[m,[c,M+" Mini"]],[/\bopr\/([\w\.]+)/i],[m,[c,M]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[m,[c,"Baidu"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[c,m],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[m,[c,"UC"+z]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[m,[c,"WeChat"]],[/konqueror\/([\w\.]+)/i],[m,[c,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[m,[c,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[m,[c,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[m,[c,"Smart Lenovo "+z]],[/(avast|avg)\/([\w\.]+)/i],[[c,/(.+)/,"$1 Secure "+z],m],[/\bfocus\/([\w\.]+)/i],[m,[c,A+" Focus"]],[/\bopt\/([\w\.]+)/i],[m,[c,M+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[m,[c,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[m,[c,"Dolphin"]],[/coast\/([\w\.]+)/i],[m,[c,M+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[m,[c,"MIUI "+z]],[/fxios\/([-\w\.]+)/i],[m,[c,A]],[/\bqihu|(qi?ho?o?|360)browser/i],[[c,"360 "+z]],[/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],[[c,/(.+)/,"$1 "+z],m],[/samsungbrowser\/([\w\.]+)/i],[m,[c,P+" Internet"]],[/(comodo_dragon)\/([\w\.]+)/i],[[c,/_/g," "],m],[/metasr[\/ ]?([\d\.]+)/i],[m,[c,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[c,"Sogou Mobile"],m],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],[c,m],[/(lbbrowser)/i,/\[(linkedin)app\]/i],[c],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[c,I],m],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[c,m],[/\bgsa\/([\w\.]+) .*safari\//i],[m,[c,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[m,[c,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[m,[c,N+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[c,N+" WebView"],m],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[m,[c,"Android "+z]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[c,m],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[m,[c,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[m,c],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[c,[m,X,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[c,m],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[c,"Netscape"],m],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[m,[c,A+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[c,m],[/(cobalt)\/([\w\.]+)/i],[c,[m,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[h,"amd64"]],[/(ia32(?=;))/i],[[h,Z]],[/((?:i[346]|x)86)[;\)]/i],[[h,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[h,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[h,"armhf"]],[/windows (ce|mobile); ppc;/i],[[h,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[h,/ower/,"",Z]],[/(sun4\w)[;\)]/i],[[h,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[h,Z]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[d,[p,P],[u,g]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[d,[p,P],[u,v]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[d,[p,T],[u,v]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[d,[p,T],[u,g]],[/(macintosh);/i],[d,[p,T]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[d,[p,R],[u,v]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[d,[p,E],[u,g]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[d,[p,E],[u,v]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[d,/_/g," "],[p,V],[u,v]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[d,/_/g," "],[p,V],[u,g]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[d,[p,"OPPO"],[u,v]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[d,[p,"Vivo"],[u,v]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[d,[p,"Realme"],[u,v]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[d,[p,j],[u,v]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[d,[p,j],[u,g]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[d,[p,O],[u,g]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[d,[p,O],[u,v]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[d,[p,"Lenovo"],[u,g]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[d,/_/g," "],[p,"Nokia"],[u,v]],[/(pixel c)\b/i],[d,[p,C],[u,g]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[d,[p,C],[u,v]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[d,[p,B],[u,v]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[d,"Xperia Tablet"],[p,B],[u,g]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[d,[p,"OnePlus"],[u,v]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[d,[p,_],[u,g]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[d,/(.+)/g,"Fire Phone $1"],[p,_],[u,v]],[/(playbook);[-\w\),; ]+(rim)/i],[d,p,[u,g]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[d,[p,q],[u,v]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[d,[p,S],[u,g]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[d,[p,S],[u,v]],[/(nexus 9)/i],[d,[p,"HTC"],[u,g]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[p,[d,/_/g," "],[u,v]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[d,[p,"Acer"],[u,g]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[d,[p,"Meizu"],[u,v]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[d,[p,"Ulefone"],[u,v]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[p,d,[u,v]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[p,d,[u,g]],[/(surface duo)/i],[d,[p,U],[u,g]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[d,[p,"Fairphone"],[u,v]],[/(u304aa)/i],[d,[p,"AT&T"],[u,v]],[/\bsie-(\w*)/i],[d,[p,"Siemens"],[u,v]],[/\b(rct\w+) b/i],[d,[p,"RCA"],[u,g]],[/\b(venue[\d ]{2,7}) b/i],[d,[p,"Dell"],[u,g]],[/\b(q(?:mv|ta)\w+) b/i],[d,[p,"Verizon"],[u,g]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[d,[p,"Barnes & Noble"],[u,g]],[/\b(tm\d{3}\w+) b/i],[d,[p,"NuVision"],[u,g]],[/\b(k88) b/i],[d,[p,"ZTE"],[u,g]],[/\b(nx\d{3}j) b/i],[d,[p,"ZTE"],[u,v]],[/\b(gen\d{3}) b.+49h/i],[d,[p,"Swiss"],[u,v]],[/\b(zur\d{3}) b/i],[d,[p,"Swiss"],[u,g]],[/\b((zeki)?tb.*\b) b/i],[d,[p,"Zeki"],[u,g]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[p,"Dragon Touch"],d,[u,g]],[/\b(ns-?\w{0,9}) b/i],[d,[p,"Insignia"],[u,g]],[/\b((nxa|next)-?\w{0,9}) b/i],[d,[p,"NextBook"],[u,g]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[p,"Voice"],d,[u,v]],[/\b(lvtel\-)?(v1[12]) b/i],[[p,"LvTel"],d,[u,v]],[/\b(ph-1) /i],[d,[p,"Essential"],[u,v]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[d,[p,"Envizen"],[u,g]],[/\b(trio[-\w\. ]+) b/i],[d,[p,"MachSpeed"],[u,g]],[/\btu_(1491) b/i],[d,[p,"Rotor"],[u,g]],[/(shield[\w ]+) b/i],[d,[p,"Nvidia"],[u,g]],[/(sprint) (\w+)/i],[p,d,[u,v]],[/(kin\.[onetw]{3})/i],[[d,/\./g," "],[p,U],[u,v]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[d,[p,D],[u,g]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[d,[p,D],[u,v]],[/smart-tv.+(samsung)/i],[p,[u,k]],[/hbbtv.+maple;(\d+)/i],[[d,/^/,"SmartTV"],[p,P],[u,k]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[p,O],[u,k]],[/(apple) ?tv/i],[p,[d,T+" TV"],[u,k]],[/crkey/i],[[d,N+"cast"],[p,C],[u,k]],[/droid.+aft(\w+)( bui|\))/i],[d,[p,_],[u,k]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[d,[p,R],[u,k]],[/(bravia[\w ]+)( bui|\))/i],[d,[p,B],[u,k]],[/(mitv-\w{5}) bui/i],[d,[p,V],[u,k]],[/Hbbtv.*(technisat) (.*);/i],[p,d,[u,k]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[p,W],[d,W],[u,k]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[u,k]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[p,d,[u,f]],[/droid.+; (shield) bui/i],[d,[p,"Nvidia"],[u,f]],[/(playstation [345portablevi]+)/i],[d,[p,B],[u,f]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[d,[p,U],[u,f]],[/((pebble))app/i],[p,d,[u,x]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[d,[p,T],[u,x]],[/droid.+; (glass) \d/i],[d,[p,C],[u,x]],[/droid.+; (wt63?0{2,3})\)/i],[d,[p,D],[u,x]],[/(quest( 2| pro)?)/i],[d,[p,I],[u,x]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[p,[u,y]],[/(aeobc)\b/i],[d,[p,_],[u,y]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[d,[u,v]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[d,[u,g]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[u,g]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[u,v]],[/(android[-\w\. ]{0,9});.+buil/i],[d,[p,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[m,[c,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[m,[c,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[c,m],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[m,c]],os:[[/microsoft (windows) (vista|xp)/i],[c,m],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[c,[m,X,K]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[m,X,K],[c,"Windows"]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[m,/_/g,"."],[c,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[c,F],[m,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[m,c],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[c,m],[/\(bb(10);/i],[m,[c,q]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[m,[c,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[m,[c,A+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[m,[c,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[m,[c,"watchOS"]],[/crkey\/([\d\.]+)/i],[m,[c,N+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[c,L],m],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[c,m],[/(sunos) ?([\w\.\d]*)/i],[[c,"Solaris"],m],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[c,m]]},Y=function(i,e){if(typeof i===b&&(e=i,i=n),!(this instanceof Y))return new Y(i,e).getResult();var o=typeof r!==s&&r.navigator?r.navigator:n,a=i||(o&&o.userAgent?o.userAgent:""),f=o&&o.userAgentData?o.userAgentData:n,k=e?function(i,e){var o={};for(var a in i)e[a]&&e[a].length%2==0?o[a]=e[a].concat(i[a]):o[a]=i[a];return o}(Q,e):Q,x=o&&o.userAgent==a;return this.getBrowser=function(){var i,e={};return e[c]=n,e[m]=n,$.call(e,a,k.browser),e[l]=typeof(i=e[m])===w?i.replace(/[^\d\.]/g,"").split(".")[0]:n,x&&o&&o.brave&&typeof o.brave.isBrave==t&&(e[c]="Brave"),e},this.getCPU=function(){var i={};return i[h]=n,$.call(i,a,k.cpu),i},this.getDevice=function(){var i={};return i[p]=n,i[d]=n,i[u]=n,$.call(i,a,k.device),x&&!i[u]&&f&&f.mobile&&(i[u]=v),x&&"Macintosh"==i[d]&&o&&typeof o.standalone!==s&&o.maxTouchPoints&&o.maxTouchPoints>2&&(i[d]="iPad",i[u]=g),i},this.getEngine=function(){var i={};return i[c]=n,i[m]=n,$.call(i,a,k.engine),i},this.getOS=function(){var i={};return i[c]=n,i[m]=n,$.call(i,a,k.os),x&&!i[c]&&f&&"Unknown"!=f.platform&&(i[c]=f.platform.replace(/chrome os/i,L).replace(/macos/i,F)),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return a},this.setUA=function(i){return a=typeof i===w&&i.length>500?W(i,500):i,this},this.setUA(a),this};Y.VERSION="1.0.37",Y.BROWSER=G([c,m,l]),Y.CPU=G([h]),Y.DEVICE=G([d,p,u,f,v,k,g,x,y]),Y.ENGINE=Y.OS=G([c,m]),typeof e!==s?(i.exports&&(e=i.exports=Y),e.UAParser=Y):o.amdO?(a=function(){return Y}.call(e,o,e,i))===n||(i.exports=a):typeof r!==s&&(r.UAParser=Y);var J=typeof r!==s&&(r.jQuery||r.Zepto);if(J&&!J.ua){var ii=new Y;J.ua=ii.getResult(),J.ua.get=function(){return ii.getUA()},J.ua.set=function(i){ii.setUA(i);var e=ii.getResult();for(var o in e)J.ua[o]=e[o]}}}("object"==typeof window?window:this)}}]);
//# sourceMappingURL=6353.f353e0aa5c3a901c.js.map