var TiFighter, window;

window = this;

exports.TiFighter = TiFighter = function() {
    function TiFighter(el, context) {
        return new TiFighter.init(el, context);
    }
    var getJSON;
    TiFighter.name = "TiFighter";
    TiFighter.prototype.version = "0.1.0";
    TiFighter.init = function(el, context) {
        var target, type;
        if (!el) return this;
        if ("string" == typeof el) {
            target = context[el];
            this.name = target;
        } else target = el;
        context = context || window;
        if (null != target) {
            this.context = context;
            this.element = target;
            type = target.toString().match(/TiUI([A-Z][a-zA-Z]+)/);
            !type || (this.type = type[1]);
            return this;
        }
        return void 0;
    };
    TiFighter.fn = TiFighter.prototype = TiFighter.init.prototype = {
        _bind_or_trigger: function(event, callback) {
            return callback ? this.bind(event, callback) : this.trigger(event);
        },
        bind: function(event, callback) {
            this.element.addEventListener(event, function(e) {
                return callback(e);
            });
            return this;
        },
        unbind: function(event, callback) {
            this.element.removeEventListener(event, function(e) {
                return callback(e);
            });
            return this;
        },
        trigger: function(event) {
            this.element.fireEvent(event);
            return this;
        },
        click: function(callback) {
            this._bind_or_trigger("click", callback);
            return this;
        },
        focus: function(callback) {
            callback ? this.bind("focus", callback) : this.element.focus();
            return this;
        },
        blur: function(callback) {
            callback ? this.bind("blur", callback) : this.element.blur();
            return this;
        },
        add: function(child) {
            this.element.add(child);
            return this;
        },
        remove: function(view) {
            this.element.remove(view);
            return this;
        },
        hide: function() {
            this.element.hide();
            return this;
        },
        show: function() {
            this.element.show();
            return this;
        },
        animate: function(animation, callback) {
            this.element.animate(animation, callback);
            return this;
        },
        attr: function(attr, value) {
            value && (this.element[attr] = value);
            return this.element[attr];
        },
        text: function(text) {
            return this.attr("text", text);
        }
    };
    TiFighter.console = TiFighter.log = function(message, level) {
        "string" != typeof message && (message = JSON.stringify(message));
        return Ti.API[level || "info"](message);
    };
    TiFighter.alert = function(message) {
        "string" != typeof message && (message = JSON.stringify(message));
        return alert(message);
    };
    TiFighter.each = function(object, callback, context) {
        var key;
        for (key in object) object[key] && callback.call(context, object[key], key, object);
    };
    TiFighter.map = function(object, callback, context) {
        var key, out;
        out = [];
        for (key in object) object[key] && out.push(callback.call(context, object[key], key, object));
        return out;
    };
    TiFighter.extend = function(destination, source, deepcopy) {
        var prop;
        for (prop in source) deepcopy && source[prop] && source[prop].constructor === Object ? destination[prop] = TiFighter.extend(destination[prop], source[prop]) : source[prop] && (destination[prop] = source[prop]);
        return destination;
    };
    TiFighter.config = function(key, value) {
        var data;
        if (2 === arguments.length) return null === value && Ti.App.Properties.hasProperty(key) ? Ti.App.Properties.removeProperty(key) : Ti.App.Properties.setString(key, JSON.stringify(value));
        if (1 === arguments.length) {
            data = Ti.App.Properties.getString(key, false);
            return null != data && JSON.parse(data) || void 0;
        }
    };
    TiFighter.development = function(callback) {
        var sim;
        sim = Ti.Platform.model.match(/sdk|Simulator/);
        return sim && callback ? callback() : sim;
    };
    TiFighter.production = function(callback) {
        var production;
        production = !TiFighter.development();
        return production && callback ? callback() : production;
    };
    TiFighter.iphone = function(callback) {
        var iphone;
        iphone = false;
        return iphone && callback ? callback() : iphone;
    };
    TiFighter.ipad = function(callback) {
        var ipad;
        ipad = false;
        return ipad && callback ? callback() : ipad;
    };
    TiFighter.android = function(callback) {
        var android;
        android = false;
        return android && callback ? callback() : android;
    };
    TiFighter.strftime = function(date, format) {
        var day, days, hours, minutes, month, months, pad, shortDays, shortMonths;
        shortDays = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];
        days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
        shortMonths = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
        months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        day = date.getDay();
        month = date.getMonth();
        hours = date.getHours();
        minutes = date.getMinutes();
        pad = function(num) {
            var string;
            string = num.toString(10);
            return new Array(2 - string.length + 1).join("0") + string;
        };
        return format.replace(/\%([aAbBcdHImMpSwyY])/g, function(part) {
            var out;
            out = null;
            switch (part[1]) {
              case "a":
                out = shortDays[day];
                break;

              case "A":
                out = days[day];
                break;

              case "b":
                out = shortMonths[month];
                break;

              case "B":
                out = months[month];
                break;

              case "c":
                out = date.toString();
                break;

              case "d":
                out = pad(date.getDate());
                break;

              case "H":
                out = pad(hours);
                break;

              case "I":
                out = pad((hours + 12) % 12);
                break;

              case "m":
                out = pad(month + 1);
                break;

              case "M":
                out = pad(minutes);
                break;

              case "p":
                out = hours > 12 && "PM" || "AM";
                break;

              case "S":
                out = pad(date.getSeconds());
                break;

              case "w":
                out = day;
                break;

              case "y":
                out = pad(date.getFullYear() % 100);
                break;

              case "Y":
                out = date.getFullYear().toString();
            }
            return out;
        });
    };
    TiFighter.relatizeDate = function(date, includeTime) {
        var distanceOfTimeInWords;
        distanceOfTimeInWords = function(fromTime, toTime, includeTime) {
            var days, delta, fmt;
            delta = parseInt((toTime.getTime() - fromTime.getTime()) / 1e3, 10);
            if (60 > delta) return "less than a minute ago";
            if (120 > delta) return "about a minute ago";
            if (2700 > delta) return parseInt(delta / 60, 10).toString() + " minutes ago";
            if (7200 > delta) return "about an hour ago";
            if (86400 > delta) return "about " + parseInt(delta / 3600, 10).toString() + " hours ago";
            if (172800 > delta) return "1 day ago";
            days = parseInt(delta / 86400, 10).toString();
            if (days > 5) {
                fmt = "%B %d, %Y";
                includeTime && (fmt += " %I:%M %p");
                return TiFighter.strftime(fromTime, fmt);
            }
            return days + " days ago";
        };
        return distanceOfTimeInWords(new Date(date), new Date(), includeTime);
    };
    TiFighter.trim = function(string) {
        return String(string).replace(/^\s+|\s+$/g, "");
    };
    TiFighter.isset = function(object) {
        return null != object && "" !== TiFighter.trim(object);
    };
    TiFighter.ajax = function(settings) {
        var xhr;
        settings = settings || {};
        if (null == settings.url) {
            TiFighter.console("ERROR: Must set settings.url!", "error");
            return;
        }
        settings.type = settings.type || "GET";
        settings.async = settings.async || true;
        settings.headers = settings.headers || {};
        settings.data = settings.data || {};
        settings.timeout = settings.timeout || 6e4;
        xhr = Ti.Network.createHTTPClient();
        TiFighter.android() && false === settings.async && TiFighter.console("WARNING: Android doesn't support async = false", "error");
        xhr.setTimeout(settings.timeout);
        xhr.open(settings.type, settings.url, !settings.async);
        ("PUT" === settings.type || "DELETE" === settings.type) && xhr.setRequestHeader("X-HTTP-Method-Override", settings.type);
        TiFighter.each([ "onload", "onerror", "onreadystatechange", "onsendstream" ], function(callback) {
            settings[callback] && "function" == typeof settings[callback] && (xhr[callback] = settings[callback]);
        });
        null != settings.username && (settings.headers.Authorization = "Basic " + String(Ti.Utils.base64encode(settings.username + ":" + settings.password)));
        null != settings.headers && TiFighter.each(settings.headers, function(val, key) {
            xhr.setRequestHeader(key, val);
        });
        xhr.send(settings.data);
        return xhr;
    };
    getJSON = function(settings) {
        var ajax;
        settings = settings || {};
        settings.async = false;
        ajax = TiFighter.ajax(settings);
        return JSON.parse(ajax.responseText);
    };
    TiFighter.get = function(url) {
        return getJSON({
            url: url
        });
    };
    TiFighter.post = function(url, data) {
        return getJSON({
            url: url,
            data: data,
            method: "POST"
        });
    };
    TiFighter.put = function(url, data) {
        return getJSON({
            url: url,
            data: data,
            method: "PUT"
        });
    };
    TiFighter.del = function(url) {
        return getJSON({
            url: url,
            method: "DELETE"
        });
    };
    TiFighter.rater = function(settings) {
        var alert, data, stored;
        settings = settings || {};
        settings.appName = settings.appName || "All SNSChecker";
        settings.appURL = settings.appURL || "http://itunes.apple.com/jp/app/all-snschecker/id465515446?mt=8";
        settings.interval = settings.interval || 20;
        settings.title = settings.title || L("Feedback");
        settings.message = settings.message || "";
        data = {
            launchCount: 0,
            neverRemind: false
        };
        stored = TiFighter.config("RaterData");
        stored && (data = stored);
        data.launchCount++;
        TiFighter.config("RaterData", data);
        if (data.neverRemind || 0 !== data.launchCount % settings.interval) return;
        alert = Ti.UI.createAlertDialog({
            title: "Feedback",
            message: settings.message.replace("{app_name}", settings.appName),
            buttonNames: [ L("ok", "OK"), L("cancel", "Cancel"), L("sync_do_nothing", "Do nothing for now") ],
            cancel: 2
        });
        alert.addEventListener("click", function(e) {
            if (0 === e.index || 1 === e.index) {
                data.neverRemind = true;
                TiFighter.config("RaterData", data);
            }
            if (0 === e.index) return Ti.Platform.openURL(settings.appURL);
        });
        return alert.show();
    };
    TiFighter.include = function() {
        var arg, context, relative, _i, _j, _len, _len1, _results;
        if (TiFighter.android()) return Ti.include.apply(null, arguments);
        context = Ti.UI.currentWindow && Ti.UI.currentWindow.url.split("/") || [ "" ];
        context.pop();
        for (_i = 0, _len = context.length; _len > _i; _i++) {
            arg = context[_i];
            context[arg] = "..";
        }
        relative = context.join("/");
        relative && (relative += "/");
        _results = [];
        for (_j = 0, _len1 = arguments.length; _len1 > _j; _j++) {
            arg = arguments[_j];
            _results.push(Ti.include(relative + arg));
        }
        return _results;
    };
    return TiFighter;
}();