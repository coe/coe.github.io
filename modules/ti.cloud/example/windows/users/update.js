var WindowManager=require("helper/WindowManager"),Utils=require("helper/Utils"),Cloud=require("ti.cloud");exports["Update Current User"]=function(e){function t(){if(a.value!=s.value)return alert("Password and Confirm Password do not match."),void s.focus();for(var e=0;e<h.length;e++)h[e].blur();c.hide();var t={username:o.value,email:n.value,first_name:l.value,last_name:u.value,tags:d.value};a.value.length>0&&(t.password=a.value,t.password_confirmation=s.value,a.value=s.value=""),Cloud.Users.update(t,function(e){e.success?alert("Updated!"):Utils.error(e),c.show()})}var i=WindowManager.createWindow({backgroundColor:"white"}),r=Ti.UI.createScrollView({top:0,contentHeight:"auto",layout:"vertical"});i.add(r);var o=Ti.UI.createTextField({hintText:"Username",top:10+Utils.u,left:10+Utils.u,right:10+Utils.u,height:40+Utils.u,borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,autocapitalization:Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,autocorrect:!1});r.add(o);var n=Ti.UI.createTextField({hintText:"Email",top:10+Utils.u,left:10+Utils.u,right:10+Utils.u,height:40+Utils.u,borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,keyboardType:Ti.UI.KEYBOARD_EMAIL});r.add(n);var a=Ti.UI.createTextField({hintText:"Password",top:10+Utils.u,left:10+Utils.u,right:10+Utils.u,height:40+Utils.u,borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,passwordMask:!0});r.add(a);var s=Ti.UI.createTextField({hintText:"Confirm Password",top:10+Utils.u,left:10+Utils.u,right:10+Utils.u,height:40+Utils.u,borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,passwordMask:!0});r.add(s);var l=Ti.UI.createTextField({hintText:"First Name",top:10+Utils.u,left:10+Utils.u,right:10+Utils.u,height:40+Utils.u,borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED});r.add(l);var u=Ti.UI.createTextField({hintText:"Last Name",top:10+Utils.u,left:10+Utils.u,right:10+Utils.u,height:40+Utils.u,borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED});r.add(u);var d=Ti.UI.createTextField({hintText:"Tags (csv)",top:10+Utils.u,left:10+Utils.u,right:10+Utils.u,height:40+Utils.u,borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,autocapitalization:Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,autocorrect:!1});r.add(d);var c=Ti.UI.createButton({title:"Update",top:10+Utils.u,left:10+Utils.u,right:10+Utils.u,bottom:10+Utils.u,height:40+Utils.u});r.add(c);var h=[o,n,a,s,l,u,d];c.addEventListener("click",t);for(var p=0;p<h.length;p++)h[p].addEventListener("return",t);var U=Ti.UI.createLabel({text:"Loading, please wait...",textAlign:"center",top:0,right:0,bottom:0,left:0,backgroundColor:"#fff",zIndex:2});return i.add(U),i.addEventListener("open",function(){Cloud.Users.showMe(function(e){if(U.hide(),e.success){var t=e.users[0];o.value=t.username,n.value=t.email,l.value=t.first_name,u.value=t.last_name,d.value=t.tags&&t.tags.join(","),o.focus()}else Utils.error(e)})}),i};