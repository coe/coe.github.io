function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "jp.coe.adicon/" + s : s.substring(0, index) + "/jp.coe.adicon/" + s.substring(index + 1);
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
    priority: 1000.0004,
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
    isId: true,
    priority: 100000.0005,
    key: "adicon",
    style: {
        bottom: 0,
        height: "75dp"
    }
} ];