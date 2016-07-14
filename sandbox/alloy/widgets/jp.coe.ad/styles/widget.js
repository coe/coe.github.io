function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "jp.coe.ad/" + s : s.substring(0, index) + "/jp.coe.ad/" + s.substring(index + 1);
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
    isClass: true,
    priority: 10000.0002,
    key: "ad",
    style: {}
}, {
    isClass: true,
    priority: 10000.0007,
    key: "icon",
    style: {
        height: 24,
        width: 24
    }
}, {
    isId: true,
    priority: 100000.0002,
    key: "ad",
    style: {
        top: 0
    }
}, {
    isId: true,
    priority: 100000.0003,
    key: "container",
    style: {
        bottom: 50
    }
}, {
    isId: true,
    priority: 100000.0008,
    key: "adview",
    style: {
        bottom: 0
    }
}, {
    isId: true,
    queries: {
        formFactor: "isHandheld"
    },
    priority: 100011.0004,
    key: "container",
    style: {
        bottom: 50
    }
} ];