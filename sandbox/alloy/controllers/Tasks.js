function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Tasks";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.Window = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: "false",
        title: L("button_rireki", "History"),
        id: "Window"
    });
    $.__views.Window && $.addTopLevelView($.__views.Window);
    $.__views.taskTable = Ti.UI.createTableView({
        id: "taskTable"
    });
    $.__views.Window.add($.__views.taskTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var addTask, args, dataRefresh, dialogs, doneConfirm, filterData, moment, transData, _stamps;
    args = arguments[0] || {};
    _stamps = Alloy.createCollection("stamp");
    _stamps.fetch();
    _stamps.on("destroy", function(e) {
        Ti.API.debug("#destroy:" + JSON.stringify(e));
        _stamps.fetch();
        return dataRefresh(_stamps);
    });
    moment = require("alloy/moment");
    dialogs = require("alloy/dialogs");
    dataRefresh = function(data) {
        var i, rows;
        Ti.API.debug("aaa");
        Ti.API.debug(data.length);
        Ti.API.debug("bbb");
        rows = new Array(data.length);
        i = 1;
        data.map(function(book) {
            rows[data.length - i] = Alloy.createController("stamprow", {
                data: book,
                stampCallback: null != args ? args.stampCallback : void 0
            }).getView();
            return i++;
        });
        return $.taskTable.data = rows;
    };
    addTask = function() {
        var addWin, index;
        addWin = void 0;
        index = void 0;
        if (void 0 === Alloy.Globals.currentTab) {
            index = Alloy.createController("index");
            Alloy.Globals.currentTab = index.getView("tasksTab");
        }
        addWin = Alloy.createController("Add").getView("addWin");
        return Alloy.Globals.currentTab.open(addWin);
    };
    transData = function(model) {
        var limitTime, transform;
        transform = void 0;
        limitTime = void 0;
        transform = model.toJSON();
        limitTime = transform.limitTime;
        transform.limitTime = moment(Number(limitTime)).format("YYYY/MM/DD");
        return transform;
    };
    filterData = function(collection) {
        return collection.where({
            done: 0
        });
    };
    doneConfirm = function(e) {
        return dialogs.confirm({
            message: "Done?",
            callback: function() {
                var model;
                model = Alloy.Collections.Todo.where({
                    alloy_id: e.rowData._id
                })[0];
                return model.set({
                    done: 1
                }).save();
            }
        });
    };
    dataRefresh(_stamps);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;