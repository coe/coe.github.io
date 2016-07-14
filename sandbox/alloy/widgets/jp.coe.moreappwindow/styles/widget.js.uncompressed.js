function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "jp.coe.moreappwindow/" + s : s.substring(0, index) + "/jp.coe.moreappwindow/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0008,
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
    isId: true,
    priority: 100000.0001,
    key: "app_window",
    style: {
        backgroundColor: "#EEE"
    }
}, {
    isId: true,
    priority: 100000.0009,
    key: "label",
    style: {
        top: 0,
        height: 50
    }
}, {
    isId: true,
    priority: 100000.001,
    key: "table",
    style: {
        top: 50
    }
}, {
    isId: true,
    priority: 100000.0011,
    key: "loading_view",
    style: {
        backgroundColor: "black",
        zIndex: 100
    }
} ];