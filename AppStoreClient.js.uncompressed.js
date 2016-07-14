var AppStoreClient;

module.exports = AppStoreClient = function() {
    function AppStoreClient() {}
    var ANDROID_URL, API, COUNTRY, URL;
    AppStoreClient.name = "AppStoreClient";
    API = "http://itunes.apple.com/search?";
    ANDROID_URL = "http://play.google.com/store/search?q=tsuyoshi+hyuga";
    URL = API;
    COUNTRY = [ "GB", "IT", "FI", "RU", "AE", "PK", "BD", "ID", "PH", "JP", "AU", "NC", "NZ", "TO", "TO", "US", "US", "US", "US", "US", "CL", "BR", "BR", "GL" ];
    AppStoreClient.getTzOff = function() {
        var date;
        if ("" !== Ti.Locale.getCurrentCountry()) return Ti.Locale.getCurrentCountry();
        date = new Date();
        return COUNTRY[(date.getHours() - date.getUTCHours() + 24) % 24];
    };
    AppStoreClient.getItunesData = function(callback, errorcallback) {
        var IOS_URL, client, cur, url;
        cur = require("AppStoreClient").getTzOff();
        IOS_URL = "http://itunes.apple.com/search?term=tsuyoshi+hyuga&country=" + cur + "&media=software&entity=software";
        url = IOS_URL;
        client = Ti.Network.createHTTPClient({
            onload: function() {
                var data, json;
                json = JSON.parse(this.responseText);
                data = json.results;
                data = _.filter(data, function(obj) {
                    return 0 === obj.price;
                });
                data = _.sortBy(data, function(item) {
                    return Number(item.releaseDate);
                });
                data = _.filter(data, function(obj) {
                    return obj.bundleId !== Ti.App.id;
                });
                return callback(data);
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