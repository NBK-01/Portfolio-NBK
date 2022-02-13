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
})({"gvakt":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "7dae27c22624bd95";
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

},{}],"8heSO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ALL_EXTENSIONS", ()=>mt
);
parcelHelpers.export(exports, "Clearcoat", ()=>fe
);
parcelHelpers.export(exports, "DracoMeshCompression", ()=>ne
);
parcelHelpers.export(exports, "EmissiveStrength", ()=>xe
);
parcelHelpers.export(exports, "INSTANCE_ATTRIBUTE", ()=>E
);
parcelHelpers.export(exports, "IOR", ()=>me
);
parcelHelpers.export(exports, "InstancedMesh", ()=>N
);
parcelHelpers.export(exports, "KHRONOS_EXTENSIONS", ()=>dt
);
parcelHelpers.export(exports, "Light", ()=>ie
);
parcelHelpers.export(exports, "LightsPunctual", ()=>ce
);
parcelHelpers.export(exports, "Mapping", ()=>Ye
);
parcelHelpers.export(exports, "MappingList", ()=>Qe
);
parcelHelpers.export(exports, "MaterialsClearcoat", ()=>pe
);
parcelHelpers.export(exports, "MaterialsEmissiveStrength", ()=>de
);
parcelHelpers.export(exports, "MaterialsIOR", ()=>Ne
);
parcelHelpers.export(exports, "MaterialsPBRSpecularGlossiness", ()=>Ce
);
parcelHelpers.export(exports, "MaterialsSheen", ()=>je
);
parcelHelpers.export(exports, "MaterialsSpecular", ()=>Pe
);
parcelHelpers.export(exports, "MaterialsTransmission", ()=>Ke
);
parcelHelpers.export(exports, "MaterialsUnlit", ()=>$e
);
parcelHelpers.export(exports, "MaterialsVariants", ()=>Ze
);
parcelHelpers.export(exports, "MaterialsVolume", ()=>rt
);
parcelHelpers.export(exports, "MeshGPUInstancing", ()=>I
);
parcelHelpers.export(exports, "MeshQuantization", ()=>ot
);
parcelHelpers.export(exports, "MeshoptCompression", ()=>L
);
parcelHelpers.export(exports, "PBRSpecularGlossiness", ()=>Ae
);
parcelHelpers.export(exports, "Packet", ()=>gt
);
parcelHelpers.export(exports, "Sheen", ()=>be
);
parcelHelpers.export(exports, "Specular", ()=>He
);
parcelHelpers.export(exports, "TextureBasisu", ()=>ct
);
parcelHelpers.export(exports, "TextureTransform", ()=>ht
);
parcelHelpers.export(exports, "TextureWebP", ()=>P
);
parcelHelpers.export(exports, "Transform", ()=>ut
);
parcelHelpers.export(exports, "Transmission", ()=>ke
);
parcelHelpers.export(exports, "Unlit", ()=>ze
);
parcelHelpers.export(exports, "Variant", ()=>We
);
parcelHelpers.export(exports, "Volume", ()=>tt
);
parcelHelpers.export(exports, "XMP", ()=>Tt
);
var _core = require("@gltf-transform/core");
var _ktxParse = require("ktx-parse");
const E = "INSTANCE_ATTRIBUTE";
class N extends _core.ExtensionProperty {
    init() {
        this.extensionName = "EXT_mesh_gpu_instancing", this.propertyType = "InstancedMesh", this.parentTypes = [
            _core.PropertyType.NODE
        ];
    }
    getDefaults() {
        return Object.assign(super.getDefaults(), {
            attributes: {
            }
        });
    }
    getAttribute(e) {
        return this.getRefMap("attributes", e);
    }
    setAttribute(e, t) {
        return this.setRefMap("attributes", e, t, {
            usage: "INSTANCE_ATTRIBUTE"
        });
    }
    listAttributes() {
        return this.listRefMapValues("attributes");
    }
    listSemantics() {
        return this.listRefMapKeys("attributes");
    }
}
N.EXTENSION_NAME = "EXT_mesh_gpu_instancing";
const R = "EXT_mesh_gpu_instancing";
class I extends _core.Extension {
    constructor(...e){
        super(...e), this.extensionName = R, this.provideTypes = [
            _core.PropertyType.NODE
        ], this.prewriteTypes = [
            _core.PropertyType.ACCESSOR
        ];
    }
    createInstancedMesh() {
        return new N(this.document.getGraph());
    }
    read(e) {
        return (e.jsonDoc.json.nodes || []).forEach((t, s)=>{
            if (!t.extensions || !t.extensions[R]) return;
            const r = t.extensions[R], n = this.createInstancedMesh();
            for(const t1 in r.attributes)n.setAttribute(t1, e.accessors[r.attributes[t1]]);
            e.nodes[s].setExtension(R, n);
        }), this;
    }
    prewrite(e) {
        e.accessorUsageGroupedByParent.add("INSTANCE_ATTRIBUTE");
        for (const t of this.properties)for (const s of t.listAttributes())e.addAccessorToUsageGroup(s, "INSTANCE_ATTRIBUTE");
        return this;
    }
    write(e) {
        const t = e.jsonDoc;
        return this.document.getRoot().listNodes().forEach((s)=>{
            const r = s.getExtension(R);
            if (r) {
                const n = e.nodeIndexMap.get(s), o = t.json.nodes[n], i = {
                    attributes: {
                    }
                };
                r.listSemantics().forEach((t)=>{
                    const s = r.getAttribute(t);
                    i.attributes[t] = e.accessorIndexMap.get(s);
                }), o.extensions = o.extensions || {
                }, o.extensions[R] = i;
            }
        }), this;
    }
}
function _() {
    return (_ = Object.assign || function(e) {
        for(var t = 1; t < arguments.length; t++){
            var s = arguments[t];
            for(var r in s)Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
        }
        return e;
    }).apply(this, arguments);
}
var S, A, y;
I.EXTENSION_NAME = R, (function(e) {
    e.QUANTIZE = "quantize", e.FILTER = "filter";
})(S || (S = {
})), (function(e) {
    e.ATTRIBUTES = "ATTRIBUTES", e.TRIANGLES = "TRIANGLES", e.INDICES = "INDICES";
})(A || (A = {
})), (function(e) {
    e.NONE = "NONE", e.OCTAHEDRAL = "OCTAHEDRAL", e.QUATERNION = "QUATERNION", e.EXPONENTIAL = "EXPONENTIAL";
})(y || (y = {
}));
const { BYTE: C , SHORT: O , FLOAT: M  } = _core.Accessor.ComponentType, { normalize: w , denormalize: D  } = _core.MathUtils;
function b(e, t, s, n) {
    const { filter: o , bits: i  } = n, a = {
        array: e.getArray(),
        byteStride: e.getElementSize() * e.getComponentSize(),
        componentType: e.getComponentType(),
        normalized: e.getNormalized()
    };
    if (s !== A.ATTRIBUTES) return a;
    if (o !== y.NONE) {
        let s = e.getNormalized() ? function(e) {
            const t = e.getComponentType(), s = e.getArray(), r = new Float32Array(s.length);
            for(let e1 = 0; e1 < s.length; e1++)r[e1] = D(s[e1], t);
            return r;
        }(e) : new Float32Array(a.array);
        switch(o){
            case y.EXPONENTIAL:
                a.byteStride = 4 * e.getElementSize(), a.componentType = M, a.normalized = !1, a.array = t.encodeFilterExp(s, e.getCount(), a.byteStride, i);
                break;
            case y.OCTAHEDRAL:
                a.byteStride = i > 8 ? 8 : 4, a.componentType = i > 8 ? O : C, a.normalized = !0, s = 3 === e.getElementSize() ? (function(e) {
                    const t = new Float32Array(4 * e.length / 3);
                    for(let s = 0, r = e.length / 3; s < r; s++)t[4 * s] = e[3 * s], t[4 * s + 1] = e[3 * s + 1], t[4 * s + 2] = e[3 * s + 2];
                    return t;
                })(s) : s, a.array = t.encodeFilterOct(s, e.getCount(), a.byteStride, i);
                break;
            case y.QUATERNION:
                a.byteStride = 8, a.componentType = O, a.normalized = !0, a.array = t.encodeFilterQuat(s, e.getCount(), a.byteStride, i);
                break;
            default:
                throw new Error("Invalid filter.");
        }
        a.min = e.getMin([]), a.max = e.getMax([]), e.getNormalized() && (a.min = a.min.map((t)=>D(t, e.getComponentType())
        ), a.max = a.max.map((t)=>D(t, e.getComponentType())
        )), a.normalized && (a.min = a.min.map((e)=>w(e, a.componentType)
        ), a.max = a.max.map((e)=>w(e, a.componentType)
        ));
    } else a.byteStride % 4 && (a.array = (function(e, t) {
        const s = _core.BufferUtils.padNumber(e.BYTES_PER_ELEMENT * t) / e.BYTES_PER_ELEMENT, n = new e.constructor(e.length / t * s);
        for(let r = 0; r * t < e.length; r++)for(let o = 0; o < t; o++)n[r * s + o] = e[r * t + o];
        return n;
    })(a.array, e.getElementSize()), a.byteStride = a.array.byteLength / e.getCount());
    return a;
}
function F(e, t) {
    return t === _core.WriterContext.BufferViewUsage.ELEMENT_ARRAY_BUFFER ? e.listParents().some((e)=>e instanceof _core.Primitive && e.getMode() === _core.Primitive.Mode.TRIANGLES
    ) ? A.TRIANGLES : A.INDICES : A.ATTRIBUTES;
}
function j(e, t) {
    const s = t.getGraph().listParentEdges(e).filter((e)=>!(e.getParent() instanceof _core.Root)
    );
    for (const t1 of s){
        const s = t1.getName(), r = t1.getAttributes().key || "";
        if ("indices" === s) return {
            filter: y.NONE
        };
        if ("attributes" === s) {
            if ("POSITION" === r) return {
                filter: y.NONE
            };
            if ("TEXCOORD_0" === r) return {
                filter: y.NONE
            };
            if ("NORMAL" === r) return {
                filter: y.OCTAHEDRAL,
                bits: 8
            };
            if ("TANGENT" === r) return {
                filter: y.OCTAHEDRAL,
                bits: 8
            };
            if (r.startsWith("JOINTS_")) return {
                filter: y.NONE
            };
            if (r.startsWith("WEIGHTS_")) return {
                filter: y.NONE
            };
        }
        if ("output" === s) {
            const t = v(e);
            return "rotation" === t ? {
                filter: y.QUATERNION,
                bits: 16
            } : "translation" === t || "scale" === t ? {
                filter: y.EXPONENTIAL,
                bits: 12
            } : {
                filter: y.NONE
            };
        }
        if ("input" === s) return {
            filter: y.NONE
        };
        if ("inverseBindMatrices" === s) return {
            filter: y.NONE
        };
    }
    return {
        filter: y.NONE
    };
}
function v(e) {
    for (const t of e.listParents())if (t instanceof _core.AnimationSampler) {
        for (const e1 of t.listParents())if (e1 instanceof _core.AnimationChannel) return e1.getTargetPath();
    }
    return null;
}
const B = "EXT_meshopt_compression", G = {
    method: S.QUANTIZE
};
class L extends _core.Extension {
    constructor(...e){
        super(...e), this.extensionName = B, this.prereadTypes = [
            _core.PropertyType.BUFFER,
            _core.PropertyType.PRIMITIVE
        ], this.prewriteTypes = [
            _core.PropertyType.BUFFER,
            _core.PropertyType.ACCESSOR
        ], this.readDependencies = [
            "meshopt.decoder"
        ], this.writeDependencies = [
            "meshopt.encoder"
        ], this._decoder = null, this._decoderFallbackBufferMap = new Map, this._encoder = null, this._encoderOptions = G, this._encoderFallbackBuffer = null, this._encoderBufferViews = {
        }, this._encoderBufferViewData = {
        }, this._encoderBufferViewAccessors = {
        };
    }
    install(e, t) {
        return "meshopt.decoder" === e && (this._decoder = t), "meshopt.encoder" === e && (this._encoder = t), this;
    }
    setEncoderOptions(e) {
        return this._encoderOptions = _({
        }, G, e), this;
    }
    preread(e, s) {
        if (!this._decoder) {
            if (!this.isRequired()) return this;
            throw new Error(`[${B}] Please install extension dependency, "meshopt.decoder".`);
        }
        if (!this._decoder.supported) {
            if (!this.isRequired()) return this;
            throw new Error(`[${B}]: Missing WASM support.`);
        }
        return s === _core.PropertyType.BUFFER ? this._prereadBuffers(e) : s === _core.PropertyType.PRIMITIVE && this._prereadPrimitives(e), this;
    }
    _prereadBuffers(e) {
        const t = e.jsonDoc;
        (t.json.bufferViews || []).forEach((s, n)=>{
            if (!s.extensions || !s.extensions[B]) return;
            const o = s.extensions[B], i = o.byteOffset || 0, a = o.byteLength || 0, c = o.count, u = o.byteStride, l = new Uint8Array(c * u), f = t.json.buffers[s.buffer], g = _core.BufferUtils.toView(f.uri ? t.resources[f.uri] : t.resources[_core.GLB_BUFFER], i, a);
            this._decoder.decodeGltfBuffer(l, c, u, g, o.mode, o.filter), e.bufferViews[n] = l;
        });
    }
    _prereadPrimitives(e) {
        const t = e.jsonDoc;
        (t.json.bufferViews || []).forEach((s)=>{
            var r;
            s.extensions && s.extensions[B] && (r = t.json.buffers[s.buffer]).extensions && r.extensions.EXT_meshopt_compression && r.extensions.EXT_meshopt_compression.fallback && this._decoderFallbackBufferMap.set(e.buffers[s.buffer], e.buffers[s.extensions[B].buffer]);
        });
    }
    read(e) {
        if (!this.isRequired()) return this;
        for (const [e, t] of this._decoderFallbackBufferMap){
            for (const s of e.listParents())s instanceof _core.Accessor && s.swap(e, t);
            e.dispose();
        }
        return this;
    }
    prewrite(e, s) {
        return s === _core.PropertyType.ACCESSOR ? this._prewriteAccessors(e) : s === _core.PropertyType.BUFFER && this._prewriteBuffers(e), this;
    }
    _prewriteAccessors(e) {
        const t = e.jsonDoc.json, s = this._encoder, r = this._encoderOptions, o = this.document.createBuffer(), i = this.document.getRoot().listBuffers().indexOf(o);
        this._encoderFallbackBuffer = o, this._encoderBufferViews = {
        }, this._encoderBufferViewData = {
        }, this._encoderBufferViewAccessors = {
        };
        for (const o1 of this.document.getRoot().listAccessors()){
            if ("weights" === v(o1)) continue;
            const a = e.getAccessorUsage(o1), c = F(o1, a), u = r.method === S.FILTER ? j(o1, this.document) : {
                filter: y.NONE
            }, l = b(o1, s, c, u), { array: h , byteStride: f  } = l, g = o1.getBuffer();
            if (!g) throw new Error(`${B}: Missing buffer for accessor.`);
            const p = this.document.getRoot().listBuffers().indexOf(g), x = [
                a,
                c,
                u.filter,
                f,
                p
            ].join(":");
            let T = this._encoderBufferViews[x], d = this._encoderBufferViewData[x], m = this._encoderBufferViewAccessors[x];
            T && d || (m = this._encoderBufferViewAccessors[x] = [], d = this._encoderBufferViewData[x] = [], T = this._encoderBufferViews[x] = {
                buffer: i,
                target: _core.WriterContext.USAGE_TO_TARGET[a],
                byteOffset: 0,
                byteLength: 0,
                byteStride: a === _core.WriterContext.BufferViewUsage.ARRAY_BUFFER ? f : void 0,
                extensions: {
                    [B]: {
                        buffer: p,
                        byteOffset: 0,
                        byteLength: 0,
                        mode: c,
                        filter: u.filter !== y.NONE ? u.filter : void 0,
                        byteStride: f,
                        count: 0
                    }
                }
            });
            const E = e.createAccessorDef(o1);
            E.componentType = l.componentType, E.normalized = l.normalized, E.byteOffset = T.byteLength, E.min && l.min && (E.min = l.min), E.max && l.max && (E.max = l.max), e.accessorIndexMap.set(o1, t.accessors.length), t.accessors.push(E), m.push(E), d.push(new Uint8Array(h.buffer, h.byteOffset, h.byteLength)), T.byteLength += h.byteLength, T.extensions.EXT_meshopt_compression.count += o1.getCount();
        }
    }
    _prewriteBuffers(e) {
        const t = this._encoder;
        for(const s in this._encoderBufferViews){
            const n = this._encoderBufferViews[s], o = this._encoderBufferViewData[s], i = this.document.getRoot().listBuffers()[n.extensions[B].buffer], a = e.otherBufferViews.get(i) || [], { count: c , byteStride: u , mode: l  } = n.extensions[B], h = _core.BufferUtils.concat(o), f = t.encodeGltfBuffer(h, c, u, l), g = _core.BufferUtils.pad(f);
            n.extensions[B].byteLength = f.byteLength, o.length = 0, o.push(g), a.push(g), e.otherBufferViews.set(i, a);
        }
    }
    write(e) {
        let t = 0;
        for(const s in this._encoderBufferViews){
            const n = this._encoderBufferViews[s], o = e.otherBufferViewsIndexMap.get(this._encoderBufferViewData[s][0]), i = this._encoderBufferViewAccessors[s];
            for (const e1 of i)e1.bufferView = o;
            const a = e.jsonDoc.json.bufferViews[o], c = a.byteOffset || 0;
            Object.assign(a, n), a.byteOffset = t, a.extensions[B].byteOffset = c, t += _core.BufferUtils.padNumber(n.byteLength);
        }
        const s1 = this._encoderFallbackBuffer, n = e.bufferIndexMap.get(s1), o = e.jsonDoc.json.buffers[n];
        return o.byteLength = t, o.extensions = {
            [B]: {
                fallback: !0
            }
        }, s1.dispose(), this;
    }
}
L.EXTENSION_NAME = B, L.EncoderMethod = S;
const H = "EXT_texture_webp";
class U {
    match(e) {
        return e.length >= 12 && 87 === e[8] && 69 === e[9] && 66 === e[10] && 80 === e[11];
    }
    getSize(e) {
        const t = _core.BufferUtils.decodeText(e.slice(0, 4)), s = _core.BufferUtils.decodeText(e.slice(8, 12));
        if ("RIFF" !== t || "WEBP" !== s) return null;
        const n = new DataView(e.buffer, e.byteOffset);
        let o = 12;
        for(; o < n.byteLength;){
            const e = _core.BufferUtils.decodeText(new Uint8Array([
                n.getUint8(o),
                n.getUint8(o + 1),
                n.getUint8(o + 2),
                n.getUint8(o + 3)
            ])), t = n.getUint32(o + 4, !0);
            if ("VP8 " === e) return [
                16383 & n.getInt16(o + 14, !0),
                16383 & n.getInt16(o + 16, !0)
            ];
            if ("VP8L" === e) {
                const e = n.getUint8(o + 9), t = n.getUint8(o + 10), s = n.getUint8(o + 11);
                return [
                    1 + ((63 & t) << 8 | e),
                    1 + ((15 & n.getUint8(o + 12)) << 10 | s << 2 | (192 & t) >> 6)
                ];
            }
            o += 8 + t + t % 2;
        }
        return null;
    }
    getChannels(e) {
        return 4;
    }
}
class P extends _core.Extension {
    constructor(...e){
        super(...e), this.extensionName = H, this.prereadTypes = [
            _core.PropertyType.TEXTURE
        ];
    }
    static register() {
        _core.ImageUtils.registerFormat("image/webp", new U);
    }
    preread(e) {
        return (e.jsonDoc.json.textures || []).forEach((e)=>{
            e.extensions && e.extensions[H] && (e.source = e.extensions[H].source);
        }), this;
    }
    read(e) {
        return this;
    }
    write(e) {
        const t = e.jsonDoc;
        return this.document.getRoot().listTextures().forEach((s)=>{
            if ("image/webp" === s.getMimeType()) {
                const r = e.imageIndexMap.get(s);
                (t.json.textures || []).forEach((e)=>{
                    e.source === r && (e.extensions = e.extensions || {
                    }, e.extensions[H] = {
                        source: e.source
                    }, delete e.source);
                });
            }
        }), this;
    }
}
P.EXTENSION_NAME = H;
const V = "KHR_draco_mesh_compression";
let k, X, K, z;
function q(e, t) {
    const s = new k.DecoderBuffer;
    try {
        if (s.Init(t, t.length), e.GetEncodedGeometryType(s) !== k.TRIANGULAR_MESH) throw new Error(`[${V}] Unknown geometry type.`);
        const r = new k.Mesh;
        if (!e.DecodeBufferToMesh(s, r).ok() || 0 === r.ptr) throw new Error(`[${V}] Decoding failure.`);
        return r;
    } finally{
        k.destroy(s);
    }
}
function $(e, t) {
    const s = 3 * t.num_faces();
    let r, n;
    if (t.num_points() <= 65534) {
        const o = s * Uint16Array.BYTES_PER_ELEMENT;
        r = k._malloc(o), e.GetTrianglesUInt16Array(t, o, r), n = new Uint16Array(k.HEAPU16.buffer, r, s).slice();
    } else {
        const o = s * Uint32Array.BYTES_PER_ELEMENT;
        r = k._malloc(o), e.GetTrianglesUInt32Array(t, o, r), n = new Uint32Array(k.HEAPU32.buffer, r, s).slice();
    }
    return k._free(r), n;
}
function Y(e, t, s, r) {
    const n = K[r.componentType], o = X[r.componentType], i = s.num_components(), a = t.num_points() * i, c = a * o.BYTES_PER_ELEMENT, u = k._malloc(c);
    e.GetAttributeDataArrayForAllPoints(t, s, n, c, u);
    const l = new o(k.HEAPF32.buffer, u, a).slice();
    return k._free(u), l;
}
var Q, W;
!function(e) {
    e[e.EDGEBREAKER = 1] = "EDGEBREAKER", e[e.SEQUENTIAL = 0] = "SEQUENTIAL";
}(Q || (Q = {
})), (function(e) {
    e.POSITION = "POSITION", e.NORMAL = "NORMAL", e.COLOR = "COLOR", e.TEX_COORD = "TEX_COORD", e.GENERIC = "GENERIC";
})(W || (W = {
}));
const J = {
    [W.POSITION]: 14,
    [W.NORMAL]: 10,
    [W.COLOR]: 8,
    [W.TEX_COORD]: 12,
    [W.GENERIC]: 12
}, Z = {
    decodeSpeed: 5,
    encodeSpeed: 5,
    method: Q.EDGEBREAKER,
    quantizationBits: J,
    quantizationVolume: "mesh"
};
function ee(e, t = Z) {
    const s = _({
    }, Z, t);
    s.quantizationBits = _({
    }, J, t.quantizationBits);
    const r = new z.Encoder, n = new z.MeshBuilder, o = new z.Mesh, i = {
    }, a = new z.DracoInt8Array;
    for (const t1 of e.listSemantics()){
        const a = e.getAttribute(t1), c = te(t1), u = se(n, a.getComponentType(), o, z[c], a.getCount(), a.getElementSize(), a.getArray());
        if (-1 === u) throw new Error(`Error compressing "${t1}" attribute.`);
        if (i[t1] = u, "mesh" === s.quantizationVolume || "POSITION" !== t1) r.SetAttributeQuantization(z[c], s.quantizationBits[c]);
        else {
            if ("object" != typeof s.quantizationVolume) throw new Error("Invalid quantization volume state.");
            {
                const { quantizationVolume: e  } = s, t = Math.max(e.max[0] - e.min[0], e.max[1] - e.min[1], e.max[2] - e.min[2]);
                r.SetAttributeExplicitQuantization(z[c], s.quantizationBits[c], a.getElementSize(), e.min, t);
            }
        }
    }
    const c = e.getIndices();
    if (!c) throw new Error("Primitive must have indices.");
    n.AddFacesToMesh(o, c.getCount() / 3, c.getArray()), r.SetSpeedOptions(s.encodeSpeed, s.decodeSpeed), r.SetTrackEncodedProperties(!0), s.method === Q.SEQUENTIAL || e.listTargets().length > 0 ? r.SetEncodingMethod(z.MESH_SEQUENTIAL_ENCODING) : r.SetEncodingMethod(z.MESH_EDGEBREAKER_ENCODING);
    const u = r.EncodeMeshToDracoBuffer(o, a);
    if (u <= 0) throw new Error("Error applying Draco compression.");
    const l = new Uint8Array(u);
    for(let e1 = 0; e1 < u; ++e1)l[e1] = a.GetValue(e1);
    const h = e.getAttribute("POSITION").getCount(), f = r.GetNumberOfEncodedPoints(), g = 3 * r.GetNumberOfEncodedFaces();
    if (e.listTargets().length > 0 && f !== h) throw new Error('Compression reduced vertex count unexpectedly, corrupting morph targets. Applying the "weld" function before compression may resolve the issue.');
    return z.destroy(a), z.destroy(o), z.destroy(n), z.destroy(r), {
        numVertices: f,
        numIndices: g,
        data: l,
        attributeIDs: i
    };
}
function te(e) {
    return "POSITION" === e ? W.POSITION : "NORMAL" === e ? W.NORMAL : e.startsWith("COLOR_") ? W.COLOR : e.startsWith("TEXCOORD_") ? W.TEX_COORD : W.GENERIC;
}
function se(e, t, s, r, n, o, i) {
    switch(t){
        case _core.Accessor.ComponentType.UNSIGNED_BYTE:
            return e.AddUInt8Attribute(s, r, n, o, i);
        case _core.Accessor.ComponentType.BYTE:
            return e.AddInt8Attribute(s, r, n, o, i);
        case _core.Accessor.ComponentType.UNSIGNED_SHORT:
            return e.AddUInt16Attribute(s, r, n, o, i);
        case _core.Accessor.ComponentType.SHORT:
            return e.AddInt16Attribute(s, r, n, o, i);
        case _core.Accessor.ComponentType.UNSIGNED_INT:
            return e.AddUInt32Attribute(s, r, n, o, i);
        case _core.Accessor.ComponentType.FLOAT:
            return e.AddFloatAttribute(s, r, n, o, i);
        default:
            throw new Error(`Unexpected component type, "${t}".`);
    }
}
const re = "KHR_draco_mesh_compression";
class ne extends _core.Extension {
    constructor(...e){
        super(...e), this.extensionName = re, this.prereadTypes = [
            _core.PropertyType.PRIMITIVE
        ], this.prewriteTypes = [
            _core.PropertyType.ACCESSOR
        ], this.readDependencies = [
            "draco3d.decoder"
        ], this.writeDependencies = [
            "draco3d.encoder"
        ], this._decoderModule = null, this._encoderModule = null, this._encoderOptions = {
        };
    }
    install(e, t) {
        return "draco3d.decoder" === e && (this._decoderModule = t, k = this._decoderModule, X = {
            [_core.Accessor.ComponentType.FLOAT]: Float32Array,
            [_core.Accessor.ComponentType.UNSIGNED_INT]: Uint32Array,
            [_core.Accessor.ComponentType.UNSIGNED_SHORT]: Uint16Array,
            [_core.Accessor.ComponentType.UNSIGNED_BYTE]: Uint8Array,
            [_core.Accessor.ComponentType.SHORT]: Int16Array,
            [_core.Accessor.ComponentType.BYTE]: Int8Array
        }, K = {
            [_core.Accessor.ComponentType.FLOAT]: k.DT_FLOAT32,
            [_core.Accessor.ComponentType.UNSIGNED_INT]: k.DT_UINT32,
            [_core.Accessor.ComponentType.UNSIGNED_SHORT]: k.DT_UINT16,
            [_core.Accessor.ComponentType.UNSIGNED_BYTE]: k.DT_UINT8,
            [_core.Accessor.ComponentType.SHORT]: k.DT_INT16,
            [_core.Accessor.ComponentType.BYTE]: k.DT_INT8
        }), "draco3d.encoder" === e && (this._encoderModule = t, z = this._encoderModule), this;
    }
    setEncoderOptions(e) {
        return this._encoderOptions = e, this;
    }
    preread(e) {
        if (!this._decoderModule) throw new Error(`[${re}] Please install extension dependency, "draco3d.decoder".`);
        const t = this.document.getLogger(), s = e.jsonDoc, n = new Map;
        try {
            const o = s.json.meshes || [];
            for (const i of o)for (const o1 of i.primitives){
                if (!o1.extensions || !o1.extensions[re]) continue;
                const i = o1.extensions[re];
                let [a, c] = n.get(i.bufferView) || [];
                if (!c || !a) {
                    const e = s.json.bufferViews[i.bufferView], o = s.json.buffers[e.buffer], u = _core.BufferUtils.toView(o.uri ? s.resources[o.uri] : s.resources[_core.GLB_BUFFER], e.byteOffset || 0, e.byteLength);
                    a = new this._decoderModule.Decoder, c = q(a, u), n.set(i.bufferView, [
                        a,
                        c
                    ]), t.debug(`[${re}] Decompressed ${u.byteLength} bytes.`);
                }
                for(const t1 in o1.attributes){
                    const s = e.jsonDoc.json.accessors[o1.attributes[t1]], r = a.GetAttributeByUniqueId(c, i.attributes[t1]), n = Y(a, c, r, s);
                    e.accessors[o1.attributes[t1]].setArray(n);
                }
                void 0 !== o1.indices && e.accessors[o1.indices].setArray($(a, c));
            }
        } finally{
            for (const [e, t] of Array.from(n.values()))this._decoderModule.destroy(e), this._decoderModule.destroy(t);
        }
        return this;
    }
    read(e) {
        return this;
    }
    prewrite(e, s) {
        if (!this._encoderModule) throw new Error(`[${re}] Please install extension dependency, "draco3d.encoder".`);
        const r = this.document.getLogger();
        r.debug(`[${re}] Compression options: ${JSON.stringify(this._encoderOptions)}`);
        const n = function(e) {
            const s2 = e.getLogger(), r = new Set, n = new Set;
            for (const t of e.getRoot().listMeshes())for (const e1 of t.listPrimitives())e1.getIndices() ? e1.getMode() !== _core.Primitive.Mode.TRIANGLES ? (n.add(e1), s2.warn(`[${re}] Skipping Draco compression on non-TRIANGLES primitive.`)) : r.add(e1) : (n.add(e1), s2.warn(`[${re}] Skipping Draco compression on non-indexed primitive.`));
            const i = e.getRoot().listAccessors(), a = new Map;
            for(let e2 = 0; e2 < i.length; e2++)a.set(i[e2], e2);
            const c = new Map, u = new Set, l = new Map;
            for (const t1 of Array.from(r)){
                let s = oe(t1, a);
                if (u.has(s)) l.set(t1, s);
                else {
                    if (c.has(t1.getIndices())) {
                        const s = t1.getIndices(), r = s.clone();
                        a.set(r, e.getRoot().listAccessors().length - 1), t1.swap(s, r);
                    }
                    for (const s1 of t1.listAttributes())if (c.has(s1)) {
                        const r = s1.clone();
                        a.set(r, e.getRoot().listAccessors().length - 1), t1.swap(s1, r);
                    }
                    s = oe(t1, a), u.add(s), l.set(t1, s), c.set(t1.getIndices(), s);
                    for (const e3 of t1.listAttributes())c.set(e3, s);
                }
            }
            for (const e3 of Array.from(c.keys())){
                const s = new Set(e3.listParents().map((e)=>e.propertyType
                ));
                if (2 !== s.size || !s.has(_core.PropertyType.PRIMITIVE) || !s.has(_core.PropertyType.ROOT)) throw new Error(`[${re}] Compressed accessors must only be used as indices or vertex attributes.`);
            }
            for (const e4 of Array.from(r)){
                const t = l.get(e4), s = e4.getIndices();
                if (c.get(s) !== t || e4.listAttributes().some((e)=>c.get(e) !== t
                )) throw new Error(`[${re}] Draco primitives must share all, or no, accessors.`);
            }
            for (const e5 of Array.from(n)){
                const t = e5.getIndices();
                if (c.has(t) || e5.listAttributes().some((e)=>c.has(e)
                )) throw new Error(`[${re}] Accessor cannot be shared by compressed and uncompressed primitives.`);
            }
            return l;
        }(this.document), i = new Map;
        let a = "mesh";
        "scene" === this._encoderOptions.quantizationVolume && (1 !== this.document.getRoot().listScenes().length ? r.warn(`[${re}]: quantizationVolume=scene requires exactly 1 scene.`) : a = _core.bounds(this.document.getRoot().listScenes().pop()));
        for (const t of Array.from(n.keys())){
            const s = n.get(t);
            if (!s) throw new Error("Unexpected primitive.");
            if (i.has(s)) {
                i.set(s, i.get(s));
                continue;
            }
            const r = t.getIndices(), o = e.jsonDoc.json.accessors, c = ee(t, _({
            }, this._encoderOptions, {
                quantizationVolume: a
            }));
            i.set(s, c);
            const u = e.createAccessorDef(r);
            u.count = c.numIndices, e.accessorIndexMap.set(r, o.length), o.push(u);
            for (const s1 of t.listSemantics()){
                const r = t.getAttribute(s1), n = e.createAccessorDef(r);
                n.count = c.numVertices, e.accessorIndexMap.set(r, o.length), o.push(n);
            }
            const l = t.getAttribute("POSITION").getBuffer() || this.document.getRoot().listBuffers()[0];
            e.otherBufferViews.has(l) || e.otherBufferViews.set(l, []), e.otherBufferViews.get(l).push(c.data);
        }
        return r.debug(`[${re}] Compressed ${n.size} primitives.`), e.extensionData[re] = {
            primitiveHashMap: n,
            primitiveEncodingMap: i
        }, this;
    }
    write(e) {
        const t = e.extensionData[re];
        for (const s of this.document.getRoot().listMeshes()){
            const r = e.jsonDoc.json.meshes[e.meshIndexMap.get(s)];
            for(let n = 0; n < s.listPrimitives().length; n++){
                const o = s.listPrimitives()[n], i = r.primitives[n], a = t.primitiveHashMap.get(o);
                if (!a) continue;
                const c = t.primitiveEncodingMap.get(a);
                i.extensions = i.extensions || {
                }, i.extensions[re] = {
                    bufferView: e.otherBufferViewsIndexMap.get(c.data),
                    attributes: c.attributeIDs
                };
            }
        }
        if (!t.primitiveHashMap.size) {
            const t = e.jsonDoc.json;
            t.extensionsUsed = (t.extensionsUsed || []).filter((e)=>e !== re
            ), t.extensionsRequired = (t.extensionsRequired || []).filter((e)=>e !== re
            );
        }
        return this;
    }
}
function oe(e, t) {
    const s = [], r = e.getIndices();
    s.push(t.get(r));
    for (const r1 of e.listAttributes())s.push(t.get(r1));
    return s.sort().join("|");
}
ne.EXTENSION_NAME = re, ne.EncoderMethod = Q;
class ie extends _core.ExtensionProperty {
    init() {
        this.extensionName = "KHR_lights_punctual", this.propertyType = "Light", this.parentTypes = [
            _core.PropertyType.NODE
        ];
    }
    getDefaults() {
        return Object.assign(super.getDefaults(), {
            color: [
                1,
                1,
                1
            ],
            intensity: 1,
            type: ie.Type.POINT,
            range: null,
            innerConeAngle: 0,
            outerConeAngle: Math.PI / 4
        });
    }
    getColor() {
        return this.get("color");
    }
    setColor(e) {
        return this.set("color", e);
    }
    getColorHex() {
        return _core.ColorUtils.factorToHex(this.getColor());
    }
    setColorHex(e) {
        const t = this.getColor().slice();
        return _core.ColorUtils.hexToFactor(e, t), this.setColor(t);
    }
    getIntensity() {
        return this.get("intensity");
    }
    setIntensity(e) {
        return this.set("intensity", e);
    }
    getType() {
        return this.get("type");
    }
    setType(e) {
        return this.set("type", e);
    }
    getRange() {
        return this.get("range");
    }
    setRange(e) {
        return this.set("range", e);
    }
    getInnerConeAngle() {
        return this.get("innerConeAngle");
    }
    setInnerConeAngle(e) {
        return this.set("innerConeAngle", e);
    }
    getOuterConeAngle() {
        return this.get("outerConeAngle");
    }
    setOuterConeAngle(e) {
        return this.set("outerConeAngle", e);
    }
}
ie.EXTENSION_NAME = "KHR_lights_punctual", ie.Type = {
    POINT: "point",
    SPOT: "spot",
    DIRECTIONAL: "directional"
};
const ae = "KHR_lights_punctual";
class ce extends _core.Extension {
    constructor(...e){
        super(...e), this.extensionName = ae;
    }
    createLight(e = "") {
        return new ie(this.document.getGraph(), e);
    }
    read(e) {
        const t = e.jsonDoc;
        if (!t.json.extensions || !t.json.extensions[ae]) return this;
        const s = (t.json.extensions[ae].lights || []).map((e)=>{
            var t, s;
            const r = this.createLight().setName(e.name || "").setType(e.type);
            return void 0 !== e.color && r.setColor(e.color), void 0 !== e.intensity && r.setIntensity(e.intensity), void 0 !== e.range && r.setRange(e.range), void 0 !== (null == (t = e.spot) ? void 0 : t.innerConeAngle) && r.setInnerConeAngle(e.spot.innerConeAngle), void 0 !== (null == (s = e.spot) ? void 0 : s.outerConeAngle) && r.setOuterConeAngle(e.spot.outerConeAngle), r;
        });
        return t.json.nodes.forEach((t, r)=>{
            t.extensions && t.extensions[ae] && e.nodes[r].setExtension(ae, s[t.extensions[ae].light]);
        }), this;
    }
    write(e) {
        const t = e.jsonDoc;
        if (0 === this.properties.size) return this;
        const s = [], r = new Map;
        for (const e1 of this.properties){
            const t = e1, n = {
                type: t.getType()
            };
            _core.MathUtils.eq(t.getColor(), [
                1,
                1,
                1
            ]) || (n.color = t.getColor()), 1 !== t.getIntensity() && (n.intensity = t.getIntensity()), null != t.getRange() && (n.range = t.getRange()), t.getName() && (n.name = t.getName()), t.getType() === ie.Type.SPOT && (n.spot = {
                innerConeAngle: t.getInnerConeAngle(),
                outerConeAngle: t.getOuterConeAngle()
            }), s.push(n), r.set(t, s.length - 1);
        }
        return this.document.getRoot().listNodes().forEach((s)=>{
            const n = s.getExtension(ae);
            if (n) {
                const o = e.nodeIndexMap.get(s), i = t.json.nodes[o];
                i.extensions = i.extensions || {
                }, i.extensions[ae] = {
                    light: r.get(n)
                };
            }
        }), t.json.extensions = t.json.extensions || {
        }, t.json.extensions[ae] = {
            lights: s
        }, this;
    }
}
ce.EXTENSION_NAME = ae;
const { R: ue , G: le , B: he  } = _core.TextureChannel;
class fe extends _core.ExtensionProperty {
    init() {
        this.extensionName = "KHR_materials_clearcoat", this.propertyType = "Clearcoat", this.parentTypes = [
            _core.PropertyType.MATERIAL
        ];
    }
    getDefaults() {
        return Object.assign(super.getDefaults(), {
            clearcoatFactor: 0,
            clearcoatTexture: null,
            clearcoatTextureInfo: new _core.TextureInfo(this.graph, "clearcoatTextureInfo"),
            clearcoatRoughnessFactor: 0,
            clearcoatRoughnessTexture: null,
            clearcoatRoughnessTextureInfo: new _core.TextureInfo(this.graph, "clearcoatRoughnessTextureInfo"),
            clearcoatNormalScale: 1,
            clearcoatNormalTexture: null,
            clearcoatNormalTextureInfo: new _core.TextureInfo(this.graph, "clearcoatNormalTextureInfo")
        });
    }
    getClearcoatFactor() {
        return this.get("clearcoatFactor");
    }
    setClearcoatFactor(e) {
        return this.set("clearcoatFactor", e);
    }
    getClearcoatTexture() {
        return this.getRef("clearcoatTexture");
    }
    getClearcoatTextureInfo() {
        return this.getRef("clearcoatTexture") ? this.getRef("clearcoatTextureInfo") : null;
    }
    setClearcoatTexture(e) {
        return this.setRef("clearcoatTexture", e, {
            channels: ue
        });
    }
    getClearcoatRoughnessFactor() {
        return this.get("clearcoatRoughnessFactor");
    }
    setClearcoatRoughnessFactor(e) {
        return this.set("clearcoatRoughnessFactor", e);
    }
    getClearcoatRoughnessTexture() {
        return this.getRef("clearcoatRoughnessTexture");
    }
    getClearcoatRoughnessTextureInfo() {
        return this.getRef("clearcoatRoughnessTexture") ? this.getRef("clearcoatRoughnessTextureInfo") : null;
    }
    setClearcoatRoughnessTexture(e) {
        return this.setRef("clearcoatRoughnessTexture", e, {
            channels: le
        });
    }
    getClearcoatNormalScale() {
        return this.get("clearcoatNormalScale");
    }
    setClearcoatNormalScale(e) {
        return this.set("clearcoatNormalScale", e);
    }
    getClearcoatNormalTexture() {
        return this.getRef("clearcoatNormalTexture");
    }
    getClearcoatNormalTextureInfo() {
        return this.getRef("clearcoatNormalTexture") ? this.getRef("clearcoatNormalTextureInfo") : null;
    }
    setClearcoatNormalTexture(e) {
        return this.setRef("clearcoatNormalTexture", e, {
            channels: ue | le | he
        });
    }
}
fe.EXTENSION_NAME = "KHR_materials_clearcoat";
const ge = "KHR_materials_clearcoat";
class pe extends _core.Extension {
    constructor(...e){
        super(...e), this.extensionName = ge;
    }
    createClearcoat() {
        return new fe(this.document.getGraph());
    }
    read(e) {
        const t = e.jsonDoc, s = t.json.textures || [];
        return (t.json.materials || []).forEach((t, r)=>{
            if (t.extensions && t.extensions[ge]) {
                const n = this.createClearcoat();
                e.materials[r].setExtension(ge, n);
                const o = t.extensions[ge];
                if (void 0 !== o.clearcoatFactor && n.setClearcoatFactor(o.clearcoatFactor), void 0 !== o.clearcoatRoughnessFactor && n.setClearcoatRoughnessFactor(o.clearcoatRoughnessFactor), void 0 !== o.clearcoatTexture) {
                    const t = o.clearcoatTexture;
                    n.setClearcoatTexture(e.textures[s[t.index].source]), e.setTextureInfo(n.getClearcoatTextureInfo(), t);
                }
                if (void 0 !== o.clearcoatRoughnessTexture) {
                    const t = o.clearcoatRoughnessTexture;
                    n.setClearcoatRoughnessTexture(e.textures[s[t.index].source]), e.setTextureInfo(n.getClearcoatRoughnessTextureInfo(), t);
                }
                if (void 0 !== o.clearcoatNormalTexture) {
                    const t = o.clearcoatNormalTexture;
                    n.setClearcoatNormalTexture(e.textures[s[t.index].source]), e.setTextureInfo(n.getClearcoatNormalTextureInfo(), t), void 0 !== t.scale && n.setClearcoatNormalScale(t.scale);
                }
            }
        }), this;
    }
    write(e) {
        const t = e.jsonDoc;
        return this.document.getRoot().listMaterials().forEach((s)=>{
            const r = s.getExtension(ge);
            if (r) {
                const n = e.materialIndexMap.get(s), o = t.json.materials[n];
                o.extensions = o.extensions || {
                };
                const i = o.extensions[ge] = {
                    clearcoatFactor: r.getClearcoatFactor(),
                    clearcoatRoughnessFactor: r.getClearcoatRoughnessFactor()
                };
                if (r.getClearcoatTexture()) {
                    const t = r.getClearcoatTexture(), s = r.getClearcoatTextureInfo();
                    i.clearcoatTexture = e.createTextureInfoDef(t, s);
                }
                if (r.getClearcoatRoughnessTexture()) {
                    const t = r.getClearcoatRoughnessTexture(), s = r.getClearcoatRoughnessTextureInfo();
                    i.clearcoatRoughnessTexture = e.createTextureInfoDef(t, s);
                }
                if (r.getClearcoatNormalTexture()) {
                    const t = r.getClearcoatNormalTexture(), s = r.getClearcoatNormalTextureInfo();
                    i.clearcoatNormalTexture = e.createTextureInfoDef(t, s), 1 !== r.getClearcoatNormalScale() && (i.clearcoatNormalTexture.scale = r.getClearcoatNormalScale());
                }
            }
        }), this;
    }
}
pe.EXTENSION_NAME = ge;
class xe extends _core.ExtensionProperty {
    init() {
        this.extensionName = "KHR_materials_emissive_strength", this.propertyType = "EmissiveStrength", this.parentTypes = [
            _core.PropertyType.MATERIAL
        ];
    }
    getDefaults() {
        return Object.assign(super.getDefaults(), {
            emissiveStrength: 1
        });
    }
    getEmissiveStrength() {
        return this.get("emissiveStrength");
    }
    setEmissiveStrength(e) {
        return this.set("emissiveStrength", e);
    }
}
xe.EXTENSION_NAME = "KHR_materials_emissive_strength";
const Te = "KHR_materials_emissive_strength";
class de extends _core.Extension {
    constructor(...e){
        super(...e), this.extensionName = Te;
    }
    createEmissiveStrength() {
        return new xe(this.document.getGraph());
    }
    read(e) {
        return (e.jsonDoc.json.materials || []).forEach((t, s)=>{
            if (t.extensions && t.extensions[Te]) {
                const r = this.createEmissiveStrength();
                e.materials[s].setExtension(Te, r);
                const n = t.extensions[Te];
                void 0 !== n.emissiveStrength && r.setEmissiveStrength(n.emissiveStrength);
            }
        }), this;
    }
    write(e) {
        const t = e.jsonDoc;
        return this.document.getRoot().listMaterials().forEach((s)=>{
            const r = s.getExtension(Te);
            if (r) {
                const n = e.materialIndexMap.get(s), o = t.json.materials[n];
                o.extensions = o.extensions || {
                }, o.extensions[Te] = {
                    emissiveStrength: r.getEmissiveStrength()
                };
            }
        }), this;
    }
}
de.EXTENSION_NAME = Te;
class me extends _core.ExtensionProperty {
    init() {
        this.extensionName = "KHR_materials_ior", this.propertyType = "IOR", this.parentTypes = [
            _core.PropertyType.MATERIAL
        ];
    }
    getDefaults() {
        return Object.assign(super.getDefaults(), {
            ior: 0
        });
    }
    getIOR() {
        return this.get("ior");
    }
    setIOR(e) {
        return this.set("ior", e);
    }
}
me.EXTENSION_NAME = "KHR_materials_ior";
const Ee = "KHR_materials_ior";
class Ne extends _core.Extension {
    constructor(...e){
        super(...e), this.extensionName = Ee;
    }
    createIOR() {
        return new me(this.document.getGraph());
    }
    read(e) {
        return (e.jsonDoc.json.materials || []).forEach((t, s)=>{
            if (t.extensions && t.extensions[Ee]) {
                const r = this.createIOR();
                e.materials[s].setExtension(Ee, r);
                const n = t.extensions[Ee];
                void 0 !== n.ior && r.setIOR(n.ior);
            }
        }), this;
    }
    write(e) {
        const t = e.jsonDoc;
        return this.document.getRoot().listMaterials().forEach((s)=>{
            const r = s.getExtension(Ee);
            if (r) {
                const n = e.materialIndexMap.get(s), o = t.json.materials[n];
                o.extensions = o.extensions || {
                }, o.extensions[Ee] = {
                    ior: r.getIOR()
                };
            }
        }), this;
    }
}
Ne.EXTENSION_NAME = Ee;
const { R: Re , G: Ie , B: _e , A: Se  } = _core.TextureChannel;
class Ae extends _core.ExtensionProperty {
    init() {
        this.extensionName = "KHR_materials_pbrSpecularGlossiness", this.propertyType = "PBRSpecularGlossiness", this.parentTypes = [
            _core.PropertyType.MATERIAL
        ];
    }
    getDefaults() {
        return Object.assign(super.getDefaults(), {
            diffuseFactor: [
                1,
                1,
                1,
                1
            ],
            diffuseTexture: null,
            diffuseTextureInfo: new _core.TextureInfo(this.graph, "diffuseTextureInfo"),
            specularFactor: [
                1,
                1,
                1
            ],
            glossinessFactor: 1,
            specularGlossinessTexture: null,
            specularGlossinessTextureInfo: new _core.TextureInfo(this.graph, "specularGlossinessTextureInfo")
        });
    }
    getDiffuseFactor() {
        return this.get("diffuseFactor");
    }
    setDiffuseFactor(e) {
        return this.set("diffuseFactor", e);
    }
    getDiffuseHex() {
        return _core.ColorUtils.factorToHex(this.getDiffuseFactor());
    }
    setDiffuseHex(e) {
        const t = this.getDiffuseFactor().slice();
        return this.setDiffuseFactor(_core.ColorUtils.hexToFactor(e, t));
    }
    getDiffuseTexture() {
        return this.getRef("diffuseTexture");
    }
    getDiffuseTextureInfo() {
        return this.getRef("diffuseTexture") ? this.getRef("diffuseTextureInfo") : null;
    }
    setDiffuseTexture(e) {
        return this.setRef("diffuseTexture", e, {
            channels: Re | Ie | _e | Se
        });
    }
    getSpecularFactor() {
        return this.get("specularFactor");
    }
    setSpecularFactor(e) {
        return this.set("specularFactor", e);
    }
    getGlossinessFactor() {
        return this.get("glossinessFactor");
    }
    setGlossinessFactor(e) {
        return this.set("glossinessFactor", e);
    }
    getSpecularGlossinessTexture() {
        return this.getRef("specularGlossinessTexture");
    }
    getSpecularGlossinessTextureInfo() {
        return this.getRef("specularGlossinessTexture") ? this.getRef("specularGlossinessTextureInfo") : null;
    }
    setSpecularGlossinessTexture(e) {
        return this.setRef("specularGlossinessTexture", e, {
            channels: Re | Ie | _e | Se
        });
    }
}
Ae.EXTENSION_NAME = "KHR_materials_pbrSpecularGlossiness";
const ye = "KHR_materials_pbrSpecularGlossiness";
class Ce extends _core.Extension {
    constructor(...e){
        super(...e), this.extensionName = ye;
    }
    createPBRSpecularGlossiness() {
        return new Ae(this.document.getGraph());
    }
    read(e) {
        const t = e.jsonDoc, s = t.json.textures || [];
        return (t.json.materials || []).forEach((t, r)=>{
            if (t.extensions && t.extensions[ye]) {
                const n = this.createPBRSpecularGlossiness();
                e.materials[r].setExtension(ye, n);
                const o = t.extensions[ye];
                if (void 0 !== o.diffuseFactor && n.setDiffuseFactor(o.diffuseFactor), void 0 !== o.specularFactor && n.setSpecularFactor(o.specularFactor), void 0 !== o.glossinessFactor && n.setGlossinessFactor(o.glossinessFactor), void 0 !== o.diffuseTexture) {
                    const t = o.diffuseTexture;
                    n.setDiffuseTexture(e.textures[s[t.index].source]), e.setTextureInfo(n.getDiffuseTextureInfo(), t);
                }
                if (void 0 !== o.specularGlossinessTexture) {
                    const t = o.specularGlossinessTexture;
                    n.setSpecularGlossinessTexture(e.textures[s[t.index].source]), e.setTextureInfo(n.getSpecularGlossinessTextureInfo(), t);
                }
            }
        }), this;
    }
    write(e) {
        const t = e.jsonDoc;
        return this.document.getRoot().listMaterials().forEach((s)=>{
            const r = s.getExtension(ye);
            if (r) {
                const n = e.materialIndexMap.get(s), o = t.json.materials[n];
                o.extensions = o.extensions || {
                };
                const i = o.extensions[ye] = {
                    diffuseFactor: r.getDiffuseFactor(),
                    specularFactor: r.getSpecularFactor(),
                    glossinessFactor: r.getGlossinessFactor()
                };
                if (r.getDiffuseTexture()) {
                    const t = r.getDiffuseTexture(), s = r.getDiffuseTextureInfo();
                    i.diffuseTexture = e.createTextureInfoDef(t, s);
                }
                if (r.getSpecularGlossinessTexture()) {
                    const t = r.getSpecularGlossinessTexture(), s = r.getSpecularGlossinessTextureInfo();
                    i.specularGlossinessTexture = e.createTextureInfoDef(t, s);
                }
            }
        }), this;
    }
}
Ce.EXTENSION_NAME = ye;
const { R: Oe , G: Me , B: we , A: De  } = _core.TextureChannel;
class be extends _core.ExtensionProperty {
    init() {
        this.extensionName = "KHR_materials_sheen", this.propertyType = "Sheen", this.parentTypes = [
            _core.PropertyType.MATERIAL
        ];
    }
    getDefaults() {
        return Object.assign(super.getDefaults(), {
            sheenColorFactor: [
                0,
                0,
                0
            ],
            sheenColorTexture: null,
            sheenColorTextureInfo: new _core.TextureInfo(this.graph, "sheenColorTextureInfo"),
            sheenRoughnessFactor: 0,
            sheenRoughnessTexture: null,
            sheenRoughnessTextureInfo: new _core.TextureInfo(this.graph, "sheenRoughnessTextureInfo")
        });
    }
    getSheenColorFactor() {
        return this.get("sheenColorFactor");
    }
    getSheenColorHex() {
        return _core.ColorUtils.factorToHex(this.getSheenColorFactor());
    }
    setSheenColorFactor(e) {
        return this.set("sheenColorFactor", e);
    }
    setSheenColorHex(e) {
        const t = this.getSheenColorFactor().slice();
        return this.set("sheenColorFactor", _core.ColorUtils.hexToFactor(e, t));
    }
    getSheenColorTexture() {
        return this.getRef("sheenColorTexture");
    }
    getSheenColorTextureInfo() {
        return this.getRef("sheenColorTexture") ? this.getRef("sheenColorTextureInfo") : null;
    }
    setSheenColorTexture(e) {
        return this.setRef("sheenColorTexture", e, {
            channels: Oe | Me | we
        });
    }
    getSheenRoughnessFactor() {
        return this.get("sheenRoughnessFactor");
    }
    setSheenRoughnessFactor(e) {
        return this.set("sheenRoughnessFactor", e);
    }
    getSheenRoughnessTexture() {
        return this.getRef("sheenRoughnessTexture");
    }
    getSheenRoughnessTextureInfo() {
        return this.getRef("sheenRoughnessTexture") ? this.getRef("sheenRoughnessTextureInfo") : null;
    }
    setSheenRoughnessTexture(e) {
        return this.setRef("sheenRoughnessTexture", e, {
            channels: De
        });
    }
}
be.EXTENSION_NAME = "KHR_materials_sheen";
const Fe = "KHR_materials_sheen";
class je extends _core.Extension {
    constructor(...e){
        super(...e), this.extensionName = Fe;
    }
    createSheen() {
        return new be(this.document.getGraph());
    }
    read(e) {
        const t = e.jsonDoc, s = t.json.textures || [];
        return (t.json.materials || []).forEach((t, r)=>{
            if (t.extensions && t.extensions[Fe]) {
                const n = this.createSheen();
                e.materials[r].setExtension(Fe, n);
                const o = t.extensions[Fe];
                if (void 0 !== o.sheenColorFactor && n.setSheenColorFactor(o.sheenColorFactor), void 0 !== o.sheenRoughnessFactor && n.setSheenRoughnessFactor(o.sheenRoughnessFactor), void 0 !== o.sheenColorTexture) {
                    const t = o.sheenColorTexture;
                    n.setSheenColorTexture(e.textures[s[t.index].source]), e.setTextureInfo(n.getSheenColorTextureInfo(), t);
                }
                if (void 0 !== o.sheenRoughnessTexture) {
                    const t = o.sheenRoughnessTexture;
                    n.setSheenRoughnessTexture(e.textures[s[t.index].source]), e.setTextureInfo(n.getSheenRoughnessTextureInfo(), t);
                }
            }
        }), this;
    }
    write(e) {
        const t = e.jsonDoc;
        return this.document.getRoot().listMaterials().forEach((s)=>{
            const r = s.getExtension(Fe);
            if (r) {
                const n = e.materialIndexMap.get(s), o = t.json.materials[n];
                o.extensions = o.extensions || {
                };
                const i = o.extensions[Fe] = {
                    sheenColorFactor: r.getSheenColorFactor(),
                    sheenRoughnessFactor: r.getSheenRoughnessFactor()
                };
                if (r.getSheenColorTexture()) {
                    const t = r.getSheenColorTexture(), s = r.getSheenColorTextureInfo();
                    i.sheenColorTexture = e.createTextureInfoDef(t, s);
                }
                if (r.getSheenRoughnessTexture()) {
                    const t = r.getSheenRoughnessTexture(), s = r.getSheenRoughnessTextureInfo();
                    i.sheenRoughnessTexture = e.createTextureInfoDef(t, s);
                }
            }
        }), this;
    }
}
je.EXTENSION_NAME = Fe;
const { R: ve , G: Be , B: Ge , A: Le  } = _core.TextureChannel;
class He extends _core.ExtensionProperty {
    init() {
        this.extensionName = "KHR_materials_specular", this.propertyType = "Specular", this.parentTypes = [
            _core.PropertyType.MATERIAL
        ];
    }
    getDefaults() {
        return Object.assign(super.getDefaults(), {
            specularFactor: 1,
            specularTexture: null,
            specularTextureInfo: new _core.TextureInfo(this.graph, "specularTextureInfo"),
            specularColorFactor: [
                1,
                1,
                1
            ],
            specularColorTexture: null,
            specularColorTextureInfo: new _core.TextureInfo(this.graph, "specularColorTextureInfo")
        });
    }
    getSpecularFactor() {
        return this.get("specularFactor");
    }
    setSpecularFactor(e) {
        return this.set("specularFactor", e);
    }
    getSpecularColorFactor() {
        return this.get("specularColorFactor");
    }
    setSpecularColorFactor(e) {
        return this.set("specularColorFactor", e);
    }
    getSpecularColorHex() {
        return _core.ColorUtils.factorToHex(this.getSpecularColorFactor());
    }
    setSpecularColorHex(e) {
        const t = this.getSpecularColorFactor().slice();
        return this.set("specularColorFactor", _core.ColorUtils.hexToFactor(e, t));
    }
    getSpecularTexture() {
        return this.getRef("specularTexture");
    }
    getSpecularTextureInfo() {
        return this.getRef("specularTexture") ? this.getRef("specularTextureInfo") : null;
    }
    setSpecularTexture(e) {
        return this.setRef("specularTexture", e, {
            channels: Le
        });
    }
    getSpecularColorTexture() {
        return this.getRef("specularColorTexture");
    }
    getSpecularColorTextureInfo() {
        return this.getRef("specularColorTexture") ? this.getRef("specularColorTextureInfo") : null;
    }
    setSpecularColorTexture(e) {
        return this.setRef("specularColorTexture", e, {
            channels: ve | Be | Ge
        });
    }
}
He.EXTENSION_NAME = "KHR_materials_specular";
const Ue = "KHR_materials_specular";
class Pe extends _core.Extension {
    constructor(...e){
        super(...e), this.extensionName = Ue;
    }
    createSpecular() {
        return new He(this.document.getGraph());
    }
    read(e) {
        const t = e.jsonDoc, s = t.json.textures || [];
        return (t.json.materials || []).forEach((t, r)=>{
            if (t.extensions && t.extensions[Ue]) {
                const n = this.createSpecular();
                e.materials[r].setExtension(Ue, n);
                const o = t.extensions[Ue];
                if (void 0 !== o.specularFactor && n.setSpecularFactor(o.specularFactor), void 0 !== o.specularColorFactor && n.setSpecularColorFactor(o.specularColorFactor), void 0 !== o.specularTexture) {
                    const t = o.specularTexture;
                    n.setSpecularTexture(e.textures[s[t.index].source]), e.setTextureInfo(n.getSpecularTextureInfo(), t);
                }
                if (void 0 !== o.specularColorTexture) {
                    const t = o.specularColorTexture;
                    n.setSpecularColorTexture(e.textures[s[t.index].source]), e.setTextureInfo(n.getSpecularColorTextureInfo(), t);
                }
            }
        }), this;
    }
    write(e) {
        const t = e.jsonDoc;
        return this.document.getRoot().listMaterials().forEach((s)=>{
            const r = s.getExtension(Ue);
            if (r) {
                const n = e.materialIndexMap.get(s), o = t.json.materials[n];
                o.extensions = o.extensions || {
                };
                const i = o.extensions[Ue] = {
                };
                if (1 !== r.getSpecularFactor() && (i.specularFactor = r.getSpecularFactor()), _core.MathUtils.eq(r.getSpecularColorFactor(), [
                    1,
                    1,
                    1
                ]) || (i.specularColorFactor = r.getSpecularColorFactor()), r.getSpecularTexture()) {
                    const t = r.getSpecularTexture(), s = r.getSpecularTextureInfo();
                    i.specularTexture = e.createTextureInfoDef(t, s);
                }
                if (r.getSpecularColorTexture()) {
                    const t = r.getSpecularColorTexture(), s = r.getSpecularColorTextureInfo();
                    i.specularColorTexture = e.createTextureInfoDef(t, s);
                }
            }
        }), this;
    }
}
Pe.EXTENSION_NAME = Ue;
const { R: Ve  } = _core.TextureChannel;
class ke extends _core.ExtensionProperty {
    init() {
        this.extensionName = "KHR_materials_transmission", this.propertyType = "Transmission", this.parentTypes = [
            _core.PropertyType.MATERIAL
        ];
    }
    getDefaults() {
        return Object.assign(super.getDefaults(), {
            transmissionFactor: 0,
            transmissionTexture: null,
            transmissionTextureInfo: new _core.TextureInfo(this.graph, "transmissionTextureInfo")
        });
    }
    getTransmissionFactor() {
        return this.get("transmissionFactor");
    }
    setTransmissionFactor(e) {
        return this.set("transmissionFactor", e);
    }
    getTransmissionTexture() {
        return this.getRef("transmissionTexture");
    }
    getTransmissionTextureInfo() {
        return this.getRef("transmissionTexture") ? this.getRef("transmissionTextureInfo") : null;
    }
    setTransmissionTexture(e) {
        return this.setRef("transmissionTexture", e, {
            channels: Ve
        });
    }
}
ke.EXTENSION_NAME = "KHR_materials_transmission";
const Xe = "KHR_materials_transmission";
class Ke extends _core.Extension {
    constructor(...e){
        super(...e), this.extensionName = Xe;
    }
    createTransmission() {
        return new ke(this.document.getGraph());
    }
    read(e) {
        const t = e.jsonDoc, s = t.json.textures || [];
        return (t.json.materials || []).forEach((t, r)=>{
            if (t.extensions && t.extensions[Xe]) {
                const n = this.createTransmission();
                e.materials[r].setExtension(Xe, n);
                const o = t.extensions[Xe];
                if (void 0 !== o.transmissionFactor && n.setTransmissionFactor(o.transmissionFactor), void 0 !== o.transmissionTexture) {
                    const t = o.transmissionTexture;
                    n.setTransmissionTexture(e.textures[s[t.index].source]), e.setTextureInfo(n.getTransmissionTextureInfo(), t);
                }
            }
        }), this;
    }
    write(e) {
        const t = e.jsonDoc;
        return this.document.getRoot().listMaterials().forEach((s)=>{
            const r = s.getExtension(Xe);
            if (r) {
                const n = e.materialIndexMap.get(s), o = t.json.materials[n];
                o.extensions = o.extensions || {
                };
                const i = o.extensions[Xe] = {
                    transmissionFactor: r.getTransmissionFactor()
                };
                if (r.getTransmissionTexture()) {
                    const t = r.getTransmissionTexture(), s = r.getTransmissionTextureInfo();
                    i.transmissionTexture = e.createTextureInfoDef(t, s);
                }
            }
        }), this;
    }
}
Ke.EXTENSION_NAME = Xe;
class ze extends _core.ExtensionProperty {
    init() {
        this.extensionName = "KHR_materials_unlit", this.propertyType = "Unlit", this.parentTypes = [
            _core.PropertyType.MATERIAL
        ];
    }
}
ze.EXTENSION_NAME = "KHR_materials_unlit";
const qe = "KHR_materials_unlit";
class $e extends _core.Extension {
    constructor(...e){
        super(...e), this.extensionName = qe;
    }
    createUnlit() {
        return new ze(this.document.getGraph());
    }
    read(e) {
        return (e.jsonDoc.json.materials || []).forEach((t, s)=>{
            t.extensions && t.extensions[qe] && e.materials[s].setExtension(qe, this.createUnlit());
        }), this;
    }
    write(e) {
        const t = e.jsonDoc;
        return this.document.getRoot().listMaterials().forEach((s)=>{
            if (s.getExtension(qe)) {
                const r = e.materialIndexMap.get(s), n = t.json.materials[r];
                n.extensions = n.extensions || {
                }, n.extensions[qe] = {
                };
            }
        }), this;
    }
}
$e.EXTENSION_NAME = qe;
class Ye extends _core.ExtensionProperty {
    init() {
        this.extensionName = "KHR_materials_variants", this.propertyType = "Mapping", this.parentTypes = [
            "MappingList"
        ];
    }
    getDefaults() {
        return Object.assign(super.getDefaults(), {
            material: null,
            variants: []
        });
    }
    getMaterial() {
        return this.getRef("material");
    }
    setMaterial(e) {
        return this.setRef("material", e);
    }
    addVariant(e) {
        return this.addRef("variants", e);
    }
    removeVariant(e) {
        return this.removeRef("variants", e);
    }
    listVariants() {
        return this.listRefs("variants");
    }
}
Ye.EXTENSION_NAME = "KHR_materials_variants";
class Qe extends _core.ExtensionProperty {
    init() {
        this.extensionName = "KHR_materials_variants", this.propertyType = "MappingList", this.parentTypes = [
            _core.PropertyType.PRIMITIVE
        ];
    }
    getDefaults() {
        return Object.assign(super.getDefaults(), {
            mappings: []
        });
    }
    addMapping(e) {
        return this.addRef("mappings", e);
    }
    removeMapping(e) {
        return this.removeRef("mappings", e);
    }
    listMappings() {
        return this.listRefs("mappings");
    }
}
Qe.EXTENSION_NAME = "KHR_materials_variants";
class We extends _core.ExtensionProperty {
    init() {
        this.extensionName = "KHR_materials_variants", this.propertyType = "Variant", this.parentTypes = [
            "MappingList"
        ];
    }
}
We.EXTENSION_NAME = "KHR_materials_variants";
const Je = "KHR_materials_variants";
class Ze extends _core.Extension {
    constructor(...e){
        super(...e), this.extensionName = Je;
    }
    createMappingList() {
        return new Qe(this.document.getGraph());
    }
    createVariant(e = "") {
        return new We(this.document.getGraph(), e);
    }
    createMapping() {
        return new Ye(this.document.getGraph());
    }
    listVariants() {
        return Array.from(this.properties).filter((e)=>e instanceof We
        );
    }
    read(e) {
        const t = e.jsonDoc;
        if (!t.json.extensions || !t.json.extensions[Je]) return this;
        const s = (t.json.extensions[Je].variants || []).map((e)=>this.createVariant().setName(e.name || "")
        );
        return (t.json.meshes || []).forEach((t, r)=>{
            const n = e.meshes[r];
            (t.primitives || []).forEach((t, r)=>{
                if (!t.extensions || !t.extensions[Je]) return;
                const o = this.createMappingList(), i = t.extensions[Je];
                for (const t1 of i.mappings){
                    const r = this.createMapping();
                    void 0 !== t1.material && r.setMaterial(e.materials[t1.material]);
                    for (const e1 of t1.variants || [])r.addVariant(s[e1]);
                    o.addMapping(r);
                }
                n.listPrimitives()[r].setExtension(Je, o);
            });
        }), this;
    }
    write(e) {
        const t = e.jsonDoc, s = this.listVariants();
        if (!s.length) return this;
        const r = [], n = new Map;
        for (const t1 of s)n.set(t1, r.length), r.push(e.createPropertyDef(t1));
        for (const t2 of this.document.getRoot().listMeshes()){
            const s = e.meshIndexMap.get(t2);
            t2.listPrimitives().forEach((t, r)=>{
                const o = t.getExtension(Je);
                if (!o) return;
                const i = e.jsonDoc.json.meshes[s].primitives[r], a = o.listMappings().map((t)=>{
                    const s = e.createPropertyDef(t), r = t.getMaterial();
                    return r && (s.material = e.materialIndexMap.get(r)), s.variants = t.listVariants().map((e)=>n.get(e)
                    ), s;
                });
                i.extensions = i.extensions || {
                }, i.extensions[Je] = {
                    mappings: a
                };
            });
        }
        return t.json.extensions = t.json.extensions || {
        }, t.json.extensions[Je] = {
            variants: r
        }, this;
    }
}
Ze.EXTENSION_NAME = Je;
const { G: et  } = _core.TextureChannel;
class tt extends _core.ExtensionProperty {
    init() {
        this.extensionName = "KHR_materials_volume", this.propertyType = "Volume", this.parentTypes = [
            _core.PropertyType.MATERIAL
        ];
    }
    getDefaults() {
        return Object.assign(super.getDefaults(), {
            thicknessFactor: 0,
            thicknessTexture: null,
            thicknessTextureInfo: new _core.TextureInfo(this.graph, "thicknessTexture"),
            attenuationDistance: Infinity,
            attenuationColor: [
                1,
                1,
                1
            ]
        });
    }
    getThicknessFactor() {
        return this.get("thicknessFactor");
    }
    setThicknessFactor(e) {
        return this.set("thicknessFactor", e);
    }
    getThicknessTexture() {
        return this.getRef("thicknessTexture");
    }
    getThicknessTextureInfo() {
        return this.getRef("thicknessTexture") ? this.getRef("thicknessTextureInfo") : null;
    }
    setThicknessTexture(e) {
        return this.setRef("thicknessTexture", e, {
            channels: et
        });
    }
    getAttenuationDistance() {
        return this.get("attenuationDistance");
    }
    setAttenuationDistance(e) {
        return this.set("attenuationDistance", e);
    }
    getAttenuationColor() {
        return this.get("attenuationColor");
    }
    setAttenuationColor(e) {
        return this.set("attenuationColor", e);
    }
    getAttenuationColorHex() {
        return _core.ColorUtils.factorToHex(this.getAttenuationColor());
    }
    setAttenuationColorHex(e) {
        const t = this.getAttenuationColor().slice();
        return this.set("attenuationColor", _core.ColorUtils.hexToFactor(e, t));
    }
}
tt.EXTENSION_NAME = "KHR_materials_volume";
const st = "KHR_materials_volume";
class rt extends _core.Extension {
    constructor(...e){
        super(...e), this.extensionName = st;
    }
    createVolume() {
        return new tt(this.document.getGraph());
    }
    read(e) {
        const t = e.jsonDoc, s = t.json.textures || [];
        return (t.json.materials || []).forEach((t, r)=>{
            if (t.extensions && t.extensions[st]) {
                const n = this.createVolume();
                e.materials[r].setExtension(st, n);
                const o = t.extensions[st];
                if (void 0 !== o.thicknessFactor && n.setThicknessFactor(o.thicknessFactor), void 0 !== o.attenuationDistance && n.setAttenuationDistance(o.attenuationDistance), void 0 !== o.attenuationColor && n.setAttenuationColor(o.attenuationColor), void 0 !== o.thicknessTexture) {
                    const t = o.thicknessTexture;
                    n.setThicknessTexture(e.textures[s[t.index].source]), e.setTextureInfo(n.getThicknessTextureInfo(), t);
                }
            }
        }), this;
    }
    write(e) {
        const t = e.jsonDoc;
        return this.document.getRoot().listMaterials().forEach((s)=>{
            const r = s.getExtension(st);
            if (r) {
                const n = e.materialIndexMap.get(s), o = t.json.materials[n];
                o.extensions = o.extensions || {
                };
                const i = o.extensions[st] = {
                };
                if (r.getThicknessFactor() > 0 && (i.thicknessFactor = r.getThicknessFactor()), Number.isFinite(r.getAttenuationDistance()) && (i.attenuationDistance = r.getAttenuationDistance()), _core.MathUtils.eq(r.getAttenuationColor(), [
                    1,
                    1,
                    1
                ]) || (i.attenuationColor = r.getAttenuationColor()), r.getThicknessTexture()) {
                    const t = r.getThicknessTexture(), s = r.getThicknessTextureInfo();
                    i.thicknessTexture = e.createTextureInfoDef(t, s);
                }
            }
        }), this;
    }
}
rt.EXTENSION_NAME = st;
const nt = "KHR_mesh_quantization";
class ot extends _core.Extension {
    constructor(...e){
        super(...e), this.extensionName = nt;
    }
    read(e) {
        return this;
    }
    write(e) {
        return this;
    }
}
ot.EXTENSION_NAME = nt;
const it = "KHR_texture_basisu";
class at {
    match(e) {
        return 171 === e[0] && 75 === e[1] && 84 === e[2] && 88 === e[3] && 32 === e[4] && 50 === e[5] && 48 === e[6] && 187 === e[7] && 13 === e[8] && 10 === e[9] && 26 === e[10] && 10 === e[11];
    }
    getSize(e) {
        const t = _ktxParse.read(e);
        return [
            t.pixelWidth,
            t.pixelHeight
        ];
    }
    getChannels(e) {
        const t = _ktxParse.read(e).dataFormatDescriptor[0];
        if (t.colorModel === _ktxParse.KTX2Model.ETC1S) return 2 === t.samples.length && 15 == (15 & t.samples[1].channelID) ? 4 : 3;
        if (t.colorModel === _ktxParse.KTX2Model.UASTC) return 3 == (15 & t.samples[0].channelID) ? 4 : 3;
        throw new Error(`Unexpected KTX2 colorModel, "${t.colorModel}".`);
    }
    getGPUByteLength(e) {
        const t = _ktxParse.read(e), s = this.getChannels(e) > 3;
        let r = 0;
        for(let e1 = 0; e1 < t.levels.length; e1++){
            const n = t.levels[e1];
            r += n.uncompressedByteLength ? n.uncompressedByteLength : Math.max(1, Math.floor(t.pixelWidth / Math.pow(2, e1))) / 4 * (Math.max(1, Math.floor(t.pixelHeight / Math.pow(2, e1))) / 4) * (s ? 16 : 8);
        }
        return r;
    }
}
class ct extends _core.Extension {
    constructor(...e){
        super(...e), this.extensionName = it, this.prereadTypes = [
            _core.PropertyType.TEXTURE
        ];
    }
    static register() {
        _core.ImageUtils.registerFormat("image/ktx2", new at);
    }
    preread(e) {
        return e.jsonDoc.json.textures.forEach((e)=>{
            e.extensions && e.extensions[it] && (e.source = e.extensions[it].source);
        }), this;
    }
    read(e) {
        return this;
    }
    write(e) {
        const t = e.jsonDoc;
        return this.document.getRoot().listTextures().forEach((s)=>{
            if ("image/ktx2" === s.getMimeType()) {
                const r = e.imageIndexMap.get(s);
                t.json.textures.forEach((e)=>{
                    e.source === r && (e.extensions = e.extensions || {
                    }, e.extensions[it] = {
                        source: e.source
                    }, delete e.source);
                });
            }
        }), this;
    }
}
ct.EXTENSION_NAME = it;
class ut extends _core.ExtensionProperty {
    init() {
        this.extensionName = "KHR_texture_transform", this.propertyType = "Transform", this.parentTypes = [
            _core.PropertyType.TEXTURE_INFO
        ];
    }
    getDefaults() {
        return Object.assign(super.getDefaults(), {
            offset: [
                0,
                0
            ],
            rotation: 0,
            scale: [
                1,
                1
            ],
            texCoord: null
        });
    }
    getOffset() {
        return this.get("offset");
    }
    setOffset(e) {
        return this.set("offset", e);
    }
    getRotation() {
        return this.get("rotation");
    }
    setRotation(e) {
        return this.set("rotation", e);
    }
    getScale() {
        return this.get("scale");
    }
    setScale(e) {
        return this.set("scale", e);
    }
    getTexCoord() {
        return this.get("texCoord");
    }
    setTexCoord(e) {
        return this.set("texCoord", e);
    }
}
ut.EXTENSION_NAME = "KHR_texture_transform";
const lt = "KHR_texture_transform";
class ht extends _core.Extension {
    constructor(...e){
        super(...e), this.extensionName = lt;
    }
    createTransform() {
        return new ut(this.document.getGraph());
    }
    read(e) {
        for (const [t, s] of Array.from(e.textureInfos.entries())){
            if (!s.extensions || !s.extensions[lt]) continue;
            const e = this.createTransform(), r = s.extensions[lt];
            void 0 !== r.offset && e.setOffset(r.offset), void 0 !== r.rotation && e.setRotation(r.rotation), void 0 !== r.scale && e.setScale(r.scale), void 0 !== r.texCoord && e.setTexCoord(r.texCoord), t.setExtension(lt, e);
        }
        return this;
    }
    write(e) {
        const t = Array.from(e.textureInfoDefMap.entries());
        for (const [e1, s] of t){
            const t = e1.getExtension(lt);
            if (!t) continue;
            s.extensions = s.extensions || {
            };
            const r = {
            }, n = _core.MathUtils.eq;
            n(t.getOffset(), [
                0,
                0
            ]) || (r.offset = t.getOffset()), 0 !== t.getRotation() && (r.rotation = t.getRotation()), n(t.getScale(), [
                1,
                1
            ]) || (r.scale = t.getScale()), null != t.getTexCoord() && (r.texCoord = t.getTexCoord()), s.extensions[lt] = r;
        }
        return this;
    }
}
ht.EXTENSION_NAME = lt;
const ft = [
    _core.PropertyType.ROOT,
    _core.PropertyType.SCENE,
    _core.PropertyType.NODE,
    _core.PropertyType.MESH,
    _core.PropertyType.MATERIAL,
    _core.PropertyType.TEXTURE,
    _core.PropertyType.ANIMATION
];
class gt extends _core.ExtensionProperty {
    init() {
        this.extensionName = "KHR_xmp_json_ld", this.propertyType = "Packet", this.parentTypes = ft;
    }
    getDefaults() {
        return Object.assign(super.getDefaults(), {
            context: {
            },
            properties: {
            }
        });
    }
    getContext() {
        return this.get("context");
    }
    setContext(e) {
        return this.set("context", _({
        }, e));
    }
    listProperties() {
        return Object.keys(this.get("properties"));
    }
    getProperty(e) {
        const t = this.get("properties");
        return e in t ? t[e] : null;
    }
    setProperty(e, t) {
        this._assertContext(e);
        const s = _({
        }, this.get("properties"));
        return t ? s[e] = t : delete s[e], this.set("properties", s);
    }
    toJSONLD() {
        return _({
            "@context": pt(this.get("context"))
        }, pt(this.get("properties")));
    }
    fromJSONLD(e) {
        const t = (e = pt(e))["@context"];
        return t && this.set("context", t), delete e["@context"], this.set("properties", e);
    }
    _assertContext(e) {
        if (!(e.split(":")[0] in this.get("context"))) throw new Error(`KHR_xmp_json_ld: Missing context for term, "${e}".`);
    }
}
function pt(e) {
    return JSON.parse(JSON.stringify(e));
}
gt.EXTENSION_NAME = "KHR_xmp_json_ld";
const xt = "KHR_xmp_json_ld";
class Tt extends _core.Extension {
    constructor(...e){
        super(...e), this.extensionName = xt;
    }
    createPacket() {
        return new gt(this.document.getGraph());
    }
    listPackets() {
        return Array.from(this.properties);
    }
    read(e) {
        var t;
        const s = null == (t = e.jsonDoc.json.extensions) ? void 0 : t[xt];
        if (!s || !s.packets) return this;
        const r = e.jsonDoc.json, n = this.document.getRoot(), o = s.packets.map((e)=>this.createPacket().fromJSONLD(e)
        ), i = [
            [
                r.asset
            ],
            r.scenes,
            r.nodes,
            r.meshes,
            r.materials,
            r.images,
            r.animations
        ], a = [
            [
                n
            ],
            n.listScenes(),
            n.listNodes(),
            n.listMeshes(),
            n.listMaterials(),
            n.listTextures(),
            n.listAnimations()
        ];
        for(let e1 = 0; e1 < i.length; e1++){
            const t = i[e1] || [];
            for(let s = 0; s < t.length; s++){
                const r = t[s];
                r.extensions && r.extensions[xt] && a[e1][s].setExtension(xt, o[r.extensions[xt].packet]);
            }
        }
        return this;
    }
    write(e) {
        const { json: s  } = e.jsonDoc, r = [];
        for (const n of this.properties){
            r.push(n.toJSONLD());
            for (const o of n.listParents()){
                let n;
                switch(o.propertyType){
                    case _core.PropertyType.ROOT:
                        n = s.asset;
                        break;
                    case _core.PropertyType.SCENE:
                        n = s.scenes[e.sceneIndexMap.get(o)];
                        break;
                    case _core.PropertyType.NODE:
                        n = s.nodes[e.nodeIndexMap.get(o)];
                        break;
                    case _core.PropertyType.MESH:
                        n = s.meshes[e.meshIndexMap.get(o)];
                        break;
                    case _core.PropertyType.MATERIAL:
                        n = s.materials[e.materialIndexMap.get(o)];
                        break;
                    case _core.PropertyType.TEXTURE:
                        n = s.images[e.imageIndexMap.get(o)];
                        break;
                    case _core.PropertyType.ANIMATION:
                        n = s.animations[e.animationIndexMap.get(o)];
                        break;
                    default:
                        n = null, this.document.getLogger().warn(`[${xt}]: Unsupported parent property, "${o.propertyType}"`);
                }
                n && (n.extensions = n.extensions || {
                }, n.extensions[xt] = {
                    packet: r.length - 1
                });
            }
        }
        return r.length > 0 && (s.extensions = s.extensions || {
        }, s.extensions[xt] = {
            packets: r
        }), this;
    }
}
Tt.EXTENSION_NAME = xt;
const dt = [
    ne,
    ce,
    pe,
    de,
    Ne,
    Ce,
    Pe,
    je,
    Ke,
    $e,
    Ze,
    rt,
    ot,
    ct,
    ht,
    Tt
], mt = [
    I,
    L,
    P,
    ...dt
];

},{"@gltf-transform/core":"ifnWt","ktx-parse":"3GILo","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3GILo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "KTX2ChannelETC1S", ()=>l
);
parcelHelpers.export(exports, "KTX2ChannelUASTC", ()=>f
);
parcelHelpers.export(exports, "KTX2Container", ()=>U
);
parcelHelpers.export(exports, "KTX2DescriptorType", ()=>i
);
parcelHelpers.export(exports, "KTX2Flags", ()=>o
);
parcelHelpers.export(exports, "KTX2Model", ()=>s
);
parcelHelpers.export(exports, "KTX2Primaries", ()=>a
);
parcelHelpers.export(exports, "KTX2SupercompressionScheme", ()=>n
);
parcelHelpers.export(exports, "KTX2Transfer", ()=>r
);
parcelHelpers.export(exports, "read", ()=>p
);
parcelHelpers.export(exports, "write", ()=>y
);
var Buffer = require("buffer").Buffer;
const t2 = new Uint8Array([
    0
]), e = [
    171,
    75,
    84,
    88,
    32,
    50,
    48,
    187,
    13,
    10,
    26,
    10
];
var n, i, s, a, r, o, l, f;
!function(t) {
    t[t.NONE = 0] = "NONE", t[t.BASISLZ = 1] = "BASISLZ", t[t.ZSTD = 2] = "ZSTD", t[t.ZLIB = 3] = "ZLIB";
}(n || (n = {
})), (function(t) {
    t[t.BASICFORMAT = 0] = "BASICFORMAT";
})(i || (i = {
})), (function(t) {
    t[t.UNSPECIFIED = 0] = "UNSPECIFIED", t[t.ETC1S = 163] = "ETC1S", t[t.UASTC = 166] = "UASTC";
})(s || (s = {
})), (function(t) {
    t[t.UNSPECIFIED = 0] = "UNSPECIFIED", t[t.SRGB = 1] = "SRGB";
})(a || (a = {
})), (function(t) {
    t[t.UNSPECIFIED = 0] = "UNSPECIFIED", t[t.LINEAR = 1] = "LINEAR", t[t.SRGB = 2] = "SRGB", t[t.ITU = 3] = "ITU", t[t.NTSC = 4] = "NTSC", t[t.SLOG = 5] = "SLOG", t[t.SLOG2 = 6] = "SLOG2";
})(r || (r = {
})), (function(t) {
    t[t.ALPHA_STRAIGHT = 0] = "ALPHA_STRAIGHT", t[t.ALPHA_PREMULTIPLIED = 1] = "ALPHA_PREMULTIPLIED";
})(o || (o = {
})), (function(t) {
    t[t.RGB = 0] = "RGB", t[t.RRR = 3] = "RRR", t[t.GGG = 4] = "GGG", t[t.AAA = 15] = "AAA";
})(l || (l = {
})), (function(t) {
    t[t.RGB = 0] = "RGB", t[t.RGBA = 3] = "RGBA", t[t.RRR = 4] = "RRR", t[t.RRRG = 5] = "RRRG";
})(f || (f = {
}));
class U {
    constructor(){
        this.vkFormat = 0, this.typeSize = 1, this.pixelWidth = 0, this.pixelHeight = 0, this.pixelDepth = 0, this.layerCount = 0, this.faceCount = 1, this.supercompressionScheme = n.NONE, this.levels = [], this.dataFormatDescriptor = [
            {
                vendorId: 0,
                descriptorType: i.BASICFORMAT,
                versionNumber: 2,
                descriptorBlockSize: 40,
                colorModel: s.UNSPECIFIED,
                colorPrimaries: a.SRGB,
                transferFunction: a.SRGB,
                flags: o.ALPHA_STRAIGHT,
                texelBlockDimension: {
                    x: 4,
                    y: 4,
                    z: 1,
                    w: 1
                },
                bytesPlane: [],
                samples: []
            }
        ], this.keyValue = {
        }, this.globalData = null;
    }
}
class c {
    constructor(t, e, n, i){
        this._dataView = new DataView(t.buffer, t.byteOffset + e, n), this._littleEndian = i, this._offset = 0;
    }
    _nextUint8() {
        const t = this._dataView.getUint8(this._offset);
        return this._offset += 1, t;
    }
    _nextUint16() {
        const t = this._dataView.getUint16(this._offset, this._littleEndian);
        return this._offset += 2, t;
    }
    _nextUint32() {
        const t = this._dataView.getUint32(this._offset, this._littleEndian);
        return this._offset += 4, t;
    }
    _nextUint64() {
        const t = this._dataView.getUint32(this._offset, this._littleEndian) + 2 ** 32 * this._dataView.getUint32(this._offset + 4, this._littleEndian);
        return this._offset += 8, t;
    }
    _skip(t) {
        return this._offset += t, this;
    }
    _scan(t, e = 0) {
        const n = this._offset;
        let i = 0;
        for(; this._dataView.getUint8(this._offset) !== e && i < t;)i++, this._offset++;
        return i < t && this._offset++, new Uint8Array(this._dataView.buffer, this._dataView.byteOffset + n, i);
    }
}
function h(t) {
    return "undefined" != typeof TextEncoder ? (new TextEncoder).encode(t) : Buffer.from(t);
}
function _(t) {
    return "undefined" != typeof TextDecoder ? (new TextDecoder).decode(t) : Buffer.from(t).toString("utf8");
}
function g(t) {
    let e = 0;
    for (const n of t)e += n.byteLength;
    const n1 = new Uint8Array(e);
    let i = 0;
    for (const e1 of t)n1.set(new Uint8Array(e1), i), i += e1.byteLength;
    return n1;
}
function p(t) {
    const n = new Uint8Array(t.buffer, t.byteOffset, e.length);
    if (n[0] !== e[0] || n[1] !== e[1] || n[2] !== e[2] || n[3] !== e[3] || n[4] !== e[4] || n[5] !== e[5] || n[6] !== e[6] || n[7] !== e[7] || n[8] !== e[8] || n[9] !== e[9] || n[10] !== e[10] || n[11] !== e[11]) throw new Error("Missing KTX 2.0 identifier.");
    const i = new U, s = 17 * Uint32Array.BYTES_PER_ELEMENT, a = new c(t, e.length, s, !0);
    i.vkFormat = a._nextUint32(), i.typeSize = a._nextUint32(), i.pixelWidth = a._nextUint32(), i.pixelHeight = a._nextUint32(), i.pixelDepth = a._nextUint32(), i.layerCount = a._nextUint32(), i.faceCount = a._nextUint32();
    const r = a._nextUint32();
    i.supercompressionScheme = a._nextUint32();
    const o = a._nextUint32(), l = a._nextUint32(), f = a._nextUint32(), h = a._nextUint32(), g = a._nextUint64(), p = a._nextUint64(), x = new c(t, e.length + s, 3 * r * 8, !0);
    for(let e1 = 0; e1 < r; e1++)i.levels.push({
        levelData: new Uint8Array(t.buffer, t.byteOffset + x._nextUint64(), x._nextUint64()),
        uncompressedByteLength: x._nextUint64()
    });
    const u = new c(t, o, l, !0), y = {
        vendorId: u._skip(4)._nextUint16(),
        descriptorType: u._nextUint16(),
        versionNumber: u._nextUint16(),
        descriptorBlockSize: u._nextUint16(),
        colorModel: u._nextUint8(),
        colorPrimaries: u._nextUint8(),
        transferFunction: u._nextUint8(),
        flags: u._nextUint8(),
        texelBlockDimension: {
            x: u._nextUint8() + 1,
            y: u._nextUint8() + 1,
            z: u._nextUint8() + 1,
            w: u._nextUint8() + 1
        },
        bytesPlane: [
            u._nextUint8(),
            u._nextUint8(),
            u._nextUint8(),
            u._nextUint8(),
            u._nextUint8(),
            u._nextUint8(),
            u._nextUint8(),
            u._nextUint8()
        ],
        samples: []
    }, D = (y.descriptorBlockSize / 4 - 6) / 4;
    for(let t1 = 0; t1 < D; t1++)y.samples[t1] = {
        bitOffset: u._nextUint16(),
        bitLength: u._nextUint8(),
        channelID: u._nextUint8(),
        samplePosition: [
            u._nextUint8(),
            u._nextUint8(),
            u._nextUint8(),
            u._nextUint8()
        ],
        sampleLower: u._nextUint32(),
        sampleUpper: u._nextUint32()
    };
    i.dataFormatDescriptor.length = 0, i.dataFormatDescriptor.push(y);
    const b = new c(t, f, h, !0);
    for(; b._offset < h;){
        const t = b._nextUint32(), e = b._scan(t), n = _(e), s = b._scan(t - e.byteLength);
        i.keyValue[n] = n.match(/^ktx/i) ? _(s) : s, b._offset % 4 && b._skip(4 - b._offset % 4);
    }
    if (p <= 0) return i;
    const d = new c(t, g, p, !0), B = d._nextUint16(), w = d._nextUint16(), A = d._nextUint32(), S = d._nextUint32(), m = d._nextUint32(), L = d._nextUint32(), I = [];
    for(let t3 = 0; t3 < r; t3++)I.push({
        imageFlags: d._nextUint32(),
        rgbSliceByteOffset: d._nextUint32(),
        rgbSliceByteLength: d._nextUint32(),
        alphaSliceByteOffset: d._nextUint32(),
        alphaSliceByteLength: d._nextUint32()
    });
    const R = g + d._offset, E = R + A, T = E + S, O = T + m, P = new Uint8Array(t.buffer, t.byteOffset + R, A), C = new Uint8Array(t.buffer, t.byteOffset + E, S), F = new Uint8Array(t.buffer, t.byteOffset + T, m), G = new Uint8Array(t.buffer, t.byteOffset + O, L);
    return i.globalData = {
        endpointCount: B,
        selectorCount: w,
        imageDescs: I,
        endpointsData: P,
        selectorsData: C,
        tablesData: F,
        extendedData: G
    }, i;
}
function x() {
    return (x = Object.assign || function(t) {
        for(var e = 1; e < arguments.length; e++){
            var n = arguments[e];
            for(var i in n)Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
    }).apply(this, arguments);
}
const u = {
    keepWriter: !1
};
function y(n, s = {
}) {
    s = x({
    }, u, s);
    let a = new ArrayBuffer(0);
    if (n.globalData) {
        const t = new ArrayBuffer(20 + 5 * n.globalData.imageDescs.length * 4), e = new DataView(t);
        e.setUint16(0, n.globalData.endpointCount, !0), e.setUint16(2, n.globalData.selectorCount, !0), e.setUint32(4, n.globalData.endpointsData.byteLength, !0), e.setUint32(8, n.globalData.selectorsData.byteLength, !0), e.setUint32(12, n.globalData.tablesData.byteLength, !0), e.setUint32(16, n.globalData.extendedData.byteLength, !0);
        for(let t1 = 0; t1 < n.globalData.imageDescs.length; t1++){
            const i = n.globalData.imageDescs[t1];
            e.setUint32(20 + 5 * t1 * 4 + 0, i.imageFlags, !0), e.setUint32(20 + 5 * t1 * 4 + 4, i.rgbSliceByteOffset, !0), e.setUint32(20 + 5 * t1 * 4 + 8, i.rgbSliceByteLength, !0), e.setUint32(20 + 5 * t1 * 4 + 12, i.alphaSliceByteOffset, !0), e.setUint32(20 + 5 * t1 * 4 + 16, i.alphaSliceByteLength, !0);
        }
        a = g([
            t,
            n.globalData.endpointsData,
            n.globalData.selectorsData,
            n.globalData.tablesData,
            n.globalData.extendedData
        ]);
    }
    const r = [];
    let o = n.keyValue;
    s.keepWriter || (o = x({
    }, n.keyValue, {
        KTXwriter: "KTX-Parse v0.2.2"
    }));
    for(const e1 in o){
        const n = o[e1], i = h(e1), s = "string" == typeof n ? h(n) : n, a = i.byteLength + 1 + s.byteLength + 1, l = a % 4 ? 4 - a % 4 : 0;
        r.push(g([
            new Uint32Array([
                a
            ]),
            i,
            t2,
            s,
            t2,
            new Uint8Array(l).fill(0)
        ]));
    }
    const l = g(r);
    if (1 !== n.dataFormatDescriptor.length || n.dataFormatDescriptor[0].descriptorType !== i.BASICFORMAT) throw new Error("Only BASICFORMAT Data Format Descriptor output supported.");
    const f = n.dataFormatDescriptor[0], U = new ArrayBuffer(28 + 16 * f.samples.length), c = new DataView(U);
    c.setUint32(0, U.byteLength, !0), c.setUint16(4, f.vendorId, !0), c.setUint16(6, f.descriptorType, !0), c.setUint16(8, f.versionNumber, !0), c.setUint16(10, f.descriptorBlockSize, !0), c.setUint8(12, f.colorModel), c.setUint8(13, f.colorPrimaries), c.setUint8(14, f.transferFunction), c.setUint8(15, f.flags), c.setUint8(16, f.texelBlockDimension.x - 1), c.setUint8(17, f.texelBlockDimension.y - 1), c.setUint8(18, f.texelBlockDimension.z - 1), c.setUint8(19, f.texelBlockDimension.w - 1);
    for(let t1 = 0; t1 < 8; t1++)c.setUint8(20 + t1, f.bytesPlane[t1]);
    for(let t3 = 0; t3 < f.samples.length; t3++){
        const e = f.samples[t3], n = 28 + 16 * t3;
        c.setUint16(n + 0, e.bitOffset, !0), c.setUint8(n + 2, e.bitLength), c.setUint8(n + 3, e.channelID), c.setUint8(n + 4, e.samplePosition[0]), c.setUint8(n + 5, e.samplePosition[1]), c.setUint8(n + 6, e.samplePosition[2]), c.setUint8(n + 7, e.samplePosition[3]), c.setUint32(n + 8, e.sampleLower, !0), c.setUint32(n + 12, e.sampleUpper, !0);
    }
    const _ = e.length + 68 + 3 * n.levels.length * 8, p = _ + U.byteLength;
    let y = p + l.byteLength;
    y % 8 && (y += 8 - y % 8);
    const D = [], b = new DataView(new ArrayBuffer(3 * n.levels.length * 8));
    let d = y + a.byteLength;
    for(let t4 = 0; t4 < n.levels.length; t4++){
        const e = n.levels[t4];
        D.push(e.levelData), b.setBigUint64(24 * t4 + 0, BigInt(d), !0), b.setBigUint64(24 * t4 + 8, BigInt(e.levelData.byteLength), !0), b.setBigUint64(24 * t4 + 16, BigInt(e.uncompressedByteLength), !0), d += e.levelData.byteLength;
    }
    const B = new ArrayBuffer(68), w = new DataView(B);
    return w.setUint32(0, n.vkFormat, !0), w.setUint32(4, n.typeSize, !0), w.setUint32(8, n.pixelWidth, !0), w.setUint32(12, n.pixelHeight, !0), w.setUint32(16, n.pixelDepth, !0), w.setUint32(20, n.layerCount, !0), w.setUint32(24, n.faceCount, !0), w.setUint32(28, n.levels.length, !0), w.setUint32(32, n.supercompressionScheme, !0), w.setUint32(36, _, !0), w.setUint32(40, U.byteLength, !0), w.setUint32(44, p, !0), w.setUint32(48, l.byteLength, !0), w.setBigUint64(52, BigInt(y), !0), w.setBigUint64(60, BigInt(a.byteLength), !0), new Uint8Array(g([
        new Uint8Array(e).buffer,
        B,
        b.buffer,
        U,
        l,
        new ArrayBuffer(y - (p + l.byteLength)),
        a,
        ...D
    ]));
}

},{"buffer":"bOetu","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["gvakt"], null, "parcelRequire6c07")

//# sourceMappingURL=extensions.modern.2624bd95.js.map
