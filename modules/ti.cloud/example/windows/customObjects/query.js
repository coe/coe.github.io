var WindowManager=require("helper/WindowManager"),Utils=require("helper/Utils"),Cloud=require("ti.cloud");exports["Query Objects"]=function(e){function t(){if(!r.value.length)return void r.focus();r.blur(),n.hide(),i.remove(o),o=Ti.UI.createScrollView({top:110+Utils.u,contentHeight:"auto",layout:"vertical"}),i.add(o),o.add(a);var e=r.value;Cloud.Objects.query({classname:e},function(t){if(o.remove(a),n.show(),t.success){var i=t[e];if(i.length)for(var r=0;r<i.length;r++)!function(t){var r=Ti.UI.createView({layout:"vertical",height:50+Utils.u,top:5+Utils.u,right:5+Utils.u,bottom:5+Utils.u,left:5+Utils.u,borderColor:"#ccc",borderWeight:1}),n=Ti.UI.createLabel({text:"id: "+i[t].id,height:"auto",left:20+Utils.u,right:20+Utils.u,color:"black"}),a=Ti.UI.createLabel({text:"Click to update",height:"auto",left:20+Utils.u,right:20+Utils.u,color:"gray"});r.add(n),r.add(a),r.addEventListener("click",function(){WindowManager.handleOpenWindow({target:"Update Object",id:i[t].id,classname:e})}),o.add(r)}(r);else alert("No objects found!")}else Utils.error(t)})}var i=WindowManager.createWindow({backgroundColor:"white"}),r=Ti.UI.createTextField({hintText:"Class Name",top:10+Utils.u,left:10+Utils.u,right:10+Utils.u,height:40+Utils.u,borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,autocapitalization:Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,autocorrect:!1});i.add(r);var n=Ti.UI.createButton({title:"Query",top:60+Utils.u,left:10+Utils.u,right:10+Utils.u,height:40+Utils.u});i.add(n);var o=Ti.UI.createScrollView({top:110+Utils.u,contentHeight:"auto",layout:"vertical"});i.add(o);var a=Ti.UI.createLabel({text:"Loading, please wait...",textAlign:"left",height:30+Utils.u,left:20+Utils.u,right:20+Utils.u});return n.addEventListener("click",t),r.addEventListener("return",t),i.addEventListener("open",function(){r.focus()}),i};