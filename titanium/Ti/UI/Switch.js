define(["Ti/_/declare","Ti/_/UI/FontWidget","Ti/_/css","Ti/_/style","Ti/UI"],function(e,t,i,r,o){var n=r.set,a={post:function(){this.backgroundColor||this.backgroundDisabledColor||this.backgroundDisabledImage||this.backgroundFocusedColor||this.backgroundFocusedImage||this.backgroundImage||this.backgroundSelectedColor||this.backgroundSelectedImage?this._clearDefaultLook():this._setDefaultLook(),this._doBackground()}};return e("Ti.UI.Switch",t,{constructor:function(e){var t=this._contentContainer=o.createView({width:o.INHERIT,height:o.INHERIT,layout:o._LAYOUT_CONSTRAINING_VERTICAL,borderColor:"transparent"});this._add(t),t._add(this._switchTitle=o.createLabel({width:o.INHERIT,height:o.INHERIT,verticalAlign:o.TEXT_VERTICAL_ALIGNMENT_CENTER,textAlign:o.TEXT_ALIGNMENT_CENTER})),t._add(this._switchIndicator=o.createView({width:40,height:10,borderRadius:4,borderWidth:1,borderColor:"#888"})),this._setDefaultLook();var i=this;i.addEventListener("singletap",function(){i.value=!i.value}),this.value=!1},_setDefaultLook:function(){this._hasDefaultLook||(this._hasDefaultLook=!0,this._previousBorderWidth=this.borderWidth,this._previousBorderColor=this.borderColor,i.add(this.domNode,"TiUIElementGradient"),i.add(this.domNode,"TiUIButtonDefault"),this._contentContainer.borderWidth=6,this._getBorderFromCSS())},_clearDefaultLook:function(){this._hasDefaultLook&&(this._hasDefaultLook=!1,this.borderWidth=this._previousBorderWidth,this.borderColor=this._previousBorderColor,i.remove(this.domNode,"TiUIElementGradient"),i.remove(this.domNode,"TiUIButtonDefault"),this._contentContainer.borderWidth=0)},_defaultWidth:o.SIZE,_defaultHeight:o.SIZE,properties:{backgroundColor:a,backgroundDisabledColor:a,backgroundDisabledImage:a,backgroundFocusedColor:a,backgroundFocusedImage:a,backgroundImage:a,backgroundSelectedColor:a,backgroundSelectedImage:a,enabled:{set:function(e,t){return e!==t&&(this._hasDefaultLook&&(e?(i.add(this.domNode,"TiUIElementGradient"),n(this.domNode,"backgroundColor","")):(i.remove(this.domNode,"TiUIElementGradient"),n(this.domNode,"backgroundColor","#aaa"))),this._setTouchEnabled(e)),e},value:!0},textAlign:{set:function(e){return this._switchTitle.textAlign=e,e}},titleOff:{set:function(e){return this.value||(this._switchTitle.text=e),e},value:"Off"},titleOn:{set:function(e){return this.value&&(this._switchTitle.text=e),e},value:"On"},value:{set:function(e){return this._switchIndicator.backgroundColor=e?"#0f0":"#aaa",e=!!e,this._switchTitle.text=e?this.titleOn:this.titleOff,e},post:function(){this.fireEvent("change",{value:this.value})}},verticalAlign:{set:function(e){this._switchTitle.verticalAlign=e},value:o.TEXT_VERTICAL_ALIGNMENT_CENTER}}})});