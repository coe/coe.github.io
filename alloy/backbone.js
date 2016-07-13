(function(){var t,e=this,i=e.Backbone,n=Array.prototype.slice,s=Array.prototype.splice;t="undefined"!=typeof exports?exports:e.Backbone={},t.VERSION="0.9.2";var r=e._;r||"undefined"==typeof require||(r=require("alloy/underscore"));var o=e.jQuery||e.Zepto||e.ender;t.setDomLibrary=function(t){o=t},t.noConflict=function(){return e.Backbone=i,this},t.emulateHTTP=!1,t.emulateJSON=!1;var a=/\s+/,h=t.Events={on:function(t,e,i){var n,s,r,o,h;if(!e)return this;for(t=t.split(a),n=this._callbacks||(this._callbacks={});s=t.shift();)h=n[s],r=h?h.tail:{},r.next=o={},r.context=i,r.callback=e,n[s]={tail:o,next:h?h.next:r};return this},off:function(t,e,i){var n,s,o,h,u,c;if(s=this._callbacks){if(!(t||e||i))return delete this._callbacks,this;for(t=t?t.split(a):r.keys(s);n=t.shift();)if(o=s[n],delete s[n],o&&(e||i))for(h=o.tail;(o=o.next)!==h;)u=o.callback,c=o.context,(e&&u!==e||i&&c!==i)&&this.on(n,u,c);return this}},trigger:function(t){var e,i,s,r,o,h,u;if(!(s=this._callbacks))return this;for(h=s.all,t=t.split(a),u=n.call(arguments,1);e=t.shift();){if(i=s[e])for(r=i.tail;(i=i.next)!==r;)i.callback.apply(i.context||this,u);if(i=h)for(r=i.tail,o=[e].concat(u);(i=i.next)!==r;)i.callback.apply(i.context||this,o)}return this}};h.bind=h.on,h.unbind=h.off;var u=t.Model=function(t,e){var i;t||(t={}),e&&e.parse&&(t=this.parse(t)),(i=S(this,"defaults"))&&(t=r.extend({},i,t)),e&&e.collection&&(this.collection=e.collection),this.attributes={},this._escapedAttributes={},this.cid=r.uniqueId("c"),this.changed={},this._silent={},this._pending={},this.set(t,{silent:!0}),this.changed={},this._silent={},this._pending={},this._previousAttributes=r.clone(this.attributes),this.initialize.apply(this,arguments)};r.extend(u.prototype,h,{changed:null,_silent:null,_pending:null,idAttribute:"id",initialize:function(){},toJSON:function(t){return r.clone(this.attributes)},get:function(t){return this.attributes[t]},escape:function(t){var e;if(e=this._escapedAttributes[t])return e;var i=this.get(t);return this._escapedAttributes[t]=r.escape(null==i?"":""+i)},has:function(t){return null!=this.get(t)},set:function(t,e,i){var n,s,o;if(r.isObject(t)||null==t?(n=t,i=e):(n={},n[t]=e),i||(i={}),!n)return this;if(n instanceof u&&(n=n.attributes),i.unset)for(s in n)n[s]=void 0;if(!this._validate(n,i))return!1;this.idAttribute in n&&(this.id=n[this.idAttribute]);var a=i.changes={},h=this.attributes,c=this._escapedAttributes,l=this._previousAttributes||{};for(s in n)o=n[s],(!r.isEqual(h[s],o)||i.unset&&r.has(h,s))&&(delete c[s],(i.silent?this._silent:a)[s]=!0),i.unset?delete h[s]:h[s]=o,r.isEqual(l[s],o)&&r.has(h,s)==r.has(l,s)?(delete this.changed[s],delete this._pending[s]):(this.changed[s]=o,i.silent||(this._pending[s]=!0));return i.silent||this.change(i),this},unset:function(t,e){return(e||(e={})).unset=!0,this.set(t,null,e)},clear:function(t){return(t||(t={})).unset=!0,this.set(r.clone(this.attributes),t)},fetch:function(e){e=e?r.clone(e):{};var i=this,n=e.success;return e.success=function(t,s,r){return i.set(i.parse(t,r),e)?void(n&&n(i,t)):!1},e.error=t.wrapError(e.error,i,e),(this.sync||t.sync).call(this,"read",this,e)},save:function(e,i,n){var s,o;if(r.isObject(e)||null==e?(s=e,n=i):(s={},s[e]=i),n=n?r.clone(n):{},n.wait){if(!this._validate(s,n))return!1;o=r.clone(this.attributes)}var a=r.extend({},n,{silent:!0});if(s&&!this.set(s,n.wait?a:n))return!1;var h=this,u=n.success;n.success=function(t,e,i){var o=h.parse(t,i);return n.wait&&(delete n.wait,o=r.extend(s||{},o)),h.set(o,n)?void(u?u(h,t):h.trigger("sync",h,t,n)):!1},n.error=t.wrapError(n.error,h,n);var c=this.isNew()?"create":"update",l=(this.sync||t.sync).call(this,c,this,n);return n.wait&&this.set(o,a),l},destroy:function(e){e=e?r.clone(e):{};var i=this,n=e.success,s=function(){i.trigger("destroy",i,i.collection,e)};if(this.isNew())return s(),!1;e.success=function(t){e.wait&&s(),n?n(i,t):i.trigger("sync",i,t,e)},e.error=t.wrapError(e.error,i,e);var o=(this.sync||t.sync).call(this,"delete",this,e);return e.wait||s(),o},url:function(){var t=S(this,"urlRoot")||S(this.collection,"url")||k();return this.isNew()?t:t+("/"==t.charAt(t.length-1)?"":"/")+encodeURIComponent(this.id)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return null==this.id},change:function(t){t||(t={});var e=this._changing;this._changing=!0;for(var i in this._silent)this._pending[i]=!0;var n=r.extend({},t.changes,this._silent);this._silent={};for(var i in n)this.trigger("change:"+i,this,this.get(i),t);if(e)return this;for(;!r.isEmpty(this._pending);){this._pending={},this.trigger("change",this,t);for(var i in this.changed)this._pending[i]||this._silent[i]||delete this.changed[i];this._previousAttributes=r.clone(this.attributes)}return this._changing=!1,this},hasChanged:function(t){return arguments.length?r.has(this.changed,t):!r.isEmpty(this.changed)},changedAttributes:function(t){if(!t)return this.hasChanged()?r.clone(this.changed):!1;var e,i=!1,n=this._previousAttributes;for(var s in t)r.isEqual(n[s],e=t[s])||((i||(i={}))[s]=e);return i},previous:function(t){return arguments.length&&this._previousAttributes?this._previousAttributes[t]:null},previousAttributes:function(){return r.clone(this._previousAttributes)},isValid:function(){return!this.validate(this.attributes)},_validate:function(t,e){if(e.silent||!this.validate)return!0;t=r.extend({},this.attributes,t);var i=this.validate(t,e);return i?(e&&e.error?e.error(this,i,e):this.trigger("error",this,i,e),!1):!0}});var c=t.Collection=function(t,e){e||(e={}),e.model&&(this.model=e.model),e.comparator&&(this.comparator=e.comparator),this._reset(),this.initialize.apply(this,arguments),t&&this.reset(t,{silent:!0,parse:e.parse})};r.extend(c.prototype,h,{model:u,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},add:function(t,e){var i,n,o,a,h,u,c={},l={},d=[];for(e||(e={}),t=r.isArray(t)?t.slice():[t],i=0,o=t.length;o>i;i++){if(!(a=t[i]=this._prepareModel(t[i],e)))throw new Error("Can't add an invalid model to a collection");h=a.cid,u=a.id,c[h]||this._byCid[h]||null!=u&&(l[u]||this._byId[u])?d.push(i):c[h]=l[u]=a}for(i=d.length;i--;)t.splice(d[i],1);for(i=0,o=t.length;o>i;i++)(a=t[i]).on("all",this._onModelEvent,this),this._byCid[a.cid]=a,null!=a.id&&(this._byId[a.id]=a);if(this.length+=o,n=null!=e.at?e.at:this.models.length,s.apply(this.models,[n,0].concat(t)),this.comparator&&this.sort({silent:!0}),e.silent)return this;for(i=0,o=this.models.length;o>i;i++)c[(a=this.models[i]).cid]&&(e.index=i,a.trigger("add",a,this,e));return this},remove:function(t,e){var i,n,s,o;for(e||(e={}),t=r.isArray(t)?t.slice():[t],i=0,n=t.length;n>i;i++)o=this.getByCid(t[i])||this.get(t[i]),o&&(delete this._byId[o.id],delete this._byCid[o.cid],s=this.indexOf(o),this.models.splice(s,1),this.length--,e.silent||(e.index=s,o.trigger("remove",o,this,e)),this._removeReference(o));return this},push:function(t,e){return t=this._prepareModel(t,e),this.add(t,e),t},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t),e},unshift:function(t,e){return t=this._prepareModel(t,e),this.add(t,r.extend({at:0},e)),t},shift:function(t){var e=this.at(0);return this.remove(e,t),e},get:function(t){return null==t?void 0:this._byId[null!=t.id?t.id:t]},getByCid:function(t){return t&&this._byCid[t.cid||t]},at:function(t){return this.models[t]},where:function(t){return r.isEmpty(t)?[]:this.filter(function(e){for(var i in t)if(t[i]!==e.get(i))return!1;return!0})},sort:function(t){if(t||(t={}),!this.comparator)throw new Error("Cannot sort a set without a comparator");var e=r.bind(this.comparator,this);return 1==this.comparator.length?this.models=this.sortBy(e):this.models.sort(e),t.silent||this.trigger("reset",this,t),this},pluck:function(t){return r.map(this.models,function(e){return e.get(t)})},reset:function(t,e){t||(t=[]),e||(e={});for(var i=0,n=this.models.length;n>i;i++)this._removeReference(this.models[i]);return this._reset(),this.add(t,r.extend({silent:!0},e)),e.silent||this.trigger("reset",this,e),this},fetch:function(e){e=e?r.clone(e):{},void 0===e.parse&&(e.parse=!0);var i=this,n=e.success;return e.success=function(t,s,r){i[e.add?"add":"reset"](i.parse(t,r),e),n&&n(i,t)},e.error=t.wrapError(e.error,i,e),(this.sync||t.sync).call(this,"read",this,e)},create:function(t,e){var i=this;if(e=e?r.clone(e):{},t=this._prepareModel(t,e),!t)return!1;e.wait||i.add(t,e);var n=e.success;return e.success=function(s,r,o){e.wait&&i.add(s,e),n?n(s,r):s.trigger("sync",t,r,e)},t.save(null,e),t},parse:function(t,e){return t},chain:function(){return r(this.models).chain()},_reset:function(t){this.length=0,this.models=[],this._byId={},this._byCid={}},_prepareModel:function(t,e){if(e||(e={}),t instanceof u)t.collection||(t.collection=this);else{var i=t;e.collection=this,t=new this.model(i,e),t._validate(t.attributes,e)||(t=!1)}return t},_removeReference:function(t){this==t.collection&&delete t.collection,t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,n){("add"!=t&&"remove"!=t||i==this)&&("destroy"==t&&this.remove(e,n),e&&t==="change:"+e.idAttribute&&(delete this._byId[e.previous(e.idAttribute)],this._byId[e.id]=e),this.trigger.apply(this,arguments))}});var l=["forEach","each","map","reduce","reduceRight","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","sortBy","sortedIndex","toArray","size","first","initial","rest","last","without","indexOf","shuffle","lastIndexOf","isEmpty","groupBy"];r.each(l,function(t){c.prototype[t]=function(){return r[t].apply(r,[this.models].concat(r.toArray(arguments)))}});var d=t.Router=function(t){t||(t={}),t.routes&&(this.routes=t.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},f=/:\w+/g,p=/\*\w+/g,g=/[-[\]{}()+?.,\\^$|#\s]/g;r.extend(d.prototype,h,{initialize:function(){},route:function(e,i,n){return t.history||(t.history=new v),r.isRegExp(e)||(e=this._routeToRegExp(e)),n||(n=this[i]),t.history.route(e,r.bind(function(s){var r=this._extractParameters(e,s);n&&n.apply(this,r),this.trigger.apply(this,["route:"+i].concat(r)),t.history.trigger("route",this,i,r)},this)),this},navigate:function(e,i){t.history.navigate(e,i)},_bindRoutes:function(){if(this.routes){var t=[];for(var e in this.routes)t.unshift([e,this.routes[e]]);for(var i=0,n=t.length;n>i;i++)this.route(t[i][0],t[i][1],this[t[i][1]])}},_routeToRegExp:function(t){return t=t.replace(g,"\\$&").replace(f,"([^/]+)").replace(p,"(.*?)"),new RegExp("^"+t+"$")},_extractParameters:function(t,e){return t.exec(e).slice(1)}});var v=t.History=function(){this.handlers=[],r.bindAll(this,"checkUrl")},m=/^[#\/]/,_=/msie [\w.]+/;v.started=!1,r.extend(v.prototype,h,{interval:50,getHash:function(t){var e=t?t.location:window.location,i=e.href.match(/#(.*)$/);return i?i[1]:""},getFragment:function(t,e){if(null==t)if(this._hasPushState||e){t=window.location.pathname;var i=window.location.search;i&&(t+=i)}else t=this.getHash();return t.indexOf(this.options.root)||(t=t.substr(this.options.root.length)),t.replace(m,"")},start:function(t){if(v.started)throw new Error("Backbone.history has already been started");v.started=!0,this.options=r.extend({},{root:"/"},this.options,t),this._wantsHashChange=this.options.hashChange!==!1,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&window.history&&window.history.pushState);var e=this.getFragment(),i=document.documentMode,n=_.exec(navigator.userAgent.toLowerCase())&&(!i||7>=i);n&&(this.iframe=o('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(e)),this._hasPushState?o(window).bind("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!n?o(window).bind("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.fragment=e;var s=window.location,a=s.pathname==this.options.root;return this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!a?(this.fragment=this.getFragment(null,!0),window.location.replace(this.options.root+"#"+this.fragment),!0):(this._wantsPushState&&this._hasPushState&&a&&s.hash&&(this.fragment=this.getHash().replace(m,""),window.history.replaceState({},document.title,s.protocol+"//"+s.host+this.options.root+this.fragment)),this.options.silent?void 0:this.loadUrl())},stop:function(){o(window).unbind("popstate",this.checkUrl).unbind("hashchange",this.checkUrl),clearInterval(this._checkUrlInterval),v.started=!1},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();return e==this.fragment&&this.iframe&&(e=this.getFragment(this.getHash(this.iframe))),e==this.fragment?!1:(this.iframe&&this.navigate(e),void(this.loadUrl()||this.loadUrl(this.getHash())))},loadUrl:function(t){var e=this.fragment=this.getFragment(t),i=r.any(this.handlers,function(t){return t.route.test(e)?(t.callback(e),!0):void 0});return i},navigate:function(t,e){if(!v.started)return!1;e&&e!==!0||(e={trigger:e});var i=(t||"").replace(m,"");this.fragment!=i&&(this._hasPushState?(0!=i.indexOf(this.options.root)&&(i=this.options.root+i),this.fragment=i,window.history[e.replace?"replaceState":"pushState"]({},document.title,i)):this._wantsHashChange?(this.fragment=i,this._updateHash(window.location,i,e.replace),this.iframe&&i!=this.getFragment(this.getHash(this.iframe))&&(e.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,i,e.replace))):window.location.assign(this.options.root+t),e.trigger&&this.loadUrl(t))},_updateHash:function(t,e,i){i?t.replace(t.toString().replace(/(javascript:|#).*$/,"")+"#"+e):t.hash=e}});var y=t.View=function(t){this.cid=r.uniqueId("view"),this._configure(t||{}),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()},b=/^(\S+)\s*(.*)$/,w=["model","collection","el","id","attributes","className","tagName"];r.extend(y.prototype,h,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){return this.$el.remove(),this},make:function(t,e,i){var n=document.createElement(t);return e&&o(n).attr(e),i&&o(n).html(i),n},setElement:function(t,e){return this.$el&&this.undelegateEvents(),this.$el=t instanceof o?t:o(t),this.el=this.$el[0],e!==!1&&this.delegateEvents(),this},delegateEvents:function(t){if(t||(t=S(this,"events"))){this.undelegateEvents();for(var e in t){var i=t[e];if(r.isFunction(i)||(i=this[t[e]]),!i)throw new Error('Method "'+t[e]+'" does not exist');var n=e.match(b),s=n[1],o=n[2];i=r.bind(i,this),s+=".delegateEvents"+this.cid,""===o?this.$el.bind(s,i):this.$el.delegate(o,s,i)}}},undelegateEvents:function(){this.$el.unbind(".delegateEvents"+this.cid)},_configure:function(t){this.options&&(t=r.extend({},this.options,t));for(var e=0,i=w.length;i>e;e++){var n=w[e];t[n]&&(this[n]=t[n])}this.options=t},_ensureElement:function(){if(this.el)this.setElement(this.el,!1);else{var t=S(this,"attributes")||{};this.id&&(t.id=this.id),this.className&&(t["class"]=this.className),this.setElement(this.make(this.tagName,t),!1)}}});var x=function(t,e){var i=A(this,t,e);return i.extend=this.extend,i};u.extend=c.extend=d.extend=y.extend=x;var E={create:"POST",update:"PUT","delete":"DELETE",read:"GET"};t.sync=function(e,i,n){var s=E[e];n||(n={});var a={type:s,dataType:"json"};return n.url||(a.url=S(i,"url")||k()),n.data||!i||"create"!=e&&"update"!=e||(a.contentType="application/json",a.data=JSON.stringify(i.toJSON())),t.emulateJSON&&(a.contentType="application/x-www-form-urlencoded",a.data=a.data?{model:a.data}:{}),t.emulateHTTP&&("PUT"===s||"DELETE"===s)&&(t.emulateJSON&&(a.data._method=s),a.type="POST",a.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",s)}),"GET"===a.type||t.emulateJSON||(a.processData=!1),o.ajax(r.extend(a,n))},t.wrapError=function(t,e,i){return function(n,s){s=n===e?s:n,t?t(e,s,i):e.trigger("error",e,s,i)}};var T=function(){},A=function(t,e,i){var n;return n=e&&e.hasOwnProperty("constructor")?e.constructor:function(){t.apply(this,arguments)},r.extend(n,t),T.prototype=t.prototype,n.prototype=new T,e&&r.extend(n.prototype,e),i&&r.extend(n,i),n.prototype.constructor=n,n.__super__=t.prototype,n},S=function(t,e){return t&&t[e]?r.isFunction(t[e])?t[e]():t[e]:null},k=function(){throw new Error('A "url" property or function must be specified')}}).call(this);