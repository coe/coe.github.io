function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "jp.coe.moreappwindow/" + s : s.substring(0, index) + "/jp.coe.moreappwindow/" + s.substring(index + 1);
    return path;
}

function Controller() {
    var Widget = new (require("alloy/widget"))("jp.coe.moreappwindow");
    this.__widgetId = "jp.coe.moreappwindow";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget = Ti.UI.createView({
        id: "widget"
    });
    $.__views.widget && $.addTopLevelView($.__views.widget);
    $.__views.loading_view = Ti.UI.createView({
        backgroundColor: "black",
        zIndex: 100,
        id: "loading_view"
    });
    $.__views.widget.add($.__views.loading_view);
    $.__views.loading = Alloy.createWidget("com.appcelerator.loading", "widget", {
        id: "loading",
        __parentSymbol: $.__views.loading_view
    });
    $.__views.loading.setParent($.__views.loading_view);
    $.__views.table = Ti.UI.createTableView({
        top: 50,
        id: "table"
    });
    $.__views.widget.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var ANDROID_URL, ANDROID_YQL, API, IOS_URL, URL, args, callbackfunc, clickMore, clickRowCallback, fetchAndroidInfo, fetchIOSInfo, getItunesData, getItunesDataNew, refresh, refreshold, setLoadingView, windowFocus, _callback;
    args = arguments[0] || {};
    API = "http://itunes.apple.com/search?";
    IOS_URL = "http://itunes.apple.com/search?term=tsuyoshi+hyuga&country=" + Ti.Locale.getCurrentCountry() + "&media=software&entity=software";
    ANDROID_URL = "http://play.google.com/store/search?q=tsuyoshi+hyuga";
    ANDROID_YQL = 'select * from html where url="' + IOS_URL + '"';
    URL = API;
    _callback = args.callback;
    exports.setClickCallback = function(callback) {
        return _callback = callback;
    };
    callbackfunc = function(e) {
        return console.debug("callbackfunc to " + e);
    };
    setLoadingView = function(torf) {
        $.loading_view.visible = torf;
        return torf ? $.loading.setOpacity(1) : $.loading.setOpacity(0);
    };
    fetchAndroidInfo = function() {
        return Ti.Yahoo.yql(ANDROID_YQL, function(e) {
            var json;
            json = JSON.parse(e.data.body.p);
        });
    };
    fetchIOSInfo = function() {
        return Ti.Yahoo.yql(ANDROID_YQL, function(e) {
            var json;
            json = JSON.parse(e.data.body.p);
        });
    };
    clickRowCallback = function(e, appdata) {
        Ti.API.debug("ここここ");
        return _callback(e, appdata);
    };
    getItunesData = function() {
        var data, json;
        json = JSON.parse(this.responseText);
        data = json.results;
        data = _.filter(data, function(obj) {
            return 0 === obj.price;
        });
        data = _.sortBy(data, function(item) {
            return Number(item.releaseDate);
        });
        data = _.filter(data, function(obj) {
            return obj.bundleId !== Ti.App.id;
        });
    };
    getItunesDataNew = function(data) {
        var name, rows, _ref;
        rows = function() {
            var _i, _len, _results;
            _results = [];
            for (_i = 0, _len = data.length; _len > _i; _i++) {
                name = data[_i];
                name.clickRowCallback = clickRowCallback;
                _results.push(Widget.createController("AppRow", name).getView());
            }
            return _results;
        }();
        $.table.data = rows;
        setLoadingView(false);
        return null != (_ref = $.label) ? _ref.text = "end" : void 0;
    };
    refresh = function() {
        var AppStoreClient;
        AppStoreClient = require("AppStoreClient");
        return AppStoreClient.getItunesData(function(datas) {
            getItunesDataNew(datas);
            $.loading.setOpacity(0);
            return setLoadingView(false);
        }, function() {
            return setLoadingView(false);
        });
    };
    refreshold = function() {
        var client, url, _ref;
        setLoadingView(true);
        null != (_ref = $.label) && (_ref.text = "loading");
        $.table.data = [];
        url = IOS_URL;
        client = Ti.Network.createHTTPClient({
            onload: getItunesData,
            onerror: function() {
                var _ref1;
                setLoadingView(false);
                return null != (_ref1 = $.label) ? _ref1.text = "error" : void 0;
            },
            timeout: 5e3
        });
        client.open("GET", url);
        return client.send();
    };
    clickMore = function() {
        return Ti.Platform.openURL("market://search?q=tsuyoshi+hyuga");
    };
    windowFocus = function() {
        return refresh();
    };
    (function() {
        return refresh();
    })();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;