/*! (c) Andrea Giammarchi - ISC */
var neverland=function(e){"use strict";var t={};t.CustomEvent="function"==typeof CustomEvent?CustomEvent:function(e){return t.prototype=new t("").constructor.prototype,t;function t(e,t){t||(t={});var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail),n}}();var n=t.CustomEvent,r={};try{r.WeakSet=WeakSet}catch(e){!function(e){var t=new e,n=a.prototype;function a(n){t.set(this,new e),n&&n.forEach(this.add,this)}n.add=function(e){return t.get(this).set(e,1),this},n.delete=function(e){return t.get(this).delete(e)},n.has=function(e){return t.get(this).has(e)},r.WeakSet=a}(WeakMap)}var a=r.WeakSet,u=null,o=[],i=[],c=function e(t,n){return typeof t==typeof e?t.apply(null,n):t},l=function(e,t){return e.length!==t.length||e.some(m,t)},s=function(e){return function(t){var n={i:0,stack:[]};t[e]=n,t.before.push(function(){n.i=0})}},f=0,h=function(){return"_$"+f++},v=function(e){var t=u,n=t[e],r=t.update,a=n.i,o=n.stack;return n.i++,{i:a,stack:o,update:r,unknown:a===o.length}},d=function(e){var t=g(n);return p(i,t),n.reset=function(){for(var e in p(t.reset,t),t)/^_\$/.test(e)&&t[e].stack.splice(0)},n;function n(){var n=u;u=t;var r=t._,a=t.before,o=t.after,i=t.external;try{var c;do{r.$=r._=!1,p(a,t),c=e.apply(r.c=this,r.a=arguments),p(o,t),i.length&&p(i.splice(0),c)}while(r._);return c}finally{r.$=!0,u=n}}},p=function(e,t){for(var n=e.length,r=0;r<n;)e[r++](t)},g=function(e){var t={_:!0,$:!0,c:null,a:null};return{_:t,before:[],after:[],external:[],reset:[],update:function(){return t.$?e.apply(t.c,t.a):t._=!0}}};function m(e,t){return e!==this[t]}var y,w,b=h();try{y=cancelAnimationFrame,w=requestAnimationFrame}catch(e){y=clearTimeout,w=setTimeout}var k=function(e,t,n,r,a,u,o){var i={always:e,cb:a,check:t,clean:null,inputs:n,raf:r,t:0,update:t,fn:function(){E(u[o],i.cb())}};return i},N=function e(t){return function(n,r){var a=v(b),i=a.i,c=a.stack,s=a.unknown,f=r||o;if(s){var h=f===o,d=h||!t||"function"!=typeof f;h||!t||"function"!=typeof f?c.push(k(h,d,f,t,n,c,i)):(u.external.push(function(e){return r(n,e)}),c.push(k(h,h,o,t,e,c,i)))}else{var p=c[i],g=p.check,m=p.always,y=p.inputs;g&&(m||l(y,f))&&(p.cb=n,p.inputs=f,p.update=!0)}}},E=function(e,t){e.t=0,e.clean=t};i.push(function(e){var t=[],n={i:0,stack:t},r=function(e,t,n,r){n&&r?y(r):t&&t(),E(e,null)};e[b]=n,e.before.push(function(){n.i=0}),e.reset.push(function(){n.i=0;for(var e=t.length,a=0;a<e;a++){var u=t[a],o=u.check,i=u.clean,c=u.raf,l=u.t;o&&r(u,i,c,l)}}),e.after.push(function(){for(var e=t.length,n=0;n<e;n++){var a=t[n],u=a.check,o=a.clean,i=a.fn,c=a.raf,l=a.t,s=a.update;u&&s&&(a.update=!1,r(a,o,c,l),c?a.t=w(i):i())}})});var x=N(!0),C=N(!1),A=h();i.push(s(A));var S=function(e){var t=v(A),n=t.i,r=t.stack;if(t.unknown){var a={current:null};r.push(a),a.current=c(e,o)}return r[n]},T=h();i.push(s(T));var _=function(e,t){var n=v(T),r=n.i,a=n.stack,u=n.unknown,i=t||o;u&&M(a,-1,e,i);var c=a[r],s=c.filter,f=c.value,h=c.fn,d=c.inputs;return(s?l(d,i):e!==h)?M(a,r,e,i):f},M=function(e,t,n,r){var a={filter:r!==o,value:null,fn:n,inputs:r};return t<0?e.push(a):e[t]=a,a.value=n(),a.value},$=h();i.push(s($));var L=function(e,t){var n=v($),r=n.i,a=n.stack,u=n.unknown,i=n.update;if(u){var l=[null,function(n){t=e(t,n),l[0]=t,i()}];a.push(l),l[0]=c(t,o)}return a[r]},j=new WeakMap,D=h();i.push(s(D));function O(e){if(this.value!==e){this.value=e;for(var t=j.get(this),n=t.length,r=0;r<n;r++)t[r]()}}var W=function(e){var t=e.Event,n=e.WeakSet,r=!0,a=null;return function(e){return r&&(r=!r,a=new n,function(e){var r=new n,u=new n;try{new MutationObserver(l).observe(e,{subtree:!0,childList:!0})}catch(t){var o=0,i=[],c=function(e){i.push(e),clearTimeout(o),o=setTimeout(function(){l(i.splice(o=0,i.length))},0)};e.addEventListener("DOMNodeRemoved",function(e){c({addedNodes:[],removedNodes:[e.target]})},!0),e.addEventListener("DOMNodeInserted",function(e){c({addedNodes:[e.target],removedNodes:[]})},!0)}function l(e){for(var t,n=e.length,a=0;a<n;a++)s((t=e[a]).removedNodes,"disconnected",u,r),s(t.addedNodes,"connected",r,u)}function s(e,n,r,a){for(var u,o=new t(n),i=e.length,c=0;c<i;1===(u=e[c++]).nodeType&&f(u,o,n,r,a));}function f(e,t,n,r,u){a.has(e)&&!r.has(e)&&(u.delete(e),r.add(e),e.dispatchEvent(t));for(var o=e.children||[],i=o.length,c=0;c<i;f(o[c++],t,n,r,u));}}(e.ownerDocument)),a.add(e),e}}({Event:n,WeakSet:a}),R=function e(t,n){var r=n.nodeType;if(r){var a=1===r?n:function(e){for(var t=e.childNodes,n=t.length,r=0;r<n;){var a=t[r++];if(1===a.nodeType)return a}throw"unobservable"}(n);W(a);var u={handleEvent:V,onconnected:z,ondisconnected:G,$:t,_:null};a.addEventListener("connected",u,!1),a.addEventListener("disconnected",u,!1)}else{var o=n.valueOf();o!==n&&e(t,o)}},F=function(e,t){var n=[e];return t&&n.push(t.length?t:R),x.apply(null,n)};function V(e){this["on"+e.type]()}function z(){G.call(this),this._=this.$()}function G(){var e=this._;this._=null,e&&e()}var H={};try{H.WeakMap=WeakMap}catch(e){H.WeakMap=function(e,t){var n=t.defineProperty,r=t.hasOwnProperty,a=u.prototype;return a.delete=function(e){return this.has(e)&&delete e[this._]},a.get=function(e){return this.has(e)?e[this._]:void 0},a.has=function(e){return r.call(e,this._)},a.set=function(e,t){return n(e,this._,{configurable:!0,value:t}),this},u;function u(t){n(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(o,this)}function o(e){this.set(e[0],e[1])}}(Math.random(),Object)}var I=H.WeakMap,Z="object"!=("undefined"==typeof document?"undefined":typeof document),B=function(e){var t,n=(t=(document.defaultView.navigator||{}).userAgent,/(Firefox|Safari)\/(\d+)/.test(t)&&!/(Chrom|Android)\/(\d+)/.test(t)),r=!("raw"in e)||e.propertyIsEnumerable("raw")||!Object.isFrozen(e.raw);if(n||r){var a={},u=function(e){for(var t=".",n=0;n<e.length;n++)t+=e[n].length+"."+e[n];return a[t]||(a[t]=e)};if(r)B=u;else{var o=new I;B=function(e){return o.get(e)||function(e,t){return o.set(e,t),t}(e,u(e))}}}else Z=!0;return P(e)};function P(e){return Z?e:B(e)}function q(e){for(var t=arguments.length,n=[P(e)],r=1;r<t;)n.push(arguments[r++]);return n}var J=function(e,t){return(t=n.prototype).ELEMENT_NODE=1,t.nodeType=111,t.remove=function(e){var t=this.childNodes,n=this.firstChild,r=this.lastChild;if(this._=null,e&&2===t.length)r.parentNode.removeChild(r);else{var a=this.ownerDocument.createRange();a.setStartBefore(e?t[1]:n),a.setEndAfter(r),a.deleteContents()}return n},t.valueOf=function(e){var t=this._,n=null==t;if(n&&(t=this._=this.ownerDocument.createDocumentFragment()),n||e)for(var r=this.childNodes,a=0,u=r.length;a<u;a++)t.appendChild(r[a]);return t},n;function n(t){var n=this.childNodes=e.call(t,0);this.firstChild=n[0],this.lastChild=n[n.length-1],this.ownerDocument=n[0].ownerDocument,this._=null}}([].slice),K=Array.isArray,Q=J.prototype.nodeType;function U(e,t){this.type=e,this.args=t}Object.freeze(U);var X=function(e){var t="fragment",n="content"in a("template")?function(e){var t=a("template");return t.innerHTML=e,t.content}:function(e){var n=a(t),u=a("template"),o=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var i=RegExp.$1;u.innerHTML="<table>"+e+"</table>",o=u.querySelectorAll(i)}else u.innerHTML=e,o=u.childNodes;return r(n,o),n};return function(e,u){return("svg"===u?function(e){var n=a(t),u=a("div");return u.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",r(n,u.firstChild.childNodes),n}:n)(e)};function r(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function a(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}}(document),Y={};try{Y.Map=Map}catch(e){Y.Map=function(){var e=0,t=[],n=[];return{delete:function(a){var u=r(a);return u&&(t.splice(e,1),n.splice(e,1)),u},forEach:function(e,r){t.forEach(function(t,a){e.call(r,n[a],t,this)},this)},get:function(t){return r(t)?n[e]:void 0},has:function(e){return r(e)},set:function(a,u){return n[r(a)?e:t.push(a)-1]=u,this}};function r(n){return-1<(e=t.indexOf(n))}}}var ee,te=Y.Map,ne=function(e,t,n,r,a,u){for(var o=("selectedIndex"in t),i=-1;r<a;){var c=e(n[r],1);o&&i<0&&c.selected&&(i=r),t.insertBefore(c,u),r++}o&&-1<i&&(t.selectedIndex=i)},re=function(e,t){return e==t},ae=function(e){return e},ue=function(e,t,n,r,a,u,o){var i=u-a;if(i<1)return-1;for(;n-t>=i;){for(var c=t,l=a;c<n&&l<u&&o(e[c],r[l]);)c++,l++;if(l===u)return t;t=c+1}return-1},oe=function(e,t,n,r,a){return n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:a},ie=function(e,t,n,r,a){if(a-r<2)t.removeChild(e(n[r],-1));else{var u=t.ownerDocument.createRange();u.setStartBefore(e(n[r],-1)),u.setEndAfter(e(n[a-1],-1)),u.deleteContents()}},ce=function(e,t,n){for(var r=1,a=t;r<a;){var u=(r+a)/2>>>0;n<e[u]?a=u:r=u+1}return r},le=function(e,t,n,r,a,u,o,i,c,l,s,f,h){!function(e,t,n,r,a,u,o,i,c){for(var l=new te,s=e.length,f=o,h=0;h<s;)switch(e[h++]){case 0:a++,f++;break;case 1:l.set(r[a],1),ne(t,n,r,a++,a,f<i?t(u[f],0):c);break;case-1:f++}for(h=0;h<s;)switch(e[h++]){case 0:o++;break;case-1:l.has(u[o])?o++:ie(t,n,u,o++,o)}}(function(e,t,n,r,a,u,o){var i,c,l,s,f,h,v,d=n+u,p=[];e:for(i=0;i<=d;i++){if(i>50)return null;for(v=i-1,f=i?p[i-1]:[0,0],h=p[i]=[],c=-i;c<=i;c+=2){for(l=(s=c===-i||c!==i&&f[v+c-1]<f[v+c+1]?f[v+c+1]:f[v+c-1]+1)-c;s<u&&l<n&&o(r[a+s],e[t+l]);)s++,l++;if(s===u&&l===n)break e;h[i+c]=s}}var g=Array(i/2+d/2),m=g.length-1;for(i=p.length-1;i>=0;i--){for(;s>0&&l>0&&o(r[a+s-1],e[t+l-1]);)g[m--]=0,s--,l--;if(!i)break;v=i-1,f=i?p[i-1]:[0,0],(c=s-l)==-i||c!==i&&f[v+c-1]<f[v+c+1]?(l--,g[m--]=1):(s--,g[m--]=-1)}return g}(n,r,u,o,i,l,f)||function(e,t,n,r,a,u,o,i){var c=0,l=r<i?r:i,s=Array(l++),f=Array(l);f[0]=-1;for(var h=1;h<l;h++)f[h]=o;for(var v=new te,d=u;d<o;d++)v.set(a[d],d);for(var p=t;p<n;p++){var g=v.get(e[p]);null!=g&&-1<(c=ce(f,l,g))&&(f[c]=g,s[c]={newi:p,oldi:g,prev:s[c-1]})}for(c=--l,--o;f[c]>o;)--c;l=i+r-c;var m=Array(l),y=s[c];for(--n;y;){for(var w=y,b=w.newi,k=w.oldi;n>b;)m[--l]=1,--n;for(;o>k;)m[--l]=-1,--o;m[--l]=0,--n,--o,y=y.prev}for(;n>=t;)m[--l]=1,--n;for(;o>=u;)m[--l]=-1,--o;return m}(n,r,a,u,o,i,c,l),e,t,n,r,o,i,s,h)},se=function(e,t,n,r){r||(r={});for(var a=r.compare||re,u=r.node||ae,o=null==r.before?null:u(r.before,0),i=t.length,c=i,l=0,s=n.length,f=0;l<c&&f<s&&a(t[l],n[f]);)l++,f++;for(;l<c&&f<s&&a(t[c-1],n[s-1]);)c--,s--;var h=l===c,v=f===s;if(h&&v)return n;if(h&&f<s)return ne(u,e,n,f,s,oe(u,t,l,i,o)),n;if(v&&l<c)return ie(u,e,t,l,c),n;var d=c-l,p=s-f,g=-1;if(d<p){if(-1<(g=ue(n,f,s,t,l,c,a)))return ne(u,e,n,f,g,u(t[l],0)),ne(u,e,n,g+d,s,oe(u,t,c,i,o)),n}else if(p<d&&-1<(g=ue(t,l,c,n,f,s,a)))return ie(u,e,t,l,g),ie(u,e,t,g+p,c),n;return d<2||p<2?(ne(u,e,n,f,s,u(t[l],0)),ie(u,e,t,l,c),n):d===p&&function(e,t,n,r,a,u){for(;r<a&&u(n[r],e[t-1]);)r++,t--;return 0===t}(n,s,t,l,c,a)?(ne(u,e,n,f,s,oe(u,t,c,i,o)),n):(le(u,e,n,f,s,p,t,l,c,d,i,a,o),n)},fe=function(e,t,n,r,a){var u="importNode"in e,o=e.createDocumentFragment();return o.appendChild(e.createTextNode("g")),o.appendChild(e.createTextNode("")),(u?e.importNode(o,!0):o.cloneNode(!0)).childNodes.length<2?function e(t,n){for(var r=t.cloneNode(),a=t.childNodes||[],u=a.length,o=0;n&&o<u;o++)r.appendChild(e(a[o],n));return r}:u?e.importNode:function(e,t){return e.cloneNode(!!t)}}(document),he="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},ve="-"+Math.random().toFixed(6)+"%";try{"content"in(ee=document.createElement("template"))&&(ee.innerHTML='<p tabindex="'+ve+'"></p>',ee.content.childNodes[0].getAttribute("tabindex")==ve)||(ve="_dt: "+ve.slice(1,-1)+";",!0)}catch(e){}var de="\x3c!--"+ve+"--\x3e",pe=8,ge=1,me=3,ye=/^(?:style|textarea)$/i,we=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;var be=" \\f\\n\\r\\t",ke="[^"+be+"\\/>\"'=]+",Ne="["+be+"]+"+ke,Ee="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",xe="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+ke.replace("\\/","")+"))?)",Ce=new RegExp(Ee+Ne+xe+"+)(["+be+"]*/?>)","g"),Ae=new RegExp(Ee+Ne+xe+"*)(["+be+"]*/>)","g"),Se=new RegExp("("+Ne+"\\s*=\\s*)(['\"]?)"+de+"\\2","gi");function Te(e,t,n,r){return"<"+t+n.replace(Se,_e)+r}function _e(e,t,n){return t+(n||'"')+ve+(n||'"')}function Me(e,t,n){return we.test(t)?e:"<"+t+n+"></"+t+">"}function $e(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function Le(e,t,n,r){for(var a=new te,u=e.attributes,o=[],i=o.slice.call(u,0),c=i.length,l=0;l<c;){var s,f=i[l++],h=f.value===ve;if(h||1<(s=f.value.split(de)).length){var v=f.name;if(!a.has(v)){var d=n.shift().replace(h?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+v+")\\s*=\\s*('|\")","i"),"$1"),p=u[d]||u[d.toLowerCase()];if(a.set(v,p),h)t.push(De(p,r,d,null));else{for(var g=s.length-2;g--;)n.shift();t.push(De(p,r,d,s))}}o.push(f)}}for(c=o.length,l=0;l<c;){var m=o[l++];/^id$/i.test(m.name)?e.removeAttribute(m.name):e.removeAttributeNode(m)}var y=e.nodeName;if(/^script$/i.test(y)){var w=document.createElement(y);for(c=u.length,l=0;l<c;)w.setAttributeNode(u[l++].cloneNode(!0));w.textContent=e.textContent,e.parentNode.replaceChild(w,e)}}function je(e,t){return{type:"any",node:e,path:t}}function De(e,t,n,r){return{type:"attr",node:e,path:t,name:n,sparse:r}}function Oe(e,t){return{type:"text",node:e,path:t}}var We=new I,Re=new I;function Fe(e,t){var n=function(e){return e.join(de).replace(Ae,Me).replace(Ce,Te)}(t),r=e.transform;r&&(n=r(n));var a=X(n,e.type);!function(e){var t=e.childNodes,n=t.length;for(;n--;){var r=t[n];1!==r.nodeType&&0===he.call(r.textContent).length&&e.removeChild(r)}}(a);var u=[];!function e(t,n,r,a){for(var u=t.childNodes,o=u.length,i=0;i<o;){var c=u[i];switch(c.nodeType){case ge:var l=a.concat(i);Le(c,n,r,l),e(c,n,r,l);break;case pe:var s=c.textContent;if(s===ve)r.shift(),n.push(ye.test(t.nodeName)?Oe(t,a):je(c,a.concat(i)));else switch(s.slice(0,2)){case"/*":if("*/"!==s.slice(-2))break;case"👻":t.removeChild(c),i--,o--}break;case me:ye.test(t.nodeName)&&he.call(c.textContent)===de&&(r.shift(),n.push(Oe(t,a)))}i++}}(a,u,t.slice(0),[]);var o={content:a,updates:function(n){for(var r=[],a=u.length,o=0,i=0;o<a;){var c=u[o++],l=$e(n,c.path);switch(c.type){case"any":r.push({fn:e.any(l,[]),sparse:!1});break;case"attr":var s=c.sparse,f=e.attribute(l,c.name,c.node);null===s?r.push({fn:f,sparse:!1}):(i+=s.length-2,r.push({fn:f,sparse:!0,values:s}));break;case"text":r.push({fn:e.text(l),sparse:!1}),l.textContent=""}}return a+=i,function(){var e=arguments.length;if(a!==e-1)throw new Error(e-1+" values instead of "+a+"\n"+t.join("${value}"));for(var u=1,o=1;u<e;){var i=r[u-o];if(i.sparse){var c=i.values,l=c[0],s=1,f=c.length;for(o+=f-2;s<f;)l+=arguments[u++]+c[s++];i.fn(l)}else i.fn(arguments[u++])}return n}}};return We.set(t,o),o}function Ve(e){return function(t){var n=Re.get(e);return null!=n&&n.template===t||(n=function(e,t){var n=We.get(t)||Fe(e,t),r=fe.call(document,n.content,!0),a={content:r,template:t,updates:n.updates(r)};return Re.set(e,a),a}(e,t)),n.updates.apply(null,arguments),n.content}}var ze=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,a){var u,o;return function(i){var c,l,s,f;switch(typeof i){case"object":if(i){if("object"===u){if(!a&&o!==i)for(l in o)l in i||(r[l]="")}else a?r.value="":r.cssText="";for(l in c=a?{}:r,i)s="number"!=typeof(f=i[l])||e.test(l)?f:f+"px",!a&&/^--/.test(l)?c.setProperty(l,s):c[l]=s;u="object",a?r.value=function(e){var r,a=[];for(r in e)a.push(r.replace(t,n),":",e[r],";");return a.join("")}(o=c):o=i;break}default:o!=i&&(u="string",o=i,a?r.value=i||"":r.cssText=i||"")}}}}(),Ge=function(e,t){return e.nodeType===Q?1/t<0?t?e.remove(!0):e.lastChild:t?e.valueOf(!0):e.firstChild:e},He=function(e,t){var n,r=!1,a=t.cloneNode(!0);return function(t){n!==t&&(n=t,a.value!==t&&(null==t?(r&&(r=!1,e.removeAttributeNode(a)),a.value=t):(a.value=t,r||(r=!0,e.setAttributeNode(a)))))}},Ie=function(e,t){var n;return function(r){n!==r&&(n=r,e[t]!==r&&(null==r?(e[t]="",e.removeAttribute(t)):e[t]=r))}},Ze=/^(?:form|list)$/i,Be=[].slice;function Pe(e){return this.type=e,Ve(this)}function qe(e){return e(this)}Pe.prototype={attribute:function(e,t,n){switch(t){case"class":if("ownerSVGElement"in e)return He(e,n);t="className";case"data":case"props":return Ie(e,t);case"style":return ze(e,n,"ownerSVGElement"in e);case"ref":return function(e){return function(t){t.current=e}}(e);default:return"."===t.slice(0,1)?function(e,t){return function(n){e[t]=n}}(e,t.slice(1)):"on"===t.slice(0,2)?function(e,t){var n,r=t.slice(2);return t.toLowerCase()in e&&(r=r.toLowerCase()),function(t){n!==t&&(n&&e.removeEventListener(r,n,!1),n=t,t&&e.addEventListener(r,t,!1))}}(e,t):t in e&&!("ownerSVGElement"in e||Ze.test(t))?Ie(e,t):He(e,n)}},any:function(e,t){var n,r={node:Ge,before:e},a="ownerSVGElement"in e?"svg":"html",u=!1;return function o(i){switch(typeof i){case"string":case"number":case"boolean":u?n!==i&&(n=i,t[0].textContent=i):(u=!0,n=i,t=se(e.parentNode,t,[function(e,t){return e.ownerDocument.createTextNode(t)}(e,i)],r));break;case"function":o(i(e));break;case"object":case"undefined":if(null==i){u=!1,t=se(e.parentNode,t,[],r);break}default:if(u=!1,n=i,K(i))if(0===i.length)t.length&&(t=se(e.parentNode,t,[],r));else switch(typeof i[0]){case"string":case"number":case"boolean":o(String(i));break;case"function":o(i.map(qe,e));break;case"object":K(i[0])&&(i=i.concat.apply([],i));default:t=se(e.parentNode,t,i,r)}else!function(e){return"ELEMENT_NODE"in e}(i)?"text"in i?o(String(i.text)):"any"in i?o(i.any):"html"in i?t=se(e.parentNode,t,Be.call(X([].concat(i.html).join(""),a).childNodes),r):"length"in i&&o(Be.call(i)):t=se(e.parentNode,t,11===i.nodeType?Be.call(i.childNodes):[i],r)}}},text:function(e){var t;return function n(r){if(t!==r){t=r;var a=typeof r;"object"===a&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(Be.call(r).join("")):"function"===a?n(r(e)):e.textContent=null==r?"":r}}}};var Je=new I,Ke=new I,Qe=null,Ue=function(e){var t=tt("html",e),n=tt("svg",e);return{html:t,svg:n,hook:function(e){return{html:et(e,t),svg:et(e,n)}},render:function(t,n){var r=nt.call(this,t,n,e);return Ke.get(t)!==r&&(Ke.set(t,r),function(e,t){e.textContent="",e.appendChild(t)}(t,r)),t}}}(Pe),Xe=Ue.render;function Ye(e,t){return e.nodeType===Q?e.valueOf(t):e}function et(e,t){return function(){var n=e(null);return null===n.current&&(n.current=t.for(n)),Ye(n.current.apply(null,arguments),!1)}}function tt(e,t){var n=new I;return r.for=function(r,a){var u=n.get(r)||function(e){var t={$:null};return n.set(e,t),t}(r);return null==a&&(a="$"),u[a]||function(n,r){var a=[],u=null,o=new t(e),i=function(){return o.apply(null,at(a,1,1,t))};return n[r]=function(){a=q.apply(null,arguments);var e=nt(o,i,t);return u||(u=ut(e))}}(u,a)},r;function r(){var n=q.apply(null,arguments);return Qe?new U(e,n):new t(e).apply(null,n)}}function nt(e,t,n){var r,a,u=Qe;(Qe=Je.get(e)||(r=e,a={i:0,length:0,stack:[],update:!1},Je.set(r,a),a)).i=0;var o,i=t.call(this);if(i instanceof U){o=Ye(rt(i,0,n),Qe.update);var c=Qe,l=c.i,s=c.length,f=c.stack,h=c.update;l<s&&f.splice(Qe.length=l),h&&(Qe.update=!1)}else o=Ye(i,!1);return Qe=u,o}function rt(e,t,n){var r=Qe,a=r.i,u=r.length,o=r.stack,i=e.type,c=e.args,l=a<u;Qe.i++,l||(Qe.length=o.push({l:t,kind:i,tag:null,tpl:c[0],wire:null})),at(c,1,t+1,n);var s=o[a];if(l){var f=s.l,h=s.kind,v=s.tag,d=s.tpl,p=s.wire;if(f===t&&i===h&&d===c[0])return v.apply(null,c),p}var g=new n(i),m=ut(g.apply(null,c));return s.l=t,s.kind=i,s.tag=g,s.tpl=c[0],s.wire=m,a<1&&(Qe.update=!0),m}function at(e,t,n,r){for(var a=e.length;t<a;t++){var u=e[t];"object"==typeof u&&u&&(u instanceof U?e[t]=rt(u,n-1,r):K(u)&&(e[t]=at(u,0,n++,r)))}return e}function ut(e){var t=e.childNodes,n=t.length;return 1===n?t[0]:n?new J(t):e}var ot=(0,Ue.hook)(S),it=ot.html,ct=ot.svg;return e.createContext=function(e){var t={value:e,provide:O};return j.set(t,[]),t},e.default=function(e){return d(function(){var t=S({i:0,$:[]}).current,n=t.i,r=t.$;return F(function(){var e=t.i,n=t.$;e>n.length&&n.splice(e),t.i=0}),t.i++,n===r.length&&r.push(d(e)),r[n].apply(this,arguments)})},e.html=it,e.render=Xe,e.svg=ct,e.useCallback=function(e,t){return _(function(){return e},t)},e.useContext=function(e){var t=v(D),n=t.i,r=t.stack,a=t.unknown,u=t.update;return a&&(j.get(e).push(u),r.push(e)),r[n].value},e.useEffect=F,e.useLayoutEffect=C,e.useMemo=_,e.useReducer=L,e.useRef=S,e.useState=function(e){return L(function(e,t){return c(t,[e])},e)},e}({});
