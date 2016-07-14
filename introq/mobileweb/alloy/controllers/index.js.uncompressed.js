function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId2 = [];
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: Ti.App.name,
        tabBarHidden: true,
        id: "win"
    });
    $.__views.__alloyId3 = Alloy.createController("TitleView", {
        id: "__alloyId3",
        __parentSymbol: $.__views.win
    });
    $.__views.__alloyId3.setParent($.__views.win);
    $.__views.tab_one = Ti.UI.createTab({
        title: Ti.App.name,
        icon: "KS_nav_ui.png",
        window: $.__views.win,
        id: "tab_one"
    });
    __alloyId2.push($.__views.tab_one);
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId2,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
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
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;