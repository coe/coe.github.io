function Controller(){require("alloy/controllers/BaseController").apply(this,Array.prototype.slice.call(arguments)),this.__controllerPath="AppContainer",arguments[0]?arguments[0].__parentSymbol:null,arguments[0]?arguments[0].$model:null,arguments[0]?arguments[0].__itemTemplate:null;var t=this,e={},i={};t.__views.AppContainer=Ti.UI.createWindow({backgroundColor:"white",id:"AppContainer"}),t.__views.AppContainer&&t.addTopLevelView(t.__views.AppContainer);var r=[];t.__views.scrollableView=Ti.UI.createScrollableView({bottom:60,views:r,id:"scrollableView",showPagingControl:"true"}),t.__views.AppContainer.add(t.__views.scrollableView),t.__views.footer=Ti.UI.createView({bottom:0,height:60,layout:"horizontal",id:"footer"}),t.__views.AppContainer.add(t.__views.footer),t.__views.applink_ios=Ti.UI.createButton({title:"ios",id:"applink_ios"}),t.__views.footer.add(t.__views.applink_ios),a?t.__views.applink_ios.addEventListener("click",a):i["$.__views.applink_ios!click!clickIOSButton"]=!0,t.__views.applink_andorid=Ti.UI.createButton({title:"android",id:"applink_andorid"}),t.__views.footer.add(t.__views.applink_andorid),o?t.__views.applink_andorid.addEventListener("click",o):i["$.__views.applink_andorid!click!clickAndroidButton"]=!0,e.destroy=function(){},_.extend(t,t.__views);var n,s,o,a;s=arguments[0]||{},n="https://play.google.com/store/apps/details?id=",a=function(){return Ti.Platform.openURL(s.trackViewUrl)},o=function(){return Ti.Platform.openURL(n+s.trackViewUrl)},i["$.__views.applink_ios!click!clickIOSButton"]&&t.__views.applink_ios.addEventListener("click",a),i["$.__views.applink_andorid!click!clickAndroidButton"]&&t.__views.applink_andorid.addEventListener("click",o),_.extend(t,e)}var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._;module.exports=Controller;