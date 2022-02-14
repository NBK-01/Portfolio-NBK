// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dDoOd":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "6791265e009ca087";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4vwoG":[function(require,module,exports) {
/**
 * @fileoverview Main file for draco3d package.
 */ var createEncoderModule = require('./draco_encoder_gltf_nodejs');
var createDecoderModule = require('./draco_decoder_gltf_nodejs');
module.exports = {
    createEncoderModule,
    createDecoderModule
};

},{"./draco_encoder_gltf_nodejs":"fzwrx","./draco_decoder_gltf_nodejs":"lK5Hq"}],"fzwrx":[function(require,module,exports) {
var global = arguments[3];
var process = require("process");
var __dirname = "node_modules/draco3dgltf";
var __filename = "node_modules/draco3dgltf/draco_encoder_gltf_nodejs.js";
var $jscomp = $jscomp || {
};
$jscomp.scope = {
};
$jscomp.arrayIteratorImpl = function(m) {
    var p = 0;
    return function() {
        return p < m.length ? {
            done: !1,
            value: m[p++]
        } : {
            done: !0
        };
    };
};
$jscomp.arrayIterator = function(m) {
    return {
        next: $jscomp.arrayIteratorImpl(m)
    };
};
$jscomp.makeIterator = function(m) {
    var p = "undefined" != typeof Symbol && Symbol.iterator && m[Symbol.iterator];
    return p ? p.call(m) : $jscomp.arrayIterator(m);
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = !1;
$jscomp.getGlobal = function(m) {
    m = [
        "object" == typeof globalThis && globalThis,
        m,
        "object" == typeof window && window,
        "object" == typeof self && self,
        "object" == typeof global && global
    ];
    for(var p = 0; p < m.length; ++p){
        var k = m[p];
        if (k && k.Math == Math) return k;
    }
    throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(m, p, k) {
    if (m == Array.prototype || m == Object.prototype) return m;
    m[p] = k.value;
    return m;
};
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {
};
$jscomp.propertyToPolyfillSymbol = {
};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function(m, p) {
    var k = $jscomp.propertyToPolyfillSymbol[p];
    if (null == k) return m[p];
    k = m[k];
    return void 0 !== k ? k : m[p];
};
$jscomp.polyfill = function(m, p, k, r) {
    p && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(m, p, k, r) : $jscomp.polyfillUnisolated(m, p, k, r));
};
$jscomp.polyfillUnisolated = function(m, p, k, r) {
    k = $jscomp.global;
    m = m.split(".");
    for(r = 0; r < m.length - 1; r++){
        var l = m[r];
        if (!(l in k)) return;
        k = k[l];
    }
    m = m[m.length - 1];
    r = k[m];
    p = p(r);
    p != r && null != p && $jscomp.defineProperty(k, m, {
        configurable: !0,
        writable: !0,
        value: p
    });
};
$jscomp.polyfillIsolated = function(m, p, k, r) {
    var l = m.split(".");
    m = 1 === l.length;
    r = l[0];
    r = !m && r in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
    for(var B = 0; B < l.length - 1; B++){
        var h = l[B];
        if (!(h in r)) return;
        r = r[h];
    }
    l = l[l.length - 1];
    k = $jscomp.IS_SYMBOL_NATIVE && "es6" === k ? r[l] : null;
    p = p(k);
    null != p && (m ? $jscomp.defineProperty($jscomp.polyfills, l, {
        configurable: !0,
        writable: !0,
        value: p
    }) : p !== k && (void 0 === $jscomp.propertyToPolyfillSymbol[l] && (k = 1000000000 * Math.random() >>> 0, $jscomp.propertyToPolyfillSymbol[l] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(l) : $jscomp.POLYFILL_PREFIX + k + "$" + l), $jscomp.defineProperty(r, $jscomp.propertyToPolyfillSymbol[l], {
        configurable: !0,
        writable: !0,
        value: p
    })));
};
$jscomp.polyfill("Promise", function(m) {
    function p() {
        this.batch_ = null;
    }
    function k(h) {
        return h instanceof l ? h : new l(function(q, v) {
            q(h);
        });
    }
    if (m && (!($jscomp.FORCE_POLYFILL_PROMISE || $jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION && "undefined" === typeof $jscomp.global.PromiseRejectionEvent) || !$jscomp.global.Promise || -1 === $jscomp.global.Promise.toString().indexOf("[native code]"))) return m;
    p.prototype.asyncExecute = function(h) {
        if (null == this.batch_) {
            this.batch_ = [];
            var q = this;
            this.asyncExecuteFunction(function() {
                q.executeBatch_();
            });
        }
        this.batch_.push(h);
    };
    var r = $jscomp.global.setTimeout;
    p.prototype.asyncExecuteFunction = function(h) {
        r(h, 0);
    };
    p.prototype.executeBatch_ = function() {
        for(; this.batch_ && this.batch_.length;){
            var h = this.batch_;
            this.batch_ = [];
            for(var q = 0; q < h.length; ++q){
                var v = h[q];
                h[q] = null;
                try {
                    v();
                } catch (C) {
                    this.asyncThrow_(C);
                }
            }
        }
        this.batch_ = null;
    };
    p.prototype.asyncThrow_ = function(h) {
        this.asyncExecuteFunction(function() {
            throw h;
        });
    };
    var l = function(h) {
        this.state_ = 0;
        this.result_ = void 0;
        this.onSettledCallbacks_ = [];
        this.isRejectionHandled_ = !1;
        var q = this.createResolveAndReject_();
        try {
            h(q.resolve, q.reject);
        } catch (v) {
            q.reject(v);
        }
    };
    l.prototype.createResolveAndReject_ = function() {
        function h(C) {
            return function(I) {
                v || (v = !0, C.call(q, I));
            };
        }
        var q = this, v = !1;
        return {
            resolve: h(this.resolveTo_),
            reject: h(this.reject_)
        };
    };
    l.prototype.resolveTo_ = function(h) {
        if (h === this) this.reject_(new TypeError("A Promise cannot resolve to itself"));
        else if (h instanceof l) this.settleSameAsPromise_(h);
        else {
            a: switch(typeof h){
                case "object":
                    var q = null != h;
                    break a;
                case "function":
                    q = !0;
                    break a;
                default:
                    q = !1;
            }
            q ? this.resolveToNonPromiseObj_(h) : this.fulfill_(h);
        }
    };
    l.prototype.resolveToNonPromiseObj_ = function(h) {
        var q = void 0;
        try {
            q = h.then;
        } catch (v) {
            this.reject_(v);
            return;
        }
        "function" == typeof q ? this.settleSameAsThenable_(q, h) : this.fulfill_(h);
    };
    l.prototype.reject_ = function(h) {
        this.settle_(2, h);
    };
    l.prototype.fulfill_ = function(h) {
        this.settle_(1, h);
    };
    l.prototype.settle_ = function(h, q) {
        if (0 != this.state_) throw Error("Cannot settle(" + h + ", " + q + "): Promise already settled in state" + this.state_);
        this.state_ = h;
        this.result_ = q;
        2 === this.state_ && this.scheduleUnhandledRejectionCheck_();
        this.executeOnSettledCallbacks_();
    };
    l.prototype.scheduleUnhandledRejectionCheck_ = function() {
        var h = this;
        r(function() {
            if (h.notifyUnhandledRejection_()) {
                var q = $jscomp.global.console;
                "undefined" !== typeof q && q.error(h.result_);
            }
        }, 1);
    };
    l.prototype.notifyUnhandledRejection_ = function() {
        if (this.isRejectionHandled_) return !1;
        var h = $jscomp.global.CustomEvent, q = $jscomp.global.Event, v = $jscomp.global.dispatchEvent;
        if ("undefined" === typeof v) return !0;
        "function" === typeof h ? h = new h("unhandledrejection", {
            cancelable: !0
        }) : "function" === typeof q ? h = new q("unhandledrejection", {
            cancelable: !0
        }) : (h = $jscomp.global.document.createEvent("CustomEvent"), h.initCustomEvent("unhandledrejection", !1, !0, h));
        h.promise = this;
        h.reason = this.result_;
        return v(h);
    };
    l.prototype.executeOnSettledCallbacks_ = function() {
        if (null != this.onSettledCallbacks_) {
            for(var h = 0; h < this.onSettledCallbacks_.length; ++h)B.asyncExecute(this.onSettledCallbacks_[h]);
            this.onSettledCallbacks_ = null;
        }
    };
    var B = new p;
    l.prototype.settleSameAsPromise_ = function(h) {
        var q = this.createResolveAndReject_();
        h.callWhenSettled_(q.resolve, q.reject);
    };
    l.prototype.settleSameAsThenable_ = function(h, q) {
        var v = this.createResolveAndReject_();
        try {
            h.call(q, v.resolve, v.reject);
        } catch (C) {
            v.reject(C);
        }
    };
    l.prototype.then = function(h, q) {
        function v(w, D) {
            return "function" == typeof w ? function(S) {
                try {
                    C(w(S));
                } catch (O) {
                    I(O);
                }
            } : D;
        }
        var C, I, T = new l(function(w, D) {
            C = w;
            I = D;
        });
        this.callWhenSettled_(v(h, C), v(q, I));
        return T;
    };
    l.prototype.catch = function(h) {
        return this.then(void 0, h);
    };
    l.prototype.callWhenSettled_ = function(h, q) {
        function v() {
            switch(C.state_){
                case 1:
                    h(C.result_);
                    break;
                case 2:
                    q(C.result_);
                    break;
                default:
                    throw Error("Unexpected state: " + C.state_);
            }
        }
        var C = this;
        null == this.onSettledCallbacks_ ? B.asyncExecute(v) : this.onSettledCallbacks_.push(v);
        this.isRejectionHandled_ = !0;
    };
    l.resolve = k;
    l.reject = function(h) {
        return new l(function(q, v) {
            v(h);
        });
    };
    l.race = function(h) {
        return new l(function(q, v) {
            for(var C = $jscomp.makeIterator(h), I = C.next(); !I.done; I = C.next())k(I.value).callWhenSettled_(q, v);
        });
    };
    l.all = function(h) {
        var q = $jscomp.makeIterator(h), v = q.next();
        return v.done ? k([]) : new l(function(C, I) {
            function T(S) {
                return function(O) {
                    w[S] = O;
                    D--;
                    0 == D && C(w);
                };
            }
            var w = [], D = 0;
            do w.push(void 0), D++, k(v.value).callWhenSettled_(T(w.length - 1), I), v = q.next();
            while (!v.done)
        });
    };
    return l;
}, "es6", "es3");
$jscomp.checkStringArgs = function(m, p, k) {
    if (null == m) throw new TypeError("The 'this' value for String.prototype." + k + " must not be null or undefined");
    if (p instanceof RegExp) throw new TypeError("First argument to String.prototype." + k + " must not be a regular expression");
    return m + "";
};
$jscomp.polyfill("String.prototype.startsWith", function(m) {
    return m ? m : function(p, k) {
        var r = $jscomp.checkStringArgs(this, p, "startsWith");
        p += "";
        var l = r.length, B = p.length;
        k = Math.max(0, Math.min(k | 0, r.length));
        for(var h = 0; h < B && k < l;)if (r[k++] != p[h++]) return !1;
        return h >= B;
    };
}, "es6", "es3");
$jscomp.polyfill("Array.prototype.copyWithin", function(m) {
    function p(k) {
        k = Number(k);
        return Infinity === k || -Infinity === k ? k : k | 0;
    }
    return m ? m : function(k, r, l) {
        var B = this.length;
        k = p(k);
        r = p(r);
        l = void 0 === l ? B : p(l);
        k = 0 > k ? Math.max(B + k, 0) : Math.min(k, B);
        r = 0 > r ? Math.max(B + r, 0) : Math.min(r, B);
        l = 0 > l ? Math.max(B + l, 0) : Math.min(l, B);
        if (k < r) for(; r < l;)r in this ? this[k++] = this[r++] : (delete this[k++], r++);
        else for(l = Math.min(l, B + r - k), k += l - r; l > r;)--l in this ? this[--k] = this[l] : delete this[--k];
        return this;
    };
}, "es6", "es3");
$jscomp.typedArrayCopyWithin = function(m) {
    return m ? m : Array.prototype.copyWithin;
};
$jscomp.polyfill("Int8Array.prototype.copyWithin", $jscomp.typedArrayCopyWithin, "es6", "es5");
$jscomp.polyfill("Uint8Array.prototype.copyWithin", $jscomp.typedArrayCopyWithin, "es6", "es5");
$jscomp.polyfill("Uint8ClampedArray.prototype.copyWithin", $jscomp.typedArrayCopyWithin, "es6", "es5");
$jscomp.polyfill("Int16Array.prototype.copyWithin", $jscomp.typedArrayCopyWithin, "es6", "es5");
$jscomp.polyfill("Uint16Array.prototype.copyWithin", $jscomp.typedArrayCopyWithin, "es6", "es5");
$jscomp.polyfill("Int32Array.prototype.copyWithin", $jscomp.typedArrayCopyWithin, "es6", "es5");
$jscomp.polyfill("Uint32Array.prototype.copyWithin", $jscomp.typedArrayCopyWithin, "es6", "es5");
$jscomp.polyfill("Float32Array.prototype.copyWithin", $jscomp.typedArrayCopyWithin, "es6", "es5");
$jscomp.polyfill("Float64Array.prototype.copyWithin", $jscomp.typedArrayCopyWithin, "es6", "es5");
var DracoEncoderModule = function() {
    var m = "undefined" !== typeof document && document.currentScript ? document.currentScript.src : void 0;
    "undefined" !== typeof __filename && (m = m || __filename);
    return function(p) {
        function k(f) {
            return a.locateFile ? a.locateFile(f, L) : L + f;
        }
        function r(f, b) {
            f || B("Assertion failed: " + b);
        }
        function l(f) {
            sa = f;
            a.HEAP8 = P = new Int8Array(f);
            a.HEAP16 = ka = new Int16Array(f);
            a.HEAP32 = K = new Int32Array(f);
            a.HEAPU8 = la = new Uint8Array(f);
            a.HEAPU16 = new Uint16Array(f);
            a.HEAPU32 = new Uint32Array(f);
            a.HEAPF32 = ma = new Float32Array(f);
            a.HEAPF64 = new Float64Array(f);
        }
        function B(f) {
            if (a.onAbort) a.onAbort(f);
            f = "Aborted(" + f + ")";
            Y(f);
            ta = !0;
            f = new WebAssembly.RuntimeError(f + ". Build with -s ASSERTIONS=1 for more info.");
            na(f);
            throw f;
        }
        function h(f) {
            try {
                if (f == J && Z) return new Uint8Array(Z);
                if (oa) return oa(f);
                throw "both async and sync fetching of the wasm failed";
            } catch (b) {
                B(b);
            }
        }
        function q() {
            if (!Z && (ua || aa)) {
                if ("function" === typeof fetch && !J.startsWith("file://")) return fetch(J, {
                    credentials: "same-origin"
                }).then(function(f) {
                    if (!f.ok) throw "failed to load wasm binary file at '" + J + "'";
                    return f.arrayBuffer();
                }).catch(function() {
                    return h(J);
                });
                if (pa) return new Promise(function(f, b) {
                    pa(J, function(c) {
                        f(new Uint8Array(c));
                    }, b);
                });
            }
            return Promise.resolve().then(function() {
                return h(J);
            });
        }
        function v(f) {
            for(; 0 < f.length;){
                var b = f.shift();
                if ("function" == typeof b) b(a);
                else {
                    var c = b.func;
                    "number" === typeof c ? void 0 === b.arg ? C(c)() : C(c)(b.arg) : c(void 0 === b.arg ? null : b.arg);
                }
            }
        }
        function C(f) {
            var b = ea[f];
            b || (f >= ea.length && (ea.length = f + 1), ea[f] = b = va.get(f));
            return b;
        }
        function I(f) {
            this.excPtr = f;
            this.ptr = f - 16;
            this.set_type = function(b) {
                K[this.ptr + 4 >> 2] = b;
            };
            this.get_type = function() {
                return K[this.ptr + 4 >> 2];
            };
            this.set_destructor = function(b) {
                K[this.ptr + 8 >> 2] = b;
            };
            this.get_destructor = function() {
                return K[this.ptr + 8 >> 2];
            };
            this.set_refcount = function(b) {
                K[this.ptr >> 2] = b;
            };
            this.set_caught = function(b) {
                P[this.ptr + 12 >> 0] = b ? 1 : 0;
            };
            this.get_caught = function() {
                return 0 != P[this.ptr + 12 >> 0];
            };
            this.set_rethrown = function(b) {
                P[this.ptr + 13 >> 0] = b ? 1 : 0;
            };
            this.get_rethrown = function() {
                return 0 != P[this.ptr + 13 >> 0];
            };
            this.init = function(b, c) {
                this.set_type(b);
                this.set_destructor(c);
                this.set_refcount(0);
                this.set_caught(!1);
                this.set_rethrown(!1);
            };
            this.add_ref = function() {
                K[this.ptr >> 2] += 1;
            };
            this.release_ref = function() {
                var b = K[this.ptr >> 2];
                K[this.ptr >> 2] = b - 1;
                return 1 === b;
            };
        }
        function T(f) {
            function b() {
                if (!fa && (fa = !0, a.calledRun = !0, !ta)) {
                    wa = !0;
                    v(qa);
                    xa(a);
                    if (a.onRuntimeInitialized) a.onRuntimeInitialized();
                    if (a.postRun) for("function" == typeof a.postRun && (a.postRun = [
                        a.postRun
                    ]); a.postRun.length;)ya.unshift(a.postRun.shift());
                    v(ya);
                }
            }
            if (!(0 < U)) {
                if (a.preRun) for("function" == typeof a.preRun && (a.preRun = [
                    a.preRun
                ]); a.preRun.length;)za.unshift(a.preRun.shift());
                v(za);
                0 < U || (a.setStatus ? (a.setStatus("Running..."), setTimeout(function() {
                    setTimeout(function() {
                        a.setStatus("");
                    }, 1);
                    b();
                }, 1)) : b());
            }
        }
        function w() {
        }
        function D(f) {
            return (f || w).__cache__;
        }
        function S(f, b) {
            var c = D(b), d = c[f];
            if (d) return d;
            d = Object.create((b || w).prototype);
            d.ptr = f;
            return c[f] = d;
        }
        function O(f) {
            if ("string" === typeof f) {
                for(var b = 0, c = 0; c < f.length; ++c){
                    var d = f.charCodeAt(c);
                    55296 <= d && 57343 >= d && (d = 65536 + ((d & 1023) << 10) | f.charCodeAt(++c) & 1023);
                    127 >= d ? ++b : b = 2047 >= d ? b + 2 : 65535 >= d ? b + 3 : b + 4;
                }
                b = Array(b + 1);
                c = 0;
                d = b.length;
                if (0 < d) {
                    d = c + d - 1;
                    for(var e = 0; e < f.length; ++e){
                        var g = f.charCodeAt(e);
                        if (55296 <= g && 57343 >= g) {
                            var t = f.charCodeAt(++e);
                            g = 65536 + ((g & 1023) << 10) | t & 1023;
                        }
                        if (127 >= g) {
                            if (c >= d) break;
                            b[c++] = g;
                        } else {
                            if (2047 >= g) {
                                if (c + 1 >= d) break;
                                b[c++] = 192 | g >> 6;
                            } else {
                                if (65535 >= g) {
                                    if (c + 2 >= d) break;
                                    b[c++] = 224 | g >> 12;
                                } else {
                                    if (c + 3 >= d) break;
                                    b[c++] = 240 | g >> 18;
                                    b[c++] = 128 | g >> 12 & 63;
                                }
                                b[c++] = 128 | g >> 6 & 63;
                            }
                            b[c++] = 128 | g & 63;
                        }
                    }
                    b[c] = 0;
                }
                f = n.alloc(b, P);
                n.copy(b, P, f);
                return f;
            }
            return f;
        }
        function ha(f) {
            if ("object" === typeof f) {
                var b = n.alloc(f, P);
                n.copy(f, P, b);
                return b;
            }
            return f;
        }
        function ia(f) {
            if ("object" === typeof f) {
                var b = n.alloc(f, ka);
                n.copy(f, ka, b);
                return b;
            }
            return f;
        }
        function V(f) {
            if ("object" === typeof f) {
                var b = n.alloc(f, K);
                n.copy(f, K, b);
                return b;
            }
            return f;
        }
        function ba(f) {
            if ("object" === typeof f) {
                var b = n.alloc(f, ma);
                n.copy(f, ma, b);
                return b;
            }
            return f;
        }
        function Q() {
            throw "cannot construct a VoidPtr, no constructor in IDL";
        }
        function M() {
            this.ptr = Aa();
            D(M)[this.ptr] = this;
        }
        function z() {
            this.ptr = Ba();
            D(z)[this.ptr] = this;
        }
        function G() {
            this.ptr = Ca();
            D(G)[this.ptr] = this;
        }
        function E() {
            this.ptr = Da();
            D(E)[this.ptr] = this;
        }
        function N() {
            this.ptr = Ea();
            D(N)[this.ptr] = this;
        }
        function H() {
            this.ptr = Fa();
            D(H)[this.ptr] = this;
        }
        function F() {
            this.ptr = Ga();
            D(F)[this.ptr] = this;
        }
        function x() {
            this.ptr = Ha();
            D(x)[this.ptr] = this;
        }
        function u() {
            this.ptr = Ia();
            D(u)[this.ptr] = this;
        }
        function y() {
            this.ptr = Ja();
            D(y)[this.ptr] = this;
        }
        function A(f) {
            f && "object" === typeof f && (f = f.ptr);
            this.ptr = Ka(f);
            D(A)[this.ptr] = this;
        }
        p = p || {
        };
        var a = "undefined" !== typeof p ? p : {
        }, xa, na;
        a.ready = new Promise(function(f, b) {
            xa = f;
            na = b;
        });
        var La = !1, Ma = !1;
        a.onRuntimeInitialized = function() {
            La = !0;
            if (Ma && "function" === typeof a.onModuleLoaded) a.onModuleLoaded(a);
        };
        a.onModuleParsed = function() {
            Ma = !0;
            if (La && "function" === typeof a.onModuleLoaded) a.onModuleLoaded(a);
        };
        a.isVersionSupported = function(f) {
            if ("string" !== typeof f) return !1;
            f = f.split(".");
            return 2 > f.length || 3 < f.length ? !1 : 1 == f[0] && 0 <= f[1] && 5 >= f[1] ? !0 : 0 != f[0] || 10 < f[1] ? !1 : !0;
        };
        var ca = {
        }, R;
        for(R in a)a.hasOwnProperty(R) && (ca[R] = a[R]);
        var ua = "object" === typeof window, aa = "function" === typeof importScripts, L = "", W, X;
        if ("object" === typeof process && "object" === typeof process.versions && "string" === typeof process.versions.node) {
            L = aa ? require("path").dirname(L) + "/" : __dirname + "/";
            var Na = function(f, b) {
                W || (W = require("fs"));
                X || (X = require("path"));
                f = X.normalize(f);
                return W.readFileSync(f, b ? null : "utf8");
            };
            var oa = function(f) {
                f = Na(f, !0);
                f.buffer || (f = new Uint8Array(f));
                r(f.buffer);
                return f;
            };
            var pa = function(f, b, c) {
                W || (W = require("fs"));
                X || (X = require("path"));
                f = X.normalize(f);
                W.readFile(f, function(d, e) {
                    d ? c(d) : b(e.buffer);
                });
            };
            1 < process.argv.length && process.argv[1].replace(/\\/g, "/");
            process.argv.slice(2);
            a.inspect = function() {
                return "[Emscripten Module object]";
            };
        } else if (ua || aa) aa ? L = self.location.href : "undefined" !== typeof document && document.currentScript && (L = document.currentScript.src), m && (L = m), L = 0 !== L.indexOf("blob:") ? L.substr(0, L.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", Na = function(f) {
            var b = new XMLHttpRequest;
            b.open("GET", f, !1);
            b.send(null);
            return b.responseText;
        }, aa && (oa = function(f) {
            var b = new XMLHttpRequest;
            b.open("GET", f, !1);
            b.responseType = "arraybuffer";
            b.send(null);
            return new Uint8Array(b.response);
        }), pa = function(f, b, c) {
            var d = new XMLHttpRequest;
            d.open("GET", f, !0);
            d.responseType = "arraybuffer";
            d.onload = function() {
                200 == d.status || 0 == d.status && d.response ? b(d.response) : c();
            };
            d.onerror = c;
            d.send(null);
        };
        a.print || console.log.bind(console);
        var Y = a.printErr || console.warn.bind(console);
        for(R in ca)ca.hasOwnProperty(R) && (a[R] = ca[R]);
        ca = null;
        var Z;
        a.wasmBinary && (Z = a.wasmBinary);
        "object" !== typeof WebAssembly && B("no native wasm support detected");
        var ja, ta = !1, sa, P, la, ka, K, ma, va, za = [], qa = [], ya = [], wa = !1, U = 0, ra = null, da = null;
        a.preloadedImages = {
        };
        a.preloadedAudios = {
        };
        var J = "draco_encoder.wasm";
        J.startsWith("data:application/octet-stream;base64,") || (J = k(J));
        var ea = [], rc = 0, sc = {
            e: function(f) {
                return Oa(f + 16) + 16;
            },
            d: function(f, b, c) {
                new I(f).init(b, c);
                rc++;
                throw f;
            },
            a: function() {
                B("");
            },
            b: function(f, b, c) {
                la.copyWithin(f, b, b + c);
            },
            c: function(f) {
                var b = la.length;
                f >>>= 0;
                if (2147483648 < f) return !1;
                for(var c = 1; 4 >= c; c *= 2){
                    var d = b * (1 + 0.2 / c);
                    d = Math.min(d, f + 100663296);
                    var e = Math, g = e.min;
                    d = Math.max(f, d);
                    0 < d % 65536 && (d += 65536 - d % 65536);
                    e = g.call(e, 2147483648, d);
                    a: {
                        try {
                            ja.grow(e - sa.byteLength + 65535 >>> 16);
                            l(ja.buffer);
                            var t = 1;
                            break a;
                        } catch (tc) {
                        }
                        t = void 0;
                    }
                    if (t) return !0;
                }
                return !1;
            }
        };
        (function() {
            function f(e, g) {
                a.asm = e.exports;
                ja = a.asm.f;
                l(ja.buffer);
                va = a.asm.h;
                qa.unshift(a.asm.g);
                U--;
                a.monitorRunDependencies && a.monitorRunDependencies(U);
                0 == U && (null !== ra && (clearInterval(ra), ra = null), da && (e = da, da = null, e()));
            }
            function b(e) {
                f(e.instance);
            }
            function c(e) {
                return q().then(function(g) {
                    return WebAssembly.instantiate(g, d);
                }).then(function(g) {
                    return g;
                }).then(e, function(g) {
                    Y("failed to asynchronously prepare wasm: " + g);
                    B(g);
                });
            }
            var d = {
                a: sc
            };
            U++;
            a.monitorRunDependencies && a.monitorRunDependencies(U);
            if (a.instantiateWasm) try {
                return a.instantiateWasm(d, f);
            } catch (e) {
                return Y("Module.instantiateWasm callback failed with error: " + e), !1;
            }
            (function() {
                return Z || "function" !== typeof WebAssembly.instantiateStreaming || J.startsWith("data:application/octet-stream;base64,") || J.startsWith("file://") || "function" !== typeof fetch ? c(b) : fetch(J, {
                    credentials: "same-origin"
                }).then(function(e) {
                    return WebAssembly.instantiateStreaming(e, d).then(b, function(g) {
                        Y("wasm streaming compile failed: " + g);
                        Y("falling back to ArrayBuffer instantiation");
                        return c(b);
                    });
                });
            })().catch(na);
            return {
            };
        })();
        a.___wasm_call_ctors = function() {
            return (a.___wasm_call_ctors = a.asm.g).apply(null, arguments);
        };
        var Pa = a._emscripten_bind_VoidPtr___destroy___0 = function() {
            return (Pa = a._emscripten_bind_VoidPtr___destroy___0 = a.asm.i).apply(null, arguments);
        }, Aa = a._emscripten_bind_GeometryAttribute_GeometryAttribute_0 = function() {
            return (Aa = a._emscripten_bind_GeometryAttribute_GeometryAttribute_0 = a.asm.j).apply(null, arguments);
        }, Qa = a._emscripten_bind_GeometryAttribute___destroy___0 = function() {
            return (Qa = a._emscripten_bind_GeometryAttribute___destroy___0 = a.asm.k).apply(null, arguments);
        }, Ba = a._emscripten_bind_PointAttribute_PointAttribute_0 = function() {
            return (Ba = a._emscripten_bind_PointAttribute_PointAttribute_0 = a.asm.l).apply(null, arguments);
        }, Ra = a._emscripten_bind_PointAttribute_size_0 = function() {
            return (Ra = a._emscripten_bind_PointAttribute_size_0 = a.asm.m).apply(null, arguments);
        }, Sa = a._emscripten_bind_PointAttribute_attribute_type_0 = function() {
            return (Sa = a._emscripten_bind_PointAttribute_attribute_type_0 = a.asm.n).apply(null, arguments);
        }, Ta = a._emscripten_bind_PointAttribute_data_type_0 = function() {
            return (Ta = a._emscripten_bind_PointAttribute_data_type_0 = a.asm.o).apply(null, arguments);
        }, Ua = a._emscripten_bind_PointAttribute_num_components_0 = function() {
            return (Ua = a._emscripten_bind_PointAttribute_num_components_0 = a.asm.p).apply(null, arguments);
        }, Va = a._emscripten_bind_PointAttribute_normalized_0 = function() {
            return (Va = a._emscripten_bind_PointAttribute_normalized_0 = a.asm.q).apply(null, arguments);
        }, Wa = a._emscripten_bind_PointAttribute_byte_stride_0 = function() {
            return (Wa = a._emscripten_bind_PointAttribute_byte_stride_0 = a.asm.r).apply(null, arguments);
        }, Xa = a._emscripten_bind_PointAttribute_byte_offset_0 = function() {
            return (Xa = a._emscripten_bind_PointAttribute_byte_offset_0 = a.asm.s).apply(null, arguments);
        }, Ya = a._emscripten_bind_PointAttribute_unique_id_0 = function() {
            return (Ya = a._emscripten_bind_PointAttribute_unique_id_0 = a.asm.t).apply(null, arguments);
        }, Za = a._emscripten_bind_PointAttribute___destroy___0 = function() {
            return (Za = a._emscripten_bind_PointAttribute___destroy___0 = a.asm.u).apply(null, arguments);
        }, Ca = a._emscripten_bind_PointCloud_PointCloud_0 = function() {
            return (Ca = a._emscripten_bind_PointCloud_PointCloud_0 = a.asm.v).apply(null, arguments);
        }, $a = a._emscripten_bind_PointCloud_num_attributes_0 = function() {
            return ($a = a._emscripten_bind_PointCloud_num_attributes_0 = a.asm.w).apply(null, arguments);
        }, ab = a._emscripten_bind_PointCloud_num_points_0 = function() {
            return (ab = a._emscripten_bind_PointCloud_num_points_0 = a.asm.x).apply(null, arguments);
        }, bb = a._emscripten_bind_PointCloud___destroy___0 = function() {
            return (bb = a._emscripten_bind_PointCloud___destroy___0 = a.asm.y).apply(null, arguments);
        }, Da = a._emscripten_bind_Mesh_Mesh_0 = function() {
            return (Da = a._emscripten_bind_Mesh_Mesh_0 = a.asm.z).apply(null, arguments);
        }, cb = a._emscripten_bind_Mesh_num_faces_0 = function() {
            return (cb = a._emscripten_bind_Mesh_num_faces_0 = a.asm.A).apply(null, arguments);
        }, db = a._emscripten_bind_Mesh_num_attributes_0 = function() {
            return (db = a._emscripten_bind_Mesh_num_attributes_0 = a.asm.B).apply(null, arguments);
        }, eb = a._emscripten_bind_Mesh_num_points_0 = function() {
            return (eb = a._emscripten_bind_Mesh_num_points_0 = a.asm.C).apply(null, arguments);
        }, fb = a._emscripten_bind_Mesh_set_num_points_1 = function() {
            return (fb = a._emscripten_bind_Mesh_set_num_points_1 = a.asm.D).apply(null, arguments);
        }, gb = a._emscripten_bind_Mesh___destroy___0 = function() {
            return (gb = a._emscripten_bind_Mesh___destroy___0 = a.asm.E).apply(null, arguments);
        }, Ea = a._emscripten_bind_Metadata_Metadata_0 = function() {
            return (Ea = a._emscripten_bind_Metadata_Metadata_0 = a.asm.F).apply(null, arguments);
        }, hb = a._emscripten_bind_Metadata___destroy___0 = function() {
            return (hb = a._emscripten_bind_Metadata___destroy___0 = a.asm.G).apply(null, arguments);
        }, Fa = a._emscripten_bind_DracoInt8Array_DracoInt8Array_0 = function() {
            return (Fa = a._emscripten_bind_DracoInt8Array_DracoInt8Array_0 = a.asm.H).apply(null, arguments);
        }, ib = a._emscripten_bind_DracoInt8Array_GetValue_1 = function() {
            return (ib = a._emscripten_bind_DracoInt8Array_GetValue_1 = a.asm.I).apply(null, arguments);
        }, jb = a._emscripten_bind_DracoInt8Array_size_0 = function() {
            return (jb = a._emscripten_bind_DracoInt8Array_size_0 = a.asm.J).apply(null, arguments);
        }, kb = a._emscripten_bind_DracoInt8Array___destroy___0 = function() {
            return (kb = a._emscripten_bind_DracoInt8Array___destroy___0 = a.asm.K).apply(null, arguments);
        }, Ga = a._emscripten_bind_MetadataBuilder_MetadataBuilder_0 = function() {
            return (Ga = a._emscripten_bind_MetadataBuilder_MetadataBuilder_0 = a.asm.L).apply(null, arguments);
        }, lb = a._emscripten_bind_MetadataBuilder_AddStringEntry_3 = function() {
            return (lb = a._emscripten_bind_MetadataBuilder_AddStringEntry_3 = a.asm.M).apply(null, arguments);
        }, mb = a._emscripten_bind_MetadataBuilder_AddIntEntry_3 = function() {
            return (mb = a._emscripten_bind_MetadataBuilder_AddIntEntry_3 = a.asm.N).apply(null, arguments);
        }, nb = a._emscripten_bind_MetadataBuilder_AddIntEntryArray_4 = function() {
            return (nb = a._emscripten_bind_MetadataBuilder_AddIntEntryArray_4 = a.asm.O).apply(null, arguments);
        }, ob = a._emscripten_bind_MetadataBuilder_AddDoubleEntry_3 = function() {
            return (ob = a._emscripten_bind_MetadataBuilder_AddDoubleEntry_3 = a.asm.P).apply(null, arguments);
        }, pb = a._emscripten_bind_MetadataBuilder___destroy___0 = function() {
            return (pb = a._emscripten_bind_MetadataBuilder___destroy___0 = a.asm.Q).apply(null, arguments);
        }, Ha = a._emscripten_bind_PointCloudBuilder_PointCloudBuilder_0 = function() {
            return (Ha = a._emscripten_bind_PointCloudBuilder_PointCloudBuilder_0 = a.asm.R).apply(null, arguments);
        }, qb = a._emscripten_bind_PointCloudBuilder_AddFloatAttribute_5 = function() {
            return (qb = a._emscripten_bind_PointCloudBuilder_AddFloatAttribute_5 = a.asm.S).apply(null, arguments);
        }, rb = a._emscripten_bind_PointCloudBuilder_AddInt8Attribute_5 = function() {
            return (rb = a._emscripten_bind_PointCloudBuilder_AddInt8Attribute_5 = a.asm.T).apply(null, arguments);
        }, sb = a._emscripten_bind_PointCloudBuilder_AddUInt8Attribute_5 = function() {
            return (sb = a._emscripten_bind_PointCloudBuilder_AddUInt8Attribute_5 = a.asm.U).apply(null, arguments);
        }, tb = a._emscripten_bind_PointCloudBuilder_AddInt16Attribute_5 = function() {
            return (tb = a._emscripten_bind_PointCloudBuilder_AddInt16Attribute_5 = a.asm.V).apply(null, arguments);
        }, ub = a._emscripten_bind_PointCloudBuilder_AddUInt16Attribute_5 = function() {
            return (ub = a._emscripten_bind_PointCloudBuilder_AddUInt16Attribute_5 = a.asm.W).apply(null, arguments);
        }, vb = a._emscripten_bind_PointCloudBuilder_AddInt32Attribute_5 = function() {
            return (vb = a._emscripten_bind_PointCloudBuilder_AddInt32Attribute_5 = a.asm.X).apply(null, arguments);
        }, wb = a._emscripten_bind_PointCloudBuilder_AddUInt32Attribute_5 = function() {
            return (wb = a._emscripten_bind_PointCloudBuilder_AddUInt32Attribute_5 = a.asm.Y).apply(null, arguments);
        }, xb = a._emscripten_bind_PointCloudBuilder_AddMetadata_2 = function() {
            return (xb = a._emscripten_bind_PointCloudBuilder_AddMetadata_2 = a.asm.Z).apply(null, arguments);
        }, yb = a._emscripten_bind_PointCloudBuilder_SetMetadataForAttribute_3 = function() {
            return (yb = a._emscripten_bind_PointCloudBuilder_SetMetadataForAttribute_3 = a.asm._).apply(null, arguments);
        }, zb = a._emscripten_bind_PointCloudBuilder___destroy___0 = function() {
            return (zb = a._emscripten_bind_PointCloudBuilder___destroy___0 = a.asm.$).apply(null, arguments);
        }, Ia = a._emscripten_bind_MeshBuilder_MeshBuilder_0 = function() {
            return (Ia = a._emscripten_bind_MeshBuilder_MeshBuilder_0 = a.asm.aa).apply(null, arguments);
        }, Ab = a._emscripten_bind_MeshBuilder_AddFacesToMesh_3 = function() {
            return (Ab = a._emscripten_bind_MeshBuilder_AddFacesToMesh_3 = a.asm.ba).apply(null, arguments);
        }, Bb = a._emscripten_bind_MeshBuilder_AddFloatAttributeToMesh_5 = function() {
            return (Bb = a._emscripten_bind_MeshBuilder_AddFloatAttributeToMesh_5 = a.asm.ca).apply(null, arguments);
        }, Cb = a._emscripten_bind_MeshBuilder_AddInt32AttributeToMesh_5 = function() {
            return (Cb = a._emscripten_bind_MeshBuilder_AddInt32AttributeToMesh_5 = a.asm.da).apply(null, arguments);
        }, Db = a._emscripten_bind_MeshBuilder_AddMetadataToMesh_2 = function() {
            return (Db = a._emscripten_bind_MeshBuilder_AddMetadataToMesh_2 = a.asm.ea).apply(null, arguments);
        }, Eb = a._emscripten_bind_MeshBuilder_AddFloatAttribute_5 = function() {
            return (Eb = a._emscripten_bind_MeshBuilder_AddFloatAttribute_5 = a.asm.fa).apply(null, arguments);
        }, Fb = a._emscripten_bind_MeshBuilder_AddInt8Attribute_5 = function() {
            return (Fb = a._emscripten_bind_MeshBuilder_AddInt8Attribute_5 = a.asm.ga).apply(null, arguments);
        }, Gb = a._emscripten_bind_MeshBuilder_AddUInt8Attribute_5 = function() {
            return (Gb = a._emscripten_bind_MeshBuilder_AddUInt8Attribute_5 = a.asm.ha).apply(null, arguments);
        }, Hb = a._emscripten_bind_MeshBuilder_AddInt16Attribute_5 = function() {
            return (Hb = a._emscripten_bind_MeshBuilder_AddInt16Attribute_5 = a.asm.ia).apply(null, arguments);
        }, Ib = a._emscripten_bind_MeshBuilder_AddUInt16Attribute_5 = function() {
            return (Ib = a._emscripten_bind_MeshBuilder_AddUInt16Attribute_5 = a.asm.ja).apply(null, arguments);
        }, Jb = a._emscripten_bind_MeshBuilder_AddInt32Attribute_5 = function() {
            return (Jb = a._emscripten_bind_MeshBuilder_AddInt32Attribute_5 = a.asm.ka).apply(null, arguments);
        }, Kb = a._emscripten_bind_MeshBuilder_AddUInt32Attribute_5 = function() {
            return (Kb = a._emscripten_bind_MeshBuilder_AddUInt32Attribute_5 = a.asm.la).apply(null, arguments);
        }, Lb = a._emscripten_bind_MeshBuilder_AddMetadata_2 = function() {
            return (Lb = a._emscripten_bind_MeshBuilder_AddMetadata_2 = a.asm.ma).apply(null, arguments);
        }, Mb = a._emscripten_bind_MeshBuilder_SetMetadataForAttribute_3 = function() {
            return (Mb = a._emscripten_bind_MeshBuilder_SetMetadataForAttribute_3 = a.asm.na).apply(null, arguments);
        }, Nb = a._emscripten_bind_MeshBuilder___destroy___0 = function() {
            return (Nb = a._emscripten_bind_MeshBuilder___destroy___0 = a.asm.oa).apply(null, arguments);
        }, Ja = a._emscripten_bind_Encoder_Encoder_0 = function() {
            return (Ja = a._emscripten_bind_Encoder_Encoder_0 = a.asm.pa).apply(null, arguments);
        }, Ob = a._emscripten_bind_Encoder_SetEncodingMethod_1 = function() {
            return (Ob = a._emscripten_bind_Encoder_SetEncodingMethod_1 = a.asm.qa).apply(null, arguments);
        }, Pb = a._emscripten_bind_Encoder_SetAttributeQuantization_2 = function() {
            return (Pb = a._emscripten_bind_Encoder_SetAttributeQuantization_2 = a.asm.ra).apply(null, arguments);
        }, Qb = a._emscripten_bind_Encoder_SetAttributeExplicitQuantization_5 = function() {
            return (Qb = a._emscripten_bind_Encoder_SetAttributeExplicitQuantization_5 = a.asm.sa).apply(null, arguments);
        }, Rb = a._emscripten_bind_Encoder_SetSpeedOptions_2 = function() {
            return (Rb = a._emscripten_bind_Encoder_SetSpeedOptions_2 = a.asm.ta).apply(null, arguments);
        }, Sb = a._emscripten_bind_Encoder_SetTrackEncodedProperties_1 = function() {
            return (Sb = a._emscripten_bind_Encoder_SetTrackEncodedProperties_1 = a.asm.ua).apply(null, arguments);
        }, Tb = a._emscripten_bind_Encoder_EncodeMeshToDracoBuffer_2 = function() {
            return (Tb = a._emscripten_bind_Encoder_EncodeMeshToDracoBuffer_2 = a.asm.va).apply(null, arguments);
        }, Ub = a._emscripten_bind_Encoder_EncodePointCloudToDracoBuffer_3 = function() {
            return (Ub = a._emscripten_bind_Encoder_EncodePointCloudToDracoBuffer_3 = a.asm.wa).apply(null, arguments);
        }, Vb = a._emscripten_bind_Encoder_GetNumberOfEncodedPoints_0 = function() {
            return (Vb = a._emscripten_bind_Encoder_GetNumberOfEncodedPoints_0 = a.asm.xa).apply(null, arguments);
        }, Wb = a._emscripten_bind_Encoder_GetNumberOfEncodedFaces_0 = function() {
            return (Wb = a._emscripten_bind_Encoder_GetNumberOfEncodedFaces_0 = a.asm.ya).apply(null, arguments);
        }, Xb = a._emscripten_bind_Encoder___destroy___0 = function() {
            return (Xb = a._emscripten_bind_Encoder___destroy___0 = a.asm.za).apply(null, arguments);
        }, Ka = a._emscripten_bind_ExpertEncoder_ExpertEncoder_1 = function() {
            return (Ka = a._emscripten_bind_ExpertEncoder_ExpertEncoder_1 = a.asm.Aa).apply(null, arguments);
        }, Yb = a._emscripten_bind_ExpertEncoder_SetEncodingMethod_1 = function() {
            return (Yb = a._emscripten_bind_ExpertEncoder_SetEncodingMethod_1 = a.asm.Ba).apply(null, arguments);
        }, Zb = a._emscripten_bind_ExpertEncoder_SetAttributeQuantization_2 = function() {
            return (Zb = a._emscripten_bind_ExpertEncoder_SetAttributeQuantization_2 = a.asm.Ca).apply(null, arguments);
        }, $b = a._emscripten_bind_ExpertEncoder_SetAttributeExplicitQuantization_5 = function() {
            return ($b = a._emscripten_bind_ExpertEncoder_SetAttributeExplicitQuantization_5 = a.asm.Da).apply(null, arguments);
        }, ac = a._emscripten_bind_ExpertEncoder_SetSpeedOptions_2 = function() {
            return (ac = a._emscripten_bind_ExpertEncoder_SetSpeedOptions_2 = a.asm.Ea).apply(null, arguments);
        }, bc = a._emscripten_bind_ExpertEncoder_SetTrackEncodedProperties_1 = function() {
            return (bc = a._emscripten_bind_ExpertEncoder_SetTrackEncodedProperties_1 = a.asm.Fa).apply(null, arguments);
        }, cc = a._emscripten_bind_ExpertEncoder_EncodeToDracoBuffer_2 = function() {
            return (cc = a._emscripten_bind_ExpertEncoder_EncodeToDracoBuffer_2 = a.asm.Ga).apply(null, arguments);
        }, dc = a._emscripten_bind_ExpertEncoder_GetNumberOfEncodedPoints_0 = function() {
            return (dc = a._emscripten_bind_ExpertEncoder_GetNumberOfEncodedPoints_0 = a.asm.Ha).apply(null, arguments);
        }, ec = a._emscripten_bind_ExpertEncoder_GetNumberOfEncodedFaces_0 = function() {
            return (ec = a._emscripten_bind_ExpertEncoder_GetNumberOfEncodedFaces_0 = a.asm.Ia).apply(null, arguments);
        }, fc = a._emscripten_bind_ExpertEncoder___destroy___0 = function() {
            return (fc = a._emscripten_bind_ExpertEncoder___destroy___0 = a.asm.Ja).apply(null, arguments);
        }, gc = a._emscripten_enum_draco_GeometryAttribute_Type_INVALID = function() {
            return (gc = a._emscripten_enum_draco_GeometryAttribute_Type_INVALID = a.asm.Ka).apply(null, arguments);
        }, hc = a._emscripten_enum_draco_GeometryAttribute_Type_POSITION = function() {
            return (hc = a._emscripten_enum_draco_GeometryAttribute_Type_POSITION = a.asm.La).apply(null, arguments);
        }, ic = a._emscripten_enum_draco_GeometryAttribute_Type_NORMAL = function() {
            return (ic = a._emscripten_enum_draco_GeometryAttribute_Type_NORMAL = a.asm.Ma).apply(null, arguments);
        }, jc = a._emscripten_enum_draco_GeometryAttribute_Type_COLOR = function() {
            return (jc = a._emscripten_enum_draco_GeometryAttribute_Type_COLOR = a.asm.Na).apply(null, arguments);
        }, kc = a._emscripten_enum_draco_GeometryAttribute_Type_TEX_COORD = function() {
            return (kc = a._emscripten_enum_draco_GeometryAttribute_Type_TEX_COORD = a.asm.Oa).apply(null, arguments);
        }, lc = a._emscripten_enum_draco_GeometryAttribute_Type_GENERIC = function() {
            return (lc = a._emscripten_enum_draco_GeometryAttribute_Type_GENERIC = a.asm.Pa).apply(null, arguments);
        }, mc = a._emscripten_enum_draco_EncodedGeometryType_INVALID_GEOMETRY_TYPE = function() {
            return (mc = a._emscripten_enum_draco_EncodedGeometryType_INVALID_GEOMETRY_TYPE = a.asm.Qa).apply(null, arguments);
        }, nc = a._emscripten_enum_draco_EncodedGeometryType_POINT_CLOUD = function() {
            return (nc = a._emscripten_enum_draco_EncodedGeometryType_POINT_CLOUD = a.asm.Ra).apply(null, arguments);
        }, oc = a._emscripten_enum_draco_EncodedGeometryType_TRIANGULAR_MESH = function() {
            return (oc = a._emscripten_enum_draco_EncodedGeometryType_TRIANGULAR_MESH = a.asm.Sa).apply(null, arguments);
        }, pc = a._emscripten_enum_draco_MeshEncoderMethod_MESH_SEQUENTIAL_ENCODING = function() {
            return (pc = a._emscripten_enum_draco_MeshEncoderMethod_MESH_SEQUENTIAL_ENCODING = a.asm.Ta).apply(null, arguments);
        }, qc = a._emscripten_enum_draco_MeshEncoderMethod_MESH_EDGEBREAKER_ENCODING = function() {
            return (qc = a._emscripten_enum_draco_MeshEncoderMethod_MESH_EDGEBREAKER_ENCODING = a.asm.Ua).apply(null, arguments);
        }, Oa = a._malloc = function() {
            return (Oa = a._malloc = a.asm.Va).apply(null, arguments);
        };
        a._free = function() {
            return (a._free = a.asm.Wa).apply(null, arguments);
        };
        var fa;
        da = function b() {
            fa || T();
            fa || (da = b);
        };
        a.run = T;
        if (a.preInit) for("function" == typeof a.preInit && (a.preInit = [
            a.preInit
        ]); 0 < a.preInit.length;)a.preInit.pop()();
        T();
        w.prototype = Object.create(w.prototype);
        w.prototype.constructor = w;
        w.prototype.__class__ = w;
        w.__cache__ = {
        };
        a.WrapperObject = w;
        a.getCache = D;
        a.wrapPointer = S;
        a.castObject = function(b, c) {
            return S(b.ptr, c);
        };
        a.NULL = S(0);
        a.destroy = function(b) {
            if (!b.__destroy__) throw "Error: Cannot destroy object. (Did you create it yourself?)";
            b.__destroy__();
            delete D(b.__class__)[b.ptr];
        };
        a.compare = function(b, c) {
            return b.ptr === c.ptr;
        };
        a.getPointer = function(b) {
            return b.ptr;
        };
        a.getClass = function(b) {
            return b.__class__;
        };
        var n = {
            buffer: 0,
            size: 0,
            pos: 0,
            temps: [],
            needed: 0,
            prepare: function() {
                if (n.needed) {
                    for(var b = 0; b < n.temps.length; b++)a._free(n.temps[b]);
                    n.temps.length = 0;
                    a._free(n.buffer);
                    n.buffer = 0;
                    n.size += n.needed;
                    n.needed = 0;
                }
                n.buffer || (n.size += 128, n.buffer = a._malloc(n.size), r(n.buffer));
                n.pos = 0;
            },
            alloc: function(b, c) {
                r(n.buffer);
                b = b.length * c.BYTES_PER_ELEMENT;
                b = b + 7 & -8;
                n.pos + b >= n.size ? (r(0 < b), n.needed += b, c = a._malloc(b), n.temps.push(c)) : (c = n.buffer + n.pos, n.pos += b);
                return c;
            },
            copy: function(b, c, d) {
                d >>>= 0;
                switch(c.BYTES_PER_ELEMENT){
                    case 2:
                        d >>>= 1;
                        break;
                    case 4:
                        d >>>= 2;
                        break;
                    case 8:
                        d >>>= 3;
                }
                for(var e = 0; e < b.length; e++)c[d + e] = b[e];
            }
        };
        Q.prototype = Object.create(w.prototype);
        Q.prototype.constructor = Q;
        Q.prototype.__class__ = Q;
        Q.__cache__ = {
        };
        a.VoidPtr = Q;
        Q.prototype.__destroy__ = Q.prototype.__destroy__ = function() {
            Pa(this.ptr);
        };
        M.prototype = Object.create(w.prototype);
        M.prototype.constructor = M;
        M.prototype.__class__ = M;
        M.__cache__ = {
        };
        a.GeometryAttribute = M;
        M.prototype.__destroy__ = M.prototype.__destroy__ = function() {
            Qa(this.ptr);
        };
        z.prototype = Object.create(w.prototype);
        z.prototype.constructor = z;
        z.prototype.__class__ = z;
        z.__cache__ = {
        };
        a.PointAttribute = z;
        z.prototype.size = z.prototype.size = function() {
            return Ra(this.ptr);
        };
        z.prototype.attribute_type = z.prototype.attribute_type = function() {
            return Sa(this.ptr);
        };
        z.prototype.data_type = z.prototype.data_type = function() {
            return Ta(this.ptr);
        };
        z.prototype.num_components = z.prototype.num_components = function() {
            return Ua(this.ptr);
        };
        z.prototype.normalized = z.prototype.normalized = function() {
            return !!Va(this.ptr);
        };
        z.prototype.byte_stride = z.prototype.byte_stride = function() {
            return Wa(this.ptr);
        };
        z.prototype.byte_offset = z.prototype.byte_offset = function() {
            return Xa(this.ptr);
        };
        z.prototype.unique_id = z.prototype.unique_id = function() {
            return Ya(this.ptr);
        };
        z.prototype.__destroy__ = z.prototype.__destroy__ = function() {
            Za(this.ptr);
        };
        G.prototype = Object.create(w.prototype);
        G.prototype.constructor = G;
        G.prototype.__class__ = G;
        G.__cache__ = {
        };
        a.PointCloud = G;
        G.prototype.num_attributes = G.prototype.num_attributes = function() {
            return $a(this.ptr);
        };
        G.prototype.num_points = G.prototype.num_points = function() {
            return ab(this.ptr);
        };
        G.prototype.__destroy__ = G.prototype.__destroy__ = function() {
            bb(this.ptr);
        };
        E.prototype = Object.create(w.prototype);
        E.prototype.constructor = E;
        E.prototype.__class__ = E;
        E.__cache__ = {
        };
        a.Mesh = E;
        E.prototype.num_faces = E.prototype.num_faces = function() {
            return cb(this.ptr);
        };
        E.prototype.num_attributes = E.prototype.num_attributes = function() {
            return db(this.ptr);
        };
        E.prototype.num_points = E.prototype.num_points = function() {
            return eb(this.ptr);
        };
        E.prototype.set_num_points = E.prototype.set_num_points = function(b) {
            var c = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            fb(c, b);
        };
        E.prototype.__destroy__ = E.prototype.__destroy__ = function() {
            gb(this.ptr);
        };
        N.prototype = Object.create(w.prototype);
        N.prototype.constructor = N;
        N.prototype.__class__ = N;
        N.__cache__ = {
        };
        a.Metadata = N;
        N.prototype.__destroy__ = N.prototype.__destroy__ = function() {
            hb(this.ptr);
        };
        H.prototype = Object.create(w.prototype);
        H.prototype.constructor = H;
        H.prototype.__class__ = H;
        H.__cache__ = {
        };
        a.DracoInt8Array = H;
        H.prototype.GetValue = H.prototype.GetValue = function(b) {
            var c = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            return ib(c, b);
        };
        H.prototype.size = H.prototype.size = function() {
            return jb(this.ptr);
        };
        H.prototype.__destroy__ = H.prototype.__destroy__ = function() {
            kb(this.ptr);
        };
        F.prototype = Object.create(w.prototype);
        F.prototype.constructor = F;
        F.prototype.__class__ = F;
        F.__cache__ = {
        };
        a.MetadataBuilder = F;
        F.prototype.AddStringEntry = F.prototype.AddStringEntry = function(b, c, d) {
            var e = this.ptr;
            n.prepare();
            b && "object" === typeof b && (b = b.ptr);
            c = c && "object" === typeof c ? c.ptr : O(c);
            d = d && "object" === typeof d ? d.ptr : O(d);
            return !!lb(e, b, c, d);
        };
        F.prototype.AddIntEntry = F.prototype.AddIntEntry = function(b, c, d) {
            var e = this.ptr;
            n.prepare();
            b && "object" === typeof b && (b = b.ptr);
            c = c && "object" === typeof c ? c.ptr : O(c);
            d && "object" === typeof d && (d = d.ptr);
            return !!mb(e, b, c, d);
        };
        F.prototype.AddIntEntryArray = F.prototype.AddIntEntryArray = function(b, c, d, e) {
            var g = this.ptr;
            n.prepare();
            b && "object" === typeof b && (b = b.ptr);
            c = c && "object" === typeof c ? c.ptr : O(c);
            "object" == typeof d && (d = V(d));
            e && "object" === typeof e && (e = e.ptr);
            return !!nb(g, b, c, d, e);
        };
        F.prototype.AddDoubleEntry = F.prototype.AddDoubleEntry = function(b, c, d) {
            var e = this.ptr;
            n.prepare();
            b && "object" === typeof b && (b = b.ptr);
            c = c && "object" === typeof c ? c.ptr : O(c);
            d && "object" === typeof d && (d = d.ptr);
            return !!ob(e, b, c, d);
        };
        F.prototype.__destroy__ = F.prototype.__destroy__ = function() {
            pb(this.ptr);
        };
        x.prototype = Object.create(w.prototype);
        x.prototype.constructor = x;
        x.prototype.__class__ = x;
        x.__cache__ = {
        };
        a.PointCloudBuilder = x;
        x.prototype.AddFloatAttribute = x.prototype.AddFloatAttribute = function(b, c, d, e, g) {
            var t = this.ptr;
            n.prepare();
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            d && "object" === typeof d && (d = d.ptr);
            e && "object" === typeof e && (e = e.ptr);
            "object" == typeof g && (g = ba(g));
            return qb(t, b, c, d, e, g);
        };
        x.prototype.AddInt8Attribute = x.prototype.AddInt8Attribute = function(b, c, d, e, g) {
            var t = this.ptr;
            n.prepare();
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            d && "object" === typeof d && (d = d.ptr);
            e && "object" === typeof e && (e = e.ptr);
            "object" == typeof g && (g = ha(g));
            return rb(t, b, c, d, e, g);
        };
        x.prototype.AddUInt8Attribute = x.prototype.AddUInt8Attribute = function(b, c, d, e, g) {
            var t = this.ptr;
            n.prepare();
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            d && "object" === typeof d && (d = d.ptr);
            e && "object" === typeof e && (e = e.ptr);
            "object" == typeof g && (g = ha(g));
            return sb(t, b, c, d, e, g);
        };
        x.prototype.AddInt16Attribute = x.prototype.AddInt16Attribute = function(b, c, d, e, g) {
            var t = this.ptr;
            n.prepare();
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            d && "object" === typeof d && (d = d.ptr);
            e && "object" === typeof e && (e = e.ptr);
            "object" == typeof g && (g = ia(g));
            return tb(t, b, c, d, e, g);
        };
        x.prototype.AddUInt16Attribute = x.prototype.AddUInt16Attribute = function(b, c, d, e, g) {
            var t = this.ptr;
            n.prepare();
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            d && "object" === typeof d && (d = d.ptr);
            e && "object" === typeof e && (e = e.ptr);
            "object" == typeof g && (g = ia(g));
            return ub(t, b, c, d, e, g);
        };
        x.prototype.AddInt32Attribute = x.prototype.AddInt32Attribute = function(b, c, d, e, g) {
            var t = this.ptr;
            n.prepare();
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            d && "object" === typeof d && (d = d.ptr);
            e && "object" === typeof e && (e = e.ptr);
            "object" == typeof g && (g = V(g));
            return vb(t, b, c, d, e, g);
        };
        x.prototype.AddUInt32Attribute = x.prototype.AddUInt32Attribute = function(b, c, d, e, g) {
            var t = this.ptr;
            n.prepare();
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            d && "object" === typeof d && (d = d.ptr);
            e && "object" === typeof e && (e = e.ptr);
            "object" == typeof g && (g = V(g));
            return wb(t, b, c, d, e, g);
        };
        x.prototype.AddMetadata = x.prototype.AddMetadata = function(b, c) {
            var d = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            return !!xb(d, b, c);
        };
        x.prototype.SetMetadataForAttribute = x.prototype.SetMetadataForAttribute = function(b, c, d) {
            var e = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            d && "object" === typeof d && (d = d.ptr);
            return !!yb(e, b, c, d);
        };
        x.prototype.__destroy__ = x.prototype.__destroy__ = function() {
            zb(this.ptr);
        };
        u.prototype = Object.create(w.prototype);
        u.prototype.constructor = u;
        u.prototype.__class__ = u;
        u.__cache__ = {
        };
        a.MeshBuilder = u;
        u.prototype.AddFacesToMesh = u.prototype.AddFacesToMesh = function(b, c, d) {
            var e = this.ptr;
            n.prepare();
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            "object" == typeof d && (d = V(d));
            return !!Ab(e, b, c, d);
        };
        u.prototype.AddFloatAttributeToMesh = u.prototype.AddFloatAttributeToMesh = function(b, c, d, e, g) {
            var t = this.ptr;
            n.prepare();
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            d && "object" === typeof d && (d = d.ptr);
            e && "object" === typeof e && (e = e.ptr);
            "object" == typeof g && (g = ba(g));
            return Bb(t, b, c, d, e, g);
        };
        u.prototype.AddInt32AttributeToMesh = u.prototype.AddInt32AttributeToMesh = function(b, c, d, e, g) {
            var t = this.ptr;
            n.prepare();
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            d && "object" === typeof d && (d = d.ptr);
            e && "object" === typeof e && (e = e.ptr);
            "object" == typeof g && (g = V(g));
            return Cb(t, b, c, d, e, g);
        };
        u.prototype.AddMetadataToMesh = u.prototype.AddMetadataToMesh = function(b, c) {
            var d = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            return !!Db(d, b, c);
        };
        u.prototype.AddFloatAttribute = u.prototype.AddFloatAttribute = function(b, c, d, e, g) {
            var t = this.ptr;
            n.prepare();
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            d && "object" === typeof d && (d = d.ptr);
            e && "object" === typeof e && (e = e.ptr);
            "object" == typeof g && (g = ba(g));
            return Eb(t, b, c, d, e, g);
        };
        u.prototype.AddInt8Attribute = u.prototype.AddInt8Attribute = function(b, c, d, e, g) {
            var t = this.ptr;
            n.prepare();
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            d && "object" === typeof d && (d = d.ptr);
            e && "object" === typeof e && (e = e.ptr);
            "object" == typeof g && (g = ha(g));
            return Fb(t, b, c, d, e, g);
        };
        u.prototype.AddUInt8Attribute = u.prototype.AddUInt8Attribute = function(b, c, d, e, g) {
            var t = this.ptr;
            n.prepare();
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            d && "object" === typeof d && (d = d.ptr);
            e && "object" === typeof e && (e = e.ptr);
            "object" == typeof g && (g = ha(g));
            return Gb(t, b, c, d, e, g);
        };
        u.prototype.AddInt16Attribute = u.prototype.AddInt16Attribute = function(b, c, d, e, g) {
            var t = this.ptr;
            n.prepare();
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            d && "object" === typeof d && (d = d.ptr);
            e && "object" === typeof e && (e = e.ptr);
            "object" == typeof g && (g = ia(g));
            return Hb(t, b, c, d, e, g);
        };
        u.prototype.AddUInt16Attribute = u.prototype.AddUInt16Attribute = function(b, c, d, e, g) {
            var t = this.ptr;
            n.prepare();
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            d && "object" === typeof d && (d = d.ptr);
            e && "object" === typeof e && (e = e.ptr);
            "object" == typeof g && (g = ia(g));
            return Ib(t, b, c, d, e, g);
        };
        u.prototype.AddInt32Attribute = u.prototype.AddInt32Attribute = function(b, c, d, e, g) {
            var t = this.ptr;
            n.prepare();
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            d && "object" === typeof d && (d = d.ptr);
            e && "object" === typeof e && (e = e.ptr);
            "object" == typeof g && (g = V(g));
            return Jb(t, b, c, d, e, g);
        };
        u.prototype.AddUInt32Attribute = u.prototype.AddUInt32Attribute = function(b, c, d, e, g) {
            var t = this.ptr;
            n.prepare();
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            d && "object" === typeof d && (d = d.ptr);
            e && "object" === typeof e && (e = e.ptr);
            "object" == typeof g && (g = V(g));
            return Kb(t, b, c, d, e, g);
        };
        u.prototype.AddMetadata = u.prototype.AddMetadata = function(b, c) {
            var d = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            return !!Lb(d, b, c);
        };
        u.prototype.SetMetadataForAttribute = u.prototype.SetMetadataForAttribute = function(b, c, d) {
            var e = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            d && "object" === typeof d && (d = d.ptr);
            return !!Mb(e, b, c, d);
        };
        u.prototype.__destroy__ = u.prototype.__destroy__ = function() {
            Nb(this.ptr);
        };
        y.prototype = Object.create(w.prototype);
        y.prototype.constructor = y;
        y.prototype.__class__ = y;
        y.__cache__ = {
        };
        a.Encoder = y;
        y.prototype.SetEncodingMethod = y.prototype.SetEncodingMethod = function(b) {
            var c = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            Ob(c, b);
        };
        y.prototype.SetAttributeQuantization = y.prototype.SetAttributeQuantization = function(b, c) {
            var d = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            Pb(d, b, c);
        };
        y.prototype.SetAttributeExplicitQuantization = y.prototype.SetAttributeExplicitQuantization = function(b, c, d, e, g) {
            var t = this.ptr;
            n.prepare();
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            d && "object" === typeof d && (d = d.ptr);
            "object" == typeof e && (e = ba(e));
            g && "object" === typeof g && (g = g.ptr);
            Qb(t, b, c, d, e, g);
        };
        y.prototype.SetSpeedOptions = y.prototype.SetSpeedOptions = function(b, c) {
            var d = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            Rb(d, b, c);
        };
        y.prototype.SetTrackEncodedProperties = y.prototype.SetTrackEncodedProperties = function(b) {
            var c = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            Sb(c, b);
        };
        y.prototype.EncodeMeshToDracoBuffer = y.prototype.EncodeMeshToDracoBuffer = function(b, c) {
            var d = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            return Tb(d, b, c);
        };
        y.prototype.EncodePointCloudToDracoBuffer = y.prototype.EncodePointCloudToDracoBuffer = function(b, c, d) {
            var e = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            d && "object" === typeof d && (d = d.ptr);
            return Ub(e, b, c, d);
        };
        y.prototype.GetNumberOfEncodedPoints = y.prototype.GetNumberOfEncodedPoints = function() {
            return Vb(this.ptr);
        };
        y.prototype.GetNumberOfEncodedFaces = y.prototype.GetNumberOfEncodedFaces = function() {
            return Wb(this.ptr);
        };
        y.prototype.__destroy__ = y.prototype.__destroy__ = function() {
            Xb(this.ptr);
        };
        A.prototype = Object.create(w.prototype);
        A.prototype.constructor = A;
        A.prototype.__class__ = A;
        A.__cache__ = {
        };
        a.ExpertEncoder = A;
        A.prototype.SetEncodingMethod = A.prototype.SetEncodingMethod = function(b) {
            var c = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            Yb(c, b);
        };
        A.prototype.SetAttributeQuantization = A.prototype.SetAttributeQuantization = function(b, c) {
            var d = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            Zb(d, b, c);
        };
        A.prototype.SetAttributeExplicitQuantization = A.prototype.SetAttributeExplicitQuantization = function(b, c, d, e, g) {
            var t = this.ptr;
            n.prepare();
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            d && "object" === typeof d && (d = d.ptr);
            "object" == typeof e && (e = ba(e));
            g && "object" === typeof g && (g = g.ptr);
            $b(t, b, c, d, e, g);
        };
        A.prototype.SetSpeedOptions = A.prototype.SetSpeedOptions = function(b, c) {
            var d = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            ac(d, b, c);
        };
        A.prototype.SetTrackEncodedProperties = A.prototype.SetTrackEncodedProperties = function(b) {
            var c = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            bc(c, b);
        };
        A.prototype.EncodeToDracoBuffer = A.prototype.EncodeToDracoBuffer = function(b, c) {
            var d = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            return cc(d, b, c);
        };
        A.prototype.GetNumberOfEncodedPoints = A.prototype.GetNumberOfEncodedPoints = function() {
            return dc(this.ptr);
        };
        A.prototype.GetNumberOfEncodedFaces = A.prototype.GetNumberOfEncodedFaces = function() {
            return ec(this.ptr);
        };
        A.prototype.__destroy__ = A.prototype.__destroy__ = function() {
            fc(this.ptr);
        };
        (function() {
            function b() {
                a.INVALID = gc();
                a.POSITION = hc();
                a.NORMAL = ic();
                a.COLOR = jc();
                a.TEX_COORD = kc();
                a.GENERIC = lc();
                a.INVALID_GEOMETRY_TYPE = mc();
                a.POINT_CLOUD = nc();
                a.TRIANGULAR_MESH = oc();
                a.MESH_SEQUENTIAL_ENCODING = pc();
                a.MESH_EDGEBREAKER_ENCODING = qc();
            }
            wa ? b() : qa.unshift(b);
        })();
        if ("function" === typeof a.onModuleParsed) a.onModuleParsed();
        return p.ready;
    };
}();
"object" === typeof exports && "object" === typeof module ? module.exports = DracoEncoderModule : "function" === typeof define && define.amd ? define([], function() {
    return DracoEncoderModule;
}) : "object" === typeof exports && (exports.DracoEncoderModule = DracoEncoderModule);

},{"process":"lDnB8","path":"dTeSu","fs":"joWnX"}],"lDnB8":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {
};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {
};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {
};
function noop() {
}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function() {
    return '/';
};
process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() {
    return 0;
};

},{}],"dTeSu":[function(require,module,exports) {
var process = require("process");
// 'path' module extracted from Node.js v8.11.1 (only the posix part)
// transplited with Babel
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';
function assertPath(path) {
    if (typeof path !== 'string') throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
}
// Resolves . and .. elements in a path with directory names
function normalizeStringPosix(path, allowAboveRoot) {
    var res = '';
    var lastSegmentLength = 0;
    var lastSlash = -1;
    var dots = 0;
    var code;
    for(var i = 0; i <= path.length; ++i){
        if (i < path.length) code = path.charCodeAt(i);
        else if (code === 47 /*/*/ ) break;
        else code = 47 /*/*/ ;
        if (code === 47 /*/*/ ) {
            if (lastSlash === i - 1 || dots === 1) ;
            else if (lastSlash !== i - 1 && dots === 2) {
                if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/  || res.charCodeAt(res.length - 2) !== 46 /*.*/ ) {
                    if (res.length > 2) {
                        var lastSlashIndex = res.lastIndexOf('/');
                        if (lastSlashIndex !== res.length - 1) {
                            if (lastSlashIndex === -1) {
                                res = '';
                                lastSegmentLength = 0;
                            } else {
                                res = res.slice(0, lastSlashIndex);
                                lastSegmentLength = res.length - 1 - res.lastIndexOf('/');
                            }
                            lastSlash = i;
                            dots = 0;
                            continue;
                        }
                    } else if (res.length === 2 || res.length === 1) {
                        res = '';
                        lastSegmentLength = 0;
                        lastSlash = i;
                        dots = 0;
                        continue;
                    }
                }
                if (allowAboveRoot) {
                    if (res.length > 0) res += '/..';
                    else res = '..';
                    lastSegmentLength = 2;
                }
            } else {
                if (res.length > 0) res += '/' + path.slice(lastSlash + 1, i);
                else res = path.slice(lastSlash + 1, i);
                lastSegmentLength = i - lastSlash - 1;
            }
            lastSlash = i;
            dots = 0;
        } else if (code === 46 /*.*/  && dots !== -1) ++dots;
        else dots = -1;
    }
    return res;
}
function _format(sep, pathObject) {
    var dir = pathObject.dir || pathObject.root;
    var base = pathObject.base || (pathObject.name || '') + (pathObject.ext || '');
    if (!dir) return base;
    if (dir === pathObject.root) return dir + base;
    return dir + sep + base;
}
var posix = {
    // path.resolve([from ...], to)
    resolve: function resolve() {
        var resolvedPath = '';
        var resolvedAbsolute = false;
        var cwd;
        for(var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--){
            var path;
            if (i >= 0) path = arguments[i];
            else {
                if (cwd === undefined) cwd = process.cwd();
                path = cwd;
            }
            assertPath(path);
            // Skip empty entries
            if (path.length === 0) continue;
            resolvedPath = path + '/' + resolvedPath;
            resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        // Normalize the path
        resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
        if (resolvedAbsolute) {
            if (resolvedPath.length > 0) return '/' + resolvedPath;
            else return '/';
        } else if (resolvedPath.length > 0) return resolvedPath;
        else return '.';
    },
    normalize: function normalize(path) {
        assertPath(path);
        if (path.length === 0) return '.';
        var isAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/ ;
        // Normalize the path
        path = normalizeStringPosix(path, !isAbsolute);
        if (path.length === 0 && !isAbsolute) path = '.';
        if (path.length > 0 && trailingSeparator) path += '/';
        if (isAbsolute) return '/' + path;
        return path;
    },
    isAbsolute: function isAbsolute(path) {
        assertPath(path);
        return path.length > 0 && path.charCodeAt(0) === 47 /*/*/ ;
    },
    join: function join() {
        if (arguments.length === 0) return '.';
        var joined;
        for(var i = 0; i < arguments.length; ++i){
            var arg = arguments[i];
            assertPath(arg);
            if (arg.length > 0) {
                if (joined === undefined) joined = arg;
                else joined += '/' + arg;
            }
        }
        if (joined === undefined) return '.';
        return posix.normalize(joined);
    },
    relative: function relative(from, to) {
        assertPath(from);
        assertPath(to);
        if (from === to) return '';
        from = posix.resolve(from);
        to = posix.resolve(to);
        if (from === to) return '';
        // Trim any leading backslashes
        var fromStart = 1;
        for(; fromStart < from.length; ++fromStart){
            if (from.charCodeAt(fromStart) !== 47 /*/*/ ) break;
        }
        var fromEnd = from.length;
        var fromLen = fromEnd - fromStart;
        // Trim any leading backslashes
        var toStart = 1;
        for(; toStart < to.length; ++toStart){
            if (to.charCodeAt(toStart) !== 47 /*/*/ ) break;
        }
        var toEnd = to.length;
        var toLen = toEnd - toStart;
        // Compare paths to find the longest common path from root
        var length = fromLen < toLen ? fromLen : toLen;
        var lastCommonSep = -1;
        var i = 0;
        for(; i <= length; ++i){
            if (i === length) {
                if (toLen > length) {
                    if (to.charCodeAt(toStart + i) === 47 /*/*/ ) // We get here if `from` is the exact base path for `to`.
                    // For example: from='/foo/bar'; to='/foo/bar/baz'
                    return to.slice(toStart + i + 1);
                    else if (i === 0) // We get here if `from` is the root
                    // For example: from='/'; to='/foo'
                    return to.slice(toStart + i);
                } else if (fromLen > length) {
                    if (from.charCodeAt(fromStart + i) === 47 /*/*/ ) // We get here if `to` is the exact base path for `from`.
                    // For example: from='/foo/bar/baz'; to='/foo/bar'
                    lastCommonSep = i;
                    else if (i === 0) // We get here if `to` is the root.
                    // For example: from='/foo'; to='/'
                    lastCommonSep = 0;
                }
                break;
            }
            var fromCode = from.charCodeAt(fromStart + i);
            var toCode = to.charCodeAt(toStart + i);
            if (fromCode !== toCode) break;
            else if (fromCode === 47 /*/*/ ) lastCommonSep = i;
        }
        var out = '';
        // Generate the relative path based on the path difference between `to`
        // and `from`
        for(i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i)if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/ ) {
            if (out.length === 0) out += '..';
            else out += '/..';
        }
        // Lastly, append the rest of the destination (`to`) path that comes after
        // the common path parts
        if (out.length > 0) return out + to.slice(toStart + lastCommonSep);
        else {
            toStart += lastCommonSep;
            if (to.charCodeAt(toStart) === 47 /*/*/ ) ++toStart;
            return to.slice(toStart);
        }
    },
    _makeLong: function _makeLong(path) {
        return path;
    },
    dirname: function dirname(path) {
        assertPath(path);
        if (path.length === 0) return '.';
        var code = path.charCodeAt(0);
        var hasRoot = code === 47 /*/*/ ;
        var end = -1;
        var matchedSlash = true;
        for(var i = path.length - 1; i >= 1; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                if (!matchedSlash) {
                    end = i;
                    break;
                }
            } else // We saw the first non-path separator
            matchedSlash = false;
        }
        if (end === -1) return hasRoot ? '/' : '.';
        if (hasRoot && end === 1) return '//';
        return path.slice(0, end);
    },
    basename: function basename(path, ext) {
        if (ext !== undefined && typeof ext !== 'string') throw new TypeError('"ext" argument must be a string');
        assertPath(path);
        var start = 0;
        var end = -1;
        var matchedSlash = true;
        var i;
        if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
            if (ext.length === path.length && ext === path) return '';
            var extIdx = ext.length - 1;
            var firstNonSlashEnd = -1;
            for(i = path.length - 1; i >= 0; --i){
                var code = path.charCodeAt(i);
                if (code === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else {
                    if (firstNonSlashEnd === -1) {
                        // We saw the first non-path separator, remember this index in case
                        // we need it if the extension ends up not matching
                        matchedSlash = false;
                        firstNonSlashEnd = i + 1;
                    }
                    if (extIdx >= 0) {
                        // Try to match the explicit extension
                        if (code === ext.charCodeAt(extIdx)) {
                            if (--extIdx === -1) // We matched the extension, so mark this as the end of our path
                            // component
                            end = i;
                        } else {
                            // Extension does not match, so our result is the entire path
                            // component
                            extIdx = -1;
                            end = firstNonSlashEnd;
                        }
                    }
                }
            }
            if (start === end) end = firstNonSlashEnd;
            else if (end === -1) end = path.length;
            return path.slice(start, end);
        } else {
            for(i = path.length - 1; i >= 0; --i){
                if (path.charCodeAt(i) === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else if (end === -1) {
                    // We saw the first non-path separator, mark this as the end of our
                    // path component
                    matchedSlash = false;
                    end = i + 1;
                }
            }
            if (end === -1) return '';
            return path.slice(start, end);
        }
    },
    extname: function extname(path) {
        assertPath(path);
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        for(var i = path.length - 1; i >= 0; --i){
            var code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) return '';
        return path.slice(startDot, end);
    },
    format: function format(pathObject) {
        if (pathObject === null || typeof pathObject !== 'object') throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
        return _format('/', pathObject);
    },
    parse: function parse(path) {
        assertPath(path);
        var ret = {
            root: '',
            dir: '',
            base: '',
            ext: '',
            name: ''
        };
        if (path.length === 0) return ret;
        var code = path.charCodeAt(0);
        var isAbsolute = code === 47 /*/*/ ;
        var start;
        if (isAbsolute) {
            ret.root = '/';
            start = 1;
        } else start = 0;
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        var i = path.length - 1;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        // Get non-dir info
        for(; i >= start; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
            if (end !== -1) {
                if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);
                else ret.base = ret.name = path.slice(startPart, end);
            }
        } else {
            if (startPart === 0 && isAbsolute) {
                ret.name = path.slice(1, startDot);
                ret.base = path.slice(1, end);
            } else {
                ret.name = path.slice(startPart, startDot);
                ret.base = path.slice(startPart, end);
            }
            ret.ext = path.slice(startDot, end);
        }
        if (startPart > 0) ret.dir = path.slice(0, startPart - 1);
        else if (isAbsolute) ret.dir = '/';
        return ret;
    },
    sep: '/',
    delimiter: ':',
    win32: null,
    posix: null
};
posix.posix = posix;
module.exports = posix;

},{"process":"lDnB8"}],"joWnX":[function(require,module,exports) {
"use strict";

},{}],"lK5Hq":[function(require,module,exports) {
var process = require("process");
var global = arguments[3];
var __dirname = "node_modules/draco3dgltf";
var __filename = "node_modules/draco3dgltf/draco_decoder_gltf_nodejs.js";
var $jscomp = $jscomp || {
};
$jscomp.scope = {
};
$jscomp.arrayIteratorImpl = function(m) {
    var n = 0;
    return function() {
        return n < m.length ? {
            done: !1,
            value: m[n++]
        } : {
            done: !0
        };
    };
};
$jscomp.arrayIterator = function(m) {
    return {
        next: $jscomp.arrayIteratorImpl(m)
    };
};
$jscomp.makeIterator = function(m) {
    var n = "undefined" != typeof Symbol && Symbol.iterator && m[Symbol.iterator];
    return n ? n.call(m) : $jscomp.arrayIterator(m);
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = !1;
$jscomp.getGlobal = function(m) {
    m = [
        "object" == typeof globalThis && globalThis,
        m,
        "object" == typeof window && window,
        "object" == typeof self && self,
        "object" == typeof global && global
    ];
    for(var n = 0; n < m.length; ++n){
        var k = m[n];
        if (k && k.Math == Math) return k;
    }
    throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(m, n, k) {
    if (m == Array.prototype || m == Object.prototype) return m;
    m[n] = k.value;
    return m;
};
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {
};
$jscomp.propertyToPolyfillSymbol = {
};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function(m, n) {
    var k = $jscomp.propertyToPolyfillSymbol[n];
    if (null == k) return m[n];
    k = m[k];
    return void 0 !== k ? k : m[n];
};
$jscomp.polyfill = function(m, n, k, q) {
    n && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(m, n, k, q) : $jscomp.polyfillUnisolated(m, n, k, q));
};
$jscomp.polyfillUnisolated = function(m, n, k, q) {
    k = $jscomp.global;
    m = m.split(".");
    for(q = 0; q < m.length - 1; q++){
        var h = m[q];
        if (!(h in k)) return;
        k = k[h];
    }
    m = m[m.length - 1];
    q = k[m];
    n = n(q);
    n != q && null != n && $jscomp.defineProperty(k, m, {
        configurable: !0,
        writable: !0,
        value: n
    });
};
$jscomp.polyfillIsolated = function(m, n, k, q) {
    var h = m.split(".");
    m = 1 === h.length;
    q = h[0];
    q = !m && q in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
    for(var A = 0; A < h.length - 1; A++){
        var f = h[A];
        if (!(f in q)) return;
        q = q[f];
    }
    h = h[h.length - 1];
    k = $jscomp.IS_SYMBOL_NATIVE && "es6" === k ? q[h] : null;
    n = n(k);
    null != n && (m ? $jscomp.defineProperty($jscomp.polyfills, h, {
        configurable: !0,
        writable: !0,
        value: n
    }) : n !== k && (void 0 === $jscomp.propertyToPolyfillSymbol[h] && (k = 1000000000 * Math.random() >>> 0, $jscomp.propertyToPolyfillSymbol[h] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(h) : $jscomp.POLYFILL_PREFIX + k + "$" + h), $jscomp.defineProperty(q, $jscomp.propertyToPolyfillSymbol[h], {
        configurable: !0,
        writable: !0,
        value: n
    })));
};
$jscomp.polyfill("Promise", function(m) {
    function n() {
        this.batch_ = null;
    }
    function k(f) {
        return f instanceof h ? f : new h(function(p, v) {
            p(f);
        });
    }
    if (m && (!($jscomp.FORCE_POLYFILL_PROMISE || $jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION && "undefined" === typeof $jscomp.global.PromiseRejectionEvent) || !$jscomp.global.Promise || -1 === $jscomp.global.Promise.toString().indexOf("[native code]"))) return m;
    n.prototype.asyncExecute = function(f) {
        if (null == this.batch_) {
            this.batch_ = [];
            var p = this;
            this.asyncExecuteFunction(function() {
                p.executeBatch_();
            });
        }
        this.batch_.push(f);
    };
    var q = $jscomp.global.setTimeout;
    n.prototype.asyncExecuteFunction = function(f) {
        q(f, 0);
    };
    n.prototype.executeBatch_ = function() {
        for(; this.batch_ && this.batch_.length;){
            var f = this.batch_;
            this.batch_ = [];
            for(var p = 0; p < f.length; ++p){
                var v = f[p];
                f[p] = null;
                try {
                    v();
                } catch (z) {
                    this.asyncThrow_(z);
                }
            }
        }
        this.batch_ = null;
    };
    n.prototype.asyncThrow_ = function(f) {
        this.asyncExecuteFunction(function() {
            throw f;
        });
    };
    var h = function(f) {
        this.state_ = 0;
        this.result_ = void 0;
        this.onSettledCallbacks_ = [];
        this.isRejectionHandled_ = !1;
        var p = this.createResolveAndReject_();
        try {
            f(p.resolve, p.reject);
        } catch (v) {
            p.reject(v);
        }
    };
    h.prototype.createResolveAndReject_ = function() {
        function f(z) {
            return function(F) {
                v || (v = !0, z.call(p, F));
            };
        }
        var p = this, v = !1;
        return {
            resolve: f(this.resolveTo_),
            reject: f(this.reject_)
        };
    };
    h.prototype.resolveTo_ = function(f) {
        if (f === this) this.reject_(new TypeError("A Promise cannot resolve to itself"));
        else if (f instanceof h) this.settleSameAsPromise_(f);
        else {
            a: switch(typeof f){
                case "object":
                    var p = null != f;
                    break a;
                case "function":
                    p = !0;
                    break a;
                default:
                    p = !1;
            }
            p ? this.resolveToNonPromiseObj_(f) : this.fulfill_(f);
        }
    };
    h.prototype.resolveToNonPromiseObj_ = function(f) {
        var p = void 0;
        try {
            p = f.then;
        } catch (v) {
            this.reject_(v);
            return;
        }
        "function" == typeof p ? this.settleSameAsThenable_(p, f) : this.fulfill_(f);
    };
    h.prototype.reject_ = function(f) {
        this.settle_(2, f);
    };
    h.prototype.fulfill_ = function(f) {
        this.settle_(1, f);
    };
    h.prototype.settle_ = function(f, p) {
        if (0 != this.state_) throw Error("Cannot settle(" + f + ", " + p + "): Promise already settled in state" + this.state_);
        this.state_ = f;
        this.result_ = p;
        2 === this.state_ && this.scheduleUnhandledRejectionCheck_();
        this.executeOnSettledCallbacks_();
    };
    h.prototype.scheduleUnhandledRejectionCheck_ = function() {
        var f = this;
        q(function() {
            if (f.notifyUnhandledRejection_()) {
                var p = $jscomp.global.console;
                "undefined" !== typeof p && p.error(f.result_);
            }
        }, 1);
    };
    h.prototype.notifyUnhandledRejection_ = function() {
        if (this.isRejectionHandled_) return !1;
        var f = $jscomp.global.CustomEvent, p = $jscomp.global.Event, v = $jscomp.global.dispatchEvent;
        if ("undefined" === typeof v) return !0;
        "function" === typeof f ? f = new f("unhandledrejection", {
            cancelable: !0
        }) : "function" === typeof p ? f = new p("unhandledrejection", {
            cancelable: !0
        }) : (f = $jscomp.global.document.createEvent("CustomEvent"), f.initCustomEvent("unhandledrejection", !1, !0, f));
        f.promise = this;
        f.reason = this.result_;
        return v(f);
    };
    h.prototype.executeOnSettledCallbacks_ = function() {
        if (null != this.onSettledCallbacks_) {
            for(var f = 0; f < this.onSettledCallbacks_.length; ++f)A.asyncExecute(this.onSettledCallbacks_[f]);
            this.onSettledCallbacks_ = null;
        }
    };
    var A = new n;
    h.prototype.settleSameAsPromise_ = function(f) {
        var p = this.createResolveAndReject_();
        f.callWhenSettled_(p.resolve, p.reject);
    };
    h.prototype.settleSameAsThenable_ = function(f, p) {
        var v = this.createResolveAndReject_();
        try {
            f.call(p, v.resolve, v.reject);
        } catch (z) {
            v.reject(z);
        }
    };
    h.prototype.then = function(f, p) {
        function v(P, t) {
            return "function" == typeof P ? function(x) {
                try {
                    z(P(x));
                } catch (D) {
                    F(D);
                }
            } : t;
        }
        var z, F, fa = new h(function(P, t) {
            z = P;
            F = t;
        });
        this.callWhenSettled_(v(f, z), v(p, F));
        return fa;
    };
    h.prototype.catch = function(f) {
        return this.then(void 0, f);
    };
    h.prototype.callWhenSettled_ = function(f, p) {
        function v() {
            switch(z.state_){
                case 1:
                    f(z.result_);
                    break;
                case 2:
                    p(z.result_);
                    break;
                default:
                    throw Error("Unexpected state: " + z.state_);
            }
        }
        var z = this;
        null == this.onSettledCallbacks_ ? A.asyncExecute(v) : this.onSettledCallbacks_.push(v);
        this.isRejectionHandled_ = !0;
    };
    h.resolve = k;
    h.reject = function(f) {
        return new h(function(p, v) {
            v(f);
        });
    };
    h.race = function(f) {
        return new h(function(p, v) {
            for(var z = $jscomp.makeIterator(f), F = z.next(); !F.done; F = z.next())k(F.value).callWhenSettled_(p, v);
        });
    };
    h.all = function(f) {
        var p = $jscomp.makeIterator(f), v = p.next();
        return v.done ? k([]) : new h(function(z, F) {
            function fa(x) {
                return function(D) {
                    P[x] = D;
                    t--;
                    0 == t && z(P);
                };
            }
            var P = [], t = 0;
            do P.push(void 0), t++, k(v.value).callWhenSettled_(fa(P.length - 1), F), v = p.next();
            while (!v.done)
        });
    };
    return h;
}, "es6", "es3");
$jscomp.checkStringArgs = function(m, n, k) {
    if (null == m) throw new TypeError("The 'this' value for String.prototype." + k + " must not be null or undefined");
    if (n instanceof RegExp) throw new TypeError("First argument to String.prototype." + k + " must not be a regular expression");
    return m + "";
};
$jscomp.polyfill("String.prototype.startsWith", function(m) {
    return m ? m : function(n, k) {
        var q = $jscomp.checkStringArgs(this, n, "startsWith");
        n += "";
        var h = q.length, A = n.length;
        k = Math.max(0, Math.min(k | 0, q.length));
        for(var f = 0; f < A && k < h;)if (q[k++] != n[f++]) return !1;
        return f >= A;
    };
}, "es6", "es3");
$jscomp.polyfill("Array.prototype.copyWithin", function(m) {
    function n(k) {
        k = Number(k);
        return Infinity === k || -Infinity === k ? k : k | 0;
    }
    return m ? m : function(k, q, h) {
        var A = this.length;
        k = n(k);
        q = n(q);
        h = void 0 === h ? A : n(h);
        k = 0 > k ? Math.max(A + k, 0) : Math.min(k, A);
        q = 0 > q ? Math.max(A + q, 0) : Math.min(q, A);
        h = 0 > h ? Math.max(A + h, 0) : Math.min(h, A);
        if (k < q) for(; q < h;)q in this ? this[k++] = this[q++] : (delete this[k++], q++);
        else for(h = Math.min(h, A + q - k), k += h - q; h > q;)--h in this ? this[--k] = this[h] : delete this[--k];
        return this;
    };
}, "es6", "es3");
$jscomp.typedArrayCopyWithin = function(m) {
    return m ? m : Array.prototype.copyWithin;
};
$jscomp.polyfill("Int8Array.prototype.copyWithin", $jscomp.typedArrayCopyWithin, "es6", "es5");
$jscomp.polyfill("Uint8Array.prototype.copyWithin", $jscomp.typedArrayCopyWithin, "es6", "es5");
$jscomp.polyfill("Uint8ClampedArray.prototype.copyWithin", $jscomp.typedArrayCopyWithin, "es6", "es5");
$jscomp.polyfill("Int16Array.prototype.copyWithin", $jscomp.typedArrayCopyWithin, "es6", "es5");
$jscomp.polyfill("Uint16Array.prototype.copyWithin", $jscomp.typedArrayCopyWithin, "es6", "es5");
$jscomp.polyfill("Int32Array.prototype.copyWithin", $jscomp.typedArrayCopyWithin, "es6", "es5");
$jscomp.polyfill("Uint32Array.prototype.copyWithin", $jscomp.typedArrayCopyWithin, "es6", "es5");
$jscomp.polyfill("Float32Array.prototype.copyWithin", $jscomp.typedArrayCopyWithin, "es6", "es5");
$jscomp.polyfill("Float64Array.prototype.copyWithin", $jscomp.typedArrayCopyWithin, "es6", "es5");
var DracoDecoderModule = function() {
    var m = "undefined" !== typeof document && document.currentScript ? document.currentScript.src : void 0;
    "undefined" !== typeof __filename && (m = m || __filename);
    return function(n) {
        function k(e) {
            return a.locateFile ? a.locateFile(e, U) : U + e;
        }
        function q(e, b) {
            e || f("Assertion failed: " + b);
        }
        function h(e, b) {
            if (e) {
                var c = ma;
                var d = e + b;
                for(b = e; c[b] && !(b >= d);)++b;
                if (16 < b - e && c.subarray && wa) c = wa.decode(c.subarray(e, b));
                else {
                    for(d = ""; e < b;){
                        var g = c[e++];
                        if (g & 128) {
                            var u = c[e++] & 63;
                            if (192 == (g & 224)) d += String.fromCharCode((g & 31) << 6 | u);
                            else {
                                var X = c[e++] & 63;
                                g = 224 == (g & 240) ? (g & 15) << 12 | u << 6 | X : (g & 7) << 18 | u << 12 | X << 6 | c[e++] & 63;
                                65536 > g ? d += String.fromCharCode(g) : (g -= 65536, d += String.fromCharCode(55296 | g >> 10, 56320 | g & 1023));
                            }
                        } else d += String.fromCharCode(g);
                    }
                    c = d;
                }
            } else c = "";
            return c;
        }
        function A(e) {
            xa = e;
            a.HEAP8 = Y = new Int8Array(e);
            a.HEAP16 = new Int16Array(e);
            a.HEAP32 = V = new Int32Array(e);
            a.HEAPU8 = ma = new Uint8Array(e);
            a.HEAPU16 = new Uint16Array(e);
            a.HEAPU32 = new Uint32Array(e);
            a.HEAPF32 = new Float32Array(e);
            a.HEAPF64 = new Float64Array(e);
        }
        function f(e) {
            if (a.onAbort) a.onAbort(e);
            e = "Aborted(" + e + ")";
            ha(e);
            ya = !0;
            e = new WebAssembly.RuntimeError(e + ". Build with -s ASSERTIONS=1 for more info.");
            qa(e);
            throw e;
        }
        function p(e) {
            try {
                if (e == Q && ia) return new Uint8Array(ia);
                if (ra) return ra(e);
                throw "both async and sync fetching of the wasm failed";
            } catch (b) {
                f(b);
            }
        }
        function v() {
            if (!ia && (za || ja)) {
                if ("function" === typeof fetch && !Q.startsWith("file://")) return fetch(Q, {
                    credentials: "same-origin"
                }).then(function(e) {
                    if (!e.ok) throw "failed to load wasm binary file at '" + Q + "'";
                    return e.arrayBuffer();
                }).catch(function() {
                    return p(Q);
                });
                if (sa) return new Promise(function(e, b) {
                    sa(Q, function(c) {
                        e(new Uint8Array(c));
                    }, b);
                });
            }
            return Promise.resolve().then(function() {
                return p(Q);
            });
        }
        function z(e) {
            for(; 0 < e.length;){
                var b = e.shift();
                if ("function" == typeof b) b(a);
                else {
                    var c = b.func;
                    "number" === typeof c ? void 0 === b.arg ? F(c)() : F(c)(b.arg) : c(void 0 === b.arg ? null : b.arg);
                }
            }
        }
        function F(e) {
            var b = na[e];
            b || (e >= na.length && (na.length = e + 1), na[e] = b = Aa.get(e));
            return b;
        }
        function fa(e) {
            this.excPtr = e;
            this.ptr = e - 16;
            this.set_type = function(b) {
                V[this.ptr + 4 >> 2] = b;
            };
            this.get_type = function() {
                return V[this.ptr + 4 >> 2];
            };
            this.set_destructor = function(b) {
                V[this.ptr + 8 >> 2] = b;
            };
            this.get_destructor = function() {
                return V[this.ptr + 8 >> 2];
            };
            this.set_refcount = function(b) {
                V[this.ptr >> 2] = b;
            };
            this.set_caught = function(b) {
                Y[this.ptr + 12 >> 0] = b ? 1 : 0;
            };
            this.get_caught = function() {
                return 0 != Y[this.ptr + 12 >> 0];
            };
            this.set_rethrown = function(b) {
                Y[this.ptr + 13 >> 0] = b ? 1 : 0;
            };
            this.get_rethrown = function() {
                return 0 != Y[this.ptr + 13 >> 0];
            };
            this.init = function(b, c) {
                this.set_type(b);
                this.set_destructor(c);
                this.set_refcount(0);
                this.set_caught(!1);
                this.set_rethrown(!1);
            };
            this.add_ref = function() {
                V[this.ptr >> 2] += 1;
            };
            this.release_ref = function() {
                var b = V[this.ptr >> 2];
                V[this.ptr >> 2] = b - 1;
                return 1 === b;
            };
        }
        function P(e) {
            function b() {
                if (!oa && (oa = !0, a.calledRun = !0, !ya)) {
                    Ba = !0;
                    z(ta);
                    Ca(a);
                    if (a.onRuntimeInitialized) a.onRuntimeInitialized();
                    if (a.postRun) for("function" == typeof a.postRun && (a.postRun = [
                        a.postRun
                    ]); a.postRun.length;)Da.unshift(a.postRun.shift());
                    z(Da);
                }
            }
            if (!(0 < ca)) {
                if (a.preRun) for("function" == typeof a.preRun && (a.preRun = [
                    a.preRun
                ]); a.preRun.length;)Ea.unshift(a.preRun.shift());
                z(Ea);
                0 < ca || (a.setStatus ? (a.setStatus("Running..."), setTimeout(function() {
                    setTimeout(function() {
                        a.setStatus("");
                    }, 1);
                    b();
                }, 1)) : b());
            }
        }
        function t() {
        }
        function x(e) {
            return (e || t).__cache__;
        }
        function D(e, b) {
            var c = x(b), d = c[e];
            if (d) return d;
            d = Object.create((b || t).prototype);
            d.ptr = e;
            return c[e] = d;
        }
        function aa(e) {
            if ("string" === typeof e) {
                for(var b = 0, c = 0; c < e.length; ++c){
                    var d = e.charCodeAt(c);
                    55296 <= d && 57343 >= d && (d = 65536 + ((d & 1023) << 10) | e.charCodeAt(++c) & 1023);
                    127 >= d ? ++b : b = 2047 >= d ? b + 2 : 65535 >= d ? b + 3 : b + 4;
                }
                b = Array(b + 1);
                c = 0;
                d = b.length;
                if (0 < d) {
                    d = c + d - 1;
                    for(var g = 0; g < e.length; ++g){
                        var u = e.charCodeAt(g);
                        if (55296 <= u && 57343 >= u) {
                            var X = e.charCodeAt(++g);
                            u = 65536 + ((u & 1023) << 10) | X & 1023;
                        }
                        if (127 >= u) {
                            if (c >= d) break;
                            b[c++] = u;
                        } else {
                            if (2047 >= u) {
                                if (c + 1 >= d) break;
                                b[c++] = 192 | u >> 6;
                            } else {
                                if (65535 >= u) {
                                    if (c + 2 >= d) break;
                                    b[c++] = 224 | u >> 12;
                                } else {
                                    if (c + 3 >= d) break;
                                    b[c++] = 240 | u >> 18;
                                    b[c++] = 128 | u >> 12 & 63;
                                }
                                b[c++] = 128 | u >> 6 & 63;
                            }
                            b[c++] = 128 | u & 63;
                        }
                    }
                    b[c] = 0;
                }
                e = r.alloc(b, Y);
                r.copy(b, Y, e);
                return e;
            }
            return e;
        }
        function ua(e) {
            if ("object" === typeof e) {
                var b = r.alloc(e, Y);
                r.copy(e, Y, b);
                return b;
            }
            return e;
        }
        function Z() {
            throw "cannot construct a VoidPtr, no constructor in IDL";
        }
        function S() {
            this.ptr = Fa();
            x(S)[this.ptr] = this;
        }
        function R() {
            this.ptr = Ga();
            x(R)[this.ptr] = this;
        }
        function W() {
            this.ptr = Ha();
            x(W)[this.ptr] = this;
        }
        function w() {
            this.ptr = Ia();
            x(w)[this.ptr] = this;
        }
        function C() {
            this.ptr = Ja();
            x(C)[this.ptr] = this;
        }
        function G() {
            this.ptr = Ka();
            x(G)[this.ptr] = this;
        }
        function H() {
            this.ptr = La();
            x(H)[this.ptr] = this;
        }
        function E() {
            this.ptr = Ma();
            x(E)[this.ptr] = this;
        }
        function T() {
            this.ptr = Na();
            x(T)[this.ptr] = this;
        }
        function B() {
            throw "cannot construct a Status, no constructor in IDL";
        }
        function I() {
            this.ptr = Oa();
            x(I)[this.ptr] = this;
        }
        function J() {
            this.ptr = Pa();
            x(J)[this.ptr] = this;
        }
        function K() {
            this.ptr = Qa();
            x(K)[this.ptr] = this;
        }
        function L() {
            this.ptr = Ra();
            x(L)[this.ptr] = this;
        }
        function M() {
            this.ptr = Sa();
            x(M)[this.ptr] = this;
        }
        function N() {
            this.ptr = Ta();
            x(N)[this.ptr] = this;
        }
        function O() {
            this.ptr = Ua();
            x(O)[this.ptr] = this;
        }
        function y() {
            this.ptr = Va();
            x(y)[this.ptr] = this;
        }
        function l() {
            this.ptr = Wa();
            x(l)[this.ptr] = this;
        }
        n = n || {
        };
        var a = "undefined" !== typeof n ? n : {
        }, Ca, qa;
        a.ready = new Promise(function(e, b) {
            Ca = e;
            qa = b;
        });
        var Xa = !1, Ya = !1;
        a.onRuntimeInitialized = function() {
            Xa = !0;
            if (Ya && "function" === typeof a.onModuleLoaded) a.onModuleLoaded(a);
        };
        a.onModuleParsed = function() {
            Ya = !0;
            if (Xa && "function" === typeof a.onModuleLoaded) a.onModuleLoaded(a);
        };
        a.isVersionSupported = function(e) {
            if ("string" !== typeof e) return !1;
            e = e.split(".");
            return 2 > e.length || 3 < e.length ? !1 : 1 == e[0] && 0 <= e[1] && 5 >= e[1] ? !0 : 0 != e[0] || 10 < e[1] ? !1 : !0;
        };
        var ka = {
        }, ba;
        for(ba in a)a.hasOwnProperty(ba) && (ka[ba] = a[ba]);
        var za = "object" === typeof window, ja = "function" === typeof importScripts, U = "", da, ea;
        if ("object" === typeof process && "object" === typeof process.versions && "string" === typeof process.versions.node) {
            U = ja ? require("path").dirname(U) + "/" : __dirname + "/";
            var Za = function(e, b) {
                da || (da = require("fs"));
                ea || (ea = require("path"));
                e = ea.normalize(e);
                return da.readFileSync(e, b ? null : "utf8");
            };
            var ra = function(e) {
                e = Za(e, !0);
                e.buffer || (e = new Uint8Array(e));
                q(e.buffer);
                return e;
            };
            var sa = function(e, b, c) {
                da || (da = require("fs"));
                ea || (ea = require("path"));
                e = ea.normalize(e);
                da.readFile(e, function(d, g) {
                    d ? c(d) : b(g.buffer);
                });
            };
            1 < process.argv.length && process.argv[1].replace(/\\/g, "/");
            process.argv.slice(2);
            a.inspect = function() {
                return "[Emscripten Module object]";
            };
        } else if (za || ja) ja ? U = self.location.href : "undefined" !== typeof document && document.currentScript && (U = document.currentScript.src), m && (U = m), U = 0 !== U.indexOf("blob:") ? U.substr(0, U.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", Za = function(e) {
            var b = new XMLHttpRequest;
            b.open("GET", e, !1);
            b.send(null);
            return b.responseText;
        }, ja && (ra = function(e) {
            var b = new XMLHttpRequest;
            b.open("GET", e, !1);
            b.responseType = "arraybuffer";
            b.send(null);
            return new Uint8Array(b.response);
        }), sa = function(e, b, c) {
            var d = new XMLHttpRequest;
            d.open("GET", e, !0);
            d.responseType = "arraybuffer";
            d.onload = function() {
                200 == d.status || 0 == d.status && d.response ? b(d.response) : c();
            };
            d.onerror = c;
            d.send(null);
        };
        a.print || console.log.bind(console);
        var ha = a.printErr || console.warn.bind(console);
        for(ba in ka)ka.hasOwnProperty(ba) && (a[ba] = ka[ba]);
        ka = null;
        var ia;
        a.wasmBinary && (ia = a.wasmBinary);
        "object" !== typeof WebAssembly && f("no native wasm support detected");
        var pa, ya = !1, wa = "undefined" !== typeof TextDecoder ? new TextDecoder("utf8") : void 0, xa, Y, ma, V, Aa, Ea = [], ta = [], Da = [], Ba = !1, ca = 0, va = null, la = null;
        a.preloadedImages = {
        };
        a.preloadedAudios = {
        };
        var Q = "draco_decoder_gltf.wasm";
        Q.startsWith("data:application/octet-stream;base64,") || (Q = k(Q));
        var na = [], td = 0, ud = {
            e: function(e) {
                return $a(e + 16) + 16;
            },
            d: function(e, b, c) {
                new fa(e).init(b, c);
                td++;
                throw e;
            },
            a: function() {
                f("");
            },
            b: function(e, b, c) {
                ma.copyWithin(e, b, b + c);
            },
            c: function(e) {
                var b = ma.length;
                e >>>= 0;
                if (2147483648 < e) return !1;
                for(var c = 1; 4 >= c; c *= 2){
                    var d = b * (1 + 0.2 / c);
                    d = Math.min(d, e + 100663296);
                    var g = Math, u = g.min;
                    d = Math.max(e, d);
                    0 < d % 65536 && (d += 65536 - d % 65536);
                    g = u.call(g, 2147483648, d);
                    a: {
                        try {
                            pa.grow(g - xa.byteLength + 65535 >>> 16);
                            A(pa.buffer);
                            var X = 1;
                            break a;
                        } catch (vd) {
                        }
                        X = void 0;
                    }
                    if (X) return !0;
                }
                return !1;
            }
        };
        (function() {
            function e(g, u) {
                a.asm = g.exports;
                pa = a.asm.f;
                A(pa.buffer);
                Aa = a.asm.h;
                ta.unshift(a.asm.g);
                ca--;
                a.monitorRunDependencies && a.monitorRunDependencies(ca);
                0 == ca && (null !== va && (clearInterval(va), va = null), la && (g = la, la = null, g()));
            }
            function b(g) {
                e(g.instance);
            }
            function c(g) {
                return v().then(function(u) {
                    return WebAssembly.instantiate(u, d);
                }).then(function(u) {
                    return u;
                }).then(g, function(u) {
                    ha("failed to asynchronously prepare wasm: " + u);
                    f(u);
                });
            }
            var d = {
                a: ud
            };
            ca++;
            a.monitorRunDependencies && a.monitorRunDependencies(ca);
            if (a.instantiateWasm) try {
                return a.instantiateWasm(d, e);
            } catch (g) {
                return ha("Module.instantiateWasm callback failed with error: " + g), !1;
            }
            (function() {
                return ia || "function" !== typeof WebAssembly.instantiateStreaming || Q.startsWith("data:application/octet-stream;base64,") || Q.startsWith("file://") || "function" !== typeof fetch ? c(b) : fetch(Q, {
                    credentials: "same-origin"
                }).then(function(g) {
                    return WebAssembly.instantiateStreaming(g, d).then(b, function(u) {
                        ha("wasm streaming compile failed: " + u);
                        ha("falling back to ArrayBuffer instantiation");
                        return c(b);
                    });
                });
            })().catch(qa);
            return {
            };
        })();
        a.___wasm_call_ctors = function() {
            return (a.___wasm_call_ctors = a.asm.g).apply(null, arguments);
        };
        var ab = a._emscripten_bind_VoidPtr___destroy___0 = function() {
            return (ab = a._emscripten_bind_VoidPtr___destroy___0 = a.asm.i).apply(null, arguments);
        }, Fa = a._emscripten_bind_DecoderBuffer_DecoderBuffer_0 = function() {
            return (Fa = a._emscripten_bind_DecoderBuffer_DecoderBuffer_0 = a.asm.j).apply(null, arguments);
        }, bb = a._emscripten_bind_DecoderBuffer_Init_2 = function() {
            return (bb = a._emscripten_bind_DecoderBuffer_Init_2 = a.asm.k).apply(null, arguments);
        }, cb = a._emscripten_bind_DecoderBuffer___destroy___0 = function() {
            return (cb = a._emscripten_bind_DecoderBuffer___destroy___0 = a.asm.l).apply(null, arguments);
        }, Ga = a._emscripten_bind_AttributeTransformData_AttributeTransformData_0 = function() {
            return (Ga = a._emscripten_bind_AttributeTransformData_AttributeTransformData_0 = a.asm.m).apply(null, arguments);
        }, db = a._emscripten_bind_AttributeTransformData_transform_type_0 = function() {
            return (db = a._emscripten_bind_AttributeTransformData_transform_type_0 = a.asm.n).apply(null, arguments);
        }, eb = a._emscripten_bind_AttributeTransformData___destroy___0 = function() {
            return (eb = a._emscripten_bind_AttributeTransformData___destroy___0 = a.asm.o).apply(null, arguments);
        }, Ha = a._emscripten_bind_GeometryAttribute_GeometryAttribute_0 = function() {
            return (Ha = a._emscripten_bind_GeometryAttribute_GeometryAttribute_0 = a.asm.p).apply(null, arguments);
        }, fb = a._emscripten_bind_GeometryAttribute___destroy___0 = function() {
            return (fb = a._emscripten_bind_GeometryAttribute___destroy___0 = a.asm.q).apply(null, arguments);
        }, Ia = a._emscripten_bind_PointAttribute_PointAttribute_0 = function() {
            return (Ia = a._emscripten_bind_PointAttribute_PointAttribute_0 = a.asm.r).apply(null, arguments);
        }, gb = a._emscripten_bind_PointAttribute_size_0 = function() {
            return (gb = a._emscripten_bind_PointAttribute_size_0 = a.asm.s).apply(null, arguments);
        }, hb = a._emscripten_bind_PointAttribute_GetAttributeTransformData_0 = function() {
            return (hb = a._emscripten_bind_PointAttribute_GetAttributeTransformData_0 = a.asm.t).apply(null, arguments);
        }, ib = a._emscripten_bind_PointAttribute_attribute_type_0 = function() {
            return (ib = a._emscripten_bind_PointAttribute_attribute_type_0 = a.asm.u).apply(null, arguments);
        }, jb = a._emscripten_bind_PointAttribute_data_type_0 = function() {
            return (jb = a._emscripten_bind_PointAttribute_data_type_0 = a.asm.v).apply(null, arguments);
        }, kb = a._emscripten_bind_PointAttribute_num_components_0 = function() {
            return (kb = a._emscripten_bind_PointAttribute_num_components_0 = a.asm.w).apply(null, arguments);
        }, lb = a._emscripten_bind_PointAttribute_normalized_0 = function() {
            return (lb = a._emscripten_bind_PointAttribute_normalized_0 = a.asm.x).apply(null, arguments);
        }, mb = a._emscripten_bind_PointAttribute_byte_stride_0 = function() {
            return (mb = a._emscripten_bind_PointAttribute_byte_stride_0 = a.asm.y).apply(null, arguments);
        }, nb = a._emscripten_bind_PointAttribute_byte_offset_0 = function() {
            return (nb = a._emscripten_bind_PointAttribute_byte_offset_0 = a.asm.z).apply(null, arguments);
        }, ob = a._emscripten_bind_PointAttribute_unique_id_0 = function() {
            return (ob = a._emscripten_bind_PointAttribute_unique_id_0 = a.asm.A).apply(null, arguments);
        }, pb = a._emscripten_bind_PointAttribute___destroy___0 = function() {
            return (pb = a._emscripten_bind_PointAttribute___destroy___0 = a.asm.B).apply(null, arguments);
        }, Ja = a._emscripten_bind_AttributeQuantizationTransform_AttributeQuantizationTransform_0 = function() {
            return (Ja = a._emscripten_bind_AttributeQuantizationTransform_AttributeQuantizationTransform_0 = a.asm.C).apply(null, arguments);
        }, qb = a._emscripten_bind_AttributeQuantizationTransform_InitFromAttribute_1 = function() {
            return (qb = a._emscripten_bind_AttributeQuantizationTransform_InitFromAttribute_1 = a.asm.D).apply(null, arguments);
        }, rb = a._emscripten_bind_AttributeQuantizationTransform_quantization_bits_0 = function() {
            return (rb = a._emscripten_bind_AttributeQuantizationTransform_quantization_bits_0 = a.asm.E).apply(null, arguments);
        }, sb = a._emscripten_bind_AttributeQuantizationTransform_min_value_1 = function() {
            return (sb = a._emscripten_bind_AttributeQuantizationTransform_min_value_1 = a.asm.F).apply(null, arguments);
        }, tb = a._emscripten_bind_AttributeQuantizationTransform_range_0 = function() {
            return (tb = a._emscripten_bind_AttributeQuantizationTransform_range_0 = a.asm.G).apply(null, arguments);
        }, ub = a._emscripten_bind_AttributeQuantizationTransform___destroy___0 = function() {
            return (ub = a._emscripten_bind_AttributeQuantizationTransform___destroy___0 = a.asm.H).apply(null, arguments);
        }, Ka = a._emscripten_bind_AttributeOctahedronTransform_AttributeOctahedronTransform_0 = function() {
            return (Ka = a._emscripten_bind_AttributeOctahedronTransform_AttributeOctahedronTransform_0 = a.asm.I).apply(null, arguments);
        }, vb = a._emscripten_bind_AttributeOctahedronTransform_InitFromAttribute_1 = function() {
            return (vb = a._emscripten_bind_AttributeOctahedronTransform_InitFromAttribute_1 = a.asm.J).apply(null, arguments);
        }, wb = a._emscripten_bind_AttributeOctahedronTransform_quantization_bits_0 = function() {
            return (wb = a._emscripten_bind_AttributeOctahedronTransform_quantization_bits_0 = a.asm.K).apply(null, arguments);
        }, xb = a._emscripten_bind_AttributeOctahedronTransform___destroy___0 = function() {
            return (xb = a._emscripten_bind_AttributeOctahedronTransform___destroy___0 = a.asm.L).apply(null, arguments);
        }, La = a._emscripten_bind_PointCloud_PointCloud_0 = function() {
            return (La = a._emscripten_bind_PointCloud_PointCloud_0 = a.asm.M).apply(null, arguments);
        }, yb = a._emscripten_bind_PointCloud_num_attributes_0 = function() {
            return (yb = a._emscripten_bind_PointCloud_num_attributes_0 = a.asm.N).apply(null, arguments);
        }, zb = a._emscripten_bind_PointCloud_num_points_0 = function() {
            return (zb = a._emscripten_bind_PointCloud_num_points_0 = a.asm.O).apply(null, arguments);
        }, Ab = a._emscripten_bind_PointCloud___destroy___0 = function() {
            return (Ab = a._emscripten_bind_PointCloud___destroy___0 = a.asm.P).apply(null, arguments);
        }, Ma = a._emscripten_bind_Mesh_Mesh_0 = function() {
            return (Ma = a._emscripten_bind_Mesh_Mesh_0 = a.asm.Q).apply(null, arguments);
        }, Bb = a._emscripten_bind_Mesh_num_faces_0 = function() {
            return (Bb = a._emscripten_bind_Mesh_num_faces_0 = a.asm.R).apply(null, arguments);
        }, Cb = a._emscripten_bind_Mesh_num_attributes_0 = function() {
            return (Cb = a._emscripten_bind_Mesh_num_attributes_0 = a.asm.S).apply(null, arguments);
        }, Db = a._emscripten_bind_Mesh_num_points_0 = function() {
            return (Db = a._emscripten_bind_Mesh_num_points_0 = a.asm.T).apply(null, arguments);
        }, Eb = a._emscripten_bind_Mesh___destroy___0 = function() {
            return (Eb = a._emscripten_bind_Mesh___destroy___0 = a.asm.U).apply(null, arguments);
        }, Na = a._emscripten_bind_Metadata_Metadata_0 = function() {
            return (Na = a._emscripten_bind_Metadata_Metadata_0 = a.asm.V).apply(null, arguments);
        }, Fb = a._emscripten_bind_Metadata___destroy___0 = function() {
            return (Fb = a._emscripten_bind_Metadata___destroy___0 = a.asm.W).apply(null, arguments);
        }, Gb = a._emscripten_bind_Status_code_0 = function() {
            return (Gb = a._emscripten_bind_Status_code_0 = a.asm.X).apply(null, arguments);
        }, Hb = a._emscripten_bind_Status_ok_0 = function() {
            return (Hb = a._emscripten_bind_Status_ok_0 = a.asm.Y).apply(null, arguments);
        }, Ib = a._emscripten_bind_Status_error_msg_0 = function() {
            return (Ib = a._emscripten_bind_Status_error_msg_0 = a.asm.Z).apply(null, arguments);
        }, Jb = a._emscripten_bind_Status___destroy___0 = function() {
            return (Jb = a._emscripten_bind_Status___destroy___0 = a.asm._).apply(null, arguments);
        }, Oa = a._emscripten_bind_DracoFloat32Array_DracoFloat32Array_0 = function() {
            return (Oa = a._emscripten_bind_DracoFloat32Array_DracoFloat32Array_0 = a.asm.$).apply(null, arguments);
        }, Kb = a._emscripten_bind_DracoFloat32Array_GetValue_1 = function() {
            return (Kb = a._emscripten_bind_DracoFloat32Array_GetValue_1 = a.asm.aa).apply(null, arguments);
        }, Lb = a._emscripten_bind_DracoFloat32Array_size_0 = function() {
            return (Lb = a._emscripten_bind_DracoFloat32Array_size_0 = a.asm.ba).apply(null, arguments);
        }, Mb = a._emscripten_bind_DracoFloat32Array___destroy___0 = function() {
            return (Mb = a._emscripten_bind_DracoFloat32Array___destroy___0 = a.asm.ca).apply(null, arguments);
        }, Pa = a._emscripten_bind_DracoInt8Array_DracoInt8Array_0 = function() {
            return (Pa = a._emscripten_bind_DracoInt8Array_DracoInt8Array_0 = a.asm.da).apply(null, arguments);
        }, Nb = a._emscripten_bind_DracoInt8Array_GetValue_1 = function() {
            return (Nb = a._emscripten_bind_DracoInt8Array_GetValue_1 = a.asm.ea).apply(null, arguments);
        }, Ob = a._emscripten_bind_DracoInt8Array_size_0 = function() {
            return (Ob = a._emscripten_bind_DracoInt8Array_size_0 = a.asm.fa).apply(null, arguments);
        }, Pb = a._emscripten_bind_DracoInt8Array___destroy___0 = function() {
            return (Pb = a._emscripten_bind_DracoInt8Array___destroy___0 = a.asm.ga).apply(null, arguments);
        }, Qa = a._emscripten_bind_DracoUInt8Array_DracoUInt8Array_0 = function() {
            return (Qa = a._emscripten_bind_DracoUInt8Array_DracoUInt8Array_0 = a.asm.ha).apply(null, arguments);
        }, Qb = a._emscripten_bind_DracoUInt8Array_GetValue_1 = function() {
            return (Qb = a._emscripten_bind_DracoUInt8Array_GetValue_1 = a.asm.ia).apply(null, arguments);
        }, Rb = a._emscripten_bind_DracoUInt8Array_size_0 = function() {
            return (Rb = a._emscripten_bind_DracoUInt8Array_size_0 = a.asm.ja).apply(null, arguments);
        }, Sb = a._emscripten_bind_DracoUInt8Array___destroy___0 = function() {
            return (Sb = a._emscripten_bind_DracoUInt8Array___destroy___0 = a.asm.ka).apply(null, arguments);
        }, Ra = a._emscripten_bind_DracoInt16Array_DracoInt16Array_0 = function() {
            return (Ra = a._emscripten_bind_DracoInt16Array_DracoInt16Array_0 = a.asm.la).apply(null, arguments);
        }, Tb = a._emscripten_bind_DracoInt16Array_GetValue_1 = function() {
            return (Tb = a._emscripten_bind_DracoInt16Array_GetValue_1 = a.asm.ma).apply(null, arguments);
        }, Ub = a._emscripten_bind_DracoInt16Array_size_0 = function() {
            return (Ub = a._emscripten_bind_DracoInt16Array_size_0 = a.asm.na).apply(null, arguments);
        }, Vb = a._emscripten_bind_DracoInt16Array___destroy___0 = function() {
            return (Vb = a._emscripten_bind_DracoInt16Array___destroy___0 = a.asm.oa).apply(null, arguments);
        }, Sa = a._emscripten_bind_DracoUInt16Array_DracoUInt16Array_0 = function() {
            return (Sa = a._emscripten_bind_DracoUInt16Array_DracoUInt16Array_0 = a.asm.pa).apply(null, arguments);
        }, Wb = a._emscripten_bind_DracoUInt16Array_GetValue_1 = function() {
            return (Wb = a._emscripten_bind_DracoUInt16Array_GetValue_1 = a.asm.qa).apply(null, arguments);
        }, Xb = a._emscripten_bind_DracoUInt16Array_size_0 = function() {
            return (Xb = a._emscripten_bind_DracoUInt16Array_size_0 = a.asm.ra).apply(null, arguments);
        }, Yb = a._emscripten_bind_DracoUInt16Array___destroy___0 = function() {
            return (Yb = a._emscripten_bind_DracoUInt16Array___destroy___0 = a.asm.sa).apply(null, arguments);
        }, Ta = a._emscripten_bind_DracoInt32Array_DracoInt32Array_0 = function() {
            return (Ta = a._emscripten_bind_DracoInt32Array_DracoInt32Array_0 = a.asm.ta).apply(null, arguments);
        }, Zb = a._emscripten_bind_DracoInt32Array_GetValue_1 = function() {
            return (Zb = a._emscripten_bind_DracoInt32Array_GetValue_1 = a.asm.ua).apply(null, arguments);
        }, $b = a._emscripten_bind_DracoInt32Array_size_0 = function() {
            return ($b = a._emscripten_bind_DracoInt32Array_size_0 = a.asm.va).apply(null, arguments);
        }, ac = a._emscripten_bind_DracoInt32Array___destroy___0 = function() {
            return (ac = a._emscripten_bind_DracoInt32Array___destroy___0 = a.asm.wa).apply(null, arguments);
        }, Ua = a._emscripten_bind_DracoUInt32Array_DracoUInt32Array_0 = function() {
            return (Ua = a._emscripten_bind_DracoUInt32Array_DracoUInt32Array_0 = a.asm.xa).apply(null, arguments);
        }, bc = a._emscripten_bind_DracoUInt32Array_GetValue_1 = function() {
            return (bc = a._emscripten_bind_DracoUInt32Array_GetValue_1 = a.asm.ya).apply(null, arguments);
        }, cc = a._emscripten_bind_DracoUInt32Array_size_0 = function() {
            return (cc = a._emscripten_bind_DracoUInt32Array_size_0 = a.asm.za).apply(null, arguments);
        }, dc = a._emscripten_bind_DracoUInt32Array___destroy___0 = function() {
            return (dc = a._emscripten_bind_DracoUInt32Array___destroy___0 = a.asm.Aa).apply(null, arguments);
        }, Va = a._emscripten_bind_MetadataQuerier_MetadataQuerier_0 = function() {
            return (Va = a._emscripten_bind_MetadataQuerier_MetadataQuerier_0 = a.asm.Ba).apply(null, arguments);
        }, ec = a._emscripten_bind_MetadataQuerier_HasEntry_2 = function() {
            return (ec = a._emscripten_bind_MetadataQuerier_HasEntry_2 = a.asm.Ca).apply(null, arguments);
        }, fc = a._emscripten_bind_MetadataQuerier_GetIntEntry_2 = function() {
            return (fc = a._emscripten_bind_MetadataQuerier_GetIntEntry_2 = a.asm.Da).apply(null, arguments);
        }, gc = a._emscripten_bind_MetadataQuerier_GetIntEntryArray_3 = function() {
            return (gc = a._emscripten_bind_MetadataQuerier_GetIntEntryArray_3 = a.asm.Ea).apply(null, arguments);
        }, hc = a._emscripten_bind_MetadataQuerier_GetDoubleEntry_2 = function() {
            return (hc = a._emscripten_bind_MetadataQuerier_GetDoubleEntry_2 = a.asm.Fa).apply(null, arguments);
        }, ic = a._emscripten_bind_MetadataQuerier_GetStringEntry_2 = function() {
            return (ic = a._emscripten_bind_MetadataQuerier_GetStringEntry_2 = a.asm.Ga).apply(null, arguments);
        }, jc = a._emscripten_bind_MetadataQuerier_NumEntries_1 = function() {
            return (jc = a._emscripten_bind_MetadataQuerier_NumEntries_1 = a.asm.Ha).apply(null, arguments);
        }, kc = a._emscripten_bind_MetadataQuerier_GetEntryName_2 = function() {
            return (kc = a._emscripten_bind_MetadataQuerier_GetEntryName_2 = a.asm.Ia).apply(null, arguments);
        }, lc = a._emscripten_bind_MetadataQuerier___destroy___0 = function() {
            return (lc = a._emscripten_bind_MetadataQuerier___destroy___0 = a.asm.Ja).apply(null, arguments);
        }, Wa = a._emscripten_bind_Decoder_Decoder_0 = function() {
            return (Wa = a._emscripten_bind_Decoder_Decoder_0 = a.asm.Ka).apply(null, arguments);
        }, mc = a._emscripten_bind_Decoder_DecodeArrayToPointCloud_3 = function() {
            return (mc = a._emscripten_bind_Decoder_DecodeArrayToPointCloud_3 = a.asm.La).apply(null, arguments);
        }, nc = a._emscripten_bind_Decoder_DecodeArrayToMesh_3 = function() {
            return (nc = a._emscripten_bind_Decoder_DecodeArrayToMesh_3 = a.asm.Ma).apply(null, arguments);
        }, oc = a._emscripten_bind_Decoder_GetAttributeId_2 = function() {
            return (oc = a._emscripten_bind_Decoder_GetAttributeId_2 = a.asm.Na).apply(null, arguments);
        }, pc = a._emscripten_bind_Decoder_GetAttributeIdByName_2 = function() {
            return (pc = a._emscripten_bind_Decoder_GetAttributeIdByName_2 = a.asm.Oa).apply(null, arguments);
        }, qc = a._emscripten_bind_Decoder_GetAttributeIdByMetadataEntry_3 = function() {
            return (qc = a._emscripten_bind_Decoder_GetAttributeIdByMetadataEntry_3 = a.asm.Pa).apply(null, arguments);
        }, rc = a._emscripten_bind_Decoder_GetAttribute_2 = function() {
            return (rc = a._emscripten_bind_Decoder_GetAttribute_2 = a.asm.Qa).apply(null, arguments);
        }, sc = a._emscripten_bind_Decoder_GetAttributeByUniqueId_2 = function() {
            return (sc = a._emscripten_bind_Decoder_GetAttributeByUniqueId_2 = a.asm.Ra).apply(null, arguments);
        }, tc = a._emscripten_bind_Decoder_GetMetadata_1 = function() {
            return (tc = a._emscripten_bind_Decoder_GetMetadata_1 = a.asm.Sa).apply(null, arguments);
        }, uc = a._emscripten_bind_Decoder_GetAttributeMetadata_2 = function() {
            return (uc = a._emscripten_bind_Decoder_GetAttributeMetadata_2 = a.asm.Ta).apply(null, arguments);
        }, vc = a._emscripten_bind_Decoder_GetFaceFromMesh_3 = function() {
            return (vc = a._emscripten_bind_Decoder_GetFaceFromMesh_3 = a.asm.Ua).apply(null, arguments);
        }, wc = a._emscripten_bind_Decoder_GetTriangleStripsFromMesh_2 = function() {
            return (wc = a._emscripten_bind_Decoder_GetTriangleStripsFromMesh_2 = a.asm.Va).apply(null, arguments);
        }, xc = a._emscripten_bind_Decoder_GetTrianglesUInt16Array_3 = function() {
            return (xc = a._emscripten_bind_Decoder_GetTrianglesUInt16Array_3 = a.asm.Wa).apply(null, arguments);
        }, yc = a._emscripten_bind_Decoder_GetTrianglesUInt32Array_3 = function() {
            return (yc = a._emscripten_bind_Decoder_GetTrianglesUInt32Array_3 = a.asm.Xa).apply(null, arguments);
        }, zc = a._emscripten_bind_Decoder_GetAttributeFloat_3 = function() {
            return (zc = a._emscripten_bind_Decoder_GetAttributeFloat_3 = a.asm.Ya).apply(null, arguments);
        }, Ac = a._emscripten_bind_Decoder_GetAttributeFloatForAllPoints_3 = function() {
            return (Ac = a._emscripten_bind_Decoder_GetAttributeFloatForAllPoints_3 = a.asm.Za).apply(null, arguments);
        }, Bc = a._emscripten_bind_Decoder_GetAttributeIntForAllPoints_3 = function() {
            return (Bc = a._emscripten_bind_Decoder_GetAttributeIntForAllPoints_3 = a.asm._a).apply(null, arguments);
        }, Cc = a._emscripten_bind_Decoder_GetAttributeInt8ForAllPoints_3 = function() {
            return (Cc = a._emscripten_bind_Decoder_GetAttributeInt8ForAllPoints_3 = a.asm.$a).apply(null, arguments);
        }, Dc = a._emscripten_bind_Decoder_GetAttributeUInt8ForAllPoints_3 = function() {
            return (Dc = a._emscripten_bind_Decoder_GetAttributeUInt8ForAllPoints_3 = a.asm.ab).apply(null, arguments);
        }, Ec = a._emscripten_bind_Decoder_GetAttributeInt16ForAllPoints_3 = function() {
            return (Ec = a._emscripten_bind_Decoder_GetAttributeInt16ForAllPoints_3 = a.asm.bb).apply(null, arguments);
        }, Fc = a._emscripten_bind_Decoder_GetAttributeUInt16ForAllPoints_3 = function() {
            return (Fc = a._emscripten_bind_Decoder_GetAttributeUInt16ForAllPoints_3 = a.asm.cb).apply(null, arguments);
        }, Gc = a._emscripten_bind_Decoder_GetAttributeInt32ForAllPoints_3 = function() {
            return (Gc = a._emscripten_bind_Decoder_GetAttributeInt32ForAllPoints_3 = a.asm.db).apply(null, arguments);
        }, Hc = a._emscripten_bind_Decoder_GetAttributeUInt32ForAllPoints_3 = function() {
            return (Hc = a._emscripten_bind_Decoder_GetAttributeUInt32ForAllPoints_3 = a.asm.eb).apply(null, arguments);
        }, Ic = a._emscripten_bind_Decoder_GetAttributeDataArrayForAllPoints_5 = function() {
            return (Ic = a._emscripten_bind_Decoder_GetAttributeDataArrayForAllPoints_5 = a.asm.fb).apply(null, arguments);
        }, Jc = a._emscripten_bind_Decoder_SkipAttributeTransform_1 = function() {
            return (Jc = a._emscripten_bind_Decoder_SkipAttributeTransform_1 = a.asm.gb).apply(null, arguments);
        }, Kc = a._emscripten_bind_Decoder_GetEncodedGeometryType_Deprecated_1 = function() {
            return (Kc = a._emscripten_bind_Decoder_GetEncodedGeometryType_Deprecated_1 = a.asm.hb).apply(null, arguments);
        }, Lc = a._emscripten_bind_Decoder_DecodeBufferToPointCloud_2 = function() {
            return (Lc = a._emscripten_bind_Decoder_DecodeBufferToPointCloud_2 = a.asm.ib).apply(null, arguments);
        }, Mc = a._emscripten_bind_Decoder_DecodeBufferToMesh_2 = function() {
            return (Mc = a._emscripten_bind_Decoder_DecodeBufferToMesh_2 = a.asm.jb).apply(null, arguments);
        }, Nc = a._emscripten_bind_Decoder___destroy___0 = function() {
            return (Nc = a._emscripten_bind_Decoder___destroy___0 = a.asm.kb).apply(null, arguments);
        }, Oc = a._emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_INVALID_TRANSFORM = function() {
            return (Oc = a._emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_INVALID_TRANSFORM = a.asm.lb).apply(null, arguments);
        }, Pc = a._emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_NO_TRANSFORM = function() {
            return (Pc = a._emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_NO_TRANSFORM = a.asm.mb).apply(null, arguments);
        }, Qc = a._emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_QUANTIZATION_TRANSFORM = function() {
            return (Qc = a._emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_QUANTIZATION_TRANSFORM = a.asm.nb).apply(null, arguments);
        }, Rc = a._emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_OCTAHEDRON_TRANSFORM = function() {
            return (Rc = a._emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_OCTAHEDRON_TRANSFORM = a.asm.ob).apply(null, arguments);
        }, Sc = a._emscripten_enum_draco_GeometryAttribute_Type_INVALID = function() {
            return (Sc = a._emscripten_enum_draco_GeometryAttribute_Type_INVALID = a.asm.pb).apply(null, arguments);
        }, Tc = a._emscripten_enum_draco_GeometryAttribute_Type_POSITION = function() {
            return (Tc = a._emscripten_enum_draco_GeometryAttribute_Type_POSITION = a.asm.qb).apply(null, arguments);
        }, Uc = a._emscripten_enum_draco_GeometryAttribute_Type_NORMAL = function() {
            return (Uc = a._emscripten_enum_draco_GeometryAttribute_Type_NORMAL = a.asm.rb).apply(null, arguments);
        }, Vc = a._emscripten_enum_draco_GeometryAttribute_Type_COLOR = function() {
            return (Vc = a._emscripten_enum_draco_GeometryAttribute_Type_COLOR = a.asm.sb).apply(null, arguments);
        }, Wc = a._emscripten_enum_draco_GeometryAttribute_Type_TEX_COORD = function() {
            return (Wc = a._emscripten_enum_draco_GeometryAttribute_Type_TEX_COORD = a.asm.tb).apply(null, arguments);
        }, Xc = a._emscripten_enum_draco_GeometryAttribute_Type_GENERIC = function() {
            return (Xc = a._emscripten_enum_draco_GeometryAttribute_Type_GENERIC = a.asm.ub).apply(null, arguments);
        }, Yc = a._emscripten_enum_draco_EncodedGeometryType_INVALID_GEOMETRY_TYPE = function() {
            return (Yc = a._emscripten_enum_draco_EncodedGeometryType_INVALID_GEOMETRY_TYPE = a.asm.vb).apply(null, arguments);
        }, Zc = a._emscripten_enum_draco_EncodedGeometryType_POINT_CLOUD = function() {
            return (Zc = a._emscripten_enum_draco_EncodedGeometryType_POINT_CLOUD = a.asm.wb).apply(null, arguments);
        }, $c = a._emscripten_enum_draco_EncodedGeometryType_TRIANGULAR_MESH = function() {
            return ($c = a._emscripten_enum_draco_EncodedGeometryType_TRIANGULAR_MESH = a.asm.xb).apply(null, arguments);
        }, ad = a._emscripten_enum_draco_DataType_DT_INVALID = function() {
            return (ad = a._emscripten_enum_draco_DataType_DT_INVALID = a.asm.yb).apply(null, arguments);
        }, bd = a._emscripten_enum_draco_DataType_DT_INT8 = function() {
            return (bd = a._emscripten_enum_draco_DataType_DT_INT8 = a.asm.zb).apply(null, arguments);
        }, cd = a._emscripten_enum_draco_DataType_DT_UINT8 = function() {
            return (cd = a._emscripten_enum_draco_DataType_DT_UINT8 = a.asm.Ab).apply(null, arguments);
        }, dd = a._emscripten_enum_draco_DataType_DT_INT16 = function() {
            return (dd = a._emscripten_enum_draco_DataType_DT_INT16 = a.asm.Bb).apply(null, arguments);
        }, ed = a._emscripten_enum_draco_DataType_DT_UINT16 = function() {
            return (ed = a._emscripten_enum_draco_DataType_DT_UINT16 = a.asm.Cb).apply(null, arguments);
        }, fd = a._emscripten_enum_draco_DataType_DT_INT32 = function() {
            return (fd = a._emscripten_enum_draco_DataType_DT_INT32 = a.asm.Db).apply(null, arguments);
        }, gd = a._emscripten_enum_draco_DataType_DT_UINT32 = function() {
            return (gd = a._emscripten_enum_draco_DataType_DT_UINT32 = a.asm.Eb).apply(null, arguments);
        }, hd = a._emscripten_enum_draco_DataType_DT_INT64 = function() {
            return (hd = a._emscripten_enum_draco_DataType_DT_INT64 = a.asm.Fb).apply(null, arguments);
        }, id = a._emscripten_enum_draco_DataType_DT_UINT64 = function() {
            return (id = a._emscripten_enum_draco_DataType_DT_UINT64 = a.asm.Gb).apply(null, arguments);
        }, jd = a._emscripten_enum_draco_DataType_DT_FLOAT32 = function() {
            return (jd = a._emscripten_enum_draco_DataType_DT_FLOAT32 = a.asm.Hb).apply(null, arguments);
        }, kd = a._emscripten_enum_draco_DataType_DT_FLOAT64 = function() {
            return (kd = a._emscripten_enum_draco_DataType_DT_FLOAT64 = a.asm.Ib).apply(null, arguments);
        }, ld = a._emscripten_enum_draco_DataType_DT_BOOL = function() {
            return (ld = a._emscripten_enum_draco_DataType_DT_BOOL = a.asm.Jb).apply(null, arguments);
        }, md = a._emscripten_enum_draco_DataType_DT_TYPES_COUNT = function() {
            return (md = a._emscripten_enum_draco_DataType_DT_TYPES_COUNT = a.asm.Kb).apply(null, arguments);
        }, nd = a._emscripten_enum_draco_StatusCode_OK = function() {
            return (nd = a._emscripten_enum_draco_StatusCode_OK = a.asm.Lb).apply(null, arguments);
        }, od = a._emscripten_enum_draco_StatusCode_DRACO_ERROR = function() {
            return (od = a._emscripten_enum_draco_StatusCode_DRACO_ERROR = a.asm.Mb).apply(null, arguments);
        }, pd = a._emscripten_enum_draco_StatusCode_IO_ERROR = function() {
            return (pd = a._emscripten_enum_draco_StatusCode_IO_ERROR = a.asm.Nb).apply(null, arguments);
        }, qd = a._emscripten_enum_draco_StatusCode_INVALID_PARAMETER = function() {
            return (qd = a._emscripten_enum_draco_StatusCode_INVALID_PARAMETER = a.asm.Ob).apply(null, arguments);
        }, rd = a._emscripten_enum_draco_StatusCode_UNSUPPORTED_VERSION = function() {
            return (rd = a._emscripten_enum_draco_StatusCode_UNSUPPORTED_VERSION = a.asm.Pb).apply(null, arguments);
        }, sd = a._emscripten_enum_draco_StatusCode_UNKNOWN_VERSION = function() {
            return (sd = a._emscripten_enum_draco_StatusCode_UNKNOWN_VERSION = a.asm.Qb).apply(null, arguments);
        }, $a = a._malloc = function() {
            return ($a = a._malloc = a.asm.Rb).apply(null, arguments);
        };
        a._free = function() {
            return (a._free = a.asm.Sb).apply(null, arguments);
        };
        var oa;
        la = function b() {
            oa || P();
            oa || (la = b);
        };
        a.run = P;
        if (a.preInit) for("function" == typeof a.preInit && (a.preInit = [
            a.preInit
        ]); 0 < a.preInit.length;)a.preInit.pop()();
        P();
        t.prototype = Object.create(t.prototype);
        t.prototype.constructor = t;
        t.prototype.__class__ = t;
        t.__cache__ = {
        };
        a.WrapperObject = t;
        a.getCache = x;
        a.wrapPointer = D;
        a.castObject = function(b, c) {
            return D(b.ptr, c);
        };
        a.NULL = D(0);
        a.destroy = function(b) {
            if (!b.__destroy__) throw "Error: Cannot destroy object. (Did you create it yourself?)";
            b.__destroy__();
            delete x(b.__class__)[b.ptr];
        };
        a.compare = function(b, c) {
            return b.ptr === c.ptr;
        };
        a.getPointer = function(b) {
            return b.ptr;
        };
        a.getClass = function(b) {
            return b.__class__;
        };
        var r = {
            buffer: 0,
            size: 0,
            pos: 0,
            temps: [],
            needed: 0,
            prepare: function() {
                if (r.needed) {
                    for(var b = 0; b < r.temps.length; b++)a._free(r.temps[b]);
                    r.temps.length = 0;
                    a._free(r.buffer);
                    r.buffer = 0;
                    r.size += r.needed;
                    r.needed = 0;
                }
                r.buffer || (r.size += 128, r.buffer = a._malloc(r.size), q(r.buffer));
                r.pos = 0;
            },
            alloc: function(b, c) {
                q(r.buffer);
                b = b.length * c.BYTES_PER_ELEMENT;
                b = b + 7 & -8;
                r.pos + b >= r.size ? (q(0 < b), r.needed += b, c = a._malloc(b), r.temps.push(c)) : (c = r.buffer + r.pos, r.pos += b);
                return c;
            },
            copy: function(b, c, d) {
                d >>>= 0;
                switch(c.BYTES_PER_ELEMENT){
                    case 2:
                        d >>>= 1;
                        break;
                    case 4:
                        d >>>= 2;
                        break;
                    case 8:
                        d >>>= 3;
                }
                for(var g = 0; g < b.length; g++)c[d + g] = b[g];
            }
        };
        Z.prototype = Object.create(t.prototype);
        Z.prototype.constructor = Z;
        Z.prototype.__class__ = Z;
        Z.__cache__ = {
        };
        a.VoidPtr = Z;
        Z.prototype.__destroy__ = Z.prototype.__destroy__ = function() {
            ab(this.ptr);
        };
        S.prototype = Object.create(t.prototype);
        S.prototype.constructor = S;
        S.prototype.__class__ = S;
        S.__cache__ = {
        };
        a.DecoderBuffer = S;
        S.prototype.Init = S.prototype.Init = function(b, c) {
            var d = this.ptr;
            r.prepare();
            "object" == typeof b && (b = ua(b));
            c && "object" === typeof c && (c = c.ptr);
            bb(d, b, c);
        };
        S.prototype.__destroy__ = S.prototype.__destroy__ = function() {
            cb(this.ptr);
        };
        R.prototype = Object.create(t.prototype);
        R.prototype.constructor = R;
        R.prototype.__class__ = R;
        R.__cache__ = {
        };
        a.AttributeTransformData = R;
        R.prototype.transform_type = R.prototype.transform_type = function() {
            return db(this.ptr);
        };
        R.prototype.__destroy__ = R.prototype.__destroy__ = function() {
            eb(this.ptr);
        };
        W.prototype = Object.create(t.prototype);
        W.prototype.constructor = W;
        W.prototype.__class__ = W;
        W.__cache__ = {
        };
        a.GeometryAttribute = W;
        W.prototype.__destroy__ = W.prototype.__destroy__ = function() {
            fb(this.ptr);
        };
        w.prototype = Object.create(t.prototype);
        w.prototype.constructor = w;
        w.prototype.__class__ = w;
        w.__cache__ = {
        };
        a.PointAttribute = w;
        w.prototype.size = w.prototype.size = function() {
            return gb(this.ptr);
        };
        w.prototype.GetAttributeTransformData = w.prototype.GetAttributeTransformData = function() {
            return D(hb(this.ptr), R);
        };
        w.prototype.attribute_type = w.prototype.attribute_type = function() {
            return ib(this.ptr);
        };
        w.prototype.data_type = w.prototype.data_type = function() {
            return jb(this.ptr);
        };
        w.prototype.num_components = w.prototype.num_components = function() {
            return kb(this.ptr);
        };
        w.prototype.normalized = w.prototype.normalized = function() {
            return !!lb(this.ptr);
        };
        w.prototype.byte_stride = w.prototype.byte_stride = function() {
            return mb(this.ptr);
        };
        w.prototype.byte_offset = w.prototype.byte_offset = function() {
            return nb(this.ptr);
        };
        w.prototype.unique_id = w.prototype.unique_id = function() {
            return ob(this.ptr);
        };
        w.prototype.__destroy__ = w.prototype.__destroy__ = function() {
            pb(this.ptr);
        };
        C.prototype = Object.create(t.prototype);
        C.prototype.constructor = C;
        C.prototype.__class__ = C;
        C.__cache__ = {
        };
        a.AttributeQuantizationTransform = C;
        C.prototype.InitFromAttribute = C.prototype.InitFromAttribute = function(b) {
            var c = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            return !!qb(c, b);
        };
        C.prototype.quantization_bits = C.prototype.quantization_bits = function() {
            return rb(this.ptr);
        };
        C.prototype.min_value = C.prototype.min_value = function(b) {
            var c = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            return sb(c, b);
        };
        C.prototype.range = C.prototype.range = function() {
            return tb(this.ptr);
        };
        C.prototype.__destroy__ = C.prototype.__destroy__ = function() {
            ub(this.ptr);
        };
        G.prototype = Object.create(t.prototype);
        G.prototype.constructor = G;
        G.prototype.__class__ = G;
        G.__cache__ = {
        };
        a.AttributeOctahedronTransform = G;
        G.prototype.InitFromAttribute = G.prototype.InitFromAttribute = function(b) {
            var c = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            return !!vb(c, b);
        };
        G.prototype.quantization_bits = G.prototype.quantization_bits = function() {
            return wb(this.ptr);
        };
        G.prototype.__destroy__ = G.prototype.__destroy__ = function() {
            xb(this.ptr);
        };
        H.prototype = Object.create(t.prototype);
        H.prototype.constructor = H;
        H.prototype.__class__ = H;
        H.__cache__ = {
        };
        a.PointCloud = H;
        H.prototype.num_attributes = H.prototype.num_attributes = function() {
            return yb(this.ptr);
        };
        H.prototype.num_points = H.prototype.num_points = function() {
            return zb(this.ptr);
        };
        H.prototype.__destroy__ = H.prototype.__destroy__ = function() {
            Ab(this.ptr);
        };
        E.prototype = Object.create(t.prototype);
        E.prototype.constructor = E;
        E.prototype.__class__ = E;
        E.__cache__ = {
        };
        a.Mesh = E;
        E.prototype.num_faces = E.prototype.num_faces = function() {
            return Bb(this.ptr);
        };
        E.prototype.num_attributes = E.prototype.num_attributes = function() {
            return Cb(this.ptr);
        };
        E.prototype.num_points = E.prototype.num_points = function() {
            return Db(this.ptr);
        };
        E.prototype.__destroy__ = E.prototype.__destroy__ = function() {
            Eb(this.ptr);
        };
        T.prototype = Object.create(t.prototype);
        T.prototype.constructor = T;
        T.prototype.__class__ = T;
        T.__cache__ = {
        };
        a.Metadata = T;
        T.prototype.__destroy__ = T.prototype.__destroy__ = function() {
            Fb(this.ptr);
        };
        B.prototype = Object.create(t.prototype);
        B.prototype.constructor = B;
        B.prototype.__class__ = B;
        B.__cache__ = {
        };
        a.Status = B;
        B.prototype.code = B.prototype.code = function() {
            return Gb(this.ptr);
        };
        B.prototype.ok = B.prototype.ok = function() {
            return !!Hb(this.ptr);
        };
        B.prototype.error_msg = B.prototype.error_msg = function() {
            return h(Ib(this.ptr));
        };
        B.prototype.__destroy__ = B.prototype.__destroy__ = function() {
            Jb(this.ptr);
        };
        I.prototype = Object.create(t.prototype);
        I.prototype.constructor = I;
        I.prototype.__class__ = I;
        I.__cache__ = {
        };
        a.DracoFloat32Array = I;
        I.prototype.GetValue = I.prototype.GetValue = function(b) {
            var c = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            return Kb(c, b);
        };
        I.prototype.size = I.prototype.size = function() {
            return Lb(this.ptr);
        };
        I.prototype.__destroy__ = I.prototype.__destroy__ = function() {
            Mb(this.ptr);
        };
        J.prototype = Object.create(t.prototype);
        J.prototype.constructor = J;
        J.prototype.__class__ = J;
        J.__cache__ = {
        };
        a.DracoInt8Array = J;
        J.prototype.GetValue = J.prototype.GetValue = function(b) {
            var c = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            return Nb(c, b);
        };
        J.prototype.size = J.prototype.size = function() {
            return Ob(this.ptr);
        };
        J.prototype.__destroy__ = J.prototype.__destroy__ = function() {
            Pb(this.ptr);
        };
        K.prototype = Object.create(t.prototype);
        K.prototype.constructor = K;
        K.prototype.__class__ = K;
        K.__cache__ = {
        };
        a.DracoUInt8Array = K;
        K.prototype.GetValue = K.prototype.GetValue = function(b) {
            var c = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            return Qb(c, b);
        };
        K.prototype.size = K.prototype.size = function() {
            return Rb(this.ptr);
        };
        K.prototype.__destroy__ = K.prototype.__destroy__ = function() {
            Sb(this.ptr);
        };
        L.prototype = Object.create(t.prototype);
        L.prototype.constructor = L;
        L.prototype.__class__ = L;
        L.__cache__ = {
        };
        a.DracoInt16Array = L;
        L.prototype.GetValue = L.prototype.GetValue = function(b) {
            var c = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            return Tb(c, b);
        };
        L.prototype.size = L.prototype.size = function() {
            return Ub(this.ptr);
        };
        L.prototype.__destroy__ = L.prototype.__destroy__ = function() {
            Vb(this.ptr);
        };
        M.prototype = Object.create(t.prototype);
        M.prototype.constructor = M;
        M.prototype.__class__ = M;
        M.__cache__ = {
        };
        a.DracoUInt16Array = M;
        M.prototype.GetValue = M.prototype.GetValue = function(b) {
            var c = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            return Wb(c, b);
        };
        M.prototype.size = M.prototype.size = function() {
            return Xb(this.ptr);
        };
        M.prototype.__destroy__ = M.prototype.__destroy__ = function() {
            Yb(this.ptr);
        };
        N.prototype = Object.create(t.prototype);
        N.prototype.constructor = N;
        N.prototype.__class__ = N;
        N.__cache__ = {
        };
        a.DracoInt32Array = N;
        N.prototype.GetValue = N.prototype.GetValue = function(b) {
            var c = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            return Zb(c, b);
        };
        N.prototype.size = N.prototype.size = function() {
            return $b(this.ptr);
        };
        N.prototype.__destroy__ = N.prototype.__destroy__ = function() {
            ac(this.ptr);
        };
        O.prototype = Object.create(t.prototype);
        O.prototype.constructor = O;
        O.prototype.__class__ = O;
        O.__cache__ = {
        };
        a.DracoUInt32Array = O;
        O.prototype.GetValue = O.prototype.GetValue = function(b) {
            var c = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            return bc(c, b);
        };
        O.prototype.size = O.prototype.size = function() {
            return cc(this.ptr);
        };
        O.prototype.__destroy__ = O.prototype.__destroy__ = function() {
            dc(this.ptr);
        };
        y.prototype = Object.create(t.prototype);
        y.prototype.constructor = y;
        y.prototype.__class__ = y;
        y.__cache__ = {
        };
        a.MetadataQuerier = y;
        y.prototype.HasEntry = y.prototype.HasEntry = function(b, c) {
            var d = this.ptr;
            r.prepare();
            b && "object" === typeof b && (b = b.ptr);
            c = c && "object" === typeof c ? c.ptr : aa(c);
            return !!ec(d, b, c);
        };
        y.prototype.GetIntEntry = y.prototype.GetIntEntry = function(b, c) {
            var d = this.ptr;
            r.prepare();
            b && "object" === typeof b && (b = b.ptr);
            c = c && "object" === typeof c ? c.ptr : aa(c);
            return fc(d, b, c);
        };
        y.prototype.GetIntEntryArray = y.prototype.GetIntEntryArray = function(b, c, d) {
            var g = this.ptr;
            r.prepare();
            b && "object" === typeof b && (b = b.ptr);
            c = c && "object" === typeof c ? c.ptr : aa(c);
            d && "object" === typeof d && (d = d.ptr);
            gc(g, b, c, d);
        };
        y.prototype.GetDoubleEntry = y.prototype.GetDoubleEntry = function(b, c) {
            var d = this.ptr;
            r.prepare();
            b && "object" === typeof b && (b = b.ptr);
            c = c && "object" === typeof c ? c.ptr : aa(c);
            return hc(d, b, c);
        };
        y.prototype.GetStringEntry = y.prototype.GetStringEntry = function(b, c) {
            var d = this.ptr;
            r.prepare();
            b && "object" === typeof b && (b = b.ptr);
            c = c && "object" === typeof c ? c.ptr : aa(c);
            return h(ic(d, b, c));
        };
        y.prototype.NumEntries = y.prototype.NumEntries = function(b) {
            var c = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            return jc(c, b);
        };
        y.prototype.GetEntryName = y.prototype.GetEntryName = function(b, c) {
            var d = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            return h(kc(d, b, c));
        };
        y.prototype.__destroy__ = y.prototype.__destroy__ = function() {
            lc(this.ptr);
        };
        l.prototype = Object.create(t.prototype);
        l.prototype.constructor = l;
        l.prototype.__class__ = l;
        l.__cache__ = {
        };
        a.Decoder = l;
        l.prototype.DecodeArrayToPointCloud = l.prototype.DecodeArrayToPointCloud = function(b, c, d) {
            var g = this.ptr;
            r.prepare();
            "object" == typeof b && (b = ua(b));
            c && "object" === typeof c && (c = c.ptr);
            d && "object" === typeof d && (d = d.ptr);
            return D(mc(g, b, c, d), B);
        };
        l.prototype.DecodeArrayToMesh = l.prototype.DecodeArrayToMesh = function(b, c, d) {
            var g = this.ptr;
            r.prepare();
            "object" == typeof b && (b = ua(b));
            c && "object" === typeof c && (c = c.ptr);
            d && "object" === typeof d && (d = d.ptr);
            return D(nc(g, b, c, d), B);
        };
        l.prototype.GetAttributeId = l.prototype.GetAttributeId = function(b, c) {
            var d = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            return oc(d, b, c);
        };
        l.prototype.GetAttributeIdByName = l.prototype.GetAttributeIdByName = function(b, c) {
            var d = this.ptr;
            r.prepare();
            b && "object" === typeof b && (b = b.ptr);
            c = c && "object" === typeof c ? c.ptr : aa(c);
            return pc(d, b, c);
        };
        l.prototype.GetAttributeIdByMetadataEntry = l.prototype.GetAttributeIdByMetadataEntry = function(b, c, d) {
            var g = this.ptr;
            r.prepare();
            b && "object" === typeof b && (b = b.ptr);
            c = c && "object" === typeof c ? c.ptr : aa(c);
            d = d && "object" === typeof d ? d.ptr : aa(d);
            return qc(g, b, c, d);
        };
        l.prototype.GetAttribute = l.prototype.GetAttribute = function(b, c) {
            var d = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            return D(rc(d, b, c), w);
        };
        l.prototype.GetAttributeByUniqueId = l.prototype.GetAttributeByUniqueId = function(b, c) {
            var d = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            return D(sc(d, b, c), w);
        };
        l.prototype.GetMetadata = l.prototype.GetMetadata = function(b) {
            var c = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            return D(tc(c, b), T);
        };
        l.prototype.GetAttributeMetadata = l.prototype.GetAttributeMetadata = function(b, c) {
            var d = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            return D(uc(d, b, c), T);
        };
        l.prototype.GetFaceFromMesh = l.prototype.GetFaceFromMesh = function(b, c, d) {
            var g = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            d && "object" === typeof d && (d = d.ptr);
            return !!vc(g, b, c, d);
        };
        l.prototype.GetTriangleStripsFromMesh = l.prototype.GetTriangleStripsFromMesh = function(b, c) {
            var d = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            return wc(d, b, c);
        };
        l.prototype.GetTrianglesUInt16Array = l.prototype.GetTrianglesUInt16Array = function(b, c, d) {
            var g = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            d && "object" === typeof d && (d = d.ptr);
            return !!xc(g, b, c, d);
        };
        l.prototype.GetTrianglesUInt32Array = l.prototype.GetTrianglesUInt32Array = function(b, c, d) {
            var g = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            d && "object" === typeof d && (d = d.ptr);
            return !!yc(g, b, c, d);
        };
        l.prototype.GetAttributeFloat = l.prototype.GetAttributeFloat = function(b, c, d) {
            var g = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            d && "object" === typeof d && (d = d.ptr);
            return !!zc(g, b, c, d);
        };
        l.prototype.GetAttributeFloatForAllPoints = l.prototype.GetAttributeFloatForAllPoints = function(b, c, d) {
            var g = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            d && "object" === typeof d && (d = d.ptr);
            return !!Ac(g, b, c, d);
        };
        l.prototype.GetAttributeIntForAllPoints = l.prototype.GetAttributeIntForAllPoints = function(b, c, d) {
            var g = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            d && "object" === typeof d && (d = d.ptr);
            return !!Bc(g, b, c, d);
        };
        l.prototype.GetAttributeInt8ForAllPoints = l.prototype.GetAttributeInt8ForAllPoints = function(b, c, d) {
            var g = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            d && "object" === typeof d && (d = d.ptr);
            return !!Cc(g, b, c, d);
        };
        l.prototype.GetAttributeUInt8ForAllPoints = l.prototype.GetAttributeUInt8ForAllPoints = function(b, c, d) {
            var g = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            d && "object" === typeof d && (d = d.ptr);
            return !!Dc(g, b, c, d);
        };
        l.prototype.GetAttributeInt16ForAllPoints = l.prototype.GetAttributeInt16ForAllPoints = function(b, c, d) {
            var g = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            d && "object" === typeof d && (d = d.ptr);
            return !!Ec(g, b, c, d);
        };
        l.prototype.GetAttributeUInt16ForAllPoints = l.prototype.GetAttributeUInt16ForAllPoints = function(b, c, d) {
            var g = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            d && "object" === typeof d && (d = d.ptr);
            return !!Fc(g, b, c, d);
        };
        l.prototype.GetAttributeInt32ForAllPoints = l.prototype.GetAttributeInt32ForAllPoints = function(b, c, d) {
            var g = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            d && "object" === typeof d && (d = d.ptr);
            return !!Gc(g, b, c, d);
        };
        l.prototype.GetAttributeUInt32ForAllPoints = l.prototype.GetAttributeUInt32ForAllPoints = function(b, c, d) {
            var g = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            d && "object" === typeof d && (d = d.ptr);
            return !!Hc(g, b, c, d);
        };
        l.prototype.GetAttributeDataArrayForAllPoints = l.prototype.GetAttributeDataArrayForAllPoints = function(b, c, d, g, u) {
            var X = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            d && "object" === typeof d && (d = d.ptr);
            g && "object" === typeof g && (g = g.ptr);
            u && "object" === typeof u && (u = u.ptr);
            return !!Ic(X, b, c, d, g, u);
        };
        l.prototype.SkipAttributeTransform = l.prototype.SkipAttributeTransform = function(b) {
            var c = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            Jc(c, b);
        };
        l.prototype.GetEncodedGeometryType_Deprecated = l.prototype.GetEncodedGeometryType_Deprecated = function(b) {
            var c = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            return Kc(c, b);
        };
        l.prototype.DecodeBufferToPointCloud = l.prototype.DecodeBufferToPointCloud = function(b, c) {
            var d = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            return D(Lc(d, b, c), B);
        };
        l.prototype.DecodeBufferToMesh = l.prototype.DecodeBufferToMesh = function(b, c) {
            var d = this.ptr;
            b && "object" === typeof b && (b = b.ptr);
            c && "object" === typeof c && (c = c.ptr);
            return D(Mc(d, b, c), B);
        };
        l.prototype.__destroy__ = l.prototype.__destroy__ = function() {
            Nc(this.ptr);
        };
        (function() {
            function b() {
                a.ATTRIBUTE_INVALID_TRANSFORM = Oc();
                a.ATTRIBUTE_NO_TRANSFORM = Pc();
                a.ATTRIBUTE_QUANTIZATION_TRANSFORM = Qc();
                a.ATTRIBUTE_OCTAHEDRON_TRANSFORM = Rc();
                a.INVALID = Sc();
                a.POSITION = Tc();
                a.NORMAL = Uc();
                a.COLOR = Vc();
                a.TEX_COORD = Wc();
                a.GENERIC = Xc();
                a.INVALID_GEOMETRY_TYPE = Yc();
                a.POINT_CLOUD = Zc();
                a.TRIANGULAR_MESH = $c();
                a.DT_INVALID = ad();
                a.DT_INT8 = bd();
                a.DT_UINT8 = cd();
                a.DT_INT16 = dd();
                a.DT_UINT16 = ed();
                a.DT_INT32 = fd();
                a.DT_UINT32 = gd();
                a.DT_INT64 = hd();
                a.DT_UINT64 = id();
                a.DT_FLOAT32 = jd();
                a.DT_FLOAT64 = kd();
                a.DT_BOOL = ld();
                a.DT_TYPES_COUNT = md();
                a.OK = nd();
                a.DRACO_ERROR = od();
                a.IO_ERROR = pd();
                a.INVALID_PARAMETER = qd();
                a.UNSUPPORTED_VERSION = rd();
                a.UNKNOWN_VERSION = sd();
            }
            Ba ? b() : ta.unshift(b);
        })();
        if ("function" === typeof a.onModuleParsed) a.onModuleParsed();
        a.Decoder.prototype.GetEncodedGeometryType = function(b) {
            if (b.__class__ && b.__class__ === a.DecoderBuffer) return a.Decoder.prototype.GetEncodedGeometryType_Deprecated(b);
            if (8 > b.byteLength) return a.INVALID_GEOMETRY_TYPE;
            switch(b[7]){
                case 0:
                    return a.POINT_CLOUD;
                case 1:
                    return a.TRIANGULAR_MESH;
                default:
                    return a.INVALID_GEOMETRY_TYPE;
            }
        };
        return n.ready;
    };
}();
"object" === typeof exports && "object" === typeof module ? module.exports = DracoDecoderModule : "function" === typeof define && define.amd ? define([], function() {
    return DracoDecoderModule;
}) : "object" === typeof exports && (exports.DracoDecoderModule = DracoDecoderModule);

},{"process":"lDnB8","path":"dTeSu","fs":"joWnX"}]},["dDoOd"], null, "parcelRequire6c07")

//# sourceMappingURL=draco3dgltf.009ca087.js.map
