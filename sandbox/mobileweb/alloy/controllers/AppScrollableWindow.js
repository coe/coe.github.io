function Controller(){require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="AppScrollableWindow",arguments[0]?arguments[0].__parentSymbol:null,arguments[0]?arguments[0].$model:null,arguments[0]?arguments[0].__itemTemplate:null;var e=this,t={};e.__views.AppScrollableWindow=Ti.UI.createWindow({backgroundColor:"#fff",title:L("app_title","tsuyoshi hyuga's apps."),id:"AppScrollableWindow"}),e.__views.AppScrollableWindow&&e.addTopLevelView(e.__views.AppScrollableWindow),e.__views.con=Ti.UI.createView({top:0,bottom:0,layout:"vertical",id:"con"}),e.__views.AppScrollableWindow.add(e.__views.con);var i=[];e.__views.loadingview=Ti.UI.createView({id:"loadingview",backgroundColor:"black"}),i.push(e.__views.loadingview),e.__views.loading=Alloy.createWidget("com.appcelerator.loading","widget",{id:"loading",__parentSymbol:e.__views.loadingview}),e.__views.loading.setParent(e.__views.loadingview),e.__views.scrollableView=Ti.UI.createScrollableView({views:i,id:"scrollableView",showPagingControl:"true"}),e.__views.con.add(e.__views.scrollableView),t.destroy=function(){},_.extend(e,e.__views);var r,n,o,a,s,l,u;r="coe.app@gmail.com",u=null,s=function(){},o=function(e,t){var i,r,n,o;return i=!1,n=function(){var e,t,i;return t=window.navigator.userAgent.toLowerCase(),i=window.navigator.appVersion.toLowerCase(),e="unknown",-1!==t.indexOf("msie")?e=-1!==i.indexOf("msie 6.")?"ie6":-1!==i.indexOf("msie 7.")?"ie7":-1!==i.indexOf("msie 8.")?"ie8":-1!==i.indexOf("msie 9.")?"ie9":-1!==i.indexOf("msie 10.")?"ie10":"ie":-1!==t.indexOf("trident/7")?e="ie11":-1!==t.indexOf("chrome")?e="chrome":-1!==t.indexOf("safari")?e="safari":-1!==t.indexOf("opera")?e="opera":-1!==t.indexOf("firefox")&&(e="firefox"),e},"safari"===n()||-1!==n().indexOf("ie")||(i=!0),i?(o=ANDROID_URL+obj.data.bundleId,r=Ti.Network.createHTTPClient({onload:function(){return t(!0)},onerror:function(){return t(!1)},onreadystatechange:function(){},onsendstream:function(){},ondatastream:function(){}}),r.open("GET",o),r.send()):t(!1)},l=function(){var t;return t=0,setInterval(function(){t=t>=e.scrollableView.views.length?0:e.scrollableView.currentPage+1,e.scrollableView.scrollToView(t)},5e3)},n=function(e,t){var i;return Ti.API.debug("appinfo "+JSON.stringify(t)),i=Alloy.createController("AppContainer",t).getView(),Ti.API.debug(i),Alloy.Globals.currentTab.open(i)},a=function(){var e;return e=Ti.UI.createEmailDialog(),e.toRecipients=[r],e.open()},function(){var t;return e.loading.setOpacity(1),t=require("AppStoreClient"),t.getItunesData(function(t){var i,r,n,o,a;for(u=t,o=0,a=t.length;a>o;o++)i=t[o],Ti.API.debug("dtd:"+JSON.stringify(i)),r={title:i.trackName,image:i.screenshotUrls[0],genre:i.genres[0],data:i},n=Alloy.createController("AppScrollableView",r).getView(),e.scrollableView.addView(n);return l(),e.loading.setOpacity(0),e.scrollableView.removeView(e.loadingview)},function(){return alert("error")})}(),_.extend(e,t)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;