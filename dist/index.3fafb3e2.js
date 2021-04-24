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
})({"7yCo1":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 5505;
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
var _profileJson = require("../profile.json");
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
var _profileJsonDefault = _parcelHelpers.interopDefault(_profileJson);
var _libsComponent = require("./libs/component");
var _libsComponentDefault = _parcelHelpers.interopDefault(_libsComponent);
var _componentsHeaderHeader = require("./components/header/Header");
var _componentsHeaderHeaderDefault = _parcelHelpers.interopDefault(_componentsHeaderHeader);
var _componentsMainMain = require("./components/main/Main");
var _componentsMainMainDefault = _parcelHelpers.interopDefault(_componentsMainMain);
var _componentsFooterFooter = require("./components/footer/Footer");
var _componentsFooterFooterDefault = _parcelHelpers.interopDefault(_componentsFooterFooter);
var _libsPdf_generator = require("./libs/pdf_generator");
require("./index.scss");
console.log(_libsPdf_generator.PDFGenerator);
document.body.append(_libsComponentDefault.default.build("div", "", {
  id: "app",
  class: "app"
}, ["div", "", {
  id: "resume"
}, new _componentsHeaderHeaderDefault.default(_profileJsonDefault.default.personal), new _componentsMainMainDefault.default(_profileJsonDefault.default), new _componentsFooterFooterDefault.default({
  module: _libsPdf_generator.PDFGenerator
})]));

},{"./components/main/Main":"6YhKd","./index.scss":"5iJih","../profile.json":"25Uuk","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y","./libs/component":"7HUi1","./components/header/Header":"2jpsH","./components/footer/Footer":"2A98h","./libs/pdf_generator":"5px6J"}],"6YhKd":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _libsComponent = require("../../libs/component");
var _libsComponentDefault = _parcelHelpers.interopDefault(_libsComponent);
var _section_personalSectionPersonal = require("../section_personal/SectionPersonal");
var _section_personalSectionPersonalDefault = _parcelHelpers.interopDefault(_section_personalSectionPersonal);
var _section_linksSectionLinks = require("../section_links/SectionLinks");
var _section_linksSectionLinksDefault = _parcelHelpers.interopDefault(_section_linksSectionLinks);
var _section_skillsSectionSkills = require("../section_skills/SectionSkills");
var _section_skillsSectionSkillsDefault = _parcelHelpers.interopDefault(_section_skillsSectionSkills);
var _section_paragraphsSectionParagraphs = require("../section_paragraphs/SectionParagraphs");
var _section_paragraphsSectionParagraphsDefault = _parcelHelpers.interopDefault(_section_paragraphsSectionParagraphs);
var _section_infosSectionInfos = require("../section_infos/SectionInfos");
var _section_infosSectionInfosDefault = _parcelHelpers.interopDefault(_section_infosSectionInfos);
require("./Main.scss");
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
    }, new _section_personalSectionPersonalDefault.default(this.props.personal), new _section_linksSectionLinksDefault.default(this.props.links), ...this.props.skills.map(skill => new _section_skillsSectionSkillsDefault.default(skill))], ["div", "", {
      id: "content",
      class: "content"
    }, new _section_paragraphsSectionParagraphsDefault.default(this.props.paragraphs), ...this.props.infos.map(info => new _section_infosSectionInfosDefault.default(info))]);
  }
}
exports.default = Main;

},{"../../libs/component":"7HUi1","../section_personal/SectionPersonal":"5l4hk","../section_links/SectionLinks":"4P7zu","../section_skills/SectionSkills":"7GT2z","../section_paragraphs/SectionParagraphs":"5e35s","../section_infos/SectionInfos":"3QgRt","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y","./Main.scss":"Es9zW"}],"7HUi1":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
class Component {
  static build(tag, content = "", options = {}, ...children) {
    let element = document.createElement(tag, options);
    let keys = Object.keys(options);
    if (content !== "") element.innerText = content;
    if (keys.length > 0) {
      let events = Object.entries(options).filter(option => option[0].match(/controller|action|target/));
      console.log(events);
      keys.forEach(key => element.setAttribute(key, options[key]));
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

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"5gA8y":[function(require,module,exports) {
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
},{}],"5l4hk":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _libsComponent = require("../../libs/component");
var _libsComponentDefault = _parcelHelpers.interopDefault(_libsComponent);
var _libsFormatter = require("../../libs/formatter");
require("./SectionPersonal.scss");
class SectionPersonal {
  constructor(props) {
    this.props = props;
    return this.render();
  }
  render() {
    return _libsComponentDefault.default.build("section", "", {
      id: "personal",
      class: "personal"
    }, ["h3", this.props.header, {
      class: "personal__header"
    }], ["p", _libsFormatter.Formatter.fullAddress(this.props.address), {
      class: "personal__address"
    }], ["p", _libsFormatter.Formatter.phone(this.props.phone), {
      class: "personal__phone"
    }], ["a", this.props.email, {
      class: "personal__email",
      href: `mailto:${this.props.email}`
    }]);
  }
}
exports.default = SectionPersonal;

},{"../../libs/component":"7HUi1","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y","./SectionPersonal.scss":"60HZU","../../libs/formatter":"2grMX"}],"60HZU":[function() {},{}],"2grMX":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Formatter", function () {
  return Formatter;
});
const Formatter = {
  age(birthday) {
    return this.filteredJoin([new Date().getFullYear() - Number(birthday.year), "anos"], " ");
  },
  fullAddress(address) {
    return this.filteredJoin(Object.values(address), ", ");
  },
  fullName(personal) {
    return this.filteredJoin([personal.name, personal.surname], " ");
  },
  shortAddress(address) {
    return this.filteredJoin([address.city, address.zipcode, address.country], ", ");
  },
  phone(phone) {
    return this.filteredJoin([phone.international, phone.code, phone.number], "-");
  },
  filteredJoin(arr, separator) {
    return arr.filter(data => data !== "").join(separator);
  }
};

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"4P7zu":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _libsComponent = require("../../libs/component");
var _libsComponentDefault = _parcelHelpers.interopDefault(_libsComponent);
require("./SectionLinks.scss");
class LinksList {
  constructor(props) {
    this.props = props;
    return this.render();
  }
  render() {
    return _libsComponentDefault.default.build("section", "", {
      id: this.props.header,
      class: "links"
    }, ["h3", this.props.header, {
      class: "links__header"
    }], ["ul", "", {}, ...this.items(this.props.items)]);
  }
  items(items) {
    if (items.length < 1) return;
    return items.map(item => this.item(item));
  }
  item(item) {
    return _libsComponentDefault.default.build("li", "", {}, ["a", item.name, {
      href: item.link,
      target: "_blank"
    }]);
  }
}
exports.default = LinksList;

},{"../../libs/component":"7HUi1","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y","./SectionLinks.scss":"6jLwm"}],"6jLwm":[function() {},{}],"7GT2z":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _libsComponent = require("../../libs/component");
var _libsComponentDefault = _parcelHelpers.interopDefault(_libsComponent);
require("./SectionSkills.scss");
class SectionSkills {
  constructor(props) {
    this.props = props;
    return this.render();
  }
  render() {
    return _libsComponentDefault.default.build("section", "", {
      id: "skills",
      class: "skills"
    }, ["h3", this.props.header, {
      class: "skills__header"
    }], ["div", "", {
      class: "skills__items"
    }, ...this.items(this.props.items)]);
  }
  items(items) {
    if (items.length < 1) return;
    return items.map(item => this.item(item));
  }
  item(item) {
    return _libsComponentDefault.default.build("div", "", {
      class: "items__item"
    }, ["h4", item.name, {
      class: "items__name"
    }], ["meter", "", {
      class: "items__level",
      value: item.level,
      min: "0",
      max: "5"
    }]);
  }
}
exports.default = SectionSkills;

},{"../../libs/component":"7HUi1","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y","./SectionSkills.scss":"5tUBC"}],"5tUBC":[function() {},{}],"5e35s":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _libsComponent = require("../../libs/component");
var _libsComponentDefault = _parcelHelpers.interopDefault(_libsComponent);
class SimpleList {
  constructor(props) {
    this.props = props;
    return this.render();
  }
  render() {
    return _libsComponentDefault.default.build("section", "", {
      id: "paragraphs",
      class: "paragraphs"
    }, ["h3", this.props.header], ...this.props.contents.map(content => ["p", content]));
  }
}
exports.default = SimpleList;

},{"../../libs/component":"7HUi1","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"3QgRt":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _libsComponent = require("../../libs/component");
var _libsComponentDefault = _parcelHelpers.interopDefault(_libsComponent);
var _libsFormatter = require("../../libs/formatter");
require("./SectionInfos.scss");
class SectionInfos {
  constructor(props) {
    this.props = props;
    return this.render();
  }
  render() {
    return _libsComponentDefault.default.build("section", "", {
      class: "infos"
    }, ["h3", this.props.header, {
      class: "infos_header"
    }], ["div", "", {
      class: "items"
    }, ...this.items(this.props.items)]);
  }
  items(items) {
    if (items.length < 1) return;
    return items.map(item => this.item(item));
  }
  item(item) {
    return _libsComponentDefault.default.build("div", "", {
      class: "items__item"
    }, ["h4", item.name, {
      class: "item__name"
    }], ["p", item.description, {
      class: "item__description"
    }], ["p", _libsFormatter.Formatter.filteredJoin([item.from, item.to], " — "), {
      class: "item__from-to"
    }], ["p", item.details, {
      class: "item__details"
    }]);
  }
}
exports.default = SectionInfos;

},{"../../libs/component":"7HUi1","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y","./SectionInfos.scss":"76Cfm","../../libs/formatter":"2grMX"}],"76Cfm":[function() {},{}],"Es9zW":[function() {},{}],"5iJih":[function() {},{}],"25Uuk":[function(require,module,exports) {
module.exports = JSON.parse("{\"personal\":{\"header\":\"Informações\",\"avatar\":\"https://github.com/Mohamed28/my-resume/blob/master/src/assets/images/pictures/avatar.jpeg?raw=true\",\"name\":\"Lucas\",\"surname\":\"Barretto e Silva\",\"birthday\":{\"day\":\"05\",\"month\":\"08\",\"year\":\"1986\"},\"email\":\"lucas.barretto86@gmail.com\",\"nationality\":\"brasileiro\",\"civil\":\"divorciado\",\"phone\":{\"international\":\"+55\",\"code\":\"11\",\"number\":\"98597-9534\",\"icon\":\"https://github.com/Mohamed28/my-resume/blob/master/src/assets/images/icons/whatsapp.png?raw=true\"},\"address\":{\"street\":\"Av. Alda\",\"number\":\"1175\",\"neighborhood\":\"Centro\",\"city\":\"Diadema\",\"state\":\"SP\",\"country\":\"Brasil\",\"zipcode\":\"09910-170\"},\"hobbies\":\"Guitarra, desenho, pintura, videogame\",\"position\":\"Desenvolvedor Fullstack Junior\"},\"paragraphs\":{\"header\":\"Carta\",\"contents\":[\"Desenvolvedor de sistemas, formado desde Julho de 2020, com experiência de 2 anos na área, entre estágio e contrato, atualmente trabalhando em aplicação Ruby on Rails, sendo, responsável pelo desenvolvimento e manutenção, tanto frontend, quando no backend, com mais 300 commits e 300mil linhas de código adicionadas ao repositório do projeto, sou familiarizado com o dia a dia e rotina ágil. Agnóstico a linguagens, tenho interesse por oportunidades que me permitam trabalhar para adiquirir e aprimorar conhecimentos.\"]},\"infos\":[{\"header\":\"Formação\",\"items\":[{\"name\":\"FMU - Centro Universitário das Faculdades Metropolitanas Unidas\",\"description\":\"Análise e desenvolvimento de Sistemas\",\"from\":\"Jan 2018\",\"to\":\"Jun 2020\",\"details\":\"\"}]},{\"header\":\"Experiência\",\"items\":[{\"name\":\"Festalab Festas e Eventos\",\"description\":\"Desenvolvedor Fullstack Junior\",\"from\":\"Feb 2019\",\"to\":\"present\",\"details\":\"\"}]},{\"header\":\"Cursos\",\"items\":[{\"name\":\"Caelum\",\"description\":\"Formação Java\",\"from\":\"Jul 2017\",\"to\":\"Ago 2017\",\"details\":\"\"},{\"name\":\"Caelum\",\"description\":\"Desenvolvimento na prática com Spring, Testes, Git e Maven\",\"from\":\"\",\"to\":\"Set 2017\",\"details\":\"\"}]},{\"header\":\"Referências\",\"items\":[{\"name\":\"Guilherme Yamakawa de Oliveira\",\"description\":\"Festalab - Desenvolvedor Fullstack Sênior\",\"from\":\"\",\"to\":\"\",\"details\":\"guilherme44@hey.com | +55-44-9980-1281\"}]}],\"links\":{\"header\":\"Site, Redes e Repos\",\"items\":[{\"name\":\"LinkedIn\",\"link\":\"https://www.linkedin.com/in/lucasbarretto\"},{\"name\":\"Respositório - Pessoal\",\"link\":\"https://github.com/Mohamed28\"},{\"name\":\"Repositório - Festalab\",\"link\":\"https://github.com/lucas-festalab\"},{\"name\":\"Mohamed28's Dome\",\"link\":\"https://mohamed28.github.io/\"}]},\"skills\":[{\"header\":\"Idiomas\",\"items\":[{\"name\":\"Inglês\",\"level\":\"4\"}]}]}");
},{}],"2jpsH":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _libsComponent = require("../../libs/component");
var _libsComponentDefault = _parcelHelpers.interopDefault(_libsComponent);
var _libsFormatter = require("../../libs/formatter");
require("./Header.scss");
class Header {
  constructor(props) {
    this.props = props;
    return this.render();
  }
  render() {
    return _libsComponentDefault.default.build("div", "", {
      id: "header",
      class: "header"
    }, ["div", "", {
      class: "header__block header__block--top"
    }, ["img", "", {
      class: "header__avatar",
      src: this.props.avatar
    }], ["h1", _libsFormatter.Formatter.fullName(this.props), {
      class: "header__fullname"
    }]], ["div", "", {
      class: "header__block header__block--bottom"
    }, ["div", "", {
      class: "header__info"
    }, ["span", this.props.position, {
      class: "header__position"
    }], ["span", _libsFormatter.Formatter.shortAddress(this.props.address), {
      class: "header__address"
    }], ["span", _libsFormatter.Formatter.phone(this.props.phone), {
      class: "header__phone"
    }, ["img", "", {
      src: this.props.phone.icon,
      alt: "whatsapp-icon"
    }]]]]);
  }
}
exports.default = Header;

},{"../../libs/component":"7HUi1","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y","./Header.scss":"2hArk","../../libs/formatter":"2grMX"}],"2hArk":[function() {},{}],"2A98h":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _libsComponent = require("../../libs/component");
var _libsComponentDefault = _parcelHelpers.interopDefault(_libsComponent);
class Footer {
  constructor(props) {
    this.props = props;
    return this.render();
  }
  render() {
    return _libsComponentDefault.default.build("footer", "", {
      id: "footer",
      class: "footer"
    }, // ["button", "generate PDF", { event: { function: this.props.module.generate, action: "click" } }]
    ["button", "generate PDF", {
      "data-controller": "pdf_generator",
      "data-action": "click->generate"
    }]);
  }
}
exports.default = Footer;

},{"../../libs/component":"7HUi1","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"5px6J":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "PDFGenerator", function () {
  return PDFGenerator;
});
const PDFGenerator = {
  generate() {
    const generator = new jsPDF();
    generator.fromHTML(document.querySelector("#resume"), 15, 15, {
      'width': 170
    });
    generator.save('CV-Lucas-Barretto-e-Silva.pdf');
  }
};

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}]},["7yCo1","5rkFb"], "5rkFb", "parcelRequire52bd")

//# sourceMappingURL=index.3fafb3e2.js.map
