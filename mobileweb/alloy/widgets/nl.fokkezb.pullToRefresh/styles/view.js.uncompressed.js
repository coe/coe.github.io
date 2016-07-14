function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.pullToRefresh/" + s : s.substring(0, index) + "/nl.fokkezb.pullToRefresh/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isClass: true,
    priority: 10000.0002,
    key: "googleplus_button",
    style: {
        text: '<script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script>\n<g:plusone></g:plusone>\n<!-- +1 ボタン を表示したい位置に次のタグを貼り付けてください。 -->\n<div class="g-plusone" data-annotation="inline" data-width="300"></div>\n\n<!-- 最後の +1 ボタン タグの後に次のタグを貼り付けてください。 -->\n<script type="text/javascript">\n  window.___gcfg = {lang: \'ja\'};\n\n  (function() {\n    var po = document.createElement(\'script\'); po.type = \'text/javascript\'; po.async = true;\n    po.src = \'https://apis.google.com/js/platform.js\';\n    var s = document.getElementsByTagName(\'script\')[0]; s.parentNode.insertBefore(po, s);\n  })();\n</script>'
    }
}, {
    isClass: true,
    priority: 10000.0012,
    key: "ptr",
    style: {
        width: Ti.UI.FILL,
        height: 51,
        backgroundColor: "#F5F8FA"
    }
}, {
    isClass: true,
    priority: 10000.0013,
    key: "ptrCenter",
    style: {
        bottom: 11,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        visible: false
    }
}, {
    isClass: true,
    priority: 10000.0014,
    key: "ptrArrow",
    style: {
        left: 8,
        width: 12,
        height: 30,
        image: WPATH("/images/clean.png")
    }
}, {
    isClass: true,
    priority: 10000.0015,
    key: "ptrIndicator",
    style: {
        left: 0,
        style: Ti.UI.ActivityIndicatorStyle.DARK
    }
}, {
    isClass: true,
    priority: 10000.0017,
    key: "ptrText",
    style: {
        left: 30,
        wordWrap: false,
        color: "#8899A6",
        font: {
            fontSize: 13
        }
    }
}, {
    isClass: true,
    priority: 10000.0018,
    key: "ptrLine",
    style: {
        bottom: 0,
        height: 1,
        width: Ti.UI.FILL,
        backgroundColor: "#E1E8ED"
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
    priority: 100000.0003,
    key: "apps",
    style: {
        bottom: 60
    }
}, {
    isId: true,
    priority: 100000.0004,
    key: "buttons",
    style: {
        bottom: 0,
        height: 60,
        right: 0,
        layout: "vertical"
    }
} ];