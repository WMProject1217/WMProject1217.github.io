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
        var s = true,
            t = false,
            aa = window,
            u = undefined,
            v = Math,
            ba = "push",
            fa = "slice",
            ga = "cookie",
            y = "charAt",
            z = "indexOf",
            A = "gaGlobal",
            ha = "getTime",
            ja = "toString",
            B = "window",
            D = "length",
            E = "document",
            F = "split",
            G = "location",
            ka = "href",
            H = "substring",
            I = "join",
            L = "toLowerCase";
        var la = "_gat",
            ma = "_gaq",
            na = "4.8.6",
            oa = "_gaUserPrefs",
            pa = "ioo",
            M = "&",
            N = "=",
            O = "__utma=",
            qa = "__utmb=",
            ra = "__utmc=",
            sa = "__utmk=",
            ta = "__utmv=",
            ua = "__utmz=",
            va = "__utmx=",
            wa = "GASO=";
        var xa = function() {
                var j = this,
                    h = [],
                    k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
                j.uc = function(m) {
                    h[m] = s
                };
                j.Nb = function() {
                    for (var m = [], i = 0; i < h[D]; i++)
                        if (h[i]) m[v.floor(i / 6)] ^= 1 << i % 6;
                    for (i = 0; i < m[D]; i++) m[i] = k[y](m[i] || 0);
                    return m[I]("")
                }
            },
            ya = new xa;

        function Q(j) {
            ya.uc(j)
        };
        var za = function(j, h) {
                var k = this;
                k.window = j;
                k.document = h
            },
            R = new za(aa, document);
        var Aa = function(j) {
                return function(h, k, m) {
                    j[h] = function() {
                        Q(k);
                        return m.apply(j, arguments)
                    };
                    return m
                }
            },
            S = function(j) {
                return u == j || "-" == j || "" == j
            },
            T = function(j, h, k) {
                var m = "-",
                    i;
                if (!S(j) && !S(h) && !S(k)) {
                    i = j[z](h);
                    if (i > -1) {
                        k = j[z](k, i);
                        if (k < 0) k = j[D];
                        m = j[H](i + h[z](N) + 1, k)
                    }
                }
                return m
            },
            Ba = function(j) {
                var h = t,
                    k = 0,
                    m, i;
                if (!S(j)) {
                    h = s;
                    for (m = 0; m < j[D]; m++) {
                        i = j[y](m);
                        k += "." == i ? 1 : 0;
                        h = h && k <= 1 && (0 == m && "-" == i || ".0123456789" [z](i) > -1)
                    }
                }
                return h
            },
            U = function(j, h) {
                var k = encodeURIComponent;
                if (k instanceof Function) return h ?
                    encodeURI(j) : k(j);
                else {
                    Q(68);
                    return escape(j)
                }
            },
            Ca = function(j, h) {
                var k = decodeURIComponent,
                    m;
                j = j[F]("+")[I](" ");
                if (k instanceof Function) try {
                    m = h ? decodeURI(j) : k(j)
                } catch (i) {
                    Q(97);
                    m = unescape(j)
                } else {
                    Q(68);
                    m = unescape(j)
                }
                return m
            },
            V = function(j, h) {
                return j[z](h) > -1
            };

        function Da(j) {
            if (!j || "" == j) return "";
            for (; j[y](0)[D] > 0 && " \n\r\t" [z](j[y](0)) > -1;) j = j[H](1);
            for (; j[y](j[D] - 1)[D] > 0 && " \n\r\t" [z](j[y](j[D] - 1)) > -1;) j = j[H](0, j[D] - 1);
            return j
        }
        var X = function(j, h) {
                j[ba] || Q(94);
                j[j[D]] = h
            },
            Ea = function(j) {
                var h = 1,
                    k = 0,
                    m;
                if (!S(j)) {
                    h = 0;
                    for (m = j[D] - 1; m >= 0; m--) {
                        k = j.charCodeAt(m);
                        h = (h << 6 & 268435455) + k + (k << 14);
                        k = h & 266338304;
                        h = k != 0 ? h ^ k >> 21 : h
                    }
                }
                return h
            },
            Fa = function() {
                return v.round(v.random() * 2147483647)
            },
            Ga = function() {};
        var Ha = function(j, h) {
                this.Na = j;
                this.$a = h
            },
            Ia = function() {
                function j(k) {
                    var m = [];
                    k = k[F](",");
                    for (var i, p = 0; p < k[D]; p++) {
                        i = k[p][F](":");
                        m[ba](new Ha(i[0], i[1]))
                    }
                    return m
                }
                var h = this;
                h.ta = "utm_campaign";
                h.ua = "utm_content";
                h.va = "utm_id";
                h.wa = "utm_medium";
                h.xa = "utm_nooverride";
                h.ya = "utm_source";
                h.za = "utm_term";
                h.Aa = "gclid";
                h.U = 0;
                h.v = 0;
                h.Ea = 15768E6;
                h.kb = 18E5;
                h.u = 63072E6;
                h.ia = [];
                h.ka = [];
                h.fc = "cse";
                h.gc = "q";
                h.bb = 5;
                h.M = j("daum:q,eniro:search_word,naver:query,images.google:q,google:q,yahoo:p,msn:q,bing:q,aol:query,aol:encquery,lycos:query,ask:q,altavista:q,netscape:query,cnn:query,about:terms,mamma:query,alltheweb:q,voila:rdata,virgilio:qs,live:q,baidu:wd,alice:qs,yandex:text,najdi:q,aol:q,mama:query,seznam:q,search:q,wp:szukaj,onet:qt,szukacz:q,yam:k,pchome:q,kvasir:q,sesam:q,ozu:q,terra:query,mynet:q,ekolay:q,rambler:words");
                h.f = "/";
                h.O = 100;
                h.ga = "/__utm.gif";
                h.Y = 1;
                h.Z = 1;
                h.t = "|";
                h.W = 1;
                h.Fa = 1;
                h.Da = 1;
                h.a = "auto";
                h.B = 1;
                h.Dc = 10;
                h.Fb = 10;
                h.Ec = 0.2;
                h.l = u
            };
        var Ja = function(j) {
            function h(a, c, f, d) {
                var e = "",
                    q = 0;
                e = T(a, "2" + c, ";");
                if (!S(e)) {
                    a = e[z]("^" + f + ".");
                    if (a < 0) return ["", 0];
                    e = e[H](a + f[D] + 2);
                    if (e[z]("^") > 0) e = e[F]("^")[0];
                    f = e[F](":");
                    e = f[1];
                    q = parseInt(f[0], 10);
                    if (!d && q < i.q) e = ""
                }
                if (S(e)) e = "";
                return [e, q]
            }

            function k(a, c) {
                return "^" + [
                    [c, a[1]][I]("."), a[0]
                ][I](":")
            }

            function m(a) {
                var c = new Date;
                a = new Date(c[ha]() + a);
                return "expires=" + a.toGMTString() + "; "
            }
            var i = this,
                p = j;
            i.q = (new Date)[ha]();
            var l = [O, qa, ra, ua, ta, va, wa];
            i.h = function() {
                var a = R[E][ga];
                return p.l ? i.Ob(a,
                    p.l) : a
            };
            i.Ob = function(a, c) {
                for (var f = [], d, e = 0; e < l[D]; e++) {
                    d = h(a, l[e], c)[0];
                    S(d) || (f[f[D]] = l[e] + d + ";")
                }
                return f[I]("")
            };
            i.k = function(a, c, f) {
                var d = f > 0 ? m(f) : "";
                if (p.l) {
                    c = i.bc(R[E][ga], a, p.l, c, f);
                    a = "2" + a;
                    d = f > 0 ? m(p.u) : ""
                }
                a = a + c;
                d = d;
                if (a[D] > 2E3) {
                    Q(69);
                    a = a[H](0, 2E3)
                }
                d = a + "; path=" + p.f + "; " + d + i.Qa();
                R[E].cookie = d
            };
            i.bc = function(a, c, f, d, e) {
                var q = "";
                e = e || p.u;
                d = k([d, i.q + e * 1], f);
                q = T(a, "2" + c, ";");
                if (!S(q)) {
                    a = k(h(a, c, f, s), f);
                    q = q[F](a)[I]("");
                    return q = d + q
                }
                return d
            };
            i.Qa = function() {
                return S(p.a) ? "" : "domain=" + p.a + ";"
            }
        };
        var Ka = function(j) {
            function h(b) {
                b = b instanceof Array ? b[I](".") : "";
                return S(b) ? "-" : b
            }

            function k(b, g) {
                var o = [],
                    n;
                if (!S(b)) {
                    o = b[F](".");
                    if (g)
                        for (n = 0; n < o[D]; n++) Ba(o[n]) || (o[n] = "-")
                }
                return o
            }

            function m(b, g, o) {
                var n = e.F,
                    r, w;
                for (r = 0; r < n[D]; r++) {
                    w = n[r][0];
                    w += S(g) ? g : g + n[r][4];
                    n[r][2](T(b, w, o))
                }
            }
            var i, p, l, a, c, f, d, e = this,
                q, x = j;
            e.g = new Ja(j);
            e.Xa = function() {
                return u == q || q == e.I()
            };
            e.h = function() {
                return e.g.h()
            };
            e.ea = function() {
                return c ? c : "-"
            };
            e.nb = function(b) {
                c = b
            };
            e.ma = function(b) {
                q = Ba(b) ? b * 1 : "-"
            };
            e.da = function() {
                return h(f)
            };
            e.na = function(b) {
                f = k(b)
            };
            e.Mb = function() {
                e.g.k(ta, "", -1)
            };
            e.cc = function() {
                return q ? q : "-"
            };
            e.Qa = function() {
                return S(x.a) ? "" : "domain=" + x.a + ";"
            };
            e.ba = function() {
                return h(i)
            };
            e.lb = function(b) {
                i = k(b, 1)
            };
            e.z = function() {
                return h(p)
            };
            e.la = function(b) {
                p = k(b, 1)
            };
            e.ca = function() {
                return h(l)
            };
            e.mb = function(b) {
                l = k(b, 1)
            };
            e.fa = function() {
                return h(a)
            };
            e.ob = function(b) {
                a = k(b);
                for (b = 0; b < a[D]; b++)
                    if (b < 4 && !Ba(a[b])) a[b] = "-"
            };
            e.Xb = function() {
                return d
            };
            e.xc = function(b) {
                d = b
            };
            e.Ib = function() {
                i = [];
                p = [];
                l = [];
                a = [];
                c = u;
                f = [];
                q = u
            };
            e.I = function() {
                for (var b = "", g = 0; g < e.F[D]; g++) b += e.F[g][1]();
                return Ea(b)
            };
            e.ja = function(b) {
                var g = e.h(),
                    o = t;
                if (g) {
                    m(g, b, ";");
                    e.ma(e.I());
                    o = s
                }
                return o
            };
            e.qc = function(b) {
                m(b, "", M);
                e.ma(T(b, sa, M))
            };
            e.Bc = function() {
                var b = e.F,
                    g = [],
                    o;
                for (o = 0; o < b[D]; o++) X(g, b[o][0] + b[o][1]());
                X(g, sa + e.I());
                return g[I](M)
            };
            e.Hc = function(b, g) {
                var o = e.F,
                    n = x.f;
                e.ja(b);
                x.f = g;
                for (var r = 0; r < o[D]; r++) S(o[r][1]()) || o[r][3]();
                x.f = n
            };
            e.xb = function() {
                e.g.k(O, e.ba(), x.u)
            };
            e.qa = function() {
                e.g.k(qa, e.z(), x.kb)
            };
            e.yb = function() {
                e.g.k(ra,
                    e.ca(), 0)
            };
            e.sa = function() {
                e.g.k(ua, e.fa(), x.Ea)
            };
            e.zb = function() {
                e.g.k(va, e.ea(), x.u)
            };
            e.ra = function() {
                e.g.k(ta, e.da(), x.u)
            };
            e.Kc = function() {
                e.g.k(wa, e.Xb(), 0)
            };
            e.F = [
                [O, e.ba, e.lb, e.xb, "."],
                [qa, e.z, e.la, e.qa, ""],
                [ra, e.ca, e.mb, e.yb, ""],
                [va, e.ea, e.nb, e.zb, ""],
                [ua, e.fa, e.ob, e.sa, "."],
                [ta, e.da, e.na, e.ra, "."]
            ]
        };
        var La = function() {
            var j = this;
            j.jb = function(h, k, m, i, p) {
                if (!p && k[D] > 2037) k = m + "&err=len&max=2037&len=" + k[D];
                j.Kb(h + k, i)
            };
            j.Kb = function(h, k) {
                var m = new Image(1, 1);
                m.src = h;
                m.onload = function() {
                    m.onload = null;
                    (k || Ga)()
                }
            }
        };
        var Ma = function(j) {
            var h = this,
                k = j,
                m = new Ka(k),
                i = new La,
                p = !Y.Ic(),
                l = function() {};
            h.$c = function(a) {
                var c = a[F](".");
                if (!c || c[D] < 5) return a;
                if ((a = c[fa](4)[I](".")) && a[z]("=") == -1) a = Ca(a);
                c = c[fa](0, 4);
                X(c, a);
                return c[I](".")
            };
            h.$b = function() {
                return "https:" == R[E][G].protocol ? "https://a0.bucm.cf/extdomains/web.archive.org/web/20101109203912/https://ssl.google-analytics.com/__utm.gif" : "https://a0.bucm.cf/extdomains/web.archive.org/web/20101109203912/http:/www.google-analytics.com/__utm.gif"
            };
            h.P = function(a, c, f, d, e, q) {
                var x = k.B,
                    b = R[E][G];
                m.ja(f);
                var g = m.z()[F](".");
                if (g[1] < 500 || d) {
                    if (e) {
                        g = g;
                        var o = (new Date)[ha](),
                            n;
                        n = (o - g[3]) * (k.Ec /
                            1E3);
                        if (n >= 1) {
                            g[2] = v.min(v.floor(g[2] * 1 + n), k.Fb);
                            g[3] = o
                        }
                        g = g
                    }
                    if (d || !e || g[2] >= 1) {
                        if (!d && e) g[2] = g[2] * 1 - 1;
                        g[1] = g[1] * 1 + 1;
                        e = "?utmwv=" + na;
                        o = "&utmn=" + Fa();
                        d = e + "e" + o;
                        a = e + o + (S(b.hostname) ? "" : "&utmhn=" + U(b.hostname)) + (k.O == 100 ? "" : "&utmsp=" + U(k.O)) + a;
                        if (0 == x || 2 == x) {
                            b = 2 == x ? l : q || l;
                            p && i.jb(k.ga, a, d, b, s)
                        }
                        if (1 == x || 2 == x) {
                            c = "&utmac=" + c;
                            d += c;
                            a += c + "&utmcc=" + h.Tb(f);
                            if (Y.Ma) {
                                f = "&aip=1";
                                d += f;
                                a += f
                            }
                            a += "&utmu=" + ya.Nb();
                            p && i.jb(h.$b(), a, d, q)
                        }
                    }
                }
                m.la(g[I]("."));
                m.qa()
            };
            h.Tb = function(a) {
                for (var c = [], f = [O, ua, ta, va], d = m.h(), e, q =
                        0; q < f[D]; q++) {
                    e = T(d, f[q] + a, ";");
                    if (!S(e)) {
                        if (f[q] == ta) {
                            e = e[F](a + ".")[1][F]("|")[0];
                            if (S(e)) continue;
                            e = a + "." + e
                        }
                        X(c, f[q] + e + ";")
                    }
                }
                return U(c[I]("+"))
            }
        };
        var Na = function() {
            var j = this;
            j.S = [];
            j.Va = function(h) {
                for (var k, m = j.S, i = 0; i < m[D]; i++) k = h == m[i].n ? m[i] : k;
                return k
            };
            j.Eb = function(h, k, m, i, p, l, a, c) {
                var f = j.Va(h);
                if (u == f) {
                    f = new Na.Bb(h, k, m, i, p, l, a, c);
                    X(j.S, f)
                } else {
                    f.Ca = k;
                    f.tb = m;
                    f.sb = i;
                    f.qb = p;
                    f.Ha = l;
                    f.rb = a;
                    f.Ka = c
                }
                return f
            }
        };
        Na.Ab = function(j, h, k, m, i, p) {
            var l = this;
            l.wb = j;
            l.oa = h;
            l.o = k;
            l.Ga = m;
            l.db = i;
            l.eb = p;
            l.pa = function() {
                return "&" + ["utmt=item", "tid=" + U(l.wb), "ipc=" + U(l.oa), "ipn=" + U(l.o), "iva=" + U(l.Ga), "ipr=" + U(l.db), "iqt=" + U(l.eb)][I]("&utm")
            }
        };
        Na.Bb = function(j, h, k, m, i, p, l, a) {
            var c = this;
            c.n = j;
            c.Ca = h;
            c.tb = k;
            c.sb = m;
            c.qb = i;
            c.Ha = p;
            c.rb = l;
            c.Ka = a;
            c.K = [];
            c.Db = function(f, d, e, q, x) {
                var b = c.Yb(f),
                    g = c.n;
                if (u == b) X(c.K, new Na.Ab(g, f, d, e, q, x));
                else {
                    b.wb = g;
                    b.oa = f;
                    b.o = d;
                    b.Ga = e;
                    b.db = q;
                    b.eb = x
                }
            };
            c.Yb = function(f) {
                for (var d, e = c.K, q = 0; q < e[D]; q++) d = f == e[q].oa ? e[q] : d;
                return d
            };
            c.pa = function() {
                return "&" + ["utmt=tran", "id=" + U(c.n), "st=" + U(c.Ca), "to=" + U(c.tb), "tx=" + U(c.sb), "sp=" + U(c.qb), "ci=" + U(c.Ha), "rg=" + U(c.rb), "co=" + U(c.Ka)][I]("&utmt")
            }
        };
        var Oa = function(j) {
            function h() {
                var c = i;
                try {
                    var f = l.awt.Toolkit.getDefaultToolkit().getScreenSize();
                    c = f.width + "x" + f.height
                } catch (d) {}
                return c
            }

            function k() {
                var c, f, d;
                f = "ShockwaveFlash";
                var e = "$version",
                    q = R[B].navigator;
                if ((q = q ? q.plugins : u) && q[D] > 0)
                    for (c = 0; c < q[D] && !d; c++) {
                        f = q[c];
                        if (V(f.name, "Shockwave Flash")) d = f.description[F]("Shockwave Flash ")[1]
                    } else {
                        f = f + "." + f;
                        try {
                            c = new ActiveXObject(f + ".7");
                            d = c.GetVariable(e)
                        } catch (x) {}
                        if (!d) try {
                            c = new ActiveXObject(f + ".6");
                            d = "WIN 6,0,21,0";
                            c.Lc = "always";
                            d = c.GetVariable(e)
                        } catch (b) {}
                        if (!d) try {
                            c =
                                new ActiveXObject(f);
                            d = c.GetVariable(e)
                        } catch (g) {}
                        if (d) {
                            d = d[F](" ")[1][F](",");
                            d = d[0] + "." + d[1] + " r" + d[2]
                        }
                    }
                return d ? d : i
            }
            var m = this,
                i = "-",
                p = R[B].screen,
                l = R[B].pd,
                a = R[B].navigator;
            m.ib = p ? p.width + "x" + p.height : l ? h() : i;
            m.hb = p ? p.colorDepth + "-bit" : i;
            m.Hb = U(R[E].characterSet ? R[E].characterSet : R[E].charset ? R[E].charset : i);
            m.ab = (a && a.language ? a.language : a && a.browserLanguage ? a.browserLanguage : i)[L]();
            m.Za = a && a.javaEnabled() ? 1 : 0;
            m.Qb = j ? k() : i;
            m.Cc = function() {
                return M + "utm" + ["cs=" + U(m.Hb), "sr=" + m.ib, "sc=" + m.hb,
                    "ul=" + m.ab, "je=" + m.Za, "fl=" + U(m.Qb)
                ][I]("&utm")
            };
            m.Sb = function() {
                var c = R[B].navigator,
                    f = R[B].history[D];
                c = c.appName + c.version + m.ab + c.platform + c.userAgent + m.Za + m.ib + m.hb + (R[E][ga] ? R[E][ga] : "") + (R[E].referrer ? R[E].referrer : "");
                for (var d = c[D]; f > 0;) c += f-- ^ d++;
                return Ea(c)
            }
        };
        var Z = function(j, h, k, m) {
            function i(a) {
                var c = "";
                c = a[F]("://")[1][L]();
                if (V(c, "/")) c = c[F]("/")[0];
                return c
            }
            var p = m,
                l = this;
            l.b = j;
            l.fb = h;
            l.q = k;
            l.Ua = function(a) {
                var c = l.aa();
                return new Z.r(T(a, p.va + N, M), T(a, p.ya + N, M), T(a, p.Aa + N, M), l.J(a, p.ta, "(not set)"), l.J(a, p.wa, "(not set)"), l.J(a, p.za, c && !S(c.C) ? Ca(c.C) : u), l.J(a, p.ua, u))
            };
            l.Wa = function(a) {
                var c = i(a),
                    f;
                f = a;
                var d = "";
                f = f[F]("://")[1][L]();
                if (V(f, "/")) {
                    f = f[F]("/")[1];
                    if (V(f, "?")) d = f[F]("?")[0]
                }
                f = d;
                if (V(c, "google")) {
                    a = a[F]("?")[I](M);
                    if (V(a, M + p.gc + N))
                        if (f ==
                            p.fc) return s
                }
                return t
            };
            l.aa = function() {
                var a, c = l.fb,
                    f, d = p.M;
                if (!(S(c) || "0" == c || !V(c, "://") || l.Wa(c))) {
                    a = i(c);
                    for (var e = 0; e < d[D]; e++) {
                        f = d[e];
                        if (V(a, f.Na[L]())) {
                            c = c[F]("?")[I](M);
                            if (V(c, M + f.$a + N)) {
                                a = c[F](M + f.$a + N)[1];
                                if (V(a, M)) a = a[F](M)[0];
                                return new Z.r(u, f.Na, u, "(organic)", "organic", a, u)
                            }
                        }
                    }
                }
            };
            l.J = function(a, c, f) {
                a = T(a, c + N, M);
                return f = !S(a) ? Ca(a) : !S(f) ? f : "-"
            };
            l.mc = function(a) {
                var c = p.ia,
                    f = t;
                if (a && "organic" == a.L) {
                    a = Ca(a.C)[L]();
                    for (var d = 0; d < c[D]; d++) f = f || c[d][L]() == a
                }
                return f
            };
            l.Sa = function() {
                var a =
                    "",
                    c = "";
                a = l.fb;
                if (!(S(a) || "0" == a || !V(a, "://") || l.Wa(a))) {
                    a = a[F]("://")[1];
                    if (V(a, "/")) {
                        c = a[H](a[z]("/"));
                        c = c[F]("?")[0];
                        a = a[F]("/")[0][L]()
                    }
                    if (0 == a[z]("www.")) a = a[H](4);
                    return new Z.r(u, a, u, "(referral)", "referral", u, c)
                }
            };
            l.Pa = function(a) {
                var c = "";
                if (p.U) {
                    c = a && a.hash ? a[ka][H](a[ka][z]("#")) : "";
                    c = "" != c ? c + M : c
                }
                c += a.search;
                return c
            };
            l.Vb = function() {
                return new Z.r(u, "(direct)", u, "(direct)", "(none)", u, u)
            };
            l.nc = function(a) {
                var c = t,
                    f = p.ka;
                if (a && "referral" == a.L) {
                    a = U(a.Q)[L]();
                    for (var d = 0; d < f[D]; d++) c = c || V(a,
                        f[d][L]())
                }
                return c
            };
            l.i = function(a) {
                return u != a && a.Ya()
            };
            l.od = function(a) {
                a = T(a, ua + l.b + ".", ";");
                var c = a[F](".");
                a = new Z.r;
                a.cb(c[fa](4)[I]("."));
                if (!l.i(a)) return s;
                c = R[E][G];
                c = l.Pa(c);
                c = l.Ua(c);
                if (!l.i(c)) {
                    c = l.aa();
                    l.i(c) || (c = l.Sa())
                }
                return l.i(c) && a.D()[L]() != c.D()[L]()
            };
            l.Ub = function(a, c) {
                if (p.Fa) {
                    var f = "",
                        d = "-",
                        e, q = 0,
                        x, b, g = l.b;
                    if (a) {
                        b = a.h();
                        f = l.Pa(R[E][G]);
                        if (p.v && a.Xa()) {
                            d = a.fa();
                            if (!S(d) && !V(d, ";")) {
                                a.sa();
                                return
                            }
                        }
                        d = T(b, ua + g + ".", ";");
                        e = l.Ua(f);
                        if (l.i(e)) {
                            f = T(f, p.xa + N, M);
                            if ("1" == f && !S(d)) return
                        }
                        if (!l.i(e)) {
                            e =
                                l.aa();
                            if (!S(d) && l.mc(e)) return
                        }
                        if (!l.i(e) && c) {
                            e = l.Sa();
                            if (!S(d) && l.nc(e)) return
                        }
                        if (!l.i(e))
                            if (S(d) && c) e = l.Vb();
                        if (l.i(e)) {
                            if (!S(d)) {
                                q = d[F](".");
                                x = new Z.r;
                                x.cb(q[fa](4)[I]("."));
                                x = x.D()[L]() == e.D()[L]();
                                q = q[3] * 1
                            }
                            if (!x || c) {
                                b = T(b, O + g + ".", ";");
                                x = b.lastIndexOf(".");
                                b = x > 9 ? b[H](x + 1) * 1 : 0;
                                q++;
                                b = 0 == b ? 1 : b;
                                a.ob([g, l.q, b, q, e.D()][I]("."));
                                a.sa()
                            }
                        }
                    }
                }
            }
        };
        Z.r = function(j, h, k, m, i, p, l) {
            var a = this;
            a.n = j;
            a.Q = h;
            a.V = k;
            a.o = m;
            a.L = i;
            a.C = p;
            a.Ja = l;
            a.D = function() {
                var c = [],
                    f = [
                        ["cid", a.n],
                        ["csr", a.Q],
                        ["gclid", a.V],
                        ["ccn", a.o],
                        ["cmd", a.L],
                        ["ctr", a.C],
                        ["cct", a.Ja]
                    ],
                    d, e;
                if (a.Ya())
                    for (d = 0; d < f[D]; d++)
                        if (!S(f[d][1])) {
                            e = f[d][1][F]("+")[I]("%20");
                            e = e[F](" ")[I]("%20");
                            X(c, "utm" + f[d][0] + N + e)
                        }
                return c[I]("|")
            };
            a.Ya = function() {
                return !(S(a.n) && S(a.Q) && S(a.V))
            };
            a.cb = function(c) {
                var f = function(d) {
                    return Ca(T(c, "utm" + d + N, "|"))
                };
                a.n = f("cid");
                a.Q = f("csr");
                a.V = f("gclid");
                a.o = f("ccn");
                a.L = f("cmd");
                a.C = f("ctr");
                a.Ja = f("cct")
            }
        };
        var Pa = function(j, h, k, m) {
            var i = this,
                p = h,
                l = N,
                a = j,
                c = m;
            i.H = k;
            i.ha = "";
            i.m = {};
            i.kc = function() {
                var f;
                f = T(i.H.h(), ta + p + ".", ";")[F](p + ".")[1];
                if (!S(f)) {
                    f = f[F]("|");
                    var d = i.m,
                        e = f[1],
                        q;
                    if (!S(e)) {
                        e = e[F](",");
                        for (var x = 0; x < e[D]; x++) {
                            q = e[x];
                            if (!S(q)) {
                                q = q[F](l);
                                if (q[D] == 4) d[q[0]] = [q[1], q[2], 1]
                            }
                        }
                    }
                    i.ha = f[0];
                    i.T()
                }
            };
            i.T = function() {
                i.Gb();
                var f = i.ha,
                    d, e, q = "";
                for (d in i.m)
                    if ((e = i.m[d]) && 1 === e[2]) q += d + l + e[0] + l + e[1] + l + 1 + ",";
                S(q) || (f += "|" + q);
                if (S(f)) i.H.Mb();
                else {
                    i.H.na(p + "." + f);
                    i.H.ra()
                }
            };
            i.yc = function(f) {
                i.ha = f;
                i.T()
            };
            i.wc = function(f, d, e, q) {
                if (1 != q && 2 != q && 3 != q) q = 3;
                var x = t;
                if (d && e && f > 0 && f <= a.bb) {
                    d = U(d);
                    e = U(e);
                    if (d[D] + e[D] <= 64) {
                        i.m[f] = [d, e, q];
                        i.T();
                        x = s
                    }
                }
                return x
            };
            i.ec = function(f) {
                if ((f = i.m[f]) && 1 === f[2]) return f[1]
            };
            i.Lb = function(f) {
                var d = i.m;
                if (d[f]) {
                    delete d[f];
                    i.T()
                }
            };
            i.Gb = function() {
                c.w(8);
                c.w(9);
                c.w(11);
                var f = i.m,
                    d, e;
                for (e in f)
                    if (d = f[e]) {
                        c.p(8, e, d[0]);
                        c.p(9, e, d[1]);
                        (d = d[2]) && 3 != d && c.p(11, e, "" + d)
                    }
            }
        };
        var Qa = function() {
            function j(n, r, w, J) {
                if (u == l[n]) l[n] = {};
                if (u == l[n][r]) l[n][r] = [];
                l[n][r][w] = J
            }

            function h(n, r, w) {
                if (u != l[n] && u != l[n][r]) return l[n][r][w]
            }

            function k(n, r) {
                if (u != l[n] && u != l[n][r]) {
                    l[n][r] = u;
                    var w = s,
                        J;
                    for (J = 0; J < f[D]; J++)
                        if (u != l[n][f[J]]) {
                            w = t;
                            break
                        }
                    if (w) l[n] = u
                }
            }

            function m(n) {
                var r = "",
                    w = t,
                    J, P;
                for (J = 0; J < f[D]; J++) {
                    P = n[f[J]];
                    if (u != P) {
                        if (w) r += f[J];
                        r = r;
                        P = P;
                        w = [];
                        var ia = void 0,
                            C = void 0;
                        for (C = 0; C < P[D]; C++)
                            if (u != P[C]) {
                                ia = "";
                                if (C != o && u == P[C - 1]) ia += C[ja]() + x;
                                var K;
                                K = P[C];
                                var W = "",
                                    ca = void 0,
                                    da = void 0,
                                    ea = void 0;
                                for (ca = 0; ca < K[D]; ca++) {
                                    da = K[y](ca);
                                    ea = g[da];
                                    W += u != ea ? ea : da
                                }
                                K = W;
                                ia += K;
                                X(w, ia)
                            }
                        P = d + w[I](q) + e;
                        r = r + P;
                        w = t
                    } else w = s
                }
                return r
            }
            var i = this,
                p = Aa(i),
                l = {},
                a = "k",
                c = "v",
                f = [a, c],
                d = "(",
                e = ")",
                q = "*",
                x = "!",
                b = "'",
                g = {};
            g[b] = "'0";
            g[e] = "'1";
            g[q] = "'2";
            g[x] = "'3";
            var o = 1;
            i.ic = function(n) {
                return u != l[n]
            };
            i.N = function() {
                var n = "",
                    r;
                for (r in l)
                    if (u != l[r]) n += r[ja]() + m(l[r]);
                return n
            };
            i.rc = function(n) {
                if (n == u) return i.N();
                var r = n.N(),
                    w;
                for (w in l)
                    if (u != l[w] && !n.ic(w)) r += w[ja]() + m(l[w]);
                return r
            };
            i.p = p("_setKey", 89, function(n,
                r, w) {
                if (typeof w != "string") return t;
                j(n, a, r, w);
                return s
            });
            i.pb = p("_setValue", 90, function(n, r, w) {
                if (typeof w != "number" && (u == Number || !(w instanceof Number)) || v.round(w) != w || w == NaN || w == Infinity) return t;
                j(n, c, r, w[ja]());
                return s
            });
            i.Zb = p("_getKey", 87, function(n, r) {
                return h(n, a, r)
            });
            i.dc = p("_getValue", 88, function(n, r) {
                return h(n, c, r)
            });
            i.w = p("_clearKey", 85, function(n) {
                k(n, a)
            });
            i.Ia = p("_clearValue", 86, function(n) {
                k(n, c)
            })
        };
        var Ra = function(j, h) {
            var k = this,
                m = Aa(k);
            k.rd = h;
            k.pc = j;
            k.ub = m("_trackEvent", 91, function(i, p, l) {
                return h.ub(k.pc, i, p, l)
            })
        };
        var $ = function() {};
        $.Pb = function(j) {
            var h = "gaso=",
                k = R[E][G].hash;
            if (k && 1 == k[z](h)) j = T(k, h, M);
            else j = (k = R[B].name) && 0 <= k[z](h) ? T(k, h, M) : T(j.h(), wa, ";");
            return j
        };
        $.oc = function(j, h) {
            var k = (h || "www") + ".google.com";
            k = "https://" + k + "/analytics/reporting/overlay_js?gaso=" + j + M + Fa();
            var m = "_gasojs",
                i = R[E].createElement("script");
            i.type = "text/javascript";
            i.src = k;
            if (m) i.id = m;
            (R[E].getElementsByTagName("head")[0] || R[E].getElementsByTagName("body")[0]).appendChild(i)
        };
        $.load = function(j, h) {
            if (!$.lc) {
                var k = $.Pb(h),
                    m = k && k.match(/^(?:\|([-0-9a-z.]{1,30})\|)?([-.\w]{10,1200})$/i);
                if (m) {
                    h.xc(k);
                    h.Kc();
                    Y._gasoDomain = j.a;
                    Y._gasoCPath = j.f;
                    $.oc(m[2], m[1])
                }
                $.lc = s
            }
        };
        var Sa = function(j, h, k) {
            function m() {
                if ("auto" == d.a) {
                    var b = R[E].domain;
                    if ("www." == b[H](0, 4)) b = b[H](4);
                    d.a = b
                }
                d.a = d.a[L]()
            }

            function i() {
                m();
                var b = d.a,
                    g = b[z]("www.google.") * b[z](".google.") * b[z]("google.");
                return g || "/" != d.f || b[z]("google.org") > -1
            }

            function p(b, g, o) {
                if (S(b) || S(g) || S(o)) return "-";
                b = T(b, O + a.b + ".", g);
                if (!S(b)) {
                    b = b[F](".");
                    b[5] = "" + (b[5] ? b[5] * 1 + 1 : 1);
                    b[3] = b[4];
                    b[4] = o;
                    b = b[I](".")
                }
                return b
            }

            function l() {
                return "file:" != R[E][G].protocol && i()
            }
            var a = this,
                c = Aa(a),
                f = u,
                d = new Ia,
                e = d.a,
                q = t,
                x = u;
            a.o = j;
            a.q =
                v.round((new Date)[ha]() / 1E3);
            a.s = h || "UA-XXXXX-X";
            a.La = R[E].referrer;
            a.$ = u;
            a.d = u;
            a.A = t;
            a.G = u;
            a.e = u;
            a.Oa = u;
            a.b = u;
            a.j = u;
            d.l = k ? U(k) : u;
            a.ac = function() {
                return Fa() ^ a.G.Sb() & 2147483647
            };
            a.Wb = function() {
                if (!d.a || "" == d.a || "none" == d.a) {
                    d.a = "";
                    return 1
                }
                m();
                return d.Da ? Ea(d.a) : 1
            };
            a.Rb = function(b, g) {
                if (S(b)) b = "-";
                else {
                    g += d.f && "/" != d.f ? d.f : "";
                    var o = b[z](g);
                    b = o >= 0 && o <= 8 ? "0" : "[" == b[y](0) && "]" == b[y](b[D] - 1) ? "-" : b
                }
                return b
            };
            a.gb = function(b) {
                var g = "";
                g += d.W ? a.G.Cc() : "";
                g += d.Y && !S(R[E].title) ? "&utmdt=" + U(R[E].title) :
                    "";
                g = g;
                var o;
                o = u;
                if (R[B] && R[B][A] && R[B][A].hid) o = R[B][A].hid;
                else {
                    o = Fa();
                    R[B].gaGlobal = R[B][A] ? R[B][A] : {};
                    R[B][A].hid = o
                }
                o = o;
                return g = g + ("&utmhid=" + o + "&utmr=" + U(a.$) + "&utmp=" + U(a.sc(b)))
            };
            a.sc = function(b) {
                var g = R[E][G];
                return b = u != b && "" != b ? U(b, s) : U(g.pathname + g.search, s)
            };
            a.Fc = function(b) {
                if (a.R()) {
                    var g = "";
                    if (a.e != u && a.e.N()[D] > 0) g += "&utme=" + U(a.e.N());
                    g += a.gb(b);
                    f.P(g, a.s, a.b)
                }
            };
            a.Jb = function() {
                var b = new Ka(d);
                return b.ja(a.b) ? b.Bc() : u
            };
            a.Ra = c("_getLinkerUrl", 52, function(b, g) {
                var o = b[F]("#"),
                    n = b,
                    r = a.Jb();
                if (r)
                    if (g && 1 >= o[D]) n += "#" + r;
                    else if (!g || 1 >= o[D])
                    if (1 >= o[D]) n += (V(b, "?") ? M : "?") + r;
                    else n = o[0] + (V(b, "?") ? M : "?") + r + "#" + o[1];
                return n
            });
            a.hc = function() {
                var b = a.q,
                    g = a.j,
                    o = g.h(),
                    n = a.b + "",
                    r = R[B] ? R[B][A] : u,
                    w, J = V(o, O + n + "."),
                    P = V(o, qa + n),
                    ia = V(o, ra + n),
                    C, K = [],
                    W = "",
                    ca = t;
                o = S(o) ? "" : o;
                if (d.v) {
                    w = R[E][G] && R[E][G].hash ? R[E][G][ka][H](R[E][G][ka][z]("#")) : "";
                    if (d.U && !S(w)) W = w + M;
                    W += R[E][G].search;
                    if (!S(W) && V(W, O)) {
                        g.qc(W);
                        g.Xa() || g.Ib();
                        C = g.ba()
                    }
                    w = g.ea;
                    var da = g.nb,
                        ea = g.zb;
                    if (!S(w())) {
                        da(Ca(w()));
                        V(w(), ";") || ea()
                    }
                    w =
                        g.da;
                    da = g.na;
                    ea = g.ra;
                    if (!S(w())) {
                        da(w());
                        V(w(), ";") || ea()
                    }
                }
                if (S(C))
                    if (J)
                        if (!P || !ia || 0) {
                            C = p(o, ";", b);
                            a.A = s
                        } else {
                            C = T(o, O + n + ".", ";");
                            K = T(o, qa + n, ";")[F](".")
                        }
                else {
                    C = [n, a.ac(), b, b, b, 1][I](".");
                    ca = a.A = s
                } else if (S(g.z()) || S(g.ca())) {
                    C = p(W, M, b);
                    a.A = s
                } else {
                    K = g.z()[F](".");
                    n = K[0]
                }
                C = C[F](".");
                if (R[B] && r && r.dh == n && !d.l) {
                    C[4] = r.sid ? r.sid : C[4];
                    if (ca) {
                        C[3] = r.sid ? r.sid : C[4];
                        if (r.vid) {
                            b = r.vid[F](".");
                            C[1] = b[0];
                            C[2] = b[1]
                        }
                    }
                }
                g.lb(C[I]("."));
                K[0] = n;
                K[1] = K[1] ? K[1] : 0;
                K[2] = u != K[2] ? K[2] : d.Dc;
                K[3] = K[3] ? K[3] : C[4];
                g.la(K[I]("."));
                g.mb(n);
                S(g.cc()) || g.ma(g.I());
                g.xb();
                g.qa();
                g.yb()
            };
            a.jc = function() {
                f = new Ma(d)
            };
            a.getName = c("_getName", 58, function() {
                return a.o
            });
            a.c = c("_initData", 2, function() {
                var b;
                if (!q) {
                    if (!a.G) a.G = new Oa(d.Z);
                    a.b = a.Wb();
                    a.j = new Ka(d);
                    a.e = new Qa;
                    x = new Pa(d, a.b, a.j, a.e);
                    a.jc()
                }
                if (l()) {
                    if (!q) {
                        a.$ = a.Rb(a.La, R[E].domain);
                        b = new Z(a.b, a.$, a.q, d)
                    }
                    a.hc(b);
                    x.kc()
                }
                if (!q) {
                    l() && b.Ub(a.j, a.A);
                    a.Oa = new Qa;
                    $.load(d, a.j);
                    q = s
                }
            });
            a.Jc = c("_visitCode", 54, function() {
                a.c();
                var b = T(a.j.h(), O + a.b + ".", ";");
                b = b[F](".");
                return b[D] <
                    4 ? "" : b[1]
            });
            a.Vc = c("_cookiePathCopy", 30, function(b) {
                a.c();
                a.j && a.j.Hc(a.b, b)
            });
            a.R = function() {
                return a.Jc() % 1E4 < d.O * 100
            };
            a.de = c("_trackPageview", 1, function(b) {
                if (l()) {
                    a.c();
                    a.Fc(b);
                    a.A = t
                }
            });
            a.ee = c("_trackTrans", 18, function() {
                var b = a.b,
                    g = [],
                    o, n, r;
                a.c();
                if (a.d && a.R()) {
                    for (o = 0; o < a.d.S[D]; o++) {
                        n = a.d.S[o];
                        X(g, n.pa());
                        for (r = 0; r < n.K[D]; r++) X(g, n.K[r].pa())
                    }
                    for (o = 0; o < g[D]; o++) f.P(g[o], a.s, b, s)
                }
            });
            a.Zd = c("_setTrans", 20, function() {
                var b, g, o, n;
                b = R[E].getElementById ? R[E].getElementById("utmtrans") : R[E].utmform &&
                    R[E].utmform.utmtrans ? R[E].utmform.utmtrans : u;
                a.c();
                if (b && b.value) {
                    a.d = new Na;
                    n = b.value[F]("UTM:");
                    d.t = !d.t || "" == d.t ? "|" : d.t;
                    for (b = 0; b < n[D]; b++) {
                        n[b] = Da(n[b]);
                        g = n[b][F](d.t);
                        for (o = 0; o < g[D]; o++) g[o] = Da(g[o]);
                        if ("T" == g[0]) a.Ba(g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8]);
                        else "I" == g[0] && a.Cb(g[1], g[2], g[3], g[4], g[5], g[6])
                    }
                }
            });
            a.Ba = c("_addTrans", 21, function(b, g, o, n, r, w, J, P) {
                a.d = a.d ? a.d : new Na;
                return a.d.Eb(b, g, o, n, r, w, J, P)
            });
            a.Cb = c("_addItem", 19, function(b, g, o, n, r, w) {
                var J;
                a.d = a.d ? a.d : new Na;
                (J = a.d.Va(b)) ||
                (J = a.Ba(b, "", "", "", "", "", "", ""));
                J.Db(g, o, n, r, w)
            });
            a.ae = c("_setVar", 22, function(b) {
                if (b && "" != b && i()) {
                    a.c();
                    x.yc(U(b));
                    a.R() && f.P("&utmt=var", a.s, a.b)
                }
            });
            a.Kd = c("_setCustomVar", 10, function(b, g, o, n) {
                a.c();
                return x.wc(b, g, o, n)
            });
            a.Zc = c("_deleteCustomVar", 35, function(b) {
                a.c();
                x.Lb(b)
            });
            a.ld = c("_getVisitorCustomVar", 50, function(b) {
                a.c();
                return x.ec(b)
            });
            a.Sd = c("_setMaxCustomVariables", 71, function(b) {
                d.bb = b
            });
            a.link = c("_link", 12, function(b, g) {
                if (d.v && b) {
                    a.c();
                    R[E][G].href = a.Ra(b, g)
                }
            });
            a.qd = c("_linkByPost",
                13,
                function(b, g) {
                    if (d.v && b && b.action) {
                        a.c();
                        b.action = a.Ra(b.action, g)
                    }
                });
            a.be = c("_setXKey", 83, function(b, g, o) {
                a.e.p(b, g, o)
            });
            a.ce = c("_setXValue", 84, function(b, g, o) {
                a.e.pb(b, g, o)
            });
            a.md = c("_getXKey", 76, function(b, g) {
                return a.e.Zb(b, g)
            });
            a.nd = c("_getXValue", 77, function(b, g) {
                return a.e.dc(b, g)
            });
            a.Tc = c("_clearXKey", 72, function(b) {
                a.e.w(b)
            });
            a.Uc = c("_clearXValue", 73, function(b) {
                a.e.Ia(b)
            });
            a.Yc = c("_createXObj", 75, function() {
                a.c();
                return new Qa
            });
            a.tc = c("_sendXEvent", 78, function(b) {
                var g = "";
                a.c();
                if (a.R()) {
                    g +=
                        "&utmt=event&utme=" + U(a.e.rc(b)) + a.gb();
                    f.P(g, a.s, a.b, t, s)
                }
            });
            a.Xc = c("_createEventTracker", 74, function(b) {
                a.c();
                return new Ra(b, a)
            });
            a.ub = c("_trackEvent", 4, function(b, g, o, n) {
                a.c();
                var r = a.Oa;
                if (u != b && u != g && "" != b && "" != g) {
                    r.w(5);
                    r.Ia(5);
                    (b = r.p(5, 1, b) && r.p(5, 2, g) && (u == o || r.p(5, 3, o)) && (u == n || r.pb(5, 1, n))) && a.tc(r)
                } else b = t;
                return b
            });
            a.dd = function() {
                return d
            };
            a.Nd = c("_setDomainName", 6, function(b) {
                e = d.a = b
            });
            a.Oc = c("_addOrganic", 14, function(b, g, o) {
                d.M.splice(o ? 0 : d.M[D], 0, new Ha(b, g))
            });
            a.Sc = c("_clearOrganic",
                17,
                function() {
                    d.M = []
                });
            a.Mc = c("_addIgnoredOrganic", 15, function(b) {
                X(d.ia, b)
            });
            a.Qc = c("_clearIgnoredOrganic", 16, function() {
                d.ia = []
            });
            a.Nc = c("_addIgnoredRef", 31, function(b) {
                X(d.ka, b)
            });
            a.Rc = c("_clearIgnoredRef", 32, function() {
                d.ka = []
            });
            a.ud = c("_setAllowHash", 8, function(b) {
                d.Da = b ? 1 : 0
            });
            a.Fd = c("_setCampaignTrack", 36, function(b) {
                d.Fa = b ? 1 : 0
            });
            a.Gd = c("_setClientInfo", 66, function(b) {
                d.W = b ? 1 : 0
            });
            a.cd = c("_getClientInfo", 53, function() {
                return d.W
            });
            a.Hd = c("_setCookiePath", 9, function(b) {
                d.f = b
            });
            a.$d = c("_setTransactionDelim",
                82,
                function(b) {
                    d.t = b
                });
            a.Jd = c("_setCookieTimeout", 25, function(b) {
                a.vc(b * 1E3)
            });
            a.vc = c("_setCampaignCookieTimeout", 29, function(b) {
                d.Ea = b
            });
            a.Ld = c("_setDetectFlash", 61, function(b) {
                d.Z = b ? 1 : 0
            });
            a.ed = c("_getDetectFlash", 65, function() {
                return d.Z
            });
            a.Md = c("_setDetectTitle", 62, function(b) {
                d.Y = b ? 1 : 0
            });
            a.fd = c("_getDetectTitle", 56, function() {
                return d.Y
            });
            a.Pd = c("_setLocalGifPath", 46, function(b) {
                d.ga = b
            });
            a.gd = c("_getLocalGifPath", 57, function() {
                return d.ga
            });
            a.Rd = c("_setLocalServerMode", 92, function() {
                d.B = 0
            });
            a.Vd = c("_setRemoteServerMode", 63, function() {
                d.B = 1
            });
            a.Qd = c("_setLocalRemoteServerMode", 47, function() {
                d.B = 2
            });
            a.hd = c("_getServiceMode", 59, function() {
                return d.B
            });
            a.Wd = c("_setSampleRate", 45, function(b) {
                d.O = b
            });
            a.Xd = c("_setSessionTimeout", 27, function(b) {
                a.zc(b * 1E3)
            });
            a.zc = c("_setSessionCookieTimeout", 26, function(b) {
                d.kb = b
            });
            a.vd = c("_setAllowLinker", 11, function(b) {
                d.v = b ? 1 : 0
            });
            a.td = c("_setAllowAnchor", 7, function(b) {
                d.U = b ? 1 : 0
            });
            a.Cd = c("_setCampNameKey", 41, function(b) {
                d.ta = b
            });
            a.yd = c("_setCampContentKey",
                38,
                function(b) {
                    d.ua = b
                });
            a.zd = c("_setCampIdKey", 39, function(b) {
                d.va = b
            });
            a.Ad = c("_setCampMediumKey", 40, function(b) {
                d.wa = b
            });
            a.Bd = c("_setCampNOKey", 42, function(b) {
                d.xa = b
            });
            a.Dd = c("_setCampSourceKey", 43, function(b) {
                d.ya = b
            });
            a.Ed = c("_setCampTermKey", 44, function(b) {
                d.za = b
            });
            a.xd = c("_setCampCIdKey", 37, function(b) {
                d.Aa = b
            });
            a.ad = c("_getAccount", 64, function() {
                return a.s
            });
            a.sd = c("_setAccount", 3, function(b) {
                a.s = b
            });
            a.Td = c("_setNamespace", 48, function(b) {
                d.l = b ? U(b) : u
            });
            a.kd = c("_getVersion", 60, function() {
                return na
            });
            a.wd = c("_setAutoTrackOutbound", 79, Ga);
            a.Yd = c("_setTrackOutboundSubdomains", 81, Ga);
            a.Od = c("_setHrefExamineLimit", 80, Ga);
            a.Ud = c("_setReferrerOverride", 49, function(b) {
                a.La = b
            });
            a.Id = c("_setCookiePersistence", 24, function(b) {
                a.Ac(b)
            });
            a.Ac = c("_setVisitorCookieTimeout", 28, function(b) {
                d.u = b
            })
        };
        var Ta = function() {
            var j = this,
                h = Aa(j);
            j.Ma = t;
            j.vb = {};
            j.Gc = 0;
            j._gasoDomain = u;
            j._gasoCPath = u;
            j.jd = h("_getTracker", 0, function(k, m) {
                return j.X(k, u, m)
            });
            j.X = h("_createTracker", 55, function(k, m, i) {
                m && Q(23);
                i && Q(67);
                if (m == u) m = "~" + Y.Gc++;
                return Y.vb[m] = new Sa(m, k, i)
            });
            j.Ta = h("_getTrackerByName", 51, function(k) {
                k = k || "";
                return Y.vb[k] || Y.X(u, k)
            });
            j.Ic = function() {
                var k = aa[oa];
                return k && k[pa] && k[pa]()
            };
            j.Pc = h("_anonymizeIp", 70, function() {
                j.Ma = s
            })
        };
        var Ua = t,
            Wa = function() {
                var j = this,
                    h = Aa(j);
                j.Wc = h("_createAsyncTracker", 33, function(k, m) {
                    return Y.X(k, m || "")
                });
                j.bd = h("_getAsyncTracker", 34, function(k) {
                    return Y.Ta(k)
                });
                j.push = function() {
                    Q(5);
                    var k = arguments,
                        m = 0;
                    Ua = s;
                    for (var i = 0; i < k[D]; i++) try {
                        if (typeof k[i] === "function") k[i]();
                        else {
                            var p = "",
                                l = k[i][0],
                                a = l.lastIndexOf(".");
                            if (a > 0) {
                                p = l[H](0, a);
                                l = l[H](a + 1)
                            }
                            var c = p == la ? Y : p == ma ? Va : Y.Ta(p);
                            c[l].apply(c, k[i][fa](1))
                        }
                    } catch (f) {
                        m++
                    }
                    return m
                }
            };
        var Y = new Ta;
        var Xa = aa[la];
        if (Xa && typeof Xa._getTracker == "function") Y = Xa;
        else aa[la] = Y;
        var Va = new Wa;
        a: {
            var Ya = aa[ma],
                Za = t;
            if (Ya && typeof Ya[ba] == "function") {
                Za = Ya.constructor == Array;
                if (!Za) break a
            }
            aa[ma] = Va;Za && Va[ba].apply(Va, Ya)
        };
    })()


}
/*
     FILE ARCHIVED ON 20:39:12 Nov 09, 2010 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:12:12 Aug 21, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.107
  exclusion.robots.policy: 0.095
  cdx.remote: 0.124
  esindex: 0.012
  LoadShardBlock: 115.964 (6)
  PetaboxLoader3.datanode: 123.025 (7)
  CDXLines.iter: 104.522 (3)
  load_resource: 60.746
  PetaboxLoader3.resolve: 32.485
*/