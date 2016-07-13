define(["Ti/_/declare","Ti/UI/View","Ti/_/dom","Ti/_/has","Ti/_/style","Ti/UI","Ti/_/browser"],function(e,t,i,r,o,n,a){var s=o.set,l=require.is,u=i.unitize,d=require.on,c=d.once,h=window,p="webkit"==a.runtime?"webkitTransitionEnd":"transitionend",f=r("touch"),g=h.navigator.msPointerEnabled,v=200,U=10,T=25,w=1e3,_=.5,m=2;return e("Ti.UI.ScrollableView",t,{constructor:function(){var e,t=this,i=0;t._add(t._contentContainer=n.createView({left:0,top:0,width:n.SIZE,height:"100%",layout:"constrainingHorizontal"})),e=t._contentContainer.domNode,t._add(t._pagingControlContainer=n.createView({width:"100%",height:20,bottom:0,backgroundColor:"black",opacity:0,touchEnabled:!1})),t._pagingControlContainer._add(t._pagingControlContentContainer=n.createView({width:n.SIZE,height:"100%",top:0,touchEnabled:!1,layout:"constrainingHorizontal"})),t.__values__.properties.views=[],t._viewToRemoveAfterScroll=-1,d(t,"postlayout",function(){t._animating||t._setTranslation(t.currentPage*-t._measuredWidth)}),d(e,g?"MSPointerDown":f?"touchstart":"mousedown",function(r){var o=r.touches?r.touches[0].clientX:r.clientX,n=o,a=Date.now(),l=t._measuredWidth,u=function(e){var r=t.currentPage,a=n-o+i;l=t._measuredWidth,e.preventDefault(),n=e.touches?e.touches[0].clientX:e.clientX,t._setTranslation(r*-l+a),t.fireEvent("scroll",{currentPage:r,currentPageAsFloat:r-a/l,view:t.views[r]})},d=function(r){var b=Date.now(),E=v>b-a,I=t.currentPage,y=Math.abs(o-n)>(E?U:l/2),C=t.__values__.properties,S=Math.abs(n-o);h.removeEventListener(g?"MSPointerMove":f?"touchmove":"mousemove",u),h.removeEventListener(g?"MSPointerUp":f?"touchend":"mouseup",d),l=t._measuredWidth,t._animating=1,r.preventDefault(),y&&(o>n?I!==C.views.length-1&&I++:0!==I&&I--,S=l-S),t._showPagingControl(I),i=n-o+i,S=Math.max(T,Math.min(w,(E?_:m)*S)),s(e,"transition",S+"ms ease-out"),setTimeout(function(){c(e,p,function(){s(e,"transition",""),t._animating=0,C.currentPage=I,t._updatePagingControl(),t.fireEvent("scrollend",{currentPage:I,view:t.views[I]})}),t._setTranslation(I*-l)},1),t.fireEvent("dragend",{currentPage:I,view:t.views[I]})};t._showPagingControl(t.currentPage,1),r.preventDefault(),i=t._animating?i||0:0,s(e,"transition",""),t._setTranslation(t.currentPage*-l+i),t._animating=0,h.addEventListener(g?"MSPointerMove":f?"touchmove":"mousemove",u),h.addEventListener(g?"MSPointerUp":f?"touchend":"mouseup",d),t.fireEvent("dragstart")})},_setTranslation:function(e){s(this._contentContainer.domNode,"transform","translatez(0) translatex("+e+"px)")},_showPagingControl:function(e,t){var i=this;return i.showPagingControl?(i._pagingAnimation&&i._pagingAnimation.cancel(),i._pagingAnimation=i._pagingControlContainer.animate({duration:250,opacity:.75}),clearInterval(i._pagingTimeout),void(!t&&i.pagingControlTimeout>0?i._pagingTimeout=setTimeout(function(){i._pagingAnimation&&i._pagingAnimation.cancel(),i._pagingAnimation=i._pagingControlContainer.animate({duration:750,opacity:0},function(){i._pagingAnimation=void 0})},i.pagingControlTimeout):i._pagingAnimation=void 0)):void(i._pagingControlContainer.opacity=0)},_updatePagingControl:function(){var e=this._pagingControlContentContainer,t=this.views.length,i=this.pagingControlHeight/2;if(t!==e._numViews||i!==e._diameter){e._numViews=t,e._diameter=i,e._removeAllChildren();for(var r=0;r<this.views.length;r++)e._add(n.createView({width:i,height:i,left:5,right:5,backgroundColor:"#aaa",borderRadius:u(i/2)}));e._highlightedPage=-1}e._highlightedPage!==this.currentPage&&(e._highlightedPage<0||(e._children[e._highlightedPage].backgroundColor="#aaa"),e._children[this.currentPage].backgroundColor="#fff",e._highlightedPage=this.currentPage)},addView:function(e){e&&(e.width="100%",e.height="100%",this.views.push(e),this._contentContainer._add(e),1==this.views.length&&(this.__values__.properties.currentPage=0),this._updatePagingControl())},removeView:function(e){var t=l(e,"Number")?e:this.views.indexOf(e);0>t||t>=this.views.length||(t==this.currentPage&&1!==this.views.length?(this._viewToRemoveAfterScroll=t,this.scrollToView(t==this.views.length-1?--t:++t)):this._removeViewFromList(t))},_removeViewFromList:function(e){var t=this._contentContainer,i=this;e<this.currentPage&&i.__values__.properties.currentPage--,t._remove(i.views.splice(e,1)[0]),i.views.length||(i.__values__.properties.currentPage=-1),c(n,"postlayout",function(){setTimeout(function(){i._setTranslation(i.currentPage*-i._measuredWidth)},1)})},scrollToView:function(e,t){function i(){var e=o._contentContainer,i=e.domNode,n=-o.views[r]._measuredLeft,a=Math.max(T,Math.min(w,m*e._measuredWidth));o._updatePagingControl(),o._showPagingControl(r),t?(o._setTranslation(n),o.__values__.properties.currentPage=r):(s(i,"transition",a+"ms ease-out"),setTimeout(function(){c(i,p,function(){s(i,"transition",""),o._animating=0,o.__values__.properties.currentPage=r,o._updatePagingControl(),-1!==o._viewToRemoveAfterScroll&&(n+=o.views[o._viewToRemoveAfterScroll]._measuredWidth,o._removeViewFromList(o._viewToRemoveAfterScroll),o._viewToRemoveAfterScroll=-1),o.fireEvent("scrollend",{currentPage:r,view:o.views[r]})}),o._setTranslation(n)},1))}var r=l(e,"Number")?e:this.views.indexOf(e),o=this;0>r||r>=this.views.length||r==this.currentPage||(o._contentContainer.domNode.offsetWidth?i():c(o,"postlayout",i))},_defaultWidth:n.FILL,_defaultHeight:n.FILL,properties:{currentPage:{set:function(e,t){return e>=0&&e<this.views.length?(this.scrollToView(e,1),e):t},value:-1},pagingControlColor:{set:function(e){return this._pagingControlContainer.backgroundColor=e,e},value:"black"},pagingControlHeight:{set:function(e){return this._pagingControlContainer.height=e,e},value:20},pagingControlTimeout:{post:function(e){e||(this._pagingControlContainer.opacity=.75)},value:3e3},showPagingControl:!1,views:{set:function(e){if(l(e,"Array")){var t,i=0,r=e.length,o=this._contentContainer;for(o._removeAllChildren();r>i;i++)(t=e[i]).width="100%",t.height="100%",o._add(t);return this.__values__.properties.currentPage=r?0:-1,e}},post:"_updatePagingControl"}}})});