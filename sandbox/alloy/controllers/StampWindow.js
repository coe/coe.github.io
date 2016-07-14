function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "StampWindow";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.adicon = Alloy.createWidget("jp.coe.adicon", "widget", {
        bottom: 0,
        height: "75dp",
        id: "adicon",
        __parentSymbol: __parentSymbol
    });
    $.__views.adicon && $.addTopLevelView($.__views.adicon);
    $.__views.container = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
            bottom: 50,
            top: 75
        });
        Alloy.isHandheld && _.extend(o, {
            bottom: 50
        });
        _.extend(o, {
            id: "container"
        });
        return o;
    }());
    $.__views.container && $.addTopLevelView($.__views.container);
    $.__views.__alloyId7 = Ti.UI.createView({
        top: 0,
        bottom: 64,
        id: "__alloyId7"
    });
    $.__views.container.add($.__views.__alloyId7);
    $.__views.stampview = Ti.UI.createView({
        top: 0,
        height: 200,
        width: 200,
        borderColor: "white",
        borderWidth: 4,
        backgroundColor: "pink",
        id: "stampview"
    });
    $.__views.__alloyId7.add($.__views.stampview);
    $.__views.stamp = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        textAlign: "center",
        font: {
            fontSize: 64
        },
        shadowColor: "gray",
        color: "black",
        text: L("line", "LINE"),
        id: "stamp"
    });
    $.__views.stampview.add($.__views.stamp);
    $.__views.sliderview = Ti.UI.createView({
        top: 200,
        height: 80,
        layout: "vertical",
        id: "sliderview"
    });
    $.__views.__alloyId7.add($.__views.sliderview);
    $.__views.__alloyId8 = Ti.UI.createView({
        layout: "horizontal",
        height: 40,
        id: "__alloyId8"
    });
    $.__views.sliderview.add($.__views.__alloyId8);
    $.__views.fontSliderTag = Ti.UI.createImageView({
        height: 24,
        width: 24,
        image: "/def/dark/dark_expand.png",
        id: "fontSliderTag"
    });
    $.__views.__alloyId8.add($.__views.fontSliderTag);
    $.__views.fontSlider = Ti.UI.createSlider({
        width: Ti.UI.FILL,
        min: 9,
        max: 128,
        id: "fontSlider"
    });
    $.__views.__alloyId8.add($.__views.fontSlider);
    $.__views.__alloyId9 = Ti.UI.createView({
        layout: "horizontal",
        height: 40,
        id: "__alloyId9"
    });
    $.__views.sliderview.add($.__views.__alloyId9);
    $.__views.turnSliderTag = Ti.UI.createImageView({
        height: 24,
        width: 24,
        image: "/def/dark/dark_refresh.png",
        id: "turnSliderTag"
    });
    $.__views.__alloyId9.add($.__views.turnSliderTag);
    $.__views.turnSlider = Ti.UI.createSlider({
        width: Ti.UI.FILL,
        min: 0,
        max: 360,
        value: 0,
        id: "turnSlider"
    });
    $.__views.__alloyId9.add($.__views.turnSlider);
    $.__views.button_container = Ti.UI.createView(function() {
        var o = {};
        _.extend(o, {
            height: 64,
            layout: "vertical",
            bottom: 0
        });
        Alloy.isTablet && _.extend(o, {
            height: 132
        });
        _.extend(o, {
            id: "button_container"
        });
        return o;
    }());
    $.__views.container.add($.__views.button_container);
    $.__views.buttonview = Ti.UI.createView({
        layout: "horizontal",
        width: 320,
        height: 32,
        id: "buttonview"
    });
    $.__views.button_container.add($.__views.buttonview);
    $.__views.font = Alloy.createWidget("nl.fokkezb.button", "widget", {
        height: 32,
        width: 80,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        style: "bs-primary",
        title: L("granularity_label_character", "Font"),
        id: "font",
        __parentSymbol: $.__views.buttonview
    });
    $.__views.font.setParent($.__views.buttonview);
    $.__views.input = Alloy.createWidget("nl.fokkezb.button", "widget", {
        height: 32,
        width: 80,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        style: "bs-primary",
        title: L("extract_edit_menu_button", "Edit"),
        id: "input",
        __parentSymbol: $.__views.buttonview
    });
    $.__views.input.setParent($.__views.buttonview);
    $.__views.share = Alloy.createWidget("nl.fokkezb.button", "widget", {
        height: 32,
        width: 80,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        style: "bs-success",
        title: L("share", "share"),
        id: "share",
        __parentSymbol: $.__views.buttonview
    });
    $.__views.share.setParent($.__views.buttonview);
    clickShareButton ? $.__views.share.on("click", clickShareButton) : __defers["$.__views.share!click!clickShareButton"] = true;
    $.__views.underbuttonview = Ti.UI.createView({
        layout: "horizontal",
        width: 320,
        height: 32,
        id: "underbuttonview"
    });
    $.__views.button_container.add($.__views.underbuttonview);
    $.__views.colorbtn = Alloy.createWidget("nl.fokkezb.button", "widget", {
        height: 32,
        width: 80,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        style: "bs-primary",
        title: L("button_color", "Color"),
        id: "colorbtn",
        __parentSymbol: $.__views.underbuttonview
    });
    $.__views.colorbtn.setParent($.__views.underbuttonview);
    $.__views.haikeibtn = Alloy.createWidget("nl.fokkezb.button", "widget", {
        height: 32,
        width: 80,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        style: "bs-primary",
        title: L("button_back", "Back color"),
        id: "haikeibtn",
        __parentSymbol: $.__views.underbuttonview
    });
    $.__views.haikeibtn.setParent($.__views.underbuttonview);
    $.__views.shadow = Alloy.createWidget("nl.fokkezb.button", "widget", {
        height: 32,
        width: 80,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        style: "bs-primary",
        title: L("shadow", "shadow"),
        shadowColor: "gray",
        shadowOffset: {
            x: 5,
            y: 5
        },
        id: "shadow",
        __parentSymbol: $.__views.underbuttonview
    });
    $.__views.shadow.setParent($.__views.underbuttonview);
    clickShadow ? $.__views.shadow.on("click", clickShadow) : __defers["$.__views.shadow!click!clickShadow"] = true;
    $.__views.send = Alloy.createWidget("nl.fokkezb.button", "widget", {
        height: 32,
        width: 80,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        style: "bs-success",
        title: L("ime_action_send", "Send"),
        id: "send",
        __parentSymbol: $.__views.underbuttonview
    });
    $.__views.send.setParent($.__views.underbuttonview);
    $.__views.ad = Alloy.createWidget("jp.coe.ad", "widget", {
        top: 0,
        id: "ad",
        __parentSymbol: __parentSymbol
    });
    $.__views.ad && $.addTopLevelView($.__views.ad);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var StampWindowController, clickShadow, clickShare, clickShareButton, indexController, obj, stamps, _BASE_FONT_SIZE, _DEFAULTFONT, _FONT_AWESOME, _FONT_LOVE, _measurement, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;
    stamps = Alloy.createCollection("stamp");
    _measurement = require("alloy/measurement");
    _BASE_FONT_SIZE = $.stamp.font.fontSize;
    $.fontSlider.value = _BASE_FONT_SIZE;
    _DEFAULTFONT = "S2G Love font";
    _FONT_LOVE = "S2G Love font";
    _FONT_AWESOME = "FontAwesome";
    StampWindowController = require("StampWindowController").StampWindowController;
    indexController = new StampWindowController($, Alloy);
    if (null != $.ad) {
        obj = $.ad.init();
        $.container.top = obj.height;
    }
    if (null != $.adicon && "ja" === Ti.Locale.currentLanguage) {
        obj = $.adicon.init({}, 0);
        $.container.bottom = obj.height;
    }
    null != (_ref = $.font) && _ref.addEventListener("click", indexController.clickFont);
    null != (_ref1 = $.send) && _ref1.addEventListener("click", function(e) {
        return indexController.clickSend(e, Alloy.Globals.URL);
    });
    null != (_ref2 = $.colorbtn) && _ref2.addEventListener("click", indexController.clickColor);
    null != (_ref3 = $.haikeibtn) && _ref3.addEventListener("click", indexController.clickHaikeiColor);
    null != (_ref4 = $.rireki) && _ref4.addEventListener("click", indexController.clickRireki);
    null != (_ref5 = $.clear) && _ref5.addEventListener("click", indexController.clickClear);
    null != (_ref6 = $.save) && _ref6.addEventListener("click", indexController.clickSave);
    $.stamp.addEventListener("pinch", indexController.pinchStamp);
    null != (_ref7 = $.fontSlider) && _ref7.addEventListener("change", indexController.slideFontBar);
    null != (_ref8 = $.input) && _ref8.addEventListener("click", indexController.clickInput);
    null != (_ref9 = $.turnSlider) && _ref9.addEventListener("change", indexController.slideTurnBar);
    clickShare = function() {
        var sosu;
        sosu = require("SocialSupport");
        return sosu.postDialogShow("#FontStamp", Alloy.CFG.URL);
    };
    clickShadow = function() {
        Ti.API.debug("シャドウ " + JSON.stringify($.stamp.shadowOffset));
        return $.stamp.shadowOffset = null != $.stamp.shadowOffset && 0 !== $.stamp.shadowOffset.x ? {
            x: 0,
            y: 0
        } : {
            x: _measurement.dpToPX(5),
            y: _measurement.dpToPX(5)
        };
    };
    (function() {
        return $.shadow.shadowOffset = {
            x: _measurement.dpToPX(5),
            y: _measurement.dpToPX(5)
        };
    })();
    clickShareButton = clickShare;
    __defers["$.__views.addButton!click!clickShare"] && $.__views.addButton.addEventListener("click", clickShare);
    __defers["$.__views.share!click!clickShareButton"] && $.__views.share.on("click", clickShareButton);
    __defers["$.__views.shadow!click!clickShadow"] && $.__views.shadow.on("click", clickShadow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;