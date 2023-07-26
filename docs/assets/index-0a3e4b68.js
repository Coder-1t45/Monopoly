var Ed = Object.defineProperty;
var Ad = (e, t, n) =>
    t in e
        ? Ed(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
        : (e[t] = n);
var He = (e, t, n) => (Ad(e, typeof t != "symbol" ? t + "" : t, n), n);
(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver((i) => {
        for (const o of i)
            if (o.type === "childList")
                for (const s of o.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(i) {
        const o = {};
        return (
            i.integrity && (o.integrity = i.integrity),
            i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
            i.crossOrigin === "use-credentials"
                ? (o.credentials = "include")
                : i.crossOrigin === "anonymous"
                ? (o.credentials = "omit")
                : (o.credentials = "same-origin"),
            o
        );
    }
    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o);
    }
})();
var Xa = { exports: {} },
    Ii = {},
    Ga = { exports: {} },
    U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pr = Symbol.for("react.element"),
    Nd = Symbol.for("react.portal"),
    jd = Symbol.for("react.fragment"),
    Rd = Symbol.for("react.strict_mode"),
    Td = Symbol.for("react.profiler"),
    _d = Symbol.for("react.provider"),
    Ld = Symbol.for("react.context"),
    Od = Symbol.for("react.forward_ref"),
    Id = Symbol.for("react.suspense"),
    Fd = Symbol.for("react.memo"),
    Md = Symbol.for("react.lazy"),
    Nl = Symbol.iterator;
function zd(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (Nl && e[Nl]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
}
var Ya = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    Za = Object.assign,
    eu = {};
function Ln(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = eu),
        (this.updater = n || Ya);
}
Ln.prototype.isReactComponent = {};
Ln.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
    this.updater.enqueueSetState(this, e, t, "setState");
};
Ln.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function tu() {}
tu.prototype = Ln.prototype;
function Es(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = eu),
        (this.updater = n || Ya);
}
var As = (Es.prototype = new tu());
As.constructor = Es;
Za(As, Ln.prototype);
As.isPureReactComponent = !0;
var jl = Array.isArray,
    nu = Object.prototype.hasOwnProperty,
    Ns = { current: null },
    ru = { key: !0, ref: !0, __self: !0, __source: !0 };
function iu(e, t, n) {
    var r,
        i = {},
        o = null,
        s = null;
    if (t != null)
        for (r in (t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t))
            nu.call(t, r) && !ru.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) i.children = n;
    else if (1 < a) {
        for (var u = Array(a), f = 0; f < a; f++) u[f] = arguments[f + 2];
        i.children = u;
    }
    if (e && e.defaultProps)
        for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
    return {
        $$typeof: Pr,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: Ns.current,
    };
}
function Dd(e, t) {
    return {
        $$typeof: Pr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
    };
}
function js(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Pr;
}
function Bd(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
        "$" +
        e.replace(/[=:]/g, function (n) {
            return t[n];
        })
    );
}
var Rl = /\/+/g;
function Gi(e, t) {
    return typeof e == "object" && e !== null && e.key != null
        ? Bd("" + e.key)
        : t.toString(36);
}
function Qr(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else
        switch (o) {
            case "string":
            case "number":
                s = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case Pr:
                    case Nd:
                        s = !0;
                }
        }
    if (s)
        return (
            (s = e),
            (i = i(s)),
            (e = r === "" ? "." + Gi(s, 0) : r),
            jl(i)
                ? ((n = ""),
                  e != null && (n = e.replace(Rl, "$&/") + "/"),
                  Qr(i, t, n, "", function (f) {
                      return f;
                  }))
                : i != null &&
                  (js(i) &&
                      (i = Dd(
                          i,
                          n +
                              (!i.key || (s && s.key === i.key)
                                  ? ""
                                  : ("" + i.key).replace(Rl, "$&/") + "/") +
                              e
                      )),
                  t.push(i)),
            1
        );
    if (((s = 0), (r = r === "" ? "." : r + ":"), jl(e)))
        for (var a = 0; a < e.length; a++) {
            o = e[a];
            var u = r + Gi(o, a);
            s += Qr(o, t, n, u, i);
        }
    else if (((u = zd(e)), typeof u == "function"))
        for (e = u.call(e), a = 0; !(o = e.next()).done; )
            (o = o.value), (u = r + Gi(o, a++)), (s += Qr(o, t, n, u, i));
    else if (o === "object")
        throw (
            ((t = String(e)),
            Error(
                "Objects are not valid as a React child (found: " +
                    (t === "[object Object]"
                        ? "object with keys {" + Object.keys(e).join(", ") + "}"
                        : t) +
                    "). If you meant to render a collection of children, use an array instead."
            ))
        );
    return s;
}
function jr(e, t, n) {
    if (e == null) return e;
    var r = [],
        i = 0;
    return (
        Qr(e, r, "", "", function (o) {
            return t.call(n, o, i++);
        }),
        r
    );
}
function bd(e) {
    if (e._status === -1) {
        var t = e._result;
        (t = t()),
            t.then(
                function (n) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 1), (e._result = n));
                },
                function (n) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 2), (e._result = n));
                }
            ),
            e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
}
var Ce = { current: null },
    $r = { transition: null },
    Ud = {
        ReactCurrentDispatcher: Ce,
        ReactCurrentBatchConfig: $r,
        ReactCurrentOwner: Ns,
    };
U.Children = {
    map: jr,
    forEach: function (e, t, n) {
        jr(
            e,
            function () {
                t.apply(this, arguments);
            },
            n
        );
    },
    count: function (e) {
        var t = 0;
        return (
            jr(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            jr(e, function (t) {
                return t;
            }) || []
        );
    },
    only: function (e) {
        if (!js(e))
            throw Error(
                "React.Children.only expected to receive a single React element child."
            );
        return e;
    },
};
U.Component = Ln;
U.Fragment = jd;
U.Profiler = Td;
U.PureComponent = Es;
U.StrictMode = Rd;
U.Suspense = Id;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ud;
U.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
                e +
                "."
        );
    var r = Za({}, e.props),
        i = e.key,
        o = e.ref,
        s = e._owner;
    if (t != null) {
        if (
            (t.ref !== void 0 && ((o = t.ref), (s = Ns.current)),
            t.key !== void 0 && (i = "" + t.key),
            e.type && e.type.defaultProps)
        )
            var a = e.type.defaultProps;
        for (u in t)
            nu.call(t, u) &&
                !ru.hasOwnProperty(u) &&
                (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
    }
    var u = arguments.length - 2;
    if (u === 1) r.children = n;
    else if (1 < u) {
        a = Array(u);
        for (var f = 0; f < u; f++) a[f] = arguments[f + 2];
        r.children = a;
    }
    return { $$typeof: Pr, type: e.type, key: i, ref: o, props: r, _owner: s };
};
U.createContext = function (e) {
    return (
        (e = {
            $$typeof: Ld,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (e.Provider = { $$typeof: _d, _context: e }),
        (e.Consumer = e)
    );
};
U.createElement = iu;
U.createFactory = function (e) {
    var t = iu.bind(null, e);
    return (t.type = e), t;
};
U.createRef = function () {
    return { current: null };
};
U.forwardRef = function (e) {
    return { $$typeof: Od, render: e };
};
U.isValidElement = js;
U.lazy = function (e) {
    return { $$typeof: Md, _payload: { _status: -1, _result: e }, _init: bd };
};
U.memo = function (e, t) {
    return { $$typeof: Fd, type: e, compare: t === void 0 ? null : t };
};
U.startTransition = function (e) {
    var t = $r.transition;
    $r.transition = {};
    try {
        e();
    } finally {
        $r.transition = t;
    }
};
U.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.");
};
U.useCallback = function (e, t) {
    return Ce.current.useCallback(e, t);
};
U.useContext = function (e) {
    return Ce.current.useContext(e);
};
U.useDebugValue = function () {};
U.useDeferredValue = function (e) {
    return Ce.current.useDeferredValue(e);
};
U.useEffect = function (e, t) {
    return Ce.current.useEffect(e, t);
};
U.useId = function () {
    return Ce.current.useId();
};
U.useImperativeHandle = function (e, t, n) {
    return Ce.current.useImperativeHandle(e, t, n);
};
U.useInsertionEffect = function (e, t) {
    return Ce.current.useInsertionEffect(e, t);
};
U.useLayoutEffect = function (e, t) {
    return Ce.current.useLayoutEffect(e, t);
};
U.useMemo = function (e, t) {
    return Ce.current.useMemo(e, t);
};
U.useReducer = function (e, t, n) {
    return Ce.current.useReducer(e, t, n);
};
U.useRef = function (e) {
    return Ce.current.useRef(e);
};
U.useState = function (e) {
    return Ce.current.useState(e);
};
U.useSyncExternalStore = function (e, t, n) {
    return Ce.current.useSyncExternalStore(e, t, n);
};
U.useTransition = function () {
    return Ce.current.useTransition();
};
U.version = "18.2.0";
Ga.exports = U;
var D = Ga.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qd = D,
    Vd = Symbol.for("react.element"),
    Jd = Symbol.for("react.fragment"),
    Hd = Object.prototype.hasOwnProperty,
    Kd =
        qd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Wd = { key: !0, ref: !0, __self: !0, __source: !0 };
function ou(e, t, n) {
    var r,
        i = {},
        o = null,
        s = null;
    n !== void 0 && (o = "" + n),
        t.key !== void 0 && (o = "" + t.key),
        t.ref !== void 0 && (s = t.ref);
    for (r in t) Hd.call(t, r) && !Wd.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: Vd,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: Kd.current,
    };
}
Ii.Fragment = Jd;
Ii.jsx = ou;
Ii.jsxs = ou;
Xa.exports = Ii;
var l = Xa.exports,
    Ao = {},
    su = { exports: {} },
    Fe = {},
    lu = { exports: {} },
    au = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function t(P, S) {
        var L = P.length;
        P.push(S);
        e: for (; 0 < L; ) {
            var z = (L - 1) >>> 1,
                O = P[z];
            if (0 < i(O, S)) (P[z] = S), (P[L] = O), (L = z);
            else break e;
        }
    }
    function n(P) {
        return P.length === 0 ? null : P[0];
    }
    function r(P) {
        if (P.length === 0) return null;
        var S = P[0],
            L = P.pop();
        if (L !== S) {
            P[0] = L;
            e: for (var z = 0, O = P.length, H = O >>> 1; z < H; ) {
                var G = 2 * (z + 1) - 1,
                    ue = P[G],
                    ye = G + 1,
                    fe = P[ye];
                if (0 > i(ue, L))
                    ye < O && 0 > i(fe, ue)
                        ? ((P[z] = fe), (P[ye] = L), (z = ye))
                        : ((P[z] = ue), (P[G] = L), (z = G));
                else if (ye < O && 0 > i(fe, L))
                    (P[z] = fe), (P[ye] = L), (z = ye);
                else break e;
            }
        }
        return S;
    }
    function i(P, S) {
        var L = P.sortIndex - S.sortIndex;
        return L !== 0 ? L : P.id - S.id;
    }
    if (
        typeof performance == "object" &&
        typeof performance.now == "function"
    ) {
        var o = performance;
        e.unstable_now = function () {
            return o.now();
        };
    } else {
        var s = Date,
            a = s.now();
        e.unstable_now = function () {
            return s.now() - a;
        };
    }
    var u = [],
        f = [],
        g = 1,
        h = null,
        m = 3,
        y = !1,
        A = !1,
        x = !1,
        B = typeof setTimeout == "function" ? setTimeout : null,
        d = typeof clearTimeout == "function" ? clearTimeout : null,
        c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function p(P) {
        for (var S = n(f); S !== null; ) {
            if (S.callback === null) r(f);
            else if (S.startTime <= P)
                r(f), (S.sortIndex = S.expirationTime), t(u, S);
            else break;
            S = n(f);
        }
    }
    function k(P) {
        if (((x = !1), p(P), !A))
            if (n(u) !== null) (A = !0), I(v);
            else {
                var S = n(f);
                S !== null && _(k, S.startTime - P);
            }
    }
    function v(P, S) {
        (A = !1), x && ((x = !1), d(R), (R = -1)), (y = !0);
        var L = m;
        try {
            for (
                p(S), h = n(u);
                h !== null && (!(h.expirationTime > S) || (P && !V()));

            ) {
                var z = h.callback;
                if (typeof z == "function") {
                    (h.callback = null), (m = h.priorityLevel);
                    var O = z(h.expirationTime <= S);
                    (S = e.unstable_now()),
                        typeof O == "function"
                            ? (h.callback = O)
                            : h === n(u) && r(u),
                        p(S);
                } else r(u);
                h = n(u);
            }
            if (h !== null) var H = !0;
            else {
                var G = n(f);
                G !== null && _(k, G.startTime - S), (H = !1);
            }
            return H;
        } finally {
            (h = null), (m = L), (y = !1);
        }
    }
    var C = !1,
        w = null,
        R = -1,
        b = 5,
        M = -1;
    function V() {
        return !(e.unstable_now() - M < b);
    }
    function J() {
        if (w !== null) {
            var P = e.unstable_now();
            M = P;
            var S = !0;
            try {
                S = w(!0, P);
            } finally {
                S ? j() : ((C = !1), (w = null));
            }
        } else C = !1;
    }
    var j;
    if (typeof c == "function")
        j = function () {
            c(J);
        };
    else if (typeof MessageChannel < "u") {
        var N = new MessageChannel(),
            F = N.port2;
        (N.port1.onmessage = J),
            (j = function () {
                F.postMessage(null);
            });
    } else
        j = function () {
            B(J, 0);
        };
    function I(P) {
        (w = P), C || ((C = !0), j());
    }
    function _(P, S) {
        R = B(function () {
            P(e.unstable_now());
        }, S);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (P) {
            P.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            A || y || ((A = !0), I(v));
        }),
        (e.unstable_forceFrameRate = function (P) {
            0 > P || 125 < P
                ? console.error(
                      "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (b = 0 < P ? Math.floor(1e3 / P) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return m;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(u);
        }),
        (e.unstable_next = function (P) {
            switch (m) {
                case 1:
                case 2:
                case 3:
                    var S = 3;
                    break;
                default:
                    S = m;
            }
            var L = m;
            m = S;
            try {
                return P();
            } finally {
                m = L;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (P, S) {
            switch (P) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    P = 3;
            }
            var L = m;
            m = P;
            try {
                return S();
            } finally {
                m = L;
            }
        }),
        (e.unstable_scheduleCallback = function (P, S, L) {
            var z = e.unstable_now();
            switch (
                (typeof L == "object" && L !== null
                    ? ((L = L.delay),
                      (L = typeof L == "number" && 0 < L ? z + L : z))
                    : (L = z),
                P)
            ) {
                case 1:
                    var O = -1;
                    break;
                case 2:
                    O = 250;
                    break;
                case 5:
                    O = 1073741823;
                    break;
                case 4:
                    O = 1e4;
                    break;
                default:
                    O = 5e3;
            }
            return (
                (O = L + O),
                (P = {
                    id: g++,
                    callback: S,
                    priorityLevel: P,
                    startTime: L,
                    expirationTime: O,
                    sortIndex: -1,
                }),
                L > z
                    ? ((P.sortIndex = L),
                      t(f, P),
                      n(u) === null &&
                          P === n(f) &&
                          (x ? (d(R), (R = -1)) : (x = !0), _(k, L - z)))
                    : ((P.sortIndex = O), t(u, P), A || y || ((A = !0), I(v))),
                P
            );
        }),
        (e.unstable_shouldYield = V),
        (e.unstable_wrapCallback = function (P) {
            var S = m;
            return function () {
                var L = m;
                m = S;
                try {
                    return P.apply(this, arguments);
                } finally {
                    m = L;
                }
            };
        });
})(au);
lu.exports = au;
var Qd = lu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uu = D,
    Ie = Qd;
function E(e) {
    for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
        n < arguments.length;
        n++
    )
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
}
var cu = new Set(),
    sr = {};
function tn(e, t) {
    En(e, t), En(e + "Capture", t);
}
function En(e, t) {
    for (sr[e] = t, e = 0; e < t.length; e++) cu.add(t[e]);
}
var mt = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
    ),
    No = Object.prototype.hasOwnProperty,
    $d =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Tl = {},
    _l = {};
function Xd(e) {
    return No.call(_l, e)
        ? !0
        : No.call(Tl, e)
        ? !1
        : $d.test(e)
        ? (_l[e] = !0)
        : ((Tl[e] = !0), !1);
}
function Gd(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r
                ? !1
                : n !== null
                ? !n.acceptsBooleans
                : ((e = e.toLowerCase().slice(0, 5)),
                  e !== "data-" && e !== "aria-");
        default:
            return !1;
    }
}
function Yd(e, t, n, r) {
    if (t === null || typeof t > "u" || Gd(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t;
        }
    return !1;
}
function Ee(e, t, n, r, i, o, s) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = i),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = o),
        (this.removeEmptyString = s);
}
var me = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
        me[e] = new Ee(e, 0, !1, e, null, !1, !1);
    });
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
].forEach(function (e) {
    var t = e[0];
    me[t] = new Ee(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    me[e] = new Ee(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
].forEach(function (e) {
    me[e] = new Ee(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
        me[e] = new Ee(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    me[e] = new Ee(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
    me[e] = new Ee(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
    me[e] = new Ee(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
    me[e] = new Ee(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Rs = /[\-:]([a-z])/g;
function Ts(e) {
    return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(Rs, Ts);
        me[t] = new Ee(t, 1, !1, e, null, !1, !1);
    });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(Rs, Ts);
        me[t] = new Ee(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Rs, Ts);
    me[t] = new Ee(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    me[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
me.xlinkHref = new Ee(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
    me[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function _s(e, t, n, r) {
    var i = me.hasOwnProperty(t) ? me[t] : null;
    (i !== null
        ? i.type !== 0
        : r ||
          !(2 < t.length) ||
          (t[0] !== "o" && t[0] !== "O") ||
          (t[1] !== "n" && t[1] !== "N")) &&
        (Yd(t, n, i, r) && (n = null),
        r || i === null
            ? Xd(t) &&
              (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : i.mustUseProperty
            ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
            : ((t = i.attributeName),
              (r = i.attributeNamespace),
              n === null
                  ? e.removeAttribute(t)
                  : ((i = i.type),
                    (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var wt = uu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Rr = Symbol.for("react.element"),
    sn = Symbol.for("react.portal"),
    ln = Symbol.for("react.fragment"),
    Ls = Symbol.for("react.strict_mode"),
    jo = Symbol.for("react.profiler"),
    du = Symbol.for("react.provider"),
    fu = Symbol.for("react.context"),
    Os = Symbol.for("react.forward_ref"),
    Ro = Symbol.for("react.suspense"),
    To = Symbol.for("react.suspense_list"),
    Is = Symbol.for("react.memo"),
    kt = Symbol.for("react.lazy"),
    pu = Symbol.for("react.offscreen"),
    Ll = Symbol.iterator;
function zn(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (Ll && e[Ll]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
}
var te = Object.assign,
    Yi;
function Kn(e) {
    if (Yi === void 0)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Yi = (t && t[1]) || "";
        }
    return (
        `
` +
        Yi +
        e
    );
}
var Zi = !1;
function eo(e, t) {
    if (!e || Zi) return "";
    Zi = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error();
                    },
                }),
                typeof Reflect == "object" && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, []);
                } catch (f) {
                    var r = f;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (f) {
                    r = f;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (f) {
                r = f;
            }
            e();
        }
    } catch (f) {
        if (f && r && typeof f.stack == "string") {
            for (
                var i = f.stack.split(`
`),
                    o = r.stack.split(`
`),
                    s = i.length - 1,
                    a = o.length - 1;
                1 <= s && 0 <= a && i[s] !== o[a];

            )
                a--;
            for (; 1 <= s && 0 <= a; s--, a--)
                if (i[s] !== o[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if ((s--, a--, 0 > a || i[s] !== o[a])) {
                                var u =
                                    `
` + i[s].replace(" at new ", " at ");
                                return (
                                    e.displayName &&
                                        u.includes("<anonymous>") &&
                                        (u = u.replace(
                                            "<anonymous>",
                                            e.displayName
                                        )),
                                    u
                                );
                            }
                        while (1 <= s && 0 <= a);
                    break;
                }
        }
    } finally {
        (Zi = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? Kn(e) : "";
}
function Zd(e) {
    switch (e.tag) {
        case 5:
            return Kn(e.type);
        case 16:
            return Kn("Lazy");
        case 13:
            return Kn("Suspense");
        case 19:
            return Kn("SuspenseList");
        case 0:
        case 2:
        case 15:
            return (e = eo(e.type, !1)), e;
        case 11:
            return (e = eo(e.type.render, !1)), e;
        case 1:
            return (e = eo(e.type, !0)), e;
        default:
            return "";
    }
}
function _o(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case ln:
            return "Fragment";
        case sn:
            return "Portal";
        case jo:
            return "Profiler";
        case Ls:
            return "StrictMode";
        case Ro:
            return "Suspense";
        case To:
            return "SuspenseList";
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case fu:
                return (e.displayName || "Context") + ".Consumer";
            case du:
                return (e._context.displayName || "Context") + ".Provider";
            case Os:
                var t = e.render;
                return (
                    (e = e.displayName),
                    e ||
                        ((e = t.displayName || t.name || ""),
                        (e =
                            e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
                    e
                );
            case Is:
                return (
                    (t = e.displayName || null),
                    t !== null ? t : _o(e.type) || "Memo"
                );
            case kt:
                (t = e._payload), (e = e._init);
                try {
                    return _o(e(t));
                } catch {}
        }
    return null;
}
function ef(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return (
                (e = t.render),
                (e = e.displayName || e.name || ""),
                t.displayName ||
                    (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
            );
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return _o(t);
        case 8:
            return t === Ls ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t;
    }
    return null;
}
function Ft(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return "";
    }
}
function hu(e) {
    var t = e.type;
    return (
        (e = e.nodeName) &&
        e.toLowerCase() === "input" &&
        (t === "checkbox" || t === "radio")
    );
}
function tf(e) {
    var t = hu(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (
        !e.hasOwnProperty(t) &&
        typeof n < "u" &&
        typeof n.get == "function" &&
        typeof n.set == "function"
    ) {
        var i = n.get,
            o = n.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return i.call(this);
                },
                set: function (s) {
                    (r = "" + s), o.call(this, s);
                },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (s) {
                    r = "" + s;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                },
            }
        );
    }
}
function Tr(e) {
    e._valueTracker || (e._valueTracker = tf(e));
}
function mu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return (
        e && (r = hu(e) ? (e.checked ? "true" : "false") : e.value),
        (e = r),
        e !== n ? (t.setValue(e), !0) : !1
    );
}
function ui(e) {
    if (
        ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
        return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function Lo(e, t) {
    var n = t.checked;
    return te({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked,
    });
}
function Ol(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    (n = Ft(t.value != null ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
                t.type === "checkbox" || t.type === "radio"
                    ? t.checked != null
                    : t.value != null,
        });
}
function yu(e, t) {
    (t = t.checked), t != null && _s(e, "checked", t, !1);
}
function Oo(e, t) {
    yu(e, t);
    var n = Ft(t.value),
        r = t.type;
    if (n != null)
        r === "number"
            ? ((n === 0 && e.value === "") || e.value != n) &&
              (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return;
    }
    t.hasOwnProperty("value")
        ? Io(e, t.type, n)
        : t.hasOwnProperty("defaultValue") && Io(e, t.type, Ft(t.defaultValue)),
        t.checked == null &&
            t.defaultChecked != null &&
            (e.defaultChecked = !!t.defaultChecked);
}
function Il(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (
            !(
                (r !== "submit" && r !== "reset") ||
                (t.value !== void 0 && t.value !== null)
            )
        )
            return;
        (t = "" + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t);
    }
    (n = e.name),
        n !== "" && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        n !== "" && (e.name = n);
}
function Io(e, t, n) {
    (t !== "number" || ui(e.ownerDocument) !== e) &&
        (n == null
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Wn = Array.isArray;
function vn(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            (i = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0);
    } else {
        for (n = "" + Ft(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                (e[i].selected = !0), r && (e[i].defaultSelected = !0);
                return;
            }
            t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
    }
}
function Fo(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
    return te({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
    });
}
function Fl(e, t) {
    var n = t.value;
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(E(92));
            if (Wn(n)) {
                if (1 < n.length) throw Error(E(93));
                n = n[0];
            }
            t = n;
        }
        t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: Ft(n) };
}
function gu(e, t) {
    var n = Ft(t.value),
        r = Ft(t.defaultValue);
    n != null &&
        ((n = "" + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r);
}
function Ml(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
        t !== "" &&
        t !== null &&
        (e.value = t);
}
function vu(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function Mo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
        ? vu(t)
        : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
}
var _r,
    wu = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, i) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(t, n, r, i);
                  });
              }
            : e;
    })(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
            e.innerHTML = t;
        else {
            for (
                _r = _r || document.createElement("div"),
                    _r.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                    t = _r.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
    });
function lr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var Gn = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    nf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Gn).forEach(function (e) {
    nf.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Gn[t] = Gn[e]);
    });
});
function Su(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
        ? ""
        : n ||
          typeof t != "number" ||
          t === 0 ||
          (Gn.hasOwnProperty(e) && Gn[e])
        ? ("" + t).trim()
        : t + "px";
}
function ku(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                i = Su(n, t[n], r);
            n === "float" && (n = "cssFloat"),
                r ? e.setProperty(n, i) : (e[n] = i);
        }
}
var rf = te(
    { menuitem: !0 },
    {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
    }
);
function zo(e, t) {
    if (t) {
        if (rf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(E(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(E(60));
            if (
                typeof t.dangerouslySetInnerHTML != "object" ||
                !("__html" in t.dangerouslySetInnerHTML)
            )
                throw Error(E(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(E(62));
    }
}
function Do(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0;
    }
}
var Bo = null;
function Fs(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    );
}
var bo = null,
    wn = null,
    Sn = null;
function zl(e) {
    if ((e = Ar(e))) {
        if (typeof bo != "function") throw Error(E(280));
        var t = e.stateNode;
        t && ((t = Bi(t)), bo(e.stateNode, e.type, t));
    }
}
function xu(e) {
    wn ? (Sn ? Sn.push(e) : (Sn = [e])) : (wn = e);
}
function Pu() {
    if (wn) {
        var e = wn,
            t = Sn;
        if (((Sn = wn = null), zl(e), t))
            for (e = 0; e < t.length; e++) zl(t[e]);
    }
}
function Cu(e, t) {
    return e(t);
}
function Eu() {}
var to = !1;
function Au(e, t, n) {
    if (to) return e(t, n);
    to = !0;
    try {
        return Cu(e, t, n);
    } finally {
        (to = !1), (wn !== null || Sn !== null) && (Eu(), Pu());
    }
}
function ar(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Bi(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) ||
                ((e = e.type),
                (r = !(
                    e === "button" ||
                    e === "input" ||
                    e === "select" ||
                    e === "textarea"
                ))),
                (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(E(231, t, typeof n));
    return n;
}
var Uo = !1;
if (mt)
    try {
        var Dn = {};
        Object.defineProperty(Dn, "passive", {
            get: function () {
                Uo = !0;
            },
        }),
            window.addEventListener("test", Dn, Dn),
            window.removeEventListener("test", Dn, Dn);
    } catch {
        Uo = !1;
    }
function of(e, t, n, r, i, o, s, a, u) {
    var f = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, f);
    } catch (g) {
        this.onError(g);
    }
}
var Yn = !1,
    ci = null,
    di = !1,
    qo = null,
    sf = {
        onError: function (e) {
            (Yn = !0), (ci = e);
        },
    };
function lf(e, t, n, r, i, o, s, a, u) {
    (Yn = !1), (ci = null), of.apply(sf, arguments);
}
function af(e, t, n, r, i, o, s, a, u) {
    if ((lf.apply(this, arguments), Yn)) {
        if (Yn) {
            var f = ci;
            (Yn = !1), (ci = null);
        } else throw Error(E(198));
        di || ((di = !0), (qo = f));
    }
}
function nn(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
        while (e);
    }
    return t.tag === 3 ? n : null;
}
function Nu(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (
            (t === null &&
                ((e = e.alternate), e !== null && (t = e.memoizedState)),
            t !== null)
        )
            return t.dehydrated;
    }
    return null;
}
function Dl(e) {
    if (nn(e) !== e) throw Error(E(188));
}
function uf(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = nn(e)), t === null)) throw Error(E(188));
        return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null) break;
        var o = i.alternate;
        if (o === null) {
            if (((r = i.return), r !== null)) {
                n = r;
                continue;
            }
            break;
        }
        if (i.child === o.child) {
            for (o = i.child; o; ) {
                if (o === n) return Dl(i), e;
                if (o === r) return Dl(i), t;
                o = o.sibling;
            }
            throw Error(E(188));
        }
        if (n.return !== r.return) (n = i), (r = o);
        else {
            for (var s = !1, a = i.child; a; ) {
                if (a === n) {
                    (s = !0), (n = i), (r = o);
                    break;
                }
                if (a === r) {
                    (s = !0), (r = i), (n = o);
                    break;
                }
                a = a.sibling;
            }
            if (!s) {
                for (a = o.child; a; ) {
                    if (a === n) {
                        (s = !0), (n = o), (r = i);
                        break;
                    }
                    if (a === r) {
                        (s = !0), (r = o), (n = i);
                        break;
                    }
                    a = a.sibling;
                }
                if (!s) throw Error(E(189));
            }
        }
        if (n.alternate !== r) throw Error(E(190));
    }
    if (n.tag !== 3) throw Error(E(188));
    return n.stateNode.current === n ? e : t;
}
function ju(e) {
    return (e = uf(e)), e !== null ? Ru(e) : null;
}
function Ru(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var t = Ru(e);
        if (t !== null) return t;
        e = e.sibling;
    }
    return null;
}
var Tu = Ie.unstable_scheduleCallback,
    Bl = Ie.unstable_cancelCallback,
    cf = Ie.unstable_shouldYield,
    df = Ie.unstable_requestPaint,
    ie = Ie.unstable_now,
    ff = Ie.unstable_getCurrentPriorityLevel,
    Ms = Ie.unstable_ImmediatePriority,
    _u = Ie.unstable_UserBlockingPriority,
    fi = Ie.unstable_NormalPriority,
    pf = Ie.unstable_LowPriority,
    Lu = Ie.unstable_IdlePriority,
    Fi = null,
    st = null;
function hf(e) {
    if (st && typeof st.onCommitFiberRoot == "function")
        try {
            st.onCommitFiberRoot(
                Fi,
                e,
                void 0,
                (e.current.flags & 128) === 128
            );
        } catch {}
}
var Ge = Math.clz32 ? Math.clz32 : gf,
    mf = Math.log,
    yf = Math.LN2;
function gf(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((mf(e) / yf) | 0)) | 0;
}
var Lr = 64,
    Or = 4194304;
function Qn(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e;
    }
}
function pi(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        i = e.suspendedLanes,
        o = e.pingedLanes,
        s = n & 268435455;
    if (s !== 0) {
        var a = s & ~i;
        a !== 0 ? (r = Qn(a)) : ((o &= s), o !== 0 && (r = Qn(o)));
    } else (s = n & ~i), s !== 0 ? (r = Qn(s)) : o !== 0 && (r = Qn(o));
    if (r === 0) return 0;
    if (
        t !== 0 &&
        t !== r &&
        !(t & i) &&
        ((i = r & -r),
        (o = t & -t),
        i >= o || (i === 16 && (o & 4194240) !== 0))
    )
        return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t; )
            (n = 31 - Ge(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
    return r;
}
function vf(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function wf(e, t) {
    for (
        var n = e.suspendedLanes,
            r = e.pingedLanes,
            i = e.expirationTimes,
            o = e.pendingLanes;
        0 < o;

    ) {
        var s = 31 - Ge(o),
            a = 1 << s,
            u = i[s];
        u === -1
            ? (!(a & n) || a & r) && (i[s] = vf(a, t))
            : u <= t && (e.expiredLanes |= a),
            (o &= ~a);
    }
}
function Vo(e) {
    return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
}
function Ou() {
    var e = Lr;
    return (Lr <<= 1), !(Lr & 4194240) && (Lr = 64), e;
}
function no(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function Cr(e, t, n) {
    (e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - Ge(t)),
        (e[t] = n);
}
function Sf(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - Ge(n),
            o = 1 << i;
        (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
    }
}
function zs(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - Ge(n),
            i = 1 << r;
        (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
    }
}
var W = 0;
function Iu(e) {
    return (
        (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
}
var Fu,
    Ds,
    Mu,
    zu,
    Du,
    Jo = !1,
    Ir = [],
    Nt = null,
    jt = null,
    Rt = null,
    ur = new Map(),
    cr = new Map(),
    Pt = [],
    kf =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
        );
function bl(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Nt = null;
            break;
        case "dragenter":
        case "dragleave":
            jt = null;
            break;
        case "mouseover":
        case "mouseout":
            Rt = null;
            break;
        case "pointerover":
        case "pointerout":
            ur.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            cr.delete(t.pointerId);
    }
}
function Bn(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o
        ? ((e = {
              blockedOn: t,
              domEventName: n,
              eventSystemFlags: r,
              nativeEvent: o,
              targetContainers: [i],
          }),
          t !== null && ((t = Ar(t)), t !== null && Ds(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
}
function xf(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return (Nt = Bn(Nt, e, t, n, r, i)), !0;
        case "dragenter":
            return (jt = Bn(jt, e, t, n, r, i)), !0;
        case "mouseover":
            return (Rt = Bn(Rt, e, t, n, r, i)), !0;
        case "pointerover":
            var o = i.pointerId;
            return ur.set(o, Bn(ur.get(o) || null, e, t, n, r, i)), !0;
        case "gotpointercapture":
            return (
                (o = i.pointerId),
                cr.set(o, Bn(cr.get(o) || null, e, t, n, r, i)),
                !0
            );
    }
    return !1;
}
function Bu(e) {
    var t = Jt(e.target);
    if (t !== null) {
        var n = nn(t);
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = Nu(n)), t !== null)) {
                    (e.blockedOn = t),
                        Du(e.priority, function () {
                            Mu(n);
                        });
                    return;
                }
            } else if (
                t === 3 &&
                n.stateNode.current.memoizedState.isDehydrated
            ) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function Xr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Ho(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            (Bo = r), n.target.dispatchEvent(r), (Bo = null);
        } else return (t = Ar(n)), t !== null && Ds(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}
function Ul(e, t, n) {
    Xr(e) && n.delete(t);
}
function Pf() {
    (Jo = !1),
        Nt !== null && Xr(Nt) && (Nt = null),
        jt !== null && Xr(jt) && (jt = null),
        Rt !== null && Xr(Rt) && (Rt = null),
        ur.forEach(Ul),
        cr.forEach(Ul);
}
function bn(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null),
        Jo ||
            ((Jo = !0),
            Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority, Pf)));
}
function dr(e) {
    function t(i) {
        return bn(i, e);
    }
    if (0 < Ir.length) {
        bn(Ir[0], e);
        for (var n = 1; n < Ir.length; n++) {
            var r = Ir[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        Nt !== null && bn(Nt, e),
            jt !== null && bn(jt, e),
            Rt !== null && bn(Rt, e),
            ur.forEach(t),
            cr.forEach(t),
            n = 0;
        n < Pt.length;
        n++
    )
        (r = Pt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Pt.length && ((n = Pt[0]), n.blockedOn === null); )
        Bu(n), n.blockedOn === null && Pt.shift();
}
var kn = wt.ReactCurrentBatchConfig,
    hi = !0;
function Cf(e, t, n, r) {
    var i = W,
        o = kn.transition;
    kn.transition = null;
    try {
        (W = 1), Bs(e, t, n, r);
    } finally {
        (W = i), (kn.transition = o);
    }
}
function Ef(e, t, n, r) {
    var i = W,
        o = kn.transition;
    kn.transition = null;
    try {
        (W = 4), Bs(e, t, n, r);
    } finally {
        (W = i), (kn.transition = o);
    }
}
function Bs(e, t, n, r) {
    if (hi) {
        var i = Ho(e, t, n, r);
        if (i === null) po(e, t, r, mi, n), bl(e, r);
        else if (xf(i, e, t, n, r)) r.stopPropagation();
        else if ((bl(e, r), t & 4 && -1 < kf.indexOf(e))) {
            for (; i !== null; ) {
                var o = Ar(i);
                if (
                    (o !== null && Fu(o),
                    (o = Ho(e, t, n, r)),
                    o === null && po(e, t, r, mi, n),
                    o === i)
                )
                    break;
                i = o;
            }
            i !== null && r.stopPropagation();
        } else po(e, t, r, null, n);
    }
}
var mi = null;
function Ho(e, t, n, r) {
    if (((mi = null), (e = Fs(r)), (e = Jt(e)), e !== null))
        if (((t = nn(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
            if (((e = Nu(t)), e !== null)) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (mi = e), null;
}
function bu(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (ff()) {
                case Ms:
                    return 1;
                case _u:
                    return 4;
                case fi:
                case pf:
                    return 16;
                case Lu:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var Et = null,
    bs = null,
    Gr = null;
function Uu() {
    if (Gr) return Gr;
    var e,
        t = bs,
        n = t.length,
        r,
        i = "value" in Et ? Et.value : Et.textContent,
        o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
    return (Gr = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Yr(e) {
    var t = e.keyCode;
    return (
        "charCode" in e
            ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
            : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    );
}
function Fr() {
    return !0;
}
function ql() {
    return !1;
}
function Me(e) {
    function t(n, r, i, o, s) {
        (this._reactName = n),
            (this._targetInst = i),
            (this.type = r),
            (this.nativeEvent = o),
            (this.target = s),
            (this.currentTarget = null);
        for (var a in e)
            e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
        return (
            (this.isDefaultPrevented = (
                o.defaultPrevented != null
                    ? o.defaultPrevented
                    : o.returnValue === !1
            )
                ? Fr
                : ql),
            (this.isPropagationStopped = ql),
            this
        );
    }
    return (
        te(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n &&
                    (n.preventDefault
                        ? n.preventDefault()
                        : typeof n.returnValue != "unknown" &&
                          (n.returnValue = !1),
                    (this.isDefaultPrevented = Fr));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n &&
                    (n.stopPropagation
                        ? n.stopPropagation()
                        : typeof n.cancelBubble != "unknown" &&
                          (n.cancelBubble = !0),
                    (this.isPropagationStopped = Fr));
            },
            persist: function () {},
            isPersistent: Fr,
        }),
        t
    );
}
var On = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    Us = Me(On),
    Er = te({}, On, { view: 0, detail: 0 }),
    Af = Me(Er),
    ro,
    io,
    Un,
    Mi = te({}, Er, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: qs,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0
                ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                : e.relatedTarget;
        },
        movementX: function (e) {
            return "movementX" in e
                ? e.movementX
                : (e !== Un &&
                      (Un && e.type === "mousemove"
                          ? ((ro = e.screenX - Un.screenX),
                            (io = e.screenY - Un.screenY))
                          : (io = ro = 0),
                      (Un = e)),
                  ro);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : io;
        },
    }),
    Vl = Me(Mi),
    Nf = te({}, Mi, { dataTransfer: 0 }),
    jf = Me(Nf),
    Rf = te({}, Er, { relatedTarget: 0 }),
    oo = Me(Rf),
    Tf = te({}, On, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    _f = Me(Tf),
    Lf = te({}, On, {
        clipboardData: function (e) {
            return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
        },
    }),
    Of = Me(Lf),
    If = te({}, On, { data: 0 }),
    Jl = Me(If),
    Ff = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
    },
    Mf = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
    },
    zf = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
    };
function Df(e) {
    var t = this.nativeEvent;
    return t.getModifierState
        ? t.getModifierState(e)
        : (e = zf[e])
        ? !!t[e]
        : !1;
}
function qs() {
    return Df;
}
var Bf = te({}, Er, {
        key: function (e) {
            if (e.key) {
                var t = Ff[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress"
                ? ((e = Yr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                : e.type === "keydown" || e.type === "keyup"
                ? Mf[e.keyCode] || "Unidentified"
                : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: qs,
        charCode: function (e) {
            return e.type === "keypress" ? Yr(e) : 0;
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === "keypress"
                ? Yr(e)
                : e.type === "keydown" || e.type === "keyup"
                ? e.keyCode
                : 0;
        },
    }),
    bf = Me(Bf),
    Uf = te({}, Mi, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
    }),
    Hl = Me(Uf),
    qf = te({}, Er, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: qs,
    }),
    Vf = Me(qf),
    Jf = te({}, On, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Hf = Me(Jf),
    Kf = te({}, Mi, {
        deltaX: function (e) {
            return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
        },
        deltaY: function (e) {
            return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    Wf = Me(Kf),
    Qf = [9, 13, 27, 32],
    Vs = mt && "CompositionEvent" in window,
    Zn = null;
mt && "documentMode" in document && (Zn = document.documentMode);
var $f = mt && "TextEvent" in window && !Zn,
    qu = mt && (!Vs || (Zn && 8 < Zn && 11 >= Zn)),
    Kl = String.fromCharCode(32),
    Wl = !1;
function Vu(e, t) {
    switch (e) {
        case "keyup":
            return Qf.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function Ju(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var an = !1;
function Xf(e, t) {
    switch (e) {
        case "compositionend":
            return Ju(t);
        case "keypress":
            return t.which !== 32 ? null : ((Wl = !0), Kl);
        case "textInput":
            return (e = t.data), e === Kl && Wl ? null : e;
        default:
            return null;
    }
}
function Gf(e, t) {
    if (an)
        return e === "compositionend" || (!Vs && Vu(e, t))
            ? ((e = Uu()), (Gr = bs = Et = null), (an = !1), e)
            : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (
                !(t.ctrlKey || t.altKey || t.metaKey) ||
                (t.ctrlKey && t.altKey)
            ) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
            }
            return null;
        case "compositionend":
            return qu && t.locale !== "ko" ? null : t.data;
        default:
            return null;
    }
}
var Yf = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
};
function Ql(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Yf[e.type] : t === "textarea";
}
function Hu(e, t, n, r) {
    xu(r),
        (t = yi(t, "onChange")),
        0 < t.length &&
            ((n = new Us("onChange", "change", null, n, r)),
            e.push({ event: n, listeners: t }));
}
var er = null,
    fr = null;
function Zf(e) {
    nc(e, 0);
}
function zi(e) {
    var t = dn(e);
    if (mu(t)) return e;
}
function ep(e, t) {
    if (e === "change") return t;
}
var Ku = !1;
if (mt) {
    var so;
    if (mt) {
        var lo = "oninput" in document;
        if (!lo) {
            var $l = document.createElement("div");
            $l.setAttribute("oninput", "return;"),
                (lo = typeof $l.oninput == "function");
        }
        so = lo;
    } else so = !1;
    Ku = so && (!document.documentMode || 9 < document.documentMode);
}
function Xl() {
    er && (er.detachEvent("onpropertychange", Wu), (fr = er = null));
}
function Wu(e) {
    if (e.propertyName === "value" && zi(fr)) {
        var t = [];
        Hu(t, fr, e, Fs(e)), Au(Zf, t);
    }
}
function tp(e, t, n) {
    e === "focusin"
        ? (Xl(), (er = t), (fr = n), er.attachEvent("onpropertychange", Wu))
        : e === "focusout" && Xl();
}
function np(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return zi(fr);
}
function rp(e, t) {
    if (e === "click") return zi(t);
}
function ip(e, t) {
    if (e === "input" || e === "change") return zi(t);
}
function op(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ze = typeof Object.is == "function" ? Object.is : op;
function pr(e, t) {
    if (Ze(e, t)) return !0;
    if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
    )
        return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!No.call(t, i) || !Ze(e[i], t[i])) return !1;
    }
    return !0;
}
function Gl(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function Yl(e, t) {
    var n = Gl(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (((r = e + n.textContent.length), e <= t && r >= t))
                return { node: n, offset: t - e };
            e = r;
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = Gl(n);
    }
}
function Qu(e, t) {
    return e && t
        ? e === t
            ? !0
            : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
            ? Qu(e, t.parentNode)
            : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
            ? !!(e.compareDocumentPosition(t) & 16)
            : !1
        : !1;
}
function $u() {
    for (var e = window, t = ui(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string";
        } catch {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = ui(e.document);
    }
    return t;
}
function Js(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
        t &&
        ((t === "input" &&
            (e.type === "text" ||
                e.type === "search" ||
                e.type === "tel" ||
                e.type === "url" ||
                e.type === "password")) ||
            t === "textarea" ||
            e.contentEditable === "true")
    );
}
function sp(e) {
    var t = $u(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (
        t !== n &&
        n &&
        n.ownerDocument &&
        Qu(n.ownerDocument.documentElement, n)
    ) {
        if (r !== null && Js(n)) {
            if (
                ((t = r.start),
                (e = r.end),
                e === void 0 && (e = t),
                "selectionStart" in n)
            )
                (n.selectionStart = t),
                    (n.selectionEnd = Math.min(e, n.value.length));
            else if (
                ((e =
                    ((t = n.ownerDocument || document) && t.defaultView) ||
                    window),
                e.getSelection)
            ) {
                e = e.getSelection();
                var i = n.textContent.length,
                    o = Math.min(r.start, i);
                (r = r.end === void 0 ? o : Math.min(r.end, i)),
                    !e.extend && o > r && ((i = r), (r = o), (o = i)),
                    (i = Yl(n, o));
                var s = Yl(n, r);
                i &&
                    s &&
                    (e.rangeCount !== 1 ||
                        e.anchorNode !== i.node ||
                        e.anchorOffset !== i.offset ||
                        e.focusNode !== s.node ||
                        e.focusOffset !== s.offset) &&
                    ((t = t.createRange()),
                    t.setStart(i.node, i.offset),
                    e.removeAllRanges(),
                    o > r
                        ? (e.addRange(t), e.extend(s.node, s.offset))
                        : (t.setEnd(s.node, s.offset), e.addRange(t)));
            }
        }
        for (t = [], e = n; (e = e.parentNode); )
            e.nodeType === 1 &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (
            typeof n.focus == "function" && n.focus(), n = 0;
            n < t.length;
            n++
        )
            (e = t[n]),
                (e.element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
    }
}
var lp = mt && "documentMode" in document && 11 >= document.documentMode,
    un = null,
    Ko = null,
    tr = null,
    Wo = !1;
function Zl(e, t, n) {
    var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Wo ||
        un == null ||
        un !== ui(r) ||
        ((r = un),
        "selectionStart" in r && Js(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = (
                  (r.ownerDocument && r.ownerDocument.defaultView) ||
                  window
              ).getSelection()),
              (r = {
                  anchorNode: r.anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              })),
        (tr && pr(tr, r)) ||
            ((tr = r),
            (r = yi(Ko, "onSelect")),
            0 < r.length &&
                ((t = new Us("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = un))));
}
function Mr(e, t) {
    var n = {};
    return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n["Webkit" + e] = "webkit" + t),
        (n["Moz" + e] = "moz" + t),
        n
    );
}
var cn = {
        animationend: Mr("Animation", "AnimationEnd"),
        animationiteration: Mr("Animation", "AnimationIteration"),
        animationstart: Mr("Animation", "AnimationStart"),
        transitionend: Mr("Transition", "TransitionEnd"),
    },
    ao = {},
    Xu = {};
mt &&
    ((Xu = document.createElement("div").style),
    "AnimationEvent" in window ||
        (delete cn.animationend.animation,
        delete cn.animationiteration.animation,
        delete cn.animationstart.animation),
    "TransitionEvent" in window || delete cn.transitionend.transition);
function Di(e) {
    if (ao[e]) return ao[e];
    if (!cn[e]) return e;
    var t = cn[e],
        n;
    for (n in t) if (t.hasOwnProperty(n) && n in Xu) return (ao[e] = t[n]);
    return e;
}
var Gu = Di("animationend"),
    Yu = Di("animationiteration"),
    Zu = Di("animationstart"),
    ec = Di("transitionend"),
    tc = new Map(),
    ea =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " "
        );
function zt(e, t) {
    tc.set(e, t), tn(t, [e]);
}
for (var uo = 0; uo < ea.length; uo++) {
    var co = ea[uo],
        ap = co.toLowerCase(),
        up = co[0].toUpperCase() + co.slice(1);
    zt(ap, "on" + up);
}
zt(Gu, "onAnimationEnd");
zt(Yu, "onAnimationIteration");
zt(Zu, "onAnimationStart");
zt("dblclick", "onDoubleClick");
zt("focusin", "onFocus");
zt("focusout", "onBlur");
zt(ec, "onTransitionEnd");
En("onMouseEnter", ["mouseout", "mouseover"]);
En("onMouseLeave", ["mouseout", "mouseover"]);
En("onPointerEnter", ["pointerout", "pointerover"]);
En("onPointerLeave", ["pointerout", "pointerover"]);
tn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
        " "
    )
);
tn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
    )
);
tn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
tn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
tn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
tn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var $n =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
        ),
    cp = new Set(
        "cancel close invalid load scroll toggle".split(" ").concat($n)
    );
function ta(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), af(r, t, void 0, e), (e.currentTarget = null);
}
function nc(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s],
                        u = a.instance,
                        f = a.currentTarget;
                    if (((a = a.listener), u !== o && i.isPropagationStopped()))
                        break e;
                    ta(i, a, f), (o = u);
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (
                        ((a = r[s]),
                        (u = a.instance),
                        (f = a.currentTarget),
                        (a = a.listener),
                        u !== o && i.isPropagationStopped())
                    )
                        break e;
                    ta(i, a, f), (o = u);
                }
        }
    }
    if (di) throw ((e = qo), (di = !1), (qo = null), e);
}
function $(e, t) {
    var n = t[Yo];
    n === void 0 && (n = t[Yo] = new Set());
    var r = e + "__bubble";
    n.has(r) || (rc(t, e, 2, !1), n.add(r));
}
function fo(e, t, n) {
    var r = 0;
    t && (r |= 4), rc(n, e, r, t);
}
var zr = "_reactListening" + Math.random().toString(36).slice(2);
function hr(e) {
    if (!e[zr]) {
        (e[zr] = !0),
            cu.forEach(function (n) {
                n !== "selectionchange" &&
                    (cp.has(n) || fo(n, !1, e), fo(n, !0, e));
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[zr] || ((t[zr] = !0), fo("selectionchange", !1, t));
    }
}
function rc(e, t, n, r) {
    switch (bu(t)) {
        case 1:
            var i = Cf;
            break;
        case 4:
            i = Ef;
            break;
        default:
            i = Bs;
    }
    (n = i.bind(null, t, n, e)),
        (i = void 0),
        !Uo ||
            (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
            (i = !0),
        r
            ? i !== void 0
                ? e.addEventListener(t, n, { capture: !0, passive: i })
                : e.addEventListener(t, n, !0)
            : i !== void 0
            ? e.addEventListener(t, n, { passive: i })
            : e.addEventListener(t, n, !1);
}
function po(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var a = r.stateNode.containerInfo;
                if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var u = s.tag;
                        if (
                            (u === 3 || u === 4) &&
                            ((u = s.stateNode.containerInfo),
                            u === i || (u.nodeType === 8 && u.parentNode === i))
                        )
                            return;
                        s = s.return;
                    }
                for (; a !== null; ) {
                    if (((s = Jt(a)), s === null)) return;
                    if (((u = s.tag), u === 5 || u === 6)) {
                        r = o = s;
                        continue e;
                    }
                    a = a.parentNode;
                }
            }
            r = r.return;
        }
    Au(function () {
        var f = o,
            g = Fs(n),
            h = [];
        e: {
            var m = tc.get(e);
            if (m !== void 0) {
                var y = Us,
                    A = e;
                switch (e) {
                    case "keypress":
                        if (Yr(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        y = bf;
                        break;
                    case "focusin":
                        (A = "focus"), (y = oo);
                        break;
                    case "focusout":
                        (A = "blur"), (y = oo);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        y = oo;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        y = Vl;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        y = jf;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        y = Vf;
                        break;
                    case Gu:
                    case Yu:
                    case Zu:
                        y = _f;
                        break;
                    case ec:
                        y = Hf;
                        break;
                    case "scroll":
                        y = Af;
                        break;
                    case "wheel":
                        y = Wf;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        y = Of;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        y = Hl;
                }
                var x = (t & 4) !== 0,
                    B = !x && e === "scroll",
                    d = x ? (m !== null ? m + "Capture" : null) : m;
                x = [];
                for (var c = f, p; c !== null; ) {
                    p = c;
                    var k = p.stateNode;
                    if (
                        (p.tag === 5 &&
                            k !== null &&
                            ((p = k),
                            d !== null &&
                                ((k = ar(c, d)),
                                k != null && x.push(mr(c, k, p)))),
                        B)
                    )
                        break;
                    c = c.return;
                }
                0 < x.length &&
                    ((m = new y(m, A, null, n, g)),
                    h.push({ event: m, listeners: x }));
            }
        }
        if (!(t & 7)) {
            e: {
                if (
                    ((m = e === "mouseover" || e === "pointerover"),
                    (y = e === "mouseout" || e === "pointerout"),
                    m &&
                        n !== Bo &&
                        (A = n.relatedTarget || n.fromElement) &&
                        (Jt(A) || A[yt]))
                )
                    break e;
                if (
                    (y || m) &&
                    ((m =
                        g.window === g
                            ? g
                            : (m = g.ownerDocument)
                            ? m.defaultView || m.parentWindow
                            : window),
                    y
                        ? ((A = n.relatedTarget || n.toElement),
                          (y = f),
                          (A = A ? Jt(A) : null),
                          A !== null &&
                              ((B = nn(A)),
                              A !== B || (A.tag !== 5 && A.tag !== 6)) &&
                              (A = null))
                        : ((y = null), (A = f)),
                    y !== A)
                ) {
                    if (
                        ((x = Vl),
                        (k = "onMouseLeave"),
                        (d = "onMouseEnter"),
                        (c = "mouse"),
                        (e === "pointerout" || e === "pointerover") &&
                            ((x = Hl),
                            (k = "onPointerLeave"),
                            (d = "onPointerEnter"),
                            (c = "pointer")),
                        (B = y == null ? m : dn(y)),
                        (p = A == null ? m : dn(A)),
                        (m = new x(k, c + "leave", y, n, g)),
                        (m.target = B),
                        (m.relatedTarget = p),
                        (k = null),
                        Jt(g) === f &&
                            ((x = new x(d, c + "enter", A, n, g)),
                            (x.target = p),
                            (x.relatedTarget = B),
                            (k = x)),
                        (B = k),
                        y && A)
                    )
                        t: {
                            for (x = y, d = A, c = 0, p = x; p; p = rn(p)) c++;
                            for (p = 0, k = d; k; k = rn(k)) p++;
                            for (; 0 < c - p; ) (x = rn(x)), c--;
                            for (; 0 < p - c; ) (d = rn(d)), p--;
                            for (; c--; ) {
                                if (
                                    x === d ||
                                    (d !== null && x === d.alternate)
                                )
                                    break t;
                                (x = rn(x)), (d = rn(d));
                            }
                            x = null;
                        }
                    else x = null;
                    y !== null && na(h, m, y, x, !1),
                        A !== null && B !== null && na(h, B, A, x, !0);
                }
            }
            e: {
                if (
                    ((m = f ? dn(f) : window),
                    (y = m.nodeName && m.nodeName.toLowerCase()),
                    y === "select" || (y === "input" && m.type === "file"))
                )
                    var v = ep;
                else if (Ql(m))
                    if (Ku) v = ip;
                    else {
                        v = np;
                        var C = tp;
                    }
                else
                    (y = m.nodeName) &&
                        y.toLowerCase() === "input" &&
                        (m.type === "checkbox" || m.type === "radio") &&
                        (v = rp);
                if (v && (v = v(e, f))) {
                    Hu(h, v, n, g);
                    break e;
                }
                C && C(e, m, f),
                    e === "focusout" &&
                        (C = m._wrapperState) &&
                        C.controlled &&
                        m.type === "number" &&
                        Io(m, "number", m.value);
            }
            switch (((C = f ? dn(f) : window), e)) {
                case "focusin":
                    (Ql(C) || C.contentEditable === "true") &&
                        ((un = C), (Ko = f), (tr = null));
                    break;
                case "focusout":
                    tr = Ko = un = null;
                    break;
                case "mousedown":
                    Wo = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (Wo = !1), Zl(h, n, g);
                    break;
                case "selectionchange":
                    if (lp) break;
                case "keydown":
                case "keyup":
                    Zl(h, n, g);
            }
            var w;
            if (Vs)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var R = "onCompositionStart";
                            break e;
                        case "compositionend":
                            R = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            R = "onCompositionUpdate";
                            break e;
                    }
                    R = void 0;
                }
            else
                an
                    ? Vu(e, n) && (R = "onCompositionEnd")
                    : e === "keydown" &&
                      n.keyCode === 229 &&
                      (R = "onCompositionStart");
            R &&
                (qu &&
                    n.locale !== "ko" &&
                    (an || R !== "onCompositionStart"
                        ? R === "onCompositionEnd" && an && (w = Uu())
                        : ((Et = g),
                          (bs = "value" in Et ? Et.value : Et.textContent),
                          (an = !0))),
                (C = yi(f, R)),
                0 < C.length &&
                    ((R = new Jl(R, e, null, n, g)),
                    h.push({ event: R, listeners: C }),
                    w
                        ? (R.data = w)
                        : ((w = Ju(n)), w !== null && (R.data = w)))),
                (w = $f ? Xf(e, n) : Gf(e, n)) &&
                    ((f = yi(f, "onBeforeInput")),
                    0 < f.length &&
                        ((g = new Jl(
                            "onBeforeInput",
                            "beforeinput",
                            null,
                            n,
                            g
                        )),
                        h.push({ event: g, listeners: f }),
                        (g.data = w)));
        }
        nc(h, t);
    });
}
function mr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function yi(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e,
            o = i.stateNode;
        i.tag === 5 &&
            o !== null &&
            ((i = o),
            (o = ar(e, n)),
            o != null && r.unshift(mr(e, o, i)),
            (o = ar(e, t)),
            o != null && r.push(mr(e, o, i))),
            (e = e.return);
    }
    return r;
}
function rn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function na(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r; ) {
        var a = n,
            u = a.alternate,
            f = a.stateNode;
        if (u !== null && u === r) break;
        a.tag === 5 &&
            f !== null &&
            ((a = f),
            i
                ? ((u = ar(n, o)), u != null && s.unshift(mr(n, u, a)))
                : i || ((u = ar(n, o)), u != null && s.push(mr(n, u, a)))),
            (n = n.return);
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
}
var dp = /\r\n?/g,
    fp = /\u0000|\uFFFD/g;
function ra(e) {
    return (typeof e == "string" ? e : "" + e)
        .replace(
            dp,
            `
`
        )
        .replace(fp, "");
}
function Dr(e, t, n) {
    if (((t = ra(t)), ra(e) !== t && n)) throw Error(E(425));
}
function gi() {}
var Qo = null,
    $o = null;
function Xo(e, t) {
    return (
        e === "textarea" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        (typeof t.dangerouslySetInnerHTML == "object" &&
            t.dangerouslySetInnerHTML !== null &&
            t.dangerouslySetInnerHTML.__html != null)
    );
}
var Go = typeof setTimeout == "function" ? setTimeout : void 0,
    pp = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ia = typeof Promise == "function" ? Promise : void 0,
    hp =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof ia < "u"
            ? function (e) {
                  return ia.resolve(null).then(e).catch(mp);
              }
            : Go;
function mp(e) {
    setTimeout(function () {
        throw e;
    });
}
function ho(e, t) {
    var n = t,
        r = 0;
    do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8))
            if (((n = i.data), n === "/$")) {
                if (r === 0) {
                    e.removeChild(i), dr(t);
                    return;
                }
                r--;
            } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
        n = i;
    } while (n);
    dr(t);
}
function Tt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
            if (t === "/$") return null;
        }
    }
    return e;
}
function oa(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--;
            } else n === "/$" && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
var In = Math.random().toString(36).slice(2),
    ot = "__reactFiber$" + In,
    yr = "__reactProps$" + In,
    yt = "__reactContainer$" + In,
    Yo = "__reactEvents$" + In,
    yp = "__reactListeners$" + In,
    gp = "__reactHandles$" + In;
function Jt(e) {
    var t = e[ot];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[yt] || n[ot])) {
            if (
                ((n = t.alternate),
                t.child !== null || (n !== null && n.child !== null))
            )
                for (e = oa(e); e !== null; ) {
                    if ((n = e[ot])) return n;
                    e = oa(e);
                }
            return t;
        }
        (e = n), (n = e.parentNode);
    }
    return null;
}
function Ar(e) {
    return (
        (e = e[ot] || e[yt]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
            ? null
            : e
    );
}
function dn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(E(33));
}
function Bi(e) {
    return e[yr] || null;
}
var Zo = [],
    fn = -1;
function Dt(e) {
    return { current: e };
}
function X(e) {
    0 > fn || ((e.current = Zo[fn]), (Zo[fn] = null), fn--);
}
function Q(e, t) {
    fn++, (Zo[fn] = e.current), (e.current = t);
}
var Mt = {},
    Se = Dt(Mt),
    je = Dt(!1),
    Xt = Mt;
function An(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Mt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        o;
    for (o in n) i[o] = t[o];
    return (
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
        i
    );
}
function Re(e) {
    return (e = e.childContextTypes), e != null;
}
function vi() {
    X(je), X(Se);
}
function sa(e, t, n) {
    if (Se.current !== Mt) throw Error(E(168));
    Q(Se, t), Q(je, n);
}
function ic(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
        return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(E(108, ef(e) || "Unknown", i));
    return te({}, n, r);
}
function wi(e) {
    return (
        (e =
            ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
            Mt),
        (Xt = Se.current),
        Q(Se, e),
        Q(je, je.current),
        !0
    );
}
function la(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(E(169));
    n
        ? ((e = ic(e, t, Xt)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          X(je),
          X(Se),
          Q(Se, e))
        : X(je),
        Q(je, n);
}
var dt = null,
    bi = !1,
    mo = !1;
function oc(e) {
    dt === null ? (dt = [e]) : dt.push(e);
}
function vp(e) {
    (bi = !0), oc(e);
}
function Bt() {
    if (!mo && dt !== null) {
        mo = !0;
        var e = 0,
            t = W;
        try {
            var n = dt;
            for (W = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (r !== null);
            }
            (dt = null), (bi = !1);
        } catch (i) {
            throw (dt !== null && (dt = dt.slice(e + 1)), Tu(Ms, Bt), i);
        } finally {
            (W = t), (mo = !1);
        }
    }
    return null;
}
var pn = [],
    hn = 0,
    Si = null,
    ki = 0,
    De = [],
    Be = 0,
    Gt = null,
    ft = 1,
    pt = "";
function qt(e, t) {
    (pn[hn++] = ki), (pn[hn++] = Si), (Si = e), (ki = t);
}
function sc(e, t, n) {
    (De[Be++] = ft), (De[Be++] = pt), (De[Be++] = Gt), (Gt = e);
    var r = ft;
    e = pt;
    var i = 32 - Ge(r) - 1;
    (r &= ~(1 << i)), (n += 1);
    var o = 32 - Ge(t) + i;
    if (30 < o) {
        var s = i - (i % 5);
        (o = (r & ((1 << s) - 1)).toString(32)),
            (r >>= s),
            (i -= s),
            (ft = (1 << (32 - Ge(t) + i)) | (n << i) | r),
            (pt = o + e);
    } else (ft = (1 << o) | (n << i) | r), (pt = e);
}
function Hs(e) {
    e.return !== null && (qt(e, 1), sc(e, 1, 0));
}
function Ks(e) {
    for (; e === Si; )
        (Si = pn[--hn]), (pn[hn] = null), (ki = pn[--hn]), (pn[hn] = null);
    for (; e === Gt; )
        (Gt = De[--Be]),
            (De[Be] = null),
            (pt = De[--Be]),
            (De[Be] = null),
            (ft = De[--Be]),
            (De[Be] = null);
}
var Oe = null,
    Le = null,
    Y = !1,
    Xe = null;
function lc(e, t) {
    var n = Ue(5, null, null, 0);
    (n.elementType = "DELETED"),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function aa(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                (t =
                    t.nodeType !== 1 ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                        ? null
                        : t),
                t !== null
                    ? ((e.stateNode = t), (Oe = e), (Le = Tt(t.firstChild)), !0)
                    : !1
            );
        case 6:
            return (
                (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
                t !== null ? ((e.stateNode = t), (Oe = e), (Le = null), !0) : !1
            );
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null
                    ? ((n = Gt !== null ? { id: ft, overflow: pt } : null),
                      (e.memoizedState = {
                          dehydrated: t,
                          treeContext: n,
                          retryLane: 1073741824,
                      }),
                      (n = Ue(18, null, null, 0)),
                      (n.stateNode = t),
                      (n.return = e),
                      (e.child = n),
                      (Oe = e),
                      (Le = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function es(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ts(e) {
    if (Y) {
        var t = Le;
        if (t) {
            var n = t;
            if (!aa(e, t)) {
                if (es(e)) throw Error(E(418));
                t = Tt(n.nextSibling);
                var r = Oe;
                t && aa(e, t)
                    ? lc(r, n)
                    : ((e.flags = (e.flags & -4097) | 2), (Y = !1), (Oe = e));
            }
        } else {
            if (es(e)) throw Error(E(418));
            (e.flags = (e.flags & -4097) | 2), (Y = !1), (Oe = e);
        }
    }
}
function ua(e) {
    for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
        e = e.return;
    Oe = e;
}
function Br(e) {
    if (e !== Oe) return !1;
    if (!Y) return ua(e), (Y = !0), !1;
    var t;
    if (
        ((t = e.tag !== 3) &&
            !(t = e.tag !== 5) &&
            ((t = e.type),
            (t = t !== "head" && t !== "body" && !Xo(e.type, e.memoizedProps))),
        t && (t = Le))
    ) {
        if (es(e)) throw (ac(), Error(E(418)));
        for (; t; ) lc(e, t), (t = Tt(t.nextSibling));
    }
    if ((ua(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
            throw Error(E(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Le = Tt(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
                }
                e = e.nextSibling;
            }
            Le = null;
        }
    } else Le = Oe ? Tt(e.stateNode.nextSibling) : null;
    return !0;
}
function ac() {
    for (var e = Le; e; ) e = Tt(e.nextSibling);
}
function Nn() {
    (Le = Oe = null), (Y = !1);
}
function Ws(e) {
    Xe === null ? (Xe = [e]) : Xe.push(e);
}
var wp = wt.ReactCurrentBatchConfig;
function We(e, t) {
    if (e && e.defaultProps) {
        (t = te({}, t)), (e = e.defaultProps);
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
    }
    return t;
}
var xi = Dt(null),
    Pi = null,
    mn = null,
    Qs = null;
function $s() {
    Qs = mn = Pi = null;
}
function Xs(e) {
    var t = xi.current;
    X(xi), (e._currentValue = t);
}
function ns(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if (
            ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
                : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
        )
            break;
        e = e.return;
    }
}
function xn(e, t) {
    (Pi = e),
        (Qs = mn = null),
        (e = e.dependencies),
        e !== null &&
            e.firstContext !== null &&
            (e.lanes & t && (Ne = !0), (e.firstContext = null));
}
function Ve(e) {
    var t = e._currentValue;
    if (Qs !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), mn === null)) {
            if (Pi === null) throw Error(E(308));
            (mn = e), (Pi.dependencies = { lanes: 0, firstContext: e });
        } else mn = mn.next = e;
    return t;
}
var Ht = null;
function Gs(e) {
    Ht === null ? (Ht = [e]) : Ht.push(e);
}
function uc(e, t, n, r) {
    var i = t.interleaved;
    return (
        i === null ? ((n.next = n), Gs(t)) : ((n.next = i.next), (i.next = n)),
        (t.interleaved = n),
        gt(e, r)
    );
}
function gt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
        (e.childLanes |= t),
            (n = e.alternate),
            n !== null && (n.childLanes |= t),
            (n = e),
            (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
}
var xt = !1;
function Ys(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function cc(e, t) {
    (e = e.updateQueue),
        t.updateQueue === e &&
            (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
            });
}
function ht(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
    };
}
function _t(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), K & 2)) {
        var i = r.pending;
        return (
            i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
            (r.pending = t),
            gt(e, n)
        );
    }
    return (
        (i = r.interleaved),
        i === null ? ((t.next = t), Gs(r)) : ((t.next = i.next), (i.next = t)),
        (r.interleaved = t),
        gt(e, n)
    );
}
function Zr(e, t, n) {
    if (
        ((t = t.updateQueue),
        t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), zs(e, n);
    }
}
function ca(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
            o = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                };
                o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
            } while (n !== null);
            o === null ? (i = o = t) : (o = o.next = t);
        } else i = o = t;
        (n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects,
        }),
            (e.updateQueue = n);
        return;
    }
    (e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t);
}
function Ci(e, t, n, r) {
    var i = e.updateQueue;
    xt = !1;
    var o = i.firstBaseUpdate,
        s = i.lastBaseUpdate,
        a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var u = a,
            f = u.next;
        (u.next = null), s === null ? (o = f) : (s.next = f), (s = u);
        var g = e.alternate;
        g !== null &&
            ((g = g.updateQueue),
            (a = g.lastBaseUpdate),
            a !== s &&
                (a === null ? (g.firstBaseUpdate = f) : (a.next = f),
                (g.lastBaseUpdate = u)));
    }
    if (o !== null) {
        var h = i.baseState;
        (s = 0), (g = f = u = null), (a = o);
        do {
            var m = a.lane,
                y = a.eventTime;
            if ((r & m) === m) {
                g !== null &&
                    (g = g.next =
                        {
                            eventTime: y,
                            lane: 0,
                            tag: a.tag,
                            payload: a.payload,
                            callback: a.callback,
                            next: null,
                        });
                e: {
                    var A = e,
                        x = a;
                    switch (((m = t), (y = n), x.tag)) {
                        case 1:
                            if (((A = x.payload), typeof A == "function")) {
                                h = A.call(y, h, m);
                                break e;
                            }
                            h = A;
                            break e;
                        case 3:
                            A.flags = (A.flags & -65537) | 128;
                        case 0:
                            if (
                                ((A = x.payload),
                                (m =
                                    typeof A == "function"
                                        ? A.call(y, h, m)
                                        : A),
                                m == null)
                            )
                                break e;
                            h = te({}, h, m);
                            break e;
                        case 2:
                            xt = !0;
                    }
                }
                a.callback !== null &&
                    a.lane !== 0 &&
                    ((e.flags |= 64),
                    (m = i.effects),
                    m === null ? (i.effects = [a]) : m.push(a));
            } else
                (y = {
                    eventTime: y,
                    lane: m,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null,
                }),
                    g === null ? ((f = g = y), (u = h)) : (g = g.next = y),
                    (s |= m);
            if (((a = a.next), a === null)) {
                if (((a = i.shared.pending), a === null)) break;
                (m = a),
                    (a = m.next),
                    (m.next = null),
                    (i.lastBaseUpdate = m),
                    (i.shared.pending = null);
            }
        } while (1);
        if (
            (g === null && (u = h),
            (i.baseState = u),
            (i.firstBaseUpdate = f),
            (i.lastBaseUpdate = g),
            (t = i.shared.interleaved),
            t !== null)
        ) {
            i = t;
            do (s |= i.lane), (i = i.next);
            while (i !== t);
        } else o === null && (i.shared.lanes = 0);
        (Zt |= s), (e.lanes = s), (e.memoizedState = h);
    }
}
function da(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback;
            if (i !== null) {
                if (((r.callback = null), (r = n), typeof i != "function"))
                    throw Error(E(191, i));
                i.call(r);
            }
        }
}
var dc = new uu.Component().refs;
function rs(e, t, n, r) {
    (t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : te({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ui = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? nn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Pe(),
            i = Ot(e),
            o = ht(r, i);
        (o.payload = t),
            n != null && (o.callback = n),
            (t = _t(e, o, i)),
            t !== null && (Ye(t, e, i, r), Zr(t, e, i));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Pe(),
            i = Ot(e),
            o = ht(r, i);
        (o.tag = 1),
            (o.payload = t),
            n != null && (o.callback = n),
            (t = _t(e, o, i)),
            t !== null && (Ye(t, e, i, r), Zr(t, e, i));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Pe(),
            r = Ot(e),
            i = ht(n, r);
        (i.tag = 2),
            t != null && (i.callback = t),
            (t = _t(e, i, r)),
            t !== null && (Ye(t, e, r, n), Zr(t, e, r));
    },
};
function fa(e, t, n, r, i, o, s) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
            ? e.shouldComponentUpdate(r, o, s)
            : t.prototype && t.prototype.isPureReactComponent
            ? !pr(n, r) || !pr(i, o)
            : !0
    );
}
function fc(e, t, n) {
    var r = !1,
        i = Mt,
        o = t.contextType;
    return (
        typeof o == "object" && o !== null
            ? (o = Ve(o))
            : ((i = Re(t) ? Xt : Se.current),
              (r = t.contextTypes),
              (o = (r = r != null) ? An(e, i) : Mt)),
        (t = new t(n, o)),
        (e.memoizedState =
            t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = Ui),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = i),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
        t
    );
}
function pa(e, t, n, r) {
    (e = t.state),
        typeof t.componentWillReceiveProps == "function" &&
            t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" &&
            t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Ui.enqueueReplaceState(t, t.state, null);
}
function is(e, t, n, r) {
    var i = e.stateNode;
    (i.props = n), (i.state = e.memoizedState), (i.refs = dc), Ys(e);
    var o = t.contextType;
    typeof o == "object" && o !== null
        ? (i.context = Ve(o))
        : ((o = Re(t) ? Xt : Se.current), (i.context = An(e, o))),
        (i.state = e.memoizedState),
        (o = t.getDerivedStateFromProps),
        typeof o == "function" && (rs(e, t, o, n), (i.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
            typeof i.getSnapshotBeforeUpdate == "function" ||
            (typeof i.UNSAFE_componentWillMount != "function" &&
                typeof i.componentWillMount != "function") ||
            ((t = i.state),
            typeof i.componentWillMount == "function" && i.componentWillMount(),
            typeof i.UNSAFE_componentWillMount == "function" &&
                i.UNSAFE_componentWillMount(),
            t !== i.state && Ui.enqueueReplaceState(i, i.state, null),
            Ci(e, n, i, r),
            (i.state = e.memoizedState)),
        typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function qn(e, t, n) {
    if (
        ((e = n.ref),
        e !== null && typeof e != "function" && typeof e != "object")
    ) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(E(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(E(147, e));
            var i = r,
                o = "" + e;
            return t !== null &&
                t.ref !== null &&
                typeof t.ref == "function" &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (s) {
                      var a = i.refs;
                      a === dc && (a = i.refs = {}),
                          s === null ? delete a[o] : (a[o] = s);
                  }),
                  (t._stringRef = o),
                  t);
        }
        if (typeof e != "string") throw Error(E(284));
        if (!n._owner) throw Error(E(290, e));
    }
    return e;
}
function br(e, t) {
    throw (
        ((e = Object.prototype.toString.call(t)),
        Error(
            E(
                31,
                e === "[object Object]"
                    ? "object with keys {" + Object.keys(t).join(", ") + "}"
                    : e
            )
        ))
    );
}
function ha(e) {
    var t = e._init;
    return t(e._payload);
}
function pc(e) {
    function t(d, c) {
        if (e) {
            var p = d.deletions;
            p === null ? ((d.deletions = [c]), (d.flags |= 16)) : p.push(c);
        }
    }
    function n(d, c) {
        if (!e) return null;
        for (; c !== null; ) t(d, c), (c = c.sibling);
        return null;
    }
    function r(d, c) {
        for (d = new Map(); c !== null; )
            c.key !== null ? d.set(c.key, c) : d.set(c.index, c),
                (c = c.sibling);
        return d;
    }
    function i(d, c) {
        return (d = It(d, c)), (d.index = 0), (d.sibling = null), d;
    }
    function o(d, c, p) {
        return (
            (d.index = p),
            e
                ? ((p = d.alternate),
                  p !== null
                      ? ((p = p.index), p < c ? ((d.flags |= 2), c) : p)
                      : ((d.flags |= 2), c))
                : ((d.flags |= 1048576), c)
        );
    }
    function s(d) {
        return e && d.alternate === null && (d.flags |= 2), d;
    }
    function a(d, c, p, k) {
        return c === null || c.tag !== 6
            ? ((c = xo(p, d.mode, k)), (c.return = d), c)
            : ((c = i(c, p)), (c.return = d), c);
    }
    function u(d, c, p, k) {
        var v = p.type;
        return v === ln
            ? g(d, c, p.props.children, k, p.key)
            : c !== null &&
              (c.elementType === v ||
                  (typeof v == "object" &&
                      v !== null &&
                      v.$$typeof === kt &&
                      ha(v) === c.type))
            ? ((k = i(c, p.props)), (k.ref = qn(d, c, p)), (k.return = d), k)
            : ((k = oi(p.type, p.key, p.props, null, d.mode, k)),
              (k.ref = qn(d, c, p)),
              (k.return = d),
              k);
    }
    function f(d, c, p, k) {
        return c === null ||
            c.tag !== 4 ||
            c.stateNode.containerInfo !== p.containerInfo ||
            c.stateNode.implementation !== p.implementation
            ? ((c = Po(p, d.mode, k)), (c.return = d), c)
            : ((c = i(c, p.children || [])), (c.return = d), c);
    }
    function g(d, c, p, k, v) {
        return c === null || c.tag !== 7
            ? ((c = Qt(p, d.mode, k, v)), (c.return = d), c)
            : ((c = i(c, p)), (c.return = d), c);
    }
    function h(d, c, p) {
        if ((typeof c == "string" && c !== "") || typeof c == "number")
            return (c = xo("" + c, d.mode, p)), (c.return = d), c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
                case Rr:
                    return (
                        (p = oi(c.type, c.key, c.props, null, d.mode, p)),
                        (p.ref = qn(d, null, c)),
                        (p.return = d),
                        p
                    );
                case sn:
                    return (c = Po(c, d.mode, p)), (c.return = d), c;
                case kt:
                    var k = c._init;
                    return h(d, k(c._payload), p);
            }
            if (Wn(c) || zn(c))
                return (c = Qt(c, d.mode, p, null)), (c.return = d), c;
            br(d, c);
        }
        return null;
    }
    function m(d, c, p, k) {
        var v = c !== null ? c.key : null;
        if ((typeof p == "string" && p !== "") || typeof p == "number")
            return v !== null ? null : a(d, c, "" + p, k);
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case Rr:
                    return p.key === v ? u(d, c, p, k) : null;
                case sn:
                    return p.key === v ? f(d, c, p, k) : null;
                case kt:
                    return (v = p._init), m(d, c, v(p._payload), k);
            }
            if (Wn(p) || zn(p)) return v !== null ? null : g(d, c, p, k, null);
            br(d, p);
        }
        return null;
    }
    function y(d, c, p, k, v) {
        if ((typeof k == "string" && k !== "") || typeof k == "number")
            return (d = d.get(p) || null), a(c, d, "" + k, v);
        if (typeof k == "object" && k !== null) {
            switch (k.$$typeof) {
                case Rr:
                    return (
                        (d = d.get(k.key === null ? p : k.key) || null),
                        u(c, d, k, v)
                    );
                case sn:
                    return (
                        (d = d.get(k.key === null ? p : k.key) || null),
                        f(c, d, k, v)
                    );
                case kt:
                    var C = k._init;
                    return y(d, c, p, C(k._payload), v);
            }
            if (Wn(k) || zn(k))
                return (d = d.get(p) || null), g(c, d, k, v, null);
            br(c, k);
        }
        return null;
    }
    function A(d, c, p, k) {
        for (
            var v = null, C = null, w = c, R = (c = 0), b = null;
            w !== null && R < p.length;
            R++
        ) {
            w.index > R ? ((b = w), (w = null)) : (b = w.sibling);
            var M = m(d, w, p[R], k);
            if (M === null) {
                w === null && (w = b);
                break;
            }
            e && w && M.alternate === null && t(d, w),
                (c = o(M, c, R)),
                C === null ? (v = M) : (C.sibling = M),
                (C = M),
                (w = b);
        }
        if (R === p.length) return n(d, w), Y && qt(d, R), v;
        if (w === null) {
            for (; R < p.length; R++)
                (w = h(d, p[R], k)),
                    w !== null &&
                        ((c = o(w, c, R)),
                        C === null ? (v = w) : (C.sibling = w),
                        (C = w));
            return Y && qt(d, R), v;
        }
        for (w = r(d, w); R < p.length; R++)
            (b = y(w, d, R, p[R], k)),
                b !== null &&
                    (e &&
                        b.alternate !== null &&
                        w.delete(b.key === null ? R : b.key),
                    (c = o(b, c, R)),
                    C === null ? (v = b) : (C.sibling = b),
                    (C = b));
        return (
            e &&
                w.forEach(function (V) {
                    return t(d, V);
                }),
            Y && qt(d, R),
            v
        );
    }
    function x(d, c, p, k) {
        var v = zn(p);
        if (typeof v != "function") throw Error(E(150));
        if (((p = v.call(p)), p == null)) throw Error(E(151));
        for (
            var C = (v = null), w = c, R = (c = 0), b = null, M = p.next();
            w !== null && !M.done;
            R++, M = p.next()
        ) {
            w.index > R ? ((b = w), (w = null)) : (b = w.sibling);
            var V = m(d, w, M.value, k);
            if (V === null) {
                w === null && (w = b);
                break;
            }
            e && w && V.alternate === null && t(d, w),
                (c = o(V, c, R)),
                C === null ? (v = V) : (C.sibling = V),
                (C = V),
                (w = b);
        }
        if (M.done) return n(d, w), Y && qt(d, R), v;
        if (w === null) {
            for (; !M.done; R++, M = p.next())
                (M = h(d, M.value, k)),
                    M !== null &&
                        ((c = o(M, c, R)),
                        C === null ? (v = M) : (C.sibling = M),
                        (C = M));
            return Y && qt(d, R), v;
        }
        for (w = r(d, w); !M.done; R++, M = p.next())
            (M = y(w, d, R, M.value, k)),
                M !== null &&
                    (e &&
                        M.alternate !== null &&
                        w.delete(M.key === null ? R : M.key),
                    (c = o(M, c, R)),
                    C === null ? (v = M) : (C.sibling = M),
                    (C = M));
        return (
            e &&
                w.forEach(function (J) {
                    return t(d, J);
                }),
            Y && qt(d, R),
            v
        );
    }
    function B(d, c, p, k) {
        if (
            (typeof p == "object" &&
                p !== null &&
                p.type === ln &&
                p.key === null &&
                (p = p.props.children),
            typeof p == "object" && p !== null)
        ) {
            switch (p.$$typeof) {
                case Rr:
                    e: {
                        for (var v = p.key, C = c; C !== null; ) {
                            if (C.key === v) {
                                if (((v = p.type), v === ln)) {
                                    if (C.tag === 7) {
                                        n(d, C.sibling),
                                            (c = i(C, p.props.children)),
                                            (c.return = d),
                                            (d = c);
                                        break e;
                                    }
                                } else if (
                                    C.elementType === v ||
                                    (typeof v == "object" &&
                                        v !== null &&
                                        v.$$typeof === kt &&
                                        ha(v) === C.type)
                                ) {
                                    n(d, C.sibling),
                                        (c = i(C, p.props)),
                                        (c.ref = qn(d, C, p)),
                                        (c.return = d),
                                        (d = c);
                                    break e;
                                }
                                n(d, C);
                                break;
                            } else t(d, C);
                            C = C.sibling;
                        }
                        p.type === ln
                            ? ((c = Qt(p.props.children, d.mode, k, p.key)),
                              (c.return = d),
                              (d = c))
                            : ((k = oi(
                                  p.type,
                                  p.key,
                                  p.props,
                                  null,
                                  d.mode,
                                  k
                              )),
                              (k.ref = qn(d, c, p)),
                              (k.return = d),
                              (d = k));
                    }
                    return s(d);
                case sn:
                    e: {
                        for (C = p.key; c !== null; ) {
                            if (c.key === C)
                                if (
                                    c.tag === 4 &&
                                    c.stateNode.containerInfo ===
                                        p.containerInfo &&
                                    c.stateNode.implementation ===
                                        p.implementation
                                ) {
                                    n(d, c.sibling),
                                        (c = i(c, p.children || [])),
                                        (c.return = d),
                                        (d = c);
                                    break e;
                                } else {
                                    n(d, c);
                                    break;
                                }
                            else t(d, c);
                            c = c.sibling;
                        }
                        (c = Po(p, d.mode, k)), (c.return = d), (d = c);
                    }
                    return s(d);
                case kt:
                    return (C = p._init), B(d, c, C(p._payload), k);
            }
            if (Wn(p)) return A(d, c, p, k);
            if (zn(p)) return x(d, c, p, k);
            br(d, p);
        }
        return (typeof p == "string" && p !== "") || typeof p == "number"
            ? ((p = "" + p),
              c !== null && c.tag === 6
                  ? (n(d, c.sibling), (c = i(c, p)), (c.return = d), (d = c))
                  : (n(d, c), (c = xo(p, d.mode, k)), (c.return = d), (d = c)),
              s(d))
            : n(d, c);
    }
    return B;
}
var jn = pc(!0),
    hc = pc(!1),
    Nr = {},
    lt = Dt(Nr),
    gr = Dt(Nr),
    vr = Dt(Nr);
function Kt(e) {
    if (e === Nr) throw Error(E(174));
    return e;
}
function Zs(e, t) {
    switch ((Q(vr, t), Q(gr, e), Q(lt, Nr), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Mo(null, "");
            break;
        default:
            (e = e === 8 ? t.parentNode : t),
                (t = e.namespaceURI || null),
                (e = e.tagName),
                (t = Mo(t, e));
    }
    X(lt), Q(lt, t);
}
function Rn() {
    X(lt), X(gr), X(vr);
}
function mc(e) {
    Kt(vr.current);
    var t = Kt(lt.current),
        n = Mo(t, e.type);
    t !== n && (Q(gr, e), Q(lt, n));
}
function el(e) {
    gr.current === e && (X(lt), X(gr));
}
var Z = Dt(0);
function Ei(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (
                n !== null &&
                ((n = n.dehydrated),
                n === null || n.data === "$?" || n.data === "$!")
            )
                return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t;
        } else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
}
var yo = [];
function tl() {
    for (var e = 0; e < yo.length; e++)
        yo[e]._workInProgressVersionPrimary = null;
    yo.length = 0;
}
var ei = wt.ReactCurrentDispatcher,
    go = wt.ReactCurrentBatchConfig,
    Yt = 0,
    ee = null,
    le = null,
    ce = null,
    Ai = !1,
    nr = !1,
    wr = 0,
    Sp = 0;
function ge() {
    throw Error(E(321));
}
function nl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ze(e[n], t[n])) return !1;
    return !0;
}
function rl(e, t, n, r, i, o) {
    if (
        ((Yt = o),
        (ee = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (ei.current = e === null || e.memoizedState === null ? Cp : Ep),
        (e = n(r, i)),
        nr)
    ) {
        o = 0;
        do {
            if (((nr = !1), (wr = 0), 25 <= o)) throw Error(E(301));
            (o += 1),
                (ce = le = null),
                (t.updateQueue = null),
                (ei.current = Ap),
                (e = n(r, i));
        } while (nr);
    }
    if (
        ((ei.current = Ni),
        (t = le !== null && le.next !== null),
        (Yt = 0),
        (ce = le = ee = null),
        (Ai = !1),
        t)
    )
        throw Error(E(300));
    return e;
}
function il() {
    var e = wr !== 0;
    return (wr = 0), e;
}
function it() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
    };
    return ce === null ? (ee.memoizedState = ce = e) : (ce = ce.next = e), ce;
}
function Je() {
    if (le === null) {
        var e = ee.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = le.next;
    var t = ce === null ? ee.memoizedState : ce.next;
    if (t !== null) (ce = t), (le = e);
    else {
        if (e === null) throw Error(E(310));
        (le = e),
            (e = {
                memoizedState: le.memoizedState,
                baseState: le.baseState,
                baseQueue: le.baseQueue,
                queue: le.queue,
                next: null,
            }),
            ce === null ? (ee.memoizedState = ce = e) : (ce = ce.next = e);
    }
    return ce;
}
function Sr(e, t) {
    return typeof t == "function" ? t(e) : t;
}
function vo(e) {
    var t = Je(),
        n = t.queue;
    if (n === null) throw Error(E(311));
    n.lastRenderedReducer = e;
    var r = le,
        i = r.baseQueue,
        o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var s = i.next;
            (i.next = o.next), (o.next = s);
        }
        (r.baseQueue = i = o), (n.pending = null);
    }
    if (i !== null) {
        (o = i.next), (r = r.baseState);
        var a = (s = null),
            u = null,
            f = o;
        do {
            var g = f.lane;
            if ((Yt & g) === g)
                u !== null &&
                    (u = u.next =
                        {
                            lane: 0,
                            action: f.action,
                            hasEagerState: f.hasEagerState,
                            eagerState: f.eagerState,
                            next: null,
                        }),
                    (r = f.hasEagerState ? f.eagerState : e(r, f.action));
            else {
                var h = {
                    lane: g,
                    action: f.action,
                    hasEagerState: f.hasEagerState,
                    eagerState: f.eagerState,
                    next: null,
                };
                u === null ? ((a = u = h), (s = r)) : (u = u.next = h),
                    (ee.lanes |= g),
                    (Zt |= g);
            }
            f = f.next;
        } while (f !== null && f !== o);
        u === null ? (s = r) : (u.next = a),
            Ze(r, t.memoizedState) || (Ne = !0),
            (t.memoizedState = r),
            (t.baseState = s),
            (t.baseQueue = u),
            (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
        i = e;
        do (o = i.lane), (ee.lanes |= o), (Zt |= o), (i = i.next);
        while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function wo(e) {
    var t = Je(),
        n = t.queue;
    if (n === null) throw Error(E(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = (i = i.next);
        do (o = e(o, s.action)), (s = s.next);
        while (s !== i);
        Ze(o, t.memoizedState) || (Ne = !0),
            (t.memoizedState = o),
            t.baseQueue === null && (t.baseState = o),
            (n.lastRenderedState = o);
    }
    return [o, r];
}
function yc() {}
function gc(e, t) {
    var n = ee,
        r = Je(),
        i = t(),
        o = !Ze(r.memoizedState, i);
    if (
        (o && ((r.memoizedState = i), (Ne = !0)),
        (r = r.queue),
        ol(Sc.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || o || (ce !== null && ce.memoizedState.tag & 1))
    ) {
        if (
            ((n.flags |= 2048),
            kr(9, wc.bind(null, n, r, i, t), void 0, null),
            de === null)
        )
            throw Error(E(349));
        Yt & 30 || vc(n, t, i);
    }
    return i;
}
function vc(e, t, n) {
    (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = ee.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (ee.updateQueue = t),
              (t.stores = [e]))
            : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function wc(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), kc(t) && xc(e);
}
function Sc(e, t, n) {
    return n(function () {
        kc(t) && xc(e);
    });
}
function kc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ze(e, n);
    } catch {
        return !0;
    }
}
function xc(e) {
    var t = gt(e, 1);
    t !== null && Ye(t, e, 1, -1);
}
function ma(e) {
    var t = it();
    return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Sr,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = Pp.bind(null, ee, e)),
        [t.memoizedState, e]
    );
}
function kr(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = ee.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (ee.updateQueue = t),
              (t.lastEffect = e.next = e))
            : ((n = t.lastEffect),
              n === null
                  ? (t.lastEffect = e.next = e)
                  : ((r = n.next),
                    (n.next = e),
                    (e.next = r),
                    (t.lastEffect = e))),
        e
    );
}
function Pc() {
    return Je().memoizedState;
}
function ti(e, t, n, r) {
    var i = it();
    (ee.flags |= e),
        (i.memoizedState = kr(1 | t, n, void 0, r === void 0 ? null : r));
}
function qi(e, t, n, r) {
    var i = Je();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (le !== null) {
        var s = le.memoizedState;
        if (((o = s.destroy), r !== null && nl(r, s.deps))) {
            i.memoizedState = kr(t, n, o, r);
            return;
        }
    }
    (ee.flags |= e), (i.memoizedState = kr(1 | t, n, o, r));
}
function ya(e, t) {
    return ti(8390656, 8, e, t);
}
function ol(e, t) {
    return qi(2048, 8, e, t);
}
function Cc(e, t) {
    return qi(4, 2, e, t);
}
function Ec(e, t) {
    return qi(4, 4, e, t);
}
function Ac(e, t) {
    if (typeof t == "function")
        return (
            (e = e()),
            t(e),
            function () {
                t(null);
            }
        );
    if (t != null)
        return (
            (e = e()),
            (t.current = e),
            function () {
                t.current = null;
            }
        );
}
function Nc(e, t, n) {
    return (
        (n = n != null ? n.concat([e]) : null), qi(4, 4, Ac.bind(null, t, e), n)
    );
}
function sl() {}
function jc(e, t) {
    var n = Je();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && nl(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e);
}
function Rc(e, t) {
    var n = Je();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && nl(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Tc(e, t, n) {
    return Yt & 21
        ? (Ze(n, t) ||
              ((n = Ou()), (ee.lanes |= n), (Zt |= n), (e.baseState = !0)),
          t)
        : (e.baseState && ((e.baseState = !1), (Ne = !0)),
          (e.memoizedState = n));
}
function kp(e, t) {
    var n = W;
    (W = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = go.transition;
    go.transition = {};
    try {
        e(!1), t();
    } finally {
        (W = n), (go.transition = r);
    }
}
function _c() {
    return Je().memoizedState;
}
function xp(e, t, n) {
    var r = Ot(e);
    if (
        ((n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
        Lc(e))
    )
        Oc(t, n);
    else if (((n = uc(e, t, n, r)), n !== null)) {
        var i = Pe();
        Ye(n, e, r, i), Ic(n, t, r);
    }
}
function Pp(e, t, n) {
    var r = Ot(e),
        i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        };
    if (Lc(e)) Oc(t, i);
    else {
        var o = e.alternate;
        if (
            e.lanes === 0 &&
            (o === null || o.lanes === 0) &&
            ((o = t.lastRenderedReducer), o !== null)
        )
            try {
                var s = t.lastRenderedState,
                    a = o(s, n);
                if (((i.hasEagerState = !0), (i.eagerState = a), Ze(a, s))) {
                    var u = t.interleaved;
                    u === null
                        ? ((i.next = i), Gs(t))
                        : ((i.next = u.next), (u.next = i)),
                        (t.interleaved = i);
                    return;
                }
            } catch {
            } finally {
            }
        (n = uc(e, t, i, r)),
            n !== null && ((i = Pe()), Ye(n, e, r, i), Ic(n, t, r));
    }
}
function Lc(e) {
    var t = e.alternate;
    return e === ee || (t !== null && t === ee);
}
function Oc(e, t) {
    nr = Ai = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t);
}
function Ic(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), zs(e, n);
    }
}
var Ni = {
        readContext: Ve,
        useCallback: ge,
        useContext: ge,
        useEffect: ge,
        useImperativeHandle: ge,
        useInsertionEffect: ge,
        useLayoutEffect: ge,
        useMemo: ge,
        useReducer: ge,
        useRef: ge,
        useState: ge,
        useDebugValue: ge,
        useDeferredValue: ge,
        useTransition: ge,
        useMutableSource: ge,
        useSyncExternalStore: ge,
        useId: ge,
        unstable_isNewReconciler: !1,
    },
    Cp = {
        readContext: Ve,
        useCallback: function (e, t) {
            return (it().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: Ve,
        useEffect: ya,
        useImperativeHandle: function (e, t, n) {
            return (
                (n = n != null ? n.concat([e]) : null),
                ti(4194308, 4, Ac.bind(null, t, e), n)
            );
        },
        useLayoutEffect: function (e, t) {
            return ti(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return ti(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = it();
            return (
                (t = t === void 0 ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
            );
        },
        useReducer: function (e, t, n) {
            var r = it();
            return (
                (t = n !== void 0 ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = xp.bind(null, ee, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var t = it();
            return (e = { current: e }), (t.memoizedState = e);
        },
        useState: ma,
        useDebugValue: sl,
        useDeferredValue: function (e) {
            return (it().memoizedState = e);
        },
        useTransition: function () {
            var e = ma(!1),
                t = e[0];
            return (e = kp.bind(null, e[1])), (it().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = ee,
                i = it();
            if (Y) {
                if (n === void 0) throw Error(E(407));
                n = n();
            } else {
                if (((n = t()), de === null)) throw Error(E(349));
                Yt & 30 || vc(r, t, n);
            }
            i.memoizedState = n;
            var o = { value: n, getSnapshot: t };
            return (
                (i.queue = o),
                ya(Sc.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                kr(9, wc.bind(null, r, o, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = it(),
                t = de.identifierPrefix;
            if (Y) {
                var n = pt,
                    r = ft;
                (n = (r & ~(1 << (32 - Ge(r) - 1))).toString(32) + n),
                    (t = ":" + t + "R" + n),
                    (n = wr++),
                    0 < n && (t += "H" + n.toString(32)),
                    (t += ":");
            } else (n = Sp++), (t = ":" + t + "r" + n.toString(32) + ":");
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    Ep = {
        readContext: Ve,
        useCallback: jc,
        useContext: Ve,
        useEffect: ol,
        useImperativeHandle: Nc,
        useInsertionEffect: Cc,
        useLayoutEffect: Ec,
        useMemo: Rc,
        useReducer: vo,
        useRef: Pc,
        useState: function () {
            return vo(Sr);
        },
        useDebugValue: sl,
        useDeferredValue: function (e) {
            var t = Je();
            return Tc(t, le.memoizedState, e);
        },
        useTransition: function () {
            var e = vo(Sr)[0],
                t = Je().memoizedState;
            return [e, t];
        },
        useMutableSource: yc,
        useSyncExternalStore: gc,
        useId: _c,
        unstable_isNewReconciler: !1,
    },
    Ap = {
        readContext: Ve,
        useCallback: jc,
        useContext: Ve,
        useEffect: ol,
        useImperativeHandle: Nc,
        useInsertionEffect: Cc,
        useLayoutEffect: Ec,
        useMemo: Rc,
        useReducer: wo,
        useRef: Pc,
        useState: function () {
            return wo(Sr);
        },
        useDebugValue: sl,
        useDeferredValue: function (e) {
            var t = Je();
            return le === null
                ? (t.memoizedState = e)
                : Tc(t, le.memoizedState, e);
        },
        useTransition: function () {
            var e = wo(Sr)[0],
                t = Je().memoizedState;
            return [e, t];
        },
        useMutableSource: yc,
        useSyncExternalStore: gc,
        useId: _c,
        unstable_isNewReconciler: !1,
    };
function Tn(e, t) {
    try {
        var n = "",
            r = t;
        do (n += Zd(r)), (r = r.return);
        while (r);
        var i = n;
    } catch (o) {
        i =
            `
Error generating stack: ` +
            o.message +
            `
` +
            o.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
}
function So(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function os(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var Np = typeof WeakMap == "function" ? WeakMap : Map;
function Fc(e, t, n) {
    (n = ht(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
        (n.callback = function () {
            Ri || ((Ri = !0), (ms = r)), os(e, t);
        }),
        n
    );
}
function Mc(e, t, n) {
    (n = ht(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        (n.payload = function () {
            return r(i);
        }),
            (n.callback = function () {
                os(e, t);
            });
    }
    var o = e.stateNode;
    return (
        o !== null &&
            typeof o.componentDidCatch == "function" &&
            (n.callback = function () {
                os(e, t),
                    typeof r != "function" &&
                        (Lt === null ? (Lt = new Set([this])) : Lt.add(this));
                var s = t.stack;
                this.componentDidCatch(t.value, {
                    componentStack: s !== null ? s : "",
                });
            }),
        n
    );
}
function ga(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Np();
        var i = new Set();
        r.set(t, i);
    } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
    i.has(n) || (i.add(n), (e = Up.bind(null, e, t, n)), t.then(e, e));
}
function va(e) {
    do {
        var t;
        if (
            ((t = e.tag === 13) &&
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated !== null : !0)),
            t)
        )
            return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function wa(e, t, n, r, i) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = i), e)
        : (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 &&
                    (n.alternate === null
                        ? (n.tag = 17)
                        : ((t = ht(-1, 1)), (t.tag = 2), _t(n, t, 1))),
                (n.lanes |= 1)),
          e);
}
var jp = wt.ReactCurrentOwner,
    Ne = !1;
function xe(e, t, n, r) {
    t.child = e === null ? hc(t, null, n, r) : jn(t, e.child, n, r);
}
function Sa(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return (
        xn(t, i),
        (r = rl(e, t, n, r, o, i)),
        (n = il()),
        e !== null && !Ne
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~i),
              vt(e, t, i))
            : (Y && n && Hs(t), (t.flags |= 1), xe(e, t, r, i), t.child)
    );
}
function ka(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" &&
            !hl(o) &&
            o.defaultProps === void 0 &&
            n.compare === null &&
            n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = o), zc(e, t, o, r, i))
            : ((e = oi(n.type, null, r, t, t.mode, i)),
              (e.ref = t.ref),
              (e.return = t),
              (t.child = e));
    }
    if (((o = e.child), !(e.lanes & i))) {
        var s = o.memoizedProps;
        if (
            ((n = n.compare),
            (n = n !== null ? n : pr),
            n(s, r) && e.ref === t.ref)
        )
            return vt(e, t, i);
    }
    return (
        (t.flags |= 1),
        (e = It(o, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
    );
}
function zc(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (pr(o, r) && e.ref === t.ref)
            if (((Ne = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
                e.flags & 131072 && (Ne = !0);
            else return (t.lanes = e.lanes), vt(e, t, i);
    }
    return ss(e, t, n, r, i);
}
function Dc(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                Q(gn, _e),
                (_e |= n);
        else {
            if (!(n & 1073741824))
                return (
                    (e = o !== null ? o.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null,
                    }),
                    (t.updateQueue = null),
                    Q(gn, _e),
                    (_e |= e),
                    null
                );
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                (r = o !== null ? o.baseLanes : n),
                Q(gn, _e),
                (_e |= r);
        }
    else
        o !== null
            ? ((r = o.baseLanes | n), (t.memoizedState = null))
            : (r = n),
            Q(gn, _e),
            (_e |= r);
    return xe(e, t, i, n), t.child;
}
function Bc(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
}
function ss(e, t, n, r, i) {
    var o = Re(n) ? Xt : Se.current;
    return (
        (o = An(t, o)),
        xn(t, i),
        (n = rl(e, t, n, r, o, i)),
        (r = il()),
        e !== null && !Ne
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~i),
              vt(e, t, i))
            : (Y && r && Hs(t), (t.flags |= 1), xe(e, t, n, i), t.child)
    );
}
function xa(e, t, n, r, i) {
    if (Re(n)) {
        var o = !0;
        wi(t);
    } else o = !1;
    if ((xn(t, i), t.stateNode === null))
        ni(e, t), fc(t, n, r), is(t, n, r, i), (r = !0);
    else if (e === null) {
        var s = t.stateNode,
            a = t.memoizedProps;
        s.props = a;
        var u = s.context,
            f = n.contextType;
        typeof f == "object" && f !== null
            ? (f = Ve(f))
            : ((f = Re(n) ? Xt : Se.current), (f = An(t, f)));
        var g = n.getDerivedStateFromProps,
            h =
                typeof g == "function" ||
                typeof s.getSnapshotBeforeUpdate == "function";
        h ||
            (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
                typeof s.componentWillReceiveProps != "function") ||
            ((a !== r || u !== f) && pa(t, s, r, f)),
            (xt = !1);
        var m = t.memoizedState;
        (s.state = m),
            Ci(t, r, s, i),
            (u = t.memoizedState),
            a !== r || m !== u || je.current || xt
                ? (typeof g == "function" &&
                      (rs(t, n, g, r), (u = t.memoizedState)),
                  (a = xt || fa(t, n, a, r, m, u, f))
                      ? (h ||
                            (typeof s.UNSAFE_componentWillMount != "function" &&
                                typeof s.componentWillMount != "function") ||
                            (typeof s.componentWillMount == "function" &&
                                s.componentWillMount(),
                            typeof s.UNSAFE_componentWillMount == "function" &&
                                s.UNSAFE_componentWillMount()),
                        typeof s.componentDidMount == "function" &&
                            (t.flags |= 4194308))
                      : (typeof s.componentDidMount == "function" &&
                            (t.flags |= 4194308),
                        (t.memoizedProps = r),
                        (t.memoizedState = u)),
                  (s.props = r),
                  (s.state = u),
                  (s.context = f),
                  (r = a))
                : (typeof s.componentDidMount == "function" &&
                      (t.flags |= 4194308),
                  (r = !1));
    } else {
        (s = t.stateNode),
            cc(e, t),
            (a = t.memoizedProps),
            (f = t.type === t.elementType ? a : We(t.type, a)),
            (s.props = f),
            (h = t.pendingProps),
            (m = s.context),
            (u = n.contextType),
            typeof u == "object" && u !== null
                ? (u = Ve(u))
                : ((u = Re(n) ? Xt : Se.current), (u = An(t, u)));
        var y = n.getDerivedStateFromProps;
        (g =
            typeof y == "function" ||
            typeof s.getSnapshotBeforeUpdate == "function") ||
            (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
                typeof s.componentWillReceiveProps != "function") ||
            ((a !== h || m !== u) && pa(t, s, r, u)),
            (xt = !1),
            (m = t.memoizedState),
            (s.state = m),
            Ci(t, r, s, i);
        var A = t.memoizedState;
        a !== h || m !== A || je.current || xt
            ? (typeof y == "function" &&
                  (rs(t, n, y, r), (A = t.memoizedState)),
              (f = xt || fa(t, n, f, r, m, A, u) || !1)
                  ? (g ||
                        (typeof s.UNSAFE_componentWillUpdate != "function" &&
                            typeof s.componentWillUpdate != "function") ||
                        (typeof s.componentWillUpdate == "function" &&
                            s.componentWillUpdate(r, A, u),
                        typeof s.UNSAFE_componentWillUpdate == "function" &&
                            s.UNSAFE_componentWillUpdate(r, A, u)),
                    typeof s.componentDidUpdate == "function" && (t.flags |= 4),
                    typeof s.getSnapshotBeforeUpdate == "function" &&
                        (t.flags |= 1024))
                  : (typeof s.componentDidUpdate != "function" ||
                        (a === e.memoizedProps && m === e.memoizedState) ||
                        (t.flags |= 4),
                    typeof s.getSnapshotBeforeUpdate != "function" ||
                        (a === e.memoizedProps && m === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = A)),
              (s.props = r),
              (s.state = A),
              (s.context = u),
              (r = f))
            : (typeof s.componentDidUpdate != "function" ||
                  (a === e.memoizedProps && m === e.memoizedState) ||
                  (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate != "function" ||
                  (a === e.memoizedProps && m === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1));
    }
    return ls(e, t, n, r, o, i);
}
function ls(e, t, n, r, i, o) {
    Bc(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return i && la(t, n, !1), vt(e, t, o);
    (r = t.stateNode), (jp.current = t);
    var a =
        s && typeof n.getDerivedStateFromError != "function"
            ? null
            : r.render();
    return (
        (t.flags |= 1),
        e !== null && s
            ? ((t.child = jn(t, e.child, null, o)),
              (t.child = jn(t, null, a, o)))
            : xe(e, t, a, o),
        (t.memoizedState = r.state),
        i && la(t, n, !0),
        t.child
    );
}
function bc(e) {
    var t = e.stateNode;
    t.pendingContext
        ? sa(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && sa(e, t.context, !1),
        Zs(e, t.containerInfo);
}
function Pa(e, t, n, r, i) {
    return Nn(), Ws(i), (t.flags |= 256), xe(e, t, n, r), t.child;
}
var as = { dehydrated: null, treeContext: null, retryLane: 0 };
function us(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function Uc(e, t, n) {
    var r = t.pendingProps,
        i = Z.current,
        o = !1,
        s = (t.flags & 128) !== 0,
        a;
    if (
        ((a = s) ||
            (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
        a
            ? ((o = !0), (t.flags &= -129))
            : (e === null || e.memoizedState !== null) && (i |= 1),
        Q(Z, i & 1),
        e === null)
    )
        return (
            ts(t),
            (e = t.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (t.mode & 1
                      ? e.data === "$!"
                          ? (t.lanes = 8)
                          : (t.lanes = 1073741824)
                      : (t.lanes = 1),
                  null)
                : ((s = r.children),
                  (e = r.fallback),
                  o
                      ? ((r = t.mode),
                        (o = t.child),
                        (s = { mode: "hidden", children: s }),
                        !(r & 1) && o !== null
                            ? ((o.childLanes = 0), (o.pendingProps = s))
                            : (o = Hi(s, r, 0, null)),
                        (e = Qt(e, r, n, null)),
                        (o.return = t),
                        (e.return = t),
                        (o.sibling = e),
                        (t.child = o),
                        (t.child.memoizedState = us(n)),
                        (t.memoizedState = as),
                        e)
                      : ll(t, s))
        );
    if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
        return Rp(e, t, s, r, a, i, n);
    if (o) {
        (o = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
        var u = { mode: "hidden", children: r.children };
        return (
            !(s & 1) && t.child !== i
                ? ((r = t.child),
                  (r.childLanes = 0),
                  (r.pendingProps = u),
                  (t.deletions = null))
                : ((r = It(i, u)),
                  (r.subtreeFlags = i.subtreeFlags & 14680064)),
            a !== null
                ? (o = It(a, o))
                : ((o = Qt(o, s, n, null)), (o.flags |= 2)),
            (o.return = t),
            (r.return = t),
            (r.sibling = o),
            (t.child = r),
            (r = o),
            (o = t.child),
            (s = e.child.memoizedState),
            (s =
                s === null
                    ? us(n)
                    : {
                          baseLanes: s.baseLanes | n,
                          cachePool: null,
                          transitions: s.transitions,
                      }),
            (o.memoizedState = s),
            (o.childLanes = e.childLanes & ~n),
            (t.memoizedState = as),
            r
        );
    }
    return (
        (o = e.child),
        (e = o.sibling),
        (r = It(o, { mode: "visible", children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null &&
            ((n = t.deletions),
            n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
    );
}
function ll(e, t) {
    return (
        (t = Hi({ mode: "visible", children: t }, e.mode, 0, null)),
        (t.return = e),
        (e.child = t)
    );
}
function Ur(e, t, n, r) {
    return (
        r !== null && Ws(r),
        jn(t, e.child, null, n),
        (e = ll(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function Rp(e, t, n, r, i, o, s) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (r = So(Error(E(422)))), Ur(e, t, s, r))
            : t.memoizedState !== null
            ? ((t.child = e.child), (t.flags |= 128), null)
            : ((o = r.fallback),
              (i = t.mode),
              (r = Hi({ mode: "visible", children: r.children }, i, 0, null)),
              (o = Qt(o, i, s, null)),
              (o.flags |= 2),
              (r.return = t),
              (o.return = t),
              (r.sibling = o),
              (t.child = r),
              t.mode & 1 && jn(t, e.child, null, s),
              (t.child.memoizedState = us(s)),
              (t.memoizedState = as),
              o);
    if (!(t.mode & 1)) return Ur(e, t, s, null);
    if (i.data === "$!") {
        if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
        return (
            (r = a), (o = Error(E(419))), (r = So(o, r, void 0)), Ur(e, t, s, r)
        );
    }
    if (((a = (s & e.childLanes) !== 0), Ne || a)) {
        if (((r = de), r !== null)) {
            switch (s & -s) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0;
            }
            (i = i & (r.suspendedLanes | s) ? 0 : i),
                i !== 0 &&
                    i !== o.retryLane &&
                    ((o.retryLane = i), gt(e, i), Ye(r, e, i, -1));
        }
        return pl(), (r = So(Error(E(421)))), Ur(e, t, s, r);
    }
    return i.data === "$?"
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = qp.bind(null, e)),
          (i._reactRetry = t),
          null)
        : ((e = o.treeContext),
          (Le = Tt(i.nextSibling)),
          (Oe = t),
          (Y = !0),
          (Xe = null),
          e !== null &&
              ((De[Be++] = ft),
              (De[Be++] = pt),
              (De[Be++] = Gt),
              (ft = e.id),
              (pt = e.overflow),
              (Gt = t)),
          (t = ll(t, r.children)),
          (t.flags |= 4096),
          t);
}
function Ca(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ns(e.return, t, n);
}
function ko(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null
        ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: i,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = i));
}
function qc(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        o = r.tail;
    if ((xe(e, t, r.children, n), (r = Z.current), r & 2))
        (r = (r & 1) | 2), (t.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && Ca(e, n, t);
                else if (e.tag === 19) Ca(e, n, t);
                else if (e.child !== null) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === t) break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    if ((Q(Z, r), !(t.mode & 1))) t.memoizedState = null;
    else
        switch (i) {
            case "forwards":
                for (n = t.child, i = null; n !== null; )
                    (e = n.alternate),
                        e !== null && Ei(e) === null && (i = n),
                        (n = n.sibling);
                (n = i),
                    n === null
                        ? ((i = t.child), (t.child = null))
                        : ((i = n.sibling), (n.sibling = null)),
                    ko(t, !1, i, n, o);
                break;
            case "backwards":
                for (n = null, i = t.child, t.child = null; i !== null; ) {
                    if (((e = i.alternate), e !== null && Ei(e) === null)) {
                        t.child = i;
                        break;
                    }
                    (e = i.sibling), (i.sibling = n), (n = i), (i = e);
                }
                ko(t, !0, n, null, o);
                break;
            case "together":
                ko(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function ni(e, t) {
    !(t.mode & 1) &&
        e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function vt(e, t, n) {
    if (
        (e !== null && (t.dependencies = e.dependencies),
        (Zt |= t.lanes),
        !(n & t.childLanes))
    )
        return null;
    if (e !== null && t.child !== e.child) throw Error(E(153));
    if (t.child !== null) {
        for (
            e = t.child, n = It(e, e.pendingProps), t.child = n, n.return = t;
            e.sibling !== null;

        )
            (e = e.sibling),
                (n = n.sibling = It(e, e.pendingProps)),
                (n.return = t);
        n.sibling = null;
    }
    return t.child;
}
function Tp(e, t, n) {
    switch (t.tag) {
        case 3:
            bc(t), Nn();
            break;
        case 5:
            mc(t);
            break;
        case 1:
            Re(t.type) && wi(t);
            break;
        case 4:
            Zs(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                i = t.memoizedProps.value;
            Q(xi, r._currentValue), (r._currentValue = i);
            break;
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (Q(Z, Z.current & 1), (t.flags |= 128), null)
                    : n & t.child.childLanes
                    ? Uc(e, t, n)
                    : (Q(Z, Z.current & 1),
                      (e = vt(e, t, n)),
                      e !== null ? e.sibling : null);
            Q(Z, Z.current & 1);
            break;
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return qc(e, t, n);
                t.flags |= 128;
            }
            if (
                ((i = t.memoizedState),
                i !== null &&
                    ((i.rendering = null),
                    (i.tail = null),
                    (i.lastEffect = null)),
                Q(Z, Z.current),
                r)
            )
                break;
            return null;
        case 22:
        case 23:
            return (t.lanes = 0), Dc(e, t, n);
    }
    return vt(e, t, n);
}
var Vc, cs, Jc, Hc;
Vc = function (e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === t) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
};
cs = function () {};
Jc = function (e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        (e = t.stateNode), Kt(lt.current);
        var o = null;
        switch (n) {
            case "input":
                (i = Lo(e, i)), (r = Lo(e, r)), (o = []);
                break;
            case "select":
                (i = te({}, i, { value: void 0 })),
                    (r = te({}, r, { value: void 0 })),
                    (o = []);
                break;
            case "textarea":
                (i = Fo(e, i)), (r = Fo(e, r)), (o = []);
                break;
            default:
                typeof i.onClick != "function" &&
                    typeof r.onClick == "function" &&
                    (e.onclick = gi);
        }
        zo(n, r);
        var s;
        n = null;
        for (f in i)
            if (!r.hasOwnProperty(f) && i.hasOwnProperty(f) && i[f] != null)
                if (f === "style") {
                    var a = i[f];
                    for (s in a)
                        a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
                } else
                    f !== "dangerouslySetInnerHTML" &&
                        f !== "children" &&
                        f !== "suppressContentEditableWarning" &&
                        f !== "suppressHydrationWarning" &&
                        f !== "autoFocus" &&
                        (sr.hasOwnProperty(f)
                            ? o || (o = [])
                            : (o = o || []).push(f, null));
        for (f in r) {
            var u = r[f];
            if (
                ((a = i != null ? i[f] : void 0),
                r.hasOwnProperty(f) && u !== a && (u != null || a != null))
            )
                if (f === "style")
                    if (a) {
                        for (s in a)
                            !a.hasOwnProperty(s) ||
                                (u && u.hasOwnProperty(s)) ||
                                (n || (n = {}), (n[s] = ""));
                        for (s in u)
                            u.hasOwnProperty(s) &&
                                a[s] !== u[s] &&
                                (n || (n = {}), (n[s] = u[s]));
                    } else n || (o || (o = []), o.push(f, n)), (n = u);
                else
                    f === "dangerouslySetInnerHTML"
                        ? ((u = u ? u.__html : void 0),
                          (a = a ? a.__html : void 0),
                          u != null && a !== u && (o = o || []).push(f, u))
                        : f === "children"
                        ? (typeof u != "string" && typeof u != "number") ||
                          (o = o || []).push(f, "" + u)
                        : f !== "suppressContentEditableWarning" &&
                          f !== "suppressHydrationWarning" &&
                          (sr.hasOwnProperty(f)
                              ? (u != null &&
                                    f === "onScroll" &&
                                    $("scroll", e),
                                o || a === u || (o = []))
                              : (o = o || []).push(f, u));
        }
        n && (o = o || []).push("style", n);
        var f = o;
        (t.updateQueue = f) && (t.flags |= 4);
    }
};
Hc = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
};
function Vn(e, t) {
    if (!Y)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; )
                    t.alternate !== null && (n = t), (t = t.sibling);
                n === null ? (e.tail = null) : (n.sibling = null);
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null; )
                    n.alternate !== null && (r = n), (n = n.sibling);
                r === null
                    ? t || e.tail === null
                        ? (e.tail = null)
                        : (e.tail.sibling = null)
                    : (r.sibling = null);
        }
}
function ve(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            (n |= i.lanes | i.childLanes),
                (r |= i.subtreeFlags & 14680064),
                (r |= i.flags & 14680064),
                (i.return = e),
                (i = i.sibling);
    else
        for (i = e.child; i !== null; )
            (n |= i.lanes | i.childLanes),
                (r |= i.subtreeFlags),
                (r |= i.flags),
                (i.return = e),
                (i = i.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function _p(e, t, n) {
    var r = t.pendingProps;
    switch ((Ks(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return ve(t), null;
        case 1:
            return Re(t.type) && vi(), ve(t), null;
        case 3:
            return (
                (r = t.stateNode),
                Rn(),
                X(je),
                X(Se),
                tl(),
                r.pendingContext &&
                    ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                    (Br(t)
                        ? (t.flags |= 4)
                        : e === null ||
                          (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                          ((t.flags |= 1024),
                          Xe !== null && (vs(Xe), (Xe = null)))),
                cs(e, t),
                ve(t),
                null
            );
        case 5:
            el(t);
            var i = Kt(vr.current);
            if (((n = t.type), e !== null && t.stateNode != null))
                Jc(e, t, n, r, i),
                    e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(E(166));
                    return ve(t), null;
                }
                if (((e = Kt(lt.current)), Br(t))) {
                    (r = t.stateNode), (n = t.type);
                    var o = t.memoizedProps;
                    switch (
                        ((r[ot] = t), (r[yr] = o), (e = (t.mode & 1) !== 0), n)
                    ) {
                        case "dialog":
                            $("cancel", r), $("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            $("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < $n.length; i++) $($n[i], r);
                            break;
                        case "source":
                            $("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            $("error", r), $("load", r);
                            break;
                        case "details":
                            $("toggle", r);
                            break;
                        case "input":
                            Ol(r, o), $("invalid", r);
                            break;
                        case "select":
                            (r._wrapperState = { wasMultiple: !!o.multiple }),
                                $("invalid", r);
                            break;
                        case "textarea":
                            Fl(r, o), $("invalid", r);
                    }
                    zo(n, o), (i = null);
                    for (var s in o)
                        if (o.hasOwnProperty(s)) {
                            var a = o[s];
                            s === "children"
                                ? typeof a == "string"
                                    ? r.textContent !== a &&
                                      (o.suppressHydrationWarning !== !0 &&
                                          Dr(r.textContent, a, e),
                                      (i = ["children", a]))
                                    : typeof a == "number" &&
                                      r.textContent !== "" + a &&
                                      (o.suppressHydrationWarning !== !0 &&
                                          Dr(r.textContent, a, e),
                                      (i = ["children", "" + a]))
                                : sr.hasOwnProperty(s) &&
                                  a != null &&
                                  s === "onScroll" &&
                                  $("scroll", r);
                        }
                    switch (n) {
                        case "input":
                            Tr(r), Il(r, o, !0);
                            break;
                        case "textarea":
                            Tr(r), Ml(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = gi);
                    }
                    (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
                } else {
                    (s = i.nodeType === 9 ? i : i.ownerDocument),
                        e === "http://www.w3.org/1999/xhtml" && (e = vu(n)),
                        e === "http://www.w3.org/1999/xhtml"
                            ? n === "script"
                                ? ((e = s.createElement("div")),
                                  (e.innerHTML = "<script></script>"),
                                  (e = e.removeChild(e.firstChild)))
                                : typeof r.is == "string"
                                ? (e = s.createElement(n, { is: r.is }))
                                : ((e = s.createElement(n)),
                                  n === "select" &&
                                      ((s = e),
                                      r.multiple
                                          ? (s.multiple = !0)
                                          : r.size && (s.size = r.size)))
                            : (e = s.createElementNS(e, n)),
                        (e[ot] = t),
                        (e[yr] = r),
                        Vc(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((s = Do(n, r)), n)) {
                            case "dialog":
                                $("cancel", e), $("close", e), (i = r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                $("load", e), (i = r);
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < $n.length; i++) $($n[i], e);
                                i = r;
                                break;
                            case "source":
                                $("error", e), (i = r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                $("error", e), $("load", e), (i = r);
                                break;
                            case "details":
                                $("toggle", e), (i = r);
                                break;
                            case "input":
                                Ol(e, r), (i = Lo(e, r)), $("invalid", e);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                (e._wrapperState = {
                                    wasMultiple: !!r.multiple,
                                }),
                                    (i = te({}, r, { value: void 0 })),
                                    $("invalid", e);
                                break;
                            case "textarea":
                                Fl(e, r), (i = Fo(e, r)), $("invalid", e);
                                break;
                            default:
                                i = r;
                        }
                        zo(n, i), (a = i);
                        for (o in a)
                            if (a.hasOwnProperty(o)) {
                                var u = a[o];
                                o === "style"
                                    ? ku(e, u)
                                    : o === "dangerouslySetInnerHTML"
                                    ? ((u = u ? u.__html : void 0),
                                      u != null && wu(e, u))
                                    : o === "children"
                                    ? typeof u == "string"
                                        ? (n !== "textarea" || u !== "") &&
                                          lr(e, u)
                                        : typeof u == "number" && lr(e, "" + u)
                                    : o !== "suppressContentEditableWarning" &&
                                      o !== "suppressHydrationWarning" &&
                                      o !== "autoFocus" &&
                                      (sr.hasOwnProperty(o)
                                          ? u != null &&
                                            o === "onScroll" &&
                                            $("scroll", e)
                                          : u != null && _s(e, o, u, s));
                            }
                        switch (n) {
                            case "input":
                                Tr(e), Il(e, r, !1);
                                break;
                            case "textarea":
                                Tr(e), Ml(e);
                                break;
                            case "option":
                                r.value != null &&
                                    e.setAttribute("value", "" + Ft(r.value));
                                break;
                            case "select":
                                (e.multiple = !!r.multiple),
                                    (o = r.value),
                                    o != null
                                        ? vn(e, !!r.multiple, o, !1)
                                        : r.defaultValue != null &&
                                          vn(
                                              e,
                                              !!r.multiple,
                                              r.defaultValue,
                                              !0
                                          );
                                break;
                            default:
                                typeof i.onClick == "function" &&
                                    (e.onclick = gi);
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (t.flags |= 4);
                }
                t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return ve(t), null;
        case 6:
            if (e && t.stateNode != null) Hc(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null)
                    throw Error(E(166));
                if (((n = Kt(vr.current)), Kt(lt.current), Br(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[ot] = t),
                        (o = r.nodeValue !== n) && ((e = Oe), e !== null))
                    )
                        switch (e.tag) {
                            case 3:
                                Dr(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !==
                                    !0 &&
                                    Dr(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                    o && (t.flags |= 4);
                } else
                    (r = (
                        n.nodeType === 9 ? n : n.ownerDocument
                    ).createTextNode(r)),
                        (r[ot] = t),
                        (t.stateNode = r);
            }
            return ve(t), null;
        case 13:
            if (
                (X(Z),
                (r = t.memoizedState),
                e === null ||
                    (e.memoizedState !== null &&
                        e.memoizedState.dehydrated !== null))
            ) {
                if (Y && Le !== null && t.mode & 1 && !(t.flags & 128))
                    ac(), Nn(), (t.flags |= 98560), (o = !1);
                else if (((o = Br(t)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!o) throw Error(E(318));
                        if (
                            ((o = t.memoizedState),
                            (o = o !== null ? o.dehydrated : null),
                            !o)
                        )
                            throw Error(E(317));
                        o[ot] = t;
                    } else
                        Nn(),
                            !(t.flags & 128) && (t.memoizedState = null),
                            (t.flags |= 4);
                    ve(t), (o = !1);
                } else Xe !== null && (vs(Xe), (Xe = null)), (o = !0);
                if (!o) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128
                ? ((t.lanes = n), t)
                : ((r = r !== null),
                  r !== (e !== null && e.memoizedState !== null) &&
                      r &&
                      ((t.child.flags |= 8192),
                      t.mode & 1 &&
                          (e === null || Z.current & 1
                              ? ae === 0 && (ae = 3)
                              : pl())),
                  t.updateQueue !== null && (t.flags |= 4),
                  ve(t),
                  null);
        case 4:
            return (
                Rn(),
                cs(e, t),
                e === null && hr(t.stateNode.containerInfo),
                ve(t),
                null
            );
        case 10:
            return Xs(t.type._context), ve(t), null;
        case 17:
            return Re(t.type) && vi(), ve(t), null;
        case 19:
            if ((X(Z), (o = t.memoizedState), o === null)) return ve(t), null;
            if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
                if (r) Vn(o, !1);
                else {
                    if (ae !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((s = Ei(e)), s !== null)) {
                                for (
                                    t.flags |= 128,
                                        Vn(o, !1),
                                        r = s.updateQueue,
                                        r !== null &&
                                            ((t.updateQueue = r),
                                            (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child;
                                    n !== null;

                                )
                                    (o = n),
                                        (e = r),
                                        (o.flags &= 14680066),
                                        (s = o.alternate),
                                        s === null
                                            ? ((o.childLanes = 0),
                                              (o.lanes = e),
                                              (o.child = null),
                                              (o.subtreeFlags = 0),
                                              (o.memoizedProps = null),
                                              (o.memoizedState = null),
                                              (o.updateQueue = null),
                                              (o.dependencies = null),
                                              (o.stateNode = null))
                                            : ((o.childLanes = s.childLanes),
                                              (o.lanes = s.lanes),
                                              (o.child = s.child),
                                              (o.subtreeFlags = 0),
                                              (o.deletions = null),
                                              (o.memoizedProps =
                                                  s.memoizedProps),
                                              (o.memoizedState =
                                                  s.memoizedState),
                                              (o.updateQueue = s.updateQueue),
                                              (o.type = s.type),
                                              (e = s.dependencies),
                                              (o.dependencies =
                                                  e === null
                                                      ? null
                                                      : {
                                                            lanes: e.lanes,
                                                            firstContext:
                                                                e.firstContext,
                                                        })),
                                        (n = n.sibling);
                                return Q(Z, (Z.current & 1) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    o.tail !== null &&
                        ie() > _n &&
                        ((t.flags |= 128),
                        (r = !0),
                        Vn(o, !1),
                        (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = Ei(s)), e !== null)) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            (n = e.updateQueue),
                            n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                            Vn(o, !0),
                            o.tail === null &&
                                o.tailMode === "hidden" &&
                                !s.alternate &&
                                !Y)
                        )
                            return ve(t), null;
                    } else
                        2 * ie() - o.renderingStartTime > _n &&
                            n !== 1073741824 &&
                            ((t.flags |= 128),
                            (r = !0),
                            Vn(o, !1),
                            (t.lanes = 4194304));
                o.isBackwards
                    ? ((s.sibling = t.child), (t.child = s))
                    : ((n = o.last),
                      n !== null ? (n.sibling = s) : (t.child = s),
                      (o.last = s));
            }
            return o.tail !== null
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = ie()),
                  (t.sibling = null),
                  (n = Z.current),
                  Q(Z, r ? (n & 1) | 2 : n & 1),
                  t)
                : (ve(t), null);
        case 22:
        case 23:
            return (
                fl(),
                (r = t.memoizedState !== null),
                e !== null &&
                    (e.memoizedState !== null) !== r &&
                    (t.flags |= 8192),
                r && t.mode & 1
                    ? _e & 1073741824 &&
                      (ve(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                    : ve(t),
                null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(E(156, t.tag));
}
function Lp(e, t) {
    switch ((Ks(t), t.tag)) {
        case 1:
            return (
                Re(t.type) && vi(),
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 3:
            return (
                Rn(),
                X(je),
                X(Se),
                tl(),
                (e = t.flags),
                e & 65536 && !(e & 128)
                    ? ((t.flags = (e & -65537) | 128), t)
                    : null
            );
        case 5:
            return el(t), null;
        case 13:
            if (
                (X(Z),
                (e = t.memoizedState),
                e !== null && e.dehydrated !== null)
            ) {
                if (t.alternate === null) throw Error(E(340));
                Nn();
            }
            return (
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 19:
            return X(Z), null;
        case 4:
            return Rn(), null;
        case 10:
            return Xs(t.type._context), null;
        case 22:
        case 23:
            return fl(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var qr = !1,
    we = !1,
    Op = typeof WeakSet == "function" ? WeakSet : Set,
    T = null;
function yn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null);
            } catch (r) {
                ne(e, t, r);
            }
        else n.current = null;
}
function ds(e, t, n) {
    try {
        n();
    } catch (r) {
        ne(e, t, r);
    }
}
var Ea = !1;
function Ip(e, t) {
    if (((Qo = hi), (e = $u()), Js(e))) {
        if ("selectionStart" in e)
            var n = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset,
                        o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, o.nodeType;
                    } catch {
                        n = null;
                        break e;
                    }
                    var s = 0,
                        a = -1,
                        u = -1,
                        f = 0,
                        g = 0,
                        h = e,
                        m = null;
                    t: for (;;) {
                        for (
                            var y;
                            h !== n ||
                                (i !== 0 && h.nodeType !== 3) ||
                                (a = s + i),
                                h !== o ||
                                    (r !== 0 && h.nodeType !== 3) ||
                                    (u = s + r),
                                h.nodeType === 3 && (s += h.nodeValue.length),
                                (y = h.firstChild) !== null;

                        )
                            (m = h), (h = y);
                        for (;;) {
                            if (h === e) break t;
                            if (
                                (m === n && ++f === i && (a = s),
                                m === o && ++g === r && (u = s),
                                (y = h.nextSibling) !== null)
                            )
                                break;
                            (h = m), (m = h.parentNode);
                        }
                        h = y;
                    }
                    n = a === -1 || u === -1 ? null : { start: a, end: u };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (
        $o = { focusedElem: e, selectionRange: n }, hi = !1, T = t;
        T !== null;

    )
        if (
            ((t = T),
            (e = t.child),
            (t.subtreeFlags & 1028) !== 0 && e !== null)
        )
            (e.return = t), (T = e);
        else
            for (; T !== null; ) {
                t = T;
                try {
                    var A = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (A !== null) {
                                    var x = A.memoizedProps,
                                        B = A.memoizedState,
                                        d = t.stateNode,
                                        c = d.getSnapshotBeforeUpdate(
                                            t.elementType === t.type
                                                ? x
                                                : We(t.type, x),
                                            B
                                        );
                                    d.__reactInternalSnapshotBeforeUpdate = c;
                                }
                                break;
                            case 3:
                                var p = t.stateNode.containerInfo;
                                p.nodeType === 1
                                    ? (p.textContent = "")
                                    : p.nodeType === 9 &&
                                      p.documentElement &&
                                      p.removeChild(p.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(E(163));
                        }
                } catch (k) {
                    ne(t, t.return, k);
                }
                if (((e = t.sibling), e !== null)) {
                    (e.return = t.return), (T = e);
                    break;
                }
                T = t.return;
            }
    return (A = Ea), (Ea = !1), A;
}
function rr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var i = (r = r.next);
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                (i.destroy = void 0), o !== void 0 && ds(t, n, o);
            }
            i = i.next;
        } while (i !== r);
    }
}
function Vi(e, t) {
    if (
        ((t = t.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
    ) {
        var n = (t = t.next);
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
            }
            n = n.next;
        } while (n !== t);
    }
}
function fs(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n;
        }
        typeof t == "function" ? t(e) : (t.current = e);
    }
}
function Kc(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Kc(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
            ((t = e.stateNode),
            t !== null &&
                (delete t[ot],
                delete t[yr],
                delete t[Yo],
                delete t[yp],
                delete t[gp])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function Wc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Aa(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || Wc(e.return)) return null;
            e = e.return;
        }
        for (
            e.sibling.return = e.return, e = e.sibling;
            e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function ps(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode),
            t
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (n.nodeType === 8
                      ? ((t = n.parentNode), t.insertBefore(e, n))
                      : ((t = n), t.appendChild(e)),
                  (n = n._reactRootContainer),
                  n != null || t.onclick !== null || (t.onclick = gi));
    else if (r !== 4 && ((e = e.child), e !== null))
        for (ps(e, t, n), e = e.sibling; e !== null; )
            ps(e, t, n), (e = e.sibling);
}
function hs(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
        for (hs(e, t, n), e = e.sibling; e !== null; )
            hs(e, t, n), (e = e.sibling);
}
var pe = null,
    Qe = !1;
function St(e, t, n) {
    for (n = n.child; n !== null; ) Qc(e, t, n), (n = n.sibling);
}
function Qc(e, t, n) {
    if (st && typeof st.onCommitFiberUnmount == "function")
        try {
            st.onCommitFiberUnmount(Fi, n);
        } catch {}
    switch (n.tag) {
        case 5:
            we || yn(n, t);
        case 6:
            var r = pe,
                i = Qe;
            (pe = null),
                St(e, t, n),
                (pe = r),
                (Qe = i),
                pe !== null &&
                    (Qe
                        ? ((e = pe),
                          (n = n.stateNode),
                          e.nodeType === 8
                              ? e.parentNode.removeChild(n)
                              : e.removeChild(n))
                        : pe.removeChild(n.stateNode));
            break;
        case 18:
            pe !== null &&
                (Qe
                    ? ((e = pe),
                      (n = n.stateNode),
                      e.nodeType === 8
                          ? ho(e.parentNode, n)
                          : e.nodeType === 1 && ho(e, n),
                      dr(e))
                    : ho(pe, n.stateNode));
            break;
        case 4:
            (r = pe),
                (i = Qe),
                (pe = n.stateNode.containerInfo),
                (Qe = !0),
                St(e, t, n),
                (pe = r),
                (Qe = i);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (
                !we &&
                ((r = n.updateQueue),
                r !== null && ((r = r.lastEffect), r !== null))
            ) {
                i = r = r.next;
                do {
                    var o = i,
                        s = o.destroy;
                    (o = o.tag),
                        s !== void 0 && (o & 2 || o & 4) && ds(n, t, s),
                        (i = i.next);
                } while (i !== r);
            }
            St(e, t, n);
            break;
        case 1:
            if (
                !we &&
                (yn(n, t),
                (r = n.stateNode),
                typeof r.componentWillUnmount == "function")
            )
                try {
                    (r.props = n.memoizedProps),
                        (r.state = n.memoizedState),
                        r.componentWillUnmount();
                } catch (a) {
                    ne(n, t, a);
                }
            St(e, t, n);
            break;
        case 21:
            St(e, t, n);
            break;
        case 22:
            n.mode & 1
                ? ((we = (r = we) || n.memoizedState !== null),
                  St(e, t, n),
                  (we = r))
                : St(e, t, n);
            break;
        default:
            St(e, t, n);
    }
}
function Na(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Op()),
            t.forEach(function (r) {
                var i = Vp.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(i, i));
            });
    }
}
function Ke(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e,
                    s = t,
                    a = s;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                        case 5:
                            (pe = a.stateNode), (Qe = !1);
                            break e;
                        case 3:
                            (pe = a.stateNode.containerInfo), (Qe = !0);
                            break e;
                        case 4:
                            (pe = a.stateNode.containerInfo), (Qe = !0);
                            break e;
                    }
                    a = a.return;
                }
                if (pe === null) throw Error(E(160));
                Qc(o, s, i), (pe = null), (Qe = !1);
                var u = i.alternate;
                u !== null && (u.return = null), (i.return = null);
            } catch (f) {
                ne(i, t, f);
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; ) $c(t, e), (t = t.sibling);
}
function $c(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((Ke(t, e), rt(e), r & 4)) {
                try {
                    rr(3, e, e.return), Vi(3, e);
                } catch (x) {
                    ne(e, e.return, x);
                }
                try {
                    rr(5, e, e.return);
                } catch (x) {
                    ne(e, e.return, x);
                }
            }
            break;
        case 1:
            Ke(t, e), rt(e), r & 512 && n !== null && yn(n, n.return);
            break;
        case 5:
            if (
                (Ke(t, e),
                rt(e),
                r & 512 && n !== null && yn(n, n.return),
                e.flags & 32)
            ) {
                var i = e.stateNode;
                try {
                    lr(i, "");
                } catch (x) {
                    ne(e, e.return, x);
                }
            }
            if (r & 4 && ((i = e.stateNode), i != null)) {
                var o = e.memoizedProps,
                    s = n !== null ? n.memoizedProps : o,
                    a = e.type,
                    u = e.updateQueue;
                if (((e.updateQueue = null), u !== null))
                    try {
                        a === "input" &&
                            o.type === "radio" &&
                            o.name != null &&
                            yu(i, o),
                            Do(a, s);
                        var f = Do(a, o);
                        for (s = 0; s < u.length; s += 2) {
                            var g = u[s],
                                h = u[s + 1];
                            g === "style"
                                ? ku(i, h)
                                : g === "dangerouslySetInnerHTML"
                                ? wu(i, h)
                                : g === "children"
                                ? lr(i, h)
                                : _s(i, g, h, f);
                        }
                        switch (a) {
                            case "input":
                                Oo(i, o);
                                break;
                            case "textarea":
                                gu(i, o);
                                break;
                            case "select":
                                var m = i._wrapperState.wasMultiple;
                                i._wrapperState.wasMultiple = !!o.multiple;
                                var y = o.value;
                                y != null
                                    ? vn(i, !!o.multiple, y, !1)
                                    : m !== !!o.multiple &&
                                      (o.defaultValue != null
                                          ? vn(
                                                i,
                                                !!o.multiple,
                                                o.defaultValue,
                                                !0
                                            )
                                          : vn(
                                                i,
                                                !!o.multiple,
                                                o.multiple ? [] : "",
                                                !1
                                            ));
                        }
                        i[yr] = o;
                    } catch (x) {
                        ne(e, e.return, x);
                    }
            }
            break;
        case 6:
            if ((Ke(t, e), rt(e), r & 4)) {
                if (e.stateNode === null) throw Error(E(162));
                (i = e.stateNode), (o = e.memoizedProps);
                try {
                    i.nodeValue = o;
                } catch (x) {
                    ne(e, e.return, x);
                }
            }
            break;
        case 3:
            if (
                (Ke(t, e),
                rt(e),
                r & 4 && n !== null && n.memoizedState.isDehydrated)
            )
                try {
                    dr(t.containerInfo);
                } catch (x) {
                    ne(e, e.return, x);
                }
            break;
        case 4:
            Ke(t, e), rt(e);
            break;
        case 13:
            Ke(t, e),
                rt(e),
                (i = e.child),
                i.flags & 8192 &&
                    ((o = i.memoizedState !== null),
                    (i.stateNode.isHidden = o),
                    !o ||
                        (i.alternate !== null &&
                            i.alternate.memoizedState !== null) ||
                        (cl = ie())),
                r & 4 && Na(e);
            break;
        case 22:
            if (
                ((g = n !== null && n.memoizedState !== null),
                e.mode & 1
                    ? ((we = (f = we) || g), Ke(t, e), (we = f))
                    : Ke(t, e),
                rt(e),
                r & 8192)
            ) {
                if (
                    ((f = e.memoizedState !== null),
                    (e.stateNode.isHidden = f) && !g && e.mode & 1)
                )
                    for (T = e, g = e.child; g !== null; ) {
                        for (h = T = g; T !== null; ) {
                            switch (((m = T), (y = m.child), m.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    rr(4, m, m.return);
                                    break;
                                case 1:
                                    yn(m, m.return);
                                    var A = m.stateNode;
                                    if (
                                        typeof A.componentWillUnmount ==
                                        "function"
                                    ) {
                                        (r = m), (n = m.return);
                                        try {
                                            (t = r),
                                                (A.props = t.memoizedProps),
                                                (A.state = t.memoizedState),
                                                A.componentWillUnmount();
                                        } catch (x) {
                                            ne(r, n, x);
                                        }
                                    }
                                    break;
                                case 5:
                                    yn(m, m.return);
                                    break;
                                case 22:
                                    if (m.memoizedState !== null) {
                                        Ra(h);
                                        continue;
                                    }
                            }
                            y !== null ? ((y.return = m), (T = y)) : Ra(h);
                        }
                        g = g.sibling;
                    }
                e: for (g = null, h = e; ; ) {
                    if (h.tag === 5) {
                        if (g === null) {
                            g = h;
                            try {
                                (i = h.stateNode),
                                    f
                                        ? ((o = i.style),
                                          typeof o.setProperty == "function"
                                              ? o.setProperty(
                                                    "display",
                                                    "none",
                                                    "important"
                                                )
                                              : (o.display = "none"))
                                        : ((a = h.stateNode),
                                          (u = h.memoizedProps.style),
                                          (s =
                                              u != null &&
                                              u.hasOwnProperty("display")
                                                  ? u.display
                                                  : null),
                                          (a.style.display = Su("display", s)));
                            } catch (x) {
                                ne(e, e.return, x);
                            }
                        }
                    } else if (h.tag === 6) {
                        if (g === null)
                            try {
                                h.stateNode.nodeValue = f
                                    ? ""
                                    : h.memoizedProps;
                            } catch (x) {
                                ne(e, e.return, x);
                            }
                    } else if (
                        ((h.tag !== 22 && h.tag !== 23) ||
                            h.memoizedState === null ||
                            h === e) &&
                        h.child !== null
                    ) {
                        (h.child.return = h), (h = h.child);
                        continue;
                    }
                    if (h === e) break e;
                    for (; h.sibling === null; ) {
                        if (h.return === null || h.return === e) break e;
                        g === h && (g = null), (h = h.return);
                    }
                    g === h && (g = null),
                        (h.sibling.return = h.return),
                        (h = h.sibling);
                }
            }
            break;
        case 19:
            Ke(t, e), rt(e), r & 4 && Na(e);
            break;
        case 21:
            break;
        default:
            Ke(t, e), rt(e);
    }
}
function rt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Wc(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(E(160));
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (lr(i, ""), (r.flags &= -33));
                    var o = Aa(e);
                    hs(e, o, i);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo,
                        a = Aa(e);
                    ps(e, a, s);
                    break;
                default:
                    throw Error(E(161));
            }
        } catch (u) {
            ne(e, e.return, u);
        }
        e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
}
function Fp(e, t, n) {
    (T = e), Xc(e);
}
function Xc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; T !== null; ) {
        var i = T,
            o = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || qr;
            if (!s) {
                var a = i.alternate,
                    u = (a !== null && a.memoizedState !== null) || we;
                a = qr;
                var f = we;
                if (((qr = s), (we = u) && !f))
                    for (T = i; T !== null; )
                        (s = T),
                            (u = s.child),
                            s.tag === 22 && s.memoizedState !== null
                                ? Ta(i)
                                : u !== null
                                ? ((u.return = s), (T = u))
                                : Ta(i);
                for (; o !== null; ) (T = o), Xc(o), (o = o.sibling);
                (T = i), (qr = a), (we = f);
            }
            ja(e);
        } else
            i.subtreeFlags & 8772 && o !== null
                ? ((o.return = i), (T = o))
                : ja(e);
    }
}
function ja(e) {
    for (; T !== null; ) {
        var t = T;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            we || Vi(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !we)
                                if (n === null) r.componentDidMount();
                                else {
                                    var i =
                                        t.elementType === t.type
                                            ? n.memoizedProps
                                            : We(t.type, n.memoizedProps);
                                    r.componentDidUpdate(
                                        i,
                                        n.memoizedState,
                                        r.__reactInternalSnapshotBeforeUpdate
                                    );
                                }
                            var o = t.updateQueue;
                            o !== null && da(t, o, r);
                            break;
                        case 3:
                            var s = t.updateQueue;
                            if (s !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                da(t, s, n);
                            }
                            break;
                        case 5:
                            var a = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = a;
                                var u = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        u.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        u.src && (n.src = u.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var f = t.alternate;
                                if (f !== null) {
                                    var g = f.memoizedState;
                                    if (g !== null) {
                                        var h = g.dehydrated;
                                        h !== null && dr(h);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(E(163));
                    }
                we || (t.flags & 512 && fs(t));
            } catch (m) {
                ne(t, t.return, m);
            }
        }
        if (t === e) {
            T = null;
            break;
        }
        if (((n = t.sibling), n !== null)) {
            (n.return = t.return), (T = n);
            break;
        }
        T = t.return;
    }
}
function Ra(e) {
    for (; T !== null; ) {
        var t = T;
        if (t === e) {
            T = null;
            break;
        }
        var n = t.sibling;
        if (n !== null) {
            (n.return = t.return), (T = n);
            break;
        }
        T = t.return;
    }
}
function Ta(e) {
    for (; T !== null; ) {
        var t = T;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Vi(4, t);
                    } catch (u) {
                        ne(t, n, u);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount();
                        } catch (u) {
                            ne(t, i, u);
                        }
                    }
                    var o = t.return;
                    try {
                        fs(t);
                    } catch (u) {
                        ne(t, o, u);
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        fs(t);
                    } catch (u) {
                        ne(t, s, u);
                    }
            }
        } catch (u) {
            ne(t, t.return, u);
        }
        if (t === e) {
            T = null;
            break;
        }
        var a = t.sibling;
        if (a !== null) {
            (a.return = t.return), (T = a);
            break;
        }
        T = t.return;
    }
}
var Mp = Math.ceil,
    ji = wt.ReactCurrentDispatcher,
    al = wt.ReactCurrentOwner,
    qe = wt.ReactCurrentBatchConfig,
    K = 0,
    de = null,
    oe = null,
    he = 0,
    _e = 0,
    gn = Dt(0),
    ae = 0,
    xr = null,
    Zt = 0,
    Ji = 0,
    ul = 0,
    ir = null,
    Ae = null,
    cl = 0,
    _n = 1 / 0,
    ct = null,
    Ri = !1,
    ms = null,
    Lt = null,
    Vr = !1,
    At = null,
    Ti = 0,
    or = 0,
    ys = null,
    ri = -1,
    ii = 0;
function Pe() {
    return K & 6 ? ie() : ri !== -1 ? ri : (ri = ie());
}
function Ot(e) {
    return e.mode & 1
        ? K & 2 && he !== 0
            ? he & -he
            : wp.transition !== null
            ? (ii === 0 && (ii = Ou()), ii)
            : ((e = W),
              e !== 0 ||
                  ((e = window.event), (e = e === void 0 ? 16 : bu(e.type))),
              e)
        : 1;
}
function Ye(e, t, n, r) {
    if (50 < or) throw ((or = 0), (ys = null), Error(E(185)));
    Cr(e, n, r),
        (!(K & 2) || e !== de) &&
            (e === de && (!(K & 2) && (Ji |= n), ae === 4 && Ct(e, he)),
            Te(e, r),
            n === 1 &&
                K === 0 &&
                !(t.mode & 1) &&
                ((_n = ie() + 500), bi && Bt()));
}
function Te(e, t) {
    var n = e.callbackNode;
    wf(e, t);
    var r = pi(e, e === de ? he : 0);
    if (r === 0)
        n !== null && Bl(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && Bl(n), t === 1))
            e.tag === 0 ? vp(_a.bind(null, e)) : oc(_a.bind(null, e)),
                hp(function () {
                    !(K & 6) && Bt();
                }),
                (n = null);
        else {
            switch (Iu(r)) {
                case 1:
                    n = Ms;
                    break;
                case 4:
                    n = _u;
                    break;
                case 16:
                    n = fi;
                    break;
                case 536870912:
                    n = Lu;
                    break;
                default:
                    n = fi;
            }
            n = id(n, Gc.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function Gc(e, t) {
    if (((ri = -1), (ii = 0), K & 6)) throw Error(E(327));
    var n = e.callbackNode;
    if (Pn() && e.callbackNode !== n) return null;
    var r = pi(e, e === de ? he : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = _i(e, r);
    else {
        t = r;
        var i = K;
        K |= 2;
        var o = Zc();
        (de !== e || he !== t) && ((ct = null), (_n = ie() + 500), Wt(e, t));
        do
            try {
                Bp();
                break;
            } catch (a) {
                Yc(e, a);
            }
        while (1);
        $s(),
            (ji.current = o),
            (K = i),
            oe !== null ? (t = 0) : ((de = null), (he = 0), (t = ae));
    }
    if (t !== 0) {
        if (
            (t === 2 && ((i = Vo(e)), i !== 0 && ((r = i), (t = gs(e, i)))),
            t === 1)
        )
            throw ((n = xr), Wt(e, 0), Ct(e, r), Te(e, ie()), n);
        if (t === 6) Ct(e, r);
        else {
            if (
                ((i = e.current.alternate),
                !(r & 30) &&
                    !zp(i) &&
                    ((t = _i(e, r)),
                    t === 2 &&
                        ((o = Vo(e)), o !== 0 && ((r = o), (t = gs(e, o)))),
                    t === 1))
            )
                throw ((n = xr), Wt(e, 0), Ct(e, r), Te(e, ie()), n);
            switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(E(345));
                case 2:
                    Vt(e, Ae, ct);
                    break;
                case 3:
                    if (
                        (Ct(e, r),
                        (r & 130023424) === r &&
                            ((t = cl + 500 - ie()), 10 < t))
                    ) {
                        if (pi(e, 0) !== 0) break;
                        if (((i = e.suspendedLanes), (i & r) !== r)) {
                            Pe(), (e.pingedLanes |= e.suspendedLanes & i);
                            break;
                        }
                        e.timeoutHandle = Go(Vt.bind(null, e, Ae, ct), t);
                        break;
                    }
                    Vt(e, Ae, ct);
                    break;
                case 4:
                    if ((Ct(e, r), (r & 4194240) === r)) break;
                    for (t = e.eventTimes, i = -1; 0 < r; ) {
                        var s = 31 - Ge(r);
                        (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
                    }
                    if (
                        ((r = i),
                        (r = ie() - r),
                        (r =
                            (120 > r
                                ? 120
                                : 480 > r
                                ? 480
                                : 1080 > r
                                ? 1080
                                : 1920 > r
                                ? 1920
                                : 3e3 > r
                                ? 3e3
                                : 4320 > r
                                ? 4320
                                : 1960 * Mp(r / 1960)) - r),
                        10 < r)
                    ) {
                        e.timeoutHandle = Go(Vt.bind(null, e, Ae, ct), r);
                        break;
                    }
                    Vt(e, Ae, ct);
                    break;
                case 5:
                    Vt(e, Ae, ct);
                    break;
                default:
                    throw Error(E(329));
            }
        }
    }
    return Te(e, ie()), e.callbackNode === n ? Gc.bind(null, e) : null;
}
function gs(e, t) {
    var n = ir;
    return (
        e.current.memoizedState.isDehydrated && (Wt(e, t).flags |= 256),
        (e = _i(e, t)),
        e !== 2 && ((t = Ae), (Ae = n), t !== null && vs(t)),
        e
    );
}
function vs(e) {
    Ae === null ? (Ae = e) : Ae.push.apply(Ae, e);
}
function zp(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!Ze(o(), i)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
            (n.return = t), (t = n);
        else {
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
    }
    return !0;
}
function Ct(e, t) {
    for (
        t &= ~ul,
            t &= ~Ji,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            e = e.expirationTimes;
        0 < t;

    ) {
        var n = 31 - Ge(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}
function _a(e) {
    if (K & 6) throw Error(E(327));
    Pn();
    var t = pi(e, 0);
    if (!(t & 1)) return Te(e, ie()), null;
    var n = _i(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Vo(e);
        r !== 0 && ((t = r), (n = gs(e, r)));
    }
    if (n === 1) throw ((n = xr), Wt(e, 0), Ct(e, t), Te(e, ie()), n);
    if (n === 6) throw Error(E(345));
    return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        Vt(e, Ae, ct),
        Te(e, ie()),
        null
    );
}
function dl(e, t) {
    var n = K;
    K |= 1;
    try {
        return e(t);
    } finally {
        (K = n), K === 0 && ((_n = ie() + 500), bi && Bt());
    }
}
function en(e) {
    At !== null && At.tag === 0 && !(K & 6) && Pn();
    var t = K;
    K |= 1;
    var n = qe.transition,
        r = W;
    try {
        if (((qe.transition = null), (W = 1), e)) return e();
    } finally {
        (W = r), (qe.transition = n), (K = t), !(K & 6) && Bt();
    }
}
function fl() {
    (_e = gn.current), X(gn);
}
function Wt(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), pp(n)), oe !== null))
        for (n = oe.return; n !== null; ) {
            var r = n;
            switch ((Ks(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && vi();
                    break;
                case 3:
                    Rn(), X(je), X(Se), tl();
                    break;
                case 5:
                    el(r);
                    break;
                case 4:
                    Rn();
                    break;
                case 13:
                    X(Z);
                    break;
                case 19:
                    X(Z);
                    break;
                case 10:
                    Xs(r.type._context);
                    break;
                case 22:
                case 23:
                    fl();
            }
            n = n.return;
        }
    if (
        ((de = e),
        (oe = e = It(e.current, null)),
        (he = _e = t),
        (ae = 0),
        (xr = null),
        (ul = Ji = Zt = 0),
        (Ae = ir = null),
        Ht !== null)
    ) {
        for (t = 0; t < Ht.length; t++)
            if (((n = Ht[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null;
                var i = r.next,
                    o = n.pending;
                if (o !== null) {
                    var s = o.next;
                    (o.next = i), (r.next = s);
                }
                n.pending = r;
            }
        Ht = null;
    }
    return e;
}
function Yc(e, t) {
    do {
        var n = oe;
        try {
            if (($s(), (ei.current = Ni), Ai)) {
                for (var r = ee.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null), (r = r.next);
                }
                Ai = !1;
            }
            if (
                ((Yt = 0),
                (ce = le = ee = null),
                (nr = !1),
                (wr = 0),
                (al.current = null),
                n === null || n.return === null)
            ) {
                (ae = 1), (xr = t), (oe = null);
                break;
            }
            e: {
                var o = e,
                    s = n.return,
                    a = n,
                    u = t;
                if (
                    ((t = he),
                    (a.flags |= 32768),
                    u !== null &&
                        typeof u == "object" &&
                        typeof u.then == "function")
                ) {
                    var f = u,
                        g = a,
                        h = g.tag;
                    if (!(g.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var m = g.alternate;
                        m
                            ? ((g.updateQueue = m.updateQueue),
                              (g.memoizedState = m.memoizedState),
                              (g.lanes = m.lanes))
                            : ((g.updateQueue = null),
                              (g.memoizedState = null));
                    }
                    var y = va(s);
                    if (y !== null) {
                        (y.flags &= -257),
                            wa(y, s, a, o, t),
                            y.mode & 1 && ga(o, f, t),
                            (t = y),
                            (u = f);
                        var A = t.updateQueue;
                        if (A === null) {
                            var x = new Set();
                            x.add(u), (t.updateQueue = x);
                        } else A.add(u);
                        break e;
                    } else {
                        if (!(t & 1)) {
                            ga(o, f, t), pl();
                            break e;
                        }
                        u = Error(E(426));
                    }
                } else if (Y && a.mode & 1) {
                    var B = va(s);
                    if (B !== null) {
                        !(B.flags & 65536) && (B.flags |= 256),
                            wa(B, s, a, o, t),
                            Ws(Tn(u, a));
                        break e;
                    }
                }
                (o = u = Tn(u, a)),
                    ae !== 4 && (ae = 2),
                    ir === null ? (ir = [o]) : ir.push(o),
                    (o = s);
                do {
                    switch (o.tag) {
                        case 3:
                            (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                            var d = Fc(o, u, t);
                            ca(o, d);
                            break e;
                        case 1:
                            a = u;
                            var c = o.type,
                                p = o.stateNode;
                            if (
                                !(o.flags & 128) &&
                                (typeof c.getDerivedStateFromError ==
                                    "function" ||
                                    (p !== null &&
                                        typeof p.componentDidCatch ==
                                            "function" &&
                                        (Lt === null || !Lt.has(p))))
                            ) {
                                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                                var k = Mc(o, a, t);
                                ca(o, k);
                                break e;
                            }
                    }
                    o = o.return;
                } while (o !== null);
            }
            td(n);
        } catch (v) {
            (t = v), oe === n && n !== null && (oe = n = n.return);
            continue;
        }
        break;
    } while (1);
}
function Zc() {
    var e = ji.current;
    return (ji.current = Ni), e === null ? Ni : e;
}
function pl() {
    (ae === 0 || ae === 3 || ae === 2) && (ae = 4),
        de === null || (!(Zt & 268435455) && !(Ji & 268435455)) || Ct(de, he);
}
function _i(e, t) {
    var n = K;
    K |= 2;
    var r = Zc();
    (de !== e || he !== t) && ((ct = null), Wt(e, t));
    do
        try {
            Dp();
            break;
        } catch (i) {
            Yc(e, i);
        }
    while (1);
    if (($s(), (K = n), (ji.current = r), oe !== null)) throw Error(E(261));
    return (de = null), (he = 0), ae;
}
function Dp() {
    for (; oe !== null; ) ed(oe);
}
function Bp() {
    for (; oe !== null && !cf(); ) ed(oe);
}
function ed(e) {
    var t = rd(e.alternate, e, _e);
    (e.memoizedProps = e.pendingProps),
        t === null ? td(e) : (oe = t),
        (al.current = null);
}
function td(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
            if (((n = Lp(n, t)), n !== null)) {
                (n.flags &= 32767), (oe = n);
                return;
            }
            if (e !== null)
                (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (ae = 6), (oe = null);
                return;
            }
        } else if (((n = _p(n, t, _e)), n !== null)) {
            oe = n;
            return;
        }
        if (((t = t.sibling), t !== null)) {
            oe = t;
            return;
        }
        oe = t = e;
    } while (t !== null);
    ae === 0 && (ae = 5);
}
function Vt(e, t, n) {
    var r = W,
        i = qe.transition;
    try {
        (qe.transition = null), (W = 1), bp(e, t, n, r);
    } finally {
        (qe.transition = i), (W = r);
    }
    return null;
}
function bp(e, t, n, r) {
    do Pn();
    while (At !== null);
    if (K & 6) throw Error(E(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
        throw Error(E(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = n.lanes | n.childLanes;
    if (
        (Sf(e, o),
        e === de && ((oe = de = null), (he = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            Vr ||
            ((Vr = !0),
            id(fi, function () {
                return Pn(), null;
            })),
        (o = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || o)
    ) {
        (o = qe.transition), (qe.transition = null);
        var s = W;
        W = 1;
        var a = K;
        (K |= 4),
            (al.current = null),
            Ip(e, n),
            $c(n, e),
            sp($o),
            (hi = !!Qo),
            ($o = Qo = null),
            (e.current = n),
            Fp(n),
            df(),
            (K = a),
            (W = s),
            (qe.transition = o);
    } else e.current = n;
    if (
        (Vr && ((Vr = !1), (At = e), (Ti = i)),
        (o = e.pendingLanes),
        o === 0 && (Lt = null),
        hf(n.stateNode),
        Te(e, ie()),
        t !== null)
    )
        for (r = e.onRecoverableError, n = 0; n < t.length; n++)
            (i = t[n]),
                r(i.value, { componentStack: i.stack, digest: i.digest });
    if (Ri) throw ((Ri = !1), (e = ms), (ms = null), e);
    return (
        Ti & 1 && e.tag !== 0 && Pn(),
        (o = e.pendingLanes),
        o & 1 ? (e === ys ? or++ : ((or = 0), (ys = e))) : (or = 0),
        Bt(),
        null
    );
}
function Pn() {
    if (At !== null) {
        var e = Iu(Ti),
            t = qe.transition,
            n = W;
        try {
            if (((qe.transition = null), (W = 16 > e ? 16 : e), At === null))
                var r = !1;
            else {
                if (((e = At), (At = null), (Ti = 0), K & 6))
                    throw Error(E(331));
                var i = K;
                for (K |= 4, T = e.current; T !== null; ) {
                    var o = T,
                        s = o.child;
                    if (T.flags & 16) {
                        var a = o.deletions;
                        if (a !== null) {
                            for (var u = 0; u < a.length; u++) {
                                var f = a[u];
                                for (T = f; T !== null; ) {
                                    var g = T;
                                    switch (g.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            rr(8, g, o);
                                    }
                                    var h = g.child;
                                    if (h !== null) (h.return = g), (T = h);
                                    else
                                        for (; T !== null; ) {
                                            g = T;
                                            var m = g.sibling,
                                                y = g.return;
                                            if ((Kc(g), g === f)) {
                                                T = null;
                                                break;
                                            }
                                            if (m !== null) {
                                                (m.return = y), (T = m);
                                                break;
                                            }
                                            T = y;
                                        }
                                }
                            }
                            var A = o.alternate;
                            if (A !== null) {
                                var x = A.child;
                                if (x !== null) {
                                    A.child = null;
                                    do {
                                        var B = x.sibling;
                                        (x.sibling = null), (x = B);
                                    } while (x !== null);
                                }
                            }
                            T = o;
                        }
                    }
                    if (o.subtreeFlags & 2064 && s !== null)
                        (s.return = o), (T = s);
                    else
                        e: for (; T !== null; ) {
                            if (((o = T), o.flags & 2048))
                                switch (o.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        rr(9, o, o.return);
                                }
                            var d = o.sibling;
                            if (d !== null) {
                                (d.return = o.return), (T = d);
                                break e;
                            }
                            T = o.return;
                        }
                }
                var c = e.current;
                for (T = c; T !== null; ) {
                    s = T;
                    var p = s.child;
                    if (s.subtreeFlags & 2064 && p !== null)
                        (p.return = s), (T = p);
                    else
                        e: for (s = c; T !== null; ) {
                            if (((a = T), a.flags & 2048))
                                try {
                                    switch (a.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Vi(9, a);
                                    }
                                } catch (v) {
                                    ne(a, a.return, v);
                                }
                            if (a === s) {
                                T = null;
                                break e;
                            }
                            var k = a.sibling;
                            if (k !== null) {
                                (k.return = a.return), (T = k);
                                break e;
                            }
                            T = a.return;
                        }
                }
                if (
                    ((K = i),
                    Bt(),
                    st && typeof st.onPostCommitFiberRoot == "function")
                )
                    try {
                        st.onPostCommitFiberRoot(Fi, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (W = n), (qe.transition = t);
        }
    }
    return !1;
}
function La(e, t, n) {
    (t = Tn(n, t)),
        (t = Fc(e, t, 1)),
        (e = _t(e, t, 1)),
        (t = Pe()),
        e !== null && (Cr(e, 1, t), Te(e, t));
}
function ne(e, t, n) {
    if (e.tag === 3) La(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                La(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (
                    typeof t.type.getDerivedStateFromError == "function" ||
                    (typeof r.componentDidCatch == "function" &&
                        (Lt === null || !Lt.has(r)))
                ) {
                    (e = Tn(n, e)),
                        (e = Mc(t, e, 1)),
                        (t = _t(t, e, 1)),
                        (e = Pe()),
                        t !== null && (Cr(t, 1, e), Te(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function Up(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        (t = Pe()),
        (e.pingedLanes |= e.suspendedLanes & n),
        de === e &&
            (he & n) === n &&
            (ae === 4 ||
            (ae === 3 && (he & 130023424) === he && 500 > ie() - cl)
                ? Wt(e, 0)
                : (ul |= n)),
        Te(e, t);
}
function nd(e, t) {
    t === 0 &&
        (e.mode & 1
            ? ((t = Or), (Or <<= 1), !(Or & 130023424) && (Or = 4194304))
            : (t = 1));
    var n = Pe();
    (e = gt(e, t)), e !== null && (Cr(e, t, n), Te(e, n));
}
function qp(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), nd(e, n);
}
function Vp(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(E(314));
    }
    r !== null && r.delete(t), nd(e, n);
}
var rd;
rd = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || je.current) Ne = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return (Ne = !1), Tp(e, t, n);
            Ne = !!(e.flags & 131072);
        }
    else (Ne = !1), Y && t.flags & 1048576 && sc(t, ki, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            ni(e, t), (e = t.pendingProps);
            var i = An(t, Se.current);
            xn(t, n), (i = rl(null, t, r, e, i, n));
            var o = il();
            return (
                (t.flags |= 1),
                typeof i == "object" &&
                i !== null &&
                typeof i.render == "function" &&
                i.$$typeof === void 0
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      Re(r) ? ((o = !0), wi(t)) : (o = !1),
                      (t.memoizedState =
                          i.state !== null && i.state !== void 0
                              ? i.state
                              : null),
                      Ys(t),
                      (i.updater = Ui),
                      (t.stateNode = i),
                      (i._reactInternals = t),
                      is(t, r, e, n),
                      (t = ls(null, t, r, !0, o, n)))
                    : ((t.tag = 0),
                      Y && o && Hs(t),
                      xe(null, t, i, n),
                      (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (ni(e, t),
                    (e = t.pendingProps),
                    (i = r._init),
                    (r = i(r._payload)),
                    (t.type = r),
                    (i = t.tag = Hp(r)),
                    (e = We(r, e)),
                    i)
                ) {
                    case 0:
                        t = ss(null, t, r, e, n);
                        break e;
                    case 1:
                        t = xa(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Sa(null, t, r, e, n);
                        break e;
                    case 14:
                        t = ka(null, t, r, We(r.type, e), n);
                        break e;
                }
                throw Error(E(306, r, ""));
            }
            return t;
        case 0:
            return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : We(r, i)),
                ss(e, t, r, i, n)
            );
        case 1:
            return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : We(r, i)),
                xa(e, t, r, i, n)
            );
        case 3:
            e: {
                if ((bc(t), e === null)) throw Error(E(387));
                (r = t.pendingProps),
                    (o = t.memoizedState),
                    (i = o.element),
                    cc(e, t),
                    Ci(t, r, null, n);
                var s = t.memoizedState;
                if (((r = s.element), o.isDehydrated))
                    if (
                        ((o = {
                            element: r,
                            isDehydrated: !1,
                            cache: s.cache,
                            pendingSuspenseBoundaries:
                                s.pendingSuspenseBoundaries,
                            transitions: s.transitions,
                        }),
                        (t.updateQueue.baseState = o),
                        (t.memoizedState = o),
                        t.flags & 256)
                    ) {
                        (i = Tn(Error(E(423)), t)), (t = Pa(e, t, r, n, i));
                        break e;
                    } else if (r !== i) {
                        (i = Tn(Error(E(424)), t)), (t = Pa(e, t, r, n, i));
                        break e;
                    } else
                        for (
                            Le = Tt(t.stateNode.containerInfo.firstChild),
                                Oe = t,
                                Y = !0,
                                Xe = null,
                                n = hc(t, null, r, n),
                                t.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((Nn(), r === i)) {
                        t = vt(e, t, n);
                        break e;
                    }
                    xe(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                mc(t),
                e === null && ts(t),
                (r = t.type),
                (i = t.pendingProps),
                (o = e !== null ? e.memoizedProps : null),
                (s = i.children),
                Xo(r, i)
                    ? (s = null)
                    : o !== null && Xo(r, o) && (t.flags |= 32),
                Bc(e, t),
                xe(e, t, s, n),
                t.child
            );
        case 6:
            return e === null && ts(t), null;
        case 13:
            return Uc(e, t, n);
        case 4:
            return (
                Zs(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                e === null ? (t.child = jn(t, null, r, n)) : xe(e, t, r, n),
                t.child
            );
        case 11:
            return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : We(r, i)),
                Sa(e, t, r, i, n)
            );
        case 7:
            return xe(e, t, t.pendingProps, n), t.child;
        case 8:
            return xe(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return xe(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (i = t.pendingProps),
                    (o = t.memoizedProps),
                    (s = i.value),
                    Q(xi, r._currentValue),
                    (r._currentValue = s),
                    o !== null)
                )
                    if (Ze(o.value, s)) {
                        if (o.children === i.children && !je.current) {
                            t = vt(e, t, n);
                            break e;
                        }
                    } else
                        for (
                            o = t.child, o !== null && (o.return = t);
                            o !== null;

                        ) {
                            var a = o.dependencies;
                            if (a !== null) {
                                s = o.child;
                                for (var u = a.firstContext; u !== null; ) {
                                    if (u.context === r) {
                                        if (o.tag === 1) {
                                            (u = ht(-1, n & -n)), (u.tag = 2);
                                            var f = o.updateQueue;
                                            if (f !== null) {
                                                f = f.shared;
                                                var g = f.pending;
                                                g === null
                                                    ? (u.next = u)
                                                    : ((u.next = g.next),
                                                      (g.next = u)),
                                                    (f.pending = u);
                                            }
                                        }
                                        (o.lanes |= n),
                                            (u = o.alternate),
                                            u !== null && (u.lanes |= n),
                                            ns(o.return, n, t),
                                            (a.lanes |= n);
                                        break;
                                    }
                                    u = u.next;
                                }
                            } else if (o.tag === 10)
                                s = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (((s = o.return), s === null))
                                    throw Error(E(341));
                                (s.lanes |= n),
                                    (a = s.alternate),
                                    a !== null && (a.lanes |= n),
                                    ns(s, n, t),
                                    (s = o.sibling);
                            } else s = o.child;
                            if (s !== null) s.return = o;
                            else
                                for (s = o; s !== null; ) {
                                    if (s === t) {
                                        s = null;
                                        break;
                                    }
                                    if (((o = s.sibling), o !== null)) {
                                        (o.return = s.return), (s = o);
                                        break;
                                    }
                                    s = s.return;
                                }
                            o = s;
                        }
                xe(e, t, i.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (
                (i = t.type),
                (r = t.pendingProps.children),
                xn(t, n),
                (i = Ve(i)),
                (r = r(i)),
                (t.flags |= 1),
                xe(e, t, r, n),
                t.child
            );
        case 14:
            return (
                (r = t.type),
                (i = We(r, t.pendingProps)),
                (i = We(r.type, i)),
                ka(e, t, r, i, n)
            );
        case 15:
            return zc(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : We(r, i)),
                ni(e, t),
                (t.tag = 1),
                Re(r) ? ((e = !0), wi(t)) : (e = !1),
                xn(t, n),
                fc(t, r, i),
                is(t, r, i, n),
                ls(null, t, r, !0, e, n)
            );
        case 19:
            return qc(e, t, n);
        case 22:
            return Dc(e, t, n);
    }
    throw Error(E(156, t.tag));
};
function id(e, t) {
    return Tu(e, t);
}
function Jp(e, t, n, r) {
    (this.tag = e),
        (this.key = n),
        (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
                null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
                null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function Ue(e, t, n, r) {
    return new Jp(e, t, n, r);
}
function hl(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Hp(e) {
    if (typeof e == "function") return hl(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === Os)) return 11;
        if (e === Is) return 14;
    }
    return 2;
}
function It(e, t) {
    var n = e.alternate;
    return (
        n === null
            ? ((n = Ue(e.tag, t, e.key, e.mode)),
              (n.elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.subtreeFlags = 0),
              (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
            t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    );
}
function oi(e, t, n, r, i, o) {
    var s = 2;
    if (((r = e), typeof e == "function")) hl(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else
        e: switch (e) {
            case ln:
                return Qt(n.children, i, o, t);
            case Ls:
                (s = 8), (i |= 8);
                break;
            case jo:
                return (
                    (e = Ue(12, n, t, i | 2)),
                    (e.elementType = jo),
                    (e.lanes = o),
                    e
                );
            case Ro:
                return (
                    (e = Ue(13, n, t, i)),
                    (e.elementType = Ro),
                    (e.lanes = o),
                    e
                );
            case To:
                return (
                    (e = Ue(19, n, t, i)),
                    (e.elementType = To),
                    (e.lanes = o),
                    e
                );
            case pu:
                return Hi(n, i, o, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case du:
                            s = 10;
                            break e;
                        case fu:
                            s = 9;
                            break e;
                        case Os:
                            s = 11;
                            break e;
                        case Is:
                            s = 14;
                            break e;
                        case kt:
                            (s = 16), (r = null);
                            break e;
                    }
                throw Error(E(130, e == null ? e : typeof e, ""));
        }
    return (
        (t = Ue(s, n, t, i)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = o),
        t
    );
}
function Qt(e, t, n, r) {
    return (e = Ue(7, e, r, t)), (e.lanes = n), e;
}
function Hi(e, t, n, r) {
    return (
        (e = Ue(22, e, r, t)),
        (e.elementType = pu),
        (e.lanes = n),
        (e.stateNode = { isHidden: !1 }),
        e
    );
}
function xo(e, t, n) {
    return (e = Ue(6, e, null, t)), (e.lanes = n), e;
}
function Po(e, t, n) {
    return (
        (t = Ue(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
        }),
        t
    );
}
function Kp(e, t, n, r, i) {
    (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork =
            this.pingCache =
            this.current =
            this.pendingChildren =
                null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = no(0)),
        (this.expirationTimes = no(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = no(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = i),
        (this.mutableSourceEagerHydrationData = null);
}
function ml(e, t, n, r, i, o, s, a, u) {
    return (
        (e = new Kp(e, t, n, a, u)),
        t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
        (o = Ue(3, null, null, t)),
        (e.current = o),
        (o.stateNode = e),
        (o.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        Ys(o),
        e
    );
}
function Wp(e, t, n) {
    var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: sn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n,
    };
}
function od(e) {
    if (!e) return Mt;
    e = e._reactInternals;
    e: {
        if (nn(e) !== e || e.tag !== 1) throw Error(E(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Re(t.type)) {
                        t =
                            t.stateNode
                                .__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (t !== null);
        throw Error(E(171));
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Re(n)) return ic(e, n, t);
    }
    return t;
}
function sd(e, t, n, r, i, o, s, a, u) {
    return (
        (e = ml(n, r, !0, e, i, o, s, a, u)),
        (e.context = od(null)),
        (n = e.current),
        (r = Pe()),
        (i = Ot(n)),
        (o = ht(r, i)),
        (o.callback = t ?? null),
        _t(n, o, i),
        (e.current.lanes = i),
        Cr(e, i, r),
        Te(e, r),
        e
    );
}
function Ki(e, t, n, r) {
    var i = t.current,
        o = Pe(),
        s = Ot(i);
    return (
        (n = od(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = ht(o, s)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = _t(i, t, s)),
        e !== null && (Ye(e, i, s, o), Zr(e, i, s)),
        s
    );
}
function Li(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function Oa(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    }
}
function yl(e, t) {
    Oa(e, t), (e = e.alternate) && Oa(e, t);
}
function Qp() {
    return null;
}
var ld =
    typeof reportError == "function"
        ? reportError
        : function (e) {
              console.error(e);
          };
function gl(e) {
    this._internalRoot = e;
}
Wi.prototype.render = gl.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(E(409));
    Ki(e, t, null, null);
};
Wi.prototype.unmount = gl.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        en(function () {
            Ki(null, e, null, null);
        }),
            (t[yt] = null);
    }
};
function Wi(e) {
    this._internalRoot = e;
}
Wi.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = zu();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < Pt.length && t !== 0 && t < Pt[n].priority; n++);
        Pt.splice(n, 0, e), n === 0 && Bu(e);
    }
};
function vl(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Qi(e) {
    return !(
        !e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 ||
                e.nodeValue !== " react-mount-point-unstable "))
    );
}
function Ia() {}
function $p(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function () {
                var f = Li(s);
                o.call(f);
            };
        }
        var s = sd(t, r, e, 0, null, !1, !1, "", Ia);
        return (
            (e._reactRootContainer = s),
            (e[yt] = s.current),
            hr(e.nodeType === 8 ? e.parentNode : e),
            en(),
            s
        );
    }
    for (; (i = e.lastChild); ) e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function () {
            var f = Li(u);
            a.call(f);
        };
    }
    var u = ml(e, 0, !1, null, null, !1, !1, "", Ia);
    return (
        (e._reactRootContainer = u),
        (e[yt] = u.current),
        hr(e.nodeType === 8 ? e.parentNode : e),
        en(function () {
            Ki(t, u, n, r);
        }),
        u
    );
}
function $i(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof i == "function") {
            var a = i;
            i = function () {
                var u = Li(s);
                a.call(u);
            };
        }
        Ki(t, s, e, i);
    } else s = $p(n, t, e, i, r);
    return Li(s);
}
Fu = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Qn(t.pendingLanes);
                n !== 0 &&
                    (zs(t, n | 1),
                    Te(t, ie()),
                    !(K & 6) && ((_n = ie() + 500), Bt()));
            }
            break;
        case 13:
            en(function () {
                var r = gt(e, 1);
                if (r !== null) {
                    var i = Pe();
                    Ye(r, e, 1, i);
                }
            }),
                yl(e, 1);
    }
};
Ds = function (e) {
    if (e.tag === 13) {
        var t = gt(e, 134217728);
        if (t !== null) {
            var n = Pe();
            Ye(t, e, 134217728, n);
        }
        yl(e, 134217728);
    }
};
Mu = function (e) {
    if (e.tag === 13) {
        var t = Ot(e),
            n = gt(e, t);
        if (n !== null) {
            var r = Pe();
            Ye(n, e, t, r);
        }
        yl(e, t);
    }
};
zu = function () {
    return W;
};
Du = function (e, t) {
    var n = W;
    try {
        return (W = e), t();
    } finally {
        W = n;
    }
};
bo = function (e, t, n) {
    switch (t) {
        case "input":
            if ((Oo(e, n), (t = n.name), n.type === "radio" && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                    n = n.querySelectorAll(
                        "input[name=" +
                            JSON.stringify("" + t) +
                            '][type="radio"]'
                    ),
                        t = 0;
                    t < n.length;
                    t++
                ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = Bi(r);
                        if (!i) throw Error(E(90));
                        mu(r), Oo(r, i);
                    }
                }
            }
            break;
        case "textarea":
            gu(e, n);
            break;
        case "select":
            (t = n.value), t != null && vn(e, !!n.multiple, t, !1);
    }
};
Cu = dl;
Eu = en;
var Xp = { usingClientEntryPoint: !1, Events: [Ar, dn, Bi, xu, Pu, dl] },
    Jn = {
        findFiberByHostInstance: Jt,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom",
    },
    Gp = {
        bundleType: Jn.bundleType,
        version: Jn.version,
        rendererPackageName: Jn.rendererPackageName,
        rendererConfig: Jn.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: wt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = ju(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Jn.findFiberByHostInstance || Qp,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Jr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Jr.isDisabled && Jr.supportsFiber)
        try {
            (Fi = Jr.inject(Gp)), (st = Jr);
        } catch {}
}
Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xp;
Fe.createPortal = function (e, t) {
    var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!vl(t)) throw Error(E(200));
    return Wp(e, t, null, n);
};
Fe.createRoot = function (e, t) {
    if (!vl(e)) throw Error(E(299));
    var n = !1,
        r = "",
        i = ld;
    return (
        t != null &&
            (t.unstable_strictMode === !0 && (n = !0),
            t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = ml(e, 1, !1, null, null, n, !1, r, i)),
        (e[yt] = t.current),
        hr(e.nodeType === 8 ? e.parentNode : e),
        new gl(t)
    );
};
Fe.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function"
            ? Error(E(188))
            : ((e = Object.keys(e).join(",")), Error(E(268, e)));
    return (e = ju(t)), (e = e === null ? null : e.stateNode), e;
};
Fe.flushSync = function (e) {
    return en(e);
};
Fe.hydrate = function (e, t, n) {
    if (!Qi(t)) throw Error(E(200));
    return $i(null, e, t, !0, n);
};
Fe.hydrateRoot = function (e, t, n) {
    if (!vl(e)) throw Error(E(405));
    var r = (n != null && n.hydratedSources) || null,
        i = !1,
        o = "",
        s = ld;
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (i = !0),
            n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
        (t = sd(t, null, e, 1, n ?? null, i, !1, o, s)),
        (e[yt] = t.current),
        hr(e),
        r)
    )
        for (e = 0; e < r.length; e++)
            (n = r[e]),
                (i = n._getVersion),
                (i = i(n._source)),
                t.mutableSourceEagerHydrationData == null
                    ? (t.mutableSourceEagerHydrationData = [n, i])
                    : t.mutableSourceEagerHydrationData.push(n, i);
    return new Wi(t);
};
Fe.render = function (e, t, n) {
    if (!Qi(t)) throw Error(E(200));
    return $i(null, e, t, !1, n);
};
Fe.unmountComponentAtNode = function (e) {
    if (!Qi(e)) throw Error(E(40));
    return e._reactRootContainer
        ? (en(function () {
              $i(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[yt] = null);
              });
          }),
          !0)
        : !1;
};
Fe.unstable_batchedUpdates = dl;
Fe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!Qi(n)) throw Error(E(200));
    if (e == null || e._reactInternals === void 0) throw Error(E(38));
    return $i(e, t, n, !1, r);
};
Fe.version = "18.2.0-next-9e3b772b8-20220608";
function ad() {
    if (
        !(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
    )
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ad);
        } catch (e) {
            console.error(e);
        }
}
ad(), (su.exports = Fe);
var Yp = su.exports,
    Fa = Yp;
(Ao.createRoot = Fa.createRoot), (Ao.hydrateRoot = Fa.hydrateRoot);
class Ma {
    constructor(t, n) {
        He(this, "id");
        He(this, "username");
        He(this, "icon");
        He(this, "position");
        He(this, "balance");
        He(this, "properties");
        He(this, "isInJail");
        He(this, "jailTurnsRemaining");
        He(this, "getoutCards");
        He(this, "ready");
        (this.id = t),
            (this.username = n),
            (this.icon = -1),
            (this.position = 0),
            (this.balance = 1500),
            (this.properties = []),
            (this.isInJail = !1),
            (this.jailTurnsRemaining = 0),
            (this.getoutCards = 0),
            (this.ready = !1);
    }
    recieveJson(t) {
        return (
            (this.username = t.username),
            (this.position = t.position),
            (this.icon = t.icon),
            (this.balance = t.balance),
            (this.properties = t.properties),
            (this.isInJail = t.isInJail),
            (this.jailTurnsRemaining = t.jailTurnsRemaining),
            (this.getoutCards = t.getoutCards),
            this
        );
    }
    toJson() {
        return {
            balance: this.balance,
            icon: this.icon,
            id: this.id,
            isInJail: this.isInJail,
            jailTurnsRemaining: this.jailTurnsRemaining,
            position: this.position,
            properties: this.properties,
            username: this.username,
            getoutCards: this.getoutCards,
        };
    }
}
const Zp = "./assets/players-69e481c3.png",
    za = "./assets/chat-98a8e3f3.png",
    eh = "./assets/chat_new-733d0bcc.png",
    th =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAjpQTFRFAAAA509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P509P/m/HAgAAAL50Uk5TABmAwNbYyZApXvX//H8BhTam5vvli0I8oud1DYTvgxQd+p4n/qwzukHITwLUXATfagnoeA/whhb3lB+hKq+9RMpRXwXhbQrqexDyiRj4liGkLLI5R81VA9liBuPrsdAONO0Hcodh/flD9OQg2xfDtZVxUPM1JKXs2s/CtIFvQKgM1x5GVxxokbniKEVWaX6Tp7gLEziInWQVVBIjIt6CWL96dO5OSUtmu7yrbhE9t5cajXfp0U0uJZySfGdSzLBMfx0AAATRSURBVHic7d35fxNFGAbwFxoK9AloFQtigUYDWCqI9aBYMAKCWiwoVpCzgEoFTzwIh1qqiOCJijfgfVRRvG//N7eNNWn2SrKTnbzv531+ntl5v712dnYmJdJoNKVkzNi6xDh7qR8/wYxjYgMsJzlpsgmHbcZQzovuGGP9+zGc8yNDxtom5NIYGVJnm5DLBZEhCduEXC6MDBlnm5BLUiEKqU4UEgCZclHT1FgyrcoQ4OLpl0S+bglprjoEmDFzloFKQxIHBGgY3xK91ODEAwFSl15moNqAxAUB0rPnGKjXN/FBnMy93MQzj3dihQCt89oMFO2VmCHAFfMXGCjbndghwJULrzJQeHEsQID2q68xUProWIEA1163yEDxhbEEAToWX2+g/HysQZwH0s4lBgAjsQhxsjT6ws1I7EKAGzKG7pG2IcCNy4zcI+1DgMTyFTIgwE0rV8mAADffcqsMCNC1+jYZEKB7zVoZEKeC2++QAXGy7k4hEKCup5J7ZA1CgLvWb5ABAe7euEkGBNgsBQKFKEQhCvHK9IKuWzhDphZ03coZ0rYt37XHp01vyXMfixDa3jHSs9OvSaaZA4QyO/5z7PRtgXs4QGjRvYnuLVv9fq6GIbiPAyQ0DmTXMiEQ9N0vBILdpSzTcoBgRwlr5ywg2POAEAgefEgIBNvCljW5QPBwyFozGwgeCX4BwAeCxsC3MowgeDRoKswJgplSINgrBYLlUiDJx4RA0NckBILHn7ALebK5ouxzj5L1PpIVF8T9pa04ezz39jCEYL/XVJgjBAc8dsGxhOCgeyrME4JDrqkwUwj2FU+FuUKwuGgqzBaCp6RA8LQUCCZKgSTnCYGg+xkhEHRtFwLBaiGQ/vyeJNaQuQUbkjhD6g8XDMAYMjDqrCRfyOZnRw3AFlL86M4V4nqvyBSSeq54AJ6Q9BHXADwhC90DsIRM8hiAI6T4KZcrpN/zFVxckOePVpQX3KMc897xzW41ftQEizFkwO/DKJhBjrf4teQFyb7o25IVJGjjFidI6qWAlowg6ZeDWjKCvBLYkg/k1eCWbCCvhWwu5wI5EXbynAnk9dAjdTwgrW+EtmQBSbwZ3pIDxH+CxQsSMMFiBdntsx2otiAn3+p/+53eIEgqU9qVrELePTTcL/uePyS9vsRr2YS8PzDS0/fUTiZ4glUjkPyusu4PfJr4Hr6qJcipgq5ryuxbU5CjBV1Pc4acKeia4gwRc+hYIQpRiEIUohCFKEQhClGIQhSiEIUoRCEKUYhCFKIQhZSdD8vL0pqFRIhCFFKlKOT/DIQPEkc6IkM+sk3IpT4y5GPbhFw+iQyZ9altw1DaA3Y6lZrPdtlWOL/qAZ/4W3o+b7ftyH5hwkF0+MvGrwbzOTCj0oIGK8rX35w143Dn2+8qg1SrngiZMzstA0K0ZFpSBoTo1Lk+GRCi739okAFxbpdnyvkTZrvawPT++JMMCNGqlcdlQIg2bdwvA0K04cjPMiBEk39plQFxKE2DMiBOTq4TAiH69UTA44vt4srLb7+nZECIWv7okAEZ+o80XTIgRGf/zMqAOA/Ie6fIgBDt/Ou0DAjRgvkJGRCitr//kQFxZi49B2VAKL98ZLsOA8ktH9muwkgmdCZlQIjWnrNdgUaj8c6/sjbbOODJyXwAAAAASUVORK5CYII=",
    nh = "./assets/proprety-ed9394e1.png",
    rh = "./assets/settings-ec1fd821.png",
    ih = "./assets/icon-96ad3b33.png",
    wl =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOoAAADYCAMAAADS+I/aAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAGxQTFRFAAAAoM6mW7BnVK1hdLp+1enX7fbuRqdUL6BCOKJJNKFGHpw1qdOu6PPqPaRNI5054vDkKp8/KJ48mMqf0OfTvt3CkMeXuNq9isSSrdSyf7+IeryDbbd3YbJtMaFE3+/iyePNSapYrdWyxuHJWHk5egAAACR0Uk5TAP//////IP///////3D//9D/////////////////////////OqkGVgAABKFJREFUeJzt3dFW4jAUheGiAm3RFCqIjgIq7/+Og+OoUJImTXLaHdn/tXblW+iyx5SQZUy00dX1zXjoRfTRZJoXRTm7HXod8t2pQn1UjYZeiXTz8lP6+63jxZdUqfp+6NVItqzVUb/ZuqrUSfVDl+9WDkmtvGvrWXNl9WOHb0+I+lSdL23RwZoOdaSRHqx/nC+QDPWh1i/O3ZoK9c/CtLr8xvESiVCfc/PyXK1pUF9apM7WJKibbfsC8xeXq6RAvS5tK3SyJkCdWqVKbTf268BTJ9PCvkKlSrsVnXq3dZK6vK7g1J2r9PC6XlmuhU0d185SuxWa+qq97TVbr1uvhkxdGW57Pa3A1Kez8dRufWu5Hi511PU1tVlhqfc+UqWKqfGKqNRHP+nBalwuKNU8njpYJ/prYlJvWoc2m7XQWyGptqHNar3TXRWReuUwyrRbS50VkGofTx2s8wSoE5fx1MuKRr0rOtzgt1kXO3Dq3H1os1nzphWLerynGFzdeIgAirr0vUXStzi1IlE7D2226iUodd1tEHepOrbiUN/jSw+v6ysgVb+nGNxsD0e9l5Eefoa/rSBU7/HUwbqCogaMp+5WCGrQeOpgXcNQA8dTe7M1CPVKWnp4XZ8gqG8xhjZb1fvwVMc9xeCq26GpscZTe9XI5avkpLuyL+nB6vJFYtJx3p/ULSnpsvv+k3RC0ujjaYRkpOePvAIkIr2VGmWCkpB67ilKJyA1PfI6dPGlokNbSNGlwkNbQLGl7Y+8DlpkaQ9Dm3dxpRH2FOWKKo2ypyhWROjX+xRRiyeNt6coVDRp1D1FkWJJl6g3Dj9Fku4hb/BPiyMV2FOMXxSp7n2KeMWQCu0pxi6CFHVoaxYuhR3amgVLcYe2ZqFS4KGtWaA0+EHQHguTQg9tzYKk2ENbswDoBHxoa+Yvnfe2pxgpb+kOfmhr5isdp/NH5itP6Svi/pMlP2nzGJ0k8pKmMbQ1W9phZ2HuKVo7fqjWMdA9RXtVV6vgg6DS/TxU61Qy46mu74dqXUpnPNX2/0FTlxIaT/U5W5H3FB3796CpvaTGU1NO1rTGU2MfD9W219+DoNJVlpNq5z0+CCpd++mt+HuKXapbrAnsKXbKfHprCnuK3TJZk9hT7Jj+pFqR9ykOnu6k2kT2FDt3fqJpKnuK3WtaEx5PreXPx9LnX/ZX5rTjE02TH9os/VjF36c4eF8nmqa0e+rb9uVSpJ9WxLcFSVSvsseLeFGVKm4uh7rJ1r/6T+pP5eHGv6c3FQ9dtcuyuaq35pL6B0xhbvb5H4n9vbmHt1R+wPN8+mbs5VU/o5+2SuOuMXffvDC3T+F1reJ8QNkG//e1jPRxRyP8caA+OwjQr1t86sJw9iyppJKKFamkkkoqWKSSSiqpYJFKKqmkgkUqqaSSChappJJKKlikkkoqqWCRSiqppIJFKqmkkgoWqaSSSipYpJJKKqlgkUoqqaSCRSqppJIKFqmkkkoqWKSSSiqpYJFKKqmkgkUqqaSSChappJL6QcU/dTQWNYFDR8s40iyDp27PPvPDt32FfcDqdhpLmmXjTZG3HA09cErzmTWX3V/etxxj46OriAAAAABJRU5ErkJggg==",
    Sl =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOoAAADYBAMAAAAXCGLbAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAA9QTFRFAAAAswAAswAAswAAswAAZtGxUwAAAAV0Uk5TAP8gcNCNz+2CAAACfklEQVR4nO3di1HDQAyEYQwUEAUKgA5IB9B/U+QJse8hXbx7B5lVAfrmzxjM+Aw8PPyzmcz6o49mtumu7vZq99jnA9o91k7TF53Oat9Ys2qsJYNAp59t+ViO6q2jqNPVumwsRXX3MdRpti8Xy1D9hQR1WizMxBLUwEa8ukzNxeLVdGO6Eq6+Z9QkFq0+ZdB0J1rNokksWE0vpexSsFpAl7FYtZS63IpVi+giFqqWUxdroWoFncci1VrqfC9SraK25aj1VLM3iuqg9sJQvVSzD4LqovaKV3N3uOV8otX8Ha60G6V+hdTLtwqQ6l9Ks+UgNYheYjFqNPWyHaOG0XMsRI2nntdD1Ab0FItQW1JP+xFqE3qMBahtqUcAoDaih9j1amvqQVivNqP72NVqe+qeWKs+3oDaZq26u0XNTBN6y+e7XkWhTSostUmFoS0qLrVFxaENKjC1QQWicRWZGleRaFiFpoZVKBpVsalRFYsG1d0I9RmMxlQ0GlLBl1JQhaMRFZ8aUfFoQCWkBlQC6quMVF9loK5KSXVVCuqpnFRP5aCOGnkgC1fhd7iQykKrKulSclQaWlN5qTWVh1ZehCKmVmKZaDGWmlqM5aKFWHJq+K0v8ORi6anBF6Hgk8Z2SE1jY0eOa2cZGztyXD0DPl/z3yAhzYjUeWw39Dq2X+p1bEf0N7Znau3AnzojUstn4OQZkVo6FqbPiNT8SWmHkUpXR1xNxnskUJnNkC+d5AfUQQ8RGZdX4FeHxjwHvxd166NSpUqVKlWqVKlSpUqVKlWqVKlSpUqVKlWqVKlSpUqVKlWqVKlSpUqVKlWqVKl/UA39hfo7USMo/CPu/88dCvMNgwpEBhudalAAAAAASUVORK5CYII=",
    oh = "./assets/rails-b5a8f288.png",
    sh = "./assets/elects-0ca4f3b8.png",
    lh = "./assets/water-7bf83b59.png";
function Oi(e) {
    try {
        switch (e.toLowerCase()) {
            case "red":
                return "#ED1B24";
            case "darkgreen":
                return "#1FB25A";
            case "darkblue":
                return "#0072BB";
            case "yellow":
                return "#FEF200";
            case "purple":
                return "#955436";
            case "lightgreen":
                return "#AAE0FA";
            case "orange":
                return "#F7941D";
            case "violet":
                return "#D93A96";
            default:
                return e.toLowerCase();
        }
    } catch {
        return e;
    }
}
function Cn({ street: e, utility: t, railroad: n }) {
    return e !== void 0
        ? l.jsx(ah, { args: e })
        : t !== void 0
        ? l.jsx(ch, { args: t })
        : n !== void 0
        ? l.jsx(uh, { args: n })
        : l.jsx(l.Fragment, {});
}
function ah({ args: e }) {
    const t = Oi(e.group);
    return l.jsxs("div", {
        className: "street-card",
        children: [
            l.jsxs("div", {
                style: { backgroundColor: t },
                children: [
                    l.jsx("p", { children: "title dreed" }),
                    l.jsx("h3", { children: e.title }),
                ],
            }),
            l.jsxs("div", {
                children: [
                    l.jsxs("ol", {
                        children: [
                            l.jsxs("li", {
                                children: [
                                    l.jsx("p", { children: "Rent" }),
                                    l.jsxs("p", { children: [e.rent, "M"] }),
                                ],
                            }),
                            l.jsxs("li", {
                                children: [
                                    l.jsx("p", {
                                        children: "Rent with color set",
                                    }),
                                    l.jsxs("p", {
                                        children: [e.rentWithColorSet, "M"],
                                    }),
                                ],
                            }),
                            l.jsxs("li", {
                                children: [
                                    l.jsx("p", {
                                        children: "Rent with 1 house",
                                    }),
                                    l.jsxs("p", {
                                        children: [e.multpliedrent[0], "M"],
                                    }),
                                ],
                            }),
                            l.jsxs("li", {
                                children: [
                                    l.jsx("p", {
                                        children: "Rent with 2 houses",
                                    }),
                                    l.jsxs("p", {
                                        children: [e.multpliedrent[1], "M"],
                                    }),
                                ],
                            }),
                            l.jsxs("li", {
                                children: [
                                    l.jsx("p", {
                                        children: "Rent with 3 houses",
                                    }),
                                    l.jsxs("p", {
                                        children: [e.multpliedrent[2], "M"],
                                    }),
                                ],
                            }),
                            l.jsxs("li", {
                                children: [
                                    l.jsx("p", {
                                        children: "Rent with 4 houses",
                                    }),
                                    l.jsxs("p", {
                                        children: [e.multpliedrent[3], "M"],
                                    }),
                                ],
                            }),
                            l.jsxs("li", {
                                children: [
                                    l.jsx("p", { children: "Rent with hotel" }),
                                    l.jsxs("p", {
                                        children: [e.multpliedrent[4], "M"],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    l.jsx("hr", {}),
                    l.jsxs("ol", {
                        children: [
                            l.jsxs("li", {
                                children: [
                                    l.jsx("p", { children: "House cost" }),
                                    l.jsxs("p", {
                                        children: [e.housesCost, "M each"],
                                    }),
                                ],
                            }),
                            l.jsxs("li", {
                                children: [
                                    l.jsx("p", { children: "Hotels cost" }),
                                    l.jsxs("label", {
                                        children: [
                                            e.hotelsCost,
                                            "M each",
                                            l.jsx("br", {}),
                                            l.jsx("p", {
                                                style: { fontSize: 12 },
                                                children: "(plus 4 houses)",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    l.jsx("br", {}),
                    l.jsx("hr", {}),
                    l.jsxs("h4", { children: [e.cardCost, "M"] }),
                ],
            }),
        ],
    });
}
function uh({ args: e }) {
    return l.jsxs("div", {
        className: "street-card",
        children: [
            l.jsxs("div", {
                "data-clear": !0,
                children: [
                    l.jsx("img", { "data-type": "rail", src: oh, alt: "" }),
                    l.jsx("h3", { children: e.title }),
                ],
            }),
            l.jsxs("div", {
                children: [
                    l.jsxs("ol", {
                        children: [
                            l.jsxs("li", {
                                children: [
                                    l.jsx("p", { children: "Rent" }),
                                    l.jsxs("p", { children: [25, "M"] }),
                                ],
                            }),
                            l.jsxs("li", {
                                children: [
                                    l.jsx("p", {
                                        children: "If 2 stations are owned",
                                    }),
                                    l.jsxs("p", { children: [50, "M"] }),
                                ],
                            }),
                            l.jsxs("li", {
                                children: [
                                    l.jsx("p", {
                                        children: "If 3 stations are owned",
                                    }),
                                    l.jsxs("p", { children: [100, "M"] }),
                                ],
                            }),
                            l.jsxs("li", {
                                children: [
                                    l.jsx("p", {
                                        children: "If 4 stations are owned",
                                    }),
                                    l.jsxs("p", { children: [200, "M"] }),
                                ],
                            }),
                        ],
                    }),
                    l.jsx("h4", { children: "mortgage Value 100M" }),
                    l.jsx("hr", {}),
                    l.jsx("br", {}),
                    l.jsxs("h4", { children: [e.cardCost, "M"] }),
                ],
            }),
        ],
    });
}
function ch({ args: e }) {
    return l.jsxs("div", {
        className: "street-card",
        children: [
            l.jsxs("div", {
                "data-clear": !0,
                children: [
                    l.jsx("center", {
                        children: l.jsx("img", {
                            "data-type": e.type,
                            src: e.type === "electricity" ? sh : lh,
                            alt: "",
                        }),
                    }),
                    l.jsx("h3", { children: e.title }),
                ],
            }),
            l.jsxs("div", {
                children: [
                    l.jsxs("p", {
                        style: { lineHeight: 1, paddingInline: 10 },
                        children: [
                            "If one Utility is owned, rent is 4 times amount shown on dice.",
                            l.jsx("br", {}),
                            l.jsx("br", {}),
                            "If both Utilities are owned, rent is 10 times amount shown on dice",
                        ],
                    }),
                    l.jsx("hr", {}),
                    l.jsx("br", {}),
                    l.jsxs("h4", { children: [e.cardCost, "M"] }),
                ],
            }),
        ],
    });
}
const dh = [
        {
            name: "Mediterranean Avenue",
            id: "mediterraneanave",
            posistion: 1,
            price: 60,
            rent: 2,
            multpliedrent: [10, 30, 90, 160, 250],
            housecost: 50,
            group: "Purple",
            ownedby: -1,
            buildings: 0,
            mortgaged: !1,
            probability: 2.1314,
            rel: {
                Square: "Mediterranean Avenue",
                "Probability % (Jail Short)": 2.1314,
                Rank: 36,
                "Probability % (Jail Long)": 2.0073,
            },
            ohousecost: 50,
            oprice: 60,
            averageProbability: 2.06935,
        },
        {
            name: "Baltic Avenue",
            id: "balticave",
            posistion: 3,
            price: 60,
            rent: 4,
            multpliedrent: [20, 60, 180, 320, 450],
            housecost: 50,
            group: "Purple",
            ownedby: -1,
            buildings: 0,
            mortgaged: !1,
            probability: 2.1624,
            rel: {
                Square: "Baltic Avenue",
                "Probability % (Jail Short)": 2.1624,
                Rank: 35,
                "Probability % (Jail Long)": 2.0369,
            },
            ohousecost: 50,
            oprice: 60,
            averageProbability: 2.09965,
        },
        {
            name: "Oriental Avenue",
            id: "orientalave",
            posistion: 6,
            price: 100,
            rent: 6,
            multpliedrent: [30, 90, 270, 400, 550],
            housecost: 50,
            group: "lightgreen",
            ownedby: -1,
            buildings: 0,
            mortgaged: !1,
            rel: {
                Square: "Oriental Avenue",
                "Probability % (Jail Short)": 2.2621,
                Rank: 32,
                "Probability % (Jail Long)": 2.1317,
            },
            ohousecost: 50,
            oprice: 100,
            averageProbability: 2.1969000000000003,
        },
        {
            name: "Vermont Avenue",
            id: "vermontave",
            posistion: 8,
            price: 100,
            rent: 6,
            multpliedrent: [30, 90, 270, 400, 550],
            housecost: 50,
            group: "lightgreen",
            ownedby: -1,
            buildings: 0,
            mortgaged: !1,
            rel: {
                Square: "Vermont Avenue",
                "Probability % (Jail Short)": 2.321,
                Rank: 28,
                "Probability % (Jail Long)": 2.1874,
            },
            ohousecost: 50,
            oprice: 100,
            averageProbability: 2.2542,
        },
        {
            name: "Connecticut Avenue",
            id: "connecticutave",
            posistion: 9,
            price: 120,
            rent: 8,
            multpliedrent: [40, 100, 300, 450, 600],
            housecost: 50,
            group: "lightgreen",
            ownedby: -1,
            buildings: 0,
            mortgaged: !1,
            rel: {
                Square: "Connecticut Avenue",
                "Probability % (Jail Short)": 2.3003,
                Rank: 30,
                "Probability % (Jail Long)": 2.168,
            },
            ohousecost: 50,
            oprice: 120,
            averageProbability: 2.23415,
        },
        {
            name: "St. Charles Place",
            id: "stcharlesplace",
            posistion: 11,
            price: 140,
            rent: 10,
            multpliedrent: [50, 150, 450, 625, 750],
            housecost: 100,
            group: "Violet",
            ownedby: -1,
            buildings: 0,
            mortgaged: !1,
            rel: {
                Square: "St. Charles Place",
                "Probability % (Jail Short)": 2.7017,
                Rank: 15,
                "Probability % (Jail Long)": 2.556,
            },
            ohousecost: 100,
            oprice: 140,
            averageProbability: 2.62885,
        },
        {
            name: "States Avenue",
            id: "statesave",
            posistion: 13,
            price: 140,
            rent: 10,
            multpliedrent: [50, 150, 450, 625, 750],
            housecost: 100,
            group: "Violet",
            ownedby: -1,
            buildings: 0,
            mortgaged: !1,
            rel: {
                Square: "States Avenue",
                "Probability % (Jail Short)": 2.3721,
                Rank: 29,
                "Probability % (Jail Long)": 2.1741,
            },
            ohousecost: 100,
            oprice: 140,
            averageProbability: 2.2731000000000003,
        },
        {
            name: "Virginia Avenue",
            id: "virginiaave",
            posistion: 14,
            price: 160,
            rent: 12,
            multpliedrent: [60, 180, 500, 700, 900],
            housecost: 100,
            group: "Violet",
            ownedby: -1,
            buildings: 0,
            mortgaged: !1,
            rel: {
                Square: "Virginia Avenue",
                "Probability % (Jail Short)": 2.4649,
                Rank: 22,
                "Probability % (Jail Long)": 2.4255,
            },
            ohousecost: 100,
            oprice: 160,
            averageProbability: 2.4452,
        },
        {
            name: "St. James Place",
            id: "stjamesplace",
            posistion: 16,
            price: 180,
            rent: 14,
            multpliedrent: [70, 200, 550, 750, 950],
            housecost: 100,
            group: "Orange",
            ownedby: -1,
            buildings: 0,
            mortgaged: !1,
            rel: {
                Square: "St. James Place",
                "Probability % (Jail Short)": 2.7924,
                Rank: 9,
                "Probability % (Jail Long)": 2.6802,
            },
            ohousecost: 100,
            oprice: 180,
            averageProbability: 2.7363,
        },
        {
            name: "Tennessee Avenue",
            id: "tennesseeave",
            posistion: 18,
            price: 180,
            rent: 14,
            multpliedrent: [70, 200, 550, 750, 950],
            housecost: 100,
            group: "Orange",
            ownedby: -1,
            buildings: 0,
            mortgaged: !1,
            rel: {
                Square: "Tennessee Avenue",
                "Probability % (Jail Short)": 2.9356,
                Rank: 6,
                "Probability % (Jail Long)": 2.821,
            },
            ohousecost: 100,
            oprice: 180,
            averageProbability: 2.8783000000000003,
        },
        {
            name: "New York Avenue",
            id: "newyorkave",
            posistion: 19,
            price: 200,
            rent: 16,
            multpliedrent: [80, 220, 600, 800, 1e3],
            housecost: 100,
            group: "Orange",
            ownedby: -1,
            buildings: 0,
            mortgaged: !1,
            rel: {
                Square: "New York Avenue",
                "Probability % (Jail Short)": 3.0852,
                Rank: 7,
                "Probability % (Jail Long)": 2.8118,
            },
            ohousecost: 100,
            oprice: 200,
            averageProbability: 2.9485,
        },
        {
            name: "Kentucky Avenue",
            id: "kentuckyave",
            posistion: 21,
            price: 220,
            rent: 18,
            multpliedrent: [90, 250, 700, 875, 1050],
            housecost: 150,
            group: "Red",
            ownedby: -1,
            buildings: 0,
            mortgaged: !1,
            rel: {
                Square: "Kentucky Avenue",
                "Probability % (Jail Short)": 2.8358,
                Rank: 12,
                "Probability % (Jail Long)": 2.6143,
            },
            ohousecost: 150,
            oprice: 220,
            averageProbability: 2.72505,
        },
        {
            name: "Indiana Avenue",
            id: "indianaave",
            posistion: 23,
            price: 220,
            rent: 18,
            multpliedrent: [90, 250, 700, 875, 1050],
            housecost: 150,
            group: "Red",
            ownedby: -1,
            buildings: 0,
            mortgaged: !1,
            rel: {
                Square: "Indiana Avenue",
                "Probability % (Jail Short)": 2.7357,
                Rank: 14,
                "Probability % (Jail Long)": 2.5671,
            },
            ohousecost: 150,
            oprice: 220,
            averageProbability: 2.6513999999999998,
        },
        {
            name: "Illinois Avenue",
            id: "illinoisave",
            posistion: 24,
            price: 240,
            rent: 20,
            multpliedrent: [100, 300, 750, 925, 1100],
            housecost: 150,
            group: "Red",
            ownedby: -1,
            buildings: 0,
            mortgaged: !1,
            rel: {
                Square: "Illinois Avenue",
                "Probability % (Jail Short)": 3.1858,
                Rank: 2,
                "Probability % (Jail Long)": 2.9929,
            },
            ohousecost: 150,
            oprice: 240,
            averageProbability: 3.08935,
        },
        {
            name: "Atlantic Avenue",
            id: "atlanticave",
            posistion: 26,
            price: 260,
            rent: 22,
            multpliedrent: [110, 330, 800, 975, 1150],
            housecost: 150,
            group: "Yellow",
            ownedby: -1,
            buildings: 0,
            mortgaged: !1,
            rel: {
                Square: "Atlantic Avenue",
                "Probability % (Jail Short)": 2.7072,
                Rank: 16,
                "Probability % (Jail Long)": 2.537,
            },
            ohousecost: 150,
            oprice: 260,
            averageProbability: 2.6220999999999997,
        },
        {
            name: "Ventnor Avenue",
            id: "ventnorave",
            posistion: 27,
            price: 260,
            rent: 22,
            multpliedrent: [110, 330, 800, 975, 1150],
            housecost: 150,
            group: "Yellow",
            ownedby: -1,
            buildings: 0,
            mortgaged: !1,
            rel: {
                Square: "Ventnor Avenue",
                "Probability % (Jail Short)": 2.6789,
                Rank: 18,
                "Probability % (Jail Long)": 2.5191,
            },
            ohousecost: 150,
            oprice: 260,
            averageProbability: 2.599,
        },
        {
            name: "Marvin Gardens",
            id: "marvingardens",
            posistion: 29,
            price: 280,
            rent: 22,
            multpliedrent: [120, 360, 850, 1025, 1200],
            housecost: 150,
            group: "Yellow",
            ownedby: -1,
            buildings: 0,
            mortgaged: !1,
            rel: {
                Square: "Marvin Gardens",
                "Probability % (Jail Short)": 2.5861,
                Rank: 21,
                "Probability % (Jail Long)": 2.4381,
            },
            ohousecost: 150,
            oprice: 280,
            averageProbability: 2.5121,
        },
        {
            name: "Pacific Avenue",
            id: "pacificave",
            posistion: 31,
            price: 300,
            rent: 26,
            multpliedrent: [130, 390, 900, 1100, 1275],
            housecost: 200,
            group: "darkgreen",
            ownedby: -1,
            buildings: 0,
            mortgaged: !1,
            rel: {
                Square: "Pacific Avenue",
                "Probability % (Jail Short)": 2.6774,
                Rank: 17,
                "Probability % (Jail Long)": 2.5236,
            },
            ohousecost: 200,
            oprice: 300,
            averageProbability: 2.6005000000000003,
        },
        {
            name: "North Carolina Avenue",
            id: "northcarolinaave",
            posistion: 32,
            price: 300,
            rent: 26,
            multpliedrent: [130, 390, 900, 1100, 1275],
            housecost: 200,
            group: "darkgreen",
            ownedby: -1,
            buildings: 0,
            mortgaged: !1,
            rel: {
                Square: "North Carolina Avenue",
                "Probability % (Jail Short)": 2.6252,
                Rank: 20,
                "Probability % (Jail Long)": 2.4721,
            },
            ohousecost: 200,
            oprice: 300,
            averageProbability: 2.5486500000000003,
        },
        {
            name: "Pennsylvania Avenue",
            id: "pennsylvaniaave",
            posistion: 34,
            price: 320,
            rent: 28,
            multpliedrent: [150, 450, 1e3, 1200, 1400],
            housecost: 200,
            group: "darkgreen",
            ownedby: -1,
            buildings: 0,
            mortgaged: !1,
            rel: {
                Square: "Pennsylvania Avenue",
                "Probability % (Jail Short)": 2.5006,
                Rank: 23,
                "Probability % (Jail Long)": 2.3531,
            },
            ohousecost: 200,
            oprice: 320,
            averageProbability: 2.42685,
        },
        {
            name: "Park Place",
            id: "parkplace",
            posistion: 37,
            price: 350,
            rent: 35,
            multpliedrent: [175, 500, 1100, 1300, 1500],
            housecost: 200,
            group: "darkblue",
            ownedby: -1,
            buildings: 0,
            mortgaged: !1,
            rel: {
                Square: "Park Place",
                "Probability % (Jail Short)": 2.1864,
                Rank: 33,
                "Probability % (Jail Long)": 2.0595,
            },
            ohousecost: 200,
            oprice: 350,
            averageProbability: 2.12295,
        },
        {
            name: "Boardwalk",
            id: "boardwalk",
            posistion: 39,
            price: 400,
            rent: 50,
            multpliedrent: [200, 600, 1400, 1700, 2e3],
            housecost: 200,
            group: "darkblue",
            ownedby: -1,
            buildings: 0,
            mortgaged: !1,
            rel: {
                Square: "Boardwalk",
                "Probability % (Jail Short)": 2.626,
                Rank: 19,
                "Probability % (Jail Long)": 2.4832,
            },
            ohousecost: 200,
            oprice: 400,
            averageProbability: 2.5545999999999998,
        },
        {
            name: "Electric Company",
            id: "electriccompany",
            posistion: 12,
            price: 150,
            group: "Utilities",
            ownedby: -1,
            mortgaged: !1,
            rel: {
                Square: "Electric Company",
                "Probability % (Jail Short)": 2.604,
                Rank: 13,
                "Probability % (Jail Long)": 2.614,
            },
            oprice: 150,
            averageProbability: 2.609,
        },
        {
            name: "Water Works",
            id: "waterworks",
            posistion: 28,
            price: 150,
            group: "Utilities",
            ownedby: -1,
            mortgaged: !1,
            rel: {
                Square: "Water Works",
                "Probability % (Jail Short)": 2.8074,
                Rank: 10,
                "Probability % (Jail Long)": 2.6507,
            },
            oprice: 150,
            averageProbability: 2.72905,
        },
        {
            name: "Reading Railroad",
            id: "readingrailroad",
            posistion: 5,
            price: 200,
            group: "Railroad",
            ownedby: -1,
            mortgaged: !1,
            probability: 2.1314,
            rel: {
                Square: "Reading Railroad",
                "Probability % (Jail Short)": 2.9631,
                Rank: 8,
                "Probability % (Jail Long)": 2.801,
            },
            oprice: 200,
            averageProbability: 2.88205,
        },
        {
            name: "Pennsylvania Railroad",
            id: "pennsylvaniarailroad",
            posistion: 15,
            price: 200,
            group: "Railroad",
            ownedby: -1,
            mortgaged: !1,
            rel: {
                Square: "Pennsylvania Railroad",
                "Probability % (Jail Short)": 2.92,
                Rank: 11,
                "Probability % (Jail Long)": 2.6354,
            },
            oprice: 200,
            averageProbability: 2.7777000000000003,
        },
        {
            name: "B. & O. Railroad",
            id: "borailroad",
            posistion: 25,
            price: 200,
            group: "Railroad",
            ownedby: -1,
            mortgaged: !1,
            oprice: 200,
            averageProbability: 2.975,
        },
        {
            name: "Short Line Railroad",
            id: "shortlinerailroad",
            posistion: 35,
            price: 200,
            group: "Railroad",
            ownedby: -1,
            mortgaged: !1,
            oprice: 200,
            averageProbability: 2.3609500000000003,
        },
        {
            name: "Go",
            id: "go",
            posistion: 0,
            group: "Special",
            rel: {
                Square: "Go",
                "Probability % (Jail Short)": 3.0961,
                Rank: 3,
                "Probability % (Jail Long)": 2.9143,
            },
            averageProbability: 3.0052,
        },
        {
            name: "Income Tax",
            id: "incometax",
            group: "Special",
            posistion: 4,
            rel: {
                Square: "Income Tax",
                "Probability % (Jail Short)": 2.3285,
                Rank: 27,
                "Probability % (Jail Long)": 2.1934,
            },
            averageProbability: 2.2609500000000002,
        },
        {
            name: "Jail / Just Visiting",
            id: "jail",
            posistion: 10,
            group: "Special",
            averageProbability: 8.897,
        },
        {
            name: "Chance",
            id: "chance",
            group: "Special",
            posistion: 36,
            rel: {
                Square: "Chance",
                "Probability % (Jail Short)": 0.865,
                Rank: 40,
                "Probability % (Jail Long)": 0.8152,
            },
            averageProbability: 0.8401000000000001,
        },
        {
            name: "Chance",
            id: "chance",
            group: "Special",
            posistion: 7,
            rel: {
                Square: "Chance",
                "Probability % (Jail Short)": 0.865,
                Rank: 40,
                "Probability % (Jail Long)": 0.8152,
            },
            averageProbability: 0.8401000000000001,
        },
        {
            name: "Chance",
            id: "chance",
            group: "Special",
            posistion: 22,
            rel: {
                Square: "Chance",
                "Probability % (Jail Short)": 0.865,
                Rank: 40,
                "Probability % (Jail Long)": 0.8152,
            },
            averageProbability: 0.8401000000000001,
        },
        {
            name: "Free Parking",
            id: "freeparking",
            group: "Special",
            posistion: 20,
            rel: {
                Square: "Free Parking",
                "Probability % (Jail Short)": 2.8836,
                Rank: 5,
                "Probability % (Jail Long)": 2.8253,
            },
            averageProbability: 2.85445,
        },
        {
            name: "Community Chest",
            id: "communitychest",
            group: "Special",
            posistion: 2,
            rel: {
                Square: "Community Chest",
                "Probability % (Jail Short)": 1.8849,
                Rank: 37,
                "Probability % (Jail Long)": 1.775,
            },
            averageProbability: 1.82995,
        },
        {
            name: "Community Chest",
            id: "communitychest",
            group: "Special",
            posistion: 33,
            rel: {
                Square: "Community Chest",
                "Probability % (Jail Short)": 1.8849,
                Rank: 37,
                "Probability % (Jail Long)": 1.775,
            },
            averageProbability: 1.82995,
        },
        {
            name: "Community Chest",
            id: "communitychest",
            group: "Special",
            posistion: 17,
            rel: {
                Square: "Community Chest",
                "Probability % (Jail Short)": 1.8849,
                Rank: 37,
                "Probability % (Jail Long)": 1.775,
            },
            averageProbability: 1.82995,
        },
        {
            name: "Go To Jail",
            id: "gotojail",
            group: "Special",
            posistion: 30,
            rel: {
                Square: "Go To Jail",
                "Probability % (Jail Short)": 0,
                Rank: 41,
                "Probability % (Jail Long)": 0,
            },
            averageProbability: 0,
        },
        {
            name: "Luxury Tax",
            id: "luxerytax",
            group: "Special",
            posistion: 38,
            averageProbability: 2.116,
        },
    ],
    fh = [
        { id: "go" },
        { id: "mediterraneanave" },
        { id: "communitychest" },
        { id: "balticave" },
        { id: "incometax" },
        { id: "readingrailroad" },
        { id: "orientalave" },
        { id: "chance" },
        { id: "vermontave" },
        { id: "connecticutave" },
        { id: "jail" },
        { id: "stcharlesplace" },
        { id: "electriccompany" },
        { id: "statesave" },
        { id: "virginiaave" },
        { id: "pennsylvaniarailroad" },
        { id: "stjamesplace" },
        { id: "communitychest" },
        { id: "tennesseeave" },
        { id: "newyorkave" },
        { id: "freeparking" },
        { id: "kentuckyave" },
        { id: "chance" },
        { id: "indianaave" },
        { id: "illinoisave" },
        { id: "borailroad" },
        { id: "atlanticave" },
        { id: "ventnorave" },
        { id: "waterworks" },
        { id: "marvingardens" },
        { id: "gotojail" },
        { id: "pacificave" },
        { id: "northcarolinaave" },
        { id: "communitychest" },
        { id: "pennsylvaniaave" },
        { id: "shortlinerailroad" },
        { id: "chance" },
        { id: "parkplace" },
        { id: "luxerytax" },
        { id: "boardwalk" },
    ],
    ph = [
        { title: "Advance to Go (Collect $200)", action: "move", tileid: "go" },
        {
            title: "Advance to Illinois Avenue - If you pass Go, collect $200",
            action: "move",
            tileid: "illinoisave",
        },
        {
            title: "Advance to St. Charles Place - If you pass Go, collect $200",
            action: "move",
            tileid: "stcharlesplace",
        },
        {
            title: "Advance token to nearest Utility. If unowned, you may buy it from the Bank. If owned, throw dice and pay owner a total ten times the amount thrown.",
            action: "movenearest",
            groupid: "utility",
            rentmultiplier: 10,
        },
        {
            title: "Advance token to the nearest Railroad and pay owner twice the rental to which he/she is otherwise entitled. If Railroad is unowned, you may buy it from the Bank.",
            action: "movenearest",
            groupid: "railroad",
            rentmultiplier: 2,
        },
        {
            title: "Bank pays you dividend of $50",
            action: "addfunds",
            amount: 50,
        },
        {
            title: "Get out of Jail Free - This card may be kept until needed, or traded/sold",
            action: "jail",
            subaction: "getout",
        },
        { title: "Go Back 3 Spaces", action: "move", count: -3 },
        {
            title: "Go to Jail - Go directly to Jail - Do not pass Go, do not collect $200",
            action: "jail",
            subaction: "goto",
        },
        {
            title: "Make general repairs on all your property - For each house pay $25 - For each hotel $100",
            action: "propertycharges",
            buildings: 25,
            hotels: 100,
        },
        { title: "Pay poor tax of $15", action: "removefunds", amount: 15 },
        {
            title: "Take a trip to Reading Railroad - If you pass Go, collect $200",
            action: "move",
            tileid: "readingrailroad",
        },
        {
            title: "Take a walk on the Boardwalk - Advance token to Boardwalk",
            action: "move",
            tileid: "boardwalk",
        },
        {
            title: "You have been elected Chairman of the Board - Pay each player $50",
            action: "removefundstoplayers",
            amount: 50,
        },
        {
            title: "Your building loan matures - Collect $150",
            action: "addfunds",
            amount: 50,
        },
    ],
    hh = [
        { title: "Advance to Go (Collect $200)", action: "move", tileid: "go" },
        {
            title: "Bank error in your favor - Collect $200 ",
            action: "addfunds",
            amount: 200,
        },
        { title: "Doctor fee - Pay $50", action: "removefunds", amount: 50 },
        {
            title: "From sale of stock you get $50",
            action: "addfunds",
            amount: 50,
        },
        { title: "Get Out of Jail Free", action: "jail", subaction: "getout" },
        {
            title: "Go to Jail - Go directly to jail - Do not pass Go - Do not collect $200",
            action: "jail",
            subaction: "goto",
        },
        {
            title: "Grand Opera Night - Collect $50 from every player for opening night seats",
            action: "addfundsfromplayers",
            amount: 50,
        },
        {
            title: "Holiday Fund matures - Receive $100",
            action: "addfunds",
            amount: 100,
        },
        {
            title: "Income tax refund - Collect $20",
            action: "addfunds",
            amount: 20,
        },
        {
            title: "Life insurance matures - Collect $100",
            action: "addfunds",
            amount: 100,
        },
        {
            title: "Pay hospital fees of $100",
            action: "removefunds",
            amount: 100,
        },
        {
            title: "Pay school fees of $150",
            action: "removefunds",
            amount: 150,
        },
        {
            title: "Receive $25 consultancy fee",
            action: "addfunds",
            amount: 25,
        },
        {
            title: "You are assessed for street repairs - $40 per house - $115 per hotel",
            action: "propertycharges",
            buildings: 40,
            hotels: 115,
        },
        {
            title: "You have won second prize in a beauty contest - Collect $10",
            action: "addfunds",
            amount: 10,
        },
        { title: "You inherit $100", action: "addfunds", amount: 100 },
    ],
    $t = { properties: dh, tiles: fh, chance: ph, communitychest: hh };
function Da(e) {
    const t = new Map($t.properties.map((o) => [o.posistion ?? 0, o]));
    let n = {},
        r = "Utilities";
    const i = t.get(e.posistion);
    if (i)
        return i.group === "Special"
            ? l.jsx(l.Fragment, {})
            : (i.group === "Utilities"
                  ? ((r = "Utilities"),
                    (n = {
                        cardCost: i.price ?? -1,
                        title: i.name ?? "error",
                        type: i.id.includes("water") ? "water" : "electricity",
                    }))
                  : i.group === "Railroad"
                  ? ((r = "Railroad"),
                    (n = { cardCost: i.price ?? -1, title: i.name ?? "error" }))
                  : ((r = "Street"),
                    (n = {
                        cardCost: i.price ?? -1,
                        hotelsCost: i.ohousecost ?? -1,
                        housesCost: i.housecost ?? -1,
                        rent: i.rent ?? -1,
                        multpliedrent: i.multpliedrent
                            ? [
                                  i.multpliedrent[0] ?? -1,
                                  i.multpliedrent[1] ?? -1,
                                  i.multpliedrent[2] ?? -1,
                                  i.multpliedrent[3] ?? -1,
                                  i.multpliedrent[4] ?? -1,
                              ]
                            : [-1, -1, -1, -1, -1],
                        rentWithColorSet: i.rent ? i.rent * 2 : -1,
                        title: i.name ?? "error",
                        group: i.group,
                    })),
              l.jsx("div", {
                  style: e.style,
                  onClick: e.OnClick,
                  children:
                      r === "Railroad"
                          ? l.jsx(Cn, { railroad: n })
                          : r === "Utilities"
                          ? l.jsx(Cn, { utility: n })
                          : l.jsx(Cn, { street: n }),
              }));
}
const mh = D.forwardRef((e, t) => {
        const n = new Map($t.properties.map((y) => [y.posistion ?? 0, y])),
            r = e.players.filter((y) => y.id === e.socket.id)[0];
        if (r === void 0)
            return l.jsx(l.Fragment, {
                children: "Could not read local player!",
            });
        D.useImperativeHandle(t, () => ({
            clickedOnBoard(y) {
                h(-1), a(""), f([]), o(y);
            },
        }));
        const [i, o] = D.useState(-1),
            [s, a] = D.useState(""),
            [u, f] = D.useState([]),
            [g, h] = D.useState(-1);
        function m() {
            h(-1), o(-1);
            const y = Array.from(n.values()).filter(
                    (d) => d.group != "Special"
                ),
                A = y.map((d) => [d.name, d.posistion]),
                x = y.map((d) => d.posistion.toString()),
                B = [];
            for (const d of x) d.includes(s) && B.push(parseInt(d));
            for (const d of A)
                d[0].toLowerCase().includes(s.toLowerCase()) && B.push(d[1]);
            f(B);
        }
        return (
            D.useEffect(m, [s]),
            l.jsxs(l.Fragment, {
                children: [
                    l.jsx("h3", {
                        style: { textAlign: "center" },
                        children: "Propreties",
                    }),
                    l.jsx("input", {
                        type: "text",
                        onChange: (y) => a(y.currentTarget.value),
                        placeholder: "Search for global cards...",
                    }),
                    l.jsx("div", {
                        className: "propertyList",
                        style: {
                            overflowY: "auto",
                            position: "relative",
                            flexGrow: 1,
                            cursor: "pointer",
                        },
                        children:
                            s.length > 0
                                ? u.map((y, A) => {
                                      var x, B;
                                      return l.jsx(l.Fragment, {
                                          children:
                                              g === y
                                                  ? l.jsx("center", {
                                                        children: l.jsx(
                                                            Da,
                                                            {
                                                                style: {
                                                                    cursor: "pointer",
                                                                    marginBottom: 25,
                                                                    marginTop: 10,
                                                                },
                                                                posistion: y,
                                                                OnClick: () => {
                                                                    h(-1);
                                                                },
                                                            },
                                                            A
                                                        ),
                                                    })
                                                  : l.jsxs(
                                                        "div",
                                                        {
                                                            onClick: () => h(y),
                                                            className:
                                                                "proprety-nav",
                                                            children: [
                                                                l.jsx("i", {
                                                                    className:
                                                                        "box",
                                                                    style: {
                                                                        backgroundColor:
                                                                            Oi(
                                                                                ((x =
                                                                                    n.get(
                                                                                        y
                                                                                    )) ==
                                                                                null
                                                                                    ? void 0
                                                                                    : x.group) ??
                                                                                    ""
                                                                            ),
                                                                    },
                                                                }),
                                                                l.jsx("h3", {
                                                                    children:
                                                                        ((B =
                                                                            n.get(
                                                                                y
                                                                            )) ==
                                                                        null
                                                                            ? void 0
                                                                            : B.name) ??
                                                                        "",
                                                                }),
                                                            ],
                                                        },
                                                        A
                                                    ),
                                      });
                                  })
                                : i === -1
                                ? r.properties.map((y, A) => {
                                      var x;
                                      return l.jsxs(
                                          "div",
                                          {
                                              onClick: () => o(y.posistion),
                                              className: "proprety-nav",
                                              children: [
                                                  l.jsx("i", {
                                                      className: "box",
                                                      style: {
                                                          backgroundColor: Oi(
                                                              y.group
                                                          ),
                                                      },
                                                  }),
                                                  l.jsx("h3", {
                                                      children:
                                                          ((x = n.get(
                                                              y.posistion
                                                          )) == null
                                                              ? void 0
                                                              : x.name) ?? "",
                                                  }),
                                                  l.jsx("div", {
                                                      children:
                                                          y.count == "h"
                                                              ? l.jsx("img", {
                                                                    src: Sl.replace(
                                                                        "public/",
                                                                        ""
                                                                    ),
                                                                    alt: "",
                                                                })
                                                              : typeof y.count ==
                                                                    "number" &&
                                                                y.count > 0
                                                              ? l.jsxs(
                                                                    l.Fragment,
                                                                    {
                                                                        children:
                                                                            [
                                                                                l.jsx(
                                                                                    "p",
                                                                                    {
                                                                                        children:
                                                                                            y.count,
                                                                                    }
                                                                                ),
                                                                                l.jsx(
                                                                                    "img",
                                                                                    {
                                                                                        src: wl.replace(
                                                                                            "public/",
                                                                                            ""
                                                                                        ),
                                                                                        alt: "",
                                                                                    }
                                                                                ),
                                                                            ],
                                                                    }
                                                                )
                                                              : l.jsx(
                                                                    l.Fragment,
                                                                    {}
                                                                ),
                                                  }),
                                              ],
                                          },
                                          A
                                      );
                                  })
                                : l.jsx("div", {
                                      children: l.jsx("center", {
                                          style: {
                                              transform:
                                                  "scale(1) translateY(-50%) translateX(-50%)",
                                              position: "absolute",
                                              top: "50%",
                                              left: "50%",
                                          },
                                          children: l.jsx(Da, {
                                              style: {
                                                  transform: "scale(1.2)",
                                                  filter: "drop-shadow(5px 5px 0px rgba(255,255,255,20%))",
                                              },
                                              posistion: i,
                                              OnClick: () => {
                                                  o(-1);
                                              },
                                          }),
                                      }),
                                  }),
                    }),
                ],
            })
        );
    }),
    ws = "./assets/roll-893dc331.png",
    yh = D.forwardRef((e, t) => {
        const n = e.players.filter((s) => s.id === e.socket.id)[0],
            r = new Map($t.properties.map((s) => [s.posistion ?? 0, s])),
            [i, o] = D.useState();
        return (
            D.useImperativeHandle(t, () => ({
                clickdOnPlayer(s) {
                    for (const a of e.players) a.id === s && o(a);
                },
            })),
            l.jsxs(l.Fragment, {
                children: [
                    l.jsxs("div", {
                        className: n !== void 0 ? "container-top" : "",
                        style: n === void 0 ? { height: "100%" } : {},
                        children: [
                            l.jsx("h3", {
                                "data-clickable": i !== void 0,
                                style: { textAlign: "center" },
                                onClick: () => {
                                    i !== void 0 && o(void 0);
                                },
                                children: "Players",
                            }),
                            i != null
                                ? l.jsxs(l.Fragment, {
                                      children: [
                                          l.jsx("h4", { children: "Cards" }),
                                          l.jsx("h4", {
                                              children: "Propreties",
                                          }),
                                          i.properties.length === 0
                                              ? l.jsx("p", { children: "none" })
                                              : i.properties.map((s, a) => {
                                                    var u;
                                                    return l.jsxs(
                                                        "div",
                                                        {
                                                            onClick: () => {
                                                                o(void 0),
                                                                    e.clickedOnPlayer(
                                                                        s.posistion
                                                                    );
                                                            },
                                                            className:
                                                                "proprety-nav",
                                                            children: [
                                                                l.jsx("i", {
                                                                    className:
                                                                        "box",
                                                                    style: {
                                                                        backgroundColor:
                                                                            Oi(
                                                                                s.group
                                                                            ),
                                                                    },
                                                                }),
                                                                l.jsx("h3", {
                                                                    children:
                                                                        ((u =
                                                                            r.get(
                                                                                s.posistion
                                                                            )) ==
                                                                        null
                                                                            ? void 0
                                                                            : u.name) ??
                                                                        "",
                                                                }),
                                                                l.jsx("div", {
                                                                    children:
                                                                        s.count ==
                                                                        "h"
                                                                            ? l.jsx(
                                                                                  "img",
                                                                                  {
                                                                                      src: Sl.replace(
                                                                                          "public/",
                                                                                          ""
                                                                                      ),
                                                                                      alt: "",
                                                                                  }
                                                                              )
                                                                            : typeof s.count ==
                                                                                  "number" &&
                                                                              s.count >
                                                                                  0
                                                                            ? l.jsxs(
                                                                                  l.Fragment,
                                                                                  {
                                                                                      children:
                                                                                          [
                                                                                              l.jsx(
                                                                                                  "p",
                                                                                                  {
                                                                                                      children:
                                                                                                          s.count,
                                                                                                  }
                                                                                              ),
                                                                                              l.jsx(
                                                                                                  "img",
                                                                                                  {
                                                                                                      src: wl.replace(
                                                                                                          "public/",
                                                                                                          ""
                                                                                                      ),
                                                                                                      alt: "",
                                                                                                  }
                                                                                              ),
                                                                                          ],
                                                                                  }
                                                                              )
                                                                            : l.jsx(
                                                                                  l.Fragment,
                                                                                  {}
                                                                              ),
                                                                }),
                                                            ],
                                                        },
                                                        a
                                                    );
                                                }),
                                      ],
                                  })
                                : l.jsx("div", {
                                      className: "playersInfos",
                                      children: e.players.map((s, a) =>
                                          l.jsx(l.Fragment, {
                                              children: l.jsxs(
                                                  "div",
                                                  {
                                                      className: "playerInfo",
                                                      onClick: () => {
                                                          const u =
                                                              document.querySelector(
                                                                  `div.player[player-id="${s.id}"]`
                                                              );
                                                          (u.style.animation =
                                                              "spin2 1s cubic-bezier(.21, 1.57, .55, 1) infinite"),
                                                              setTimeout(() => {
                                                                  u.style.animation =
                                                                      "";
                                                              }, 1 * 1e3);
                                                      },
                                                      onDoubleClick: () => {
                                                          o(s);
                                                      },
                                                      children: [
                                                          l.jsx("p", {
                                                              children:
                                                                  s.username,
                                                          }),
                                                          s.id === e.currentTurn
                                                              ? l.jsx("img", {
                                                                    src: ws.replace(
                                                                        "public/",
                                                                        ""
                                                                    ),
                                                                })
                                                              : l.jsx(
                                                                    l.Fragment,
                                                                    {}
                                                                ),
                                                          s.getoutCards > 0
                                                              ? l.jsx("p", {
                                                                    className:
                                                                        "orange",
                                                                    children:
                                                                        s.getoutCards,
                                                                })
                                                              : l.jsx(
                                                                    l.Fragment,
                                                                    {}
                                                                ),
                                                          l.jsx("p", {
                                                              children:
                                                                  s.balance,
                                                          }),
                                                          l.jsx("p", {
                                                              children:
                                                                  s.properties
                                                                      .length,
                                                          }),
                                                      ],
                                                  },
                                                  a
                                              ),
                                          })
                                      ),
                                  }),
                        ],
                    }),
                    n !== void 0
                        ? l.jsx(l.Fragment, {
                              children: l.jsx("div", {
                                  className: "container-bottom",
                                  style: {},
                                  children: l.jsxs("p", {
                                      style: { margin: 0, marginTop: 5 },
                                      children: [" ", n.balance, " M"],
                                  }),
                              }),
                          })
                        : l.jsx(l.Fragment, {}),
                ],
            })
        );
    }),
    gh = D.forwardRef((e, t) => {
        const [n, r] = D.useState(0),
            [i, o] = D.useState([]);
        function s() {
            u(e.players);
        }
        const [a, u] = D.useState(e.players);
        D.useImperativeHandle(t, () => ({
            addMessage(h) {
                if ((o((m) => [...m, h]), n !== 2)) {
                    const m = document.getElementById("chatIconChange"),
                        y = m.querySelector("img");
                    (y.style.animation =
                        "spin3 2s cubic-bezier(.68,.05,.49,.95) infinite"),
                        (y.src = eh),
                        (m.onclick = () => {
                            (y.src = za),
                                (y.style.animation = ""),
                                r(2),
                                (m.onclick = () => {
                                    r(2);
                                });
                        });
                }
            },
            reRenderPlayerList: s,
            clickedOnBoard: (h) => {
                r(1),
                    requestAnimationFrame(() => {
                        var m;
                        (m = f.current) == null || m.clickedOnBoard(h);
                    });
            },
        }));
        const f = D.useRef(null),
            g = D.useRef(null);
        return (
            D.useEffect(s, [
                e.players.map((h) => h.properties),
                e.players.map((h) => h.balance),
            ]),
            D.useEffect(() => {
                const h = (m) => {
                    const y = parseInt(m.key);
                    if (!isNaN(y)) {
                        const A = document.activeElement;
                        (A === null || A.tagName !== "INPUT") && r(y - 1);
                    }
                };
                return (
                    document.addEventListener("keydown", h),
                    () => {
                        document.removeEventListener("keydown", h);
                    }
                );
            }, []),
            l.jsxs("nav", {
                className: "main",
                children: [
                    l.jsxs("nav", {
                        className: "header",
                        children: [
                            l.jsx("img", {
                                style: { marginTop: 75 },
                                className: "header",
                                src: ih.replace("public/", ""),
                            }),
                            l.jsxs("div", {
                                className: "upper",
                                children: [
                                    l.jsx("div", {
                                        "data-selected": n == 0,
                                        onClick: () => r(0),
                                        "data-tooltip-hover": "players",
                                        className: "button",
                                        children: l.jsx("img", {
                                            src: Zp.replace("public/", ""),
                                            alt: "",
                                        }),
                                    }),
                                    l.jsx("div", {
                                        "data-selected": n == 1,
                                        onClick: () => r(1),
                                        "data-tooltip-hover": "propreties",
                                        className: "button",
                                        children: l.jsx("img", {
                                            src: nh.replace("public/", ""),
                                            alt: "",
                                        }),
                                    }),
                                    l.jsx("div", {
                                        "data-selected": n == 2,
                                        onClick: () => r(2),
                                        "data-tooltip-hover": "chat",
                                        className: "button",
                                        id: "chatIconChange",
                                        children: l.jsx("img", {
                                            src: za.replace("public/", ""),
                                            alt: "",
                                        }),
                                    }),
                                ],
                            }),
                            l.jsxs("div", {
                                className: "lower",
                                children: [
                                    l.jsx("div", {
                                        "data-selected": n == 3,
                                        onClick: () => r(3),
                                        "data-tooltip-hover": "settings",
                                        className: "button",
                                        children: l.jsx("img", {
                                            src: rh.replace("public/", ""),
                                            alt: "",
                                        }),
                                    }),
                                    l.jsx("div", {
                                        "data-tooltip": "leave",
                                        className: "button color",
                                        "data-tooltip-hover": "leave",
                                        children: l.jsx("img", {
                                            src: th.replace("public/", ""),
                                            alt: "",
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    l.jsx("nav", {
                        className: "content",
                        "data-index": n > 3 || n < 0 ? 0 : n,
                        children:
                            n == 1
                                ? l.jsx(mh, {
                                      ref: f,
                                      players: a,
                                      socket: e.socket,
                                  })
                                : n == 2
                                ? l.jsxs(l.Fragment, {
                                      children: [
                                          l.jsx("h3", {
                                              style: { textAlign: "center" },
                                              children: "Chat",
                                          }),
                                          l.jsxs("div", {
                                              className: "main-chat",
                                              children: [
                                                  l.jsx("div", {
                                                      className: "messages",
                                                      children: i.map((h, m) =>
                                                          l.jsxs(
                                                              "div",
                                                              {
                                                                  className:
                                                                      "message",
                                                                  children: [
                                                                      l.jsxs(
                                                                          "p",
                                                                          {
                                                                              children:
                                                                                  [
                                                                                      h.from,
                                                                                      ":",
                                                                                  ],
                                                                          }
                                                                      ),
                                                                      l.jsx(
                                                                          "p",
                                                                          {
                                                                              children:
                                                                                  h.message,
                                                                          }
                                                                      ),
                                                                  ],
                                                              },
                                                              m
                                                          )
                                                      ),
                                                  }),
                                                  l.jsx("input", {
                                                      placeholder:
                                                          "Type Message Here...",
                                                      type: "text",
                                                      onKeyDown: (h) => {
                                                          if (
                                                              h.which === 13 &&
                                                              h.currentTarget
                                                                  .value
                                                                  .length > 0
                                                          ) {
                                                              const m =
                                                                  h
                                                                      .currentTarget
                                                                      .value;
                                                              e.socket.emit(
                                                                  "message",
                                                                  m
                                                              ),
                                                                  (h.currentTarget.value =
                                                                      "");
                                                          }
                                                      },
                                                  }),
                                              ],
                                          }),
                                      ],
                                  })
                                : n == 3
                                ? l.jsxs(l.Fragment, {
                                      children: [
                                          l.jsx("h3", {
                                              style: { textAlign: "center" },
                                              children: "Settings",
                                          }),
                                          l.jsxs("p", {
                                              children: [
                                                  "Game Engine",
                                                  " ",
                                                  l.jsxs("select", {
                                                      name: "",
                                                      id: "",
                                                      children: [
                                                          l.jsx("option", {
                                                              children: "2D",
                                                          }),
                                                          l.jsx("option", {
                                                              children: "3D",
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                      ],
                                  })
                                : l.jsx(yh, {
                                      ref: g,
                                      clickedOnPlayer: (h) => {
                                          r(1),
                                              requestAnimationFrame(() => {
                                                  var m;
                                                  (m = f.current) == null ||
                                                      m.clickedOnBoard(h);
                                              });
                                      },
                                      players: a,
                                      socket: e.socket,
                                      currentTurn: e.currentTurn,
                                  }),
                    }),
                ],
            })
        );
    }),
    Hr =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAMAAAC/MqoPAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAcVQTFRFAAAAe3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7gYGBpaWluLi4wMDAycnJzs7Ot7e3o6OjgICAmpqa6enpx8fHjo6OzMzMqKio6OjoqqqqfHx8vLy8urq6v7+/srKypKSk1tbWoaGh0dHRhoaGvb291dXV29vb2tra4ODg39/f5+fn4uLixcXFr6+vnZ2dq6urxMTEz8/P19fX4+Pj0tLSs7Ozp6enkJCQiIiIfn5+jIyMnp6esLCwra2tkZGRg4ODioqKn5+fw8PD3Nzc5OTk3t7eu7u7lJSU2NjY5ubmm5ubtra2zc3NiYmJ2dnZpqamhISEnJycoKCgxsbG4eHhoqKii4uLsbGxjY2N0NDQl5eXrKysh4eHysrKqamptbW1fX19k5OT1NTUj4+PgoKClpaW09PT5eXlhYWFwsLCmJiYy8vLyMjIlZWVe3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7DYGNBgAAAJd0Uk5TAApVqM7i9v8Vm/UJe/J6E8XDFCjf3Sob5NoO0saIIPcXnZcG8fBIwNj//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////xbH49smJBqjUKwZDkUAAAXDSURBVHic7d0JWxNnGIXhD1mGRatS7SrFguwJKhMIILIISoLYElEwEtlc6gIWDIJWra3aunRff28DWNTIJPnIO3PGyXn+wHvuC0jYrkSpjfK25RcUFhmeraiwIH9bnnq74pJS9DYnKi0pToKXbd+BHuVUO94re12+cxd6kJPtLn8lf38Peo2z7f3gf/mHH6G3ON3HLz/un3yKXuJ8+9a/3ivQOxBVrMo/q0TPQFS5P0H/HL0CU5VS1QfQIzDVVKta9AZUtaoKPQFVlapDT0BVp+rRE1DVqxr0BFQ1Cr0AF+m5GOm5GOkpamhs8vmb36n8voOHDmdNb/Gb72iBlqzorW1oQDa1tW6dHmxHr8+u9o4t0juPoKdnX1fnlug+9G6Jjm6F3o1eLVO3Pr0HvVmqRm16L3qyVL269D70Yrn6NOnH0IPlOqZH70fvlaxfix5Ez5UsqEUfQM+VbECLHkDPlSygRT+OniuZxeOcBf0Eeq5kg6STTjrppJNOumcinXTSSSeddNK9E+mkk0466aST7p1IJ5100kknnXTvRDrppJNOOumkeyfSSSeddNJJJ907kU466aSTTjrp3ol0F9FDoXA4HAoN2X7IXfSTvcNdp3q+SPRl90jktL3HXEQfPXN2bPzcxq3o+YnYsJ0ffNfQRyMXJqeSzkWnZ2Yv2nbRLfQzsYbNT04MX7LppDvol698ZSE3jPNjV6/ZctQV9MGOc5vfWyt63Z4XS3ADPXIoBXy18RujNpx1AX2uJZqGbszfsOELHk9vnkgHX7PLH4bTb36dgTzxOR8Qf6yD028sZEQ3Fq9KXwbTh3zzmcmN6Jj0lzuYPngrQ3ni+T0ufRtLH7D8TubtJoS/p8XSw+le1PWNZmV/lsHSfRk+xq13a0n0OJR+87aO3FiOi16H0ueSf0pNXXRF9DqSfqlJS554oBN9bkfST45p0u/clTyPpIe/0aRHhyXPI+mnz2vSjbOST29Iun9al34vJHgeSR/WelZfbcYr9BFt+kRY8DySPpu79Bz+hA/c16U3eoX+QPvJLeYV+sVxXfoVyfNIemhGUz4flzyPpF+6oEmfFP2zM5I+NKxJ//ak5Hkk3Wye1JIvPBS9DqUvxb7ToX//SPQ6lG5G7ujQY7K/icfSzbEU7ziU3JTwe3CA6XOPM5Y/6Rb+8wuYHoplTP/hR+HbYLr5aDHtH9fXmxZ/Cw403YwvZ0a/J/nz6lpw+tOBTH4ZH+2RPw2nm+GVZ+np1214hyU83TRXnqSTz0RsOOsGenhgOeVj3bOgHXJX0M1r8cUU8ukme866gp54jos9tvi+bur2c5tuuoRuhpqDrZv8LLOwePSiXf8c7RZ6okhs8s2PfOeznueSv4xLykV0cykSP3Vr8s79hUTLrS+CXZFBO8+5iW6aQ0+XLv/0c3wkHnhwc2n0qb3H3EV3NNJJJ5100kkn3TuRTjrppJNOOuneiXTSSSeddNJJ906kk0466aSTTrp3Ip100kknnXTSvRPppJNOOumkk+6dSCeddNJJJ51070Q66aSTTjrpnqOf0KIfR8+V7JgW3Z53FwMV0KKLv/oXsgEtehA9V7KgFr0fPVeyfi26YcMLgKGyeJSzpPehB8vVp0k3etGLpbprJbSkv0BPluoXbbrRjd4sU7cl0JpuHEWvlshn7UtB7+xC786+IyletDgF3TA62tHTs6vd4puZDOhGaxt6fTa1tabEpaYbRosfDdhqgXTvmZiObhgNjQd9/uZ3Kr+v6dDhtLD0dM9Gei5Gei6Wy/Qa9AJUNaoePQFVvapDT0BVp6rQE1BVqVr0BFS1qjpHH+cOVKtc/YyvUkrtr0SvQFT5a4KuKtAzEFWsylXZPvQO5/utbI2uyn9HL3G6P8rVy/7ci97ibHv+UhuV70avcbJdO9XrbS9CD3KqHdtVUn+XlKJHOVFpSXGyPFHetvyCQg9/8IsKC/75N++V9z8qrxzo73cdLAAAAABJRU5ErkJggg==";
function Ba({ chance: e, chest: t }) {
    return e !== void 0
        ? l.jsx(vh, { args: e })
        : t !== void 0
        ? l.jsx(wh, { args: t })
        : l.jsx(l.Fragment, {});
}
function vh({ args: e }) {
    return l.jsxs("div", {
        "data-b-image": "chance",
        className: "chance-card",
        children: [
            l.jsx("div", {}),
            l.jsx("div", { children: l.jsx("h3", { children: e.title }) }),
            l.jsx("div", {}),
        ],
    });
}
function wh({ args: e }) {
    return l.jsxs("div", {
        "data-b-image": "chest",
        className: "chance-card",
        children: [
            l.jsx("div", {}),
            l.jsx("div", { children: l.jsx("h3", { children: e.title }) }),
            l.jsx("div", {}),
        ],
    });
}
const Sh = D.forwardRef((e, t) => {
        const n = new Map($t.properties.map((v) => [v.posistion ?? 0, v])),
            [r, i] = D.useState(!1),
            [o, s] = D.useState(!1),
            [a, u] = D.useState(!1),
            [f, g] = D.useState(!1),
            [h, m] = D.useState(0),
            [y, A] = D.useState(1),
            [x, B] = D.useState({
                cardCost: -1,
                hotelsCost: -1,
                housesCost: -1,
                multpliedrent: [-1, -1, -1, -1, -1],
                rent: -1,
                rentWithColorSet: -1,
                title: "deafult",
                type: "electricity",
            }),
            [d, c] = D.useState("Street");
        function p(v, C) {
            const w = document.getElementById("dice-panel");
            var R = !0;
            function b() {
                var V = Hr.substring(0, Hr.length - 5);
                V = V.replace("public/", "");
                const J = Math.floor(Math.random() * 6) + 1,
                    j = Math.floor(Math.random() * 6) + 1;
                w.innerHTML = `
                <img src="${V}${J}.png" />
                <img src="${V}${j}.png" />
                
                `;
            }
            function M() {
                if (R) b(), requestAnimationFrame(M);
                else {
                    var V = Hr.substring(0, Hr.length - 5);
                    (V = V.replace("public/", "")),
                        (w.innerHTML = `
                <img src="${V}${v}.png" />
                <img src="${V}${C}.png" />
                `);
                }
            }
            setTimeout(() => {
                R = !1;
            }, 1e3),
                requestAnimationFrame(M);
        }
        function k(v) {
            const C = document.querySelector("img#moneyAnimations");
            if (C === null) return;
            const w = C;
            w.setAttribute("data-anim", "0"),
                requestAnimationFrame(() => {
                    w.setAttribute("data-anim", v.toString()),
                        setTimeout(() => {
                            w.setAttribute("data-anim", "0");
                        }, 1e3);
                });
        }
        return (
            D.useImperativeHandle(t, () => ({
                diceResults: (v) => {
                    p(...v.l),
                        i(!0),
                        setTimeout(() => {
                            i(!1), v.onDone();
                        }, v.time);
                },
                freeDice: () => {
                    const v = document.getElementById("dice-panel");
                    (v.innerHTML = ""), s(!1);
                },
                setStreet: (v) => {
                    const C = e.players.filter((V) => V.id === e.socket.id)[0],
                        w = n.get(v.location);
                    if (
                        w &&
                        v.location !== -1 &&
                        v.location < 40 &&
                        v.location >= 0
                    ) {
                        let V = function (J, j) {
                            function N() {
                                if (J) {
                                    const F = document.querySelector(
                                        "div#advanced-responses"
                                    );
                                    if (F) {
                                        let I = function (O) {
                                            switch (O) {
                                                case "h":
                                                    return 5;
                                                default:
                                                    return O;
                                            }
                                        };
                                        const _ = n.get(j);
                                        if (!_) return;
                                        const P = F;
                                        for (; P.firstChild; )
                                            P.removeChild(P.firstChild);
                                        const S = Array.from(
                                                new Map(
                                                    C.properties.map((O, H) => [
                                                        H,
                                                        O,
                                                    ])
                                                ).entries()
                                            ).filter(
                                                (O) =>
                                                    O[1].posistion ===
                                                    v.location
                                            )[0][0],
                                            L = I(C.properties[S].count);
                                        for (let O = L + 1; O < 6; O++) {
                                            const H =
                                                document.createElement(
                                                    "button"
                                                );
                                            O === 5
                                                ? ((H.innerHTML = "buy hotel"),
                                                  (H.disabled =
                                                      O !== L + 1 ||
                                                      (_.ohousecost ?? 0) >
                                                          (e.players.filter(
                                                              (G) =>
                                                                  G.id ===
                                                                  e.socket.id
                                                          )[0].balance ?? 0)),
                                                  (H.onclick = () => {
                                                      v.onResponse(
                                                          "advance-buy",
                                                          { state: O, money: 1 }
                                                      ),
                                                          u(!1);
                                                  }))
                                                : ((H.innerHTML = `buy ${O} house${
                                                      O > 1 ? "s" : ""
                                                  }`),
                                                  (H.onclick = () => {
                                                      v.onResponse(
                                                          "advance-buy",
                                                          {
                                                              state: O,
                                                              money: O - L,
                                                          }
                                                      ),
                                                          u(!1);
                                                  }),
                                                  (H.disabled =
                                                      (O - L) *
                                                          (_.housecost ?? 0) >
                                                      (e.players.filter(
                                                          (G) =>
                                                              G.id ===
                                                              e.socket.id
                                                      )[0].balance ?? 0))),
                                                P.appendChild(H);
                                        }
                                        const z =
                                            document.createElement("button");
                                        (z.innerHTML = "CONTINUE"),
                                            (z.onclick = () => {
                                                v.onResponse("nothing", {}),
                                                    u(!1);
                                            }),
                                            P.appendChild(z);
                                    } else requestAnimationFrame(N);
                                } else {
                                    const F = document.querySelector(
                                        "button#card-response-yes"
                                    );
                                    F
                                        ? ((F.onclick = () => {
                                              v.onResponse("buy", {}), u(!1);
                                          }),
                                          (document.querySelector(
                                              "button#card-response-no"
                                          ).onclick = () => {
                                              v.onResponse("nothing", {}),
                                                  u(!1);
                                          }))
                                        : requestAnimationFrame(N);
                                }
                            }
                            return N;
                        };
                        var R = !1,
                            b = 0;
                        for (const J of C.properties)
                            !R &&
                                J.posistion === v.location &&
                                ((R = !0), (b = J.count));
                        if (w.group === "Special")
                            v.onResponse("nothing", {}), u(!1);
                        else if (w.group === "Utilities")
                            if (R) v.onResponse("nothing", {});
                            else {
                                c("Utilities");
                                const J = {
                                    cardCost: w.price ?? -1,
                                    title: w.name ?? "error",
                                    type: w.id.includes("water")
                                        ? "water"
                                        : "electricity",
                                };
                                B(J),
                                    g(!1),
                                    u(!0),
                                    requestAnimationFrame(V(!1, v.location));
                            }
                        else if (w.group === "Railroad")
                            if (R) v.onResponse("nothing", {});
                            else {
                                c("Railroad");
                                const J = {
                                    cardCost: w.price ?? -1,
                                    title: w.name ?? "error",
                                };
                                B(J),
                                    u(!0),
                                    requestAnimationFrame(V(!1, v.location));
                            }
                        else {
                            if (
                                !R &&
                                C.balance -
                                    ((w == null ? void 0 : w.price) ?? 0) <
                                    0
                            ) {
                                u(!1), v.onResponse("nothing", {});
                                return;
                            }
                            if (!R) {
                                var M = !1;
                                for (const j of e.players)
                                    for (const N of j.properties)
                                        N.posistion === v.location && (M = !0);
                                if (M) {
                                    v.onResponse("someones", {}), u(!1);
                                    return;
                                }
                            }
                            if (R && b === "h") {
                                u(!1), v.onResponse("nothing", {});
                                return;
                            }
                            c("Street");
                            const J = {
                                cardCost: w.price ?? -1,
                                hotelsCost: w.ohousecost ?? -1,
                                housesCost: w.housecost ?? -1,
                                rent: w.rent ?? -1,
                                multpliedrent: w.multpliedrent
                                    ? [
                                          w.multpliedrent[0] ?? -1,
                                          w.multpliedrent[1] ?? -1,
                                          w.multpliedrent[2] ?? -1,
                                          w.multpliedrent[3] ?? -1,
                                          w.multpliedrent[4] ?? -1,
                                      ]
                                    : [-1, -1, -1, -1, -1],
                                rentWithColorSet: w.rent ? w.rent * 2 : -1,
                                title: w.name ?? "error",
                                group: w.group,
                            };
                            B(J),
                                g(!!R),
                                u(!0),
                                requestAnimationFrame(V(R, v.location));
                        }
                    } else v.onResponse("nothing", {}), u(!1);
                },
                chorch(v, C, w) {
                    c(C ? "Chance" : "CommunityChest"),
                        B({ title: v.title }),
                        u(!0),
                        setTimeout(() => {
                            u(!1);
                        }, w);
                },
                applyAnimation(v) {
                    k(v);
                },
                showJailsButtons: (v) => {
                    const C = document.querySelector(
                            'button.roll-button[data-button-type="pay"]'
                        ),
                        w = document.querySelector(
                            'button.roll-button[data-button-type="card"]'
                        ),
                        R = document.querySelector(
                            'button.roll-button[data-button-type="roll"]'
                        );
                    function b() {
                        (C.onclick = () => {
                            e.socket.emit("roll_dice"), s(!0);
                        }),
                            s(!0),
                            (w.onclick = () => {}),
                            (w.style.translate = "0px 0px"),
                            w.setAttribute("aria-disabled", "true"),
                            setTimeout(() => {
                                w.setAttribute("aria-disabled", "true");
                            }, 300),
                            (C.style.translate = "0px 0px"),
                            (C.onclick = () => {}),
                            C.setAttribute("aria-disabled", "true"),
                            setTimeout(() => {
                                C.setAttribute("aria-disabled", "true");
                            }, 300);
                    }
                    if (
                        (C.setAttribute("aria-disabled", "false"),
                        (C.style.translate = "0px -80px"),
                        (C.onclick = () => {
                            k(1),
                                e.socket.emit("unjail", "pay"),
                                e.socket.emit("roll_dice"),
                                b();
                        }),
                        v)
                    ) {
                        const M = w;
                        M.setAttribute("aria-disabled", "false"),
                            (M.style.translate = "0px -160px"),
                            (M.style.backgroundColor = "gold"),
                            (M.onclick = () => {
                                e.socket.emit("unjail", "card"),
                                    e.socket.emit("roll_dice"),
                                    b();
                            });
                    }
                    R.onclick = () => {
                        e.socket.emit("roll_dice"), b(), s(!0);
                    };
                },
            })),
            D.useEffect(() => {
                document.getElementById("locations").onwheel = (C) => {
                    C.shiftKey
                        ? A((w) => w + C.deltaY / 1e3)
                        : m((w) => w + (C.deltaY * 22.5) / 100);
                };
                const v = Array.from(n.values()).filter(
                    (C) => C.group != "Special"
                );
                for (const C of v) {
                    const w = document
                        .getElementById("locations")
                        .querySelector(
                            `div.street[data-position="${C.posistion}"]`
                        );
                    (w.onclick = () => {
                        e.clickedOnBoard(C.posistion);
                    }),
                        (w.onmousemove = () => {
                            (w.style.cursor = "pointer"),
                                (w.style.backgroundColor = "rgba(0,0,0,15%)");
                        }),
                        (w.onmouseleave = () => {
                            (w.style.cursor = "unset"),
                                (w.style.scale = "1"),
                                (w.style.backgroundColor = "rgba(0,0,0,0%)");
                        });
                }
            }, []),
            D.useEffect(() => {
                var v = !0,
                    C = () => {
                        var R, b, M, V;
                        for (const J of e.players.filter(
                            (j) => j.balance >= 0
                        )) {
                            const j = J.position,
                                N = J.icon + 1,
                                F = J.isInJail,
                                I = document.querySelector(
                                    `div.player[player-id="${J.id}"]`
                                );
                            if (I !== null) {
                                const _ =
                                    (R = I.parentElement) == null
                                        ? void 0
                                        : R.getAttribute("data-position");
                                if (
                                    (parseInt(_) !== J.position &&
                                        ((b = I.parentElement) == null ||
                                            b.removeChild(I),
                                        (M = document.querySelector(
                                            `div.street[data-position="${j}"]`
                                        )) == null || M.appendChild(I)),
                                    !F &&
                                        I.querySelector("img.jailIcon") != null)
                                ) {
                                    const P = I.querySelector("img.jailIcon");
                                    I.removeChild(P);
                                }
                                if (
                                    F &&
                                    I.querySelector("img.jailIcon") == null
                                ) {
                                    for (; I.firstChild; )
                                        I.removeChild(I.firstChild);
                                    const P = document.createElement("img");
                                    (P.src = `./players/p${N}.png`),
                                        I.appendChild(P);
                                    const S = document.createElement("img");
                                    (S.src = "/public/players/jail.png"),
                                        (S.className = "jailIcon"),
                                        I.appendChild(S);
                                }
                            } else {
                                const _ = document.createElement("div");
                                (_.className = "player"),
                                    _.setAttribute("player-id", J.id),
                                    _.setAttribute(
                                        "player-position",
                                        J.position.toString()
                                    ),
                                    _.setAttribute(
                                        "data-tooltip-hover",
                                        J.username
                                    );
                                const P = document.createElement("img");
                                if (
                                    ((P.src = `./players/p${N}.png`),
                                    _.appendChild(P),
                                    F)
                                ) {
                                    const S = document.createElement("img");
                                    (S.src = "/public/players/jail.png"),
                                        (S.className = "jailIcon"),
                                        _.appendChild(S);
                                }
                                (V = document.querySelector(
                                    `div.street[data-position="${j}"]`
                                )) == null || V.appendChild(_);
                            }
                        }
                        function w() {
                            const J = document.getElementById("display-houses"),
                                j = Array.from(
                                    J.querySelectorAll("div.street-houses")
                                );
                            for (const N of j) {
                                const F = N;
                                for (; F.firstChild; )
                                    F.removeChild(F.firstChild);
                                (F.onclick = () => {}),
                                    (F.style.cursor = "unset"),
                                    (F.style.backgroundColor =
                                        "rgba(0,0,0,0%)"),
                                    F.setAttribute("data-tooltip-hover", ""),
                                    (F.style.zIndex = "unset");
                            }
                            for (const N of e.players)
                                for (const F of N.properties) {
                                    const I = F.posistion,
                                        _ = F.count,
                                        P = J.querySelector(
                                            `div.street-houses[data-position="${I}"`
                                        );
                                    if (P != null) {
                                        const S = P;
                                        switch (
                                            (S.setAttribute(
                                                "data-tooltip-hover",
                                                N.username
                                            ),
                                            (S.onclick = () => {
                                                const L =
                                                    document.querySelector(
                                                        `div.player[player-id="${N.id}"]`
                                                    );
                                                (L.style.animation =
                                                    "spin2 1s cubic-bezier(.21, 1.57, .55, 1) infinite"),
                                                    setTimeout(() => {
                                                        L.style.animation = "";
                                                    }, 1 * 1e3);
                                            }),
                                            (S.style.cursor = "pointer"),
                                            (S.style.zIndex = "5"),
                                            _)
                                        ) {
                                            case 0:
                                                S.style.backgroundColor =
                                                    "rgba(0,0,0,25%)";
                                                break;
                                            case 1:
                                            case 2:
                                            case 3:
                                            case 4:
                                                for (let z = 0; z < _; z++) {
                                                    const O =
                                                        document.createElement(
                                                            "img"
                                                        );
                                                    (O.src = wl.replace(
                                                        "public/",
                                                        ""
                                                    )),
                                                        S.appendChild(O);
                                                }
                                                break;
                                            case "h":
                                                const L =
                                                    document.createElement(
                                                        "img"
                                                    );
                                                (L.src = Sl.replace(
                                                    "public/",
                                                    ""
                                                )),
                                                    S.appendChild(L);
                                                break;
                                        }
                                    }
                                }
                        }
                        w(), v && requestAnimationFrame(C);
                    };
                return (
                    requestAnimationFrame(C),
                    () => {
                        v = !1;
                    }
                );
            }, [e.players]),
            l.jsx(l.Fragment, {
                children: l.jsxs("div", {
                    className: "game",
                    children: [
                        l.jsx("div", { id: "dice-panel", "data-show": r }),
                        l.jsxs("div", {
                            className: "board",
                            style: {
                                transform: `translateX(-50%) translateY(-50%) rotate(${h}deg) scale(${y})`,
                            },
                            id: "locations",
                            children: [
                                l.jsxs("div", {
                                    id: "display-houses",
                                    children: [
                                        l.jsx("div", {
                                            "data-position": "39",
                                            "data-rotate": "4",
                                            className: "street-houses",
                                            style: {
                                                top: "83%",
                                                left: "93.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "37",
                                            "data-rotate": "4",
                                            className: "street-houses",
                                            style: {
                                                top: "66.5%",
                                                left: "93.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "35",
                                            "data-rotate": "4",
                                            className: "street-houses",
                                            style: {
                                                top: "50%",
                                                left: "93.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "34",
                                            "data-rotate": "4",
                                            className: "street-houses",
                                            style: {
                                                top: "41.75%",
                                                left: "93.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "32",
                                            "data-rotate": "4",
                                            className: "street-houses",
                                            style: {
                                                top: "25.5%",
                                                left: "93.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "31",
                                            "data-rotate": "4",
                                            className: "street-houses",
                                            style: {
                                                top: "17.25%",
                                                left: "93.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "29",
                                            "data-rotate": "3",
                                            className: "street-houses",
                                            style: { top: "6.5%", left: "83%" },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "28",
                                            "data-rotate": "3",
                                            className: "street-houses",
                                            style: {
                                                top: "6.5%",
                                                left: "74.75%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "27",
                                            "data-rotate": "3",
                                            className: "street-houses",
                                            style: {
                                                top: "6.5%",
                                                left: "66.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "26",
                                            "data-rotate": "3",
                                            className: "street-houses",
                                            style: {
                                                top: "6.5%",
                                                left: "58.25%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "25",
                                            "data-rotate": "3",
                                            className: "street-houses",
                                            style: { top: "6.5%", left: "50%" },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "24",
                                            "data-rotate": "3",
                                            className: "street-houses",
                                            style: {
                                                top: "6.5%",
                                                left: "41.75%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "23",
                                            "data-rotate": "3",
                                            className: "street-houses",
                                            style: {
                                                top: "6.5%",
                                                left: "33.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "21",
                                            "data-rotate": "3",
                                            className: "street-houses",
                                            style: {
                                                top: "6.5%",
                                                left: "17.25%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "19",
                                            "data-rotate": "2",
                                            className: "street-houses",
                                            style: {
                                                top: "17.25%",
                                                left: "6.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "18",
                                            "data-rotate": "2",
                                            className: "street-houses",
                                            style: {
                                                top: "25.5%",
                                                left: "6.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "16",
                                            "data-rotate": "2",
                                            className: "street-houses",
                                            style: {
                                                top: "41.75%",
                                                left: "6.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "15",
                                            "data-rotate": "2",
                                            className: "street-houses",
                                            style: { top: "50%", left: "6.5%" },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "14",
                                            "data-rotate": "2",
                                            className: "street-houses",
                                            style: {
                                                top: "58.25%",
                                                left: "6.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "13",
                                            "data-rotate": "2",
                                            className: "street-houses",
                                            style: {
                                                top: "66.5%",
                                                left: "6.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "12",
                                            "data-rotate": "2",
                                            className: "street-houses",
                                            style: {
                                                top: "74.75%",
                                                left: "6.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "11",
                                            "data-rotate": "2",
                                            className: "street-houses",
                                            style: { top: "83%", left: "6.5%" },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "9",
                                            "data-rotate": "1",
                                            className: "street-houses",
                                            style: {
                                                top: "93.5%",
                                                left: "17.25%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "8",
                                            "data-rotate": "1",
                                            className: "street-houses",
                                            style: {
                                                top: "93.5%",
                                                left: "25.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "6",
                                            "data-rotate": "1",
                                            className: "street-houses",
                                            style: {
                                                top: "93.5%",
                                                left: "41.75%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "5",
                                            "data-rotate": "1",
                                            className: "street-houses",
                                            style: {
                                                top: "93.5%",
                                                left: "50%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "3",
                                            "data-rotate": "1",
                                            className: "street-houses",
                                            style: {
                                                top: "93.5%",
                                                left: "66.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "1",
                                            "data-rotate": "1",
                                            className: "street-houses",
                                            style: {
                                                top: "93.5%",
                                                left: "83%",
                                            },
                                        }),
                                    ],
                                }),
                                l.jsxs("div", {
                                    id: "display-streets",
                                    children: [
                                        l.jsx("div", {
                                            "data-position": "39",
                                            className: "street",
                                            style: {
                                                width: 120,
                                                height: 75,
                                                top: "83%",
                                                left: "93.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "38",
                                            className: "street",
                                            style: {
                                                width: 120,
                                                height: 75,
                                                top: "74.25%",
                                                left: "93.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "37",
                                            className: "street",
                                            style: {
                                                width: 120,
                                                height: 75,
                                                top: "66.5%",
                                                left: "93.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "36",
                                            className: "street",
                                            style: {
                                                width: 120,
                                                height: 75,
                                                top: "58.25%",
                                                left: "93.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "35",
                                            className: "street",
                                            style: {
                                                width: 120,
                                                height: 75,
                                                top: "50%",
                                                left: "93.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "34",
                                            className: "street",
                                            style: {
                                                width: 120,
                                                height: 75,
                                                top: "41.75%",
                                                left: "93.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "33",
                                            className: "street",
                                            style: {
                                                width: 120,
                                                height: 75,
                                                top: "33.5%",
                                                left: "93.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "32",
                                            className: "street",
                                            style: {
                                                width: 120,
                                                height: 75,
                                                top: "25.5%",
                                                left: "93.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "31",
                                            className: "street",
                                            style: {
                                                width: 120,
                                                height: 75,
                                                top: "17.25%",
                                                left: "93.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "30",
                                            className: "street",
                                            style: {
                                                width: 120,
                                                height: 120,
                                                top: "6.5%",
                                                left: "93.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "29",
                                            className: "street",
                                            style: {
                                                width: 75,
                                                height: 120,
                                                top: "6.5%",
                                                left: "83%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "28",
                                            className: "street",
                                            style: {
                                                width: 75,
                                                height: 120,
                                                top: "6.5%",
                                                left: "74.75%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "27",
                                            className: "street",
                                            style: {
                                                width: 75,
                                                height: 120,
                                                top: "6.5%",
                                                left: "66.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "26",
                                            className: "street",
                                            style: {
                                                width: 75,
                                                height: 120,
                                                top: "6.5%",
                                                left: "58.25%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "25",
                                            className: "street",
                                            style: {
                                                width: 75,
                                                height: 120,
                                                top: "6.5%",
                                                left: "50%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "24",
                                            className: "street",
                                            style: {
                                                width: 75,
                                                height: 120,
                                                top: "6.5%",
                                                left: "41.75%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "23",
                                            className: "street",
                                            style: {
                                                width: 75,
                                                height: 120,
                                                top: "6.5%",
                                                left: "33.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "22",
                                            className: "street",
                                            style: {
                                                width: 75,
                                                height: 120,
                                                top: "6.5%",
                                                left: "25.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "21",
                                            className: "street",
                                            style: {
                                                width: 75,
                                                height: 120,
                                                top: "6.5%",
                                                left: "17.25%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "20",
                                            className: "street",
                                            style: {
                                                width: 120,
                                                height: 120,
                                                top: "6.5%",
                                                left: "6.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "19",
                                            className: "street",
                                            style: {
                                                width: 120,
                                                height: 75,
                                                top: "17.25%",
                                                left: "6.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "18",
                                            className: "street",
                                            style: {
                                                width: 120,
                                                height: 75,
                                                top: "25.5%",
                                                left: "6.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "17",
                                            className: "street",
                                            style: {
                                                width: 120,
                                                height: 75,
                                                top: "33.5%",
                                                left: "6.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "16",
                                            className: "street",
                                            style: {
                                                width: 120,
                                                height: 75,
                                                top: "41.75%",
                                                left: "6.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "15",
                                            className: "street",
                                            style: {
                                                width: 120,
                                                height: 75,
                                                top: "50%",
                                                left: "6.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "14",
                                            className: "street",
                                            style: {
                                                width: 120,
                                                height: 75,
                                                top: "58.25%",
                                                left: "6.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "13",
                                            className: "street",
                                            style: {
                                                width: 120,
                                                height: 75,
                                                top: "66.5%",
                                                left: "6.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "12",
                                            className: "street",
                                            style: {
                                                width: 120,
                                                height: 75,
                                                top: "74.75%",
                                                left: "6.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "11",
                                            className: "street",
                                            style: {
                                                width: 120,
                                                height: 75,
                                                top: "83%",
                                                left: "6.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            className: "street",
                                            "data-position": "10",
                                            style: {
                                                width: 120,
                                                height: 120,
                                                top: "93.5%",
                                                left: "6.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "9",
                                            className: "street",
                                            style: {
                                                width: 75,
                                                height: 120,
                                                top: "93.5%",
                                                left: "17.25%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "8",
                                            className: "street",
                                            style: {
                                                width: 75,
                                                height: 120,
                                                top: "93.5%",
                                                left: "25.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "7",
                                            className: "street",
                                            style: {
                                                width: 75,
                                                height: 120,
                                                top: "93.5%",
                                                left: "33.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "6",
                                            className: "street",
                                            style: {
                                                width: 75,
                                                height: 120,
                                                top: "93.5%",
                                                left: "41.75%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "5",
                                            className: "street",
                                            style: {
                                                width: 75,
                                                height: 120,
                                                top: "93.5%",
                                                left: "50%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "4",
                                            className: "street",
                                            style: {
                                                width: 75,
                                                height: 120,
                                                top: "93.5%",
                                                left: "58.25%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "3",
                                            className: "street",
                                            style: {
                                                width: 75,
                                                height: 120,
                                                top: "93.5%",
                                                left: "66.5%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "2",
                                            className: "street",
                                            style: {
                                                width: 75,
                                                height: 120,
                                                top: "93.5%",
                                                left: "74.75%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "1",
                                            className: "street",
                                            style: {
                                                width: 75,
                                                height: 120,
                                                top: "93.5%",
                                                left: "83%",
                                            },
                                        }),
                                        l.jsx("div", {
                                            "data-position": "0",
                                            className: "street",
                                            style: {
                                                width: 120,
                                                height: 120,
                                                top: "93.5%",
                                                left: "93.5%",
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        l.jsxs("div", {
                            className: "roll-panel",
                            children: [
                                l.jsx("button", {
                                    className: "roll-button",
                                    "data-button-type": "card",
                                    "aria-disabled": !0,
                                    style:
                                        e.myTurn && !o
                                            ? {}
                                            : { translate: "0px 250px" },
                                    children: l.jsx("p", { children: "CARD" }),
                                }),
                                l.jsx("button", {
                                    className: "roll-button",
                                    "data-button-type": "pay",
                                    "aria-disabled": !0,
                                    style:
                                        e.myTurn && !o
                                            ? {}
                                            : { translate: "0px 250px" },
                                    children: l.jsx("p", { children: "PAY" }),
                                }),
                                l.jsxs("button", {
                                    className: "roll-button",
                                    "data-button-type": "roll",
                                    "aria-disabled": !1,
                                    style:
                                        e.myTurn && !o
                                            ? {}
                                            : { translate: "0px 250px" },
                                    onClick: (v) => {
                                        v.currentTarget.ariaDisabled !==
                                            "true" &&
                                            (e.socket.emit("roll_dice"), s(!0));
                                    },
                                    children: [
                                        l.jsx("img", {
                                            src: ws.replace("public/", ""),
                                        }),
                                        l.jsx("p", {
                                            children: "ROLL THE DICE",
                                        }),
                                        " ",
                                        l.jsx("img", {
                                            src: ws.replace("public/", ""),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        l.jsx("div", {
                            className:
                                d === "Chance" || d === "CommunityChest"
                                    ? "chance-display-actions"
                                    : "card-display-actions",
                            style: a
                                ? {}
                                : {
                                      transform:
                                          "translateY(-50%) translateX(-500%)",
                                  },
                            children:
                                d === "Chance" || d === "CommunityChest"
                                    ? l.jsx(l.Fragment, {
                                          children:
                                              d === "Chance"
                                                  ? l.jsx(Ba, { chance: x })
                                                  : d === "CommunityChest"
                                                  ? l.jsx(Ba, { chance: x })
                                                  : l.jsx(l.Fragment, {}),
                                      })
                                    : l.jsxs(l.Fragment, {
                                          children: [
                                              l.jsx("h3", {
                                                  children: f
                                                      ? "would you like to buy this card?"
                                                      : "you can buy houses and hotels",
                                              }),
                                              d === "Railroad"
                                                  ? l.jsx(Cn, { railroad: x })
                                                  : d === "Utilities"
                                                  ? l.jsx(Cn, { utility: x })
                                                  : l.jsx(Cn, { street: x }),
                                              l.jsx("div", {
                                                  children: l.jsx("center", {
                                                      children: f
                                                          ? l.jsx("div", {
                                                                id: "advanced-responses",
                                                            })
                                                          : l.jsxs(l.Fragment, {
                                                                children: [
                                                                    l.jsx(
                                                                        "button",
                                                                        {
                                                                            id: "card-response-yes",
                                                                            children:
                                                                                "YES",
                                                                        }
                                                                    ),
                                                                    l.jsx(
                                                                        "button",
                                                                        {
                                                                            id: "card-response-no",
                                                                            children:
                                                                                "NO",
                                                                        }
                                                                    ),
                                                                ],
                                                            }),
                                                  }),
                                              }),
                                          ],
                                      }),
                        }),
                        l.jsx("img", {
                            "data-anim": "0",
                            id: "moneyAnimations",
                            alt: "",
                        }),
                    ],
                }),
            })
        );
    }),
    ud = D.forwardRef(
        (e, t) => (
            D.useImperativeHandle(t, () => ({
                message(n, r, i, o) {
                    const s = document.querySelector("div.notify"),
                        a = document.createElement("div");
                    (a.className = "notification"),
                        (a.innerHTML = n),
                        a.setAttribute("data-notif-type", r ?? "info"),
                        s.appendChild(a);
                    var u = !1,
                        f = "popoff .7s cubic-bezier(.62,.25,1,-0.73)";
                    (a.onclick = () => {
                        (u = !0),
                            (a.style.animation = f),
                            setTimeout(() => {
                                s.removeChild(a), a.remove(), o && o();
                            }, 700);
                    }),
                        setTimeout(() => {
                            u ||
                                ((a.style.animation = f),
                                setTimeout(() => {
                                    s.removeChild(a), a.remove(), o && o();
                                }, 700));
                        }, (i ?? 2) * 1e3);
                },
                dialog(n) {
                    const r = document.querySelector("div.dialog-screen"),
                        i = document.querySelector("div.dialog-box"),
                        o = i.querySelector("div.texts"),
                        s = i.querySelector("div.buttons"),
                        a = n(
                            () => {
                                r.setAttribute("data-show", "false"),
                                    i.setAttribute("data-show", "false"),
                                    (i.style.animation =
                                        "dialogout 1s cubic-bezier(.5,0,1,.5)"),
                                    setTimeout(() => {
                                        (i.style.animation = ""),
                                            (o.innerHTML = ""),
                                            (s.innerHTML = "");
                                    }, 1e3);
                            },
                            (u, f) => {
                                const g = document.createElement("button");
                                return (g.onclick = f), (g.innerHTML = u), g;
                            }
                        );
                    i.setAttribute("data-show", "true"),
                        r.setAttribute("data-show", "true"),
                        (o.innerHTML = a.innerHTML);
                    for (const u of a.buttons) s.appendChild(u);
                },
            })),
            l.jsxs(l.Fragment, {
                children: [
                    " ",
                    l.jsx("div", { className: "notify" }),
                    l.jsx("div", {
                        className: "dialog-screen",
                        "data-show": !1,
                    }),
                    l.jsxs("div", {
                        className: "dialog-box",
                        "data-show": !1,
                        children: [
                            l.jsx("div", { className: "texts" }),
                            l.jsx("div", { className: "buttons" }),
                        ],
                    }),
                ],
            })
        )
    );
function kh({ socket: e, name: t }) {
    const [n, r] = D.useState(new Map()),
        i = Array.from(n.values()),
        [o, s] = D.useState(""),
        [a, u] = D.useState(!1),
        [f, g] = D.useState(!1),
        h = D.useRef(null),
        m = D.useRef(null),
        y = D.useRef(null),
        A = new Map($t.properties.map((x) => [x.posistion ?? 0, x]));
    return (
        D.useEffect(() => {
            function x(j) {
                function N() {
                    n.delete(j),
                        r(new Map(n)),
                        requestAnimationFrame(() => {
                            n.has(j) && requestAnimationFrame(N);
                        });
                }
                N();
                function F() {
                    const I = document.querySelector(
                        `div.player[player-id="${j}"]`
                    );
                    I !== null &&
                        (I.parentElement && I.parentElement.removeChild(I),
                        I.remove(),
                        requestAnimationFrame(() => {
                            document.querySelector(
                                `div.player[player-id="${j}"]`
                            ) !== null && requestAnimationFrame(F);
                        }));
                }
                F();
            }
            function B(j, N, F = !0, I) {
                var _ = (j - N.position) % 40;
                (j < N.position || _ < 0) && (_ = 40 - N.position + j);
                const P = 0.35 * 1e3 * _;
                console.log(
                    `generator target ${j} time ${P} current ${N.position}`
                );
                const S = Math.random();
                function L() {
                    var z = 0,
                        O = !1,
                        H = 0;
                    const G = document.querySelector(
                        `div.player[player-id="${N.id}"]`
                    );
                    (z = N.position),
                        (N.position += 1),
                        (G.style.animation =
                            "jumpstreet 0.35s cubic-bezier(.26,1.5,.65,1.02)");
                    const ue = () => {
                        var ye, fe;
                        H < _ &&
                            ((H += 1),
                            console.log(`${S} adding one to ${N.position}`),
                            (N.position = (N.position + 1) % 40),
                            console.log(
                                `${S}  result of adding one to ${N.position}`
                            ),
                            N.position == 0 &&
                                F &&
                                ((N.balance += 200),
                                N.id === e.id &&
                                    ((ye = h.current) == null ||
                                        ye.applyAnimation(2)),
                                (O = !0),
                                r(new Map(n.set(N.id, N)))),
                            H == _ - 1
                                ? ((N.position = j),
                                  (G.style.animation =
                                      "part 0.9s cubic-bezier(0,.7,.57,1)"),
                                  setTimeout(() => {
                                      G.style.animation = "";
                                  }, 900),
                                  !O &&
                                      z > N.position &&
                                      F &&
                                      ((N.balance += 200),
                                      N.id === e.id &&
                                          ((fe = h.current) == null ||
                                              fe.applyAnimation(2)),
                                      (O = !0),
                                      r(new Map(n.set(N.id, N)))),
                                  I && I())
                                : ((G.style.animation =
                                      "jumpstreet 0.35s cubic-bezier(.26,1.5,.65,1.02)"),
                                  setTimeout(ue, 0.35 * 1e3)));
                    };
                    setTimeout(ue, 0.35 * 1e3);
                }
                return { func: L, time: P };
            }
            const d = (j) => {
                    s(j.turn_id.toString());
                    for (const N of j.other_players)
                        r(n.set(N.id, new Ma(N.id, N.username).recieveJson(N)));
                },
                c = (j) => {
                    r(
                        new Map(
                            n.set(j.id, new Ma(j.id, j.username).recieveJson(j))
                        )
                    );
                },
                p = (j) => {
                    const N = n.get(j.id);
                    N !== void 0 &&
                        ((N.ready = j.state), r(new Map(n.set(N.id, N))));
                },
                k = () => {
                    u(!0);
                },
                v = (j) => {
                    var N, F, I;
                    if ((x(j.id), s(j.turn), n.size > 2)) {
                        const _ =
                            ((N = n.get(j.id)) == null ? void 0 : N.username) ??
                            "player";
                        (F = y.current) == null ||
                            F.message(`${_} disconected`, "error");
                    } else
                        (I = y.current) == null ||
                            I.dialog((_, P) => {
                                var S;
                                return {
                                    innerHTML: `<h3> YOU WON! </h3> <p> your the only left player with the balance of ${
                                        ((S = n.get(e.id)) == null
                                            ? void 0
                                            : S.balance) ?? 0
                                    } </p>`,
                                    buttons: [
                                        P("PLAY ANOTHER GAME", () => {
                                            _(), document.location.reload();
                                        }),
                                    ],
                                };
                            });
                },
                C = (j) => {
                    var F, I, _, P, S, L;
                    const N = n.get(j.from);
                    if (
                        (j.from !== e.id &&
                            N &&
                            (N.recieveJson(j.pJson),
                            r(new Map(n.set(j.from, N)))),
                        j.pJson.balance < 0)
                    ) {
                        if (j.pJson.id !== e.id)
                            if (n.size > 2) {
                                const z = j.pJson.username;
                                (F = y.current) == null ||
                                    F.message(`${z} lost`, "info");
                            } else if (n.has(e.id))
                                (I = y.current) == null ||
                                    I.dialog((z, O) => {
                                        var H;
                                        return {
                                            innerHTML: `<h3> YOU WON! </h3> <p> your the only left player with the balance of ${
                                                ((H = n.get(e.id)) == null
                                                    ? void 0
                                                    : H.balance) ?? 0
                                            } </p>`,
                                            buttons: [
                                                O("PLAY ANOTHER GAME", () => {
                                                    z(),
                                                        document.location.reload();
                                                }),
                                            ],
                                        };
                                    });
                            else {
                                const O =
                                    Array.from(n.values()).filter(
                                        (H) => H.id !== j.pJson.id
                                    )[0].username ?? 0;
                                (_ = y.current) == null ||
                                    _.dialog((H, G) => {
                                        var ue;
                                        return {
                                            innerHTML: `<h3> ${O} WON! </h3> <p> ${O} won with the balance of ${
                                                ((ue = n.get(e.id)) == null
                                                    ? void 0
                                                    : ue.balance) ?? 0
                                            } </p>`,
                                            buttons: [
                                                G("PLAY ANOTHER GAME", () => {
                                                    H(),
                                                        document.location.reload();
                                                }),
                                            ],
                                        };
                                    });
                            }
                        else
                            (P = y.current) == null ||
                                P.dialog((z, O) => {
                                    var H;
                                    return {
                                        innerHTML: `<h3> YOU LOST! </h3> <p> you lost your money and lost the monopol with a wanted balance of ${-(
                                            ((H = n.get(e.id)) == null
                                                ? void 0
                                                : H.balance) ?? 0
                                        )} </p>`,
                                        buttons: [
                                            O("CONTINUE WATCHING", () => {
                                                z();
                                            }),
                                            O("PLAY ANOTHER GAME", () => {
                                                z(), document.location.reload();
                                            }),
                                        ],
                                    };
                                });
                        x(j.pJson.id);
                    }
                    if ((s(j.turnId), j.turnId === e.id)) {
                        const z = n.get(j.turnId);
                        z &&
                            z.isInJail &&
                            ((S = h.current) == null ||
                                S.showJailsButtons(
                                    ((z == null ? void 0 : z.getoutCards) ??
                                        -1) > 0
                                ));
                    }
                    (L = m.current) == null || L.reRenderPlayerList();
                },
                w = (j) => {
                    var N;
                    (N = m.current) == null || N.addMessage(j);
                },
                R = (j) => {
                    var _;
                    const N = n.get(e.id),
                        F = n.get(j.turnId),
                        I = B(j.listOfNums[2], F, !0);
                    (_ = h.current) == null ||
                        _.diceResults({
                            l: [j.listOfNums[0], j.listOfNums[1]],
                            time: N.isInJail ? 2e3 : I.time + 2e3 + 800,
                            onDone: () => {
                                var L, z;
                                if (e.id !== j.turnId) return;
                                const P =
                                        ((L = n.get(e.id)) == null
                                            ? void 0
                                            : L.position) ?? -1,
                                    S = A.get(P);
                                S != null &&
                                    (S.id === "communitychest" ||
                                    S.id === "chance"
                                        ? e.emit(
                                              "chorch_roll",
                                              S.id === "chance"
                                          )
                                        : (z = h.current) == null ||
                                          z.setStreet({
                                              location: P,
                                              onResponse: (O, H) => {
                                                  var ye,
                                                      fe,
                                                      bt,
                                                      et,
                                                      Mn,
                                                      re,
                                                      Ut,
                                                      ze;
                                                  var G = 0;
                                                  if (O === "buy")
                                                      (N.balance -=
                                                          ((S == null
                                                              ? void 0
                                                              : S.price) ?? 0) *
                                                          1),
                                                          (ye = h.current) ==
                                                              null ||
                                                              ye.applyAnimation(
                                                                  1
                                                              ),
                                                          N.properties.push({
                                                              posistion:
                                                                  N.position,
                                                              count: 0,
                                                              group:
                                                                  ((fe = A.get(
                                                                      N.position
                                                                  )) == null
                                                                      ? void 0
                                                                      : fe.group) ??
                                                                  "",
                                                          });
                                                  else if (
                                                      O === "advance-buy"
                                                  ) {
                                                      const ke = Array.from(
                                                              new Map(
                                                                  N.properties.map(
                                                                      (
                                                                          nt,
                                                                          Cd
                                                                      ) => [
                                                                          Cd,
                                                                          nt,
                                                                      ]
                                                                  )
                                                              ).entries()
                                                          ).filter(
                                                              (nt) =>
                                                                  nt[1]
                                                                      .posistion ===
                                                                  P
                                                          )[0][0],
                                                          tt = H;
                                                      (N.properties[ke].count =
                                                          tt.state === 5
                                                              ? "h"
                                                              : tt.state),
                                                          tt.state === 5
                                                              ? ((N.balance -=
                                                                    S.ohousecost ??
                                                                    0),
                                                                (bt =
                                                                    h.current) ==
                                                                    null ||
                                                                    bt.applyAnimation(
                                                                        1
                                                                    ))
                                                              : (S.housecost,
                                                                (N.balance -=
                                                                    (S.housecost ??
                                                                        0) *
                                                                    tt.money),
                                                                (et =
                                                                    h.current) ==
                                                                    null ||
                                                                    et.applyAnimation(
                                                                        1
                                                                    ));
                                                  } else if (O === "someones") {
                                                      const ke = Array.from(
                                                          n.values()
                                                      );
                                                      for (const tt of ke)
                                                          for (const nt of tt.properties)
                                                              if (
                                                                  nt.posistion ===
                                                                  P
                                                              ) {
                                                                  var ue = 0;
                                                                  nt.count ===
                                                                      0 &&
                                                                      (ue =
                                                                          (S ==
                                                                          null
                                                                              ? void 0
                                                                              : S.rent) ??
                                                                          0),
                                                                      typeof nt.count ==
                                                                          "number" &&
                                                                          nt.count >
                                                                              0 &&
                                                                          (ue =
                                                                              ((S ==
                                                                              null
                                                                                  ? void 0
                                                                                  : S.multpliedrent) ?? [
                                                                                  0,
                                                                                  0,
                                                                                  0,
                                                                                  0,
                                                                              ])[
                                                                                  nt.count -
                                                                                      1
                                                                              ] ??
                                                                              0),
                                                                      nt.count ===
                                                                          "h" &&
                                                                          (ue =
                                                                              ((S ==
                                                                              null
                                                                                  ? void 0
                                                                                  : S.multpliedrent) ?? [
                                                                                  0,
                                                                                  0,
                                                                                  0,
                                                                                  0,
                                                                                  0,
                                                                              ])[4] ??
                                                                              0),
                                                                      (N.balance -=
                                                                          ue),
                                                                      (Mn =
                                                                          h.current) ==
                                                                          null ||
                                                                          Mn.applyAnimation(
                                                                              1
                                                                          ),
                                                                      e.emit(
                                                                          "pay",
                                                                          {
                                                                              balance:
                                                                                  ue,
                                                                              from: e.id,
                                                                              to: tt.id,
                                                                          }
                                                                      ),
                                                                      (re =
                                                                          h.current) ==
                                                                          null ||
                                                                          re.applyAnimation(
                                                                              1
                                                                          );
                                                              }
                                                  } else if (O === "nothing") {
                                                      if (
                                                          ((S == null
                                                              ? void 0
                                                              : S.id) ?? "") ==
                                                          "gotojail"
                                                      ) {
                                                          const ke = B(
                                                              10,
                                                              F,
                                                              !1,
                                                              () => {
                                                                  (F.position = 10),
                                                                      (F.isInJail =
                                                                          !0),
                                                                      (F.jailTurnsRemaining = 3);
                                                              }
                                                          );
                                                          (G = ke.time),
                                                              ke.func();
                                                      }
                                                      (S == null
                                                          ? void 0
                                                          : S.id) ===
                                                          "incometax" &&
                                                          ((N.balance -= 200),
                                                          (Ut = h.current) ==
                                                              null ||
                                                              Ut.applyAnimation(
                                                                  1
                                                              )),
                                                          (S == null
                                                              ? void 0
                                                              : S.id) ===
                                                              "luxerytax" &&
                                                              ((N.balance -= 100),
                                                              (ze =
                                                                  h.current) ==
                                                                  null ||
                                                                  ze.applyAnimation(
                                                                      1
                                                                  ));
                                                  }
                                                  setTimeout(() => {
                                                      var tt;
                                                      r(
                                                          new Map(
                                                              n.set(e.id, N)
                                                          )
                                                      ),
                                                          (tt = h.current) ==
                                                              null ||
                                                              tt.freeDice();
                                                      const ke = n
                                                          .get(e.id)
                                                          .toJson();
                                                      e.emit("finish-turn", ke);
                                                  }, G);
                                              },
                                          }));
                            },
                        }),
                        F.isInJail
                            ? setTimeout(() => {
                                  j.listOfNums[0] == j.listOfNums[1]
                                      ? ((F.isInJail = !1),
                                        setTimeout(() => {
                                            I.func();
                                        }, 2e3))
                                      : F.jailTurnsRemaining > 0 &&
                                        ((F.jailTurnsRemaining -= 1),
                                        F.jailTurnsRemaining === 0 &&
                                            (F.isInJail = !1)),
                                      r(new Map(n.set(j.turnId, F)));
                              }, 1500)
                            : setTimeout(() => {
                                  I.func();
                              }, 2e3);
                },
                b = (j) => {
                    const N = n.get(j.to);
                    N &&
                        (j.option === "card"
                            ? (N.getoutCards -= 1)
                            : (N.balance -= 50),
                        (N.isInJail = !1),
                        (N.jailTurnsRemaining = 0),
                        r(new Map(n.set(j.to, N))));
                },
                M = (j) => {
                    var F;
                    const N = n.get(j.playerId);
                    N == null || N.recieveJson(j.pJson),
                        e.id === j.playerId &&
                            ((F = h.current) == null || F.applyAnimation(2));
                },
                V = (j) => {
                    var F;
                    (F = h.current) == null ||
                        F.chorch(j.element, j.is_chance, 3e3),
                        setTimeout(() => {
                            var O, H, G, ue, ye;
                            const I = j.element,
                                _ = n.get(j.turnId);
                            if (_ === void 0) return;
                            function P(fe) {
                                if (_ === void 0) return 0;
                                const bt = Array.from(n.values()).filter(
                                    (et) => et.id !== _.id
                                );
                                for (const et of bt)
                                    (et.balance += fe),
                                        r(new Map(n.set(et.id, et)));
                                return bt.length;
                            }
                            var S = 0;
                            switch (I.action) {
                                case "move":
                                    if (I.tileid) {
                                        const re = new Map(
                                                $t.properties.map((ke) => [
                                                    ke.id,
                                                    ke,
                                                ])
                                            ),
                                            Ut =
                                                (O = re.get(I.tileid)) == null
                                                    ? void 0
                                                    : O.posistion;
                                        if (Ut === void 0) {
                                            const ke = Array.from(re.keys());
                                            console.log(ke);
                                            break;
                                        }
                                        const ze = B(Ut, _);
                                        (S = ze.time), ze.func();
                                    } else if (I.count) {
                                        const re = B(_.position + I.count, _);
                                        (S = re.time), re.func();
                                    }
                                    break;
                                case "addfunds":
                                    (_.balance += I.amount ?? 0),
                                        _.id === e.id &&
                                            ((H = h.current) == null ||
                                                H.applyAnimation(2));
                                    break;
                                case "jail":
                                    if (I.subaction !== void 0) {
                                        switch (I.subaction) {
                                            case "getout":
                                                _.getoutCards += 1;
                                                break;
                                            case "goto":
                                                const re = B(10, _, !1, () => {
                                                    (_.position = 10),
                                                        (_.isInJail = !0),
                                                        (_.jailTurnsRemaining = 3);
                                                });
                                                (S = re.time), re.func();
                                                break;
                                        }
                                        r(new Map(n.set(_.id, _)));
                                    }
                                    break;
                                case "removefunds":
                                    (_.balance -= I.amount ?? 0),
                                        _.id === e.id &&
                                            ((G = h.current) == null ||
                                                G.applyAnimation(1));
                                    break;
                                case "removefundstoplayers":
                                    var L = P(I.amount ?? 0);
                                    (_.balance -= (I.amount ?? 0) * L),
                                        _.id === e.id &&
                                            ((ue = h.current) == null ||
                                                ue.applyAnimation(1));
                                    break;
                                case "addfundsfromplayers":
                                    var L = P(-(I.amount ?? 0));
                                    (_.balance += (I.amount ?? 0) * L),
                                        _.id === e.id &&
                                            ((ye = h.current) == null ||
                                                ye.applyAnimation(2));
                                    break;
                                case "movenearest":
                                    let fe = function (re, Ut) {
                                        re.sort((ze, ke) => ze - ke);
                                        for (let ze = 0; ze < re.length; ze++)
                                            if (re[ze] > Ut) return re[ze];
                                        return re[0];
                                    };
                                    if (!I.groupid) return;
                                    var z = "";
                                    I.groupid === "utility"
                                        ? (z = "Utilities")
                                        : (z = "Railroad");
                                    const bt = $t.properties
                                            .filter((re) => re.group === z)
                                            .map((re) => re.posistion),
                                        et = fe(bt, _.position),
                                        Mn = B(et, _);
                                    (S = Mn.time), Mn.func();
                                    break;
                            }
                            setTimeout(() => {
                                var fe;
                                r(new Map(n.set(_.id, _))),
                                    _.id === e.id &&
                                        ((fe = h.current) == null ||
                                            fe.freeDice(),
                                        e.emit(
                                            "finish-turn",
                                            n.get(e.id).toJson()
                                        ));
                            }, S);
                        }, 3e3);
                };
            e.on("initials", d),
                e.on("new-player", c),
                e.on("ready", p),
                e.on("start-game", k),
                e.on("disconnected-player", v),
                e.on("turn-finished", C),
                e.on("message", w),
                e.on("dice_roll_result", R),
                e.on("unjail", b),
                e.on("member_updating", M),
                e.on("chorch_result", V);
            var J = !0;
            return (
                J && e.emit("name", t),
                () => {
                    (J = !1),
                        e.off("initials", d),
                        e.off("new-player", c),
                        e.off("ready", p),
                        e.off("start-game", k),
                        e.off("disconnected-player", v),
                        e.off("turn-finished", C),
                        e.off("message", w),
                        e.off("dice_roll_result", R),
                        e.off("unjail", b),
                        e.off("member_updating", M),
                        e.off("chorch_result", V);
                }
            );
        }, [e]),
        D.useEffect(() => {
            var x;
            (x = m.current) == null || x.reRenderPlayerList();
        }, [n]),
        a
            ? l.jsxs(l.Fragment, {
                  children: [
                      l.jsxs("main", {
                          children: [
                              l.jsx(gh, {
                                  currentTurn: o,
                                  ref: m,
                                  name: t,
                                  socket: e,
                                  players: i,
                              }),
                              l.jsx(Sh, {
                                  clickedOnBoard: (x) => {
                                      var B;
                                      (B = m.current) == null ||
                                          B.clickedOnBoard(x);
                                  },
                                  ref: h,
                                  socket: e,
                                  players: Array.from(n.values()),
                                  myTurn: o === e.id,
                              }),
                          ],
                      }),
                      l.jsx(ud, { ref: y }),
                  ],
              })
            : l.jsxs("div", {
                  className: "lobby",
                  children: [
                      l.jsxs("h3", { children: ["Hello there ", t] }),
                      "the players that are currently in the lobby are",
                      l.jsx("div", {
                          children: Array.from(n.values()).map((x, B) =>
                              l.jsx(
                                  "p",
                                  {
                                      style: x.ready
                                          ? { backgroundColor: "#32a852" }
                                          : {},
                                      className: "lobby-players",
                                      children: x.username,
                                  },
                                  B
                              )
                          ),
                      }),
                      l.jsx("center", {
                          children: l.jsx("button", {
                              onClick: () => {
                                  e.emit("ready", !f), g(!f);
                              },
                              children: f ? "Not Ready" : "Ready",
                          }),
                      }),
                  ],
              })
    );
}
const ut = Object.create(null);
ut.open = "0";
ut.close = "1";
ut.ping = "2";
ut.pong = "3";
ut.message = "4";
ut.upgrade = "5";
ut.noop = "6";
const si = Object.create(null);
Object.keys(ut).forEach((e) => {
    si[ut[e]] = e;
});
const xh = { type: "error", data: "parser error" },
    cd =
        typeof Blob == "function" ||
        (typeof Blob < "u" &&
            Object.prototype.toString.call(Blob) ===
                "[object BlobConstructor]"),
    dd = typeof ArrayBuffer == "function",
    fd = (e) =>
        typeof ArrayBuffer.isView == "function"
            ? ArrayBuffer.isView(e)
            : e && e.buffer instanceof ArrayBuffer,
    kl = ({ type: e, data: t }, n, r) =>
        cd && t instanceof Blob
            ? n
                ? r(t)
                : ba(t, r)
            : dd && (t instanceof ArrayBuffer || fd(t))
            ? n
                ? r(t)
                : ba(new Blob([t]), r)
            : r(ut[e] + (t || "")),
    ba = (e, t) => {
        const n = new FileReader();
        return (
            (n.onload = function () {
                const r = n.result.split(",")[1];
                t("b" + (r || ""));
            }),
            n.readAsDataURL(e)
        );
    };
function Ua(e) {
    return e instanceof Uint8Array
        ? e
        : e instanceof ArrayBuffer
        ? new Uint8Array(e)
        : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let Co;
function Ph(e, t) {
    if (cd && e.data instanceof Blob)
        return e.data.arrayBuffer().then(Ua).then(t);
    if (dd && (e.data instanceof ArrayBuffer || fd(e.data)))
        return t(Ua(e.data));
    kl(e, !1, (n) => {
        Co || (Co = new TextEncoder()), t(Co.encode(n));
    });
}
const qa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    Xn = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < qa.length; e++) Xn[qa.charCodeAt(e)] = e;
const Ch = (e) => {
        let t = e.length * 0.75,
            n = e.length,
            r,
            i = 0,
            o,
            s,
            a,
            u;
        e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
        const f = new ArrayBuffer(t),
            g = new Uint8Array(f);
        for (r = 0; r < n; r += 4)
            (o = Xn[e.charCodeAt(r)]),
                (s = Xn[e.charCodeAt(r + 1)]),
                (a = Xn[e.charCodeAt(r + 2)]),
                (u = Xn[e.charCodeAt(r + 3)]),
                (g[i++] = (o << 2) | (s >> 4)),
                (g[i++] = ((s & 15) << 4) | (a >> 2)),
                (g[i++] = ((a & 3) << 6) | (u & 63));
        return f;
    },
    Eh = typeof ArrayBuffer == "function",
    xl = (e, t) => {
        if (typeof e != "string") return { type: "message", data: pd(e, t) };
        const n = e.charAt(0);
        return n === "b"
            ? { type: "message", data: Ah(e.substring(1), t) }
            : si[n]
            ? e.length > 1
                ? { type: si[n], data: e.substring(1) }
                : { type: si[n] }
            : xh;
    },
    Ah = (e, t) => {
        if (Eh) {
            const n = Ch(e);
            return pd(n, t);
        } else return { base64: !0, data: e };
    },
    pd = (e, t) => {
        switch (t) {
            case "blob":
                return e instanceof Blob ? e : new Blob([e]);
            case "arraybuffer":
            default:
                return e instanceof ArrayBuffer ? e : e.buffer;
        }
    },
    hd = String.fromCharCode(30),
    Nh = (e, t) => {
        const n = e.length,
            r = new Array(n);
        let i = 0;
        e.forEach((o, s) => {
            kl(o, !1, (a) => {
                (r[s] = a), ++i === n && t(r.join(hd));
            });
        });
    },
    jh = (e, t) => {
        const n = e.split(hd),
            r = [];
        for (let i = 0; i < n.length; i++) {
            const o = xl(n[i], t);
            if ((r.push(o), o.type === "error")) break;
        }
        return r;
    };
let Eo;
function Rh(e, t, n) {
    Eo || (Eo = new TextDecoder());
    const r = t || e[0] < 48 || e[0] > 54;
    return xl(r ? e : Eo.decode(e), n);
}
const md = 4;
function se(e) {
    if (e) return Th(e);
}
function Th(e) {
    for (var t in se.prototype) e[t] = se.prototype[t];
    return e;
}
se.prototype.on = se.prototype.addEventListener = function (e, t) {
    return (
        (this._callbacks = this._callbacks || {}),
        (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
        this
    );
};
se.prototype.once = function (e, t) {
    function n() {
        this.off(e, n), t.apply(this, arguments);
    }
    return (n.fn = t), this.on(e, n), this;
};
se.prototype.off =
    se.prototype.removeListener =
    se.prototype.removeAllListeners =
    se.prototype.removeEventListener =
        function (e, t) {
            if (
                ((this._callbacks = this._callbacks || {}),
                arguments.length == 0)
            )
                return (this._callbacks = {}), this;
            var n = this._callbacks["$" + e];
            if (!n) return this;
            if (arguments.length == 1)
                return delete this._callbacks["$" + e], this;
            for (var r, i = 0; i < n.length; i++)
                if (((r = n[i]), r === t || r.fn === t)) {
                    n.splice(i, 1);
                    break;
                }
            return n.length === 0 && delete this._callbacks["$" + e], this;
        };
se.prototype.emit = function (e) {
    this._callbacks = this._callbacks || {};
    for (
        var t = new Array(arguments.length - 1),
            n = this._callbacks["$" + e],
            r = 1;
        r < arguments.length;
        r++
    )
        t[r - 1] = arguments[r];
    if (n) {
        n = n.slice(0);
        for (var r = 0, i = n.length; r < i; ++r) n[r].apply(this, t);
    }
    return this;
};
se.prototype.emitReserved = se.prototype.emit;
se.prototype.listeners = function (e) {
    return (
        (this._callbacks = this._callbacks || {}),
        this._callbacks["$" + e] || []
    );
};
se.prototype.hasListeners = function (e) {
    return !!this.listeners(e).length;
};
const be = (() =>
    typeof self < "u"
        ? self
        : typeof window < "u"
        ? window
        : Function("return this")())();
function yd(e, ...t) {
    return t.reduce((n, r) => (e.hasOwnProperty(r) && (n[r] = e[r]), n), {});
}
const _h = be.setTimeout,
    Lh = be.clearTimeout;
function Xi(e, t) {
    t.useNativeTimers
        ? ((e.setTimeoutFn = _h.bind(be)), (e.clearTimeoutFn = Lh.bind(be)))
        : ((e.setTimeoutFn = be.setTimeout.bind(be)),
          (e.clearTimeoutFn = be.clearTimeout.bind(be)));
}
const Oh = 1.33;
function Ih(e) {
    return typeof e == "string"
        ? Fh(e)
        : Math.ceil((e.byteLength || e.size) * Oh);
}
function Fh(e) {
    let t = 0,
        n = 0;
    for (let r = 0, i = e.length; r < i; r++)
        (t = e.charCodeAt(r)),
            t < 128
                ? (n += 1)
                : t < 2048
                ? (n += 2)
                : t < 55296 || t >= 57344
                ? (n += 3)
                : (r++, (n += 4));
    return n;
}
function Mh(e) {
    let t = "";
    for (let n in e)
        e.hasOwnProperty(n) &&
            (t.length && (t += "&"),
            (t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n])));
    return t;
}
function zh(e) {
    let t = {},
        n = e.split("&");
    for (let r = 0, i = n.length; r < i; r++) {
        let o = n[r].split("=");
        t[decodeURIComponent(o[0])] = decodeURIComponent(o[1]);
    }
    return t;
}
class Dh extends Error {
    constructor(t, n, r) {
        super(t),
            (this.description = n),
            (this.context = r),
            (this.type = "TransportError");
    }
}
class Pl extends se {
    constructor(t) {
        super(),
            (this.writable = !1),
            Xi(this, t),
            (this.opts = t),
            (this.query = t.query),
            (this.socket = t.socket);
    }
    onError(t, n, r) {
        return super.emitReserved("error", new Dh(t, n, r)), this;
    }
    open() {
        return (this.readyState = "opening"), this.doOpen(), this;
    }
    close() {
        return (
            (this.readyState === "opening" || this.readyState === "open") &&
                (this.doClose(), this.onClose()),
            this
        );
    }
    send(t) {
        this.readyState === "open" && this.write(t);
    }
    onOpen() {
        (this.readyState = "open"),
            (this.writable = !0),
            super.emitReserved("open");
    }
    onData(t) {
        const n = xl(t, this.socket.binaryType);
        this.onPacket(n);
    }
    onPacket(t) {
        super.emitReserved("packet", t);
    }
    onClose(t) {
        (this.readyState = "closed"), super.emitReserved("close", t);
    }
    pause(t) {}
    createUri(t, n = {}) {
        return (
            t +
            "://" +
            this._hostname() +
            this._port() +
            this.opts.path +
            this._query(n)
        );
    }
    _hostname() {
        const t = this.opts.hostname;
        return t.indexOf(":") === -1 ? t : "[" + t + "]";
    }
    _port() {
        return this.opts.port &&
            ((this.opts.secure && +(this.opts.port !== 443)) ||
                (!this.opts.secure && Number(this.opts.port) !== 80))
            ? ":" + this.opts.port
            : "";
    }
    _query(t) {
        const n = Mh(t);
        return n.length ? "?" + n : "";
    }
}
const gd =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(
            ""
        ),
    Ss = 64,
    Bh = {};
let Va = 0,
    Kr = 0,
    Ja;
function Ha(e) {
    let t = "";
    do (t = gd[e % Ss] + t), (e = Math.floor(e / Ss));
    while (e > 0);
    return t;
}
function vd() {
    const e = Ha(+new Date());
    return e !== Ja ? ((Va = 0), (Ja = e)) : e + "." + Ha(Va++);
}
for (; Kr < Ss; Kr++) Bh[gd[Kr]] = Kr;
let wd = !1;
try {
    wd =
        typeof XMLHttpRequest < "u" &&
        "withCredentials" in new XMLHttpRequest();
} catch {}
const bh = wd;
function Sd(e) {
    const t = e.xdomain;
    try {
        if (typeof XMLHttpRequest < "u" && (!t || bh))
            return new XMLHttpRequest();
    } catch {}
    if (!t)
        try {
            return new be[["Active"].concat("Object").join("X")](
                "Microsoft.XMLHTTP"
            );
        } catch {}
}
function Uh() {}
const qh = (function () {
    return new Sd({ xdomain: !1 }).responseType != null;
})();
class Vh extends Pl {
    constructor(t) {
        if ((super(t), (this.polling = !1), typeof location < "u")) {
            const r = location.protocol === "https:";
            let i = location.port;
            i || (i = r ? "443" : "80"),
                (this.xd =
                    (typeof location < "u" &&
                        t.hostname !== location.hostname) ||
                    i !== t.port);
        }
        const n = t && t.forceBase64;
        (this.supportsBinary = qh && !n),
            this.opts.withCredentials && (this.cookieJar = void 0);
    }
    get name() {
        return "polling";
    }
    doOpen() {
        this.poll();
    }
    pause(t) {
        this.readyState = "pausing";
        const n = () => {
            (this.readyState = "paused"), t();
        };
        if (this.polling || !this.writable) {
            let r = 0;
            this.polling &&
                (r++,
                this.once("pollComplete", function () {
                    --r || n();
                })),
                this.writable ||
                    (r++,
                    this.once("drain", function () {
                        --r || n();
                    }));
        } else n();
    }
    poll() {
        (this.polling = !0), this.doPoll(), this.emitReserved("poll");
    }
    onData(t) {
        const n = (r) => {
            if (
                (this.readyState === "opening" &&
                    r.type === "open" &&
                    this.onOpen(),
                r.type === "close")
            )
                return (
                    this.onClose({
                        description: "transport closed by the server",
                    }),
                    !1
                );
            this.onPacket(r);
        };
        jh(t, this.socket.binaryType).forEach(n),
            this.readyState !== "closed" &&
                ((this.polling = !1),
                this.emitReserved("pollComplete"),
                this.readyState === "open" && this.poll());
    }
    doClose() {
        const t = () => {
            this.write([{ type: "close" }]);
        };
        this.readyState === "open" ? t() : this.once("open", t);
    }
    write(t) {
        (this.writable = !1),
            Nh(t, (n) => {
                this.doWrite(n, () => {
                    (this.writable = !0), this.emitReserved("drain");
                });
            });
    }
    uri() {
        const t = this.opts.secure ? "https" : "http",
            n = this.query || {};
        return (
            this.opts.timestampRequests !== !1 &&
                (n[this.opts.timestampParam] = vd()),
            !this.supportsBinary && !n.sid && (n.b64 = 1),
            this.createUri(t, n)
        );
    }
    request(t = {}) {
        return (
            Object.assign(
                t,
                { xd: this.xd, cookieJar: this.cookieJar },
                this.opts
            ),
            new at(this.uri(), t)
        );
    }
    doWrite(t, n) {
        const r = this.request({ method: "POST", data: t });
        r.on("success", n),
            r.on("error", (i, o) => {
                this.onError("xhr post error", i, o);
            });
    }
    doPoll() {
        const t = this.request();
        t.on("data", this.onData.bind(this)),
            t.on("error", (n, r) => {
                this.onError("xhr poll error", n, r);
            }),
            (this.pollXhr = t);
    }
}
class at extends se {
    constructor(t, n) {
        super(),
            Xi(this, n),
            (this.opts = n),
            (this.method = n.method || "GET"),
            (this.uri = t),
            (this.data = n.data !== void 0 ? n.data : null),
            this.create();
    }
    create() {
        var t;
        const n = yd(
            this.opts,
            "agent",
            "pfx",
            "key",
            "passphrase",
            "cert",
            "ca",
            "ciphers",
            "rejectUnauthorized",
            "autoUnref"
        );
        n.xdomain = !!this.opts.xd;
        const r = (this.xhr = new Sd(n));
        try {
            r.open(this.method, this.uri, !0);
            try {
                if (this.opts.extraHeaders) {
                    r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
                    for (let i in this.opts.extraHeaders)
                        this.opts.extraHeaders.hasOwnProperty(i) &&
                            r.setRequestHeader(i, this.opts.extraHeaders[i]);
                }
            } catch {}
            if (this.method === "POST")
                try {
                    r.setRequestHeader(
                        "Content-type",
                        "text/plain;charset=UTF-8"
                    );
                } catch {}
            try {
                r.setRequestHeader("Accept", "*/*");
            } catch {}
            (t = this.opts.cookieJar) === null ||
                t === void 0 ||
                t.addCookies(r),
                "withCredentials" in r &&
                    (r.withCredentials = this.opts.withCredentials),
                this.opts.requestTimeout &&
                    (r.timeout = this.opts.requestTimeout),
                (r.onreadystatechange = () => {
                    var i;
                    r.readyState === 3 &&
                        ((i = this.opts.cookieJar) === null ||
                            i === void 0 ||
                            i.parseCookies(r)),
                        r.readyState === 4 &&
                            (r.status === 200 || r.status === 1223
                                ? this.onLoad()
                                : this.setTimeoutFn(() => {
                                      this.onError(
                                          typeof r.status == "number"
                                              ? r.status
                                              : 0
                                      );
                                  }, 0));
                }),
                r.send(this.data);
        } catch (i) {
            this.setTimeoutFn(() => {
                this.onError(i);
            }, 0);
            return;
        }
        typeof document < "u" &&
            ((this.index = at.requestsCount++),
            (at.requests[this.index] = this));
    }
    onError(t) {
        this.emitReserved("error", t, this.xhr), this.cleanup(!0);
    }
    cleanup(t) {
        if (!(typeof this.xhr > "u" || this.xhr === null)) {
            if (((this.xhr.onreadystatechange = Uh), t))
                try {
                    this.xhr.abort();
                } catch {}
            typeof document < "u" && delete at.requests[this.index],
                (this.xhr = null);
        }
    }
    onLoad() {
        const t = this.xhr.responseText;
        t !== null &&
            (this.emitReserved("data", t),
            this.emitReserved("success"),
            this.cleanup());
    }
    abort() {
        this.cleanup();
    }
}
at.requestsCount = 0;
at.requests = {};
if (typeof document < "u") {
    if (typeof attachEvent == "function") attachEvent("onunload", Ka);
    else if (typeof addEventListener == "function") {
        const e = "onpagehide" in be ? "pagehide" : "unload";
        addEventListener(e, Ka, !1);
    }
}
function Ka() {
    for (let e in at.requests)
        at.requests.hasOwnProperty(e) && at.requests[e].abort();
}
const Cl = (() =>
        typeof Promise == "function" && typeof Promise.resolve == "function"
            ? (t) => Promise.resolve().then(t)
            : (t, n) => n(t, 0))(),
    Wr = be.WebSocket || be.MozWebSocket,
    Wa = !0,
    Jh = "arraybuffer",
    Qa =
        typeof navigator < "u" &&
        typeof navigator.product == "string" &&
        navigator.product.toLowerCase() === "reactnative";
class Hh extends Pl {
    constructor(t) {
        super(t), (this.supportsBinary = !t.forceBase64);
    }
    get name() {
        return "websocket";
    }
    doOpen() {
        if (!this.check()) return;
        const t = this.uri(),
            n = this.opts.protocols,
            r = Qa
                ? {}
                : yd(
                      this.opts,
                      "agent",
                      "perMessageDeflate",
                      "pfx",
                      "key",
                      "passphrase",
                      "cert",
                      "ca",
                      "ciphers",
                      "rejectUnauthorized",
                      "localAddress",
                      "protocolVersion",
                      "origin",
                      "maxPayload",
                      "family",
                      "checkServerIdentity"
                  );
        this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
        try {
            this.ws =
                Wa && !Qa ? (n ? new Wr(t, n) : new Wr(t)) : new Wr(t, n, r);
        } catch (i) {
            return this.emitReserved("error", i);
        }
        (this.ws.binaryType = this.socket.binaryType || Jh),
            this.addEventListeners();
    }
    addEventListeners() {
        (this.ws.onopen = () => {
            this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
        }),
            (this.ws.onclose = (t) =>
                this.onClose({
                    description: "websocket connection closed",
                    context: t,
                })),
            (this.ws.onmessage = (t) => this.onData(t.data)),
            (this.ws.onerror = (t) => this.onError("websocket error", t));
    }
    write(t) {
        this.writable = !1;
        for (let n = 0; n < t.length; n++) {
            const r = t[n],
                i = n === t.length - 1;
            kl(r, this.supportsBinary, (o) => {
                const s = {};
                try {
                    Wa && this.ws.send(o);
                } catch {}
                i &&
                    Cl(() => {
                        (this.writable = !0), this.emitReserved("drain");
                    }, this.setTimeoutFn);
            });
        }
    }
    doClose() {
        typeof this.ws < "u" && (this.ws.close(), (this.ws = null));
    }
    uri() {
        const t = this.opts.secure ? "wss" : "ws",
            n = this.query || {};
        return (
            this.opts.timestampRequests && (n[this.opts.timestampParam] = vd()),
            this.supportsBinary || (n.b64 = 1),
            this.createUri(t, n)
        );
    }
    check() {
        return !!Wr;
    }
}
function Kh(e, t) {
    return (
        e.type === "message" &&
        typeof e.data != "string" &&
        t[0] >= 48 &&
        t[0] <= 54
    );
}
class Wh extends Pl {
    get name() {
        return "webtransport";
    }
    doOpen() {
        typeof WebTransport == "function" &&
            ((this.transport = new WebTransport(
                this.createUri("https"),
                this.opts.transportOptions[this.name]
            )),
            this.transport.closed
                .then(() => {
                    this.onClose();
                })
                .catch((t) => {
                    this.onError("webtransport error", t);
                }),
            this.transport.ready.then(() => {
                this.transport.createBidirectionalStream().then((t) => {
                    const n = t.readable.getReader();
                    this.writer = t.writable.getWriter();
                    let r;
                    const i = () => {
                        n.read()
                            .then(({ done: s, value: a }) => {
                                s ||
                                    (!r && a.byteLength === 1 && a[0] === 54
                                        ? (r = !0)
                                        : (this.onPacket(
                                              Rh(a, r, "arraybuffer")
                                          ),
                                          (r = !1)),
                                    i());
                            })
                            .catch((s) => {});
                    };
                    i();
                    const o = this.query.sid
                        ? `0{"sid":"${this.query.sid}"}`
                        : "0";
                    this.writer
                        .write(new TextEncoder().encode(o))
                        .then(() => this.onOpen());
                });
            }));
    }
    write(t) {
        this.writable = !1;
        for (let n = 0; n < t.length; n++) {
            const r = t[n],
                i = n === t.length - 1;
            Ph(r, (o) => {
                Kh(r, o) && this.writer.write(Uint8Array.of(54)),
                    this.writer.write(o).then(() => {
                        i &&
                            Cl(() => {
                                (this.writable = !0),
                                    this.emitReserved("drain");
                            }, this.setTimeoutFn);
                    });
            });
        }
    }
    doClose() {
        var t;
        (t = this.transport) === null || t === void 0 || t.close();
    }
}
const Qh = { websocket: Hh, webtransport: Wh, polling: Vh },
    $h =
        /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
    Xh = [
        "source",
        "protocol",
        "authority",
        "userInfo",
        "user",
        "password",
        "host",
        "port",
        "relative",
        "path",
        "directory",
        "file",
        "query",
        "anchor",
    ];
function ks(e) {
    const t = e,
        n = e.indexOf("["),
        r = e.indexOf("]");
    n != -1 &&
        r != -1 &&
        (e =
            e.substring(0, n) +
            e.substring(n, r).replace(/:/g, ";") +
            e.substring(r, e.length));
    let i = $h.exec(e || ""),
        o = {},
        s = 14;
    for (; s--; ) o[Xh[s]] = i[s] || "";
    return (
        n != -1 &&
            r != -1 &&
            ((o.source = t),
            (o.host = o.host
                .substring(1, o.host.length - 1)
                .replace(/;/g, ":")),
            (o.authority = o.authority
                .replace("[", "")
                .replace("]", "")
                .replace(/;/g, ":")),
            (o.ipv6uri = !0)),
        (o.pathNames = Gh(o, o.path)),
        (o.queryKey = Yh(o, o.query)),
        o
    );
}
function Gh(e, t) {
    const n = /\/{2,9}/g,
        r = t.replace(n, "/").split("/");
    return (
        (t.slice(0, 1) == "/" || t.length === 0) && r.splice(0, 1),
        t.slice(-1) == "/" && r.splice(r.length - 1, 1),
        r
    );
}
function Yh(e, t) {
    const n = {};
    return (
        t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (r, i, o) {
            i && (n[i] = o);
        }),
        n
    );
}
let kd = class on extends se {
    constructor(t, n = {}) {
        super(),
            (this.writeBuffer = []),
            t && typeof t == "object" && ((n = t), (t = null)),
            t
                ? ((t = ks(t)),
                  (n.hostname = t.host),
                  (n.secure = t.protocol === "https" || t.protocol === "wss"),
                  (n.port = t.port),
                  t.query && (n.query = t.query))
                : n.host && (n.hostname = ks(n.host).host),
            Xi(this, n),
            (this.secure =
                n.secure != null
                    ? n.secure
                    : typeof location < "u" && location.protocol === "https:"),
            n.hostname && !n.port && (n.port = this.secure ? "443" : "80"),
            (this.hostname =
                n.hostname ||
                (typeof location < "u" ? location.hostname : "localhost")),
            (this.port =
                n.port ||
                (typeof location < "u" && location.port
                    ? location.port
                    : this.secure
                    ? "443"
                    : "80")),
            (this.transports = n.transports || [
                "polling",
                "websocket",
                "webtransport",
            ]),
            (this.writeBuffer = []),
            (this.prevBufferLen = 0),
            (this.opts = Object.assign(
                {
                    path: "/engine.io",
                    agent: !1,
                    withCredentials: !1,
                    upgrade: !0,
                    timestampParam: "t",
                    rememberUpgrade: !1,
                    addTrailingSlash: !0,
                    rejectUnauthorized: !0,
                    perMessageDeflate: { threshold: 1024 },
                    transportOptions: {},
                    closeOnBeforeunload: !1,
                },
                n
            )),
            (this.opts.path =
                this.opts.path.replace(/\/$/, "") +
                (this.opts.addTrailingSlash ? "/" : "")),
            typeof this.opts.query == "string" &&
                (this.opts.query = zh(this.opts.query)),
            (this.id = null),
            (this.upgrades = null),
            (this.pingInterval = null),
            (this.pingTimeout = null),
            (this.pingTimeoutTimer = null),
            typeof addEventListener == "function" &&
                (this.opts.closeOnBeforeunload &&
                    ((this.beforeunloadEventListener = () => {
                        this.transport &&
                            (this.transport.removeAllListeners(),
                            this.transport.close());
                    }),
                    addEventListener(
                        "beforeunload",
                        this.beforeunloadEventListener,
                        !1
                    )),
                this.hostname !== "localhost" &&
                    ((this.offlineEventListener = () => {
                        this.onClose("transport close", {
                            description: "network connection lost",
                        });
                    }),
                    addEventListener(
                        "offline",
                        this.offlineEventListener,
                        !1
                    ))),
            this.open();
    }
    createTransport(t) {
        const n = Object.assign({}, this.opts.query);
        (n.EIO = md), (n.transport = t), this.id && (n.sid = this.id);
        const r = Object.assign(
            {},
            this.opts,
            {
                query: n,
                socket: this,
                hostname: this.hostname,
                secure: this.secure,
                port: this.port,
            },
            this.opts.transportOptions[t]
        );
        return new Qh[t](r);
    }
    open() {
        let t;
        if (
            this.opts.rememberUpgrade &&
            on.priorWebsocketSuccess &&
            this.transports.indexOf("websocket") !== -1
        )
            t = "websocket";
        else if (this.transports.length === 0) {
            this.setTimeoutFn(() => {
                this.emitReserved("error", "No transports available");
            }, 0);
            return;
        } else t = this.transports[0];
        this.readyState = "opening";
        try {
            t = this.createTransport(t);
        } catch {
            this.transports.shift(), this.open();
            return;
        }
        t.open(), this.setTransport(t);
    }
    setTransport(t) {
        this.transport && this.transport.removeAllListeners(),
            (this.transport = t),
            t
                .on("drain", this.onDrain.bind(this))
                .on("packet", this.onPacket.bind(this))
                .on("error", this.onError.bind(this))
                .on("close", (n) => this.onClose("transport close", n));
    }
    probe(t) {
        let n = this.createTransport(t),
            r = !1;
        on.priorWebsocketSuccess = !1;
        const i = () => {
            r ||
                (n.send([{ type: "ping", data: "probe" }]),
                n.once("packet", (h) => {
                    if (!r)
                        if (h.type === "pong" && h.data === "probe") {
                            if (
                                ((this.upgrading = !0),
                                this.emitReserved("upgrading", n),
                                !n)
                            )
                                return;
                            (on.priorWebsocketSuccess = n.name === "websocket"),
                                this.transport.pause(() => {
                                    r ||
                                        (this.readyState !== "closed" &&
                                            (g(),
                                            this.setTransport(n),
                                            n.send([{ type: "upgrade" }]),
                                            this.emitReserved("upgrade", n),
                                            (n = null),
                                            (this.upgrading = !1),
                                            this.flush()));
                                });
                        } else {
                            const m = new Error("probe error");
                            (m.transport = n.name),
                                this.emitReserved("upgradeError", m);
                        }
                }));
        };
        function o() {
            r || ((r = !0), g(), n.close(), (n = null));
        }
        const s = (h) => {
            const m = new Error("probe error: " + h);
            (m.transport = n.name), o(), this.emitReserved("upgradeError", m);
        };
        function a() {
            s("transport closed");
        }
        function u() {
            s("socket closed");
        }
        function f(h) {
            n && h.name !== n.name && o();
        }
        const g = () => {
            n.removeListener("open", i),
                n.removeListener("error", s),
                n.removeListener("close", a),
                this.off("close", u),
                this.off("upgrading", f);
        };
        n.once("open", i),
            n.once("error", s),
            n.once("close", a),
            this.once("close", u),
            this.once("upgrading", f),
            this.upgrades.indexOf("webtransport") !== -1 && t !== "webtransport"
                ? this.setTimeoutFn(() => {
                      r || n.open();
                  }, 200)
                : n.open();
    }
    onOpen() {
        if (
            ((this.readyState = "open"),
            (on.priorWebsocketSuccess = this.transport.name === "websocket"),
            this.emitReserved("open"),
            this.flush(),
            this.readyState === "open" && this.opts.upgrade)
        ) {
            let t = 0;
            const n = this.upgrades.length;
            for (; t < n; t++) this.probe(this.upgrades[t]);
        }
    }
    onPacket(t) {
        if (
            this.readyState === "opening" ||
            this.readyState === "open" ||
            this.readyState === "closing"
        )
            switch (
                (this.emitReserved("packet", t),
                this.emitReserved("heartbeat"),
                t.type)
            ) {
                case "open":
                    this.onHandshake(JSON.parse(t.data));
                    break;
                case "ping":
                    this.resetPingTimeout(),
                        this.sendPacket("pong"),
                        this.emitReserved("ping"),
                        this.emitReserved("pong");
                    break;
                case "error":
                    const n = new Error("server error");
                    (n.code = t.data), this.onError(n);
                    break;
                case "message":
                    this.emitReserved("data", t.data),
                        this.emitReserved("message", t.data);
                    break;
            }
    }
    onHandshake(t) {
        this.emitReserved("handshake", t),
            (this.id = t.sid),
            (this.transport.query.sid = t.sid),
            (this.upgrades = this.filterUpgrades(t.upgrades)),
            (this.pingInterval = t.pingInterval),
            (this.pingTimeout = t.pingTimeout),
            (this.maxPayload = t.maxPayload),
            this.onOpen(),
            this.readyState !== "closed" && this.resetPingTimeout();
    }
    resetPingTimeout() {
        this.clearTimeoutFn(this.pingTimeoutTimer),
            (this.pingTimeoutTimer = this.setTimeoutFn(() => {
                this.onClose("ping timeout");
            }, this.pingInterval + this.pingTimeout)),
            this.opts.autoUnref && this.pingTimeoutTimer.unref();
    }
    onDrain() {
        this.writeBuffer.splice(0, this.prevBufferLen),
            (this.prevBufferLen = 0),
            this.writeBuffer.length === 0
                ? this.emitReserved("drain")
                : this.flush();
    }
    flush() {
        if (
            this.readyState !== "closed" &&
            this.transport.writable &&
            !this.upgrading &&
            this.writeBuffer.length
        ) {
            const t = this.getWritablePackets();
            this.transport.send(t),
                (this.prevBufferLen = t.length),
                this.emitReserved("flush");
        }
    }
    getWritablePackets() {
        if (
            !(
                this.maxPayload &&
                this.transport.name === "polling" &&
                this.writeBuffer.length > 1
            )
        )
            return this.writeBuffer;
        let n = 1;
        for (let r = 0; r < this.writeBuffer.length; r++) {
            const i = this.writeBuffer[r].data;
            if ((i && (n += Ih(i)), r > 0 && n > this.maxPayload))
                return this.writeBuffer.slice(0, r);
            n += 2;
        }
        return this.writeBuffer;
    }
    write(t, n, r) {
        return this.sendPacket("message", t, n, r), this;
    }
    send(t, n, r) {
        return this.sendPacket("message", t, n, r), this;
    }
    sendPacket(t, n, r, i) {
        if (
            (typeof n == "function" && ((i = n), (n = void 0)),
            typeof r == "function" && ((i = r), (r = null)),
            this.readyState === "closing" || this.readyState === "closed")
        )
            return;
        (r = r || {}), (r.compress = r.compress !== !1);
        const o = { type: t, data: n, options: r };
        this.emitReserved("packetCreate", o),
            this.writeBuffer.push(o),
            i && this.once("flush", i),
            this.flush();
    }
    close() {
        const t = () => {
                this.onClose("forced close"), this.transport.close();
            },
            n = () => {
                this.off("upgrade", n), this.off("upgradeError", n), t();
            },
            r = () => {
                this.once("upgrade", n), this.once("upgradeError", n);
            };
        return (
            (this.readyState === "opening" || this.readyState === "open") &&
                ((this.readyState = "closing"),
                this.writeBuffer.length
                    ? this.once("drain", () => {
                          this.upgrading ? r() : t();
                      })
                    : this.upgrading
                    ? r()
                    : t()),
            this
        );
    }
    onError(t) {
        (on.priorWebsocketSuccess = !1),
            this.emitReserved("error", t),
            this.onClose("transport error", t);
    }
    onClose(t, n) {
        (this.readyState === "opening" ||
            this.readyState === "open" ||
            this.readyState === "closing") &&
            (this.clearTimeoutFn(this.pingTimeoutTimer),
            this.transport.removeAllListeners("close"),
            this.transport.close(),
            this.transport.removeAllListeners(),
            typeof removeEventListener == "function" &&
                (removeEventListener(
                    "beforeunload",
                    this.beforeunloadEventListener,
                    !1
                ),
                removeEventListener("offline", this.offlineEventListener, !1)),
            (this.readyState = "closed"),
            (this.id = null),
            this.emitReserved("close", t, n),
            (this.writeBuffer = []),
            (this.prevBufferLen = 0));
    }
    filterUpgrades(t) {
        const n = [];
        let r = 0;
        const i = t.length;
        for (; r < i; r++) ~this.transports.indexOf(t[r]) && n.push(t[r]);
        return n;
    }
};
kd.protocol = md;
function Zh(e, t = "", n) {
    let r = e;
    (n = n || (typeof location < "u" && location)),
        e == null && (e = n.protocol + "//" + n.host),
        typeof e == "string" &&
            (e.charAt(0) === "/" &&
                (e.charAt(1) === "/" ? (e = n.protocol + e) : (e = n.host + e)),
            /^(https?|wss?):\/\//.test(e) ||
                (typeof n < "u"
                    ? (e = n.protocol + "//" + e)
                    : (e = "https://" + e)),
            (r = ks(e))),
        r.port ||
            (/^(http|ws)$/.test(r.protocol)
                ? (r.port = "80")
                : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
        (r.path = r.path || "/");
    const o = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
    return (
        (r.id = r.protocol + "://" + o + ":" + r.port + t),
        (r.href =
            r.protocol +
            "://" +
            o +
            (n && n.port === r.port ? "" : ":" + r.port)),
        r
    );
}
const em = typeof ArrayBuffer == "function",
    tm = (e) =>
        typeof ArrayBuffer.isView == "function"
            ? ArrayBuffer.isView(e)
            : e.buffer instanceof ArrayBuffer,
    xd = Object.prototype.toString,
    nm =
        typeof Blob == "function" ||
        (typeof Blob < "u" && xd.call(Blob) === "[object BlobConstructor]"),
    rm =
        typeof File == "function" ||
        (typeof File < "u" && xd.call(File) === "[object FileConstructor]");
function El(e) {
    return (
        (em && (e instanceof ArrayBuffer || tm(e))) ||
        (nm && e instanceof Blob) ||
        (rm && e instanceof File)
    );
}
function li(e, t) {
    if (!e || typeof e != "object") return !1;
    if (Array.isArray(e)) {
        for (let n = 0, r = e.length; n < r; n++) if (li(e[n])) return !0;
        return !1;
    }
    if (El(e)) return !0;
    if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
        return li(e.toJSON(), !0);
    for (const n in e)
        if (Object.prototype.hasOwnProperty.call(e, n) && li(e[n])) return !0;
    return !1;
}
function im(e) {
    const t = [],
        n = e.data,
        r = e;
    return (
        (r.data = xs(n, t)),
        (r.attachments = t.length),
        { packet: r, buffers: t }
    );
}
function xs(e, t) {
    if (!e) return e;
    if (El(e)) {
        const n = { _placeholder: !0, num: t.length };
        return t.push(e), n;
    } else if (Array.isArray(e)) {
        const n = new Array(e.length);
        for (let r = 0; r < e.length; r++) n[r] = xs(e[r], t);
        return n;
    } else if (typeof e == "object" && !(e instanceof Date)) {
        const n = {};
        for (const r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (n[r] = xs(e[r], t));
        return n;
    }
    return e;
}
function om(e, t) {
    return (e.data = Ps(e.data, t)), delete e.attachments, e;
}
function Ps(e, t) {
    if (!e) return e;
    if (e && e._placeholder === !0) {
        if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
            return t[e.num];
        throw new Error("illegal attachments");
    } else if (Array.isArray(e))
        for (let n = 0; n < e.length; n++) e[n] = Ps(e[n], t);
    else if (typeof e == "object")
        for (const n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (e[n] = Ps(e[n], t));
    return e;
}
const sm = [
        "connect",
        "connect_error",
        "disconnect",
        "disconnecting",
        "newListener",
        "removeListener",
    ],
    lm = 5;
var q;
(function (e) {
    (e[(e.CONNECT = 0)] = "CONNECT"),
        (e[(e.DISCONNECT = 1)] = "DISCONNECT"),
        (e[(e.EVENT = 2)] = "EVENT"),
        (e[(e.ACK = 3)] = "ACK"),
        (e[(e.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
        (e[(e.BINARY_EVENT = 5)] = "BINARY_EVENT"),
        (e[(e.BINARY_ACK = 6)] = "BINARY_ACK");
})(q || (q = {}));
class am {
    constructor(t) {
        this.replacer = t;
    }
    encode(t) {
        return (t.type === q.EVENT || t.type === q.ACK) && li(t)
            ? this.encodeAsBinary({
                  type: t.type === q.EVENT ? q.BINARY_EVENT : q.BINARY_ACK,
                  nsp: t.nsp,
                  data: t.data,
                  id: t.id,
              })
            : [this.encodeAsString(t)];
    }
    encodeAsString(t) {
        let n = "" + t.type;
        return (
            (t.type === q.BINARY_EVENT || t.type === q.BINARY_ACK) &&
                (n += t.attachments + "-"),
            t.nsp && t.nsp !== "/" && (n += t.nsp + ","),
            t.id != null && (n += t.id),
            t.data != null && (n += JSON.stringify(t.data, this.replacer)),
            n
        );
    }
    encodeAsBinary(t) {
        const n = im(t),
            r = this.encodeAsString(n.packet),
            i = n.buffers;
        return i.unshift(r), i;
    }
}
function $a(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
}
class Al extends se {
    constructor(t) {
        super(), (this.reviver = t);
    }
    add(t) {
        let n;
        if (typeof t == "string") {
            if (this.reconstructor)
                throw new Error(
                    "got plaintext data when reconstructing a packet"
                );
            n = this.decodeString(t);
            const r = n.type === q.BINARY_EVENT;
            r || n.type === q.BINARY_ACK
                ? ((n.type = r ? q.EVENT : q.ACK),
                  (this.reconstructor = new um(n)),
                  n.attachments === 0 && super.emitReserved("decoded", n))
                : super.emitReserved("decoded", n);
        } else if (El(t) || t.base64)
            if (this.reconstructor)
                (n = this.reconstructor.takeBinaryData(t)),
                    n &&
                        ((this.reconstructor = null),
                        super.emitReserved("decoded", n));
            else
                throw new Error(
                    "got binary data when not reconstructing a packet"
                );
        else throw new Error("Unknown type: " + t);
    }
    decodeString(t) {
        let n = 0;
        const r = { type: Number(t.charAt(0)) };
        if (q[r.type] === void 0)
            throw new Error("unknown packet type " + r.type);
        if (r.type === q.BINARY_EVENT || r.type === q.BINARY_ACK) {
            const o = n + 1;
            for (; t.charAt(++n) !== "-" && n != t.length; );
            const s = t.substring(o, n);
            if (s != Number(s) || t.charAt(n) !== "-")
                throw new Error("Illegal attachments");
            r.attachments = Number(s);
        }
        if (t.charAt(n + 1) === "/") {
            const o = n + 1;
            for (; ++n && !(t.charAt(n) === "," || n === t.length); );
            r.nsp = t.substring(o, n);
        } else r.nsp = "/";
        const i = t.charAt(n + 1);
        if (i !== "" && Number(i) == i) {
            const o = n + 1;
            for (; ++n; ) {
                const s = t.charAt(n);
                if (s == null || Number(s) != s) {
                    --n;
                    break;
                }
                if (n === t.length) break;
            }
            r.id = Number(t.substring(o, n + 1));
        }
        if (t.charAt(++n)) {
            const o = this.tryParse(t.substr(n));
            if (Al.isPayloadValid(r.type, o)) r.data = o;
            else throw new Error("invalid payload");
        }
        return r;
    }
    tryParse(t) {
        try {
            return JSON.parse(t, this.reviver);
        } catch {
            return !1;
        }
    }
    static isPayloadValid(t, n) {
        switch (t) {
            case q.CONNECT:
                return $a(n);
            case q.DISCONNECT:
                return n === void 0;
            case q.CONNECT_ERROR:
                return typeof n == "string" || $a(n);
            case q.EVENT:
            case q.BINARY_EVENT:
                return (
                    Array.isArray(n) &&
                    (typeof n[0] == "number" ||
                        (typeof n[0] == "string" && sm.indexOf(n[0]) === -1))
                );
            case q.ACK:
            case q.BINARY_ACK:
                return Array.isArray(n);
        }
    }
    destroy() {
        this.reconstructor &&
            (this.reconstructor.finishedReconstruction(),
            (this.reconstructor = null));
    }
}
class um {
    constructor(t) {
        (this.packet = t), (this.buffers = []), (this.reconPack = t);
    }
    takeBinaryData(t) {
        if (
            (this.buffers.push(t),
            this.buffers.length === this.reconPack.attachments)
        ) {
            const n = om(this.reconPack, this.buffers);
            return this.finishedReconstruction(), n;
        }
        return null;
    }
    finishedReconstruction() {
        (this.reconPack = null), (this.buffers = []);
    }
}
const cm = Object.freeze(
    Object.defineProperty(
        {
            __proto__: null,
            Decoder: Al,
            Encoder: am,
            get PacketType() {
                return q;
            },
            protocol: lm,
        },
        Symbol.toStringTag,
        { value: "Module" }
    )
);
function $e(e, t, n) {
    return (
        e.on(t, n),
        function () {
            e.off(t, n);
        }
    );
}
const dm = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1,
});
class Pd extends se {
    constructor(t, n, r) {
        super(),
            (this.connected = !1),
            (this.recovered = !1),
            (this.receiveBuffer = []),
            (this.sendBuffer = []),
            (this._queue = []),
            (this._queueSeq = 0),
            (this.ids = 0),
            (this.acks = {}),
            (this.flags = {}),
            (this.io = t),
            (this.nsp = n),
            r && r.auth && (this.auth = r.auth),
            (this._opts = Object.assign({}, r)),
            this.io._autoConnect && this.open();
    }
    get disconnected() {
        return !this.connected;
    }
    subEvents() {
        if (this.subs) return;
        const t = this.io;
        this.subs = [
            $e(t, "open", this.onopen.bind(this)),
            $e(t, "packet", this.onpacket.bind(this)),
            $e(t, "error", this.onerror.bind(this)),
            $e(t, "close", this.onclose.bind(this)),
        ];
    }
    get active() {
        return !!this.subs;
    }
    connect() {
        return this.connected
            ? this
            : (this.subEvents(),
              this.io._reconnecting || this.io.open(),
              this.io._readyState === "open" && this.onopen(),
              this);
    }
    open() {
        return this.connect();
    }
    send(...t) {
        return t.unshift("message"), this.emit.apply(this, t), this;
    }
    emit(t, ...n) {
        if (dm.hasOwnProperty(t))
            throw new Error('"' + t.toString() + '" is a reserved event name');
        if (
            (n.unshift(t),
            this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
        )
            return this._addToQueue(n), this;
        const r = { type: q.EVENT, data: n };
        if (
            ((r.options = {}),
            (r.options.compress = this.flags.compress !== !1),
            typeof n[n.length - 1] == "function")
        ) {
            const s = this.ids++,
                a = n.pop();
            this._registerAckCallback(s, a), (r.id = s);
        }
        const i =
            this.io.engine &&
            this.io.engine.transport &&
            this.io.engine.transport.writable;
        return (
            (this.flags.volatile && (!i || !this.connected)) ||
                (this.connected
                    ? (this.notifyOutgoingListeners(r), this.packet(r))
                    : this.sendBuffer.push(r)),
            (this.flags = {}),
            this
        );
    }
    _registerAckCallback(t, n) {
        var r;
        const i =
            (r = this.flags.timeout) !== null && r !== void 0
                ? r
                : this._opts.ackTimeout;
        if (i === void 0) {
            this.acks[t] = n;
            return;
        }
        const o = this.io.setTimeoutFn(() => {
            delete this.acks[t];
            for (let s = 0; s < this.sendBuffer.length; s++)
                this.sendBuffer[s].id === t && this.sendBuffer.splice(s, 1);
            n.call(this, new Error("operation has timed out"));
        }, i);
        this.acks[t] = (...s) => {
            this.io.clearTimeoutFn(o), n.apply(this, [null, ...s]);
        };
    }
    emitWithAck(t, ...n) {
        const r =
            this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
        return new Promise((i, o) => {
            n.push((s, a) => (r ? (s ? o(s) : i(a)) : i(s))),
                this.emit(t, ...n);
        });
    }
    _addToQueue(t) {
        let n;
        typeof t[t.length - 1] == "function" && (n = t.pop());
        const r = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: !1,
            args: t,
            flags: Object.assign({ fromQueue: !0 }, this.flags),
        };
        t.push((i, ...o) =>
            r !== this._queue[0]
                ? void 0
                : (i !== null
                      ? r.tryCount > this._opts.retries &&
                        (this._queue.shift(), n && n(i))
                      : (this._queue.shift(), n && n(null, ...o)),
                  (r.pending = !1),
                  this._drainQueue())
        ),
            this._queue.push(r),
            this._drainQueue();
    }
    _drainQueue(t = !1) {
        if (!this.connected || this._queue.length === 0) return;
        const n = this._queue[0];
        (n.pending && !t) ||
            ((n.pending = !0),
            n.tryCount++,
            (this.flags = n.flags),
            this.emit.apply(this, n.args));
    }
    packet(t) {
        (t.nsp = this.nsp), this.io._packet(t);
    }
    onopen() {
        typeof this.auth == "function"
            ? this.auth((t) => {
                  this._sendConnectPacket(t);
              })
            : this._sendConnectPacket(this.auth);
    }
    _sendConnectPacket(t) {
        this.packet({
            type: q.CONNECT,
            data: this._pid
                ? Object.assign({ pid: this._pid, offset: this._lastOffset }, t)
                : t,
        });
    }
    onerror(t) {
        this.connected || this.emitReserved("connect_error", t);
    }
    onclose(t, n) {
        (this.connected = !1),
            delete this.id,
            this.emitReserved("disconnect", t, n);
    }
    onpacket(t) {
        if (t.nsp === this.nsp)
            switch (t.type) {
                case q.CONNECT:
                    t.data && t.data.sid
                        ? this.onconnect(t.data.sid, t.data.pid)
                        : this.emitReserved(
                              "connect_error",
                              new Error(
                                  "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                              )
                          );
                    break;
                case q.EVENT:
                case q.BINARY_EVENT:
                    this.onevent(t);
                    break;
                case q.ACK:
                case q.BINARY_ACK:
                    this.onack(t);
                    break;
                case q.DISCONNECT:
                    this.ondisconnect();
                    break;
                case q.CONNECT_ERROR:
                    this.destroy();
                    const r = new Error(t.data.message);
                    (r.data = t.data.data),
                        this.emitReserved("connect_error", r);
                    break;
            }
    }
    onevent(t) {
        const n = t.data || [];
        t.id != null && n.push(this.ack(t.id)),
            this.connected
                ? this.emitEvent(n)
                : this.receiveBuffer.push(Object.freeze(n));
    }
    emitEvent(t) {
        if (this._anyListeners && this._anyListeners.length) {
            const n = this._anyListeners.slice();
            for (const r of n) r.apply(this, t);
        }
        super.emit.apply(this, t),
            this._pid &&
                t.length &&
                typeof t[t.length - 1] == "string" &&
                (this._lastOffset = t[t.length - 1]);
    }
    ack(t) {
        const n = this;
        let r = !1;
        return function (...i) {
            r || ((r = !0), n.packet({ type: q.ACK, id: t, data: i }));
        };
    }
    onack(t) {
        const n = this.acks[t.id];
        typeof n == "function" &&
            (n.apply(this, t.data), delete this.acks[t.id]);
    }
    onconnect(t, n) {
        (this.id = t),
            (this.recovered = n && this._pid === n),
            (this._pid = n),
            (this.connected = !0),
            this.emitBuffered(),
            this.emitReserved("connect"),
            this._drainQueue(!0);
    }
    emitBuffered() {
        this.receiveBuffer.forEach((t) => this.emitEvent(t)),
            (this.receiveBuffer = []),
            this.sendBuffer.forEach((t) => {
                this.notifyOutgoingListeners(t), this.packet(t);
            }),
            (this.sendBuffer = []);
    }
    ondisconnect() {
        this.destroy(), this.onclose("io server disconnect");
    }
    destroy() {
        this.subs && (this.subs.forEach((t) => t()), (this.subs = void 0)),
            this.io._destroy(this);
    }
    disconnect() {
        return (
            this.connected && this.packet({ type: q.DISCONNECT }),
            this.destroy(),
            this.connected && this.onclose("io client disconnect"),
            this
        );
    }
    close() {
        return this.disconnect();
    }
    compress(t) {
        return (this.flags.compress = t), this;
    }
    get volatile() {
        return (this.flags.volatile = !0), this;
    }
    timeout(t) {
        return (this.flags.timeout = t), this;
    }
    onAny(t) {
        return (
            (this._anyListeners = this._anyListeners || []),
            this._anyListeners.push(t),
            this
        );
    }
    prependAny(t) {
        return (
            (this._anyListeners = this._anyListeners || []),
            this._anyListeners.unshift(t),
            this
        );
    }
    offAny(t) {
        if (!this._anyListeners) return this;
        if (t) {
            const n = this._anyListeners;
            for (let r = 0; r < n.length; r++)
                if (t === n[r]) return n.splice(r, 1), this;
        } else this._anyListeners = [];
        return this;
    }
    listenersAny() {
        return this._anyListeners || [];
    }
    onAnyOutgoing(t) {
        return (
            (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
            this._anyOutgoingListeners.push(t),
            this
        );
    }
    prependAnyOutgoing(t) {
        return (
            (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
            this._anyOutgoingListeners.unshift(t),
            this
        );
    }
    offAnyOutgoing(t) {
        if (!this._anyOutgoingListeners) return this;
        if (t) {
            const n = this._anyOutgoingListeners;
            for (let r = 0; r < n.length; r++)
                if (t === n[r]) return n.splice(r, 1), this;
        } else this._anyOutgoingListeners = [];
        return this;
    }
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || [];
    }
    notifyOutgoingListeners(t) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const n = this._anyOutgoingListeners.slice();
            for (const r of n) r.apply(this, t.data);
        }
    }
}
function Fn(e) {
    (e = e || {}),
        (this.ms = e.min || 100),
        (this.max = e.max || 1e4),
        (this.factor = e.factor || 2),
        (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
        (this.attempts = 0);
}
Fn.prototype.duration = function () {
    var e = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var t = Math.random(),
            n = Math.floor(t * this.jitter * e);
        e = Math.floor(t * 10) & 1 ? e + n : e - n;
    }
    return Math.min(e, this.max) | 0;
};
Fn.prototype.reset = function () {
    this.attempts = 0;
};
Fn.prototype.setMin = function (e) {
    this.ms = e;
};
Fn.prototype.setMax = function (e) {
    this.max = e;
};
Fn.prototype.setJitter = function (e) {
    this.jitter = e;
};
class Cs extends se {
    constructor(t, n) {
        var r;
        super(),
            (this.nsps = {}),
            (this.subs = []),
            t && typeof t == "object" && ((n = t), (t = void 0)),
            (n = n || {}),
            (n.path = n.path || "/socket.io"),
            (this.opts = n),
            Xi(this, n),
            this.reconnection(n.reconnection !== !1),
            this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0),
            this.reconnectionDelay(n.reconnectionDelay || 1e3),
            this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3),
            this.randomizationFactor(
                (r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5
            ),
            (this.backoff = new Fn({
                min: this.reconnectionDelay(),
                max: this.reconnectionDelayMax(),
                jitter: this.randomizationFactor(),
            })),
            this.timeout(n.timeout == null ? 2e4 : n.timeout),
            (this._readyState = "closed"),
            (this.uri = t);
        const i = n.parser || cm;
        (this.encoder = new i.Encoder()),
            (this.decoder = new i.Decoder()),
            (this._autoConnect = n.autoConnect !== !1),
            this._autoConnect && this.open();
    }
    reconnection(t) {
        return arguments.length
            ? ((this._reconnection = !!t), this)
            : this._reconnection;
    }
    reconnectionAttempts(t) {
        return t === void 0
            ? this._reconnectionAttempts
            : ((this._reconnectionAttempts = t), this);
    }
    reconnectionDelay(t) {
        var n;
        return t === void 0
            ? this._reconnectionDelay
            : ((this._reconnectionDelay = t),
              (n = this.backoff) === null || n === void 0 || n.setMin(t),
              this);
    }
    randomizationFactor(t) {
        var n;
        return t === void 0
            ? this._randomizationFactor
            : ((this._randomizationFactor = t),
              (n = this.backoff) === null || n === void 0 || n.setJitter(t),
              this);
    }
    reconnectionDelayMax(t) {
        var n;
        return t === void 0
            ? this._reconnectionDelayMax
            : ((this._reconnectionDelayMax = t),
              (n = this.backoff) === null || n === void 0 || n.setMax(t),
              this);
    }
    timeout(t) {
        return arguments.length ? ((this._timeout = t), this) : this._timeout;
    }
    maybeReconnectOnOpen() {
        !this._reconnecting &&
            this._reconnection &&
            this.backoff.attempts === 0 &&
            this.reconnect();
    }
    open(t) {
        if (~this._readyState.indexOf("open")) return this;
        this.engine = new kd(this.uri, this.opts);
        const n = this.engine,
            r = this;
        (this._readyState = "opening"), (this.skipReconnect = !1);
        const i = $e(n, "open", function () {
                r.onopen(), t && t();
            }),
            o = (a) => {
                this.cleanup(),
                    (this._readyState = "closed"),
                    this.emitReserved("error", a),
                    t ? t(a) : this.maybeReconnectOnOpen();
            },
            s = $e(n, "error", o);
        if (this._timeout !== !1) {
            const a = this._timeout,
                u = this.setTimeoutFn(() => {
                    i(), o(new Error("timeout")), n.close();
                }, a);
            this.opts.autoUnref && u.unref(),
                this.subs.push(() => {
                    this.clearTimeoutFn(u);
                });
        }
        return this.subs.push(i), this.subs.push(s), this;
    }
    connect(t) {
        return this.open(t);
    }
    onopen() {
        this.cleanup(), (this._readyState = "open"), this.emitReserved("open");
        const t = this.engine;
        this.subs.push(
            $e(t, "ping", this.onping.bind(this)),
            $e(t, "data", this.ondata.bind(this)),
            $e(t, "error", this.onerror.bind(this)),
            $e(t, "close", this.onclose.bind(this)),
            $e(this.decoder, "decoded", this.ondecoded.bind(this))
        );
    }
    onping() {
        this.emitReserved("ping");
    }
    ondata(t) {
        try {
            this.decoder.add(t);
        } catch (n) {
            this.onclose("parse error", n);
        }
    }
    ondecoded(t) {
        Cl(() => {
            this.emitReserved("packet", t);
        }, this.setTimeoutFn);
    }
    onerror(t) {
        this.emitReserved("error", t);
    }
    socket(t, n) {
        let r = this.nsps[t];
        return (
            r
                ? this._autoConnect && !r.active && r.connect()
                : ((r = new Pd(this, t, n)), (this.nsps[t] = r)),
            r
        );
    }
    _destroy(t) {
        const n = Object.keys(this.nsps);
        for (const r of n) if (this.nsps[r].active) return;
        this._close();
    }
    _packet(t) {
        const n = this.encoder.encode(t);
        for (let r = 0; r < n.length; r++) this.engine.write(n[r], t.options);
    }
    cleanup() {
        this.subs.forEach((t) => t()),
            (this.subs.length = 0),
            this.decoder.destroy();
    }
    _close() {
        (this.skipReconnect = !0),
            (this._reconnecting = !1),
            this.onclose("forced close"),
            this.engine && this.engine.close();
    }
    disconnect() {
        return this._close();
    }
    onclose(t, n) {
        this.cleanup(),
            this.backoff.reset(),
            (this._readyState = "closed"),
            this.emitReserved("close", t, n),
            this._reconnection && !this.skipReconnect && this.reconnect();
    }
    reconnect() {
        if (this._reconnecting || this.skipReconnect) return this;
        const t = this;
        if (this.backoff.attempts >= this._reconnectionAttempts)
            this.backoff.reset(),
                this.emitReserved("reconnect_failed"),
                (this._reconnecting = !1);
        else {
            const n = this.backoff.duration();
            this._reconnecting = !0;
            const r = this.setTimeoutFn(() => {
                t.skipReconnect ||
                    (this.emitReserved("reconnect_attempt", t.backoff.attempts),
                    !t.skipReconnect &&
                        t.open((i) => {
                            i
                                ? ((t._reconnecting = !1),
                                  t.reconnect(),
                                  this.emitReserved("reconnect_error", i))
                                : t.onreconnect();
                        }));
            }, n);
            this.opts.autoUnref && r.unref(),
                this.subs.push(() => {
                    this.clearTimeoutFn(r);
                });
        }
    }
    onreconnect() {
        const t = this.backoff.attempts;
        (this._reconnecting = !1),
            this.backoff.reset(),
            this.emitReserved("reconnect", t);
    }
}
const Hn = {};
function ai(e, t) {
    typeof e == "object" && ((t = e), (e = void 0)), (t = t || {});
    const n = Zh(e, t.path || "/socket.io"),
        r = n.source,
        i = n.id,
        o = n.path,
        s = Hn[i] && o in Hn[i].nsps,
        a = t.forceNew || t["force new connection"] || t.multiplex === !1 || s;
    let u;
    return (
        a ? (u = new Cs(r, t)) : (Hn[i] || (Hn[i] = new Cs(r, t)), (u = Hn[i])),
        n.query && !t.query && (t.query = n.queryKey),
        u.socket(n.path, t)
    );
}
Object.assign(ai, { Manager: Cs, Socket: Pd, io: ai, connect: ai });
function fm() {
    var e;
    try {
        e = JSON.parse(document.cookie);
    } catch {
        e = { rememberHost: !1, rememberName: !1, host: "", name: "" };
    }
    const t = D.useRef(null),
        [n, r] = D.useState(),
        [i, o] = D.useState(e.rememberName ? e.name : ""),
        [s, a] = D.useState(e.rememberHost ? e.host : ""),
        [u, f] = D.useState(e.rememberName),
        [g, h] = D.useState(e.rememberHost),
        [m, y] = D.useState(!1),
        [A, x] = D.useState(!1),
        B = (d) => {
            document.cookie = JSON.stringify({
                host: s,
                name: i,
                rememberHost: g,
                rememberName: u,
            });
            const c = ai(s, { rejectUnauthorized: !1 });
            y(!0),
                c.on("state", (p) => {
                    var k, v, C;
                    switch (p) {
                        case 0:
                            r(c), x(!0), y(!1);
                            break;
                        case 1:
                            (k = t.current) == null ||
                                k.message(
                                    "the game has already begun",
                                    "error",
                                    2,
                                    () => {
                                        y(!1);
                                    }
                                ),
                                c.disconnect();
                            break;
                        case 2:
                            (v = t.current) == null ||
                                v.message(
                                    "too many players on the server",
                                    "error",
                                    2,
                                    () => {
                                        y(!1);
                                    }
                                ),
                                c.disconnect();
                            break;
                        default:
                            (C = t.current) == null ||
                                C.message("unkown error", "error", 2),
                                c.disconnect(),
                                y(!1);
                            break;
                    }
                }),
                c.on("connect_error", () => {
                    var p;
                    (p = t.current) == null ||
                        p.message(
                            "the server does not exist or is unreachable",
                            "error",
                            2,
                            () => {
                                y(!1);
                            }
                        ),
                        c.disconnect();
                }),
                c.on("connect_timeout", () => {
                    var p;
                    (p = t.current) == null ||
                        p.message(
                            "the server took too long to respond",
                            "error",
                            2,
                            () => {
                                y(!1);
                            }
                        ),
                        c.disconnect();
                });
        };
    return n !== void 0 && A === !0
        ? l.jsx(kh, { socket: n, name: i })
        : l.jsxs(l.Fragment, {
              children: [
                  l.jsx(ud, { ref: t }),
                  l.jsxs("div", {
                      className: "entry",
                      children: [
                          l.jsxs("header", {
                              children: [
                                  "Welcome to the ",
                                  l.jsx("h3", { children: "MONOPOLY" }),
                                  " Game",
                              ],
                          }),
                          l.jsx("br", {}),
                          l.jsx("p", {
                              children: "please enter your ip and port:",
                          }),
                          l.jsx("input", {
                              type: "text",
                              id: "name",
                              onChange: (d) => a(d.currentTarget.value),
                              defaultValue: s,
                              placeholder: "enter ip",
                          }),
                          l.jsx("p", { children: "please enter your name:" }),
                          l.jsx("input", {
                              type: "text",
                              id: "name",
                              onChange: (d) => o(d.currentTarget.value),
                              defaultValue: i,
                              placeholder: "enter name",
                          }),
                          l.jsxs("h5", {
                              children: [
                                  "do you want your name to be remembered?",
                                  " ",
                                  l.jsx("input", {
                                      id: "rememberedName",
                                      checked: u,
                                      onChange: (d) =>
                                          f(d.currentTarget.checked),
                                      type: "checkbox",
                                  }),
                              ],
                          }),
                          l.jsxs("h5", {
                              children: [
                                  "do you want your host to be remembered?",
                                  " ",
                                  l.jsx("input", {
                                      id: "rememberedHost",
                                      checked: g,
                                      onChange: (d) =>
                                          h(d.currentTarget.checked),
                                      type: "checkbox",
                                  }),
                              ],
                          }),
                          l.jsx("center", {
                              children: l.jsx("button", {
                                  onClick: B,
                                  disabled: m,
                                  children: "join",
                              }),
                          }),
                      ],
                  }),
              ],
          });
}
document.title = "Monopoly";
Ao.createRoot(document.getElementById("root")).render(l.jsx(fm, {}));
