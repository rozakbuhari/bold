(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"+Bi/":function(n,t,e){var r=e("26mQ");r(r.S+r.F*!e("zJRt"),"Object",{defineProperty:e("6s2L").f})},"0PN5":function(n,t,e){"use strict";e.r(t);var r=e("Rbzu"),o=e("hDBU"),u=e("mXGw"),c=e.n(u),i=e("c2a7");t.default=function(){var n=Object(u.useState)(),t=Object(o.default)(n,2),e=t[0],a=t[1];return c.a.createElement(i.l,{text:"Click or drop files here to upload",file:e,onDropAccepted:function(n){a({selectedFile:n[0],uploading:!0,progress:0});var t=setInterval(function(){a(function(n){return n&&n.progress>=100?(clearInterval(t),Object(r.a)({},n,{uploading:!1,progress:100})):Object(r.a)({},n,{progress:n.progress+10*Math.random()})})},100)}})}},AjC8:function(n,t,e){e("InUF");var r=e("5e9t").Object;n.exports=function(n,t){return r.getOwnPropertyDescriptor(n,t)}},Hdyu:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/file-uploader/FileUploader.demo",function(){var n=e("0PN5");return{page:n.default||n}}])},InUF:function(n,t,e){var r=e("dleS"),o=e("kYzV").f;e("PHgy")("getOwnPropertyDescriptor",function(){return function(n,t){return o(r(n),t)}})},Rbzu:function(n,t,e){"use strict";e.d(t,"a",function(){return s});var r=e("tvLF"),o=e.n(r),u=e("s4hn"),c=e.n(u),i=e("1qCV"),a=e.n(i),f=e("azxR");function s(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=a()(e);"function"===typeof c.a&&(r=r.concat(c()(e).filter(function(n){return o()(e,n).enumerable}))),r.forEach(function(t){Object(f.a)(n,t,e[t])})}return n}},azxR:function(n,t,e){"use strict";e.d(t,"a",function(){return u});var r=e("hHgk"),o=e.n(r);function u(n,t,e){return t in n?o()(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}},gAdt:function(n,t,e){e("+Bi/");var r=e("5e9t").Object;n.exports=function(n,t,e){return r.defineProperty(n,t,e)}},hHgk:function(n,t,e){n.exports=e("gAdt")},tvLF:function(n,t,e){n.exports=e("AjC8")}},[["Hdyu",1,0]]]);