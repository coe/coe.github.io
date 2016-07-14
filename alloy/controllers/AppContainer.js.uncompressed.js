function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "AppContainer";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.AppContainer = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "AppContainer"
    });
    $.__views.AppContainer && $.addTopLevelView($.__views.AppContainer);
    var __alloyId0 = [];
    $.__views.scrollableView = Ti.UI.createScrollableView({
        bottom: 60,
        views: __alloyId0,
        id: "scrollableView",
        showPagingControl: "true"
    });
    $.__views.AppContainer.add($.__views.scrollableView);
    $.__views.footer = Ti.UI.createView({
        bottom: 0,
        height: 60,
        layout: "horizontal",
        id: "footer"
    });
    $.__views.AppContainer.add($.__views.footer);
    $.__views.applink_ios = Ti.UI.createButton({
        title: "ios",
        id: "applink_ios"
    });
    $.__views.footer.add($.__views.applink_ios);
    clickIOSButton ? $.__views.applink_ios.addEventListener("click", clickIOSButton) : __defers["$.__views.applink_ios!click!clickIOSButton"] = true;
    $.__views.applink_andorid = Ti.UI.createButton({
        title: "android",
        id: "applink_andorid"
    });
    $.__views.footer.add($.__views.applink_andorid);
    clickAndroidButton ? $.__views.applink_andorid.addEventListener("click", clickAndroidButton) : __defers["$.__views.applink_andorid!click!clickAndroidButton"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var ANDROID_URL, args, clickAndroidButton, clickIOSButton;
    args = arguments[0] || {};
    ANDROID_URL = "https://play.google.com/store/apps/details?id=";
    clickIOSButton = function() {
        return Ti.Platform.openURL(args.trackViewUrl);
    };
    clickAndroidButton = function() {
        return Ti.Platform.openURL(ANDROID_URL + args.trackViewUrl);
    };
    __defers["$.__views.applink_ios!click!clickIOSButton"] && $.__views.applink_ios.addEventListener("click", clickIOSButton);
    __defers["$.__views.applink_andorid!click!clickAndroidButton"] && $.__views.applink_andorid.addEventListener("click", clickAndroidButton);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;