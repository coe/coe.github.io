var Const, __bind = function(fn, me) {
    return function() {
        return fn.apply(me, arguments);
    };
};

exports.Const = Const = function() {
    function Const() {
        this.getImageToBlob = __bind(this.getImageToBlob, this);
        this.showInputDialog = __bind(this.showInputDialog, this);
        this.callLineImage = __bind(this.callLineImage, this);
        this.callLineText = __bind(this.callLineText, this);
        this.getFileArray = __bind(this.getFileArray, this);
        this.momentja = __bind(this.momentja, this);
        this.makeFukidashiWindow = __bind(this.makeFukidashiWindow, this);
        this.setNewVerLaunched = __bind(this.setNewVerLaunched, this);
        this.isNewVerLaunched = __bind(this.isNewVerLaunched, this);
        this.isSim = __bind(this.isSim, this);
        this.getFontList = __bind(this.getFontList, this);
    }
    Const.name = "Const";
    Const.prototype.getPlainName = function(name) {
        var kekka;
        kekka = name.split(".");
        return kekka[0];
    };
    Const.prototype.getFontList = function() {
    };
    Const.prototype.warn = function(str) {
        if (null != Ti.UI.iOS) return Ti.API.debug(str);
    };
    Const.prototype.isSim = function() {
        null != Ti.Android && true;
        return "google_sdk" === Titanium.Platform.model || "Simulator" === Titanium.Platform.model;
    };
    Const.prototype.isPro = function() {
        return -1 !== Titanium.App.getID().indexOf("pro");
    };
    Const.prototype.isNewVerLaunched = function() {
        return Ti.App.Properties.getDouble("version", 0 >= Ti.App.version - 0);
    };
    Const.prototype.setNewVerLaunched = function() {
        return Ti.App.Properties.setDouble("version", Ti.App.version - 0);
    };
    Const.prototype.makeMessageWin = function() {
        this.messageWin = Titanium.UI.createWindow({
            height: 30,
            width: 250,
            bottom: 150,
            borderRadius: 10,
            touchEnabled: false,
            orientationModes: [ Titanium.UI.PORTRAIT, Titanium.UI.UPSIDE_PORTRAIT, Titanium.UI.LANDSCAPE_LEFT, Titanium.UI.LANDSCAPE_RIGHT ]
        });
        this.messageView = Titanium.UI.createView({
            id: "messageview",
            height: 30,
            width: 250,
            borderRadius: 10,
            backgroundColor: "#000",
            opacity: .7,
            touchEnabled: false
        });
        this.messageLabel = Titanium.UI.createLabel({
            id: "messagelabel",
            text: "",
            color: "#fff",
            width: 250,
            height: "auto",
            font: {
                fontFamily: "Helvetica Neue",
                fontSize: 13
            },
            textAlign: "center"
        });
        this.messageWin.add(this.messageView);
        return this.messageWin.add(this.messageLabel);
    };
    Const.prototype.openMessage = function(str, del) {
        var _this = this;
        null == del && (del = true);
        this.messageWin.open();
        this.messageLabel.text = "";
        setTimeout(function() {
            return _this.messageLabel.text = str;
        }, 1e3);
        if (del) return setTimeout(function() {
            return _this.messageWin.close({
                opacity: 0,
                duration: 500
            });
        }, 2e3);
    };
    Const.prototype.defImage = function(name, light) {
        var dark, dir, ret;
        null == light && (light = true);
        dark = dir = light ? "light" : "dark";
        ret = "/images/def/" + dir + "/" + dark + "_" + name + ".png";
        return ret;
    };
    Const.prototype.makeFukidashiWindow = function(view, str) {
        var menuWin, t, t2, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
        null == str && (str = "");
        t = Titanium.UI.create2DMatrix();
        t = t.rotate(-90);
        menuWin = Titanium.UI.createWindow({
            backgroundImage: "/images/menubox.png",
            height: null != (_ref = view.height) ? _ref : 100,
            width: null != (_ref1 = view.width) ? _ref1 : 100,
            top: null != (_ref2 = view.top) ? _ref2 : null,
            right: null != (_ref3 = view.right) ? _ref3 : null,
            bottom: null != (_ref4 = view.bottom) ? _ref4 : null,
            left: null != (_ref5 = view.left) ? _ref5 : null,
            anchorPoint: {
                x: 1,
                y: 0
            },
            transform: t,
            opacity: 0
        });
        menuWin.add(Ti.UI.createLabel({
            font: {
                fontWeight: "bold"
            },
            color: "white",
            text: str
        }));
        t2 = Titanium.UI.create2DMatrix();
        menuWin.open();
        menuWin.animate({
            transform: t2,
            opacity: 1,
            duration: 800
        });
        return setTimeout(function() {
            t = Titanium.UI.create2DMatrix();
            t = t.rotate(-90);
            return menuWin.animate({
                transform: t,
                opacity: 0,
                duration: 800
            }, function() {
                return menuWin.close();
            });
        }, 2e3);
    };
    Const.prototype.debug = function() {};
    Const.prototype.info = function() {};
    Const.prototype.error = function() {};
    Const.prototype.htmlToText = function(argument) {
        if (null != argument) return argument.replace(/&amp;/g, "&").replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"');
    };
    Const.prototype.capitalize = function(str) {
        return str.replace(/\w+/g, function(word) {
            return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
        });
    };
    Const.prototype.dateToGameTitle = function(yymmddhhmm) {
        var day, dd, mm, yy, _base;
        yy = yymmddhhmm.substring(0, 4) - 0;
        mm = yymmddhhmm.substring(4, 6) - 0;
        dd = yymmddhhmm.substring(6, 8) - 0;
        "function" == typeof (_base = Ti.App.Const).warn && _base.warn("日付 " + yy + " " + mm + " " + dd);
        day = this.dayToYoubi(new Date(yy, mm - 1, dd));
        return "" + mm + "月" + dd + "日 (" + day + ")";
    };
    Const.prototype.dateToYYMMDD = function(myD) {
        var myDate, myDay, myHours, myMinutes, myMonth, mySeconds, myYear, myYear4;
        myYear = myD.getYear();
        myYear4 = 2e3 > myYear ? myYear + 1900 : myYear;
        myMonth = myD.getMonth() + 1 + "";
        1 === (null != myMonth ? myMonth.length : void 0) && (myMonth = "0" + myMonth);
        myDate = myD.getDate() + "";
        1 === (null != myDate ? myDate.length : void 0) && (myDate = "0" + myDate);
        myDay = myD.getDay();
        myHours = myD.getHours();
        myMinutes = myD.getMinutes();
        mySeconds = myD.getSeconds();
        return "" + myYear4 + myMonth + myDate;
    };
    Const.prototype.rotate = function(callback) {
        return Ti.Gesture.addEventListener("orientationchange", callback);
    };
    Const.prototype.CLog = function(str) {
        var _base;
        return "function" == typeof (_base = Ti.App.Const).warn ? _base.warn(str) : void 0;
    };
    Const.prototype.isDirectory = function(f) {
        return f.exists() && null != f.getDirectoryListing();
    };
    Const.prototype.isFile = function(f) {
        return f.exists() && !(null != f.getDirectoryListing());
    };
    Const.prototype.myVersion = function() {
        return Titanium.version.substring(0, 3) - 0;
    };
    Const.prototype.myRequire = function(str) {
        var foot, memori, tivar, _base, _base1, _base2, _base3, _base4;
        "function" == typeof (_base = Ti.App.Const).warn && _base.warn("変換前 " + str);
        foot = this.lastPath(str);
        tivar = Titanium.version.substring(0, 3) - 0;
        "function" == typeof (_base1 = Ti.App.Const).warn && _base1.warn("foot=" + foot + " str = " + str);
        "function" == typeof (_base2 = Ti.App.Const).warn && _base2.warn("バージョン " + tivar);
        try {
            if (1.7 >= tivar) {
                memori = str.replace(/[\/\.]/, "_");
                null == (_base3 = Ti.App)[memori] && (_base3[memori] = require(str)[foot]);
                return Ti.App[memori];
            }
            return require(str)[foot];
        } catch (error) {
            "function" == typeof (_base4 = Ti.App.Const).warn && _base4.warn("コントローラ読み込みエラー ");
            return null;
        }
    };
    Const.prototype.versionInt = function() {
        return Titanium.version.substring(0, 3) - 0;
    };
    Const.prototype.lastPath = function(str, i) {
        var segements, url;
        null == i && (i = 1);
        if (null != str) {
            null == i && (i = 1);
            url = str;
            segements = url.split("/");
            return segements[segements.length - i];
        }
    };
    Const.prototype.momentja = function(moment) {
        moment.lang("ja", {
            months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
            weekdaysShort: "（日）_（月）_（火）_（水）_（木）_（金）_（土）".split("_"),
            weekdaysMin: "日_月_火_水_木_金_土".split("_"),
            longDateFormat: {
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D YYYY",
                LLL: "MMMM D YYYY LT",
                LLLL: "dddd, MMMM D YYYY LT"
            },
            meridiem: function(hours, minutes, isLower) {
                return hours > 11 ? isLower ? "pm" : "PM" : isLower ? "am" : "AM";
            },
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[last] dddd [at] LT",
                sameElse: "L"
            },
            relativeTime: {
                future: "%s後",
                past: "%s前",
                s: "ちょっと",
                m: "約1分",
                mm: "%d分",
                h: "約1時間",
                hh: "%d時間",
                d: "1日",
                dd: "%d日",
                M: "1ヶ月",
                MM: "%dヶ月",
                y: "1年",
                yy: "%d年"
            },
            ordinal: function(number) {
                var b;
                b = number % 10;
                return 1 === ~~(number % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
            }
        });
        return moment;
    };
    Const.prototype.getFileArray = function(path) {
        var dir, dirFullPath;
        dirFullPath = Ti.Filesystem.resourcesDirectory + Ti.Filesystem.separator + path;
        dir = Titanium.Filesystem.getFile(dirFullPath);
        return dir.getDirectoryListing();
    };
    Const.prototype.callLineText = function(linestr) {
        var openstr;
        linestr = encodeURIComponent(linestr);
        openstr = "line://msg/text/" + linestr;
        return null != Ti.UI.iOS ? Ti.Platform.canOpenURL(openstr) ? Ti.Platform.openURL(openstr) : Ti.Platform.openURL("http://line.naver.jp/R/msg/text/?" + linestr) : Ti.Platform.openURL(openstr);
    };
    Const.prototype.callLineImage = function(blob) {
        var clipname, file, myAppDir, openstr, sdcardDir;
        openstr = "line://msg/image/";
        if (null != Ti.UI.iOS) {
            Ti.UI.Clipboard.setData("image", blob);
            clipname = "com.apple.UIKit.pboard.general";
            return Ti.Platform.canOpenURL(openstr) ? Ti.Platform.openURL(openstr + clipname) : Ti.Platform.openURL("http://line.naver.jp/R/msg/image/?" + clipname);
        }
        myAppDir = Ti.Filesystem.getFile(Ti.Filesystem.externalStorageDirectory);
        sdcardDir = myAppDir.getParent();
        file = Ti.Filesystem.getFile(sdcardDir.nativePath, ".jpg");
        Ti.API.debug("かきこみ :" + file.write(blob.media));
        Ti.API.debug("パス:" + (openstr + file.nativePath));
        return Ti.Platform.openURL(openstr + file.nativePath);
    };
    Const.prototype.showInputDialog = function(title, callback, button, isPassword) {
        var dialog, locField;
        null == button && (button = [ "OK", "cancel" ]);
        null == isPassword && (isPassword = false);
        if (null != Ti.UI.iOS) {
            dialog = Ti.UI.createAlertDialog({
                title: title,
                buttonNames: button,
                cancel: 1
            });
            dialog.style = isPassword ? Ti.UI.iPhone.AlertDialogStyle.SECURE_TEXT_INPUT : Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT;
            dialog.addEventListener("click", function(e) {
                if (e.index !== e.cancel) return callback(e.text);
            });
            return dialog.show();
        }
        if (null != Ti.Android) {
            locField = Ti.UI.createTextField({
                passwordMask: isPassword
            });
            dialog = Ti.UI.createAlertDialog({
                title: title,
                buttonNames: button,
                cancel: 1,
                androidView: locField
            });
            dialog.addEventListener("click", function(e) {
                if (true === e.button && 0 === e.index) return callback(locField.value);
            });
            return dialog.show();
        }
    };
    Const.prototype.showPasswordDialog = function(title, callback, button) {
        null == button && (button = [ "OK", "cancel" ]);
        return this.showInputDialog(title, callback, button, true);
    };
    Const.prototype.getImageToBlob = function(blob) {
        return null != Ti.Android ? blob.media : blob;
    };
    return Const;
}();