define(["Ti/_","Ti/_/Evented","Ti/_/lang"],function(e,t,i){var r=navigator.userAgent.toLowerCase(),o=i.setObject("Ti.Platform.DisplayCaps",t,{constants:{density:function(){switch(r){case"iphone":return"medium";case"ipad":return"medium";default:return""}},dpi:e.dpi,platformHeight:window.innerHeight,platformWidth:window.innerWidth}});return Ti.Platform.displayCaps=o});