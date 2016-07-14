function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "jp.coe.moreappwindow/" + s : s.substring(0, index) + "/jp.coe.moreappwindow/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isClass: true,
    priority: 10000.0004,
    key: "app_info",
    style: {}
}, {
    isId: true,
    priority: 100000.0001,
    key: "app_window",
    style: {
        backgroundColor: "#EEE"
    }
}, {
    isId: true,
    priority: 100000.0003,
    key: "appicon",
    style: {
        left: 0,
        width: 48,
        height: 48
    }
}, {
    isId: true,
    priority: 100000.0005,
    key: "label_view",
    style: {
        left: 60,
        width: Ti.UI.SIZE,
        height: 48,
        right: 48
    }
}, {
    isId: true,
    priority: 100000.0006,
    key: "apptitle",
    style: {
        top: 0,
        left: 0
    }
}, {
    isId: true,
    priority: 100000.0007,
    key: "price",
    style: {
        right: 0,
        height: 24,
        bottom: 0
    }
} ];