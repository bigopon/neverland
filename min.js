/*! (c) Andrea Giammarchi - ISC */
var neverland=function(e){"use strict";var t={};try{t.WeakMap=WeakMap}catch(e){t.WeakMap=function(e,t){var n=t.defineProperty,r=t.hasOwnProperty,a=o.prototype;return a.delete=function(e){return this.has(e)&&delete e[this._]},a.get=function(e){return this.has(e)?e[this._]:void 0},a.has=function(e){return r.call(e,this._)},a.set=function(e,t){return n(e,this._,{configurable:!0,value:t}),this},o;function o(t){n(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(i,this)}function i(e){this.set(e[0],e[1])}}(Math.random(),Object)}var n=t.WeakMap,r="object"!=("undefined"==typeof document?"undefined":typeof document),a=function(e){var t,i=(t=(document.defaultView.navigator||{}).userAgent,/(Firefox|Safari)\/(\d+)/.test(t)&&!/(Chrom[eium]+|Android)\/(\d+)/.test(t)),u=!("raw"in e)||e.propertyIsEnumerable("raw")||!Object.isFrozen(e.raw);if(i||u){var c={},s=function(e){for(var t=".",n=0;n<e.length;n++)t+=e[n].length+"."+e[n];return c[t]||(c[t]=e)};if(u)a=s;else{var l=new n;a=function(e){return l.get(e)||function(e,t){return l.set(e,t),t}(e,s(e))}}}else r=!0;return o(e)};function o(e){return r?e:a(e)}function i(e){for(var t=arguments.length,n=[o(e)],r=1;r<t;)n.push(arguments[r++]);return n}var u={};u.CustomEvent="function"==typeof CustomEvent?CustomEvent:function(e){return t.prototype=new t("").constructor.prototype,t;function t(e,t){t||(t={});var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail),n}}();var c=u.CustomEvent,s={};try{s.WeakSet=WeakSet}catch(e){!function(e){var t=new e,n=r.prototype;function r(n){t.set(this,new e),n&&n.forEach(this.add,this)}n.add=function(e){return t.get(this).set(e,1),this},n.delete=function(e){return t.get(this).delete(e)},n.has=function(e){return t.get(this).has(e)},s.WeakSet=r}(WeakMap)}var l=s.WeakSet;var f=null,v=function(e){var t=[];return function n(){var r=f,a=[];f={hook:n,args:arguments,stack:t,i:0,after:a};try{return e.apply(null,arguments)}finally{f=r;for(var o=0,i=a.length;o<i;o++)a[o]()}}},h=function(){return f};function p(e,t){return e!==this[t]}var d=function(e){return"function"==typeof e},g="function"==typeof cancelAnimationFrame,y=g?cancelAnimationFrame:clearTimeout,m=g?requestAnimationFrame:setTimeout;function w(e){var t,n,r,a,o;return u(),function(e,u,s){return r=e,a=u,o=s,n||(n=m(i)),--t<0&&c(!0),c};function i(){u(),r.apply(a,o||[])}function u(){t=e||1/0,n=g?0:null}function c(e){var t=!!n;return t&&(y(n),e&&i()),t}}var b=new WeakMap,k=function(e,t,n){e.apply(t,n)},N={async:!1,always:!1},x=function(e,t){var n=h(),r=n.i++,a=n.hook,o=n.args,i=n.stack,u=t||N,c=u.async,s=u.always;return i.length<=r&&(i[r]=d(e)?e():e,b.has(a)||b.set(a,c?w():k)),[i[r],function(e){var t=d(e)?e(i[r]):e;(s||i[r]!==t)&&(i[r]=t,b.get(a)(a,null,o))}]},C=new WeakMap,E=function(e){var t=e.hook,n=e.args;t.apply(null,n)};function L(e){this.value!==e&&(this.value=e,C.get(this).forEach(E))}function A(e){return e.hook===this.hook}var T=new WeakMap,S=function(){},j=function(e){return function(t,n){var r=h(),a=r.i++,o=r.hook,i=r.stack,u=r.after;if(a<i.length){var c=i[a],s=c.clean,l=c.update,f=c.values;if(!n||n.some(p,f)){c.values=n,s&&(c.clean=null,s());var v=function(){c.clean=t()};e?u.push(v):l(v)}}else{T.has(o)||T.set(o,{stack:[],update:w()});var d=T.get(o),g={clean:null,stop:S,update:d.update,values:n};i[a]=g,d.stack.push(g);var y=function(){g.clean=t()};e?u.push(y):g.stop=d.update(y)}}},O=j(!1),M=j(!0),W=function(e,t){var n=h(),r=n.i++,a=n.stack;return(!t||a.length<=r||t.some(p,a[r].values))&&(a[r]={current:e(),values:t}),a[r].current},_=function(e){var t=e.Event,n=e.WeakSet,r=!0,a=null;return function(e){return r&&(r=!r,a=new n,function(e){var r=new n,o=new n;try{new MutationObserver(s).observe(e,{subtree:!0,childList:!0})}catch(t){var i=0,u=[],c=function(e){u.push(e),clearTimeout(i),i=setTimeout(function(){s(u.splice(i=0,u.length))},0)};e.addEventListener("DOMNodeRemoved",function(e){c({addedNodes:[],removedNodes:[e.target]})},!0),e.addEventListener("DOMNodeInserted",function(e){c({addedNodes:[e.target],removedNodes:[]})},!0)}function s(e){for(var t,n=e.length,a=0;a<n;a++)l((t=e[a]).removedNodes,"disconnected",o,r),l(t.addedNodes,"connected",r,o)}function l(e,n,r,a){for(var o,i=new t(n),u=e.length,c=0;c<u;1===(o=e[c++]).nodeType&&f(o,i,n,r,a));}function f(e,t,n,r,o){a.has(e)&&!r.has(e)&&(o.delete(e),r.add(e),e.dispatchEvent(t));for(var i=e.children||[],u=i.length,c=0;c<u;f(i[c++],t,n,r,o));}}(e.ownerDocument)),a.add(e),e}}({Event:c,WeakSet:l}),D=!1,F=function(e){var t=v(e),n=null;return function(){D=!1;var e=t.apply(this,arguments);return D&&(D=!1,function e(t,n){var r=t.nodeType;if(r){var a=1===r?t:function(e){for(var t=e.childNodes,n=t.length,r=0;r<n;){var a=t[r++];if(1===a.nodeType)return a}throw"unobservable"}(t);_(a),a.addEventListener("disconnected",n,!1)}else{var o=t.valueOf();o!==t&&e(o,n)}}(e,n||(n=function(e){T.has(e)&&T.get(e).stack.forEach(function(e){var t=e.clean;(0,e.stop)(),t&&(e.clean=null,t())})}.bind(null,t)))),e}};var R,$="-"+Math.random().toFixed(6)+"%",z=!1;try{"content"in(R=document.createElement("template"))&&(R.innerHTML='<p tabindex="'+$+'"></p>',R.content.childNodes[0].getAttribute("tabindex")==$)||($="_dt: "+$.slice(1,-1)+";",z=!0)}catch(e){}var H="\x3c!--"+$+"--\x3e",I=8,Z=1,q=3,P=/^(?:style|textarea)$/i,V=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;var B=" \\f\\n\\r\\t",G="[^"+B+"\\/>\"'=]+",J="["+B+"]+"+G,K="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",Q="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+G.replace("\\/","")+"))?)",U=new RegExp(K+J+Q+"+)(["+B+"]*/?>)","g"),X=new RegExp(K+J+Q+"*)(["+B+"]*/>)","g"),Y=new RegExp("("+J+"\\s*=\\s*)(['\"]?)"+H+"\\2","gi");function ee(e,t,n,r){return"<"+t+n.replace(Y,te)+r}function te(e,t,n){return t+(n||'"')+$+(n||'"')}function ne(e,t,n){return V.test(t)?e:"<"+t+n+"></"+t+">"}var re=function(e){var t="fragment",n="content"in a("template")?function(e){var t=a("template");return t.innerHTML=e,t.content}:function(e){var n=a(t),o=a("template"),i=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var u=RegExp.$1;o.innerHTML="<table>"+e+"</table>",i=o.querySelectorAll(u)}else o.innerHTML=e,i=o.childNodes;return r(n,i),n};return function(e,o){return("svg"===o?function(e){var n=a(t),o=a("div");return o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",r(n,o.firstChild.childNodes),n}:n)(e)};function r(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function a(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}}(document),ae=[].indexOf,oe=function(e,t,n,r,a,o){for(var i=("selectedIndex"in t),u=i;r<a;){var c=e(n[r],1);if(t.insertBefore(c,o),i&&u&&c.selected){u=!u;var s=t.selectedIndex;t.selectedIndex=s<0?r:ae.call(t.querySelectorAll("option"),c)}r++}},ie=function(e,t){return e==t},ue=function(e){return e},ce=function(e,t,n,r,a,o,i){var u=o-a;if(u<1)return-1;for(;n-t>=u;){for(var c=t,s=a;c<n&&s<o&&i(e[c],r[s]);)c++,s++;if(s===o)return t;t=c+1}return-1},se=function(e,t,n,r,a){return n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:a},le=function(e,t,n,r){for(;n<r;)he(e(t[n++],-1))},fe=function(e,t,n){for(var r=1,a=t;r<a;){var o=(r+a)/2>>>0;n<e[o]?a=o:r=o+1}return r},ve=function(e,t,n,r,a,o,i,u,c,s,l,f,v){!function(e,t,n,r,a,o,i,u,c){for(var s=[],l=e.length,f=i,v=0;v<l;)switch(e[v++]){case 0:a++,f++;break;case 1:s.push(r[a]),oe(t,n,r,a++,a,f<u?t(o[f],0):c);break;case-1:f++}for(v=0;v<l;)switch(e[v++]){case 0:i++;break;case-1:-1<s.indexOf(o[i])?i++:le(t,o,i++,i)}}(function(e,t,n,r,a,o,i){var u,c,s,l,f,v,h,p=n+o,d=[];e:for(u=0;u<=p;u++){if(u>50)return null;for(h=u-1,f=u?d[u-1]:[0,0],v=d[u]=[],c=-u;c<=u;c+=2){for(s=(l=c===-u||c!==u&&f[h+c-1]<f[h+c+1]?f[h+c+1]:f[h+c-1]+1)-c;l<o&&s<n&&i(r[a+l],e[t+s]);)l++,s++;if(l===o&&s===n)break e;v[u+c]=l}}var g=Array(u/2+p/2),y=g.length-1;for(u=d.length-1;u>=0;u--){for(;l>0&&s>0&&i(r[a+l-1],e[t+s-1]);)g[y--]=0,l--,s--;if(!u)break;h=u-1,f=u?d[u-1]:[0,0],(c=l-s)==-u||c!==u&&f[h+c-1]<f[h+c+1]?(s--,g[y--]=1):(l--,g[y--]=-1)}return g}(n,r,o,i,u,s,f)||function(e,t,n,r,a,o,i,u){var c=0,s=r<u?r:u,l=Array(s++),f=Array(s);f[0]=-1;for(var v=1;v<s;v++)f[v]=i;for(var h=a.slice(o,i),p=t;p<n;p++){var d=h.indexOf(e[p]);if(-1<d){var g=d+o;-1<(c=fe(f,s,g))&&(f[c]=g,l[c]={newi:p,oldi:g,prev:l[c-1]})}}for(c=--s,--i;f[c]>i;)--c;s=u+r-c;var y=Array(s),m=l[c];for(--n;m;){for(var w=m,b=w.newi,k=w.oldi;n>b;)y[--s]=1,--n;for(;i>k;)y[--s]=-1,--i;y[--s]=0,--n,--i,m=m.prev}for(;n>=t;)y[--s]=1,--n;for(;i>=o;)y[--s]=-1,--i;return y}(n,r,a,o,i,u,c,s),e,t,n,r,i,u,l,v)},he=function(e){return(e.remove||function(){var e=this.parentNode;e&&e.removeChild(this)}).call(e)};var pe=function(e,t,n,r){r||(r={});for(var a=r.compare||ie,o=r.node||ue,i=null==r.before?null:o(r.before,0),u=t.length,c=u,s=0,l=n.length,f=0;s<c&&f<l&&a(t[s],n[f]);)s++,f++;for(;s<c&&f<l&&a(t[c-1],n[l-1]);)c--,l--;var v=s===c,h=f===l;if(v&&h)return n;if(v&&f<l)return oe(o,e,n,f,l,se(o,t,s,u,i)),n;if(h&&s<c)return le(o,t,s,c),n;var p=c-s,d=l-f,g=-1;if(p<d){if(-1<(g=ce(n,f,l,t,s,c,a)))return oe(o,e,n,f,g,o(t[s],0)),oe(o,e,n,g+p,l,se(o,t,c,u,i)),n}else if(d<p&&-1<(g=ce(t,s,c,n,f,l,a)))return le(o,t,s,g),le(o,t,g+d,c),n;return p<2||d<2?(oe(o,e,n,f,l,o(t[s],0)),le(o,t,s,c),n):p===d&&function(e,t,n,r,a,o){for(;r<a&&o(n[r],e[t-1]);)r++,t--;return 0===t}(n,l,t,s,c,a)?(oe(o,e,n,f,l,se(o,t,c,u,i)),n):(ve(o,e,n,f,l,d,t,s,c,p,u,a,i),n)},de=function(e,t,n,r,a){var o="importNode"in e,i=e.createDocumentFragment();return i.appendChild(e.createTextNode("g")),i.appendChild(e.createTextNode("")),(o?e.importNode(i,!0):i.cloneNode(!0)).childNodes.length<2?function e(t,n){for(var r=t.cloneNode(),a=t.childNodes||[],o=a.length,i=0;n&&i<o;i++)r.appendChild(e(a[i],n));return r}:o?e.importNode:function(e,t){return e.cloneNode(!!t)}}(document),ge="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},ye=z?function(e,t){var n=t.join(" ");return t.slice.call(e,0).sort(function(e,t){return n.indexOf(e.name)<=n.indexOf(t.name)?-1:1})}:function(e,t){return t.slice.call(e,0)};function me(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function we(e,t,n,r){for(var a=e.attributes,o=[],i=[],u=ye(a,n),c=u.length,s=0;s<c;){var l,f=u[s++],v=f.value===$;if(v||1<(l=f.value.split(H)).length){var h=f.name;if(o.indexOf(h)<0){o.push(h);var p=n.shift().replace(v?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+h+")\\s*=\\s*('|\")[\\S\\s]*","i"),"$1"),d=a[p]||a[p.toLowerCase()];if(v)t.push(ke(d,r,p,null));else{for(var g=l.length-2;g--;)n.shift();t.push(ke(d,r,p,l))}}i.push(f)}}s=0;for(var y=(0<(c=i.length)&&z&&!("ownerSVGElement"in e));s<c;){var m=i[s++];y&&(m.value=""),e.removeAttribute(m.name)}var w=e.nodeName;if(/^script$/i.test(w)){var b=document.createElement(w);for(c=a.length,s=0;s<c;)b.setAttributeNode(a[s++].cloneNode(!0));b.textContent=e.textContent,e.parentNode.replaceChild(b,e)}}function be(e,t){return{type:"any",node:e,path:t}}function ke(e,t,n,r){return{type:"attr",node:e,path:t,name:n,sparse:r}}function Ne(e,t){return{type:"text",node:e,path:t}}var xe=new n;function Ce(e,t){var n=(e.convert||function(e){return e.join(H).replace(X,ne).replace(U,ee)})(t),r=e.transform;r&&(n=r(n));var a=re(n,e.type);Ae(a);var o=[];!function e(t,n,r,a){for(var o=t.childNodes,i=o.length,u=0;u<i;){var c=o[u];switch(c.nodeType){case Z:var s=a.concat(u);we(c,n,r,s),e(c,n,r,s);break;case I:var l=c.textContent;if(l===$)r.shift(),n.push(P.test(t.nodeName)?Ne(t,a):be(c,a.concat(u)));else switch(l.slice(0,2)){case"/*":if("*/"!==l.slice(-2))break;case"👻":t.removeChild(c),u--,i--}break;case q:P.test(t.nodeName)&&ge.call(c.textContent)===H&&(r.shift(),n.push(Ne(t,a)))}u++}}(a,o,t.slice(0),[]);var i={content:a,updates:function(n){for(var r=[],a=o.length,i=0,u=0;i<a;){var c=o[i++],s=me(n,c.path);switch(c.type){case"any":r.push({fn:e.any(s,[]),sparse:!1});break;case"attr":var l=c.sparse,f=e.attribute(s,c.name,c.node);null===l?r.push({fn:f,sparse:!1}):(u+=l.length-2,r.push({fn:f,sparse:!0,values:l}));break;case"text":r.push({fn:e.text(s),sparse:!1}),s.textContent=""}}return a+=u,function(){var e=arguments.length;if(a!==e-1)throw new Error(e-1+" values instead of "+a+"\n"+t.join("${value}"));for(var o=1,i=1;o<e;){var u=r[o-i];if(u.sparse){var c=u.values,s=c[0],l=1,f=c.length;for(i+=f-2;l<f;)s+=arguments[o++]+c[l++];u.fn(s)}else u.fn(arguments[o++])}return n}}};return xe.set(t,i),i}var Ee=[];function Le(e){var t=Ee,n=Ae;return function(r){return t!==r&&(n=function(e,t){var n=xe.get(t)||Ce(e,t);return n.updates(de.call(document,n.content,!0))}(e,t=r)),n.apply(null,arguments)}}function Ae(e){for(var t=e.childNodes,n=t.length;n--;){var r=t[n];1!==r.nodeType&&0===ge.call(r.textContent).length&&e.removeChild(r)}}var Te=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,a){var o,i;return function(u){var c,s,l,f;switch(typeof u){case"object":if(u){if("object"===o){if(!a&&i!==u)for(s in i)s in u||(r[s]="")}else a?r.value="":r.cssText="";for(s in c=a?{}:r,u)l="number"!=typeof(f=u[s])||e.test(s)?f:f+"px",!a&&/^--/.test(s)?c.setProperty(s,l):c[s]=l;o="object",a?r.value=function(e){var r,a=[];for(r in e)a.push(r.replace(t,n),":",e[r],";");return a.join("")}(i=c):i=u;break}default:i!=u&&(o="string",i=u,a?r.value=u||"":r.cssText=u||"")}}}}(),Se=function(e,t){return(t=n.prototype).ELEMENT_NODE=1,t.nodeType=111,t.remove=function(e){var t=this.childNodes,n=this.firstChild,r=this.lastChild;if(this._=null,e&&2===t.length)r.parentNode.removeChild(r);else{var a=this.ownerDocument.createRange();a.setStartBefore(e?t[1]:n),a.setEndAfter(r),a.deleteContents()}return n},t.valueOf=function(e){var t=this._,n=null==t;if(n&&(t=this._=this.ownerDocument.createDocumentFragment()),n||e)for(var r=this.childNodes,a=0,o=r.length;a<o;a++)t.appendChild(r[a]);return t},n;function n(t){var n=this.childNodes=e.call(t,0);this.firstChild=n[0],this.lastChild=n[n.length-1],this.ownerDocument=n[0].ownerDocument,this._=null}}([].slice),je=Array.isArray,Oe=Object.create,Me=Object.freeze,We=Se.prototype.nodeType,_e=function(e,t){return e.nodeType===We?1/t<0?t?e.remove(!0):e.lastChild:t?e.valueOf(!0):e.firstChild:e},De=function(e,t){var n,r=!1,a=t.cloneNode(!0);return function(t){n!==t&&(n=t,a.value!==t&&(null==t?(r&&(r=!1,e.removeAttributeNode(a)),a.value=t):(a.value=t,r||(r=!0,e.setAttributeNode(a)))))}},Fe=function(e,t){var n;return function(r){n!==r&&(n=r,e[t]!==r&&(null==r?(e[t]="",e.removeAttribute(t)):e[t]=r))}},Re=/^(?:form|list)$/i,$e=[].slice;function ze(e){return this.type=e,Le(this)}function He(e){return e(this)}ze.prototype={attribute:function(e,t,n){var r="svg"===this.type;switch(t){case"class":if(r)return De(e,n);t="className";case"data":case"props":return Fe(e,t);case"style":return Te(e,n,r);case"ref":return function(e){return function(t){t.current=e}}(e);default:return"."===t.slice(0,1)?function(e,t,n){return n?function(n){try{e[t]=n}catch(r){e.setAttribute(t,n)}}:function(n){e[t]=n}}(e,t.slice(1),r):"on"===t.slice(0,2)?function(e,t){var n,r=t.slice(2);return t.toLowerCase()in e&&(r=r.toLowerCase()),function(t){n!==t&&(n&&e.removeEventListener(r,n,!1),n=t,t&&e.addEventListener(r,t,!1))}}(e,t):t in e&&!r&&!Re.test(t)?Fe(e,t):De(e,n)}},any:function(e,t){var n,r={node:_e,before:e},a=this.type,o=!1;return function i(u){switch(typeof u){case"string":case"number":case"boolean":o?n!==u&&(n=u,t[0].textContent=u):(o=!0,n=u,t=pe(e.parentNode,t,[function(e,t){return e.ownerDocument.createTextNode(t)}(e,u)],r));break;case"function":i(u(e));break;case"object":case"undefined":if(null==u){o=!1,t=pe(e.parentNode,t,[],r);break}default:if(o=!1,n=u,je(u))if(0===u.length)t.length&&(t=pe(e.parentNode,t,[],r));else switch(typeof u[0]){case"string":case"number":case"boolean":i(String(u));break;case"function":i(u.map(He,e));break;case"object":je(u[0])&&(u=u.concat.apply([],u));default:t=pe(e.parentNode,t,u,r)}else!function(e){return"ELEMENT_NODE"in e}(u)?"text"in u?i(String(u.text)):"any"in u?i(u.any):"html"in u?t=pe(e.parentNode,t,$e.call(re([].concat(u.html).join(""),a).childNodes),r):"length"in u&&i($e.call(u)):t=pe(e.parentNode,t,11===u.nodeType?$e.call(u.childNodes):[u],r)}}},text:function(e){var t;return function n(r){if(t!==r){t=r;var a=typeof r;"object"===a&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n($e.call(r).join("")):"function"===a?n(r(e)):e.textContent=null==r?"":r}}}};var Ie=new n,Ze=function(e,t){var r=new n;return a.for=function(e,n){var o,i=r.get(e)||function(e){var t=Oe(null);return r.set(e,t),t}(e);return i[n]||(i[n]=(o={sub:[],stack:[],wire:null},function(){return qe(t,o,a.apply(null,arguments))}))},a.node=function(){return qe(t,{sub:[],stack:[],wire:null},a.apply(null,arguments)).valueOf(!0)},a;function a(){return new Je(e,i.apply(null,arguments))}},qe=function(e,t,n){var r=t.sub,a=t.stack,o={a:0,aLength:r.length,i:0,iLength:a.length},i=Ve(e,t,n,o),u=o.a,c=o.i,s=o.iLength;return u<o.aLength&&r.splice(u),c<s&&a.splice(c),i},Pe=function(e){var t={sub:[],stack:[],wire:null};return Ie.set(e,t),t},Ve=function(e,t,n,r){var a=t.stack,o=r.i,i=r.iLength,u=n.type,c=n.args;o===i&&(r.iLength=a.push({type:u,id:c[0],tag:null,wire:null})),r.i++,Be(e,t,c,r);var s=a[o];return o<i&&s.id===c[0]&&s.type===u?s.tag.apply(null,c):(s.type=u,s.id=c[0],s.tag=new e(u),s.wire=Ge(s.tag.apply(null,c))),s.wire},Be=function(e,t,n,r){for(var a=1,o=n.length;a<o;a++){var i=n[a];if("object"==typeof i&&i)if(i instanceof Je)n[a]=Ve(e,t,i,r);else if(je(i))for(var u=0,c=i.length;u<c;u++){var s=i[u];if("object"==typeof s&&s&&s instanceof Je){var l=t.sub,f=r.a;f===r.aLength&&(r.aLength=l.push({sub:[],stack:[],wire:null})),r.a++,i[u]=qe(e,l[f],s)}}}},Ge=function(e){var t=e.childNodes,n=t.length;return 1===n?t[0]:n?new Se(t):e};function Je(e,t){this.type=e,this.args=t}Me(Je);var Ke=function(e){return{html:Ze("html",e),svg:Ze("svg",e),render:function(t,n){var r="function"==typeof n?n():n,a=Ie.get(t)||Pe(t),o=r instanceof Je?qe(e,a,r):r;return o!==a.wire&&(a.wire=o,t.textContent="",t.appendChild(o.valueOf(!0))),t}}}(ze),Qe=Ke.render,Ue=Ke.html,Xe=Ke.svg,Ye=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return new pt("html",t)};Ye.for=dt(Ue);var et=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return new pt("svg",t)};et.for=dt(Xe);var tt=Array.isArray,nt=Object.create,rt=new n,at=function(e,t){var n=e.sub,r=e.stack,a=t.a,o=t.i,i=t.aLength,u=t.iLength;a<i&&n.splice(a),o<u&&r.splice(o)},ot=function(e){var t=e.sub,n=e.stack;return{a:0,aLength:t.length,i:0,iLength:n.length}},it=function(){return{sub:[],stack:[]}},ut=function(e,t){return lt(e,t,{i:0,iLength:e.stack.length})},ct=function(e){var t={stack:[]};return rt.set(e,t),t},st=function(e,t){var n=t.type,r=t.args,a=new Je(n,i.apply(null,r));return ft(e,a.args,ot(e)),a},lt=function(e,t,n){var r=e.stack,a=t.fn,o=t.args,i=n.i,u=i===n.iLength;u&&(n.iLength=r.push({fn:a,hook:null})),n.i++;var c=r[i];return(u||c.fn!==a)&&(c.fn=a,c.hook=function(e,t){return F(function(){var n=t.fn.apply(null,arguments);if(n instanceof pt){var r=ot(e);return ft(e,n.args,r),at(e,r),vt(t,n)}return n})}(it(),c)),c.hook.apply(null,o)},ft=function e(t,n,r){for(var a=1,o=n.length;a<o;a++){var u=n[a];if("object"==typeof u&&u)if(u instanceof ht)n[a]=lt(t,u,r);else if(u instanceof pt)e(t,u.args,r),n[a]=new Je(u.type,i.apply(null,u.args));else if(tt(u))for(var c=0,s=u.length;c<s;c++){var l=u[c];if("object"==typeof l&&l)if(l instanceof ht){var f=t.sub,v=r.a;v===r.aLength&&(r.aLength=f.push(it())),r.a++,u[c]=ut(f[v],l)}else l instanceof pt&&(e(t,l.args,r),u[c]=new Je(l.type,i.apply(null,l.args)))}}},vt=function(e,t){var n=t.type,r=t.args;return("html"===n?Ue:Xe).for(e,n).apply(null,r)};function ht(e,t){this.fn=e,this.args=t}function pt(e,t){this.type=e,this.args=t}function dt(e){var t=new n;return function(n,r){var a=t.get(n)||function(e){var n=nt(null);return t.set(e,n),n}(n),o=a[r]||(a[r]=it());return function(){for(var t=ot(o),a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return ft(o,i,t),at(o,t),e.for(n,r).apply(null,i)}}}return e.contextual=function(e){var t=null,n=v(function(){return e.apply(t,arguments)});return function(){return t=this,n.apply(this,arguments)}},e.createContext=function(e){var t={value:e,provide:L};return C.set(t,[]),t},e.html=Ye,e.neverland=function(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return new ht(e,n)}},e.render=function(e,t){var n="function"==typeof t?t():t;return Qe(e,n instanceof ht?ut(rt.get(e)||ct(e),n):st(it(),n))},e.svg=et,e.useCallback=function(e,t){return W(function(){return e},t)},e.useContext=function(e){var t=h(),n=t.hook,r=t.args,a=C.get(e),o={hook:n,args:r};return a.some(A,o)||a.push(o),e.value},e.useEffect=function(){return D=!0,O.apply(null,arguments)},e.useLayoutEffect=M,e.useMemo=W,e.useReducer=function(e,t,n,r){var a="function"==typeof n,o=x(a?n(t):t,a?r:n);return[o[0],function(t){o[1](e(o[0],t))}]},e.useRef=function(e){var t=h(),n=t.i++,r=t.stack;return n<r.length?r[n]:r[n]={current:e}},e.useState=x,e}({});
