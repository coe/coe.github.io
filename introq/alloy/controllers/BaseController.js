var Alloy=require("alloy"),Backbone=Alloy.Backbone,_=Alloy._,Controller=function(){function t(){return i.__widgetId?{widgetId:i.__widgetId,name:i.__controllerPath}:i.__controllerPath}var e=[],i=this;this.__iamalloy=!0,_.extend(this,Backbone.Events,{__views:{},__proxyProperties:{},setParent:function(t){var i=e.length;if(i){this.parent=t.__iamalloy?t.parent:t;for(var r=0;i>r;r++)e[r].__iamalloy?e[r].setParent(this.parent):this.parent.add(e[r])}},addTopLevelView:function(t){e.push(t)},addProxyProperty:function(t,e){this.__proxyProperties[t]=e},removeProxyProperty:function(t){delete this.__proxyProperties[t]},getTopLevelViews:function(){return e},getView:function(t){return t===void 0||null===t?e[0]:this.__views[t]},removeView:function(t){delete this[t],delete this.__views[t]},getProxyProperty:function(t){return this.__proxyProperties[t]},getViews:function(){return this.__views},destroy:function(){},getViewEx:function(t){var e=t.recurse||!1;if(e){var i=this.getView();return i?i.__iamalloy?i.getViewEx({recurse:!0}):i:null}return this.getView()},getProxyPropertyEx:function(t,e){var i=e.recurse||!1;if(i){var r=this.getProxyProperty(t);return r?r.__iamalloy?r.getProxyProperty(t,{recurse:!0}):r:null}return this.getView(t)},createStyle:function(e){return Alloy.createStyle(t(),e)},UI:{create:function(e,i){return Alloy.UI.create(t(),e,i)}},addClass:function(e,i,r){return Alloy.addClass(t(),e,i,r)},removeClass:function(e,i,r){return Alloy.removeClass(t(),e,i,r)},resetClass:function(e,i,r){return Alloy.resetClass(t(),e,i,r)}})};module.exports=Controller;