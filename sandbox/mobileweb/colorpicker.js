function cutHex(h) {
    return "#" == h.charAt(0) ? h.substring(1, 7) : h;
}

function hexToR(h) {
    return parseInt(cutHex(h).substring(0, 2), 16);
}

function hexToG(h) {
    return parseInt(cutHex(h).substring(2, 4), 16);
}

function hexToB(h) {
    return parseInt(cutHex(h).substring(4, 6), 16);
}

function hexToRgb(hex) {
    return {
        r: hexToR(hex),
        g: hexToG(hex),
        b: hexToB(hex)
    };
}

function hueToRgb(m1, m2, hue) {
    var v;
    0 > hue ? hue += 1 : hue > 1 && (hue -= 1);
    v = 1 > 6 * hue ? m1 + 6 * (m2 - m1) * hue : 1 > 2 * hue ? m2 : 2 > 3 * hue ? m1 + 6 * (m2 - m1) * (2 / 3 - hue) : m1;
    return 255 * v;
}

function hslToRgb(h, s, l) {
    var m1, m2, hue;
    var r, g, b;
    s /= 100;
    l /= 100;
    if (0 == s) r = g = b = 255 * l; else {
        m2 = .5 >= l ? l * (s + 1) : l + s - l * s;
        m1 = 2 * l - m2;
        hue = h / 360;
        r = Math.round(hueToRgb(m1, m2, hue + 1 / 3));
        g = Math.round(hueToRgb(m1, m2, hue));
        b = Math.round(hueToRgb(m1, m2, hue - 1 / 3));
    }
    return {
        r: r,
        g: g,
        b: b
    };
}

function intToHex(N) {
    if (null == N) return "00";
    if (0 == N || isNaN(N)) return "00";
    N = Math.max(0, N);
    N = Math.min(N, 255);
    N = Math.round(N);
    return "0123456789ABCDEF".charAt((N - N % 16) / 16) + "0123456789ABCDEF".charAt(N % 16);
}

function rgbToHex(color) {
    return intToHex(color.r) + intToHex(color.g) + intToHex(color.b);
}

function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;
    if (max == min) h = s = 0; else {
        var d = max - min;
        s = l > .5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d + (b > g ? 6 : 0);
            break;

          case g:
            h = (b - r) / d + 2;
            break;

          case b:
            h = (r - g) / d + 4;
        }
        h /= 6;
    }
    return {
        h: Math.round(360 * h),
        s: Math.round(100 * s),
        l: Math.round(100 * l)
    };
}

exports.createColorPicker = function(params) {
    var h, s, l;
    if (params.hexColor) {
        var rgb = hexToRgb(params.hexColor);
        Ti.API.log("debug", rgb);
        var hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
        Ti.API.log("debug", hsl);
        h = hsl.h;
        s = hsl.s;
        l = hsl.l;
    } else {
        h = 0;
        s = 100;
        l = 50;
    }
    var returnView = Ti.UI.createWindow();
    var LImage = Ti.UI.createImageView({
        top: 370,
        width: 300,
        height: 30,
        backgroundColor: "#FFFFFF",
        backgroundGradient: {
            type: "linear",
            colors: [ "#000001", rgbToHex(hslToRgb(h, s, 50)), "#FFFFFF" ],
            startPoint: {
                x: 0,
                y: 30
            },
            endPoint: {
                x: 300,
                y: 0
            }
        }
    });
    var lCrossHair = Ti.UI.createImageView({
        image: "lcrosshair.png",
        height: 6,
        width: 9,
        top: LImage.top + LImage.height + 5
    });
    var HSImage = Titanium.UI.createImageView({
        image: "colormap.png",
        height: 256,
        width: 300,
        top: 109,
        left: 10
    });
    var hsCrossHair = Ti.UI.createImageView({
        image: "hscrosshair.gif",
        width: 11,
        height: 11
    });
    LImage.addEventListener("click", function(e) {
        l = Math.round(100 * (e.x / LImage.width));
        l > 100 && (l = 100);
        0 > l && (l = 0);
        var hexColor = rgbToHex(hslToRgb(h, s, l));
        Ti.API.debug("LImage click " + hexColor);
        returnView.backgroundColor = "#" + hexColor;
        var x = e.x;
        0 > x && (x = 0);
        x > LImage.width && (x = LImage.width);
        lCrossHair.left = x + (10 - lCrossHair.width / 2);
    });
    LImage.addEventListener("touchmove", function(e) {
        l = Math.round(100 * (e.x / LImage.width));
        l > 100 && (l = 100);
        0 > l && (l = 0);
        var hexColor = rgbToHex(hslToRgb(h, s, l));
        returnView.backgroundColor = "#" + hexColor;
        var x = e.x;
        0 > x && (x = 0);
        x > LImage.width && (x = LImage.width);
        lCrossHair.left = x + (10 - lCrossHair.width / 2);
    });
    HSImage.addEventListener("touchmove", function(e) {
        h = Math.round(359 * (e.x / HSImage.width));
        s = Math.round(100 - 100 * (e.y / HSImage.height));
        0 > h ? h = 0 : h > 359 && (h = 359);
        0 > s ? s = 0 : s > 100 && (s = 100);
        var hexColor = rgbToHex(hslToRgb(h, s, l));
        var hexColorGradient = rgbToHex(hslToRgb(h, s, 50));
        returnView.backgroundColor = "#" + hexColor;
        LImage.backgroundGradient = {
            type: "linear",
            colors: [ "#000001", "#" + hexColorGradient, "#FFFFFF" ],
            startPoint: {
                x: 0,
                y: 30
            },
            endPoint: {
                x: 300,
                y: 0
            }
        };
        var x = e.x;
        var y = e.y;
        0 > x && (x = 0);
        x > HSImage.width && (x = HSImage.width);
        0 > y && (y = 0);
        y > HSImage.height && (y = HSImage.height);
        hsCrossHair.left = x + (HSImage.left - hsCrossHair.width / 2);
        hsCrossHair.top = y + (HSImage.top - hsCrossHair.width / 2);
    });
    HSImage.addEventListener("click", function(e) {
        h = Math.round(359 * (e.x / HSImage.width));
        Ti.API.log("debug", "h: " + h);
        s = Math.round(100 - 100 * (e.y / HSImage.height));
        Ti.API.log("debug", "s: " + s);
        0 > h ? h = 0 : h > 359 && (h = 359);
        0 > s ? s = 0 : s > 100 && (s = 100);
        var hexColor = rgbToHex(hslToRgb(h, s, l));
        var hexColorGradient = rgbToHex(hslToRgb(h, s, 50));
        returnView.backgroundColor = "#" + hexColor;
        LImage.backgroundGradient = {
            type: "linear",
            colors: [ "#000001", "#" + hexColorGradient, "#FFFFFF" ],
            startPoint: {
                x: 0,
                y: 30
            },
            endPoint: {
                x: 300,
                y: 0
            }
        };
        var x = e.x;
        var y = e.y;
        0 > x && (x = 0);
        x > HSImage.width && (x = HSImage.width);
        0 > y && (y = 0);
        y > HSImage.height && (y = HSImage.height);
        hsCrossHair.left = x + (HSImage.left - hsCrossHair.width / 2);
        hsCrossHair.top = y + (HSImage.top - hsCrossHair.width / 2);
    });
    var doneButton = Ti.UI.createButton({
        title: L("ime_action_done", "Select"),
        top: 10,
        height: 40
    });
    doneButton.addEventListener("click", function() {
        var returnRGB = hslToRgb(h, s, l);
        var returnHex = rgbToHex(returnRGB);
        returnView.fireEvent("colorselect", {
            hexColor: returnHex,
            hexColorWithHash: "#" + returnHex,
            hslColor: {
                h: h,
                s: s,
                l: l
            },
            rgbColor: returnRGB
        });
        returnView.hide();
    });
    var cancelButton = Ti.UI.createButton({
        title: L("cancel", "Cancel"),
        top: 55,
        height: 40
    });
    cancelButton.addEventListener("click", function() {
        returnView.fireEvent("selectcancel");
        returnView.hide();
    });
    returnView.add(HSImage);
    returnView.add(LImage);
    returnView.add(doneButton);
    returnView.add(cancelButton);
    returnView.add(lCrossHair);
    returnView.add(hsCrossHair);
    returnView.backgroundColor = rgbToHex(hslToRgb(h, s, l));
    lCrossHair.left = l * (LImage.width / 100) + (10 - lCrossHair.width / 2);
    if (0 == l || 100 == l) {
        hsCrossHair.left = HSImage.width + HSImage.left - hsCrossHair.width / 2;
        hsCrossHair.top = HSImage.height + HSImage.top - hsCrossHair.height / 2;
    } else {
        hsCrossHair.left = h * (HSImage.width / 360) + (HSImage.left - hsCrossHair.width / 2);
        hsCrossHair.top = s * (HSImage.height / 100) + (HSImage.top - hsCrossHair.height / 2) - 100;
    }
    Ti.API.log(hsCrossHair.top);
    return returnView;
};