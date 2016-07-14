function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "AppScrollableView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.AppScrollableView = Ti.UI.createView({
        backgroundColor: "#F6F6F6",
        id: "AppScrollableView"
    });
    $.__views.AppScrollableView && $.addTopLevelView($.__views.AppScrollableView);
    $.__views.ue_view = Ti.UI.createView({
        bottom: 84,
        id: "ue_view"
    });
    $.__views.AppScrollableView.add($.__views.ue_view);
    $.__views.imagecon = Ti.UI.createView({
        width: "50%",
        left: 0,
        id: "imagecon"
    });
    $.__views.ue_view.add($.__views.imagecon);
    $.__views.mainimage = Ti.UI.createImageView({
        width: 320,
        height: "100%",
        id: "mainimage"
    });
    $.__views.imagecon.add($.__views.mainimage);
    $.__views.labelcon = Ti.UI.createView({
        width: "50%",
        right: 0,
        id: "labelcon"
    });
    $.__views.ue_view.add($.__views.labelcon);
    $.__views.labelview = Ti.UI.createView({
        top: 0,
        bottom: 0,
        layout: "vertical",
        id: "labelview"
    });
    $.__views.labelcon.add($.__views.labelview);
    $.__views.title = Ti.UI.createLabel({
        color: "black",
        width: "100%",
        font: {
            fontFamily: "Impact",
            fontSize: 24
        },
        shadowOffset: {
            x: 4,
            y: 4
        },
        shadowColor: "gray",
        text: "title",
        id: "title"
    });
    $.__views.labelview.add($.__views.title);
    $.__views.genre = Ti.UI.createLabel({
        color: "black",
        width: "100%",
        font: {
            fontFamily: "arial black",
            fontSize: 16
        },
        text: "ジャンル",
        id: "genre"
    });
    $.__views.labelview.add($.__views.genre);
    $.__views.app_button_view = Ti.UI.createView({
        bottom: 24,
        height: 60,
        right: 0,
        width: Ti.UI.SIZE,
        layout: "horizontal",
        id: "app_button_view"
    });
    $.__views.AppScrollableView.add($.__views.app_button_view);
    $.__views.ios_button = Ti.UI.createImageView({
        height: 60,
        width: "50%",
        image: "/images/appstore.png",
        id: "ios_button"
    });
    $.__views.app_button_view.add($.__views.ios_button);
    clickAppView ? $.__views.ios_button.addEventListener("click", clickAppView) : __defers["$.__views.ios_button!click!clickAppView"] = true;
    $.__views.android_button = Ti.UI.createImageView({
        height: 60,
        width: "50%",
        image: "/images/googleplay.png",
        visible: false,
        id: "android_button"
    });
    $.__views.app_button_view.add($.__views.android_button);
    clickAndroidButton ? $.__views.android_button.addEventListener("click", clickAndroidButton) : __defers["$.__views.android_button!click!clickAndroidButton"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var ANDROID_URL, clickAndroidButton, clickAppView, obj;
    obj = arguments[0] || {};
    $.mainimage.image = obj.image;
    $.title.text = obj.title;
    $.genre.text = obj.genre;
    ANDROID_URL = "https://play.google.com/store/apps/details?id=";
    clickAppView = function() {
        return Ti.Platform.openURL(obj.data.trackViewUrl);
    };
    clickAndroidButton = function() {
        return window.open(ANDROID_URL + obj.data.bundleId, null);
    };
    (function() {
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
                    return $.android_button.visible = true;
                },
                onerror: function() {},
                onreadystatechange: function(e) {},
                onsendstream: function(e) {},
                ondatastream: function(e) {}
            });
            client.open("GET", url);
            return client.send();
        }
    })();
    __defers["$.__views.ios_button!click!clickAppView"] && $.__views.ios_button.addEventListener("click", clickAppView);
    __defers["$.__views.android_button!click!clickAndroidButton"] && $.__views.android_button.addEventListener("click", clickAndroidButton);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;