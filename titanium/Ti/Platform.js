define(["Ti/_","Ti/_/browser","Ti/_/Evented","Ti/_/lang","Ti/Locale","Ti/_/dom","Ti/UI"],function(e,t,i,r,o,n,a){function s(){l||(l=1,d.cookie=c+"="+encodeURIComponent(p)+"; expires="+new Date(Date.now()+63072e7).toUTCString(),localStorage.setItem(c,p))}var l,u,d=document,c="ti:mid",h=d.cookie.match(new RegExp("(?:^|; )"+c+"=([^;]*)")),p=h?decodeURIComponent(h[1]):void 0,f=require.on,g=require.config.ti,U=n.create("iframe",{id:"urlOpener",style:{display:"none"}},d.body),v=navigator,w=v.battery||v.webkitBattery||v.mozBattery;return p||(p=localStorage.getItem(c)),p||localStorage.setItem(c,p=e.uuid()),f(window,"beforeunload",s),f(window,"unload",s),u=r.setObject("Ti.Platform",i,{canOpenURL:function(e){return!!e},createUUID:e.uuid,is24HourTimeFormat:function(){return!1},openURL:function(e){if(/^([tel|sms|mailto])/.test(e))U.contentWindow.location.href=e;else{var t=a.createWindow({layout:a._LAYOUT_CONSTRAINING_VERTICAL,backgroundColor:"#888"}),i=a.createButton({top:2,bottom:2,title:"Close"}),r=a.createWebView({width:a.FILL,height:a.FILL});i.addEventListener("singletap",function(){t.close()}),t.add(i),t.add(r),t.open(),setTimeout(function(){r.url=e},1)}},properties:{batteryMonitoring:!1},constants:{BATTERY_STATE_CHARGING:1,BATTERY_STATE_FULL:2,BATTERY_STATE_UNKNOWN:-1,BATTERY_STATE_UNPLUGGED:0,address:void 0,architecture:void 0,availableMemory:void 0,batteryLevel:function(){return this.batteryMonitoring&&w?100*w.level:-1},batteryState:function(){return this.batteryMonitoring&&w&&w.charging?this.BATTERY_STATE_CHARGING:this.BATTERY_STATE_UNKNOWN},isBrowser:!0,id:p,locale:o,macaddress:void 0,model:v.userAgent,name:g.platformName,netmask:void 0,osname:g.osName,ostype:v.platform,runtime:t.runtime,processorCount:void 0,username:void 0,version:g.version}}),w&&require.on(w,"chargingchange",function(){u.batteryMonitoring&&u.fireEvent("battery",{level:u.batteryLevel,state:u.batteryState})}),u});