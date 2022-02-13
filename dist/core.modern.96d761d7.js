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
})({"6rcQg":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "997d287d96d761d7";
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

},{}],"ifnWt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Graph", ()=>_propertyGraph.Graph
);
parcelHelpers.export(exports, "GraphEdge", ()=>_propertyGraph.GraphEdge
);
parcelHelpers.export(exports, "Accessor", ()=>W
);
parcelHelpers.export(exports, "Animation", ()=>H
);
parcelHelpers.export(exports, "AnimationChannel", ()=>Y
);
parcelHelpers.export(exports, "AnimationSampler", ()=>Z
);
parcelHelpers.export(exports, "Buffer", ()=>K
);
parcelHelpers.export(exports, "BufferUtils", ()=>A
);
parcelHelpers.export(exports, "COPY_IDENTITY", ()=>$
);
parcelHelpers.export(exports, "Camera", ()=>Q
);
parcelHelpers.export(exports, "ColorUtils", ()=>E
);
parcelHelpers.export(exports, "DenoIO", ()=>Rt
);
parcelHelpers.export(exports, "Document", ()=>pt
);
parcelHelpers.export(exports, "ExtensibleProperty", ()=>q
);
parcelHelpers.export(exports, "Extension", ()=>mt
);
parcelHelpers.export(exports, "ExtensionProperty", ()=>X
);
parcelHelpers.export(exports, "FileUtils", ()=>S
);
parcelHelpers.export(exports, "Format", ()=>T
);
parcelHelpers.export(exports, "GLB_BUFFER", ()=>g
);
parcelHelpers.export(exports, "ImageUtils", ()=>I
);
parcelHelpers.export(exports, "Logger", ()=>C
);
parcelHelpers.export(exports, "Material", ()=>it
);
parcelHelpers.export(exports, "MathUtils", ()=>F
);
parcelHelpers.export(exports, "Mesh", ()=>ot
);
parcelHelpers.export(exports, "Node", ()=>at
);
parcelHelpers.export(exports, "NodeIO", ()=>It
);
parcelHelpers.export(exports, "PlatformIO", ()=>Mt
);
parcelHelpers.export(exports, "Primitive", ()=>ut
);
parcelHelpers.export(exports, "PrimitiveTarget", ()=>ct
);
parcelHelpers.export(exports, "Property", ()=>V
);
parcelHelpers.export(exports, "PropertyType", ()=>p
);
parcelHelpers.export(exports, "ReaderContext", ()=>wt
);
parcelHelpers.export(exports, "Root", ()=>gt
);
parcelHelpers.export(exports, "Scene", ()=>lt
);
parcelHelpers.export(exports, "Skin", ()=>ft
);
parcelHelpers.export(exports, "Texture", ()=>dt
);
parcelHelpers.export(exports, "TextureChannel", ()=>y
);
parcelHelpers.export(exports, "TextureInfo", ()=>tt
);
parcelHelpers.export(exports, "VERSION", ()=>d
);
parcelHelpers.export(exports, "VertexLayout", ()=>m
);
parcelHelpers.export(exports, "WebIO", ()=>Nt
);
parcelHelpers.export(exports, "WriterContext", ()=>bt
);
parcelHelpers.export(exports, "bounds", ()=>v
);
parcelHelpers.export(exports, "uuid", ()=>G
);
var _propertyGraph = require("property-graph");
var _vec3 = require("gl-matrix/vec3");
var _mat4 = require("gl-matrix/mat4");
var Buffer = require("buffer").Buffer;
const d = "v2.0.4", g = "@glb.bin";
var p, m, w, y, T;
function v(t) {
    const e = {
        min: [
            Infinity,
            Infinity,
            Infinity
        ],
        max: [-Infinity, -Infinity, -Infinity]
    }, r = t.propertyType === p.NODE ? [
        t
    ] : t.listChildren();
    for (const t1 of r)t1.traverse((t)=>{
        const r = t.getMesh();
        if (!r) return;
        const s = x(r, t.getWorldMatrix());
        b(s.min, e), b(s.max, e);
    });
    return e;
}
function x(t, e) {
    const r = {
        min: [
            Infinity,
            Infinity,
            Infinity
        ],
        max: [-Infinity, -Infinity, -Infinity]
    };
    for (const s of t.listPrimitives()){
        const t = s.getAttribute("POSITION");
        if (!t) continue;
        let n = [
            0,
            0,
            0
        ], i = [
            0,
            0,
            0
        ];
        for(let s1 = 0; s1 < t.getCount(); s1++)n = t.getElement(s1, n), i = _vec3.transformMat4(i, n, e), b(i, r);
    }
    return r;
}
function b(t, e) {
    for(let r = 0; r < 3; r++)e.min[r] = Math.min(t[r], e.min[r]), e.max[r] = Math.max(t[r], e.max[r]);
}
!function(t) {
    t.ACCESSOR = "Accessor", t.ANIMATION = "Animation", t.ANIMATION_CHANNEL = "AnimationChannel", t.ANIMATION_SAMPLER = "AnimationSampler", t.BUFFER = "Buffer", t.CAMERA = "Camera", t.MATERIAL = "Material", t.MESH = "Mesh", t.PRIMITIVE = "Primitive", t.PRIMITIVE_TARGET = "PrimitiveTarget", t.NODE = "Node", t.ROOT = "Root", t.SCENE = "Scene", t.SKIN = "Skin", t.TEXTURE = "Texture", t.TEXTURE_INFO = "TextureInfo";
}(p || (p = {
})), (function(t) {
    t.INTERLEAVED = "interleaved", t.SEPARATE = "separate";
})(m || (m = {
})), (function(t) {
    t.ARRAY_BUFFER = "ARRAY_BUFFER", t.ELEMENT_ARRAY_BUFFER = "ELEMENT_ARRAY_BUFFER", t.INVERSE_BIND_MATRICES = "INVERSE_BIND_MATRICES", t.OTHER = "OTHER";
})(w || (w = {
})), (function(t) {
    t[t.R = 4096] = "R", t[t.G = 256] = "G", t[t.B = 16] = "B", t[t.A = 1] = "A";
})(y || (y = {
})), (function(t) {
    t.GLTF = "GLTF", t.GLB = "GLB";
})(T || (T = {
}));
class A {
    static createBufferFromDataURI(t) {
        if ("undefined" == typeof Buffer) {
            const e = atob(t.split(",")[1]), r = new Uint8Array(e.length);
            for(let t1 = 0; t1 < e.length; t1++)r[t1] = e.charCodeAt(t1);
            return r;
        }
        {
            const e = t.split(",")[1], r = t.indexOf("base64") >= 0;
            return Buffer.from(e, r ? "base64" : "utf8");
        }
    }
    static encodeText(t) {
        return "undefined" != typeof TextEncoder ? (new TextEncoder).encode(t) : Buffer.from(t);
    }
    static decodeText(t) {
        return "undefined" != typeof TextDecoder ? (new TextDecoder).decode(t) : Buffer.from(t).toString("utf8");
    }
    static concat(t) {
        let e = 0;
        for (const r of t)e += r.byteLength;
        const r1 = new Uint8Array(e);
        let s = 0;
        for (const e1 of t)r1.set(e1, s), s += e1.byteLength;
        return r1;
    }
    static pad(t, e = 0) {
        const r = this.padNumber(t.byteLength);
        if (r === t.byteLength) return t;
        const s = new Uint8Array(r);
        if (s.set(t), 0 !== e) for(let n = t.byteLength; n < r; n++)s[n] = e;
        return s;
    }
    static padNumber(t) {
        return 4 * Math.ceil(t / 4);
    }
    static equals(t, e) {
        if (t === e) return !0;
        if (t.byteLength !== e.byteLength) return !1;
        let r = t.byteLength;
        for(; r--;)if (t[r] !== e[r]) return !1;
        return !0;
    }
    static toView(t, e = 0, r = Infinity) {
        return new Uint8Array(t.buffer, t.byteOffset + e, Math.min(t.byteLength, r));
    }
    static assertView(t) {
        if (t && !ArrayBuffer.isView(t)) throw new Error(`Method requires Uint8Array parameter; received "${typeof t}".`);
        return t;
    }
}
class E {
    static hexToFactor(t, e) {
        t = Math.floor(t);
        const r = e;
        return r[0] = (t >> 16 & 255) / 255, r[1] = (t >> 8 & 255) / 255, r[2] = (255 & t) / 255, this.convertSRGBToLinear(e, e);
    }
    static factorToHex(t) {
        const e = [
            ...t
        ], [r, s, n] = this.convertLinearToSRGB(t, e);
        return 255 * r << 16 ^ 255 * s << 8 ^ 255 * n << 0;
    }
    static convertSRGBToLinear(t, e) {
        const r = t, s = e;
        for(let t1 = 0; t1 < 3; t1++)s[t1] = r[t1] < 0.04045 ? 0.0773993808 * r[t1] : Math.pow(0.9478672986 * r[t1] + 0.0521327014, 2.4);
        return e;
    }
    static convertLinearToSRGB(t, e) {
        const r = t, s = e;
        for(let t1 = 0; t1 < 3; t1++)s[t1] = r[t1] < 0.0031308 ? 12.92 * r[t1] : 1.055 * Math.pow(r[t1], 0.41666) - 0.055;
        return e;
    }
}
class S {
    static basename(t) {
        const e = (t = new URL(t, "https://null.example").pathname).split(/[\\/]/).pop();
        return e.substring(0, e.lastIndexOf("."));
    }
    static extension(t) {
        return 0 !== t.indexOf("data:") ? (t = new URL(t, "https://null.example").pathname).split(/[\\/]/).pop().split(/[.]/).pop() : 0 === t.indexOf("data:image/png") ? "png" : 0 === t.indexOf("data:image/jpeg") ? "jpeg" : "bin";
    }
}
class M {
    match(t) {
        return t.length >= 8 && 137 === t[0] && 80 === t[1] && 78 === t[2] && 71 === t[3] && 13 === t[4] && 10 === t[5] && 26 === t[6] && 10 === t[7];
    }
    getSize(t) {
        const e = new DataView(t.buffer, t.byteOffset);
        return A.decodeText(t.slice(12, 16)) === M.PNG_FRIED_CHUNK_NAME ? [
            e.getUint32(32, !1),
            e.getUint32(36, !1)
        ] : [
            e.getUint32(16, !1),
            e.getUint32(20, !1)
        ];
    }
    getChannels(t) {
        return 4;
    }
}
M.PNG_FRIED_CHUNK_NAME = "CgBI";
class I {
    static registerFormat(t, e) {
        this.impls[t] = e;
    }
    static getMimeType(t) {
        for(const e in this.impls)if (this.impls[e].match(t)) return e;
        return null;
    }
    static getSize(t, e) {
        return this.impls[e] ? this.impls[e].getSize(t) : null;
    }
    static getChannels(t, e) {
        return this.impls[e] ? this.impls[e].getChannels(t) : null;
    }
    static getMemSize(t, e) {
        if (!this.impls[e]) return null;
        if (this.impls[e].getGPUByteLength) return this.impls[e].getGPUByteLength(t);
        let r = 0;
        const s = this.getSize(t, e);
        if (!s) return null;
        for(; s[0] > 1 || s[1] > 1;)r += s[0] * s[1] * 4, s[0] = Math.max(Math.floor(s[0] / 2), 1), s[1] = Math.max(Math.floor(s[1] / 2), 1);
        return r += 4, r;
    }
    static mimeTypeToExtension(t) {
        return "image/jpeg" === t ? "jpg" : t.split("/").pop();
    }
    static extensionToMimeType(t) {
        return "jpg" === t ? "image/jpeg" : `image/${t}`;
    }
}
function R(t, e) {
    if (e > t.byteLength) throw new TypeError("Corrupt JPG, exceeded buffer limits");
    if (255 !== t.getUint8(e)) throw new TypeError("Invalid JPG, marker table corrupted");
    return t;
}
function N(t) {
    return "[object Object]" === Object.prototype.toString.call(t);
}
function O(t) {
    if (!1 === N(t)) return !1;
    const e = t.constructor;
    if (void 0 === e) return !0;
    const r = e.prototype;
    return !1 !== N(r) && !1 !== Object.prototype.hasOwnProperty.call(r, "isPrototypeOf");
}
I.impls = {
    "image/jpeg": new class {
        match(t) {
            return t.length >= 3 && 255 === t[0] && 216 === t[1] && 255 === t[2];
        }
        getSize(t) {
            let e, r, s = new DataView(t.buffer, t.byteOffset + 4);
            for(; s.byteLength;){
                if (e = s.getUint16(0, !1), R(s, e), r = s.getUint8(e + 1), 192 === r || 193 === r || 194 === r) return [
                    s.getUint16(e + 7, !1),
                    s.getUint16(e + 5, !1)
                ];
                s = new DataView(t.buffer, s.byteOffset + e + 2);
            }
            throw new TypeError("Invalid JPG, no size found");
        }
        getChannels(t) {
            return 3;
        }
    },
    "image/png": new M
};
class C {
    constructor(t){
        this.verbosity = void 0, this.verbosity = t;
    }
    debug(t) {
        this.verbosity <= C.Verbosity.DEBUG && console.debug(t);
    }
    info(t) {
        this.verbosity <= C.Verbosity.INFO && console.info(t);
    }
    warn(t) {
        this.verbosity <= C.Verbosity.WARN && console.warn(t);
    }
    error(t) {
        this.verbosity <= C.Verbosity.ERROR && console.error(t);
    }
}
C.Verbosity = {
    SILENT: 4,
    ERROR: 3,
    WARN: 2,
    INFO: 1,
    DEBUG: 0
}, C.DEFAULT_INSTANCE = new C(C.Verbosity.INFO);
class F {
    static identity(t) {
        return t;
    }
    static eq(t, e) {
        if (t.length !== e.length) return !1;
        for(let r = 0; r < t.length; r++)if (Math.abs(t[r] - e[r]) > 0.00001) return !1;
        return !0;
    }
    static denormalize(t, e) {
        switch(e){
            case 5126:
                return t;
            case 5123:
                return t / 65535;
            case 5121:
                return t / 255;
            case 5122:
                return Math.max(t / 32767, -1);
            case 5120:
                return Math.max(t / 127, -1);
            default:
                throw new Error("Invalid component type.");
        }
    }
    static normalize(t, e) {
        switch(e){
            case 5126:
                return t;
            case 5123:
                return Math.round(65535 * t);
            case 5121:
                return Math.round(255 * t);
            case 5122:
                return Math.round(32767 * t);
            case 5120:
                return Math.round(127 * t);
            default:
                throw new Error("Invalid component type.");
        }
    }
    static decompose(t, e, r, s) {
        let n = _vec3.length([
            t[0],
            t[1],
            t[2]
        ]);
        const i = _vec3.length([
            t[4],
            t[5],
            t[6]
        ]), o = _vec3.length([
            t[8],
            t[9],
            t[10]
        ]);
        _mat4.determinant(t) < 0 && (n = -n), e[0] = t[12], e[1] = t[13], e[2] = t[14];
        const a = t.slice(), u = 1 / n, f = 1 / i, d = 1 / o;
        a[0] *= u, a[1] *= u, a[2] *= u, a[4] *= f, a[5] *= f, a[6] *= f, a[8] *= d, a[9] *= d, a[10] *= d, _mat4.getRotation(r, a), s[0] = n, s[1] = i, s[2] = o;
    }
    static compose(t, e, r, s) {
        const n = s, i = e[0], o = e[1], a = e[2], u = e[3], c = i + i, h = o + o, l = a + a, f = i * c, d = i * h, g = i * l, p = o * h, m = o * l, w = a * l, y = u * c, T = u * h, v = u * l, x = r[0], b = r[1], A = r[2];
        return n[0] = (1 - (p + w)) * x, n[1] = (d + v) * x, n[2] = (g - T) * x, n[3] = 0, n[4] = (d - v) * b, n[5] = (1 - (f + w)) * b, n[6] = (m + y) * b, n[7] = 0, n[8] = (g + T) * A, n[9] = (m - y) * A, n[10] = (1 - (f + p)) * A, n[11] = 0, n[12] = t[0], n[13] = t[1], n[14] = t[2], n[15] = 1, n;
    }
}
function B(t, e) {
    if (!!t != !!e) return !1;
    const r = t.getChild(), s = e.getChild();
    return r === s || r.equals(s);
}
function U(t, e) {
    if (!!t != !!e) return !1;
    if (t.length !== e.length) return !1;
    for(let r = 0; r < t.length; r++){
        const s = t[r], n = e[r];
        if (s.getChild() !== n.getChild() && !s.getChild().equals(n.getChild())) return !1;
    }
    return !0;
}
function P(t, e) {
    if (!!t != !!e) return !1;
    const r = Object.keys(t), s = Object.keys(e);
    if (r.length !== s.length) return !1;
    for(const r1 in t){
        const s = t[r1], n = e[r1];
        if (!!s != !!n) return !1;
        const i = s.getChild(), o = n.getChild();
        if (i !== o && !i.equals(o)) return !1;
    }
    return !0;
}
function j(t, e) {
    if (t === e) return !0;
    if (!!t != !!e || !t || !e) return !1;
    if (t.length !== e.length) return !1;
    for(let r = 0; r < t.length; r++)if (t[r] !== e[r]) return !1;
    return !0;
}
function L(t, e) {
    if (t === e) return !0;
    if (!!t != !!e) return !1;
    if (!O(t) || !O(e)) return t === e;
    const r = t, s = e;
    let n, i = 0, o = 0;
    for(n in r)i++;
    for(n in s)o++;
    if (i !== o) return !1;
    for(n in r){
        const t = r[n], e = s[n];
        if (_(t) && _(e)) {
            if (!j(t, e)) return !1;
        } else if (O(t) && O(e)) {
            if (!L(t, e)) return !1;
        } else if (t !== e) return !1;
    }
    return !0;
}
function _(t) {
    return Array.isArray(t) || ArrayBuffer.isView(t);
}
const D = "23456789abdegjkmnpqrvwxyzABDEGJKMNPQRVWXYZ", k = new Set, z = function() {
    let t = "";
    for(let e = 0; e < 6; e++)t += D.charAt(Math.floor(Math.random() * D.length));
    return t;
}, G = function() {
    for(let t = 0; t < 999; t++){
        const t = z();
        if (!k.has(t)) return k.add(t), t;
    }
    return "";
};
class J {
    static dirname(t) {
        const e = t.lastIndexOf("/");
        return -1 === e ? "./" : t.substring(0, e + 1);
    }
    static resolve(t, e) {
        if (!this.isRelativePath(e)) return e;
        const r = t.split("/"), s = e.split("/");
        r.pop();
        for(let t1 = 0; t1 < s.length; t1++)"." !== s[t1] && (".." === s[t1] ? r.pop() : r.push(s[t1]));
        return r.join("/");
    }
    static isAbsoluteURL(t) {
        return this.PROTOCOL_REGEXP.test(t);
    }
    static isRelativePath(t) {
        return !/^(?:[a-zA-Z]+:)?\//.test(t);
    }
}
J.DEFAULT_INIT = {
}, J.PROTOCOL_REGEXP = /^[a-zA-Z]+:\/\//;
const $ = (t)=>t
;
class V extends _propertyGraph.GraphNode {
    constructor(t, r = ""){
        super(t), this[_propertyGraph.$attributes].name = r, this.init(), this.dispatchEvent({
            type: "create"
        });
    }
    getDefaults() {
        return Object.assign(super.getDefaults(), {
            name: "",
            extras: {
            }
        });
    }
    getName() {
        return this.get("name");
    }
    setName(t) {
        return this.set("name", t);
    }
    getExtras() {
        return this.get("extras");
    }
    setExtras(t) {
        return this.set("extras", t);
    }
    clone() {
        return new this.constructor(this.graph).copy(this, $);
    }
    copy(t, n = $) {
        for(const t1 in this[_propertyGraph.$attributes]){
            const n = this[_propertyGraph.$attributes][t1];
            if (n instanceof _propertyGraph.GraphEdge) this[_propertyGraph.$immutableKeys].has(t1) || n.dispose();
            else if (Array.isArray(n) && n[0] instanceof _propertyGraph.GraphEdge) for (const t1 of n)t1.dispose();
            else if (O(n) && Object.values(n)[0] instanceof _propertyGraph.GraphEdge) for(const t2 in n)n[t2].dispose();
        }
        for(const i in t[_propertyGraph.$attributes]){
            const o = this[_propertyGraph.$attributes][i], a = t[_propertyGraph.$attributes][i];
            if (a instanceof _propertyGraph.GraphEdge) this[_propertyGraph.$immutableKeys].has(i) ? o.getChild().copy(n(a.getChild()), n) : this.setRef(i, n(a.getChild()), a.getAttributes());
            else if (Array.isArray(a) && a[0] instanceof _propertyGraph.GraphEdge) for (const t2 of a)this.addRef(i, n(t2.getChild()), t2.getAttributes());
            else if (O(a) && Object.values(a)[0] instanceof _propertyGraph.GraphEdge) for(const t3 in a){
                const e = a[t3];
                this.setRefMap(i, t3, n(e.getChild()), e.getAttributes());
            }
            else this[_propertyGraph.$attributes][i] = O(a) ? JSON.parse(JSON.stringify(a)) : Array.isArray(a) || a instanceof ArrayBuffer || ArrayBuffer.isView(a) ? a.slice() : a;
        }
        return this;
    }
    equals(t) {
        if (this === t) return !0;
        if (this.propertyType !== t.propertyType) return !1;
        for(const r in this[_propertyGraph.$attributes]){
            const s = this[_propertyGraph.$attributes][r], a = t[_propertyGraph.$attributes][r];
            if (_propertyGraph.isRef(s) || _propertyGraph.isRef(a)) {
                if (!B(s, a)) return !1;
            } else if (_propertyGraph.isRefList(s) || _propertyGraph.isRefList(a)) {
                if (!U(s, a)) return !1;
            } else if (_propertyGraph.isRefMap(s) || _propertyGraph.isRefMap(a)) {
                if (!P(s, a)) return !1;
            } else if (O(s) || O(a)) {
                if (!L(s, a)) return !1;
            } else if (_(s) || _(a)) {
                if (!j(s, a)) return !1;
            } else if (s !== a) return !1;
        }
        return !0;
    }
    detach() {
        return this.graph.disconnectParents(this, (t)=>"Root" !== t.propertyType
        ), this;
    }
    listParents() {
        return this.graph.listParents(this);
    }
}
class q extends V {
    getDefaults() {
        return Object.assign(super.getDefaults(), {
            extensions: {
            }
        });
    }
    getExtension(t) {
        return this.getRefMap("extensions", t);
    }
    setExtension(t, e) {
        return e && e.t(this), this.setRefMap("extensions", t, e);
    }
    listExtensions() {
        return this.listRefMapValues("extensions");
    }
}
class W extends q {
    constructor(...t){
        super(...t), this.i = F.identity, this.o = F.identity;
    }
    init() {
        this.propertyType = p.ACCESSOR;
    }
    getDefaults() {
        return Object.assign(super.getDefaults(), {
            array: null,
            type: W.Type.SCALAR,
            componentType: W.ComponentType.FLOAT,
            normalized: !1,
            buffer: null
        });
    }
    copy(t, e = $) {
        return super.copy(t, e), this.i = t.i, this.o = t.o, this;
    }
    static getElementSize(t) {
        switch(t){
            case W.Type.SCALAR:
                return 1;
            case W.Type.VEC2:
                return 2;
            case W.Type.VEC3:
                return 3;
            case W.Type.VEC4:
            case W.Type.MAT2:
                return 4;
            case W.Type.MAT3:
                return 9;
            case W.Type.MAT4:
                return 16;
            default:
                throw new Error("Unexpected type: " + t);
        }
    }
    static getComponentSize(t) {
        switch(t){
            case W.ComponentType.BYTE:
            case W.ComponentType.UNSIGNED_BYTE:
                return 1;
            case W.ComponentType.SHORT:
            case W.ComponentType.UNSIGNED_SHORT:
                return 2;
            case W.ComponentType.UNSIGNED_INT:
            case W.ComponentType.FLOAT:
                return 4;
            default:
                throw new Error("Unexpected component type: " + t);
        }
    }
    getMinNormalized(t) {
        const e = this.getElementSize();
        this.getMin(t);
        for(let r = 0; r < e; r++)t[r] = this.o(t[r]);
        return t;
    }
    getMin(t) {
        const e = this.get("array"), r = this.getCount(), s = this.getElementSize();
        for(let e1 = 0; e1 < s; e1++)t[e1] = Infinity;
        for(let n = 0; n < r * s; n += s)for(let r1 = 0; r1 < s; r1++){
            const s = e[n + r1];
            Number.isFinite(s) && (t[r1] = Math.min(t[r1], s));
        }
        return t;
    }
    getMaxNormalized(t) {
        const e = this.getElementSize();
        this.getMax(t);
        for(let r = 0; r < e; r++)t[r] = this.o(t[r]);
        return t;
    }
    getMax(t) {
        const e = this.get("array"), r = this.getCount(), s = this.getElementSize();
        for(let e1 = 0; e1 < s; e1++)t[e1] = -Infinity;
        for(let n = 0; n < r * s; n += s)for(let r1 = 0; r1 < s; r1++){
            const s = e[n + r1];
            Number.isFinite(s) && (t[r1] = Math.max(t[r1], s));
        }
        return t;
    }
    getCount() {
        const t = this.get("array");
        return t ? t.length / this.getElementSize() : 0;
    }
    getType() {
        return this.get("type");
    }
    setType(t) {
        return this.set("type", t);
    }
    getElementSize() {
        return W.getElementSize(this.get("type"));
    }
    getComponentSize() {
        return this.get("array").BYTES_PER_ELEMENT;
    }
    getComponentType() {
        return this.get("componentType");
    }
    getNormalized() {
        return this.get("normalized");
    }
    setNormalized(t) {
        return this.set("normalized", t), t ? (this.o = (t)=>F.denormalize(t, this.get("componentType"))
        , this.i = (t)=>F.normalize(t, this.get("componentType"))
        ) : (this.o = F.identity, this.i = F.identity), this;
    }
    getScalar(t) {
        const e = this.getElementSize();
        return this.o(this.get("array")[t * e]);
    }
    setScalar(t, e) {
        return this.get("array")[t * this.getElementSize()] = this.i(e), this;
    }
    getElement(t, e) {
        const r = this.getElementSize(), s = this.get("array");
        for(let n = 0; n < r; n++)e[n] = this.o(s[t * r + n]);
        return e;
    }
    setElement(t, e) {
        const r = this.getElementSize(), s = this.get("array");
        for(let n = 0; n < r; n++)s[t * r + n] = this.i(e[n]);
        return this;
    }
    getBuffer() {
        return this.getRef("buffer");
    }
    setBuffer(t) {
        return this.setRef("buffer", t);
    }
    getArray() {
        return this.get("array");
    }
    setArray(t) {
        return this.set("componentType", t ? function(t) {
            switch(t.constructor){
                case Float32Array:
                    return W.ComponentType.FLOAT;
                case Uint32Array:
                    return W.ComponentType.UNSIGNED_INT;
                case Uint16Array:
                    return W.ComponentType.UNSIGNED_SHORT;
                case Uint8Array:
                    return W.ComponentType.UNSIGNED_BYTE;
                case Int16Array:
                    return W.ComponentType.SHORT;
                case Int8Array:
                    return W.ComponentType.BYTE;
                default:
                    throw new Error("Unknown accessor componentType.");
            }
        }(t) : W.ComponentType.FLOAT), this.set("array", t), this;
    }
    getByteLength() {
        const t = this.get("array");
        return t ? t.byteLength : 0;
    }
}
W.Type = {
    SCALAR: "SCALAR",
    VEC2: "VEC2",
    VEC3: "VEC3",
    VEC4: "VEC4",
    MAT2: "MAT2",
    MAT3: "MAT3",
    MAT4: "MAT4"
}, W.ComponentType = {
    BYTE: 5120,
    UNSIGNED_BYTE: 5121,
    SHORT: 5122,
    UNSIGNED_SHORT: 5123,
    UNSIGNED_INT: 5125,
    FLOAT: 5126
};
class H extends q {
    init() {
        this.propertyType = p.ANIMATION;
    }
    getDefaults() {
        return Object.assign(super.getDefaults(), {
            channels: [],
            samplers: []
        });
    }
    addChannel(t) {
        return this.addRef("channels", t);
    }
    removeChannel(t) {
        return this.removeRef("channels", t);
    }
    listChannels() {
        return this.listRefs("channels");
    }
    addSampler(t) {
        return this.addRef("samplers", t);
    }
    removeSampler(t) {
        return this.removeRef("samplers", t);
    }
    listSamplers() {
        return this.listRefs("samplers");
    }
}
class Y extends q {
    init() {
        this.propertyType = p.ANIMATION_CHANNEL;
    }
    getDefaults() {
        return Object.assign(super.getDefaults(), {
            targetPath: null,
            targetNode: null,
            sampler: null
        });
    }
    getTargetPath() {
        return this.get("targetPath");
    }
    setTargetPath(t) {
        return this.set("targetPath", t);
    }
    getTargetNode() {
        return this.getRef("targetNode");
    }
    setTargetNode(t) {
        return this.setRef("targetNode", t);
    }
    getSampler() {
        return this.getRef("sampler");
    }
    setSampler(t) {
        return this.setRef("sampler", t);
    }
}
Y.TargetPath = {
    TRANSLATION: "translation",
    ROTATION: "rotation",
    SCALE: "scale",
    WEIGHTS: "weights"
};
class Z extends q {
    init() {
        this.propertyType = p.ANIMATION_SAMPLER;
    }
    getDefaultAttributes() {
        return Object.assign(super.getDefaults(), {
            interpolation: Z.Interpolation.LINEAR,
            input: null,
            output: null
        });
    }
    getInterpolation() {
        return this.get("interpolation");
    }
    setInterpolation(t) {
        return this.set("interpolation", t);
    }
    getInput() {
        return this.getRef("input");
    }
    setInput(t) {
        return this.setRef("input", t, {
            usage: w.OTHER
        });
    }
    getOutput() {
        return this.getRef("output");
    }
    setOutput(t) {
        return this.setRef("output", t, {
            usage: w.OTHER
        });
    }
}
Z.Interpolation = {
    LINEAR: "LINEAR",
    STEP: "STEP",
    CUBICSPLINE: "CUBICSPLINE"
};
class K extends q {
    init() {
        this.propertyType = p.BUFFER;
    }
    getDefaults() {
        return Object.assign(super.getDefaults(), {
            uri: ""
        });
    }
    getURI() {
        return this.get("uri");
    }
    setURI(t) {
        return this.set("uri", t);
    }
}
class Q extends q {
    init() {
        this.propertyType = p.CAMERA;
    }
    getDefaults() {
        return Object.assign(super.getDefaults(), {
            type: Q.Type.PERSPECTIVE,
            znear: 0.1,
            zfar: 100,
            aspectRatio: null,
            yfov: 2 * Math.PI * 50 / 360,
            xmag: 1,
            ymag: 1
        });
    }
    getType() {
        return this.get("type");
    }
    setType(t) {
        return this.set("type", t);
    }
    getZNear() {
        return this.get("znear");
    }
    setZNear(t) {
        return this.set("znear", t);
    }
    getZFar() {
        return this.get("zfar");
    }
    setZFar(t) {
        return this.set("zfar", t);
    }
    getAspectRatio() {
        return this.get("aspectRatio");
    }
    setAspectRatio(t) {
        return this.set("aspectRatio", t);
    }
    getYFov() {
        return this.get("yfov");
    }
    setYFov(t) {
        return this.set("yfov", t);
    }
    getXMag() {
        return this.get("xmag");
    }
    setXMag(t) {
        return this.set("xmag", t);
    }
    getYMag() {
        return this.get("ymag");
    }
    setYMag(t) {
        return this.set("ymag", t);
    }
}
Q.Type = {
    PERSPECTIVE: "perspective",
    ORTHOGRAPHIC: "orthographic"
};
class X extends V {
    t(t) {
        if (!this.parentTypes.includes(t.propertyType)) throw new Error(`Parent "${t.propertyType}" invalid for child "${this.propertyType}".`);
    }
}
X.EXTENSION_NAME = void 0;
class tt extends q {
    init() {
        this.propertyType = p.TEXTURE_INFO;
    }
    getDefaults() {
        return Object.assign(super.getDefaults(), {
            texCoord: 0,
            magFilter: null,
            minFilter: null,
            wrapS: tt.WrapMode.REPEAT,
            wrapT: tt.WrapMode.REPEAT
        });
    }
    getTexCoord() {
        return this.get("texCoord");
    }
    setTexCoord(t) {
        return this.set("texCoord", t);
    }
    getMagFilter() {
        return this.get("magFilter");
    }
    setMagFilter(t) {
        return this.set("magFilter", t);
    }
    getMinFilter() {
        return this.get("minFilter");
    }
    setMinFilter(t) {
        return this.set("minFilter", t);
    }
    getWrapS() {
        return this.get("wrapS");
    }
    setWrapS(t) {
        return this.set("wrapS", t);
    }
    getWrapT() {
        return this.get("wrapT");
    }
    setWrapT(t) {
        return this.set("wrapT", t);
    }
}
tt.WrapMode = {
    CLAMP_TO_EDGE: 33071,
    MIRRORED_REPEAT: 33648,
    REPEAT: 10497
}, tt.MagFilter = {
    NEAREST: 9728,
    LINEAR: 9729
}, tt.MinFilter = {
    NEAREST: 9728,
    LINEAR: 9729,
    NEAREST_MIPMAP_NEAREST: 9984,
    LINEAR_MIPMAP_NEAREST: 9985,
    NEAREST_MIPMAP_LINEAR: 9986,
    LINEAR_MIPMAP_LINEAR: 9987
};
const { R: et , G: rt , B: st , A: nt  } = y;
class it extends q {
    init() {
        this.propertyType = p.MATERIAL;
    }
    getDefaults() {
        return Object.assign(super.getDefaults(), {
            alphaMode: it.AlphaMode.OPAQUE,
            alphaCutoff: 0.5,
            doubleSided: !1,
            baseColorFactor: [
                1,
                1,
                1,
                1
            ],
            baseColorTexture: null,
            baseColorTextureInfo: new tt(this.graph, "baseColorTextureInfo"),
            emissiveFactor: [
                0,
                0,
                0
            ],
            emissiveTexture: null,
            emissiveTextureInfo: new tt(this.graph, "emissiveTextureInfo"),
            normalScale: 1,
            normalTexture: null,
            normalTextureInfo: new tt(this.graph, "normalTextureInfo"),
            occlusionStrength: 1,
            occlusionTexture: null,
            occlusionTextureInfo: new tt(this.graph, "occlusionTextureInfo"),
            roughnessFactor: 1,
            metallicFactor: 1,
            metallicRoughnessTexture: null,
            metallicRoughnessTextureInfo: new tt(this.graph, "metallicRoughnessTextureInfo")
        });
    }
    getDoubleSided() {
        return this.get("doubleSided");
    }
    setDoubleSided(t) {
        return this.set("doubleSided", t);
    }
    getAlpha() {
        return this.get("baseColorFactor")[3];
    }
    setAlpha(t) {
        const e = this.get("baseColorFactor").slice();
        return e[3] = t, this.set("baseColorFactor", e);
    }
    getAlphaMode() {
        return this.get("alphaMode");
    }
    setAlphaMode(t) {
        return this.set("alphaMode", t);
    }
    getAlphaCutoff() {
        return this.get("alphaCutoff");
    }
    setAlphaCutoff(t) {
        return this.set("alphaCutoff", t);
    }
    getBaseColorFactor() {
        return this.get("baseColorFactor");
    }
    setBaseColorFactor(t) {
        return this.set("baseColorFactor", t);
    }
    getBaseColorHex() {
        return E.factorToHex(this.get("baseColorFactor"));
    }
    setBaseColorHex(t) {
        const e = this.get("baseColorFactor").slice();
        return this.set("baseColorFactor", E.hexToFactor(t, e));
    }
    getBaseColorTexture() {
        return this.getRef("baseColorTexture");
    }
    getBaseColorTextureInfo() {
        return this.getRef("baseColorTexture") ? this.getRef("baseColorTextureInfo") : null;
    }
    setBaseColorTexture(t) {
        return this.setRef("baseColorTexture", t, {
            channels: et | rt | st | nt
        });
    }
    getEmissiveFactor() {
        return this.get("emissiveFactor");
    }
    setEmissiveFactor(t) {
        return this.set("emissiveFactor", t);
    }
    getEmissiveHex() {
        return E.factorToHex(this.get("emissiveFactor"));
    }
    setEmissiveHex(t) {
        const e = this.get("emissiveFactor").slice();
        return this.set("emissiveFactor", E.hexToFactor(t, e));
    }
    getEmissiveTexture() {
        return this.getRef("emissiveTexture");
    }
    getEmissiveTextureInfo() {
        return this.getRef("emissiveTexture") ? this.getRef("emissiveTextureInfo") : null;
    }
    setEmissiveTexture(t) {
        return this.setRef("emissiveTexture", t, {
            channels: et | rt | st
        });
    }
    getNormalScale() {
        return this.get("normalScale");
    }
    setNormalScale(t) {
        return this.set("normalScale", t);
    }
    getNormalTexture() {
        return this.getRef("normalTexture");
    }
    getNormalTextureInfo() {
        return this.getRef("normalTexture") ? this.getRef("normalTextureInfo") : null;
    }
    setNormalTexture(t) {
        return this.setRef("normalTexture", t, {
            channels: et | rt | st
        });
    }
    getOcclusionStrength() {
        return this.get("occlusionStrength");
    }
    setOcclusionStrength(t) {
        return this.set("occlusionStrength", t);
    }
    getOcclusionTexture() {
        return this.getRef("occlusionTexture");
    }
    getOcclusionTextureInfo() {
        return this.getRef("occlusionTexture") ? this.getRef("occlusionTextureInfo") : null;
    }
    setOcclusionTexture(t) {
        return this.setRef("occlusionTexture", t, {
            channels: et
        });
    }
    getRoughnessFactor() {
        return this.get("roughnessFactor");
    }
    setRoughnessFactor(t) {
        return this.set("roughnessFactor", t);
    }
    getMetallicFactor() {
        return this.get("metallicFactor");
    }
    setMetallicFactor(t) {
        return this.set("metallicFactor", t);
    }
    getMetallicRoughnessTexture() {
        return this.getRef("metallicRoughnessTexture");
    }
    getMetallicRoughnessTextureInfo() {
        return this.getRef("metallicRoughnessTexture") ? this.getRef("metallicRoughnessTextureInfo") : null;
    }
    setMetallicRoughnessTexture(t) {
        return this.setRef("metallicRoughnessTexture", t, {
            channels: rt | st
        });
    }
}
it.AlphaMode = {
    OPAQUE: "OPAQUE",
    MASK: "MASK",
    BLEND: "BLEND"
};
class ot extends q {
    init() {
        this.propertyType = p.MESH;
    }
    getDefaults() {
        return Object.assign(super.getDefaults(), {
            weights: [],
            primitives: []
        });
    }
    addPrimitive(t) {
        return this.addRef("primitives", t);
    }
    removePrimitive(t) {
        return this.removeRef("primitives", t);
    }
    listPrimitives() {
        return this.listRefs("primitives");
    }
    getWeights() {
        return this.get("weights");
    }
    setWeights(t) {
        return this.set("weights", t);
    }
}
class at extends q {
    constructor(...t){
        super(...t), this.u = null;
    }
    init() {
        this.propertyType = p.NODE;
    }
    getDefaults() {
        return Object.assign(super.getDefaults(), {
            translation: [
                0,
                0,
                0
            ],
            rotation: [
                0,
                0,
                0,
                1
            ],
            scale: [
                1,
                1,
                1
            ],
            weights: [],
            camera: null,
            mesh: null,
            skin: null,
            children: []
        });
    }
    copy(t, e = $) {
        if (e === $) throw new Error("Node cannot be copied.");
        return super.copy(t, e);
    }
    getTranslation() {
        return this.get("translation");
    }
    getRotation() {
        return this.get("rotation");
    }
    getScale() {
        return this.get("scale");
    }
    setTranslation(t) {
        return this.set("translation", t);
    }
    setRotation(t) {
        return this.set("rotation", t);
    }
    setScale(t) {
        return this.set("scale", t);
    }
    getMatrix() {
        return F.compose(this.get("translation"), this.get("rotation"), this.get("scale"), []);
    }
    setMatrix(t) {
        const e = this.get("translation").slice(), r = this.get("rotation").slice(), s = this.get("scale").slice();
        return F.decompose(t, e, r, s), this.set("translation", e).set("rotation", r).set("scale", s);
    }
    getWorldTranslation() {
        const t = [
            0,
            0,
            0
        ];
        return F.decompose(this.getWorldMatrix(), t, [
            0,
            0,
            0,
            1
        ], [
            1,
            1,
            1
        ]), t;
    }
    getWorldRotation() {
        const t = [
            0,
            0,
            0,
            1
        ];
        return F.decompose(this.getWorldMatrix(), [
            0,
            0,
            0
        ], t, [
            1,
            1,
            1
        ]), t;
    }
    getWorldScale() {
        const t = [
            1,
            1,
            1
        ];
        return F.decompose(this.getWorldMatrix(), [
            0,
            0,
            0
        ], [
            0,
            0,
            0,
            1
        ], t), t;
    }
    getWorldMatrix() {
        const t = [];
        for(let e = this; e instanceof at; e = e.u)t.push(e);
        let e1;
        const r = t.pop().getMatrix();
        for(; e1 = t.pop();)_mat4.multiply(r, r, e1.getMatrix());
        return r;
    }
    addChild(t) {
        t.u && t.u.removeChild(t), this.addRef("children", t), t.u = this;
        const r = this[_propertyGraph.$attributes].children;
        return r[r.length - 1].addEventListener("dispose", ()=>t.u = null
        ), this;
    }
    removeChild(t) {
        return this.removeRef("children", t);
    }
    listChildren() {
        return this.listRefs("children");
    }
    getParent() {
        return this.u;
    }
    getMesh() {
        return this.getRef("mesh");
    }
    setMesh(t) {
        return this.setRef("mesh", t);
    }
    getCamera() {
        return this.getRef("camera");
    }
    setCamera(t) {
        return this.setRef("camera", t);
    }
    getSkin() {
        return this.getRef("skin");
    }
    setSkin(t) {
        return this.setRef("skin", t);
    }
    getWeights() {
        return this.get("weights");
    }
    setWeights(t) {
        return this.set("weights", t);
    }
    traverse(t) {
        t(this);
        for (const e of this.listChildren())e.traverse(t);
        return this;
    }
}
class ut extends q {
    init() {
        this.propertyType = p.PRIMITIVE;
    }
    getDefaults() {
        return Object.assign(super.getDefaults(), {
            mode: ut.Mode.TRIANGLES,
            material: null,
            indices: null,
            attributes: {
            },
            targets: []
        });
    }
    getIndices() {
        return this.getRef("indices");
    }
    setIndices(t) {
        return this.setRef("indices", t, {
            usage: w.ELEMENT_ARRAY_BUFFER
        });
    }
    getAttribute(t) {
        return this.getRefMap("attributes", t);
    }
    setAttribute(t, e) {
        return this.setRefMap("attributes", t, e, {
            usage: w.ARRAY_BUFFER
        });
    }
    listAttributes() {
        return this.listRefMapValues("attributes");
    }
    listSemantics() {
        return this.listRefMapKeys("attributes");
    }
    getMaterial() {
        return this.getRef("material");
    }
    setMaterial(t) {
        return this.setRef("material", t);
    }
    getMode() {
        return this.get("mode");
    }
    setMode(t) {
        return this.set("mode", t);
    }
    listTargets() {
        return this.listRefs("targets");
    }
    addTarget(t) {
        return this.addRef("targets", t);
    }
    removeTarget(t) {
        return this.removeRef("targets", t);
    }
}
ut.Mode = {
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6
};
class ct extends V {
    init() {
        this.propertyType = p.PRIMITIVE_TARGET;
    }
    getDefaults() {
        return Object.assign(super.getDefaults(), {
            attributes: {
            }
        });
    }
    getAttribute(t) {
        return this.getRefMap("attributes", t);
    }
    setAttribute(t, e) {
        return this.setRefMap("attributes", t, e, {
            usage: w.ARRAY_BUFFER
        });
    }
    listAttributes() {
        return this.listRefMapValues("attributes");
    }
    listSemantics() {
        return this.listRefMapKeys("attributes");
    }
}
function ht() {
    return (ht = Object.assign || function(t) {
        for(var e = 1; e < arguments.length; e++){
            var r = arguments[e];
            for(var s in r)Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
        }
        return t;
    }).apply(this, arguments);
}
class lt extends q {
    init() {
        this.propertyType = p.SCENE;
    }
    getDefaults() {
        return Object.assign(super.getDefaults(), {
            children: []
        });
    }
    copy(t, e = $) {
        if (e === $) throw new Error("Scene cannot be copied.");
        return super.copy(t, e);
    }
    addChild(t) {
        t.u && t.u.removeChild(t), this.addRef("children", t), t.u = this;
        const r = this[_propertyGraph.$attributes].children;
        return r[r.length - 1].addEventListener("dispose", ()=>t.u = null
        ), this;
    }
    removeChild(t) {
        return this.removeRef("children", t);
    }
    listChildren() {
        return this.listRefs("children");
    }
    traverse(t) {
        for (const e of this.listChildren())e.traverse(t);
        return this;
    }
}
class ft extends q {
    init() {
        this.propertyType = p.SKIN;
    }
    getDefaults() {
        return Object.assign(super.getDefaults(), {
            skeleton: null,
            inverseBindMatrices: null,
            joints: []
        });
    }
    getSkeleton() {
        return this.getRef("skeleton");
    }
    setSkeleton(t) {
        return this.setRef("skeleton", t);
    }
    getInverseBindMatrices() {
        return this.getRef("inverseBindMatrices");
    }
    setInverseBindMatrices(t) {
        return this.setRef("inverseBindMatrices", t, {
            usage: w.INVERSE_BIND_MATRICES
        });
    }
    addJoint(t) {
        return this.addRef("joints", t);
    }
    removeJoint(t) {
        return this.removeRef("joints", t);
    }
    listJoints() {
        return this.listRefs("joints");
    }
}
class dt extends q {
    init() {
        this.propertyType = p.TEXTURE;
    }
    getDefaults() {
        return Object.assign(super.getDefaults(), {
            image: null,
            mimeType: "",
            uri: ""
        });
    }
    getMimeType() {
        return this.get("mimeType") || I.extensionToMimeType(S.extension(this.get("uri")));
    }
    setMimeType(t) {
        return this.set("mimeType", t);
    }
    getURI() {
        return this.get("uri");
    }
    setURI(t) {
        return this.set("uri", t), this.set("mimeType", I.extensionToMimeType(S.extension(t))), this;
    }
    getImage() {
        return this.get("image");
    }
    setImage(t) {
        return this.set("image", A.assertView(t));
    }
    getSize() {
        const t = this.get("image");
        return t ? I.getSize(t, this.getMimeType()) : null;
    }
}
class gt extends q {
    init() {
        this.propertyType = p.ROOT;
    }
    getDefaults() {
        return Object.assign(super.getDefaults(), {
            asset: {
                generator: "glTF-Transform v2.0.4",
                version: "2.0"
            },
            defaultScene: null,
            accessors: [],
            animations: [],
            buffers: [],
            cameras: [],
            materials: [],
            meshes: [],
            nodes: [],
            scenes: [],
            skins: [],
            textures: []
        });
    }
    constructor(t){
        super(t), this.h = new Set, t.addEventListener("node:create", (t)=>{
            this.l(t.target);
        });
    }
    clone() {
        throw new Error("Root cannot be cloned.");
    }
    copy(t, e = $) {
        if (e === $) throw new Error("Root cannot be copied.");
        this.set("asset", ht({
        }, t.get("asset"))), this.setName(t.getName()), this.setExtras(ht({
        }, t.getExtras())), this.setDefaultScene(t.getDefaultScene() ? e(t.getDefaultScene()) : null);
        for (const r of t.listRefMapKeys("extensions")){
            const s = t.getExtension(r);
            this.setExtension(r, e(s));
        }
        return this;
    }
    l(t) {
        return t instanceof lt ? this.addRef("scenes", t) : t instanceof at ? this.addRef("nodes", t) : t instanceof Q ? this.addRef("cameras", t) : t instanceof ft ? this.addRef("skins", t) : t instanceof ot ? this.addRef("meshes", t) : t instanceof it ? this.addRef("materials", t) : t instanceof dt ? this.addRef("textures", t) : t instanceof H ? this.addRef("animations", t) : t instanceof W ? this.addRef("accessors", t) : t instanceof K && this.addRef("buffers", t), this;
    }
    getAsset() {
        return this.get("asset");
    }
    listExtensionsUsed() {
        return Array.from(this.h);
    }
    listExtensionsRequired() {
        return this.listExtensionsUsed().filter((t)=>t.isRequired()
        );
    }
    g(t) {
        return this.h.add(t), this;
    }
    p(t) {
        return this.h.delete(t), this;
    }
    listScenes() {
        return this.listRefs("scenes");
    }
    setDefaultScene(t) {
        return this.setRef("defaultScene", t);
    }
    getDefaultScene() {
        return this.getRef("defaultScene");
    }
    listNodes() {
        return this.listRefs("nodes");
    }
    listCameras() {
        return this.listRefs("cameras");
    }
    listSkins() {
        return this.listRefs("skins");
    }
    listMeshes() {
        return this.listRefs("meshes");
    }
    listMaterials() {
        return this.listRefs("materials");
    }
    listTextures() {
        return this.listRefs("textures");
    }
    listAnimations() {
        return this.listRefs("animations");
    }
    listAccessors() {
        return this.listRefs("accessors");
    }
    listBuffers() {
        return this.listRefs("buffers");
    }
}
class pt {
    constructor(){
        this.m = new _propertyGraph.Graph, this.T = new gt(this.m), this.v = C.DEFAULT_INSTANCE;
    }
    getRoot() {
        return this.T;
    }
    getGraph() {
        return this.m;
    }
    getLogger() {
        return this.v;
    }
    setLogger(t) {
        return this.v = t, this;
    }
    clone() {
        return (new pt).setLogger(this.v).merge(this);
    }
    merge(t) {
        for (const e of t.getRoot().listExtensionsUsed()){
            const t = this.createExtension(e.constructor);
            e.isRequired() && t.setRequired(!0);
        }
        const e1 = new Set, r = new Map;
        e1.add(t.T), r.set(t.T, this.T);
        for (const s of t.m.listEdges())for (const t1 of [
            s.getParent(),
            s.getChild()
        ]){
            if (e1.has(t1)) continue;
            let s;
            s = t1.propertyType === p.TEXTURE_INFO ? t1 : new t1.constructor(this.m), r.set(t1, s), e1.add(t1);
        }
        const s1 = (t)=>{
            const e = r.get(t);
            if (!e) throw new Error("Could resolve property.");
            return e;
        };
        for (const t2 of e1){
            const e = r.get(t2);
            if (!e) throw new Error("Could resolve property.");
            e.copy(t2, s1);
        }
        return this;
    }
    async transform(...t) {
        const e = t.map((t)=>t.name
        );
        for (const r of t)await r(this, {
            stack: e
        });
        return this;
    }
    createExtension(t) {
        const e = t.EXTENSION_NAME;
        return this.getRoot().listExtensionsUsed().find((t)=>t.extensionName === e
        ) || new t(this);
    }
    createScene(t = "") {
        return new lt(this.m, t);
    }
    createNode(t = "") {
        return new at(this.m, t);
    }
    createCamera(t = "") {
        return new Q(this.m, t);
    }
    createSkin(t = "") {
        return new ft(this.m, t);
    }
    createMesh(t = "") {
        return new ot(this.m, t);
    }
    createPrimitive() {
        return new ut(this.m);
    }
    createPrimitiveTarget(t = "") {
        return new ct(this.m, t);
    }
    createMaterial(t = "") {
        return new it(this.m, t);
    }
    createTexture(t = "") {
        return new dt(this.m, t);
    }
    createAnimation(t = "") {
        return new H(this.m, t);
    }
    createAnimationChannel(t = "") {
        return new Y(this.m, t);
    }
    createAnimationSampler(t = "") {
        return new Z(this.m, t);
    }
    createAccessor(t = "", e = null) {
        return e || (e = this.getRoot().listBuffers()[0]), new W(this.m, t).setBuffer(e);
    }
    createBuffer(t = "") {
        return new K(this.m, t);
    }
}
class mt {
    constructor(t){
        this.extensionName = "", this.prereadTypes = [], this.prewriteTypes = [], this.readDependencies = [], this.writeDependencies = [], this.document = void 0, this.required = !1, this.properties = new Set, this.S = void 0, this.document = t, t.getRoot().g(this), this.S = (t)=>{
            const e = t, r = e.target;
            r instanceof X && r.extensionName === this.extensionName && ("node:create" === e.type && this.M(r), "node:dispose" === e.type && this.I(r));
        };
        const e = t.getGraph();
        e.addEventListener("node:create", this.S), e.addEventListener("node:dispose", this.S);
    }
    dispose() {
        this.document.getRoot().p(this);
        const t = this.document.getGraph();
        t.removeEventListener("node:create", this.S), t.removeEventListener("node:dispose", this.S);
        for (const t1 of this.properties)t1.dispose();
    }
    static register() {
    }
    isRequired() {
        return this.required;
    }
    setRequired(t) {
        return this.required = t, this;
    }
    M(t) {
        return this.properties.add(t), this;
    }
    I(t) {
        return this.properties.delete(t), this;
    }
    install(t, e) {
        return this;
    }
    preread(t, e) {
        return this;
    }
    prewrite(t, e) {
        return this;
    }
}
mt.EXTENSION_NAME = void 0;
class wt {
    constructor(t){
        this.jsonDoc = void 0, this.buffers = [], this.bufferViews = [], this.bufferViewBuffers = [], this.accessors = [], this.textures = [], this.textureInfos = new Map, this.materials = [], this.meshes = [], this.cameras = [], this.nodes = [], this.skins = [], this.animations = [], this.scenes = [], this.jsonDoc = t;
    }
    setTextureInfo(t, e) {
        this.textureInfos.set(t, e), void 0 !== e.texCoord && t.setTexCoord(e.texCoord);
        const r = this.jsonDoc.json.textures[e.index];
        if (void 0 === r.sampler) return;
        const s = this.jsonDoc.json.samplers[r.sampler];
        void 0 !== s.magFilter && t.setMagFilter(s.magFilter), void 0 !== s.minFilter && t.setMinFilter(s.minFilter), void 0 !== s.wrapS && t.setWrapS(s.wrapS), void 0 !== s.wrapT && t.setWrapT(s.wrapT);
    }
}
const yt = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array
}, Tt = {
    logger: C.DEFAULT_INSTANCE,
    extensions: [],
    dependencies: {
    }
};
function vt(t, e) {
    const r = e.bufferViews[t.bufferView], s = e.jsonDoc.json.bufferViews[t.bufferView], n = yt[t.componentType], i = W.getElementSize(t.type), o = n.BYTES_PER_ELEMENT;
    if (void 0 !== s.byteStride && s.byteStride !== i * o) return (function(t, e) {
        const r = e.bufferViews[t.bufferView], s = e.jsonDoc.json.bufferViews[t.bufferView], n = yt[t.componentType], i = W.getElementSize(t.type), o = n.BYTES_PER_ELEMENT, a = t.byteOffset || 0, u = new n(t.count * i), c = new DataView(r.buffer, r.byteOffset, r.byteLength), h = s.byteStride;
        for(let e1 = 0; e1 < t.count; e1++)for(let r1 = 0; r1 < i; r1++){
            const s = a + e1 * h + r1 * o;
            let n;
            switch(t.componentType){
                case W.ComponentType.FLOAT:
                    n = c.getFloat32(s, !0);
                    break;
                case W.ComponentType.UNSIGNED_INT:
                    n = c.getUint32(s, !0);
                    break;
                case W.ComponentType.UNSIGNED_SHORT:
                    n = c.getUint16(s, !0);
                    break;
                case W.ComponentType.UNSIGNED_BYTE:
                    n = c.getUint8(s);
                    break;
                case W.ComponentType.SHORT:
                    n = c.getInt16(s, !0);
                    break;
                case W.ComponentType.BYTE:
                    n = c.getInt8(s);
                    break;
                default:
                    throw new Error(`Unexpected componentType "${t.componentType}".`);
            }
            u[e1 * i + r1] = n;
        }
        return u;
    })(t, e);
    const a = r.byteOffset + (t.byteOffset || 0);
    return new n(r.buffer.slice(a, a + t.count * i * o));
}
var xt;
!function(t) {
    t[t.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", t[t.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER";
}(xt || (xt = {
}));
class bt {
    constructor(t, e, r){
        this.N = void 0, this.jsonDoc = void 0, this.options = void 0, this.accessorIndexMap = new Map, this.animationIndexMap = new Map, this.bufferIndexMap = new Map, this.cameraIndexMap = new Map, this.skinIndexMap = new Map, this.materialIndexMap = new Map, this.meshIndexMap = new Map, this.nodeIndexMap = new Map, this.imageIndexMap = new Map, this.textureDefIndexMap = new Map, this.textureInfoDefMap = new Map, this.samplerDefIndexMap = new Map, this.sceneIndexMap = new Map, this.imageBufferViews = [], this.otherBufferViews = new Map, this.otherBufferViewsIndexMap = new Map, this.extensionData = {
        }, this.bufferURIGenerator = void 0, this.imageURIGenerator = void 0, this.logger = void 0, this.O = new Map, this.accessorUsageGroupedByParent = new Set([
            "ARRAY_BUFFER"
        ]), this.accessorParents = new Map, this.N = t, this.jsonDoc = e, this.options = r;
        const s = t.getRoot(), n = s.listBuffers().length, i = s.listTextures().length;
        this.bufferURIGenerator = new At(n > 1, r.basename), this.imageURIGenerator = new At(i > 1, r.basename), this.logger = t.getLogger();
    }
    createTextureInfoDef(t, e) {
        const r = {
            magFilter: e.getMagFilter() || void 0,
            minFilter: e.getMinFilter() || void 0,
            wrapS: e.getWrapS(),
            wrapT: e.getWrapT()
        }, s = JSON.stringify(r);
        this.samplerDefIndexMap.has(s) || (this.samplerDefIndexMap.set(s, this.jsonDoc.json.samplers.length), this.jsonDoc.json.samplers.push(r));
        const n = {
            source: this.imageIndexMap.get(t),
            sampler: this.samplerDefIndexMap.get(s)
        }, i = JSON.stringify(n);
        this.textureDefIndexMap.has(i) || (this.textureDefIndexMap.set(i, this.jsonDoc.json.textures.length), this.jsonDoc.json.textures.push(n));
        const o = {
            index: this.textureDefIndexMap.get(i)
        };
        return 0 !== e.getTexCoord() && (o.texCoord = e.getTexCoord()), this.textureInfoDefMap.set(e, o), o;
    }
    createPropertyDef(t) {
        const e = {
        };
        return t.getName() && (e.name = t.getName()), Object.keys(t.getExtras()).length > 0 && (e.extras = t.getExtras()), e;
    }
    createAccessorDef(t) {
        const e = this.createPropertyDef(t);
        return e.type = t.getType(), e.componentType = t.getComponentType(), e.count = t.getCount(), this.N.getGraph().listParentEdges(t).some((t)=>"attributes" === t.getName() && "POSITION" === t.getAttributes().key || "input" === t.getName()
        ) && (e.max = t.getMax([]).map(Math.fround), e.min = t.getMin([]).map(Math.fround)), t.getNormalized() && (e.normalized = t.getNormalized()), e;
    }
    createImageData(t, e, r) {
        if (this.options.format === T.GLB) this.imageBufferViews.push(e), t.bufferView = this.jsonDoc.json.bufferViews.length, this.jsonDoc.json.bufferViews.push({
            buffer: 0,
            byteOffset: -1,
            byteLength: e.byteLength
        });
        else {
            const s = I.mimeTypeToExtension(r.getMimeType());
            t.uri = this.imageURIGenerator.createURI(r, s), this.jsonDoc.resources[t.uri] = e;
        }
    }
    getAccessorUsage(t) {
        const e = this.O.get(t);
        if (e) return e;
        for (const e1 of this.N.getGraph().listParentEdges(t)){
            const { usage: t  } = e1.getAttributes();
            if (t) return t;
            e1.getParent().propertyType !== p.ROOT && this.N.getLogger().warn(`Missing attribute ".usage" on edge, "${e1.getName()}".`);
        }
        return bt.BufferViewUsage.OTHER;
    }
    addAccessorToUsageGroup(t, e) {
        const r = this.O.get(t);
        if (r && r !== e) throw new Error(`Accessor with usage "${r}" cannot be reused as "${e}".`);
        return this.O.set(t, e), this;
    }
    listAccessorUsageGroups() {
        const t = {
        };
        for (const [e, r] of Array.from(this.O.entries()))t[r] = t[r] || [], t[r].push(e);
        return t;
    }
}
bt.BufferViewTarget = xt, bt.BufferViewUsage = w, bt.USAGE_TO_TARGET = {
    [w.ARRAY_BUFFER]: xt.ARRAY_BUFFER,
    [w.ELEMENT_ARRAY_BUFFER]: xt.ELEMENT_ARRAY_BUFFER
};
class At {
    constructor(t, e){
        this.multiple = void 0, this.basename = void 0, this.counter = 1, this.multiple = t, this.basename = e;
    }
    createURI(t, e) {
        return t.getURI() ? t.getURI() : this.multiple ? `${this.basename}_${this.counter++}.${e}` : `${this.basename}.${e}`;
    }
}
const { BufferViewUsage: Et  } = bt;
var St;
!function(t) {
    t[t.JSON = 1313821514] = "JSON", t[t.BIN = 5130562] = "BIN";
}(St || (St = {
}));
class Mt {
    constructor(){
        this.v = C.DEFAULT_INSTANCE, this.h = new Set, this.C = {
        }, this.F = m.INTERLEAVED, this.lastReadBytes = 0, this.lastWriteBytes = 0;
    }
    setLogger(t) {
        return this.v = t, this;
    }
    registerExtensions(t) {
        for (const e of t)this.h.add(e), e.register();
        return this;
    }
    registerDependencies(t) {
        return Object.assign(this.C, t), this;
    }
    setVertexLayout(t) {
        return this.F = t, this;
    }
    async read(t) {
        return await this.readJSON(await this.readAsJSON(t));
    }
    async readAsJSON(t) {
        return t.match(/^data:application\/octet-stream;/) || "glb" === S.extension(t) ? this.U(t) : this.P(t);
    }
    async readJSON(t) {
        return t = this.j(t), this.L(t), (class {
            static read(t, e = Tt) {
                const r = ht({
                }, Tt, e), { json: s  } = t, n = new pt;
                this.validate(t, r);
                const i = new wt(t), o = s.asset, a = n.getRoot().getAsset();
                o.copyright && (a.copyright = o.copyright), o.extras && (a.extras = o.extras), void 0 !== s.extras && n.getRoot().setExtras(ht({
                }, s.extras));
                const u = s.extensionsUsed || [], c = s.extensionsRequired || [];
                for (const t1 of r.extensions)if (u.includes(t1.EXTENSION_NAME)) {
                    const e = n.createExtension(t1).setRequired(c.includes(t1.EXTENSION_NAME));
                    for (const t2 of e.readDependencies)e.install(t2, r.dependencies[t2]);
                }
                const h = s.buffers || [];
                n.getRoot().listExtensionsUsed().filter((t)=>t.prereadTypes.includes(p.BUFFER)
                ).forEach((t)=>t.preread(i, p.BUFFER)
                ), i.buffers = h.map((t)=>{
                    const e = n.createBuffer(t.name);
                    return t.extras && e.setExtras(t.extras), t.uri && 0 !== t.uri.indexOf("__") && e.setURI(t.uri), e;
                }), i.bufferViewBuffers = (s.bufferViews || []).map((e, r)=>{
                    if (!i.bufferViews[r]) {
                        const s = t.json.buffers[e.buffer];
                        i.bufferViews[r] = A.toView(s.uri ? t.resources[s.uri] : t.resources["@glb.bin"], e.byteOffset || 0, e.byteLength);
                    }
                    return i.buffers[e.buffer];
                }), i.accessors = (s.accessors || []).map((t)=>{
                    const e = n.createAccessor(t.name, i.bufferViewBuffers[t.bufferView]).setType(t.type);
                    if (t.extras && e.setExtras(t.extras), void 0 !== t.normalized && e.setNormalized(t.normalized), void 0 === t.bufferView && !t.sparse) return e;
                    let r;
                    return r = void 0 !== t.sparse ? (function(t, e) {
                        const r = yt[t.componentType], s = W.getElementSize(t.type);
                        let n;
                        n = void 0 !== t.bufferView ? vt(t, e) : new r(t.count * s);
                        const i = t.sparse, o = i.count, a = ht({
                        }, t, i.indices, {
                            count: o,
                            type: "SCALAR"
                        }), u = ht({
                        }, t, i.values, {
                            count: o
                        }), c = vt(a, e), h = vt(u, e);
                        for(let t2 = 0; t2 < a.count; t2++)for(let e1 = 0; e1 < s; e1++)n[c[t2] * s + e1] = h[t2 * s + e1];
                        return n;
                    })(t, i) : vt(t, i), e.setArray(r), e;
                });
                const l = s.images || [], f = s.textures || [];
                n.getRoot().listExtensionsUsed().filter((t)=>t.prereadTypes.includes(p.TEXTURE)
                ).forEach((t)=>t.preread(i, p.TEXTURE)
                ), i.textures = l.map((e)=>{
                    const r = n.createTexture(e.name);
                    if (e.extras && r.setExtras(e.extras), void 0 !== e.bufferView) {
                        const n = s.bufferViews[e.bufferView], i = t.json.buffers[n.buffer], o = n.byteOffset || 0, a = (i.uri ? t.resources[i.uri] : t.resources["@glb.bin"]).slice(o, o + n.byteLength);
                        r.setImage(a);
                    } else void 0 !== e.uri && (r.setImage(t.resources[e.uri]), 0 !== e.uri.indexOf("__") && r.setURI(e.uri));
                    if (void 0 !== e.mimeType) r.setMimeType(e.mimeType);
                    else if (e.uri) {
                        const t = S.extension(e.uri);
                        r.setMimeType(I.extensionToMimeType(t));
                    }
                    return r;
                }), i.materials = (s.materials || []).map((t)=>{
                    const e = n.createMaterial(t.name);
                    t.extras && e.setExtras(t.extras), void 0 !== t.alphaMode && e.setAlphaMode(t.alphaMode), void 0 !== t.alphaCutoff && e.setAlphaCutoff(t.alphaCutoff), void 0 !== t.doubleSided && e.setDoubleSided(t.doubleSided);
                    const r = t.pbrMetallicRoughness || {
                    };
                    if (void 0 !== r.baseColorFactor && e.setBaseColorFactor(r.baseColorFactor), void 0 !== t.emissiveFactor && e.setEmissiveFactor(t.emissiveFactor), void 0 !== r.metallicFactor && e.setMetallicFactor(r.metallicFactor), void 0 !== r.roughnessFactor && e.setRoughnessFactor(r.roughnessFactor), void 0 !== r.baseColorTexture) {
                        const t = r.baseColorTexture;
                        e.setBaseColorTexture(i.textures[f[t.index].source]), i.setTextureInfo(e.getBaseColorTextureInfo(), t);
                    }
                    if (void 0 !== t.emissiveTexture) {
                        const r = t.emissiveTexture;
                        e.setEmissiveTexture(i.textures[f[r.index].source]), i.setTextureInfo(e.getEmissiveTextureInfo(), r);
                    }
                    if (void 0 !== t.normalTexture) {
                        const r = t.normalTexture;
                        e.setNormalTexture(i.textures[f[r.index].source]), i.setTextureInfo(e.getNormalTextureInfo(), r), void 0 !== t.normalTexture.scale && e.setNormalScale(t.normalTexture.scale);
                    }
                    if (void 0 !== t.occlusionTexture) {
                        const r = t.occlusionTexture;
                        e.setOcclusionTexture(i.textures[f[r.index].source]), i.setTextureInfo(e.getOcclusionTextureInfo(), r), void 0 !== t.occlusionTexture.strength && e.setOcclusionStrength(t.occlusionTexture.strength);
                    }
                    if (void 0 !== r.metallicRoughnessTexture) {
                        const t = r.metallicRoughnessTexture;
                        e.setMetallicRoughnessTexture(i.textures[f[t.index].source]), i.setTextureInfo(e.getMetallicRoughnessTextureInfo(), t);
                    }
                    return e;
                });
                const d = s.meshes || [];
                n.getRoot().listExtensionsUsed().filter((t)=>t.prereadTypes.includes(p.PRIMITIVE)
                ).forEach((t)=>t.preread(i, p.PRIMITIVE)
                ), i.meshes = d.map((t)=>{
                    const e = n.createMesh(t.name);
                    return t.extras && e.setExtras(t.extras), void 0 !== t.weights && e.setWeights(t.weights), (t.primitives || []).forEach((r)=>{
                        const s = n.createPrimitive();
                        r.extras && s.setExtras(r.extras), void 0 !== r.material && s.setMaterial(i.materials[r.material]), void 0 !== r.mode && s.setMode(r.mode);
                        for (const [t2, e1] of Object.entries(r.attributes || {
                        }))s.setAttribute(t2, i.accessors[e1]);
                        void 0 !== r.indices && s.setIndices(i.accessors[r.indices]);
                        const o = t.extras && t.extras.targetNames || [];
                        (r.targets || []).forEach((t, e)=>{
                            const r = o[e] || e.toString(), a = n.createPrimitiveTarget(r);
                            for (const [e1, r1] of Object.entries(t))a.setAttribute(e1, i.accessors[r1]);
                            s.addTarget(a);
                        }), e.addPrimitive(s);
                    }), e;
                }), i.cameras = (s.cameras || []).map((t)=>{
                    const e = n.createCamera(t.name).setType(t.type);
                    if (t.extras && e.setExtras(t.extras), t.type === Q.Type.PERSPECTIVE) {
                        const r = t.perspective;
                        e.setYFov(r.yfov), e.setZNear(r.znear), void 0 !== r.zfar && e.setZFar(r.zfar), void 0 !== r.aspectRatio && e.setAspectRatio(r.aspectRatio);
                    } else {
                        const r = t.orthographic;
                        e.setZNear(r.znear).setZFar(r.zfar).setXMag(r.xmag).setYMag(r.ymag);
                    }
                    return e;
                });
                const g = s.nodes || [];
                n.getRoot().listExtensionsUsed().filter((t)=>t.prereadTypes.includes(p.NODE)
                ).forEach((t)=>t.preread(i, p.NODE)
                ), i.nodes = g.map((t)=>{
                    const e = n.createNode(t.name);
                    if (t.extras && e.setExtras(t.extras), void 0 !== t.translation && e.setTranslation(t.translation), void 0 !== t.rotation && e.setRotation(t.rotation), void 0 !== t.scale && e.setScale(t.scale), void 0 !== t.matrix) {
                        const r = [
                            0,
                            0,
                            0
                        ], s = [
                            0,
                            0,
                            0,
                            1
                        ], n = [
                            1,
                            1,
                            1
                        ];
                        F.decompose(t.matrix, r, s, n), e.setTranslation(r), e.setRotation(s), e.setScale(n);
                    }
                    return void 0 !== t.weights && e.setWeights(t.weights), e;
                }), i.skins = (s.skins || []).map((t)=>{
                    const e = n.createSkin(t.name);
                    t.extras && e.setExtras(t.extras), void 0 !== t.inverseBindMatrices && e.setInverseBindMatrices(i.accessors[t.inverseBindMatrices]), void 0 !== t.skeleton && e.setSkeleton(i.nodes[t.skeleton]);
                    for (const r of t.joints)e.addJoint(i.nodes[r]);
                    return e;
                }), g.map((t, e)=>{
                    const r = i.nodes[e];
                    (t.children || []).forEach((t)=>r.addChild(i.nodes[t])
                    ), void 0 !== t.mesh && r.setMesh(i.meshes[t.mesh]), void 0 !== t.camera && r.setCamera(i.cameras[t.camera]), void 0 !== t.skin && r.setSkin(i.skins[t.skin]);
                }), i.animations = (s.animations || []).map((t)=>{
                    const e = n.createAnimation(t.name);
                    t.extras && e.setExtras(t.extras);
                    const r = (t.samplers || []).map((t)=>{
                        const r = n.createAnimationSampler().setInput(i.accessors[t.input]).setOutput(i.accessors[t.output]).setInterpolation(t.interpolation || Z.Interpolation.LINEAR);
                        return t.extras && r.setExtras(t.extras), e.addSampler(r), r;
                    });
                    return (t.channels || []).forEach((t)=>{
                        const s = n.createAnimationChannel().setSampler(r[t.sampler]).setTargetNode(i.nodes[t.target.node]).setTargetPath(t.target.path);
                        t.extras && s.setExtras(t.extras), e.addChannel(s);
                    }), e;
                });
                const m = s.scenes || [];
                return n.getRoot().listExtensionsUsed().filter((t)=>t.prereadTypes.includes(p.SCENE)
                ).forEach((t)=>t.preread(i, p.SCENE)
                ), i.scenes = m.map((t)=>{
                    const e = n.createScene(t.name);
                    return t.extras && e.setExtras(t.extras), (t.nodes || []).map((t)=>i.nodes[t]
                    ).forEach((t)=>e.addChild(t)
                    ), e;
                }), void 0 !== s.scene && n.getRoot().setDefaultScene(i.scenes[s.scene]), n.getRoot().listExtensionsUsed().forEach((t)=>t.read(i)
                ), n;
            }
            static validate(t, e) {
                const r = t.json;
                if ("2.0" !== r.asset.version) throw new Error(`Unsupported glTF version, "${r.asset.version}".`);
                if (r.extensionsRequired) {
                    for (const t1 of r.extensionsRequired)if (!e.extensions.find((e)=>e.EXTENSION_NAME === t1
                    )) throw new Error(`Missing required extension, "${t1}".`);
                }
                if (r.extensionsUsed) for (const t2 of r.extensionsUsed)e.extensions.find((e)=>e.EXTENSION_NAME === t2
                ) || e.logger.warn(`Missing optional extension, "${t2}".`);
            }
        }).read(t, {
            extensions: Array.from(this.h),
            dependencies: this.C,
            logger: this.v
        });
    }
    async binaryToJSON(t) {
        const e = this._(A.assertView(t));
        this.L(e);
        const r = e.json;
        if (r.buffers && r.buffers.some((t)=>(function(t, e) {
                return void 0 !== e.uri && !(e.uri in t.resources);
            })(e, t)
        )) throw new Error("Cannot resolve external buffers with binaryToJSON().");
        if (r.images && r.images.some((t)=>(function(t, e) {
                return void 0 !== e.uri && !(e.uri in t.resources) && void 0 === e.bufferView;
            })(e, t)
        )) throw new Error("Cannot resolve external images with binaryToJSON().");
        return e;
    }
    async readBinary(t) {
        return this.readJSON(await this.binaryToJSON(A.assertView(t)));
    }
    async writeJSON(t, e = {
    }) {
        if (e.format === T.GLB && t.getRoot().listBuffers().length > 1) throw new Error("GLB must have 0–1 buffers.");
        return (class {
            static write(t, e) {
                const r3 = t.getRoot(), s = {
                    asset: ht({
                        generator: "glTF-Transform v2.0.4"
                    }, r3.getAsset()),
                    extras: ht({
                    }, r3.getExtras())
                }, n = {
                    json: s,
                    resources: {
                    }
                }, i = new bt(t, n, e), o = e.logger || C.DEFAULT_INSTANCE, a = new Set(e.extensions.map((t)=>t.EXTENSION_NAME
                )), u = t.getRoot().listExtensionsUsed().filter((t)=>a.has(t.extensionName)
                ), c = t.getRoot().listExtensionsRequired().filter((t)=>a.has(t.extensionName)
                );
                u.length < t.getRoot().listExtensionsUsed().length && o.debug("Some extensions were not registered for I/O, and will not be written.");
                for (const t1 of u)for (const r1 of t1.writeDependencies)t1.install(r1, e.dependencies[r1]);
                function h(t, e, r, n) {
                    const o = [];
                    let a = 0;
                    for (const e1 of t){
                        const t = i.createAccessorDef(e1);
                        t.bufferView = s.bufferViews.length;
                        const r = e1.getArray(), n = A.pad(A.toView(r));
                        t.byteOffset = a, a += n.byteLength, o.push(n), i.accessorIndexMap.set(e1, s.accessors.length), s.accessors.push(t);
                    }
                    const u = {
                        buffer: e,
                        byteOffset: r,
                        byteLength: A.concat(o).byteLength
                    };
                    return n && (u.target = n), s.bufferViews.push(u), {
                        buffers: o,
                        byteLength: a
                    };
                }
                function l(t, e, r) {
                    const n = t[0].getCount();
                    let o = 0;
                    for (const e1 of t){
                        const t = i.createAccessorDef(e1);
                        t.bufferView = s.bufferViews.length, t.byteOffset = o;
                        const r = e1.getElementSize(), n = e1.getComponentSize();
                        o += A.padNumber(r * n), i.accessorIndexMap.set(e1, s.accessors.length), s.accessors.push(t);
                    }
                    const a = n * o, u = new ArrayBuffer(a), c = new DataView(u);
                    for(let e2 = 0; e2 < n; e2++){
                        let r = 0;
                        for (const s of t){
                            const t = s.getElementSize(), n = s.getComponentSize(), i = s.getComponentType(), a = s.getArray();
                            for(let s1 = 0; s1 < t; s1++){
                                const u = e2 * o + r + s1 * n, h = a[e2 * t + s1];
                                switch(i){
                                    case W.ComponentType.FLOAT:
                                        c.setFloat32(u, h, !0);
                                        break;
                                    case W.ComponentType.BYTE:
                                        c.setInt8(u, h);
                                        break;
                                    case W.ComponentType.SHORT:
                                        c.setInt16(u, h, !0);
                                        break;
                                    case W.ComponentType.UNSIGNED_BYTE:
                                        c.setUint8(u, h);
                                        break;
                                    case W.ComponentType.UNSIGNED_SHORT:
                                        c.setUint16(u, h, !0);
                                        break;
                                    case W.ComponentType.UNSIGNED_INT:
                                        c.setUint32(u, h, !0);
                                        break;
                                    default:
                                        throw new Error("Unexpected component type: " + i);
                                }
                            }
                            r += A.padNumber(t * n);
                        }
                    }
                    return s.bufferViews.push({
                        buffer: e,
                        byteOffset: r,
                        byteLength: a,
                        byteStride: o,
                        target: bt.BufferViewTarget.ARRAY_BUFFER
                    }), {
                        byteLength: a,
                        buffers: [
                            new Uint8Array(u)
                        ]
                    };
                }
                const f = new Map;
                for (const e1 of t.getGraph().listEdges()){
                    if (e1.getParent() === r3) continue;
                    const t = e1.getChild();
                    if (t instanceof W) {
                        const r = f.get(t) || [];
                        r.push(e1), f.set(t, r);
                    }
                }
                if (s.accessors = [], s.bufferViews = [], s.samplers = [], s.textures = [], s.images = r3.listTextures().map((t, e)=>{
                    const r = i.createPropertyDef(t);
                    t.getMimeType() && (r.mimeType = t.getMimeType());
                    const s = t.getImage();
                    return s && i.createImageData(r, s, t), i.imageIndexMap.set(t, e), r;
                }), u.filter((t)=>t.prewriteTypes.includes(p.ACCESSOR)
                ).forEach((t)=>t.prewrite(i, p.ACCESSOR)
                ), r3.listAccessors().forEach((t)=>{
                    const e = i.accessorUsageGroupedByParent, r = i.accessorParents;
                    if (i.accessorIndexMap.has(t)) return;
                    const s = f.get(t) || [], n = i.getAccessorUsage(t);
                    if (i.addAccessorToUsageGroup(t, n), e.has(n)) {
                        const e = s[0].getParent(), n = r.get(e) || new Set;
                        n.add(t), r.set(e, n);
                    }
                }), u.filter((t)=>t.prewriteTypes.includes(p.BUFFER)
                ).forEach((t)=>t.prewrite(i, p.BUFFER)
                ), (r3.listAccessors().length > 0 || r3.listTextures().length > 0 || i.otherBufferViews.size > 0) && 0 === r3.listBuffers().length) throw new Error("Buffer required for Document resources, but none was found.");
                s.buffers = [], r3.listBuffers().forEach((t, r)=>{
                    const o = i.createPropertyDef(t), a = i.accessorUsageGroupedByParent, u = i.accessorParents, c = t.listParents().filter((t)=>t instanceof W
                    ), f = new Set(c), d = [], g = s.buffers.length;
                    let p = 0;
                    const w = i.listAccessorUsageGroups();
                    for(const t2 in w)if (a.has(t2)) for (const r2 of Array.from(u.values())){
                        const s = Array.from(r2).filter((t)=>f.has(t)
                        ).filter((e)=>i.getAccessorUsage(e) === t2
                        );
                        if (s.length) {
                            if (t2 !== Et.ARRAY_BUFFER || e.vertexLayout === m.INTERLEAVED) {
                                const e = t2 === Et.ARRAY_BUFFER ? l(s, g, p) : h(s, g, p);
                                p += e.byteLength, d.push(...e.buffers);
                            } else for (const t3 of s){
                                const e = l([
                                    t3
                                ], g, p);
                                p += e.byteLength, d.push(...e.buffers);
                            }
                        }
                    }
                    else {
                        const e = w[t2].filter((t)=>f.has(t)
                        );
                        if (!e.length) continue;
                        const r = h(e, g, p, t2 === Et.ELEMENT_ARRAY_BUFFER ? bt.BufferViewTarget.ELEMENT_ARRAY_BUFFER : void 0);
                        p += r.byteLength, d.push(...r.buffers);
                    }
                    if (i.imageBufferViews.length && 0 === r) {
                        for(let t3 = 0; t3 < i.imageBufferViews.length; t3++)if (s.bufferViews[s.images[t3].bufferView].byteOffset = p, p += i.imageBufferViews[t3].byteLength, d.push(i.imageBufferViews[t3]), p % 8) {
                            const t = 8 - p % 8;
                            p += t, d.push(new Uint8Array(t));
                        }
                    }
                    if (i.otherBufferViews.has(t)) for (const e2 of i.otherBufferViews.get(t))s.bufferViews.push({
                        buffer: g,
                        byteOffset: p,
                        byteLength: e2.byteLength
                    }), i.otherBufferViewsIndexMap.set(e2, s.bufferViews.length - 1), p += e2.byteLength, d.push(e2);
                    if (p) {
                        let r;
                        e.format === T.GLB ? r = "@glb.bin" : (r = i.bufferURIGenerator.createURI(t, "bin"), o.uri = r), o.byteLength = p, n.resources[r] = A.concat(d);
                    }
                    s.buffers.push(o), i.bufferIndexMap.set(t, r);
                }), r3.listAccessors().find((t)=>!t.getBuffer()
                ) && o.warn("Skipped writing one or more Accessors: no Buffer assigned."), s.materials = r3.listMaterials().map((t, e)=>{
                    const r = i.createPropertyDef(t);
                    if (t.getAlphaMode() !== it.AlphaMode.OPAQUE && (r.alphaMode = t.getAlphaMode()), t.getAlphaMode() === it.AlphaMode.MASK && (r.alphaCutoff = t.getAlphaCutoff()), t.getDoubleSided() && (r.doubleSided = !0), r.pbrMetallicRoughness = {
                    }, F.eq(t.getBaseColorFactor(), [
                        1,
                        1,
                        1,
                        1
                    ]) || (r.pbrMetallicRoughness.baseColorFactor = t.getBaseColorFactor()), F.eq(t.getEmissiveFactor(), [
                        0,
                        0,
                        0
                    ]) || (r.emissiveFactor = t.getEmissiveFactor()), 1 !== t.getRoughnessFactor() && (r.pbrMetallicRoughness.roughnessFactor = t.getRoughnessFactor()), 1 !== t.getMetallicFactor() && (r.pbrMetallicRoughness.metallicFactor = t.getMetallicFactor()), t.getBaseColorTexture()) {
                        const e = t.getBaseColorTexture(), s = t.getBaseColorTextureInfo();
                        r.pbrMetallicRoughness.baseColorTexture = i.createTextureInfoDef(e, s);
                    }
                    if (t.getEmissiveTexture()) {
                        const e = t.getEmissiveTexture(), s = t.getEmissiveTextureInfo();
                        r.emissiveTexture = i.createTextureInfoDef(e, s);
                    }
                    if (t.getNormalTexture()) {
                        const e = t.getNormalTexture(), s = t.getNormalTextureInfo(), n = i.createTextureInfoDef(e, s);
                        1 !== t.getNormalScale() && (n.scale = t.getNormalScale()), r.normalTexture = n;
                    }
                    if (t.getOcclusionTexture()) {
                        const e = t.getOcclusionTexture(), s = t.getOcclusionTextureInfo(), n = i.createTextureInfoDef(e, s);
                        1 !== t.getOcclusionStrength() && (n.strength = t.getOcclusionStrength()), r.occlusionTexture = n;
                    }
                    if (t.getMetallicRoughnessTexture()) {
                        const e = t.getMetallicRoughnessTexture(), s = t.getMetallicRoughnessTextureInfo();
                        r.pbrMetallicRoughness.metallicRoughnessTexture = i.createTextureInfoDef(e, s);
                    }
                    return i.materialIndexMap.set(t, e), r;
                }), s.meshes = r3.listMeshes().map((t, e3)=>{
                    const r = i.createPropertyDef(t);
                    let s = null;
                    return r.primitives = t.listPrimitives().map((t)=>{
                        const e = {
                            attributes: {
                            }
                        };
                        e.mode = t.getMode();
                        const r = t.getMaterial();
                        r && (e.material = i.materialIndexMap.get(r)), Object.keys(t.getExtras()).length && (e.extras = t.getExtras());
                        const n = t.getIndices();
                        n && (e.indices = i.accessorIndexMap.get(n));
                        for (const r2 of t.listSemantics())e.attributes[r2] = i.accessorIndexMap.get(t.getAttribute(r2));
                        for (const r4 of t.listTargets()){
                            const t = {
                            };
                            for (const e2 of r4.listSemantics())t[e2] = i.accessorIndexMap.get(r4.getAttribute(e2));
                            e.targets = e.targets || [], e.targets.push(t);
                        }
                        return t.listTargets().length && !s && (s = t.listTargets().map((t)=>t.getName()
                        )), e;
                    }), t.getWeights().length && (r.weights = t.getWeights()), s && (r.extras = r.extras || {
                    }, r.extras.targetNames = s), i.meshIndexMap.set(t, e3), r;
                }), s.cameras = r3.listCameras().map((t, e)=>{
                    const r = i.createPropertyDef(t);
                    if (r.type = t.getType(), r.type === Q.Type.PERSPECTIVE) {
                        r.perspective = {
                            znear: t.getZNear(),
                            zfar: t.getZFar(),
                            yfov: t.getYFov()
                        };
                        const e = t.getAspectRatio();
                        null !== e && (r.perspective.aspectRatio = e);
                    } else r.orthographic = {
                        znear: t.getZNear(),
                        zfar: t.getZFar(),
                        xmag: t.getXMag(),
                        ymag: t.getYMag()
                    };
                    return i.cameraIndexMap.set(t, e), r;
                }), s.nodes = r3.listNodes().map((t, e)=>{
                    const r = i.createPropertyDef(t);
                    return F.eq(t.getTranslation(), [
                        0,
                        0,
                        0
                    ]) || (r.translation = t.getTranslation()), F.eq(t.getRotation(), [
                        0,
                        0,
                        0,
                        1
                    ]) || (r.rotation = t.getRotation()), F.eq(t.getScale(), [
                        1,
                        1,
                        1
                    ]) || (r.scale = t.getScale()), t.getWeights().length && (r.weights = t.getWeights()), i.nodeIndexMap.set(t, e), r;
                }), s.skins = r3.listSkins().map((t, e)=>{
                    const r = i.createPropertyDef(t), s = t.getInverseBindMatrices();
                    s && (r.inverseBindMatrices = i.accessorIndexMap.get(s));
                    const n = t.getSkeleton();
                    return n && (r.skeleton = i.nodeIndexMap.get(n)), r.joints = t.listJoints().map((t)=>i.nodeIndexMap.get(t)
                    ), i.skinIndexMap.set(t, e), r;
                }), r3.listNodes().forEach((t, e)=>{
                    const r = s.nodes[e], n = t.getMesh();
                    n && (r.mesh = i.meshIndexMap.get(n));
                    const o = t.getCamera();
                    o && (r.camera = i.cameraIndexMap.get(o));
                    const a = t.getSkin();
                    a && (r.skin = i.skinIndexMap.get(a)), t.listChildren().length > 0 && (r.children = t.listChildren().map((t)=>i.nodeIndexMap.get(t)
                    ));
                }), s.animations = r3.listAnimations().map((t, e)=>{
                    const r = i.createPropertyDef(t), s = new Map;
                    return r.samplers = t.listSamplers().map((t, e)=>{
                        const r = i.createPropertyDef(t);
                        return r.input = i.accessorIndexMap.get(t.getInput()), r.output = i.accessorIndexMap.get(t.getOutput()), r.interpolation = t.getInterpolation(), s.set(t, e), r;
                    }), r.channels = t.listChannels().map((t)=>{
                        const e = i.createPropertyDef(t);
                        return e.sampler = s.get(t.getSampler()), e.target = {
                            node: i.nodeIndexMap.get(t.getTargetNode()),
                            path: t.getTargetPath()
                        }, e;
                    }), i.animationIndexMap.set(t, e), r;
                }), s.scenes = r3.listScenes().map((t, e)=>{
                    const r = i.createPropertyDef(t);
                    return r.nodes = t.listChildren().map((t)=>i.nodeIndexMap.get(t)
                    ), i.sceneIndexMap.set(t, e), r;
                });
                const d = r3.getDefaultScene();
                return d && (s.scene = r3.listScenes().indexOf(d)), s.extensionsUsed = u.map((t)=>t.extensionName
                ), s.extensionsRequired = c.map((t)=>t.extensionName
                ), u.forEach((t)=>t.write(i)
                ), (function(t) {
                    const e = [];
                    for(const r in t){
                        const s = t[r];
                        (Array.isArray(s) && 0 === s.length || null === s || "" === s || s && "object" == typeof s && 0 === Object.keys(s).length) && e.push(r);
                    }
                    for (const r2 of e)delete t[r2];
                })(s), n;
            }
        }).write(t, {
            format: e.format || T.GLTF,
            basename: e.basename || "",
            logger: this.v,
            vertexLayout: this.F,
            dependencies: ht({
            }, this.C),
            extensions: Array.from(this.h)
        });
    }
    async writeBinary(t) {
        const { json: e , resources: r  } = await this.writeJSON(t, {
            format: T.GLB
        }), s = new Uint32Array([
            1179937895,
            2,
            12
        ]), n = JSON.stringify(e), i = A.pad(A.encodeText(n), 32), o = A.toView(new Uint32Array([
            i.byteLength,
            1313821514
        ])), a = A.concat([
            o,
            i
        ]);
        s[s.length - 1] += a.byteLength;
        const u = Object.values(r)[0];
        if (!u || !u.byteLength) return A.concat([
            A.toView(s),
            a
        ]);
        const c = A.pad(u, 0), h = A.toView(new Uint32Array([
            c.byteLength,
            5130562
        ])), l = A.concat([
            h,
            c
        ]);
        return s[s.length - 1] += l.byteLength, A.concat([
            A.toView(s),
            a,
            l
        ]);
    }
    async P(t) {
        this.lastReadBytes = 0;
        const e = await this.readURI(t, "text");
        this.lastReadBytes += e.length;
        const r = {
            json: JSON.parse(e),
            resources: {
            }
        };
        return await this.D(r, this.dirname(t)), this.L(r), r;
    }
    async U(t) {
        const e = await this.readURI(t, "view");
        this.lastReadBytes = e.byteLength;
        const r = this._(e);
        return await this.D(r, this.dirname(t)), this.L(r), r;
    }
    async D(t, e) {
        var r = this;
        const s = [
            ...t.json.images || [],
            ...t.json.buffers || []
        ].map(async function(s) {
            const n = s.uri;
            if (!n || n.match(/data:/)) return Promise.resolve();
            t.resources[n] = await r.readURI(r.resolve(e, n), "view"), r.lastReadBytes += t.resources[n].byteLength;
        });
        await Promise.all(s);
    }
    L(t) {
        function e(e) {
            if (e.uri) {
                if (e.uri in t.resources) A.assertView(t.resources[e.uri]);
                else if (e.uri.match(/data:/)) {
                    const r = `__${G()}.${S.extension(e.uri)}`;
                    t.resources[r] = A.createBufferFromDataURI(e.uri), e.uri = r;
                }
            }
        }
        (t.json.images || []).forEach((t)=>{
            if (void 0 === t.bufferView && void 0 === t.uri) throw new Error("Missing resource URI or buffer view.");
            e(t);
        }), (t.json.buffers || []).forEach(e);
    }
    j(t) {
        const { images: e , buffers: r  } = t.json;
        return t = {
            json: ht({
            }, t.json),
            resources: ht({
            }, t.resources)
        }, e && (t.json.images = e.map((t)=>ht({
            }, t)
        )), r && (t.json.buffers = r.map((t)=>ht({
            }, t)
        )), t;
    }
    _(t) {
        const e = new Uint32Array(t.buffer, t.byteOffset, 3);
        if (1179937895 !== e[0]) throw new Error("Invalid glTF asset.");
        if (2 !== e[1]) throw new Error(`Unsupported glTF binary version, "${e[1]}".`);
        const r = new Uint32Array(t.buffer, t.byteOffset + 12, 2);
        if (r[1] !== St.JSON) throw new Error("Missing required GLB JSON chunk.");
        const s = r[0], n = A.decodeText(A.toView(t, 20, s)), i = JSON.parse(n), o = 20 + s;
        if (t.byteLength <= o) return {
            json: i,
            resources: {
            }
        };
        const a = new Uint32Array(t.buffer, t.byteOffset + o, 2);
        if (a[1] !== St.BIN) throw new Error("Expected GLB BIN in second chunk.");
        return {
            json: i,
            resources: {
                "@glb.bin": A.toView(t, o + 8, a[0])
            }
        };
    }
}
class It extends Mt {
    constructor(t = null, e = J.DEFAULT_INIT){
        super(), this.k = void 0, this.J = void 0, this.$ = void 0, this.V = void 0, this.q = !1, this.k = require("fs").promises, this.J = require("path"), this.$ = t, this.V = e;
    }
    setAllowHTTP(t) {
        if (t && !this.$) throw new Error("NodeIO requires a Fetch API implementation for HTTP requests.");
        return this.q = t, this;
    }
    async readURI(t, e) {
        if (J.isAbsoluteURL(t)) {
            if (!this.q || !this.$) throw new Error("Network request blocked. Allow HTTP requests explicitly, if needed.");
            const r = await this.$(t, this.V);
            switch(e){
                case "view":
                    return new Uint8Array(await r.arrayBuffer());
                case "text":
                    return r.text();
            }
        } else switch(e){
            case "view":
                return this.k.readFile(t);
            case "text":
                return this.k.readFile(t, "utf8");
        }
    }
    resolve(t, e) {
        return J.isAbsoluteURL(t) || J.isAbsoluteURL(e) ? J.resolve(t, e) : this.J.resolve(t, e);
    }
    dirname(t) {
        return J.isAbsoluteURL(t) ? J.dirname(t) : this.J.dirname(t);
    }
    async write(t, e) {
        const r = !!t.match(/\.glb$/);
        await (r ? this.W(t, e) : this.H(t, e));
    }
    async H(t, e) {
        var r = this;
        this.lastWriteBytes = 0;
        const { json: s , resources: n  } = await this.writeJSON(e, {
            format: T.GLTF,
            basename: S.basename(t)
        }), { k: i , J: o  } = this, a = o.dirname(t), u = JSON.stringify(s, null, 2);
        this.lastWriteBytes += u.length, await i.writeFile(t, u);
        const c = Object.keys(n).map(async function(t) {
            if (J.isAbsoluteURL(t)) {
                if ("bin" === S.extension(t)) throw new Error(`Cannot write buffer to path "${t}".`);
                return;
            }
            const e = Buffer.from(n[t]);
            await i.writeFile(o.join(a, t), e), r.lastWriteBytes += e.byteLength;
        });
        await Promise.all(c);
    }
    async W(t, e) {
        const r = Buffer.from(await this.writeBinary(e));
        await this.k.writeFile(t, r), this.lastWriteBytes = r.byteLength;
    }
}
class Rt extends Mt {
    constructor(t){
        super(), this.J = void 0, this.J = t;
    }
    async readURI(t, e) {
        switch(e){
            case "view":
                return Deno.readFile(t);
            case "text":
                return Deno.readTextFile(t);
        }
    }
    resolve(t, e) {
        return this.J.resolve(t, e);
    }
    dirname(t) {
        return this.J.dirname(t);
    }
}
class Nt extends Mt {
    constructor(t = J.DEFAULT_INIT){
        super(), this.V = void 0, this.V = t;
    }
    async readURI(t, e) {
        const r = await fetch(t, this.V);
        switch(e){
            case "view":
                return new Uint8Array(await r.arrayBuffer());
            case "text":
                return r.text();
        }
    }
    resolve(t, e) {
        return J.resolve(t, e);
    }
    dirname(t) {
        return J.dirname(t);
    }
}

},{"buffer":"bOetu","property-graph":"gNAh1","gl-matrix/vec3":"1kXLr","gl-matrix/mat4":"bfORa","fs":"joWnX","path":"joWnX","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bOetu":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ 'use strict';
var base64 = require('base64-js');
var ieee754 = require('ieee754');
var customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
var K_MAX_LENGTH = 2147483647;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        var arr = new Uint8Array(1);
        var proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, 'parent', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, 'offset', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    var buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === 'string') return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== 'undefined' && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === 'number') throw new TypeError('The "value" argument must not be of type number. Received type number');
    var valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    var b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== 'number') throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8';
    if (!Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
    var length = byteLength(string, encoding) | 0;
    var buf = createBuffer(length);
    var actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    var length = array.length < 0 ? 0 : checked(array.length) | 0;
    var buf = createBuffer(length);
    for(var i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        var copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    var buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        var buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === 'Buffer' && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + ' bytes');
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    var x = a.length;
    var y = b.length;
    for(var i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    var i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    var buffer = Buffer.allocUnsafe(length);
    var pos = 0;
    for(i = 0; i < list.length; ++i){
        var buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) Buffer.from(buf).copy(buffer, pos);
            else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== 'string') throw new TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof string);
    var len = string.length;
    var mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    var loweredCase = false;
    for(;;)switch(encoding){
        case 'ascii':
        case 'latin1':
        case 'binary':
            return len;
        case 'utf8':
        case 'utf-8':
            return utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return len * 2;
        case 'hex':
            return len >>> 1;
        case 'base64':
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    var loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return '';
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return '';
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return '';
    if (!encoding) encoding = 'utf8';
    while(true)switch(encoding){
        case 'hex':
            return hexSlice(this, start, end);
        case 'utf8':
        case 'utf-8':
            return utf8Slice(this, start, end);
        case 'ascii':
            return asciiSlice(this, start, end);
        case 'latin1':
        case 'binary':
            return latin1Slice(this, start, end);
        case 'base64':
            return base64Slice(this, start, end);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    var i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    var len = this.length;
    if (len % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
    for(var i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    var len = this.length;
    if (len % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
    for(var i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    var len = this.length;
    if (len % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
    for(var i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    var length = this.length;
    if (length === 0) return '';
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    var str = '';
    var max = exports.INSPECT_MAX_BYTES;
    str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
    if (this.length > max) str += ' ... ';
    return '<Buffer ' + str + '>';
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError('out of range index');
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    var x = thisEnd - thisStart;
    var y = end - start;
    var len = Math.min(x, y);
    var thisCopy = this.slice(thisStart, thisEnd);
    var targetCopy = target.slice(start, end);
    for(var i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 2147483647) byteOffset = 2147483647;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === 'string') val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
        val = val & 255 // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError('val must be string, number or Buffer');
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    var indexSize = 1;
    var arrLength = arr.length;
    var valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    var i;
    if (dir) {
        var foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            var found = true;
            for(var j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    var strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    for(var i = 0; i < length; ++i){
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = 'utf8';
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    var remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError('Attempt to write outside buffer bounds');
    if (!encoding) encoding = 'utf8';
    var loweredCase = false;
    for(;;)switch(encoding){
        case 'hex':
            return hexWrite(this, string, offset, length);
        case 'utf8':
        case 'utf-8':
            return utf8Write(this, string, offset, length);
        case 'ascii':
        case 'latin1':
        case 'binary':
            return asciiWrite(this, string, offset, length);
        case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];
    var i = start;
    while(i < end){
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            var secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 128) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 192) === 128) {
                        tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                        if (tempCodePoint > 127) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                        if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                        if (tempCodePoint > 65535 && tempCodePoint < 1114112) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 65533;
            bytesPerSequence = 1;
        } else if (codePoint > 65535) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 65536;
            res.push(codePoint >>> 10 & 1023 | 55296);
            codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 4096;
function decodeCodePointsArray(codePoints) {
    var len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    var res = '';
    var i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 127);
    return ret;
}
function latin1Slice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    var len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    var out = '';
    for(var i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = '';
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(var i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    var newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while(++i < byteLength && (mul *= 256))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset + --byteLength];
    var mul = 1;
    while(byteLength > 0 && (mul *= 256))val += this[offset + --byteLength] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while(++i < byteLength && (mul *= 256))val += this[offset + i] * mul;
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var i = byteLength;
    var mul = 1;
    var val = this[offset + --i];
    while(i > 0 && (mul *= 256))val += this[offset + --i] * mul;
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 128)) return this[offset];
    return (255 - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset] | this[offset + 1] << 8;
    return val & 32768 ? val | 4294901760 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | this[offset] << 8;
    return val & 32768 ? val | 4294901760 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    var mul = 1;
    var i = 0;
    this[offset] = value & 255;
    while(++i < byteLength && (mul *= 256))this[offset + i] = value / mul & 255;
    return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    var i = byteLength - 1;
    var mul = 1;
    this[offset + i] = value & 255;
    while(--i >= 0 && (mul *= 256))this[offset + i] = value / mul & 255;
    return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
    this[offset] = value & 255;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 255;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
};
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = 0;
    var mul = 1;
    var sub = 0;
    this[offset] = value & 255;
    while(++i < byteLength && (mul *= 256)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = byteLength - 1;
    var mul = 1;
    var sub = 0;
    this[offset + i] = value & 255;
    while(--i >= 0 && (mul *= 256)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
    if (value < 0) value = 255 + value + 1;
    this[offset] = value & 255;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
    if (value < 0) value = 4294967295 + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
};
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
    if (offset < 0) throw new RangeError('Index out of range');
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 340282346638528860000000000000000000000, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError('targetStart out of bounds');
    if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    var len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
        if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== 'string') throw new TypeError('encoding must be a string');
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
        if (val.length === 1) {
            var code = val.charCodeAt(0);
            if (encoding === 'utf8' && code < 128 || encoding === 'latin1') // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === 'number') val = val & 255;
    else if (typeof val === 'boolean') val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError('Out of range index');
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    var i;
    if (typeof val === 'number') for(i = start; i < end; ++i)this[i] = val;
    else {
        var bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        var len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// HELPER FUNCTIONS
// ================
var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split('=')[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return '';
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + '=';
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];
    for(var i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 55295 && codePoint < 57344) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 56319) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 56320) {
                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 128) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 2048) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else throw new Error('Invalid code point');
    }
    return bytes;
}
function asciiToBytes(str) {
    var byteArray = [];
    for(var i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 255);
    return byteArray;
}
function utf16leToBytes(str, units) {
    var c, hi, lo;
    var byteArray = [];
    for(var i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    for(var i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var hexSliceLookupTable = function() {
    var alphabet = '0123456789abcdef';
    var table = new Array(256);
    for(var i = 0; i < 16; ++i){
        var i16 = i * 16;
        for(var j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();

},{"base64-js":"nR26C","ieee754":"ljh7N"}],"nR26C":[function(require,module,exports) {
'use strict';
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=');
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 16711680) + (uint8[i + 1] << 8 & 65280) + (uint8[i + 2] & 255);
        output.push(tripletToBase64(tmp));
    }
    return output.join('');
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + '==');
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + '=');
    }
    return parts.join('');
}

},{}],"ljh7N":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"gNAh1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "$attributes", ()=>d
);
parcelHelpers.export(exports, "$immutableKeys", ()=>a
);
parcelHelpers.export(exports, "EventDispatcher", ()=>t2
);
parcelHelpers.export(exports, "Graph", ()=>s
);
parcelHelpers.export(exports, "GraphEdge", ()=>e1
);
parcelHelpers.export(exports, "GraphNode", ()=>o
);
parcelHelpers.export(exports, "isRef", ()=>r1
);
parcelHelpers.export(exports, "isRefList", ()=>n
);
parcelHelpers.export(exports, "isRefMap", ()=>h
);
class t2 {
    constructor(){
        this._listeners = {
        };
    }
    addEventListener(t, e) {
        const s = this._listeners;
        return void 0 === s[t] && (s[t] = []), -1 === s[t].indexOf(e) && s[t].push(e), this;
    }
    removeEventListener(t, e) {
        if (void 0 === this._listeners) return this;
        const s = this._listeners[t];
        if (void 0 !== s) {
            const t = s.indexOf(e);
            -1 !== t && s.splice(t, 1);
        }
        return this;
    }
    dispatchEvent(t) {
        if (void 0 === this._listeners) return this;
        const e = this._listeners[t.type];
        if (void 0 !== e) {
            const s = e.slice(0);
            for(let e1 = 0, i = s.length; e1 < i; e1++)s[e1].call(this, t);
        }
        return this;
    }
    dispose() {
        for(const t in this._listeners)delete this._listeners[t];
    }
}
class e1 extends t2 {
    constructor(t, e, s, i = {
    }){
        if (super(), this._name = void 0, this._parent = void 0, this._child = void 0, this._attributes = void 0, this._disposed = !1, this._name = t, this._parent = e, this._child = s, this._attributes = i, !e.isOnGraph(s)) throw new Error("Cannot connect disconnected graphs.");
    }
    getName() {
        return this._name;
    }
    getParent() {
        return this._parent;
    }
    getChild() {
        return this._child;
    }
    setChild(t) {
        return this._child = t, this;
    }
    getAttributes() {
        return this._attributes;
    }
    dispose() {
        this._disposed || (this._disposed = !0, this.dispatchEvent({
            type: "dispose",
            target: this
        }), super.dispose());
    }
    isDisposed() {
        return this._disposed;
    }
}
class s extends t2 {
    constructor(...t){
        super(...t), this._emptySet = new Set, this._edges = new Set, this._parentEdges = new Map, this._childEdges = new Map;
    }
    listEdges() {
        return Array.from(this._edges);
    }
    listParentEdges(t) {
        return Array.from(this._childEdges.get(t) || this._emptySet);
    }
    listParents(t) {
        return this.listParentEdges(t).map((t)=>t.getParent()
        );
    }
    listChildEdges(t) {
        return Array.from(this._parentEdges.get(t) || this._emptySet);
    }
    listChildren(t) {
        return this.listChildEdges(t).map((t)=>t.getChild()
        );
    }
    disconnectParents(t, e) {
        let s = this.listParentEdges(t);
        return e && (s = s.filter((t)=>e(t.getParent())
        )), s.forEach((t)=>t.dispose()
        ), this;
    }
    createEdge(t, s, i, r) {
        return this._registerEdge(new e1(t, s, i, r));
    }
    _registerEdge(t) {
        this._edges.add(t);
        const e = t.getParent();
        this._parentEdges.has(e) || this._parentEdges.set(e, new Set), this._parentEdges.get(e).add(t);
        const s = t.getChild();
        return this._childEdges.has(s) || this._childEdges.set(s, new Set), this._childEdges.get(s).add(t), t.addEventListener("dispose", ()=>this._removeEdge(t)
        ), t;
    }
    _removeEdge(t) {
        return this._edges.delete(t), this._parentEdges.get(t.getParent()).delete(t), this._childEdges.get(t.getChild()).delete(t), this;
    }
}
function i1() {
    return i1 = Object.assign || function(t) {
        for(var e = 1; e < arguments.length; e++){
            var s = arguments[e];
            for(var i in s)Object.prototype.hasOwnProperty.call(s, i) && (t[i] = s[i]);
        }
        return t;
    }, i1.apply(this, arguments);
}
function r1(t) {
    return t instanceof e1;
}
function n(t) {
    return Array.isArray(t) && t[0] instanceof e1;
}
function h(t) {
    return !!(t && "object" == typeof t && Object.values(t)[0] instanceof e1);
}
const d = Symbol("attributes"), a = Symbol("immutableKeys");
class o extends t2 {
    constructor(t){
        super(), this._disposed = !1, this.graph = void 0, this[d] = void 0, this[a] = void 0, this.graph = t, this[a] = new Set, this[d] = this._createAttributes();
    }
    getDefaults() {
        return {
        };
    }
    _createAttributes() {
        const t = this.getDefaults(), e = {
        };
        for(const s in t){
            const i = t[s];
            if (i instanceof o) {
                const t = this.graph.createEdge(s, this, i);
                t.addEventListener("dispose", ()=>i.dispose()
                ), this[a].add(s), e[s] = t;
            } else e[s] = i;
        }
        return e;
    }
    isOnGraph(t) {
        return this.graph === t.graph;
    }
    isDisposed() {
        return this._disposed;
    }
    dispose() {
        this._disposed || (this.graph.listChildEdges(this).forEach((t)=>t.dispose()
        ), this.graph.disconnectParents(this), this._disposed = !0, this.dispatchEvent({
            type: "dispose"
        }));
    }
    detach() {
        return this.graph.disconnectParents(this), this;
    }
    swap(t, e) {
        for(const s in this[d]){
            const i = this[d][s];
            if (r1(i)) {
                const r = i;
                r.getChild() === t && this.setRef(s, e, r.getAttributes());
            } else if (n(i)) {
                const r = i.find((e)=>e.getChild() === t
                );
                if (r) {
                    const i = r.getAttributes();
                    this.removeRef(s, t).addRef(s, e, i);
                }
            } else if (h(i)) {
                const r = i;
                for(const i2 in r){
                    const n = r[i2];
                    n.getChild() === t && this.setRefMap(s, i2, e, n.getAttributes());
                }
            }
        }
        return this;
    }
    get(t) {
        return this[d][t];
    }
    set(t, e) {
        return this[d][t] = e, this.dispatchEvent({
            type: "change",
            attribute: t
        });
    }
    getRef(t) {
        const e = this[d][t];
        return e ? e.getChild() : null;
    }
    setRef(t, e, s) {
        if (this[a].has(t)) throw new Error(`Cannot overwrite immutable attribute, "${t}".`);
        const i = this[d][t];
        if (i && i.dispose(), !e) return this;
        const r = this.graph.createEdge(t, this, e, s);
        return r.addEventListener("dispose", ()=>{
            delete this[d][t], this.dispatchEvent({
                type: "change",
                attribute: t
            });
        }), this[d][t] = r, this.dispatchEvent({
            type: "change",
            attribute: t
        });
    }
    listRefs(t) {
        return this[d][t].map((t)=>t.getChild()
        );
    }
    addRef(t, e, s) {
        const i = this.graph.createEdge(t, this, e, s), r = this[d][t];
        return r.push(i), i.addEventListener("dispose", ()=>{
            const e = r.filter((t)=>t !== i
            );
            r.length = 0;
            for (const t1 of e)r.push(t1);
            this.dispatchEvent({
                type: "change",
                attribute: t
            });
        }), this.dispatchEvent({
            type: "change",
            attribute: t
        });
    }
    removeRef(t, e) {
        return this[d][t].filter((t)=>t.getChild() === e
        ).forEach((t)=>t.dispose()
        ), this;
    }
    listRefMapKeys(t) {
        return Object.keys(this[d][t]);
    }
    listRefMapValues(t) {
        return Object.values(this[d][t]).map((t)=>t.getChild()
        );
    }
    getRefMap(t, e) {
        const s = this[d][t];
        return s[e] ? s[e].getChild() : null;
    }
    setRefMap(t, e, s, r) {
        const n = this[d][t], h = n[e];
        if (h && h.dispose(), !s) return this;
        r = Object.assign(r || {
        }, {
            key: e
        });
        const a = this.graph.createEdge(t, this, s, i1({
        }, r, {
            key: e
        }));
        return a.addEventListener("dispose", ()=>{
            delete n[e], this.dispatchEvent({
                type: "change",
                attribute: t,
                key: e
            });
        }), n[e] = a, this.dispatchEvent({
            type: "change",
            attribute: t,
            key: e
        });
    }
    dispatchEvent(t) {
        return super.dispatchEvent(i1({
        }, t, {
            target: this
        })), this.graph.dispatchEvent(i1({
        }, t, {
            target: this,
            type: `node:${t.type}`
        })), this;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"1kXLr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * 3 Dimensional Vector
 * @module vec3
 */ /**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */ parcelHelpers.export(exports, "create", ()=>create
);
/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {ReadonlyVec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */ parcelHelpers.export(exports, "clone", ()=>clone
);
/**
 * Calculates the length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate length of
 * @returns {Number} length of a
 */ parcelHelpers.export(exports, "length", ()=>length
);
/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */ parcelHelpers.export(exports, "fromValues", ()=>fromValues
);
/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the source vector
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "copy", ()=>copy
);
/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "set", ()=>set
);
/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "add", ()=>add
);
/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "subtract", ()=>subtract
);
/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "multiply", ()=>multiply
);
/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "divide", ()=>divide
);
/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to ceil
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "ceil", ()=>ceil
);
/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to floor
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "floor", ()=>floor
);
/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "min", ()=>min
);
/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "max", ()=>max
);
/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to round
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "round", ()=>round
);
/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "scale", ()=>scale
);
/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "scaleAndAdd", ()=>scaleAndAdd
);
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} distance between a and b
 */ parcelHelpers.export(exports, "distance", ()=>distance
);
/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} squared distance between a and b
 */ parcelHelpers.export(exports, "squaredDistance", ()=>squaredDistance
);
/**
 * Calculates the squared length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */ parcelHelpers.export(exports, "squaredLength", ()=>squaredLength
);
/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to negate
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "negate", ()=>negate
);
/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to invert
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "inverse", ()=>inverse
);
/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to normalize
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "normalize", ()=>normalize
);
/**
 * Calculates the dot product of two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} dot product of a and b
 */ parcelHelpers.export(exports, "dot", ()=>dot
);
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "cross", ()=>cross
);
/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "lerp", ()=>lerp
);
/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "hermite", ()=>hermite
);
/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "bezier", ()=>bezier
);
/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "random", ()=>random
);
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "transformMat4", ()=>transformMat4
);
/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "transformMat3", ()=>transformMat3
);
/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyQuat} q quaternion to transform with
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "transformQuat", ()=>transformQuat
);
/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "rotateX", ()=>rotateX
);
/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "rotateY", ()=>rotateY
);
/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "rotateZ", ()=>rotateZ
);
/**
 * Get the angle between two 3D vectors
 * @param {ReadonlyVec3} a The first operand
 * @param {ReadonlyVec3} b The second operand
 * @returns {Number} The angle in radians
 */ parcelHelpers.export(exports, "angle", ()=>angle
);
/**
 * Set the components of a vec3 to zero
 *
 * @param {vec3} out the receiving vector
 * @returns {vec3} out
 */ parcelHelpers.export(exports, "zero", ()=>zero
);
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */ parcelHelpers.export(exports, "str", ()=>str
);
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */ parcelHelpers.export(exports, "exactEquals", ()=>exactEquals
);
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */ parcelHelpers.export(exports, "equals", ()=>equals
);
parcelHelpers.export(exports, "sub", ()=>sub
);
parcelHelpers.export(exports, "mul", ()=>mul
);
parcelHelpers.export(exports, "div", ()=>div
);
parcelHelpers.export(exports, "dist", ()=>dist
);
parcelHelpers.export(exports, "sqrDist", ()=>sqrDist
);
parcelHelpers.export(exports, "len", ()=>len
);
parcelHelpers.export(exports, "sqrLen", ()=>sqrLen
);
parcelHelpers.export(exports, "forEach", ()=>forEach
);
var _commonJs = require("./common.js");
function create() {
    var out = new _commonJs.ARRAY_TYPE(3);
    if (_commonJs.ARRAY_TYPE != Float32Array) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
    }
    return out;
}
function clone(a) {
    var out = new _commonJs.ARRAY_TYPE(3);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
}
function length(a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    return Math.hypot(x, y, z);
}
function fromValues(x, y, z) {
    var out = new _commonJs.ARRAY_TYPE(3);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
}
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
}
function set(out, x, y, z) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
}
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    return out;
}
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    return out;
}
function multiply(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    return out;
}
function divide(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    return out;
}
function ceil(out, a) {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    out[2] = Math.ceil(a[2]);
    return out;
}
function floor(out, a) {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    out[2] = Math.floor(a[2]);
    return out;
}
function min(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    return out;
}
function max(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    return out;
}
function round(out, a) {
    out[0] = Math.round(a[0]);
    out[1] = Math.round(a[1]);
    out[2] = Math.round(a[2]);
    return out;
}
function scale(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    return out;
}
function scaleAndAdd(out, a, b, scale) {
    out[0] = a[0] + b[0] * scale;
    out[1] = a[1] + b[1] * scale;
    out[2] = a[2] + b[2] * scale;
    return out;
}
function distance(a, b) {
    var x = b[0] - a[0];
    var y = b[1] - a[1];
    var z = b[2] - a[2];
    return Math.hypot(x, y, z);
}
function squaredDistance(a, b) {
    var x = b[0] - a[0];
    var y = b[1] - a[1];
    var z = b[2] - a[2];
    return x * x + y * y + z * z;
}
function squaredLength(a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    return x * x + y * y + z * z;
}
function negate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    return out;
}
function inverse(out, a) {
    out[0] = 1 / a[0];
    out[1] = 1 / a[1];
    out[2] = 1 / a[2];
    return out;
}
function normalize(out, a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    var len = x * x + y * y + z * z;
    if (len > 0) //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    out[2] = a[2] * len;
    return out;
}
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function cross(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2];
    var bx = b[0], by = b[1], bz = b[2];
    out[0] = ay * bz - az * by;
    out[1] = az * bx - ax * bz;
    out[2] = ax * by - ay * bx;
    return out;
}
function lerp(out, a, b, t) {
    var ax = a[0];
    var ay = a[1];
    var az = a[2];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    return out;
}
function hermite(out, a, b, c, d, t) {
    var factorTimes2 = t * t;
    var factor1 = factorTimes2 * (2 * t - 3) + 1;
    var factor2 = factorTimes2 * (t - 2) + t;
    var factor3 = factorTimes2 * (t - 1);
    var factor4 = factorTimes2 * (3 - 2 * t);
    out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
    out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
    out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
    return out;
}
function bezier(out, a, b, c, d, t) {
    var inverseFactor = 1 - t;
    var inverseFactorTimesTwo = inverseFactor * inverseFactor;
    var factorTimes2 = t * t;
    var factor1 = inverseFactorTimesTwo * inverseFactor;
    var factor2 = 3 * t * inverseFactorTimesTwo;
    var factor3 = 3 * factorTimes2 * inverseFactor;
    var factor4 = factorTimes2 * t;
    out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
    out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
    out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
    return out;
}
function random(out, scale) {
    scale = scale || 1;
    var r = _commonJs.RANDOM() * 2 * Math.PI;
    var z = _commonJs.RANDOM() * 2 - 1;
    var zScale = Math.sqrt(1 - z * z) * scale;
    out[0] = Math.cos(r) * zScale;
    out[1] = Math.sin(r) * zScale;
    out[2] = z * scale;
    return out;
}
function transformMat4(out, a, m) {
    var x = a[0], y = a[1], z = a[2];
    var w = m[3] * x + m[7] * y + m[11] * z + m[15];
    w = w || 1;
    out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
    out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
    out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
    return out;
}
function transformMat3(out, a, m) {
    var x = a[0], y = a[1], z = a[2];
    out[0] = x * m[0] + y * m[3] + z * m[6];
    out[1] = x * m[1] + y * m[4] + z * m[7];
    out[2] = x * m[2] + y * m[5] + z * m[8];
    return out;
}
function transformQuat(out, a, q) {
    // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
    var qx = q[0], qy = q[1], qz = q[2], qw = q[3];
    var x = a[0], y = a[1], z = a[2]; // var qvec = [qx, qy, qz];
    // var uv = vec3.cross([], qvec, a);
    var uvx = qy * z - qz * y, uvy = qz * x - qx * z, uvz = qx * y - qy * x; // var uuv = vec3.cross([], qvec, uv);
    var uuvx = qy * uvz - qz * uvy, uuvy = qz * uvx - qx * uvz, uuvz = qx * uvy - qy * uvx; // vec3.scale(uv, uv, 2 * w);
    var w2 = qw * 2;
    uvx *= w2;
    uvy *= w2;
    uvz *= w2; // vec3.scale(uuv, uuv, 2);
    uuvx *= 2;
    uuvy *= 2;
    uuvz *= 2; // return vec3.add(out, a, vec3.add(out, uv, uuv));
    out[0] = x + uvx + uuvx;
    out[1] = y + uvy + uuvy;
    out[2] = z + uvz + uuvz;
    return out;
}
function rotateX(out, a, b, rad) {
    var p = [], r = []; //Translate point to the origin
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2]; //perform rotation
    r[0] = p[0];
    r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
    r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad); //translate to correct position
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];
    return out;
}
function rotateY(out, a, b, rad) {
    var p = [], r = []; //Translate point to the origin
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2]; //perform rotation
    r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
    r[1] = p[1];
    r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad); //translate to correct position
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];
    return out;
}
function rotateZ(out, a, b, rad) {
    var p = [], r = []; //Translate point to the origin
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2]; //perform rotation
    r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
    r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
    r[2] = p[2]; //translate to correct position
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];
    return out;
}
function angle(a, b) {
    var ax = a[0], ay = a[1], az = a[2], bx = b[0], by = b[1], bz = b[2], mag1 = Math.sqrt(ax * ax + ay * ay + az * az), mag2 = Math.sqrt(bx * bx + by * by + bz * bz), mag = mag1 * mag2, cosine = mag && dot(a, b) / mag;
    return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
function zero(out) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    return out;
}
function str(a) {
    return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
}
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
function equals(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2];
    var b0 = b[0], b1 = b[1], b2 = b[2];
    return Math.abs(a0 - b0) <= _commonJs.EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _commonJs.EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _commonJs.EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2));
}
var sub = subtract;
var mul = multiply;
var div = divide;
var dist = distance;
var sqrDist = squaredDistance;
var len = length;
var sqrLen = squaredLength;
var forEach = function() {
    var vec = create();
    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if (!stride) stride = 3;
        if (!offset) offset = 0;
        if (count) l = Math.min(count * stride + offset, a.length);
        else l = a.length;
        for(i = offset; i < l; i += stride){
            vec[0] = a[i];
            vec[1] = a[i + 1];
            vec[2] = a[i + 2];
            fn(vec, vec, arg);
            a[i] = vec[0];
            a[i + 1] = vec[1];
            a[i + 2] = vec[2];
        }
        return a;
    };
}();

},{"./common.js":"3a2uG","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3a2uG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EPSILON", ()=>EPSILON
);
parcelHelpers.export(exports, "ARRAY_TYPE", ()=>ARRAY_TYPE
);
parcelHelpers.export(exports, "RANDOM", ()=>RANDOM
);
/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Float32ArrayConstructor | ArrayConstructor} type Array type, such as Float32Array or Array
 */ parcelHelpers.export(exports, "setMatrixArrayType", ()=>setMatrixArrayType
);
/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */ parcelHelpers.export(exports, "toRadian", ()=>toRadian
);
/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */ parcelHelpers.export(exports, "equals", ()=>equals
);
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
var RANDOM = Math.random;
function setMatrixArrayType(type) {
    ARRAY_TYPE = type;
}
var degree = Math.PI / 180;
function toRadian(a) {
    return a * degree;
}
function equals(a, b) {
    return Math.abs(a - b) <= EPSILON * Math.max(1, Math.abs(a), Math.abs(b));
}
if (!Math.hypot) Math.hypot = function() {
    var y = 0, i = arguments.length;
    while(i--)y += arguments[i] * arguments[i];
    return Math.sqrt(y);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bfORa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */ /**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */ parcelHelpers.export(exports, "create", ()=>create
);
/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */ parcelHelpers.export(exports, "clone", ()=>clone
);
/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "copy", ()=>copy
);
/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */ parcelHelpers.export(exports, "fromValues", ()=>fromValues
);
/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "set", ()=>set
);
/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "identity", ()=>identity
);
/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "transpose", ()=>transpose
);
/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "invert", ()=>invert
);
/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "adjoint", ()=>adjoint
);
/**
 * Calculates the determinant of a mat4
 *
 * @param {ReadonlyMat4} a the source matrix
 * @returns {Number} determinant of a
 */ parcelHelpers.export(exports, "determinant", ()=>determinant
);
/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "multiply", ()=>multiply
);
/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to translate
 * @param {ReadonlyVec3} v vector to translate by
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "translate", ()=>translate
);
/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {ReadonlyVec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/ parcelHelpers.export(exports, "scale", ()=>scale
);
/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "rotate", ()=>rotate
);
/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "rotateX", ()=>rotateX
);
/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "rotateY", ()=>rotateY
);
/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "rotateZ", ()=>rotateZ
);
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "fromTranslation", ()=>fromTranslation
);
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Scaling vector
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "fromScaling", ()=>fromScaling
);
/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "fromRotation", ()=>fromRotation
);
/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "fromXRotation", ()=>fromXRotation
);
/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "fromYRotation", ()=>fromYRotation
);
/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "fromZRotation", ()=>fromZRotation
);
/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "fromRotationTranslation", ()=>fromRotationTranslation
);
/**
 * Creates a new mat4 from a dual quat.
 *
 * @param {mat4} out Matrix
 * @param {ReadonlyQuat2} a Dual Quaternion
 * @returns {mat4} mat4 receiving operation result
 */ parcelHelpers.export(exports, "fromQuat2", ()=>fromQuat2
);
/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */ parcelHelpers.export(exports, "getTranslation", ()=>getTranslation
);
/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */ parcelHelpers.export(exports, "getScaling", ()=>getScaling
);
/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */ parcelHelpers.export(exports, "getRotation", ()=>getRotation
);
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "fromRotationTranslationScale", ()=>fromRotationTranslationScale
);
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @param {ReadonlyVec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "fromRotationTranslationScaleOrigin", ()=>fromRotationTranslationScaleOrigin
);
/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "fromQuat", ()=>fromQuat
);
/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "frustum", ()=>frustum
);
/**
 * Generates a perspective projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
 * which matches WebGL/OpenGL's clip volume.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "perspectiveNO", ()=>perspectiveNO
);
parcelHelpers.export(exports, "perspective", ()=>perspective
);
/**
 * Generates a perspective projection matrix suitable for WebGPU with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
 * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "perspectiveZO", ()=>perspectiveZO
);
/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "perspectiveFromFieldOfView", ()=>perspectiveFromFieldOfView
);
/**
 * Generates a orthogonal projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
 * which matches WebGL/OpenGL's clip volume.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "orthoNO", ()=>orthoNO
);
parcelHelpers.export(exports, "ortho", ()=>ortho
);
/**
 * Generates a orthogonal projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
 * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "orthoZO", ()=>orthoZO
);
/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "lookAt", ()=>lookAt
);
/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "targetTo", ()=>targetTo
);
/**
 * Returns a string representation of a mat4
 *
 * @param {ReadonlyMat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */ parcelHelpers.export(exports, "str", ()=>str
);
/**
 * Returns Frobenius norm of a mat4
 *
 * @param {ReadonlyMat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */ parcelHelpers.export(exports, "frob", ()=>frob
);
/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "add", ()=>add
);
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "subtract", ()=>subtract
);
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "multiplyScalar", ()=>multiplyScalar
);
/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */ parcelHelpers.export(exports, "multiplyScalarAndAdd", ()=>multiplyScalarAndAdd
);
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */ parcelHelpers.export(exports, "exactEquals", ()=>exactEquals
);
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */ parcelHelpers.export(exports, "equals", ()=>equals
);
parcelHelpers.export(exports, "mul", ()=>mul
);
parcelHelpers.export(exports, "sub", ()=>sub
);
var _commonJs = require("./common.js");
function create() {
    var out = new _commonJs.ARRAY_TYPE(16);
    if (_commonJs.ARRAY_TYPE != Float32Array) {
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
    }
    out[0] = 1;
    out[5] = 1;
    out[10] = 1;
    out[15] = 1;
    return out;
}
function clone(a) {
    var out = new _commonJs.ARRAY_TYPE(16);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
}
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
}
function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    var out = new _commonJs.ARRAY_TYPE(16);
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m03;
    out[4] = m10;
    out[5] = m11;
    out[6] = m12;
    out[7] = m13;
    out[8] = m20;
    out[9] = m21;
    out[10] = m22;
    out[11] = m23;
    out[12] = m30;
    out[13] = m31;
    out[14] = m32;
    out[15] = m33;
    return out;
}
function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m03;
    out[4] = m10;
    out[5] = m11;
    out[6] = m12;
    out[7] = m13;
    out[8] = m20;
    out[9] = m21;
    out[10] = m22;
    out[11] = m23;
    out[12] = m30;
    out[13] = m31;
    out[14] = m32;
    out[15] = m33;
    return out;
}
function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
function transpose(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a01 = a[1], a02 = a[2], a03 = a[3];
        var a12 = a[6], a13 = a[7];
        var a23 = a[11];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a01;
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a02;
        out[9] = a12;
        out[11] = a[14];
        out[12] = a03;
        out[13] = a13;
        out[14] = a23;
    } else {
        out[0] = a[0];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a[1];
        out[5] = a[5];
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a[2];
        out[9] = a[6];
        out[10] = a[10];
        out[11] = a[14];
        out[12] = a[3];
        out[13] = a[7];
        out[14] = a[11];
        out[15] = a[15];
    }
    return out;
}
function invert(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32; // Calculate the determinant
    var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    if (!det) return null;
    det = 1 / det;
    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
    return out;
}
function adjoint(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
    out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
    out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
    out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
    out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
    out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
    out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
    out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
    out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
    out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
    out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
    out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
    out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
    out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
    out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
    out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
    return out;
}
function determinant(a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32; // Calculate the determinant
    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
function multiply(out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15]; // Cache only the current line of the second matrix
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[4];
    b1 = b[5];
    b2 = b[6];
    b3 = b[7];
    out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[8];
    b1 = b[9];
    b2 = b[10];
    b3 = b[11];
    out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[12];
    b1 = b[13];
    b2 = b[14];
    b3 = b[15];
    out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    return out;
}
function translate(out, a, v) {
    var x = v[0], y = v[1], z = v[2];
    var a00, a01, a02, a03;
    var a10, a11, a12, a13;
    var a20, a21, a22, a23;
    if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
        a00 = a[0];
        a01 = a[1];
        a02 = a[2];
        a03 = a[3];
        a10 = a[4];
        a11 = a[5];
        a12 = a[6];
        a13 = a[7];
        a20 = a[8];
        a21 = a[9];
        a22 = a[10];
        a23 = a[11];
        out[0] = a00;
        out[1] = a01;
        out[2] = a02;
        out[3] = a03;
        out[4] = a10;
        out[5] = a11;
        out[6] = a12;
        out[7] = a13;
        out[8] = a20;
        out[9] = a21;
        out[10] = a22;
        out[11] = a23;
        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }
    return out;
}
function scale(out, a, v) {
    var x = v[0], y = v[1], z = v[2];
    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
}
function rotate(out, a, rad, axis) {
    var x = axis[0], y = axis[1], z = axis[2];
    var len = Math.hypot(x, y, z);
    var s, c, t;
    var a00, a01, a02, a03;
    var a10, a11, a12, a13;
    var a20, a21, a22, a23;
    var b00, b01, b02;
    var b10, b11, b12;
    var b20, b21, b22;
    if (len < _commonJs.EPSILON) return null;
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;
    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11]; // Construct the elements of the rotation matrix
    b00 = x * x * t + c;
    b01 = y * x * t + z * s;
    b02 = z * x * t - y * s;
    b10 = x * y * t - z * s;
    b11 = y * y * t + c;
    b12 = z * y * t + x * s;
    b20 = x * z * t + y * s;
    b21 = y * z * t - x * s;
    b22 = z * z * t + c; // Perform rotation-specific matrix multiplication
    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
    out[11] = a03 * b20 + a13 * b21 + a23 * b22;
    if (a !== out) {
        // If the source and destination differ, copy the unchanged last row
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    return out;
}
function rotateX(out, a, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    var a10 = a[4];
    var a11 = a[5];
    var a12 = a[6];
    var a13 = a[7];
    var a20 = a[8];
    var a21 = a[9];
    var a22 = a[10];
    var a23 = a[11];
    if (a !== out) {
        // If the source and destination differ, copy the unchanged rows
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    } // Perform axis-specific matrix multiplication
    out[4] = a10 * c + a20 * s;
    out[5] = a11 * c + a21 * s;
    out[6] = a12 * c + a22 * s;
    out[7] = a13 * c + a23 * s;
    out[8] = a20 * c - a10 * s;
    out[9] = a21 * c - a11 * s;
    out[10] = a22 * c - a12 * s;
    out[11] = a23 * c - a13 * s;
    return out;
}
function rotateY(out, a, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a03 = a[3];
    var a20 = a[8];
    var a21 = a[9];
    var a22 = a[10];
    var a23 = a[11];
    if (a !== out) {
        // If the source and destination differ, copy the unchanged rows
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    } // Perform axis-specific matrix multiplication
    out[0] = a00 * c - a20 * s;
    out[1] = a01 * c - a21 * s;
    out[2] = a02 * c - a22 * s;
    out[3] = a03 * c - a23 * s;
    out[8] = a00 * s + a20 * c;
    out[9] = a01 * s + a21 * c;
    out[10] = a02 * s + a22 * c;
    out[11] = a03 * s + a23 * c;
    return out;
}
function rotateZ(out, a, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a03 = a[3];
    var a10 = a[4];
    var a11 = a[5];
    var a12 = a[6];
    var a13 = a[7];
    if (a !== out) {
        // If the source and destination differ, copy the unchanged last row
        out[8] = a[8];
        out[9] = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    } // Perform axis-specific matrix multiplication
    out[0] = a00 * c + a10 * s;
    out[1] = a01 * c + a11 * s;
    out[2] = a02 * c + a12 * s;
    out[3] = a03 * c + a13 * s;
    out[4] = a10 * c - a00 * s;
    out[5] = a11 * c - a01 * s;
    out[6] = a12 * c - a02 * s;
    out[7] = a13 * c - a03 * s;
    return out;
}
function fromTranslation(out, v) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    return out;
}
function fromScaling(out, v) {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = v[1];
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = v[2];
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
function fromRotation(out, rad, axis) {
    var x = axis[0], y = axis[1], z = axis[2];
    var len = Math.hypot(x, y, z);
    var s, c, t;
    if (len < _commonJs.EPSILON) return null;
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;
    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c; // Perform rotation-specific matrix multiplication
    out[0] = x * x * t + c;
    out[1] = y * x * t + z * s;
    out[2] = z * x * t - y * s;
    out[3] = 0;
    out[4] = x * y * t - z * s;
    out[5] = y * y * t + c;
    out[6] = z * y * t + x * s;
    out[7] = 0;
    out[8] = x * z * t + y * s;
    out[9] = y * z * t - x * s;
    out[10] = z * z * t + c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
function fromXRotation(out, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad); // Perform axis-specific matrix multiplication
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = c;
    out[6] = s;
    out[7] = 0;
    out[8] = 0;
    out[9] = -s;
    out[10] = c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
function fromYRotation(out, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad); // Perform axis-specific matrix multiplication
    out[0] = c;
    out[1] = 0;
    out[2] = -s;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = s;
    out[9] = 0;
    out[10] = c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
function fromZRotation(out, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad); // Perform axis-specific matrix multiplication
    out[0] = c;
    out[1] = s;
    out[2] = 0;
    out[3] = 0;
    out[4] = -s;
    out[5] = c;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
function fromRotationTranslation(out, q, v) {
    // Quaternion math
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var xy = x * y2;
    var xz = x * z2;
    var yy = y * y2;
    var yz = y * z2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    out[0] = 1 - (yy + zz);
    out[1] = xy + wz;
    out[2] = xz - wy;
    out[3] = 0;
    out[4] = xy - wz;
    out[5] = 1 - (xx + zz);
    out[6] = yz + wx;
    out[7] = 0;
    out[8] = xz + wy;
    out[9] = yz - wx;
    out[10] = 1 - (xx + yy);
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    return out;
}
function fromQuat2(out, a) {
    var translation = new _commonJs.ARRAY_TYPE(3);
    var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7];
    var magnitude = bx * bx + by * by + bz * bz + bw * bw; //Only scale if it makes sense
    if (magnitude > 0) {
        translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
        translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
        translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
    } else {
        translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
        translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
        translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
    }
    fromRotationTranslation(out, a, translation);
    return out;
}
function getTranslation(out, mat) {
    out[0] = mat[12];
    out[1] = mat[13];
    out[2] = mat[14];
    return out;
}
function getScaling(out, mat) {
    var m11 = mat[0];
    var m12 = mat[1];
    var m13 = mat[2];
    var m21 = mat[4];
    var m22 = mat[5];
    var m23 = mat[6];
    var m31 = mat[8];
    var m32 = mat[9];
    var m33 = mat[10];
    out[0] = Math.hypot(m11, m12, m13);
    out[1] = Math.hypot(m21, m22, m23);
    out[2] = Math.hypot(m31, m32, m33);
    return out;
}
function getRotation(out, mat) {
    var scaling = new _commonJs.ARRAY_TYPE(3);
    getScaling(scaling, mat);
    var is1 = 1 / scaling[0];
    var is2 = 1 / scaling[1];
    var is3 = 1 / scaling[2];
    var sm11 = mat[0] * is1;
    var sm12 = mat[1] * is2;
    var sm13 = mat[2] * is3;
    var sm21 = mat[4] * is1;
    var sm22 = mat[5] * is2;
    var sm23 = mat[6] * is3;
    var sm31 = mat[8] * is1;
    var sm32 = mat[9] * is2;
    var sm33 = mat[10] * is3;
    var trace = sm11 + sm22 + sm33;
    var S = 0;
    if (trace > 0) {
        S = Math.sqrt(trace + 1) * 2;
        out[3] = 0.25 * S;
        out[0] = (sm23 - sm32) / S;
        out[1] = (sm31 - sm13) / S;
        out[2] = (sm12 - sm21) / S;
    } else if (sm11 > sm22 && sm11 > sm33) {
        S = Math.sqrt(1 + sm11 - sm22 - sm33) * 2;
        out[3] = (sm23 - sm32) / S;
        out[0] = 0.25 * S;
        out[1] = (sm12 + sm21) / S;
        out[2] = (sm31 + sm13) / S;
    } else if (sm22 > sm33) {
        S = Math.sqrt(1 + sm22 - sm11 - sm33) * 2;
        out[3] = (sm31 - sm13) / S;
        out[0] = (sm12 + sm21) / S;
        out[1] = 0.25 * S;
        out[2] = (sm23 + sm32) / S;
    } else {
        S = Math.sqrt(1 + sm33 - sm11 - sm22) * 2;
        out[3] = (sm12 - sm21) / S;
        out[0] = (sm31 + sm13) / S;
        out[1] = (sm23 + sm32) / S;
        out[2] = 0.25 * S;
    }
    return out;
}
function fromRotationTranslationScale(out, q, v, s) {
    // Quaternion math
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var xy = x * y2;
    var xz = x * z2;
    var yy = y * y2;
    var yz = y * z2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    var sx = s[0];
    var sy = s[1];
    var sz = s[2];
    out[0] = (1 - (yy + zz)) * sx;
    out[1] = (xy + wz) * sx;
    out[2] = (xz - wy) * sx;
    out[3] = 0;
    out[4] = (xy - wz) * sy;
    out[5] = (1 - (xx + zz)) * sy;
    out[6] = (yz + wx) * sy;
    out[7] = 0;
    out[8] = (xz + wy) * sz;
    out[9] = (yz - wx) * sz;
    out[10] = (1 - (xx + yy)) * sz;
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    return out;
}
function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
    // Quaternion math
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var xy = x * y2;
    var xz = x * z2;
    var yy = y * y2;
    var yz = y * z2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    var sx = s[0];
    var sy = s[1];
    var sz = s[2];
    var ox = o[0];
    var oy = o[1];
    var oz = o[2];
    var out0 = (1 - (yy + zz)) * sx;
    var out1 = (xy + wz) * sx;
    var out2 = (xz - wy) * sx;
    var out4 = (xy - wz) * sy;
    var out5 = (1 - (xx + zz)) * sy;
    var out6 = (yz + wx) * sy;
    var out8 = (xz + wy) * sz;
    var out9 = (yz - wx) * sz;
    var out10 = (1 - (xx + yy)) * sz;
    out[0] = out0;
    out[1] = out1;
    out[2] = out2;
    out[3] = 0;
    out[4] = out4;
    out[5] = out5;
    out[6] = out6;
    out[7] = 0;
    out[8] = out8;
    out[9] = out9;
    out[10] = out10;
    out[11] = 0;
    out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
    out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
    out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
    out[15] = 1;
    return out;
}
function fromQuat(out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var yx = y * x2;
    var yy = y * y2;
    var zx = z * x2;
    var zy = z * y2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    out[0] = 1 - yy - zz;
    out[1] = yx + wz;
    out[2] = zx - wy;
    out[3] = 0;
    out[4] = yx - wz;
    out[5] = 1 - xx - zz;
    out[6] = zy + wx;
    out[7] = 0;
    out[8] = zx + wy;
    out[9] = zy - wx;
    out[10] = 1 - xx - yy;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
function frustum(out, left, right, bottom, top, near, far) {
    var rl = 1 / (right - left);
    var tb = 1 / (top - bottom);
    var nf = 1 / (near - far);
    out[0] = near * 2 * rl;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = near * 2 * tb;
    out[6] = 0;
    out[7] = 0;
    out[8] = (right + left) * rl;
    out[9] = (top + bottom) * tb;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = far * near * 2 * nf;
    out[15] = 0;
    return out;
}
function perspectiveNO(out, fovy, aspect, near, far) {
    var f = 1 / Math.tan(fovy / 2), nf;
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[15] = 0;
    if (far != null && far !== Infinity) {
        nf = 1 / (near - far);
        out[10] = (far + near) * nf;
        out[14] = 2 * far * near * nf;
    } else {
        out[10] = -1;
        out[14] = -2 * near;
    }
    return out;
}
var perspective = perspectiveNO;
function perspectiveZO(out, fovy, aspect, near, far) {
    var f = 1 / Math.tan(fovy / 2), nf;
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[15] = 0;
    if (far != null && far !== Infinity) {
        nf = 1 / (near - far);
        out[10] = far * nf;
        out[14] = far * near * nf;
    } else {
        out[10] = -1;
        out[14] = -near;
    }
    return out;
}
function perspectiveFromFieldOfView(out, fov, near, far) {
    var upTan = Math.tan(fov.upDegrees * Math.PI / 180);
    var downTan = Math.tan(fov.downDegrees * Math.PI / 180);
    var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180);
    var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180);
    var xScale = 2 / (leftTan + rightTan);
    var yScale = 2 / (upTan + downTan);
    out[0] = xScale;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = yScale;
    out[6] = 0;
    out[7] = 0;
    out[8] = -((leftTan - rightTan) * xScale * 0.5);
    out[9] = (upTan - downTan) * yScale * 0.5;
    out[10] = far / (near - far);
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = far * near / (near - far);
    out[15] = 0;
    return out;
}
function orthoNO(out, left, right, bottom, top, near, far) {
    var lr = 1 / (left - right);
    var bt = 1 / (bottom - top);
    var nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 2 * nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = (far + near) * nf;
    out[15] = 1;
    return out;
}
var ortho = orthoNO;
function orthoZO(out, left, right, bottom, top, near, far) {
    var lr = 1 / (left - right);
    var bt = 1 / (bottom - top);
    var nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = near * nf;
    out[15] = 1;
    return out;
}
function lookAt(out, eye, center, up) {
    var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
    var eyex = eye[0];
    var eyey = eye[1];
    var eyez = eye[2];
    var upx = up[0];
    var upy = up[1];
    var upz = up[2];
    var centerx = center[0];
    var centery = center[1];
    var centerz = center[2];
    if (Math.abs(eyex - centerx) < _commonJs.EPSILON && Math.abs(eyey - centery) < _commonJs.EPSILON && Math.abs(eyez - centerz) < _commonJs.EPSILON) return identity(out);
    z0 = eyex - centerx;
    z1 = eyey - centery;
    z2 = eyez - centerz;
    len = 1 / Math.hypot(z0, z1, z2);
    z0 *= len;
    z1 *= len;
    z2 *= len;
    x0 = upy * z2 - upz * z1;
    x1 = upz * z0 - upx * z2;
    x2 = upx * z1 - upy * z0;
    len = Math.hypot(x0, x1, x2);
    if (!len) {
        x0 = 0;
        x1 = 0;
        x2 = 0;
    } else {
        len = 1 / len;
        x0 *= len;
        x1 *= len;
        x2 *= len;
    }
    y0 = z1 * x2 - z2 * x1;
    y1 = z2 * x0 - z0 * x2;
    y2 = z0 * x1 - z1 * x0;
    len = Math.hypot(y0, y1, y2);
    if (!len) {
        y0 = 0;
        y1 = 0;
        y2 = 0;
    } else {
        len = 1 / len;
        y0 *= len;
        y1 *= len;
        y2 *= len;
    }
    out[0] = x0;
    out[1] = y0;
    out[2] = z0;
    out[3] = 0;
    out[4] = x1;
    out[5] = y1;
    out[6] = z1;
    out[7] = 0;
    out[8] = x2;
    out[9] = y2;
    out[10] = z2;
    out[11] = 0;
    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
    out[15] = 1;
    return out;
}
function targetTo(out, eye, target, up) {
    var eyex = eye[0], eyey = eye[1], eyez = eye[2], upx = up[0], upy = up[1], upz = up[2];
    var z0 = eyex - target[0], z1 = eyey - target[1], z2 = eyez - target[2];
    var len = z0 * z0 + z1 * z1 + z2 * z2;
    if (len > 0) {
        len = 1 / Math.sqrt(len);
        z0 *= len;
        z1 *= len;
        z2 *= len;
    }
    var x0 = upy * z2 - upz * z1, x1 = upz * z0 - upx * z2, x2 = upx * z1 - upy * z0;
    len = x0 * x0 + x1 * x1 + x2 * x2;
    if (len > 0) {
        len = 1 / Math.sqrt(len);
        x0 *= len;
        x1 *= len;
        x2 *= len;
    }
    out[0] = x0;
    out[1] = x1;
    out[2] = x2;
    out[3] = 0;
    out[4] = z1 * x2 - z2 * x1;
    out[5] = z2 * x0 - z0 * x2;
    out[6] = z0 * x1 - z1 * x0;
    out[7] = 0;
    out[8] = z0;
    out[9] = z1;
    out[10] = z2;
    out[11] = 0;
    out[12] = eyex;
    out[13] = eyey;
    out[14] = eyez;
    out[15] = 1;
    return out;
}
function str(a) {
    return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")";
}
function frob(a) {
    return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
}
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    out[6] = a[6] + b[6];
    out[7] = a[7] + b[7];
    out[8] = a[8] + b[8];
    out[9] = a[9] + b[9];
    out[10] = a[10] + b[10];
    out[11] = a[11] + b[11];
    out[12] = a[12] + b[12];
    out[13] = a[13] + b[13];
    out[14] = a[14] + b[14];
    out[15] = a[15] + b[15];
    return out;
}
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    out[4] = a[4] - b[4];
    out[5] = a[5] - b[5];
    out[6] = a[6] - b[6];
    out[7] = a[7] - b[7];
    out[8] = a[8] - b[8];
    out[9] = a[9] - b[9];
    out[10] = a[10] - b[10];
    out[11] = a[11] - b[11];
    out[12] = a[12] - b[12];
    out[13] = a[13] - b[13];
    out[14] = a[14] - b[14];
    out[15] = a[15] - b[15];
    return out;
}
function multiplyScalar(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    out[6] = a[6] * b;
    out[7] = a[7] * b;
    out[8] = a[8] * b;
    out[9] = a[9] * b;
    out[10] = a[10] * b;
    out[11] = a[11] * b;
    out[12] = a[12] * b;
    out[13] = a[13] * b;
    out[14] = a[14] * b;
    out[15] = a[15] * b;
    return out;
}
function multiplyScalarAndAdd(out, a, b, scale) {
    out[0] = a[0] + b[0] * scale;
    out[1] = a[1] + b[1] * scale;
    out[2] = a[2] + b[2] * scale;
    out[3] = a[3] + b[3] * scale;
    out[4] = a[4] + b[4] * scale;
    out[5] = a[5] + b[5] * scale;
    out[6] = a[6] + b[6] * scale;
    out[7] = a[7] + b[7] * scale;
    out[8] = a[8] + b[8] * scale;
    out[9] = a[9] + b[9] * scale;
    out[10] = a[10] + b[10] * scale;
    out[11] = a[11] + b[11] * scale;
    out[12] = a[12] + b[12] * scale;
    out[13] = a[13] + b[13] * scale;
    out[14] = a[14] + b[14] * scale;
    out[15] = a[15] + b[15] * scale;
    return out;
}
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}
function equals(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7];
    var a8 = a[8], a9 = a[9], a10 = a[10], a11 = a[11];
    var a12 = a[12], a13 = a[13], a14 = a[14], a15 = a[15];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    var b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7];
    var b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11];
    var b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
    return Math.abs(a0 - b0) <= _commonJs.EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _commonJs.EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _commonJs.EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _commonJs.EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _commonJs.EPSILON * Math.max(1, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _commonJs.EPSILON * Math.max(1, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _commonJs.EPSILON * Math.max(1, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _commonJs.EPSILON * Math.max(1, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _commonJs.EPSILON * Math.max(1, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= _commonJs.EPSILON * Math.max(1, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= _commonJs.EPSILON * Math.max(1, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= _commonJs.EPSILON * Math.max(1, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= _commonJs.EPSILON * Math.max(1, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= _commonJs.EPSILON * Math.max(1, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= _commonJs.EPSILON * Math.max(1, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= _commonJs.EPSILON * Math.max(1, Math.abs(a15), Math.abs(b15));
}
var mul = multiply;
var sub = subtract;

},{"./common.js":"3a2uG","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"joWnX":[function(require,module,exports) {
"use strict";

},{}]},["6rcQg"], null, "parcelRequire6c07")

//# sourceMappingURL=core.modern.96d761d7.js.map
