define(["Ti/_/Evented","Ti/_/lang"],function(e,t){function i(e){if(!a){var t=localStorage.getItem(s);a=require.is(t,"String")&&JSON.parse(t)||{}}return e?a[e]:a}function r(e,r,n){var o=i(e);return void 0===o?t.val(n,null):l[r]?l[r](o):o}function n(e,t,r){e&&(i(),void 0===r||null===r?delete a[e]:a[e]=l[t]?l[t](r):r,localStorage.setItem(s,JSON.stringify(a)))}var o,a,s="ti:properties",l={Bool:function(e){return!!e},Double:function(e){return parseFloat(e)},Int:function(e){return parseInt(e)},List:function(e){return require.is(e,"Array")?e:[e]},Object:function(e){return e},String:function(e){return""+e}},u=t.setObject("Ti.App.Properties",e,{hasProperty:function(e){return!!i(e)},listProperties:function(){var e,t=i(),r=[];for(e in t)r.push(e);return r},removeProperty:function(e){n(e)}});for(o in l)(function(e){u["get"+e]=function(t,i){return r(t,e,i)},u["set"+e]=function(t,i){n(t,e,i)}})(o);return u});