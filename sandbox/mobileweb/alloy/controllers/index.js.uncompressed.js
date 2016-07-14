function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId3 = [];
    $.__views.app_window = Ti.UI.createWindow({
        backgroundColor: "#EEE",
        title: L("app_title", "tsuyoshi hyuga's apps."),
        id: "app_window"
    });
    $.__views.more_app_window = Alloy.createWidget("jp.coe.moreappwindow", "widget", {
        id: "more_app_window",
        __parentSymbol: $.__views.app_window
    });
    $.__views.more_app_window.setParent($.__views.app_window);
    $.__views.__alloyId4 = Ti.UI.createTab({
        title: "home",
        window: $.__views.app_window,
        icon: "KS_nav_ui.png",
        id: "__alloyId4"
    });
    __alloyId3.push($.__views.__alloyId4);
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId3,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var ADDRESS;
    ADDRESS = "coe.app@gmail.com";
    $.index.addEventListener("open", function(e) {
        var _ref;
        if (null != (null != e ? null != (_ref = e.source) ? _ref.activeTab : void 0 : void 0)) return Alloy.Globals.currentTab = e.source.activeTab;
    });
    $.index.addEventListener("focus", function(e) {
        if (null != (null != e ? e.tab : void 0)) return Alloy.Globals.currentTab = e.tab;
    });
    $.index.addEventListener("close", function() {
        return $.destroy();
    });
    $.index.open();
    $.more_app_window.setClickCallback(function(e, d) {
        var obj, view, win;
        Ti.API.debug("callback " + JSON.stringify(d));
        obj = {
            title: d.trackName,
            image: d.screenshotUrls[0],
            genre: d.genres[0],
            data: d
        };
        view = Alloy.createController("AppScrollableView", obj).getView();
        win = Ti.UI.createWindow();
        win.add(view);
        return Alloy.Globals.currentTab.open(win);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;