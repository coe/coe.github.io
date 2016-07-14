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
        bottom: 0,
        id: "adview"
    });
    $.__views.adview && $.addTopLevelView($.__views.adview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args, createNend, isTablet;
    args = arguments[0] || {};
    Ti.API.debug(JSON.stringify(args));
    $.adview.applyProperties(args);
    createNend = function(obj) {
        var ad, adView;
        ad = require("net.nend");
        null != obj.nendId && (obj.apiKey = obj.nendId);
        adView = ad.createView(obj);
        adView.addEventListener("receive", function() {
            return Ti.API.info("nend receive");
        });
        adView.addEventListener("error", function(e) {
            return Ti.API.error("nend error " + JSON.stringify(e));
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
    exports.setTop = function() {};
    exports.init = function(obj, phonead) {
        var Admob, adview, is_tablet, makeAdmob, tmpadview;
        null == phonead && (phonead = false);
        is_tablet = Alloy.isTablet;
        null == obj && (obj = is_tablet ? _.extend(Alloy.CFG.tablet, Alloy.CFG.ad_tablet) : _.extend(Alloy.CFG.phone, Alloy.CFG.ad_phone));
        $.adview.height = obj.height;
        $.adview.width = obj.width;
        Ti.API.debug("2:" + JSON.stringify($.adview));
        adview = null;
        Ti.API.debug("おっけー！" + Titanium.Locale.getCurrentCountry());
        if ("JP" === Titanium.Locale.getCurrentCountry() && true) $.adview.add(createNend(obj)); else if (null != Ti.UI.iOS) {
            tmpadview = Ti.UI.iOS.createAdView({
                zIndex: 1e3
            });
            makeAdmob = function() {
                var Admob, admobview;
                $.adview.remove(tmpadview);
                Admob = require("ti.admob");
                admobview = Admob.createView(obj);
                admobview.addEventListener("didReceiveAd", function() {
                    return Ti.API.debug("didReceiveAd");
                });
                return $.adview.add(admobview);
            };
            tmpadview.addEventListener("error", function() {
                Ti.API.debug("error");
                return makeAdmob();
            });
            tmpadview.addEventListener("action", function() {
                Ti.API.debug("action");
                return makeAdmob();
            });
            $.adview.add(tmpadview);
            makeAdmob();
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