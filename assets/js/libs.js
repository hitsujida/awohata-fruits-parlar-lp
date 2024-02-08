var _gsScope;
! function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (T, t) {
    "use strict";
    var e = [],
        k = T.document,
        n = Object.getPrototypeOf,
        a = e.slice,
        m = e.concat,
        l = e.push,
        r = e.indexOf,
        i = {},
        s = i.toString,
        f = i.hasOwnProperty,
        o = f.toString,
        h = o.call(Object),
        g = {};

    function _(t, e) {
        var i = (e = e || k).createElement("script");
        i.text = t, e.head.appendChild(i).parentNode.removeChild(i)
    }
    var c = "3.2.1",
        S = function (t, e) {
            return new S.fn.init(t, e)
        },
        u = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        d = /^-ms-/,
        p = /-([a-z])/g,
        v = function (t, e) {
            return e.toUpperCase()
        };

    function y(t) {
        var e = !!t && "length" in t && t.length,
            i = S.type(t);
        return "function" !== i && !S.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
    }
    S.fn = S.prototype = {
        jquery: c,
        constructor: S,
        length: 0,
        toArray: function () {
            return a.call(this)
        },
        get: function (t) {
            return null == t ? a.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function (t) {
            var e = S.merge(this.constructor(), t);
            return e.prevObject = this, e
        },
        each: function (t) {
            return S.each(this, t)
        },
        map: function (i) {
            return this.pushStack(S.map(this, function (t, e) {
                return i.call(t, e, t)
            }))
        },
        slice: function () {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (t) {
            var e = this.length,
                i = +t + (t < 0 ? e : 0);
            return this.pushStack(0 <= i && i < e ? [this[i]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: l,
        sort: e.sort,
        splice: e.splice
    }, S.extend = S.fn.extend = function () {
        var t, e, i, n, r, s, o = arguments[0] || {},
            a = 1,
            l = arguments.length,
            h = !1;
        for ("boolean" == typeof o && (h = o, o = arguments[a] || {}, a++), "object" == typeof o || S.isFunction(o) || (o = {}), a === l && (o = this, a--); a < l; a++)
            if (null != (t = arguments[a]))
                for (e in t) i = o[e], o !== (n = t[e]) && (h && n && (S.isPlainObject(n) || (r = Array.isArray(n))) ? (s = r ? (r = !1, i && Array.isArray(i) ? i : []) : i && S.isPlainObject(i) ? i : {}, o[e] = S.extend(h, s, n)) : void 0 !== n && (o[e] = n));
        return o
    }, S.extend({
        expando: "jQuery" + (c + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (t) {
            throw new Error(t)
        },
        noop: function () {},
        isFunction: function (t) {
            return "function" === S.type(t)
        },
        isWindow: function (t) {
            return null != t && t === t.window
        },
        isNumeric: function (t) {
            var e = S.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        },
        isPlainObject: function (t) {
            var e, i;
            return !(!t || "[object Object]" !== s.call(t) || (e = n(t)) && ("function" != typeof (i = f.call(e, "constructor") && e.constructor) || o.call(i) !== h))
        },
        isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? i[s.call(t)] || "object" : typeof t
        },
        globalEval: function (t) {
            _(t)
        },
        camelCase: function (t) {
            return t.replace(d, "ms-").replace(p, v)
        },
        each: function (t, e) {
            var i, n = 0;
            if (y(t))
                for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);
            else
                for (n in t)
                    if (!1 === e.call(t[n], n, t[n])) break; return t
        },
        trim: function (t) {
            return null == t ? "" : (t + "").replace(u, "")
        },
        makeArray: function (t, e) {
            var i = e || [];
            return null != t && (y(Object(t)) ? S.merge(i, "string" == typeof t ? [t] : t) : l.call(i, t)), i
        },
        inArray: function (t, e, i) {
            return null == e ? -1 : r.call(e, t, i)
        },
        merge: function (t, e) {
            for (var i = +e.length, n = 0, r = t.length; n < i; n++) t[r++] = e[n];
            return t.length = r, t
        },
        grep: function (t, e, i) {
            for (var n = [], r = 0, s = t.length, o = !i; r < s; r++) !e(t[r], r) !== o && n.push(t[r]);
            return n
        },
        map: function (t, e, i) {
            var n, r, s = 0,
                o = [];
            if (y(t))
                for (n = t.length; s < n; s++) null != (r = e(t[s], s, i)) && o.push(r);
            else
                for (s in t) null != (r = e(t[s], s, i)) && o.push(r);
            return m.apply([], o)
        },
        guid: 1,
        proxy: function (t, e) {
            var i, n, r;
            if ("string" == typeof e && (i = t[e], e = t, t = i), S.isFunction(t)) return n = a.call(arguments, 2), (r = function () {
                return t.apply(e || this, n.concat(a.call(arguments)))
            }).guid = t.guid = t.guid || S.guid++, r
        },
        now: Date.now,
        support: g
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = e[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
        i["[object " + e + "]"] = e.toLowerCase()
    });
    var b = function (i) {
        var t, p, b, s, r, f, u, m, w, l, h, x, T, o, k, g, a, c, _, S = "sizzle" + 1 * new Date,
            v = i.document,
            C = 0,
            n = 0,
            d = ot(),
            y = ot(),
            P = ot(),
            A = function (t, e) {
                return t === e && (h = !0), 0
            },
            O = {}.hasOwnProperty,
            e = [],
            M = e.pop,
            D = e.push,
            E = e.push,
            $ = e.slice,
            R = function (t, e) {
                for (var i = 0, n = t.length; i < n; i++)
                    if (t[i] === e) return i;
                return -1
            },
            j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            z = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            F = "\\[" + L + "*(" + z + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + z + "))|)" + L + "*\\]",
            N = ":(" + z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
            I = new RegExp(L + "+", "g"),
            q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            H = new RegExp("^" + L + "*," + L + "*"),
            W = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            B = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            X = new RegExp(N),
            U = new RegExp("^" + z + "$"),
            Y = {
                ID: new RegExp("^#(" + z + ")"),
                CLASS: new RegExp("^\\.(" + z + ")"),
                TAG: new RegExp("^(" + z + "|[*])"),
                ATTR: new RegExp("^" + F),
                PSEUDO: new RegExp("^" + N),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + j + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            V = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            G = /^[^{]+\{\s*\[native \w/,
            Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            J = /[+~]/,
            K = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            tt = function (t, e, i) {
                var n = "0x" + e - 65536;
                return n != n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            it = function (t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            },
            nt = function () {
                x()
            },
            rt = vt(function (t) {
                return !0 === t.disabled && ("form" in t || "label" in t)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            E.apply(e = $.call(v.childNodes), v.childNodes), e[v.childNodes.length].nodeType
        } catch (t) {
            E = {
                apply: e.length ? function (t, e) {
                    D.apply(t, $.call(e))
                } : function (t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];);
                    t.length = i - 1
                }
            }
        }

        function st(t, e, i, n) {
            var r, s, o, a, l, h, c, u = e && e.ownerDocument,
                d = e ? e.nodeType : 9;
            if (i = i || [], "string" != typeof t || !t || 1 !== d && 9 !== d && 11 !== d) return i;
            if (!n && ((e ? e.ownerDocument || e : v) !== T && x(e), e = e || T, k)) {
                if (11 !== d && (l = Q.exec(t)))
                    if (r = l[1]) {
                        if (9 === d) {
                            if (!(o = e.getElementById(r))) return i;
                            if (o.id === r) return i.push(o), i
                        } else if (u && (o = u.getElementById(r)) && _(e, o) && o.id === r) return i.push(o), i
                    } else {
                        if (l[2]) return E.apply(i, e.getElementsByTagName(t)), i;
                        if ((r = l[3]) && p.getElementsByClassName && e.getElementsByClassName) return E.apply(i, e.getElementsByClassName(r)), i
                    }
                if (p.qsa && !P[t + " "] && (!g || !g.test(t))) {
                    if (1 !== d) u = e, c = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(et, it) : e.setAttribute("id", a = S), s = (h = f(t)).length; s--;) h[s] = "#" + a + " " + _t(h[s]);
                        c = h.join(","), u = J.test(t) && mt(e.parentNode) || e
                    }
                    if (c) try {
                        return E.apply(i, u.querySelectorAll(c)), i
                    } catch (t) {} finally {
                        a === S && e.removeAttribute("id")
                    }
                }
            }
            return m(t.replace(q, "$1"), e, i, n)
        }

        function ot() {
            var n = [];
            return function t(e, i) {
                return n.push(e + " ") > b.cacheLength && delete t[n.shift()], t[e + " "] = i
            }
        }

        function at(t) {
            return t[S] = !0, t
        }

        function lt(t) {
            var e = T.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function ht(t, e) {
            for (var i = t.split("|"), n = i.length; n--;) b.attrHandle[i[n]] = e
        }

        function ct(t, e) {
            var i = e && t,
                n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === e) return -1;
            return t ? 1 : -1
        }

        function ut(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function dt(i) {
            return function (t) {
                var e = t.nodeName.toLowerCase();
                return ("input" === e || "button" === e) && t.type === i
            }
        }

        function pt(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && rt(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function ft(o) {
            return at(function (s) {
                return s = +s, at(function (t, e) {
                    for (var i, n = o([], t.length, s), r = n.length; r--;) t[i = n[r]] && (t[i] = !(e[i] = t[i]))
                })
            })
        }

        function mt(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }
        for (t in p = st.support = {}, r = st.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, x = st.setDocument = function (t) {
            var e, i, n = t ? t.ownerDocument || t : v;
            return n !== T && 9 === n.nodeType && n.documentElement && (o = (T = n).documentElement, k = !r(T), v !== T && (i = T.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", nt, !1) : i.attachEvent && i.attachEvent("onunload", nt)), p.attributes = lt(function (t) {
                return t.className = "i", !t.getAttribute("className")
            }), p.getElementsByTagName = lt(function (t) {
                return t.appendChild(T.createComment("")), !t.getElementsByTagName("*").length
            }), p.getElementsByClassName = G.test(T.getElementsByClassName), p.getById = lt(function (t) {
                return o.appendChild(t).id = S, !T.getElementsByName || !T.getElementsByName(S).length
            }), p.getById ? (b.filter.ID = function (t) {
                var e = t.replace(K, tt);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }, b.find.ID = function (t, e) {
                if (void 0 !== e.getElementById && k) {
                    var i = e.getElementById(t);
                    return i ? [i] : []
                }
            }) : (b.filter.ID = function (t) {
                var i = t.replace(K, tt);
                return function (t) {
                    var e = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return e && e.value === i
                }
            }, b.find.ID = function (t, e) {
                if (void 0 !== e.getElementById && k) {
                    var i, n, r, s = e.getElementById(t);
                    if (s) {
                        if ((i = s.getAttributeNode("id")) && i.value === t) return [s];
                        for (r = e.getElementsByName(t), n = 0; s = r[n++];)
                            if ((i = s.getAttributeNode("id")) && i.value === t) return [s]
                    }
                    return []
                }
            }), b.find.TAG = p.getElementsByTagName ? function (t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : p.qsa ? e.querySelectorAll(t) : void 0
            } : function (t, e) {
                var i, n = [],
                    r = 0,
                    s = e.getElementsByTagName(t);
                if ("*" !== t) return s;
                for (; i = s[r++];) 1 === i.nodeType && n.push(i);
                return n
            }, b.find.CLASS = p.getElementsByClassName && function (t, e) {
                if (void 0 !== e.getElementsByClassName && k) return e.getElementsByClassName(t)
            }, a = [], g = [], (p.qsa = G.test(T.querySelectorAll)) && (lt(function (t) {
                o.appendChild(t).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + L + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || g.push("\\[" + L + "*(?:value|" + j + ")"), t.querySelectorAll("[id~=" + S + "-]").length || g.push("~="), t.querySelectorAll(":checked").length || g.push(":checked"), t.querySelectorAll("a#" + S + "+*").length || g.push(".#.+[+~]")
            }), lt(function (t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = T.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && g.push("name" + L + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), o.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), g.push(",.*:")
            })), (p.matchesSelector = G.test(c = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && lt(function (t) {
                p.disconnectedMatch = c.call(t, "*"), c.call(t, "[s!='']:x"), a.push("!=", N)
            }), g = g.length && new RegExp(g.join("|")), a = a.length && new RegExp(a.join("|")), e = G.test(o.compareDocumentPosition), _ = e || G.test(o.contains) ? function (t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t,
                    n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            } : function (t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, A = e ? function (t, e) {
                if (t === e) return h = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !p.sortDetached && e.compareDocumentPosition(t) === i ? t === T || t.ownerDocument === v && _(v, t) ? -1 : e === T || e.ownerDocument === v && _(v, e) ? 1 : l ? R(l, t) - R(l, e) : 0 : 4 & i ? -1 : 1)
            } : function (t, e) {
                if (t === e) return h = !0, 0;
                var i, n = 0,
                    r = t.parentNode,
                    s = e.parentNode,
                    o = [t],
                    a = [e];
                if (!r || !s) return t === T ? -1 : e === T ? 1 : r ? -1 : s ? 1 : l ? R(l, t) - R(l, e) : 0;
                if (r === s) return ct(t, e);
                for (i = t; i = i.parentNode;) o.unshift(i);
                for (i = e; i = i.parentNode;) a.unshift(i);
                for (; o[n] === a[n];) n++;
                return n ? ct(o[n], a[n]) : o[n] === v ? -1 : a[n] === v ? 1 : 0
            }), T
        }, st.matches = function (t, e) {
            return st(t, null, null, e)
        }, st.matchesSelector = function (t, e) {
            if ((t.ownerDocument || t) !== T && x(t), e = e.replace(B, "='$1']"), p.matchesSelector && k && !P[e + " "] && (!a || !a.test(e)) && (!g || !g.test(e))) try {
                var i = c.call(t, e);
                if (i || p.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
            } catch (t) {}
            return 0 < st(e, T, null, [t]).length
        }, st.contains = function (t, e) {
            return (t.ownerDocument || t) !== T && x(t), _(t, e)
        }, st.attr = function (t, e) {
            (t.ownerDocument || t) !== T && x(t);
            var i = b.attrHandle[e.toLowerCase()],
                n = i && O.call(b.attrHandle, e.toLowerCase()) ? i(t, e, !k) : void 0;
            return void 0 !== n ? n : p.attributes || !k ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }, st.escape = function (t) {
            return (t + "").replace(et, it)
        }, st.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, st.uniqueSort = function (t) {
            var e, i = [],
                n = 0,
                r = 0;
            if (h = !p.detectDuplicates, l = !p.sortStable && t.slice(0), t.sort(A), h) {
                for (; e = t[r++];) e === t[r] && (n = i.push(r));
                for (; n--;) t.splice(i[n], 1)
            }
            return l = null, t
        }, s = st.getText = function (t) {
            var e, i = "",
                n = 0,
                r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += s(t)
                } else if (3 === r || 4 === r) return t.nodeValue
            } else
                for (; e = t[n++];) i += s(e);
            return i
        }, (b = st.selectors = {
            cacheLength: 50,
            createPseudo: at,
            match: Y,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (t) {
                    return t[1] = t[1].replace(K, tt), t[3] = (t[3] || t[4] || t[5] || "").replace(K, tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || st.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && st.error(t[0]), t
                },
                PSEUDO: function (t) {
                    var e, i = !t[6] && t[2];
                    return Y.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && X.test(i) && (e = f(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function (t) {
                    var e = t.replace(K, tt).toLowerCase();
                    return "*" === t ? function () {
                        return !0
                    } : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function (t) {
                    var e = d[t + " "];
                    return e || (e = new RegExp("(^|" + L + ")" + t + "(" + L + "|$)")) && d(t, function (t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function (i, n, r) {
                    return function (t) {
                        var e = st.attr(t, i);
                        return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === r : "!=" === n ? e !== r : "^=" === n ? r && 0 === e.indexOf(r) : "*=" === n ? r && -1 < e.indexOf(r) : "$=" === n ? r && e.slice(-r.length) === r : "~=" === n ? -1 < (" " + e.replace(I, " ") + " ").indexOf(r) : "|=" === n && (e === r || e.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function (f, t, e, m, g) {
                    var _ = "nth" !== f.slice(0, 3),
                        v = "last" !== f.slice(-4),
                        y = "of-type" === t;
                    return 1 === m && 0 === g ? function (t) {
                        return !!t.parentNode
                    } : function (t, e, i) {
                        var n, r, s, o, a, l, h = _ !== v ? "nextSibling" : "previousSibling",
                            c = t.parentNode,
                            u = y && t.nodeName.toLowerCase(),
                            d = !i && !y,
                            p = !1;
                        if (c) {
                            if (_) {
                                for (; h;) {
                                    for (o = t; o = o[h];)
                                        if (y ? o.nodeName.toLowerCase() === u : 1 === o.nodeType) return !1;
                                    l = h = "only" === f && !l && "nextSibling"
                                }
                                return !0
                            }
                            if (l = [v ? c.firstChild : c.lastChild], v && d) {
                                for (p = (a = (n = (r = (s = (o = c)[S] || (o[S] = {}))[o.uniqueID] || (s[o.uniqueID] = {}))[f] || [])[0] === C && n[1]) && n[2], o = a && c.childNodes[a]; o = ++a && o && o[h] || (p = a = 0) || l.pop();)
                                    if (1 === o.nodeType && ++p && o === t) {
                                        r[f] = [C, a, p];
                                        break
                                    }
                            } else if (d && (p = a = (n = (r = (s = (o = t)[S] || (o[S] = {}))[o.uniqueID] || (s[o.uniqueID] = {}))[f] || [])[0] === C && n[1]), !1 === p)
                                for (;
                                    (o = ++a && o && o[h] || (p = a = 0) || l.pop()) && ((y ? o.nodeName.toLowerCase() !== u : 1 !== o.nodeType) || !++p || (d && ((r = (s = o[S] || (o[S] = {}))[o.uniqueID] || (s[o.uniqueID] = {}))[f] = [C, p]), o !== t)););
                            return (p -= g) === m || p % m == 0 && 0 <= p / m
                        }
                    }
                },
                PSEUDO: function (t, s) {
                    var e, o = b.pseudos[t] || b.setFilters[t.toLowerCase()] || st.error("unsupported pseudo: " + t);
                    return o[S] ? o(s) : 1 < o.length ? (e = [t, t, "", s], b.setFilters.hasOwnProperty(t.toLowerCase()) ? at(function (t, e) {
                        for (var i, n = o(t, s), r = n.length; r--;) t[i = R(t, n[r])] = !(e[i] = n[r])
                    }) : function (t) {
                        return o(t, 0, e)
                    }) : o
                }
            },
            pseudos: {
                not: at(function (t) {
                    var n = [],
                        r = [],
                        a = u(t.replace(q, "$1"));
                    return a[S] ? at(function (t, e, i, n) {
                        for (var r, s = a(t, null, n, []), o = t.length; o--;)(r = s[o]) && (t[o] = !(e[o] = r))
                    }) : function (t, e, i) {
                        return n[0] = t, a(n, null, i, r), n[0] = null, !r.pop()
                    }
                }),
                has: at(function (e) {
                    return function (t) {
                        return 0 < st(e, t).length
                    }
                }),
                contains: at(function (e) {
                    return e = e.replace(K, tt),
                        function (t) {
                            return -1 < (t.textContent || t.innerText || s(t)).indexOf(e)
                        }
                }),
                lang: at(function (i) {
                    return U.test(i || "") || st.error("unsupported lang: " + i), i = i.replace(K, tt).toLowerCase(),
                        function (t) {
                            var e;
                            do {
                                if (e = k ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === i || 0 === e.indexOf(i + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function (t) {
                    var e = i.location && i.location.hash;
                    return e && e.slice(1) === t.id
                },
                root: function (t) {
                    return t === o
                },
                focus: function (t) {
                    return t === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: pt(!1),
                disabled: pt(!0),
                checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                },
                empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function (t) {
                    return !b.pseudos.empty(t)
                },
                header: function (t) {
                    return Z.test(t.nodeName)
                },
                input: function (t) {
                    return V.test(t.nodeName)
                },
                button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: ft(function () {
                    return [0]
                }),
                last: ft(function (t, e) {
                    return [e - 1]
                }),
                eq: ft(function (t, e, i) {
                    return [i < 0 ? i + e : i]
                }),
                even: ft(function (t, e) {
                    for (var i = 0; i < e; i += 2) t.push(i);
                    return t
                }),
                odd: ft(function (t, e) {
                    for (var i = 1; i < e; i += 2) t.push(i);
                    return t
                }),
                lt: ft(function (t, e, i) {
                    for (var n = i < 0 ? i + e : i; 0 <= --n;) t.push(n);
                    return t
                }),
                gt: ft(function (t, e, i) {
                    for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                    return t
                })
            }
        }).pseudos.nth = b.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) b.pseudos[t] = ut(t);
        for (t in {
            submit: !0,
            reset: !0
        }) b.pseudos[t] = dt(t);

        function gt() {}

        function _t(t) {
            for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
            return n
        }

        function vt(a, t, e) {
            var l = t.dir,
                h = t.next,
                c = h || l,
                u = e && "parentNode" === c,
                d = n++;
            return t.first ? function (t, e, i) {
                for (; t = t[l];)
                    if (1 === t.nodeType || u) return a(t, e, i);
                return !1
            } : function (t, e, i) {
                var n, r, s, o = [C, d];
                if (i) {
                    for (; t = t[l];)
                        if ((1 === t.nodeType || u) && a(t, e, i)) return !0
                } else
                    for (; t = t[l];)
                        if (1 === t.nodeType || u)
                            if (r = (s = t[S] || (t[S] = {}))[t.uniqueID] || (s[t.uniqueID] = {}), h && h === t.nodeName.toLowerCase()) t = t[l] || t;
                            else {
                                if ((n = r[c]) && n[0] === C && n[1] === d) return o[2] = n[2];
                                if ((r[c] = o)[2] = a(t, e, i)) return !0
                            } return !1
            }
        }

        function yt(r) {
            return 1 < r.length ? function (t, e, i) {
                for (var n = r.length; n--;)
                    if (!r[n](t, e, i)) return !1;
                return !0
            } : r[0]
        }

        function bt(t, e, i, n, r) {
            for (var s, o = [], a = 0, l = t.length, h = null != e; a < l; a++)(s = t[a]) && (i && !i(s, n, r) || (o.push(s), h && e.push(a)));
            return o
        }

        function wt(p, f, m, g, _, t) {
            return g && !g[S] && (g = wt(g)), _ && !_[S] && (_ = wt(_, t)), at(function (t, e, i, n) {
                var r, s, o, a = [],
                    l = [],
                    h = e.length,
                    c = t || function (t, e, i) {
                        for (var n = 0, r = e.length; n < r; n++) st(t, e[n], i);
                        return i
                    }(f || "*", i.nodeType ? [i] : i, []),
                    u = !p || !t && f ? c : bt(c, a, p, i, n),
                    d = m ? _ || (t ? p : h || g) ? [] : e : u;
                if (m && m(u, d, i, n), g)
                    for (r = bt(d, l), g(r, [], i, n), s = r.length; s--;)(o = r[s]) && (d[l[s]] = !(u[l[s]] = o));
                if (t) {
                    if (_ || p) {
                        if (_) {
                            for (r = [], s = d.length; s--;)(o = d[s]) && r.push(u[s] = o);
                            _(null, d = [], r, n)
                        }
                        for (s = d.length; s--;)(o = d[s]) && -1 < (r = _ ? R(t, o) : a[s]) && (t[r] = !(e[r] = o))
                    }
                } else d = bt(d === e ? d.splice(h, d.length) : d), _ ? _(null, e, d, n) : E.apply(e, d)
            })
        }

        function xt(t) {
            for (var r, e, i, n = t.length, s = b.relative[t[0].type], o = s || b.relative[" "], a = s ? 1 : 0, l = vt(function (t) {
                return t === r
            }, o, !0), h = vt(function (t) {
                return -1 < R(r, t)
            }, o, !0), c = [function (t, e, i) {
                var n = !s && (i || e !== w) || ((r = e).nodeType ? l(t, e, i) : h(t, e, i));
                return r = null, n
            }]; a < n; a++)
                if (e = b.relative[t[a].type]) c = [vt(yt(c), e)];
                else {
                    if ((e = b.filter[t[a].type].apply(null, t[a].matches))[S]) {
                        for (i = ++a; i < n && !b.relative[t[i].type]; i++);
                        return wt(1 < a && yt(c), 1 < a && _t(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(q, "$1"), e, a < i && xt(t.slice(a, i)), i < n && xt(t = t.slice(i)), i < n && _t(t))
                    }
                    c.push(e)
                }
            return yt(c)
        }
        return gt.prototype = b.filters = b.pseudos, b.setFilters = new gt, f = st.tokenize = function (t, e) {
            var i, n, r, s, o, a, l, h = y[t + " "];
            if (h) return e ? 0 : h.slice(0);
            for (o = t, a = [], l = b.preFilter; o;) {
                for (s in i && !(n = H.exec(o)) || (n && (o = o.slice(n[0].length) || o), a.push(r = [])), i = !1, (n = W.exec(o)) && (i = n.shift(), r.push({
                    value: i,
                    type: n[0].replace(q, " ")
                }), o = o.slice(i.length)), b.filter) !(n = Y[s].exec(o)) || l[s] && !(n = l[s](n)) || (i = n.shift(), r.push({
                    value: i,
                    type: s,
                    matches: n
                }), o = o.slice(i.length));
                if (!i) break
            }
            return e ? o.length : o ? st.error(t) : y(t, a).slice(0)
        }, u = st.compile = function (t, e) {
            var i, g, _, v, y, n, r = [],
                s = [],
                o = P[t + " "];
            if (!o) {
                for (e || (e = f(t)), i = e.length; i--;)(o = xt(e[i]))[S] ? r.push(o) : s.push(o);
                (o = P(t, (g = s, v = 0 < (_ = r).length, y = 0 < g.length, n = function (t, e, i, n, r) {
                    var s, o, a, l = 0,
                        h = "0",
                        c = t && [],
                        u = [],
                        d = w,
                        p = t || y && b.find.TAG("*", r),
                        f = C += null == d ? 1 : Math.random() || .1,
                        m = p.length;
                    for (r && (w = e === T || e || r); h !== m && null != (s = p[h]); h++) {
                        if (y && s) {
                            for (o = 0, e || s.ownerDocument === T || (x(s), i = !k); a = g[o++];)
                                if (a(s, e || T, i)) {
                                    n.push(s);
                                    break
                                }
                            r && (C = f)
                        }
                        v && ((s = !a && s) && l--, t && c.push(s))
                    }
                    if (l += h, v && h !== l) {
                        for (o = 0; a = _[o++];) a(c, u, e, i);
                        if (t) {
                            if (0 < l)
                                for (; h--;) c[h] || u[h] || (u[h] = M.call(n));
                            u = bt(u)
                        }
                        E.apply(n, u), r && !t && 0 < u.length && 1 < l + _.length && st.uniqueSort(n)
                    }
                    return r && (C = f, w = d), c
                }, v ? at(n) : n))).selector = t
            }
            return o
        }, m = st.select = function (t, e, i, n) {
            var r, s, o, a, l, h = "function" == typeof t && t,
                c = !n && f(t = h.selector || t);
            if (i = i || [], 1 === c.length) {
                if (2 < (s = c[0] = c[0].slice(0)).length && "ID" === (o = s[0]).type && 9 === e.nodeType && k && b.relative[s[1].type]) {
                    if (!(e = (b.find.ID(o.matches[0].replace(K, tt), e) || [])[0])) return i;
                    h && (e = e.parentNode), t = t.slice(s.shift().value.length)
                }
                for (r = Y.needsContext.test(t) ? 0 : s.length; r-- && (o = s[r], !b.relative[a = o.type]);)
                    if ((l = b.find[a]) && (n = l(o.matches[0].replace(K, tt), J.test(s[0].type) && mt(e.parentNode) || e))) {
                        if (s.splice(r, 1), !(t = n.length && _t(s))) return E.apply(i, n), i;
                        break
                    }
            }
            return (h || u(t, c))(n, e, !k, i, !e || J.test(t) && mt(e.parentNode) || e), i
        }, p.sortStable = S.split("").sort(A).join("") === S, p.detectDuplicates = !!h, x(), p.sortDetached = lt(function (t) {
            return 1 & t.compareDocumentPosition(T.createElement("fieldset"))
        }), lt(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || ht("type|href|height|width", function (t, e, i) {
            if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), p.attributes && lt(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || ht("value", function (t, e, i) {
            if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), lt(function (t) {
            return null == t.getAttribute("disabled")
        }) || ht(j, function (t, e, i) {
            var n;
            if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), st
    }(T);
    S.find = b, S.expr = b.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = b.uniqueSort, S.text = b.getText, S.isXMLDoc = b.isXML, S.contains = b.contains, S.escapeSelector = b.escape;
    var w = function (t, e, i) {
            for (var n = [], r = void 0 !== i;
                 (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (r && S(t).is(i)) break;
                    n.push(t)
                }
            return n
        },
        x = function (t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        },
        C = S.expr.match.needsContext;

    function P(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        O = /^.[^:#\[\.,]*$/;

    function M(t, i, n) {
        return S.isFunction(i) ? S.grep(t, function (t, e) {
            return !!i.call(t, e, t) !== n
        }) : i.nodeType ? S.grep(t, function (t) {
            return t === i !== n
        }) : "string" != typeof i ? S.grep(t, function (t) {
            return -1 < r.call(i, t) !== n
        }) : O.test(i) ? S.filter(i, t, n) : (i = S.filter(i, t), S.grep(t, function (t) {
            return -1 < r.call(i, t) !== n && 1 === t.nodeType
        }))
    }
    S.filter = function (t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? S.find.matchesSelector(n, t) ? [n] : [] : S.find.matches(t, S.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, S.fn.extend({
        find: function (t) {
            var e, i, n = this.length,
                r = this;
            if ("string" != typeof t) return this.pushStack(S(t).filter(function () {
                for (e = 0; e < n; e++)
                    if (S.contains(r[e], this)) return !0
            }));
            for (i = this.pushStack([]), e = 0; e < n; e++) S.find(t, r[e], i);
            return 1 < n ? S.uniqueSort(i) : i
        },
        filter: function (t) {
            return this.pushStack(M(this, t || [], !1))
        },
        not: function (t) {
            return this.pushStack(M(this, t || [], !0))
        },
        is: function (t) {
            return !!M(this, "string" == typeof t && C.test(t) ? S(t) : t || [], !1).length
        }
    });
    var D, E = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function (t, e, i) {
        var n, r;
        if (!t) return this;
        if (i = i || D, "string" != typeof t) return t.nodeType ? (this[0] = t, this.length = 1, this) : S.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(S) : S.makeArray(t, this);
        if (!(n = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : E.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
        if (n[1]) {
            if (e = e instanceof S ? e[0] : e, S.merge(this, S.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : k, !0)), A.test(n[1]) && S.isPlainObject(e))
                for (n in e) S.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
            return this
        }
        return (r = k.getElementById(n[2])) && (this[0] = r, this.length = 1), this
    }).prototype = S.fn, D = S(k);
    var $ = /^(?:parents|prev(?:Until|All))/,
        R = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function j(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }
    S.fn.extend({
        has: function (t) {
            var e = S(t, this),
                i = e.length;
            return this.filter(function () {
                for (var t = 0; t < i; t++)
                    if (S.contains(this, e[t])) return !0
            })
        },
        closest: function (t, e) {
            var i, n = 0,
                r = this.length,
                s = [],
                o = "string" != typeof t && S(t);
            if (!C.test(t))
                for (; n < r; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (o ? -1 < o.index(i) : 1 === i.nodeType && S.find.matchesSelector(i, t))) {
                            s.push(i);
                            break
                        }
            return this.pushStack(1 < s.length ? S.uniqueSort(s) : s)
        },
        index: function (t) {
            return t ? "string" == typeof t ? r.call(S(t), this[0]) : r.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (t, e) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(t, e))))
        },
        addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), S.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function (t) {
            return w(t, "parentNode")
        },
        parentsUntil: function (t, e, i) {
            return w(t, "parentNode", i)
        },
        next: function (t) {
            return j(t, "nextSibling")
        },
        prev: function (t) {
            return j(t, "previousSibling")
        },
        nextAll: function (t) {
            return w(t, "nextSibling")
        },
        prevAll: function (t) {
            return w(t, "previousSibling")
        },
        nextUntil: function (t, e, i) {
            return w(t, "nextSibling", i)
        },
        prevUntil: function (t, e, i) {
            return w(t, "previousSibling", i)
        },
        siblings: function (t) {
            return x((t.parentNode || {}).firstChild, t)
        },
        children: function (t) {
            return x(t.firstChild)
        },
        contents: function (t) {
            return P(t, "iframe") ? t.contentDocument : (P(t, "template") && (t = t.content || t), S.merge([], t.childNodes))
        }
    }, function (n, r) {
        S.fn[n] = function (t, e) {
            var i = S.map(this, r, t);
            return "Until" !== n.slice(-5) && (e = t), e && "string" == typeof e && (i = S.filter(e, i)), 1 < this.length && (R[n] || S.uniqueSort(i), $.test(n) && i.reverse()), this.pushStack(i)
        }
    });
    var L = /[^\x20\t\r\n\f]+/g;

    function z(t) {
        return t
    }

    function F(t) {
        throw t
    }

    function N(t, e, i, n) {
        var r;
        try {
            t && S.isFunction(r = t.promise) ? r.call(t).done(e).fail(i) : t && S.isFunction(r = t.then) ? r.call(t, e, i) : e.apply(void 0, [t].slice(n))
        } catch (t) {
            i.apply(void 0, [t])
        }
    }
    S.Callbacks = function (n) {
        var t, i;
        n = "string" == typeof n ? (t = n, i = {}, S.each(t.match(L) || [], function (t, e) {
            i[e] = !0
        }), i) : S.extend({}, n);
        var r, e, s, o, a = [],
            l = [],
            h = -1,
            c = function () {
                for (o = o || n.once, s = r = !0; l.length; h = -1)
                    for (e = l.shift(); ++h < a.length;) !1 === a[h].apply(e[0], e[1]) && n.stopOnFalse && (h = a.length, e = !1);
                n.memory || (e = !1), r = !1, o && (a = e ? [] : "")
            },
            u = {
                add: function () {
                    return a && (e && !r && (h = a.length - 1, l.push(e)), function i(t) {
                        S.each(t, function (t, e) {
                            S.isFunction(e) ? n.unique && u.has(e) || a.push(e) : e && e.length && "string" !== S.type(e) && i(e)
                        })
                    }(arguments), e && !r && c()), this
                },
                remove: function () {
                    return S.each(arguments, function (t, e) {
                        for (var i; - 1 < (i = S.inArray(e, a, i));) a.splice(i, 1), i <= h && h--
                    }), this
                },
                has: function (t) {
                    return t ? -1 < S.inArray(t, a) : 0 < a.length
                },
                empty: function () {
                    return a && (a = []), this
                },
                disable: function () {
                    return o = l = [], a = e = "", this
                },
                disabled: function () {
                    return !a
                },
                lock: function () {
                    return o = l = [], e || r || (a = e = ""), this
                },
                locked: function () {
                    return !!o
                },
                fireWith: function (t, e) {
                    return o || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), r || c()), this
                },
                fire: function () {
                    return u.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!s
                }
            };
        return u
    }, S.extend({
        Deferred: function (t) {
            var s = [
                    ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                    ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                o = {
                    state: function () {
                        return r
                    },
                    always: function () {
                        return a.done(arguments).fail(arguments), this
                    },
                    catch: function (t) {
                        return o.then(null, t)
                    },
                    pipe: function () {
                        var r = arguments;
                        return S.Deferred(function (n) {
                            S.each(s, function (t, e) {
                                var i = S.isFunction(r[e[4]]) && r[e[4]];
                                a[e[1]](function () {
                                    var t = i && i.apply(this, arguments);
                                    t && S.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[e[0] + "With"](this, i ? [t] : arguments)
                                })
                            }), r = null
                        }).promise()
                    },
                    then: function (e, i, n) {
                        var l = 0;

                        function h(r, s, o, a) {
                            return function () {
                                var i = this,
                                    n = arguments,
                                    t = function () {
                                        var t, e;
                                        if (!(r < l)) {
                                            if ((t = o.apply(i, n)) === s.promise()) throw new TypeError("Thenable self-resolution");
                                            e = t && ("object" == typeof t || "function" == typeof t) && t.then, S.isFunction(e) ? a ? e.call(t, h(l, s, z, a), h(l, s, F, a)) : (l++, e.call(t, h(l, s, z, a), h(l, s, F, a), h(l, s, z, s.notifyWith))) : (o !== z && (i = void 0, n = [t]), (a || s.resolveWith)(i, n))
                                        }
                                    },
                                    e = a ? t : function () {
                                        try {
                                            t()
                                        } catch (t) {
                                            S.Deferred.exceptionHook && S.Deferred.exceptionHook(t, e.stackTrace), l <= r + 1 && (o !== F && (i = void 0, n = [t]), s.rejectWith(i, n))
                                        }
                                    };
                                r ? e() : (S.Deferred.getStackHook && (e.stackTrace = S.Deferred.getStackHook()), T.setTimeout(e))
                            }
                        }
                        return S.Deferred(function (t) {
                            s[0][3].add(h(0, t, S.isFunction(n) ? n : z, t.notifyWith)), s[1][3].add(h(0, t, S.isFunction(e) ? e : z)), s[2][3].add(h(0, t, S.isFunction(i) ? i : F))
                        }).promise()
                    },
                    promise: function (t) {
                        return null != t ? S.extend(t, o) : o
                    }
                },
                a = {};
            return S.each(s, function (t, e) {
                var i = e[2],
                    n = e[5];
                o[e[1]] = i.add, n && i.add(function () {
                    r = n
                }, s[3 - t][2].disable, s[0][2].lock), i.add(e[3].fire), a[e[0]] = function () {
                    return a[e[0] + "With"](this === a ? void 0 : this, arguments), this
                }, a[e[0] + "With"] = i.fireWith
            }), o.promise(a), t && t.call(a, a), a
        },
        when: function (t) {
            var i = arguments.length,
                e = i,
                n = Array(e),
                r = a.call(arguments),
                s = S.Deferred(),
                o = function (e) {
                    return function (t) {
                        n[e] = this, r[e] = 1 < arguments.length ? a.call(arguments) : t, --i || s.resolveWith(n, r)
                    }
                };
            if (i <= 1 && (N(t, s.done(o(e)).resolve, s.reject, !i), "pending" === s.state() || S.isFunction(r[e] && r[e].then))) return s.then();
            for (; e--;) N(r[e], o(e), s.reject);
            return s.promise()
        }
    });
    var I = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function (t, e) {
        T.console && T.console.warn && t && I.test(t.name) && T.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
    }, S.readyException = function (t) {
        T.setTimeout(function () {
            throw t
        })
    };
    var q = S.Deferred();

    function H() {
        k.removeEventListener("DOMContentLoaded", H), T.removeEventListener("load", H), S.ready()
    }
    S.fn.ready = function (t) {
        return q.then(t).catch(function (t) {
            S.readyException(t)
        }), this
    }, S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (t) {
            (!0 === t ? --S.readyWait : S.isReady) || ((S.isReady = !0) !== t && 0 < --S.readyWait || q.resolveWith(k, [S]))
        }
    }), S.ready.then = q.then, "complete" === k.readyState || "loading" !== k.readyState && !k.documentElement.doScroll ? T.setTimeout(S.ready) : (k.addEventListener("DOMContentLoaded", H), T.addEventListener("load", H));
    var W = function (t, e, i, n, r, s, o) {
            var a = 0,
                l = t.length,
                h = null == i;
            if ("object" === S.type(i))
                for (a in r = !0, i) W(t, e, a, i[a], !0, s, o);
            else if (void 0 !== n && (r = !0, S.isFunction(n) || (o = !0), h && (e = o ? (e.call(t, n), null) : (h = e, function (t, e, i) {
                return h.call(S(t), i)
            })), e))
                for (; a < l; a++) e(t[a], i, o ? n : n.call(t[a], a, e(t[a], i)));
            return r ? t : h ? e.call(t) : l ? e(t[0], i) : s
        },
        B = function (t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };

    function X() {
        this.expando = S.expando + X.uid++
    }
    X.uid = 1, X.prototype = {
        cache: function (t) {
            var e = t[this.expando];
            return e || (e = {}, B(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function (t, e, i) {
            var n, r = this.cache(t);
            if ("string" == typeof e) r[S.camelCase(e)] = i;
            else
                for (n in e) r[S.camelCase(n)] = e[n];
            return r
        },
        get: function (t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][S.camelCase(e)]
        },
        access: function (t, e, i) {
            return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
        },
        remove: function (t, e) {
            var i, n = t[this.expando];
            if (void 0 !== n) {
                if (void 0 !== e) {
                    i = (e = Array.isArray(e) ? e.map(S.camelCase) : (e = S.camelCase(e)) in n ? [e] : e.match(L) || []).length;
                    for (; i--;) delete n[e[i]]
                }(void 0 === e || S.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !S.isEmptyObject(e)
        }
    };
    var U = new X,
        Y = new X,
        V = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function G(t, e, i) {
        var n, r;
        if (void 0 === i && 1 === t.nodeType)
            if (n = "data-" + e.replace(Z, "-$&").toLowerCase(), "string" == typeof (i = t.getAttribute(n))) {
                try {
                    i = "true" === (r = i) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : V.test(r) ? JSON.parse(r) : r)
                } catch (t) {}
                Y.set(t, e, i)
            } else i = void 0;
        return i
    }
    S.extend({
        hasData: function (t) {
            return Y.hasData(t) || U.hasData(t)
        },
        data: function (t, e, i) {
            return Y.access(t, e, i)
        },
        removeData: function (t, e) {
            Y.remove(t, e)
        },
        _data: function (t, e, i) {
            return U.access(t, e, i)
        },
        _removeData: function (t, e) {
            U.remove(t, e)
        }
    }), S.fn.extend({
        data: function (i, t) {
            var e, n, r, s = this[0],
                o = s && s.attributes;
            if (void 0 !== i) return "object" == typeof i ? this.each(function () {
                Y.set(this, i)
            }) : W(this, function (t) {
                var e;
                if (s && void 0 === t) {
                    if (void 0 !== (e = Y.get(s, i))) return e;
                    if (void 0 !== (e = G(s, i))) return e
                } else this.each(function () {
                    Y.set(this, i, t)
                })
            }, null, t, 1 < arguments.length, null, !0);
            if (this.length && (r = Y.get(s), 1 === s.nodeType && !U.get(s, "hasDataAttrs"))) {
                for (e = o.length; e--;) o[e] && (0 === (n = o[e].name).indexOf("data-") && (n = S.camelCase(n.slice(5)), G(s, n, r[n])));
                U.set(s, "hasDataAttrs", !0)
            }
            return r
        },
        removeData: function (t) {
            return this.each(function () {
                Y.remove(this, t)
            })
        }
    }), S.extend({
        queue: function (t, e, i) {
            var n;
            if (t) return e = (e || "fx") + "queue", n = U.get(t, e), i && (!n || Array.isArray(i) ? n = U.access(t, e, S.makeArray(i)) : n.push(i)), n || []
        },
        dequeue: function (t, e) {
            e = e || "fx";
            var i = S.queue(t, e),
                n = i.length,
                r = i.shift(),
                s = S._queueHooks(t, e);
            "inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete s.stop, r.call(t, function () {
                S.dequeue(t, e)
            }, s)), !n && s && s.empty.fire()
        },
        _queueHooks: function (t, e) {
            var i = e + "queueHooks";
            return U.get(t, i) || U.access(t, i, {
                empty: S.Callbacks("once memory").add(function () {
                    U.remove(t, [e + "queue", i])
                })
            })
        }
    }), S.fn.extend({
        queue: function (e, i) {
            var t = 2;
            return "string" != typeof e && (i = e, e = "fx", t--), arguments.length < t ? S.queue(this[0], e) : void 0 === i ? this : this.each(function () {
                var t = S.queue(this, e, i);
                S._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && S.dequeue(this, e)
            })
        },
        dequeue: function (t) {
            return this.each(function () {
                S.dequeue(this, t)
            })
        },
        clearQueue: function (t) {
            return this.queue(t || "fx", [])
        },
        promise: function (t, e) {
            var i, n = 1,
                r = S.Deferred(),
                s = this,
                o = this.length,
                a = function () {
                    --n || r.resolveWith(s, [s])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;)(i = U.get(s[o], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
            return a(), r.promise(e)
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        J = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
        K = ["Top", "Right", "Bottom", "Left"],
        tt = function (t, e) {
            return "none" === (t = e || t).style.display || "" === t.style.display && S.contains(t.ownerDocument, t) && "none" === S.css(t, "display")
        },
        et = function (t, e, i, n) {
            var r, s, o = {};
            for (s in e) o[s] = t.style[s], t.style[s] = e[s];
            for (s in r = i.apply(t, n || []), e) t.style[s] = o[s];
            return r
        };

    function it(t, e, i, n) {
        var r, s = 1,
            o = 20,
            a = n ? function () {
                return n.cur()
            } : function () {
                return S.css(t, e, "")
            },
            l = a(),
            h = i && i[3] || (S.cssNumber[e] ? "" : "px"),
            c = (S.cssNumber[e] || "px" !== h && +l) && J.exec(S.css(t, e));
        if (c && c[3] !== h)
            for (h = h || c[3], i = i || [], c = +l || 1; c /= s = s || ".5", S.style(t, e, c + h), s !== (s = a() / l) && 1 !== s && --o;);
        return i && (c = +c || +l || 0, r = i[1] ? c + (i[1] + 1) * i[2] : +i[2], n && (n.unit = h, n.start = c, n.end = r)), r
    }
    var nt = {};

    function rt(t, e) {
        for (var i, n, r = [], s = 0, o = t.length; s < o; s++)(n = t[s]).style && (i = n.style.display, e ? ("none" === i && (r[s] = U.get(n, "display") || null, r[s] || (n.style.display = "")), "" === n.style.display && tt(n) && (r[s] = (u = h = l = void 0, h = (a = n).ownerDocument, c = a.nodeName, (u = nt[c]) || (l = h.body.appendChild(h.createElement(c)), u = S.css(l, "display"), l.parentNode.removeChild(l), "none" === u && (u = "block"), nt[c] = u)))) : "none" !== i && (r[s] = "none", U.set(n, "display", i)));
        var a, l, h, c, u;
        for (s = 0; s < o; s++) null != r[s] && (t[s].style.display = r[s]);
        return t
    }
    S.fn.extend({
        show: function () {
            return rt(this, !0)
        },
        hide: function () {
            return rt(this)
        },
        toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                tt(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var st = /^(?:checkbox|radio)$/i,
        ot = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        at = /^$|\/(?:java|ecma)script/i,
        lt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function ht(t, e) {
        var i;
        return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && P(t, e) ? S.merge([t], i) : i
    }

    function ct(t, e) {
        for (var i = 0, n = t.length; i < n; i++) U.set(t[i], "globalEval", !e || U.get(e[i], "globalEval"))
    }
    lt.optgroup = lt.option, lt.tbody = lt.tfoot = lt.colgroup = lt.caption = lt.thead, lt.th = lt.td;
    var ut, dt, pt = /<|&#?\w+;/;

    function ft(t, e, i, n, r) {
        for (var s, o, a, l, h, c, u = e.createDocumentFragment(), d = [], p = 0, f = t.length; p < f; p++)
            if ((s = t[p]) || 0 === s)
                if ("object" === S.type(s)) S.merge(d, s.nodeType ? [s] : s);
                else if (pt.test(s)) {
                    for (o = o || u.appendChild(e.createElement("div")), a = (ot.exec(s) || ["", ""])[1].toLowerCase(), l = lt[a] || lt._default, o.innerHTML = l[1] + S.htmlPrefilter(s) + l[2], c = l[0]; c--;) o = o.lastChild;
                    S.merge(d, o.childNodes), (o = u.firstChild).textContent = ""
                } else d.push(e.createTextNode(s));
        for (u.textContent = "", p = 0; s = d[p++];)
            if (n && -1 < S.inArray(s, n)) r && r.push(s);
            else if (h = S.contains(s.ownerDocument, s), o = ht(u.appendChild(s), "script"), h && ct(o), i)
                for (c = 0; s = o[c++];) at.test(s.type || "") && i.push(s);
        return u
    }
    ut = k.createDocumentFragment().appendChild(k.createElement("div")), (dt = k.createElement("input")).setAttribute("type", "radio"), dt.setAttribute("checked", "checked"), dt.setAttribute("name", "t"), ut.appendChild(dt), g.checkClone = ut.cloneNode(!0).cloneNode(!0).lastChild.checked, ut.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!ut.cloneNode(!0).lastChild.defaultValue;
    var mt = k.documentElement,
        gt = /^key/,
        _t = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        vt = /^([^.]*)(?:\.(.+)|)/;

    function yt() {
        return !0
    }

    function bt() {
        return !1
    }

    function wt() {
        try {
            return k.activeElement
        } catch (t) {}
    }

    function xt(t, e, i, n, r, s) {
        var o, a;
        if ("object" == typeof e) {
            for (a in "string" != typeof i && (n = n || i, i = void 0), e) xt(t, a, i, n, e[a], s);
            return t
        }
        if (null == n && null == r ? (r = i, n = i = void 0) : null == r && ("string" == typeof i ? (r = n, n = void 0) : (r = n, n = i, i = void 0)), !1 === r) r = bt;
        else if (!r) return t;
        return 1 === s && (o = r, (r = function (t) {
            return S().off(t), o.apply(this, arguments)
        }).guid = o.guid || (o.guid = S.guid++)), t.each(function () {
            S.event.add(this, e, r, n, i)
        })
    }
    S.event = {
        global: {},
        add: function (e, t, i, n, r) {
            var s, o, a, l, h, c, u, d, p, f, m, g = U.get(e);
            if (g)
                for (i.handler && (i = (s = i).handler, r = s.selector), r && S.find.matchesSelector(mt, r), i.guid || (i.guid = S.guid++), (l = g.events) || (l = g.events = {}), (o = g.handle) || (o = g.handle = function (t) {
                    return void 0 !== S && S.event.triggered !== t.type ? S.event.dispatch.apply(e, arguments) : void 0
                }), h = (t = (t || "").match(L) || [""]).length; h--;) p = m = (a = vt.exec(t[h]) || [])[1], f = (a[2] || "").split(".").sort(), p && (u = S.event.special[p] || {}, p = (r ? u.delegateType : u.bindType) || p, u = S.event.special[p] || {}, c = S.extend({
                    type: p,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: r,
                    needsContext: r && S.expr.match.needsContext.test(r),
                    namespace: f.join(".")
                }, s), (d = l[p]) || ((d = l[p] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, n, f, o) || e.addEventListener && e.addEventListener(p, o)), u.add && (u.add.call(e, c), c.handler.guid || (c.handler.guid = i.guid)), r ? d.splice(d.delegateCount++, 0, c) : d.push(c), S.event.global[p] = !0)
        },
        remove: function (t, e, i, n, r) {
            var s, o, a, l, h, c, u, d, p, f, m, g = U.hasData(t) && U.get(t);
            if (g && (l = g.events)) {
                for (h = (e = (e || "").match(L) || [""]).length; h--;)
                    if (p = m = (a = vt.exec(e[h]) || [])[1], f = (a[2] || "").split(".").sort(), p) {
                        for (u = S.event.special[p] || {}, d = l[p = (n ? u.delegateType : u.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = d.length; s--;) c = d[s], !r && m !== c.origType || i && i.guid !== c.guid || a && !a.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (d.splice(s, 1), c.selector && d.delegateCount--, u.remove && u.remove.call(t, c));
                        o && !d.length && (u.teardown && !1 !== u.teardown.call(t, f, g.handle) || S.removeEvent(t, p, g.handle), delete l[p])
                    } else
                        for (p in l) S.event.remove(t, p + e[h], i, n, !0);
                S.isEmptyObject(l) && U.remove(t, "handle events")
            }
        },
        dispatch: function (t) {
            var e, i, n, r, s, o, a = S.event.fix(t),
                l = new Array(arguments.length),
                h = (U.get(this, "events") || {})[a.type] || [],
                c = S.event.special[a.type] || {};
            for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
            if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                for (o = S.event.handlers.call(this, a, h), e = 0;
                     (r = o[e++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = r.elem, i = 0;
                         (s = r.handlers[i++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s, a.data = s.data, void 0 !== (n = ((S.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, l)) && !1 === (a.result = n) && (a.preventDefault(), a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (t, e) {
            var i, n, r, s, o, a = [],
                l = e.delegateCount,
                h = t.target;
            if (l && h.nodeType && !("click" === t.type && 1 <= t.button))
                for (; h !== this; h = h.parentNode || this)
                    if (1 === h.nodeType && ("click" !== t.type || !0 !== h.disabled)) {
                        for (s = [], o = {}, i = 0; i < l; i++) void 0 === o[r = (n = e[i]).selector + " "] && (o[r] = n.needsContext ? -1 < S(r, this).index(h) : S.find(r, this, null, [h]).length), o[r] && s.push(n);
                        s.length && a.push({
                            elem: h,
                            handlers: s
                        })
                    }
            return h = this, l < e.length && a.push({
                elem: h,
                handlers: e.slice(l)
            }), a
        },
        addProp: function (e, t) {
            Object.defineProperty(S.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: S.isFunction(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function (t) {
            return t[S.expando] ? t : new S.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== wt() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === wt() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && P(this, "input")) return this.click(), !1
                },
                _default: function (t) {
                    return P(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, S.removeEvent = function (t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i)
    }, S.Event = function (t, e) {
        return this instanceof S.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? yt : bt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && S.extend(this, e), this.timeStamp = t && t.timeStamp || S.now(), void(this[S.expando] = !0)) : new S.Event(t, e)
    }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: bt,
        isPropagationStopped: bt,
        isImmediatePropagationStopped: bt,
        isSimulated: !1,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = yt, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = yt, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = yt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, S.each({
        altKey: !0,
        bubbles: !0,
        cancelabel: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (t) {
            var e = t.button;
            return null == t.which && gt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && _t.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, S.event.addProp), S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, r) {
        S.event.special[t] = {
            delegateType: r,
            bindType: r,
            handle: function (t) {
                var e, i = t.relatedTarget,
                    n = t.handleObj;
                return i && (i === this || S.contains(this, i)) || (t.type = n.origType, e = n.handler.apply(this, arguments), t.type = r), e
            }
        }
    }), S.fn.extend({
        on: function (t, e, i, n) {
            return xt(this, t, e, i, n)
        },
        one: function (t, e, i, n) {
            return xt(this, t, e, i, n, 1)
        },
        off: function (t, e, i) {
            var n, r;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, S(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" != typeof t) return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = bt), this.each(function () {
                S.event.remove(this, t, i, e)
            });
            for (r in t) this.off(r, e, t[r]);
            return this
        }
    });
    var Tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        kt = /<script|<style|<link/i,
        St = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ct = /^true\/(.*)/,
        Pt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function At(t, e) {
        return P(t, "table") && P(11 !== e.nodeType ? e : e.firstChild, "tr") && S(">tbody", t)[0] || t
    }

    function Ot(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function Mt(t) {
        var e = Ct.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function Dt(t, e) {
        var i, n, r, s, o, a, l, h;
        if (1 === e.nodeType) {
            if (U.hasData(t) && (s = U.access(t), o = U.set(e, s), h = s.events))
                for (r in delete o.handle, o.events = {}, h)
                    for (i = 0, n = h[r].length; i < n; i++) S.event.add(e, r, h[r][i]);
            Y.hasData(t) && (a = Y.access(t), l = S.extend({}, a), Y.set(e, l))
        }
    }

    function Et(i, n, r, s) {
        n = m.apply([], n);
        var t, e, o, a, l, h, c = 0,
            u = i.length,
            d = u - 1,
            p = n[0],
            f = S.isFunction(p);
        if (f || 1 < u && "string" == typeof p && !g.checkClone && St.test(p)) return i.each(function (t) {
            var e = i.eq(t);
            f && (n[0] = p.call(this, t, e.html())), Et(e, n, r, s)
        });
        if (u && (e = (t = ft(n, i[0].ownerDocument, !1, i, s)).firstChild, 1 === t.childNodes.length && (t = e), e || s)) {
            for (a = (o = S.map(ht(t, "script"), Ot)).length; c < u; c++) l = t, c !== d && (l = S.clone(l, !0, !0), a && S.merge(o, ht(l, "script"))), r.call(i[c], l, c);
            if (a)
                for (h = o[o.length - 1].ownerDocument, S.map(o, Mt), c = 0; c < a; c++) l = o[c], at.test(l.type || "") && !U.access(l, "globalEval") && S.contains(h, l) && (l.src ? S._evalUrl && S._evalUrl(l.src) : _(l.textContent.replace(Pt, ""), h))
        }
        return i
    }

    function $t(t, e, i) {
        for (var n, r = e ? S.filter(e, t) : t, s = 0; null != (n = r[s]); s++) i || 1 !== n.nodeType || S.cleanData(ht(n)), n.parentNode && (i && S.contains(n.ownerDocument, n) && ct(ht(n, "script")), n.parentNode.removeChild(n));
        return t
    }
    S.extend({
        htmlPrefilter: function (t) {
            return t.replace(Tt, "<$1></$2>")
        },
        clone: function (t, e, i) {
            var n, r, s, o, a, l, h, c = t.cloneNode(!0),
                u = S.contains(t.ownerDocument, t);
            if (!(g.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || S.isXMLDoc(t)))
                for (o = ht(c), n = 0, r = (s = ht(t)).length; n < r; n++) a = s[n], l = o[n], void 0, "input" === (h = l.nodeName.toLowerCase()) && st.test(a.type) ? l.checked = a.checked : "input" !== h && "textarea" !== h || (l.defaultValue = a.defaultValue);
            if (e)
                if (i)
                    for (s = s || ht(t), o = o || ht(c), n = 0, r = s.length; n < r; n++) Dt(s[n], o[n]);
                else Dt(t, c);
            return 0 < (o = ht(c, "script")).length && ct(o, !u && ht(t, "script")), c
        },
        cleanData: function (t) {
            for (var e, i, n, r = S.event.special, s = 0; void 0 !== (i = t[s]); s++)
                if (B(i)) {
                    if (e = i[U.expando]) {
                        if (e.events)
                            for (n in e.events) r[n] ? S.event.remove(i, n) : S.removeEvent(i, n, e.handle);
                        i[U.expando] = void 0
                    }
                    i[Y.expando] && (i[Y.expando] = void 0)
                }
        }
    }), S.fn.extend({
        detach: function (t) {
            return $t(this, t, !0)
        },
        remove: function (t) {
            return $t(this, t)
        },
        text: function (t) {
            return W(this, function (t) {
                return void 0 === t ? S.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function () {
            return Et(this, arguments, function (t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || At(this, t).appendChild(t)
            })
        },
        prepend: function () {
            return Et(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = At(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function () {
            return Et(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function () {
            return Et(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (S.cleanData(ht(t, !1)), t.textContent = "");
            return this
        },
        clone: function (t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function () {
                return S.clone(this, t, e)
            })
        },
        html: function (t) {
            return W(this, function (t) {
                var e = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !kt.test(t) && !lt[(ot.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = S.htmlPrefilter(t);
                    try {
                        for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (S.cleanData(ht(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function () {
            var i = [];
            return Et(this, arguments, function (t) {
                var e = this.parentNode;
                S.inArray(this, i) < 0 && (S.cleanData(ht(this)), e && e.replaceChild(t, this))
            }, i)
        }
    }), S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, o) {
        S.fn[t] = function (t) {
            for (var e, i = [], n = S(t), r = n.length - 1, s = 0; s <= r; s++) e = s === r ? this : this.clone(!0), S(n[s])[o](e), l.apply(i, e.get());
            return this.pushStack(i)
        }
    });
    var Rt = /^margin/,
        jt = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
        Lt = function (t) {
            var e = t.ownerDocument.defaultView;
            return e && e.opener || (e = T), e.getComputedStyle(t)
        };

    function zt(t, e, i) {
        var n, r, s, o, a = t.style;
        return (i = i || Lt(t)) && ("" !== (o = i.getPropertyValue(e) || i[e]) || S.contains(t.ownerDocument, t) || (o = S.style(t, e)), !g.pixelMarginRight() && jt.test(o) && Rt.test(e) && (n = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = i.width, a.width = n, a.minWidth = r, a.maxWidth = s)), void 0 !== o ? o + "" : o
    }

    function Ft(t, e) {
        return {
            get: function () {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }! function () {
        function t() {
            if (o) {
                o.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", o.innerHTML = "", mt.appendChild(s);
                var t = T.getComputedStyle(o);
                e = "1%" !== t.top, r = "2px" === t.marginLeft, i = "4px" === t.width, o.style.marginRight = "50%", n = "4px" === t.marginRight, mt.removeChild(s), o = null
            }
        }
        var e, i, n, r, s = k.createElement("div"),
            o = k.createElement("div");
        o.style && (o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === o.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(o), S.extend(g, {
            pixelPosition: function () {
                return t(), e
            },
            boxSizingReliable: function () {
                return t(), i
            },
            pixelMarginRight: function () {
                return t(), n
            },
            reliableMarginLeft: function () {
                return t(), r
            }
        }))
    }();
    var Nt = /^(none|table(?!-c[ea]).+)/,
        It = /^--/,
        qt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ht = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Wt = ["Webkit", "Moz", "ms"],
        Bt = k.createElement("div").style;

    function Xt(t) {
        var e = S.cssProps[t];
        return e || (e = S.cssProps[t] = function (t) {
            if (t in Bt) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), i = Wt.length; i--;)
                if ((t = Wt[i] + e) in Bt) return t
        }(t) || t), e
    }

    function Ut(t, e, i) {
        var n = J.exec(e);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
    }

    function Yt(t, e, i, n, r) {
        var s, o = 0;
        for (s = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0; s < 4; s += 2) "margin" === i && (o += S.css(t, i + K[s], !0, r)), n ? ("content" === i && (o -= S.css(t, "padding" + K[s], !0, r)), "margin" !== i && (o -= S.css(t, "border" + K[s] + "Width", !0, r))) : (o += S.css(t, "padding" + K[s], !0, r), "padding" !== i && (o += S.css(t, "border" + K[s] + "Width", !0, r)));
        return o
    }

    function Vt(t, e, i) {
        var n, r = Lt(t),
            s = zt(t, e, r),
            o = "border-box" === S.css(t, "boxSizing", !1, r);
        return jt.test(s) ? s : (n = o && (g.boxSizingReliable() || s === t.style[e]), "auto" === s && (s = t["offset" + e[0].toUpperCase() + e.slice(1)]), (s = parseFloat(s) || 0) + Yt(t, e, i || (o ? "border" : "content"), n, r) + "px")
    }

    function Zt(t, e, i, n, r) {
        return new Zt.prototype.init(t, e, i, n, r)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var i = zt(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function (t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, s, o, a = S.camelCase(e),
                    l = It.test(e),
                    h = t.style;
                return l || (e = Xt(a)), o = S.cssHooks[e] || S.cssHooks[a], void 0 === i ? o && "get" in o && void 0 !== (r = o.get(t, !1, n)) ? r : h[e] : ("string" === (s = typeof i) && (r = J.exec(i)) && r[1] && (i = it(t, e, r), s = "number"), void(null != i && i == i && ("number" === s && (i += r && r[3] || (S.cssNumber[a] ? "" : "px")), g.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (h[e] = "inherit"), o && "set" in o && void 0 === (i = o.set(t, i, n)) || (l ? h.setProperty(e, i) : h[e] = i))))
            }
        },
        css: function (t, e, i, n) {
            var r, s, o, a = S.camelCase(e);
            return It.test(e) || (e = Xt(a)), (o = S.cssHooks[e] || S.cssHooks[a]) && "get" in o && (r = o.get(t, !0, i)), void 0 === r && (r = zt(t, e, n)), "normal" === r && e in Ht && (r = Ht[e]), "" === i || i ? (s = parseFloat(r), !0 === i || isFinite(s) ? s || 0 : r) : r
        }
    }), S.each(["height", "width"], function (t, o) {
        S.cssHooks[o] = {
            get: function (t, e, i) {
                if (e) return !Nt.test(S.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Vt(t, o, i) : et(t, qt, function () {
                    return Vt(t, o, i)
                })
            },
            set: function (t, e, i) {
                var n, r = i && Lt(t),
                    s = i && Yt(t, o, i, "border-box" === S.css(t, "boxSizing", !1, r), r);
                return s && (n = J.exec(e)) && "px" !== (n[3] || "px") && (t.style[o] = e, e = S.css(t, o)), Ut(0, e, s)
            }
        }
    }), S.cssHooks.marginLeft = Ft(g.reliableMarginLeft, function (t, e) {
        if (e) return (parseFloat(zt(t, "marginLeft")) || t.getBoundingClientRect().left - et(t, {
            marginLeft: 0
        }, function () {
            return t.getBoundingClientRect().left
        })) + "px"
    }), S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (r, s) {
        S.cssHooks[r + s] = {
            expand: function (t) {
                for (var e = 0, i = {}, n = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) i[r + K[e] + s] = n[e] || n[e - 2] || n[0];
                return i
            }
        }, Rt.test(r) || (S.cssHooks[r + s].set = Ut)
    }), S.fn.extend({
        css: function (t, e) {
            return W(this, function (t, e, i) {
                var n, r, s = {},
                    o = 0;
                if (Array.isArray(e)) {
                    for (n = Lt(t), r = e.length; o < r; o++) s[e[o]] = S.css(t, e[o], !1, n);
                    return s
                }
                return void 0 !== i ? S.style(t, e, i) : S.css(t, e)
            }, t, e, 1 < arguments.length)
        }
    }), ((S.Tween = Zt).prototype = {
        constructor: Zt,
        init: function (t, e, i, n, r, s) {
            this.elem = t, this.prop = i, this.easing = r || S.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = s || (S.cssNumber[i] ? "" : "px")
        },
        cur: function () {
            var t = Zt.propHooks[this.prop];
            return t && t.get ? t.get(this) : Zt.propHooks._default.get(this)
        },
        run: function (t) {
            var e, i = Zt.propHooks[this.prop];
            return this.options.duration ? this.pos = e = S.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Zt.propHooks._default.set(this), this
        }
    }).init.prototype = Zt.prototype, (Zt.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = S.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            },
            set: function (t) {
                S.fx.step[t.prop] ? S.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[S.cssProps[t.prop]] && !S.cssHooks[t.prop] ? t.elem[t.prop] = t.now : S.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }).scrollTop = Zt.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, S.easing = {
        linear: function (t) {
            return t
        },
        swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, S.fx = Zt.prototype.init, S.fx.step = {};
    var Gt, Qt, Jt, Kt, te = /^(?:toggle|show|hide)$/,
        ee = /queueHooks$/;

    function ie() {
        Qt && (!1 === k.hidden && T.requestAnimationFrame ? T.requestAnimationFrame(ie) : T.setTimeout(ie, S.fx.interval), S.fx.tick())
    }

    function ne() {
        return T.setTimeout(function () {
            Gt = void 0
        }), Gt = S.now()
    }

    function re(t, e) {
        var i, n = 0,
            r = {
                height: t
            };
        for (e = e ? 1 : 0; n < 4; n += 2 - e) r["margin" + (i = K[n])] = r["padding" + i] = t;
        return e && (r.opacity = r.width = t), r
    }

    function se(t, e, i) {
        for (var n, r = (oe.tweeners[e] || []).concat(oe.tweeners["*"]), s = 0, o = r.length; s < o; s++)
            if (n = r[s].call(i, e, t)) return n
    }

    function oe(s, t, e) {
        var i, o, n = 0,
            r = oe.prefilters.length,
            a = S.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (o) return !1;
                for (var t = Gt || ne(), e = Math.max(0, h.startTime + h.duration - t), i = 1 - (e / h.duration || 0), n = 0, r = h.tweens.length; n < r; n++) h.tweens[n].run(i);
                return a.notifyWith(s, [h, i, e]), i < 1 && r ? e : (r || a.notifyWith(s, [h, 1, 0]), a.resolveWith(s, [h]), !1)
            },
            h = a.promise({
                elem: s,
                props: S.extend({}, t),
                opts: S.extend(!0, {
                    specialEasing: {},
                    easing: S.easing._default
                }, e),
                originalProperties: t,
                originalOptions: e,
                startTime: Gt || ne(),
                duration: e.duration,
                tweens: [],
                createTween: function (t, e) {
                    var i = S.Tween(s, h.opts, t, e, h.opts.specialEasing[t] || h.opts.easing);
                    return h.tweens.push(i), i
                },
                stop: function (t) {
                    var e = 0,
                        i = t ? h.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; e < i; e++) h.tweens[e].run(1);
                    return t ? (a.notifyWith(s, [h, 1, 0]), a.resolveWith(s, [h, t])) : a.rejectWith(s, [h, t]), this
                }
            }),
            c = h.props;
        for (function (t, e) {
            var i, n, r, s, o;
            for (i in t)
                if (r = e[n = S.camelCase(i)], s = t[i], Array.isArray(s) && (r = s[1], s = t[i] = s[0]), i !== n && (t[n] = s, delete t[i]), (o = S.cssHooks[n]) && "expand" in o)
                    for (i in s = o.expand(s), delete t[n], s) i in t || (t[i] = s[i], e[i] = r);
                else e[n] = r
        }(c, h.opts.specialEasing); n < r; n++)
            if (i = oe.prefilters[n].call(h, s, c, h.opts)) return S.isFunction(i.stop) && (S._queueHooks(h.elem, h.opts.queue).stop = S.proxy(i.stop, i)), i;
        return S.map(c, se, h), S.isFunction(h.opts.start) && h.opts.start.call(s, h), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always), S.fx.timer(S.extend(l, {
            elem: s,
            anim: h,
            queue: h.opts.queue
        })), h
    }
    S.Animation = S.extend(oe, {
        tweeners: {
            "*": [function (t, e) {
                var i = this.createTween(t, e);
                return it(i.elem, t, J.exec(e), i), i
            }]
        },
        tweener: function (t, e) {
            for (var i, n = 0, r = (t = S.isFunction(t) ? (e = t, ["*"]) : t.match(L)).length; n < r; n++) i = t[n], oe.tweeners[i] = oe.tweeners[i] || [], oe.tweeners[i].unshift(e)
        },
        prefilters: [function (t, e, i) {
            var n, r, s, o, a, l, h, c, u = "width" in e || "height" in e,
                d = this,
                p = {},
                f = t.style,
                m = t.nodeType && tt(t),
                g = U.get(t, "fxshow");
            for (n in i.queue || (null == (o = S._queueHooks(t, "fx")).unqueued && (o.unqueued = 0, a = o.empty.fire, o.empty.fire = function () {
                o.unqueued || a()
            }), o.unqueued++, d.always(function () {
                d.always(function () {
                    o.unqueued--, S.queue(t, "fx").length || o.empty.fire()
                })
            })), e)
                if (r = e[n], te.test(r)) {
                    if (delete e[n], s = s || "toggle" === r, r === (m ? "hide" : "show")) {
                        if ("show" !== r || !g || void 0 === g[n]) continue;
                        m = !0
                    }
                    p[n] = g && g[n] || S.style(t, n)
                }
            if ((l = !S.isEmptyObject(e)) || !S.isEmptyObject(p))
                for (n in u && 1 === t.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (h = g && g.display) && (h = U.get(t, "display")), "none" === (c = S.css(t, "display")) && (h ? c = h : (rt([t], !0), h = t.style.display || h, c = S.css(t, "display"), rt([t]))), ("inline" === c || "inline-block" === c && null != h) && "none" === S.css(t, "float") && (l || (d.done(function () {
                    f.display = h
                }), null == h && (c = f.display, h = "none" === c ? "" : c)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", d.always(function () {
                    f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
                })), l = !1, p) l || (g ? "hidden" in g && (m = g.hidden) : g = U.access(t, "fxshow", {
                    display: h
                }), s && (g.hidden = !m), m && rt([t], !0), d.done(function () {
                    for (n in m || rt([t]), U.remove(t, "fxshow"), p) S.style(t, n, p[n])
                })), l = se(m ? g[n] : 0, n, d), n in g || (g[n] = l.start, m && (l.end = l.start, l.start = 0))
        }],
        prefilter: function (t, e) {
            e ? oe.prefilters.unshift(t) : oe.prefilters.push(t)
        }
    }), S.speed = function (t, e, i) {
        var n = t && "object" == typeof t ? S.extend({}, t) : {
            complete: i || !i && e || S.isFunction(t) && t,
            duration: t,
            easing: i && e || e && !S.isFunction(e) && e
        };
        return S.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in S.fx.speeds ? n.duration = S.fx.speeds[n.duration] : n.duration = S.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
            S.isFunction(n.old) && n.old.call(this), n.queue && S.dequeue(this, n.queue)
        }, n
    }, S.fn.extend({
        fadeTo: function (t, e, i, n) {
            return this.filter(tt).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, i, n)
        },
        animate: function (e, t, i, n) {
            var r = S.isEmptyObject(e),
                s = S.speed(t, i, n),
                o = function () {
                    var t = oe(this, S.extend({}, e), s);
                    (r || U.get(this, "finish")) && t.stop(!0)
                };
            return o.finish = o, r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function (r, t, s) {
            var o = function (t) {
                var e = t.stop;
                delete t.stop, e(s)
            };
            return "string" != typeof r && (s = t, t = r, r = void 0), t && !1 !== r && this.queue(r || "fx", []), this.each(function () {
                var t = !0,
                    e = null != r && r + "queueHooks",
                    i = S.timers,
                    n = U.get(this);
                if (e) n[e] && n[e].stop && o(n[e]);
                else
                    for (e in n) n[e] && n[e].stop && ee.test(e) && o(n[e]);
                for (e = i.length; e--;) i[e].elem !== this || null != r && i[e].queue !== r || (i[e].anim.stop(s), t = !1, i.splice(e, 1));
                !t && s || S.dequeue(this, r)
            })
        },
        finish: function (o) {
            return !1 !== o && (o = o || "fx"), this.each(function () {
                var t, e = U.get(this),
                    i = e[o + "queue"],
                    n = e[o + "queueHooks"],
                    r = S.timers,
                    s = i ? i.length : 0;
                for (e.finish = !0, S.queue(this, o, []), n && n.stop && n.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === o && (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete e.finish
            })
        }
    }), S.each(["toggle", "show", "hide"], function (t, n) {
        var r = S.fn[n];
        S.fn[n] = function (t, e, i) {
            return null == t || "boolean" == typeof t ? r.apply(this, arguments) : this.animate(re(n, !0), t, e, i)
        }
    }), S.each({
        slideDown: re("show"),
        slideUp: re("hide"),
        slideToggle: re("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (t, n) {
        S.fn[t] = function (t, e, i) {
            return this.animate(n, t, e, i)
        }
    }), S.timers = [], S.fx.tick = function () {
        var t, e = 0,
            i = S.timers;
        for (Gt = S.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
        i.length || S.fx.stop(), Gt = void 0
    }, S.fx.timer = function (t) {
        S.timers.push(t), S.fx.start()
    }, S.fx.interval = 13, S.fx.start = function () {
        Qt || (Qt = !0, ie())
    }, S.fx.stop = function () {
        Qt = null
    }, S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, S.fn.delay = function (n, t) {
        return n = S.fx && S.fx.speeds[n] || n, t = t || "fx", this.queue(t, function (t, e) {
            var i = T.setTimeout(t, n);
            e.stop = function () {
                T.clearTimeout(i)
            }
        })
    }, Jt = k.createElement("input"), Kt = k.createElement("select").appendChild(k.createElement("option")), Jt.type = "checkbox", g.checkOn = "" !== Jt.value, g.optSelected = Kt.selected, (Jt = k.createElement("input")).value = "t", Jt.type = "radio", g.radioValue = "t" === Jt.value;
    var ae, le = S.expr.attrHandle;
    S.fn.extend({
        attr: function (t, e) {
            return W(this, S.attr, t, e, 1 < arguments.length)
        },
        removeAttr: function (t) {
            return this.each(function () {
                S.removeAttr(this, t)
            })
        }
    }), S.extend({
        attr: function (t, e, i) {
            var n, r, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return void 0 === t.getAttribute ? S.prop(t, e, i) : (1 === s && S.isXMLDoc(t) || (r = S.attrHooks[e.toLowerCase()] || (S.expr.match.bool.test(e) ? ae : void 0)), void 0 !== i ? null === i ? void S.removeAttr(t, e) : r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : r && "get" in r && null !== (n = r.get(t, e)) ? n : null == (n = S.find.attr(t, e)) ? void 0 : n)
        },
        attrHooks: {
            type: {
                set: function (t, e) {
                    if (!g.radioValue && "radio" === e && P(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        },
        removeAttr: function (t, e) {
            var i, n = 0,
                r = e && e.match(L);
            if (r && 1 === t.nodeType)
                for (; i = r[n++];) t.removeAttribute(i)
        }
    }), ae = {
        set: function (t, e, i) {
            return !1 === e ? S.removeAttr(t, i) : t.setAttribute(i, i), i
        }
    }, S.each(S.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var o = le[e] || S.find.attr;
        le[e] = function (t, e, i) {
            var n, r, s = e.toLowerCase();
            return i || (r = le[s], le[s] = n, n = null != o(t, e, i) ? s : null, le[s] = r), n
        }
    });
    var he = /^(?:input|select|textarea|button)$/i,
        ce = /^(?:a|area)$/i;

    function ue(t) {
        return (t.match(L) || []).join(" ")
    }

    function de(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }
    S.fn.extend({
        prop: function (t, e) {
            return W(this, S.prop, t, e, 1 < arguments.length)
        },
        removeProp: function (t) {
            return this.each(function () {
                delete this[S.propFix[t] || t]
            })
        }
    }), S.extend({
        prop: function (t, e, i) {
            var n, r, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return 1 === s && S.isXMLDoc(t) || (e = S.propFix[e] || e, r = S.propHooks[e]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = S.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : he.test(t.nodeName) || ce.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), g.optSelected || (S.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        S.propFix[this.toLowerCase()] = this
    }), S.fn.extend({
        addClass: function (e) {
            var t, i, n, r, s, o, a, l = 0;
            if (S.isFunction(e)) return this.each(function (t) {
                S(this).addClass(e.call(this, t, de(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(L) || []; i = this[l++];)
                    if (r = de(i), n = 1 === i.nodeType && " " + ue(r) + " ") {
                        for (o = 0; s = t[o++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                        r !== (a = ue(n)) && i.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function (e) {
            var t, i, n, r, s, o, a, l = 0;
            if (S.isFunction(e)) return this.each(function (t) {
                S(this).removeClass(e.call(this, t, de(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(L) || []; i = this[l++];)
                    if (r = de(i), n = 1 === i.nodeType && " " + ue(r) + " ") {
                        for (o = 0; s = t[o++];)
                            for (; - 1 < n.indexOf(" " + s + " ");) n = n.replace(" " + s + " ", " ");
                        r !== (a = ue(n)) && i.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function (r, e) {
            var s = typeof r;
            return "boolean" == typeof e && "string" === s ? e ? this.addClass(r) : this.removeClass(r) : S.isFunction(r) ? this.each(function (t) {
                S(this).toggleClass(r.call(this, t, de(this), e), e)
            }) : this.each(function () {
                var t, e, i, n;
                if ("string" === s)
                    for (e = 0, i = S(this), n = r.match(L) || []; t = n[e++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else void 0 !== r && "boolean" !== s || ((t = de(this)) && U.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === r ? "" : U.get(this, "__className__") || ""))
            })
        },
        hasClass: function (t) {
            var e, i, n = 0;
            for (e = " " + t + " "; i = this[n++];)
                if (1 === i.nodeType && -1 < (" " + ue(de(i)) + " ").indexOf(e)) return !0;
            return !1
        }
    });
    var pe = /\r/g;
    S.fn.extend({
        val: function (i) {
            var n, t, r, e = this[0];
            return arguments.length ? (r = S.isFunction(i), this.each(function (t) {
                var e;
                1 === this.nodeType && (null == (e = r ? i.call(this, t, S(this).val()) : i) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = S.map(e, function (t) {
                    return null == t ? "" : t + ""
                })), (n = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e))
            })) : e ? (n = S.valHooks[e.type] || S.valHooks[e.nodeName.toLowerCase()]) && "get" in n && void 0 !== (t = n.get(e, "value")) ? t : "string" == typeof (t = e.value) ? t.replace(pe, "") : null == t ? "" : t : void 0
        }
    }), S.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = S.find.attr(t, "value");
                    return null != e ? e : ue(S.text(t))
                }
            },
            select: {
                get: function (t) {
                    var e, i, n, r = t.options,
                        s = t.selectedIndex,
                        o = "select-one" === t.type,
                        a = o ? null : [],
                        l = o ? s + 1 : r.length;
                    for (n = s < 0 ? l : o ? s : 0; n < l; n++)
                        if (((i = r[n]).selected || n === s) && !i.disabled && (!i.parentNode.disabled || !P(i.parentNode, "optgroup"))) {
                            if (e = S(i).val(), o) return e;
                            a.push(e)
                        }
                    return a
                },
                set: function (t, e) {
                    for (var i, n, r = t.options, s = S.makeArray(e), o = r.length; o--;)((n = r[o]).selected = -1 < S.inArray(S.valHooks.option.get(n), s)) && (i = !0);
                    return i || (t.selectedIndex = -1), s
                }
            }
        }
    }), S.each(["radio", "checkbox"], function () {
        S.valHooks[this] = {
            set: function (t, e) {
                if (Array.isArray(e)) return t.checked = -1 < S.inArray(S(t).val(), e)
            }
        }, g.checkOn || (S.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var fe = /^(?:focusinfocus|focusoutblur)$/;
    S.extend(S.event, {
        trigger: function (t, e, i, n) {
            var r, s, o, a, l, h, c, u = [i || k],
                d = f.call(t, "type") ? t.type : t,
                p = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = o = i = i || k, 3 !== i.nodeType && 8 !== i.nodeType && !fe.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (p = d.split(".")).shift(), p.sort()), l = d.indexOf(":") < 0 && "on" + d, (t = t[S.expando] ? t : new S.Event(d, "object" == typeof t && t)).isTrigger = n ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : S.makeArray(e, [t]), c = S.event.special[d] || {}, n || !c.trigger || !1 !== c.trigger.apply(i, e))) {
                if (!n && !c.noBubble && !S.isWindow(i)) {
                    for (a = c.delegateType || d, fe.test(a + d) || (s = s.parentNode); s; s = s.parentNode) u.push(s), o = s;
                    o === (i.ownerDocument || k) && u.push(o.defaultView || o.parentWindow || T)
                }
                for (r = 0;
                     (s = u[r++]) && !t.isPropagationStopped();) t.type = 1 < r ? a : c.bindType || d, (h = (U.get(s, "events") || {})[t.type] && U.get(s, "handle")) && h.apply(s, e), (h = l && s[l]) && h.apply && B(s) && (t.result = h.apply(s, e), !1 === t.result && t.preventDefault());
                return t.type = d, n || t.isDefaultPrevented() || c._default && !1 !== c._default.apply(u.pop(), e) || !B(i) || l && S.isFunction(i[d]) && !S.isWindow(i) && ((o = i[l]) && (i[l] = null), i[S.event.triggered = d](), S.event.triggered = void 0, o && (i[l] = o)), t.result
            }
        },
        simulate: function (t, e, i) {
            var n = S.extend(new S.Event, i, {
                type: t,
                isSimulated: !0
            });
            S.event.trigger(n, null, e)
        }
    }), S.fn.extend({
        trigger: function (t, e) {
            return this.each(function () {
                S.event.trigger(t, e, this)
            })
        },
        triggerHandler: function (t, e) {
            var i = this[0];
            if (i) return S.event.trigger(t, e, i, !0)
        }
    }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, i) {
        S.fn[i] = function (t, e) {
            return 0 < arguments.length ? this.on(i, null, t, e) : this.trigger(i)
        }
    }), S.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), g.focusin = "onfocusin" in T, g.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function (i, n) {
        var r = function (t) {
            S.event.simulate(n, t.target, S.event.fix(t))
        };
        S.event.special[n] = {
            setup: function () {
                var t = this.ownerDocument || this,
                    e = U.access(t, n);
                e || t.addEventListener(i, r, !0), U.access(t, n, (e || 0) + 1)
            },
            teardown: function () {
                var t = this.ownerDocument || this,
                    e = U.access(t, n) - 1;
                e ? U.access(t, n, e) : (t.removeEventListener(i, r, !0), U.remove(t, n))
            }
        }
    });
    var me = T.location,
        ge = S.now(),
        _e = /\?/;
    S.parseXML = function (t) {
        var e;
        if (!t || "string" != typeof t) return null;
        try {
            e = (new T.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {
            e = void 0
        }
        return e && !e.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + t), e
    };
    var ve = /\[\]$/,
        ye = /\r?\n/g,
        be = /^(?:submit|button|image|reset|file)$/i,
        we = /^(?:input|select|textarea|keygen)/i;

    function xe(i, t, n, r) {
        var e;
        if (Array.isArray(t)) S.each(t, function (t, e) {
            n || ve.test(i) ? r(i, e) : xe(i + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, n, r)
        });
        else if (n || "object" !== S.type(t)) r(i, t);
        else
            for (e in t) xe(i + "[" + e + "]", t[e], n, r)
    }
    S.param = function (t, e) {
        var i, n = [],
            r = function (t, e) {
                var i = S.isFunction(e) ? e() : e;
                n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
            };
        if (Array.isArray(t) || t.jquery && !S.isPlainObject(t)) S.each(t, function () {
            r(this.name, this.value)
        });
        else
            for (i in t) xe(i, t[i], e, r);
        return n.join("&")
    }, S.fn.extend({
        serialize: function () {
            return S.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var t = S.prop(this, "elements");
                return t ? S.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !S(this).is(":disabled") && we.test(this.nodeName) && !be.test(t) && (this.checked || !st.test(t))
            }).map(function (t, e) {
                var i = S(this).val();
                return null == i ? null : Array.isArray(i) ? S.map(i, function (t) {
                    return {
                        name: e.name,
                        value: t.replace(ye, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(ye, "\r\n")
                }
            }).get()
        }
    });
    var Te = /%20/g,
        ke = /#.*$/,
        Se = /([?&])_=[^&]*/,
        Ce = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pe = /^(?:GET|HEAD)$/,
        Ae = /^\/\//,
        Oe = {},
        Me = {},
        De = "*/".concat("*"),
        Ee = k.createElement("a");

    function $e(s) {
        return function (t, e) {
            "string" != typeof t && (e = t, t = "*");
            var i, n = 0,
                r = t.toLowerCase().match(L) || [];
            if (S.isFunction(e))
                for (; i = r[n++];) "+" === i[0] ? (i = i.slice(1) || "*", (s[i] = s[i] || []).unshift(e)) : (s[i] = s[i] || []).push(e)
        }
    }

    function Re(e, r, s, o) {
        var a = {},
            l = e === Me;

        function h(t) {
            var n;
            return a[t] = !0, S.each(e[t] || [], function (t, e) {
                var i = e(r, s, o);
                return "string" != typeof i || l || a[i] ? l ? !(n = i) : void 0 : (r.dataTypes.unshift(i), h(i), !1)
            }), n
        }
        return h(r.dataTypes[0]) || !a["*"] && h("*")
    }

    function je(t, e) {
        var i, n, r = S.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
        return n && S.extend(!0, t, n), t
    }
    Ee.href = me.href, S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: me.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(me.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": De,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (t, e) {
            return e ? je(je(t, S.ajaxSettings), e) : je(S.ajaxSettings, t)
        },
        ajaxPrefilter: $e(Oe),
        ajaxTransport: $e(Me),
        ajax: function (t, e) {
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var c, u, d, i, p, n, f, m, r, s, g = S.ajaxSetup({}, e),
                _ = g.context || g,
                v = g.context && (_.nodeType || _.jquery) ? S(_) : S.event,
                y = S.Deferred(),
                b = S.Callbacks("once memory"),
                w = g.statusCode || {},
                o = {},
                a = {},
                l = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                        var e;
                        if (f) {
                            if (!i)
                                for (i = {}; e = Ce.exec(d);) i[e[1].toLowerCase()] = e[2];
                            e = i[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function () {
                        return f ? d : null
                    },
                    setRequestHeader: function (t, e) {
                        return null == f && (t = a[t.toLowerCase()] = a[t.toLowerCase()] || t, o[t] = e), this
                    },
                    overrideMimeType: function (t) {
                        return null == f && (g.mimeType = t), this
                    },
                    statusCode: function (t) {
                        var e;
                        if (t)
                            if (f) x.always(t[x.status]);
                            else
                                for (e in t) w[e] = [w[e], t[e]];
                        return this
                    },
                    abort: function (t) {
                        var e = t || l;
                        return c && c.abort(e), h(0, e), this
                    }
                };
            if (y.promise(x), g.url = ((t || g.url || me.href) + "").replace(Ae, me.protocol + "//"), g.type = e.method || e.type || g.method || g.type, g.dataTypes = (g.dataType || "*").toLowerCase().match(L) || [""], null == g.crossDomain) {
                n = k.createElement("a");
                try {
                    n.href = g.url, n.href = n.href, g.crossDomain = Ee.protocol + "//" + Ee.host != n.protocol + "//" + n.host
                } catch (t) {
                    g.crossDomain = !0
                }
            }
            if (g.data && g.processData && "string" != typeof g.data && (g.data = S.param(g.data, g.traditional)), Re(Oe, g, e, x), f) return x;
            for (r in (m = S.event && g.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !Pe.test(g.type), u = g.url.replace(ke, ""), g.hasContent ? g.data && g.processData && 0 === (g.contentType || "").indexOf("application/x-www-form-urlencoded") && (g.data = g.data.replace(Te, "+")) : (s = g.url.slice(u.length), g.data && (u += (_e.test(u) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (u = u.replace(Se, "$1"), s = (_e.test(u) ? "&" : "?") + "_=" + ge++ + s), g.url = u + s), g.ifModified && (S.lastModified[u] && x.setRequestHeader("If-Modified-Since", S.lastModified[u]), S.etag[u] && x.setRequestHeader("If-None-Match", S.etag[u])), (g.data && g.hasContent && !1 !== g.contentType || e.contentType) && x.setRequestHeader("Content-Type", g.contentType), x.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + De + "; q=0.01" : "") : g.accepts["*"]), g.headers) x.setRequestHeader(r, g.headers[r]);
            if (g.beforeSend && (!1 === g.beforeSend.call(_, x, g) || f)) return x.abort();
            if (l = "abort", b.add(g.complete), x.done(g.success), x.fail(g.error), c = Re(Me, g, e, x)) {
                if (x.readyState = 1, m && v.trigger("ajaxSend", [x, g]), f) return x;
                g.async && 0 < g.timeout && (p = T.setTimeout(function () {
                    x.abort("timeout")
                }, g.timeout));
                try {
                    f = !1, c.send(o, h)
                } catch (t) {
                    if (f) throw t;
                    h(-1, t)
                }
            } else h(-1, "No Transport");

            function h(t, e, i, n) {
                var r, s, o, a, l, h = e;
                f || (f = !0, p && T.clearTimeout(p), c = void 0, d = n || "", x.readyState = 0 < t ? 4 : 0, r = 200 <= t && t < 300 || 304 === t, i && (a = function (t, e, i) {
                    for (var n, r, s, o, a = t.contents, l = t.dataTypes;
                         "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (n)
                        for (r in a)
                            if (a[r] && a[r].test(n)) {
                                l.unshift(r);
                                break
                            }
                    if (l[0] in i) s = l[0];
                    else {
                        for (r in i) {
                            if (!l[0] || t.converters[r + " " + l[0]]) {
                                s = r;
                                break
                            }
                            o || (o = r)
                        }
                        s = s || o
                    }
                    if (s) return s !== l[0] && l.unshift(s), i[s]
                }(g, x, i)), a = function (t, e, i, n) {
                    var r, s, o, a, l, h = {},
                        c = t.dataTypes.slice();
                    if (c[1])
                        for (o in t.converters) h[o.toLowerCase()] = t.converters[o];
                    for (s = c.shift(); s;)
                        if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = c.shift())
                            if ("*" === s) s = l;
                            else if ("*" !== l && l !== s) {
                                if (!(o = h[l + " " + s] || h["* " + s]))
                                    for (r in h)
                                        if ((a = r.split(" "))[1] === s && (o = h[l + " " + a[0]] || h["* " + a[0]])) {
                                            !0 === o ? o = h[r] : !0 !== h[r] && (s = a[0], c.unshift(a[1]));
                                            break
                                        }
                                if (!0 !== o)
                                    if (o && t.throws) e = o(e);
                                    else try {
                                        e = o(e)
                                    } catch (t) {
                                        return {
                                            state: "parsererror",
                                            error: o ? t : "No conversion from " + l + " to " + s
                                        }
                                    }
                            }
                    return {
                        state: "success",
                        data: e
                    }
                }(g, a, x, r), r ? (g.ifModified && ((l = x.getResponseHeader("Last-Modified")) && (S.lastModified[u] = l), (l = x.getResponseHeader("etag")) && (S.etag[u] = l)), 204 === t || "HEAD" === g.type ? h = "nocontent" : 304 === t ? h = "notmodified" : (h = a.state, s = a.data, r = !(o = a.error))) : (o = h, !t && h || (h = "error", t < 0 && (t = 0))), x.status = t, x.statusText = (e || h) + "", r ? y.resolveWith(_, [s, h, x]) : y.rejectWith(_, [x, h, o]), x.statusCode(w), w = void 0, m && v.trigger(r ? "ajaxSuccess" : "ajaxError", [x, g, r ? s : o]), b.fireWith(_, [x, h]), m && (v.trigger("ajaxComplete", [x, g]), --S.active || S.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function (t, e, i) {
            return S.get(t, e, i, "json")
        },
        getScript: function (t, e) {
            return S.get(t, void 0, e, "script")
        }
    }), S.each(["get", "post"], function (t, r) {
        S[r] = function (t, e, i, n) {
            return S.isFunction(e) && (n = n || i, i = e, e = void 0), S.ajax(S.extend({
                url: t,
                type: r,
                dataType: n,
                data: e,
                success: i
            }, S.isPlainObject(t) && t))
        }
    }), S._evalUrl = function (t) {
        return S.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, S.fn.extend({
        wrapAll: function (t) {
            var e;
            return this[0] && (S.isFunction(t) && (t = t.call(this[0])), e = S(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this
        },
        wrapInner: function (i) {
            return S.isFunction(i) ? this.each(function (t) {
                S(this).wrapInner(i.call(this, t))
            }) : this.each(function () {
                var t = S(this),
                    e = t.contents();
                e.length ? e.wrapAll(i) : t.append(i)
            })
        },
        wrap: function (e) {
            var i = S.isFunction(e);
            return this.each(function (t) {
                S(this).wrapAll(i ? e.call(this, t) : e)
            })
        },
        unwrap: function (t) {
            return this.parent(t).not("body").each(function () {
                S(this).replaceWith(this.childNodes)
            }), this
        }
    }), S.expr.pseudos.hidden = function (t) {
        return !S.expr.pseudos.visible(t)
    }, S.expr.pseudos.visible = function (t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, S.ajaxSettings.xhr = function () {
        try {
            return new T.XMLHttpRequest
        } catch (t) {}
    };
    var Le = {
            0: 200,
            1223: 204
        },
        ze = S.ajaxSettings.xhr();
    g.cors = !!ze && "withCredentials" in ze, g.ajax = ze = !!ze, S.ajaxTransport(function (r) {
        var s, o;
        if (g.cors || ze && !r.crossDomain) return {
            send: function (t, e) {
                var i, n = r.xhr();
                if (n.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                    for (i in r.xhrFields) n[i] = r.xhrFields[i];
                for (i in r.mimeType && n.overrideMimeType && n.overrideMimeType(r.mimeType), r.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) n.setRequestHeader(i, t[i]);
                s = function (t) {
                    return function () {
                        s && (s = o = n.onload = n.onerror = n.onabort = n.onreadystatechange = null, "abort" === t ? n.abort() : "error" === t ? "number" != typeof n.status ? e(0, "error") : e(n.status, n.statusText) : e(Le[n.status] || n.status, n.statusText, "text" !== (n.responseType || "text") || "string" != typeof n.responseText ? {
                            binary: n.response
                        } : {
                            text: n.responseText
                        }, n.getAllResponseHeaders()))
                    }
                }, n.onload = s(), o = n.onerror = s("error"), void 0 !== n.onabort ? n.onabort = o : n.onreadystatechange = function () {
                    4 === n.readyState && T.setTimeout(function () {
                        s && o()
                    })
                }, s = s("abort");
                try {
                    n.send(r.hasContent && r.data || null)
                } catch (t) {
                    if (s) throw t
                }
            },
            abort: function () {
                s && s()
            }
        }
    }), S.ajaxPrefilter(function (t) {
        t.crossDomain && (t.contents.script = !1)
    }), S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (t) {
                return S.globalEval(t), t
            }
        }
    }), S.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), S.ajaxTransport("script", function (i) {
        var n, r;
        if (i.crossDomain) return {
            send: function (t, e) {
                n = S("<script>").prop({
                    charset: i.scriptCharset,
                    src: i.url
                }).on("load error", r = function (t) {
                    n.remove(), r = null, t && e("error" === t.type ? 404 : 200, t.type)
                }), k.head.appendChild(n[0])
            },
            abort: function () {
                r && r()
            }
        }
    });
    var Fe, Ne = [],
        Ie = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var t = Ne.pop() || S.expando + "_" + ge++;
            return this[t] = !0, t
        }
    }), S.ajaxPrefilter("json jsonp", function (t, e, i) {
        var n, r, s, o = !1 !== t.jsonp && (Ie.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ie.test(t.data) && "data");
        if (o || "jsonp" === t.dataTypes[0]) return n = t.jsonpCallback = S.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, o ? t[o] = t[o].replace(Ie, "$1" + n) : !1 !== t.jsonp && (t.url += (_e.test(t.url) ? "&" : "?") + t.jsonp + "=" + n), t.converters["script json"] = function () {
            return s || S.error(n + " was not called"), s[0]
        }, t.dataTypes[0] = "json", r = T[n], T[n] = function () {
            s = arguments
        }, i.always(function () {
            void 0 === r ? S(T).removeProp(n) : T[n] = r, t[n] && (t.jsonpCallback = e.jsonpCallback, Ne.push(n)), s && S.isFunction(r) && r(s[0]), s = r = void 0
        }), "script"
    }), g.createHTMLDocument = ((Fe = k.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Fe.childNodes.length), S.parseHTML = function (t, e, i) {
        return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e, e = !1), e || (g.createHTMLDocument ? ((n = (e = k.implementation.createHTMLDocument("")).createElement("base")).href = k.location.href, e.head.appendChild(n)) : e = k), s = !i && [], (r = A.exec(t)) ? [e.createElement(r[1])] : (r = ft([t], e, s), s && s.length && S(s).remove(), S.merge([], r.childNodes)));
        var n, r, s
    }, S.fn.load = function (t, e, i) {
        var n, r, s, o = this,
            a = t.indexOf(" ");
        return -1 < a && (n = ue(t.slice(a)), t = t.slice(0, a)), S.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (r = "POST"), 0 < o.length && S.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e
        }).done(function (t) {
            s = arguments, o.html(n ? S("<div>").append(S.parseHTML(t)).find(n) : t)
        }).always(i && function (t, e) {
            o.each(function () {
                i.apply(this, s || [t.responseText, e, t])
            })
        }), this
    }, S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        S.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), S.expr.pseudos.animated = function (e) {
        return S.grep(S.timers, function (t) {
            return e === t.elem
        }).length
    }, S.offset = {
        setOffset: function (t, e, i) {
            var n, r, s, o, a, l, h = S.css(t, "position"),
                c = S(t),
                u = {};
            "static" === h && (t.style.position = "relative"), a = c.offset(), s = S.css(t, "top"), l = S.css(t, "left"), r = ("absolute" === h || "fixed" === h) && -1 < (s + l).indexOf("auto") ? (o = (n = c.position()).top, n.left) : (o = parseFloat(s) || 0, parseFloat(l) || 0), S.isFunction(e) && (e = e.call(t, i, S.extend({}, a))), null != e.top && (u.top = e.top - a.top + o), null != e.left && (u.left = e.left - a.left + r), "using" in e ? e.using.call(t, u) : c.css(u)
        }
    }, S.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                S.offset.setOffset(this, e, t)
            });
            var t, i, n, r, s = this[0];
            return s ? s.getClientRects().length ? (n = s.getBoundingClientRect(), i = (t = s.ownerDocument).documentElement, r = t.defaultView, {
                top: n.top + r.pageYOffset - i.clientTop,
                left: n.left + r.pageXOffset - i.clientLeft
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function () {
            if (this[0]) {
                var t, e, i = this[0],
                    n = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === S.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), P(t[0], "html") || (n = t.offset()), n = {
                    top: n.top + S.css(t[0], "borderTopWidth", !0),
                    left: n.left + S.css(t[0], "borderLeftWidth", !0)
                }), {
                    top: e.top - n.top - S.css(i, "marginTop", !0),
                    left: e.left - n.left - S.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent; t && "static" === S.css(t, "position");) t = t.offsetParent;
                return t || mt
            })
        }
    }), S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, r) {
        var s = "pageYOffset" === r;
        S.fn[e] = function (t) {
            return W(this, function (t, e, i) {
                var n;
                return S.isWindow(t) ? n = t : 9 === t.nodeType && (n = t.defaultView), void 0 === i ? n ? n[r] : t[e] : void(n ? n.scrollTo(s ? n.pageXOffset : i, s ? i : n.pageYOffset) : t[e] = i)
            }, e, t, arguments.length)
        }
    }), S.each(["top", "left"], function (t, i) {
        S.cssHooks[i] = Ft(g.pixelPosition, function (t, e) {
            if (e) return e = zt(t, i), jt.test(e) ? S(t).position()[i] + "px" : e
        })
    }), S.each({
        Height: "height",
        Width: "width"
    }, function (o, a) {
        S.each({
            padding: "inner" + o,
            content: a,
            "": "outer" + o
        }, function (n, s) {
            S.fn[s] = function (t, e) {
                var i = arguments.length && (n || "boolean" != typeof t),
                    r = n || (!0 === t || !0 === e ? "margin" : "border");
                return W(this, function (t, e, i) {
                    var n;
                    return S.isWindow(t) ? 0 === s.indexOf("outer") ? t["inner" + o] : t.document.documentElement["client" + o] : 9 === t.nodeType ? (n = t.documentElement, Math.max(t.body["scroll" + o], n["scroll" + o], t.body["offset" + o], n["offset" + o], n["client" + o])) : void 0 === i ? S.css(t, e, r) : S.style(t, e, i, r)
                }, a, i ? t : void 0, i)
            }
        })
    }), S.fn.extend({
        bind: function (t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function (t, e) {
            return this.off(t, null, e)
        },
        delegate: function (t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function (t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    }), S.holdReady = function (t) {
        t ? S.readyWait++ : S.ready(!0)
    }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = P, "function" == typeof define && define.amd && define("jquery", [], function () {
        return S
    });
    var qe = T.jQuery,
        He = T.$;
    return S.noConflict = function (t) {
        return T.$ === S && (T.$ = He), t && T.jQuery === S && (T.jQuery = qe), S
    }, t || (T.jQuery = T.$ = S), S
}), window.Modernizr = function (t, u, s) {
    function e(t) {
        c.cssText = t
    }

    function o(t, e) {
        return typeof t === e
    }

    function a(t, e) {
        for (var i in t) {
            var n = t[i];
            if (!~("" + n).indexOf("-") && c[n] !== s) return "pfx" != e || n
        }
        return !1
    }

    function n(t, e, i) {
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = (t + " " + g.join(n + " ") + n).split(" ");
        return o(e, "string") || o(e, "undefined") ? a(r, e) : function (t, e, i) {
            for (var n in t) {
                var r = e[t[n]];
                if (r !== s) return !1 === i ? t[n] : o(r, "function") ? r.bind(i || e) : r
            }
            return !1
        }(r = (t + " " + _.join(n + " ") + n).split(" "), e, i)
    }
    var i, r, l = {},
        d = u.documentElement,
        p = "modernizr",
        h = u.createElement(p),
        c = h.style,
        f = " -webkit- -moz- -o- -ms- ".split(" "),
        m = "Webkit Moz O ms",
        g = m.split(" "),
        _ = m.toLowerCase().split(" "),
        v = {},
        y = [],
        b = y.slice,
        w = function (t, e, i, n) {
            var r, s, o, a, l = u.createElement("div"),
                h = u.body,
                c = h || u.createElement("body");
            if (parseInt(i, 10))
                for (; i--;)(o = u.createElement("div")).id = n ? n[i] : p + (i + 1), l.appendChild(o);
            return r = ["&#173;", '<style id="s', p, '">', t, "</style>"].join(""), l.id = p, (h ? l : c).innerHTML += r, c.appendChild(l), h || (c.style.background = "", c.style.overflow = "hidden", a = d.style.overflow, d.style.overflow = "hidden", d.appendChild(c)), s = e(l, t), h ? l.parentNode.removeChild(l) : (c.parentNode.removeChild(c), d.style.overflow = a), !!s
        },
        x = {}.hasOwnProperty;
    for (var T in r = o(x, "undefined") || o(x.call, "undefined") ? function (t, e) {
        return e in t && o(t.constructor.prototype[e], "undefined")
    } : function (t, e) {
        return x.call(t, e)
    }, Function.prototype.bind || (Function.prototype.bind = function (n) {
        var r = this;
        if ("function" != typeof r) throw new TypeError;
        var s = b.call(arguments, 1),
            o = function () {
                if (this instanceof o) {
                    var t = function () {};
                    t.prototype = r.prototype;
                    var e = new t,
                        i = r.apply(e, s.concat(b.call(arguments)));
                    return Object(i) === i ? i : e
                }
                return r.apply(n, s.concat(b.call(arguments)))
            };
        return o
    }), v.csstransforms3d = function () {
        var i = !!n("perspective");
        return i && "webkitPerspective" in d.style && w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (t, e) {
            i = 9 === t.offsetLeft && 3 === t.offsetHeight
        }), i
    }, v.csstransitions = function () {
        return n("transition")
    }, v) r(v, T) && (i = T.toLowerCase(), l[i] = v[T](), y.push((l[i] ? "" : "no-") + i));
    return l.addTest = function (t, e) {
        if ("object" == typeof t)
            for (var i in t) r(t, i) && l.addTest(i, t[i]);
        else {
            if (t = t.toLowerCase(), l[t] !== s) return l;
            e = "function" == typeof e ? e() : e, d.className += " " + (e ? "" : "no-") + t, l[t] = e
        }
        return l
    }, e(""), h = null,
        function (t, l) {
            function h() {
                var t = f.elements;
                return "string" == typeof t ? t.split(" ") : t
            }

            function c(t) {
                var e = a[t[n]];
                return e || (e = {}, o++, t[n] = o, a[o] = e), e
            }

            function u(t, e, i) {
                return e || (e = l), p ? e.createElement(t) : (i || (i = c(e)), (n = i.cache[t] ? i.cache[t].cloneNode() : s.test(t) ? (i.cache[t] = i.createElem(t)).cloneNode() : i.createElem(t)).canHaveChildren && !r.test(t) ? i.frag.appendChild(n) : n);
                var n
            }

            function e(t) {
                t || (t = l);
                var e, i, n, r, s, o, a = c(t);
                return f.shivCSS && !d && !a.hasCSS && (a.hasCSS = (r = "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}", s = (n = t).createElement("p"), o = n.getElementsByTagName("head")[0] || n.documentElement, s.innerHTML = "x<style>" + r + "</style>", !!o.insertBefore(s.lastChild, o.firstChild))), p || (e = t, (i = a).cache || (i.cache = {}, i.createElem = e.createElement, i.createFrag = e.createDocumentFragment, i.frag = i.createFrag()), e.createElement = function (t) {
                    return f.shivMethods ? u(t, e, i) : i.createElem(t)
                }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + h().join().replace(/\w+/g, function (t) {
                    return i.createElem(t), i.frag.createElement(t), 'c("' + t + '")'
                }) + ");return n}")(f, i.frag)), t
            }
            var d, p, i = t.html5 || {},
                r = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                s = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                n = "_html5shiv",
                o = 0,
                a = {};
            ! function () {
                try {
                    var t = l.createElement("a");
                    t.innerHTML = "<xyz></xyz>", d = "hidden" in t, p = 1 == t.childNodes.length || function () {
                        l.createElement("a");
                        var t = l.createDocumentFragment();
                        return void 0 === t.cloneNode || void 0 === t.createDocumentFragment || void 0 === t.createElement
                    }()
                } catch (t) {
                    p = d = !0
                }
            }();
            var f = {
                elements: i.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                shivCSS: !1 !== i.shivCSS,
                supportsUnknownElements: p,
                shivMethods: !1 !== i.shivMethods,
                type: "default",
                shivDocument: e,
                createElement: u,
                createDocumentFragment: function (t, e) {
                    if (t || (t = l), p) return t.createDocumentFragment();
                    for (var i = (e = e || c(t)).frag.cloneNode(), n = 0, r = h(), s = r.length; n < s; n++) i.createElement(r[n]);
                    return i
                }
            };
            t.html5 = f, e(l)
        }(this, u), l._version = "2.6.2", l._prefixes = f, l._domPrefixes = _, l._cssomPrefixes = g, l.testProp = function (t) {
        return a([t])
    }, l.testAllProps = n, l.testStyles = w, l.prefixed = function (t, e, i) {
        return e ? n(t, e, i) : n(t, "pfx")
    }, d.className = d.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + y.join(" "), l
}(0, this.document),
    function (t, d, e) {
        function u(t) {
            return "[object Function]" == s.call(t)
        }

        function p(t) {
            return "string" == typeof t
        }

        function f() {}

        function m(t) {
            return !t || "loaded" == t || "complete" == t || "uninitialized" == t
        }

        function g() {
            var t = b.shift();
            w = 1, t ? t.t ? v(function () {
                ("c" == t.t ? _.injectCss : _.injectJs)(t.s, 0, t.a, t.x, t.e, 1)
            }, 0) : (t(), g()) : w = 0
        }

        function i(t, e, i, n, r) {
            return w = 0, e = e || "j", p(t) ? function (i, n, t, e, r, s, o) {
                function a(t) {
                    if (!h && m(l.readyState) && (u.r = h = 1, !w && g(), l.onload = l.onreadystatechange = null, t))
                        for (var e in "img" != i && v(function () {
                            T.removeChild(l)
                        }, 50), C[n]) C[n].hasOwnProperty(e) && C[n][e].onload()
                }
                o = o || _.errorTimeout;
                var l = d.createElement(i),
                    h = 0,
                    c = 0,
                    u = {
                        t: t,
                        s: n,
                        e: r,
                        a: s,
                        x: o
                    };
                1 === C[n] && (c = 1, C[n] = []), "object" == i ? l.data = n : (l.src = n, l.type = i), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () {
                    a.call(this, c)
                }, b.splice(e, 0, u), "img" != i && (c || 2 === C[n] ? (T.insertBefore(l, x ? null : y), v(a, o)) : C[n].push(l))
            }("c" == e ? h : l, t, e, this.i++, i, n, r) : (b.splice(this.i++, 0, t), 1 == b.length && g()), this
        }

        function a() {
            var t = _;
            return t.loader = {
                load: i,
                i: 0
            }, t
        }
        var n, _, r = d.documentElement,
            v = t.setTimeout,
            y = d.getElementsByTagName("script")[0],
            s = {}.toString,
            b = [],
            w = 0,
            o = "MozAppearance" in r.style,
            x = o && !!d.createRange().compareNode,
            T = x ? r : y.parentNode,
            l = (r = t.opera && "[object Opera]" == s.call(t.opera), r = !!d.attachEvent && !r, o ? "object" : r ? "script" : "img"),
            h = r ? "script" : l,
            k = Array.isArray || function (t) {
                return "[object Array]" == s.call(t)
            },
            S = [],
            C = {},
            P = {
                timeout: function (t, e) {
                    return e.length && (t.timeout = e[0]), t
                }
            };
        (_ = function (t) {
            function c(t, e, i, n, r) {
                var s = function (t) {
                        t = t.split("!");
                        var e, i, n, r = S.length,
                            s = t.pop(),
                            o = t.length;
                        for (s = {
                            url: s,
                            origUrl: s,
                            prefixes: t
                        }, i = 0; i < o; i++) n = t[i].split("="), (e = P[n.shift()]) && (s = e(s, n));
                        for (i = 0; i < r; i++) s = S[i](s);
                        return s
                    }(t),
                    o = s.autoCallback;
                s.url.split(".").pop().split("?").shift(), s.bypass || (e && (e = u(e) ? e : e[t] || e[n] || e[t.split("/").pop().split("?")[0]]), s.instead ? s.instead(t, e, i, n, r) : (C[s.url] ? s.noexec = !0 : C[s.url] = 1, i.load(s.url, s.forceCSS || !s.forceJS && "css" == s.url.split(".").pop().split("?").shift() ? "c" : void 0, s.noexec, s.attrs, s.timeout), (u(e) || u(o)) && i.load(function () {
                    a(), e && e(s.origUrl, r, n), o && o(s.origUrl, r, n), C[s.url] = 2
                })))
            }

            function e(t, e) {
                function i(i, t) {
                    if (i) {
                        if (p(i)) t || (a = function () {
                            var t = [].slice.call(arguments);
                            l.apply(this, t), h()
                        }), c(i, a, e, 0, s);
                        else if (Object(i) === i)
                            for (r in n = function () {
                                var t, e = 0;
                                for (t in i) i.hasOwnProperty(t) && e++;
                                return e
                            }(), i) i.hasOwnProperty(r) && (!t && !--n && (u(a) ? a = function () {
                                var t = [].slice.call(arguments);
                                l.apply(this, t), h()
                            } : a[r] = function (e) {
                                return function () {
                                    var t = [].slice.call(arguments);
                                    e && e.apply(this, t), h()
                                }
                            }(l[r])), c(i[r], a, e, r, s))
                    } else !t && h()
                }
                var n, r, s = !!t.test,
                    o = t.load || t.both,
                    a = t.callback || f,
                    l = a,
                    h = t.complete || f;
                i(s ? t.yep : t.nope, !!o), o && i(o)
            }
            var i, n, r = this.yepnope.loader;
            if (p(t)) c(t, 0, r, 0);
            else if (k(t))
                for (i = 0; i < t.length; i++) p(n = t[i]) ? c(n, 0, r, 0) : k(n) ? _(n) : Object(n) === n && e(n, r);
            else Object(t) === t && e(t, r)
        }).addPrefix = function (t, e) {
            P[t] = e
        }, _.addFilter = function (t) {
            S.push(t)
        }, _.errorTimeout = 1e4, null == d.readyState && d.addEventListener && (d.readyState = "loading", d.addEventListener("DOMContentLoaded", n = function () {
            d.removeEventListener("DOMContentLoaded", n, 0), d.readyState = "complete"
        }, 0)), t.yepnope = a(), t.yepnope.executeStack = g, t.yepnope.injectJs = function (t, e, i, n, r, s) {
            var o, a, l = d.createElement("script");
            n = n || _.errorTimeout;
            for (a in l.src = t, i) l.setAttribute(a, i[a]);
            e = s ? g : e || f, l.onreadystatechange = l.onload = function () {
                !o && m(l.readyState) && (o = 1, e(), l.onload = l.onreadystatechange = null)
            }, v(function () {
                o || e(o = 1)
            }, n), r ? l.onload() : y.parentNode.insertBefore(l, y)
        }, t.yepnope.injectCss = function (t, e, i, n, r, s) {
            var o;
            n = d.createElement("link"), e = s ? g : e || f;
            for (o in n.href = t, n.rel = "stylesheet", n.type = "text/css", i) n.setAttribute(o, i[o]);
            r || (y.parentNode.insertBefore(n, y), v(e, 0))
        }
    }(this, document), Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0))
},
    function (t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function (h) {
        "use strict";
        var r, o = window.Slick || {};
        r = 0, (o = function (t, e) {
            var i, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: h(t),
                appendDots: h(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (t, e) {
                    return h('<button type="button" data-role="none" role="button" tabindex="0" />').text(e + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, h.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = h(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, i = h(t).data("slick") || {}, n.options = h.extend({}, n.defaults, e, i), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = h.proxy(n.autoPlay, n), n.autoPlayClear = h.proxy(n.autoPlayClear, n), n.autoPlayIterator = h.proxy(n.autoPlayIterator, n), n.changeSlide = h.proxy(n.changeSlide, n), n.clickHandler = h.proxy(n.clickHandler, n), n.selectHandler = h.proxy(n.selectHandler, n), n.setPosition = h.proxy(n.setPosition, n), n.swipeHandler = h.proxy(n.swipeHandler, n), n.dragHandler = h.proxy(n.dragHandler, n), n.keyHandler = h.proxy(n.keyHandler, n), n.instanceUid = r++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
        }).prototype.activateADA = function () {
            this.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, o.prototype.addSlide = o.prototype.slickAdd = function (t, e, i) {
            var n = this;
            if ("boolean" == typeof e) i = e, e = null;
            else if (e < 0 || e >= n.slideCount) return !1;
            n.unload(), "number" == typeof e ? 0 === e && 0 === n.$slides.length ? h(t).appendTo(n.$slideTrack) : i ? h(t).insertBefore(n.$slides.eq(e)) : h(t).insertAfter(n.$slides.eq(e)) : !0 === i ? h(t).prependTo(n.$slideTrack) : h(t).appendTo(n.$slideTrack), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slides.each(function (t, e) {
                h(e).attr("data-slick-index", t)
            }), n.$slidesCache = n.$slides, n.reinit()
        }, o.prototype.animateHeight = function () {
            var t = this;
            if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.animate({
                    height: e
                }, t.options.speed)
            }
        }, o.prototype.animateSlide = function (t, e) {
            var i = {},
                n = this;
            n.animateHeight(), !0 === n.options.rtl && !1 === n.options.vertical && (t = -t), !1 === n.transformsEnabled ? !1 === n.options.vertical ? n.$slideTrack.animate({
                left: t
            }, n.options.speed, n.options.easing, e) : n.$slideTrack.animate({
                top: t
            }, n.options.speed, n.options.easing, e) : !1 === n.cssTransitions ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft), h({
                animStart: n.currentLeft
            }).animate({
                animStart: t
            }, {
                duration: n.options.speed,
                easing: n.options.easing,
                step: function (t) {
                    t = Math.ceil(t), !1 === n.options.vertical ? i[n.animType] = "translate(" + t + "px, 0px)" : i[n.animType] = "translate(0px," + t + "px)", n.$slideTrack.css(i)
                },
                complete: function () {
                    e && e.call()
                }
            })) : (n.applyTransition(), t = Math.ceil(t), !1 === n.options.vertical ? i[n.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[n.animType] = "translate3d(0px," + t + "px, 0px)", n.$slideTrack.css(i), e && setTimeout(function () {
                n.disableTransition(), e.call()
            }, n.options.speed))
        }, o.prototype.getNavTarget = function () {
            var t = this.options.asNavFor;
            return t && null !== t && (t = h(t).not(this.$slider)), t
        }, o.prototype.asNavFor = function (e) {
            var t = this.getNavTarget();
            null !== t && "object" == typeof t && t.each(function () {
                var t = h(this).slick("getSlick");
                t.unslicked || t.slideHandler(e, !0)
            })
        }, o.prototype.applyTransition = function (t) {
            var e = this,
                i = {};
            !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
        }, o.prototype.autoPlay = function () {
            var t = this;
            t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
        }, o.prototype.autoPlayClear = function () {
            this.autoPlayTimer && clearInterval(this.autoPlayTimer)
        }, o.prototype.autoPlayIterator = function () {
            var t = this,
                e = t.currentSlide + t.options.slidesToScroll;
            t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e))
        }, o.prototype.buildArrows = function () {
            var t = this;
            !0 === t.options.arrows && (t.$prevArrow = h(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = h(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, o.prototype.buildDots = function () {
            var t, e, i = this;
            if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
                for (i.$slider.addClass("slick-dotted"), e = h("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) e.append(h("<li />").append(i.options.customPaging.call(this, i, t)));
                i.$dots = e.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, o.prototype.buildOut = function () {
            var t = this;
            t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function (t, e) {
                h(e).attr("data-slick-index", t).data("originalStyling", h(e).attr("style") || "")
            }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? h('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), (!0 === t.options.centerMode || !0 === t.options.swipeToSlide) && (t.options.slidesToScroll = 1), h("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
        }, o.prototype.buildRows = function () {
            var t, e, i, n, r, s, o, a = this;
            if (n = document.createDocumentFragment(), s = a.$slider.children(), 1 < a.options.rows) {
                for (o = a.options.slidesPerRow * a.options.rows, r = Math.ceil(s.length / o), t = 0; t < r; t++) {
                    var l = document.createElement("div");
                    for (e = 0; e < a.options.rows; e++) {
                        var h = document.createElement("div");
                        for (i = 0; i < a.options.slidesPerRow; i++) {
                            var c = t * o + (e * a.options.slidesPerRow + i);
                            s.get(c) && h.appendChild(s.get(c))
                        }
                        l.appendChild(h)
                    }
                    n.appendChild(l)
                }
                a.$slider.empty().append(n), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, o.prototype.checkResponsive = function (t, e) {
            var i, n, r, s = this,
                o = !1,
                a = s.$slider.width(),
                l = window.innerWidth || h(window).width();
            if ("window" === s.respondTo ? r = l : "slider" === s.respondTo ? r = a : "min" === s.respondTo && (r = Math.min(l, a)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
                for (i in n = null, s.breakpoints) s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[i] && (n = s.breakpoints[i]) : r > s.breakpoints[i] && (n = s.breakpoints[i]));
                null !== n ? null !== s.activeBreakpoint ? (n !== s.activeBreakpoint || e) && (s.activeBreakpoint = n, "unslick" === s.breakpointSettings[n] ? s.unslick(n) : (s.options = h.extend({}, s.originalSettings, s.breakpointSettings[n]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), o = n) : (s.activeBreakpoint = n, "unslick" === s.breakpointSettings[n] ? s.unslick(n) : (s.options = h.extend({}, s.originalSettings, s.breakpointSettings[n]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), o = n) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), o = n), t || !1 === o || s.$slider.trigger("breakpoint", [s, o])
            }
        }, o.prototype.changeSlide = function (t, e) {
            var i, n, r = this,
                s = h(t.currentTarget);
            switch (s.is("a") && t.preventDefault(), s.is("li") || (s = s.closest("li")), i = r.slideCount % r.options.slidesToScroll != 0 ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
                case "previous":
                    n = 0 === i ? r.options.slidesToScroll : r.options.slidesToShow - i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - n, !1, e);
                    break;
                case "next":
                    n = 0 === i ? r.options.slidesToScroll : i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + n, !1, e);
                    break;
                case "index":
                    var o = 0 === t.data.index ? 0 : t.data.index || s.index() * r.options.slidesToScroll;
                    r.slideHandler(r.checkNavigable(o), !1, e), s.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, o.prototype.checkNavigable = function (t) {
            var e, i;
            if (i = 0, t > (e = this.getNavigableIndexes())[e.length - 1]) t = e[e.length - 1];
            else
                for (var n in e) {
                    if (t < e[n]) {
                        t = i;
                        break
                    }
                    i = e[n]
                }
            return t
        }, o.prototype.cleanUpEvents = function () {
            var t = this;
            t.options.dots && null !== t.$dots && h("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", h.proxy(t.interrupt, t, !0)).off("mouseleave.slick", h.proxy(t.interrupt, t, !1)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), h(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && h(t.$slideTrack).children().off("click.slick", t.selectHandler), h(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), h(window).off("resize.slick.slick-" + t.instanceUid, t.resize), h("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), h(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), h(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
        }, o.prototype.cleanUpSlideEvents = function () {
            var t = this;
            t.$list.off("mouseenter.slick", h.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", h.proxy(t.interrupt, t, !1))
        }, o.prototype.cleanUpRows = function () {
            var t;
            1 < this.options.rows && ((t = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(t))
        }, o.prototype.clickHandler = function (t) {
            !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
        }, o.prototype.destroy = function (t) {
            var e = this;
            e.autoPlayClear(), e.touchObject = {}, e.cleanUpEvents(), h(".slick-cloned", e.$slider).detach(), e.$dots && e.$dots.remove(), e.$prevArrow && e.$prevArrow.length && (e.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove()), e.$nextArrow && e.$nextArrow.length && (e.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove()), e.$slides && (e.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
                h(this).attr("style", h(this).data("originalStyling"))
            }), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.detach(), e.$list.detach(), e.$slider.append(e.$slides)), e.cleanUpRows(), e.$slider.removeClass("slick-slider"), e.$slider.removeClass("slick-initialized"), e.$slider.removeClass("slick-dotted"), e.unslicked = !0, t || e.$slider.trigger("destroy", [e])
        }, o.prototype.disableTransition = function (t) {
            var e = {};
            e[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(e) : this.$slides.eq(t).css(e)
        }, o.prototype.fadeSlide = function (t, e) {
            var i = this;
            !1 === i.cssTransitions ? (i.$slides.eq(t).css({
                zIndex: i.options.zIndex
            }), i.$slides.eq(t).animate({
                opacity: 1
            }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
                opacity: 1,
                zIndex: i.options.zIndex
            }), e && setTimeout(function () {
                i.disableTransition(t), e.call()
            }, i.options.speed))
        }, o.prototype.fadeSlideOut = function (t) {
            var e = this;
            !1 === e.cssTransitions ? e.$slides.eq(t).animate({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }))
        }, o.prototype.filterSlides = o.prototype.slickFilter = function (t) {
            var e = this;
            null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
        }, o.prototype.focusHandler = function () {
            var i = this;
            i.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (t) {
                t.stopImmediatePropagation();
                var e = h(this);
                setTimeout(function () {
                    i.options.pauseOnFocus && (i.focussed = e.is(":focus"), i.autoPlay())
                }, 0)
            })
        }, o.prototype.getCurrent = o.prototype.slickCurrentSlide = function () {
            return this.currentSlide
        }, o.prototype.getDotCount = function () {
            var t = this,
                e = 0,
                i = 0,
                n = 0;
            if (!0 === t.options.infinite)
                for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else if (!0 === t.options.centerMode) n = t.slideCount;
            else if (t.options.asNavFor)
                for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
            return n - 1
        }, o.prototype.getLeft = function (t) {
            var e, i, n, r = this,
                s = 0;
            return r.slideOffset = 0, i = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, s = i * r.options.slidesToShow * -1), r.slideCount % r.options.slidesToScroll != 0 && t + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (s = t > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (t - r.slideCount)) * r.slideWidth * -1, (r.options.slidesToShow - (t - r.slideCount)) * i * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, r.slideCount % r.options.slidesToScroll * i * -1))) : t + r.options.slidesToShow > r.slideCount && (r.slideOffset = (t + r.options.slidesToShow - r.slideCount) * r.slideWidth, s = (t + r.options.slidesToShow - r.slideCount) * i), r.slideCount <= r.options.slidesToShow && (s = r.slideOffset = 0), !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), e = !1 === r.options.vertical ? t * r.slideWidth * -1 + r.slideOffset : t * i * -1 + s, !0 === r.options.variableWidth && (n = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(t) : r.$slideTrack.children(".slick-slide").eq(t + r.options.slidesToShow), e = !0 === r.options.rtl ? n[0] ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === r.options.centerMode && (n = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(t) : r.$slideTrack.children(".slick-slide").eq(t + r.options.slidesToShow + 1), e = !0 === r.options.rtl ? n[0] ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, e += (r.$list.width() - n.outerWidth()) / 2)), e
        }, o.prototype.getOption = o.prototype.slickGetOption = function (t) {
            return this.options[t]
        }, o.prototype.getNavigableIndexes = function () {
            var t, e = this,
                i = 0,
                n = 0,
                r = [];
            for (t = !1 === e.options.infinite ? e.slideCount : (i = -1 * e.options.slidesToScroll, n = -1 * e.options.slidesToScroll, 2 * e.slideCount); i < t;) r.push(i), i = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return r
        }, o.prototype.getSlick = function () {
            return this
        }, o.prototype.getSlideCount = function () {
            var i, n, r = this;
            return n = !0 === r.options.centerMode ? r.slideWidth * Math.floor(r.options.slidesToShow / 2) : 0, !0 === r.options.swipeToSlide ? (r.$slideTrack.find(".slick-slide").each(function (t, e) {
                return e.offsetLeft - n + h(e).outerWidth() / 2 > -1 * r.swipeLeft ? (i = e, !1) : void 0
            }), Math.abs(h(i).attr("data-slick-index") - r.currentSlide) || 1) : r.options.slidesToScroll
        }, o.prototype.goTo = o.prototype.slickGoTo = function (t, e) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(t)
                }
            }, e)
        }, o.prototype.init = function (t) {
            var e = this;
            h(e.$slider).hasClass("slick-initialized") || (h(e.$slider).addClass("slick-initialized"), e.buildRows(), e.buildOut(), e.setProps(), e.startLoad(), e.loadSlider(), e.initializeEvents(), e.updateArrows(), e.updateDots(), e.checkResponsive(!0), e.focusHandler()), t && e.$slider.trigger("init", [e]), !0 === e.options.accessibility && e.initADA(), e.options.autoplay && (e.paused = !1, e.autoPlay())
        }, o.prototype.initADA = function () {
            var e = this;
            e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
                h(this).attr({
                    role: "option",
                    "aria-describedby": "slick-slide" + e.instanceUid + t
                })
            }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function (t) {
                h(this).attr({
                    role: "presentation",
                    "aria-selected": "false",
                    "aria-controls": "navigation" + e.instanceUid + t,
                    id: "slick-slide" + e.instanceUid + t
                })
            }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
        }, o.prototype.initArrowEvents = function () {
            var t = this;
            !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, t.changeSlide))
        }, o.prototype.initDotEvents = function () {
            var t = this;
            !0 === t.options.dots && t.slideCount > t.options.slidesToShow && h("li", t.$dots).on("click.slick", {
                message: "index"
            }, t.changeSlide), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && h("li", t.$dots).on("mouseenter.slick", h.proxy(t.interrupt, t, !0)).on("mouseleave.slick", h.proxy(t.interrupt, t, !1))
        }, o.prototype.initSlideEvents = function () {
            var t = this;
            t.options.pauseOnHover && (t.$list.on("mouseenter.slick", h.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", h.proxy(t.interrupt, t, !1)))
        }, o.prototype.initializeEvents = function () {
            var t = this;
            t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), h(document).on(t.visibilityChange, h.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && h(t.$slideTrack).children().on("click.slick", t.selectHandler), h(window).on("orientationchange.slick.slick-" + t.instanceUid, h.proxy(t.orientationChange, t)), h(window).on("resize.slick.slick-" + t.instanceUid, h.proxy(t.resize, t)), h("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), h(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), h(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
        }, o.prototype.initUI = function () {
            var t = this;
            !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
        }, o.prototype.keyHandler = function (t) {
            var e = this;
            t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({
                data: {
                    message: !0 === e.options.rtl ? "next" : "previous"
                }
            }) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({
                data: {
                    message: !0 === e.options.rtl ? "previous" : "next"
                }
            }))
        }, o.prototype.lazyLoad = function () {
            function t(t) {
                h("img[data-lazy]", t).each(function () {
                    var t = h(this),
                        e = h(this).attr("data-lazy"),
                        i = document.createElement("img");
                    i.onload = function () {
                        t.animate({
                            opacity: 0
                        }, 100, function () {
                            t.attr("src", e).animate({
                                opacity: 1
                            }, 200, function () {
                                t.removeAttr("data-lazy").removeClass("slick-loading")
                            }), n.$slider.trigger("lazyLoaded", [n, t, e])
                        })
                    }, i.onerror = function () {
                        t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, t, e])
                    }, i.src = e
                })
            }
            var e, i, n = this;
            !0 === n.options.centerMode ? i = !0 === n.options.infinite ? (e = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (e = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (e = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, i = Math.ceil(e + n.options.slidesToShow), !0 === n.options.fade && (0 < e && e--, i <= n.slideCount && i++)), t(n.$slider.find(".slick-slide").slice(e, i)), n.slideCount <= n.options.slidesToShow ? t(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? t(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && t(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
        }, o.prototype.loadSlider = function () {
            var t = this;
            t.setPosition(), t.$slideTrack.css({
                opacity: 1
            }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
        }, o.prototype.next = o.prototype.slickNext = function () {
            this.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, o.prototype.orientationChange = function () {
            this.checkResponsive(), this.setPosition()
        }, o.prototype.pause = o.prototype.slickPause = function () {
            this.autoPlayClear(), this.paused = !0
        }, o.prototype.play = o.prototype.slickPlay = function () {
            var t = this;
            t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
        }, o.prototype.postSlide = function (t) {
            var e = this;
            e.unslicked || (e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), !0 === e.options.accessibility && e.initADA())
        }, o.prototype.prev = o.prototype.slickPrev = function () {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, o.prototype.preventDefault = function (t) {
            t.preventDefault()
        }, o.prototype.progressiveLazyLoad = function (t) {
            t = t || 1;
            var e, i, n, r = this,
                s = h("img[data-lazy]", r.$slider);
            s.length ? (e = s.first(), i = e.attr("data-lazy"), (n = document.createElement("img")).onload = function () {
                e.attr("src", i).removeAttr("data-lazy").removeClass("slick-loading"), !0 === r.options.adaptiveHeight && r.setPosition(), r.$slider.trigger("lazyLoaded", [r, e, i]), r.progressiveLazyLoad()
            }, n.onerror = function () {
                t < 3 ? setTimeout(function () {
                    r.progressiveLazyLoad(t + 1)
                }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, i]), r.progressiveLazyLoad())
            }, n.src = i) : r.$slider.trigger("allImagesLoaded", [r])
        }, o.prototype.refresh = function (t) {
            var e, i, n = this;
            i = n.slideCount - n.options.slidesToShow, !n.options.infinite && n.currentSlide > i && (n.currentSlide = i), n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0), e = n.currentSlide, n.destroy(!0), h.extend(n, n.initials, {
                currentSlide: e
            }), n.init(), t || n.changeSlide({
                data: {
                    message: "index",
                    index: e
                }
            }, !1)
        }, o.prototype.registerBreakpoints = function () {
            var t, e, i, n = this,
                r = n.options.responsive || null;
            if ("array" === h.type(r) && r.length) {
                for (t in n.respondTo = n.options.respondTo || "window", r)
                    if (i = n.breakpoints.length - 1, e = r[t].breakpoint, r.hasOwnProperty(t)) {
                        for (; 0 <= i;) n.breakpoints[i] && n.breakpoints[i] === e && n.breakpoints.splice(i, 1), i--;
                        n.breakpoints.push(e), n.breakpointSettings[e] = r[t].settings
                    }
                n.breakpoints.sort(function (t, e) {
                    return n.options.mobileFirst ? t - e : e - t
                })
            }
        }, o.prototype.reinit = function () {
            var t = this;
            t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && h(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
        }, o.prototype.resize = function () {
            var t = this;
            h(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function () {
                t.windowWidth = h(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
            }, 50))
        }, o.prototype.removeSlide = o.prototype.slickRemove = function (t, e, i) {
            var n = this;
            return t = "boolean" == typeof t ? !0 === (e = t) ? 0 : n.slideCount - 1 : !0 === e ? --t : t, !(n.slideCount < 1 || t < 0 || t > n.slideCount - 1) && (n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
        }, o.prototype.setCSS = function (t) {
            var e, i, n = this,
                r = {};
            !0 === n.options.rtl && (t = -t), e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px", r[n.positionProp] = t, !1 === n.transformsEnabled || (!(r = {}) === n.cssTransitions ? r[n.animType] = "translate(" + e + ", " + i + ")" : r[n.animType] = "translate3d(" + e + ", " + i + ", 0px)"), n.$slideTrack.css(r)
        }, o.prototype.setDimensions = function () {
            var t = this;
            !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
                padding: "0px " + t.options.centerPadding
            }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({
                padding: t.options.centerPadding + " 0px"
            })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
            var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
            !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
        }, o.prototype.setFade = function () {
            var i, n = this;
            n.$slides.each(function (t, e) {
                i = n.slideWidth * t * -1, !0 === n.options.rtl ? h(e).css({
                    position: "relative",
                    right: i,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0
                }) : h(e).css({
                    position: "relative",
                    left: i,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0
                })
            }), n.$slides.eq(n.currentSlide).css({
                zIndex: n.options.zIndex - 1,
                opacity: 1
            })
        }, o.prototype.setHeight = function () {
            var t = this;
            if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.css("height", e)
            }
        }, o.prototype.setOption = o.prototype.slickSetOption = function () {
            var t, e, i, n, r, s = this,
                o = !1;
            if ("object" === h.type(arguments[0]) ? (i = arguments[0], o = arguments[1], r = "multiple") : "string" === h.type(arguments[0]) && (i = arguments[0], n = arguments[1], o = arguments[2], "responsive" === arguments[0] && "array" === h.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), "single" === r) s.options[i] = n;
            else if ("multiple" === r) h.each(i, function (t, e) {
                s.options[t] = e
            });
            else if ("responsive" === r)
                for (e in n)
                    if ("array" !== h.type(s.options.responsive)) s.options.responsive = [n[e]];
                    else {
                        for (t = s.options.responsive.length - 1; 0 <= t;) s.options.responsive[t].breakpoint === n[e].breakpoint && s.options.responsive.splice(t, 1), t--;
                        s.options.responsive.push(n[e])
                    }
            o && (s.unload(), s.reinit())
        }, o.prototype.setPosition = function () {
            var t = this;
            t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
        }, o.prototype.setProps = function () {
            var t = this,
                e = document.body.style;
            t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
        }, o.prototype.setSlideClasses = function (t) {
            var e, i, n, r, s = this;
            i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(t).addClass("slick-current"), !0 === s.options.centerMode ? (e = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (e <= t && t <= s.slideCount - 1 - e ? s.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = s.options.slidesToShow + t, i.slice(n - e + 1, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : t === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(t).addClass("slick-center")) : 0 <= t && t <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(t, t + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (r = s.slideCount % s.options.slidesToShow, n = !0 === s.options.infinite ? s.options.slidesToShow + t : t, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - t < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - r), n + r).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === s.options.lazyLoad && s.lazyLoad()
        }, o.prototype.setupInfinite = function () {
            var t, e, i, n = this;
            if (!0 === n.options.fade && (n.options.centerMode = !1), !0 === n.options.infinite && !1 === n.options.fade && (e = null, n.slideCount > n.options.slidesToShow)) {
                for (i = !0 === n.options.centerMode ? n.options.slidesToShow + 1 : n.options.slidesToShow, t = n.slideCount; t > n.slideCount - i; t -= 1) e = t - 1, h(n.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
                for (t = 0; t < i; t += 1) e = t, h(n.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
                n.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                    h(this).attr("id", "")
                })
            }
        }, o.prototype.interrupt = function (t) {
            t || this.autoPlay(), this.interrupted = t
        }, o.prototype.selectHandler = function (t) {
            var e = this,
                i = h(t.target).is(".slick-slide") ? h(t.target) : h(t.target).parents(".slick-slide"),
                n = parseInt(i.attr("data-slick-index"));
            return n || (n = 0), e.slideCount <= e.options.slidesToShow ? (e.setSlideClasses(n), void e.asNavFor(n)) : void e.slideHandler(n)
        }, o.prototype.slideHandler = function (t, e, i) {
            var n, r, s, o, a, l = null,
                h = this;
            return e = e || !1, !0 === h.animating && !0 === h.options.waitForAnimate || !0 === h.options.fade && h.currentSlide === t || h.slideCount <= h.options.slidesToShow ? void 0 : (!1 === e && h.asNavFor(t), n = t, l = h.getLeft(n), o = h.getLeft(h.currentSlide), h.currentLeft = null === h.swipeLeft ? o : h.swipeLeft, !1 === h.options.infinite && !1 === h.options.centerMode && (t < 0 || t > h.getDotCount() * h.options.slidesToScroll) ? void(!1 === h.options.fade && (n = h.currentSlide, !0 !== i ? h.animateSlide(o, function () {
                h.postSlide(n)
            }) : h.postSlide(n))) : !1 === h.options.infinite && !0 === h.options.centerMode && (t < 0 || t > h.slideCount - h.options.slidesToScroll) ? void(!1 === h.options.fade && (n = h.currentSlide, !0 !== i ? h.animateSlide(o, function () {
                h.postSlide(n)
            }) : h.postSlide(n))) : (h.options.autoplay && clearInterval(h.autoPlayTimer), r = n < 0 ? h.slideCount % h.options.slidesToScroll != 0 ? h.slideCount - h.slideCount % h.options.slidesToScroll : h.slideCount + n : n >= h.slideCount ? h.slideCount % h.options.slidesToScroll != 0 ? 0 : n - h.slideCount : n, h.animating = !0, h.$slider.trigger("beforeChange", [h, h.currentSlide, r]), s = h.currentSlide, h.currentSlide = r, h.setSlideClasses(h.currentSlide), h.options.asNavFor && ((a = (a = h.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(h.currentSlide)), h.updateDots(), h.updateArrows(), !0 === h.options.fade ? (!0 !== i ? (h.fadeSlideOut(s), h.fadeSlide(r, function () {
                h.postSlide(r)
            })) : h.postSlide(r), void h.animateHeight()) : void(!0 !== i ? h.animateSlide(l, function () {
                h.postSlide(r)
            }) : h.postSlide(r))))
        }, o.prototype.startLoad = function () {
            var t = this;
            !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
        }, o.prototype.swipeDirection = function () {
            var t, e, i, n, r = this;
            return t = r.touchObject.startX - r.touchObject.curX, e = r.touchObject.startY - r.touchObject.curY, i = Math.atan2(e, t), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && 0 <= n ? !1 === r.options.rtl ? "left" : "right" : n <= 360 && 315 <= n ? !1 === r.options.rtl ? "left" : "right" : 135 <= n && n <= 225 ? !1 === r.options.rtl ? "right" : "left" : !0 === r.options.verticalSwiping ? 35 <= n && n <= 135 ? "down" : "up" : "vertical"
        }, o.prototype.swipeEnd = function (t) {
            var e, i, n = this;
            if (n.dragging = !1, n.interrupted = !1, n.shouldClick = !(10 < n.touchObject.swipeLength), void 0 === n.touchObject.curX) return !1;
            if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
                switch (i = n.swipeDirection()) {
                    case "left":
                    case "down":
                        e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
                }
                "vertical" != i && (n.slideHandler(e), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
            } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
        }, o.prototype.swipeHandler = function (t) {
            var e = this;
            if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
                case "start":
                    e.swipeStart(t);
                    break;
                case "move":
                    e.swipeMove(t);
                    break;
                case "end":
                    e.swipeEnd(t)
            }
        }, o.prototype.swipeMove = function (t) {
            var e, i, n, r, s, o = this;
            return s = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!o.dragging || s && 1 !== s.length) && (e = o.getLeft(o.currentSlide), o.touchObject.curX = void 0 !== s ? s[0].pageX : t.clientX, o.touchObject.curY = void 0 !== s ? s[0].pageY : t.clientY, o.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(o.touchObject.curX - o.touchObject.startX, 2))), !0 === o.options.verticalSwiping && (o.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(o.touchObject.curY - o.touchObject.startY, 2)))), "vertical" !== (i = o.swipeDirection()) ? (void 0 !== t.originalEvent && 4 < o.touchObject.swipeLength && t.preventDefault(), r = (!1 === o.options.rtl ? 1 : -1) * (o.touchObject.curX > o.touchObject.startX ? 1 : -1), !0 === o.options.verticalSwiping && (r = o.touchObject.curY > o.touchObject.startY ? 1 : -1), n = o.touchObject.swipeLength, (o.touchObject.edgeHit = !1) === o.options.infinite && (0 === o.currentSlide && "right" === i || o.currentSlide >= o.getDotCount() && "left" === i) && (n = o.touchObject.swipeLength * o.options.edgeFriction, o.touchObject.edgeHit = !0), !1 === o.options.vertical ? o.swipeLeft = e + n * r : o.swipeLeft = e + n * (o.$list.height() / o.listWidth) * r, !0 === o.options.verticalSwiping && (o.swipeLeft = e + n * r), !0 !== o.options.fade && !1 !== o.options.touchMove && (!0 === o.animating ? (o.swipeLeft = null, !1) : void o.setCSS(o.swipeLeft))) : void 0)
        }, o.prototype.swipeStart = function (t) {
            var e, i = this;
            return i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? !(i.touchObject = {}) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void(i.dragging = !0))
        }, o.prototype.unfilterSlides = o.prototype.slickUnfilter = function () {
            var t = this;
            null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
        }, o.prototype.unload = function () {
            var t = this;
            h(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, o.prototype.unslick = function (t) {
            this.$slider.trigger("unslick", [this, t]), this.destroy()
        }, o.prototype.updateArrows = function () {
            var t = this;
            Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, o.prototype.updateDots = function () {
            var t = this;
            null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, o.prototype.visibility = function () {
            this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
        }, h.fn.slick = function () {
            var t, e, i = this,
                n = arguments[0],
                r = Array.prototype.slice.call(arguments, 1),
                s = i.length;
            for (t = 0; t < s; t++)
                if ("object" == typeof n || void 0 === n ? i[t].slick = new o(i[t], n) : e = i[t].slick[n].apply(i[t].slick, r), void 0 !== e) return e;
            return i
        }
    }), ((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (e, a, t) {
        var i = function (t) {
                e.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
            },
            C = 1e-10,
            n = a._internals,
            P = n.lazyTweens,
            A = n.lazyRender,
            l = _gsScope._gsDefine.globals,
            h = new t(null, null, 1, 0),
            r = i.prototype = new e;
        return r.constructor = i, r.kill()._gc = !1, i.version = "1.19.1", r.invalidate = function () {
            return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), e.prototype.invalidate.call(this)
        }, r.addCallback = function (t, e, i, n) {
            return this.add(a.delayedCall(0, t, i, n), e)
        }, r.removeCallback = function (t, e) {
            if (t)
                if (null == e) this._kill(null, t);
                else
                    for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); - 1 < --n;) i[n]._startTime === r && i[n]._enabled(!1, !1);
            return this
        }, r.removePause = function (t) {
            return this.removeCallback(e._internals.pauseCallback, t)
        }, r.tweenTo = function (t, e) {
            e = e || {};
            var i, n, r, s = {
                    ease: h,
                    useFrames: this.usesFrames(),
                    immediateRender: !1
                },
                o = e.repeat && l.TweenMax || a;
            for (n in e) s[n] = e[n];
            return s.time = this._parseTimeOrLabel(t), i = Math.abs(Number(s.time) - this._time) / this._timeScale || .001, r = new o(this, i, s), s.onStart = function () {
                r.target.paused(!0), r.vars.time !== r.target.time() && i === r.duration() && r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale), e.onStart && e.onStart.apply(e.onStartScope || e.callbackScope || r, e.onStartParams || [])
            }, r
        }, r.tweenFromTo = function (t, e, i) {
            i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                callbackScope: this
            }, i.immediateRender = !1 !== i.immediateRender;
            var n = this.tweenTo(e, i);
            return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
        }, r.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, r, s, o, a, l, h, c, u = this._dirty ? this.totalDuration() : this._totalDuration,
                d = this._duration,
                p = this._time,
                f = this._totalTime,
                m = this._startTime,
                g = this._timeScale,
                _ = this._rawPrevTime,
                v = this._paused,
                y = this._cycle;
            if (u - 1e-7 <= t && 0 <= t) this._locked || (this._totalTime = u, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (r = !0, o = "onComplete", a = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && -1e-7 <= t || _ < 0 || _ === C) && _ !== t && this._first && (a = !0, C < _ && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : C, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : t = (this._time = d) + 1e-4;
            else if (t < 1e-7)
                if (this._locked || (this._totalTime = this._cycle = 0), ((this._time = 0) !== p || 0 === d && _ !== C && (0 < _ || t < 0 && 0 <= _) && !this._locked) && (o = "onReverseComplete", r = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (a = r = !0, o = "onReverseComplete") : 0 <= _ && this._first && (a = !0), this._rawPrevTime = t;
                else {
                    if (this._rawPrevTime = d || !e || t || this._rawPrevTime === t ? t : C, 0 === t && r)
                        for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1), n = n._next;
                    t = 0, this._initted || (a = !0)
                }
            else if (0 === d && _ < 0 && (a = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (l = d + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && f <= t && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = d - this._time), this._time > d ? t = (this._time = d) + 1e-4 : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e && t < d) {
                if (p <= (t = this._time) || this._repeat && y !== this._cycle)
                    for (n = this._first; n && n._startTime <= t && !h;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (h = n), n = n._next;
                else
                    for (n = this._last; n && n._startTime >= t && !h;) n._duration || "isPause" === n.data && 0 < n._rawPrevTime && (h = n), n = n._prev;
                h && (this._time = t = h._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
            }
            if (this._cycle !== y && !this._locked) {
                var b = this._yoyo && 0 != (1 & y),
                    w = b === (this._yoyo && 0 != (1 & this._cycle)),
                    x = this._totalTime,
                    T = this._cycle,
                    k = this._rawPrevTime,
                    S = this._time;
                if (this._totalTime = y * d, this._cycle < y ? b = !b : this._totalTime += d, this._time = p, this._rawPrevTime = 0 === d ? _ - 1e-4 : _, this._cycle = y, this._locked = !0, p = b ? 0 : d, this.render(p, e, 0 === d), e || this._gc || this.vars.onRepeat && (this._cycle = T, this._locked = !1, this._callback("onRepeat")), p !== this._time) return;
                if (w && (this._cycle = y, this._locked = !0, p = b ? d + 1e-4 : -1e-4, this.render(p, !0, !1)), this._locked = !1, this._paused && !v) return;
                this._time = S, this._totalTime = x, this._cycle = T, this._rawPrevTime = k
            }
            if (this._time !== p && this._first || i || a || h) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== f && 0 < t && (this._active = !0), 0 === f && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), p <= (c = this._time))
                    for (n = this._first; n && (s = n._next, c === this._time && (!this._paused || v));)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (h === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s;
                else
                    for (n = this._last; n && (s = n._prev, c === this._time && (!this._paused || v));) {
                        if (n._active || n._startTime <= p && !n._paused && !n._gc) {
                            if (h === n) {
                                for (h = n._prev; h && h.endTime() > this._time;) h.render(h._reversed ? h.totalDuration() - (t - h._startTime) * h._timeScale : (t - h._startTime) * h._timeScale, e, i), h = h._prev;
                                h = null, this.pause()
                            }
                            n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                        }
                        n = s
                    }
                this._onUpdate && (e || (P.length && A(), this._callback("onUpdate"))), o && (this._locked || this._gc || (m === this._startTime || g !== this._timeScale) && (0 === this._time || u >= this.totalDuration()) && (r && (P.length && A(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)))
            } else f !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
        }, r.getActive = function (t, e, i) {
            null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
            var n, r, s = [],
                o = this.getChildren(t, e, i),
                a = 0,
                l = o.length;
            for (n = 0; n < l; n++)(r = o[n]).isActive() && (s[a++] = r);
            return s
        }, r.getLabelAfter = function (t) {
            t || 0 !== t && (t = this._time);
            var e, i = this.getLabelsArray(),
                n = i.length;
            for (e = 0; e < n; e++)
                if (i[e].time > t) return i[e].name;
            return null
        }, r.getLabelBefore = function (t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; - 1 < --i;)
                if (e[i].time < t) return e[i].name;
            return null
        }, r.getLabelsArray = function () {
            var t, e = [],
                i = 0;
            for (t in this._labels) e[i++] = {
                time: this._labels[t],
                name: t
            };
            return e.sort(function (t, e) {
                return t.time - e.time
            }), e
        }, r.invalidate = function () {
            return this._locked = !1, e.prototype.invalidate.call(this)
        }, r.progress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        }, r.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        }, r.totalDuration = function (t) {
            return arguments.length ? -1 !== this._repeat && t ? this.timeScale(this.totalDuration() / t) : this : (this._dirty && (e.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        }, r.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        }, r.repeat = function (t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        }, r.repeatDelay = function (t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, r.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, r.currentLabel = function (t) {
            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
        }, i
    }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (c, u, d) {
        var p = function (t) {
                u.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                var e, i, n = this.vars;
                for (i in n) e = n[i], g(e) && -1 !== e.join("").indexOf("{self}") && (n[i] = this._swapSelfInParams(e));
                g(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger)
            },
            m = 1e-10,
            t = d._internals,
            e = p._internals = {},
            f = t.isSelector,
            g = t.isArray,
            _ = t.lazyTweens,
            v = t.lazyRender,
            o = _gsScope._gsDefine.globals,
            y = function (t) {
                var e, i = {};
                for (e in t) i[e] = t[e];
                return i
            },
            b = function (t, e, i) {
                var n, r, s = t.cycle;
                for (n in s) r = s[n], t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                delete t.cycle
            },
            s = e.pauseCallback = function () {},
            w = function (t) {
                var e, i = [],
                    n = t.length;
                for (e = 0; e !== n; i.push(t[e++]));
                return i
            },
            i = p.prototype = new u;
        return p.version = "1.19.1", i.constructor = p, i.kill()._gc = i._forcingPlayhead = i._hasPause = !1, i.to = function (t, e, i, n) {
            var r = i.repeat && o.TweenMax || d;
            return e ? this.add(new r(t, e, i), n) : this.set(t, i, n)
        }, i.from = function (t, e, i, n) {
            return this.add((i.repeat && o.TweenMax || d).from(t, e, i), n)
        }, i.fromTo = function (t, e, i, n, r) {
            var s = n.repeat && o.TweenMax || d;
            return e ? this.add(s.fromTo(t, e, i, n), r) : this.set(t, n, r)
        }, i.staggerTo = function (t, e, i, n, r, s, o, a) {
            var l, h, c = new p({
                    onComplete: s,
                    onCompleteParams: o,
                    callbackScope: a,
                    smoothChildTiming: this.smoothChildTiming
                }),
                u = i.cycle;
            for ("string" == typeof t && (t = d.selector(t) || t), f(t = t || []) && (t = w(t)), (n = n || 0) < 0 && ((t = w(t)).reverse(), n *= -1), h = 0; h < t.length; h++)(l = y(i)).startAt && (l.startAt = y(l.startAt), l.startAt.cycle && b(l.startAt, t, h)), u && (b(l, t, h), null != l.duration && (e = l.duration, delete l.duration)), c.to(t[h], e, l, h * n);
            return this.add(c, r)
        }, i.staggerFrom = function (t, e, i, n, r, s, o, a) {
            return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, s, o, a)
        }, i.staggerFromTo = function (t, e, i, n, r, s, o, a, l) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, s, o, a, l)
        }, i.call = function (t, e, i, n) {
            return this.add(d.delayedCall(0, t, e, i), n)
        }, i.set = function (t, e, i) {
            return i = this._parseTimeOrLabel(i, 0, !0), null == e.immediateRender && (e.immediateRender = i === this._time && !this._paused), this.add(new d(t, 0, e), i)
        }, p.exportRoot = function (t, e) {
            null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
            var i, n, r = new p(t),
                s = r._timeline;
            for (null == e && (e = !0), s._remove(r, !0), r._startTime = 0, r._rawPrevTime = r._time = r._totalTime = s._time, i = s._first; i;) n = i._next, e && i instanceof d && i.target === i.vars.onComplete || r.add(i, i._startTime - i._delay), i = n;
            return s.add(r, 0), r
        }, i.add = function (t, e, i, n) {
            var r, s, o, a, l, h;
            if ("number" != typeof e && (e = this._parseTimeOrLabel(e, 0, !0, t)), !(t instanceof c)) {
                if (t instanceof Array || t && t.push && g(t)) {
                    for (i = i || "normal", n = n || 0, r = e, s = t.length, o = 0; o < s; o++) g(a = t[o]) && (a = new p({
                        tweens: a
                    })), this.add(a, r), "string" != typeof a && "function" != typeof a && ("sequence" === i ? r = a._startTime + a.totalDuration() / a._timeScale : "start" === i && (a._startTime -= a.delay())), r += n;
                    return this._uncache(!0)
                }
                if ("string" == typeof t) return this.addLabel(t, e);
                if ("function" != typeof t) throw "Cannot add " + t + " into the timeline; it is not a tween, timeline, function, or string.";
                t = d.delayedCall(0, t)
            }
            if (u.prototype.add.call(this, t, e), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                for (h = (l = this).rawTime() > t._startTime; l._timeline;) h && l._timeline.smoothChildTiming ? l.totalTime(l._totalTime, !0) : l._gc && l._enabled(!0, !1), l = l._timeline;
            return this
        }, i.remove = function (t) {
            if (t instanceof c) {
                this._remove(t, !1);
                var e = t._timeline = t.vars.useFrames ? c._rootFramesTimeline : c._rootTimeline;
                return t._startTime = (t._paused ? t._pauseTime : e._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale, this
            }
            if (t instanceof Array || t && t.push && g(t)) {
                for (var i = t.length; - 1 < --i;) this.remove(t[i]);
                return this
            }
            return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
        }, i._remove = function (t, e) {
            return u.prototype._remove.call(this, t, e), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
        }, i.append = function (t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
        }, i.insert = i.insertMultiple = function (t, e, i, n) {
            return this.add(t, e || 0, i, n)
        }, i.appendMultiple = function (t, e, i, n) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
        }, i.addLabel = function (t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e), this
        }, i.addPause = function (t, e, i, n) {
            var r = d.delayedCall(0, s, i, n || this);
            return r.vars.onComplete = r.vars.onReverseComplete = e, r.data = "isPause", this._hasPause = !0, this.add(r, t)
        }, i.removeLabel = function (t) {
            return delete this._labels[t], this
        }, i.getLabelTime = function (t) {
            return null != this._labels[t] ? this._labels[t] : -1
        }, i._parseTimeOrLabel = function (t, e, i, n) {
            var r;
            if (n instanceof c && n.timeline === this) this.remove(n);
            else if (n && (n instanceof Array || n.push && g(n)))
                for (r = n.length; - 1 < --r;) n[r] instanceof c && n[r].timeline === this && this.remove(n[r]);
            if ("string" == typeof e) return this._parseTimeOrLabel(e, i && "number" == typeof t && null == this._labels[e] ? t - this.duration() : 0, i);
            if (e = e || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = this.duration());
            else {
                if (-1 === (r = t.indexOf("="))) return null == this._labels[t] ? i ? this._labels[t] = this.duration() + e : e : this._labels[t] + e;
                e = parseInt(t.charAt(r - 1) + "1", 10) * Number(t.substr(r + 1)), t = 1 < r ? this._parseTimeOrLabel(t.substr(0, r - 1), 0, i) : this.duration()
            }
            return Number(t) + e
        }, i.seek = function (t, e) {
            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
        }, i.stop = function () {
            return this.paused(!0)
        }, i.gotoAndPlay = function (t, e) {
            return this.play(t, e)
        }, i.gotoAndStop = function (t, e) {
            return this.pause(t, e)
        }, i.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, r, s, o, a, l, h, c = this._dirty ? this.totalDuration() : this._totalDuration,
                u = this._time,
                d = this._startTime,
                p = this._timeScale,
                f = this._paused;
            if (c - 1e-7 <= t && 0 <= t) this._totalTime = this._time = c, this._reversed || this._hasPausedChild() || (r = !0, o = "onComplete", a = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && -1e-7 <= t || this._rawPrevTime < 0 || this._rawPrevTime === m) && this._rawPrevTime !== t && this._first && (a = !0, this._rawPrevTime > m && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : m, t = c + 1e-4;
            else if (t < 1e-7)
                if (this._totalTime = this._time = 0, (0 !== u || 0 === this._duration && this._rawPrevTime !== m && (0 < this._rawPrevTime || t < 0 && 0 <= this._rawPrevTime)) && (o = "onReverseComplete", r = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (a = r = !0, o = "onReverseComplete") : 0 <= this._rawPrevTime && this._first && (a = !0), this._rawPrevTime = t;
                else {
                    if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : m, 0 === t && r)
                        for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1), n = n._next;
                    t = 0, this._initted || (a = !0)
                }
            else {
                if (this._hasPause && !this._forcingPlayhead && !e) {
                    if (u <= t)
                        for (n = this._first; n && n._startTime <= t && !l;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (l = n), n = n._next;
                    else
                        for (n = this._last; n && n._startTime >= t && !l;) n._duration || "isPause" === n.data && 0 < n._rawPrevTime && (l = n), n = n._prev;
                    l && (this._time = t = l._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                this._totalTime = this._time = this._rawPrevTime = t
            }
            if (this._time !== u && this._first || i || a || l) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== u && 0 < t && (this._active = !0), 0 === u && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), u <= (h = this._time))
                    for (n = this._first; n && (s = n._next, h === this._time && (!this._paused || f));)(n._active || n._startTime <= h && !n._paused && !n._gc) && (l === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s;
                else
                    for (n = this._last; n && (s = n._prev, h === this._time && (!this._paused || f));) {
                        if (n._active || n._startTime <= u && !n._paused && !n._gc) {
                            if (l === n) {
                                for (l = n._prev; l && l.endTime() > this._time;) l.render(l._reversed ? l.totalDuration() - (t - l._startTime) * l._timeScale : (t - l._startTime) * l._timeScale, e, i), l = l._prev;
                                l = null, this.pause()
                            }
                            n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                        }
                        n = s
                    }
                this._onUpdate && (e || (_.length && v(), this._callback("onUpdate"))), o && (this._gc || (d === this._startTime || p !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (r && (_.length && v(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)))
            }
        }, i._hasPausedChild = function () {
            for (var t = this._first; t;) {
                if (t._paused || t instanceof p && t._hasPausedChild()) return !0;
                t = t._next
            }
            return !1
        }, i.getChildren = function (t, e, i, n) {
            n = n || -9999999999;
            for (var r = [], s = this._first, o = 0; s;) s._startTime < n || (s instanceof d ? !1 !== e && (r[o++] = s) : (!1 !== i && (r[o++] = s), !1 !== t && (o = (r = r.concat(s.getChildren(!0, e, i))).length))), s = s._next;
            return r
        }, i.getTweensOf = function (t, e) {
            var i, n, r = this._gc,
                s = [],
                o = 0;
            for (r && this._enabled(!0, !0), n = (i = d.getTweensOf(t)).length; - 1 < --n;)(i[n].timeline === this || e && this._contains(i[n])) && (s[o++] = i[n]);
            return r && this._enabled(!1, !0), s
        }, i.recent = function () {
            return this._recent
        }, i._contains = function (t) {
            for (var e = t.timeline; e;) {
                if (e === this) return !0;
                e = e.timeline
            }
            return !1
        }, i.shiftChildren = function (t, e, i) {
            i = i || 0;
            for (var n, r = this._first, s = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
            if (e)
                for (n in s) s[n] >= i && (s[n] += t);
            return this._uncache(!0)
        }, i._kill = function (t, e) {
            if (!t && !e) return this._enabled(!1, !1);
            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; - 1 < --n;) i[n]._kill(t, e) && (r = !0);
            return r
        }, i.clear = function (t) {
            var e = this.getChildren(!1, !0, !0),
                i = e.length;
            for (this._time = this._totalTime = 0; - 1 < --i;) e[i]._enabled(!1, !1);
            return !1 !== t && (this._labels = {}), this._uncache(!0)
        }, i.invalidate = function () {
            for (var t = this._first; t;) t.invalidate(), t = t._next;
            return c.prototype.invalidate.call(this)
        }, i._enabled = function (t, e) {
            if (t === this._gc)
                for (var i = this._first; i;) i._enabled(t, !0), i = i._next;
            return u.prototype._enabled.call(this, t, e)
        }, i.totalTime = function (t, e, i) {
            this._forcingPlayhead = !0;
            var n = c.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1, n
        }, i.duration = function (t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
        }, i.totalDuration = function (t) {
            if (arguments.length) return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this;
            if (this._dirty) {
                for (var e, i, n = 0, r = this._last, s = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > s && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : s = r._startTime, r._startTime < 0 && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), s = 0), n < (i = r._startTime + r._totalDuration / r._timeScale) && (n = i), r = e;
                this._duration = this._totalDuration = n, this._dirty = !1
            }
            return this._totalDuration
        }, i.paused = function (t) {
            if (!t)
                for (var e = this._first, i = this._time; e;) e._startTime === i && "isPause" === e.data && (e._rawPrevTime = 0), e = e._next;
            return c.prototype.paused.apply(this, arguments)
        }, i.usesFrames = function () {
            for (var t = this._timeline; t._timeline;) t = t._timeline;
            return t === c._rootFramesTimeline
        }, i.rawTime = function (t) {
            return t && (this._paused || this._repeat && 0 < this.time() && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
        }, p
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function (t) {
        "use strict";
        var e = function () {
            return (_gsScope.GreenSockGlobals || _gsScope).TimelineMax
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("./TweenLite.js"), module.exports = e())
    }(),
    function (u) {
        function t(t, e, i) {
            if (!i[0] || "object" == typeof i[0]) return e.init.apply(t, i);
            if (e[i[0]]) return e[i[0]].apply(t, Array.prototype.slice.call(i, 1));
            throw o(i[0] + " is not a method or property")
        }

        function a(t, e, i, n) {
            return {
                css: {
                    position: "absolute",
                    top: t,
                    left: e,
                    overflow: n || "hidden",
                    zIndex: i || "auto"
                }
            }
        }

        function l(t, e, i, n, r) {
            var s = 1 - r,
                o = s * s * s,
                a = r * r * r;
            return j(Math.round(o * t.x + 3 * r * s * s * e.x + 3 * r * r * s * i.x + a * n.x), Math.round(o * t.y + 3 * r * s * s * e.y + 3 * r * r * s * i.y + a * n.y))
        }

        function j(t, e) {
            return {
                x: t,
                y: e
            }
        }

        function L(t, e, i) {
            return p && i ? " translate3d(" + t + "px," + e + "px, 0px) " : " translate(" + t + "px, " + e + "px) "
        }

        function z(t) {
            return " rotate(" + t + "deg) "
        }

        function h(t, e) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }

        function s() {
            for (var t = ["Moz", "Webkit", "Khtml", "O", "ms"], e = t.length, i = ""; e--;) t[e] + "Transform" in document.body.style && (i = "-" + t[e].toLowerCase() + "-");
            return i
        }

        function F(t, e, i, n, r) {
            var s, o = [];
            if ("-webkit-" == I) {
                for (s = 0; s < r; s++) o.push("color-stop(" + n[s][0] + ", " + n[s][1] + ")");
                t.css({
                    "background-image": "-webkit-gradient(linear, " + e.x + "% " + e.y + "%," + i.x + "% " + i.y + "%, " + o.join(",") + " )"
                })
            } else {
                e = {
                    x: e.x / 100 * t.width(),
                    y: e.y / 100 * t.height()
                };
                var a = (i = {
                    x: i.x / 100 * t.width(),
                    y: i.y / 100 * t.height()
                }).x - e.x;
                s = i.y - e.y;
                var l = Math.atan2(s, a),
                    h = l - Math.PI / 2,
                    c = (h = Math.abs(t.width() * Math.sin(h)) + Math.abs(t.height() * Math.cos(h)), a = Math.sqrt(s * s + a * a), i = j(i.x < e.x ? t.width() : 0, i.y < e.y ? t.height() : 0), Math.tan(l));
                for (i = (s = -1 / c) * (c = (s * i.x - i.y - c * e.x + e.y) / (s - c)) - s * i.x + i.y, e = Math.sqrt(Math.pow(c - e.x, 2) + Math.pow(i - e.y, 2)), s = 0; s < r; s++) o.push(" " + n[s][1] + " " + 100 * (e + a * n[s][0]) / h + "%");
                t.css({
                    "background-image": I + "linear-gradient(" + -l + "rad," + o.join(",") + ")"
                })
            }
        }

        function c(t, e, i) {
            return t = u.Event(t), e.trigger(t, i), t.isDefaultPrevented() ? "prevented" : t.isPropagationStopped() ? "stopped" : ""
        }

        function o(t) {
            function e(t) {
                this.name = "TurnJsError", this.message = t
            }
            return new((e.prototype = Error()).constructor = e)(t)
        }

        function d(t) {
            for (var e = {
                top: 0,
                left: 0
            }; e.left += t.offsetLeft, e.top += t.offsetTop, t = t.offsetParent;);
            return e
        }
        var p, N, I = "",
            q = Math.PI,
            H = q / 2,
            f = "ontouchstart" in window,
            m = f ? {
                down: "touchstart",
                move: "touchmove",
                up: "touchend",
                over: "touchstart",
                out: "touchend"
            } : {
                down: "mousedown",
                move: "mousemove",
                up: "mouseup",
                over: "mouseover",
                out: "mouseout"
            },
            r = {
                backward: ["bl", "tl"],
                forward: ["br", "tr"],
                all: "tl bl tr br l r".split(" ")
            },
            n = ["single", "double"],
            i = ["ltr", "rtl"],
            g = {
                acceleration: !0,
                display: "double",
                duration: 600,
                page: 1,
                gradients: !0,
                turnCorners: "bl,br",
                when: null
            },
            _ = {
                cornerSize: 100
            },
            v = {
                init: function (t) {
                    var e, i;
                    p = "WebKitCSSMatrix" in window || "MozPerspective" in document.body.style, N = !(e = /AppleWebkit\/([0-9\.]+)/i.exec(navigator.userAgent)) || 534.3 < parseFloat(e[1]), I = s(), e = 0;
                    var n = this.data(),
                        r = this.children();
                    t = u.extend({
                        width: this.width(),
                        height: this.height(),
                        direction: this.attr("dir") || this.css("direction") || "ltr"
                    }, g, t);
                    if (n.opts = t, n.pageObjs = {}, n.pages = {}, n.pageWrap = {}, n.pageZoom = {}, n.pagePlace = {}, n.pageMv = [], n.zoom = 1, n.totalPages = t.pages || 0, n.eventHandlers = {
                        touchStart: u.proxy(v._touchStart, this),
                        touchMove: u.proxy(v._touchMove, this),
                        touchEnd: u.proxy(v._touchEnd, this),
                        start: u.proxy(v._eventStart, this)
                    }, t.when)
                        for (i in t.when) h(i, t.when) && this.bind(i, t.when[i]);
                    for (this.css({
                        position: "relative",
                        width: t.width,
                        height: t.height
                    }), this.turn("display", t.display), "" !== t.direction && this.turn("direction", t.direction), p && !f && t.acceleration && this.transform(L(0, 0, !0)), i = 0; i < r.length; i++) "1" != u(r[i]).attr("ignore") && this.turn("addPage", r[i], ++e);
                    return u(this).bind(m.down, n.eventHandlers.touchStart).bind("end", v._eventEnd).bind("pressed", v._eventPressed).bind("released", v._eventReleased).bind("flip", v._flip), u(this).parent().bind("start", n.eventHandlers.start), u(document).bind(m.move, n.eventHandlers.touchMove).bind(m.up, n.eventHandlers.touchEnd), this.turn("page", t.page), n.done = !0, this
                },
                addPage: function (t, e) {
                    var i, n = !1,
                        r = this.data(),
                        s = r.totalPages + 1;
                    if (r.destroying) return !1;
                    if ((i = /\bp([0-9]+)\b/.exec(u(t).attr("class"))) && (e = parseInt(i[1], 10)), e) {
                        if (e == s) n = !0;
                        else if (s < e) throw o('Page "' + e + '" cannot be inserted')
                    } else e = s, n = !0;
                    return 1 <= e && e <= s && (i = "double" == r.display ? e % 2 ? " odd" : " even" : "", r.done && this.turn("stop"), e in r.pageObjs && v._movePages.call(this, e, 1), n && (r.totalPages = s), r.pageObjs[e] = u(t).css({
                        float: "left"
                    }).addClass("page p" + e + i), -1 != navigator.userAgent.indexOf("MSIE 9.0") && r.pageObjs[e].hasClass("hard") && r.pageObjs[e].removeClass("hard"), v._addPage.call(this, e), v._removeFromDOM.call(this)), this
                },
                _addPage: function (t) {
                    var e = this.data(),
                        i = e.pageObjs[t];
                    if (i)
                        if (v._necessPage.call(this, t)) {
                            if (!e.pageWrap[t]) {
                                e.pageWrap[t] = u("<div/>", {
                                    class: "page-wrapper",
                                    page: t,
                                    css: {
                                        position: "absolute",
                                        overflow: "hidden"
                                    }
                                }), this.append(e.pageWrap[t]), e.pagePlace[t] || (e.pagePlace[t] = t, e.pageObjs[t].appendTo(e.pageWrap[t]));
                                var n = v._pageSize.call(this, t, !0);
                                i.css({
                                    width: n.width,
                                    height: n.height
                                }), e.pageWrap[t].css(n)
                            }
                            e.pagePlace[t] == t && v._makeFlip.call(this, t)
                        } else e.pagePlace[t] = 0, e.pageObjs[t] && e.pageObjs[t].remove()
                },
                hasPage: function (t) {
                    return h(t, this.data().pageObjs)
                },
                center: function (t) {
                    var e = this.data(),
                        i = u(this).turn("size"),
                        n = 0;
                    return e.noCenter || ("double" == e.display && (t = this.turn("view", t || e.tpage || e.page), "ltr" == e.direction ? t[0] ? t[1] || (n += i.width / 4) : n -= i.width / 4 : t[0] ? t[1] || (n -= i.width / 4) : n += i.width / 4), u(this).css({
                        marginLeft: n
                    })), this
                },
                destroy: function () {
                    var i = this,
                        t = this.data(),
                        e = "end first flip last pressed released start turning turned zooming missing".split(" ");
                    if ("prevented" != c("destroying", this)) {
                        for (t.destroying = !0, u.each(e, function (t, e) {
                            i.unbind(e)
                        }), this.parent().unbind("start", t.eventHandlers.start), u(document).unbind(m.move, t.eventHandlers.touchMove).unbind(m.up, t.eventHandlers.touchEnd); 0 !== t.totalPages;) this.turn("removePage", t.totalPages);
                        return t.fparent && t.fparent.remove(), t.shadow && t.shadow.remove(), this.removeData(), t = null, this
                    }
                },
                is: function () {
                    return "object" == typeof this.data().pages
                },
                zoom: function (t) {
                    var e = this.data();
                    if ("number" != typeof t) return e.zoom;
                    if (t < .001 || 100 < t) throw o(t + " is not a value for zoom");
                    if ("prevented" == c("zooming", this, [t, e.zoom])) return this;
                    var i = this.turn("size"),
                        n = this.turn("view"),
                        r = 1 / e.zoom,
                        s = Math.round(i.width * r * t);
                    i = Math.round(i.height * r * t);
                    for (e.zoom = t, u(this).turn("stop").turn("size", s, i), e.opts.autoCenter && this.turn("center"), v._updateShadow.call(this), t = 0; t < n.length; t++) n[t] && e.pageZoom[n[t]] != e.zoom && (this.trigger("zoomed", [n[t], n, e.pageZoom[n[t]], e.zoom]), e.pageZoom[n[t]] = e.zoom);
                    return this
                },
                _pageSize: function (t, e) {
                    var i = this.data(),
                        n = {};
                    if ("single" == i.display) n.width = this.width(), n.height = this.height(), e && (n.top = 0, n.left = 0, n.right = "auto");
                    else {
                        var r = this.width() / 2,
                            s = this.height();
                        if (i.pageObjs[t].hasClass("own-size") ? (n.width = i.pageObjs[t].width(), n.height = i.pageObjs[t].height()) : (n.width = r, n.height = s), e) {
                            var o = t % 2;
                            n.top = (s - n.height) / 2, "ltr" == i.direction ? (n[o ? "right" : "left"] = r - n.width, n[o ? "left" : "right"] = "auto") : (n[o ? "left" : "right"] = r - n.width, n[o ? "right" : "left"] = "auto")
                        }
                    }
                    return n
                },
                _makeFlip: function (t) {
                    var e = this.data();
                    if (!e.pages[t] && e.pagePlace[t] == t) {
                        var i = "single" == e.display,
                            n = t % 2;
                        e.pages[t] = e.pageObjs[t].css(v._pageSize.call(this, t)).flip({
                            page: t,
                            next: n || i ? t + 1 : t - 1,
                            turn: this
                        }).flip("disable", e.disabled), v._setPageLoc.call(this, t), e.pageZoom[t] = e.zoom
                    }
                    return e.pages[t]
                },
                _makeRange: function () {
                    var t, e;
                    if (!(this.data().totalPages < 1))
                        for (t = (e = this.turn("range"))[0]; t <= e[1]; t++) v._addPage.call(this, t)
                },
                range: function (t) {
                    var e, i, n, r = this.data();
                    t = t || r.tpage || r.page || 1;
                    if (n = v._view.call(this, t), t < 1 || t > r.totalPages) throw o('"' + t + '" is not a valid page');
                    return n[1] = n[1] || n[0], 1 <= n[0] && n[1] <= r.totalPages ? (t = Math.floor(2), r.totalPages - n[1] > n[0] ? i = 2 * t - (e = Math.min(n[0] - 1, t)) : e = 2 * t - (i = Math.min(r.totalPages - n[1], t))) : i = e = 5, [Math.max(1, n[0] - e), Math.min(r.totalPages, n[1] + i)]
                },
                _necessPage: function (t) {
                    if (0 === t) return !0;
                    var e = this.turn("range");
                    return this.data().pageObjs[t].hasClass("fixed") || t >= e[0] && t <= e[1]
                },
                _removeFromDOM: function () {
                    var t, e = this.data();
                    for (t in e.pageWrap) h(t, e.pageWrap) && !v._necessPage.call(this, t) && v._removePageFromDOM.call(this, t)
                },
                _removePageFromDOM: function (t) {
                    var e = this.data();
                    if (e.pages[t]) {
                        var i = e.pages[t].data();
                        W._moveFoldingPage.call(e.pages[t], !1), i.f && i.f.fwrapper && i.f.fwrapper.remove(), e.pages[t].removeData(), e.pages[t].remove(), delete e.pages[t]
                    }
                    e.pageObjs[t] && e.pageObjs[t].remove(), e.pageWrap[t] && (e.pageWrap[t].remove(), delete e.pageWrap[t]), v._removeMv.call(this, t), delete e.pagePlace[t], delete e.pageZoom[t]
                },
                removePage: function (t) {
                    var e = this.data();
                    if ("*" == t)
                        for (; 0 !== e.totalPages;) this.turn("removePage", e.totalPages);
                    else {
                        if (t < 1 || t > e.totalPages) throw o("The page " + t + " doesn't exist");
                        e.pageObjs[t] && (this.turn("stop"), v._removePageFromDOM.call(this, t), delete e.pageObjs[t]), v._movePages.call(this, t, -1), e.totalPages -= 1, e.page > e.totalPages ? (e.page = null, v._fitPage.call(this, e.totalPages)) : (v._makeRange.call(this), this.turn("update"))
                    }
                    return this
                },
                _movePages: function (t, r) {
                    var e, s = this,
                        o = this.data(),
                        a = "single" == o.display,
                        i = function (t) {
                            var e = t + r,
                                i = e % 2,
                                n = i ? " odd " : " even ";
                            o.pageObjs[t] && (o.pageObjs[e] = o.pageObjs[t].removeClass("p" + t + " odd even").addClass("p" + e + n)), o.pagePlace[t] && o.pageWrap[t] && (o.pagePlace[e] = e, o.pageWrap[e] = o.pageObjs[e].hasClass("fixed") ? o.pageWrap[t].attr("page", e) : o.pageWrap[t].css(v._pageSize.call(s, e, !0)).attr("page", e), o.pages[t] && (o.pages[e] = o.pages[t].flip("options", {
                                page: e,
                                next: a || i ? e + 1 : e - 1
                            })), r && (delete o.pages[t], delete o.pagePlace[t], delete o.pageZoom[t], delete o.pageObjs[t], delete o.pageWrap[t]))
                        };
                    if (0 < r)
                        for (e = o.totalPages; t <= e; e--) i(e);
                    else
                        for (e = t; e <= o.totalPages; e++) i(e)
                },
                display: function (t) {
                    var e = this.data(),
                        i = e.display;
                    if (void 0 === t) return i;
                    if (-1 == u.inArray(t, n)) throw o('"' + t + '" is not a value for display');
                    switch (t) {
                        case "single":
                            e.pageObjs[0] || (this.turn("stop").css({
                                overflow: "hidden"
                            }), e.pageObjs[0] = u("<div />", {
                                class: "page p-temporal"
                            }).css({
                                width: this.width(),
                                height: this.height()
                            }).appendTo(this)), this.addClass("shadow");
                            break;
                        case "double":
                            e.pageObjs[0] && (this.turn("stop").css({
                                overflow: ""
                            }), e.pageObjs[0].remove(), delete e.pageObjs[0]), this.removeClass("shadow")
                    }
                    return e.display = t, i && (t = this.turn("size"), v._movePages.call(this, 1, 0), this.turn("size", t.width, t.height).turn("update")), this
                },
                direction: function (t) {
                    var e = this.data();
                    if (void 0 === t) return e.direction;
                    if (t = t.toLowerCase(), -1 == u.inArray(t, i)) throw o('"' + t + '" is not a value for direction');
                    return "rtl" == t && u(this).attr("dir", "ltr").css({
                        direction: "ltr"
                    }), e.direction = t, e.done && this.turn("size", u(this).width(), u(this).height()), this
                },
                animating: function () {
                    return 0 < this.data().pageMv.length
                },
                corner: function () {
                    var t, e, i = this.data();
                    for (e in i.pages)
                        if (h(e, i.pages) && (t = i.pages[e].flip("corner"))) return t;
                    return !1
                },
                data: function () {
                    return this.data()
                },
                disable: function (t) {
                    var e, i = this.data(),
                        n = this.turn("view");
                    for (e in i.disabled = void 0 === t || !0 === t, i.pages) h(e, i.pages) && i.pages[e].flip("disable", !!i.disabled || -1 == u.inArray(parseInt(e, 10), n));
                    return this
                },
                disabled: function (t) {
                    return void 0 === t ? !0 === this.data().disabled : this.turn("disable", t)
                },
                size: function (t, e) {
                    if (void 0 === t || void 0 === e) return {
                        width: this.width(),
                        height: this.height()
                    };
                    this.turn("stop");
                    var i, n, r = this.data();
                    for (i in n = "double" == r.display ? t / 2 : t, this.css({
                        width: t,
                        height: e
                    }), r.pageObjs[0] && r.pageObjs[0].css({
                        width: n,
                        height: e
                    }), r.pageWrap) h(i, r.pageWrap) && (n = v._pageSize.call(this, i, !0), r.pageObjs[i].css({
                        width: n.width,
                        height: n.height
                    }), r.pageWrap[i].css(n), r.pages[i] && r.pages[i].css({
                        width: n.width,
                        height: n.height
                    }));
                    return this.turn("resize"), this
                },
                resize: function () {
                    var t, e = this.data();
                    for (e.pages[0] && (e.pageWrap[0].css({
                        left: -this.width()
                    }), e.pages[0].flip("resize", !0)), t = 1; t <= e.totalPages; t++) e.pages[t] && e.pages[t].flip("resize", !0);
                    v._updateShadow.call(this), e.opts.autoCenter && this.turn("center")
                },
                _removeMv: function (t) {
                    var e, i = this.data();
                    for (e = 0; e < i.pageMv.length; e++)
                        if (i.pageMv[e] == t) return i.pageMv.splice(e, 1), !0;
                    return !1
                },
                _addMv: function (t) {
                    var e = this.data();
                    v._removeMv.call(this, t), e.pageMv.push(t)
                },
                _view: function (t) {
                    var e = this.data();
                    t = t || e.page;
                    return "double" == e.display ? t % 2 ? [t - 1, t] : [t, t + 1] : [t]
                },
                view: function (t) {
                    var e = this.data();
                    t = v._view.call(this, t);
                    return "double" == e.display ? [0 < t[0] ? t[0] : 0, t[1] <= e.totalPages ? t[1] : 0] : [0 < t[0] && t[0] <= e.totalPages ? t[0] : 0]
                },
                stop: function (t, e) {
                    if (this.turn("animating")) {
                        var i, n, r, s = this.data();
                        for (s.tpage && (s.page = s.tpage, delete s.tpage), i = 0; i < s.pageMv.length; i++) s.pageMv[i] && s.pageMv[i] !== t && (n = (r = s.pages[s.pageMv[i]]).data().f.opts, r.flip("hideFoldedPage", e), e || W._moveFoldingPage.call(r, !1), n.force && (n.next = 0 == n.page % 2 ? n.page - 1 : n.page + 1, delete n.force))
                    }
                    return this.turn("update"), this
                },
                pages: function (t) {
                    var e = this.data();
                    if (t) {
                        if (t < e.totalPages)
                            for (var i = e.totalPages; t < i; i--) this.turn("removePage", i);
                        return e.totalPages = t, v._fitPage.call(this, e.page), this
                    }
                    return e.totalPages
                },
                _missing: function (t) {
                    var e = this.data();
                    if (!(e.totalPages < 1)) {
                        var i = this.turn("range", t),
                            n = [];
                        for (t = i[0]; t <= i[1]; t++) e.pageObjs[t] || n.push(t);
                        0 < n.length && this.trigger("missing", [n])
                    }
                },
                _fitPage: function (t) {
                    var e = this.data(),
                        i = this.turn("view", t);
                    if (v._missing.call(this, t), e.pageObjs[t]) {
                        e.page = t, this.turn("stop");
                        for (var n = 0; n < i.length; n++) i[n] && e.pageZoom[i[n]] != e.zoom && (this.trigger("zoomed", [i[n], i, e.pageZoom[i[n]], e.zoom]), e.pageZoom[i[n]] = e.zoom);
                        v._removeFromDOM.call(this), v._makeRange.call(this), v._updateShadow.call(this), this.trigger("turned", [t, i]), this.turn("update"), e.opts.autoCenter && this.turn("center")
                    }
                },
                _turnPage: function (t) {
                    var e, i, n = this.data(),
                        r = n.pagePlace[t],
                        s = this.turn("view"),
                        o = this.turn("view", t);
                    if (n.page != t) {
                        var a = n.page;
                        if ("prevented" == c("turning", this, [t, o])) return void(a == n.page && -1 != u.inArray(r, n.pageMv) && n.pages[r].flip("hideFoldedPage", !0)); - 1 != u.inArray(1, o) && this.trigger("first"), -1 != u.inArray(n.totalPages, o) && this.trigger("last")
                    }
                    "single" == n.display ? (e = s[0], i = o[0]) : s[1] && t > s[1] ? (e = s[1], i = o[0]) : s[0] && t < s[0] && (e = s[0], i = o[1]), r = n.opts.turnCorners.split(","), o = (s = n.pages[e].data().f).opts, a = s.point, v._missing.call(this, t), n.pageObjs[t] && (this.turn("stop"), n.page = t, v._makeRange.call(this), n.tpage = i, o.next != i && (o.next = i, o.force = !0), this.turn("update"), s.point = a, "hard" == s.effect ? "ltr" == n.direction ? n.pages[e].flip("turnPage", e < t ? "r" : "l") : n.pages[e].flip("turnPage", e < t ? "l" : "r") : "ltr" == n.direction ? n.pages[e].flip("turnPage", r[e < t ? 1 : 0]) : n.pages[e].flip("turnPage", r[e < t ? 0 : 1]))
                },
                page: function (t) {
                    var e = this.data();
                    if (void 0 === t) return e.page;
                    if (!e.disabled && !e.destroying) {
                        if (0 < (t = parseInt(t, 10)) && t <= e.totalPages) return t != e.page && (e.done && -1 == u.inArray(t, this.turn("view")) ? v._turnPage.call(this, t) : v._fitPage.call(this, t)), this;
                        throw o("The page " + t + " does not exist")
                    }
                },
                next: function () {
                    return this.turn("page", Math.min(this.data().totalPages, v._view.call(this, this.data().page).pop() + 1))
                },
                previous: function () {
                    return this.turn("page", Math.max(1, v._view.call(this, this.data().page).shift() - 1))
                },
                peel: function (t, e) {
                    var i = this.data(),
                        n = this.turn("view");
                    e = void 0 === e || !0 === e;
                    return !1 === t ? this.turn("stop", null, e) : "single" == i.display ? i.pages[i.page].flip("peel", t, e) : (n = "ltr" == i.direction ? -1 != t.indexOf("l") ? n[0] : n[1] : -1 != t.indexOf("l") ? n[1] : n[0], i.pages[n] && i.pages[n].flip("peel", t, e)), this
                },
                _addMotionPage: function () {
                    var t = u(this).data().f.opts,
                        e = t.turn;
                    e.data(), v._addMv.call(e, t.page)
                },
                _eventStart: function (t, e, i) {
                    var n = e.turn.data(),
                        r = n.pageZoom[e.page];
                    t.isDefaultPrevented() || (r && r != n.zoom && (e.turn.trigger("zoomed", [e.page, e.turn.turn("view", e.page), r, n.zoom]), n.pageZoom[e.page] = n.zoom), "single" == n.display && i && ("l" == i.charAt(1) && "ltr" == n.direction || "r" == i.charAt(1) && "rtl" == n.direction ? (e.next = e.next < e.page ? e.next : e.page - 1, e.force = !0) : e.next = e.next > e.page ? e.next : e.page + 1), v._addMotionPage.call(t.target)), v._updateShadow.call(e.turn)
                },
                _eventEnd: function (t, e, i) {
                    u(t.target).data();
                    var n = (t = e.turn).data();
                    i ? ((i = n.tpage || n.page) == e.next || i == e.page) && (delete n.tpage, v._fitPage.call(t, i || e.next, !0)) : (v._removeMv.call(t, e.page), v._updateShadow.call(t), t.turn("update"))
                },
                _eventPressed: function (t) {
                    var e = (t = u(t.target).data().f).opts.turn;
                    return e.data().mouseAction = !0, e.turn("update"), t.time = (new Date).getTime()
                },
                _eventReleased: function (t, e) {
                    var i, n = (i = u(t.target)).data().f,
                        r = n.opts.turn,
                        s = r.data();
                    i = "single" == s.display ? "br" == e.corner || "tr" == e.corner ? e.x < i.width() / 2 : e.x > i.width() / 2 : e.x < 0 || e.x > i.width(), ((new Date).getTime() - n.time < 200 || i) && (t.preventDefault(), v._turnPage.call(r, n.opts.next)), s.mouseAction = !1
                },
                _flip: function (t) {
                    t.stopPropagation(), (t = u(t.target).data().f.opts).turn.trigger("turn", [t.next]), t.turn.data().opts.autoCenter && t.turn.turn("center", t.next)
                },
                _touchStart: function () {
                    var t, e = this.data();
                    for (t in e.pages)
                        if (h(t, e.pages) && !1 === W._eventStart.apply(e.pages[t], arguments)) return !1
                },
                _touchMove: function () {
                    var t, e = this.data();
                    for (t in e.pages) h(t, e.pages) && W._eventMove.apply(e.pages[t], arguments)
                },
                _touchEnd: function () {
                    var t, e = this.data();
                    for (t in e.pages) h(t, e.pages) && W._eventEnd.apply(e.pages[t], arguments)
                },
                calculateZ: function (t) {
                    var e, i, n, r, s = this,
                        o = this.data(),
                        a = (e = this.turn("view"))[0] || e[1],
                        l = t.length - 1,
                        h = {
                            pageZ: {},
                            partZ: {},
                            pageV: {}
                        },
                        c = function (t) {
                            (t = s.turn("view", t))[0] && (h.pageV[t[0]] = !0), t[1] && (h.pageV[t[1]] = !0)
                        };
                    for (e = 0; e <= l; e++) i = t[e], n = o.pages[i].data().f.opts.next, r = o.pagePlace[i], c(i), c(n), i = o.pagePlace[n] == n ? n : i, h.pageZ[i] = o.totalPages - Math.abs(a - i), h.partZ[r] = 2 * o.totalPages - l + e;
                    return h
                },
                update: function () {
                    var t, e = this.data();
                    if (this.turn("animating") && 0 !== e.pageMv[0]) {
                        var i, n = this.turn("calculateZ", e.pageMv),
                            r = this.turn("corner"),
                            s = this.turn("view"),
                            o = this.turn("view", e.tpage);
                        for (t in e.pageWrap) h(t, e.pageWrap) && (i = e.pageObjs[t].hasClass("fixed"), e.pageWrap[t].css({
                            display: n.pageV[t] || i ? "" : "none",
                            zIndex: (e.pageObjs[t].hasClass("hard") ? n.partZ[t] : n.pageZ[t]) || (i ? -1 : 0)
                        }), i = e.pages[t]) && (i.flip("z", n.partZ[t] || null), n.pageV[t] && i.flip("resize"), e.tpage ? i.flip("hover", !1).flip("disable", -1 == u.inArray(parseInt(t, 10), e.pageMv) && t != o[0] && t != o[1]) : i.flip("hover", !1 === r).flip("disable", t != s[0] && t != s[1]))
                    } else
                        for (t in e.pageWrap) h(t, e.pageWrap) && (n = v._setPageLoc.call(this, t), e.pages[t] && e.pages[t].flip("disable", e.disabled || 1 != n).flip("hover", !0).flip("z", null));
                    return this
                },
                _updateShadow: function () {
                    var t, e, i = this.data(),
                        n = this.width(),
                        r = this.height(),
                        s = "single" == i.display ? n : n / 2;
                    t = this.turn("view"), i.shadow || (i.shadow = u("<div />", {
                        class: "shadow",
                        css: a(0, 0, 0).css
                    }).appendTo(this));
                    for (var o = 0; o < i.pageMv.length && t[0] && t[1]; o++) t = this.turn("view", i.pages[i.pageMv[o]].data().f.opts.next), e = this.turn("view", i.pageMv[o]), t[0] = t[0] && e[0], t[1] = t[1] && e[1];
                    switch (t[0] ? t[1] ? 3 : "ltr" == i.direction ? 2 : 1 : "ltr" == i.direction ? 1 : 2) {
                        case 1:
                            i.shadow.css({
                                width: s,
                                height: r,
                                top: 0,
                                left: s
                            });
                            break;
                        case 2:
                            i.shadow.css({
                                width: s,
                                height: r,
                                top: 0,
                                left: 0
                            });
                            break;
                        case 3:
                            i.shadow.css({
                                width: n,
                                height: r,
                                top: 0,
                                left: 0
                            })
                    }
                },
                _setPageLoc: function (t) {
                    var e = this.data(),
                        i = this.turn("view"),
                        n = 0;
                    if (t == i[0] || t == i[1] ? n = 1 : ("single" == e.display && t == i[0] + 1 || "double" == e.display && t == i[0] - 2 || t == i[1] + 2) && (n = 2), !this.turn("animating")) switch (n) {
                        case 1:
                            e.pageWrap[t].css({
                                zIndex: e.totalPages,
                                display: ""
                            });
                            break;
                        case 2:
                            e.pageWrap[t].css({
                                zIndex: e.totalPages - 1,
                                display: ""
                            });
                            break;
                        case 0:
                            e.pageWrap[t].css({
                                zIndex: 0,
                                display: e.pageObjs[t].hasClass("fixed") ? "" : "none"
                            })
                    }
                    return n
                },
                options: function (t) {
                    if (void 0 === t) return this.data().opts;
                    var e = this.data();
                    if (u.extend(e.opts, t), t.pages && this.turn("pages", t.pages), t.page && this.turn("page", t.page), t.display && this.turn("display", t.display), t.direction && this.turn("direction", t.direction), t.width && t.height && this.turn("size", t.width, t.height), t.when)
                        for (var i in t.when) h(i, t.when) && this.unbind(i).bind(i, t.when[i]);
                    return this
                },
                version: function () {
                    return "4.1.0"
                }
            },
            W = {
                init: function (t) {
                    return this.data({
                        f: {
                            disabled: !1,
                            hover: !1,
                            effect: this.hasClass("hard") ? "hard" : "sheet"
                        }
                    }), this.flip("options", t), W._addPageWrapper.call(this), this
                },
                setData: function (t) {
                    var e = this.data();
                    return e.f = u.extend(e.f, t), this
                },
                options: function (t) {
                    var e = this.data().f;
                    return t ? (W.setData.call(this, {
                        opts: u.extend({}, e.opts || _, t)
                    }), this) : e.opts
                },
                z: function (t) {
                    var e = this.data().f;
                    return e.opts["z-index"] = t, e.fwrapper && e.fwrapper.css({
                        zIndex: t || parseInt(e.parent.css("z-index"), 10) || 0
                    }), this
                },
                _cAllowed: function () {
                    var t = this.data().f,
                        e = t.opts.page,
                        i = t.opts.turn.data(),
                        n = e % 2;
                    return "hard" == t.effect ? "ltr" == i.direction ? [n ? "r" : "l"] : [n ? "l" : "r"] : "single" == i.display ? 1 == e ? "ltr" == i.direction ? r.forward : r.backward : e == i.totalPages ? "ltr" == i.direction ? r.backward : r.forward : r.all : "ltr" == i.direction ? r[n ? "forward" : "backward"] : r[n ? "backward" : "forward"]
                },
                _cornerActivated: function (t) {
                    var e = this.data().f,
                        i = this.width(),
                        n = this.height(),
                        r = (t = {
                            x: t.x,
                            y: t.y,
                            corner: ""
                        }, e.opts.cornerSize);
                    if (t.x <= 0 || t.y <= 0 || t.x >= i || t.y >= n) return !1;
                    var s = W._cAllowed.call(this);
                    switch (e.effect) {
                        case "hard":
                            if (t.x > i - r) t.corner = "r";
                            else {
                                if (!(t.x < r)) return !1;
                                t.corner = "l"
                            }
                            break;
                        case "sheet":
                            if (t.y < r) t.corner += "t";
                            else {
                                if (!(t.y >= n - r)) return !1;
                                t.corner += "b"
                            }
                            if (t.x <= r) t.corner += "l";
                            else {
                                if (!(t.x >= i - r)) return !1;
                                t.corner += "r"
                            }
                    }
                    return !(!t.corner || -1 == u.inArray(t.corner, s)) && t
                },
                _isIArea: function (t) {
                    var e = this.data().f.parent.offset();
                    t = f && t.originalEvent ? t.originalEvent.touches[0] : t;
                    return W._cornerActivated.call(this, {
                        x: t.pageX - e.left,
                        y: t.pageY - e.top
                    })
                },
                _c: function (t, e) {
                    switch (e = e || 0, t) {
                        case "tl":
                            return j(e, e);
                        case "tr":
                            return j(this.width() - e, e);
                        case "bl":
                            return j(e, this.height() - e);
                        case "br":
                            return j(this.width() - e, this.height() - e);
                        case "l":
                            return j(e, 0);
                        case "r":
                            return j(this.width() - e, 0)
                    }
                },
                _c2: function (t) {
                    switch (t) {
                        case "tl":
                            return j(2 * this.width(), 0);
                        case "tr":
                            return j(-this.width(), 0);
                        case "bl":
                            return j(2 * this.width(), this.height());
                        case "br":
                            return j(-this.width(), this.height());
                        case "l":
                            return j(2 * this.width(), 0);
                        case "r":
                            return j(-this.width(), 0)
                    }
                },
                _foldingPage: function () {
                    var t = this.data().f;
                    if (t) {
                        var e = t.opts;
                        if (e.turn) return "single" == (t = e.turn.data()).display ? 1 < e.next || 1 < e.page ? t.pageObjs[0] : null : t.pageObjs[e.next]
                    }
                },
                _backGradient: function () {
                    var t = this.data().f,
                        e = t.opts.turn.data();
                    return (e = e.opts.gradients && ("single" == e.display || 2 != t.opts.page && t.opts.page != e.totalPages - 1)) && !t.bshadow && (t.bshadow = u("<div/>", a(0, 0, 1)).css({
                        position: "",
                        width: this.width(),
                        height: this.height()
                    }).appendTo(t.parent)), e
                },
                type: function () {
                    return this.data().f.effect
                },
                resize: function (t) {
                    var e = this.data().f,
                        i = e.opts.turn.data(),
                        n = this.width(),
                        r = this.height();
                    switch (e.effect) {
                        case "hard":
                            t && (e.wrapper.css({
                                width: n,
                                height: r
                            }), e.fpage.css({
                                width: n,
                                height: r
                            }), i.opts.gradients && (e.ashadow.css({
                                width: n,
                                height: r
                            }), e.bshadow.css({
                                width: n,
                                height: r
                            })));
                            break;
                        case "sheet":
                            t && (t = Math.round(Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2))), e.wrapper.css({
                                width: t,
                                height: t
                            }), e.fwrapper.css({
                                width: t,
                                height: t
                            }).children(":first-child").css({
                                width: n,
                                height: r
                            }), e.fpage.css({
                                width: n,
                                height: r
                            }), i.opts.gradients && e.ashadow.css({
                                width: n,
                                height: r
                            }), W._backGradient.call(this) && e.bshadow.css({
                                width: n,
                                height: r
                            })), e.parent.is(":visible") && (i = d(e.parent[0]), e.fwrapper.css({
                                top: i.top,
                                left: i.left
                            }), i = d(e.opts.turn[0]), e.fparent.css({
                                top: -i.top,
                                left: -i.left
                            })), this.flip("z", e.opts["z-index"])
                    }
                },
                _addPageWrapper: function () {
                    var t = this.data().f,
                        e = t.opts.turn.data(),
                        i = this.parent();
                    if (t.parent = i, !t.wrapper) switch (t.effect) {
                        case "hard":
                            (n = {})[I + "transform-style"] = "preserve-3d", n[I + "backface-visibility"] = "hidden", t.wrapper = u("<div/>", a(0, 0, 2)).css(n).appendTo(i).prepend(this), t.fpage = u("<div/>", a(0, 0, 1)).css(n).appendTo(i), e.opts.gradients && (t.ashadow = u("<div/>", a(0, 0, 0)).hide().appendTo(i), t.bshadow = u("<div/>", a(0, 0, 0)));
                            break;
                        case "sheet":
                            var n = this.width(),
                                r = this.height();
                            Math.round(Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2))), t.fparent = t.opts.turn.data().fparent, t.fparent || ((n = u("<div/>", {
                                css: {
                                    "pointer-events": "none"
                                }
                            }).hide()).data().flips = 0, n.css(a(0, 0, "auto", "visible").css).appendTo(t.opts.turn), t.opts.turn.data().fparent = n, t.fparent = n), this.css({
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bottom: "auto",
                                right: "auto"
                            }), t.wrapper = u("<div/>", a(0, 0, this.css("z-index"))).appendTo(i).prepend(this), t.fwrapper = u("<div/>", a(i.offset().top, i.offset().left)).hide().appendTo(t.fparent), t.fpage = u("<div/>", a(0, 0, 0, "visible")).css({
                                cursor: "default"
                            }).appendTo(t.fwrapper), e.opts.gradients && (t.ashadow = u("<div/>", a(0, 0, 1)).appendTo(t.fpage)), W.setData.call(this, t)
                    }
                    W.resize.call(this, !0)
                },
                _fold: function (r) {
                    var h = this.data().f,
                        c = h.opts.turn.data(),
                        s = W._c.call(this, r.corner),
                        u = this.width(),
                        d = this.height();
                    switch (h.effect) {
                        case "hard":
                            r.x = "l" == r.corner ? Math.min(Math.max(r.x, 0), 2 * u) : Math.max(Math.min(r.x, u), -u);
                            var t, e, i, n, o, a = c.totalPages,
                                l = h.opts["z-index"] || a,
                                p = {
                                    overflow: "visible"
                                },
                                f = s.x ? (s.x - r.x) / u : r.x / u,
                                m = 90 * f,
                                g = m < 90;
                            switch (r.corner) {
                                case "l":
                                    n = "0% 50%", o = "100% 50%", i = g ? (e = (t = 0) < h.opts.next - 1, 1) : (t = "100%", e = h.opts.page + 1 < a, 0);
                                    break;
                                case "r":
                                    n = "100% 50%", o = "0% 50%", m = -m, u = -u, i = g ? (t = 0, e = h.opts.next + 1 < a, 0) : (t = "-100%", e = 1 != h.opts.page, 1)
                            }
                            p[I + "perspective-origin"] = o, h.wrapper.transform("rotateY(" + m + "deg)translate3d(0px, 0px, " + (this.attr("depth") || 0) + "px)", o), h.fpage.transform("translateX(" + u + "px) rotateY(" + (180 + m) + "deg)", n), h.parent.css(p), g ? (f = 1 - f, h.wrapper.css({
                                zIndex: l + 1
                            }), h.fpage.css({
                                zIndex: l
                            })) : (f -= 1, h.wrapper.css({
                                zIndex: l
                            }), h.fpage.css({
                                zIndex: l + 1
                            })), c.opts.gradients && (e ? h.ashadow.css({
                                display: "",
                                left: t,
                                backgroundColor: "rgba(0,0,0," + .5 * f + ")"
                            }).transform("rotateY(0deg)") : h.ashadow.hide(), h.bshadow.css({
                                opacity: 1 - f
                            }), g ? h.bshadow.parent()[0] != h.wrapper[0] && h.bshadow.appendTo(h.wrapper) : h.bshadow.parent()[0] != h.fpage[0] && h.bshadow.appendTo(h.fpage), F(h.bshadow, j(100 * i, 0), j(100 * (1 - i), 0), [
                                [0, "rgba(0,0,0,0.3)"],
                                [1, "rgba(0,0,0,0)"]
                            ], 2));
                            break;
                        case "sheet":
                            var _, v, y, b, w, x, T, k = this,
                                S = 0,
                                C = j(0, 0),
                                P = j(0, 0),
                                A = j(0, 0),
                                O = W._foldingPage.call(this);
                            Math.tan(0);
                            var M = c.opts.acceleration,
                                D = h.wrapper.height(),
                                E = "t" == r.corner.substr(0, 1),
                                $ = "l" == r.corner.substr(1, 1),
                                R = function () {
                                    var t = j(0, 0),
                                        e = j(0, 0);
                                    t.x = s.x ? s.x - r.x : r.x, t.y = N ? s.y ? s.y - r.y : r.y : 0, e.x = $ ? u - t.x / 2 : r.x + t.x / 2, e.y = t.y / 2;
                                    var i = H - Math.atan2(t.y, t.x),
                                        n = i - Math.atan2(e.y, e.x);
                                    n = Math.max(0, Math.sin(n) * Math.sqrt(Math.pow(e.x, 2) + Math.pow(e.y, 2)));
                                    return S = i / q * 180, A = j(n * Math.sin(i), n * Math.cos(i)), H < i && (A.x += Math.abs(A.y * t.y / t.x), A.y = 0, Math.round(A.x * Math.tan(q - i)) < d) ? (r.y = Math.sqrt(Math.pow(d, 2) + 2 * e.x * t.x), E && (r.y = d - r.y), R()) : (H < i && (t = q - i, e = D - d / Math.sin(t), C = j(Math.round(e * Math.cos(t)), Math.round(e * Math.sin(t))), $ && (C.x = -C.x), E && (C.y = -C.y)), _ = Math.round(A.y / Math.tan(i) + A.x), e = (t = u - _) * Math.cos(2 * i), n = t * Math.sin(2 * i), P = j(Math.round($ ? t - e : _ + e), Math.round(E ? n : d - n)), c.opts.gradients && (w = t * Math.sin(i), t = W._c2.call(k, r.corner), t = Math.sqrt(Math.pow(t.x - r.x, 2) + Math.pow(t.y - r.y, 2)) / u, T = Math.sin(H * (1 < t ? 2 - t : t)), x = Math.min(t, 1), b = 100 < w ? (w - 100) / w : 0, v = j(w * Math.sin(i) / u * 100, w * Math.cos(i) / d * 100), W._backGradient.call(k) && (y = j(1.2 * w * Math.sin(i) / u * 100, 1.2 * w * Math.cos(i) / d * 100), $ || (y.x = 100 - y.x), E || (y.y = 100 - y.y))), A.x = Math.round(A.x), A.y = Math.round(A.y), !0)
                                };
                            switch (t = function (t, e, i, n) {
                                var r = ["0", "auto"],
                                    s = (u - D) * i[0] / 100,
                                    o = (d - D) * i[1] / 100,
                                    a = (e = {
                                        left: r[e[0]],
                                        top: r[e[1]],
                                        right: r[e[2]],
                                        bottom: r[e[3]]
                                    }, r = {}, 90 != n && -90 != n ? $ ? -1 : 1 : 0),
                                    l = i[0] + "% " + i[1] + "%";
                                k.css(e).transform(z(n) + L(t.x + a, t.y, M), l), h.fpage.css(e).transform(z(n) + L(t.x + P.x - C.x - u * i[0] / 100, t.y + P.y - C.y - d * i[1] / 100, M) + z((180 / n - 2) * n), l), h.wrapper.transform(L(-t.x + s - a, -t.y + o, M) + z(-n), l), h.fwrapper.transform(L(-t.x + C.x + s, -t.y + C.y + o, M) + z(-n), l), c.opts.gradients && (i[0] && (v.x = 100 - v.x), i[1] && (v.y = 100 - v.y), r["box-shadow"] = "0 0 20px rgba(0,0,0," + .5 * T + ")", O.css(r), F(h.ashadow, j($ ? 100 : 0, E ? 0 : 100), j(v.x, v.y), [
                                    [b, "rgba(0,0,0,0)"],
                                    [.8 * (1 - b) + b, "rgba(0,0,0," + .2 * x + ")"],
                                    [1, "rgba(255,255,255," + .2 * x + ")"]
                                ], 3), W._backGradient.call(k) && F(h.bshadow, j($ ? 0 : 100, E ? 0 : 100), j(y.x, y.y), [
                                    [.6, "rgba(0,0,0,0)"],
                                    [.8, "rgba(0,0,0," + .3 * x + ")"],
                                    [1, "rgba(0,0,0,0)"]
                                ], 3))
                            }, r.corner) {
                                case "tl":
                                    r.x = Math.max(r.x, 1), R(), t(A, [1, 0, 0, 1], [100, 0], S);
                                    break;
                                case "tr":
                                    r.x = Math.min(r.x, u - 1), R(), t(j(-A.x, A.y), [0, 0, 0, 1], [0, 0], -S);
                                    break;
                                case "bl":
                                    r.x = Math.max(r.x, 1), R(), t(j(A.x, -A.y), [1, 1, 0, 0], [100, 100], -S);
                                    break;
                                case "br":
                                    r.x = Math.min(r.x, u - 1), R(), t(j(-A.x, -A.y), [0, 1, 1, 0], [0, 100], S)
                            }
                    }
                    h.point = r
                },
                _moveFoldingPage: function (t) {
                    var e = this.data().f;
                    if (e) {
                        var i = e.opts.turn,
                            n = i.data(),
                            r = n.pagePlace;
                        t ? (r[n = e.opts.next] != e.opts.page && (e.folding && W._moveFoldingPage.call(this, !1), W._foldingPage.call(this).appendTo(e.fpage), r[n] = e.opts.page, e.folding = n), i.turn("update")) : e.folding && (n.pages[e.folding] ? (i = n.pages[e.folding].data().f, n.pageObjs[e.folding].appendTo(i.wrapper)) : n.pageWrap[e.folding] && n.pageObjs[e.folding].appendTo(n.pageWrap[e.folding]), e.folding in r && (r[e.folding] = e.folding), delete e.folding)
                    }
                },
                _showFoldedPage: function (e, t) {
                    var i = W._foldingPage.call(this),
                        n = (o = this.data()).f,
                        r = n.visible;
                    if (i) {
                        if (!(r && n.point && n.point.corner == e.corner || (i = "hover" == n.status || "peel" == n.status || n.opts.turn.data().mouseAction ? e.corner : null, r = !1, "prevented" != c("start", this, [n.opts, i])))) return !1;
                        if (t) {
                            var s = this,
                                o = n.point && n.point.corner == e.corner ? n.point : W._c.call(this, e.corner, 1);
                            this.animatef({
                                from: [o.x, o.y],
                                to: [e.x, e.y],
                                duration: 500,
                                frame: function (t) {
                                    e.x = Math.round(t[0]), e.y = Math.round(t[1]), W._fold.call(s, e)
                                }
                            })
                        } else W._fold.call(this, e), o.effect && !o.effect.turning && this.animatef(!1);
                        if (!r) switch (n.effect) {
                            case "hard":
                                n.visible = !0, W._moveFoldingPage.call(this, !0), n.fpage.show(), n.opts.shadows && n.bshadow.show();
                                break;
                            case "sheet":
                                n.visible = !0, n.fparent.show().data().flips++, W._moveFoldingPage.call(this, !0), n.fwrapper.show(), n.bshadow && n.bshadow.show()
                        }
                        return !0
                    }
                    return !1
                },
                hide: function () {
                    var t = this.data().f,
                        e = t.opts.turn.data(),
                        i = W._foldingPage.call(this);
                    switch (t.effect) {
                        case "hard":
                            e.opts.gradients && (t.bshadowLoc = 0, t.bshadow.remove(), t.ashadow.hide()), t.wrapper.transform(""), t.fpage.hide();
                            break;
                        case "sheet":
                            0 == --t.fparent.data().flips && t.fparent.hide(), this.css({
                                left: 0,
                                top: 0,
                                right: "auto",
                                bottom: "auto"
                            }).transform(""), t.wrapper.transform(""), t.fwrapper.hide(), t.bshadow && t.bshadow.hide(), i.transform("")
                    }
                    return t.visible = !1, this
                },
                hideFoldedPage: function (t) {
                    var e = this.data().f;
                    if (e.point) {
                        var i = this,
                            n = e.point,
                            r = function () {
                                e.point = null, e.status = "", i.flip("hide"), i.trigger("end", [e.opts, !1])
                            };
                        if (t) {
                            var s = W._c.call(this, n.corner),
                                o = (t = "t" == n.corner.substr(0, 1) ? Math.min(0, n.y - s.y) / 2 : Math.max(0, n.y - s.y) / 2, j(n.x, n.y + t)),
                                a = j(s.x, s.y - t);
                            this.animatef({
                                from: 0,
                                to: 1,
                                frame: function (t) {
                                    t = l(n, o, a, s, t), n.x = t.x, n.y = t.y, W._fold.call(i, n)
                                },
                                complete: r,
                                duration: 800,
                                hiding: !0
                            })
                        } else this.animatef(!1), r()
                    }
                },
                turnPage: function (e) {
                    var i = this,
                        t = this.data().f,
                        n = t.opts.turn.data(),
                        r = (e = {
                            corner: t.corner ? t.corner.corner : e || W._cAllowed.call(this)[0]
                        }, t.point || W._c.call(this, e.corner, t.opts.turn ? n.opts.elevation : 0)),
                        s = W._c2.call(this, e.corner);
                    this.trigger("flip").animatef({
                        from: 0,
                        to: 1,
                        frame: function (t) {
                            t = l(r, r, s, s, t), e.x = t.x, e.y = t.y, W._showFoldedPage.call(i, e)
                        },
                        complete: function () {
                            i.trigger("end", [t.opts, !0])
                        },
                        duration: n.opts.duration,
                        turning: !0
                    }), t.corner = null
                },
                moving: function () {
                    return "effect" in this.data()
                },
                isTurning: function () {
                    return this.flip("moving") && this.data().effect.turning
                },
                corner: function () {
                    return this.data().f.corner
                },
                _eventStart: function (t) {
                    var e = this.data().f,
                        i = e.opts.turn;
                    if (!e.corner && !e.disabled && !this.flip("isTurning") && e.opts.page == i.data().pagePlace[e.opts.page]) {
                        if (e.corner = W._isIArea.call(this, t), e.corner && W._foldingPage.call(this)) return this.trigger("pressed", [e.point]), W._showFoldedPage.call(this, e.corner), !1;
                        e.corner = null
                    }
                },
                _eventMove: function (t) {
                    var e = this.data().f;
                    if (!e.disabled)
                        if (t = f ? t.originalEvent.touches : [t], e.corner) {
                            var i = e.parent.offset();
                            e.corner.x = t[0].pageX - i.left, e.corner.y = t[0].pageY - i.top, W._showFoldedPage.call(this, e.corner)
                        } else e.hover && !this.data().effect && this.is(":visible") && ((t = W._isIArea.call(this, t[0])) ? ("sheet" == e.effect && 2 == t.corner.length || "hard" == e.effect) && (e.status = "hover", e = W._c.call(this, t.corner, e.opts.cornerSize / 2), t.x = e.x, t.y = e.y, W._showFoldedPage.call(this, t, !0)) : "hover" == e.status && (e.status = "", W.hideFoldedPage.call(this, !0)))
                },
                _eventEnd: function () {
                    var t = this.data().f,
                        e = t.corner;
                    !t.disabled && e && "prevented" != c("released", this, [t.point || e]) && W.hideFoldedPage.call(this, !0), t.corner = null
                },
                disable: function (t) {
                    return W.setData.call(this, {
                        disabled: t
                    }), this
                },
                hover: function (t) {
                    return W.setData.call(this, {
                        hover: t
                    }), this
                },
                peel: function (t, e) {
                    var i = this.data().f;
                    if (t) {
                        if (-1 == u.inArray(t, r.all)) throw o("Corner " + t + " is not permitted");
                        if (-1 != u.inArray(t, W._cAllowed.call(this))) {
                            var n = W._c.call(this, t, i.opts.cornerSize / 2);
                            i.status = "peel", W._showFoldedPage.call(this, {
                                corner: t,
                                x: n.x,
                                y: n.y
                            }, e)
                        }
                    } else i.status = "", W.hideFoldedPage.call(this, e);
                    return this
                }
            };
        window.requestAnim = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
            window.setTimeout(t, 1e3 / 60)
        }, u.extend(u.fn, {
            flip: function () {
                return t(u(this[0]), W, arguments)
            },
            turn: function () {
                return t(u(this[0]), v, arguments)
            },
            transform: function (t, e) {
                var i = {};
                return e && (i[I + "transform-origin"] = e), i[I + "transform"] = t, this.css(i)
            },
            animatef: function (n) {
                var r = this.data();
                if (r.effect && r.effect.stop(), n) {
                    n.to.length || (n.to = [n.to]), n.from.length || (n.from = [n.from]);
                    for (var s = [], o = n.to.length, a = !0, l = this, h = (new Date).getTime(), c = function () {
                        if (r.effect && a) {
                            for (var t = [], e = Math.min(n.duration, (new Date).getTime() - h), i = 0; i < o; i++) t.push(r.effect.easing(1, e, n.from[i], s[i], n.duration));
                            n.frame(1 == o ? t[0] : t), e == n.duration ? (delete r.effect, l.data(r), n.complete && n.complete()) : window.requestAnim(c)
                        }
                    }, t = 0; t < o; t++) s.push(n.to[t] - n.from[t]);
                    r.effect = u.extend({
                        stop: function () {
                            a = !1
                        },
                        easing: function (t, e, i, n, r) {
                            return n * Math.sqrt(1 - (e = e / r - 1) * e) + i
                        }
                    }, n), this.data(r), c()
                } else delete r.effect
            }
        }), u.isTouch = f, u.mouseEvents = m, u.cssPrefix = s, u.cssTransitionEnd = function () {
            var t, e = document.createElement("fakeelement"),
                i = {
                    transition: "transitionend",
                    OTransition: "oTransitionEnd",
                    MSTransition: "transitionend",
                    MozTransition: "transitionend",
                    WebkitTransition: "webkitTransitionEnd"
                };
            for (t in i)
                if (void 0 !== e.style[t]) return i[t]
        }, u.findPos = d
    }(jQuery), ((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    var t, l, e, T, w, x, k, _, i, v, S, y, b, p, f, g, n;
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (n, c, g) {
        var _ = function (t) {
                var e, i = [],
                    n = t.length;
                for (e = 0; e !== n; i.push(t[e++]));
                return i
            },
            v = function (t, e, i) {
                var n, r, s = t.cycle;
                for (n in s) r = s[n], t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                delete t.cycle
            },
            y = function (t, e, i) {
                g.call(this, t, e, i), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = y.prototype.render
            },
            b = 1e-10,
            w = g._internals,
            x = w.isSelector,
            T = w.isArray,
            t = y.prototype = g.to({}, .1, {}),
            k = [];
        y.version = "1.19.1", t.constructor = y, t.kill()._gc = !1, y.killTweensOf = y.killDelayedCallsTo = g.killTweensOf, y.getTweensOf = g.getTweensOf, y.lagSmoothing = g.lagSmoothing, y.ticker = g.ticker, y.render = g.render, t.invalidate = function () {
            return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), g.prototype.invalidate.call(this)
        }, t.updateTo = function (t, e) {
            var i, n = this.ratio,
                r = this.vars.immediateRender || t.immediateRender;
            for (i in e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), t) this.vars[i] = t[i];
            if (this._initted || r)
                if (e) this._initted = !1, r && this.render(0, !0, !0);
                else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && g._onPluginEvent("_onDisable", this), .998 < this._time / this._duration) {
                    var s = this._totalTime;
                    this.render(0, !0, !1), this._initted = !1, this.render(s, !0, !1)
                } else if (this._initted = !1, this._init(), 0 < this._time || r)
                    for (var o, a = 1 / (1 - n), l = this._firstPT; l;) o = l.s + l.c, l.c *= a, l.s = o - l.c, l = l._next;
            return this
        }, t.render = function (t, e, i) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var n, r, s, o, a, l, h, c, u = this._dirty ? this.totalDuration() : this._totalDuration,
                d = this._time,
                p = this._totalTime,
                f = this._cycle,
                m = this._duration,
                g = this._rawPrevTime;
            if (u - 1e-7 <= t && 0 <= t ? (this._totalTime = u, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = m, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === m && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (g < 0 || t <= 0 && -1e-7 <= t || g === b && "isPause" !== this.data) && g !== t && (i = !0, b < g && (r = "onReverseComplete")), this._rawPrevTime = c = !e || t || g === t ? t : b)) : t < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== p || 0 === m && 0 < g) && (r = "onReverseComplete", n = this._reversed), t < 0 && (this._active = !1, 0 === m && (this._initted || !this.vars.lazy || i) && (0 <= g && (i = !0), this._rawPrevTime = c = !e || t || g === t ? t : b)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (o = m + this._repeatDelay, this._cycle = this._totalTime / o >> 0, 0 !== this._cycle && this._cycle === this._totalTime / o && p <= t && this._cycle--, this._time = this._totalTime - this._cycle * o, this._yoyo && 0 != (1 & this._cycle) && (this._time = m - this._time), this._time > m ? this._time = m : this._time < 0 && (this._time = 0)), this._easeType ? (a = this._time / m, (1 === (l = this._easeType) || 3 === l && .5 <= a) && (a = 1 - a), 3 === l && (a *= 2), 1 === (h = this._easePower) ? a *= a : 2 === h ? a *= a * a : 3 === h ? a *= a * a * a : 4 === h && (a *= a * a * a * a), 1 === l ? this.ratio = 1 - a : 2 === l ? this.ratio = a : this._time / m < .5 ? this.ratio = a / 2 : this.ratio = 1 - a / 2) : this.ratio = this._ease.getRatio(this._time / m)), d !== this._time || i || f !== this._cycle) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = d, this._totalTime = p, this._rawPrevTime = g, this._cycle = f, w.lazyTweens.push(this), void(this._lazy = [t, e]);
                    this._time && !n ? this.ratio = this._ease.getRatio(this._time / m) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== d && 0 <= t && (this._active = !0), 0 === p && (2 === this._initted && 0 < t && this._init(), this._startAt && (0 <= t ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === m) && (e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== p || r) && this._callback("onUpdate")), this._cycle !== f && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (!this._gc || i) && (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === m && this._rawPrevTime === b && c !== b && (this._rawPrevTime = 0))
            } else p !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
        }, y.to = function (t, e, i) {
            return new y(t, e, i)
        }, y.from = function (t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new y(t, e, i)
        }, y.fromTo = function (t, e, i, n) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new y(t, e, n)
        }, y.staggerTo = y.allTo = function (t, e, i, n, r, s, o) {
            n = n || 0;
            var a, l, h, c, u = 0,
                d = [],
                p = function () {
                    i.onComplete && i.onComplete.apply(i.onCompleteScope || this, arguments), r.apply(o || i.callbackScope || this, s || k)
                },
                f = i.cycle,
                m = i.startAt && i.startAt.cycle;
            for (T(t) || ("string" == typeof t && (t = g.selector(t) || t), x(t) && (t = _(t))), t = t || [], n < 0 && ((t = _(t)).reverse(), n *= -1), a = t.length - 1, h = 0; h <= a; h++) {
                for (c in l = {}, i) l[c] = i[c];
                if (f && (v(l, t, h), null != l.duration && (e = l.duration, delete l.duration)), m) {
                    for (c in m = l.startAt = {}, i.startAt) m[c] = i.startAt[c];
                    v(l.startAt, t, h)
                }
                l.delay = u + (l.delay || 0), h === a && r && (l.onComplete = p), d[h] = new y(t[h], e, l), u += n
            }
            return d
        }, y.staggerFrom = y.allFrom = function (t, e, i, n, r, s, o) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, y.staggerTo(t, e, i, n, r, s, o)
        }, y.staggerFromTo = y.allFromTo = function (t, e, i, n, r, s, o, a) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, y.staggerTo(t, e, n, r, s, o, a)
        }, y.delayedCall = function (t, e, i, n, r) {
            return new y(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                useFrames: r,
                overwrite: 0
            })
        }, y.set = function (t, e) {
            return new y(t, 0, e)
        }, y.isTweening = function (t) {
            return 0 < g.getTweensOf(t, !0).length
        };
        var s = function (t, e) {
                for (var i = [], n = 0, r = t._first; r;) r instanceof g ? i[n++] = r : (e && (i[n++] = r), n = (i = i.concat(s(r, e))).length), r = r._next;
                return i
            },
            u = y.getAllTweens = function (t) {
                return s(n._rootTimeline, t).concat(s(n._rootFramesTimeline, t))
            };
        y.killAll = function (t, e, i, n) {
            null == e && (e = !0), null == i && (i = !0);
            var r, s, o, a = u(0 != n),
                l = a.length,
                h = e && i && n;
            for (o = 0; o < l; o++) s = a[o], (h || s instanceof c || (r = s.target === s.vars.onComplete) && i || e && !r) && (t ? s.totalTime(s._reversed ? 0 : s.totalDuration()) : s._enabled(!1, !1))
        }, y.killChildTweensOf = function (t, e) {
            if (null != t) {
                var i, n, r, s, o, a = w.tweenLookup;
                if ("string" == typeof t && (t = g.selector(t) || t), x(t) && (t = _(t)), T(t))
                    for (s = t.length; - 1 < --s;) y.killChildTweensOf(t[s], e);
                else {
                    for (r in i = [], a)
                        for (n = a[r].target.parentNode; n;) n === t && (i = i.concat(a[r].tweens)), n = n.parentNode;
                    for (o = i.length, s = 0; s < o; s++) e && i[s].totalTime(i[s].totalDuration()), i[s]._enabled(!1, !1)
                }
            }
        };
        var r = function (t, e, i, n) {
            e = !1 !== e, i = !1 !== i;
            for (var r, s, o = u(n = !1 !== n), a = e && i && n, l = o.length; - 1 < --l;) s = o[l], (a || s instanceof c || (r = s.target === s.vars.onComplete) && i || e && !r) && s.paused(t)
        };
        return y.pauseAll = function (t, e, i) {
            r(!0, t, e, i)
        }, y.resumeAll = function (t, e, i) {
            r(!1, t, e, i)
        }, y.globalTimeScale = function (t) {
            var e = n._rootTimeline,
                i = g.ticker.time;
            return arguments.length ? (t = t || b, e._startTime = i - (i - e._startTime) * e._timeScale / t, e = n._rootFramesTimeline, i = g.ticker.frame, e._startTime = i - (i - e._startTime) * e._timeScale / t, e._timeScale = n._rootTimeline._timeScale = t, t) : e._timeScale
        }, t.progress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        }, t.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        }, t.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        }, t.duration = function (t) {
            return arguments.length ? n.prototype.duration.call(this, t) : this._duration
        }, t.totalDuration = function (t) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        }, t.repeat = function (t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        }, t.repeatDelay = function (t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, t.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, y
    }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (c, u, d) {
        var p = function (t) {
                u.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                var e, i, n = this.vars;
                for (i in n) e = n[i], g(e) && -1 !== e.join("").indexOf("{self}") && (n[i] = this._swapSelfInParams(e));
                g(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger)
            },
            m = 1e-10,
            t = d._internals,
            e = p._internals = {},
            f = t.isSelector,
            g = t.isArray,
            _ = t.lazyTweens,
            v = t.lazyRender,
            o = _gsScope._gsDefine.globals,
            y = function (t) {
                var e, i = {};
                for (e in t) i[e] = t[e];
                return i
            },
            b = function (t, e, i) {
                var n, r, s = t.cycle;
                for (n in s) r = s[n], t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                delete t.cycle
            },
            s = e.pauseCallback = function () {},
            w = function (t) {
                var e, i = [],
                    n = t.length;
                for (e = 0; e !== n; i.push(t[e++]));
                return i
            },
            i = p.prototype = new u;
        return p.version = "1.19.1", i.constructor = p, i.kill()._gc = i._forcingPlayhead = i._hasPause = !1, i.to = function (t, e, i, n) {
            var r = i.repeat && o.TweenMax || d;
            return e ? this.add(new r(t, e, i), n) : this.set(t, i, n)
        }, i.from = function (t, e, i, n) {
            return this.add((i.repeat && o.TweenMax || d).from(t, e, i), n)
        }, i.fromTo = function (t, e, i, n, r) {
            var s = n.repeat && o.TweenMax || d;
            return e ? this.add(s.fromTo(t, e, i, n), r) : this.set(t, n, r)
        }, i.staggerTo = function (t, e, i, n, r, s, o, a) {
            var l, h, c = new p({
                    onComplete: s,
                    onCompleteParams: o,
                    callbackScope: a,
                    smoothChildTiming: this.smoothChildTiming
                }),
                u = i.cycle;
            for ("string" == typeof t && (t = d.selector(t) || t), f(t = t || []) && (t = w(t)), (n = n || 0) < 0 && ((t = w(t)).reverse(), n *= -1), h = 0; h < t.length; h++)(l = y(i)).startAt && (l.startAt = y(l.startAt), l.startAt.cycle && b(l.startAt, t, h)), u && (b(l, t, h), null != l.duration && (e = l.duration, delete l.duration)), c.to(t[h], e, l, h * n);
            return this.add(c, r)
        }, i.staggerFrom = function (t, e, i, n, r, s, o, a) {
            return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, s, o, a)
        }, i.staggerFromTo = function (t, e, i, n, r, s, o, a, l) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, s, o, a, l)
        }, i.call = function (t, e, i, n) {
            return this.add(d.delayedCall(0, t, e, i), n)
        }, i.set = function (t, e, i) {
            return i = this._parseTimeOrLabel(i, 0, !0), null == e.immediateRender && (e.immediateRender = i === this._time && !this._paused), this.add(new d(t, 0, e), i)
        }, p.exportRoot = function (t, e) {
            null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
            var i, n, r = new p(t),
                s = r._timeline;
            for (null == e && (e = !0), s._remove(r, !0), r._startTime = 0, r._rawPrevTime = r._time = r._totalTime = s._time, i = s._first; i;) n = i._next, e && i instanceof d && i.target === i.vars.onComplete || r.add(i, i._startTime - i._delay), i = n;
            return s.add(r, 0), r
        }, i.add = function (t, e, i, n) {
            var r, s, o, a, l, h;
            if ("number" != typeof e && (e = this._parseTimeOrLabel(e, 0, !0, t)), !(t instanceof c)) {
                if (t instanceof Array || t && t.push && g(t)) {
                    for (i = i || "normal", n = n || 0, r = e, s = t.length, o = 0; o < s; o++) g(a = t[o]) && (a = new p({
                        tweens: a
                    })), this.add(a, r), "string" != typeof a && "function" != typeof a && ("sequence" === i ? r = a._startTime + a.totalDuration() / a._timeScale : "start" === i && (a._startTime -= a.delay())), r += n;
                    return this._uncache(!0)
                }
                if ("string" == typeof t) return this.addLabel(t, e);
                if ("function" != typeof t) throw "Cannot add " + t + " into the timeline; it is not a tween, timeline, function, or string.";
                t = d.delayedCall(0, t)
            }
            if (u.prototype.add.call(this, t, e), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                for (h = (l = this).rawTime() > t._startTime; l._timeline;) h && l._timeline.smoothChildTiming ? l.totalTime(l._totalTime, !0) : l._gc && l._enabled(!0, !1), l = l._timeline;
            return this
        }, i.remove = function (t) {
            if (t instanceof c) {
                this._remove(t, !1);
                var e = t._timeline = t.vars.useFrames ? c._rootFramesTimeline : c._rootTimeline;
                return t._startTime = (t._paused ? t._pauseTime : e._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale, this
            }
            if (t instanceof Array || t && t.push && g(t)) {
                for (var i = t.length; - 1 < --i;) this.remove(t[i]);
                return this
            }
            return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
        }, i._remove = function (t, e) {
            return u.prototype._remove.call(this, t, e), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
        }, i.append = function (t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
        }, i.insert = i.insertMultiple = function (t, e, i, n) {
            return this.add(t, e || 0, i, n)
        }, i.appendMultiple = function (t, e, i, n) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
        }, i.addLabel = function (t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e), this
        }, i.addPause = function (t, e, i, n) {
            var r = d.delayedCall(0, s, i, n || this);
            return r.vars.onComplete = r.vars.onReverseComplete = e, r.data = "isPause", this._hasPause = !0, this.add(r, t)
        }, i.removeLabel = function (t) {
            return delete this._labels[t], this
        }, i.getLabelTime = function (t) {
            return null != this._labels[t] ? this._labels[t] : -1
        }, i._parseTimeOrLabel = function (t, e, i, n) {
            var r;
            if (n instanceof c && n.timeline === this) this.remove(n);
            else if (n && (n instanceof Array || n.push && g(n)))
                for (r = n.length; - 1 < --r;) n[r] instanceof c && n[r].timeline === this && this.remove(n[r]);
            if ("string" == typeof e) return this._parseTimeOrLabel(e, i && "number" == typeof t && null == this._labels[e] ? t - this.duration() : 0, i);
            if (e = e || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = this.duration());
            else {
                if (-1 === (r = t.indexOf("="))) return null == this._labels[t] ? i ? this._labels[t] = this.duration() + e : e : this._labels[t] + e;
                e = parseInt(t.charAt(r - 1) + "1", 10) * Number(t.substr(r + 1)), t = 1 < r ? this._parseTimeOrLabel(t.substr(0, r - 1), 0, i) : this.duration()
            }
            return Number(t) + e
        }, i.seek = function (t, e) {
            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
        }, i.stop = function () {
            return this.paused(!0)
        }, i.gotoAndPlay = function (t, e) {
            return this.play(t, e)
        }, i.gotoAndStop = function (t, e) {
            return this.pause(t, e)
        }, i.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, r, s, o, a, l, h, c = this._dirty ? this.totalDuration() : this._totalDuration,
                u = this._time,
                d = this._startTime,
                p = this._timeScale,
                f = this._paused;
            if (c - 1e-7 <= t && 0 <= t) this._totalTime = this._time = c, this._reversed || this._hasPausedChild() || (r = !0, o = "onComplete", a = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && -1e-7 <= t || this._rawPrevTime < 0 || this._rawPrevTime === m) && this._rawPrevTime !== t && this._first && (a = !0, this._rawPrevTime > m && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : m, t = c + 1e-4;
            else if (t < 1e-7)
                if (this._totalTime = this._time = 0, (0 !== u || 0 === this._duration && this._rawPrevTime !== m && (0 < this._rawPrevTime || t < 0 && 0 <= this._rawPrevTime)) && (o = "onReverseComplete", r = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (a = r = !0, o = "onReverseComplete") : 0 <= this._rawPrevTime && this._first && (a = !0), this._rawPrevTime = t;
                else {
                    if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : m, 0 === t && r)
                        for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1), n = n._next;
                    t = 0, this._initted || (a = !0)
                }
            else {
                if (this._hasPause && !this._forcingPlayhead && !e) {
                    if (u <= t)
                        for (n = this._first; n && n._startTime <= t && !l;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (l = n), n = n._next;
                    else
                        for (n = this._last; n && n._startTime >= t && !l;) n._duration || "isPause" === n.data && 0 < n._rawPrevTime && (l = n), n = n._prev;
                    l && (this._time = t = l._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                this._totalTime = this._time = this._rawPrevTime = t
            }
            if (this._time !== u && this._first || i || a || l) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== u && 0 < t && (this._active = !0), 0 === u && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), u <= (h = this._time))
                    for (n = this._first; n && (s = n._next, h === this._time && (!this._paused || f));)(n._active || n._startTime <= h && !n._paused && !n._gc) && (l === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s;
                else
                    for (n = this._last; n && (s = n._prev, h === this._time && (!this._paused || f));) {
                        if (n._active || n._startTime <= u && !n._paused && !n._gc) {
                            if (l === n) {
                                for (l = n._prev; l && l.endTime() > this._time;) l.render(l._reversed ? l.totalDuration() - (t - l._startTime) * l._timeScale : (t - l._startTime) * l._timeScale, e, i), l = l._prev;
                                l = null, this.pause()
                            }
                            n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                        }
                        n = s
                    }
                this._onUpdate && (e || (_.length && v(), this._callback("onUpdate"))), o && (this._gc || (d === this._startTime || p !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (r && (_.length && v(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)))
            }
        }, i._hasPausedChild = function () {
            for (var t = this._first; t;) {
                if (t._paused || t instanceof p && t._hasPausedChild()) return !0;
                t = t._next
            }
            return !1
        }, i.getChildren = function (t, e, i, n) {
            n = n || -9999999999;
            for (var r = [], s = this._first, o = 0; s;) s._startTime < n || (s instanceof d ? !1 !== e && (r[o++] = s) : (!1 !== i && (r[o++] = s), !1 !== t && (o = (r = r.concat(s.getChildren(!0, e, i))).length))), s = s._next;
            return r
        }, i.getTweensOf = function (t, e) {
            var i, n, r = this._gc,
                s = [],
                o = 0;
            for (r && this._enabled(!0, !0), n = (i = d.getTweensOf(t)).length; - 1 < --n;)(i[n].timeline === this || e && this._contains(i[n])) && (s[o++] = i[n]);
            return r && this._enabled(!1, !0), s
        }, i.recent = function () {
            return this._recent
        }, i._contains = function (t) {
            for (var e = t.timeline; e;) {
                if (e === this) return !0;
                e = e.timeline
            }
            return !1
        }, i.shiftChildren = function (t, e, i) {
            i = i || 0;
            for (var n, r = this._first, s = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
            if (e)
                for (n in s) s[n] >= i && (s[n] += t);
            return this._uncache(!0)
        }, i._kill = function (t, e) {
            if (!t && !e) return this._enabled(!1, !1);
            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; - 1 < --n;) i[n]._kill(t, e) && (r = !0);
            return r
        }, i.clear = function (t) {
            var e = this.getChildren(!1, !0, !0),
                i = e.length;
            for (this._time = this._totalTime = 0; - 1 < --i;) e[i]._enabled(!1, !1);
            return !1 !== t && (this._labels = {}), this._uncache(!0)
        }, i.invalidate = function () {
            for (var t = this._first; t;) t.invalidate(), t = t._next;
            return c.prototype.invalidate.call(this)
        }, i._enabled = function (t, e) {
            if (t === this._gc)
                for (var i = this._first; i;) i._enabled(t, !0), i = i._next;
            return u.prototype._enabled.call(this, t, e)
        }, i.totalTime = function (t, e, i) {
            this._forcingPlayhead = !0;
            var n = c.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1, n
        }, i.duration = function (t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
        }, i.totalDuration = function (t) {
            if (arguments.length) return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this;
            if (this._dirty) {
                for (var e, i, n = 0, r = this._last, s = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > s && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : s = r._startTime, r._startTime < 0 && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), s = 0), n < (i = r._startTime + r._totalDuration / r._timeScale) && (n = i), r = e;
                this._duration = this._totalDuration = n, this._dirty = !1
            }
            return this._totalDuration
        }, i.paused = function (t) {
            if (!t)
                for (var e = this._first, i = this._time; e;) e._startTime === i && "isPause" === e.data && (e._rawPrevTime = 0), e = e._next;
            return c.prototype.paused.apply(this, arguments)
        }, i.usesFrames = function () {
            for (var t = this._timeline; t._timeline;) t = t._timeline;
            return t === c._rootFramesTimeline
        }, i.rawTime = function (t) {
            return t && (this._paused || this._repeat && 0 < this.time() && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
        }, p
    }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (e, a, t) {
        var i = function (t) {
                e.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
            },
            C = 1e-10,
            n = a._internals,
            P = n.lazyTweens,
            A = n.lazyRender,
            l = _gsScope._gsDefine.globals,
            h = new t(null, null, 1, 0),
            r = i.prototype = new e;
        return r.constructor = i, r.kill()._gc = !1, i.version = "1.19.1", r.invalidate = function () {
            return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), e.prototype.invalidate.call(this)
        }, r.addCallback = function (t, e, i, n) {
            return this.add(a.delayedCall(0, t, i, n), e)
        }, r.removeCallback = function (t, e) {
            if (t)
                if (null == e) this._kill(null, t);
                else
                    for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); - 1 < --n;) i[n]._startTime === r && i[n]._enabled(!1, !1);
            return this
        }, r.removePause = function (t) {
            return this.removeCallback(e._internals.pauseCallback, t)
        }, r.tweenTo = function (t, e) {
            e = e || {};
            var i, n, r, s = {
                    ease: h,
                    useFrames: this.usesFrames(),
                    immediateRender: !1
                },
                o = e.repeat && l.TweenMax || a;
            for (n in e) s[n] = e[n];
            return s.time = this._parseTimeOrLabel(t), i = Math.abs(Number(s.time) - this._time) / this._timeScale || .001, r = new o(this, i, s), s.onStart = function () {
                r.target.paused(!0), r.vars.time !== r.target.time() && i === r.duration() && r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale), e.onStart && e.onStart.apply(e.onStartScope || e.callbackScope || r, e.onStartParams || [])
            }, r
        }, r.tweenFromTo = function (t, e, i) {
            i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                callbackScope: this
            }, i.immediateRender = !1 !== i.immediateRender;
            var n = this.tweenTo(e, i);
            return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
        }, r.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, r, s, o, a, l, h, c, u = this._dirty ? this.totalDuration() : this._totalDuration,
                d = this._duration,
                p = this._time,
                f = this._totalTime,
                m = this._startTime,
                g = this._timeScale,
                _ = this._rawPrevTime,
                v = this._paused,
                y = this._cycle;
            if (u - 1e-7 <= t && 0 <= t) this._locked || (this._totalTime = u, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (r = !0, o = "onComplete", a = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && -1e-7 <= t || _ < 0 || _ === C) && _ !== t && this._first && (a = !0, C < _ && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : C, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : t = (this._time = d) + 1e-4;
            else if (t < 1e-7)
                if (this._locked || (this._totalTime = this._cycle = 0), ((this._time = 0) !== p || 0 === d && _ !== C && (0 < _ || t < 0 && 0 <= _) && !this._locked) && (o = "onReverseComplete", r = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (a = r = !0, o = "onReverseComplete") : 0 <= _ && this._first && (a = !0), this._rawPrevTime = t;
                else {
                    if (this._rawPrevTime = d || !e || t || this._rawPrevTime === t ? t : C, 0 === t && r)
                        for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1), n = n._next;
                    t = 0, this._initted || (a = !0)
                }
            else if (0 === d && _ < 0 && (a = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (l = d + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && f <= t && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = d - this._time), this._time > d ? t = (this._time = d) + 1e-4 : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e && t < d) {
                if (p <= (t = this._time) || this._repeat && y !== this._cycle)
                    for (n = this._first; n && n._startTime <= t && !h;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (h = n), n = n._next;
                else
                    for (n = this._last; n && n._startTime >= t && !h;) n._duration || "isPause" === n.data && 0 < n._rawPrevTime && (h = n), n = n._prev;
                h && (this._time = t = h._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
            }
            if (this._cycle !== y && !this._locked) {
                var b = this._yoyo && 0 != (1 & y),
                    w = b === (this._yoyo && 0 != (1 & this._cycle)),
                    x = this._totalTime,
                    T = this._cycle,
                    k = this._rawPrevTime,
                    S = this._time;
                if (this._totalTime = y * d, this._cycle < y ? b = !b : this._totalTime += d, this._time = p, this._rawPrevTime = 0 === d ? _ - 1e-4 : _, this._cycle = y, this._locked = !0, p = b ? 0 : d, this.render(p, e, 0 === d), e || this._gc || this.vars.onRepeat && (this._cycle = T, this._locked = !1, this._callback("onRepeat")), p !== this._time) return;
                if (w && (this._cycle = y, this._locked = !0, p = b ? d + 1e-4 : -1e-4, this.render(p, !0, !1)), this._locked = !1, this._paused && !v) return;
                this._time = S, this._totalTime = x, this._cycle = T, this._rawPrevTime = k
            }
            if (this._time !== p && this._first || i || a || h) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== f && 0 < t && (this._active = !0), 0 === f && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), p <= (c = this._time))
                    for (n = this._first; n && (s = n._next, c === this._time && (!this._paused || v));)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (h === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s;
                else
                    for (n = this._last; n && (s = n._prev, c === this._time && (!this._paused || v));) {
                        if (n._active || n._startTime <= p && !n._paused && !n._gc) {
                            if (h === n) {
                                for (h = n._prev; h && h.endTime() > this._time;) h.render(h._reversed ? h.totalDuration() - (t - h._startTime) * h._timeScale : (t - h._startTime) * h._timeScale, e, i), h = h._prev;
                                h = null, this.pause()
                            }
                            n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                        }
                        n = s
                    }
                this._onUpdate && (e || (P.length && A(), this._callback("onUpdate"))), o && (this._locked || this._gc || (m === this._startTime || g !== this._timeScale) && (0 === this._time || u >= this.totalDuration()) && (r && (P.length && A(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)))
            } else f !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
        }, r.getActive = function (t, e, i) {
            null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
            var n, r, s = [],
                o = this.getChildren(t, e, i),
                a = 0,
                l = o.length;
            for (n = 0; n < l; n++)(r = o[n]).isActive() && (s[a++] = r);
            return s
        }, r.getLabelAfter = function (t) {
            t || 0 !== t && (t = this._time);
            var e, i = this.getLabelsArray(),
                n = i.length;
            for (e = 0; e < n; e++)
                if (i[e].time > t) return i[e].name;
            return null
        }, r.getLabelBefore = function (t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; - 1 < --i;)
                if (e[i].time < t) return e[i].name;
            return null
        }, r.getLabelsArray = function () {
            var t, e = [],
                i = 0;
            for (t in this._labels) e[i++] = {
                time: this._labels[t],
                name: t
            };
            return e.sort(function (t, e) {
                return t.time - e.time
            }), e
        }, r.invalidate = function () {
            return this._locked = !1, e.prototype.invalidate.call(this)
        }, r.progress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        }, r.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        }, r.totalDuration = function (t) {
            return arguments.length ? -1 !== this._repeat && t ? this.timeScale(this.totalDuration() / t) : this : (this._dirty && (e.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        }, r.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        }, r.repeat = function (t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        }, r.repeatDelay = function (t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, r.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, r.currentLabel = function (t) {
            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
        }, i
    }, !0), T = 180 / Math.PI, w = [], x = [], k = [], _ = {}, i = _gsScope._gsDefine.globals, v = function (t, e, i, n) {
        i === n && (i = n - (n - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
    }, S = function (t, e, i, n) {
        var r = {
                a: t
            },
            s = {},
            o = {},
            a = {
                c: n
            },
            l = (t + e) / 2,
            h = (e + i) / 2,
            c = (i + n) / 2,
            u = (l + h) / 2,
            d = (h + c) / 2,
            p = (d - u) / 8;
        return r.b = l + (t - l) / 4, s.b = u + p, r.c = s.a = (r.b + s.b) / 2, s.c = o.a = (u + d) / 2, o.b = d - p, a.b = c + (n - c) / 4, o.c = a.a = (o.b + a.b) / 2, [r, s, o, a]
    }, y = function (t, e, i, n, r) {
        var s, o, a, l, h, c, u, d, p, f, m, g, _, v = t.length - 1,
            y = 0,
            b = t[0].a;
        for (s = 0; s < v; s++) o = (h = t[y]).a, a = h.d, l = t[y + 1].d, d = r ? (m = w[s], _ = ((g = x[s]) + m) * e * .25 / (n ? .5 : k[s] || .5), a - ((c = a - (a - o) * (n ? .5 * e : 0 !== m ? _ / m : 0)) + (((u = a + (l - a) * (n ? .5 * e : 0 !== g ? _ / g : 0)) - c) * (3 * m / (m + g) + .5) / 4 || 0))) : a - ((c = a - (a - o) * e * .5) + (u = a + (l - a) * e * .5)) / 2, c += d, u += d, h.c = p = c, h.b = 0 !== s ? b : b = h.a + .6 * (h.c - h.a), h.da = a - o, h.ca = p - o, h.ba = b - o, i ? (f = S(o, b, p, a), t.splice(y, 1, f[0], f[1], f[2], f[3]), y += 4) : y++, b = u;
        (h = t[y]).b = b, h.c = b + .4 * (h.d - b), h.da = h.d - h.a, h.ca = h.c - h.a, h.ba = b - h.a, i && (f = S(h.a, b, h.c, h.d), t.splice(y, 1, f[0], f[1], f[2], f[3]))
    }, b = function (t, e, i, n) {
        var r, s, o, a, l, h, c = [];
        if (n)
            for (s = (t = [n].concat(t)).length; - 1 < --s;) "string" == typeof (h = t[s][e]) && "=" === h.charAt(1) && (t[s][e] = n[e] + Number(h.charAt(0) + h.substr(2)));
        if ((r = t.length - 2) < 0) return c[0] = new v(t[0][e], 0, 0, t[r < -1 ? 0 : 1][e]), c;
        for (s = 0; s < r; s++) o = t[s][e], a = t[s + 1][e], c[s] = new v(o, 0, 0, a), i && (l = t[s + 2][e], w[s] = (w[s] || 0) + (a - o) * (a - o), x[s] = (x[s] || 0) + (l - a) * (l - a));
        return c[s] = new v(t[s][e], 0, 0, t[s + 1][e]), c
    }, p = function (t, e, i, n, r, s) {
        var o, a, l, h, c, u, d, p, f = {},
            m = [],
            g = s || t[0];
        for (a in r = "string" == typeof r ? "," + r + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == e && (e = 1), t[0]) m.push(a);
        if (1 < t.length) {
            for (p = t[t.length - 1], d = !0, o = m.length; - 1 < --o;)
                if (a = m[o], .05 < Math.abs(g[a] - p[a])) {
                    d = !1;
                    break
                }
            d && (t = t.concat(), s && t.unshift(s), t.push(t[1]), s = t[t.length - 3])
        }
        for (w.length = x.length = k.length = 0, o = m.length; - 1 < --o;) a = m[o], _[a] = -1 !== r.indexOf("," + a + ","), f[a] = b(t, a, _[a], s);
        for (o = w.length; - 1 < --o;) w[o] = Math.sqrt(w[o]), x[o] = Math.sqrt(x[o]);
        if (!n) {
            for (o = m.length; - 1 < --o;)
                if (_[a])
                    for (u = (l = f[m[o]]).length - 1, h = 0; h < u; h++) c = l[h + 1].da / x[h] + l[h].da / w[h] || 0, k[h] = (k[h] || 0) + c * c;
            for (o = k.length; - 1 < --o;) k[o] = Math.sqrt(k[o])
        }
        for (o = m.length, h = i ? 4 : 1; - 1 < --o;) l = f[a = m[o]], y(l, e, i, n, _[a]), d && (l.splice(0, h), l.splice(l.length - h, h));
        return f
    }, f = function (t, e, i) {
        for (var n, r, s, o, a, l, h, c, u, d, p, f = 1 / i, m = t.length; - 1 < --m;)
            for (s = (d = t[m]).a, o = d.d - s, a = d.c - s, l = d.b - s, n = r = 0, c = 1; c <= i; c++) n = r - (r = ((h = f * c) * h * o + 3 * (u = 1 - h) * (h * a + u * l)) * h), e[p = m * i + c - 1] = (e[p] || 0) + n * n
    }, g = _gsScope._gsDefine.plugin({
        propName: "bezier",
        priority: -1,
        version: "1.3.7",
        API: 2,
        global: !0,
        init: function (t, e, i) {
            this._target = t, e instanceof Array && (e = {
                values: e
            }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
            var n, r, s, o, a, l = e.values || [],
                h = {},
                c = l[0],
                u = e.autoRotate || i.vars.orientToBezier;
            for (n in this._autoRotate = u ? u instanceof Array ? u : [
                ["x", "y", "rotation", !0 === u ? 0 : Number(u) || 0]
            ] : null, c) this._props.push(n);
            for (s = this._props.length; - 1 < --s;) n = this._props[s], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof t[n], h[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || h[n] !== l[0][n] && (a = h);
            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? p(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : function (t, e, i) {
                var n, r, s, o, a, l, h, c, u, d, p, f = {},
                    m = "cubic" === (e = e || "soft") ? 3 : 2,
                    g = "soft" === e,
                    _ = [];
                if (g && i && (t = [i].concat(t)), null == t || t.length < m + 1) throw "invalid Bezier data";
                for (u in t[0]) _.push(u);
                for (l = _.length; - 1 < --l;) {
                    for (f[u = _[l]] = a = [], d = 0, c = t.length, h = 0; h < c; h++) n = null == i ? t[h][u] : "string" == typeof (p = t[h][u]) && "=" === p.charAt(1) ? i[u] + Number(p.charAt(0) + p.substr(2)) : Number(p), g && 1 < h && h < c - 1 && (a[d++] = (n + a[d - 2]) / 2), a[d++] = n;
                    for (c = d - m + 1, h = d = 0; h < c; h += m) n = a[h], r = a[h + 1], s = a[h + 2], o = 2 === m ? 0 : a[h + 3], a[d++] = p = 3 === m ? new v(n, r, s, o) : new v(n, (2 * r + n) / 3, (2 * r + s) / 3, s);
                    a.length = d
                }
                return f
            }(l, e.type, h), this._segCount = this._beziers[n].length, this._timeRes) {
                var d = function (t, e) {
                    var i, n, r, s, o = [],
                        a = [],
                        l = 0,
                        h = 0,
                        c = (e = e >> 0 || 6) - 1,
                        u = [],
                        d = [];
                    for (i in t) f(t[i], o, e);
                    for (r = o.length, n = 0; n < r; n++) l += Math.sqrt(o[n]), d[s = n % e] = l, s === c && (h += l, u[s = n / e >> 0] = d, a[s] = h, l = 0, d = []);
                    return {
                        length: h,
                        lengths: a,
                        segments: u
                    }
                }(this._beziers, this._timeRes);
                this._length = d.length, this._lengths = d.lengths, this._segments = d.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
            }
            if (u = this._autoRotate)
                for (this._initialRotations = [], u[0] instanceof Array || (this._autoRotate = u = [u]), s = u.length; - 1 < --s;) {
                    for (o = 0; o < 3; o++) n = u[s][o], this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                    n = u[s][2], this._initialRotations[s] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0, this._overwriteProps.push(n)
                }
            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
        },
        set: function (t) {
            var e, i, n, r, s, o, a, l, h, c, u = this._segCount,
                d = this._func,
                p = this._target,
                f = t !== this._startRatio;
            if (this._timeRes) {
                if (h = this._lengths, c = this._curSeg, t *= this._length, n = this._li, t > this._l2 && n < u - 1) {
                    for (l = u - 1; n < l && (this._l2 = h[++n]) <= t;);
                    this._l1 = h[n - 1], this._li = n, this._curSeg = c = this._segments[n], this._s2 = c[this._s1 = this._si = 0]
                } else if (t < this._l1 && 0 < n) {
                    for (; 0 < n && (this._l1 = h[--n]) >= t;);
                    0 === n && t < this._l1 ? this._l1 = 0 : n++, this._l2 = h[n], this._li = n, this._curSeg = c = this._segments[n], this._s1 = c[(this._si = c.length - 1) - 1] || 0, this._s2 = c[this._si]
                }
                if (e = n, t -= this._l1, n = this._si, t > this._s2 && n < c.length - 1) {
                    for (l = c.length - 1; n < l && (this._s2 = c[++n]) <= t;);
                    this._s1 = c[n - 1], this._si = n
                } else if (t < this._s1 && 0 < n) {
                    for (; 0 < n && (this._s1 = c[--n]) >= t;);
                    0 === n && t < this._s1 ? this._s1 = 0 : n++, this._s2 = c[n], this._si = n
                }
                o = (n + (t - this._s1) / (this._s2 - this._s1)) * this._prec || 0
            } else o = (t - (e = t < 0 ? 0 : 1 <= t ? u - 1 : u * t >> 0) * (1 / u)) * u;
            for (i = 1 - o, n = this._props.length; - 1 < --n;) r = this._props[n], a = (o * o * (s = this._beziers[r][e]).da + 3 * i * (o * s.ca + i * s.ba)) * o + s.a, this._mod[r] && (a = this._mod[r](a, p)), d[r] ? p[r](a) : p[r] = a;
            if (this._autoRotate) {
                var m, g, _, v, y, b, w, x = this._autoRotate;
                for (n = x.length; - 1 < --n;) r = x[n][2], b = x[n][3] || 0, w = !0 === x[n][4] ? 1 : T, s = this._beziers[x[n][0]], m = this._beziers[x[n][1]], s && m && (s = s[e], m = m[e], g = s.a + (s.b - s.a) * o, g += ((v = s.b + (s.c - s.b) * o) - g) * o, v += (s.c + (s.d - s.c) * o - v) * o, _ = m.a + (m.b - m.a) * o, _ += ((y = m.b + (m.c - m.b) * o) - _) * o, y += (m.c + (m.d - m.c) * o - y) * o, a = f ? Math.atan2(y - _, v - g) * w + b : this._initialRotations[n], this._mod[r] && (a = this._mod[r](a, p)), d[r] ? p[r](a) : p[r] = a)
            }
        }
    }), n = g.prototype, g.bezierThrough = p, g.cubicToQuadratic = S, g._autoCSS = !0, g.quadraticToCubic = function (t, e, i) {
        return new v(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
    }, g._cssRegister = function () {
        var t = i.CSSPlugin;
        if (t) {
            var e = t._internals,
                p = e._parseToProxy,
                f = e._setPluginRatio,
                m = e.CSSPropTween;
            e._registerComplexSpecialProp("bezier", {
                parser: function (t, e, i, n, r, s) {
                    e instanceof Array && (e = {
                        values: e
                    }), s = new g;
                    var o, a, l, h = e.values,
                        c = h.length - 1,
                        u = [],
                        d = {};
                    if (c < 0) return r;
                    for (o = 0; o <= c; o++) l = p(t, h[o], n, r, s, c !== o), u[o] = l.end;
                    for (a in e) d[a] = e[a];
                    return d.values = u, (r = new m(t, "bezier", 0, 0, l.pt, 2)).data = l, r.plugin = s, r.setRatio = f, 0 === d.autoRotate && (d.autoRotate = !0), !d.autoRotate || d.autoRotate instanceof Array || (o = !0 === d.autoRotate ? 0 : Number(d.autoRotate), d.autoRotate = null != l.end.left ? [
                        ["left", "top", "rotation", o, !1]
                    ] : null != l.end.x && [
                        ["x", "y", "rotation", o, !1]
                    ]), d.autoRotate && (n._transform || n._enableTransforms(!1), l.autoRotate = n._target._gsTransform, l.proxy.rotation = l.autoRotate.rotation || 0, n._overwriteProps.push("rotation")), s._onInitTween(l.proxy, d, n._tween), r
                }
            })
        }
    }, n._mod = function (t) {
        for (var e, i = this._overwriteProps, n = i.length; - 1 < --n;)(e = t[i[n]]) && "function" == typeof e && (this._mod[i[n]] = e)
    }, n._kill = function (t) {
        var e, i, n = this._props;
        for (e in this._beziers)
            if (e in t)
                for (delete this._beziers[e], delete this._func[e], i = n.length; - 1 < --i;) n[i] === e && n.splice(i, 1);
        if (n = this._autoRotate)
            for (i = n.length; - 1 < --i;) t[n[i][2]] && n.splice(i, 1);
        return this._super._kill.call(this, t)
    }, _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (s, I) {
        var f, k, C, m, q = function () {
                s.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = q.prototype.setRatio
            },
            h = _gsScope._gsDefine.globals,
            g = {},
            t = q.prototype = new s("css");
        (t.constructor = q).version = "1.19.1", q.API = 2, q.defaultTransformPerspective = 0, q.defaultSkewType = "compensated", q.defaultSmoothOrigin = !0, t = "px", q.suffixMap = {
            top: t,
            right: t,
            bottom: t,
            left: t,
            width: t,
            height: t,
            fontSize: t,
            padding: t,
            margin: t,
            perspective: t,
            lineHeight: ""
        };
        var P, _, v, z, y, S, A, O, e, i, M = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
            D = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            b = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            c = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
            E = /(?:\d|\-|\+|=|#|\.)*/g,
            $ = /opacity *= *([^)]*)/i,
            w = /opacity:([^;]*)/i,
            o = /alpha\(opacity *=.+?\)/i,
            x = /^(rgb|hsl)/,
            a = /([A-Z])/g,
            l = /-([a-z])/gi,
            T = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
            u = function (t, e) {
                return e.toUpperCase()
            },
            p = /(?:Left|Right|Width)/i,
            d = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            R = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            j = /,(?=[^\)]*(?:\(|$))/gi,
            L = /[\s,\(]/i,
            F = Math.PI / 180,
            H = 180 / Math.PI,
            N = {},
            n = {
                style: {}
            },
            W = _gsScope.document || {
                createElement: function () {
                    return n
                }
            },
            B = function (t, e) {
                return W.createElementNS ? W.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : W.createElement(t)
            },
            X = B("div"),
            U = B("img"),
            r = q._internals = {
                _specialProps: g
            },
            Y = (_gsScope.navigator || {}).userAgent || "",
            V = (e = Y.indexOf("Android"), i = B("a"), v = -1 !== Y.indexOf("Safari") && -1 === Y.indexOf("Chrome") && (-1 === e || 3 < parseFloat(Y.substr(e + 8, 2))), y = v && parseFloat(Y.substr(Y.indexOf("Version/") + 8, 2)) < 6, z = -1 !== Y.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y)) && (S = parseFloat(RegExp.$1)), !!i && (i.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(i.style.opacity))),
            Z = function (t) {
                return $.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            },
            G = function (t) {
                _gsScope.console && console.log(t)
            },
            Q = "",
            J = "",
            K = function (t, e) {
                var i, n, r = (e = e || X).style;
                if (void 0 !== r[t]) return t;
                for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; - 1 < --n && void 0 === r[i[n] + t];);
                return 0 <= n ? (Q = "-" + (J = 3 === n ? "ms" : i[n]).toLowerCase() + "-", J + t) : null
            },
            tt = W.defaultView ? W.defaultView.getComputedStyle : function () {},
            et = q.getStyle = function (t, e, i, n, r) {
                var s;
                return V || "opacity" !== e ? (!n && t.style[e] ? s = t.style[e] : (i = i || tt(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(a, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : Z(t)
            },
            it = r.convertToPixels = function (t, e, i, n, r) {
                if ("px" === n || !n) return i;
                if ("auto" === n || !i) return 0;
                var s, o, a, l = p.test(e),
                    h = t,
                    c = X.style,
                    u = i < 0,
                    d = 1 === i;
                if (u && (i = -i), d && (i *= 100), "%" === n && -1 !== e.indexOf("border")) s = i / 100 * (l ? t.clientWidth : t.clientHeight);
                else {
                    if (c.cssText = "border:0 solid red;position:" + et(t, "position") + ";line-height:0;", "%" !== n && h.appendChild && "v" !== n.charAt(0) && "rem" !== n) c[l ? "borderLeftWidth" : "borderTopWidth"] = i + n;
                    else {
                        if (o = (h = t.parentNode || W.body)._gsCache, a = I.ticker.frame, o && l && o.time === a) return o.width * i / 100;
                        c[l ? "width" : "height"] = i + n
                    }
                    h.appendChild(X), s = parseFloat(X[l ? "offsetWidth" : "offsetHeight"]), h.removeChild(X), l && "%" === n && !1 !== q.cacheWidths && ((o = h._gsCache = h._gsCache || {}).time = a, o.width = s / i * 100), 0 !== s || r || (s = it(t, e, i, n, !0))
                }
                return d && (s /= 100), u ? -s : s
            },
            nt = r.calculateOffset = function (t, e, i) {
                if ("absolute" !== et(t, "position", i)) return 0;
                var n = "left" === e ? "Left" : "Top",
                    r = et(t, "margin" + n, i);
                return t["offset" + n] - (it(t, e, parseFloat(r), r.replace(E, "")) || 0)
            },
            rt = function (t, e) {
                var i, n, r, s = {};
                if (e = e || tt(t, null))
                    if (i = e.length)
                        for (; - 1 < --i;)(-1 === (r = e[i]).indexOf("-transform") || jt === r) && (s[r.replace(l, u)] = e.getPropertyValue(r));
                    else
                        for (i in e)(-1 === i.indexOf("Transform") || Rt === i) && (s[i] = e[i]);
                else if (e = t.currentStyle || t.style)
                    for (i in e) "string" == typeof i && void 0 === s[i] && (s[i.replace(l, u)] = e[i]);
                return V || (s.opacity = Z(t)), n = Vt(t, e, !1), s.rotation = n.rotation, s.skewX = n.skewX, s.scaleX = n.scaleX, s.scaleY = n.scaleY, s.x = n.x, s.y = n.y, zt && (s.z = n.z, s.rotationX = n.rotationX, s.rotationY = n.rotationY, s.scaleZ = n.scaleZ), s.filters && delete s.filters, s
            },
            st = function (t, e, i, n, r) {
                var s, o, a, l = {},
                    h = t.style;
                for (o in i) "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (s = i[o]) || r && r[o]) && -1 === o.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (l[o] = "auto" !== s || "left" !== o && "top" !== o ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[o] || "" === e[o].replace(c, "") ? s : 0 : nt(t, o), void 0 !== h[o] && (a = new bt(h, o, h[o], a)));
                if (n)
                    for (o in n) "className" !== o && (l[o] = n[o]);
                return {
                    difs: l,
                    firstMPT: a
                }
            },
            ot = {
                width: ["Left", "Right"],
                height: ["Top", "Bottom"]
            },
            at = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
            lt = function (t, e, i) {
                if ("svg" === (t.nodeName + "").toLowerCase()) return (i || tt(t))[e] || 0;
                if (t.getCTM && Xt(t)) return t.getBBox()[e] || 0;
                var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                    r = ot[e],
                    s = r.length;
                for (i = i || tt(t, null); - 1 < --s;) n -= parseFloat(et(t, "padding" + r[s], i, !0)) || 0, n -= parseFloat(et(t, "border" + r[s] + "Width", i, !0)) || 0;
                return n
            },
            ht = function (t, e) {
                if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                (null == t || "" === t) && (t = "0 0");
                var i, n = t.split(" "),
                    r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0],
                    s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1];
                if (3 < n.length && !e) {
                    for (n = t.split(", ").join(",").split(","), t = [], i = 0; i < n.length; i++) t.push(ht(n[i]));
                    return t.join(",")
                }
                return null == s ? s = "center" === r ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t = r + " " + s + (2 < n.length ? " " + n[2] : ""), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== s.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === s.charAt(1), e.ox = parseFloat(r.replace(c, "")), e.oy = parseFloat(s.replace(c, "")), e.v = t), e || t
            },
            ct = function (t, e) {
                return "function" == typeof t && (t = t(O, A)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
            },
            ut = function (t, e) {
                return "function" == typeof t && (t = t(O, A)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
            },
            dt = function (t, e, i, n) {
                var r, s, o, a;
                return "function" == typeof t && (t = t(O, A)), (o = null == t ? e : "number" == typeof t ? t : (360, r = t.split("_"), s = ((a = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(r[0].substr(2)) : parseFloat(r[0])) * (-1 === t.indexOf("rad") ? 1 : H) - (a ? 0 : e), r.length && (n && (n[i] = e + s), -1 !== t.indexOf("short") && ((s %= 360) !== s % 180 && (s = s < 0 ? s + 360 : s - 360)), -1 !== t.indexOf("_cw") && s < 0 ? s = (s + 3599999999640) % 360 - 360 * (s / 360 | 0) : -1 !== t.indexOf("ccw") && 0 < s && (s = (s - 3599999999640) % 360 - 360 * (s / 360 | 0))), e + s)) < 1e-6 && -1e-6 < o && (o = 0), o
            },
            pt = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            },
            ft = function (t, e, i) {
                return 255 * (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
            },
            mt = q.parseColor = function (t, e) {
                var i, n, r, s, o, a, l, h, c, u, d;
                if (t)
                    if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                    else {
                        if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), pt[t]) i = pt[t];
                        else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (n = t.charAt(1)) + n + (r = t.charAt(2)) + r + (s = t.charAt(3)) + s), i = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                        else if ("hsl" === t.substr(0, 3))
                            if (i = d = t.match(M), e) {
                                if (-1 !== t.indexOf("=")) return t.match(D)
                            } else o = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, n = 2 * (l = Number(i[2]) / 100) - (r = l <= .5 ? l * (a + 1) : l + a - l * a), 3 < i.length && (i[3] = Number(t[3])), i[0] = ft(o + 1 / 3, n, r), i[1] = ft(o, n, r), i[2] = ft(o - 1 / 3, n, r);
                        else i = t.match(M) || pt.transparent;
                        i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), 3 < i.length && (i[3] = Number(i[3]))
                    }
                else i = pt.black;
                return e && !d && (n = i[0] / 255, r = i[1] / 255, s = i[2] / 255, l = ((h = Math.max(n, r, s)) + (c = Math.min(n, r, s))) / 2, h === c ? o = a = 0 : (u = h - c, a = .5 < l ? u / (2 - h - c) : u / (h + c), o = h === n ? (r - s) / u + (r < s ? 6 : 0) : h === r ? (s - n) / u + 2 : (n - r) / u + 4, o *= 60), i[0] = o + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), i
            },
            gt = function (t, e) {
                var i, n, r, s = t.match(_t) || [],
                    o = 0,
                    a = s.length ? "" : t;
                for (i = 0; i < s.length; i++) n = s[i], o += (r = t.substr(o, t.indexOf(n, o) - o)).length + n.length, 3 === (n = mt(n, e)).length && n.push(1), a += r + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                return a + t.substr(o)
            },
            _t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (t in pt) _t += "|" + t + "\\b";
        _t = new RegExp(_t + ")", "gi"), q.colorStringFilter = function (t) {
            var e, i = t[0] + t[1];
            _t.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = gt(t[0], e), t[1] = gt(t[1], e)), _t.lastIndex = 0
        }, I.defaultStringFilter || (I.defaultStringFilter = q.colorStringFilter);
        var vt = function (t, e, s, o) {
                if (null == t) return function (t) {
                    return t
                };
                var a, l = e ? (t.match(_t) || [""])[0] : "",
                    h = t.split(l).join("").match(b) || [],
                    c = t.substr(0, t.indexOf(h[0])),
                    u = ")" === t.charAt(t.length - 1) ? ")" : "",
                    d = -1 !== t.indexOf(" ") ? " " : ",",
                    p = h.length,
                    f = 0 < p ? h[0].replace(M, "") : "";
                return p ? a = e ? function (t) {
                    var e, i, n, r;
                    if ("number" == typeof t) t += f;
                    else if (o && j.test(t)) {
                        for (r = t.replace(j, "|").split("|"), n = 0; n < r.length; n++) r[n] = a(r[n]);
                        return r.join(",")
                    }
                    if (e = (t.match(_t) || [l])[0], n = (i = t.split(e).join("").match(b) || []).length, p > n--)
                        for (; ++n < p;) i[n] = s ? i[(n - 1) / 2 | 0] : h[n];
                    return c + i.join(d) + d + e + u + (-1 !== t.indexOf("inset") ? " inset" : "")
                } : function (t) {
                    var e, i, n;
                    if ("number" == typeof t) t += f;
                    else if (o && j.test(t)) {
                        for (i = t.replace(j, "|").split("|"), n = 0; n < i.length; n++) i[n] = a(i[n]);
                        return i.join(",")
                    }
                    if (n = (e = t.match(b) || []).length, p > n--)
                        for (; ++n < p;) e[n] = s ? e[(n - 1) / 2 | 0] : h[n];
                    return c + e.join(d) + u
                } : function (t) {
                    return t
                }
            },
            yt = function (h) {
                return h = h.split(","),
                    function (t, e, i, n, r, s, o) {
                        var a, l = (e + "").split(" ");
                        for (o = {}, a = 0; a < 4; a++) o[h[a]] = l[a] = l[a] || l[(a - 1) / 2 >> 0];
                        return n.parse(t, o, r, s)
                    }
            },
            bt = (r._setPluginRatio = function (t) {
                this.plugin.setRatio(t);
                for (var e, i, n, r, s, o = this.data, a = o.proxy, l = o.firstMPT; l;) e = a[l.v], l.r ? e = Math.round(e) : e < 1e-6 && -1e-6 < e && (e = 0), l.t[l.p] = e, l = l._next;
                if (o.autoRotate && (o.autoRotate.rotation = o.mod ? o.mod(a.rotation, this.t) : a.rotation), 1 === t || 0 === t)
                    for (l = o.firstMPT, s = 1 === t ? "e" : "b"; l;) {
                        if ((i = l.t).type) {
                            if (1 === i.type) {
                                for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                                i[s] = r
                            }
                        } else i[s] = i.s + i.xs0;
                        l = l._next
                    }
            }, function (t, e, i, n, r) {
                this.t = t, this.p = e, this.v = i, this.r = r, n && ((n._prev = this)._next = n)
            }),
            wt = (r._parseToProxy = function (t, e, i, n, r, s) {
                var o, a, l, h, c, u = n,
                    d = {},
                    p = {},
                    f = i._transform,
                    m = N;
                for (i._transform = null, N = e, n = c = i.parse(t, e, n, r), N = m, s && (i._transform = f, u && (u._prev = null, u._prev && (u._prev._next = null))); n && n !== u;) {
                    if (n.type <= 1 && (p[a = n.p] = n.s + n.c, d[a] = n.s, s || (h = new bt(n, "s", a, h, n.r), n.c = 0), 1 === n.type))
                        for (o = n.l; 0 < --o;) l = "xn" + o, p[a = n.p + "_" + l] = n.data[l], d[a] = n[l], s || (h = new bt(n, l, a, h, n.rxp[l]));
                    n = n._next
                }
                return {
                    proxy: d,
                    end: p,
                    firstMPT: h,
                    pt: c
                }
            }, r.CSSPropTween = function (t, e, i, n, r, s, o, a, l, h, c) {
                this.t = t, this.p = e, this.s = i, this.c = n, this.n = o || e, t instanceof wt || m.push(this.n), this.r = a, this.type = s || 0, l && (this.pr = l, f = !0), this.b = void 0 === h ? i : h, this.e = void 0 === c ? i + n : c, r && ((this._next = r)._prev = this)
            }),
            xt = function (t, e, i, n, r, s) {
                var o = new wt(t, e, i, n - i, r, -1, s);
                return o.b = i, o.e = o.xs0 = n, o
            },
            Tt = q.parseComplex = function (t, e, i, n, r, s, o, a, l, h) {
                i = i || s || "", "function" == typeof n && (n = n(O, A)), o = new wt(t, e, 0, 0, o, h ? 2 : 1, null, !1, a, i, n), n += "", r && _t.test(n + i) && (n = [i, n], q.colorStringFilter(n), i = n[0], n = n[1]);
                var c, u, d, p, f, m, g, _, v, y, b, w, x, T = i.split(", ").join(",").split(" "),
                    k = n.split(", ").join(",").split(" "),
                    S = T.length,
                    C = !1 !== P;
                for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (T = T.join(" ").replace(j, ", ").split(" "), k = k.join(" ").replace(j, ", ").split(" "), S = T.length), S !== k.length && (S = (T = (s || "").split(" ")).length), o.plugin = l, o.setRatio = h, c = _t.lastIndex = 0; c < S; c++)
                    if (p = T[c], f = k[c], (_ = parseFloat(p)) || 0 === _) o.appendXtra("", _, ct(f, _), f.replace(D, ""), C && -1 !== f.indexOf("px"), !0);
                    else if (r && _t.test(p)) w = ")" + ((w = f.indexOf(")") + 1) ? f.substr(w) : ""), x = -1 !== f.indexOf("hsl") && V, p = mt(p, x), f = mt(f, x), (v = 6 < p.length + f.length) && !V && 0 === f[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(k[c]).join("transparent")) : (V || (v = !1), x ? o.appendXtra(v ? "hsla(" : "hsl(", p[0], ct(f[0], p[0]), ",", !1, !0).appendXtra("", p[1], ct(f[1], p[1]), "%,", !1).appendXtra("", p[2], ct(f[2], p[2]), v ? "%," : "%" + w, !1) : o.appendXtra(v ? "rgba(" : "rgb(", p[0], f[0] - p[0], ",", !0, !0).appendXtra("", p[1], f[1] - p[1], ",", !0).appendXtra("", p[2], f[2] - p[2], v ? "," : w, !0), v && (p = p.length < 4 ? 1 : p[3], o.appendXtra("", p, (f.length < 4 ? 1 : f[3]) - p, w, !1))), _t.lastIndex = 0;
                    else if (m = p.match(M)) {
                        if (!(g = f.match(D)) || g.length !== m.length) return o;
                        for (u = d = 0; u < m.length; u++) b = m[u], y = p.indexOf(b, d), o.appendXtra(p.substr(d, y - d), Number(b), ct(g[u], b), "", C && "px" === p.substr(y + b.length, 2), 0 === u), d = y + b.length;
                        o["xs" + o.l] += p.substr(d)
                    } else o["xs" + o.l] += o.l || o["xs" + o.l] ? " " + f : f;
                if (-1 !== n.indexOf("=") && o.data) {
                    for (w = o.xs0 + o.data.s, c = 1; c < o.l; c++) w += o["xs" + c] + o.data["xn" + c];
                    o.e = w + o["xs" + c]
                }
                return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
            },
            kt = 9;
        for ((t = wt.prototype).l = t.pr = 0; 0 < --kt;) t["xn" + kt] = 0, t["xs" + kt] = "";
        t.xs0 = "", t._next = t._prev = t.xfirst = t.data = t.plugin = t.setRatio = t.rxp = null, t.appendXtra = function (t, e, i, n, r, s) {
            var o = this,
                a = o.l;
            return o["xs" + a] += s && (a || o["xs" + a]) ? " " + t : t || "", i || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = n || "", 0 < a ? (o.data["xn" + a] = e + i, o.rxp["xn" + a] = r, o["xn" + a] = e, o.plugin || (o.xfirst = new wt(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, r, o.pr), o.xfirst.xs0 = 0)) : (o.data = {
                s: e + i
            }, o.rxp = {}, o.s = e, o.c = i, o.r = r)) : o["xs" + a] += e + (n || ""), o
        };
        var St = function (t, e) {
                e = e || {}, this.p = e.prefix && K(t) || t, g[t] = g[this.p] = this, this.format = e.formatter || vt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
            },
            Ct = r._registerComplexSpecialProp = function (t, e, i) {
                "object" != typeof e && (e = {
                    parser: i
                });
                var n, r = t.split(","),
                    s = e.defaultValue;
                for (i = i || [s], n = 0; n < r.length; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || s, new St(r[n], e)
            },
            Pt = r._registerPluginProp = function (t) {
                if (!g[t]) {
                    var l = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                    Ct(t, {
                        parser: function (t, e, i, n, r, s, o) {
                            var a = h.com.greensock.plugins[l];
                            return a ? (a._cssRegister(), g[i].parse(t, e, i, n, r, s, o)) : (G("Error: " + l + " js file not loaded."), r)
                        }
                    })
                }
            };
        (t = St.prototype).parseComplex = function (t, e, i, n, r, s) {
            var o, a, l, h, c, u, d = this.keyword;
            if (this.multi && (j.test(i) || j.test(e) ? (a = e.replace(j, "|").split("|"), l = i.replace(j, "|").split("|")) : d && (a = [e], l = [i])), l) {
                for (h = l.length > a.length ? l.length : a.length, o = 0; o < h; o++) e = a[o] = a[o] || this.dflt, i = l[o] = l[o] || this.dflt, d && ((c = e.indexOf(d)) !== (u = i.indexOf(d)) && (-1 === u ? a[o] = a[o].split(d).join("") : -1 === c && (a[o] += " " + d)));
                e = a.join(", "), i = l.join(", ")
            }
            return Tt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s)
        }, t.parse = function (t, e, i, n, r, s, o) {
            return this.parseComplex(t.style, this.format(et(t, this.p, C, !1, this.dflt)), this.format(e), r, s)
        }, q.registerSpecialProp = function (t, l, h) {
            Ct(t, {
                parser: function (t, e, i, n, r, s, o) {
                    var a = new wt(t, i, 0, 0, r, 2, i, !1, h);
                    return a.plugin = s, a.setRatio = l(t, e, n._tween, i), a
                },
                priority: h
            })
        }, q.useSVGTransformAttr = !0;
        var At, Ot, Mt, Dt, Et, $t = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
            Rt = K("transform"),
            jt = Q + "transform",
            Lt = K("transformOrigin"),
            zt = null !== K("perspective"),
            Ft = r.Transform = function () {
                this.perspective = parseFloat(q.defaultTransformPerspective) || 0, this.force3D = !(!1 === q.defaultForce3D || !zt) && (q.defaultForce3D || "auto")
            },
            Nt = _gsScope.SVGElement,
            It = function (t, e, i) {
                var n, r = W.createElementNS("http://www.w3.org/2000/svg", t),
                    s = /([a-z])([A-Z])/g;
                for (n in i) r.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n]);
                return e.appendChild(r), r
            },
            qt = W.documentElement || {},
            Ht = (Et = S || /Android/i.test(Y) && !_gsScope.chrome, W.createElementNS && !Et && (Ot = It("svg", qt), Dt = (Mt = It("rect", Ot, {
                width: 100,
                height: 50,
                x: 100
            })).getBoundingClientRect().width, Mt.style[Lt] = "50% 50%", Mt.style[Rt] = "scaleX(0.5)", Et = Dt === Mt.getBoundingClientRect().width && !(z && zt), qt.removeChild(Ot)), Et),
            Wt = function (t, e, i, n, r, s) {
                var o, a, l, h, c, u, d, p, f, m, g, _, v, y, b = t._gsTransform,
                    w = Yt(t, !0);
                b && (v = b.xOrigin, y = b.yOrigin), (!n || (o = n.split(" ")).length < 2) && (0 === (d = t.getBBox()).x && 0 === d.y && d.width + d.height === 0 && (d = {
                    x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                    y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                    width: 0,
                    height: 0
                }), o = [(-1 !== (e = ht(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * d.width : parseFloat(e[0])) + d.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * d.height : parseFloat(e[1])) + d.y]), i.xOrigin = h = parseFloat(o[0]), i.yOrigin = c = parseFloat(o[1]), n && w !== Ut && (u = w[0], d = w[1], p = w[2], f = w[3], m = w[4], g = w[5], (_ = u * f - d * p) && (a = h * (f / _) + c * (-p / _) + (p * g - f * m) / _, l = h * (-d / _) + c * (u / _) - (u * g - d * m) / _, h = i.xOrigin = o[0] = a, c = i.yOrigin = o[1] = l)), b && (s && (i.xOffset = b.xOffset, i.yOffset = b.yOffset, b = i), r || !1 !== r && !1 !== q.defaultSmoothOrigin ? (a = h - v, l = c - y, b.xOffset += a * w[0] + l * w[2] - a, b.yOffset += a * w[1] + l * w[3] - l) : b.xOffset = b.yOffset = 0), s || t.setAttribute("data-svg-origin", o.join(" "))
            },
            Bt = function (t) {
                var e, i = B("svg", this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                    n = this.parentNode,
                    r = this.nextSibling,
                    s = this.style.cssText;
                if (qt.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
                    e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Bt
                } catch (t) {} else this._originalGetBBox && (e = this._originalGetBBox());
                return r ? n.insertBefore(this, r) : n.appendChild(this), qt.removeChild(i), this.style.cssText = s, e
            },
            Xt = function (t) {
                return !(!(Nt && t.getCTM && function (e) {
                    try {
                        return e.getBBox()
                    } catch (t) {
                        return Bt.call(e, !0)
                    }
                }(t)) || t.parentNode && !t.ownerSVGElement)
            },
            Ut = [1, 0, 0, 1, 0, 0],
            Yt = function (t, e) {
                var i, n, r, s, o, a, l = t._gsTransform || new Ft,
                    h = t.style;
                if (Rt ? n = et(t, jt, null, !0) : t.currentStyle && (n = (n = t.currentStyle.filter.match(d)) && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), (i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n) && Rt && ((a = "none" === tt(t).display) || !t.parentNode) && (a && (s = h.display, h.display = "block"), t.parentNode || (o = 1, qt.appendChild(t)), i = !(n = et(t, jt, null, !0)) || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, s ? h.display = s : a && Jt(h, "display"), o && qt.removeChild(t)), (l.svg || t.getCTM && Xt(t)) && (i && -1 !== (h[Rt] + "").indexOf("matrix") && (n = h[Rt], i = 0), r = t.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (n = r, i = 0) : -1 !== r.indexOf("translate") && (n = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Ut;
                for (r = (n || "").match(M) || [], kt = r.length; - 1 < --kt;) s = Number(r[kt]), r[kt] = (o = s - (s |= 0)) ? (1e5 * o + (o < 0 ? -.5 : .5) | 0) / 1e5 + s : s;
                return e && 6 < r.length ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
            },
            Vt = r.getTransform = function (t, e, i, n) {
                if (t._gsTransform && i && !n) return t._gsTransform;
                var r, s, o, a, l, h, c = i && t._gsTransform || new Ft,
                    u = c.scaleX < 0,
                    d = zt && (parseFloat(et(t, Lt, e, !1, "0 0 0").split(" ")[2]) || c.zOrigin) || 0,
                    p = parseFloat(q.defaultTransformPerspective) || 0;
                if (c.svg = !(!t.getCTM || !Xt(t)), c.svg && (Wt(t, et(t, Lt, e, !1, "50% 50%") + "", c, t.getAttribute("data-svg-origin")), At = q.useSVGTransformAttr || Ht), (r = Yt(t)) !== Ut) {
                    if (16 === r.length) {
                        var f, m, g, _, v, y = r[0],
                            b = r[1],
                            w = r[2],
                            x = r[3],
                            T = r[4],
                            k = r[5],
                            S = r[6],
                            C = r[7],
                            P = r[8],
                            A = r[9],
                            O = r[10],
                            M = r[12],
                            D = r[13],
                            E = r[14],
                            $ = r[11],
                            R = Math.atan2(S, O);
                        c.zOrigin && (M = P * (E = -c.zOrigin) - r[12], D = A * E - r[13], E = O * E + c.zOrigin - r[14]), c.rotationX = R * H, R && (f = T * (_ = Math.cos(-R)) + P * (v = Math.sin(-R)), m = k * _ + A * v, g = S * _ + O * v, P = T * -v + P * _, A = k * -v + A * _, O = S * -v + O * _, $ = C * -v + $ * _, T = f, k = m, S = g), R = Math.atan2(-w, O), c.rotationY = R * H, R && (m = b * (_ = Math.cos(-R)) - A * (v = Math.sin(-R)), g = w * _ - O * v, A = b * v + A * _, O = w * v + O * _, $ = x * v + $ * _, y = f = y * _ - P * v, b = m, w = g), R = Math.atan2(b, y), c.rotation = R * H, R && (y = y * (_ = Math.cos(-R)) + T * (v = Math.sin(-R)), m = b * _ + k * v, k = b * -v + k * _, S = w * -v + S * _, b = m), c.rotationX && 359.9 < Math.abs(c.rotationX) + Math.abs(c.rotation) && (c.rotationX = c.rotation = 0, c.rotationY = 180 - c.rotationY), c.scaleX = (1e5 * Math.sqrt(y * y + b * b) + .5 | 0) / 1e5, c.scaleY = (1e5 * Math.sqrt(k * k + A * A) + .5 | 0) / 1e5, c.scaleZ = (1e5 * Math.sqrt(S * S + O * O) + .5 | 0) / 1e5, c.rotationX || c.rotationY ? c.skewX = 0 : (c.skewX = T || k ? Math.atan2(T, k) * H + c.rotation : c.skewX || 0, 90 < Math.abs(c.skewX) && Math.abs(c.skewX) < 270 && (u ? (c.scaleX *= -1, c.skewX += c.rotation <= 0 ? 180 : -180, c.rotation += c.rotation <= 0 ? 180 : -180) : (c.scaleY *= -1, c.skewX += c.skewX <= 0 ? 180 : -180))), c.perspective = $ ? 1 / ($ < 0 ? -$ : $) : 0, c.x = M, c.y = D, c.z = E, c.svg && (c.x -= c.xOrigin - (c.xOrigin * y - c.yOrigin * T), c.y -= c.yOrigin - (c.yOrigin * b - c.xOrigin * k))
                    } else if (!zt || n || !r.length || c.x !== r[4] || c.y !== r[5] || !c.rotationX && !c.rotationY) {
                        var j = 6 <= r.length,
                            L = j ? r[0] : 1,
                            z = r[1] || 0,
                            F = r[2] || 0,
                            N = j ? r[3] : 1;
                        c.x = r[4] || 0, c.y = r[5] || 0, o = Math.sqrt(L * L + z * z), a = Math.sqrt(N * N + F * F), l = L || z ? Math.atan2(z, L) * H : c.rotation || 0, h = F || N ? Math.atan2(F, N) * H + l : c.skewX || 0, 90 < Math.abs(h) && Math.abs(h) < 270 && (u ? (o *= -1, h += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (a *= -1, h += h <= 0 ? 180 : -180)), c.scaleX = o, c.scaleY = a, c.rotation = l, c.skewX = h, zt && (c.rotationX = c.rotationY = c.z = 0, c.perspective = p, c.scaleZ = 1), c.svg && (c.x -= c.xOrigin - (c.xOrigin * L + c.yOrigin * F), c.y -= c.yOrigin - (c.xOrigin * z + c.yOrigin * N))
                    }
                    for (s in c.zOrigin = d, c) c[s] < 2e-5 && -2e-5 < c[s] && (c[s] = 0)
                }
                return i && ((t._gsTransform = c).svg && (At && t.style[Rt] ? I.delayedCall(.001, function () {
                    Jt(t.style, Rt)
                }) : !At && t.getAttribute("transform") && I.delayedCall(.001, function () {
                    t.removeAttribute("transform")
                }))), c
            },
            Zt = function (t) {
                var e, i, n = this.data,
                    r = -n.rotation * F,
                    s = r + n.skewX * F,
                    o = (Math.cos(r) * n.scaleX * 1e5 | 0) / 1e5,
                    a = (Math.sin(r) * n.scaleX * 1e5 | 0) / 1e5,
                    l = (Math.sin(s) * -n.scaleY * 1e5 | 0) / 1e5,
                    h = (Math.cos(s) * n.scaleY * 1e5 | 0) / 1e5,
                    c = this.t.style,
                    u = this.t.currentStyle;
                if (u) {
                    i = a, a = -l, l = -i, e = u.filter, c.filter = "";
                    var d, p, f = this.t.offsetWidth,
                        m = this.t.offsetHeight,
                        g = "absolute" !== u.position,
                        _ = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + a + ", M21=" + l + ", M22=" + h,
                        v = n.x + f * n.xPercent / 100,
                        y = n.y + m * n.yPercent / 100;
                    if (null != n.ox && (v += (d = (n.oxp ? f * n.ox * .01 : n.ox) - f / 2) - (d * o + (p = (n.oyp ? m * n.oy * .01 : n.oy) - m / 2) * a), y += p - (d * l + p * h)), g ? _ += ", Dx=" + ((d = f / 2) - (d * o + (p = m / 2) * a) + v) + ", Dy=" + (p - (d * l + p * h) + y) + ")" : _ += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? c.filter = e.replace(R, _) : c.filter = _ + " " + e, (0 === t || 1 === t) && 1 === o && 0 === a && 0 === l && 1 === h && (g && -1 === _.indexOf("Dx=0, Dy=0") || $.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && c.removeAttribute("filter")), !g) {
                        var b, w, x, T = S < 8 ? 1 : -1;
                        for (d = n.ieOffsetX || 0, p = n.ieOffsetY || 0, n.ieOffsetX = Math.round((f - ((o < 0 ? -o : o) * f + (a < 0 ? -a : a) * m)) / 2 + v), n.ieOffsetY = Math.round((m - ((h < 0 ? -h : h) * m + (l < 0 ? -l : l) * f)) / 2 + y), kt = 0; kt < 4; kt++) x = (i = -1 !== (b = u[w = at[kt]]).indexOf("px") ? parseFloat(b) : it(this.t, w, parseFloat(b), b.replace(E, "")) || 0) !== n[w] ? kt < 2 ? -n.ieOffsetX : -n.ieOffsetY : kt < 2 ? d - n.ieOffsetX : p - n.ieOffsetY, c[w] = (n[w] = Math.round(i - x * (0 === kt || 2 === kt ? 1 : T))) + "px"
                    }
                }
            },
            Gt = r.set3DTransformRatio = r.setTransformRatio = function (t) {
                var e, i, n, r, s, o, a, l, h, c, u, d, p, f, m, g, _, v, y, b, w = this.data,
                    x = this.t.style,
                    T = w.rotation,
                    k = w.rotationX,
                    S = w.rotationY,
                    C = w.scaleX,
                    P = w.scaleY,
                    A = w.scaleZ,
                    O = w.x,
                    M = w.y,
                    D = w.z,
                    E = w.svg,
                    $ = w.perspective,
                    R = w.force3D,
                    j = w.skewY,
                    L = w.skewX;
                if (j && (L += j, T += j), !((1 !== t && 0 !== t || "auto" !== R || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && R || D || $ || S || k || 1 !== A) || At && E || !zt) T || L || E ? (T *= F, b = L * F, 1e5, i = Math.cos(T) * C, s = Math.sin(T) * C, n = Math.sin(T - b) * -P, o = Math.cos(T - b) * P, b && "simple" === w.skewType && (e = Math.tan(b - j * F), n *= e = Math.sqrt(1 + e * e), o *= e, j && (e = Math.tan(j * F), i *= e = Math.sqrt(1 + e * e), s *= e)), E && (O += w.xOrigin - (w.xOrigin * i + w.yOrigin * n) + w.xOffset, M += w.yOrigin - (w.xOrigin * s + w.yOrigin * o) + w.yOffset, At && (w.xPercent || w.yPercent) && (m = this.t.getBBox(), O += .01 * w.xPercent * m.width, M += .01 * w.yPercent * m.height), O < (m = 1e-6) && -m < O && (O = 0), M < m && -m < M && (M = 0)), y = (1e5 * i | 0) / 1e5 + "," + (1e5 * s | 0) / 1e5 + "," + (1e5 * n | 0) / 1e5 + "," + (1e5 * o | 0) / 1e5 + "," + O + "," + M + ")", E && At ? this.t.setAttribute("transform", "matrix(" + y) : x[Rt] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix(" : "matrix(") + y) : x[Rt] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix(" : "matrix(") + C + ",0,0," + P + "," + O + "," + M + ")";
                else {
                    if (z && (C < (m = 1e-4) && -m < C && (C = A = 2e-5), P < m && -m < P && (P = A = 2e-5), !$ || w.z || w.rotationX || w.rotationY || ($ = 0)), T || L) T *= F, g = i = Math.cos(T), _ = s = Math.sin(T), L && (T -= L * F, g = Math.cos(T), _ = Math.sin(T), "simple" === w.skewType && (e = Math.tan((L - j) * F), g *= e = Math.sqrt(1 + e * e), _ *= e, w.skewY && (e = Math.tan(j * F), i *= e = Math.sqrt(1 + e * e), s *= e))), n = -_, o = g;
                    else {
                        if (!(S || k || 1 !== A || $ || E)) return void(x[Rt] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) translate3d(" : "translate3d(") + O + "px," + M + "px," + D + "px)" + (1 !== C || 1 !== P ? " scale(" + C + "," + P + ")" : ""));
                        i = o = 1, n = s = 0
                    }
                    c = 1, r = a = l = h = u = d = 0, p = $ ? -1 / $ : 0, f = w.zOrigin, m = 1e-6, ",", "0", (T = S * F) && (g = Math.cos(T), u = p * (l = -(_ = Math.sin(T))), r = i * _, a = s * _, p *= c = g, i *= g, s *= g), (T = k * F) && (e = n * (g = Math.cos(T)) + r * (_ = Math.sin(T)), v = o * g + a * _, h = c * _, d = p * _, r = n * -_ + r * g, a = o * -_ + a * g, c *= g, p *= g, n = e, o = v), 1 !== A && (r *= A, a *= A, c *= A, p *= A), 1 !== P && (n *= P, o *= P, h *= P, d *= P), 1 !== C && (i *= C, s *= C, l *= C, u *= C), (f || E) && (f && (O += r * -f, M += a * -f, D += c * -f + f), E && (O += w.xOrigin - (w.xOrigin * i + w.yOrigin * n) + w.xOffset, M += w.yOrigin - (w.xOrigin * s + w.yOrigin * o) + w.yOffset), O < m && -m < O && (O = "0"), M < m && -m < M && (M = "0"), D < m && -m < D && (D = 0)), y = w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix3d(" : "matrix3d(", y += (i < m && -m < i ? "0" : i) + "," + (s < m && -m < s ? "0" : s) + "," + (l < m && -m < l ? "0" : l), y += "," + (u < m && -m < u ? "0" : u) + "," + (n < m && -m < n ? "0" : n) + "," + (o < m && -m < o ? "0" : o), k || S || 1 !== A ? (y += "," + (h < m && -m < h ? "0" : h) + "," + (d < m && -m < d ? "0" : d) + "," + (r < m && -m < r ? "0" : r), y += "," + (a < m && -m < a ? "0" : a) + "," + (c < m && -m < c ? "0" : c) + "," + (p < m && -m < p ? "0" : p) + ",") : y += ",0,0,0,0,1,0,", y += O + "," + M + "," + D + "," + ($ ? 1 + -D / $ : 1) + ")", x[Rt] = y
                }
            };
        (t = Ft.prototype).x = t.y = t.z = t.skewX = t.skewY = t.rotation = t.rotationX = t.rotationY = t.zOrigin = t.xPercent = t.yPercent = t.xOffset = t.yOffset = 0, t.scaleX = t.scaleY = t.scaleZ = 1, Ct("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function (t, e, i, n, r, s, o) {
                if (n._lastParsedTransform === o) return r;
                var a, l = (n._lastParsedTransform = o).scale && "function" == typeof o.scale ? o.scale : 0;
                "function" == typeof o[i] && (a = o[i], o[i] = e), l && (o.scale = l(O, t));
                var h, c, u, d, p, f, m, g, _, v = t._gsTransform,
                    y = t.style,
                    b = $t.length,
                    w = o,
                    x = {},
                    T = "transformOrigin",
                    k = Vt(t, C, !0, w.parseTransform),
                    S = w.transform && ("function" == typeof w.transform ? w.transform(O, A) : w.transform);
                if (n._transform = k, S && "string" == typeof S && Rt)(c = X.style)[Rt] = S, c.display = "block", c.position = "absolute", W.body.appendChild(X), h = Vt(X, null, !1), k.svg && (f = k.xOrigin, m = k.yOrigin, h.x -= k.xOffset, h.y -= k.yOffset, (w.transformOrigin || w.svgOrigin) && (S = {}, Wt(t, ht(w.transformOrigin), S, w.svgOrigin, w.smoothOrigin, !0), f = S.xOrigin, m = S.yOrigin, h.x -= S.xOffset - k.xOffset, h.y -= S.yOffset - k.yOffset), (f || m) && (g = Yt(X, !0), h.x -= f - (f * g[0] + m * g[2]), h.y -= m - (f * g[1] + m * g[3]))), W.body.removeChild(X), h.perspective || (h.perspective = k.perspective), null != w.xPercent && (h.xPercent = ut(w.xPercent, k.xPercent)), null != w.yPercent && (h.yPercent = ut(w.yPercent, k.yPercent));
                else if ("object" == typeof w) {
                    if (h = {
                        scaleX: ut(null != w.scaleX ? w.scaleX : w.scale, k.scaleX),
                        scaleY: ut(null != w.scaleY ? w.scaleY : w.scale, k.scaleY),
                        scaleZ: ut(w.scaleZ, k.scaleZ),
                        x: ut(w.x, k.x),
                        y: ut(w.y, k.y),
                        z: ut(w.z, k.z),
                        xPercent: ut(w.xPercent, k.xPercent),
                        yPercent: ut(w.yPercent, k.yPercent),
                        perspective: ut(w.transformPerspective, k.perspective)
                    }, null != (p = w.directionalRotation))
                        if ("object" == typeof p)
                            for (c in p) w[c] = p[c];
                        else w.rotation = p;
                    "string" == typeof w.x && -1 !== w.x.indexOf("%") && (h.x = 0, h.xPercent = ut(w.x, k.xPercent)), "string" == typeof w.y && -1 !== w.y.indexOf("%") && (h.y = 0, h.yPercent = ut(w.y, k.yPercent)), h.rotation = dt("rotation" in w ? w.rotation : "shortRotation" in w ? w.shortRotation + "_short" : "rotationZ" in w ? w.rotationZ : k.rotation, k.rotation, "rotation", x), zt && (h.rotationX = dt("rotationX" in w ? w.rotationX : "shortRotationX" in w ? w.shortRotationX + "_short" : k.rotationX || 0, k.rotationX, "rotationX", x), h.rotationY = dt("rotationY" in w ? w.rotationY : "shortRotationY" in w ? w.shortRotationY + "_short" : k.rotationY || 0, k.rotationY, "rotationY", x)), h.skewX = dt(w.skewX, k.skewX), h.skewY = dt(w.skewY, k.skewY)
                }
                for (zt && null != w.force3D && (k.force3D = w.force3D, d = !0), k.skewType = w.skewType || k.skewType || q.defaultSkewType, (u = k.force3D || k.z || k.rotationX || k.rotationY || h.z || h.rotationX || h.rotationY || h.perspective) || null == w.scale || (h.scaleZ = 1); - 1 < --b;)(1e-6 < (S = h[_ = $t[b]] - k[_]) || S < -1e-6 || null != w[_] || null != N[_]) && (d = !0, r = new wt(k, _, k[_], S, r), _ in x && (r.e = x[_]), r.xs0 = 0, r.plugin = s, n._overwriteProps.push(r.n));
                return S = w.transformOrigin, k.svg && (S || w.svgOrigin) && (f = k.xOffset, m = k.yOffset, Wt(t, ht(S), h, w.svgOrigin, w.smoothOrigin), r = xt(k, "xOrigin", (v ? k : h).xOrigin, h.xOrigin, r, T), r = xt(k, "yOrigin", (v ? k : h).yOrigin, h.yOrigin, r, T), (f !== k.xOffset || m !== k.yOffset) && (r = xt(k, "xOffset", v ? f : k.xOffset, k.xOffset, r, T), r = xt(k, "yOffset", v ? m : k.yOffset, k.yOffset, r, T)), S = "0px 0px"), (S || zt && u && k.zOrigin) && (Rt ? (d = !0, _ = Lt, S = (S || et(t, _, C, !1, "50% 50%")) + "", (r = new wt(y, _, 0, 0, r, -1, T)).b = y[_], r.plugin = s, zt ? (c = k.zOrigin, S = S.split(" "), k.zOrigin = (2 < S.length && (0 === c || "0px" !== S[2]) ? parseFloat(S[2]) : c) || 0, r.xs0 = r.e = S[0] + " " + (S[1] || "50%") + " 0px", (r = new wt(k, "zOrigin", 0, 0, r, -1, r.n)).b = c, r.xs0 = r.e = k.zOrigin) : r.xs0 = r.e = S) : ht(S + "", k)), d && (n._transformType = k.svg && At || !u && 3 !== this._transformType ? 2 : 3), a && (o[i] = a), l && (o.scale = l), r
            },
            prefix: !0
        }), Ct("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }), Ct("borderRadius", {
            defaultValue: "0px",
            parser: function (t, e, i, n, r, s) {
                e = this.format(e);
                var o, a, l, h, c, u, d, p, f, m, g, _, v, y, b, w, x = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    T = t.style;
                for (f = parseFloat(t.offsetWidth), m = parseFloat(t.offsetHeight), o = e.split(" "), a = 0; a < x.length; a++) this.p.indexOf("border") && (x[a] = K(x[a])), -1 !== (c = h = et(t, x[a], C, !1, "0px")).indexOf(" ") && (c = (h = c.split(" "))[0], h = h[1]), u = l = o[a], d = parseFloat(c), _ = c.substr((d + "").length), "" === (g = (v = "=" === u.charAt(1)) ? (p = parseInt(u.charAt(0) + "1", 10), u = u.substr(2), p *= parseFloat(u), u.substr((p + "").length - (p < 0 ? 1 : 0)) || "") : (p = parseFloat(u), u.substr((p + "").length))) && (g = k[i] || _), g !== _ && (y = it(t, "borderLeft", d, _), b = it(t, "borderTop", d, _), h = "%" === g ? (c = y / f * 100 + "%", b / m * 100 + "%") : "em" === g ? (c = y / (w = it(t, "borderLeft", 1, "em")) + "em", b / w + "em") : (c = y + "px", b + "px"), v && (u = parseFloat(c) + p + g, l = parseFloat(h) + p + g)), r = Tt(T, x[a], c + " " + h, u + " " + l, !1, "0px", r);
                return r
            },
            prefix: !0,
            formatter: vt("0px 0px 0px 0px", !1, !0)
        }), Ct("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
            defaultValue: "0px",
            parser: function (t, e, i, n, r, s) {
                return Tt(t.style, i, this.format(et(t, i, C, !1, "0px 0px")), this.format(e), !1, "0px", r)
            },
            prefix: !0,
            formatter: vt("0px 0px", !1, !0)
        }), Ct("backgroundPosition", {
            defaultValue: "0 0",
            parser: function (t, e, i, n, r, s) {
                var o, a, l, h, c, u, d = "background-position",
                    p = C || tt(t, null),
                    f = this.format((p ? S ? p.getPropertyValue(d + "-x") + " " + p.getPropertyValue(d + "-y") : p.getPropertyValue(d) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                    m = this.format(e);
                if (-1 !== f.indexOf("%") != (-1 !== m.indexOf("%")) && m.split(",").length < 2 && ((u = et(t, "backgroundImage").replace(T, "")) && "none" !== u)) {
                    for (o = f.split(" "), a = m.split(" "), U.setAttribute("src", u), l = 2; - 1 < --l;)(h = -1 !== (f = o[l]).indexOf("%")) !== (-1 !== a[l].indexOf("%")) && (c = 0 === l ? t.offsetWidth - U.width : t.offsetHeight - U.height, o[l] = h ? parseFloat(f) / 100 * c + "px" : parseFloat(f) / c * 100 + "%");
                    f = o.join(" ")
                }
                return this.parseComplex(t.style, f, m, r, s)
            },
            formatter: ht
        }), Ct("backgroundSize", {
            defaultValue: "0 0",
            formatter: function (t) {
                return ht(-1 === (t += "").indexOf(" ") ? t + " " + t : t)
            }
        }), Ct("perspective", {
            defaultValue: "0px",
            prefix: !0
        }), Ct("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }), Ct("transformStyle", {
            prefix: !0
        }), Ct("backfaceVisibility", {
            prefix: !0
        }), Ct("userSelect", {
            prefix: !0
        }), Ct("margin", {
            parser: yt("marginTop,marginRight,marginBottom,marginLeft")
        }), Ct("padding", {
            parser: yt("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }), Ct("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function (t, e, i, n, r, s) {
                var o, a, l;
                return e = S < 9 ? (a = t.currentStyle, l = S < 8 ? " " : ",", o = "rect(" + a.clipTop + l + a.clipRight + l + a.clipBottom + l + a.clipLeft + ")", this.format(e).split(",").join(l)) : (o = this.format(et(t, this.p, C, !1, this.dflt)), this.format(e)), this.parseComplex(t.style, o, e, r, s)
            }
        }), Ct("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }), Ct("autoRound,strictUnits", {
            parser: function (t, e, i, n, r) {
                return r
            }
        }), Ct("border", {
            defaultValue: "0px solid #000",
            parser: function (t, e, i, n, r, s) {
                var o = et(t, "borderTopWidth", C, !1, "0px"),
                    a = this.format(e).split(" "),
                    l = a[0].replace(E, "");
                return "px" !== l && (o = parseFloat(o) / it(t, "borderTopWidth", 1, l) + l), this.parseComplex(t.style, this.format(o + " " + et(t, "borderTopStyle", C, !1, "solid") + " " + et(t, "borderTopColor", C, !1, "#000")), a.join(" "), r, s)
            },
            color: !0,
            formatter: function (t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(_t) || ["#000"])[0]
            }
        }), Ct("borderWidth", {
            parser: yt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }), Ct("float,cssFloat,styleFloat", {
            parser: function (t, e, i, n, r, s) {
                var o = t.style,
                    a = "cssFloat" in o ? "cssFloat" : "styleFloat";
                return new wt(o, a, 0, 0, r, -1, i, !1, 0, o[a], e)
            }
        });
        var Qt = function (t) {
            var e, i = this.t,
                n = i.filter || et(this.data, "filter") || "",
                r = this.s + this.c * t | 0;
            100 === r && (e = -1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), !et(this.data, "filter")) : (i.filter = n.replace(o, ""), !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace($, "opacity=" + r))
        };
        Ct("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function (t, e, i, n, r, s) {
                var o = parseFloat(et(t, "opacity", C, !1, "1")),
                    a = t.style,
                    l = "autoAlpha" === i;
                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), l && 1 === o && "hidden" === et(t, "visibility", C) && 0 !== e && (o = 0), V ? r = new wt(a, "opacity", o, e - o, r) : ((r = new wt(a, "opacity", 100 * o, 100 * (e - o), r)).xn1 = l ? 1 : 0, a.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = s, r.setRatio = Qt), l && ((r = new wt(a, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit", n._overwriteProps.push(r.n), n._overwriteProps.push(i)), r
            }
        });
        var Jt = function (t, e) {
                e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(a, "-$1").toLowerCase())) : t.removeAttribute(e))
            },
            Kt = function (t) {
                if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                    this.t.setAttribute("class", 0 === t ? this.b : this.e);
                    for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Jt(i, e.p), e = e._next;
                    1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
            };
        Ct("className", {
            parser: function (t, e, i, n, r, s, o) {
                var a, l, h, c, u, d = t.getAttribute("class") || "",
                    p = t.style.cssText;
                if ((r = n._classNamePT = new wt(t, i, 0, 0, r, 2)).setRatio = Kt, r.pr = -11, f = !0, r.b = d, l = rt(t, C), h = t._gsClassPT) {
                    for (c = {}, u = h.data; u;) c[u.p] = 1, u = u._next;
                    h.setRatio(1)
                }
                return (t._gsClassPT = r).e = "=" !== e.charAt(1) ? e : d.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", r.e), a = st(t, l, rt(t), o, c), t.setAttribute("class", d), r.data = a.firstMPT, t.style.cssText = p, r.xfirst = n.parse(t, a.difs, r, s)
            }
        });
        var te = function (t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e, i, n, r, s, o = this.t.style,
                    a = g.transform.parse;
                if ("all" === this.e) r = !(o.cssText = "");
                else
                    for (n = (e = this.e.split(" ").join("").split(",")).length; - 1 < --n;) i = e[n], g[i] && (g[i].parse === a ? r = !0 : i = "transformOrigin" === i ? Lt : g[i].p), Jt(o, i);
                r && (Jt(o, Rt), (s = this.t._gsTransform) && (s.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
            }
        };
        for (Ct("clearProps", {
            parser: function (t, e, i, n, r) {
                return (r = new wt(t, i, 0, 0, r, 2)).setRatio = te, r.e = e, r.pr = -10, r.data = n._tween, f = !0, r
            }
        }), t = "bezier,throwProps,physicsProps,physics2D".split(","), kt = t.length; kt--;) Pt(t[kt]);
        (t = q.prototype)._firstPT = t._lastParsedTransform = t._transform = null, t._onInitTween = function (t, e, i, n) {
            if (!t.nodeType) return !1;
            this._target = A = t, this._tween = i, this._vars = e, O = n, P = e.autoRound, f = !1, k = e.suffixMap || q.suffixMap, C = tt(t, ""), m = this._overwriteProps;
            var r, s, o, a, l, h, c, u, d, p = t.style;
            if (_ && "" === p.zIndex && (("auto" === (r = et(t, "zIndex", C)) || "" === r) && this._addLazySet(p, "zIndex", 0)), "string" == typeof e && (a = p.cssText, r = rt(t, C), p.cssText = a + ";" + e, r = st(t, r, rt(t)).difs, !V && w.test(e) && (r.opacity = parseFloat(RegExp.$1)), e = r, p.cssText = a), e.className ? this._firstPT = s = g.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = s = this.parse(t, e, null), this._transformType) {
                for (d = 3 === this._transformType, Rt ? v && (_ = !0, "" === p.zIndex && (("auto" === (c = et(t, "zIndex", C)) || "" === c) && this._addLazySet(p, "zIndex", 0)), y && this._addLazySet(p, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (d ? "visible" : "hidden"))) : p.zoom = 1, o = s; o && o._next;) o = o._next;
                u = new wt(t, "transform", 0, 0, null, 2), this._linkCSSP(u, null, o), u.setRatio = Rt ? Gt : Zt, u.data = this._transform || Vt(t, C, !0), u.tween = i, u.pr = -1, m.pop()
            }
            if (f) {
                for (; s;) {
                    for (h = s._next, o = a; o && o.pr > s.pr;) o = o._next;
                    (s._prev = o ? o._prev : l) ? s._prev._next = s: a = s, (s._next = o) ? o._prev = s : l = s, s = h
                }
                this._firstPT = a
            }
            return !0
        }, t.parse = function (t, e, i, n) {
            var r, s, o, a, l, h, c, u, d, p, f = t.style;
            for (r in e) "function" == typeof (h = e[r]) && (h = h(O, A)), (s = g[r]) ? i = s.parse(t, h, r, this, i, n, e) : (l = et(t, r, C) + "", d = "string" == typeof h, "color" === r || "fill" === r || "stroke" === r || -1 !== r.indexOf("Color") || d && x.test(h) ? (d || (h = (3 < (h = mt(h)).length ? "rgba(" : "rgb(") + h.join(",") + ")"), i = Tt(f, r, l, h, !0, "transparent", i, 0, n)) : d && L.test(h) ? i = Tt(f, r, l, h, !0, null, i, 0, n) : (c = (o = parseFloat(l)) || 0 === o ? l.substr((o + "").length) : "", ("" === l || "auto" === l) && (c = "width" === r || "height" === r ? (o = lt(t, r, C), "px") : "left" === r || "top" === r ? (o = nt(t, r, C), "px") : (o = "opacity" !== r ? 0 : 1, "")), "" === (u = (p = d && "=" === h.charAt(1)) ? (a = parseInt(h.charAt(0) + "1", 10), h = h.substr(2), a *= parseFloat(h), h.replace(E, "")) : (a = parseFloat(h), d ? h.replace(E, "") : "")) && (u = r in k ? k[r] : c), h = a || 0 === a ? (p ? a + o : a) + u : e[r], c !== u && "" !== u && (a || 0 === a) && o && (o = it(t, r, o, c), "%" === u ? (o /= it(t, r, 100, "%") / 100, !0 !== e.strictUnits && (l = o + "%")) : "em" === u || "rem" === u || "vw" === u || "vh" === u ? o /= it(t, r, 1, u) : "px" !== u && (a = it(t, r, a, u), u = "px"), p && (a || 0 === a) && (h = a + o + u)), p && (a += o), !o && 0 !== o || !a && 0 !== a ? void 0 !== f[r] && (h || h + "" != "NaN" && null != h) ? (i = new wt(f, r, a || o || 0, 0, i, -1, r, !1, 0, l, h)).xs0 = "none" !== h || "display" !== r && -1 === r.indexOf("Style") ? h : l : G("invalid " + r + " tween value: " + e[r]) : (i = new wt(f, r, o, a - o, i, 0, r, !1 !== P && ("px" === u || "zIndex" === r), 0, l, h)).xs0 = u)), n && i && !i.plugin && (i.plugin = n);
            return i
        }, t.setRatio = function (t) {
            var e, i, n, r = this._firstPT;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                    for (; r;) {
                        if (e = r.c * t + r.s, r.r ? e = Math.round(e) : e < 1e-6 && -1e-6 < e && (e = 0), r.type)
                            if (1 === r.type)
                                if (2 === (n = r.l)) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                    r.t[r.p] = i
                                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                        else r.t[r.p] = e + r.xs0;
                        r = r._next
                    } else
                    for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
            else
                for (; r;) {
                    if (2 !== r.type)
                        if (r.r && -1 !== r.type)
                            if (e = Math.round(r.s + r.c), r.type) {
                                if (1 === r.type) {
                                    for (n = r.l, i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                    r.t[r.p] = i
                                }
                            } else r.t[r.p] = e + r.xs0;
                        else r.t[r.p] = r.e;
                    else r.setRatio(t);
                    r = r._next
                }
        }, t._enableTransforms = function (t) {
            this._transform = this._transform || Vt(this._target, C, !0), this._transformType = this._transform.svg && At || !t && 3 !== this._transformType ? 2 : 3
        };
        var ee = function (t) {
            this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
        };
        t._addLazySet = function (t, e, i) {
            var n = this._firstPT = new wt(t, e, 0, 0, this._firstPT, 2);
            n.e = i, n.setRatio = ee, n.data = this
        }, t._linkCSSP = function (t, e, i, n) {
            return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
        }, t._mod = function (t) {
            for (var e = this._firstPT; e;) "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), e = e._next
        }, t._kill = function (t) {
            var e, i, n, r = t;
            if (t.autoAlpha || t.alpha) {
                for (i in r = {}, t) r[i] = t[i];
                r.opacity = 1, r.autoAlpha && (r.visibility = 1)
            }
            for (t.className && (e = this._classNamePT) && ((n = e.xfirst) && n._prev ? this._linkCSSP(n._prev, e._next, n._prev._prev) : n === this._firstPT && (this._firstPT = e._next), e._next && this._linkCSSP(e._next, e._next._next, n._prev), this._classNamePT = null), e = this._firstPT; e;) e.plugin && e.plugin !== i && e.plugin._kill && (e.plugin._kill(t), i = e.plugin), e = e._next;
            return s.prototype._kill.call(this, r)
        };
        var ie = function (t, e, i) {
            var n, r, s, o;
            if (t.slice)
                for (r = t.length; - 1 < --r;) ie(t[r], e, i);
            else
                for (r = (n = t.childNodes).length; - 1 < --r;) o = (s = n[r]).type, s.style && (e.push(rt(s)), i && i.push(s)), 1 !== o && 9 !== o && 11 !== o || !s.childNodes.length || ie(s, e, i)
        };
        return q.cascadeTo = function (t, e, i) {
            var n, r, s, o, a = I.to(t, e, i),
                l = [a],
                h = [],
                c = [],
                u = [],
                d = I._internals.reservedProps;
            for (t = a._targets || a.target, ie(t, h, u), a.render(e, !0, !0), ie(t, c), a.render(0, !0, !0), a._enabled(!0), n = u.length; - 1 < --n;)
                if ((r = st(u[n], h[n], c[n])).firstMPT) {
                    for (s in r = r.difs, i) d[s] && (r[s] = i[s]);
                    for (s in o = {}, r) o[s] = h[n][s];
                    l.push(I.fromTo(u[n], e, o, r))
                }
            return l
        }, s.activate([q]), q
    }, !0), t = _gsScope._gsDefine.plugin({
        propName: "roundProps",
        version: "1.6.0",
        priority: -1,
        API: 2,
        init: function (t, e, i) {
            return this._tween = i, !0
        }
    }), l = function (t) {
        for (; t;) t.f || t.blob || (t.m = Math.round), t = t._next
    }, (e = t.prototype)._onInitAllProps = function () {
        for (var t, e, i, n = this._tween, r = n.vars.roundProps.join ? n.vars.roundProps : n.vars.roundProps.split(","), s = r.length, o = {}, a = n._propLookup.roundProps; - 1 < --s;) o[r[s]] = Math.round;
        for (s = r.length; - 1 < --s;)
            for (t = r[s], e = n._firstPT; e;) i = e._next, e.pg ? e.t._mod(o) : e.n === t && (2 === e.f && e.t ? l(e.t._firstPT) : (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : n._firstPT === e && (n._firstPT = i), e._next = e._prev = null, n._propLookup[t] = a)), e = i;
        return !1
    }, e._add = function (t, e, i, n) {
        this._addTween(t, e, i, i + n, e, Math.round), this._overwriteProps.push(e)
    }, _gsScope._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.6.0",
        init: function (t, e, i, n) {
            var r, s;
            if ("function" != typeof t.setAttribute) return !1;
            for (r in e) "function" == typeof (s = e[r]) && (s = s(n, t)), this._addTween(t, "setAttribute", t.getAttribute(r) + "", s + "", r, !1, r), this._overwriteProps.push(r);
            return !0
        }
    }), _gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.3.0",
        API: 2,
        init: function (t, e, i, n) {
            "object" != typeof e && (e = {
                rotation: e
            }), this.finals = {};
            var r, s, o, a, l, h, c = !0 === e.useRadians ? 2 * Math.PI : 360;
            for (r in e) "useRadians" !== r && ("function" == typeof (a = e[r]) && (a = a(n, t)), s = (h = (a + "").split("_"))[0], o = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), l = (a = this.finals[r] = "string" == typeof s && "=" === s.charAt(1) ? o + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0) - o, h.length && (-1 !== (s = h.join("_")).indexOf("short") && ((l %= c) !== l % (c / 2) && (l = l < 0 ? l + c : l - c)), -1 !== s.indexOf("_cw") && l < 0 ? l = (l + 9999999999 * c) % c - (l / c | 0) * c : -1 !== s.indexOf("ccw") && 0 < l && (l = (l - 9999999999 * c) % c - (l / c | 0) * c)), (1e-6 < l || l < -1e-6) && (this._addTween(t, r, o, o + l, r), this._overwriteProps.push(r)));
            return !0
        },
        set: function (t) {
            var e;
            if (1 !== t) this._super.setRatio.call(this, t);
            else
                for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
        }
    })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (g) {
        var e, i, t, n = _gsScope.GreenSockGlobals || _gsScope,
            r = n.com.greensock,
            s = 2 * Math.PI,
            o = Math.PI / 2,
            a = r._class,
            l = function (t, e) {
                var i = a("easing." + t, function () {}, !0),
                    n = i.prototype = new g;
                return n.constructor = i, n.getRatio = e, i
            },
            h = g.register || function () {},
            c = function (t, e, i, n, r) {
                var s = a("easing." + t, {
                    easeOut: new e,
                    easeIn: new i,
                    easeInOut: new n
                }, !0);
                return h(s, t), s
            },
            _ = function (t, e, i) {
                this.t = t, this.v = e, i && (((this.next = i).prev = this).c = i.v - e, this.gap = i.t - t)
            },
            u = function (t, e) {
                var i = a("easing." + t, function (t) {
                        this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                    }, !0),
                    n = i.prototype = new g;
                return n.constructor = i, n.getRatio = e, n.config = function (t) {
                    return new i(t)
                }, i
            },
            d = c("Back", u("BackOut", function (t) {
                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
            }), u("BackIn", function (t) {
                return t * t * ((this._p1 + 1) * t - this._p1)
            }), u("BackInOut", function (t) {
                return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
            })),
            p = a("easing.SlowMo", function (t, e, i) {
                e = e || 0 === e ? e : .7, null == t ? t = .7 : 1 < t && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
            }, !0),
            f = p.prototype = new g;
        return f.constructor = p, f.getRatio = function (t) {
            var e = t + (.5 - t) * this._p;
            return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }, p.ease = new p(.7, .7), f.config = p.config = function (t, e, i) {
            return new p(t, e, i)
        }, (f = (e = a("easing.SteppedEase", function (t) {
            t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
        }, !0)).prototype = new g).constructor = e, f.getRatio = function (t) {
            return t < 0 ? t = 0 : 1 <= t && (t = .999999999), (this._p2 * t >> 0) * this._p1
        }, f.config = e.config = function (t) {
            return new e(t)
        }, (f = (i = a("easing.RoughEase", function (t) {
            for (var e, i, n, r, s, o, a = (t = t || {}).taper || "none", l = [], h = 0, c = 0 | (t.points || 20), u = c, d = !1 !== t.randomize, p = !0 === t.clamp, f = t.template instanceof g ? t.template : null, m = "number" == typeof t.strength ? .4 * t.strength : .4; - 1 < --u;) e = d ? Math.random() : 1 / c * u, i = f ? f.getRatio(e) : e, n = "none" === a ? m : "out" === a ? (r = 1 - e) * r * m : "in" === a ? e * e * m : (r = e < .5 ? 2 * e : 2 * (1 - e)) * r * .5 * m, d ? i += Math.random() * n - .5 * n : u % 2 ? i += .5 * n : i -= .5 * n, p && (1 < i ? i = 1 : i < 0 && (i = 0)), l[h++] = {
                x: e,
                y: i
            };
            for (l.sort(function (t, e) {
                return t.x - e.x
            }), o = new _(1, 1, null), u = c; - 1 < --u;) s = l[u], o = new _(s.x, s.y, o);
            this._prev = new _(0, 0, 0 !== o.t ? o : o.next)
        }, !0)).prototype = new g).constructor = i, f.getRatio = function (t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t;) e = e.next;
                e = e.prev
            } else
                for (; e.prev && t <= e.t;) e = e.prev;
            return (this._prev = e).v + (t - e.t) / e.gap * e.c
        }, f.config = function (t) {
            return new i(t)
        }, i.ease = new i, c("Bounce", l("BounceOut", function (t) {
            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), l("BounceIn", function (t) {
            return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), l("BounceInOut", function (t) {
            var e = t < .5;
            return t = (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
        })), c("Circ", l("CircOut", function (t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), l("CircIn", function (t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), l("CircInOut", function (t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })), c("Elastic", (t = function (t, e, i) {
            var n = a("easing." + t, function (t, e) {
                    this._p1 = 1 <= t ? t : 1, this._p2 = (e || i) / (t < 1 ? t : 1), this._p3 = this._p2 / s * (Math.asin(1 / this._p1) || 0), this._p2 = s / this._p2
                }, !0),
                r = n.prototype = new g;
            return r.constructor = n, r.getRatio = e, r.config = function (t, e) {
                return new n(t, e)
            }, n
        })("ElasticOut", function (t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
        }, .3), t("ElasticIn", function (t) {
            return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
        }, .3), t("ElasticInOut", function (t) {
            return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
        }, .45)), c("Expo", l("ExpoOut", function (t) {
            return 1 - Math.pow(2, -10 * t)
        }), l("ExpoIn", function (t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), l("ExpoInOut", function (t) {
            return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })), c("Sine", l("SineOut", function (t) {
            return Math.sin(t * o)
        }), l("SineIn", function (t) {
            return 1 - Math.cos(t * o)
        }), l("SineInOut", function (t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        })), a("easing.EaseLookup", {
            find: function (t) {
                return g.map[t]
            }
        }, !0), h(n.SlowMo, "SlowMo", "ease,"), h(i, "RoughEase", "ease,"), h(e, "SteppedEase", "ease,"), d
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function (p, f) {
        "use strict";
        var e, i, m = {},
            n = p.document,
            g = p.GreenSockGlobals = p.GreenSockGlobals || p;
        if (!g.TweenLite) {
            var t, r, s, _, v, y = function (t) {
                    var e, i = t.split("."),
                        n = g;
                    for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {};
                    return n
                },
                u = y("com.greensock"),
                b = 1e-10,
                l = function (t) {
                    var e, i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i
                },
                w = function () {},
                x = (e = Object.prototype.toString, i = e.call([]), function (t) {
                    return null != t && (t instanceof Array || "object" == typeof t && !!t.push && e.call(t) === i)
                }),
                T = {},
                k = function (l, h, c, u) {
                    this.sc = T[l] ? T[l].sc : [], (T[l] = this).gsClass = null, this.func = c;
                    var d = [];
                    this.check = function (t) {
                        for (var e, i, n, r, s, o = h.length, a = o; - 1 < --o;)(e = T[h[o]] || new k(h[o], [])).gsClass ? (d[o] = e.gsClass, a--) : t && e.sc.push(this);
                        if (0 === a && c) {
                            if (n = (i = ("com.greensock." + l).split(".")).pop(), r = y(i.join("."))[n] = this.gsClass = c.apply(c, d), u)
                                if (g[n] = m[n] = r, !(s = "undefined" != typeof module && module.exports) && "function" == typeof define && define.amd) define((p.GreenSockAMDPath ? p.GreenSockAMDPath + "/" : "") + l.split(".").pop(), [], function () {
                                    return r
                                });
                                else if (s)
                                    if (l === f)
                                        for (o in module.exports = m[f] = r, m) r[o] = m[o];
                                    else m[f] && (m[f][n] = r);
                            for (o = 0; o < this.sc.length; o++) this.sc[o].check()
                        }
                    }, this.check(!0)
                },
                o = p._gsDefine = function (t, e, i, n) {
                    return new k(t, e, i, n)
                },
                d = u._class = function (t, e, i) {
                    return e = e || function () {}, o(t, [], function () {
                        return e
                    }, i), e
                };
            o.globals = g;
            var a = [0, 0, 1, 1],
                S = d("easing.Ease", function (t, e, i, n) {
                    this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? a.concat(e) : a
                }, !0),
                C = S.map = {},
                h = S.register = function (t, e, i, n) {
                    for (var r, s, o, a, l = e.split(","), h = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); - 1 < --h;)
                        for (s = l[h], r = n ? d("easing." + s, null, !0) : u.easing[s] || {}, o = c.length; - 1 < --o;) a = c[o], C[s + "." + a] = C[a + s] = r[a] = t.getRatio ? t : t[a] || new t
                };
            for ((s = S.prototype)._calcEnd = !1, s.getRatio = function (t) {
                if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                var e = this._type,
                    i = this._power,
                    n = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
                return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : t < .5 ? n / 2 : 1 - n / 2
            }, r = (t = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; - 1 < --r;) s = t[r] + ",Power" + r, h(new S(null, null, 1, r), s, "easeOut", !0), h(new S(null, null, 2, r), s, "easeIn" + (0 === r ? ",easeNone" : "")), h(new S(null, null, 3, r), s, "easeInOut");
            C.linear = u.easing.Linear.easeIn, C.swing = u.easing.Quad.easeInOut;
            var P = d("events.EventDispatcher", function (t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            (s = P.prototype).addEventListener = function (t, e, i, n, r) {
                r = r || 0;
                var s, o, a = this._listeners[t],
                    l = 0;
                for (this !== _ || v || _.wake(), null == a && (this._listeners[t] = a = []), o = a.length; - 1 < --o;)(s = a[o]).c === e && s.s === i ? a.splice(o, 1) : 0 === l && s.pr < r && (l = o + 1);
                a.splice(l, 0, {
                    c: e,
                    s: i,
                    up: n,
                    pr: r
                })
            }, s.removeEventListener = function (t, e) {
                var i, n = this._listeners[t];
                if (n)
                    for (i = n.length; - 1 < --i;)
                        if (n[i].c === e) return void n.splice(i, 1)
            }, s.dispatchEvent = function (t) {
                var e, i, n, r = this._listeners[t];
                if (r)
                    for (1 < (e = r.length) && (r = r.slice(0)), i = this._eventTarget; - 1 < --e;)(n = r[e]) && (n.up ? n.c.call(n.s || i, {
                        type: t,
                        target: i
                    }) : n.c.call(n.s || i))
            };
            var A = p.requestAnimationFrame,
                O = p.cancelAnimationFrame,
                M = Date.now || function () {
                    return (new Date).getTime()
                },
                D = M();
            for (r = (t = ["ms", "moz", "webkit", "o"]).length; - 1 < --r && !A;) A = p[t[r] + "RequestAnimationFrame"], O = p[t[r] + "CancelAnimationFrame"] || p[t[r] + "CancelRequestAnimationFrame"];
            d("Ticker", function (t, e) {
                var r, s, o, a, l, h = this,
                    c = M(),
                    i = !(!1 === e || !A) && "auto",
                    u = 500,
                    d = 33,
                    p = function (t) {
                        var e, i, n = M() - D;
                        u < n && (c += n - d), D += n, h.time = (D - c) / 1e3, e = h.time - l, (!r || 0 < e || !0 === t) && (h.frame++, l += e + (a <= e ? .004 : a - e), i = !0), !0 !== t && (o = s(p)), i && h.dispatchEvent("tick")
                    };
                P.call(h), h.time = h.frame = 0, h.tick = function () {
                    p(!0)
                }, h.lagSmoothing = function (t, e) {
                    u = t || 1e10, d = Math.min(e, u, 0)
                }, h.sleep = function () {
                    null != o && (i && O ? O(o) : clearTimeout(o), s = w, o = null, h === _ && (v = !1))
                }, h.wake = function (t) {
                    null !== o ? h.sleep() : t ? c += -D + (D = M()) : 10 < h.frame && (D = M() - u + 5), s = 0 === r ? w : i && A ? A : function (t) {
                        return setTimeout(t, 1e3 * (l - h.time) + 1 | 0)
                    }, h === _ && (v = !0), p(2)
                }, h.fps = function (t) {
                    return arguments.length ? (a = 1 / ((r = t) || 60), l = this.time + a, void h.wake()) : r
                }, h.useRAF = function (t) {
                    return arguments.length ? (h.sleep(), i = t, void h.fps(r)) : i
                }, h.fps(t), setTimeout(function () {
                    "auto" === i && h.frame < 5 && "hidden" !== n.visibilityState && h.useRAF(!1)
                }, 1500)
            }), (s = u.Ticker.prototype = new u.events.EventDispatcher).constructor = u.Ticker;
            var c = d("core.Animation", function (t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, Z) {
                    v || _.wake();
                    var i = this.vars.useFrames ? V : Z;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            _ = c.ticker = new u.Ticker, (s = c.prototype)._dirty = s._gc = s._initted = s._paused = !1, s._totalTime = s._time = 0, s._rawPrevTime = -1, s._next = s._last = s._onUpdate = s._timeline = s.timeline = null, s._paused = !1;
            var E = function () {
                v && 2e3 < M() - D && _.wake(), setTimeout(E, 2e3)
            };
            E(), s.play = function (t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, s.pause = function (t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, s.resume = function (t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, s.seek = function (t, e) {
                return this.totalTime(Number(t), !1 !== e)
            }, s.restart = function (t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
            }, s.reverse = function (t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, s.render = function (t, e, i) {}, s.invalidate = function () {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, s.isActive = function () {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale
            }, s._enabled = function (t, e) {
                return v || _.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, s._kill = function (t, e) {
                return this._enabled(!1, !1)
            }, s.kill = function (t, e) {
                return this._kill(t, e), this
            }, s._uncache = function (t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, s._swapSelfInParams = function (t) {
                for (var e = t.length, i = t.concat(); - 1 < --e;) "{self}" === t[e] && (i[e] = this);
                return i
            }, s._callback = function (t) {
                var e = this.vars,
                    i = e[t],
                    n = e[t + "Params"],
                    r = e[t + "Scope"] || e.callbackScope || this;
                switch (n ? n.length : 0) {
                    case 0:
                        i.call(r);
                        break;
                    case 1:
                        i.call(r, n[0]);
                        break;
                    case 2:
                        i.call(r, n[0], n[1]);
                        break;
                    default:
                        i.apply(r, n)
                }
            }, s.eventCallback = function (t, e, i, n) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[t];
                    null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = x(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, s.delay = function (t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, s.duration = function (t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, s.totalDuration = function (t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, s.time = function (t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, s.totalTime = function (t, e, i) {
                if (v || _.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration,
                            r = this._timeline;
                        if (n < t && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (L.length && Q(), this.render(t, e, !1), L.length && Q())
                }
                return this
            }, s.progress = s.totalProgress = function (t, e) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
            }, s.startTime = function (t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, s.endTime = function (t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, s.timeScale = function (t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || b, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, s.reversed = function (t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, s.paused = function (t) {
                if (!arguments.length) return this._paused;
                var e, i, n = this._timeline;
                return t != this._paused && n && (v || t || _.wake(), i = (e = n.rawTime()) - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
            };
            var $ = d("core.SimpleTimeline", function (t) {
                c.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            (s = $.prototype = new c).constructor = $, s.kill()._gc = !1, s._first = s._last = s._recent = null, s._sortChildren = !1, s.add = s.insert = function (t, e, i, n) {
                var r, s;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
                    for (s = t._startTime; r && r._startTime > s;) r = r._prev;
                return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
            }, s._remove = function (t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, s.render = function (t, e, i) {
                var n, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
            }, s.rawTime = function () {
                return v || _.wake(), this._totalTime
            };
            var R = d("TweenLite", function (t, e, i) {
                    if (c.call(this, e, i), this.render = R.prototype.render, null == t) throw "Cannot tween a null target.";
                    this.target = t = "string" != typeof t ? t : R.selector(t) || t;
                    var n, r, s, o = t.jquery || t.length && t !== p && t[0] && (t[0] === p || t[0].nodeType && t[0].style && !t.nodeType),
                        a = this.vars.overwrite;
                    if (this._overwrite = a = null == a ? Y[R.defaultOverwrite] : "number" == typeof a ? a >> 0 : Y[a], (o || t instanceof Array || t.push && x(t)) && "number" != typeof t[0])
                        for (this._targets = s = l(t), this._propLookup = [], this._siblings = [], n = 0; n < s.length; n++)(r = s[n]) ? "string" != typeof r ? r.length && r !== p && r[0] && (r[0] === p || r[0].nodeType && r[0].style && !r.nodeType) ? (s.splice(n--, 1), this._targets = s = s.concat(l(r))) : (this._siblings[n] = J(r, this, !1), 1 === a && 1 < this._siblings[n].length && tt(r, this, null, 1, this._siblings[n])) : "string" == typeof (r = s[n--] = R.selector(r)) && s.splice(n + 1, 1) : s.splice(n--, 1);
                    else this._propLookup = {}, this._siblings = J(t, this, !1), 1 === a && 1 < this._siblings.length && tt(t, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === e && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -b, this.render(Math.min(0, -this._delay)))
                }, !0),
                j = function (t) {
                    return t && t.length && t !== p && t[0] && (t[0] === p || t[0].nodeType && t[0].style && !t.nodeType)
                };
            (s = R.prototype = new c).constructor = R, s.kill()._gc = !1, s.ratio = 0, s._firstPT = s._targets = s._overwrittenProps = s._startAt = null, s._notifyPluginsOfEnabled = s._lazy = !1, R.version = "1.19.1", R.defaultEase = s._ease = new S(null, null, 1, 1), R.defaultOverwrite = "auto", R.ticker = _, R.autoSleep = 120, R.lagSmoothing = function (t, e) {
                _.lagSmoothing(t, e)
            }, R.selector = p.$ || p.jQuery || function (t) {
                var e = p.$ || p.jQuery;
                return e ? (R.selector = e)(t) : void 0 === n ? t : n.querySelectorAll ? n.querySelectorAll(t) : n.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
            };
            var L = [],
                z = {},
                F = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                N = function (t) {
                    for (var e, i = this._firstPT; i;) e = i.blob ? 1 === t ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m(e, this._target || i.t) : e < 1e-6 && -1e-6 < e && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                },
                I = function (t, e, i, n) {
                    var r, s, o, a, l, h, c, u = [],
                        d = 0,
                        p = "",
                        f = 0;
                    for (u.start = t, u.end = e, t = u[0] = t + "", e = u[1] = e + "", i && (i(u), t = u[0], e = u[1]), u.length = 0, r = t.match(F) || [], s = e.match(F) || [], n && (n._next = null, n.blob = 1, u._firstPT = u._applyPT = n), l = s.length, a = 0; a < l; a++) c = s[a], p += (h = e.substr(d, e.indexOf(c, d) - d)) || !a ? h : ",", d += h.length, f ? f = (f + 1) % 5 : "rgba(" === h.substr(-5) && (f = 1), c === r[a] || r.length <= a ? p += c : (p && (u.push(p), p = ""), o = parseFloat(r[a]), u.push(o), u._firstPT = {
                        _next: u._firstPT,
                        t: u,
                        p: u.length - 1,
                        s: o,
                        c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - o) || 0,
                        f: 0,
                        m: f && f < 4 ? Math.round : 0
                    }), d += c.length;
                    return (p += e.substr(d)) && u.push(p), u.setRatio = N, u
                },
                q = function (t, e, i, n, r, s, o, a, l) {
                    "function" == typeof n && (n = n(l || 0, t));
                    var h = typeof t[e],
                        c = "function" !== h ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                        u = "get" !== i ? i : c ? o ? t[c](o) : t[c]() : t[e],
                        d = "string" == typeof n && "=" === n.charAt(1),
                        p = {
                            t: t,
                            p: e,
                            s: u,
                            f: "function" === h,
                            pg: 0,
                            n: r || e,
                            m: s ? "function" == typeof s ? s : Math.round : 0,
                            pr: 0,
                            c: d ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - u || 0
                        };
                    return ("number" != typeof u || "number" != typeof n && !d) && (o || isNaN(u) || !d && isNaN(n) || "boolean" == typeof u || "boolean" == typeof n ? (p.fp = o, p = {
                        t: I(u, d ? p.s + p.c : n, a || R.defaultStringFilter, p),
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: r || e,
                        pr: 0,
                        m: 0
                    }) : (p.s = parseFloat(u), d || (p.c = parseFloat(n) - p.s || 0))), p.c ? ((p._next = this._firstPT) && (p._next._prev = p), this._firstPT = p) : void 0
                },
                H = R._internals = {
                    isArray: x,
                    isSelector: j,
                    lazyTweens: L,
                    blobDif: I
                },
                W = R._plugins = {},
                B = H.tweenLookup = {},
                X = 0,
                U = H.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1,
                    id: 1
                },
                Y = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    true: 1,
                    false: 0
                },
                V = c._rootFramesTimeline = new $,
                Z = c._rootTimeline = new $,
                G = 30,
                Q = H.lazyRender = function () {
                    var t, e = L.length;
                    for (z = {}; - 1 < --e;)(t = L[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    L.length = 0
                };
            Z._startTime = _.time, V._startTime = _.frame, Z._active = V._active = !0, setTimeout(Q, 1), c._updateRoot = R.render = function () {
                var t, e, i;
                if (L.length && Q(), Z.render((_.time - Z._startTime) * Z._timeScale, !1, !1), V.render((_.frame - V._startTime) * V._timeScale, !1, !1), L.length && Q(), _.frame >= G) {
                    for (i in G = _.frame + (parseInt(R.autoSleep, 10) || 120), B) {
                        for (t = (e = B[i].tweens).length; - 1 < --t;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete B[i]
                    }
                    if ((!(i = Z._first) || i._paused) && R.autoSleep && !V._first && 1 === _._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || _.sleep()
                    }
                }
            }, _.addEventListener("tick", c._updateRoot);
            var J = function (t, e, i) {
                    var n, r, s = t._gsTweenID;
                    if (B[s || (t._gsTweenID = s = "t" + X++)] || (B[s] = {
                        target: t,
                        tweens: []
                    }), e && ((n = B[s].tweens)[r = n.length] = e, i))
                        for (; - 1 < --r;) n[r] === e && n.splice(r, 1);
                    return B[s].tweens
                },
                K = function (t, e, i, n) {
                    var r, s, o = t.vars.onOverwrite;
                    return o && (r = o(t, e, i, n)), (o = R.onOverwrite) && (s = o(t, e, i, n)), !1 !== r && !1 !== s
                },
                tt = function (t, e, i, n, r) {
                    var s, o, a, l;
                    if (1 === n || 4 <= n) {
                        for (l = r.length, s = 0; s < l; s++)
                            if ((a = r[s]) !== e) a._gc || a._kill(null, t, e) && (o = !0);
                            else if (5 === n) break;
                        return o
                    }
                    var h, c = e._startTime + b,
                        u = [],
                        d = 0,
                        p = 0 === e._duration;
                    for (s = r.length; - 1 < --s;)(a = r[s]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (h = h || et(e, 0, p), 0 === et(a, h, p) && (u[d++] = a)) : a._startTime <= c && a._startTime + a.totalDuration() / a._timeScale > c && ((p || !a._initted) && c - a._startTime <= 2e-10 || (u[d++] = a)));
                    for (s = d; - 1 < --s;)
                        if (a = u[s], 2 === n && a._kill(i, t, e) && (o = !0), 2 !== n || !a._firstPT && a._initted) {
                            if (2 !== n && !K(a, e)) continue;
                            a._enabled(!1, !1) && (o = !0)
                        }
                    return o
                },
                et = function (t, e, i) {
                    for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline;) {
                        if (s += n._startTime, r *= n._timeScale, n._paused) return -100;
                        n = n._timeline
                    }
                    return e < (s /= r) ? s - e : i && s === e || !t._initted && s - e < 2e-10 ? b : (s += t.totalDuration() / t._timeScale / r) > e + b ? 0 : s - e - b
                };
            s._init = function () {
                var t, e, i, n, r, s, o = this.vars,
                    a = this._overwrittenProps,
                    l = this._duration,
                    h = !!o.immediateRender,
                    c = o.ease;
                if (o.startAt) {
                    for (n in this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {}, o.startAt) r[n] = o.startAt[n];
                    if (r.overwrite = !1, r.immediateRender = !0, r.lazy = h && !1 !== o.lazy, r.startAt = r.delay = null, this._startAt = R.to(this.target, 0, r), h)
                        if (0 < this._time) this._startAt = null;
                        else if (0 !== l) return
                } else if (o.runBackwards && 0 !== l)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        for (n in 0 !== this._time && (h = !1), i = {}, o) U[n] && "autoCSS" !== n || (i[n] = o[n]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && !1 !== o.lazy, i.immediateRender = h, this._startAt = R.to(this.target, 0, i), h) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = c = c ? c instanceof S ? c : "function" == typeof c ? new S(c, o.easeParams) : C[c] || R.defaultEase : R.defaultEase, o.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (s = this._targets.length, t = 0; t < s; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
                if (e && R._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = o.onUpdate, this._initted = !0
            }, s._initProps = function (t, e, i, n, r) {
                var s, o, a, l, h, c;
                if (null == t) return !1;
                for (s in z[t._gsTweenID] && Q(), this.vars.css || t.style && t !== p && t.nodeType && W.css && !1 !== this.vars.autoCSS && function (t, e) {
                    var i, n = {};
                    for (i in t) U[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!W[i] || W[i] && W[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                    t.css = n
                }(this.vars, t), this.vars)
                    if (c = this.vars[s], U[s]) c && (c instanceof Array || c.push && x(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[s] = c = this._swapSelfInParams(c, this));
                    else if (W[s] && (l = new W[s])._onInitTween(t, this.vars[s], this, r)) {
                        for (this._firstPT = h = {
                            _next: this._firstPT,
                            t: l,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: s,
                            pg: 1,
                            pr: l._priority,
                            m: 0
                        }, o = l._overwriteProps.length; - 1 < --o;) e[l._overwriteProps[o]] = this._firstPT;
                        (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), h._next && (h._next._prev = h)
                    } else e[s] = q.call(this, t, s, "get", c, s, 0, null, this.vars.stringFilter, r);
                return n && this._kill(n, t) ? this._initProps(t, e, i, n, r) : 1 < this._overwrite && this._firstPT && 1 < i.length && tt(t, this, e, this._overwrite, i) ? (this._kill(e, t), this._initProps(t, e, i, n, r)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (z[t._gsTweenID] = !0), a)
            }, s.render = function (t, e, i) {
                var n, r, s, o, a = this._time,
                    l = this._duration,
                    h = this._rawPrevTime;
                if (l - 1e-7 <= t && 0 <= t) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (h < 0 || t <= 0 && -1e-7 <= t || h === b && "isPause" !== this.data) && h !== t && (i = !0, b < h && (r = "onReverseComplete")), this._rawPrevTime = o = !e || t || h === t ? t : b);
                else if (t < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && 0 < h) && (r = "onReverseComplete", n = this._reversed), t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (0 <= h && (h !== b || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !e || t || h === t ? t : b)), this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var c = t / l,
                        u = this._easeType,
                        d = this._easePower;
                    (1 === u || 3 === u && .5 <= c) && (c = 1 - c), 3 === u && (c *= 2), 1 === d ? c *= c : 2 === d ? c *= c * c : 3 === d ? c *= c * c * c : 4 === d && (c *= c * c * c * c), this.ratio = 1 === u ? 1 - c : 2 === u ? c : t / l < .5 ? c / 2 : 1 - c / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== a || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = h, L.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== a && 0 <= t && (this._active = !0), 0 === a && (this._startAt && (0 <= t ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                    this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, e, i), e || (this._time !== a || n || i) && this._callback("onUpdate")), r && (!this._gc || i) && (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === b && o !== b && (this._rawPrevTime = 0))
                }
            }, s._kill = function (t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : R.selector(e) || e;
                var n, r, s, o, a, l, h, c, u, d = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((x(e) || j(e)) && "number" != typeof e[0])
                    for (n = e.length; - 1 < --n;) this._kill(t, e[n], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (n = this._targets.length; - 1 < --n;)
                            if (e === this._targets[n]) {
                                a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        if (h = t || a, c = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), i && (R.onOverwrite || this.vars.onOverwrite)) {
                            for (s in h) a[s] && (u || (u = []), u.push(s));
                            if ((u || !t) && !K(this, i, e, u)) return !1
                        }
                        for (s in h)(o = a[s]) && (d && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, l = !0), o.pg && o.t._kill(h) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[s]), c && (r[s] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, s.invalidate = function () {
                return this._notifyPluginsOfEnabled && R._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], c.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -b, this.render(Math.min(0, -this._delay))), this
            }, s._enabled = function (t, e) {
                if (v || _.wake(), t && this._gc) {
                    var i, n = this._targets;
                    if (n)
                        for (i = n.length; - 1 < --i;) this._siblings[i] = J(n[i], this, !0);
                    else this._siblings = J(this.target, this, !0)
                }
                return c.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && R._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
            }, R.to = function (t, e, i) {
                return new R(t, e, i)
            }, R.from = function (t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new R(t, e, i)
            }, R.fromTo = function (t, e, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new R(t, e, n)
            }, R.delayedCall = function (t, e, i, n, r) {
                return new R(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: n,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, R.set = function (t, e) {
                return new R(t, 0, e)
            }, R.getTweensOf = function (t, e) {
                if (null == t) return [];
                var i, n, r, s;
                if (t = "string" != typeof t ? t : R.selector(t) || t, (x(t) || j(t)) && "number" != typeof t[0]) {
                    for (i = t.length, n = []; - 1 < --i;) n = n.concat(R.getTweensOf(t[i], e));
                    for (i = n.length; - 1 < --i;)
                        for (s = n[i], r = i; - 1 < --r;) s === n[r] && n.splice(i, 1)
                } else
                    for (i = (n = J(t).concat()).length; - 1 < --i;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                return n
            }, R.killTweensOf = R.killDelayedCallsTo = function (t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var n = R.getTweensOf(t, e), r = n.length; - 1 < --r;) n[r]._kill(i, t)
            };
            var it = d("plugins.TweenPlugin", function (t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = it.prototype
            }, !0);
            if (s = it.prototype, it.version = "1.19.0", it.API = 2, s._firstPT = null, s._addTween = q, s.setRatio = N, s._kill = function (t) {
                var e, i = this._overwriteProps,
                    n = this._firstPT;
                if (null != t[this._propName]) this._overwriteProps = [];
                else
                    for (e = i.length; - 1 < --e;) null != t[i[e]] && i.splice(e, 1);
                for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                return !1
            }, s._mod = s._roundProps = function (t) {
                for (var e, i = this._firstPT; i;)(e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
            }, R._onPluginEvent = function (t, e) {
                var i, n, r, s, o, a = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; a;) {
                        for (o = a._next, n = r; n && n.pr > a.pr;) n = n._next;
                        (a._prev = n ? n._prev : s) ? a._prev._next = a: r = a, (a._next = n) ? n._prev = a : s = a, a = o
                    }
                    a = e._firstPT = r
                }
                for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                return i
            }, it.activate = function (t) {
                for (var e = t.length; - 1 < --e;) t[e].API === it.API && (W[(new t[e])._propName] = t[e]);
                return !0
            }, o.plugin = function (t) {
                if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                var e, i = t.propName,
                    n = t.priority || 0,
                    r = t.overwriteProps,
                    s = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_mod",
                        mod: "_mod",
                        initAll: "_onInitAllProps"
                    },
                    o = d("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                        it.call(this, i, n), this._overwriteProps = r || []
                    }, !0 === t.global),
                    a = o.prototype = new it(i);
                for (e in (a.constructor = o).API = t.API, s) "function" == typeof t[e] && (a[s[e]] = t[e]);
                return o.version = t.version, it.activate([o]), o
            }, t = p._gsQueue) {
                for (r = 0; r < t.length; r++) t[r]();
                for (s in T) T[s].func || p.console.log("GSAP encountered missing dependency: " + s)
            }
            v = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
    function (f, r, t) {
        var e = f(r),
            s = r.Modernizr;
        s.addTest("csstransformspreserve3d", function () {
            var i, n = s.prefixed("transformStyle"),
                t = "preserve-3d";
            return !!n && (n = n.replace(/([A-Z])/g, function (t, e) {
                return "-" + e.toLowerCase()
            }).replace(/^ms-/, "-ms-"), s.testStyles("#modernizr{" + n + ":" + t + ";}", function (t, e) {
                i = r.getComputedStyle ? getComputedStyle(t, null).getPropertyValue(n) : ""
            }), i === t)
        });
        var o, a, l = f.event;
        o = l.special.debouncedresize = {
            setup: function () {
                f(this).on("resize", o.handler)
            },
            teardown: function () {
                f(this).off("resize", o.handler)
            },
            handler: function (t, e) {
                var i = this,
                    n = arguments,
                    r = function () {
                        t.type = "debouncedresize", l.dispatch.apply(i, n)
                    };
                a && clearTimeout(a), e ? r() : a = setTimeout(r, o.threshold)
            },
            threshold: 150
        }, f.BookBlock = function (t, e) {
            this.$el = f(e), this._init(t)
        }, f.BookBlock.defaults = {
            startPage: 1,
            orientation: "vertical",
            direction: "ltr",
            speed: 1e3,
            easing: "ease-in-out",
            shadows: !0,
            shadowSides: .2,
            shadowFlip: .1,
            circular: !1,
            nextEl: "",
            prevEl: "",
            autoplay: !1,
            interval: 3e3,
            onEndFlip: function (t, e, i) {
                return !1
            },
            onBeforeFlip: function (t) {
                return !1
            }
        }, f.BookBlock.prototype = {
            _init: function (t) {
                this.options = f.extend(!0, {}, f.BookBlock.defaults, t), this.$el.addClass("bb-" + this.options.orientation), this.$items = this.$el.children(".bb-item").hide(), this.itemsCount = this.$items.length, 0 < this.options.startPage && this.options.startPage <= this.itemsCount ? this.current = this.options.startPage - 1 : (n("startPage option is out of range"), this.current = 0), this.previous = -1, this.$current = this.$items.eq(this.current).show(), this.elWidth = this.$el.width();
                this.transEndEventName = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    msTransition: "MSTransitionEnd",
                    transition: "transitionend"
                }[s.prefixed("transition")] + ".bookblock", this.support = s.csstransitions && s.csstransforms3d && s.csstransformspreserve3d, this._initEvents(), this.options.autoplay && (this.options.circular = !0, this._startSlideshow())
            },
            _initEvents: function () {
                var t = this;
                "" !== this.options.nextEl && f(this.options.nextEl).on("click.bookblock touchstart.bookblock", function () {
                    return t._action("next"), !1
                }), "" !== this.options.prevEl && f(this.options.prevEl).on("click.bookblock touchstart.bookblock", function () {
                    return t._action("prev"), !1
                }), e.on("debouncedresize", function () {
                    t.elWidth = t.$el.width()
                })
            },
            _action: function (t, e) {
                this._stopSlideshow(), this._navigate(t, e)
            },
            _navigate: function (t, e) {
                if (this.isAnimating) return !1;
                this.options.onBeforeFlip(this.current), this.isAnimating = !0, this.$current = this.$items.eq(this.current), void 0 !== e ? this.current = e : "next" === t && "ltr" === this.options.direction || "prev" === t && "rtl" === this.options.direction ? this.options.circular || this.current !== this.itemsCount - 1 ? (this.previous = this.current, this.current = this.current < this.itemsCount - 1 ? this.current + 1 : 0) : this.end = !0 : ("prev" === t && "ltr" === this.options.direction || "next" === t && "rtl" === this.options.direction) && (this.options.circular || 0 !== this.current ? (this.previous = this.current, this.current = 0 < this.current ? this.current - 1 : this.itemsCount - 1) : this.end = !0), this.$nextItem = !this.options.circular && this.end ? this.$current : this.$items.eq(this.current), this.support ? this._layout(t) : this._layoutNoSupport(t)
            },
            _layoutNoSupport: function (t) {
                this.$items.hide(), this.$nextItem.show(), this.end = !1, this.isAnimating = !1;
                var e = "next" === t && this.current === this.itemsCount - 1 || "prev" === t && 0 === this.current;
                this.options.onEndFlip(this.previous, this.current, e)
            },
            _layout: function (i) {
                var n = this,
                    t = this._addSide("left", i),
                    e = this._addSide("middle", i),
                    r = this._addSide("right", i),
                    s = t.find("div.bb-overlay"),
                    o = e.find("div.bb-flipoverlay:first"),
                    a = e.find("div.bb-flipoverlay:last"),
                    l = r.find("div.bb-overlay"),
                    h = this.end ? 400 : this.options.speed;
                if (this.$items.hide(), this.$el.prepend(t, e, r), e.css({
                    transitionDuration: h + "ms",
                    transitionTimingFunction: this.options.easing
                }).on(this.transEndEventName, function (t) {
                    if (f(t.target).hasClass("bb-page")) {
                        n.$el.children(".bb-page").remove(), n.$nextItem.show(), n.end = !1, n.isAnimating = !1;
                        var e = "next" === i && n.current === n.itemsCount - 1 || "prev" === i && 0 === n.current;
                        n.options.onEndFlip(n.previous, n.current, e)
                    }
                }), "prev" === i && e.addClass("bb-flip-initial"), this.options.shadows && !this.end) {
                    var c = "next" === i ? {
                            transition: "opacity " + this.options.speed / 2 + "ms linear " + this.options.speed / 2 + "ms"
                        } : {
                            transition: "opacity " + this.options.speed / 2 + "ms linear",
                            opacity: this.options.shadowSides
                        },
                        u = "next" === i ? {
                            transition: "opacity " + this.options.speed / 2 + "ms linear"
                        } : {
                            transition: "opacity " + this.options.speed / 2 + "ms linear " + this.options.speed / 2 + "ms",
                            opacity: this.options.shadowFlip
                        },
                        d = "next" === i ? {
                            transition: "opacity " + this.options.speed / 2 + "ms linear " + this.options.speed / 2 + "ms",
                            opacity: this.options.shadowFlip
                        } : {
                            transition: "opacity " + this.options.speed / 2 + "ms linear"
                        },
                        p = "next" === i ? {
                            transition: "opacity " + this.options.speed / 2 + "ms linear",
                            opacity: this.options.shadowSides
                        } : {
                            transition: "opacity " + this.options.speed / 2 + "ms linear " + this.options.speed / 2 + "ms"
                        };
                    o.css(u), a.css(d), s.css(c), l.css(p)
                }
                setTimeout(function () {
                    e.addClass(n.end ? "bb-flip-" + i + "-end" : "bb-flip-" + i), n.options.shadows && !n.end && (o.css({
                        opacity: "next" === i ? n.options.shadowFlip : 0
                    }), a.css({
                        opacity: "next" === i ? 0 : n.options.shadowFlip
                    }), s.css({
                        opacity: "next" === i ? n.options.shadowSides : 0
                    }), l.css({
                        opacity: "next" === i ? 0 : n.options.shadowSides
                    }))
                }, 25)
            },
            _addSide: function (t, e) {
                var i;
                switch (t) {
                    case "left":
                        i = f('<div class="bb-page"><div class="bb-back"><div class="bb-outer"><div class="bb-content"><div class="bb-inner">' + ("next" === e ? this.$current.html() : this.$nextItem.html()) + '</div></div><div class="bb-overlay"></div></div></div></div>').css("z-index", 102);
                        break;
                    case "middle":
                        i = f('<div class="bb-page"><div class="bb-front"><div class="bb-outer"><div class="bb-content"><div class="bb-inner">' + ("next" === e ? this.$current.html() : this.$nextItem.html()) + '</div></div><div class="bb-flipoverlay"></div></div></div><div class="bb-back"><div class="bb-outer"><div class="bb-content" style="width:' + this.elWidth + 'px"><div class="bb-inner">' + ("next" === e ? this.$nextItem.html() : this.$current.html()) + '</div></div><div class="bb-flipoverlay"></div></div></div></div>').css("z-index", 103);
                        break;
                    case "right":
                        i = f('<div class="bb-page"><div class="bb-front"><div class="bb-outer"><div class="bb-content"><div class="bb-inner">' + ("next" === e ? this.$nextItem.html() : this.$current.html()) + '</div></div><div class="bb-overlay"></div></div></div></div>').css("z-index", 101)
                }
                return i
            },
            _startSlideshow: function () {
                var t = this;
                this.slideshow = setTimeout(function () {
                    t._navigate("next"), t.options.autoplay && t._startSlideshow()
                }, this.options.interval)
            },
            _stopSlideshow: function () {
                this.options.autoplay && (clearTimeout(this.slideshow), this.options.autoplay = !1)
            },
            next: function () {
                this._action("ltr" === this.options.direction ? "next" : "prev")
            },
            prev: function () {
                this._action("ltr" === this.options.direction ? "prev" : "next")
            },
            jump: function (t) {
                if ((t -= 1) === this.current || t >= this.itemsCount || t < 0) return !1;
                var e;
                e = "ltr" === this.options.direction ? t > this.current ? "next" : "prev" : t > this.current ? "prev" : "next", this._action(e, t)
            },
            last: function () {
                this.jump(this.itemsCount)
            },
            first: function () {
                this.jump(1)
            },
            isActive: function () {
                return this.isAnimating
            },
            update: function () {
                var t = this.$items.eq(this.current);
                this.$items = this.$el.children(".bb-item"), this.itemsCount = this.$items.length, this.current = t.index()
            },
            destroy: function () {
                this.options.autoplay && this._stopSlideshow(), this.$el.removeClass("bb-" + this.options.orientation), this.$items.show(), "" !== this.options.nextEl && f(this.options.nextEl).off(".bookblock"), "" !== this.options.prevEl && f(this.options.prevEl).off(".bookblock"), e.off("debouncedresize")
            }
        };
        var n = function (t) {
            r.console && r.console.error(t)
        };
        f.fn.bookblock = function (e) {
            if ("string" == typeof e) {
                var i = Array.prototype.slice.call(arguments, 1);
                this.each(function () {
                    var t = f.data(this, "bookblock");
                    t ? f.isFunction(t[e]) && "_" !== e.charAt(0) ? t[e].apply(t, i) : n("no such method '" + e + "' for bookblock instance") : n("cannot call methods on bookblock prior to initialization; attempted to call method '" + e + "'")
                })
            } else this.each(function () {
                var t = f.data(this, "bookblock");
                t ? t._init() : t = f.data(this, "bookblock", new f.BookBlock(e, this))
            });
            return this
        }
    }(jQuery, window);
