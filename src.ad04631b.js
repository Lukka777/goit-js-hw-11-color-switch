parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
const t=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],e=(t,e)=>Math.floor(Math.random()*(e-t+1)+t),o=document.querySelector("[data-action='start']"),c=document.querySelector("[data-action='stop']");let a;const d=()=>{const o=e(0,t.length-1),c=t[o];document.body.style=`background-color:${c}`,a=setTimeout(d,1e3)};o.addEventListener("click",()=>{a=setTimeout(d,1e3),o.disabled=!0}),c.addEventListener("click",()=>{clearTimeout(a),o.disabled=!1});
},{}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-color-switch/src.ad04631b.js.map