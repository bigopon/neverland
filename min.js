/*! (c) Andrea Giammarchi - ISC */
var neverland=function(e){"use strict";var t={};t.CustomEvent="function"==typeof CustomEvent?CustomEvent:function(e){return t.prototype=new t("").constructor.prototype,t;function t(e,t){t||(t={});var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail),n}}();var n=t.CustomEvent,r={};try{r.WeakSet=WeakSet}catch(e){!function(e){var t=new e,n=a.prototype;function a(n){t.set(this,new e),n&&n.forEach(this.add,this)}n.add=function(e){return t.get(this).set(e,1),this},n.delete=function(e){return t.get(this).delete(e)},n.has=function(e){return t.get(this).has(e)},r.WeakSet=a}(WeakMap)}var a=r.WeakSet;var o=null,u=function(e){e()},i=function(e){var t=[];return function n(){var r=o,a=[],i=0;o={hook:n,args:arguments,stack:t,get index(){return i++},after:a};try{return e.apply(null,arguments)}finally{o=r,a.forEach(u)}}},c=function(){return o};function l(e,t){return e!==this[t]}var s=function(e){return"function"==typeof e},f="function"==typeof cancelAnimationFrame,h=f?cancelAnimationFrame:clearTimeout,d=f?requestAnimationFrame:setTimeout;function v(e){var t,n,r,a,o;return i(),function(e,i,l){return r=e,a=i,o=l,n||(n=d(u)),--t<0&&c(!0),c};function u(){i(),r.apply(a,o||[])}function i(){t=e||1/0,n=f?0:null}function c(e){var t=!!n;return t&&(h(n),e&&u()),t}}var p=new WeakMap,g=function(e){var t=c(),n=t.hook,r=t.args,a=t.stack,o=t.index;return a.length<=o&&(a[o]=s(e)?e():e,p.has(n)||p.set(n,v())),[a[o],function(e){a[o]=s(e)?e(a[o]):e,p.get(n)(n,null,r)}]},m=new WeakMap,y=function(e){var t=e.hook,n=e.args;t.apply(null,n)};function w(e){this.value!==e&&(this.value=e,m.get(this).forEach(y))}function b(e){return e.hook===this.hook}var N=new WeakMap,k=function(){},x=function(e){return function(t,n){var r=c(),a=r.hook,o=r.stack,u=r.index,i=r.after;if(u<o.length){var s=o[u],f=s.clean,h=s.update,d=s.values;if(!n||n.some(l,d)){s.values=n,f&&(s.clean=null,f());var p=function(){s.clean=t()};e?i.push(p):h(p)}}else{N.has(a)||N.set(a,{stack:[],update:v()});var g=N.get(a),m={clean:null,stop:k,update:g.update,values:n};o[u]=m,g.stack.push(m);var y=function(){m.clean=t()};e?i.push(y):m.stop=g.update(y)}}},E=x(!1),C=x(!0),S=function(e,t){var n=c(),r=n.stack,a=n.index;return(!t||r.length<=a||t.some(l,r[a].values))&&(r[a]={current:e(),values:t}),r[a].current},A=function(e){var t=c(),n=t.stack,r=t.index;return r<n.length?n[r]:n[r]={current:e}},L=function(e){var t=e.Event,n=e.WeakSet,r=!0,a=null;return function(e){return r&&(r=!r,a=new n,function(e){var r=new n,o=new n;try{new MutationObserver(l).observe(e,{subtree:!0,childList:!0})}catch(t){var u=0,i=[],c=function(e){i.push(e),clearTimeout(u),u=setTimeout(function(){l(i.splice(u=0,i.length))},0)};e.addEventListener("DOMNodeRemoved",function(e){c({addedNodes:[],removedNodes:[e.target]})},!0),e.addEventListener("DOMNodeInserted",function(e){c({addedNodes:[e.target],removedNodes:[]})},!0)}function l(e){for(var t,n=e.length,a=0;a<n;a++)s((t=e[a]).removedNodes,"disconnected",o,r),s(t.addedNodes,"connected",r,o)}function s(e,n,r,a){for(var o,u=new t(n),i=e.length,c=0;c<i;1===(o=e[c++]).nodeType&&f(o,u,n,r,a));}function f(e,t,n,r,o){a.has(e)&&!r.has(e)&&(o.delete(e),r.add(e),e.dispatchEvent(t));for(var u=e.children||[],i=u.length,c=0;c<i;f(u[c++],t,n,r,o));}}(e.ownerDocument)),a.add(e),e}}({Event:n,WeakSet:a}),M=function(e){var t=i(e),n=function(e){N.has(e)&&N.get(e).stack.forEach(function(e){var t=e.clean;(0,e.stop)(),t&&(e.clean=null,t())})}.bind(null,t);return function(){return function e(t,n){var r=t.nodeType;if(r){var a=1===r?t:function(e){for(var t=e.childNodes,n=t.length,r=0;r<n;){var a=t[r++];if(1===a.nodeType)return a}throw"unobservable"}(t);L(a),a.addEventListener("disconnected",n,!1)}else{var o=t.valueOf();o!==t&&e(o,n)}return t}(t.apply(this,arguments),n)}},T={};try{T.WeakMap=WeakMap}catch(e){T.WeakMap=function(e,t){var n=t.defineProperty,r=t.hasOwnProperty,a=o.prototype;return a.delete=function(e){return this.has(e)&&delete e[this._]},a.get=function(e){return this.has(e)?e[this._]:void 0},a.has=function(e){return r.call(e,this._)},a.set=function(e,t){return n(e,this._,{configurable:!0,value:t}),this},o;function o(t){n(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(u,this)}function u(e){this.set(e[0],e[1])}}(Math.random(),Object)}var j=T.WeakMap,O="object"!=("undefined"==typeof document?"undefined":typeof document),W=function(e){var t,n=(t=(document.defaultView.navigator||{}).userAgent,/(Firefox|Safari)\/(\d+)/.test(t)&&!/(Chrom[eium]+|Android)\/(\d+)/.test(t)),r=!("raw"in e)||e.propertyIsEnumerable("raw")||!Object.isFrozen(e.raw);if(n||r){var a={},o=function(e){for(var t=".",n=0;n<e.length;n++)t+=e[n].length+"."+e[n];return a[t]||(a[t]=e)};if(r)W=o;else{var u=new j;W=function(e){return u.get(e)||function(e,t){return u.set(e,t),t}(e,o(e))}}}else O=!0;return _(e)};function _(e){return O?e:W(e)}var D,F="-"+Math.random().toFixed(6)+"%",R=!1;try{"content"in(D=document.createElement("template"))&&(D.innerHTML='<p tabindex="'+F+'"></p>',D.content.childNodes[0].getAttribute("tabindex")==F)||(F="_dt: "+F.slice(1,-1)+";",R=!0)}catch(e){}var $="\x3c!--"+F+"--\x3e",V=8,G=1,z=3,H=/^(?:style|textarea)$/i,I=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;var Z=" \\f\\n\\r\\t",q="[^"+Z+"\\/>\"'=]+",P="["+Z+"]+"+q,B="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",J="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+q.replace("\\/","")+"))?)",K=new RegExp(B+P+J+"+)(["+Z+"]*/?>)","g"),Q=new RegExp(B+P+J+"*)(["+Z+"]*/>)","g"),U=new RegExp("("+P+"\\s*=\\s*)(['\"]?)"+$+"\\2","gi");function X(e,t,n,r){return"<"+t+n.replace(U,Y)+r}function Y(e,t,n){return t+(n||'"')+F+(n||'"')}function ee(e,t,n){return I.test(t)?e:"<"+t+n+"></"+t+">"}var te=function(e){var t="fragment",n="content"in a("template")?function(e){var t=a("template");return t.innerHTML=e,t.content}:function(e){var n=a(t),o=a("template"),u=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var i=RegExp.$1;o.innerHTML="<table>"+e+"</table>",u=o.querySelectorAll(i)}else o.innerHTML=e,u=o.childNodes;return r(n,u),n};return function(e,o){return("svg"===o?function(e){var n=a(t),o=a("div");return o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",r(n,o.firstChild.childNodes),n}:n)(e)};function r(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function a(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}}(document),ne={};try{ne.Map=Map}catch(e){ne.Map=function(){var e=0,t=[],n=[];return{delete:function(a){var o=r(a);return o&&(t.splice(e,1),n.splice(e,1)),o},forEach:function(e,r){t.forEach(function(t,a){e.call(r,n[a],t,this)},this)},get:function(t){return r(t)?n[e]:void 0},has:function(e){return r(e)},set:function(a,o){return n[r(a)?e:t.push(a)-1]=o,this}};function r(n){return-1<(e=t.indexOf(n))}}}var re=ne.Map,ae=[].indexOf,oe=function(e,t,n,r,a,o){for(var u=("selectedIndex"in t),i=u;r<a;){var c=e(n[r],1);if(t.insertBefore(c,o),u&&i&&c.selected){i=!i;var l=t.selectedIndex;t.selectedIndex=l<0?r:ae.call(t.querySelectorAll("option"),c)}r++}},ue=function(e,t){return e==t},ie=function(e){return e},ce=function(e,t,n,r,a,o,u){var i=o-a;if(i<1)return-1;for(;n-t>=i;){for(var c=t,l=a;c<n&&l<o&&u(e[c],r[l]);)c++,l++;if(l===o)return t;t=c+1}return-1},le=function(e,t,n,r,a){return n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:a},se=function(e,t,n,r){for(;n<r;)de(e(t[n++],-1))},fe=function(e,t,n){for(var r=1,a=t;r<a;){var o=(r+a)/2>>>0;n<e[o]?a=o:r=o+1}return r},he=function(e,t,n,r,a,o,u,i,c,l,s,f,h){!function(e,t,n,r,a,o,u,i,c){for(var l=new re,s=e.length,f=u,h=0;h<s;)switch(e[h++]){case 0:a++,f++;break;case 1:l.set(r[a],1),oe(t,n,r,a++,a,f<i?t(o[f],0):c);break;case-1:f++}for(h=0;h<s;)switch(e[h++]){case 0:u++;break;case-1:l.has(o[u])?u++:se(t,o,u++,u)}}(function(e,t,n,r,a,o,u){var i,c,l,s,f,h,d,v=n+o,p=[];e:for(i=0;i<=v;i++){if(i>50)return null;for(d=i-1,f=i?p[i-1]:[0,0],h=p[i]=[],c=-i;c<=i;c+=2){for(l=(s=c===-i||c!==i&&f[d+c-1]<f[d+c+1]?f[d+c+1]:f[d+c-1]+1)-c;s<o&&l<n&&u(r[a+s],e[t+l]);)s++,l++;if(s===o&&l===n)break e;h[i+c]=s}}var g=Array(i/2+v/2),m=g.length-1;for(i=p.length-1;i>=0;i--){for(;s>0&&l>0&&u(r[a+s-1],e[t+l-1]);)g[m--]=0,s--,l--;if(!i)break;d=i-1,f=i?p[i-1]:[0,0],(c=s-l)==-i||c!==i&&f[d+c-1]<f[d+c+1]?(l--,g[m--]=1):(s--,g[m--]=-1)}return g}(n,r,o,u,i,l,f)||function(e,t,n,r,a,o,u,i){var c=0,l=r<i?r:i,s=Array(l++),f=Array(l);f[0]=-1;for(var h=1;h<l;h++)f[h]=u;for(var d=new re,v=o;v<u;v++)d.set(a[v],v);for(var p=t;p<n;p++){var g=d.get(e[p]);null!=g&&-1<(c=fe(f,l,g))&&(f[c]=g,s[c]={newi:p,oldi:g,prev:s[c-1]})}for(c=--l,--u;f[c]>u;)--c;l=i+r-c;var m=Array(l),y=s[c];for(--n;y;){for(var w=y,b=w.newi,N=w.oldi;n>b;)m[--l]=1,--n;for(;u>N;)m[--l]=-1,--u;m[--l]=0,--n,--u,y=y.prev}for(;n>=t;)m[--l]=1,--n;for(;u>=o;)m[--l]=-1,--u;return m}(n,r,a,o,u,i,c,l),e,t,n,r,u,i,s,h)},de=function(e){return(e.remove||function(){var e=this.parentNode;e&&e.removeChild(this)}).call(e)};var ve=function(e,t,n,r){r||(r={});for(var a=r.compare||ue,o=r.node||ie,u=null==r.before?null:o(r.before,0),i=t.length,c=i,l=0,s=n.length,f=0;l<c&&f<s&&a(t[l],n[f]);)l++,f++;for(;l<c&&f<s&&a(t[c-1],n[s-1]);)c--,s--;var h=l===c,d=f===s;if(h&&d)return n;if(h&&f<s)return oe(o,e,n,f,s,le(o,t,l,i,u)),n;if(d&&l<c)return se(o,t,l,c),n;var v=c-l,p=s-f,g=-1;if(v<p){if(-1<(g=ce(n,f,s,t,l,c,a)))return oe(o,e,n,f,g,o(t[l],0)),oe(o,e,n,g+v,s,le(o,t,c,i,u)),n}else if(p<v&&-1<(g=ce(t,l,c,n,f,s,a)))return se(o,t,l,g),se(o,t,g+p,c),n;return v<2||p<2?(oe(o,e,n,f,s,o(t[l],0)),se(o,t,l,c),n):v===p&&function(e,t,n,r,a,o){for(;r<a&&o(n[r],e[t-1]);)r++,t--;return 0===t}(n,s,t,l,c,a)?(oe(o,e,n,f,s,le(o,t,c,i,u)),n):(he(o,e,n,f,s,p,t,l,c,v,i,a,u),n)},pe=function(e,t,n,r,a){var o="importNode"in e,u=e.createDocumentFragment();return u.appendChild(e.createTextNode("g")),u.appendChild(e.createTextNode("")),(o?e.importNode(u,!0):u.cloneNode(!0)).childNodes.length<2?function e(t,n){for(var r=t.cloneNode(),a=t.childNodes||[],o=a.length,u=0;n&&u<o;u++)r.appendChild(e(a[u],n));return r}:o?e.importNode:function(e,t){return e.cloneNode(!!t)}}(document),ge="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")};function me(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function ye(e,t,n,r){for(var a=new re,o=e.attributes,u=[],i=u.slice.call(o,0),c=i.length,l=0;l<c;){var s,f=i[l++],h=f.value===F;if(h||1<(s=f.value.split($)).length){var d=f.name;if(!a.has(d)){var v=n.shift().replace(h?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+d+")\\s*=\\s*('|\")[\\S\\s]*","i"),"$1"),p=o[v]||o[v.toLowerCase()];if(a.set(d,p),h)t.push(be(p,r,v,null));else{for(var g=s.length-2;g--;)n.shift();t.push(be(p,r,v,s))}}u.push(f)}}l=0;for(var m=(0<(c=u.length)&&R&&!("ownerSVGElement"in e));l<c;){var y=u[l++];m&&(y.value=""),e.removeAttribute(y.name)}var w=e.nodeName;if(/^script$/i.test(w)){var b=document.createElement(w);for(c=o.length,l=0;l<c;)b.setAttributeNode(o[l++].cloneNode(!0));b.textContent=e.textContent,e.parentNode.replaceChild(b,e)}}function we(e,t){return{type:"any",node:e,path:t}}function be(e,t,n,r){return{type:"attr",node:e,path:t,name:n,sparse:r}}function Ne(e,t){return{type:"text",node:e,path:t}}var ke=new j,xe=new j;function Ee(e,t){var n=(e.convert||function(e){return e.join($).replace(Q,ee).replace(K,X)})(t),r=e.transform;r&&(n=r(n));var a=te(n,e.type);!function(e){var t=e.childNodes,n=t.length;for(;n--;){var r=t[n];1!==r.nodeType&&0===ge.call(r.textContent).length&&e.removeChild(r)}}(a);var o=[];!function e(t,n,r,a){for(var o=t.childNodes,u=o.length,i=0;i<u;){var c=o[i];switch(c.nodeType){case G:var l=a.concat(i);ye(c,n,r,l),e(c,n,r,l);break;case V:var s=c.textContent;if(s===F)r.shift(),n.push(H.test(t.nodeName)?Ne(t,a):we(c,a.concat(i)));else switch(s.slice(0,2)){case"/*":if("*/"!==s.slice(-2))break;case"👻":t.removeChild(c),i--,u--}break;case z:H.test(t.nodeName)&&ge.call(c.textContent)===$&&(r.shift(),n.push(Ne(t,a)))}i++}}(a,o,t.slice(0),[]);var u={content:a,updates:function(n){for(var r=[],a=o.length,u=0,i=0;u<a;){var c=o[u++],l=me(n,c.path);switch(c.type){case"any":r.push({fn:e.any(l,[]),sparse:!1});break;case"attr":var s=c.sparse,f=e.attribute(l,c.name,c.node);null===s?r.push({fn:f,sparse:!1}):(i+=s.length-2,r.push({fn:f,sparse:!0,values:s}));break;case"text":r.push({fn:e.text(l),sparse:!1}),l.textContent=""}}return a+=i,function(){var e=arguments.length;if(a!==e-1)throw new Error(e-1+" values instead of "+a+"\n"+t.join("${value}"));for(var o=1,u=1;o<e;){var i=r[o-u];if(i.sparse){var c=i.values,l=c[0],s=1,f=c.length;for(u+=f-2;s<f;)l+=arguments[o++]+c[s++];i.fn(l)}else i.fn(arguments[o++])}return n}}};return ke.set(t,u),u}function Ce(e){return function(t){var n=xe.get(e);return null!=n&&n.template===t||(n=function(e,t){var n=ke.get(t)||Ee(e,t),r=pe.call(document,n.content,!0),a={content:r,template:t,updates:n.updates(r)};return xe.set(e,a),a}(e,t)),n.updates.apply(null,arguments),n.content}}var Se=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,a){var o,u;return function(i){var c,l,s,f;switch(typeof i){case"object":if(i){if("object"===o){if(!a&&u!==i)for(l in u)l in i||(r[l]="")}else a?r.value="":r.cssText="";for(l in c=a?{}:r,i)s="number"!=typeof(f=i[l])||e.test(l)?f:f+"px",!a&&/^--/.test(l)?c.setProperty(l,s):c[l]=s;o="object",a?r.value=function(e){var r,a=[];for(r in e)a.push(r.replace(t,n),":",e[r],";");return a.join("")}(u=c):u=i;break}default:u!=i&&(o="string",u=i,a?r.value=i||"":r.cssText=i||"")}}}}(),Ae=function(e,t){return(t=n.prototype).ELEMENT_NODE=1,t.nodeType=111,t.remove=function(e){var t=this.childNodes,n=this.firstChild,r=this.lastChild;if(this._=null,e&&2===t.length)r.parentNode.removeChild(r);else{var a=this.ownerDocument.createRange();a.setStartBefore(e?t[1]:n),a.setEndAfter(r),a.deleteContents()}return n},t.valueOf=function(e){var t=this._,n=null==t;if(n&&(t=this._=this.ownerDocument.createDocumentFragment()),n||e)for(var r=this.childNodes,a=0,o=r.length;a<o;a++)t.appendChild(r[a]);return t},n;function n(t){var n=this.childNodes=e.call(t,0);this.firstChild=n[0],this.lastChild=n[n.length-1],this.ownerDocument=n[0].ownerDocument,this._=null}}([].slice),Le=Array.isArray,Me=Object.create,Te=Object.freeze,je=Ae.prototype.nodeType,Oe=function(e,t){return e.nodeType===je?1/t<0?t?e.remove(!0):e.lastChild:t?e.valueOf(!0):e.firstChild:e},We=function(e,t){var n,r=!1,a=t.cloneNode(!0);return function(t){n!==t&&(n=t,a.value!==t&&(null==t?(r&&(r=!1,e.removeAttributeNode(a)),a.value=t):(a.value=t,r||(r=!0,e.setAttributeNode(a)))))}},_e=function(e,t){var n;return function(r){n!==r&&(n=r,e[t]!==r&&(null==r?(e[t]="",e.removeAttribute(t)):e[t]=r))}},De=/^(?:form|list)$/i,Fe=[].slice;function Re(e){return this.type=e,Ce(this)}function $e(e){return e(this)}Re.prototype={attribute:function(e,t,n){switch(t){case"class":if("ownerSVGElement"in e)return We(e,n);t="className";case"data":case"props":return _e(e,t);case"style":return Se(e,n,"ownerSVGElement"in e);case"ref":return function(e){return function(t){t.current=e}}(e);default:return"."===t.slice(0,1)?function(e,t,n){return n?function(n){try{e[t]=n}catch(r){e.setAttribute(t,n)}}:function(n){e[t]=n}}(e,t.slice(1),"ownerSVGElement"in e):"on"===t.slice(0,2)?function(e,t){var n,r=t.slice(2);return t.toLowerCase()in e&&(r=r.toLowerCase()),function(t){n!==t&&(n&&e.removeEventListener(r,n,!1),n=t,t&&e.addEventListener(r,t,!1))}}(e,t):t in e&&!("ownerSVGElement"in e||De.test(t))?_e(e,t):We(e,n)}},any:function(e,t){var n,r={node:Oe,before:e},a="ownerSVGElement"in e?"svg":"html",o=!1;return function u(i){switch(typeof i){case"string":case"number":case"boolean":o?n!==i&&(n=i,t[0].textContent=i):(o=!0,n=i,t=ve(e.parentNode,t,[function(e,t){return e.ownerDocument.createTextNode(t)}(e,i)],r));break;case"function":u(i(e));break;case"object":case"undefined":if(null==i){o=!1,t=ve(e.parentNode,t,[],r);break}default:if(o=!1,n=i,Le(i))if(0===i.length)t.length&&(t=ve(e.parentNode,t,[],r));else switch(typeof i[0]){case"string":case"number":case"boolean":u(String(i));break;case"function":u(i.map($e,e));break;case"object":Le(i[0])&&(i=i.concat.apply([],i));default:t=ve(e.parentNode,t,i,r)}else!function(e){return"ELEMENT_NODE"in e}(i)?"text"in i?u(String(i.text)):"any"in i?u(i.any):"html"in i?t=ve(e.parentNode,t,Fe.call(te([].concat(i.html).join(""),a).childNodes),r):"length"in i&&u(Fe.call(i)):t=ve(e.parentNode,t,11===i.nodeType?Fe.call(i.childNodes):[i],r)}}},text:function(e){var t;return function n(r){if(t!==r){t=r;var a=typeof r;"object"===a&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(Fe.call(r).join("")):"function"===a?n(r(e)):e.textContent=null==r?"":r}}}};var Ve=new j,Ge=function(e,t){var n=new j;return r.for=function(e,a){var o,u=n.get(e)||function(e){var t=Me(null);return n.set(e,t),t}(e);return u[a]||(u[a]=(o={sub:[],stack:[],wire:null},function(){return ze(t,o,r.apply(null,arguments))}))},r.node=function(){return ze(t,{sub:[],stack:[],wire:null},r.apply(null,arguments)).valueOf(!0)},r;function r(){return new Pe(e,function(e){for(var t=arguments.length,n=[_(e)],r=1;r<t;)n.push(arguments[r++]);return n}.apply(null,arguments))}},ze=function(e,t,n){var r=t.sub,a=t.stack,o={a:0,aLength:r.length,i:0,iLength:a.length},u=Ie(e,t,n,o),i=o.a,c=o.i,l=o.iLength;return i+1<o.aLength&&r.splice(i+1),c+1<l&&a.splice(c+1),u},He=function(e){var t={sub:[],stack:[],wire:null};return Ve.set(e,t),t},Ie=function(e,t,n,r){var a=t.stack,o=r.i,u=r.iLength,i=n.type,c=n.args;o===u&&(r.iLength=a.push({type:i,id:c[0],tag:null,wire:null})),Ze(e,t,c,r);var l=a[o];return o<u&&l.id===c[0]&&l.type===i?l.tag.apply(null,c):(l.type=i,l.id=c[0],l.tag=new e(i),l.wire=qe(l.tag.apply(null,c))),l.wire},Ze=function(e,t,n,r){for(var a=1,o=n.length;a<o;a++){var u=n[a];if("object"==typeof u&&u)if(u instanceof Pe)r.i++,n[a]=Ie(e,t,u,r);else if(Le(u))for(var i=0,c=u.length;i<c;i++){var l=u[i];if("object"==typeof l&&l&&l instanceof Pe){var s=t.sub,f=r.a;f===r.aLength&&(r.aLength=s.push({sub:[],stack:[],wire:null})),r.a++,u[i]=ze(e,s[f],l)}}}},qe=function(e){var t=e.childNodes,n=t.length;return 1===n?t[0]:n?new Ae(t):e};function Pe(e,t){this.type=e,this.args=t}Te(Pe);var Be=function(e){return{html:Ge("html",e),svg:Ge("svg",e),render:function(t,n){var r="function"==typeof n?n():n,a=Ve.get(t)||He(t),o=r instanceof Pe?ze(e,a,r):r;return o!==a.wire&&(a.wire=o,t.textContent="",t.appendChild(o.valueOf(!0))),t}}}(Re),Je=Be.render,Ke=Be.html,Qe=Be.svg;function Ue(){return Ke.for(A(null),"").apply(null,arguments)}function Xe(){return Qe.for(A(null),"").apply(null,arguments)}var Ye={html:Ue,svg:Xe};return e.contextual=function(e){var t=null,n=i(function(){return e.apply(t,arguments)});return function(){t=this;try{return n.apply(this,arguments)}finally{t=null}}},e.createContext=function(e){var t={value:e,provide:w};return m.set(t,[]),t},e.html=Ue,e.inner=Ye,e.neverland=function(e){return function(){return M(e).apply(null,arguments)}},e.render=Je,e.svg=Xe,e.useCallback=function(e,t){return S(function(){return e},t)},e.useContext=function(e){var t=c(),n=t.hook,r=t.args,a=m.get(e),o={hook:n,args:r};return a.some(b,o)||a.push(o),e.value},e.useEffect=E,e.useLayoutEffect=C,e.useMemo=S,e.useReducer=function(e,t,n){var r=g(n?n(t):t);return[r[0],function(t){r[1](e(r[0],t))}]},e.useRef=A,e.useState=g,e}({});
