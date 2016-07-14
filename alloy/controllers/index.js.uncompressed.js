function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    var __alloyId2 = [];
    $.__views.app_window = Ti.UI.createWindow({
        backgroundColor: "#EEE",
        title: L("app_title", "tsuyoshi hyuga's apps."),
        id: "app_window"
    });
    $.__views.apps = Ti.UI.createView({
        bottom: 60,
        id: "apps"
    });
    $.__views.app_window.add($.__views.apps);
    $.__views.more_app_window = Alloy.createWidget("jp.coe.moreappwindow", "widget", {
        id: "more_app_window",
        __parentSymbol: $.__views.apps
    });
    $.__views.more_app_window.setParent($.__views.apps);
    $.__views.buttons = Ti.UI.createView({
        bottom: 0,
        height: 60,
        right: 0,
        layout: "vertical",
        id: "buttons"
    });
    $.__views.app_window.add($.__views.buttons);
    $.__views.__alloyId4 = Ti.UI.createView({
        height: "50%",
        id: "__alloyId4"
    });
    $.__views.buttons.add($.__views.__alloyId4);
    $.__views.footer = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        id: "footer"
    });
    $.__views.__alloyId4.add($.__views.footer);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        borderWidth: 4,
        text: "tsuyoshi hyuga",
        id: "__alloyId5"
    });
    $.__views.footer.add($.__views.__alloyId5);
    $.__views.email_button = Ti.UI.createButton({
        borderWidth: 4,
        title: "Contacts",
        id: "email_button"
    });
    $.__views.footer.add($.__views.email_button);
    clickEmail ? $.__views.email_button.addEventListener("click", clickEmail) : __defers["$.__views.email_button!click!clickEmail"] = true;
    $.__views.googleplus_button = Ti.UI.createWebView({
        height: "50%",
        html: '<script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script>\n<g:plusone></g:plusone>',
        id: "googleplus_button"
    });
    $.__views.buttons.add($.__views.googleplus_button);
    $.__views.__alloyId3 = Ti.UI.createTab({
        title: "home",
        window: $.__views.app_window,
        icon: "KS_nav_ui.png",
        id: "__alloyId3"
    });
    __alloyId2.push($.__views.__alloyId3);
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId2,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var ADDRESS, clickEmail;
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
    clickEmail = function() {
        var emailDialog;
        emailDialog = Ti.UI.createEmailDialog();
        emailDialog.subject = "";
        emailDialog.toRecipients = [ "coe.app@gmail.com" ];
        emailDialog.messageBody = "";
        return emailDialog.open();
    };
    __defers["$.__views.email_button!click!clickEmail"] && $.__views.email_button.addEventListener("click", clickEmail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;