function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "jp.coe.ad/" + s : s.substring(0, index) + "/jp.coe.ad/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("jp.coe.ad");
    this.__widgetId = "jp.coe.ad";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.adview = Ti.UI.createView({
        id: "adview"
    });
    $.__views.adview && $.addTopLevelView($.__views.adview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args, createNend, isTablet, makeAdmob;
    args = arguments[0] || {};
    $.adview.applyProperties(args);
    makeAdmob = function(obj, tmpadview) {
        var Admob, admobview;
        $.adview.remove(tmpadview);
        Admob = require("ti.admob");
        admobview = Admob.createView(obj);
        admobview.addEventListener("didReceiveAd", function() {
            return Ti.API.debug("didReceiveAd");
        });
        return $.adview.add(admobview);
    };
    createNend = function(obj) {
        var ad, adView;
        ad = require("net.nend");
        null != obj.nendId && (obj.apiKey = obj.nendId);
        adView = ad.createView(obj);
        adView.addEventListener("receive", function() {
            return Ti.API.info("nend receive");
        });
        adView.addEventListener("error", function(e) {
            Ti.API.error("nend error " + JSON.stringify(e));
            return makeAdmob(obj, adView);
        });
        adView.addEventListener("click", function() {
            return Ti.API.info("nend click");
        });
        return adView;
    };
    isTablet = function() {
        return Alloy.isTablet;
    };
    exports.isTablet = isTablet;
    exports.setBottom = function() {
        return $.adview.bottom = 0;
    };
    exports.setTop = function() {
        return $.adview.top = 0;
    };
    exports.init = function(obj, phonead) {
        var Admob, adview, is_tablet, tmpadview;
        null == phonead && (phonead = false);
        is_tablet = Alloy.isTablet;
        null == obj && (obj = is_tablet ? _.extend(Alloy.CFG.tablet, Alloy.CFG.ad_tablet) : _.extend(Alloy.CFG.phone, Alloy.CFG.ad_phone));
        $.adview.height = obj.height;
        $.adview.width = obj.width;
        adview = null;
        if ("JP" === Titanium.Locale.getCurrentCountry() && true) $.adview.add(createNend(obj)); else if (null != Ti.UI.iOS) {
            tmpadview = Ti.UI.iOS.createAdView({
                zIndex: 1e3
            });
            tmpadview.addEventListener("error", function() {
                Ti.API.error("AdView error");
                return makeAdmob(obj, tmpadview);
            });
            tmpadview.addEventListener("action", function() {
                Ti.API.debug("action");
                return makeAdmob(obj, tmpadview);
            });
            $.adview.add(tmpadview);
        } else if (null != Ti.Android) {
            Admob = require("ti.admob");
            obj.kindAd = Alloy.isTablet ? 1 : 0;
            adview = Admob.createView(obj);
            adview.addEventListener(Admob.AD_RECEIVED, function() {});
            adview.addEventListener(Admob.AD_NOT_RECEIVED, function() {});
            $.adview.add(adview);
        }
        return obj;
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;