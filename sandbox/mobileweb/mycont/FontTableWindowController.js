var FontTableWindowController, __bind = function(fn, me) {
    return function() {
        return fn.apply(me, arguments);
    };
};

exports.FontTableWindowController = FontTableWindowController = function() {
    function FontTableWindowController($) {
        var Const;
        this.$ = $;
        this.makeRow = __bind(this.makeRow, this);
        this.makeRow = __bind(this.makeRow, this);
        this.getFontRows = __bind(this.getFontRows, this);
        Const = require("Const").Const;
        this.Const = new Const();
    }
    var Alloy, _BASE_FONT_SIZE, _DEFAULTFONT, _FONT_AWESOME, _FONT_LOVE, _stamps;
    FontTableWindowController.name = "FontTableWindowController";
    Alloy = require("alloy");
    _BASE_FONT_SIZE = 32;
    _DEFAULTFONT = "S2G Love font";
    _FONT_LOVE = "S2G Love font";
    _FONT_AWESOME = "FontAwesome";
    _stamps = Alloy.createCollection("stamp");
    FontTableWindowController.prototype.baseFontSize = _BASE_FONT_SIZE;
    FontTableWindowController.prototype.defaultFont = _DEFAULTFONT;
    FontTableWindowController.prototype.getFontRows = function(fonts) {
        var key, section, value, _results;
        _results = [];
        for (key in fonts) {
            value = fonts[key];
            section = Ti.UI.createTableViewSection({
                headerTitle: key
            });
            Ti.API.debug("section");
            _results.push(this.makeRow(value));
        }
        return _results;
    };
    FontTableWindowController.prototype.makeRow = function(data) {
        var rows;
        rows = new Array(data.length);
        data.map(function(book) {
            rows[data.length - i] = Alloy.createController("FontRow", {
                data: book,
                stampCallback: "undefined" != typeof args && null !== args ? args.stampCallback : void 0
            }).getView();
            return i++;
        });
        return rows;
    };
    FontTableWindowController.prototype.makeRow = function() {};
    return FontTableWindowController;
}();