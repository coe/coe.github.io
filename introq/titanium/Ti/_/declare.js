define(["Ti/_","Ti/_/lang"],function(e,a){function t(e,a){for(var t,i,s,o,_,d,c,u,p=[],m=[{cls:0,refs:[]}],g={},k=1,b=e.length,h=0;b>h;++h){if(s=e[h],!s)throw Error('Unknown base class for "'+a+'" ['+h+"]");if(r(s,"Object"))s=e[h]=n(s);else if(!r(s,"Function"))throw Error('Base class not a function for "'+a+'" ['+h+"]");for(i=s._meta?s._meta.bases:[s],o=0,t=i.length-1;t>=0;--t)_=i[t].prototype,_.hasOwnProperty("declaredClass")||(_.declaredClass="uniqName_"+l++),c=_.declaredClass,g.hasOwnProperty(c)||(g[c]={count:0,refs:[],cls:i[t]},++k),d=g[c],o&&o!==d&&(d.refs.push(o),++o.count),o=d;++o.count,m[0].refs.push(o)}for(;m.length;){for(o=m.pop(),p.push(o.cls),--k;u=o.refs,1==u.length;){if(o=u[0],!o||--o.count){o=0;break}p.push(o.cls),--k}if(o)for(h=0,b=u.length;b>h;++h)o=u[h],--o.count||m.push(o)}if(k)throw Error("Can't build consistent linearization for \""+a+'"');return s=e[0],p[0]=s?s._meta&&s===p[p.length-s._meta.bases.length]?s._meta.bases.length:1:0,p}function i(e,t){return function(){var i,n,s,o,_=arguments,l=_,u=_[0],p=e.length,m=this.declaredClass;if(m&&(d[m]||(d[m]=0),this.widgetId=m+":"+d[m]++),t&&(u&&u.preamble||this.preamble))for(o=Array(e.length),o[0]=_,n=0;(u=_[0])&&(i=u.preamble)&&(_=i.apply(this,_)||_),i=e[n].prototype,i=i.hasOwnProperty("preamble")&&i.preamble,i&&(_=i.apply(this,_)||_),++n!==p;)o[n]=_;for(n=p-1;n>=0;--n)i=e[n],s=i._meta,s&&(i=s.ctor,a.mixProps(this,s.hidden)),r(i,"Function")&&i.apply(this,o?o[n]:_);if(r(u,"Object")){i=this.constants;for(n in u)u.hasOwnProperty(n)&&((i&&n in i?i.__values__:this)[n]=u[n])}this.toString===c.toString&&(this.toString=function(){return"[object "+(m?m.replace(/\./g,""):"Object")+"]"}),i=this.postscript,i&&i.apply(this,l)}}function n(e){var a=Function();return _(a.prototype,e),a._meta={bases:[a],hidden:e},a}function s(e,a){for(var t in a)a.hasOwnProperty(t)&&!/^(constructor|properties|constants|__values__)$/.test(t)&&(r(a[t],"Function")&&(a[t].nom=name),e[t]=a[t]);return e}function o(e,o,l){r(e,"String")||(l=o,o=e,e=""),l=l||{};var d,u,p,m=[l.constructor],g=1,k={},b=r(o);if("Array"===b?(m=t(o,e),o=m[g=m.length-m[0]]):"Function"===b?(p=o._meta,m=m.concat(p?p.bases:o)):"Object"===b?m[1]=o=n(o):o=0,o)for(u=g-1;d=Function(),d.prototype=o.prototype,k=new d,u;--u)p=m[u],(p._meta?s:_)(k,p.prototype),d=Function(),d.superclass=o,d.prototype=k,o=k.constructor=d;return s(k,l),p=l.constructor,p!==c.constructor&&(p.nom="constructor",k.constructor=p),_(m[0]=d=i(m,p),{_meta:{bases:m,hidden:l,ctor:l.constructor},superclass:o&&o.prototype,extend:function(e){return s(this.prototype,e),this},prototype:k}),_(k,{constructor:d,isInstanceOf:function(e){for(var a=this.constructor._meta.bases,t=0,i=a.length;i>t;++t)if(a[t]===e)return!0;return this instanceof e}}),e&&(k.declaredClass=e,a.setObject(e,d)),d}var r=require.is,_=require.mix,l=0,d={},c=Object.prototype;return e.declare=o});