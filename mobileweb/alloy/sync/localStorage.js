function S4(){return(0|65536*(1+Math.random())).toString(16).substring(1)}function guid(){return S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4()}function InitAdapter(){}function Sync(e,t,i){function r(e){localStorage.setItem(n,JSON.stringify(e))}var n=t.config.adapter.collection_name,o=t.config.data,a=null;switch(e){case"create":t.id||(t.id=guid(),t.set(t.idAttribute,t.id)),o[t.id]=t,r(o),a=t.toJSON();break;case"read":var s=localStorage.getItem(n),l=s&&JSON.parse(s)||{},c=0;for(var u in l){var p=new t.config.Model(l[u]);t.models.push(p),c++}t.length=c,a=1===c?t.models[0]:t.models;break;case"update":o[t.id]=t,r(o),a=t.toJSON();break;case"delete":delete o[t.id],r(o),a=t.toJSON()}a?(_.isFunction(i.success)&&i.success(a),"read"===e&&t.trigger("fetch")):_.isFunction(i.error)&&i.error(a)}var _=require("alloy/underscore")._;module.exports.sync=Sync,module.exports.beforeModelCreate=function(e){return e=e||{},e.data={},InitAdapter(),e},module.exports.afterModelCreate=function(e){return e=e||{},e.prototype.config.Model=e,e};