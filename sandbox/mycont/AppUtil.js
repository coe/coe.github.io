var AppUtil;

module.exports = AppUtil = function() {
    function AppUtil() {}
    AppUtil.name = "AppUtil";
    AppUtil.FONT_LOVE = "S2G Love font";
    AppUtil.fontChangeJp = function(plainname) {
        var tmpstr;
        tmpstr = plainname;
        plainname = this.changeStringsXmlKey(plainname);
        Ti.API.debug("" + plainname + ":" + tmpstr);
        return L(plainname, tmpstr);
    };
    AppUtil.changeStringsXmlKey = function(key) {
        key = key.replace(/\s/g, "_");
        key = key.replace(/^[0-9]*/g, "");
        return key;
    };
    return AppUtil;
}();