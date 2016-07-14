var AppStoreClient;

String.prototype.replaceAll = function(org, dest) {
    return this.split(org).join(dest);
};

module.exports = AppStoreClient = function() {
    function AppStoreClient() {}
    var ANDROID_URL, API, COUNTRY, URL, getClientObject, getKeywordToXML, getParameter, setParameter;
    AppStoreClient.name = "AppStoreClient";
    API = "http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/wa/wsSearch?";
    ANDROID_URL = "http://play.google.com/store/search?q=tsuyoshi+hyuga";
    URL = API;
    getKeywordToXML = function(xml) {
        var arr, doc, element, i, items, j, obj, title, tmpurl, type, _i, _j, _k, _ref, _ref1, _ref2;
        arr = [];
        title = "";
        try {
            doc = xml.documentElement;
            items = doc.getElementsByTagName("entry");
            for (i = _i = 0, _ref = items.length; _ref >= 0 ? _ref > _i : _i > _ref; i = _ref >= 0 ? ++_i : --_i) {
                obj = {};
                element = items.item(i);
                obj.trackName = element.getElementsByTagName("im:name").item(0).textContent;
                obj.artistName = element.getElementsByTagName("im:artist").item(0).textContent;
                tmpurl = null;
                for (j = _j = 0, _ref1 = element.getElementsByTagName("im:image").length; _ref1 >= 0 ? _ref1 > _j : _j > _ref1; j = _ref1 >= 0 ? ++_j : --_j) tmpurl = element.getElementsByTagName("im:image").item(j).textContent;
                obj.artworkUrl100 = tmpurl;
                for (j = _k = 0, _ref2 = element.getElementsByTagName("link").length; _ref2 >= 0 ? _ref2 > _k : _k > _ref2; j = _ref2 >= 0 ? ++_k : --_k) {
                    type = element.getElementsByTagName("link").item(j).getAttribute("type");
                    "audio/x-m4a" === type && (obj.previewUrl = element.getElementsByTagName("link").item(j).getAttribute("href"));
                }
                obj.trackViewUrl = element.getElementsByTagName("id").item(0).textContent;
                arr.push(obj);
            }
            return arr;
        } catch (error) {
            return alert(error);
        }
    };
    getParameter = function(str) {
        var dec, i, itm, key, par;
        dec = decodeURIComponent;
        par = {};
        itm = void 0;
        if ("undefined" == typeof str) return par;
        str.indexOf("?", 0) > -1 && (str = str.split("?")[1]);
        str = str.split("&");
        i = 0;
        while (str.length > i) {
            itm = str[i].split("=");
            "" !== itm[0] && (key = "undefined" == typeof itm[1] ? true : dec(itm[1]));
            par[itm[0]] = key;
            i++;
        }
        return par;
    };
    setParameter = function(par) {
        var amp, enc, i, str;
        enc = encodeURIComponent;
        str = "";
        amp = "";
        if (!par) return "";
        for (i in par) {
            str = str + amp + i + "=" + enc(par[i]);
            amp = "&";
        }
        return str;
    };
    COUNTRY = [ "GB", "IT", "FI", "RU", "AE", "PK", "BD", "ID", "PH", "JP", "AU", "NC", "NZ", "TO", "TO", "US", "US", "US", "US", "US", "CL", "BR", "BR", "GL" ];
    AppStoreClient.getTzOff = function() {
        var date;
        if ("" !== Ti.Locale.getCurrentCountry()) return Ti.Locale.getCurrentCountry();
        date = new Date();
        return COUNTRY[(date.getHours() - date.getUTCHours() + 24) % 24];
    };
    getClientObject = function(errorcallback) {
        return {
            onerror: errorcallback,
            onreadystatechange: function() {},
            onsendstream: function() {},
            ondatastream: function() {},
            timeout: 5e3
        };
    };
    AppStoreClient.getItunesRssData = function(callback, errorcallback, obj) {
        var client, client_object, country, limit, url, _ref, _ref1;
        country = null != (_ref = null != obj ? obj.country : void 0) ? _ref : require("AppStoreClient/AppStoreClient").getTzOff();
        limit = null != (_ref1 = null != obj ? obj.limit : void 0) ? _ref1 : 200;
        url = "https://itunes.apple.com/" + country.toLowerCase() + ("/rss/topsongs/limit=" + limit + "/explicit=true/xml");
        client_object = getClientObject(errorcallback);
        client_object.onload = function() {
            return callback(getKeywordToXML(this.responseXML));
        };
        client = Ti.Network.createHTTPClient(client_object);
        client.open("GET", url);
        return client.send();
    };
    AppStoreClient.getItunesRssDataYql = function(callback, errorcallback, obj) {
        var country, limit, mojiretu, url, _ref, _ref1;
        country = null != (_ref = null != obj ? obj.country : void 0) ? _ref : require("AppStoreClient/AppStoreClient").getTzOff();
        limit = null != (_ref1 = null != obj ? obj.limit : void 0) ? _ref1 : 200;
        url = "https://itunes.apple.com/" + country.toLowerCase() + ("/rss/topsongs/limit=" + limit + "/explicit=true/xml");
        mojiretu = 'select * from xml where url="' + url + '"';
        return Ti.Yahoo.yql(mojiretu, function(e) {
            var arr, image, item, link, nowsize, objs, tmpsizemax, tmpurl, _ref2, _ref3, _ref4;
            if (e.success && null != e.data) {
                arr = null != (_ref2 = null != (_ref3 = e.data) ? null != (_ref4 = _ref3.feed) ? _ref4.entry : void 0 : void 0) ? _ref2 : [];
                objs = function() {
                    var _i, _j, _k, _len, _len1, _len2, _ref5, _ref6, _ref7, _ref8, _ref9, _results;
                    _results = [];
                    for (_i = 0, _len = arr.length; _len > _i; _i++) {
                        item = arr[_i];
                        obj = {};
                        obj.trackName = item.name;
                        obj.artistName = null != (_ref5 = null != (_ref6 = item.artist) ? _ref6.content : void 0) ? _ref5 : "";
                        tmpurl = null;
                        tmpsizemax = 0;
                        _ref7 = item.image;
                        for (_j = 0, _len1 = _ref7.length; _len1 > _j; _j++) {
                            image = _ref7[_j];
                            nowsize = image.height - 0;
                            if (nowsize > tmpsizemax) {
                                tmpsizemax = nowsize;
                                obj.artworkUrl100 = image.content;
                            }
                        }
                        _ref8 = item.link;
                        for (_k = 0, _len2 = _ref8.length; _len2 > _k; _k++) {
                            link = _ref8[_k];
                            "preview" === link.assetType && (obj.previewUrl = link.href);
                        }
                        obj.trackViewUrl = null != (_ref9 = item.id) ? _ref9.content : void 0;
                        _results.push(obj);
                    }
                    return _results;
                }();
                return callback(objs);
            }
            return errorcallback(e);
        });
    };
    AppStoreClient.getItunesData = function(callback, errorcallback, obj) {
        var IOS_URL, client, cur, url, _ref;
        cur = require("AppStoreClient/AppStoreClient").getTzOff();
        IOS_URL = null == obj ? API + ("term=tsuyoshi+hyuga&country=" + cur + "&media=software&entity=software") : (null != (_ref = obj.country) ? _ref : obj.country = cur, 
        API + setParameter(obj));
        url = IOS_URL;
        client = Ti.Network.createHTTPClient({
            onload: function() {
                var data, json;
                json = JSON.parse(this.responseText);
                data = json.results;
                return callback(data, json.resultCount);
            },
            onerror: errorcallback,
            onreadystatechange: function() {},
            onsendstream: function() {},
            ondatastream: function() {},
            timeout: 5e3
        });
        client.open("GET", url);
        return client.send();
    };
    return AppStoreClient;
}();