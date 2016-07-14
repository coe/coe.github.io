function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "jp.coe.moreappwindow/" + s : s.substring(0, index) + "/jp.coe.moreappwindow/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("jp.coe.moreappwindow");
    this.__widgetId = "jp.coe.moreappwindow";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "AppRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.row = Ti.UI.createTableViewRow({
        height: 60,
        id: "row",
        className: "AppRowClassName"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    clickRow ? $.__views.row.addEventListener("click", clickRow) : __defers["$.__views.row!click!clickRow"] = true;
    $.__views.appicon = Ti.UI.createImageView({
        left: 0,
        width: 48,
        height: 48,
        id: "appicon"
    });
    $.__views.row.add($.__views.appicon);
    $.__views.label_view = Ti.UI.createView({
        left: 60,
        width: Ti.UI.FILL,
        height: 60,
        right: 0,
        touchEnabled: false,
        id: "label_view"
    });
    $.__views.row.add($.__views.label_view);
    $.__views.apptitle = Ti.UI.createLabel({
        ellipsize: true,
        horizontalWrap: false,
        width: Ti.UI.FILL,
        wordWrap: false,
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 0,
        left: 0,
        right: 0,
        id: "apptitle"
    });
    $.__views.label_view.add($.__views.apptitle);
    $.__views.price = Ti.UI.createLabel({
        right: 0,
        width: 80,
        bottom: 0,
        id: "price"
    });
    $.__views.label_view.add($.__views.price);
    $.__views.genre = Ti.UI.createLabel({
        ellipsize: true,
        horizontalWrap: false,
        width: Ti.UI.FILL,
        wordWrap: false,
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 0,
        right: 80,
        bottom: 0,
        id: "genre"
    });
    $.__views.label_view.add($.__views.genre);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP, clickRow, data;
    APP = arguments[0] || {};
    data = [];
    $.appicon.image = APP.artworkUrl60;
    $.apptitle.text = APP.trackName;
    $.price.text = APP.formattedPrice;
    $.genre.text = APP.genres[0];
    clickRow = function(e) {
        return APP.clickRowCallback(e, APP);
    };
    __defers["$.__views.row!click!clickRow"] && $.__views.row.addEventListener("click", clickRow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;