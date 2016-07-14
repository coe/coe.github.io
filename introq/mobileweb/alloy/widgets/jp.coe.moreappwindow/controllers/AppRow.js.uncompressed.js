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
    $.__views.AppRow = Ti.UI.createTableViewRow({
        className: "AppRowClassName",
        id: "AppRow"
    });
    $.__views.AppRow && $.addTopLevelView($.__views.AppRow);
    clickRow ? $.__views.AppRow.addEventListener("click", clickRow) : __defers["$.__views.AppRow!click!clickRow"] = true;
    $.__views.appicon = Ti.UI.createImageView({
        left: 0,
        width: 48,
        height: 48,
        id: "appicon"
    });
    $.__views.AppRow.add($.__views.appicon);
    $.__views.label_view = Ti.UI.createView({
        left: 60,
        width: Ti.UI.FILL,
        height: 48,
        right: 0,
        id: "label_view"
    });
    $.__views.AppRow.add($.__views.label_view);
    $.__views.apptitle = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            width: Ti.UI.SIZE,
            height: Ti.UI.SIZE,
            color: "black",
            font: {
                fontSize: 20,
                fontFamily: "Helvetica Neue"
            },
            textAlign: "center"
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 32
            }
        });
        _.extend(o, {
            top: 0,
            left: 0,
            right: 0,
            id: "apptitle"
        });
        return o;
    }());
    $.__views.label_view.add($.__views.apptitle);
    $.__views.price = Ti.UI.createLabel(function() {
        var o = {};
        _.extend(o, {
            width: Ti.UI.SIZE,
            height: Ti.UI.SIZE,
            color: "black",
            font: {
                fontSize: 20,
                fontFamily: "Helvetica Neue"
            },
            textAlign: "center"
        });
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 32
            }
        });
        _.extend(o, {
            right: 0,
            height: 24,
            bottom: 0,
            id: "price"
        });
        return o;
    }());
    $.__views.label_view.add($.__views.price);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var APP, clickRow, data;
    APP = arguments[0] || {};
    data = [];
    $.appicon.image = APP.artworkUrl60;
    $.apptitle.text = APP.trackName;
    $.price.text = "無料";
    clickRow = function(e) {
        return APP.clickRowCallback(e, APP);
    };
    __defers["$.__views.AppRow!click!clickRow"] && $.__views.AppRow.addEventListener("click", clickRow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;