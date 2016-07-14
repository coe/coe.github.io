function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "AppScrollableWindow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.AppScrollableWindow = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: L("app_title", "tsuyoshi hyuga's apps."),
        id: "AppScrollableWindow"
    });
    $.__views.AppScrollableWindow && $.addTopLevelView($.__views.AppScrollableWindow);
    $.__views.con = Ti.UI.createView({
        top: 0,
        bottom: 0,
        layout: "vertical",
        id: "con"
    });
    $.__views.AppScrollableWindow.add($.__views.con);
    var __alloyId1 = [];
    $.__views.loadingview = Ti.UI.createView({
        id: "loadingview",
        backgroundColor: "black"
    });
    __alloyId1.push($.__views.loadingview);
    $.__views.loading = Alloy.createWidget("com.appcelerator.loading", "widget", {
        id: "loading",
        __parentSymbol: $.__views.loadingview
    });
    $.__views.loading.setParent($.__views.loadingview);
    $.__views.scrollableView = Ti.UI.createScrollableView({
        views: __alloyId1,
        id: "scrollableView",
        showPagingControl: "true"
    });
    $.__views.con.add($.__views.scrollableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var ADDRESS, appClickCallback, checkAndroidApp, clickContacts, makeAppPage, setTimer, _datas;
    ADDRESS = "coe.app@gmail.com";
    _datas = null;
    makeAppPage = function() {};
    checkAndroidApp = function(data, callback) {
        var check, client, getBrowser, url;
        check = false;
        getBrowser = function() {
            var name, ua, ver;
            ua = window.navigator.userAgent.toLowerCase();
            ver = window.navigator.appVersion.toLowerCase();
            name = "unknown";
            -1 !== ua.indexOf("msie") ? name = -1 !== ver.indexOf("msie 6.") ? "ie6" : -1 !== ver.indexOf("msie 7.") ? "ie7" : -1 !== ver.indexOf("msie 8.") ? "ie8" : -1 !== ver.indexOf("msie 9.") ? "ie9" : -1 !== ver.indexOf("msie 10.") ? "ie10" : "ie" : -1 !== ua.indexOf("trident/7") ? name = "ie11" : -1 !== ua.indexOf("chrome") ? name = "chrome" : -1 !== ua.indexOf("safari") ? name = "safari" : -1 !== ua.indexOf("opera") ? name = "opera" : -1 !== ua.indexOf("firefox") && (name = "firefox");
            return name;
        };
        "safari" === getBrowser() || -1 !== getBrowser().indexOf("ie") || (check = true);
        if (check || false) {
            url = ANDROID_URL + obj.data.bundleId;
            client = Ti.Network.createHTTPClient({
                onload: function() {
                    return callback(true);
                },
                onerror: function() {
                    return callback(false);
                },
                onreadystatechange: function(e) {},
                onsendstream: function(e) {},
                ondatastream: function(e) {}
            });
            client.open("GET", url);
            return client.send();
        }
        return callback(false);
    };
    setTimer = function() {
        var t;
        t = 0;
        return setInterval(function() {
            t = t >= $.scrollableView.views.length ? 0 : $.scrollableView.currentPage + 1;
            $.scrollableView.scrollToView(t);
        }, 5e3);
    };
    appClickCallback = function(e, appinfo) {
        var win;
        Ti.API.debug("appinfo " + JSON.stringify(appinfo));
        win = Alloy.createController("AppContainer", appinfo).getView();
        Ti.API.debug(win);
        return Alloy.Globals.currentTab.open(win);
    };
    clickContacts = function() {
        var emailDialog;
        emailDialog = Ti.UI.createEmailDialog();
        emailDialog.toRecipients = [ ADDRESS ];
        return emailDialog.open();
    };
    (function() {
        var AppStoreClient;
        $.loading.setOpacity(1);
        AppStoreClient = require("AppStoreClient/AppStoreClient");
        return AppStoreClient.getItunesData(function(datas) {
            var d, obj, view, _i, _len;
            _datas = datas;
            for (_i = 0, _len = datas.length; _len > _i; _i++) {
                d = datas[_i];
                Ti.API.debug("dtd:" + JSON.stringify(d));
                obj = {
                    title: d.trackName,
                    image: d.screenshotUrls[0],
                    genre: d.genres[0],
                    data: d
                };
                view = Alloy.createController("AppScrollableView", obj).getView();
                $.scrollableView.addView(view);
            }
            setTimer();
            $.loading.setOpacity(0);
            return $.scrollableView.removeView($.loadingview);
        }, function() {
            return alert("error");
        });
    })();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;