// @license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt AGPL-3.0
! function(e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var i = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(o, i, function(t) {
                return e[t]
            }.bind(null, i));
        return o
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 9)
}([function(e, t, n) {
    "use strict";

    function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function r(e, t) {
        return !t || "object" !== o(t) && "function" != typeof t ? function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function s(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return (s = function(e) {
            if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
            var n;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, o)
            }

            function o() {
                return a(e, arguments, u(this).constructor)
            }
            return o.prototype = Object.create(e.prototype, {
                constructor: {
                    value: o,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), l(o, e)
        })(e)
    }

    function a(e, t, n) {
        return (a = c() ? Reflect.construct : function(e, t, n) {
            var o = [null];
            o.push.apply(o, t);
            var i = new(Function.bind.apply(e, o));
            return n && l(i, n.prototype), i
        }).apply(null, arguments)
    }

    function c() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
        } catch (e) {
            return !1
        }
    }

    function l(e, t) {
        return (l = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function u(e) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }
    if (n.d(t, "a", (function() {
            return f
        })), n.d(t, "d", (function() {
            return p
        })), n.d(t, "c", (function() {
            return d
        })), n.d(t, "b", (function() {
            return v
        })), "undefiend" != typeof window.XMLHttpRequest) {
        var h = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && l(e, t)
            }(o, e);
            var t, n = (t = o, function() {
                var e, n = u(t);
                if (c()) {
                    var o = u(this).constructor;
                    e = Reflect.construct(n, arguments, o)
                } else e = n.apply(this, arguments);
                return r(this, e)
            });

            function o() {
                return i(this, o), n.apply(this, arguments)
            }
            return o
        }(s(XMLHttpRequest));
        Object.defineProperty(h.prototype, "responseURL", Object.getOwnPropertyDescriptor(XMLHttpRequest.prototype, "responseURL"))
    }

    function f(e, t, n, o, i) {
        var r;
        if ((r = window.XMLHttpRequest ? new h : new ActiveXObject("Microsoft.XMLHTTP")).onreadystatechange = function() {
                4 == this.readyState && n(r)
            }, r.open(e, t, !0), o)
            for (var s in o) o.hasOwnProperty(s) && r.setRequestHeader(s, o[s]);
        r.withCredentials = !0, r.send(i)
    }

    function p(e) {
        return void 0 !== e && e && e.constructor === Array
    }

    function d(e) {
        return document.cookie.search(e) >= 0
    }

    function m(e, t) {
        var n = window["HTML".concat(e, "Element")];
        if (void 0 !== n) {
            var o = Object.getOwnPropertyDescriptor(n.prototype, t);
            void 0 !== o && Object.defineProperty(n.prototype, "_wm_".concat(t), o)
        }
    }

    function v(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "src",
            n = "_wm_".concat(t);
        return n in e.__proto__ ? e[n] : e[t]
    }
    m("Image", "src"), m("Media", "src"), m("Embed", "src"), m("IFrame", "src"), m("Script", "src"), m("Link", "href"), m("Anchor", "href")
}, function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
        return s
    })), n.d(t, "b", (function() {
        return a
    })), n.d(t, "a", (function() {
        return c
    }));
    var o = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        i = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        r = {
            Y: function(e) {
                return e.getUTCFullYear()
            },
            m: function(e) {
                return e.getUTCMonth() + 1
            },
            b: function(e) {
                return i[e.getUTCMonth()]
            },
            B: function(e) {
                return o[e.getUTCMonth()]
            },
            d: function(e) {
                return e.getUTCDate()
            },
            H: function(e) {
                return ("0" + e.getUTCHours()).slice(-2)
            },
            M: function(e) {
                return ("0" + e.getUTCMinutes()).slice(-2)
            },
            S: function(e) {
                return ("0" + e.getUTCSeconds()).slice(-2)
            },
            "%": function() {
                return "%"
            }
        };

    function s(e) {
        var t = function(e) {
            return "number" == typeof e && (e = e.toString()), [e.slice(-14, -10), e.slice(-10, -8), e.slice(-8, -6), e.slice(-6, -4), e.slice(-4, -2), e.slice(-2)]
        }(e);
        return new Date(Date.UTC(t[0], t[1] - 1, t[2], t[3], t[4], t[5]))
    }

    function a(e) {
        return i[e]
    }

    function c(e, t) {
        return t.replace(/%./g, (function(t) {
            var n = r[t[1]];
            return n ? n(s(e)) : t
        }))
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return s
    })), n.d(t, "a", (function() {
        return a
    }));
    var o = n(0);

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
    }
    var r = JSON;

    function s(e, t, n, i) {
        return i = i || {}, Object(o.a)("POST", "/__wb/web-archive/", (function(e) {
            401 === e.status ? i.userNotLoggedIn && i.userNotLoggedIn(e) : e.status >= 400 ? i.failure && i.failure(e) : i.success && i.success(e)
        }), {
            "Content-Type": "application/json"
        }, r.stringify({
            url: e,
            snapshot: t,
            tags: n || []
        })), !1
    }
    var a = function() {
        function e(t, n, i) {
            var r = this;
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.el = t, this.url = n, this.timestamp = i, t.onclick = this.save.bind(this), document.addEventListener("DOMContentLoaded", (function() {
                Object(o.c)("logged-in-user") && Object(o.c)("logged-in-sig") ? r.userIsLoggedIn() : r.userIsNotLoggedIn()
            }))
        }
        var t, n, r;
        return t = e, (n = [{
            key: "save",
            value: function(e) {
                this.start(), s(this.url, this.timestamp, [], {
                    failure: this.failure.bind(this),
                    success: this.success.bind(this)
                })
            }
        }, {
            key: "start",
            value: function() {
                this.hide(["wm-save-snapshot-fail", "wm-save-snapshot-open", "wm-save-snapshot-success"]), this.show(["wm-save-snapshot-in-progress"])
            }
        }, {
            key: "failure",
            value: function(e) {
                401 == e.status ? this.userNotLoggedIn(e) : (this.hide(["wm-save-snapshot-in-progress", "wm-save-snapshot-success"]), this.show(["wm-save-snapshot-fail", "wm-save-snapshot-open"]), console.log("You have got an error."), console.log("If you think something wrong here please send it to support."), console.log('Response: "' + e.responseText + '"'), console.log('status: "' + e.status + '"'))
            }
        }, {
            key: "success",
            value: function(e) {
                this.hide(["wm-save-snapshot-fail", "wm-save-snapshot-in-progress"]), this.show(["wm-save-snapshot-open", "wm-save-snapshot-success"])
            }
        }, {
            key: "userIsLoggedIn",
            value: function() {
                this.show("wm-save-snapshot-open"), this.hide("wm-sign-in")
            }
        }, {
            key: "userIsNotLoggedIn",
            value: function() {
                this.hide(["wm-save-snapshot-open", "wm-save-snapshot-in-progress"]), this.show("wm-sign-in")
            }
        }, {
            key: "show",
            value: function(e) {
                this.setDisplayStyle(e, "inline-block")
            }
        }, {
            key: "hide",
            value: function(e) {
                this.setDisplayStyle(e, "none")
            }
        }, {
            key: "setDisplayStyle",
            value: function(e, t) {
                var n = this;
                (Object(o.d)(e) ? e : [e]).forEach((function(e) {
                    var o = n.el.getRootNode().getElementById(e);
                    o && (o.style.display = t)
                }))
            }
        }]) && i(t.prototype, n), r && i(t, r), e
    }()
}, , , , , , , function(e, t, n) {
    "use strict";
    var o;
    n.r(t);
    var i, r = {
        createElementNS: document.createElementNS
    };
    var s = !0;

    function a(e) {
        ! function(e, t, n) {
            if (n) {
                var o = new Date;
                o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3);
                var i = "; expires=" + o.toGMTString()
            } else i = "";
            document.cookie = e + "=" + t + i + "; path=/"
        }(e, "", -1)
    }
    var c = n(0),
        l = n(1),
        u = window.Date;

    function h(e, t) {
        return (e = e.toString()).length >= t ? e : "00000000".substring(0, t - e.length) + e
    }

    function f(e) {
        for (var t = 0, n = 0; n < e.length; n++) t = Math.max(t, Math.max.apply(null, e[n][1]));
        if (function(e) {
                for (var t = 0, n = 1e3, o = 0; o < e.length; o++) {
                    var i = e[o];
                    t = Math.max(t, Math.max.apply(null, i[1])), n = Math.min(n, Math.min.apply(null, i[1].filter(Boolean)))
                }
                return Math.log1p(t) - Math.log1p(n) > 3
            }(e)) {
            var o = [];
            for (n = 0; n < e.length; n++) {
                var i = e[n];
                o.push([i[0], i[1].map(Math.log1p)])
            }
            e = o, t = Math.log1p(t)
        }
        return [e, t]
    }

    function p(e) {
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (e = function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return d(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                }(e))) {
                var t = 0,
                    n = function() {};
                return {
                    s: n,
                    n: function() {
                        return t >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[t++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: n
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, i, r = !0,
            s = !1;
        return {
            s: function() {
                o = e[Symbol.iterator]()
            },
            n: function() {
                var e = o.next();
                return r = e.done, e
            },
            e: function(e) {
                s = !0, i = e
            },
            f: function() {
                try {
                    r || null == o.return || o.return()
                } finally {
                    if (s) throw i
                }
            }
        }
    }

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o
    }

    function m(e, t, n) {
        var o = n("wm-capresources");
        o.innerHTML = "";
        var i = n("wm-capresources-loading");
        i.style.display = "block";
        var r = l.c(e).getTime(),
            s = 0;
        t = window.location.origin + t;
        var a = [];

        function u(e, n) {
            var o, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "src",
                r = window.location.origin,
                s = b(window, e),
                l = p(s);
            try {
                for (l.s(); !(o = l.n()).done;) {
                    var u = o.value;
                    if (!n || n(u)) {
                        var h = Object(c.b)(u, i);
                        h && !h.startsWith(t) && h.startsWith(r) && (h.startsWith("data:") || a.push(h))
                    }
                }
            } catch (e) {
                l.e(e)
            } finally {
                l.f()
            }
        }
        u("img"), u("frame"), u("iframe", (function(e) {
            return "playback" !== e.id
        })), u("script"), u("link", (function(e) {
            return "stylesheet" === e.rel
        }), "href");
        var h = a.filter((function(e, t, n) {
            return n.indexOf(e) === t
        }));
        h.length > 0 ? (s = 0, h.map((function(e) {
            e.match("^https?://") && (s++, Object(c.a)("HEAD", e, (function(e) {
                if (200 == e.status) {
                    var t = e.getResponseHeader("Memento-Datetime");
                    if (null == t) console.log("%s: no Memento-Datetime", u);
                    else {
                        var n = document.createElement("span"),
                            a = function(e, t) {
                                var n = new Date(e).getTime() - t,
                                    o = "";
                                n < 0 ? (o += "-", n = Math.abs(n)) : o += "+";
                                var i = !1;
                                if (n < 1e3) return {
                                    delta: n,
                                    text: "",
                                    highlight: i
                                };
                                var r = n,
                                    s = Math.floor(n / 1e3 / 60 / 60 / 24 / 30 / 12);
                                n -= 1e3 * s * 60 * 60 * 24 * 30 * 12;
                                var a = Math.floor(n / 1e3 / 60 / 60 / 24 / 30);
                                n -= 1e3 * a * 60 * 60 * 24 * 30;
                                var c = Math.floor(n / 1e3 / 60 / 60 / 24);
                                n -= 1e3 * c * 60 * 60 * 24;
                                var l = Math.floor(n / 1e3 / 60 / 60);
                                n -= 1e3 * l * 60 * 60;
                                var u = Math.floor(n / 1e3 / 60);
                                n -= 1e3 * u * 60;
                                var h = Math.floor(n / 1e3),
                                    f = [];
                                s > 1 ? (f.push(s + " years"), i = !0) : 1 == s && (f.push(s + " year"), i = !0);
                                a > 1 ? (f.push(a + " months"), i = !0) : 1 == a && (f.push(a + " month"), i = !0);
                                c > 1 ? f.push(c + " days") : 1 == c && f.push(c + " day");
                                l > 1 ? f.push(l + " hours") : 1 == l && f.push(l + " hour");
                                u > 1 ? f.push(u + " minutes") : 1 == u && f.push(u + " minute");
                                h > 1 ? f.push(h + " seconds") : 1 == h && f.push(h + " second");
                                f.length > 2 && (f = f.slice(0, 2));
                                return {
                                    delta: r,
                                    text: o + f.join(" "),
                                    highlight: i
                                }
                            }(t, r),
                            c = a.highlight ? "color:red;" : "";
                        n.innerHTML = " " + a.text, n.title = t, n.setAttribute("style", c);
                        var l = e.getResponseHeader("Content-Type"),
                            u = e.responseURL.replace(window.location.origin, ""),
                            h = document.createElement("a");
                        h.innerHTML = u.split("/").splice(3).join("/"), h._wm_href = u, h.title = l, h.onmouseover = y, h.onmouseout = w;
                        var f = document.createElement("div");
                        f.setAttribute("data-delta", a.delta), f.appendChild(h), f.append(n), o.appendChild(f);
                        var p = Array.prototype.slice.call(o.childNodes, 0);
                        p.sort((function(e, t) {
                            return t.getAttribute("data-delta") - e.getAttribute("data-delta")
                        })), o.innerHTML = "";
                        for (var d = 0, m = p.length; d < m; d++) o.appendChild(p[d])
                    }
                }
                0 == --s && (i.style.display = "none")
            })))
        }))) : (o.innerHTML = "There are no sub-resources in the page.", i.style.display = "none")
    }

    function v(e, t) {
        for (var n = t.split("/").splice(6).join("/"), o = e.document.querySelectorAll("img[src$='" + n + "'], iframe[src$='" + n + "'], frame[src$='" + n + "']"), i = Array.prototype.slice.call(o), r = 0; r < e.frames.length; r++) try {
            var s = v(e.frames[r].window, t);
            i = i.concat(s)
        } catch (e) {}
        return i
    }

    function g(e) {
        return "FRAME" == e.tagName || "IFRAME" == e.tagName ? e.contentWindow.document.documentElement : e
    }

    function y(e) {
        var t = v(window, e.target.href);
        if (t.length > 0)
            for (var n = 0; n < t.length; n++) g(t[n]).classList.add("wb-highlight")
    }

    function w(e) {
        var t = v(window, e.target.href);
        if (t.length > 0)
            for (var n = 0; n < t.length; n++) g(t[n]).classList.remove("wb-highlight")
    }

    function b(e, t) {
        for (var n = e.document.getElementsByTagName(t), o = Array.prototype.slice.call(n), i = 0; i < e.frames.length; i++) try {
            var r = b(e.frames[i].window, t);
            o = o.concat(r)
        } catch (e) {}
        return o
    }

    function _(e) {
        return (_ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function S(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function M(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
    }

    function T(e, t, n) {
        return t && M(e.prototype, t), n && M(e, n), e
    }

    function k(e, t) {
        return e.classList ? e.classList.contains(t) : new RegExp("\\b" + t + "\\b").test(e.className)
    }

    function C(e, t, n) {
        e.attachEvent ? e.attachEvent("on" + t, n) : e.addEventListener(t, n)
    }

    function x(e, t, n) {
        e.detachEvent ? e.detachEvent("on" + t, n) : e.removeEventListener(t, n)
    }

    function H(e, t, n, o) {
        C(o || document, t, (function(t) {
            for (var o, i = t.target || t.srcElement; i && !(o = k(i, e));) i = i.parentElement;
            o && n.call(i, t)
        }))
    }
    var L, O, E = function() {
            function e(t, n) {
                S(this, e), this.input = t, this.source = 0, this.minChars = 3, this.delay = 150, this.offsetLeft = 0, this.offsetTop = 0, this.cache = !0, this.menuClass = "", Object.assign(this, n), this.root = this.input.getRootNode(), this.cache && (this.cache = {}), this.sc = document.createElement("div"), this.sc.className = "wb-autocomplete-suggestions " + this.menuClass, this.root.appendChild(this.sc);
                this.selector;
                this.autocompleteAttr = t.getAttribute("autocomplete"), t.setAttribute("autocomplete", "off"), this.last_val = "", this.updateSC = this.updateSC.bind(this), this.blurHandler = this.blurHandler.bind(this), this.keydownHandler = this.keydownHandler.bind(this), this.keyupHandler = this.keyupHandler.bind(this), this.focusHandler = this.focusHandler.bind(this), C(window, "resize", this.updateSC), C(t, "blur", this.blurHandler), C(t, "keydown", this.keydownHandler), C(t, "keyup", this.keyupHandler), this.minChars || C(t, "focus", this.focusHandler);
                var o = this;
                H("wb-autocomplete-suggestion", "mouseleave", (function(e) {
                    var t = o.sc.querySelector(".autocomplete-suggestion.selected");
                    t && setTimeout((function() {
                        t.className = t.className.replace("selected", "")
                    }), 20)
                }), this.sc), H("wb-autocomplete-suggestion", "mouseover", (function(e) {
                    var t = o.sc.querySelector(".wb-autocomplete-suggestion.selected");
                    t && (t.className = t.className.replace("selected", "")), this.className += " selected"
                }), this.sc), H("wb-autocomplete-suggestion", "mousedown", (function(e) {
                    if (k(this, "wb-autocomplete-suggestion")) {
                        var t = this.getAttribute("data-val");
                        o.input.value = t, o.onSelect(e, t, this), o.sc.style.display = "none"
                    }
                }), this.sc)
            }
            return T(e, [{
                key: "unload",
                value: function() {
                    x(window, "resize", this.updateSC), x(this.input, "blur", this.blurHandler), x(this.input, "focus", this.focusHandler), x(this.input, "keydown", this.keydownHandler), x(this.input, "keyup", this.keyupHandler), this.autocompleteAttr ? this.setAttribute("autocomplete", this.autocompleteAttr) : this.removeAttribute("autocomplete"), this.root.removeChild(this.sc)
                }
            }, {
                key: "updateSC",
                value: function(e, t) {
                    var n = this.input.getBoundingClientRect();
                    if (this.sc.style.left = Math.round(n.left + (window.pageXOffset || document.documentElement.scrollLeft) + this.offsetLeft) + "px", this.sc.style.top = Math.round(n.bottom + (window.pageYOffset || document.documentElement.scrollTop) + this.offsetTop) + "px", this.sc.style.width = Math.round(n.right - n.left) + "px", !e)
                        if (this.sc.style.display = "block", this.sc.maxHeight || (this.sc.maxHeight = parseInt((window.getComputedStyle ? getComputedStyle(this.sc, null) : this.sc.currentStyle).maxHeight)), this.sc.suggestionHeight || (this.sc.suggestionHeight = this.sc.querySelector(".wb-autocomplete-suggestion").offsetHeight), this.sc.suggestionHeight) t || (this.sc.scrollTop = 0);
                        else {
                            var o = this.sc.scrollTop,
                                i = t.getBoundingClientRect().top - this.sc.getBoundingClientRect().top;
                            i + this.sc.suggestionHeight - this.sc.maxHeight > 0 ? this.sc.scrollTop = i + this.sc.suggestionHeight + o - this.sc.maxHeight : i < 0 && (this.sc.scrollTop = i + o)
                        }
                }
            }, {
                key: "blurHandler",
                value: function() {
                    var e = this;
                    try {
                        var t = this.root.querySelector(".wb-autocomplete-suggestions:hover")
                    } catch (e) {
                        t = null
                    }
                    t ? this.input !== document.activeElement && setTimeout((function() {
                        return e.focus()
                    }), 20) : (this.last_val = this.input.value, this.sc.style.display = "none", setTimeout((function() {
                        return e.sc.style.display = "none"
                    }), 350))
                }
            }, {
                key: "suggest",
                value: function(e) {
                    var t = this.input.value;
                    if (this.cache[t] = e, e.length && t.length >= this.minChars) {
                        for (var n = "", o = 0; o < e.length; o++) n += this.renderItem(e[o], t);
                        this.sc.innerHTML = n, this.updateSC(0)
                    } else this.sc.style.display = "none"
                }
            }, {
                key: "keydownHandler",
                value: function(e) {
                    var t, n = this,
                        o = window.event ? e.keyCode : e.which;
                    if ((40 == o || 38 == o) && this.sc.innerHTML) return (i = this.sc.querySelector(".wb-autocomplete-suggestion.selected")) ? (t = 40 == o ? i.nextSibling : i.previousSibling) ? (i.className = i.className.replace("selected", ""), t.className += " selected", this.input.value = t.getAttribute("data-val")) : (i.className = i.className.replace("selected", ""), this.input.value = this.last_val, t = 0) : ((t = 40 == o ? this.sc.querySelector(".wb-autocomplete-suggestion") : this.sc.childNodes[this.sc.childNodes.length - 1]).className += " selected", this.input.value = t.getAttribute("data-val")), this.updateSC(0, t), !1;
                    if (27 == o) this.value = this.last_val, this.sc.style.display = "none";
                    else if (13 == o || 9 == o) {
                        var i;
                        (i = this.sc.querySelector(".wb-autocomplete-suggestion.selected")) && "none" != this.sc.style.display && (this.onSelect(e, i.getAttribute("data-val"), i), setTimeout((function() {
                            n.sc.style.display = "none"
                        }), 20))
                    }
                }
            }, {
                key: "keyupHandler",
                value: function(e) {
                    var t = this,
                        n = window.event ? e.keyCode : e.which;
                    if (!n || (n < 35 || n > 40) && 13 != n && 27 != n) {
                        var o = this.input.value;
                        if (o.length >= this.minChars) {
                            if (o != this.last_val) {
                                if (this.last_val = o, clearTimeout(this.timer), this.cache) {
                                    if (o in this.cache) return void this.suggest(this.cache[o]);
                                    for (var i = 1; i < o.length - this.minChars; i++) {
                                        var r = o.slice(0, o.length - i);
                                        if (r in this.cache && !this.cache[r].length) return void this.suggest([])
                                    }
                                }
                                this.timer = setTimeout((function() {
                                    t.source(o, t.suggest.bind(t))
                                }), this.delay)
                            }
                        } else this.last_val = o, this.sc.style.display = "none"
                    }
                }
            }, {
                key: "focusHandler",
                value: function(e) {
                    this.last_val = "\n", this.keyupHandler(e)
                }
            }, {
                key: "renderItem",
                value: function(e, t) {
                    t = t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
                    var n = new RegExp("(" + t.split(" ").join("|") + ")", "gi");
                    return '<div class="wb-autocomplete-suggestion" data-val="' + e + '">' + e.replace(n, "<b>$1</b>") + "</div>"
                }
            }, {
                key: "onSelect",
                value: function(e, t, n) {}
            }]), e
        }(),
        j = function() {
            function e(t, n) {
                S(this, e);
                var o = t.getRootNode();
                if (o.querySelector) {
                    var i = "object" == _(t) ? [t] : o.querySelectorAll(t);
                    this.elems = i.map((function(e) {
                        return new E(e, n)
                    }))
                }
            }
            return T(e, [{
                key: "destroy",
                value: function() {
                    for (; this.elems.length > 0;) this.elems.pop().unload()
                }
            }]), e
        }(),
        R = n(2),
        A = window.JSON,
        N = window.open,
        U = window.Date,
        I = document,
        D = document,
        P = function(e) {
            return D.getElementById(e)
        };
    var q, F = "/static/";

    function B(e) {
        L.classList.contains("wm-closed") ? (e && O.classList.add("notice-only"), L.classList.replace("wm-closed", "wm-open"), O.style.display = "block", m(q, F, P)) : (L.classList.replace("wm-open", "wm-closed"), O.style.display = "none", O.classList.remove("notice-only"))
    }

    function W(e, t) {
        var n = P(e);
        n && (n.style.visibility = t ? "visible" : "hidden")
    }

    function X(e, t) {
        Object(c.d)(e) || (e = [e]);
        for (var n = 0; n < e.length; n++) W(e[n], t)
    }
    var Y = /web\/(\d*)\/http:\/\/web\.archive\.org\/screenshot/g;

    function $(e, t, n) {
        ! function(e, t) {
            Object(c.a)("HEAD", e, (function(e) {
                t(e.status < 300, e.responseURL)
            }))
        }("/web/" + t + "/https://a0.bucm.cf/extdomains/web.archive.org/screenshot/" + e, (function(e, o) {
            if (!e) return n(!1);
            var i = function(e) {
                var t = Y.exec(e);
                return t && t[1] ? t[1] : null
            }(o);
            if (!i) return console.warn("failed to extract timestamp from %s", o), void n(!1);
            var r = (l.c(i).getTime() - l.c(t).getTime()) / 1e3;
            console.log("screen shot delta: " + r + "s"), n(r > 0 && r < 60, r)
        }))
    }
    window.__wm = {
        init: function(e) {
            ! function() {
                var e = document.cookie.split(";");
                if (e.length > 40)
                    for (var t = 0; t < e.length; t++) {
                        a(e[t].split("=")[0].trim())
                    }
            }(), o = e, document.createElementNS = function(e, t) {
                return 0 == e.indexOf(o) && (e = e.substring(o.length).replace(/\/?[0-9]+\//, "")), r.createElementNS.call(this, e, t)
            }
        },
        wombat: function(e, t, n, o, r, a) {
            var c = "".concat(n).concat(o, "/"),
                l = c.replace(/^https?:/, ""),
                u = new URL(e),
                h = {
                    url: e,
                    timestamp: t,
                    prefix: c,
                    coll: o,
                    static_prefix: r,
                    request_ts: t,
                    proxy_magic: "",
                    mod: "",
                    is_framed: !1,
                    is_live: !1,
                    enable_auto_fetch: !0,
                    auto_fetch_worker_prefix: c,
                    wombat_ts: t,
                    wombat_sec: a,
                    wombat_scheme: (u.protocol || "http").replace(/:$/, ""),
                    wombat_host: u.host,
                    wombat_opts: {
                        no_rewrite_prefixes: ["/__wb/", r, "".concat(n).concat(r.substring(1)), "/web/", c, l, "https://a0.bucm.cf/extdomains/analytics.archive.org/", "https://a0.bucm.cf/extdomains/analytics.archive.org/", "//a0.bucm.cf/extdomains/analytics.archive.org/"]
                    }
                };
            if ("undefined" != typeof _WBWombat) {
                var f = _WBWombat.prototype.rewriteUrl;
                return _WBWombat.prototype.rewriteUrl = function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
                    return s ? f.call.apply(f, [this, e].concat(n)) : e
                }, (i = _WBWombat(window, h)).actual = !0, window._wb_wombat = i.wombatInit(), window._wb_wombat.actual = !0, i
            }
        },
        rw: function(e) {
            s = e
        },
        bt: function(e, t, n, o, i, r, s, a, p, d, m) {
            F = p || "/static/", q = s;
            var v, g, y, w = "/" + (i || "web") + "/",
                b = l.c(q),
                _ = b.getUTCFullYear(),
                S = b.getUTCMonth() + 1,
                M = b.getUTCDate(),
                T = -1,
                k = -1,
                C = P("wm-ipp-base");
            if (C.attachShadow) {
                var x = C.attachShadow({
                    mode: "closed"
                });
                for (D = x; C.children.length > 0;) x.appendChild(C.children[0]);
                if (d)
                    for (var H = 0; H < d.length; H++) {
                        var E = I.createElement("link");
                        E.setAttribute("rel", "stylesheet"), E.setAttribute("type", "text/css"), E.setAttribute("href", d[H]), x.appendChild(E)
                    }
            }

            function W() {
                var e = P("donato").offsetHeight + (P("wm-ipp-inside").offsetHeight - P("wm-capinfo").offsetHeight);
                console.debug("adjustHeight: baseHeight=%s", e + "px"), C.style.height = e + "px"
            }
            window.top == window.self && (C.style.display = "block");
            var Y = !1,
                J = !0,
                G = P("donato");
            if (console.debug("$donato = %o", G), G)
                if (window.top != window.self) G.style.display = "none", console.debug("hid $donato as window.top != window.self");
                else {
                    var z = P("donato-base");
                    window.addEventListener("message", (function(e) {
                        if (-1 !== e.origin.indexOf("a0.bucm.cf")) {
                            var t = "string" == typeof e.data ? A.parse(e.data) : e.data;
                            if (console.log("got message %o", t), "set height" == t.event) {
                                var n = t.value,
                                    o = t.bannerHeight;
                                if ("number" != typeof n || n <= 0) return;
                                if (!J) return;
                                if (t.value, Y) return;
                                G.style.height = o + "px", z.style.height = n + "px", W()
                            } else if ("open modal" == t.event) z.style.height = "", document.body.classList.add("wm-modal"), window.scrollTo(0, 0), Y = !0;
                            else if ("close modal" == t.event) G.style.marginBottom = "0px", document.body.classList.remove("wm-modal"), Y = !1;
                            else if ("hide banner" == t.event) {
                                G.style.height = 0, G.style.visibility = "hidden";
                                var i = new U(U.now() + 24 * t.value * 3600 * 1e3);
                                document.cookie = "donation=x; domain=archive.org; path=/; expires=" + i.toUTCString(), J = !1, Y = !1, 0, W()
                            }
                        }
                    }), !1), console.debug("installed message listener to #donato-base: %o", z)
                }
            P("wm-tb-close").addEventListener("click", (function(e) {
                P("wm-ipp-inside").style.display = "none", e.preventDefault(), W()
            }));
            var V = P("wm-ipp-sparkline");

            function K(e) {
                var t = "mouseenter" == e.type ? 1 : 0;
                if (t !== v) {
                    var n = P("wm-ipp"),
                        o = P("displayYearEl"),
                        i = P("displayMonthEl"),
                        r = P("displayDayEl");
                    t ? n.className = "hi" : (n.className = "", o.innerHTML = _, i.innerHTML = l.b(S - 1), r.innerHTML = h(M, 2)), g.style.display = t ? "inline" : "none", y.style.display = t ? "inline" : "none", v = t
                }
            }
            L = P("wm-expand"), O = P("wm-capinfo"), P("wm-graph-anchor")._no_rewrite = !0, (g = I.createElement("div")).className = "yt", g.style.display = "none", g.style.width = n + "px", g.style.height = t + "px", (y = I.createElement("div")).className = "mt", y.style.display = "none", y.style.width = o + "px", y.style.height = t + "px", V.appendChild(g), V.appendChild(y);
            var Q = P("wm-sparkline-canvas");
            V.onmouseenter = K, V.onmouseleave = K, V.onmousemove = function(t) {
                var i, s, c = V,
                    u = function(e) {
                        var t = 0;
                        return e.pageX || e.pageY ? t = e.pageX : (e.clientX || e.clientY) && (t = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft), t
                    }(t),
                    f = (i = c, s = I.documentElement, ("undefied" != typeof i.getBoundingClientRect ? i.getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    }).left + (window.pageXOffset || s.scrollLeft) - (s.clientLeft || 0)),
                    p = Math.min(Math.max(0, u - f), e),
                    d = p % n,
                    m = Math.floor(p / n),
                    v = Math.min(11, Math.floor(d / o)),
                    b = 12 * m + v,
                    _ = d % 2 == 1 ? 15 : 1,
                    S = h(m + a) + h(v + 1, 2) + h(_, 2) + "000000";
                P("displayYearEl").innerHTML = m + a, P("displayMonthEl").innerHTML = l.b(v);
                var M = w + S + "/" + r;
                if (P("wm-graph-anchor").href = M, T != m) {
                    var C = m * n;
                    g.style.left = C + "px", T = m
                }
                if (k != b) {
                    var x = m + b * o + 1;
                    y.style.left = x + "px", k = b
                }
            };
            var Z = P("wm-sparkline-canvas");
            if (Z.getContext && Z.getContext("2d")) {
                var ee = "/__wb/sparkline?output=json&url=" + encodeURIComponent(r) + (i && "&collection=" + i || "");
                Object(c.a)("GET", ee, (function(n) {
                    if (200 == n.status) {
                        for (var o = A.parse(n.responseText), i = o.years, s = Object.getOwnPropertyNames(i), c = o.years = [], h = 0; h < s.length; h++) {
                            var p = s[h];
                            i[p] && c.push([p, i[p]])
                        }! function(e) {
                            for (var t = P("wm-nav-captures"), n = 0, o = e.years, i = e.first_ts, s = e.last_ts, a = 0; a < o.length; a++)
                                for (var c = o[a][1], u = 0; u < c.length; u++) n += c[u];
                            var h = '<a class="t" href="' + w + "*/" + r + '" title="See a list of every capture for this URL">' + (("" + n).replace(/\B(?=(\d{3})+$)/g, ",") + " ") + (n > 1 ? "captures" : "capture") + "</a>",
                                f = l.a(i, "%d %b %Y");
                            s != i && (f += " - " + l.a(s, "%d %b %Y")), h += '<div class="r" title="Timespan for captures of this URL">' + f + "</div>", t.innerHTML = h
                        }(o),
                        function(e, t, n, o, i, r, s) {
                            var a = o.getContext("2d");
                            if (a) {
                                a.fillStyle = "#FFF";
                                var c = (new u).getUTCFullYear(),
                                    l = t / (c - i + 1),
                                    h = f(e.years),
                                    p = h[0],
                                    d = n / h[1];
                                if (r >= i) {
                                    var m = T(r);
                                    a.fillStyle = "#FFFFA5", a.fillRect(m, 0, l, n)
                                }
                                for (var v = i; v <= c; v++) {
                                    m = T(v);
                                    a.beginPath(), a.moveTo(m, 0), a.lineTo(m, n), a.lineWidth = 1, a.strokeStyle = "#CCC", a.stroke()
                                }
                                s = parseInt(s) - 1;
                                for (var g = (l - 1) / 12, y = 0; y < p.length; y++) {
                                    v = p[y][0];
                                    for (var w = p[y][1], b = T(v) + 1, _ = 0; _ < 12; _++) {
                                        var S = w[_];
                                        if (S > 0) {
                                            var M = Math.ceil(S * d);
                                            a.fillStyle = v == r && _ == s ? "#EC008C" : "#000", a.fillRect(Math.round(b), Math.ceil(n - M), Math.ceil(g), Math.round(M))
                                        }
                                        b += g
                                    }
                                }
                            }

                            function T(e) {
                                return Math.ceil((e - i) * l) + .5
                            }
                        }(o, e, t, Z, a, _, S)
                    }
                }))
            } else {
                var te = new Image;
                te.src = "/__wb/sparkline?url=" + encodeURIComponent(r) + "&width=" + e + "&height=" + t + "&selected_year=" + _ + "&selected_month=" + S + (i && "&collection=" + i || ""), te.alt = "sparkline", te.width = e, te.height = t, te.id = "sparklineImgId", te.border = "0", Q.parentNode.replaceChild(te, Q)
            }

            function ne(e) {
                for (var t = [], n = e.length, o = 0; o < n; o++) void 0 === e[o].excluded && t.push(e[o].display_name);
                return t
            }
            P("wm-share-facebook").onclick = function(e) {
                    var t = this.dataset.url;
                    return N("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(t), "", "height=400,width=600"), e.preventDefault(), !1
                }, P("wm-share-twitter").onclick = function(e) {
                    var t = this.dataset.url;
                    return N("https://twitter.com/intent/tweet?text=" + encodeURIComponent(t) + "&via=internetarchive", "", "height=446,width=600"), e.preventDefault(), !1
                }, new j(P("wmtbURL"), {
                    delay: 400,
                    source: function(e, t) {
                        Object(c.a)("GET", "/__wb/search/host?q=" + encodeURIComponent(e), (function(n) {
                            if (void 0 !== (n = A.parse(n.response)).hosts && n.hosts.length > 0) {
                                var o = ne(n.hosts);
                                t(o)
                            } else void 0 !== n.isUrl && !0 === n.isUrl && void 0 === n.excluded ? t([e]) : Object(c.a)("GET", "/__wb/search/anchor?q=" + encodeURIComponent(e), (function(e) {
                                if (void 0 !== (e = A.parse(e.response)) && e.length > 0) {
                                    var n = ne(e.slice(0, 5));
                                    t(n)
                                }
                            }))
                        }))
                    },
                    onSelect: function(e, t, n) {
                        P("wmtb").submit()
                    }
                }), P("wmtb").onsubmit = function(e) {
                    var t = P("wmtbURL").value;
                    if (0 !== t.indexOf("http://") && 0 !== t.indexOf("https://") && !t.match(/[\w\.]{2,256}\.[a-z]{2,4}/gi)) return document.location.href = "/web/*/" + P("wmtbURL").value, e.preventDefault(), !1
                },
                function(e, t) {
                    $(e, t, (function(e, t) {
                        e ? (P("wm-screenshot").title = "screen shot (delta: " + t + "s)", X("wm-screenshot", !0)) : X("wm-screenshot", !1)
                    }))
                }(r, q), m && function(e, t) {
                    ! function(e, t, n) {
                        var o = "/web/" + t + "id_/https://a0.bucm.cf/extdomains/wayback-metadata.archive.org/youtube-dl/" + e;
                        Object(c.a)("GET", o, n)
                    }(e, t, (function(e) {
                        if (e.status < 300) {
                            var t = A.parse(e.responseText);
                            X("wm-video", !0), P("wm-video").href = t.url, P("wm-video").title = "Video: " + t.title
                        } else X("wm-video", !1)
                    }))
                }(r, q), P("wm-capinfo-notice") && B(!0), new R.a(P("wm-save-snapshot-open"), r, q)
        },
        h: void 0,
        ex: function(e) {
            e.stopPropagation(), B(!1)
        },
        ajax: c.a
    }
}]);
// @license-end