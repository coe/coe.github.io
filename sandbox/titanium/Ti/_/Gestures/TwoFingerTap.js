define(["Ti/_/declare","Ti/_/lang"],function(e,a){var t=null,i=null,n=null,s=100,o=25;return a.setObject("Ti._.Gestures.TwoFingerTap",{processTouchStartEvent:function(e){var a=e.changedTouches[0].clientX,o=e.changedTouches[0].clientY,r=e.touches.length,_=e.changedTouches.length;1==r&&1==_?(t=[{x:a,y:o}],n=setTimeout(function(){t=null,i=null},s)):2==r&&1==_?(clearTimeout(n),t&&t.push({x:a,y:o})):2==r&&2==_?t=[{x:a,y:o},{x:e.changedTouches[1].clientX,y:e.changedTouches[1].clientY}]:(t=null,i=null)},processTouchEndEvent:function(e){var a,r,_,l=e.changedTouches,d=l[0].clientX,c=l[0].clientY,u=e.touches.length,p=l.length,m={};if(1==u&&1==p)i=[{x:d,y:c}],n=setTimeout(function(){t=null,i=null},s);else if(0!==u||1!==p&&2!==p)t=null,i=null;else if(t&&2===t.length){for(i||(i=[]),a=0;p>a;a++)i.push({x:l[a].clientX,y:l[a].clientY});return 2===i.length&&(r=o>Math.abs(t[0].x-i[0].x)&&o>Math.abs(t[0].y-i[0].y),_=o>Math.abs(t[1].x-i[1].x)&&o>Math.abs(t[1].y-i[1].y),r&&_||(r=o>Math.abs(t[0].x-i[1].x)&&o>Math.abs(t[0].y-i[1].y),_=o>Math.abs(t[1].x-i[0].x)&&o>Math.abs(t[1].y-i[0].y)),r&&_&&(m.twofingertap=[{x:(t[0].x+t[1].x)/2,y:(t[0].y+t[1].y)/2}])),t=null,i=null,m}},processTouchCancelEvent:function(){t=null,i=null}})});