var WindowManager=require("helper/WindowManager"),Utils=require("helper/Utils"),Cloud=require("ti.cloud");exports["Logout Current User"]=function(e){var t=WindowManager.createWindow({backgroundColor:"white"}),i=Ti.UI.createLabel({text:"Logging out, please wait...",textAlign:"center"});return t.add(i),t};