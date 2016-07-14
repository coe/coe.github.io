define(["Ti/_/declare","Ti/_/UI/Widget","Ti/_/dom","Ti/_/css","Ti/_/style","Ti/_/lang","Ti/UI"],function(e,a,t,i,n,s,o){var r=require.on,_=n.set;return e("Ti.UI.Slider",a,{constructor:function(){var e,a,i=this,n=i._track=t.create("div",{className:"TiUISliderTrack"},i.domNode),s=i._thumb=t.create("div",{className:"TiUIElementGradient TiUISliderThumb"},i.domNode);r(i,"touchstart",function(t){e=t.x,a=i.value}),r(i,"touchmove",function(t){i.value=(t.x-e)*(i.max-i.min)/(n.offsetWidth-s.offsetWidth)+a}),r(i,"postlayout",i,"_updatePosition")},_constrainedUpdate:function(e){this.properties.__values__.value=this._constrainValue(e),this._updatePosition()},_constrainValue:function(e){return Math.min(s.val(this.maxRange,this.max),Math.max(s.val(this.minRange,this.min),e))},_updatePosition:function(){var e=this._thumb;this._thumbLocation=Math.round((this._track.offsetWidth-e.offsetWidth)*((this.value-this.min)/(this.max-this.min))),_(e,"transform","translateX("+this._thumbLocation+"px)")},_defaultWidth:o.FILL,_defaultHeight:o.SIZE,_setTouchEnabled:function(e){var t=e?"auto":"none";a.prototype._setTouchEnabled.call(this,e),_(this._track,"pointerEvents",t),_(this._thumb,"pointerEvents",t)},_getContentSize:function(){return{width:200,height:40}},properties:{enabled:{set:function(e,a){return e!==a&&(i.remove(this._thumb,["TiUIElementGradient","TiUISliderThumbDisabled"]),i.add(this._thumb,e?"TiUIElementGradient":"TiUISliderThumbDisabled"),this._setTouchEnabled(e)),e},value:!0},max:{set:function(e){return Math.max(this.min,e)},post:"_constrainedUpdate",value:1},maxRange:{set:function(e){return Math.min(this.max,e)},post:"_constrainedUpdate"},min:{set:function(e){return Math.min(this.max,e)},post:"_constrainedUpdate",value:0},minRange:{set:function(e){return Math.max(this.min,e)},post:"_constrainedUpdate"},value:{set:function(e){return this._constrainValue(e)},post:function(e,a){e!==a&&this.fireEvent("change",{value:e,thumbOffset:{x:0,y:0},thumbSize:{height:0,width:0}}),this._updatePosition()},value:0}}})});