var WindowManager=require("helper/WindowManager"),Utils=require("helper/Utils"),Cloud=require("ti.cloud");exports["Create User"]=function(e){function t(){for(var e=0;e<c.length;e++){if(!c[e].value.length)return void c[e].focus();c[e].blur()}return n.value!=a.value?(alert("Passwords do not match!"),void a.focus()):(d.hide(),void Cloud.Users.create({username:o.value,password:n.value,password_confirmation:a.value,first_name:s.value,last_name:l.value,email:u.value},function(e){if(e.success){var t=e.users[0];alert("Created! You are now logged in as "+t.id),o.value=n.value=a.value=s.value=l.value=""}else Utils.error(e);d.show()}))}var i=WindowManager.createWindow({backgroundColor:"white"}),r=Ti.UI.createScrollView({top:0,contentHeight:"auto",layout:"vertical"});i.add(r);var o=Ti.UI.createTextField({hintText:"Username",top:10+Utils.u,left:10+Utils.u,right:10+Utils.u,height:40+Utils.u,borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,autocapitalization:Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,autocorrect:!1});r.add(o);var n=Ti.UI.createTextField({hintText:"Password",top:10+Utils.u,left:10+Utils.u,right:10+Utils.u,height:40+Utils.u,borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,passwordMask:!0});r.add(n);var a=Ti.UI.createTextField({hintText:"Confirm Password",top:10+Utils.u,left:10+Utils.u,right:10+Utils.u,height:40+Utils.u,borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,passwordMask:!0});r.add(a);var s=Ti.UI.createTextField({hintText:"First Name",top:10+Utils.u,left:10+Utils.u,right:10+Utils.u,height:40+Utils.u,borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED});r.add(s);var l=Ti.UI.createTextField({hintText:"Last Name",top:10+Utils.u,left:10+Utils.u,right:10+Utils.u,height:40+Utils.u,borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED});r.add(l);var u=Ti.UI.createTextField({hintText:"Email",top:10+Utils.u,left:10+Utils.u,right:10+Utils.u,height:40+Utils.u,borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED});r.add(u);var d=Ti.UI.createButton({title:"Create",top:10+Utils.u,left:10+Utils.u,right:10+Utils.u,bottom:10+Utils.u,height:40+Utils.u});r.add(d);var c=[o,n,a,s,l];d.addEventListener("click",t);for(var h=0;h<c.length;h++)c[h].addEventListener("return",t);return i.addEventListener("open",function(){o.focus()}),i};