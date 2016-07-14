function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "TitleView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.container = Ti.UI.createView({
        top: 0,
        bottom: 0,
        layout: "vertical",
        id: "container"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    $.__views.__alloyId1 = Ti.UI.createView({
        height: "24%",
        id: "__alloyId1"
    });
    $.__views.container.add($.__views.__alloyId1);
    $.__views.play_button = Ti.UI.createButton(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 32
            }
        });
        _.extend(o, {
            title: L("play", "Play"),
            id: "play_button"
        });
        return o;
    }());
    $.__views.__alloyId1.add($.__views.play_button);
    clickPlay ? $.__views.play_button.addEventListener("click", clickPlay) : __defers["$.__views.play_button!click!clickPlay"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args, clickChallenge, clickMoreApp, clickPlay, clickRanking;
    args = arguments[0] || {};
    clickPlay = function() {
        return Alloy.Globals.currentTab.open(Alloy.createController("IntroQuizView").getView());
    };
    clickMoreApp = function() {
        return Alloy.Globals.currentTab.open(Alloy.createController("MoreAppWindow").getView());
    };
    clickRanking = function() {
        var _ref;
        return null != (_ref = Alloy.Globals.GC) ? _ref.showBoard({
            id: Alloy.CFG.rankings[0].id
        }) : void 0;
    };
    clickChallenge = function() {
        return Alloy.Globals.currentTab.open(Alloy.createController("ChallengeIntroQuizView").getView());
    };
    (function() {
        var obj, _base;
        if (null != $.ad) {
            obj = $.ad.init();
            $.ad.setTop();
            $.container.top = obj.height;
        }
        if (null != $.adicon && "ja" === Ti.Locale.currentLanguage) {
            obj = $.adicon.init({}, 0);
            $.container.bottom = obj.height;
        }
        return "function" == typeof (_base = Alloy.Globals).auth ? _base.auth() : void 0;
    })();
    __defers["$.__views.play_button!click!clickPlay"] && $.__views.play_button.addEventListener("click", clickPlay);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;