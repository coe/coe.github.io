function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "jp.coe.appview/" + s : s.substring(0, index) + "/jp.coe.appview/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("jp.coe.appview");
    this.__widgetId = "jp.coe.appview";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId1 = [];
    $.__views.view1 = Ti.UI.createView({
        id: "view1",
        backgroundColor: "#123"
    });
    __alloyId1.push($.__views.view1);
    $.__views.view2 = Ti.UI.createView({
        id: "view2",
        backgroundColor: "#246"
    });
    __alloyId1.push($.__views.view2);
    $.__views.view3 = Ti.UI.createView({
        id: "view3",
        backgroundColor: "#48b"
    });
    __alloyId1.push($.__views.view3);
    $.__views.scrollableView = Ti.UI.createScrollableView({
        views: __alloyId1,
        id: "scrollableView",
        showPagingControl: "true"
    });
    $.__views.scrollableView && $.addTopLevelView($.__views.scrollableView);
    $.__views.footer = Ti.UI.createView({
        height: 60,
        layout: "horizontal",
        id: "footer"
    });
    $.__views.footer && $.addTopLevelView($.__views.footer);
    $.__views.applink_ios = Ti.UI.createButton({
        id: "applink_ios"
    });
    $.__views.footer.add($.__views.applink_ios);
    $.__views.applink_andorid = Ti.UI.createButton({
        id: "applink_andorid"
    });
    $.__views.footer.add($.__views.applink_andorid);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;