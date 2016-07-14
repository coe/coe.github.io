function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "jp.coe.adicon/" + s : s.substring(0, index) + "/jp.coe.adicon/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("jp.coe.adicon");
    this.__widgetId = "jp.coe.adicon";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.adview = Ti.UI.createView({
        bottom: 0,
        id: "adview"
    });
    $.__views.adview && $.addTopLevelView($.__views.adview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args, createNend;
    args = arguments[0] || {};
    Ti.API.debug("adicon:" + JSON.stringify(args));
    $.adview.applyProperties(args);
    createNend = function(obj) {
        var ad, adView;
        ad = require("net.nend");
        null != obj.nendId && (obj.apiKey = obj.nendId);
        Ti.API.debug("aaaaaaaaaaaaaaaa");
        adView = ad.createView(obj);
        Ti.API.debug("adview:" + adView);
        adView.addEventListener("receive", function() {
            return Ti.API.info("nend receive");
        });
        adView.addEventListener("error", function(e) {
            return Ti.API.error("nend error " + e);
        });
        adView.addEventListener("click", function() {
            return Ti.API.info("nend click");
        });
        Ti.API.debug("adview:" + adView);
        return adView;
    };
    exports.H = 0;
    exports.V = 1;
    exports.init = function(obj, direction) {
        null == obj && (obj = {});
        null == direction && (direction = 0);
        obj.adType = "icon";
        switch (direction) {
          case exports.H:
            obj.width = "320dp";
            obj.height = "75dp";
            obj.orientation = "horizontal";
            break;

          case exports.V:
            obj.width = "75dp";
            obj.height = "300dp";
            obj.orientation = "vertical";
        }
        obj = _.extend(obj, Alloy.CFG.ad_icon);
        Ti.API.debug(JSON.stringify(obj));
        $.adview.applyProperties(obj);
        "ja" === Ti.Locale.currentLanguage && $.adview.add(createNend(obj));
        return $.adview;
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;