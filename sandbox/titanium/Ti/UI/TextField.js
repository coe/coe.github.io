define(["Ti/_/declare","Ti/_/UI/TextBox","Ti/_/css","Ti/_/dom","Ti/_/lang","Ti/_/style","Ti/UI"],function(e,a,t,i,n,s,o){var r=["None","Line","Bezel","Rounded"],_={post:"_setKeyboardType"},l=s.set,d=require.on;return e("Ti.UI.TextField",a,{constructor:function(){var e=i.create("input",{autocomplete:"off",className:"TiUITextFieldInput"},this.domNode);this._initTextBox(e),this._setKeyboardType(),this.borderStyle=o.INPUT_BORDERSTYLE_BEZEL,this._disconnectFocusEvent=d(e,"focus",this,function(){this._focused=1,this._setInternalText(this.clearOnEdit?"":this._getInternalText())}),this._disconnectBlurEvent=d(e,"blur",this,function(){this._focused=0,this._updateInternalText()})},destroy:function(){this._disconnectFocusEvent(),this._disconnectBlurEvent(),a.prototype.destroy.apply(this,arguments)},_showingHint:1,_setInternalText:function(e){var t=!this._focused&&!e;t!==this._showingHint&&(this._showingHint=t,this._setKeyboardType()),a.prototype._setInternalText.call(this,t?this.hintText:e)},_getInternalText:function(){return this._showingHint?"":a.prototype._getInternalText.call(this)},_defaultWidth:o.SIZE,_defaultHeight:o.SIZE,_getContentSize:function(e){return{width:this._measureText(this.value,this._field,e).width+6,height:this._measureText(this.value,this._field,e).height+6}},_setTouchEnabled:function(e){this.slider&&l(this._field,"pointerEvents",e?"auto":"none")},_setKeyboardType:function(){var e="text";if(this.passwordMask&&!this._showingHint)e="password";else switch(this.keyboardType){case o.KEYBOARD_EMAIL:e="email";break;case o.KEYBOARD_NUMBER_PAD:e="number";break;case o.KEYBOARD_PHONE_PAD:e="tel";break;case o.KEYBOARD_URL:e="url"}try{this._field.type=e}catch(a){this._field.type="text"}},properties:{borderStyle:{set:function(e,a){var i=this.domNode,n="TiUITextFieldBorderStyle";return e!==a&&(t.remove(i,n+r[a]),t.add(i,n+r[e])),e}},clearOnEdit:!1,hintText:{post:"_updateInternalText",value:""},keyboardType:_,passwordMask:_}})});