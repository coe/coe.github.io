(function(){var t,e=this,i=e.Backbone,n=Array.prototype.slice,r=Array.prototype.splice;t="undefined"!=typeof exports?exports:e.Backbone={},t.VERSION="0.9.2";var s=e._;s||"undefined"==typeof require||(s=require("alloy/underscore"));var o=e.jQuery||e.Zepto||e.ender;t.setDomLibrary=function(t){o=t},t.noConflict=function(){return e.Backbone=i,this},t.emulateHTTP=!1,t.emulateJSON=!1;var a=/\s+/,h=t.Events={on:function(t,e,i){var n,r,s,o,h;if(!e)return this;for(t=t.split(a),n=this._callbacks||(this._callbacks={});r=t.shift();)h=n[r],s=h?h.tail:{},s.next=o={},s.context=i,s.callback=e,n[r]={tail:o,next:h?h.next:s};return this},off:function(t,e,i){var n,r,o,h,u,l;if(r=this._callbacks){if(!(t||e||i))return delete this._callbacks,this;for(t=t?t.split(a):s.keys(r);n=t.shift();)if(o=r[n],delete r[n],o&&(e||i))for(h=o.tail;(o=o.next)!==h;)u=o.callback,l=o.context,(e&&u!==e||i&&l!==i)&&this.on(n,u,l);return this}},trigger:function(t){var e,i,r,s,o,h,u;if(!(r=this._callbacks))return this;for(h=r.all,t=t.split(a),u=n.call(arguments,1);e=t.shift();){if(i=r[e])for(s=i.tail;(i=i.next)!==s;)i.callback.apply(i.context||this,u);if(i=h)for(s=i.tail,o=[e].concat(u);(i=i.next)!==s;)i.callback.apply(i.context||this,o)}return this}};h.bind=h.on,h.unbind=h.off;var u=t.Model=function(t,e){var i;t||(t={}),e&&e.parse&&(t=this.parse(t)),(i=A(this,"defaults"))&&(t=s.extend({},i,t)),e&&e.collection&&(this.collection=e.collection),this.attributes={},this._escapedAttributes={},this.cid=s.uniqueId("c"),this.changed={},this._silent={},this._pending={},this.set(t,{silent:!0}),this.changed={},this._silent={},this._pending={},this._previousAttributes=s.clone(this.attributes),this.initialize.apply(this,arguments)};s.extend(u.prototype,h,{changed:null,_silent:null,_pending:null,idAttribute:"id",initialize:function(){},toJSON:function(){return s.clone(this.attributes)},get:function(t){return this.attributes[t]},escape:function(t){var e;if(e=this._escapedAttributes[t])return e;var i=this.get(t);return this._escapedAttributes[t]=s.escape(null==i?"":""+i)},has:function(t){return null!=this.get(t)},set:function(t,e,i){var n,r,o;if(s.isObject(t)||null==t?(n=t,i=e):(n={},n[t]=e),i||(i={}),!n)return this;if(n instanceof u&&(n=n.attributes),i.unset)for(r in n)n[r]=void 0;if(!this._validate(n,i))return!1;this.idAttribute in n&&(this.id=n[this.idAttribute]);var a=i.changes={},h=this.attributes,l=this._escapedAttributes,c=this._previousAttributes||{};for(r in n)o=n[r],(!s.isEqual(h[r],o)||i.unset&&s.has(h,r))&&(delete l[r],(i.silent?this._silent:a)[r]=!0),i.unset?delete h[r]:h[r]=o,s.isEqual(c[r],o)&&s.has(h,r)==s.has(c,r)?(delete this.changed[r],delete this._pending[r]):(this.changed[r]=o,i.silent||(this._pending[r]=!0));return i.silent||this.change(i),this},unset:function(t,e){return(e||(e={})).unset=!0,this.set(t,null,e)},clear:function(t){return(t||(t={})).unset=!0,this.set(s.clone(this.attributes),t)},fetch:function(e){e=e?s.clone(e):{};var i=this,n=e.success;return e.success=function(t,r,s){return i.set(i.parse(t,s),e)?(n&&n(i,t),void 0):!1},e.error=t.wrapError(e.error,i,e),(this.sync||t.sync).call(this,"read",this,e)},save:function(e,i,n){var r,o;if(s.isObject(e)||null==e?(r=e,n=i):(r={},r[e]=i),n=n?s.clone(n):{},n.wait){if(!this._validate(r,n))return!1;o=s.clone(this.attributes)}var a=s.extend({},n,{silent:!0});if(r&&!this.set(r,n.wait?a:n))return!1;var h=this,u=n.success;n.success=function(t,e,i){var o=h.parse(t,i);return n.wait&&(delete n.wait,o=s.extend(r||{},o)),h.set(o,n)?(u?u(h,t):h.trigger("sync",h,t,n),void 0):!1},n.error=t.wrapError(n.error,h,n);var l=this.isNew()?"create":"update",c=(this.sync||t.sync).call(this,l,this,n);return n.wait&&this.set(o,a),c},destroy:function(e){e=e?s.clone(e):{};var i=this,n=e.success,r=function(){i.trigger("destroy",i,i.collection,e)};if(this.isNew())return r(),!1;e.success=function(t){e.wait&&r(),n?n(i,t):i.trigger("sync",i,t,e)},e.error=t.wrapError(e.error,i,e);var o=(this.sync||t.sync).call(this,"delete",this,e);return e.wait||r(),o},url:function(){var t=A(this,"urlRoot")||A(this.collection,"url")||C();return this.isNew()?t:t+("/"==t.charAt(t.length-1)?"":"/")+encodeURIComponent(this.id)},parse:function(t){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return null==this.id},change:function(t){t||(t={});var e=this._changing;this._changing=!0;for(var i in this._silent)this._pending[i]=!0;var n=s.extend({},t.changes,this._silent);this._silent={};for(var i in n)this.trigger("change:"+i,this,this.get(i),t);if(e)return this;for(;!s.isEmpty(this._pending);){this._pending={},this.trigger("change",this,t);for(var i in this.changed)this._pending[i]||this._silent[i]||delete this.changed[i];this._previousAttributes=s.clone(this.attributes)}return this._changing=!1,this},hasChanged:function(t){return arguments.length?s.has(this.changed,t):!s.isEmpty(this.changed)},changedAttributes:function(t){if(!t)return this.hasChanged()?s.clone(this.changed):!1;var e,i=!1,n=this._previousAttributes;for(var r in t)s.isEqual(n[r],e=t[r])||((i||(i={}))[r]=e);return i},previous:function(t){return arguments.length&&this._previousAttributes?this._previousAttributes[t]:null},previousAttributes:function(){return s.clone(this._previousAttributes)},isValid:function(){return!this.validate(this.attributes)},_validate:function(t,e){if(e.silent||!this.validate)return!0;t=s.extend({},this.attributes,t);var i=this.validate(t,e);return i?(e&&e.error?e.error(this,i,e):this.trigger("error",this,i,e),!1):!0}});var l=t.Collection=function(t,e){e||(e={}),e.model&&(this.model=e.model),e.comparator&&(this.comparator=e.comparator),this._reset(),this.initialize.apply(this,arguments),t&&this.reset(t,{silent:!0,parse:e.parse})};s.extend(l.prototype,h,{model:u,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},add:function(t,e){var i,n,o,a,h,u,l={},c={},d=[];for(e||(e={}),t=s.isArray(t)?t.slice():[t],i=0,o=t.length;o>i;i++){if(!(a=t[i]=this._prepareModel(t[i],e)))throw Error("Can't add an invalid model to a collection");h=a.cid,u=a.id,l[h]||this._byCid[h]||null!=u&&(c[u]||this._byId[u])?d.push(i):l[h]=c[u]=a}for(i=d.length;i--;)t.splice(d[i],1);for(i=0,o=t.length;o>i;i++)(a=t[i]).on("all",this._onModelEvent,this),this._byCid[a.cid]=a,null!=a.id&&(this._byId[a.id]=a);if(this.length+=o,n=null!=e.at?e.at:this.models.length,r.apply(this.models,[n,0].concat(t)),this.comparator&&this.sort({silent:!0}),e.silent)return this;for(i=0,o=this.models.length;o>i;i++)l[(a=this.models[i]).cid]&&(e.index=i,a.trigger("add",a,this,e));return this},remove:function(t,e){var i,n,r,o;for(e||(e={}),t=s.isArray(t)?t.slice():[t],i=0,n=t.length;n>i;i++)o=this.getByCid(t[i])||this.get(t[i]),o&&(delete this._byId[o.id],delete this._byCid[o.cid],r=this.indexOf(o),this.models.splice(r,1),this.length--,e.silent||(e.index=r,o.trigger("remove",o,this,e)),this._removeReference(o));return this},push:function(t,e){return t=this._prepareModel(t,e),this.add(t,e),t},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t),e},unshift:function(t,e){return t=this._prepareModel(t,e),this.add(t,s.extend({at:0},e)),t},shift:function(t){var e=this.at(0);return this.remove(e,t),e},get:function(t){return null==t?void 0:this._byId[null!=t.id?t.id:t]},getByCid:function(t){return t&&this._byCid[t.cid||t]},at:function(t){return this.models[t]},where:function(t){return s.isEmpty(t)?[]:this.filter(function(e){for(var i in t)if(t[i]!==e.get(i))return!1;return!0})},sort:function(t){if(t||(t={}),!this.comparator)throw Error("Cannot sort a set without a comparator");var e=s.bind(this.comparator,this);return 1==this.comparator.length?this.models=this.sortBy(e):this.models.sort(e),t.silent||this.trigger("reset",this,t),this},pluck:function(t){return s.map(this.models,function(e){return e.get(t)})},reset:function(t,e){t||(t=[]),e||(e={});for(var i=0,n=this.models.length;n>i;i++)this._removeReference(this.models[i]);return this._reset(),this.add(t,s.extend({silent:!0},e)),e.silent||this.trigger("reset",this,e),this},fetch:function(e){e=e?s.clone(e):{},void 0===e.parse&&(e.parse=!0);var i=this,n=e.success;return e.success=function(t,r,s){i[e.add?"add":"reset"](i.parse(t,s),e),n&&n(i,t)},e.error=t.wrapError(e.error,i,e),(this.sync||t.sync).call(this,"read",this,e)},create:function(t,e){var i=this;if(e=e?s.clone(e):{},t=this._prepareModel(t,e),!t)return!1;e.wait||i.add(t,e);var n=e.success;return e.success=function(r,s){e.wait&&i.add(r,e),n?n(r,s):r.trigger("sync",t,s,e)},t.save(null,e),t},parse:function(t){return t},chain:function(){return s(this.models).chain()},_reset:function(){this.length=0,this.models=[],this._byId={},this._byCid={}},_prepareModel:function(t,e){if(e||(e={}),t instanceof u)t.collection||(t.collection=this);else{var i=t;e.collection=this,t=new this.model(i,e),t._validate(t.attributes,e)||(t=!1)}return t},_removeReference:function(t){this==t.collection&&delete t.collection,t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,n){("add"!=t&&"remove"!=t||i==this)&&("destroy"==t&&this.remove(e,n),e&&t==="change:"+e.idAttribute&&(delete this._byId[e.previous(e.idAttribute)],this._byId[e.id]=e),this.trigger.apply(this,arguments))}});var c=["forEach","each","map","reduce","reduceRight","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","sortBy","sortedIndex","toArray","size","first","initial","rest","last","without","indexOf","shuffle","lastIndexOf","isEmpty","groupBy"];s.each(c,function(t){l.prototype[t]=function(){return s[t].apply(s,[this.models].concat(s.toArray(arguments)))}});var d=t.Router=function(t){t||(t={}),t.routes&&(this.routes=t.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},p=/:\w+/g,f=/\*\w+/g,g=/[-[\]{}()+?.,\\^$|#\s]/g;s.extend(d.prototype,h,{initialize:function(){},route:function(e,i,n){return t.history||(t.history=new m),s.isRegExp(e)||(e=this._routeToRegExp(e)),n||(n=this[i]),t.history.route(e,s.bind(function(r){var s=this._extractParameters(e,r);n&&n.apply(this,s),this.trigger.apply(this,["route:"+i].concat(s)),t.history.trigger("route",this,i,s)},this)),this},navigate:function(e,i){t.history.navigate(e,i)},_bindRoutes:function(){if(this.routes){var t=[];for(var e in this.routes)t.unshift([e,this.routes[e]]);for(var i=0,n=t.length;n>i;i++)this.route(t[i][0],t[i][1],this[t[i][1]])}},_routeToRegExp:function(t){return t=t.replace(g,"\\$&").replace(p,"([^/]+)").replace(f,"(.*?)"),RegExp("^"+t+"$")},_extractParameters:function(t,e){return t.exec(e).slice(1)}});var m=t.History=function(){this.handlers=[],s.bindAll(this,"checkUrl")},v=/^[#\/]/,y=/msie [\w.]+/;m.started=!1,s.extend(m.prototype,h,{interval:50,getHash:function(t){var e=t?t.location:window.location,i=e.href.match(/#(.*)$/);return i?i[1]:""},getFragment:function(t,e){if(null==t)if(this._hasPushState||e){t=window.location.pathname;var i=window.location.search;i&&(t+=i)}else t=this.getHash();return t.indexOf(this.options.root)||(t=t.substr(this.options.root.length)),t.replace(v,"")},start:function(t){if(m.started)throw Error("Backbone.history has already been started");m.started=!0,this.options=s.extend({},{root:"/"},this.options,t),this._wantsHashChange=this.options.hashChange!==!1,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&window.history&&window.history.pushState);var e=this.getFragment(),i=document.documentMode,n=y.exec(navigator.userAgent.toLowerCase())&&(!i||7>=i);n&&(this.iframe=o('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(e)),this._hasPushState?o(window).bind("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!n?o(window).bind("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.fragment=e;var r=window.location,a=r.pathname==this.options.root;return this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!a?(this.fragment=this.getFragment(null,!0),window.location.replace(this.options.root+"#"+this.fragment),!0):(this._wantsPushState&&this._hasPushState&&a&&r.hash&&(this.fragment=this.getHash().replace(v,""),window.history.replaceState({},document.title,r.protocol+"//"+r.host+this.options.root+this.fragment)),this.options.silent?void 0:this.loadUrl())},stop:function(){o(window).unbind("popstate",this.checkUrl).unbind("hashchange",this.checkUrl),clearInterval(this._checkUrlInterval),m.started=!1},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(){var t=this.getFragment();return t==this.fragment&&this.iframe&&(t=this.getFragment(this.getHash(this.iframe))),t==this.fragment?!1:(this.iframe&&this.navigate(t),this.loadUrl()||this.loadUrl(this.getHash()),void 0)},loadUrl:function(t){var e=this.fragment=this.getFragment(t),i=s.any(this.handlers,function(t){return t.route.test(e)?(t.callback(e),!0):void 0});return i},navigate:function(t,e){if(!m.started)return!1;e&&e!==!0||(e={trigger:e});var i=(t||"").replace(v,"");this.fragment!=i&&(this._hasPushState?(0!=i.indexOf(this.options.root)&&(i=this.options.root+i),this.fragment=i,window.history[e.replace?"replaceState":"pushState"]({},document.title,i)):this._wantsHashChange?(this.fragment=i,this._updateHash(window.location,i,e.replace),this.iframe&&i!=this.getFragment(this.getHash(this.iframe))&&(e.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,i,e.replace))):window.location.assign(this.options.root+t),e.trigger&&this.loadUrl(t))},_updateHash:function(t,e,i){i?t.replace((""+t).replace(/(javascript:|#).*$/,"")+"#"+e):t.hash=e}});var _=t.View=function(t){this.cid=s.uniqueId("view"),this._configure(t||{}),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()},w=/^(\S+)\s*(.*)$/,b=["model","collection","el","id","attributes","className","tagName"];s.extend(_.prototype,h,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){return this.$el.remove(),this},make:function(t,e,i){var n=document.createElement(t);return e&&o(n).attr(e),i&&o(n).html(i),n},setElement:function(t,e){return this.$el&&this.undelegateEvents(),this.$el=t instanceof o?t:o(t),this.el=this.$el[0],e!==!1&&this.delegateEvents(),this},delegateEvents:function(t){if(t||(t=A(this,"events"))){this.undelegateEvents();for(var e in t){var i=t[e];if(s.isFunction(i)||(i=this[t[e]]),!i)throw Error('Method "'+t[e]+'" does not exist');var n=e.match(w),r=n[1],o=n[2];i=s.bind(i,this),r+=".delegateEvents"+this.cid,""===o?this.$el.bind(r,i):this.$el.delegate(o,r,i)}}},undelegateEvents:function(){this.$el.unbind(".delegateEvents"+this.cid)},_configure:function(t){this.options&&(t=s.extend({},this.options,t));for(var e=0,i=b.length;i>e;e++){var n=b[e];t[n]&&(this[n]=t[n])}this.options=t},_ensureElement:function(){if(this.el)this.setElement(this.el,!1);else{var t=A(this,"attributes")||{};this.id&&(t.id=this.id),this.className&&(t["class"]=this.className),this.setElement(this.make(this.tagName,t),!1)}}});var T=function(t,e){var i=S(this,t,e);return i.extend=this.extend,i};u.extend=l.extend=d.extend=_.extend=T;var E={create:"POST",update:"PUT","delete":"DELETE",read:"GET"};t.sync=function(e,i,n){var r=E[e];n||(n={});var a={type:r,dataType:"json"};return n.url||(a.url=A(i,"url")||C()),n.data||!i||"create"!=e&&"update"!=e||(a.contentType="application/json",a.data=JSON.stringify(i.toJSON())),t.emulateJSON&&(a.contentType="application/x-www-form-urlencoded",a.data=a.data?{model:a.data}:{}),t.emulateHTTP&&("PUT"===r||"DELETE"===r)&&(t.emulateJSON&&(a.data._method=r),a.type="POST",a.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",r)}),"GET"===a.type||t.emulateJSON||(a.processData=!1),o.ajax(s.extend(a,n))},t.wrapError=function(t,e,i){return function(n,r){r=n===e?r:n,t?t(e,r,i):e.trigger("error",e,r,i)}};var x=function(){},S=function(t,e,i){var n;return n=e&&e.hasOwnProperty("constructor")?e.constructor:function(){t.apply(this,arguments)},s.extend(n,t),x.prototype=t.prototype,n.prototype=new x,e&&s.extend(n.prototype,e),i&&s.extend(n,i),n.prototype.constructor=n,n.__super__=t.prototype,n},A=function(t,e){return t&&t[e]?s.isFunction(t[e])?t[e]():t[e]:null},C=function(){throw Error('A "url" property or function must be specified')}}).call(this);