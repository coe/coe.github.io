function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "FontsTableWindow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.Window = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "Window"
    });
    $.__views.Window && $.addTopLevelView($.__views.Window);
    $.__views.fontTable = Ti.UI.createTableView({
        id: "fontTable"
    });
    $.__views.Window.add($.__views.fontTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var FontTableWindowController, args, cont, dataRefresh, dialogs, fonts, moment, text;
    args = arguments[0] || {};
    fonts = null != args ? args.fonts : void 0;
    text = null != args ? args.text : void 0;
    moment = require("alloy/moment");
    dialogs = require("alloy/dialogs");
    FontTableWindowController = require("mycont/FontTableWindowController").FontTableWindowController;
    cont = new FontTableWindowController($);
    $.fontTable.data = cont.getFontRows(fonts, text);
    dataRefresh = function(data) {
        var i, rows;
        Ti.API.debug("aaa");
        Ti.API.debug(data.length);
        Ti.API.debug("bbb");
        rows = new Array(data.length);
        i = 1;
        data.map(function(font) {
            rows[data.length - i] = Alloy.createController("FontRow", {
                data: font,
                stampCallback: null != args ? args.stampCallback : void 0
            }).getView();
            return i++;
        });
        return $.fontTable.data = rows;
    };
    dataRefresh(fonts);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;