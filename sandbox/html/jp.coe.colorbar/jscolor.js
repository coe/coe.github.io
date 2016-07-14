var jscolor = {
    dir: "",
    bindClass: "color",
    binding: true,
    preloading: true,
    install: function() {
        jscolor.addEvent(window, "load", jscolor.init);
    },
    init: function() {
        jscolor.binding && jscolor.bind();
        jscolor.preloading && jscolor.preload();
    },
    getDir: function() {
        if (!jscolor.dir) {
            var detected = jscolor.detectDir();
            jscolor.dir = false !== detected ? detected : "jscolor/";
        }
        return jscolor.dir;
    },
    detectDir: function() {
        var base = location.href;
        var e = document.getElementsByTagName("base");
        for (var i = 0; e.length > i; i += 1) e[i].href && (base = e[i].href);
        var e = document.getElementsByTagName("script");
        for (var i = 0; e.length > i; i += 1) if (e[i].src && /(^|\/)jscolor\.js([?#].*)?$/i.test(e[i].src)) {
            var src = new jscolor.URI(e[i].src);
            var srcAbs = src.toAbsolute(base);
            srcAbs.path = srcAbs.path.replace(/[^\/]+$/, "");
            srcAbs.query = null;
            srcAbs.fragment = null;
            return srcAbs.toString();
        }
        return false;
    },
    bind: function() {
        var matchClass = new RegExp("(^|\\s)(" + jscolor.bindClass + ")\\s*(\\{[^}]*\\})?", "i");
        var e = document.getElementsByTagName("input");
        for (var i = 0; e.length > i; i += 1) {
            var m;
            if (!e[i].color && e[i].className && (m = e[i].className.match(matchClass))) {
                var prop = {};
                if (m[3]) try {
                    prop = new Function("return (" + m[3] + ")")();
                } catch (eInvalidProp) {}
                e[i].color = new jscolor.color(e[i], prop);
            }
        }
    },
    preload: function() {
        for (var fn in jscolor.imgRequire) jscolor.imgRequire.hasOwnProperty(fn) && jscolor.loadImage(fn);
    },
    images: {
        pad: [ 181, 101 ],
        sld: [ 16, 101 ],
        cross: [ 15, 15 ],
        arrow: [ 7, 11 ]
    },
    imgRequire: {},
    imgLoaded: {},
    requireImage: function(filename) {
        jscolor.imgRequire[filename] = true;
    },
    loadImage: function(filename) {
        if (!jscolor.imgLoaded[filename]) {
            jscolor.imgLoaded[filename] = new Image();
            jscolor.imgLoaded[filename].src = jscolor.getDir() + filename;
        }
    },
    fetchElement: function(mixed) {
        return "string" == typeof mixed ? document.getElementById(mixed) : mixed;
    },
    addEvent: function(el, evnt, func) {
        el.addEventListener ? el.addEventListener(evnt, func, false) : el.attachEvent && el.attachEvent("on" + evnt, func);
    },
    fireEvent: function(el, evnt) {
        if (!el) return;
        if (document.createEvent) {
            var ev = document.createEvent("HTMLEvents");
            ev.initEvent(evnt, true, true);
            el.dispatchEvent(ev);
        } else if (document.createEventObject) {
            var ev = document.createEventObject();
            el.fireEvent("on" + evnt, ev);
        } else el["on" + evnt] && el["on" + evnt]();
    },
    getElementPos: function(e) {
        var e1 = e, e2 = e;
        var x = 0, y = 0;
        if (e1.offsetParent) do {
            x += e1.offsetLeft;
            y += e1.offsetTop;
        } while (e1 = e1.offsetParent);
        while ((e2 = e2.parentNode) && "BODY" !== e2.nodeName.toUpperCase()) {
            x -= e2.scrollLeft;
            y -= e2.scrollTop;
        }
        return [ x, y ];
    },
    getElementSize: function(e) {
        return [ e.offsetWidth, e.offsetHeight ];
    },
    getRelMousePos: function(e) {
        var x = 0, y = 0;
        e || (e = window.event);
        if ("number" == typeof e.offsetX) {
            x = e.offsetX;
            y = e.offsetY;
        } else if ("number" == typeof e.layerX) {
            x = e.layerX;
            y = e.layerY;
        }
        return {
            x: x,
            y: y
        };
    },
    getViewPos: function() {
        return "number" == typeof window.pageYOffset ? [ window.pageXOffset, window.pageYOffset ] : document.body && (document.body.scrollLeft || document.body.scrollTop) ? [ document.body.scrollLeft, document.body.scrollTop ] : document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop) ? [ document.documentElement.scrollLeft, document.documentElement.scrollTop ] : [ 0, 0 ];
    },
    getViewSize: function() {
        return "number" == typeof window.innerWidth ? [ window.innerWidth, window.innerHeight ] : document.body && (document.body.clientWidth || document.body.clientHeight) ? [ document.body.clientWidth, document.body.clientHeight ] : document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight) ? [ document.documentElement.clientWidth, document.documentElement.clientHeight ] : [ 0, 0 ];
    },
    URI: function(uri) {
        function removeDotSegments(path) {
            var out = "";
            while (path) if ("../" === path.substr(0, 3) || "./" === path.substr(0, 2)) path = path.replace(/^\.+/, "").substr(1); else if ("/./" === path.substr(0, 3) || "/." === path) path = "/" + path.substr(3); else if ("/../" === path.substr(0, 4) || "/.." === path) {
                path = "/" + path.substr(4);
                out = out.replace(/\/?[^\/]*$/, "");
            } else if ("." === path || ".." === path) path = ""; else {
                var rm = path.match(/^\/?[^\/]*/)[0];
                path = path.substr(rm.length);
                out += rm;
            }
            return out;
        }
        this.scheme = null;
        this.authority = null;
        this.path = "";
        this.query = null;
        this.fragment = null;
        this.parse = function(uri) {
            var m = uri.match(/^(([A-Za-z][0-9A-Za-z+.-]*)(:))?((\/\/)([^\/?#]*))?([^?#]*)((\?)([^#]*))?((#)(.*))?/);
            this.scheme = m[3] ? m[2] : null;
            this.authority = m[5] ? m[6] : null;
            this.path = m[7];
            this.query = m[9] ? m[10] : null;
            this.fragment = m[12] ? m[13] : null;
            return this;
        };
        this.toString = function() {
            var result = "";
            null !== this.scheme && (result = result + this.scheme + ":");
            null !== this.authority && (result = result + "//" + this.authority);
            null !== this.path && (result += this.path);
            null !== this.query && (result = result + "?" + this.query);
            null !== this.fragment && (result = result + "#" + this.fragment);
            return result;
        };
        this.toAbsolute = function(base) {
            var base = new jscolor.URI(base);
            var r = this;
            var t = new jscolor.URI();
            if (null === base.scheme) return false;
            null !== r.scheme && r.scheme.toLowerCase() === base.scheme.toLowerCase() && (r.scheme = null);
            if (null !== r.scheme) {
                t.scheme = r.scheme;
                t.authority = r.authority;
                t.path = removeDotSegments(r.path);
                t.query = r.query;
            } else {
                if (null !== r.authority) {
                    t.authority = r.authority;
                    t.path = removeDotSegments(r.path);
                    t.query = r.query;
                } else {
                    if ("" === r.path) {
                        t.path = base.path;
                        t.query = null !== r.query ? r.query : base.query;
                    } else {
                        if ("/" === r.path.substr(0, 1)) t.path = removeDotSegments(r.path); else {
                            t.path = null !== base.authority && "" === base.path ? "/" + r.path : base.path.replace(/[^\/]+$/, "") + r.path;
                            t.path = removeDotSegments(t.path);
                        }
                        t.query = r.query;
                    }
                    t.authority = base.authority;
                }
                t.scheme = base.scheme;
            }
            t.fragment = r.fragment;
            return t;
        };
        uri && this.parse(uri);
    },
    color: function(target, prop) {
        function RGB_HSV(r, g, b) {
            var n = Math.min(Math.min(r, g), b);
            var v = Math.max(Math.max(r, g), b);
            var m = v - n;
            if (0 === m) return [ null, 0, v ];
            var h = r === n ? 3 + (b - g) / m : g === n ? 5 + (r - b) / m : 1 + (g - r) / m;
            return [ 6 === h ? 0 : h, m / v, v ];
        }
        function HSV_RGB(h, s, v) {
            if (null === h) return [ v, v, v ];
            var i = Math.floor(h);
            var f = i % 2 ? h - i : 1 - (h - i);
            var m = v * (1 - s);
            var n = v * (1 - s * f);
            switch (i) {
              case 6:
              case 0:
                return [ v, n, m ];

              case 1:
                return [ n, v, m ];

              case 2:
                return [ m, v, n ];

              case 3:
                return [ m, n, v ];

              case 4:
                return [ n, m, v ];

              case 5:
                return [ v, m, n ];
            }
        }
        function removePicker() {
            delete jscolor.picker.owner;
            document.getElementsByTagName("body")[0].removeChild(jscolor.picker.boxB);
        }
        function drawPicker(x, y) {
            function setBtnBorder() {
                var insetColors = THIS.pickerInsetColor.split(/\s+/);
                var pickerOutsetColor = 2 > insetColors.length ? insetColors[0] : insetColors[1] + " " + insetColors[0] + " " + insetColors[0] + " " + insetColors[1];
                p.btn.style.borderColor = pickerOutsetColor;
            }
            if (!jscolor.picker) {
                jscolor.picker = {
                    box: document.createElement("div"),
                    boxB: document.createElement("div"),
                    pad: document.createElement("div"),
                    padB: document.createElement("div"),
                    padM: document.createElement("div"),
                    sld: document.createElement("div"),
                    sldB: document.createElement("div"),
                    sldM: document.createElement("div"),
                    btn: document.createElement("div"),
                    btnS: document.createElement("span"),
                    btnT: document.createTextNode(THIS.pickerCloseText)
                };
                for (var i = 0, segSize = 4; jscolor.images.sld[1] > i; i += segSize) {
                    var seg = document.createElement("div");
                    seg.style.height = segSize + "px";
                    seg.style.fontSize = "1px";
                    seg.style.lineHeight = "0";
                    jscolor.picker.sld.appendChild(seg);
                }
                jscolor.picker.sldB.appendChild(jscolor.picker.sld);
                jscolor.picker.box.appendChild(jscolor.picker.sldB);
                jscolor.picker.box.appendChild(jscolor.picker.sldM);
                jscolor.picker.padB.appendChild(jscolor.picker.pad);
                jscolor.picker.box.appendChild(jscolor.picker.padB);
                jscolor.picker.box.appendChild(jscolor.picker.padM);
                jscolor.picker.btnS.appendChild(jscolor.picker.btnT);
                jscolor.picker.btn.appendChild(jscolor.picker.btnS);
                jscolor.picker.box.appendChild(jscolor.picker.btn);
                jscolor.picker.boxB.appendChild(jscolor.picker.box);
            }
            var p = jscolor.picker;
            p.box.onmouseup = p.box.onmouseout = function() {
                target.focus();
            };
            p.box.onmousedown = function() {
                abortBlur = true;
            };
            p.box.onmousemove = function(e) {
                if (holdPad || holdSld) {
                    holdPad && setPad(e);
                    holdSld && setSld(e);
                    document.selection ? document.selection.empty() : window.getSelection && window.getSelection().removeAllRanges();
                    dispatchImmediateChange();
                }
            };
            if ("ontouchstart" in window) {
                var handle_touchmove = function(e) {
                    var event = {
                        offsetX: e.touches[0].pageX - touchOffset.X,
                        offsetY: e.touches[0].pageY - touchOffset.Y
                    };
                    if (holdPad || holdSld) {
                        holdPad && setPad(event);
                        holdSld && setSld(event);
                        dispatchImmediateChange();
                    }
                    e.stopPropagation();
                    e.preventDefault();
                };
                p.box.removeEventListener("touchmove", handle_touchmove, false);
                p.box.addEventListener("touchmove", handle_touchmove, false);
            }
            p.padM.onmouseup = p.padM.onmouseout = function() {
                if (holdPad) {
                    holdPad = false;
                    jscolor.fireEvent(valueElement, "change");
                }
            };
            p.padM.onmousedown = function(e) {
                switch (modeID) {
                  case 0:
                    0 === THIS.hsv[2] && THIS.fromHSV(null, null, 1);
                    break;

                  case 1:
                    0 === THIS.hsv[1] && THIS.fromHSV(null, 1, null);
                }
                holdSld = false;
                holdPad = true;
                setPad(e);
                dispatchImmediateChange();
            };
            "ontouchstart" in window && p.padM.addEventListener("touchstart", function(e) {
                touchOffset = {
                    X: e.target.offsetParent.offsetLeft,
                    Y: e.target.offsetParent.offsetTop
                };
                this.onmousedown({
                    offsetX: e.touches[0].pageX - touchOffset.X,
                    offsetY: e.touches[0].pageY - touchOffset.Y
                });
            });
            p.sldM.onmouseup = p.sldM.onmouseout = function() {
                if (holdSld) {
                    holdSld = false;
                    jscolor.fireEvent(valueElement, "change");
                }
            };
            p.sldM.onmousedown = function(e) {
                holdPad = false;
                holdSld = true;
                setSld(e);
                dispatchImmediateChange();
            };
            "ontouchstart" in window && p.sldM.addEventListener("touchstart", function(e) {
                touchOffset = {
                    X: e.target.offsetParent.offsetLeft,
                    Y: e.target.offsetParent.offsetTop
                };
                this.onmousedown({
                    offsetX: e.touches[0].pageX - touchOffset.X,
                    offsetY: e.touches[0].pageY - touchOffset.Y
                });
            });
            var dims = getPickerDims(THIS);
            p.box.style.width = dims[0] + "px";
            p.box.style.height = dims[1] + "px";
            p.boxB.style.position = "absolute";
            p.boxB.style.clear = "both";
            p.boxB.style.left = x + "px";
            p.boxB.style.top = y + "px";
            p.boxB.style.zIndex = THIS.pickerZIndex;
            p.boxB.style.border = THIS.pickerBorder + "px solid";
            p.boxB.style.borderColor = THIS.pickerBorderColor;
            p.boxB.style.background = THIS.pickerFaceColor;
            p.pad.style.width = jscolor.images.pad[0] + "px";
            p.pad.style.height = jscolor.images.pad[1] + "px";
            p.padB.style.position = "absolute";
            p.padB.style.left = THIS.pickerFace + "px";
            p.padB.style.top = THIS.pickerFace + "px";
            p.padB.style.border = THIS.pickerInset + "px solid";
            p.padB.style.borderColor = THIS.pickerInsetColor;
            p.padM.style.position = "absolute";
            p.padM.style.left = "0";
            p.padM.style.top = "0";
            p.padM.style.width = THIS.pickerFace + 2 * THIS.pickerInset + jscolor.images.pad[0] + jscolor.images.arrow[0] + "px";
            p.padM.style.height = p.box.style.height;
            p.padM.style.cursor = "crosshair";
            p.sld.style.overflow = "hidden";
            p.sld.style.width = jscolor.images.sld[0] + "px";
            p.sld.style.height = jscolor.images.sld[1] + "px";
            p.sldB.style.display = THIS.slider ? "block" : "none";
            p.sldB.style.position = "absolute";
            p.sldB.style.right = THIS.pickerFace + "px";
            p.sldB.style.top = THIS.pickerFace + "px";
            p.sldB.style.border = THIS.pickerInset + "px solid";
            p.sldB.style.borderColor = THIS.pickerInsetColor;
            p.sldM.style.display = THIS.slider ? "block" : "none";
            p.sldM.style.position = "absolute";
            p.sldM.style.right = "0";
            p.sldM.style.top = "0";
            p.sldM.style.width = jscolor.images.sld[0] + jscolor.images.arrow[0] + THIS.pickerFace + 2 * THIS.pickerInset + "px";
            p.sldM.style.height = p.box.style.height;
            try {
                p.sldM.style.cursor = "pointer";
            } catch (eOldIE) {
                p.sldM.style.cursor = "hand";
            }
            p.btn.style.display = THIS.pickerClosable ? "block" : "none";
            p.btn.style.position = "absolute";
            p.btn.style.left = THIS.pickerFace + "px";
            p.btn.style.bottom = THIS.pickerFace + "px";
            p.btn.style.padding = "0 15px";
            p.btn.style.height = "18px";
            p.btn.style.border = THIS.pickerInset + "px solid";
            setBtnBorder();
            p.btn.style.color = THIS.pickerButtonColor;
            p.btn.style.font = "12px sans-serif";
            p.btn.style.textAlign = "center";
            try {
                p.btn.style.cursor = "pointer";
            } catch (eOldIE) {
                p.btn.style.cursor = "hand";
            }
            p.btn.onmousedown = function() {
                THIS.hidePicker();
            };
            p.btnS.style.lineHeight = p.btn.style.height;
            switch (modeID) {
              case 0:
                var padImg = "hs.png";
                break;

              case 1:
                var padImg = "hv.png";
            }
            p.padM.style.backgroundImage = "url('" + jscolor.getDir() + "cross.gif')";
            p.padM.style.backgroundRepeat = "no-repeat";
            p.sldM.style.backgroundImage = "url('" + jscolor.getDir() + "arrow.gif')";
            p.sldM.style.backgroundRepeat = "no-repeat";
            p.pad.style.backgroundImage = "url('" + jscolor.getDir() + padImg + "')";
            p.pad.style.backgroundRepeat = "no-repeat";
            p.pad.style.backgroundPosition = "0 0";
            redrawPad();
            redrawSld();
            jscolor.picker.owner = THIS;
            document.getElementsByTagName("body")[0].appendChild(p.boxB);
        }
        function getPickerDims(o) {
            var dims = [ 2 * o.pickerInset + 2 * o.pickerFace + jscolor.images.pad[0] + (o.slider ? 2 * o.pickerInset + 2 * jscolor.images.arrow[0] + jscolor.images.sld[0] : 0), o.pickerClosable ? 4 * o.pickerInset + 3 * o.pickerFace + jscolor.images.pad[1] + o.pickerButtonHeight : 2 * o.pickerInset + 2 * o.pickerFace + jscolor.images.pad[1] ];
            return dims;
        }
        function redrawPad() {
            switch (modeID) {
              case 0:
                var yComponent = 1;
                break;

              case 1:
                var yComponent = 2;
            }
            var x = Math.round(THIS.hsv[0] / 6 * (jscolor.images.pad[0] - 1));
            var y = Math.round((1 - THIS.hsv[yComponent]) * (jscolor.images.pad[1] - 1));
            jscolor.picker.padM.style.backgroundPosition = THIS.pickerFace + THIS.pickerInset + x - Math.floor(jscolor.images.cross[0] / 2) + "px " + (THIS.pickerFace + THIS.pickerInset + y - Math.floor(jscolor.images.cross[1] / 2)) + "px";
            var seg = jscolor.picker.sld.childNodes;
            switch (modeID) {
              case 0:
                var rgb = HSV_RGB(THIS.hsv[0], THIS.hsv[1], 1);
                for (var i = 0; seg.length > i; i += 1) seg[i].style.backgroundColor = "rgb(" + 100 * rgb[0] * (1 - i / seg.length) + "%," + 100 * rgb[1] * (1 - i / seg.length) + "%," + 100 * rgb[2] * (1 - i / seg.length) + "%)";
                break;

              case 1:
                var rgb, s, c = [ THIS.hsv[2], 0, 0 ];
                var i = Math.floor(THIS.hsv[0]);
                var f = i % 2 ? THIS.hsv[0] - i : 1 - (THIS.hsv[0] - i);
                switch (i) {
                  case 6:
                  case 0:
                    rgb = [ 0, 1, 2 ];
                    break;

                  case 1:
                    rgb = [ 1, 0, 2 ];
                    break;

                  case 2:
                    rgb = [ 2, 0, 1 ];
                    break;

                  case 3:
                    rgb = [ 2, 1, 0 ];
                    break;

                  case 4:
                    rgb = [ 1, 2, 0 ];
                    break;

                  case 5:
                    rgb = [ 0, 2, 1 ];
                }
                for (var i = 0; seg.length > i; i += 1) {
                    s = 1 - 1 / (seg.length - 1) * i;
                    c[1] = c[0] * (1 - s * f);
                    c[2] = c[0] * (1 - s);
                    seg[i].style.backgroundColor = "rgb(" + 100 * c[rgb[0]] + "%," + 100 * c[rgb[1]] + "%," + 100 * c[rgb[2]] + "%)";
                }
            }
        }
        function redrawSld() {
            switch (modeID) {
              case 0:
                var yComponent = 2;
                break;

              case 1:
                var yComponent = 1;
            }
            var y = Math.round((1 - THIS.hsv[yComponent]) * (jscolor.images.sld[1] - 1));
            jscolor.picker.sldM.style.backgroundPosition = "0 " + (THIS.pickerFace + THIS.pickerInset + y - Math.floor(jscolor.images.arrow[1] / 2)) + "px";
        }
        function isPickerOwner() {
            return jscolor.picker && jscolor.picker.owner === THIS;
        }
        function blurTarget() {
            valueElement === target && THIS.importColor();
            THIS.pickerOnfocus && THIS.hidePicker();
        }
        function blurValue() {
            valueElement !== target && THIS.importColor();
        }
        function setPad(e) {
            var mpos = jscolor.getRelMousePos(e);
            var x = mpos.x - THIS.pickerFace - THIS.pickerInset;
            var y = mpos.y - THIS.pickerFace - THIS.pickerInset;
            switch (modeID) {
              case 0:
                THIS.fromHSV(x * (6 / (jscolor.images.pad[0] - 1)), 1 - y / (jscolor.images.pad[1] - 1), null, leaveSld);
                break;

              case 1:
                THIS.fromHSV(x * (6 / (jscolor.images.pad[0] - 1)), null, 1 - y / (jscolor.images.pad[1] - 1), leaveSld);
            }
        }
        function setSld(e) {
            var mpos = jscolor.getRelMousePos(e);
            var y = mpos.y - THIS.pickerFace - THIS.pickerInset;
            switch (modeID) {
              case 0:
                THIS.fromHSV(null, null, 1 - y / (jscolor.images.sld[1] - 1), leavePad);
                break;

              case 1:
                THIS.fromHSV(null, 1 - y / (jscolor.images.sld[1] - 1), null, leavePad);
            }
        }
        function dispatchImmediateChange() {
            if (THIS.onImmediateChange) {
                var callback;
                callback = "string" == typeof THIS.onImmediateChange ? new Function(THIS.onImmediateChange) : THIS.onImmediateChange;
                callback.call(THIS);
            }
        }
        this.required = true;
        this.adjust = true;
        this.hash = false;
        this.caps = true;
        this.slider = true;
        this.valueElement = target;
        this.styleElement = target;
        this.onImmediateChange = null;
        this.hsv = [ 0, 0, 1 ];
        this.rgb = [ 1, 1, 1 ];
        this.minH = 0;
        this.maxH = 6;
        this.minS = 0;
        this.maxS = 1;
        this.minV = 0;
        this.maxV = 1;
        this.pickerOnfocus = true;
        this.pickerMode = "HSV";
        this.pickerPosition = "bottom";
        this.pickerSmartPosition = true;
        this.pickerButtonHeight = 20;
        this.pickerClosable = false;
        this.pickerCloseText = "Close";
        this.pickerButtonColor = "ButtonText";
        this.pickerFace = 10;
        this.pickerFaceColor = "ThreeDFace";
        this.pickerBorder = 1;
        this.pickerBorderColor = "ThreeDHighlight ThreeDShadow ThreeDShadow ThreeDHighlight";
        this.pickerInset = 1;
        this.pickerInsetColor = "ThreeDShadow ThreeDHighlight ThreeDHighlight ThreeDShadow";
        this.pickerZIndex = 1e4;
        for (var p in prop) prop.hasOwnProperty(p) && (this[p] = prop[p]);
        this.hidePicker = function() {
            isPickerOwner() && removePicker();
        };
        this.showPicker = function() {
            if (!isPickerOwner()) {
                var tp = jscolor.getElementPos(target);
                var ts = jscolor.getElementSize(target);
                var vp = jscolor.getViewPos();
                var vs = jscolor.getViewSize();
                var ps = getPickerDims(this);
                var a, b, c;
                switch (this.pickerPosition.toLowerCase()) {
                  case "left":
                    a = 1;
                    b = 0;
                    c = -1;
                    break;

                  case "right":
                    a = 1;
                    b = 0;
                    c = 1;
                    break;

                  case "top":
                    a = 0;
                    b = 1;
                    c = -1;
                    break;

                  default:
                    a = 0;
                    b = 1;
                    c = 1;
                }
                var l = (ts[b] + ps[b]) / 2;
                if (this.pickerSmartPosition) var pp = [ -vp[a] + tp[a] + ps[a] > vs[a] ? -vp[a] + tp[a] + ts[a] / 2 > vs[a] / 2 && tp[a] + ts[a] - ps[a] >= 0 ? tp[a] + ts[a] - ps[a] : tp[a] : tp[a], -vp[b] + tp[b] + ts[b] + ps[b] - l + l * c > vs[b] ? -vp[b] + tp[b] + ts[b] / 2 > vs[b] / 2 && tp[b] + ts[b] - l - l * c >= 0 ? tp[b] + ts[b] - l - l * c : tp[b] + ts[b] - l + l * c : tp[b] + ts[b] - l + l * c >= 0 ? tp[b] + ts[b] - l + l * c : tp[b] + ts[b] - l - l * c ]; else var pp = [ tp[a], tp[b] + ts[b] - l + l * c ];
                drawPicker(pp[a], pp[b]);
            }
        };
        this.importColor = function() {
            if (valueElement) {
                if (this.adjust) if (!this.required && /^\s*$/.test(valueElement.value)) {
                    valueElement.value = "";
                    styleElement.style.backgroundImage = styleElement.jscStyle.backgroundImage;
                    styleElement.style.backgroundColor = styleElement.jscStyle.backgroundColor;
                    styleElement.style.color = styleElement.jscStyle.color;
                    this.exportColor(leaveValue | leaveStyle);
                } else this.fromString(valueElement.value) || this.exportColor(); else if (!this.fromString(valueElement.value, leaveValue)) {
                    styleElement.style.backgroundImage = styleElement.jscStyle.backgroundImage;
                    styleElement.style.backgroundColor = styleElement.jscStyle.backgroundColor;
                    styleElement.style.color = styleElement.jscStyle.color;
                    this.exportColor(leaveValue | leaveStyle);
                }
            } else this.exportColor();
        };
        this.exportColor = function(flags) {
            if (!(flags & leaveValue) && valueElement) {
                var value = this.toString();
                this.caps && (value = value.toUpperCase());
                this.hash && (value = "#" + value);
                valueElement.value = value;
                Ti.App.fireEvent("colorValue", {
                    value: value
                });
            }
            if (!(flags & leaveStyle) && styleElement) {
                styleElement.style.backgroundImage = "none";
                styleElement.style.backgroundColor = "#" + this.toString();
                styleElement.style.color = .5 > .213 * this.rgb[0] + .715 * this.rgb[1] + .072 * this.rgb[2] ? "#FFF" : "#000";
            }
            flags & leavePad || !isPickerOwner() || redrawPad();
            flags & leaveSld || !isPickerOwner() || redrawSld();
        };
        this.fromHSV = function(h, s, v, flags) {
            null !== h && (h = Math.max(0, this.minH, Math.min(6, this.maxH, h)));
            null !== s && (s = Math.max(0, this.minS, Math.min(1, this.maxS, s)));
            null !== v && (v = Math.max(0, this.minV, Math.min(1, this.maxV, v)));
            this.rgb = HSV_RGB(null === h ? this.hsv[0] : this.hsv[0] = h, null === s ? this.hsv[1] : this.hsv[1] = s, null === v ? this.hsv[2] : this.hsv[2] = v);
            this.exportColor(flags);
        };
        this.fromRGB = function(r, g, b, flags) {
            null !== r && (r = Math.max(0, Math.min(1, r)));
            null !== g && (g = Math.max(0, Math.min(1, g)));
            null !== b && (b = Math.max(0, Math.min(1, b)));
            var hsv = RGB_HSV(null === r ? this.rgb[0] : r, null === g ? this.rgb[1] : g, null === b ? this.rgb[2] : b);
            null !== hsv[0] && (this.hsv[0] = Math.max(0, this.minH, Math.min(6, this.maxH, hsv[0])));
            0 !== hsv[2] && (this.hsv[1] = null === hsv[1] ? null : Math.max(0, this.minS, Math.min(1, this.maxS, hsv[1])));
            this.hsv[2] = null === hsv[2] ? null : Math.max(0, this.minV, Math.min(1, this.maxV, hsv[2]));
            var rgb = HSV_RGB(this.hsv[0], this.hsv[1], this.hsv[2]);
            this.rgb[0] = rgb[0];
            this.rgb[1] = rgb[1];
            this.rgb[2] = rgb[2];
            this.exportColor(flags);
        };
        this.fromString = function(hex, flags) {
            var m = hex.match(/^\W*([0-9A-F]{3}([0-9A-F]{3})?)\W*$/i);
            if (m) {
                6 === m[1].length ? this.fromRGB(parseInt(m[1].substr(0, 2), 16) / 255, parseInt(m[1].substr(2, 2), 16) / 255, parseInt(m[1].substr(4, 2), 16) / 255, flags) : this.fromRGB(parseInt(m[1].charAt(0) + m[1].charAt(0), 16) / 255, parseInt(m[1].charAt(1) + m[1].charAt(1), 16) / 255, parseInt(m[1].charAt(2) + m[1].charAt(2), 16) / 255, flags);
                return true;
            }
            return false;
        };
        this.toString = function() {
            return (256 | Math.round(255 * this.rgb[0])).toString(16).substr(1) + (256 | Math.round(255 * this.rgb[1])).toString(16).substr(1) + (256 | Math.round(255 * this.rgb[2])).toString(16).substr(1);
        };
        var THIS = this;
        var modeID = "hvs" === this.pickerMode.toLowerCase() ? 1 : 0;
        var abortBlur = false;
        var valueElement = jscolor.fetchElement(this.valueElement), styleElement = jscolor.fetchElement(this.styleElement);
        var holdPad = false, holdSld = false, touchOffset = {};
        var leaveValue = 1, leaveStyle = 2, leavePad = 4, leaveSld = 8;
        jscolor.addEvent(target, "focus", function() {
            THIS.pickerOnfocus && THIS.showPicker();
        });
        jscolor.addEvent(target, "blur", function() {
            abortBlur ? abortBlur = false : window.setTimeout(function() {
                abortBlur || blurTarget();
                abortBlur = false;
            }, 0);
        });
        if (valueElement) {
            var updateField = function() {
                THIS.fromString(valueElement.value, leaveValue);
                dispatchImmediateChange();
            };
            jscolor.addEvent(valueElement, "keyup", updateField);
            jscolor.addEvent(valueElement, "input", updateField);
            jscolor.addEvent(valueElement, "blur", blurValue);
            valueElement.setAttribute("autocomplete", "off");
        }
        styleElement && (styleElement.jscStyle = {
            backgroundImage: styleElement.style.backgroundImage,
            backgroundColor: styleElement.style.backgroundColor,
            color: styleElement.style.color
        });
        switch (modeID) {
          case 0:
            jscolor.requireImage("hs.png");
            break;

          case 1:
            jscolor.requireImage("hv.png");
        }
        jscolor.requireImage("cross.gif");
        jscolor.requireImage("arrow.gif");
        this.importColor();
    }
};

jscolor.install();