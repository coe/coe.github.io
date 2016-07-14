function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "jp.coe.colorslider/" + s : s.substring(0, index) + "/jp.coe.colorslider/" + s.substring(index + 1);
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
    priority: 1000.0009,
    key: "Button",
    style: {}
}, {
    isApi: true,
    priority: 1000.001,
    key: "Label",
    style: {
        left: 0,
        color: "blue",
        width: 20
    }
}, {
    isClass: true,
    priority: 10000.0007,
    key: "icon",
    style: {
        height: 24,
        width: 24
    }
}, {
    isClass: true,
    priority: 10000.0014,
    key: "sliderview",
    style: {
        height: "33%"
    }
}, {
    isClass: true,
    priority: 10000.0015,
    key: "slider",
    style: {
        left: 20,
        min: 0,
        max: 255
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
    priority: 100000.0011,
    key: "color_button",
    style: {
        title: L("preset", "preset")
    }
}, {
    isId: true,
    priority: 100000.0012,
    key: "button_zone",
    style: {
        top: 0,
        height: 72
    }
}, {
    isId: true,
    priority: 100000.0013,
    key: "slider_zone",
    style: {
        layout: "vertical",
        top: 72,
        bottom: 72
    }
}, {
    isId: true,
    priority: 100000.0016,
    key: "done_button",
    style: {
        bottom: 0,
        title: L("ime_action_done", "done")
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