define(["Ti/_/has"],function(e){function a(e,a){return[].concat(Array.prototype.slice.call(e,a||0))}function t(e,t){var i=a(arguments,2),o=s(t,"String");return function(){var s=e||n,r=o?s[t]:t;return r&&r.apply(s,i.concat(a(arguments)))}}var i,n=this,s=require.is;return{hitch:i=function(e,a){if(arguments.length>2)return t.apply(n,arguments);if(a||(a=e,e=null),s(a,"String")){if(e=e||n,!e[a])throw['hitch: scope["',a,'"] is null (scope="',e,'")'].join("");return function(){return e[a].apply(e,arguments||[])}}return e?function(){return a.apply(e,arguments||[])}:a},isDef:function(e){return!s(e,"Undefined")},mixProps:function(a,t,n){var o,r,_,l={properties:1,constants:0};for(_ in t)if(t.hasOwnProperty(_)&&!/^(constructor|__values__)$/.test(_))if(l.hasOwnProperty(_)){o=a[_]||(a[_]={}),o.__values__||(o.__values__={});for(r in t[_])(function(t,n,o,r,_,l,d){var c=s(_,"Object"),u=c&&s(_.get,"Function")&&_.get,p=c&&s(_.set,"Function")&&_.set,m=c&&s(_.post),g="Function"===m?_.post:"String"===m?i(n,_.post):0;c&&(u||p||g)?r[t]=_.value:s(_,"Function")?u=_:r[t]=_,Object.defineProperty(o,t,{get:function(){return u?u.call(n,r[t]):r[t]},set:function(e){var a=[e,r[t],t];a[0]=r[t]=p?p.apply(n,a):e,g&&g.apply(n,a)},configurable:!0,enumerable:!0}),Object.defineProperty(a,t,{get:function(){return o[t]},set:function(e){if(!d)throw Error('Property "'+t+'" is read only');o[t]=e},configurable:!0,enumerable:!0}),e("declare-property-methods")&&(d||t.toUpperCase()!==t)&&(n["get"+l]=function(){return o[t]},d&&(n["set"+l]=function(e){return o[t]=e}))})(r,a,o,o.__values__,t[_][r],r.substring(0,1).toUpperCase()+r.substring(1),l[_])}else n&&(a[_]=t[_]);return a},generateAccessors:function(e,a,t){function i(a){var t="get"+a.substring(0,1).toUpperCase()+a.substring(1);t in e.prototype||(e.prototype[t]=function(){return this[a]})}function n(a){var t="set"+a.substring(0,1).toUpperCase()+a.substring(1);t in e.prototype||(e.prototype[t]=function(e){return this[a]=e})}a&&a.split(",").forEach(i),t&&t.split(",").forEach(function(e){i(e),n(e)})},setObject:function(e){var a,t,i=e.split("."),n=i.pop(),o=window,r=0,_=i[r++];if(_)do o=_ in o?o[_]:o[_]={};while(o&&(_=i[r++]));if(o&&n){t=n in o?o[n]:{};for(r=1;arguments.length>r;r++)s(a=arguments[r],"Object")?this.mixProps(t,a,1):t=a}return o[n]=t},toArray:a,urlEncode:function(e){var a,t,i,n,o=encodeURIComponent,r=[];for(a in e)if(e.hasOwnProperty(a))for(s(t=e[a],"Array")||(t=[t]),a=o(a)+"=",i=0,n=t.length;n>i;)r.push(a+o(t[i++]));return r.join("&")},val:function(e,a){return void 0===e?a:e}}});