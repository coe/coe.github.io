var MobileCreateSound;

module.exports = MobileCreateSound = function() {
    function MobileCreateSound(obj) {
        _audio.src = obj.url;
    }
    var _audio;
    MobileCreateSound.name = "MobileCreateSound";
    _audio = new Audio("");
    MobileCreateSound.prototype.STATE_STARTING = 1;
    MobileCreateSound.prototype.STATE_PAUSED = 2;
    MobileCreateSound.prototype.STATE_INITIALIZED = 3;
    MobileCreateSound.prototype.STATE_STOPPED = 4;
    MobileCreateSound.prototype.STATE_STOPPING = 5;
    MobileCreateSound.prototype.play = function() {
        _audio.load();
        return _audio.play();
    };
    return MobileCreateSound;
}();