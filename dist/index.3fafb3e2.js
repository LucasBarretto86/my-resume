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
})({"3Imd1":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "0fa2489aa94c8731ee2aee9f3fafb3e2";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
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
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
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
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"5rkFb":[function(require,module,exports) {
var _componentsHeaderHeader = require("./components/header/header");
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
var _componentsHeaderHeaderDefault = _parcelHelpers.interopDefault(_componentsHeaderHeader);
var _componentsMainMain = require("./components/main/Main");
var _componentsMainMainDefault = _parcelHelpers.interopDefault(_componentsMainMain);
require("./index.scss");
const profile = require("../profile.json");
const app = document.querySelector("#app");
app.append(new _componentsHeaderHeaderDefault.default(profile.personal));
app.append(new _componentsMainMainDefault.default(profile));

},{"./index.scss":"5iJih","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y","../profile.json":"25Uuk","./components/header/header":"7aRXx","./components/main/Main":"6YhKd"}],"5iJih":[function() {},{}],"5gA8y":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}],"25Uuk":[function(require,module,exports) {
module.exports = JSON.parse("{\"personal\":{\"avatar\":\"https://mohamed28.github.io/src/assets/images/icons/head/home-tab.png\",\"name\":\"Lucas\",\"surname\":\"Barretto e Silva\",\"birthday\":{\"day\":\"05\",\"month\":\"08\",\"year\":\"1986\"},\"email\":\"lucas.barretto86@gmail.com\",\"nationality\":\"brasileiro\",\"civil\":\"divorciado\",\"phone\":{\"international\":\"55\",\"code\":\"11\",\"number\":\"985979534\"},\"address\":{\"street\":\"Av. Alda\",\"number\":\"1175\",\"neighborhood\":\"Centro\",\"city\":\"Diadema\",\"state\":\"SP\",\"country\":\"Brasil\",\"zipcode\":\"09910-170\"},\"hobbies\":\"Guitarra, desenho, pintura, videogame\",\"position\":\"Desenvolvedor Fullstack Junior\"},\"graduation\":{\"institution\":\"FMU - Centro Universitário das Faculdades Metropolitanas Unidas\",\"degree\":\"Análise e desenvolvimento de Sistemas\",\"started_at\":\"Jan 2018\",\"concluded_at\":\"Jun 2020\"},\"letter\":\"Desenvolvedor de sistemas, formado desde Julho de 2020, com experiência de 2 anos na área, entre estágio e contrato, atualmente trabalhando em aplicação Ruby on Rails, sendo, responsável pelo desenvolvimento e manutenção, tanto frontend, quando no backend, com mais 300 commits e 300mil linhas de código adicionadas ao repositório do projeto, sou familiarizado com o dia a dia e rotina ágil. Agnóstico a linguagens, tenho interesse por oportunidades que me permitam trabalhar para adiquirir e aprimorar conhecimentos.\",\"jobs\":[{\"company\":\"Festalab Festas e Eventos\",\"postion\":\"Desenvolvedor Fullstack Junior\",\"start_at\":\"Feb 2019\",\"until\":\"present\",\"details\":\"\"}],\"socials\":[{\"name\":\"linkedIn\",\"link\":\"www.linkedin.com/in/lucasbarretto\"},{\"name\":\"Respositório - Pessoal\",\"link\":\"https://github.com/Mohamed28\"},{\"name\":\"Repositório - Festalab\",\"link\":\"https://github.com/lucas-festalab\"}],\"courses\":[{\"institution\":\"Caelum\",\"course\":\"Formação Java\",\"conclused_at\":\"August 2017\"},{\"institution\":\"Caelum\",\"course\":\"Desenvolvimento na prática com Spring, Testes, Git e Maven\",\"conclused_at\":\"Sep 2017\"}],\"skills\":[{\"name\":\"Inglês\",\"level\":\"Avançado\"}],\"references\":[{\"name\":\"Guilherme Yamakawa de Oliveira\",\"phone\":\"44 99801281\",\"email\":\"\",\"company\":\"Festalab\",\"position\":\"Desenvolvedor Sênior\"}]}");
},{}],"7aRXx":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _libsComponent = require("../../libs/component");
var _libsComponentDefault = _parcelHelpers.interopDefault(_libsComponent);
class Header {
  constructor(props) {
    this.props = props;
    return this.render();
  }
  render() {
    return _libsComponentDefault.default.build("div", "", {
      id: "header"
    }, ["img", "", {
      class: "header__avatar",
      src: `${this.props.avatar}`
    }], ["h1", this.fullName(), {
      class: "header__fullname"
    }], ["div", "", {
      class: "header__info"
    }, ["span", this.props.position, {
      class: "header__position"
    }], ["span", this.shortAddress(), {
      class: "header__address"
    }], ["span", this.phone(), {
      class: "header__phone"
    }]]);
  }
  fullName() {
    return [this.props.name, this.props.surname].join(" ");
  }
  shortAddress() {
    return [this.props.address.city, this.props.address.zipcode, this.props.address.country].join(", ");
  }
  phone() {
    return [this.props.phone.code, this.props.phone.number].join("-");
  }
}
exports.default = Header;

},{"../../libs/component":"7HUi1","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"7HUi1":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
class Component {
  static build(tag, content = "", options = {}, ...children) {
    let element = document.createElement(tag, options);
    if (content !== "") element.innerText = content;
    if (Object.keys(options).length > 0) {
      Object.keys(options).forEach(key => element.setAttribute(key, options[key]));
    }
    if (children.length > 0) {
      children.forEach(child => {
        if (Array.isArray(child)) {
          element.appendChild(this.build(...child));
        } else {
          element.append(child);
        }
      });
    }
    return element;
  }
}
exports.default = Component;

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"6YhKd":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _libsComponent = require("../../libs/component");
var _libsComponentDefault = _parcelHelpers.interopDefault(_libsComponent);
var _section_graduationSectionGraduation = require("../section_graduation/SectionGraduation");
var _section_graduationSectionGraduationDefault = _parcelHelpers.interopDefault(_section_graduationSectionGraduation);
var _section_personalSectionPersonal = require("../section_personal/SectionPersonal");
var _section_personalSectionPersonalDefault = _parcelHelpers.interopDefault(_section_personalSectionPersonal);
class Main {
  constructor(props) {
    this.props = props;
    return this.render();
  }
  render() {
    return _libsComponentDefault.default.build("main", "", {
      id: "main",
      class: "main"
    }, ["div", "", {
      id: "sidebar",
      class: "sidebar"
    }, new _section_personalSectionPersonalDefault.default(this.props.personal)], ["div", "", {
      id: "content",
      class: "content"
    }, new _section_graduationSectionGraduationDefault.default(this.props.graduation)]);
  }
}
exports.default = Main;

},{"../../libs/component":"7HUi1","../section_personal/SectionPersonal":"5l4hk","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y","../section_graduation/SectionGraduation":"7sejs"}],"5l4hk":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _libsComponent = require("../../libs/component");
var _libsComponentDefault = _parcelHelpers.interopDefault(_libsComponent);
class SectionPersonal {
  constructor(props) {
    this.props = props;
    return this.render();
  }
  render() {
    return _libsComponentDefault.default.build("section", "", {
      id: "personal"
    }, ["p", this.fullAddress(), {
      class: "personal__address"
    }], ["p", this.phone(), {
      class: "personal__phone"
    }], ["p", this.props.email, {
      class: "personal__email"
    }]);
  }
  fullAddress() {
    return Object.values(this.props.address).join(", ");
  }
  phone() {
    return [this.props.phone.code, this.props.phone.number].join("-");
  }
}
exports.default = SectionPersonal;

},{"../../libs/component":"7HUi1","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"7sejs":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _libsComponent = require("../../libs/component");
var _libsComponentDefault = _parcelHelpers.interopDefault(_libsComponent);
class SectionGraduation {
  constructor(props) {
    this.props = props;
    return this.render();
  }
  /*"institution": "FMU - Centro Universitário das Faculdades Metropolitanas Unidas",*/
  /*"degree": "Análise e desenvolvimento de Sistemas",*/
  /*"started_at": "Jan 2018",*/
  /*"conclused_at": "Jun 2020"*/
  render() {
    return _libsComponentDefault.default.build("section", "", {
      id: "graduation",
      class: "graduation"
    }, ["h2", this.props.institution, {
      class: "graduation__institution"
    }], ["p", this.props.degree, {
      class: "graduation__degree"
    }], ["p", "", {}, ["span", this.props.started_at, {
      class: "graduation__started_at"
    }], ["b", " - "], ["span", this.props.concluded_at, {
      class: "graduation__concluded_at"
    }]]);
  }
}
exports.default = SectionGraduation;

},{"../../libs/component":"7HUi1","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}]},["3Imd1","5rkFb"], "5rkFb", "parcelRequire52bd")

//# sourceMappingURL=index.3fafb3e2.js.map
