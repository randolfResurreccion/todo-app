(self["webpackChunktodo_app"] = self["webpackChunktodo_app"] || []).push([["index"],{

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _assets_img_favicon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/favicon.png */ "./src/assets/img/favicon.png");



var element = function element(type) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var tag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var el = document.createElement(type);
  el.classList.add(className);
  el.innerHTML = tag;

  if (className === null) {
    el.removeAttribute('class');
  }

  return el;
};

var linkComponent = function linkComponent() {
  var newLink = document.createElement('link');
  newLink.rel = 'icon';
  newLink.href = _assets_img_favicon_png__WEBPACK_IMPORTED_MODULE_1__;
  return newLink;
};

var headerComponent = function headerComponent() {
  var header = element('header', 'header');
  var container = element('div', 'container');
  header.appendChild(container);
  var h1 = element('h1', 'header__title', 'To-do App');
  container.appendChild(h1);
  var h2 = element('h2', 'header__subtitle', 'What do you need to do?');
  container.appendChild(h2);
  return header;
};

var actionsComponent = function actionsComponent() {
  var actions = element('div', 'actions');
  var actions_container = element('div', 'actions__container');
  actions.appendChild(actions_container); // Input 

  var input = element('input', 'input');
  input.id = 'search-todo-text';
  input.placeholder = 'Search todos..';
  input.type = 'text';
  actions_container.appendChild(input); // Label

  var label = element('label', 'checkbox');
  actions_container.appendChild(label); // Checkbox

  var checkbox = element('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'hide-completed';
  label.appendChild(checkbox);
  var checkboxTag = document.createElement('span');
  checkboxTag.innerHTML = 'Hide Completed';
  label.appendChild(checkboxTag);
  return actions;
};

var containerComponent = function containerComponent() {
  var container = element('div', 'container');
  var todos = element('div');
  todos.id = 'todos';
  container.appendChild(todos); // Form

  var form = element('form');
  form.id = 'new-todo';
  container.appendChild(form); // Input

  var input = element('input', 'input');
  input.id = 'todo-input';
  input.name = 'toDo';
  input.type = 'text';
  input.autocomplete = 'off';
  input.placeholder = 'Enter todo...';
  form.appendChild(input); // Button

  var btn = element('button', 'button', 'Add todo');
  btn.id = 'todos-btn';
  form.appendChild(btn);
  return container;
};

var renderPage = function renderPage() {
  document.head.appendChild(linkComponent());
  document.body.appendChild(headerComponent());
  document.body.appendChild(actionsComponent());
  document.body.appendChild(containerComponent());
}; // Render main page on load


window.addEventListener('load', renderPage());

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_fonts_Roboto_Regular_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/fonts/Roboto-Regular.ttf */ "./src/assets/fonts/Roboto-Regular.ttf");
/* harmony import */ var _assets_fonts_Roboto_Bold_ttf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/fonts/Roboto-Bold.ttf */ "./src/assets/fonts/Roboto-Bold.ttf");
/* harmony import */ var _assets_fonts_Roboto_Italic_ttf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/fonts/Roboto-Italic.ttf */ "./src/assets/fonts/Roboto-Italic.ttf");
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_fonts_Roboto_Regular_ttf__WEBPACK_IMPORTED_MODULE_3__);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_fonts_Roboto_Bold_ttf__WEBPACK_IMPORTED_MODULE_4__);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_fonts_Roboto_Italic_ttf__WEBPACK_IMPORTED_MODULE_5__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Roboto';\n    font-weight: normal;\n    font-style: normal;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n}\n\n@font-face {\n    font-family: 'Roboto-Bold';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n    font-weight: bold;\n}\n\n@font-face {\n    font-family: 'Roboto';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('truetype');\n    font-weight: normal;\n    font-style: italic;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto';\n}\n\n:root {\n    --purple-color: #6F429C;\n    --grey-color: #2B292E;\n    --white-color: #fafafa;\n}\n\nhtml {\n    font-size: 62.5%; \n}\n\nbody {\n    background: #2B292E;\n    color: var(--white-color);\n    font-size: 1.6rem;\n}\n\na {\n    color: var(--purple-color);\n}\n\n/* Container */\n.container {\n    max-width: 60rem;\n    margin: 0 auto;\n    padding: 0 1.6rem;\n}\n\n/* headerComponent*/\n.header {\n    background: var(--purple-color);\n    color: var(--white-color);\n    padding: 1.6rem 0;\n}\n\n.header__title {\n    font-size: 3.2rem;\n    margin-bottom: .4rem;\n    font-family: 'Roboto-bold';\n}\n\n.header__subtitle {\n    font-size: 1.6rem;\n    font-style: italic;\n}\n\n/* actionsComponent*/\n.actions {\n    background-color: #353239;\n    padding: 1rem;\n}\n\n.actions__container {\n    align-items: center;\n    display: flex;\n    max-width: 60rem;\n    margin: 0 auto;\n    padding: 0 1.6rem;\n}\n\n/* Form inputs */\n.input {\n    border: none;\n    font-size: 1.4rem;\n    height: 3rem;\n    margin-right: 1.6rem;\n    padding: .4rem .8rem;\n}\n\n.checkbox {\n    display: flex;\n    align-items: baseline;\n}\n\n.checkbox > input {\n    margin-right: .4rem;\n}\n\n.button {\n    border: none;\n    background-color: var(--purple-color);\n    color: var(--white-color);\n    font-size: 1.4rem;\n    padding: .8rem;\n    border-bottom: 2px solid #603a88;\n    transition: background .3s ease, color .3s ease;\n}\n\n.button:hover {\n    background-color: #5F3A87;\n    font-family: 'Roboto-Bold';\n}\n\nbutton:focus {\n    outline: none;\n}\n\n.button--secondary {\n    background-color: #888;\n\n}\n\n.button--secondary:hover {\n    background: #6E6E6E;\n}\n\n.button--text {\n    background: none;\n    border: none;\n    color: #aaa;\n}\n\n.button--text:hover {\n    background: none;\n    color: white;\n    text-decoration: underline;\n}\n\n.title-input {\n    border: 1px solid #DEDFE0;\n    font-size: 2rem;\n    font-weight: 300;\n    display: block;\n    margin: 2.4rem 0;\n    padding: .8rem;\n    width: 100%;\n}\n\n.body-input {\n    border: 1px solid #DEDFE0;\n    font-family: inherit;\n    font-size: 1.6rem;\n    font-weight: 300;\n    display: block;\n    margin: 2.4rem 0;\n    min-height: 15rem;\n    padding: .8rem;\n    width: 100%;\n}\n\n/* Note List Item */\n\n.list-item {\n    text-decoration: none;\n    color: #fafafa;\n    cursor: pointer;\n    background: #353239;\n    border: 1px solid #423e47;\n    margin: 1.6rem 0;\n    padding: 1rem 1.6rem;\n    display: block;\n    transition: background .3s ease;\n    display: flex;\n    justify-content: space-between;\n    align-items: center\n}\n\n.list-item__container {\n    display: flex;\n    font-size: 1.8rem;\n    font-weight: 300;\n    align-items: baseline;\n}\n\n.list-item__container > *:first-child {\n    margin-right: .8rem;\n}\n\n.list-item:hover {\n    background: #3d3941;\n}\n\n.list-item__title {\n    font-size: 1.8rem;\n    margin-bottom: .4rem\n}\n\n.list-item__subtitle {\n    color: #666;\n    font-size: 1.4rem;\n    font-weight: 300;\n    font-style: italic;\n}\n\n.list-title {\n    margin: 3.2rem 0 1.6rem;\n}\n\n.empty-message {\n    margin: 3.2rem 0;\n}", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,mBAAmB;IACnB,kBAAkB;IAClB,+DAA+D;AACnE;;AAEA;IACI,0BAA0B;IAC1B,+DAA4D;IAC5D,iBAAiB;AACrB;;AAEA;IACI,qBAAqB;IACrB,+DAA8D;IAC9D,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;IACvB,qBAAqB;IACrB,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA,cAAc;AACd;IACI,gBAAgB;IAChB,cAAc;IACd,iBAAiB;AACrB;;AAEA,mBAAmB;AACnB;IACI,+BAA+B;IAC/B,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,oBAAoB;IACpB,0BAA0B;AAC9B;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA,oBAAoB;AACpB;IACI,yBAAyB;IACzB,aAAa;AACjB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,gBAAgB;IAChB,cAAc;IACd,iBAAiB;AACrB;;AAEA,gBAAgB;AAChB;IACI,YAAY;IACZ,iBAAiB;IACjB,YAAY;IACZ,oBAAoB;IACpB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,qCAAqC;IACrC,yBAAyB;IACzB,iBAAiB;IACjB,cAAc;IACd,gCAAgC;IAChC,+CAA+C;AACnD;;AAEA;IACI,yBAAyB;IACzB,0BAA0B;AAC9B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,sBAAsB;;AAE1B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,0BAA0B;AAC9B;;AAEA;IACI,yBAAyB;IACzB,eAAe;IACf,gBAAgB;IAChB,cAAc;IACd,gBAAgB;IAChB,cAAc;IACd,WAAW;AACf;;AAEA;IACI,yBAAyB;IACzB,oBAAoB;IACpB,iBAAiB;IACjB,gBAAgB;IAChB,cAAc;IACd,gBAAgB;IAChB,iBAAiB;IACjB,cAAc;IACd,WAAW;AACf;;AAEA,mBAAmB;;AAEnB;IACI,qBAAqB;IACrB,cAAc;IACd,eAAe;IACf,mBAAmB;IACnB,yBAAyB;IACzB,gBAAgB;IAChB,oBAAoB;IACpB,cAAc;IACd,+BAA+B;IAC/B,aAAa;IACb,8BAA8B;IAC9B;AACJ;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB;AACJ;;AAEA;IACI,WAAW;IACX,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":["@font-face {\n    font-family: 'Roboto';\n    font-weight: normal;\n    font-style: normal;\n    src: url(../assets/fonts/Roboto-Regular.ttf) format('truetype');\n}\n\n@font-face {\n    font-family: 'Roboto-Bold';\n    src: url(../assets/fonts/Roboto-Bold.ttf) format('truetype');\n    font-weight: bold;\n}\n\n@font-face {\n    font-family: 'Roboto';\n    src: url(../assets/fonts/Roboto-Italic.ttf) format('truetype');\n    font-weight: normal;\n    font-style: italic;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto';\n}\n\n:root {\n    --purple-color: #6F429C;\n    --grey-color: #2B292E;\n    --white-color: #fafafa;\n}\n\nhtml {\n    font-size: 62.5%; \n}\n\nbody {\n    background: #2B292E;\n    color: var(--white-color);\n    font-size: 1.6rem;\n}\n\na {\n    color: var(--purple-color);\n}\n\n/* Container */\n.container {\n    max-width: 60rem;\n    margin: 0 auto;\n    padding: 0 1.6rem;\n}\n\n/* headerComponent*/\n.header {\n    background: var(--purple-color);\n    color: var(--white-color);\n    padding: 1.6rem 0;\n}\n\n.header__title {\n    font-size: 3.2rem;\n    margin-bottom: .4rem;\n    font-family: 'Roboto-bold';\n}\n\n.header__subtitle {\n    font-size: 1.6rem;\n    font-style: italic;\n}\n\n/* actionsComponent*/\n.actions {\n    background-color: #353239;\n    padding: 1rem;\n}\n\n.actions__container {\n    align-items: center;\n    display: flex;\n    max-width: 60rem;\n    margin: 0 auto;\n    padding: 0 1.6rem;\n}\n\n/* Form inputs */\n.input {\n    border: none;\n    font-size: 1.4rem;\n    height: 3rem;\n    margin-right: 1.6rem;\n    padding: .4rem .8rem;\n}\n\n.checkbox {\n    display: flex;\n    align-items: baseline;\n}\n\n.checkbox > input {\n    margin-right: .4rem;\n}\n\n.button {\n    border: none;\n    background-color: var(--purple-color);\n    color: var(--white-color);\n    font-size: 1.4rem;\n    padding: .8rem;\n    border-bottom: 2px solid #603a88;\n    transition: background .3s ease, color .3s ease;\n}\n\n.button:hover {\n    background-color: #5F3A87;\n    font-family: 'Roboto-Bold';\n}\n\nbutton:focus {\n    outline: none;\n}\n\n.button--secondary {\n    background-color: #888;\n\n}\n\n.button--secondary:hover {\n    background: #6E6E6E;\n}\n\n.button--text {\n    background: none;\n    border: none;\n    color: #aaa;\n}\n\n.button--text:hover {\n    background: none;\n    color: white;\n    text-decoration: underline;\n}\n\n.title-input {\n    border: 1px solid #DEDFE0;\n    font-size: 2rem;\n    font-weight: 300;\n    display: block;\n    margin: 2.4rem 0;\n    padding: .8rem;\n    width: 100%;\n}\n\n.body-input {\n    border: 1px solid #DEDFE0;\n    font-family: inherit;\n    font-size: 1.6rem;\n    font-weight: 300;\n    display: block;\n    margin: 2.4rem 0;\n    min-height: 15rem;\n    padding: .8rem;\n    width: 100%;\n}\n\n/* Note List Item */\n\n.list-item {\n    text-decoration: none;\n    color: #fafafa;\n    cursor: pointer;\n    background: #353239;\n    border: 1px solid #423e47;\n    margin: 1.6rem 0;\n    padding: 1rem 1.6rem;\n    display: block;\n    transition: background .3s ease;\n    display: flex;\n    justify-content: space-between;\n    align-items: center\n}\n\n.list-item__container {\n    display: flex;\n    font-size: 1.8rem;\n    font-weight: 300;\n    align-items: baseline;\n}\n\n.list-item__container > *:first-child {\n    margin-right: .8rem;\n}\n\n.list-item:hover {\n    background: #3d3941;\n}\n\n.list-item__title {\n    font-size: 1.8rem;\n    margin-bottom: .4rem\n}\n\n.list-item__subtitle {\n    color: #666;\n    font-size: 1.4rem;\n    font-weight: 300;\n    font-style: italic;\n}\n\n.list-title {\n    margin: 3.2rem 0 1.6rem;\n}\n\n.empty-message {\n    margin: 3.2rem 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/assets/fonts/Roboto-Bold.ttf":
/*!******************************************!*\
  !*** ./src/assets/fonts/Roboto-Bold.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "17451a4c1cd55e33ac57.ttf";

/***/ }),

/***/ "./src/assets/fonts/Roboto-Italic.ttf":
/*!********************************************!*\
  !*** ./src/assets/fonts/Roboto-Italic.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "dcb583d9def8308113fc.ttf";

/***/ }),

/***/ "./src/assets/fonts/Roboto-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Roboto-Regular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6bede58e856278b0f8f1.ttf";

/***/ }),

/***/ "./src/assets/img/favicon.png":
/*!************************************!*\
  !*** ./src/assets/img/favicon.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3357de7759b178334a27.png";

/***/ })

},
0,[["./src/components/index.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcz9lNDViIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIl0sIm5hbWVzIjpbImVsZW1lbnQiLCJ0eXBlIiwiY2xhc3NOYW1lIiwidGFnIiwiZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJsaW5rQ29tcG9uZW50IiwibmV3TGluayIsInJlbCIsImhyZWYiLCJpY29uIiwiaGVhZGVyQ29tcG9uZW50IiwiaGVhZGVyIiwiY29udGFpbmVyIiwiYXBwZW5kQ2hpbGQiLCJoMSIsImgyIiwiYWN0aW9uc0NvbXBvbmVudCIsImFjdGlvbnMiLCJhY3Rpb25zX2NvbnRhaW5lciIsImlucHV0IiwiaWQiLCJwbGFjZWhvbGRlciIsImxhYmVsIiwiY2hlY2tib3giLCJjaGVja2JveFRhZyIsImNvbnRhaW5lckNvbXBvbmVudCIsInRvZG9zIiwiZm9ybSIsIm5hbWUiLCJhdXRvY29tcGxldGUiLCJidG4iLCJyZW5kZXJQYWdlIiwi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QUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EscUVBQXFFLHFCQUFxQixhQUFhOztBQUV2Rzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEUiLCJmaWxlIjoiaW5kZXguYTBjYzZhNjg4N2M0ODhlMzAxYzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9zdHlsZXMuY3NzJztcbmltcG9ydCBpY29uIGZyb20gJy4uL2Fzc2V0cy9pbWcvZmF2aWNvbi5wbmcnO1xuXG5jb25zdCBlbGVtZW50ID0gKHR5cGUsIGNsYXNzTmFtZSA9IG51bGwsIHRhZyA9IG51bGwsKSA9PiB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBlbC5pbm5lckhUTUwgPSB0YWc7XG4gICAgaWYgKGNsYXNzTmFtZSA9PT0gbnVsbCkge1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsO1xufVxuXG5jb25zdCBsaW5rQ29tcG9uZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5ld0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgbmV3TGluay5yZWwgPSAnaWNvbic7XG4gICAgbmV3TGluay5ocmVmID0gaWNvbjtcblxuICAgIHJldHVybiBuZXdMaW5rO1xufVxuXG5jb25zdCBoZWFkZXJDb21wb25lbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gZWxlbWVudCgnaGVhZGVyJywgJ2hlYWRlcicpO1xuICAgIFxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGVsZW1lbnQoJ2RpdicsICdjb250YWluZXInKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIGNvbnN0IGgxID0gZWxlbWVudCgnaDEnLCAnaGVhZGVyX190aXRsZScsICdUby1kbyBBcHAnKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gICAgY29uc3QgaDIgPSBlbGVtZW50KCdoMicsICdoZWFkZXJfX3N1YnRpdGxlJywgJ1doYXQgZG8geW91IG5lZWQgdG8gZG8/Jyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGgyKTtcblxuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmNvbnN0IGFjdGlvbnNDb21wb25lbnQgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBhY3Rpb25zID0gZWxlbWVudCgnZGl2JywgJ2FjdGlvbnMnKTtcblxuICAgIGNvbnN0IGFjdGlvbnNfY29udGFpbmVyID0gZWxlbWVudCgnZGl2JywgJ2FjdGlvbnNfX2NvbnRhaW5lcicpO1xuICAgIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYWN0aW9uc19jb250YWluZXIpO1xuXG4gICAgLy8gSW5wdXQgXG4gICAgY29uc3QgaW5wdXQgPSBlbGVtZW50KCdpbnB1dCcsICdpbnB1dCcpO1xuICAgIGlucHV0LmlkID0gJ3NlYXJjaC10b2RvLXRleHQnO1xuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gJ1NlYXJjaCB0b2Rvcy4uJztcbiAgICBpbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIGFjdGlvbnNfY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIC8vIExhYmVsXG4gICAgY29uc3QgbGFiZWwgPSBlbGVtZW50KCdsYWJlbCcsICdjaGVja2JveCcpO1xuICAgIGFjdGlvbnNfY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICAgIC8vIENoZWNrYm94XG4gICAgY29uc3QgY2hlY2tib3ggPSBlbGVtZW50KCdpbnB1dCcpO1xuICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgIGNoZWNrYm94LmlkID0gJ2hpZGUtY29tcGxldGVkJztcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgXG4gICAgY29uc3QgY2hlY2tib3hUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY2hlY2tib3hUYWcuaW5uZXJIVE1MID0gJ0hpZGUgQ29tcGxldGVkJztcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChjaGVja2JveFRhZyk7XG5cbiAgICByZXR1cm4gYWN0aW9ucztcbn1cblxuY29uc3QgY29udGFpbmVyQ29tcG9uZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGVsZW1lbnQoJ2RpdicsICdjb250YWluZXInKVxuXG4gICAgY29uc3QgdG9kb3MgPSBlbGVtZW50KCdkaXYnKTtcbiAgICB0b2Rvcy5pZCA9ICd0b2Rvcyc7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9zKTtcblxuICAgIC8vIEZvcm1cbiAgICBjb25zdCBmb3JtID0gZWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uaWQgPSAnbmV3LXRvZG8nO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIC8vIElucHV0XG4gICAgY29uc3QgaW5wdXQgPSBlbGVtZW50KCdpbnB1dCcsICdpbnB1dCcpO1xuICAgIGlucHV0LmlkID0gJ3RvZG8taW5wdXQnO1xuICAgIGlucHV0Lm5hbWUgPSAndG9Ebyc7XG4gICAgaW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dC5hdXRvY29tcGxldGUgPSAnb2ZmJztcbiAgICBpbnB1dC5wbGFjZWhvbGRlciA9ICdFbnRlciB0b2RvLi4uJztcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIC8vIEJ1dHRvblxuICAgIGNvbnN0IGJ0biA9IGVsZW1lbnQoJ2J1dHRvbicsICdidXR0b24nLCAnQWRkIHRvZG8nKTtcbiAgICBidG4uaWQgPSAndG9kb3MtYnRuJztcbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ0bik7XG4gICAgXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuY29uc3QgcmVuZGVyUGFnZSA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmtDb21wb25lbnQoKSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXJDb21wb25lbnQoKSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhY3Rpb25zQ29tcG9uZW50KCkpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyQ29tcG9uZW50KCkpO1xufVxuXG4vLyBSZW5kZXIgbWFpbiBwYWdlIG9uIGxvYWRcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgcmVuZGVyUGFnZSgpKTtcblxuXG5cblxuXG5cblxuXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uL2Fzc2V0cy9mb250cy9Sb2JvdG8tUmVndWxhci50dGZcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyBmcm9tIFwiLi4vYXNzZXRzL2ZvbnRzL1JvYm90by1Cb2xkLnR0ZlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fIGZyb20gXCIuLi9hc3NldHMvZm9udHMvUm9ib3RvLUl0YWxpYy50dGZcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvLUJvbGQnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1wdXJwbGUtY29sb3I6ICM2RjQyOUM7XFxuICAgIC0tZ3JleS1jb2xvcjogIzJCMjkyRTtcXG4gICAgLS13aGl0ZS1jb2xvcjogI2ZhZmFmYTtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogNjIuNSU7IFxcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZDogIzJCMjkyRTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbmEge1xcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlLWNvbG9yKTtcXG59XFxuXFxuLyogQ29udGFpbmVyICovXFxuLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogNjByZW07XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwYWRkaW5nOiAwIDEuNnJlbTtcXG59XFxuXFxuLyogaGVhZGVyQ29tcG9uZW50Ki9cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMS42cmVtIDA7XFxufVxcblxcbi5oZWFkZXJfX3RpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzLjJyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IC40cmVtO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90by1ib2xkJztcXG59XFxuXFxuLmhlYWRlcl9fc3VidGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4vKiBhY3Rpb25zQ29tcG9uZW50Ki9cXG4uYWN0aW9ucyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTMyMzk7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5hY3Rpb25zX19jb250YWluZXIge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXgtd2lkdGg6IDYwcmVtO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcGFkZGluZzogMCAxLjZyZW07XFxufVxcblxcbi8qIEZvcm0gaW5wdXRzICovXFxuLmlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNnJlbTtcXG4gICAgcGFkZGluZzogLjRyZW0gLjhyZW07XFxufVxcblxcbi5jaGVja2JveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuXFxuLmNoZWNrYm94ID4gaW5wdXQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IC40cmVtO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgcGFkZGluZzogLjhyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNjAzYTg4O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4zcyBlYXNlLCBjb2xvciAuM3MgZWFzZTtcXG59XFxuXFxuLmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1RjNBODc7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvLUJvbGQnO1xcbn1cXG5cXG5idXR0b246Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uYnV0dG9uLS1zZWNvbmRhcnkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xcblxcbn1cXG5cXG4uYnV0dG9uLS1zZWNvbmRhcnk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjNkU2RTZFO1xcbn1cXG5cXG4uYnV0dG9uLS10ZXh0IHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogI2FhYTtcXG59XFxuXFxuLmJ1dHRvbi0tdGV4dDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi50aXRsZS1pbnB1dCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNERURGRTA7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMi40cmVtIDA7XFxuICAgIHBhZGRpbmc6IC44cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmJvZHktaW5wdXQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREVERkUwO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IDIuNHJlbSAwO1xcbiAgICBtaW4taGVpZ2h0OiAxNXJlbTtcXG4gICAgcGFkZGluZzogLjhyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKiBOb3RlIExpc3QgSXRlbSAqL1xcblxcbi5saXN0LWl0ZW0ge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiAjZmFmYWZhO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6ICMzNTMyMzk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0MjNlNDc7XFxuICAgIG1hcmdpbjogMS42cmVtIDA7XFxuICAgIHBhZGRpbmc6IDFyZW0gMS42cmVtO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3MgZWFzZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXFxufVxcblxcbi5saXN0LWl0ZW1fX2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxufVxcblxcbi5saXN0LWl0ZW1fX2NvbnRhaW5lciA+ICo6Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IC44cmVtO1xcbn1cXG5cXG4ubGlzdC1pdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzNkMzk0MTtcXG59XFxuXFxuLmxpc3QtaXRlbV9fdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjRyZW1cXG59XFxuXFxuLmxpc3QtaXRlbV9fc3VidGl0bGUge1xcbiAgICBjb2xvcjogIzY2NjtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmxpc3QtdGl0bGUge1xcbiAgICBtYXJnaW46IDMuMnJlbSAwIDEuNnJlbTtcXG59XFxuXFxuLmVtcHR5LW1lc3NhZ2Uge1xcbiAgICBtYXJnaW46IDMuMnJlbSAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiwrREFBK0Q7QUFDbkU7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsK0RBQTREO0lBQzVELGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiwrREFBOEQ7SUFDOUQsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtJQUNWLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUEsY0FBYztBQUNkO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUEsbUJBQW1CO0FBQ25CO0lBQ0ksK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUEsb0JBQW9CO0FBQ3BCO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBLGdCQUFnQjtBQUNoQjtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFDQUFxQztJQUNyQyx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxnQ0FBZ0M7SUFDaEMsK0NBQStDO0FBQ25EOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxzQkFBc0I7O0FBRTFCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBLG1CQUFtQjs7QUFFbkI7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLCtCQUErQjtJQUMvQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakI7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIHNyYzogdXJsKC4uL2Fzc2V0cy9mb250cy9Sb2JvdG8tUmVndWxhci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvLUJvbGQnO1xcbiAgICBzcmM6IHVybCguLi9hc3NldHMvZm9udHMvUm9ib3RvLUJvbGQudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBzcmM6IHVybCguLi9hc3NldHMvZm9udHMvUm9ib3RvLUl0YWxpYy50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1wdXJwbGUtY29sb3I6ICM2RjQyOUM7XFxuICAgIC0tZ3JleS1jb2xvcjogIzJCMjkyRTtcXG4gICAgLS13aGl0ZS1jb2xvcjogI2ZhZmFmYTtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogNjIuNSU7IFxcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZDogIzJCMjkyRTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbmEge1xcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlLWNvbG9yKTtcXG59XFxuXFxuLyogQ29udGFpbmVyICovXFxuLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogNjByZW07XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwYWRkaW5nOiAwIDEuNnJlbTtcXG59XFxuXFxuLyogaGVhZGVyQ29tcG9uZW50Ki9cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMS42cmVtIDA7XFxufVxcblxcbi5oZWFkZXJfX3RpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzLjJyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IC40cmVtO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90by1ib2xkJztcXG59XFxuXFxuLmhlYWRlcl9fc3VidGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4vKiBhY3Rpb25zQ29tcG9uZW50Ki9cXG4uYWN0aW9ucyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTMyMzk7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5hY3Rpb25zX19jb250YWluZXIge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXgtd2lkdGg6IDYwcmVtO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcGFkZGluZzogMCAxLjZyZW07XFxufVxcblxcbi8qIEZvcm0gaW5wdXRzICovXFxuLmlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNnJlbTtcXG4gICAgcGFkZGluZzogLjRyZW0gLjhyZW07XFxufVxcblxcbi5jaGVja2JveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuXFxuLmNoZWNrYm94ID4gaW5wdXQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IC40cmVtO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgcGFkZGluZzogLjhyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNjAzYTg4O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4zcyBlYXNlLCBjb2xvciAuM3MgZWFzZTtcXG59XFxuXFxuLmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1RjNBODc7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvLUJvbGQnO1xcbn1cXG5cXG5idXR0b246Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uYnV0dG9uLS1zZWNvbmRhcnkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xcblxcbn1cXG5cXG4uYnV0dG9uLS1zZWNvbmRhcnk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjNkU2RTZFO1xcbn1cXG5cXG4uYnV0dG9uLS10ZXh0IHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogI2FhYTtcXG59XFxuXFxuLmJ1dHRvbi0tdGV4dDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi50aXRsZS1pbnB1dCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNERURGRTA7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMi40cmVtIDA7XFxuICAgIHBhZGRpbmc6IC44cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmJvZHktaW5wdXQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREVERkUwO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IDIuNHJlbSAwO1xcbiAgICBtaW4taGVpZ2h0OiAxNXJlbTtcXG4gICAgcGFkZGluZzogLjhyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKiBOb3RlIExpc3QgSXRlbSAqL1xcblxcbi5saXN0LWl0ZW0ge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiAjZmFmYWZhO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6ICMzNTMyMzk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0MjNlNDc7XFxuICAgIG1hcmdpbjogMS42cmVtIDA7XFxuICAgIHBhZGRpbmc6IDFyZW0gMS42cmVtO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3MgZWFzZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXFxufVxcblxcbi5saXN0LWl0ZW1fX2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxufVxcblxcbi5saXN0LWl0ZW1fX2NvbnRhaW5lciA+ICo6Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IC44cmVtO1xcbn1cXG5cXG4ubGlzdC1pdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogIzNkMzk0MTtcXG59XFxuXFxuLmxpc3QtaXRlbV9fdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjRyZW1cXG59XFxuXFxuLmxpc3QtaXRlbV9fc3VidGl0bGUge1xcbiAgICBjb2xvcjogIzY2NjtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmxpc3QtdGl0bGUge1xcbiAgICBtYXJnaW46IDMuMnJlbSAwIDEuNnJlbTtcXG59XFxuXFxuLmVtcHR5LW1lc3NhZ2Uge1xcbiAgICBtYXJnaW46IDMuMnJlbSAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==