var WindowManager=require("helper/WindowManager"),Utils=require("helper/Utils"),Cloud=require("ti.cloud");exports["Update Object"]=function(e){function t(){for(var t={classname:e.classname,id:e.id,fields:{}},i=0;i<a.length;i++)t.fields[a[i].hintText]=a[i].value,a[i].blur();o.hide(),Cloud.Objects.update(t,function(e){e.success?alert("Updated!"):Utils.error(e),o.show()})}var i=WindowManager.createWindow({backgroundColor:"white"}),r=Ti.UI.createScrollView({top:0,contentHeight:"auto",layout:"vertical"});i.add(r);var n=Ti.UI.createButton({title:"Remove",top:10+Utils.u,left:10+Utils.u,right:10+Utils.u,bottom:10+Utils.u,height:40+Utils.u});n.addEventListener("click",function(){WindowManager.handleOpenWindow({target:"Remove Object",id:e.id,classname:e.classname})}),r.add(n);var o=Ti.UI.createButton({title:"Update",top:10+Utils.u,left:10+Utils.u,right:10+Utils.u,bottom:10+Utils.u,height:40+Utils.u}),a=[];o.addEventListener("click",t);var s=Ti.UI.createLabel({text:"Loading, please wait...",textAlign:"center",top:0,right:0,bottom:0,left:0,backgroundColor:"#fff",zIndex:2});return i.add(s),i.addEventListener("open",function(){Cloud.Objects.show({classname:e.classname,id:e.id},function(i){if(s.hide(),i.success){var n=i[e.classname][0];for(var l in n)if(n.hasOwnProperty(l)&&"id"!=l&&"created_at"!=l&&"updated_at"!=l&&"user"!=l){var u=Ti.UI.createTextField({hintText:l,value:n[l],top:10+Utils.u,left:10+Utils.u,right:10+Utils.u,height:40+Utils.u,borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED});r.add(u),u.addEventListener("return",t),a.push(u)}r.add(o),a.length>0&&a[0].focus()}else Utils.error(i)})}),i};