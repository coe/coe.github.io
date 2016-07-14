function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "stamprow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.stamprow = Ti.UI.createTableViewRow({
        id: "stamprow"
    });
    $.__views.stamprow && $.addTopLevelView($.__views.stamprow);
    $.__views.taskWrap = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        top: 6,
        right: 50,
        bottom: 6,
        left: 0,
        id: "taskWrap"
    });
    $.__views.stamprow.add($.__views.taskWrap);
    $.__views.stamp = Ti.UI.createImageView({
        id: "stamp"
    });
    $.__views.taskWrap.add($.__views.stamp);
    clickStamp ? $.__views.stamp.addEventListener("click", clickStamp) : __defers["$.__views.stamp!click!clickStamp"] = true;
    $.__views.gomibako = Ti.UI.createButton({
        right: 0,
        width: 50,
        image: "def/dark/dark_x-2.png",
        id: "gomibako"
    });
    $.__views.stamprow.add($.__views.gomibako);
    clickDelete ? $.__views.gomibako.addEventListener("click", clickDelete) : __defers["$.__views.gomibako!click!clickDelete"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args, blob, clickDelete, clickStamp, data, _ref;
    args = arguments[0] || {};
    data = null != args ? args.data : void 0;
    blob = null != data ? data.get("image") : void 0;
    null != (_ref = $.stamp) && (_ref.image = Alloy.Globals.Const.getImageToBlob(blob));
    clickDelete = function() {
        if (null != data) return data.destroy();
    };
    clickStamp = function() {
        return null != args ? "function" == typeof args.stampCallback ? args.stampCallback(data) : void 0 : void 0;
    };
    __defers["$.__views.stamp!click!clickStamp"] && $.__views.stamp.addEventListener("click", clickStamp);
    __defers["$.__views.gomibako!click!clickDelete"] && $.__views.gomibako.addEventListener("click", clickDelete);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;