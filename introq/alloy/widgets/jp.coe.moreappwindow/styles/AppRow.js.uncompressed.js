function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "jp.coe.moreappwindow/" + s : s.substring(0, index) + "/jp.coe.moreappwindow/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0001,
    key: "Window",
    style: {
        backgroundColor: "#fff"
    }
}, {
    isApi: true,
    priority: 1000.0002,
    key: "Label",
    style: {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "black",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center"
    }
}, {
    isApi: true,
    queries: {
        formFactor: "isTablet"
    },
    priority: 1011.0003,
    key: "Label",
    style: {
        font: {
            fontSize: 32
        }
    }
}, {
    isApi: true,
    queries: {
        formFactor: "isTablet"
    },
    priority: 1011.0004,
    key: "Button",
    style: {
        font: {
            fontSize: 32
        }
    }
}, {
    isClass: true,
    priority: 10000.0006,
    key: "app_info",
    style: {}
}, {
    isId: true,
    priority: 100000.0005,
    key: "adicon",
    style: {
        bottom: 0,
        height: "75dp"
    }
}, {
    isId: true,
    priority: 100000.0005,
    key: "appicon",
    style: {
        left: 0,
        width: 48,
        height: 48
    }
}, {
    isId: true,
    priority: 100000.0007,
    key: "label_view",
    style: {
        left: 60,
        width: Ti.UI.FILL,
        height: 48,
        right: 0
    }
}, {
    isId: true,
    priority: 100000.0008,
    key: "apptitle",
    style: {
        top: 0,
        left: 0,
        right: 0
    }
}, {
    isId: true,
    priority: 100000.0009,
    key: "price",
    style: {
        right: 0,
        height: 24,
        bottom: 0
    }
} ];