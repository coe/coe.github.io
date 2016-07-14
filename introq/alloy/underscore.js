(function(){var t=this,e=t._,i={},n=Array.prototype,r=Object.prototype,o=Function.prototype,a=n.push,s=n.slice,l=n.concat,u=r.toString,c=r.hasOwnProperty,d=n.forEach,p=n.map,h=n.reduce,f=n.reduceRight,_=n.filter,y=n.every,g=n.some,m=n.indexOf,v=n.lastIndexOf,b=Array.isArray,T=Object.keys,w=o.bind,A=function(t){return t instanceof A?t:this instanceof A?(this._wrapped=t,void 0):new A(t)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=A),exports._=A):t._=A,A.VERSION="1.4.4";var E=A.each=A.forEach=function(t,e,n){if(null!=t)if(d&&t.forEach===d)t.forEach(e,n);else if(t.length===+t.length){for(var r=0,o=t.length;o>r;r++)if(e.call(n,t[r],r,t)===i)return}else for(var a in t)if(A.has(t,a)&&e.call(n,t[a],a,t)===i)return};A.map=A.collect=function(t,e,i){var n=[];return null==t?n:p&&t.map===p?t.map(e,i):(E(t,function(t,r,o){n[n.length]=e.call(i,t,r,o)}),n)};var S="Reduce of empty array with no initial value";A.reduce=A.foldl=A.inject=function(t,e,i,n){var r=arguments.length>2;if(null==t&&(t=[]),h&&t.reduce===h)return n&&(e=A.bind(e,n)),r?t.reduce(e,i):t.reduce(e);if(E(t,function(t,o,a){r?i=e.call(n,i,t,o,a):(i=t,r=!0)}),!r)throw new TypeError(S);return i},A.reduceRight=A.foldr=function(t,e,i,n){var r=arguments.length>2;if(null==t&&(t=[]),f&&t.reduceRight===f)return n&&(e=A.bind(e,n)),r?t.reduceRight(e,i):t.reduceRight(e);var o=t.length;if(o!==+o){var a=A.keys(t);o=a.length}if(E(t,function(s,l,u){l=a?a[--o]:--o,r?i=e.call(n,i,t[l],l,u):(i=t[l],r=!0)}),!r)throw new TypeError(S);return i},A.find=A.detect=function(t,e,i){var n;return I(t,function(t,r,o){return e.call(i,t,r,o)?(n=t,!0):void 0}),n},A.filter=A.select=function(t,e,i){var n=[];return null==t?n:_&&t.filter===_?t.filter(e,i):(E(t,function(t,r,o){e.call(i,t,r,o)&&(n[n.length]=t)}),n)},A.reject=function(t,e,i){return A.filter(t,function(t,n,r){return!e.call(i,t,n,r)},i)},A.every=A.all=function(t,e,n){e||(e=A.identity);var r=!0;return null==t?r:y&&t.every===y?t.every(e,n):(E(t,function(t,o,a){return(r=r&&e.call(n,t,o,a))?void 0:i}),!!r)};var I=A.some=A.any=function(t,e,n){e||(e=A.identity);var r=!1;return null==t?r:g&&t.some===g?t.some(e,n):(E(t,function(t,o,a){return r||(r=e.call(n,t,o,a))?i:void 0}),!!r)};A.contains=A.include=function(t,e){return null==t?!1:m&&t.indexOf===m?-1!=t.indexOf(e):I(t,function(t){return t===e})},A.invoke=function(t,e){var i=s.call(arguments,2),n=A.isFunction(e);return A.map(t,function(t){return(n?e:t[e]).apply(t,i)})},A.pluck=function(t,e){return A.map(t,function(t){return t[e]})},A.where=function(t,e,i){return A.isEmpty(e)?i?null:[]:A[i?"find":"filter"](t,function(t){for(var i in e)if(e[i]!==t[i])return!1;return!0})},A.findWhere=function(t,e){return A.where(t,e,!0)},A.max=function(t,e,i){if(!e&&A.isArray(t)&&t[0]===+t[0]&&65535>t.length)return Math.max.apply(Math,t);if(!e&&A.isEmpty(t))return-1/0;var n={computed:-1/0,value:-1/0};return E(t,function(t,r,o){var a=e?e.call(i,t,r,o):t;a>=n.computed&&(n={value:t,computed:a})}),n.value},A.min=function(t,e,i){if(!e&&A.isArray(t)&&t[0]===+t[0]&&65535>t.length)return Math.min.apply(Math,t);if(!e&&A.isEmpty(t))return 1/0;var n={computed:1/0,value:1/0};return E(t,function(t,r,o){var a=e?e.call(i,t,r,o):t;n.computed>a&&(n={value:t,computed:a})}),n.value},A.shuffle=function(t){var e,i=0,n=[];return E(t,function(t){e=A.random(i++),n[i-1]=n[e],n[e]=t}),n};var x=function(t){return A.isFunction(t)?t:function(e){return e[t]}};A.sortBy=function(t,e,i){var n=x(e);return A.pluck(A.map(t,function(t,e,r){return{value:t,index:e,criteria:n.call(i,t,e,r)}}).sort(function(t,e){var i=t.criteria,n=e.criteria;if(i!==n){if(i>n||void 0===i)return 1;if(n>i||void 0===n)return-1}return t.index<e.index?-1:1}),"value")};var L=function(t,e,i,n){var r={},o=x(e||A.identity);return E(t,function(e,a){var s=o.call(i,e,a,t);n(r,s,e)}),r};A.groupBy=function(t,e,i){return L(t,e,i,function(t,e,i){(A.has(t,e)?t[e]:t[e]=[]).push(i)})},A.countBy=function(t,e,i){return L(t,e,i,function(t,e){A.has(t,e)||(t[e]=0),t[e]++})},A.sortedIndex=function(t,e,i,n){i=null==i?A.identity:x(i);for(var r=i.call(n,e),o=0,a=t.length;a>o;){var s=o+a>>>1;r>i.call(n,t[s])?o=s+1:a=s}return o},A.toArray=function(t){return t?A.isArray(t)?s.call(t):t.length===+t.length?A.map(t,A.identity):A.values(t):[]},A.size=function(t){return null==t?0:t.length===+t.length?t.length:A.keys(t).length},A.first=A.head=A.take=function(t,e,i){return null==t?void 0:null==e||i?t[0]:s.call(t,0,e)},A.initial=function(t,e,i){return s.call(t,0,t.length-(null==e||i?1:e))},A.last=function(t,e,i){return null==t?void 0:null==e||i?t[t.length-1]:s.call(t,Math.max(t.length-e,0))},A.rest=A.tail=A.drop=function(t,e,i){return s.call(t,null==e||i?1:e)},A.compact=function(t){return A.filter(t,A.identity)};var N=function(t,e,i){return E(t,function(t){A.isArray(t)?e?a.apply(i,t):N(t,e,i):i.push(t)}),i};A.flatten=function(t,e){return N(t,e,[])},A.without=function(t){return A.difference(t,s.call(arguments,1))},A.uniq=A.unique=function(t,e,i,n){A.isFunction(e)&&(n=i,i=e,e=!1);var r=i?A.map(t,i,n):t,o=[],a=[];return E(r,function(i,n){(e?n&&a[a.length-1]===i:A.contains(a,i))||(a.push(i),o.push(t[n]))}),o},A.union=function(){return A.uniq(l.apply(n,arguments))},A.intersection=function(t){var e=s.call(arguments,1);return A.filter(A.uniq(t),function(t){return A.every(e,function(e){return A.indexOf(e,t)>=0})})},A.difference=function(t){var e=l.apply(n,s.call(arguments,1));return A.filter(t,function(t){return!A.contains(e,t)})},A.zip=function(){for(var t=s.call(arguments),e=A.max(A.pluck(t,"length")),i=Array(e),n=0;e>n;n++)i[n]=A.pluck(t,""+n);return i},A.object=function(t,e){if(null==t)return{};for(var i={},n=0,r=t.length;r>n;n++)e?i[t[n]]=e[n]:i[t[n][0]]=t[n][1];return i},A.indexOf=function(t,e,i){if(null==t)return-1;var n=0,r=t.length;if(i){if("number"!=typeof i)return n=A.sortedIndex(t,e),t[n]===e?n:-1;n=0>i?Math.max(0,r+i):i}if(m&&t.indexOf===m)return t.indexOf(e,i);for(;r>n;n++)if(t[n]===e)return n;return-1},A.lastIndexOf=function(t,e,i){if(null==t)return-1;var n=null!=i;if(v&&t.lastIndexOf===v)return n?t.lastIndexOf(e,i):t.lastIndexOf(e);for(var r=n?i:t.length;r--;)if(t[r]===e)return r;return-1},A.range=function(t,e,i){1>=arguments.length&&(e=t||0,t=0),i=arguments[2]||1;for(var n=Math.max(Math.ceil((e-t)/i),0),r=0,o=Array(n);n>r;)o[r++]=t,t+=i;return o},A.bind=function(t,e){if(t.bind===w&&w)return w.apply(t,s.call(arguments,1));var i=s.call(arguments,2);return function(){return t.apply(e,i.concat(s.call(arguments)))}},A.partial=function(t){var e=s.call(arguments,1);return function(){return t.apply(this,e.concat(s.call(arguments)))}},A.bindAll=function(t){var e=s.call(arguments,1);return 0===e.length&&(e=A.functions(t)),E(e,function(e){t[e]=A.bind(t[e],t)}),t},A.memoize=function(t,e){var i={};return e||(e=A.identity),function(){var n=e.apply(this,arguments);return A.has(i,n)?i[n]:i[n]=t.apply(this,arguments)}},A.delay=function(t,e){var i=s.call(arguments,2);return setTimeout(function(){return t.apply(null,i)},e)},A.defer=function(t){return A.delay.apply(A,[t,1].concat(s.call(arguments,1)))},A.throttle=function(t,e){var i,n,r,o,a=0,s=function(){a=new Date,r=null,o=t.apply(i,n)};return function(){var l=new Date,u=e-(l-a);return i=this,n=arguments,0>=u?(clearTimeout(r),r=null,a=l,o=t.apply(i,n)):r||(r=setTimeout(s,u)),o}},A.debounce=function(t,e,i){var n,r;return function(){var o=this,a=arguments,s=function(){n=null,i||(r=t.apply(o,a))},l=i&&!n;return clearTimeout(n),n=setTimeout(s,e),l&&(r=t.apply(o,a)),r}},A.once=function(t){var e,i=!1;return function(){return i?e:(i=!0,e=t.apply(this,arguments),t=null,e)}},A.wrap=function(t,e){return function(){var i=[t];return a.apply(i,arguments),e.apply(this,i)}},A.compose=function(){var t=arguments;return function(){for(var e=arguments,i=t.length-1;i>=0;i--)e=[t[i].apply(this,e)];return e[0]}},A.after=function(t,e){return 0>=t?e():function(){return 1>--t?e.apply(this,arguments):void 0}},A.keys=T||function(t){if(t!==Object(t))throw new TypeError("Invalid object");var e=[];for(var i in t)A.has(t,i)&&(e[e.length]=i);return e},A.values=function(t){var e=[];for(var i in t)A.has(t,i)&&e.push(t[i]);return e},A.pairs=function(t){var e=[];for(var i in t)A.has(t,i)&&e.push([i,t[i]]);return e},A.invert=function(t){var e={};for(var i in t)A.has(t,i)&&(e[t[i]]=i);return e},A.functions=A.methods=function(t){var e=[];for(var i in t)A.isFunction(t[i])&&e.push(i);return e.sort()},A.extend=function(t){return E(s.call(arguments,1),function(e){if(e)for(var i in e)t[i]=e[i]}),t},A.pick=function(t){var e={},i=l.apply(n,s.call(arguments,1));return E(i,function(i){i in t&&(e[i]=t[i])}),e},A.omit=function(t){var e={},i=l.apply(n,s.call(arguments,1));for(var r in t)A.contains(i,r)||(e[r]=t[r]);return e},A.defaults=function(t){return E(s.call(arguments,1),function(e){if(e)for(var i in e)null==t[i]&&(t[i]=e[i])}),t},A.clone=function(t){return A.isObject(t)?A.isArray(t)?t.slice():A.extend({},t):t},A.tap=function(t,e){return e(t),t};var O=function(t,e,i,n){if(t===e)return 0!==t||1/t==1/e;if(null==t||null==e)return t===e;t instanceof A&&(t=t._wrapped),e instanceof A&&(e=e._wrapped);var r=u.call(t);if(r!=u.call(e))return!1;switch(r){case"[object String]":return t==e+"";case"[object Number]":return t!=+t?e!=+e:0==t?1/t==1/e:t==+e;case"[object Date]":case"[object Boolean]":return+t==+e;case"[object RegExp]":return t.source==e.source&&t.global==e.global&&t.multiline==e.multiline&&t.ignoreCase==e.ignoreCase}if("object"!=typeof t||"object"!=typeof e)return!1;for(var o=i.length;o--;)if(i[o]==t)return n[o]==e;i.push(t),n.push(e);var a=0,s=!0;if("[object Array]"==r){if(a=t.length,s=a==e.length)for(;a--&&(s=O(t[a],e[a],i,n)););}else{var l=t.constructor,c=e.constructor;if(l!==c&&!(A.isFunction(l)&&l instanceof l&&A.isFunction(c)&&c instanceof c))return!1;for(var d in t)if(A.has(t,d)&&(a++,!(s=A.has(e,d)&&O(t[d],e[d],i,n))))break;if(s){for(d in e)if(A.has(e,d)&&!a--)break;s=!a}}return i.pop(),n.pop(),s};A.isEqual=function(t,e){return O(t,e,[],[])},A.isEmpty=function(t){if(null==t)return!0;if(A.isArray(t)||A.isString(t))return 0===t.length;for(var e in t)if(A.has(t,e))return!1;return!0},A.isElement=function(t){return!(!t||1!==t.nodeType)},A.isArray=b||function(t){return"[object Array]"==u.call(t)},A.isObject=function(t){return t===Object(t)},E(["Arguments","Function","String","Number","Date","RegExp"],function(t){A["is"+t]=function(e){return u.call(e)=="[object "+t+"]"}}),A.isArguments(arguments)||(A.isArguments=function(t){return!(!t||!A.has(t,"callee"))}),A.isFunction=function(t){return"function"==typeof t},A.isFinite=function(t){return isFinite(t)&&!isNaN(parseFloat(t))},A.isNaN=function(t){return A.isNumber(t)&&t!=+t},A.isBoolean=function(t){return t===!0||t===!1||"[object Boolean]"==u.call(t)},A.isNull=function(t){return null===t},A.isUndefined=function(t){return void 0===t},A.has=function(t,e){return c.call(t,e)},A.noConflict=function(){return t._=e,this},A.identity=function(t){return t},A.times=function(t,e,i){for(var n=Array(t),r=0;t>r;r++)n[r]=e.call(i,r);return n},A.random=function(t,e){return null==e&&(e=t,t=0),t+Math.floor(Math.random()*(e-t+1))};var k={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};k.unescape=A.invert(k.escape);var C={escape:RegExp("["+A.keys(k.escape).join("")+"]","g"),unescape:RegExp("("+A.keys(k.unescape).join("|")+")","g")};A.each(["escape","unescape"],function(t){A[t]=function(e){return null==e?"":(""+e).replace(C[t],function(e){return k[t][e]})}}),A.result=function(t,e){if(null==t)return null;var i=t[e];return A.isFunction(i)?i.call(t):i},A.mixin=function(t){E(A.functions(t),function(e){var i=A[e]=t[e];A.prototype[e]=function(){var t=[this._wrapped];return a.apply(t,arguments),M.call(this,i.apply(A,t))}})};var P=0;A.uniqueId=function(t){var e=++P+"";return t?t+e:e},A.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var R=/(.)^/,U={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;A.template=function(t,e,i){var n;i=A.defaults({},i,A.templateSettings);var r=RegExp([(i.escape||R).source,(i.interpolate||R).source,(i.evaluate||R).source].join("|")+"|$","g"),o=0,a="__p+='";t.replace(r,function(e,i,n,r,s){return a+=t.slice(o,s).replace(D,function(t){return"\\"+U[t]}),i&&(a+="'+\n((__t=("+i+"))==null?'':_.escape(__t))+\n'"),n&&(a+="'+\n((__t=("+n+"))==null?'':__t)+\n'"),r&&(a+="';\n"+r+"\n__p+='"),o=s+e.length,e}),a+="';\n",i.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{n=Function(i.variable||"obj","_",a)}catch(s){throw s.source=a,s}if(e)return n(e,A);var l=function(t){return n.call(this,t,A)};return l.source="function("+(i.variable||"obj")+"){\n"+a+"}",l},A.chain=function(t){return A(t).chain()};var M=function(t){return this._chain?A(t).chain():t};A.mixin(A),E(["pop","push","reverse","shift","sort","splice","unshift"],function(t){var e=n[t];A.prototype[t]=function(){var i=this._wrapped;return e.apply(i,arguments),"shift"!=t&&"splice"!=t||0!==i.length||delete i[0],M.call(this,i)}}),E(["concat","join","slice"],function(t){var e=n[t];A.prototype[t]=function(){return M.call(this,e.apply(this._wrapped,arguments))}}),A.extend(A.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);