define(["Ti/_/declare","Ti/_/Evented","Ti/_/lang","Ti/Platform"],function(e,a,t,i){function n(e,a,t){var i=0==a?1:0,n=2==a?1:2,s=0==e?1:0,o=2==e?1:2;return t[s][i]*t[o][n]-t[s][n]*t[o][i]}function s(e,a,t,i,n,s,o,r){return{a:e.a*a+e.b*i,b:e.a*t+e.b*n,c:e.c*a+e.d*i,d:e.c*t+e.d*n,tx:e.a*s+e.b*o+e.tx,ty:e.c*s+e.d*o+e.ty,rotation:e.rotation+(0|r)}}var o,r="gecko"===i.runtime,_=function(e){return r?e+"px":e};return o=e("Ti.UI.2DMatrix",a,{properties:{a:1,b:0,c:0,d:1,tx:0,ty:0,rotation:0},constructor:function(e){e&&require.mix(this,e)},invert:function(){var e=0,a=0,t=[[this.a,this.b,this.tx],[this.c,this.d,this.ty],[0,0,1]],i=t,r=this.a*n(0,0,t)-this.b*n(0,1,t)+this.tx*n(0,2,t);if(Math.abs(r)>1e-10)for(r=1/r;3>a;a++)for(;3>e;e++)i[a][e]=n(e,a,t)*r,1==(e+a)%2&&(i[a][e]=-i[a][e]);return new o(s(this,i[0][0],i[0][1],i[1][0],i[1][1],i[0][2],i[1][2]))},multiply:function(e){return new o(s(this,e.a,e.b,e.c,e.d,e.tx,e.ty,e.rotation))},rotate:function(e){return new o({a:this.a,b:this.b,c:this.c,d:this.d,tx:this.tx,ty:this.ty,rotation:this.rotation+e})},scale:function(e,a){return new o(s(this,e,0,0,t.val(a,e),0,0))},translate:function(e,a){return new o(s(this,1,0,0,1,e,a))},toCSS:function(){for(var e=0,a=[this.a,this.b,this.c,this.d,this.tx,this.ty];6>e;e++)a[e]=a[e].toFixed(6),e>4&&(a[e]=_(a[e]));return"matrix("+a.join(",")+") rotate("+this.rotation+"deg)"}})});