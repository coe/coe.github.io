function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "FontRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.rows = Ti.UI.createTableViewRow({
        className: "FontRow",
        id: "rows"
    });
    $.__views.rows && $.addTopLevelView($.__views.rows);
    $.__views.con = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: 70,
        id: "con"
    });
    $.__views.rows.add($.__views.con);
    $.__views.fonttext = Ti.UI.createLabel({
        left: 0,
        text: "text",
        id: "fonttext"
    });
    $.__views.con.add($.__views.fonttext);
    $.__views.fontkind = Ti.UI.createLabel({
        height: 20,
        bottom: 0,
        right: 0,
        text: "kinddddd",
        id: "fontkind"
    });
    $.__views.con.add($.__views.fontkind);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args, clickRow, label, text;
    args = arguments[0] || {};
    label = null != args ? args.data : void 0;
    text = null != args ? args.text : void 0;
    $.rows.rowFont = label;
    $.fontkind.text = require("mycont/AppUtil").fontChangeJp(label);
    $.fonttext.text = text;
    $.fonttext.font = {
        fontSize: 32,
        fontFamily: label
    };
    clickRow = function() {
        return null != args ? "function" == typeof args.stampCallback ? args.stampCallback(data) : void 0 : void 0;
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;