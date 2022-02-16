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
})({"eAOCX":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "131ec2e9350b81e2";
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

},{}],"5NdCl":[function(require,module,exports) {
module.exports = JSON.parse("{\"object\":{\"uuid\":\"B6BEBD25-292C-4ECC-9729-2C0233CBC257\",\"objectType\":\"Scene\",\"name\":\"Noise Lights\",\"matrix\":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],\"layers\":1,\"children\":[{\"uuid\":\"3EE2BBD4-81F4-4EDB-943B-D2C51B57DE90\",\"objectType\":\"LightDirectional\",\"name\":\"Directional Light 3\",\"matrix\":[1,0,0,0,0,1,0,0,0,0,1,0,-237.92578124999991,164.76562499999997,-500.57809564461786,1],\"layers\":1,\"hiddenMatrix\":[-0.9999997123156268,-1.93628269980192e-7,0.0007585305704416329,0,-3.128779559789258e-20,-0.9999999674192306,-0.0002552675807896979,0,0.0007585305951551435,-0.00025526750735320393,0.9999996797348665,0,-6,-27.999999999999996,3.069544618483633e-12,1],\"interaction\":{\"uuid\":\"8B46CAF9-FBE6-4BB9-B0DC-9F7807F0C2C5\"},\"enableHelper\":true,\"color\":16752369,\"intensity\":1.4,\"shadow\":{\"mapSize\":[1024,1024],\"camera\":{\"uuid\":\"58B25716-6381-4924-A8D8-1766387966DE\",\"type\":\"OrthographicCamera\",\"layers\":1,\"zoom\":1,\"left\":-1250,\"right\":1250,\"top\":1250,\"bottom\":-1250,\"near\":1,\"far\":2500}}},{\"uuid\":\"D18073D1-D9EF-45E7-A084-3246B1D660F8\",\"objectType\":\"LightDirectional\",\"name\":\"Directional Light 2\",\"matrix\":[1,0,0,0,0,1,0,0,0,0,1,0,477.2968750000001,-231.51953124999994,-168.24948481045453,1],\"layers\":1,\"hiddenMatrix\":[-0.9999997123156268,-1.93628269980192e-7,0.0007585305704416329,0,-3.128779559789258e-20,-0.9999999674192306,-0.0002552675807896979,0,0.0007585305951551435,-0.00025526750735320393,0.9999996797348665,0,-6,-27.999999999999996,3.069544618483633e-12,1],\"interaction\":{\"uuid\":\"1FADB747-8FAC-4B7E-9236-C370EDDC3D79\"},\"enableHelper\":true,\"color\":3486719,\"intensity\":1,\"shadow\":{\"mapSize\":[1024,1024],\"camera\":{\"uuid\":\"D50B6EE7-2D6C-44A0-8531-44C54E5DF3C2\",\"type\":\"OrthographicCamera\",\"layers\":1,\"zoom\":1,\"left\":-1250,\"right\":1250,\"top\":1250,\"bottom\":-1250,\"near\":1,\"far\":2500}}},{\"uuid\":\"CFEBD7EC-F3FD-4925-BE9A-C19674F4F089\",\"objectType\":\"LightDirectional\",\"name\":\"Directional Light\",\"matrix\":[1,0,0,0,0,1,0,0,0,0,1,0,-382.38281249999994,293.421875,-217.34,1],\"layers\":1,\"hiddenMatrix\":[-0.9999997123156268,-1.93628269980192e-7,0.0007585305704416329,0,-3.128779559789258e-20,-0.9999999674192306,-0.0002552675807896979,0,0.0007585305951551435,-0.00025526750735320393,0.9999996797348665,0,-6,-27.999999999999996,3.069544618483633e-12,1],\"interaction\":{\"uuid\":\"7006AEA1-F334-4F6F-BF11-4B115CD2AD50\"},\"enableHelper\":true,\"color\":16744548,\"intensity\":1,\"shadow\":{\"mapSize\":[1024,1024],\"camera\":{\"uuid\":\"B0753BB5-D398-4CF6-80FB-17831E65F3FA\",\"type\":\"OrthographicCamera\",\"layers\":1,\"zoom\":1,\"left\":-1250,\"right\":1250,\"top\":1250,\"bottom\":-1250,\"near\":1,\"far\":2500}}},{\"uuid\":\"A8F52A83-3C3B-4D3B-BC99-0C660735BDD9\",\"objectType\":\"LightDirectional\",\"name\":\"Directional Light 4\",\"matrix\":[1,0,0,0,0,1,0,0,0,0,1,0,193.27734374999997,-108.93750000751695,-259.95831426340385,1],\"layers\":1,\"hiddenMatrix\":[-0.9999997123156268,-1.93628269980192e-7,0.0007585305704416329,0,-3.128779559789258e-20,-0.9999999674192306,-0.0002552675807896979,0,0.0007585305951551435,-0.00025526750735320393,0.9999996797348665,0,-6,-27.999999999999996,3.069544618483633e-12,1],\"interaction\":{\"uuid\":\"2DE426BD-6DBF-4014-8F22-C1E1E1D9C005\"},\"enableHelper\":true,\"color\":7518975,\"intensity\":1.9,\"shadow\":{\"mapSize\":[1024,1024],\"camera\":{\"uuid\":\"AEA211A5-3303-427B-8B6E-16F8364B3018\",\"type\":\"OrthographicCamera\",\"layers\":1,\"zoom\":1,\"left\":-1250,\"right\":1250,\"top\":1250,\"bottom\":-1250,\"near\":1,\"far\":2500}}},{\"uuid\":\"6C7A1C8A-BCF0-4639-B16E-EC8B7AEBE50F\",\"objectType\":\"Mesh3D\",\"name\":\"Sphere\",\"matrix\":[0.6639080781247066,0.17159343888387418,-0.7278610825787861,0,0.28877324883974065,0.838993835047253,0.46119340358166794,0,0.6898087231655587,-0.5163768357359848,0.5074631897586197,0,0,0,0,1],\"castShadow\":true,\"receiveShadow\":true,\"layers\":1,\"hiddenMatrix\":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],\"interaction\":{\"uuid\":\"99E830C9-F950-4EBA-98E4-813F05F11F07\",\"selectedState\":0,\"states\":[\"D3DFB775-E53C-4158-A04D-979DC7FFAF26\",\"8516BE1C-DEC7-40FD-9247-7348EFD1934D\"],\"events\":[{\"type\":7,\"ui\":{\"isCollapsed\":false},\"targets\":[{\"easing\":0,\"duration\":2000,\"delay\":0,\"cubicControls\":[0.5,0.05,0.1,0.3],\"springParameters\":{\"mass\":1,\"stiffness\":80,\"damping\":10,\"velocity\":0},\"repeat\":true,\"cycle\":true,\"object\":\"6C7A1C8A-BCF0-4639-B16E-EC8B7AEBE50F\",\"state\":\"8516BE1C-DEC7-40FD-9247-7348EFD1934D\"}]}]},\"geometry\":\"D289F9D4-8EA7-4FE0-94D4-BF3E802C619E\",\"material\":\"BFF058CC-7781-421D-9F26-97818377445E\"},{\"uuid\":\"3B695796-4617-4F45-BF86-E0B33A41DF6B\",\"objectType\":\"CombinedCamera\",\"name\":\"Default Camera\",\"matrix\":[1,0,8.700093410695479e-10,0,4.791715113092164e-19,1,-5.507659385819305e-10,0,-8.700093410695479e-10,5.507659385819305e-10,1,0,-8.700093410695479e-7,5.507659385819276e-7,1000,1],\"layers\":1,\"children\":[{\"uuid\":\"E3F6D54D-4262-4F48-815D-87A431E15474\",\"type\":\"DirectionalLight\",\"name\":\"Default Directional Light\",\"visible\":false,\"layers\":1,\"matrix\":[1,0,0,0,0,1,0,0,0,0,1,0,850000,1300000,1000000,1],\"color\":16777215,\"intensity\":0.75,\"shadow\":{\"camera\":{\"uuid\":\"A365B353-F1AA-4566-BF6A-A7B546E473F0\",\"type\":\"OrthographicCamera\",\"layers\":1,\"zoom\":1,\"left\":-5,\"right\":5,\"top\":5,\"bottom\":-5,\"near\":0.5,\"far\":500}}}],\"hiddenMatrix\":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],\"interaction\":{\"uuid\":\"B2468481-CBDD-4F0F-B576-73B5F8EA49C6\"},\"enableHelper\":false,\"cameraType\":\"OrthographicCamera\",\"targetOffset\":1000,\"isUpVectorFlipped\":false,\"angleOffsetFromUp\":0,\"left\":-960,\"right\":960,\"top\":468.5,\"bottom\":-468.5,\"zoomOrtho\":1.2277376631548256,\"nearOrtho\":-50000,\"far\":50000,\"aspect\":2.049092849519744,\"fov\":45,\"focus\":10,\"filmGauge\":35,\"filmOffset\":0,\"zoomPersp\":1,\"nearPersp\":50},{\"uuid\":\"36878CE4-1A1A-40E5-B27A-7718B3714A24\",\"type\":\"HemisphereLight\",\"name\":\"Default Ambient Light\",\"visible\":false,\"layers\":1,\"matrix\":[1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1],\"color\":13882323,\"intensity\":0.75,\"groundColor\":8553090}],\"activeCamera\":\"3B695796-4617-4F45-BF86-E0B33A41DF6B\",\"camera\":\"3B695796-4617-4F45-BF86-E0B33A41DF6B\",\"directionalLight\":\"E3F6D54D-4262-4F48-815D-87A431E15474\",\"ambientLight\":\"36878CE4-1A1A-40E5-B27A-7718B3714A24\",\"color\":[0.058823529411764705,0.058823529411764705,0.058823529411764705],\"alpha\":0,\"canvas\":{\"mode\":1,\"preset\":\"fullscreen\",\"editorSize\":{\"width\":1920,\"height\":937},\"color\":[0,0,0,0.5]},\"postprocessing\":{\"enabled\":false,\"bloom\":{\"enabled\":false,\"opacity\":1,\"blendFunction\":16,\"intensity\":1,\"luminanceThreshold\":0.9,\"luminanceSmoothing\":0.025,\"blurScale\":1,\"kernelSize\":3},\"chromaticAberration\":{\"enabled\":false,\"opacity\":1,\"blendFunction\":13,\"offset\":[10,10]},\"vignette\":{\"enabled\":false,\"opacity\":1,\"blendFunction\":13,\"eskil\":false,\"darkness\":0.5,\"offset\":0.5},\"noise\":{\"enabled\":false,\"opacity\":1,\"blendFunction\":14},\"colorAverage\":{\"enabled\":false,\"opacity\":1,\"blendFunction\":13},\"hueSaturation\":{\"enabled\":false,\"opacity\":1,\"blendFunction\":13,\"_hue\":0,\"hue\":0,\"saturation\":0},\"brightnessContrast\":{\"enabled\":false,\"opacity\":1,\"blendFunction\":13,\"contrast\":0,\"brightness\":0},\"depthOfField\":{\"enabled\":false,\"opacity\":1,\"blendFunction\":13,\"focalLength\":0.1,\"focusDistance\":0,\"bokehScale\":1},\"pixelation\":{\"enabled\":false,\"opacity\":1,\"blendFunction\":13,\"granularity\":30}}},\"metadata\":{\"version\":1.5,\"type\":\"Object\",\"generator\":\"Object3D.toJSON\"},\"geometries\":[{\"uuid\":\"D289F9D4-8EA7-4FE0-94D4-BF3E802C619E\",\"userData\":{\"parameters\":{\"width\":438,\"widthSegments\":128,\"heightSegments\":128,\"phiStart\":0,\"phiLength\":6.283185307179586,\"thetaStart\":0,\"thetaLength\":3.141592653589793,\"height\":438,\"depth\":438},\"type\":\"SphereGeometry\"}}],\"materials\":[{\"uuid\":\"BFF058CC-7781-421D-9F26-97818377445E\",\"type\":\"ShaderMaterial\",\"transparent\":true,\"depthFunc\":3,\"depthTest\":true,\"depthWrite\":true,\"colorWrite\":true,\"stencilWrite\":false,\"stencilWriteMask\":255,\"stencilFunc\":519,\"stencilRef\":0,\"stencilFuncMask\":255,\"stencilFail\":7680,\"stencilZFail\":7680,\"stencilZPass\":7680,\"polygonOffsetFactor\":1,\"polygonOffsetUnits\":1,\"dithering\":true,\"wireframeLinecap\":\"\",\"wireframeLinejoin\":\"\",\"userData\":{\"type\":\"ToonMaterial\",\"category\":\"Toon\",\"nodeType\":\"ToonNodeMaterial\",\"layers\":{\"id\":5,\"uuid\":\"071FAEA6-B206-4A26-9C8A-E6EEF2D12631\",\"head\":{\"id\":3,\"type\":\"noise\",\"defines\":{},\"uniforms\":{\"f3_scale\":\"E0F09319-27CA-401A-8729-C6C7B5DF5407\",\"f3_size\":\"8D509E87-B1CE-4CD9-8C65-E4D81BB72E8F\",\"f3_move\":\"EED28220-5F94-4D9F-B86D-0803797E97A1\",\"f3_fA\":\"A7C95971-D38D-433A-BE27-C594FCDCF1D0\",\"f3_fB\":\"0C9EAD42-422D-4433-B486-8A6B173A1F53\",\"f3_distortion\":\"FBE8B646-057B-4797-82B4-92B020249B37\",\"f3_colorA\":\"FC9AA6F9-4344-4FEC-8739-69B6C744483E\",\"f3_colorB\":\"F8ACA4F4-D787-4B21-8610-0396660B2004\",\"f3_colorC\":\"15B92719-D45A-4977-B846-2C52F0BE965D\",\"f3_colorD\":\"289ACC1B-987D-448A-A97C-3DA4883F61EA\",\"f3_intA\":\"A884601A-0DD3-4F77-9CAC-146358F84B38\",\"f3_intB\":\"DEBFF2B4-F8A0-4CF0-8259-40C569F8B801\",\"f3_intC\":\"DE6675AB-5EA7-4D05-9654-AC85DAD9A46D\",\"f3_intD\":\"5A509931-2838-4F7F-B3E8-D2373BED31D6\",\"f3_alpha\":\"2374A6F3-5E66-460A-B478-20A398764FE5\",\"f3_mode\":\"E061EBB6-2DC3-45C4-882C-753641418153\",\"f3_noiseType\":\"DA5EFF08-E4C6-4D29-9C68-130F80F73FE6\"},\"next\":{\"id\":2,\"type\":\"displace\",\"defines\":{},\"uniforms\":{\"f2_displacementType\":\"A176EDCD-25FB-45CC-936D-15AB121E746E\",\"f2_offset\":\"F0B20DBD-9E37-4D1C-BE1A-F2FEC8387586\",\"f2_scale\":\"CAD74E9D-3E3B-4B84-81D8-2779F7887486\",\"f2_intensity\":\"07BC28FB-7A40-4840-8FD6-B5D3CBD26FF5\",\"f2_movement\":\"8B44EA60-81AC-4AD4-81C6-76F55616EF0A\",\"f2_alpha\":\"55532955-0B6D-44DA-9A36-97A2D7038694\",\"f2_mode\":\"23AEF727-5237-491A-8CC8-E65BCFDD79A6\",\"f2_noiseType\":\"112528B6-2AC7-43E7-AB13-61A755495CEB\"},\"next\":{\"id\":1,\"type\":\"light\",\"defines\":{},\"uniforms\":{\"f1_alpha\":\"5A01E004-D412-429D-BB07-9647E55AE4A9\",\"f1_mode\":\"7CC9D650-61B2-47C8-A76E-3B8B672A1577\",\"f1_shininess\":\"468B5938-E2E3-4F98-880E-C284C02716FC\",\"f1_specular\":\"8DD40B3E-EF7E-43BA-BAB9-4C595224ADCA\"}}}}}},\"glslVersion\":null,\"defines\":{\"TOON\":1,\"USE_LAYER_DISPLACE\":1},\"extensions\":{\"derivatives\":true},\"vertex\":\"41857328-FB58-45CF-B818-909BA7054987\",\"fragment\":\"41857328-FB58-45CF-B818-909BA7054987\"},{\"metadata\":{\"version\":4.5,\"type\":\"Material\",\"generator\":\"Material.toJSON\"},\"uuid\":\"BB23566B-7CBE-4F9F-9901-E7789AE3992A\",\"type\":\"ShaderMaterial\",\"transparent\":true,\"depthFunc\":3,\"depthTest\":true,\"depthWrite\":true,\"colorWrite\":true,\"stencilWrite\":false,\"stencilWriteMask\":255,\"stencilFunc\":519,\"stencilRef\":0,\"stencilFuncMask\":255,\"stencilFail\":7680,\"stencilZFail\":7680,\"stencilZPass\":7680,\"dithering\":true,\"wireframeLinecap\":\"\",\"wireframeLinejoin\":\"\",\"userData\":{\"type\":\"PhongMaterial\",\"category\":\"Phong\",\"nodeType\":\"PhongNodeMaterial\",\"layers\":{\"id\":5,\"uuid\":\"7CE064FF-7D30-4E48-92A1-131E1AA68FD0\",\"head\":{\"id\":0,\"type\":\"color\",\"defines\":{},\"uniforms\":{\"f0_color\":\"524001BD-AA7B-4A95-8EA8-D64F0788BBDE\",\"f0_alpha\":\"DA39067C-DEE4-4BCD-B540-F9CB3C56CF18\",\"f0_mode\":\"998E7D58-C4A4-4809-8216-DC50D5245732\"},\"next\":{\"id\":2,\"type\":\"displace\",\"defines\":{},\"uniforms\":{\"f2_displacementType\":\"6B9BD88B-048B-4B8C-8C21-76C133824957\",\"f2_offset\":\"2E089381-757B-446C-8212-D88C4EA855C7\",\"f2_scale\":\"2BD23D5E-9FC1-4E56-A0CF-65F8FCC62DD0\",\"f2_intensity\":\"0B61B5AD-AA52-4D28-ACA1-5A139E7B10F4\",\"f2_movement\":\"72A9D85E-C820-43CE-8CED-0B76A4B658EA\",\"f2_alpha\":\"B89620C0-A847-43FE-A6CE-FB2D0FA3A554\",\"f2_mode\":\"5DC27E56-EDA2-4974-95F1-6FE9B69DEA46\",\"f2_noiseType\":\"96EBF42D-498E-4A6D-BD56-153E642A6661\"},\"next\":{\"id\":3,\"type\":\"noise\",\"defines\":{},\"uniforms\":{\"f3_scale\":\"87989660-8FBE-487B-9FDE-D26B6C98CC26\",\"f3_size\":\"C774B72E-E905-4CFD-9656-E9D860C2B815\",\"f3_move\":\"F4917837-F54E-4558-9FC4-8B60CE6304DF\",\"f3_fA\":\"A465E66D-2FFB-4825-BB2F-63F501F1CE50\",\"f3_fB\":\"61249194-106C-47CC-9A26-5015606C25E9\",\"f3_distortion\":\"4CAF045A-22B4-42A2-B3C7-2B21B655E258\",\"f3_colorA\":\"C45EF71B-4F29-40E4-9770-0993E5262605\",\"f3_colorB\":\"6DEFFE20-7EAB-479A-BC28-2D84877196DA\",\"f3_colorC\":\"D613CFB5-C058-420F-B96B-3F46C965F3AD\",\"f3_colorD\":\"FFE76314-9332-42F3-8C75-A84183945DF0\",\"f3_intA\":\"81911971-893B-4645-A170-4924A57EE832\",\"f3_intB\":\"59015F42-B58A-4F0C-982B-09A2143FDE24\",\"f3_intC\":\"E7756C75-3A8A-434C-8082-40199F48C81A\",\"f3_intD\":\"124ECF0A-282B-4D84-9CED-700081A50E44\",\"f3_alpha\":\"02BCFD45-1343-418B-B270-8DF76C081F4A\",\"f3_mode\":\"949B1377-D89E-4051-967B-578DD0BF2134\",\"f3_noiseType\":\"92BA0AF0-23BC-4AD6-9F57-72B647C123C4\"},\"next\":{\"id\":1,\"type\":\"light\",\"defines\":{},\"uniforms\":{\"f1_alpha\":\"DC0F5CEC-78B9-48F3-BE19-89C0C4281451\",\"f1_mode\":\"DC25E47F-C00C-464E-81CB-8C90192B0952\",\"f1_shininess\":\"59B46F3C-FB7E-48A9-A5A7-2A475EA027C1\",\"f1_specular\":\"446A98A4-556E-4F4F-BA5C-57F6E14B1D48\"}}}}}}},\"glslVersion\":null,\"defines\":{\"PHONG\":1,\"USE_LAYER_DISPLACE\":1},\"extensions\":{\"derivatives\":true},\"vertex\":\"84D9F8C7-3981-4091-AA6F-35C33B6B44CC\",\"fragment\":\"84D9F8C7-3981-4091-AA6F-35C33B6B44CC\"}],\"interactionStates\":[{\"uuid\":\"D3DFB775-E53C-4158-A04D-979DC7FFAF26\",\"name\":\"Base State\",\"position\":[0,0,0],\"rotation\":[0.794104035954955,0.7612248219181419,-0.41027625555911584,\"XYZ\"],\"scale\":[0.999999999999999,0.9999999999999996,0.9999999999999999],\"hiddenMatrix\":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],\"geometry\":{\"width\":438,\"height\":438,\"depth\":438},\"material\":{\"layersList\":[{\"id\":3,\"type\":\"noise\",\"defines\":{},\"uniforms\":{\"f3_scale\":\"74972041-AF92-4FEB-9A2D-0367A7B1095F\",\"f3_size\":\"4F08991F-FC51-49BE-B5B0-E5BA67C6D530\",\"f3_move\":\"B2C56D53-249D-4BF1-90CF-7D4AEAC2C2CE\",\"f3_fA\":\"27895A17-BE7C-4086-822E-15B03CD65A28\",\"f3_fB\":\"D57645F3-8D68-4D9C-9251-F7C69EC37E95\",\"f3_distortion\":\"A5875281-E3A4-420D-A889-19A4D8E61BC5\",\"f3_colorA\":\"72D24958-B057-4A45-B567-D386EEB4D0B4\",\"f3_colorB\":\"F028244A-5FFC-4CCE-BE8D-F65BF677CB6E\",\"f3_colorC\":\"DDEA355A-A32C-4A66-B4FF-7F863F3EC8C0\",\"f3_colorD\":\"9B08730B-3904-43D7-95DC-7FD7158BE78A\",\"f3_intA\":\"6B1EBA6B-EBE1-4E14-AB75-43A9533B6214\",\"f3_intB\":\"E409144F-8931-409E-A7DB-F342C6E1813F\",\"f3_intC\":\"7A43B5C0-9C12-44B1-A3AD-ACE3F1F7BAAB\",\"f3_intD\":\"EB38AD3D-43C3-4F34-905A-DC419E0157BA\",\"f3_alpha\":\"B9F887A6-AC2D-46CA-B53B-F9F7EBBBE6CB\",\"f3_mode\":\"809BB7FC-EDC0-4B41-AEF9-6B2AA6F8B238\",\"f3_noiseType\":\"05E52D90-20DE-41B8-A0B7-12D8ABE1CEB6\"}},{\"id\":2,\"type\":\"displace\",\"defines\":{},\"uniforms\":{\"f2_displacementType\":\"041E8C6C-D532-43B1-98BF-E27199955C0C\",\"f2_offset\":\"DB447910-73CA-4525-8E33-08B23CEFB909\",\"f2_scale\":\"BEFC24E4-2107-447D-AF60-00C189A444F9\",\"f2_intensity\":\"7F0F31F8-5DE3-4CAF-B10C-074FD431850A\",\"f2_movement\":\"59558EE8-6EC4-46DA-AFA5-1F074860E1F9\",\"f2_alpha\":\"A45B762C-4BDF-4F70-BC49-F1C2F481B048\",\"f2_mode\":\"224E2B9B-B98D-4E0F-97DE-7AF88F3ACAB0\",\"f2_noiseType\":\"AD8ABF1F-31A9-4E37-ACCC-4B3E7559A2B2\"}},{\"id\":1,\"type\":\"light\",\"defines\":{},\"uniforms\":{\"f1_alpha\":\"911BEF45-FE7E-4288-9BE9-C163C8209D8F\",\"f1_mode\":\"9F955B3C-ADD7-4564-BC11-C5861B1F3A6C\",\"f1_shininess\":\"EFDEC292-4945-435A-90FE-69E0CE6283DD\",\"f1_specular\":\"697C6609-3E34-43CB-A3F6-E190618F39EA\",\"f1_emissive\":\"A56ECA29-6FCA-46FB-A3C7-BA63611CD6A8\",\"f1_roughness\":\"5ECDC864-0ACA-4CC9-ACB3-581B1C5F725C\",\"f1_metalness\":\"6D55D7F1-1F84-47BD-BF19-23EC68CC4965\",\"f1_reflectivity\":\"AADED3DC-0D8D-4F3F-9C48-93ED28F3D346\"}}]}},{\"uuid\":\"8516BE1C-DEC7-40FD-9247-7348EFD1934D\",\"name\":\"State 1\",\"position\":[0,0,0],\"rotation\":[0.794104035954955,0.7612248219181419,-0.41027625555911584,\"XYZ\"],\"scale\":[0.999999999999999,0.9999999999999996,0.9999999999999999],\"hiddenMatrix\":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],\"geometry\":{\"width\":438,\"height\":438,\"depth\":438},\"material\":{\"layersList\":[{\"id\":3,\"type\":\"noise\",\"defines\":{},\"uniforms\":{\"f3_scale\":\"8644E4E8-D77E-42C5-8229-B4CCFDA86576\",\"f3_size\":\"19C50936-40E0-4160-9915-23BBDFC7CD34\",\"f3_move\":\"9C962DC1-48E5-4851-B90A-90AD1BAE00F2\",\"f3_fA\":\"1634F154-A236-4AF7-BD58-79FC1482C601\",\"f3_fB\":\"FFCAB07D-56AD-48BF-9151-F572D1A53325\",\"f3_distortion\":\"9CCB9A99-798D-4700-A8D2-73CDB7BA3491\",\"f3_colorA\":\"8D8F6A9B-71E4-4632-8E73-CE2E75D766A7\",\"f3_colorB\":\"2A99E81C-0AD0-42BE-85E4-FDE100486D5F\",\"f3_colorC\":\"4343971C-C50E-4D20-8709-BE9F57E6A194\",\"f3_colorD\":\"74DC6931-0A29-4B20-A300-30203B940A1D\",\"f3_intA\":\"16681136-2DF0-4D3D-B968-5717315DE7B3\",\"f3_intB\":\"9CF679EA-A86E-440D-80AC-0CE77CF9DA54\",\"f3_intC\":\"0F7AE7BB-9394-4EA5-BB91-D3E040685365\",\"f3_intD\":\"AD30A6D2-5F49-4D18-B356-CC90F9B06CF4\",\"f3_alpha\":\"452B9AC7-4F4E-4314-952C-8AF89C6F8922\",\"f3_mode\":\"9CE8C694-63FC-4B84-AC60-0F4607F1AC41\",\"f3_noiseType\":\"58E6B52B-3CF0-4274-94E7-46F52474FC93\"}},{\"id\":2,\"type\":\"displace\",\"defines\":{},\"uniforms\":{\"f2_displacementType\":\"E6D1C295-9190-444E-9704-2F97397436C5\",\"f2_offset\":\"86144811-FDE8-4BAA-BFDB-E95B724A82C8\",\"f2_scale\":\"F5A7B369-E136-4DD0-AB2E-3EACF57B5D87\",\"f2_intensity\":\"8382A16A-32A5-4AC4-A8EB-2923B13F743F\",\"f2_movement\":\"4B005E3A-60FC-4635-AE56-5638816AD04D\",\"f2_alpha\":\"7E6F35CA-2A0B-4112-B98D-5A241C6B66B8\",\"f2_mode\":\"D5E3DC76-462C-45ED-8932-BABE16310AD8\",\"f2_noiseType\":\"198C0D6A-8B6A-46F4-A47B-BE0C1DC55E76\"}},{\"id\":1,\"type\":\"light\",\"defines\":{},\"uniforms\":{\"f1_alpha\":\"C9F4141E-AFF9-48B0-A1D2-489F1DCD50A0\",\"f1_mode\":\"2ED66428-62EA-43B9-B74A-FAADD6EFFFFF\",\"f1_shininess\":\"D86E783E-6F7B-4176-A1CD-D198AC3078B8\",\"f1_specular\":\"C23B1EC1-556C-4853-9DA4-069C6C786CF9\",\"f1_emissive\":\"15728D6F-A8A0-45C2-B08F-47351A9261FA\",\"f1_roughness\":\"0BE433C9-EDE8-4445-892A-82C9FEFD3573\",\"f1_metalness\":\"C3E0FCD8-B47D-4071-81B7-AF08FF893786\",\"f1_reflectivity\":\"EAFDE07B-9516-40B7-8AD9-E149C1BAE19F\"}}]}}],\"nodes\":[{\"uuid\":\"74972041-AF92-4FEB-9A2D-0367A7B1095F\",\"type\":\"f\",\"value\":0.44,\"nodeType\":\"Float\"},{\"uuid\":\"4F08991F-FC51-49BE-B5B0-E5BA67C6D530\",\"type\":\"v3\",\"x\":2433.3333333333335,\"y\":2433.3333333333335,\"z\":2433.3333333333335,\"nodeType\":\"Vector3\"},{\"uuid\":\"B2C56D53-249D-4BF1-90CF-7D4AEAC2C2CE\",\"type\":\"f\",\"value\":3.45,\"nodeType\":\"Float\"},{\"uuid\":\"27895A17-BE7C-4086-822E-15B03CD65A28\",\"type\":\"v2\",\"x\":-11.49,\"y\":9.2,\"nodeType\":\"Vector2\"},{\"uuid\":\"D57645F3-8D68-4D9C-9251-F7C69EC37E95\",\"type\":\"v2\",\"x\":6.92,\"y\":1.74,\"nodeType\":\"Vector2\"},{\"uuid\":\"A5875281-E3A4-420D-A889-19A4D8E61BC5\",\"type\":\"v2\",\"x\":40.74,\"y\":2.36,\"nodeType\":\"Vector2\"},{\"uuid\":\"72D24958-B057-4A45-B567-D386EEB4D0B4\",\"type\":\"c\",\"r\":1,\"g\":0.2784313725490196,\"b\":0,\"value\":16729856,\"nodeType\":\"Color\"},{\"uuid\":\"F028244A-5FFC-4CCE-BE8D-F65BF677CB6E\",\"type\":\"c\",\"r\":1,\"g\":0.3333333333333333,\"b\":0,\"value\":16733440,\"nodeType\":\"Color\"},{\"uuid\":\"DDEA355A-A32C-4A66-B4FF-7F863F3EC8C0\",\"type\":\"c\",\"r\":1,\"g\":0.11764705882352941,\"b\":0,\"value\":16719360,\"nodeType\":\"Color\"},{\"uuid\":\"9B08730B-3904-43D7-95DC-7FD7158BE78A\",\"type\":\"c\",\"r\":1,\"g\":0.3333333333333333,\"b\":0,\"value\":16733440,\"nodeType\":\"Color\"},{\"uuid\":\"6B1EBA6B-EBE1-4E14-AB75-43A9533B6214\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"E409144F-8931-409E-A7DB-F342C6E1813F\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"7A43B5C0-9C12-44B1-A3AD-ACE3F1F7BAAB\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"EB38AD3D-43C3-4F34-905A-DC419E0157BA\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"B9F887A6-AC2D-46CA-B53B-F9F7EBBBE6CB\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"809BB7FC-EDC0-4B41-AEF9-6B2AA6F8B238\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"05E52D90-20DE-41B8-A0B7-12D8ABE1CEB6\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"041E8C6C-D532-43B1-98BF-E27199955C0C\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"DB447910-73CA-4525-8E33-08B23CEFB909\",\"type\":\"v3\",\"x\":536,\"y\":0,\"z\":0,\"nodeType\":\"Vector3\"},{\"uuid\":\"BEFC24E4-2107-447D-AF60-00C189A444F9\",\"type\":\"f\",\"value\":3.34,\"nodeType\":\"Float\"},{\"uuid\":\"7F0F31F8-5DE3-4CAF-B10C-074FD431850A\",\"type\":\"f\",\"value\":0,\"nodeType\":\"Float\"},{\"uuid\":\"59558EE8-6EC4-46DA-AFA5-1F074860E1F9\",\"type\":\"f\",\"value\":42.53,\"nodeType\":\"Float\"},{\"uuid\":\"A45B762C-4BDF-4F70-BC49-F1C2F481B048\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"224E2B9B-B98D-4E0F-97DE-7AF88F3ACAB0\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"AD8ABF1F-31A9-4E37-ACCC-4B3E7559A2B2\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"911BEF45-FE7E-4288-9BE9-C163C8209D8F\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"9F955B3C-ADD7-4564-BC11-C5861B1F3A6C\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"EFDEC292-4945-435A-90FE-69E0CE6283DD\",\"type\":\"f\",\"value\":30,\"nodeType\":\"Float\"},{\"uuid\":\"697C6609-3E34-43CB-A3F6-E190618F39EA\",\"type\":\"c\",\"r\":0.06666666666666667,\"g\":0.06666666666666667,\"b\":0.06666666666666667,\"value\":1118481,\"nodeType\":\"Color\"},{\"uuid\":\"A56ECA29-6FCA-46FB-A3C7-BA63611CD6A8\",\"type\":\"c\",\"r\":0,\"g\":0,\"b\":0,\"value\":0,\"nodeType\":\"Color\"},{\"uuid\":\"5ECDC864-0ACA-4CC9-ACB3-581B1C5F725C\",\"type\":\"f\",\"value\":0.3,\"nodeType\":\"Float\"},{\"uuid\":\"6D55D7F1-1F84-47BD-BF19-23EC68CC4965\",\"type\":\"f\",\"value\":0,\"nodeType\":\"Float\"},{\"uuid\":\"AADED3DC-0D8D-4F3F-9C48-93ED28F3D346\",\"type\":\"f\",\"value\":0.5,\"nodeType\":\"Float\"},{\"uuid\":\"8644E4E8-D77E-42C5-8229-B4CCFDA86576\",\"type\":\"f\",\"value\":0.3,\"nodeType\":\"Float\"},{\"uuid\":\"19C50936-40E0-4160-9915-23BBDFC7CD34\",\"type\":\"v3\",\"x\":2433.3333333333335,\"y\":2433.3333333333335,\"z\":2433.3333333333335,\"nodeType\":\"Vector3\"},{\"uuid\":\"9C962DC1-48E5-4851-B90A-90AD1BAE00F2\",\"type\":\"f\",\"value\":2.69,\"nodeType\":\"Float\"},{\"uuid\":\"1634F154-A236-4AF7-BD58-79FC1482C601\",\"type\":\"v2\",\"x\":-11.49,\"y\":9.2,\"nodeType\":\"Vector2\"},{\"uuid\":\"FFCAB07D-56AD-48BF-9151-F572D1A53325\",\"type\":\"v2\",\"x\":6.92,\"y\":1.74,\"nodeType\":\"Vector2\"},{\"uuid\":\"9CCB9A99-798D-4700-A8D2-73CDB7BA3491\",\"type\":\"v2\",\"x\":40.74,\"y\":2.36,\"nodeType\":\"Vector2\"},{\"uuid\":\"8D8F6A9B-71E4-4632-8E73-CE2E75D766A7\",\"type\":\"c\",\"r\":1,\"g\":0.2784313725490196,\"b\":0,\"value\":16729856,\"nodeType\":\"Color\"},{\"uuid\":\"2A99E81C-0AD0-42BE-85E4-FDE100486D5F\",\"type\":\"c\",\"r\":1,\"g\":0.3333333333333333,\"b\":0,\"value\":16733440,\"nodeType\":\"Color\"},{\"uuid\":\"4343971C-C50E-4D20-8709-BE9F57E6A194\",\"type\":\"c\",\"r\":1,\"g\":0.11764705882352941,\"b\":0,\"value\":16719360,\"nodeType\":\"Color\"},{\"uuid\":\"74DC6931-0A29-4B20-A300-30203B940A1D\",\"type\":\"c\",\"r\":1,\"g\":0.3333333333333333,\"b\":0,\"value\":16733440,\"nodeType\":\"Color\"},{\"uuid\":\"16681136-2DF0-4D3D-B968-5717315DE7B3\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"9CF679EA-A86E-440D-80AC-0CE77CF9DA54\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"0F7AE7BB-9394-4EA5-BB91-D3E040685365\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"AD30A6D2-5F49-4D18-B356-CC90F9B06CF4\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"452B9AC7-4F4E-4314-952C-8AF89C6F8922\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"9CE8C694-63FC-4B84-AC60-0F4607F1AC41\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"58E6B52B-3CF0-4274-94E7-46F52474FC93\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"E6D1C295-9190-444E-9704-2F97397436C5\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"86144811-FDE8-4BAA-BFDB-E95B724A82C8\",\"type\":\"v3\",\"x\":536,\"y\":0,\"z\":0,\"nodeType\":\"Vector3\"},{\"uuid\":\"F5A7B369-E136-4DD0-AB2E-3EACF57B5D87\",\"type\":\"f\",\"value\":3.34,\"nodeType\":\"Float\"},{\"uuid\":\"8382A16A-32A5-4AC4-A8EB-2923B13F743F\",\"type\":\"f\",\"value\":86,\"nodeType\":\"Float\"},{\"uuid\":\"4B005E3A-60FC-4635-AE56-5638816AD04D\",\"type\":\"f\",\"value\":42.53,\"nodeType\":\"Float\"},{\"uuid\":\"7E6F35CA-2A0B-4112-B98D-5A241C6B66B8\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"D5E3DC76-462C-45ED-8932-BABE16310AD8\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"198C0D6A-8B6A-46F4-A47B-BE0C1DC55E76\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"C9F4141E-AFF9-48B0-A1D2-489F1DCD50A0\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"2ED66428-62EA-43B9-B74A-FAADD6EFFFFF\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"D86E783E-6F7B-4176-A1CD-D198AC3078B8\",\"type\":\"f\",\"value\":30,\"nodeType\":\"Float\"},{\"uuid\":\"C23B1EC1-556C-4853-9DA4-069C6C786CF9\",\"type\":\"c\",\"r\":0.06666666666666667,\"g\":0.06666666666666667,\"b\":0.06666666666666667,\"value\":1118481,\"nodeType\":\"Color\"},{\"uuid\":\"15728D6F-A8A0-45C2-B08F-47351A9261FA\",\"type\":\"c\",\"r\":0,\"g\":0,\"b\":0,\"value\":0,\"nodeType\":\"Color\"},{\"uuid\":\"0BE433C9-EDE8-4445-892A-82C9FEFD3573\",\"type\":\"f\",\"value\":0.3,\"nodeType\":\"Float\"},{\"uuid\":\"C3E0FCD8-B47D-4071-81B7-AF08FF893786\",\"type\":\"f\",\"value\":0,\"nodeType\":\"Float\"},{\"uuid\":\"EAFDE07B-9516-40B7-8AD9-E149C1BAE19F\",\"type\":\"f\",\"value\":0.5,\"nodeType\":\"Float\"},{\"uuid\":\"E0F09319-27CA-401A-8729-C6C7B5DF5407\",\"type\":\"f\",\"value\":0.44,\"nodeType\":\"Float\"},{\"uuid\":\"8D509E87-B1CE-4CD9-8C65-E4D81BB72E8F\",\"type\":\"v3\",\"x\":2433.3333333333335,\"y\":2433.3333333333335,\"z\":2433.3333333333335,\"nodeType\":\"Vector3\"},{\"uuid\":\"EED28220-5F94-4D9F-B86D-0803797E97A1\",\"type\":\"f\",\"value\":3.45,\"nodeType\":\"Float\"},{\"uuid\":\"A7C95971-D38D-433A-BE27-C594FCDCF1D0\",\"type\":\"v2\",\"x\":-11.49,\"y\":9.2,\"nodeType\":\"Vector2\"},{\"uuid\":\"0C9EAD42-422D-4433-B486-8A6B173A1F53\",\"type\":\"v2\",\"x\":6.92,\"y\":1.74,\"nodeType\":\"Vector2\"},{\"uuid\":\"FBE8B646-057B-4797-82B4-92B020249B37\",\"type\":\"v2\",\"x\":40.74,\"y\":2.36,\"nodeType\":\"Vector2\"},{\"uuid\":\"FC9AA6F9-4344-4FEC-8739-69B6C744483E\",\"type\":\"c\",\"r\":1,\"g\":0.2784313725490196,\"b\":0,\"value\":16729856,\"nodeType\":\"Color\"},{\"uuid\":\"F8ACA4F4-D787-4B21-8610-0396660B2004\",\"type\":\"c\",\"r\":1,\"g\":0.3333333333333333,\"b\":0,\"value\":16733440,\"nodeType\":\"Color\"},{\"uuid\":\"15B92719-D45A-4977-B846-2C52F0BE965D\",\"type\":\"c\",\"r\":1,\"g\":0.11764705882352941,\"b\":0,\"value\":16719360,\"nodeType\":\"Color\"},{\"uuid\":\"289ACC1B-987D-448A-A97C-3DA4883F61EA\",\"type\":\"c\",\"r\":1,\"g\":0.3333333333333333,\"b\":0,\"value\":16733440,\"nodeType\":\"Color\"},{\"uuid\":\"A884601A-0DD3-4F77-9CAC-146358F84B38\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"DEBFF2B4-F8A0-4CF0-8259-40C569F8B801\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"DE6675AB-5EA7-4D05-9654-AC85DAD9A46D\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"5A509931-2838-4F7F-B3E8-D2373BED31D6\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"2374A6F3-5E66-460A-B478-20A398764FE5\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"E061EBB6-2DC3-45C4-882C-753641418153\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"DA5EFF08-E4C6-4D29-9C68-130F80F73FE6\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"A176EDCD-25FB-45CC-936D-15AB121E746E\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"F0B20DBD-9E37-4D1C-BE1A-F2FEC8387586\",\"type\":\"v3\",\"x\":536,\"y\":0,\"z\":0,\"nodeType\":\"Vector3\"},{\"uuid\":\"CAD74E9D-3E3B-4B84-81D8-2779F7887486\",\"type\":\"f\",\"value\":3.34,\"nodeType\":\"Float\"},{\"uuid\":\"07BC28FB-7A40-4840-8FD6-B5D3CBD26FF5\",\"type\":\"f\",\"value\":0,\"nodeType\":\"Float\"},{\"uuid\":\"8B44EA60-81AC-4AD4-81C6-76F55616EF0A\",\"type\":\"f\",\"value\":42.53,\"nodeType\":\"Float\"},{\"uuid\":\"55532955-0B6D-44DA-9A36-97A2D7038694\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"23AEF727-5237-491A-8CC8-E65BCFDD79A6\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"112528B6-2AC7-43E7-AB13-61A755495CEB\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"5A01E004-D412-429D-BB07-9647E55AE4A9\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"7CC9D650-61B2-47C8-A76E-3B8B672A1577\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"468B5938-E2E3-4F98-880E-C284C02716FC\",\"type\":\"f\",\"value\":30,\"nodeType\":\"Float\"},{\"uuid\":\"8DD40B3E-EF7E-43BA-BAB9-4C595224ADCA\",\"type\":\"c\",\"r\":0.06666666666666667,\"g\":0.06666666666666667,\"b\":0.06666666666666667,\"value\":1118481,\"nodeType\":\"Color\"},{\"uuid\":\"41857328-FB58-45CF-B818-909BA7054987\",\"type\":\"toon\",\"position\":\"E4B6153E-6D52-4CE2-97E0-39F08B2C3254\",\"color\":\"E2BE1461-1F26-4222-978C-C868304EDF52\",\"specular\":\"8DD40B3E-EF7E-43BA-BAB9-4C595224ADCA\",\"shininess\":\"468B5938-E2E3-4F98-880E-C284C02716FC\",\"alpha\":\"D6C41360-2CD5-4445-8AE7-96A0EFD4BA92\",\"shadingAlpha\":\"5A01E004-D412-429D-BB07-9647E55AE4A9\",\"shadingBlend\":\"7CC9D650-61B2-47C8-A76E-3B8B672A1577\",\"nodeType\":\"Toon\"},{\"uuid\":\"E4B6153E-6D52-4CE2-97E0-39F08B2C3254\",\"type\":\"v3\",\"intensity\":\"07BC28FB-7A40-4840-8FD6-B5D3CBD26FF5\",\"scale\":\"CAD74E9D-3E3B-4B84-81D8-2779F7887486\",\"movementOrTexture\":\"8B44EA60-81AC-4AD4-81C6-76F55616EF0A\",\"cropOrOffset\":\"F0B20DBD-9E37-4D1C-BE1A-F2FEC8387586\",\"displacementTypeIndex\":{\"uuid\":\"A176EDCD-25FB-45CC-936D-15AB121E746E\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},\"noiseFunctionIndex\":{\"uuid\":\"112528B6-2AC7-43E7-AB13-61A755495CEB\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},\"nodeType\":\"VertexDisplacement\"},{\"uuid\":\"E2BE1461-1F26-4222-978C-C868304EDF52\",\"type\":\"v3\",\"scale\":\"E0F09319-27CA-401A-8729-C6C7B5DF5407\",\"size\":\"8D509E87-B1CE-4CD9-8C65-E4D81BB72E8F\",\"move\":\"EED28220-5F94-4D9F-B86D-0803797E97A1\",\"fA\":\"A7C95971-D38D-433A-BE27-C594FCDCF1D0\",\"fB\":\"0C9EAD42-422D-4433-B486-8A6B173A1F53\",\"distortion\":\"FBE8B646-057B-4797-82B4-92B020249B37\",\"colorA\":\"FC9AA6F9-4344-4FEC-8739-69B6C744483E\",\"colorB\":\"F8ACA4F4-D787-4B21-8610-0396660B2004\",\"colorC\":\"15B92719-D45A-4977-B846-2C52F0BE965D\",\"colorD\":\"289ACC1B-987D-448A-A97C-3DA4883F61EA\",\"intA\":\"A884601A-0DD3-4F77-9CAC-146358F84B38\",\"intB\":\"DEBFF2B4-F8A0-4CF0-8259-40C569F8B801\",\"intC\":\"DE6675AB-5EA7-4D05-9654-AC85DAD9A46D\",\"intD\":\"5A509931-2838-4F7F-B3E8-D2373BED31D6\",\"alpha\":\"2374A6F3-5E66-460A-B478-20A398764FE5\",\"noiseFunction\":{\"uuid\":\"DA5EFF08-E4C6-4D29-9C68-130F80F73FE6\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},\"nodeType\":\"Noise\"},{\"uuid\":\"D6C41360-2CD5-4445-8AE7-96A0EFD4BA92\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"524001BD-AA7B-4A95-8EA8-D64F0788BBDE\",\"type\":\"c\",\"r\":0.34901960784313724,\"g\":0.34901960784313724,\"b\":0.34901960784313724,\"value\":5855577,\"alpha\":\"DA39067C-DEE4-4BCD-B540-F9CB3C56CF18\",\"nodeType\":\"Color\"},{\"uuid\":\"DA39067C-DEE4-4BCD-B540-F9CB3C56CF18\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"998E7D58-C4A4-4809-8216-DC50D5245732\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"6B9BD88B-048B-4B8C-8C21-76C133824957\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"2E089381-757B-446C-8212-D88C4EA855C7\",\"type\":\"v3\",\"x\":536,\"y\":0,\"z\":0,\"nodeType\":\"Vector3\"},{\"uuid\":\"2BD23D5E-9FC1-4E56-A0CF-65F8FCC62DD0\",\"type\":\"f\",\"value\":3.61,\"nodeType\":\"Float\"},{\"uuid\":\"0B61B5AD-AA52-4D28-ACA1-5A139E7B10F4\",\"type\":\"f\",\"value\":23,\"nodeType\":\"Float\"},{\"uuid\":\"72A9D85E-C820-43CE-8CED-0B76A4B658EA\",\"type\":\"f\",\"value\":36.85,\"nodeType\":\"Float\"},{\"uuid\":\"B89620C0-A847-43FE-A6CE-FB2D0FA3A554\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"5DC27E56-EDA2-4974-95F1-6FE9B69DEA46\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"96EBF42D-498E-4A6D-BD56-153E642A6661\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"87989660-8FBE-487B-9FDE-D26B6C98CC26\",\"type\":\"f\",\"value\":0.3,\"nodeType\":\"Float\"},{\"uuid\":\"C774B72E-E905-4CFD-9656-E9D860C2B815\",\"type\":\"v3\",\"x\":14643.484157986111,\"y\":14643.484157986111,\"z\":14643.484157986111,\"nodeType\":\"Vector3\"},{\"uuid\":\"F4917837-F54E-4558-9FC4-8B60CE6304DF\",\"type\":\"f\",\"value\":2.69,\"nodeType\":\"Float\"},{\"uuid\":\"A465E66D-2FFB-4825-BB2F-63F501F1CE50\",\"type\":\"v2\",\"x\":1.7,\"y\":9.2,\"nodeType\":\"Vector2\"},{\"uuid\":\"61249194-106C-47CC-9A26-5015606C25E9\",\"type\":\"v2\",\"x\":8.3,\"y\":2.8,\"nodeType\":\"Vector2\"},{\"uuid\":\"4CAF045A-22B4-42A2-B3C7-2B21B655E258\",\"type\":\"v2\",\"x\":39.31,\"y\":1,\"nodeType\":\"Vector2\"},{\"uuid\":\"C45EF71B-4F29-40E4-9770-0993E5262605\",\"type\":\"c\",\"r\":1,\"g\":0.42745098039215684,\"b\":0.047058823529411764,\"value\":16739596,\"nodeType\":\"Color\"},{\"uuid\":\"6DEFFE20-7EAB-479A-BC28-2D84877196DA\",\"type\":\"c\",\"r\":1,\"g\":0.27450980392156865,\"b\":0,\"value\":16729600,\"nodeType\":\"Color\"},{\"uuid\":\"D613CFB5-C058-420F-B96B-3F46C965F3AD\",\"type\":\"c\",\"r\":1,\"g\":0.24313725490196078,\"b\":0,\"value\":16727552,\"nodeType\":\"Color\"},{\"uuid\":\"FFE76314-9332-42F3-8C75-A84183945DF0\",\"type\":\"c\",\"r\":1,\"g\":0.49019607843137253,\"b\":0,\"value\":16743680,\"nodeType\":\"Color\"},{\"uuid\":\"81911971-893B-4645-A170-4924A57EE832\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"59015F42-B58A-4F0C-982B-09A2143FDE24\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"E7756C75-3A8A-434C-8082-40199F48C81A\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"124ECF0A-282B-4D84-9CED-700081A50E44\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"02BCFD45-1343-418B-B270-8DF76C081F4A\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"949B1377-D89E-4051-967B-578DD0BF2134\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"92BA0AF0-23BC-4AD6-9F57-72B647C123C4\",\"type\":\"i\",\"value\":2,\"nodeType\":\"Int\"},{\"uuid\":\"DC0F5CEC-78B9-48F3-BE19-89C0C4281451\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"},{\"uuid\":\"DC25E47F-C00C-464E-81CB-8C90192B0952\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},{\"uuid\":\"59B46F3C-FB7E-48A9-A5A7-2A475EA027C1\",\"type\":\"f\",\"value\":30,\"nodeType\":\"Float\"},{\"uuid\":\"446A98A4-556E-4F4F-BA5C-57F6E14B1D48\",\"type\":\"c\",\"r\":0.06666666666666667,\"g\":0.06666666666666667,\"b\":0.06666666666666667,\"value\":1118481,\"nodeType\":\"Color\"},{\"uuid\":\"84D9F8C7-3981-4091-AA6F-35C33B6B44CC\",\"type\":\"phong\",\"position\":\"5610E274-E4D1-46E7-8728-9CB7A2E08701\",\"color\":\"F6123CC5-87CF-4E4E-B2EF-6A52068AED1F\",\"specular\":\"446A98A4-556E-4F4F-BA5C-57F6E14B1D48\",\"shininess\":\"59B46F3C-FB7E-48A9-A5A7-2A475EA027C1\",\"shadingAlpha\":\"DC0F5CEC-78B9-48F3-BE19-89C0C4281451\",\"shadingBlend\":\"DC25E47F-C00C-464E-81CB-8C90192B0952\",\"alpha\":\"4D78F2A6-B59D-4061-8955-3203E93F3297\",\"nodeType\":\"Phong\"},{\"uuid\":\"5610E274-E4D1-46E7-8728-9CB7A2E08701\",\"type\":\"v3\",\"intensity\":\"0B61B5AD-AA52-4D28-ACA1-5A139E7B10F4\",\"scale\":\"2BD23D5E-9FC1-4E56-A0CF-65F8FCC62DD0\",\"movementOrTexture\":\"72A9D85E-C820-43CE-8CED-0B76A4B658EA\",\"cropOrOffset\":\"2E089381-757B-446C-8212-D88C4EA855C7\",\"displacementTypeIndex\":{\"uuid\":\"6B9BD88B-048B-4B8C-8C21-76C133824957\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},\"noiseFunctionIndex\":{\"uuid\":\"96EBF42D-498E-4A6D-BD56-153E642A6661\",\"type\":\"i\",\"value\":0,\"nodeType\":\"Int\"},\"nodeType\":\"VertexDisplacement\"},{\"uuid\":\"F6123CC5-87CF-4E4E-B2EF-6A52068AED1F\",\"type\":\"v3\",\"a\":\"524001BD-AA7B-4A95-8EA8-D64F0788BBDE\",\"b\":\"53E05E56-9AF3-404E-AC9A-8D4E8720C543\",\"alpha\":\"C493D890-4DF9-42F3-9137-29AA17E98BD5\",\"mode\":\"949B1377-D89E-4051-967B-578DD0BF2134\",\"nodeType\":\"Blend\"},{\"uuid\":\"53E05E56-9AF3-404E-AC9A-8D4E8720C543\",\"type\":\"v3\",\"scale\":\"87989660-8FBE-487B-9FDE-D26B6C98CC26\",\"size\":\"C774B72E-E905-4CFD-9656-E9D860C2B815\",\"move\":\"F4917837-F54E-4558-9FC4-8B60CE6304DF\",\"fA\":\"A465E66D-2FFB-4825-BB2F-63F501F1CE50\",\"fB\":\"61249194-106C-47CC-9A26-5015606C25E9\",\"distortion\":\"4CAF045A-22B4-42A2-B3C7-2B21B655E258\",\"colorA\":\"C45EF71B-4F29-40E4-9770-0993E5262605\",\"colorB\":\"6DEFFE20-7EAB-479A-BC28-2D84877196DA\",\"colorC\":\"D613CFB5-C058-420F-B96B-3F46C965F3AD\",\"colorD\":\"FFE76314-9332-42F3-8C75-A84183945DF0\",\"intA\":\"81911971-893B-4645-A170-4924A57EE832\",\"intB\":\"59015F42-B58A-4F0C-982B-09A2143FDE24\",\"intC\":\"E7756C75-3A8A-434C-8082-40199F48C81A\",\"intD\":\"124ECF0A-282B-4D84-9CED-700081A50E44\",\"alpha\":\"02BCFD45-1343-418B-B270-8DF76C081F4A\",\"noiseFunction\":{\"uuid\":\"92BA0AF0-23BC-4AD6-9F57-72B647C123C4\",\"type\":\"i\",\"value\":2,\"nodeType\":\"Int\"},\"nodeType\":\"Noise\"},{\"uuid\":\"C493D890-4DF9-42F3-9137-29AA17E98BD5\",\"type\":\"f\",\"src\":\"alpha / clamp(alpha + accumAlpha, 0.00001, 1.0 )\",\"isMethod\":false,\"useKeywords\":true,\"extensions\":{},\"keywords\":{\"alpha\":\"02BCFD45-1343-418B-B270-8DF76C081F4A\"},\"nodeType\":\"Expression\"},{\"uuid\":\"4D78F2A6-B59D-4061-8955-3203E93F3297\",\"type\":\"f\",\"value\":1,\"nodeType\":\"Float\"}],\"frames\":{\"currentId\":\"default-frame-id\",\"coords\":[0,0],\"frames\":{\"default-frame-id\":{\"id\":\"default-frame-id\",\"name\":\"Frame\",\"preset\":\"fullscreen\",\"size\":[1920,937],\"coords\":[0,0],\"editorScale\":1,\"backgroundColor\":{\"r\":15,\"g\":15,\"b\":15,\"a\":0},\"color\":{\"r\":0,\"g\":0,\"b\":0,\"a\":0.5},\"guides\":true,\"hasSceneScaling\":false,\"sceneScale\":1}}},\"assets\":{\"materials\":{\"a15e0674-ffc4-48d0-b5b8-d054d6861b20\":{\"name\":\"Untitled\",\"materialUuid\":\"BB23566B-7CBE-4F9F-9901-E7789AE3992A\",\"uuid\":\"a15e0674-ffc4-48d0-b5b8-d054d6861b20\"}}},\"needsTransmission\":false,\"editor\":{\"orbitControls\":{\"useKeyEvents\":false,\"enableDamping\":true,\"enablePan\":false,\"enableZoom\":false,\"enableRotate\":false,\"rotationLimitsMode\":0,\"rotationVerticalOffset\":{\"min\":1.5707963267948966,\"max\":1.5707963267948966},\"rotationHorizontalOffset\":{\"min\":1.5707963267948966,\"max\":1.5707963267948966},\"autoRotate\":false,\"autoRotateSpeed\":2,\"autoRotateClockwise\":true},\"helperState\":true,\"publish\":{\"type\":2,\"web\":{\"logo\":true,\"quality\":\"default\"}},\"settings\":{\"wireframe\":false,\"helpers\":true}}}");

},{}]},["eAOCX","5NdCl"], "5NdCl", "parcelRequire6c07")

//# sourceMappingURL=scene.350b81e2.js.map