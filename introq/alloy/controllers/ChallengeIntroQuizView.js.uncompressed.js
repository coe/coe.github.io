function Controller() {
    require("alloy/controllers/IntroQuizView").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "ChallengeIntroQuizView";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    var _score;
    exports.baseController = "IntroQuizView";
    _score = 0;
    exports.clickReplayFunc = function() {
        var _ref;
        if ($.isSeikai()) {
            null != (_ref = $.hayaoshi_button) && (_ref.visible = true);
            $.button_view.visible = false;
            return $.startMusic();
        }
        return $.win.close();
    };
    exports.selectAnswerExtends = function() {
        var _ref;
        $.isSeikai() ? _score++ : null != (_ref = Alloy.Globals.GC) && _ref.reportScore({
            score: _score,
            id: Alloy.CFG.rankings[0].id
        });
        return $.replay_button.title = $.isSeikai() ? "NEXT" : "END";
    };
    (function() {
        return $.win.title = L("Challenge", "Challenge");
    })();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;