define(function(){function e(e){if(!(a||e&&"readystatechange"==e.type&&!o[r.readyState])){for(;s.length;)s.shift()();a=1}}function t(){o[r.readyState]?e():setTimeout(t,30)}function i(e,t,i){var r,n,o;if(require.is(e,"Number")||(i=t,t=e,e=1e3),r=i?function(){i.call(t)}:t,a)r();else{for(r.priority=e,n=0,o=s.length;o>n&&e>=s[n].priority;n++);s.splice(n,0,r)}}var r=document,n=require.on,o={loaded:1,complete:1},a=!!o[r.readyState],s=[];return a||(s.concat([n(r,"DOMContentLoaded",e),n(window,"load",e)]),"onreadystatechange"in r?s.push(require.on(r,"readystatechange",e)):t()),i.load=function(e,t,r){i(r)},i});