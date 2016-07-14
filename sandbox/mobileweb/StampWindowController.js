var StampWindowController, __bind = function(fn, me) {
    return function() {
        return fn.apply(me, arguments);
    };
}, __indexOf = [].indexOf || function(item) {
    for (var i = 0, l = this.length; l > i; i++) if (i in this && this[i] === item) return i;
    return -1;
};

exports.StampWindowController = StampWindowController = function() {
    function StampWindowController($) {
        var Const;
        this.$ = $;
        this.getFontFileList = __bind(this.getFontFileList, this);
        this.pinchStamp = __bind(this.pinchStamp, this);
        this.saveStamp = __bind(this.saveStamp, this);
        this.clickSave = __bind(this.clickSave, this);
        this.changeFont = __bind(this.changeFont, this);
        this.closeRireki = __bind(this.closeRireki, this);
        this.clickRireki = __bind(this.clickRireki, this);
        this.imageTurn = __bind(this.imageTurn, this);
        this.slideTurnBar = __bind(this.slideTurnBar, this);
        this.resetAnimasion = __bind(this.resetAnimasion, this);
        this.slideFontBar = __bind(this.slideFontBar, this);
        this.clickInput = __bind(this.clickInput, this);
        this.clickSend = __bind(this.clickSend, this);
        this.clickHaikeiColor = __bind(this.clickHaikeiColor, this);
        this.clickColor = __bind(this.clickColor, this);
        this.clickFont = __bind(this.clickFont, this);
        this.sortFontArr = __bind(this.sortFontArr, this);
        this.makeFontRow = __bind(this.makeFontRow, this);
        this.closeFont = __bind(this.closeFont, this);
        this.getPlainName = __bind(this.getPlainName, this);
        this.dialogFont = __bind(this.dialogFont, this);
        this.clickClear = __bind(this.clickClear, this);
        this.clear = __bind(this.clear, this);
        this.fontSetUp = __bind(this.fontSetUp, this);
        Const = require("Const").Const;
        this.Const = new Const();
        this.stamp = _.clone(this.$.stamp);
        this.stampview = _.clone(this.$.stampview);
        this.font_arr = this.fontSetUp();
    }
    var Alloy, KAIGAI_KINSHI_FONT, closecallback, _BASE_FONT_SIZE, _DEFAULTFONT, _FONT_AWESOME, _FONT_LOVE, _stamps;
    StampWindowController.name = "StampWindowController";
    Alloy = require("alloy");
    _BASE_FONT_SIZE = 32;
    _DEFAULTFONT = "S2G Love font";
    _FONT_LOVE = "S2G Love font";
    _FONT_AWESOME = "FontAwesome";
    _stamps = Alloy.createCollection("stamp");
    StampWindowController.prototype.baseFontSize = _BASE_FONT_SIZE;
    StampWindowController.prototype.defaultFont = _DEFAULTFONT;
    KAIGAI_KINSHI_FONT = [ "DragonQuestFC", "haramase_nyanko" ];
    StampWindowController.prototype.isKaigaiKinshi = function(font) {
        return __indexOf.call(KAIGAI_KINSHI_FONT, font) >= 0;
    };
    StampWindowController.prototype.fontSetUp = function() {
        var arr, tmparr;
        arr = (tmparr = this.getFontFileList(), arr = this.Const.getFontList(), Ti.API.debug("tmparr:" + tmparr), 
        tmparr = null != arr ? tmparr.concat(arr) : tmparr, tmparr);
        Ti.API.debug("あー:" + tmparr);
        return "ja" !== Ti.Locale.currentLanguage ? _.filter(arr, function(file) {
            return !(__indexOf.call(KAIGAI_KINSHI_FONT, file) >= 0);
        }) : arr;
    };
    StampWindowController.prototype.clear = function() {
        var r;
        Ti.API.debug("1");
        _.extend(this.$.stamp, this.stamp);
        Ti.API.debug("2");
        _.extend(this.$.stampview, this.stampview);
        Ti.API.debug("3");
        this.baseFontSize = this.$.fontSlider.value = _BASE_FONT_SIZE;
        Ti.API.debug("4");
        this.defaultFont = _DEFAULTFONT;
        this.$.turnSlider.value = 0;
        r = Ti.UI.create2DMatrix();
        r = r.rotate(this.$.turnSlider.value);
        return this.$.stamp.animate({
            transform: r
        });
    };
    StampWindowController.prototype.clickClear = function() {
        return this.clear();
    };
    StampWindowController.prototype.getFontName = function(name) {
        var file;
        Ti.API.debug("name:" + name);
        file = this.getPlainName(name);
        Ti.API.debug("file:" + file);
        if (null == file) return null;
        return "love" === file && null != Ti.UI.iOS ? _FONT_LOVE : "fontawesome-webfont" === file ? _FONT_AWESOME : file;
    };
    StampWindowController.prototype.dialogFont = function(fontarray) {
        var name, plainname, _i, _len, _results;
        if ("ja" !== Ti.Locale.currentLanguage) return fontarray;
        _results = [];
        for (_i = 0, _len = fontarray.length; _len > _i; _i++) {
            name = fontarray[_i];
            plainname = this.getPlainName(name);
            switch (plainname) {
              case "3Dkirieji":
                _results.push("三次元切絵字");
                break;

              case "APJapanesefontT":
                _results.push("あんずもじ");
                break;

              case "DragonQuestFC":
                _results.push("ドラクエフォント");
                break;

              case "love":
                _results.push("S2Gらぶ");
                break;

              case "onryou":
                _results.push("怨霊");
                break;

              default:
                _results.push(plainname);
            }
        }
        return _results;
    };
    StampWindowController.prototype.getPlainName = function(name) {
        var kekka;
        kekka = name.split(".");
        return kekka[0];
    };
    StampWindowController.prototype.closeFont = function() {
        var _ref;
        null != (_ref = this.rirekiWindow) && _ref.close();
        return this.rirekiWindow = null;
    };
    StampWindowController.prototype.makeFontRow = function(data, text) {
        var i, rows;
        rows = new Array(data.length);
        i = 1;
        data.map(function(book) {
            rows[data.length - i] = Alloy.createController("FontRow", {
                data: book,
                text: text
            }).getView();
            return i++;
        });
        return rows;
    };
    StampWindowController.prototype.sortFontArr = function(fontarr) {
        var kijun_arr;
        kijun_arr = this.getFontFileList();
        fontarr.sort();
        fontarr.reverse();
        Ti.API.debug("基準:" + JSON.stringify(kijun_arr));
        return _.sortBy(fontarr, function(font) {
            Ti.API.debug("フォント:" + font);
            return __indexOf.call(kijun_arr, font) >= 0;
        });
    };
    StampWindowController.prototype.clickFont = function() {
        var font_row, table, win, _ref, _this = this;
        font_row = this.makeFontRow(this.sortFontArr(this.font_arr), this.$.stamp.text);
        win = Ti.UI.createWindow();
        table = Ti.UI.createTableView();
        table.addEventListener("click", function(e) {
            Ti.API.debug(JSON.stringify(e.row));
            _this.changeFont({
                fontSize: _this.$.fontSlider.value,
                fontFamily: e.row.rowFont
            });
            return win.close();
        });
        table.data = font_row;
        win.add(table);
        return null != (_ref = Alloy.Globals.currentTab) ? _ref.open(win) : void 0;
    };
    closecallback = function() {
        var rirekiWindow, _ref;
        alert("close");
        rirekiWindow = Alloy.createController("FontsTableWindow", {
            data: this.Const.getFontList(),
            text: "test",
            callback: closecallback
        }).getView();
        this.next_window = rirekiWindow;
        return null != (null != Alloy ? null != (_ref = Alloy.Globals) ? _ref.currentTab : void 0 : void 0) ? Alloy.Globals.currentTab.open(rirekiWindow) : rirekiWindow.open();
    };
    StampWindowController.prototype.clickColor = function() {
        var color, _this = this;
        color = this.$.stamp.color;
        Ti.API.debug("color:" + color);
        return this.openPicker(function(e) {
            Ti.API.log("info", e);
            return _this.$.stamp.color = e;
        }, function() {
            return Ti.API.log("info", "user cancelled selection");
        }, L("granularity_label_character", "color"), color);
    };
    StampWindowController.prototype.clickHaikeiColor = function() {
        var color, _this = this;
        color = this.$.stampview.backgroundColor;
        Ti.API.debug("color:" + color);
        return this.openPicker(function(e) {
            Ti.API.log("info", e);
            return _this.$.stampview.backgroundColor = e;
        }, function() {
            return Ti.API.log("info", "user cancelled selection");
        }, L("backgroundColor", "backgroundColor"), color);
    };
    StampWindowController.prototype.clickSend = function(e, url) {
        var FACEBOOK, LINE, SINAWEIBO, Social, TWITTER, cancelnum, dialog, image, options, _base, _ref, _this = this;
        image = null != (_ref = this.$.stampview) ? _ref.toImage(null, true) : void 0;
        if (null != image) {
            "function" == typeof (_base = Ti.Media).saveToPhotoGallery && _base.saveToPhotoGallery(image);
            this.saveStamp();
            if (null != Ti.UI.iOS) {
                LINE = 0;
                TWITTER = 1;
                FACEBOOK = 2;
                SINAWEIBO = 3;
                options = [];
                options[LINE] = "LINE";
                Social = require("dk.napp.social");
                Ti.API.info("module is => " + Social);
                Ti.API.info("Facebook available: " + Social.isFacebookSupported());
                Ti.API.info("Twitter available: " + Social.isTwitterSupported());
                Ti.API.info("SinaWeibo available: " + Social.isSinaWeiboSupported());
                options[TWITTER] = "Twitter";
                options[FACEBOOK] = "Facebook";
                options[SINAWEIBO] = "SinaWeibo";
                options.push(L("cancel", "cancel"));
                cancelnum = options.length - 1;
                dialog = Ti.UI.createOptionDialog({
                    cancel: cancelnum,
                    options: options,
                    title: L("choose_account_label", "choose account label"),
                    message: L("choose_account_label", "choose account label")
                });
                dialog.addEventListener("click", function(e) {
                    var alertmessage, e_index, file, sns_obj;
                    e_index = e.index;
                    if (e_index === cancelnum) return;
                    file = Ti.Filesystem.getFile(Ti.Filesystem.tempDirectory, "tmpimage.jpg");
                    file.write(image);
                    sns_obj = {
                        text: "#FontStamp",
                        image: file.nativePath,
                        url: url
                    };
                    alertmessage = L("serviceNotProvisioned", "Servic No Provisioned");
                    switch (e_index) {
                      case LINE:
                        return _this.Const.callLineImage(image);

                      case TWITTER:
                        return Social.isTwitterSupported() ? Social.twitter(sns_obj) : alert("Twitter:" + alertmessage);

                      case FACEBOOK:
                        return Social.isFacebookSupported() ? Social.facebook(sns_obj) : alert("Facebook:" + alertmessage);

                      case SINAWEIBO:
                        return Social.isSinaWeiboSupported() ? Social.sinaweibo(sns_obj) : alert("Sina Weibo:" + alertmessage);
                    }
                });
                return dialog.show();
            }
            return this.Const.callLineImage(image);
        }
    };
    StampWindowController.prototype.clickInput = function() {
        var _this = this;
        this.Const.showInputDialog(L("editTextMenuTitle", "Input Text"), function(text) {
            return _this.$.stamp.text = text;
        });
        return this.resetAnimasion();
    };
    StampWindowController.prototype.openPicker = function(selectcallback, cancelcallback, title, color) {
        var obj, win;
        null == title && (title = "color");
        null == color && (color = "black");
        Ti.API.debug("openPicker:" + color);
        obj = {
            callback: selectcallback,
            title: title,
            defaultcolor: color
        };
        win = Alloy.createWidget("jp.coe.colorslider", obj).getView();
        return Alloy.Globals.currentTab.open(win);
    };
    StampWindowController.prototype.slideFontBar = function(e) {
        this.baseFontSize = e.value;
        this.$.stamp.font = {
            fontSize: this.baseFontSize,
            fontFamily: this.defaultFont
        };
        return this.resetAnimasion();
    };
    StampWindowController.prototype.resetAnimasion = function() {
        if (null != this.r && null != Ti.Android) return this.$.stamp.animate({
            transform: this.r
        });
    };
    StampWindowController.prototype.slideTurnBar = function(e) {
        return this.r = this.imageTurn(this.$.stamp, e.value);
    };
    StampWindowController.prototype.imageTurn = function(view, turn) {
        var r;
        r = Ti.UI.create2DMatrix();
        r = r.rotate(turn);
        view.animate({
            transform: r
        });
        return r;
    };
    StampWindowController.prototype.clickRireki = function() {
        var rirekiWindow, _ref;
        rirekiWindow = Alloy.createController("Tasks", {
            stampCallback: this.closeRireki
        }).getView();
        this.rirekiWindow = rirekiWindow;
        return null != (_ref = Alloy.Globals.currentTab) ? _ref.open(rirekiWindow) : void 0;
    };
    StampWindowController.prototype.closeRireki = function(data) {
        var r, _ref;
        Ti.API.debug(JSON.stringify(data));
        Ti.API.debug("あああ" + data.get("fontfamily"));
        _.extend(this.$.stamp, {
            text: data.get("title"),
            color: data.get("color")
        });
        Ti.API.debug("2");
        _.extend(this.$.stampview, {
            backgroundColor: data.get("backcolor")
        });
        Ti.API.debug("3");
        this.baseFontSize = this.$.fontSlider.value = data.get("fontsize");
        Ti.API.debug("4");
        this.defaultFont = data.get("fontsize");
        this.$.turnSlider.value = data.get("turn");
        r = Ti.UI.create2DMatrix();
        r = r.rotate(this.$.turnSlider.value);
        this.$.stamp.animate({
            transform: r
        });
        this.changeFont({
            fontSize: data.get("fontsize"),
            fontFamily: data.get("fontfamily")
        });
        null != (_ref = this.rirekiWindow) && _ref.close();
        return this.rirekiWindow = null;
    };
    StampWindowController.prototype.changeFont = function(font) {
        this.defaultFont = font.fontFamily;
        this.baseFontSize = font.fontSize;
        return this.$.stamp.font = font;
    };
    StampWindowController.prototype.clickSave = function() {};
    StampWindowController.prototype.saveStamp = function() {
        var stamp;
        stamp = Alloy.createModel("stamp", {
            image: this.$.stampview.toImage(null, true),
            title: this.$.stamp.text,
            turn: this.$.turnSlider.value,
            color: this.$.stamp.color,
            backcolor: this.$.stampview.backgroundColor,
            fontsize: this.baseFontSize,
            fontfamily: this.defaultFont
        });
        _stamps.add(stamp);
        stamp.save(stamp);
        return _stamps.fetch();
    };
    StampWindowController.prototype.pinchStamp = function() {};
    StampWindowController.prototype.getFontFileList = function() {
        var arr, dir, dirFullPath, name, _i, _len, _results;
        dirFullPath = Ti.Filesystem.resourcesDirectory + Ti.Filesystem.separator + "fonts";
        Ti.API.debug("dirFullPath:" + dirFullPath);
        dir = Titanium.Filesystem.getFile(dirFullPath);
        arr = dir.getDirectoryListing();
        Ti.API.debug("arr:" + arr);
        _results = [];
        for (_i = 0, _len = arr.length; _len > _i; _i++) {
            name = arr[_i];
            _results.push(this.getFontName(name));
        }
        return _results;
    };
    return StampWindowController;
}();