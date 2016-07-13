define(["Ti/_/declare","Ti/_/UI/Widget","Ti/_/dom","Ti/_/css","Ti/_/style","Ti/_/lang","Ti/UI"],function(e,t,i,r,o,n,a){var s=require.on,l=o.set;return e("Ti.UI.Slider",t,{constructor:function(){var e,t,r=this,o=r._track=i.create("div",{className:"TiUISliderTrack"},r.domNode),n=r._thumb=i.create("div",{className:"TiUIElementGradient TiUISliderThumb"},r.domNode);s(r,"touchstart",function(i){e=i.x,t=r.value}),s(r,"touchmove",function(i){r.value=(i.x-e)*(r.max-r.min)/(o.offsetWidth-n.offsetWidth)+t}),s(r,"postlayout",r,"_updatePosition")},_constrainedUpdate:function(e){this.__values__.properties.value=this._constrainValue(e),this._updatePosition()},_constrainValue:function(e){return Math.min(n.val(this.maxRange,this.max),Math.max(n.val(this.minRange,this.min),e))},_updatePosition:function(){var e=this._thumb;this._thumbLocation=Math.round((this._track.offsetWidth-e.offsetWidth)*((this.value-this.min)/(this.max-this.min))),l(e,"transform","translateX("+this._thumbLocation+"px)")},_defaultWidth:a.FILL,_defaultHeight:a.SIZE,_setTouchEnabled:function(e){var i=e?"auto":"none";t.prototype._setTouchEnabled.call(this,e),l(this._track,"pointerEvents",i),l(this._thumb,"pointerEvents",i)},_getContentSize:function(){return{width:200,height:40}},properties:{enabled:{set:function(e,t){return e!==t&&(r.remove(this._thumb,["TiUIElementGradient","TiUISliderThumbDisabled"]),r.add(this._thumb,e?"TiUIElementGradient":"TiUISliderThumbDisabled"),this._setTouchEnabled(e)),e},value:!0},max:{set:function(e){return Math.max(this.min,e)},post:"_constrainedUpdate",value:1},maxRange:{set:function(e){return Math.min(this.max,e)},post:"_constrainedUpdate"},min:{set:function(e){return Math.min(this.max,e)},post:"_constrainedUpdate",value:0},minRange:{set:function(e){return Math.max(this.min,e)},post:"_constrainedUpdate"},value:{set:function(e){return this._constrainValue(e)},post:function(e,t){e!==t&&this.fireEvent("change",{value:e,thumbOffset:{x:0,y:0},thumbSize:{height:0,width:0}}),this._updatePosition()},value:0}}})});