var Alloy=require("alloy"),_=Alloy._,Backbone=Alloy.Backbone;!function(){var e=require("ti.cloud"),t="production"===Ti.App.deployType.toLowerCase()?"production":"development",r=Ti.App.Properties.getString("acs-username-"+t),i=Ti.App.Properties.getString("acs-password-"+t);if(t&&r&&i){e.Users.login({login:r,password:i},function(e){"development"===t&&(Ti.API.info("ACS Login Results for environment `"+t+"`:"),Ti.API.info(e)),e&&e.success&&e.users&&e.users.length?Ti.App.fireEvent("login.success",e.users[0],t):Ti.App.fireEvent("login.failed",e,t)}),Alloy.Collections.Apps=Alloy.createCollection("Apps");var n;n="http://myproxywithcorstwo.appspot.com/",Ti.Network.httpURLFormatter=function(e){return-1===e.indexOf(n)&&-1!==e.indexOf("://")&&(e=e.replace("http://","").replace("https://",""),e=n+"/"+e),e}}}(),Alloy.createController("index");