define({stop:function(e){e&&(e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation())},off:function(e){for(var a,e=require.is(e,"Array")?e:[e],t=0,i=e.length;i>t;)(a=e[t++])&&a();e.splice(0)}});