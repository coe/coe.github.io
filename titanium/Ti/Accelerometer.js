define(["Ti/_/Evented","Ti/_/lang"],function(e,t){var i=Date.now(),r={},o=.2,n=t.setObject("Ti.Accelerometer",e);return require.on(window,"devicemotion",function(e){var t,a=e.acceleration||e.accelerationIncludingGravity,s=a&&{x:a.x,y:a.y,z:a.z,source:e.source};s&&(void 0!==r.x&&(Math.abs(r.x-s.x)>o||Math.abs(r.y-s.y)>o||Math.abs(r.z-s.z)>o)&&(t=Date.now(),s.timestamp=t-i,i=t,n.fireEvent("update",s)),r=s)}),n});