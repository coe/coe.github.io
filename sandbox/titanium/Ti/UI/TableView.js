define(["Ti/_/declare","Ti/_/UI/KineticScrollView","Ti/_/style","Ti/_/lang","Ti/UI/MobileWeb/TableViewSeparatorStyle","Ti/UI"],function(e,a,t,i,n,s){var o=t.set,r=require.is,_=i.isDef,l=.001,d=/(click|singletap|longpress)/;return e("Ti.UI.TableView",a,{constructor:function(){var e;this._initKineticScrollView(e=s.createView({width:s.INHERIT,height:s.SIZE,left:0,top:0,layout:s._LAYOUT_CONSTRAINING_VERTICAL}),"vertical","vertical",1),e._add(this._header=s.createView({height:s.SIZE,width:s.INHERIT,layout:s._LAYOUT_CONSTRAINING_VERTICAL})),e._add(this._sections=s.createView({height:s.SIZE,width:s.INHERIT,layout:s._LAYOUT_CONSTRAINING_VERTICAL})),e._add(this._footer=s.createView({height:s.SIZE,width:s.INHERIT,layout:s._LAYOUT_CONSTRAINING_VERTICAL})),this.data=[],this.constants.__values__.sections=[]},_handleMouseWheel:function(){this._fireScrollEvent("scroll")},_handleDragStart:function(){this.fireEvent("dragstart")},_handleDrag:function(e){this._fireScrollEvent("scroll",e)},_handleDragEnd:function(e,a,t){var i=this;if(_(t)){var n=t*t/(1.724*l)*(0>t?-1:1),o=Math.abs(t)/l,r=Math.min(0,Math.max(i._minTranslationY,i._currentTranslationY+n));i.fireEvent("dragend",{decelerate:!0}),i._animateToPosition(i._currentTranslationX,r,o,s.ANIMATION_CURVE_EASE_OUT,function(){i._setTranslation(i._currentTranslationX,r),i._endScrollBars(),i._fireScrollEvent("scrollend",e)})}},_fireScrollEvent:function(e,a){for(var t,i=0,n=this._contentContainer,s=-this._currentTranslationY,o=this._sections,r=o._children,_=r.length,l=0;_>l;l+=2){var d=r[l],c=s-d._measuredTop,u=d._measuredHeight-c;if(c>0&&u>0)for(var p=d._rows._children,m=1;p.length>m;m+=2){var g=p[m],k=c-g._measuredTop,b=g._measuredHeight-k;k>0&&b>0&&(i++,!t&&(t=g))}}this.fireEvent(e,{contentOffset:{x:0,y:s},contentSize:{width:o._measuredWidth,height:o._measuredHeight},firstVisibleItem:t,size:{width:n._measuredWidth,height:n._measuredHeight},totalItemCount:this.data.length,visibleItemCount:i,x:a&&a.x,y:a&&a.y})},_defaultWidth:s.FILL,_defaultHeight:s.FILL,_getContentOffset:function(){return{x:-this._currentTranslationX,y:-this._currentTranslationY}},fireEvent:function(e,t){var i,n=0,s=0,o=this._sections._children,r=this._tableViewRowClicked,_=this._tableViewSectionClicked;if(d.test(e)){if(r&&_){for(;o.length>n;n+=2){if(i=o[n]._rows._children.indexOf(r),-1!==i){s+=Math.floor(i/2);break}s+=o[n].rowCount}t.row=t.rowData=r,t.index=s,t.section=_,t.searchMode=!1,a.prototype.fireEvent.apply(this,arguments),this._tableViewRowClicked=null,this._tableViewSectionClicked=null}}else a.prototype.fireEvent.apply(this,arguments)},_createSeparator:function(){var e=s.createView({height:1,width:s.INHERIT,backgroundColor:"white"});return o(e.domNode,"minWidth","100%"),e},_createDecorationLabel:function(e){return s.createLabel({text:e,backgroundColor:"darkGrey",color:"white",width:s.INHERIT,height:s.SIZE,left:0,font:{fontSize:22}})},_refreshSections:function(){for(var e=0;this._sections._children.length>e;e+=2)this._sections._children[e]._refreshRows();this._triggerLayout()},_calculateLocation:function(e){for(var a,t=0,i=0;this._sections._children.length>i;i+=2)if(a=this._sections._children[i],t+=a.rowCount,t>e)return{section:a,localIndex:a.rowCount-(t-e)};return e==t?{section:a,localIndex:a.rowCount}:void 0},_insertRow:function(e,a){var t=this._calculateLocation(a);t&&t.section.add(e,t.localIndex),this._publish(e),this._refreshSections()},_removeRow:function(e){var a=this._calculateLocation(e);a&&(this._unpublish(a.section._rows._children[2*a.localIndex+1]),a.section._removeAt(a.localIndex))},appendRow:function(e){this._currentSection||(this._sections._add(this._currentSection=s.createTableViewSection({_tableView:this})),this.sections.push(this._currentSection),this._sections._add(this._createSeparator()),this.data.push(this._currentSection)),this._currentSection.add(e),this._publish(e),this._refreshSections()},deleteRow:function(e){this._removeRow(e)},insertRowAfter:function(e,a){this._insertRow(a,e+1)},insertRowBefore:function(e,a){this._insertRow(a,e)},updateRow:function(e,a){this._removeRow(e),this._insertRow(a,e)},scrollToIndex:function(e){var a=this._calculateLocation(e);a&&this._setTranslation(0,-a.section._measuredTop-a.section._rows._children[2*a.localIndex+1]._measuredTop)},scrollToTop:function(e){this._setTranslation(0,-e)},_insertSection:function(e,a){!r(e,"Array")&&(e=[e]);for(var t=0,i=e.length;i>t;t++)_(e[t].declaredClass)&&"Ti.UI.TableViewSection"==e[t].declaredClass||(e[t]=s.createTableViewSection(e[t])),this._sections._insertAt(e[t],a+t),a===i?this.sections.push(e[t]):this.sections.splice(a,0,e[t]);this._refreshSections()},_removeSection:function(e){this._sections._remove(this.sections[e]),this.sections.splice(e,1)},appendSection:function(e){this._insertSection(e,this.sections.length)},deleteSection:function(e){e in this.sections&&(this._sections._remove(this.sections[e]),this.sections.splice(e,1))},insertSectionBefore:function(e,a){this._insertSection(a,e)},insertSectionAfter:function(e,a){this._insertSection(a,e+1)},updateSection:function(e,a){this._removeSection(e),this._insertSection(a,e)},constants:{sectionCount:{get:function(){return this.sections.length}},sections:void 0},properties:{data:{set:function(e){if(r(e,"Array")){var a,t=[];this._sections._removeAllChildren(),this.constants.__values__.sections=[],this._currentSection=void 0;for(a in e)(!_(e[a].declaredClass)||"Ti.UI.TableViewRow"!=e[a].declaredClass&&"Ti.UI.TableViewSection"!=e[a].declaredClass)&&(e[a]=s.createTableViewRow(e[a]));for(a=0;e.length>a;a++)"Ti.UI.TableViewRow"===e[a].declaredClass?(this._currentSection||(this.appendSection(this._currentSection=s.createTableViewSection({_tableView:this})),t.push(this._currentSection)),this._currentSection.add(e[a])):"Ti.UI.TableViewSection"===e[a].declaredClass&&(e[a]._tableView=this,this.appendSection(this._currentSection=e[a]),t.push(this._currentSection)),this._publish(e[a]);return this._refreshSections(),t}}},footerTitle:{set:function(e,a){return a!=e&&(this._footer._removeAllChildren(),this._footer._add(this._createDecorationLabel(e))),e}},footerView:{set:function(e,a){return a!=e&&(this._footer._removeAllChildren(),this._footer._add(e)),e}},headerTitle:{set:function(e,a){return a!=e&&(this._header._removeAllChildren(),this._header._add(this._createDecorationLabel(e)),this._header._add(this._createSeparator())),e}},headerView:{set:function(e,a){return a!=e&&(this._header._removeAllChildren(),this._header._add(e)),e}},maxRowHeight:{post:"_refreshSections"},minRowHeight:{post:"_refreshSections"},rowHeight:{post:"_refreshSections",value:"50px"},separatorColor:{post:"_refreshSections",value:"lightGrey"},separatorStyle:{post:"_refreshSections",value:n.SINGLE_LINE}}})});