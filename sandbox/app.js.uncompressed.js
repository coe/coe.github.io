var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

var PROXY_URL;

PROXY_URL = "http://myproxywithcorstwo.appspot.com/";

Ti.Network.httpURLFormatter = function(url) {
    var newPrefix;
    newPrefix = PROXY_URL;
    console.debug("newPrefix to " + newPrefix);
    if (-1 === url.indexOf(newPrefix) && -1 !== url.indexOf("://")) {
        url = url.replace("http://", "").replace("https://", "");
        url = "http://myproxywithcorstwo.appspot.com/" + url;
        console.debug("proxying to " + url);
    }
    return url;
};

Alloy.createController("index");