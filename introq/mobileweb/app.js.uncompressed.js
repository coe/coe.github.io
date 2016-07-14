var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

var PROXY_URL, postScore;

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

Alloy.Globals.Style = {
    game_view_height: 60
};

Alloy.Globals.NullImage = "/images/hatena.png";

postScore = function(score) {
    var obj, _ref;
    obj = {
        score: score,
        id: "score"
    };
    return null != (_ref = Alloy.Globals.GC) ? _ref.reportScore(obj) : void 0;
};

Alloy.createController("index");