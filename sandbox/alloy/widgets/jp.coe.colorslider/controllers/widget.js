function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "jp.coe.colorslider/" + s : s.substring(0, index) + "/jp.coe.colorslider/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("jp.coe.colorslider");
    this.__widgetId = "jp.coe.colorslider";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.window = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "window"
    });
    $.__views.window && $.addTopLevelView($.__views.window);
    blurWindow ? $.__views.window.addEventListener("blur", blurWindow) : __defers["$.__views.window!blur!blurWindow"] = true;
    focusWindow ? $.__views.window.addEventListener("open", focusWindow) : __defers["$.__views.window!open!focusWindow"] = true;
    $.__views.button_zone = Ti.UI.createView({
        top: 0,
        height: 72,
        id: "button_zone"
    });
    $.__views.window.add($.__views.button_zone);
    $.__views.color_button = Ti.UI.createButton({
        title: L("preset", "preset"),
        id: "color_button"
    });
    $.__views.button_zone.add($.__views.color_button);
    clickColorButton ? $.__views.color_button.addEventListener("click", clickColorButton) : __defers["$.__views.color_button!click!clickColorButton"] = true;
    $.__views.slider_zone = Ti.UI.createView({
        layout: "vertical",
        top: 72,
        bottom: 72,
        id: "slider_zone"
    });
    $.__views.window.add($.__views.slider_zone);
    $.__views.__alloyId0 = Ti.UI.createView({
        height: "33%",
        id: "__alloyId0"
    });
    $.__views.slider_zone.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        left: 0,
        color: "blue",
        width: 20,
        text: "R",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.r_slider = Ti.UI.createSlider({
        left: 20,
        min: 0,
        max: 255,
        id: "r_slider"
    });
    $.__views.__alloyId0.add($.__views.r_slider);
    changeR ? $.__views.r_slider.addEventListener("change", changeR) : __defers["$.__views.r_slider!change!changeR"] = true;
    $.__views.__alloyId2 = Ti.UI.createView({
        height: "33%",
        id: "__alloyId2"
    });
    $.__views.slider_zone.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        left: 0,
        color: "blue",
        width: 20,
        text: "G",
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
    $.__views.g_slider = Ti.UI.createSlider({
        left: 20,
        min: 0,
        max: 255,
        id: "g_slider"
    });
    $.__views.__alloyId2.add($.__views.g_slider);
    changeG ? $.__views.g_slider.addEventListener("change", changeG) : __defers["$.__views.g_slider!change!changeG"] = true;
    $.__views.__alloyId4 = Ti.UI.createView({
        height: "33%",
        id: "__alloyId4"
    });
    $.__views.slider_zone.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        left: 0,
        color: "blue",
        width: 20,
        text: "B",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    $.__views.b_slider = Ti.UI.createSlider({
        left: 20,
        min: 0,
        max: 255,
        id: "b_slider"
    });
    $.__views.__alloyId4.add($.__views.b_slider);
    changeB ? $.__views.b_slider.addEventListener("change", changeB) : __defers["$.__views.b_slider!change!changeB"] = true;
    $.__views.done_button = Ti.UI.createButton({
        bottom: 0,
        title: L("ime_action_done", "done"),
        id: "done_button"
    });
    $.__views.window.add($.__views.done_button);
    clickDone ? $.__views.done_button.addEventListener("click", clickDone) : __defers["$.__views.done_button!click!clickDone"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var B, COLORS, G, R, args, blurWindow, changeB, changeG, changeR, clickColorButton, clickDone, colorChange, focusWindow, zeroPadding, _b, _g, _r, _ref;
    args = arguments[0] || {};
    COLORS = [ "aqua", "black", "blue", "brown", "cyan", "darkgray", "fuchsia", "gray", "green", "lightgray", "lime", "magenta", "maroon", "navy", "olive", "orange", "pink", "purple", "red", "silver", "teal", "white", "yellow" ];
    COLORS.push(L("cancel", "cancel"));
    R = 0;
    G = 1;
    B = 2;
    _r = 0;
    _g = 0;
    _b = 0;
    $.window.title = null != (_ref = null != args ? args.title : void 0) ? _ref : "Color";
    zeroPadding = function(value) {
        var tmp;
        tmp = ("0" + value.toString(16)).slice(-2);
        Ti.API.debug("tmp:" + tmp);
        return tmp;
    };
    focusWindow = function() {
        var _ref1;
        Ti.API.debug("focusWindow");
        Ti.API.debug("args?.defaultcolor:" + (null != args ? args.defaultcolor : void 0));
        return $.window.backgroundColor = null != (_ref1 = null != args ? args.defaultcolor : void 0) ? _ref1 : "black";
    };
    blurWindow = function() {};
    colorChange = function(num, color) {
        var value;
        value = Math.floor(num);
        Ti.API.debug("value:" + value);
        switch (color) {
          case R:
            _r = value;
            break;

          case G:
            _g = value;
            break;

          case B:
            _b = value;
        }
        $.window.backgroundColor = String.format("#%s%s%s", zeroPadding(_r), zeroPadding(_g), zeroPadding(_b));
        Ti.API.debug("R:" + _r);
        Ti.API.debug("G:" + _g);
        return Ti.API.debug("B:" + _b);
    };
    changeR = function(e) {
        Ti.API.debug("changeR");
        return colorChange(e.value, R);
    };
    changeG = function(e) {
        Ti.API.debug("changeR");
        return colorChange(e.value, G);
    };
    changeB = function(e) {
        Ti.API.debug("changeR");
        return colorChange(e.value, B);
    };
    clickColorButton = function() {
        var opt;
        opt = Ti.UI.createOptionDialog({
            options: COLORS,
            cancel: COLORS.length - 1,
            title: L("candidates_style", "candidates")
        });
        opt.addEventListener("click", function(e) {
            if (e.index !== COLORS.length) return $.window.backgroundColor = COLORS[e.index];
        });
        return opt.show();
    };
    clickDone = function() {
        args.callback($.window.backgroundColor);
        return $.window.close();
    };
    __defers["$.__views.window!blur!blurWindow"] && $.__views.window.addEventListener("blur", blurWindow);
    __defers["$.__views.window!open!focusWindow"] && $.__views.window.addEventListener("open", focusWindow);
    __defers["$.__views.color_button!click!clickColorButton"] && $.__views.color_button.addEventListener("click", clickColorButton);
    __defers["$.__views.r_slider!change!changeR"] && $.__views.r_slider.addEventListener("change", changeR);
    __defers["$.__views.g_slider!change!changeG"] && $.__views.g_slider.addEventListener("change", changeG);
    __defers["$.__views.b_slider!change!changeB"] && $.__views.b_slider.addEventListener("change", changeB);
    __defers["$.__views.done_button!click!clickDone"] && $.__views.done_button.addEventListener("click", clickDone);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;