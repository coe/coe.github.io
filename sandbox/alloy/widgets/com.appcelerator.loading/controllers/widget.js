function WPATH(e){var t=e.lastIndexOf("/"),i=-1===t?"com.appcelerator.loading/"+e:e.substring(0,t)+"/com.appcelerator.loading/"+e.substring(t+1);return i}function Controller(){new(require("alloy/widget"))("com.appcelerator.loading"),this.__widgetId="com.appcelerator.loading",require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="widget",arguments[0]?arguments[0].__parentSymbol:null,arguments[0]?arguments[0].$model:null,arguments[0]?arguments[0].__itemTemplate:null;var e=this,t={};e.__views.loading=Ti.UI.createImageView({height:20,width:20,images:["/images/com.appcelerator.loading/00.png","/images/com.appcelerator.loading/01.png","/images/com.appcelerator.loading/02.png","/images/com.appcelerator.loading/03.png","/images/com.appcelerator.loading/04.png","/images/com.appcelerator.loading/05.png","/images/com.appcelerator.loading/06.png","/images/com.appcelerator.loading/07.png","/images/com.appcelerator.loading/08.png","/images/com.appcelerator.loading/09.png","/images/com.appcelerator.loading/10.png","/images/com.appcelerator.loading/11.png"],id:"loading"}),e.__views.loading&&e.addTopLevelView(e.__views.loading),t.destroy=function(){},_.extend(e,e.__views);var i=arguments[0]||{};for(var r in i)"id"===r||/^(?:__|#|$)/.test(r)||(e.loading[r]=i[r]);e.loading.duration=100,e.loading.start(),t.setOpacity=function(t){e.loading.opacity=t},_.extend(e,t)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;