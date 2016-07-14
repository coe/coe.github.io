var MobileAudioPlayerClass, __bind = function(fn, me) {
    return function() {
        return fn.apply(me, arguments);
    };
};

module.exports = MobileAudioPlayerClass = function() {
    function MobileAudioPlayerClass() {
        this.addEventListener = __bind(this.addEventListener, this);
    }
    var _audio;
    MobileAudioPlayerClass.name = "MobileAudioPlayerClass";
    _audio = new Audio("");
    MobileAudioPlayerClass.prototype.STATE_STARTING = 1;
    MobileAudioPlayerClass.prototype.STATE_PAUSED = 2;
    MobileAudioPlayerClass.prototype.STATE_INITIALIZED = 3;
    MobileAudioPlayerClass.prototype.STATE_STOPPED = 4;
    MobileAudioPlayerClass.prototype.STATE_STOPPING = 5;
    MobileAudioPlayerClass.prototype.stop = function() {
        return _audio.pause();
    };
    MobileAudioPlayerClass.prototype.release = function() {};
    MobileAudioPlayerClass.prototype.start = function() {
        _audio.src = this.url;
        _audio.load();
        return _audio.play();
    };
    MobileAudioPlayerClass.prototype.pause = function() {
        return _audio.pause();
    };
    MobileAudioPlayerClass.prototype.paused = true;
    MobileAudioPlayerClass.prototype.playing = false;
    MobileAudioPlayerClass.prototype.url = "";
    MobileAudioPlayerClass.prototype.addEventListener = function(eventname, callback) {
        var _this = this;
        switch (eventname) {
          case "progress":
            return _audio.addEventListener("timeupdate", function() {
                var e;
                e = {
                    progress: 1e3 * _audio.currentTime
                };
                return callback(e);
            });

          case "change":
            _audio.addEventListener("play", function() {
                var e, paused, playing;
                playing = true;
                paused = false;
                e = {
                    state: _this.STATE_STARTING,
                    description: ""
                };
                return callback(e);
            });
            return _audio.addEventListener("pause", function() {
                var e, paused, playing;
                playing = false;
                paused = true;
                e = {
                    state: _this.STATE_PAUSED,
                    description: ""
                };
                return callback(e);
            });
        }
    };
    return MobileAudioPlayerClass;
}();