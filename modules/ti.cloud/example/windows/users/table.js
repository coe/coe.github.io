var WindowManager=require("helper/WindowManager"),Utils=require("helper/Utils"),Cloud=require("ti.cloud");WindowManager.include("/windows/users/loginStatus","/windows/users/create","/windows/users/login","/windows/users/logout","/windows/users/query","/windows/users/remove","/windows/users/requestResetPassword","/windows/users/resendConfirmation","/windows/users/search","/windows/users/show","/windows/users/showMe","/windows/users/update"),exports.Users=function(e){var t=WindowManager.createWindow({backgroundColor:"white"}),i=Ti.UI.createTableView({backgroundColor:"#fff",top:0,data:Utils.createRows(["Login Status","Create User","Login User","Request Reset Password","Resend Confirmation","Show Current User","Update Current User","Remove Current User","Logout Current User","Query User","Search User"])});return i.addEventListener("click",WindowManager.handleOpenWindow),t.add(i),t};