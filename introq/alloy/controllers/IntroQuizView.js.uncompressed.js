function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "IntroQuizView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    closeWindow ? $.__views.win.addEventListener("close", closeWindow) : __defers["$.__views.win!close!closeWindow"] = true;
    $.__views.loading_view = Ti.UI.createView({
        id: "loading_view"
    });
    $.__views.win.add($.__views.loading_view);
    $.__views.loading = Alloy.createWidget("com.appcelerator.loading", "widget", {
        id: "loading",
        __parentSymbol: $.__views.loading_view
    });
    $.__views.loading.setParent($.__views.loading_view);
    $.__views.__alloyId0 = Ti.UI.createView({
        id: "__alloyId0"
    });
    $.__views.win.add($.__views.__alloyId0);
    $.__views.artist_view = Ti.UI.createView({
        bottom: Alloy.Globals.Style.game_view_height,
        id: "artist_view"
    });
    $.__views.__alloyId0.add($.__views.artist_view);
    $.__views.artisgt_image = Ti.UI.createImageView({
        height: 100,
        width: 100,
        defaultImage: Alloy.Globals.NullImage,
        image: Alloy.Globals.NullImage,
        id: "artisgt_image"
    });
    $.__views.artist_view.add($.__views.artisgt_image);
    $.__views.artist = Ti.UI.createLabel(function() {
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
            text: "artist",
            id: "artist"
        });
        return o;
    }());
    $.__views.artist_view.add($.__views.artist);
    $.__views.title = Ti.UI.createLabel(function() {
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
            bottom: 0,
            text: "title",
            id: "title"
        });
        return o;
    }());
    $.__views.artist_view.add($.__views.title);
    $.__views.button_view = Ti.UI.createView({
        height: Alloy.Globals.Style.game_view_height,
        bottom: 0,
        visible: false,
        id: "button_view"
    });
    $.__views.__alloyId0.add($.__views.button_view);
    $.__views.replay_button = Ti.UI.createButton(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 32
            }
        });
        _.extend(o, {
            bottom: 0,
            height: Alloy.Globals.Style.game_view_height,
            width: 100,
            right: 0,
            title: "NEXT",
            id: "replay_button"
        });
        return o;
    }());
    $.__views.button_view.add($.__views.replay_button);
    clickReplay ? $.__views.replay_button.addEventListener("click", clickReplay) : __defers["$.__views.replay_button!click!clickReplay"] = true;
    $.__views.itunes_button = Ti.UI.createButton(function() {
        var o = {};
        _.extend(o, {});
        Alloy.isTablet && _.extend(o, {
            font: {
                fontSize: 32
            }
        });
        _.extend(o, {
            backgroundImage: "/images/available_on_itunes_badge_us_uk_110_40_0824.png",
            left: 0,
            width: 110,
            height: 40,
            id: "itunes_button"
        });
        return o;
    }());
    $.__views.button_view.add($.__views.itunes_button);
    clickItunes ? $.__views.itunes_button.addEventListener("click", clickItunes) : __defers["$.__views.itunes_button!click!clickItunes"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var MobileAudioPlayerClass, args, audioPlayer, clickHayaoshi, clickItunes, clickPause, clickPlay, clickReplay, closeWindow, musicStop, onError, playMusic, setLoadingView, showSentakushi, _answer_data4, _datas, _seikai_data, _select_answer, _showSentakushi;
    args = arguments[0] || {};
    _datas = null;
    _answer_data4 = null;
    _seikai_data = null;
    _showSentakushi = false;
    setLoadingView = function(torf) {
        $.loading_view.visible = torf;
        return torf ? $.loading.setOpacity(1) : $.loading.setOpacity(0);
    };
    onError = function() {
        alert("error");
        return setLoadingView(false);
    };
    audioPlayer = (MobileAudioPlayerClass = require("MobileAudioPlayerClass"), new MobileAudioPlayerClass(""));
    musicStop = function() {
        audioPlayer.stop();
    };
    playMusic = function(data) {
        Ti.API.debug("data.previewUrl " + data.previewUrl);
        (audioPlayer.playing || audioPlayer.paused) && musicStop();
        audioPlayer.url = data.previewUrl;
        return audioPlayer.start();
    };
    clickPlay = function() {
        return $.clickPlayFunc();
    };
    exports.clickPlayFunc = function() {
        if (null != _datas) return playMusic(_datas[Math.floor(Math.random() * _datas.length)]);
    };
    clickPause = function() {
        audioPlayer.paused ? audioPlayer.start() : audioPlayer.pause();
    };
    audioPlayer.addEventListener("progress", function(e) {
        Ti.API.info("Time Played: " + Math.round(e.progress) + " milliseconds");
        Math.round(e.progress) > 1e3 && !$.button_view.visible && !_showSentakushi && showSentakushi();
    });
    audioPlayer.addEventListener("change", function(e) {
        Ti.API.info("State: " + e.description + " (" + e.state + ")");
        audioPlayer.STATE_STARTING !== e.state || $.button_view.visible || "undefined" != typeof pv && null !== pv && pv.show({
            text: "loading"
        }, "loading");
    });
    closeWindow = function() {
        audioPlayer.stop();
    };
    _select_answer = null;
    exports.isSeikai = function(e) {
        null != e && (_select_answer = e);
        return _.isEqual(_answer_data4[_select_answer.index], _seikai_data);
    };
    exports.selectAnswer = function(e) {
        var MobileCreateSound, koukaon, mcs, _ref;
        koukaon = null;
        koukaon = $.isSeikai(e) ? "/se/seikai.wav" : "/se/hazure.wav";
        MobileCreateSound = require("MobileCreateSound");
        mcs = new MobileCreateSound({
            url: koukaon
        });
        mcs.play();
        $.artist.text = _seikai_data.artistName;
        $.title.text = _seikai_data.trackName;
        $.artisgt_image.image = _seikai_data.artworkUrl100;
        audioPlayer.start();
        null != (_ref = $.hayaoshi_button) && (_ref.visible = false);
        $.button_view.visible = true;
        $.selectAnswerExtends();
        return _showSentakushi = false;
    };
    exports.selectAnswerExtends = function() {};
    clickHayaoshi = function() {};
    showSentakushi = function() {
        var dialog;
        if (_showSentakushi) return;
        _showSentakushi = true;
        "undefined" != typeof pv && null !== pv && pv.hide();
        dialog = Ti.UI.createAlertDialog({
            buttonNames: _.pluck(_answer_data4, "trackName"),
            title: "Enter text"
        });
        dialog.addEventListener("click", $.selectAnswer);
        dialog.show();
        musicStop();
        return;
    };
    exports.clickReplayFunc = function() {
        var _ref;
        null != (_ref = $.hayaoshi_button) && (_ref.visible = true);
        $.button_view.visible = false;
        return $.startMusic();
    };
    clickReplay = function() {
        return $.clickReplayFunc();
    };
    exports.startMusic = function() {
        var i, _i;
        _answer_data4 = [];
        for (i = _i = 0; 4 > _i; i = ++_i) _answer_data4.push(_datas[Math.floor(Math.random() * _datas.length)]);
        $.artist.text = $.title.text = "";
        $.artisgt_image.image = Alloy.Globals.NullImage;
        _seikai_data = _answer_data4[Math.floor(Math.random() * _answer_data4.length)];
        return playMusic(_seikai_data);
    };
    clickItunes = function() {
        return Ti.Platform.openURL(_seikai_data.trackViewUrl + "&at=11lGpg");
    };
    (function() {
        var AppStoreClient;
        setLoadingView(true);
        $.win.title = L("Play", "Play");
        AppStoreClient = require("AppStoreClient/AppStoreClient");
        return AppStoreClient.getItunesRssDataYql(function(datas) {
            _datas = datas;
            setLoadingView(false);
            return $.startMusic();
        }, onError, {
            term: "AKB48",
            media: "music",
            entity: "song",
            country: require("AppStoreClient/AppStoreClient").getTzOff(),
            limit: 200
        });
    })();
    __defers["$.__views.win!close!closeWindow"] && $.__views.win.addEventListener("close", closeWindow);
    __defers["$.__views.replay_button!click!clickReplay"] && $.__views.replay_button.addEventListener("click", clickReplay);
    __defers["$.__views.itunes_button!click!clickItunes"] && $.__views.itunes_button.addEventListener("click", clickItunes);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;