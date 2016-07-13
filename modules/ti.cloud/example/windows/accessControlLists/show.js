var WindowManager=require("helper/WindowManager"),Utils=require("helper/Utils"),Cloud=require("ti.cloud");exports["Show ACL"]=function(e){var t=WindowManager.createWindow({backgroundColor:"white"}),i=Ti.UI.createScrollView({top:0,contentHeight:"auto",layout:"vertical"});t.add(i);var r=Ti.UI.createTextField({hintText:"Name",top:10+Utils.u,left:10+Utils.u,right:10+Utils.u,height:40+Utils.u,borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,autocapitalization:Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,autocorrect:!1});i.add(r);var n={publicAccess:!1,ids:[]},o=Ti.UI.createButton({title:"Select Readers",top:10+Utils.u,left:10+Utils.u,right:10+Utils.u,bottom:10+Utils.u,height:40+Utils.u});o.addEventListener("click",function(){WindowManager.handleOpenWindow({target:"Select Users for ACL",access:n})}),i.add(o);var s={publicAccess:!1,ids:[]},a=Ti.UI.createButton({title:"Select Writers",top:0,left:10+Utils.u,right:10+Utils.u,bottom:10+Utils.u,height:40+Utils.u});a.addEventListener("click",function(e){WindowManager.handleOpenWindow({target:"Select Users for ACL",access:s})}),i.add(a);var l=Ti.UI.createButton({title:"Show",top:0,left:10+Utils.u,right:10+Utils.u,bottom:10+Utils.u,height:40+Utils.u});l.addEventListener("click",function(e){return 0==r.value.length?void r.focus():void Cloud.ACLs.show({name:r.value},function(e){if(e.success){var t=e.acls[0];n.publicAccess=t.public_read||!1,n.ids=t.readers||[],s.publicAccess=t.public_write||!1,s.ids=t.writers||[],alert("Shown!")}else Utils.error(e)})}),i.add(l);var u=Ti.UI.createButton({title:"Update",top:0,left:10+Utils.u,right:10+Utils.u,bottom:10+Utils.u,height:40+Utils.u});u.addEventListener("click",function(e){Cloud.ACLs.update({name:r.value,reader_ids:n.ids.join(","),writer_ids:s.ids.join(","),public_read:n.publicAccess,public_write:s.publicAccess},function(e){e.success?alert("Updated!"):Utils.error(e)})}),i.add(u);var c=Ti.UI.createButton({title:"Remove",top:0,left:10+Utils.u,right:10+Utils.u,bottom:10+Utils.u,height:40+Utils.u});return c.addEventListener("click",function(e){Cloud.ACLs.remove({name:r.value},function(e){e.success?alert("Removed!"):Utils.error(e)})}),i.add(c),t.addEventListener("open",function(){r.focus()}),t};