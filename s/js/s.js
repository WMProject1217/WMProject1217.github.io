var _____WB$wombat$assign$function_____ = function(name) {
    return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};
if (!self.__WB_pmw) {
    self.__WB_pmw = function(obj) {
        this.__WB_source = obj;
        return this;
    }
} {
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    (function() {
        var L = "SINGLE";
        var P = "https://a0.bucm.cf/extdomains/web.archive.org/web/20101106215540/http://cb.baidu.com/ecom",
            c = "https://a0.bucm.cf/extdomains/web.archive.org/web/20101106215540/http://drmcmm.baidu.com/js/img/close.gif",
            K = "https://a0.bucm.cf/extdomains/web.archive.org/web/20101106215540/http://cpro.baidu.com/cpro/ui/cc.js";
        CF_URL = "https://a0.bucm.cf/extdomains/web.archive.org/web/20101106215540/http://cpro.baidu.com/cpro/ui/cf.js";

        function z(Q) {
            return window.encodeURIComponent ? encodeURIComponent(Q) : escape(Q)
        }

        function p(R, T, S, V, U) {
            var Q = new Date();
            U && (Q.setTime(Q.getTime() + U));
            document.cookie = R + "=" + escape(T) + (U ? ";expires=" + Q.toGMTString() : "") + (S ? ";domain=" + escape(S) : "") + (V ? ";path=" + escape(V) : "")
        }

        function i(R) {
            var S = new RegExp("(^| )" + R + "=([^;]*)(;|$)"),
                Q = S.exec(document.cookie);
            if (Q) {
                return unescape(Q[2] || "")
            }
            return ""
        }

        function y(S) {
            S = S || document.domain;
            if (S.indexOf("www.") === 0) {
                S = S.substr(4)
            }
            var R = /([a-z0-9][a-z0-9\-]*?\.(?:com|cn|net|org|gov|info|la|cc|co|jp)(?:\.(?:cn|jp))?)$/,
                Q = S.match(R);
            if (Q) {
                return Q[0]
            }
            return S
        }

        function F() {
            return window.screen.width
        }

        function v() {
            return window.screen.height
        }

        function h() {
            return window.screen.availWidth
        }

        function O() {
            return window.screen.availHeight
        }

        function C() {
            return window.screen.colorDepth
        }

        function B() {
            return (new Date(document.lastModified)).getTime()
        }

        function l() {
            var Q = navigator;
            return (Q.language || Q.browserLanguage)
        }

        function M() {
            return navigator.javaEnabled() ? 1 : 0
        }

        function m() {
            var S, R, Q, T = navigator;
            if (T.plugins && T.mimeTypes.length) {
                Q = T.plugins["Shockwave Flash"];
                if (Q && Q.description) {
                    return Q.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".")
                }
            } else {
                if (T.userAgent && T.userAgent.indexOf("Windows CE") >= 0) {
                    R = 3;
                    S = 1;
                    while (S) {
                        try {
                            S = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + (R + 1));
                            R++
                        } catch (U) {
                            break
                        }
                    }
                    return R.toString()
                } else {
                    if (k()) {
                        try {
                            S = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")
                        } catch (U) {
                            var R = 0;
                            try {
                                S = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                                R = 6;
                                S.AllowScriptAccess = "always"
                            } catch (U) {
                                if (R == 6) {
                                    return R.toString()
                                }
                            }
                            try {
                                S = new ActiveXObject("ShockwaveFlash,ShockwaveFlash")
                            } catch (U) {}
                        }
                        if (S) {
                            return S.GetVariable("$version").split(" ")[1].replace(/,/g, ".")
                        }
                    }
                }
            }
            return "0"
        }

        function A() {
            var R = document.referrer,
                U = R.replace(/^http:\/\//, ""),
                T = U.indexOf("/");
            if (T != -1) {
                U = U.substr(0, T)
            }
            U = U.replace(/:\d+$/, "");
            U = y(U);
            var Q = y(),
                S = i("BAIDU_CLB_REFER");
            if (Q == U && S != "") {
                return z(S)
            } else {
                if (Q != U) {
                    p("BAIDU_CLB_REFER", R, Q);
                    return z(R)
                }
            }
            return ""
        }

        function a() {
            return z(document.URL)
        }

        function G(S, R) {
            var Q = "di=" + S + (R ? "&fn=" + R : "") + "&tm=BAIDU_CLB_SETJSONADSLOT&mod_t=" + B() + "&visi_t=" + (new Date()).getTime() + "&flash_v=" + m() + "&java=" + M() + "&new=1";
            if (window.screen) {
                Q += "&screen_h=" + v() + "&screen_w=" + F() + "&page_h=" + O() + "&page_w=" + h() + "&color=" + C()
            }
            Q += "&asp_refer=" + A() + "&asp_url=" + a() + "&b_lang=" + l() + "&baidu_id=" + i("BAIDUID");
            return P + "?" + Q
        }

        function f(Q) {
            return "baidu_clb_slot_" + Q
        }

        function J(Q) {
            return "baidu_clb_slot_iframe_" + Q
        }

        function x(R, Q) {
            var S;
            if (Q._isMlt == 2) {
                S = e
            } else {
                switch (Q._stype) {
                    case 0:
                        S = s;
                        break;
                    case 1:
                        S = r;
                        break;
                    default:
                        S = q
                }
            }
            S(R, Q)
        }

        function e(S, Q) {
            var U = j(Q._html);
            var R = U ? CF_URL : K;
            var T = window[U ? "BAIDU_CLB_CPROFSLOT" : "BAIDU_CLB_CPROCSLOT"];
            if (T) {
                T(S, Q)
            } else {
                window.tempClbCproAdObj = Q;
                window.tempClbCproAdSlotId = S;
                document.write('<script type="text/javascript" src="' + R + '"><\/script>')
            }
        }

        function j(S) {
            var W = S.split("|"),
                V = false;
            for (var T = 0, Q = W.length; T < Q; T++) {
                var U = W[T].split("=");
                if (U[0] == "cpro_template") {
                    var R = U[1].split("_");
                    if (R[1].indexOf("xuanfu") == 0) {
                        return true
                    }
                    return V
                }
            }
            return V
        }

        function s(T, R) {
            var U = R._html,
                V = R._w,
                Q = R._h,
                S = f(T);
            if (!U && !R._fxp) {
                return
            }
            if (U && R._isMlt) {
                document.write(U)
            } else {
                if (k()) {
                    document.write('<div id="' + S + '">' + w(T, V, Q) + "</div>")
                } else {
                    document.write('<div id="' + S + '"></div>');
                    g(T, S, V, Q, R._html)
                }
            }
        }

        function r(R, Q) {
            if (Q._html == "") {
                return
            }
            if (window.attachEvent) {
                window.attachEvent("onload", T);
                window.attachEvent("onresize", S);
                if (u() < 7 || o()) {
                    window.attachEvent("onscroll", S)
                }
            } else {
                if (window.addEventListener) {
                    window.addEventListener("load", T, false);
                    window.addEventListener("resize", S, false)
                }
            }

            function T() {
                if (k()) {
                    N(R, Q)
                } else {
                    E(R, Q)
                }
                var U = Q._st;
                if (U > 0) {
                    window.setTimeout(function() {
                        var V = document.getElementById(f(R));
                        if (V) {
                            V.parentNode.removeChild(V)
                        }
                    }, U * 1000)
                }
            }

            function S() {
                d(R, Q)
            }
        }

        function q(T, aa) {
            var S = aa._h,
                R = aa._w,
                Z = 0,
                ab = 0,
                U = aa._html,
                V, Y, Q, W = "newwindow" + T,
                X = "about:blank";
            if (U == "") {
                return
            }
            if (k() && document.domain != location.hostname) {
                X = "javascript:void( (function(){var d=document;d.open();" + I() + "d.write('');d.close();})() )"
            }
            if (aa._top == 1) {
                Z = aa._hs
            } else {
                if (window.screen) {
                    Z = O() - aa._hs - S
                }
            }
            if (aa._left == 1) {
                ab = aa._vs
            } else {
                if (window.screen) {
                    ab = h() - aa._vs - R
                }
            }
            Q = "height=" + S + ",width=" + R + ",top=" + Z + ",left=" + ab + ",screenX=" + Z + ",screenY=" + ab + ",toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no";
            if (aa._bf || !k()) {
                V = window.open(X, W, Q);
                if (V) {
                    Y = V.document;
                    Y.open("text/html", "replace");
                    Y.write(U);
                    Y.close();
                    if (aa._st > 0) {
                        window.setTimeout(function() {
                            V && (V.close())
                        }, aa._st * 1000)
                    }
                }
            } else {
                if (window.attachEvent) {
                    window.attachEvent("onunload", function() {
                        var ac = window.event;
                        if ((ac.clientY < 0 && !ac.ctrlKey) || ac.altKey) {
                            var ae = window.open(X, W, Q);
                            if (ae) {
                                var ad = ae.document;
                                ad.open("text/html", "replace");
                                ad.write(U);
                                ae.focus()
                            }
                        }
                    })
                }
            }
        }

        function d(U, aa) {
            var S = document.getElementById(f(U));
            if (!S) {
                return
            }
            var R = S.style,
                W = aa._vs,
                V = aa._hs,
                Q = o(),
                Z = document,
                X = (Q ? document.body : document.documentElement),
                Y = Z.documentElement.scrollTop || Z.body.scrollTop,
                T = Z.documentElement.scrollLeft || Z.body.scrollLeft;
            if (k() && (u() < 7 || Q)) {
                if (aa._sf) {
                    if (aa._top == 1) {
                        R.top = (Y + V) + "px"
                    } else {
                        if (u() < 7) {
                            R.top = (Y + X.clientHeight - V - aa._h - 17) + "px"
                        } else {
                            R.bottom = V - Y + "px"
                        }
                    }
                    if (aa._left == 1) {
                        R.left = (T + W) + "px"
                    } else {
                        R.right = W - T + "px"
                    }
                } else {
                    if (aa._top != 1) {
                        R.top = (X.clientHeight - V - aa._h - 17) + "px"
                    }
                }
            }
        }

        function N(S, R) {
            var Q = "absolute",
                T = document.createElement("div");
            if (R._sf) {
                if (u() > 6 && !o()) {
                    Q = "fixed"
                }
            }
            T.id = f(S);
            T.style.position = Q;
            n(T, R);
            T.innerHTML = w(S, R._w, R._h) + H();
            document.body.appendChild(T)
        }

        function E(T, Q) {
            var S = f(T),
                Q = window[t][T],
                U = document.getElementById(S),
                R;
            if (!U) {
                U = document.createElement("div");
                U.id = S
            }
            U.innerHTML = H();
            R = U.style;
            R.position = Q._sf ? "fixed" : "absolute";
            n(U, Q);
            document.body.appendChild(U);
            g(T, S, Q._w, Q._h, Q._html)
        }

        function n(R, Q) {
            var S = R.style;
            S[(Q._left == 1 ? "left" : "right")] = Q._vs + "px";
            S[(Q._top == 1 ? "top" : "bottom")] = Q._hs + "px";
            S.width = Q._w + "px";
            S.height = (Q._h - 0 + 17) + "px";
            S.border = "0";
            S.zIndex = "2147483647"
        }

        function g(S, U, R, Y, T) {
            var W = J(S),
                Q = document.getElementById(U),
                X = document.createElement("iframe");
            X.id = W;
            X.name = W;
            X.width = R;
            X.height = Y;
            X.vspace = 0;
            X.hspace = 0;
            X.allowTransparency = "true";
            X.scrolling = "no";
            X.marginWidth = 0;
            X.marginHeight = 0;
            X.frameBorder = 0;
            X.style.border = 0;
            X.style.display = "block";
            Q.insertBefore(X, Q.firstChild);
            var V = X.contentWindow.document;
            V.write(T);
            window.setTimeout(function() {
                V.close()
            }, 0)
        }

        function w(R, S, Q) {
            var T = J(R);
            return '<iframe id="' + T + '" name="' + T + '"  width="' + S + '" height="' + Q + '" vspace="0" hspace="0" allowTransparency="true" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" style="border:0px;vertical-align:bottom" src="javascript:void((function(){var d=document;d.open(\'text/html\', \'replace\');' + I() + "d.write(parent." + t + "['" + R + "']._html);d.close()})())\"></iframe>"
        }

        function H() {
            return '<div style="height:' + (k() && o() ? "17" : "15") + "px;border:1px solid #E1E1E1;background:#F0F0F0;padding:0;margin:0;" + (k() ? "overflow:hidden;" : "") + '"><div style="float:right;clear:right;margin:2px 5px 0 0;width:39px;height:15px;cursor:pointer;background:transparent url(\'' + c + "') no-repeat scroll 0 0;" + (k() ? "_display:inline;" : "") + '" onmouseover="this.style.backgroundPosition=\'0 -20px\';" onmouseout="this.style.backgroundPosition=\'0 0\';" onclick="this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);"></div></div>'
        }

        function I() {
            if (document.domain != location.hostname) {
                return "document.domain='" + document.domain + "';"
            }
            return ""
        }

        function k() {
            return /msie/i.test(navigator.userAgent) && !window.opera
        }

        function u() {
            var R = navigator.userAgent,
                Q = R.indexOf("MSIE ");
            return Q == -1 ? 0 : parseFloat(R.substring(Q + 5, R.indexOf(";", Q)))
        }

        function o() {
            return (document.compatMode == "CSS1Compat" ? false : true)
        }

        function D(S) {
            var R, T, U, Q;
            for (T in S) {
                U = S[T];
                if (typeof U != "function") {
                    R = T;
                    Q = U
                }
            }
            window[t][R] = Q;
            x(R, Q)
        }
        var t = "BAIDU_CLB_SLOTS_MAP";
        if (!window[t]) {
            window[t] = {}
        }
        var b = "BAIDU_CALB_SINGLE_SETJSONADSLOT";
        if (!window[b]) {
            window[b] = D
        }
        if (!window.BAIDU_CLB_singleFillSlot) {
            window.BAIDU_CLB_singleFillSlot = function(Q) {
                if (window[t][Q]) {
                    return
                }
                document.write('<script type="text/javascript" charset="utf-8" src="' + G(Q, b) + '"><\/script>')
            }
        }
    })();

}
/*
     FILE ARCHIVED ON 21:55:40 Nov 06, 2010 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:10:31 Aug 21, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 371.011
  exclusion.robots: 0.128
  exclusion.robots.policy: 0.117
  cdx.remote: 0.134
  esindex: 0.012
  LoadShardBlock: 175.567 (3)
  PetaboxLoader3.datanode: 107.141 (5)
  CDXLines.iter: 34.385 (3)
  load_resource: 181.073 (2)
  PetaboxLoader3.resolve: 85.833 (2)
*/