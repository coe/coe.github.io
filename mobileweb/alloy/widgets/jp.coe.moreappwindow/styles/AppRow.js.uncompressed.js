function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "jp.coe.moreappwindow/" + s : s.substring(0, index) + "/jp.coe.moreappwindow/" + s.substring(index + 1);
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
    priority: 10000.0009,
    key: "app_info",
    style: {
        ellipsize: true,
        horizontalWrap: false,
        width: Ti.UI.FILL,
        wordWrap: false,
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT
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
    priority: 100000.0003,
    key: "row",
    style: {
        height: 60
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
}, {
    isId: true,
    priority: 100000.0004,
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
        width: Ti.UI.FILL,
        height: 60,
        right: 0,
        touchEnabled: false
    }
}, {
    isId: true,
    priority: 100000.0006,
    key: "apptitle",
    style: {
        top: 0,
        left: 0,
        right: 0
    }
}, {
    isId: true,
    priority: 100000.0007,
    key: "price",
    style: {
        right: 0,
        width: 80,
        bottom: 0
    }
}, {
    isId: true,
    priority: 100000.0008,
    key: "genre",
    style: {
        left: 0,
        right: 80,
        bottom: 0
    }
} ];