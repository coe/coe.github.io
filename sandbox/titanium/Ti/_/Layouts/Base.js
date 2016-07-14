define(["Ti/_/css","Ti/_/declare","Ti/_/style","Ti/_/lang","Ti/API","Ti/UI","Ti/_","Ti/_/dom"],function(e,a,t,i,n,s,o,r){var _=i.val;return a("Ti._.Layouts.Base",null,{computedSize:{width:0,height:0},constructor:function(a){this.element=a,e.add(a.domNode,e.clean(this.declaredClass))},destroy:function(){e.remove(this.element.domNode,e.clean(this.declaredClass))},handleInvalidState:function(e,a){n.debug("WARNING: Attempting to layout element that has been destroyed.\n	 Removing the element from the parent.\n	 The parent has a widget ID of "+a.widgetId+".");var t=a._children;t.splice(t.indexOf(e),1)},getValueType:function(e){return void 0!==e?e===s.SIZE||e===s.FILL?e:~(e+"").indexOf("%")?"%":"#":void 0},calculateAnimation:function(e,a){var t=e._animationCoefficients||(e._animationCoefficients={height:{},left:{},minWidth:{},sandboxWidth:{},minHeight:{},sandboxHeight:{},top:{},width:{}}),i={};return this._measureNode(e,{left:_(a.left,e.left),right:_(a.right,e.right),top:_(a.top,e.top),bottom:_(a.bottom,e.bottom),center:(e.center||a.center)&&{x:_(a.center&&a.center.x,e.center&&e.center.x),y:_(a.center&&a.center.y,e.center&&e.center.y)},width:_(a.width,e.width),minWidth:e.minWidth,minHeight:e.minHeight,height:_(a.height,e.height)},t,this),i=this._doAnimationLayout(e,t),{left:i.left,top:i.top,width:i.width-e._borderLeftWidth-e._borderRightWidth,height:i.height-e._borderTopWidth-e._borderBottomWidth}},computeValue:function(e,a){return"%"===a?parseFloat(e)/100:"#"===a?r.computeSize(e):void 0}})});