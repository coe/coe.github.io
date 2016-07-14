function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "FacebookPage";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.FacebookPage = Ti.UI.createView({
        id: "FacebookPage"
    });
    $.__views.FacebookPage && $.addTopLevelView($.__views.FacebookPage);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var AppStoreClient, args;
    args = arguments[0] || {};
    AppStoreClient = require("AppStoreClient");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;