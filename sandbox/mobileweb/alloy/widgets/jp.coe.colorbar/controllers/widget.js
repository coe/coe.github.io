function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "jp.coe.colorbar/" + s : s.substring(0, index) + "/jp.coe.colorbar/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("jp.coe.colorbar");
    this.__widgetId = "jp.coe.colorbar";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.window = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "window"
    });
    $.__views.window && $.addTopLevelView($.__views.window);
    focusWindow ? $.__views.window.addEventListener("focus", focusWindow) : __defers["$.__views.window!focus!focusWindow"] = true;
    blurWindow ? $.__views.window.addEventListener("blur", blurWindow) : __defers["$.__views.window!blur!blurWindow"] = true;
    $.__views.webview = Ti.UI.createWebView({
        url: WPATH("/html/demo.html"),
        id: "webview"
    });
    $.__views.window.add($.__views.webview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args, blurWindow, colorFunc, focusWindow;
    args = arguments[0] || {};
    colorFunc = function(params) {
        return args.callback("#" + params.value);
    };
    focusWindow = function() {
        return Ti.App.addEventListener("colorValue", colorFunc);
    };
    blurWindow = function() {
        return Ti.App.removeEventListener("colorValue", colorFunc);
    };
    __defers["$.__views.window!focus!focusWindow"] && $.__views.window.addEventListener("focus", focusWindow);
    __defers["$.__views.window!blur!blurWindow"] && $.__views.window.addEventListener("blur", blurWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;