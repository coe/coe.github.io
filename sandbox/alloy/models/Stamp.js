exports.definition = {
    config: {
        columns: {
            image: "blob",
            title: "text",
            turn: "INTEGER",
            color: "text",
            backcolor: "text",
            fontsize: "INTEGER",
            fontfamily: "text"
        },
        adapter: {
            type: "sql",
            collection_name: "stamp"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("stamp", exports.definition, []);

collection = Alloy.C("stamp", exports.definition, model);

exports.Model = model;

exports.Collection = collection;