function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "jp.coe.moreappwindow/" + s : s.substring(0, index) + "/jp.coe.moreappwindow/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.001,
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
    priority: 10000.0002,
    key: "googleplus_button",
    style: {
        text: '<script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script>\n<g:plusone></g:plusone>\n<!-- +1 ボタン を表示したい位置に次のタグを貼り付けてください。 -->\n<div class="g-plusone" data-annotation="inline" data-width="300"></div>\n\n<!-- 最後の +1 ボタン タグの後に次のタグを貼り付けてください。 -->\n<script type="text/javascript">\n  window.___gcfg = {lang: \'ja\'};\n\n  (function() {\n    var po = document.createElement(\'script\'); po.type = \'text/javascript\'; po.async = true;\n    po.src = \'https://apis.google.com/js/platform.js\';\n    var s = document.getElementsByTagName(\'script\')[0]; s.parentNode.insertBefore(po, s);\n  })();\n</script>'
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
}, {
    isId: true,
    priority: 100000.0011,
    key: "label",
    style: {
        top: 0,
        height: 50
    }
}, {
    isId: true,
    priority: 100000.0012,
    key: "table",
    style: {
        top: 0,
        separatorColor: "black"
    }
}, {
    isId: true,
    priority: 100000.0013,
    key: "loading_view",
    style: {
        backgroundColor: "black",
        zIndex: 100
    }
} ];