function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "jp.coe.appview/" + s : s.substring(0, index) + "/jp.coe.appview/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0017,
    key: "Label",
    style: {
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.002,
    key: "applink_button",
    style: {}
}, {
    isId: true,
    priority: 100000.0018,
    key: "scrollableView",
    style: {}
}, {
    isId: true,
    priority: 100000.0019,
    key: "footer",
    style: {
        height: 60,
        layout: "horizontal"
    }
} ];