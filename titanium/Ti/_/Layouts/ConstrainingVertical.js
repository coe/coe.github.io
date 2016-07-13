define(["Ti/_/Layouts/Base","Ti/_/declare","Ti/UI","Ti/_/lang"],function(e,t,i,r){var n=r.isDef,o=Math.round;return t("Ti._.Layouts.ConstrainingVertical",e,{_doLayout:function(e,t,r,n,a){var s,l,u,d,c,h,p,f,g,_,v,T,w,m,U,b,I,E={width:0,height:0},y=e._children,C=0,x="px",S=[],L=0,N=0,A=y.length,k=this._measureNode;for(C=0;A>C;C++)s=e._children[C],s._alive&&s.domNode?s._markedForLayout&&((s._preLayout&&s._preLayout(t,r,n,a)||s._needsMeasuring)&&k(s,s,s._layoutCoefficients,this),l=s._layoutCoefficients,d=l.height,0===d.x2||isNaN(d.x2)?(u=l.width,c=l.sandboxWidth,h=l.sandboxHeight,_=u.x1*t+u.x2,v=d.x1*r+d.x2*(r-L)+d.x3,g=s._getContentSize?s._getContentSize(_,v):s._layout._doLayout(s,isNaN(_)?t:_-s._borderLeftWidth-s._borderRightWidth,isNaN(v)?r:v-s._borderTopWidth-s._borderBottomWidth,isNaN(_),isNaN(v)),isNaN(_)&&(_=g.width+s._borderLeftWidth+s._borderRightWidth),isNaN(v)&&(v=g.height+s._borderTopWidth+s._borderBottomWidth),T=s._measuredSandboxHeight=h.x1*r+h.x2+v,L+=T,s._measuredWidth=_,s._measuredHeight=v):N++):this.handleInvalidState(s,e);for(b=r-L,L=Math.floor(b/N),C=0;A>C;C++)s=e._children[C],s._markedForLayout&&(l=s._layoutCoefficients,d=l.height,0===d.x2||isNaN(d.x2)||(u=l.width,c=l.sandboxWidth,h=l.sandboxHeight,_=u.x1*t+u.x2,v=d.x1*r+d.x2*(A-1>C?L:b-L*(N-1))+d.x3,g=s._getContentSize?s._getContentSize(_,v):s._layout._doLayout(s,isNaN(_)?t:_-s._borderLeftWidth-s._borderRightWidth,isNaN(v)?r:v-s._borderTopWidth-s._borderBottomWidth,isNaN(_),isNaN(v)),isNaN(_)&&(_=g.width+s._borderLeftWidth+s._borderRightWidth),isNaN(v)&&(v=g.height+s._borderTopWidth+s._borderBottomWidth),s._measuredWidth=_,s._measuredHeight=v,T=s._measuredSandboxHeight=h.x1*r+h.x2+v));for(L=0,C=0;A>C;C++)s=e._children[C],s._measuredRunningHeight=L,s._markedForLayout?(l=s._layoutCoefficients,c=l.sandboxWidth,p=l.top,f=l.left,n&&0!==f.x1?S.push(s):(_=s._measuredWidth,m=s._measuredLeft=f.x1*t+f.x2*_+f.x3,w=s._measuredSandboxWidth=c.x1*t+c.x2+_+(isNaN(m)?0:m),s._measuredSandboxWidth>E.width&&(E.width=s._measuredSandboxWidth)),U=s._measuredTop=p.x1*r+p.x2+L):s._measuredSandboxWidth>E.width&&(E.width=s._measuredSandboxWidth),L+=s._measuredSandboxHeight;for(E.height=L,A=S.length,C=0;A>C;C++)s=S[C],c=s._layoutCoefficients.sandboxWidth,w=s._measuredSandboxWidth=c.x1*t+c.x2+s._measuredWidth,w>E.width&&(E.width=w);for(C=0;A>C;C++)s=S[C],f=s._layoutCoefficients.left,c=s._layoutCoefficients.sandboxWidth,_=s._measuredWidth,w=s._measuredSandboxWidth,w>E.width&&(E.width=w),m=s._measuredLeft=f.x1*E.width+f.x2*_+f.x3,s._measuredSandboxWidth+=isNaN(m)?0:m;for(A=y.length,C=0;A>C;C++)s=y[C],s._markedForLayout&&(i._elementLayoutCount++,s=y[C],I=s.domNode.style,I.zIndex=s.zIndex,I.left=o(s._measuredLeft)+x,I.top=o(s._measuredTop)+x,I.width=o(s._measuredWidth-s._borderLeftWidth-s._borderRightWidth)+x,I.height=o(s._measuredHeight-s._borderTopWidth-s._borderBottomWidth)+x,s._markedForLayout=!1,s.fireEvent("postlayout"));return this._computedSize=E},_getWidth:function(e,t){return!n(t)&&n(e.left)+n(e.center&&e.center.x)+n(e.right)<2&&(t=e._defaultWidth),t===i.INHERIT?e._parent._parent&&e._parent._parent._layout._getWidth(e._parent,e._parent.width)===i.SIZE?i.SIZE:i.FILL:t},_getHeight:function(e,t){return!n(t)&&(t=e._defaultHeight),t===i.INHERIT?e._parent._parent&&e._parent._parent._layout._getHeight(e._parent,e._parent.height)===i.SIZE?i.SIZE:i.FILL:t},_isDependentOnParent:function(e){var t=e._layoutCoefficients;return!isNaN(t.width.x1)&&0!==t.width.x1||!isNaN(t.height.x1)&&0!==t.height.x1||!isNaN(t.height.x2)&&0!==t.height.x2||0!==t.sandboxWidth.x1||0!==t.sandboxHeight.x1||0!==t.left.x1||0!==t.top.x1},_doAnimationLayout:function(e,t){var i=e._parent._measuredWidth,r=e._parent._measuredHeight,n=e._measuredRunningHeight,o=t.width.x1*i+t.width.x2;return{width:o,height:t.height.x1*r+t.height.x2*(r-n)+t.height.x3,left:t.left.x1*i+t.left.x2*o+t.left.x3,top:t.top.x1*r+t.top.x2+n}},_measureNode:function(e,t,r,n){e._needsMeasuring=!1;var o,a,s,l=n.getValueType,u=n.computeValue,d=n._getWidth(e,t.width),c=l(d),h=u(d,c),p=n._getHeight(e,t.height),f=l(p),g=u(p,f),_=t.left,v=l(_),T=u(_,v),w=t.center&&t.center.x,m=l(w),U=u(w,m),b=t.right,I=l(b),E=u(b,I),y=t.top,C=l(y),x=u(y,C),S=t.bottom,L=l(S),N=u(S,L),A=r.width,k=r.height,O=r.sandboxWidth,R=r.sandboxHeight,P=r.left,M=r.top;if(o=a=0,c===i.SIZE?o=a=NaN:c===i.FILL?(o=1,"%"===v?o-=T:"#"===v?a=-T:"%"===I?o-=E:"#"===I&&(a=-E)):"%"===c?o=h:"#"===c?a=h:"%"===v?"%"===m?o=2*(U-T):"#"===m?(o=-2*T,a=2*U):"%"===I?o=1-T-E:"#"===I&&(o=1-T,a=-E):"#"===v?"%"===m?(o=2*U,a=-2*T):"#"===m?a=2*(U-T):"%"===I?(o=1-E,a=-T):"#"===I&&(o=1,a=-E-T):"%"===m?"%"===I?o=2*(E-U):"#"===I&&(o=-2*U,a=2*E):"#"===m&&("%"===I?(o=2*E,a=-2*U):"#"===I&&(a=2*(E-U))),A.x1=o,A.x2=a,O.x1="%"===I?E:0,O.x2="#"===I?E:0,o=a=s=0,f===i.SIZE?o=a=s=NaN:f===i.FILL?(a=1,"%"===C&&(o=-x),"#"===C&&(s=-x),"%"===L&&(o=-N),"#"===L&&(s=-N)):"%"===f?o=g:"#"===f&&(s=g),k.x1=o,k.x2=a,k.x3=s,o=a=0,"%"===C&&(o=x),"#"===C&&(a=x),"%"===L&&(o+=N),"#"===L&&(a+=N),R.x1=o,R.x2=a,o=a=s=0,"%"===v)o=T;else if("#"===v)s=T;else if("%"===m)o=U,a=-.5;else if("#"===m)a=-.5,s=U;else if("%"===I)o=1-E,a=-1;else if("#"===I)o=1,a=-1,s=-E;else switch(n._defaultHorizontalAlignment){case"center":o=.5,a=-.5;break;case"end":o=1,a=-1}P.x1=o,P.x2=a,P.x3=s,M.x1="%"===C?x:0,M.x2="#"===C?x:0},_defaultHorizontalAlignment:"center",_defaultVerticalAlignment:"start"})});