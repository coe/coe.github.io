function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "MoreAppWindow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.app_window = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "app_window"
    });
    $.__views.app_window && $.addTopLevelView($.__views.app_window);
    $.__views.more_app_window = Alloy.createWidget("jp.coe.moreappwindow", "widget", {
        id: "more_app_window",
        __parentSymbol: $.__views.app_window
    });
    $.__views.more_app_window.setParent($.__views.app_window);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args;
    args = arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;