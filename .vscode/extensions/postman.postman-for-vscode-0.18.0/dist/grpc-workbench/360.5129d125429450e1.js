"use strict";(self.webpackChunkgrpc_workbench=self.webpackChunkgrpc_workbench||[]).push([[360],{10360:function(e,t){!function(e){var r=function(e,t){const r=this;switch("undefined"!=typeof Buffer&&(e=Buffer.isBuffer(e)&&e||"string"==typeof e&&Buffer.from(e)||e&&e.constructor===Array&&Buffer.from(e)||Buffer.alloc(0)),e=e||[],t=t||{},r.buffer=e,r.bytes_per_line=parseInt(t.width)||16,r.numbering="none"==t.numbering?"none":"hex_bytes",r.bytes_per_group=2,t.format){case"none":r.bytes_per_group=0;break;case"twos":r.bytes_per_group=1;break;case"eights":r.bytes_per_group=4;break;case"sixteens":r.bytes_per_group=8}switch(r.littleEndian=t.littleEndian||!1,r.radix=t.radix||16,r.caps="upper"==t.caps?"upper":"lower",r.annotate="none"==t.annotate?"none":"ascii",r.prefix=t.prefix||"",r.indent=t.indent||0,r.html=t.html||!1,r.offset=t.offset||0,r.length=t.length||-1,r.extendedChs=t.extendedChs||!1,r.display_offset=t.display_offset||0,r.offset&&r.offset<r.buffer.length&&(r.buffer=r.buffer.slice(r.offset)),-1!==r.length&&r.length<=r.buffer.length&&(r.buffer=r.buffer.slice(0,r.length)),r.prefix=(r.html?"&nbsp;":" ").repeat(r.indent)+r.prefix,r.hex_line_length=s(r.bytes_per_group,r.radix)*r.bytes_per_line/Math.max(r.bytes_per_group,1),r.bytes_per_group){case 8:case 4:case 2:r.hex_line_length+=Math.floor(r.bytes_per_line/r.bytes_per_group);break;case 1:r.hex_line_length+=r.bytes_per_line+3;break;case 0:r.hex_line_length+=2}r.bytes_per_group=Math.min(r.bytes_per_group,r.bytes_per_line),this.toString=function(){var e="",t=r.offset+r.display_offset,s=!1;r.html&&(e+="<div class='hexy'>\n");for(var i=0;i<r.buffer.length;i+=r.bytes_per_line){const c=Math.min(i+r.bytes_per_line,r.buffer.length),l=r.buffer.slice(i,c);if(r.html&&(e+="<div class='"+a(t,8,16)+(s?"  odd":" even")+"'>",s=!s),e+=r.prefix,"hex_bytes"===r.numbering&&(e+=a(t,8,16)+": "),e+=n(l,r.bytes_per_line,r.bytes_per_group,r.radix,r.littleEndian),"ascii"===r.annotate){var o="";switch(l.constructor){case Array:o=String.fromCharCode.apply(r,l);break;case Uint8Array:l.forEach((e=>o+=String.fromCharCode(e)));break;default:o=l.toString("latin1")}e+=" "+(r.html?p(o):f(o))}e+=r.html?"</div>\n":"\n",t+=r.bytes_per_line}return r.html&&(e+="</div>\n"),e};var n=function(e,t,n,a,o){var c="";const f=0==n?"":" ",p=s(n,a),l=(t-e.length)*(0==n?p:(p+1)/n);0==n&&(n=1);const u=o?n-1:0,h=o?-1:n,b=o?-1:1;for(var g=0;g<e.length/n;++g){for(var _=n<4?0:BigInt(0),d=u;d!=h;d+=b){const t=g*n+d;if(t>=e.length)break;_=n<4?256*_+(255&(e.constructor==String?e.codePointAt(t):e[t])):256n*BigInt(_)+BigInt(255&(e.constructor==String?e.codePointAt(t):e[t]))}const t=_.toString(a);for(var y=0;y<p-t.length;y++)c+="0";c+=t,c+=f,"upper"===r.caps&&(c=c.toUpperCase())}return e.length<t&&(c+=(r.html?"&nbsp;":" ").repeat(l)),i(c,r.hex_line_length)},a=function(e,t,r){const n=e.toString(r);return"0".repeat(t-n.length)+n},i=function(e,t){const n=t-e.length-1;return n>0&&(e+=(r.html?"&nbsp;":" ").repeat(n)),e};const o=/[^\x20-\x7f]/g,c=/[\x00-\x1f]/g;var f=function(e){return e.replace(r.extendedChs?c:o,".")},p=function(e){return e=(e=(e=e.replace(/&/g,"&amp;")).replace(/</g,"&lt;")).replace(/>/g,"&gt;"),r.extendedChs?(e=(e=e.replace(/\'/g,"&apos;")).replace(/\"/g,"&quot;")).replace(o,(function(e){return"&#x"+(e=e.codePointAt(0)).toString(16)+";"})):e.replace(o,".")}};r.VERSION="0.3.4";var n,s=function(e,t){var r=2;switch(0==e&&(e=1),t){case 2:r=8*e;break;case 8:switch(e){case 1:r=3;break;case 2:r=6;break;case 4:r=11;break;case 8:r=22}break;case 10:switch(e){case 1:r=3;break;case 2:r=6;break;case 4:r=10;break;case 8:r=20}break;case 16:r=2*e}return r};(n=t).hexy=function(e,t){return new r(e,t).toString()},n.Hexy=r,n.maxnumberlen=s}()}}]);
//# sourceMappingURL=360.5129d125429450e1.js.map