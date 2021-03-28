(self["webpackChunktodo_app"] = self["webpackChunktodo_app"] || []).push([["app"],{

/***/ "./src/components/app.js":
/*!*******************************!*\
  !*** ./src/components/app.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views */ "./src/components/views.js");
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters */ "./src/components/filters.js");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos */ "./src/components/todos.js");



(0,_views__WEBPACK_IMPORTED_MODULE_0__.renderTodos)(); // Search todos

document.querySelector('#search-todo-text').addEventListener('input', function (e) {
  (0,_filters__WEBPACK_IMPORTED_MODULE_1__.setFilters)({
    searchText: e.target.value
  });
  (0,_views__WEBPACK_IMPORTED_MODULE_0__.renderTodos)();
});
document.querySelector('#new-todo').addEventListener('submit', function (e) {
  e.preventDefault();
  var text = e.target.elements.toDo.value.trim();

  if (text.length > 0) {
    (0,_todos__WEBPACK_IMPORTED_MODULE_2__.createTodo)(text);
    (0,_views__WEBPACK_IMPORTED_MODULE_0__.renderTodos)();
    e.target.elements.toDo.value = '';
  }
});
document.querySelector('#hide-completed').addEventListener('change', function (e) {
  console.log('hide');
  (0,_filters__WEBPACK_IMPORTED_MODULE_1__.setFilters)({
    hideCompleted: e.target.checked
  });
  (0,_views__WEBPACK_IMPORTED_MODULE_0__.renderTodos)();
});
window.addEventListener('storage', function (e) {
  if (e.key === 'todos') {
    (0,_todos__WEBPACK_IMPORTED_MODULE_2__.loadTodos)();
    (0,_views__WEBPACK_IMPORTED_MODULE_0__.renderTodos)();
  }
});

/***/ }),

/***/ "./src/components/filters.js":
/*!***********************************!*\
  !*** ./src/components/filters.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFilters": () => (/* binding */ getFilters),
/* harmony export */   "setFilters": () => (/* binding */ setFilters)
/* harmony export */ });
var filters = {
  searchText: '',
  hideCompleted: false
};

var getFilters = function getFilters() {
  return filters;
};

var setFilters = function setFilters(_ref) {
  var searchText = _ref.searchText,
      hideCompleted = _ref.hideCompleted;

  if (typeof searchText === 'string') {
    filters.searchText = searchText;
  }

  if (typeof hideCompleted === 'boolean') {
    filters.hideCompleted = hideCompleted;
  }
};



/***/ }),

/***/ "./src/components/todos.js":
/*!*********************************!*\
  !*** ./src/components/todos.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTodos": () => (/* binding */ getTodos),
/* harmony export */   "createTodo": () => (/* binding */ createTodo),
/* harmony export */   "removeTodo": () => (/* binding */ removeTodo),
/* harmony export */   "toggleTodo": () => (/* binding */ toggleTodo),
/* harmony export */   "loadTodos": () => (/* binding */ loadTodos)
/* harmony export */ });
var _require = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js"),
    uuidv4 = _require.v4;

var todos = []; // Fetch Existing todos from localStorage

var loadTodos = function loadTodos() {
  var todosJSON = localStorage.getItem('todos');

  try {
    todos = todosJSON ? JSON.parse(todosJSON) : [];
  } catch (e) {
    todos = [];
  }
}; // Save todos to localStorage


var saveTodos = function saveTodos() {
  return localStorage.setItem('todos', JSON.stringify(todos));
}; // Get todos


var getTodos = function getTodos() {
  return todos;
};

var createTodo = function createTodo(text) {
  todos.push({
    id: uuidv4(),
    text: text,
    completed: false
  });
  saveTodos();
};

var removeTodo = function removeTodo(id) {
  var todoIndex = todos.findIndex(function (todo) {
    return todo.id === id;
  });
  if (todoIndex > -1) todos.splice(todoIndex, 1);
  saveTodos();
}; // Toggle the completed value for a given todo


var toggleTodo = function toggleTodo(id) {
  var todo = todos.find(function (todo) {
    return todo.id === id;
  });
  if (todo) todo.completed = !todo.completed;
  saveTodos();
};

loadTodos();


/***/ }),

/***/ "./src/components/views.js":
/*!*********************************!*\
  !*** ./src/components/views.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateTodoDOM": () => (/* binding */ generateTodoDOM),
/* harmony export */   "renderTodos": () => (/* binding */ renderTodos),
/* harmony export */   "generateSummaryDOM": () => (/* binding */ generateSummaryDOM)
/* harmony export */ });
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ "./src/components/todos.js");
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters */ "./src/components/filters.js");

 // Render applicationtodos based on filters 

var renderTodos = function renderTodos() {
  var todoEl = document.querySelector('#todos');

  var _getFilters = (0,_filters__WEBPACK_IMPORTED_MODULE_1__.getFilters)(),
      searchText = _getFilters.searchText,
      hideCompleted = _getFilters.hideCompleted;

  var filteredTodos = (0,_todos__WEBPACK_IMPORTED_MODULE_0__.getTodos)().filter(function (todo) {
    var searchTextMatch = todo.text.toLowerCase().includes(searchText.toLowerCase());
    var hideCompletedMatch = !hideCompleted || !todo.completed;
    return searchTextMatch && hideCompletedMatch;
  });
  var incompleteTodos = filteredTodos.filter(function (todo) {
    return !todo.completed;
  });
  todoEl.innerHTML = '';
  todoEl.appendChild(generateSummaryDOM(incompleteTodos));

  if (filteredTodos.length > 0) {
    filteredTodos.forEach(function (todo) {
      return todoEl.appendChild(generateTodoDOM(todo));
    });
  } else {
    var messageEl = document.createElement('p');
    messageEl.classList.add('empty-message');
    messageEl.textContent = 'No to-dos to show';
    todoEl.appendChild(messageEl);
  }
}; // Get the DOM elements for an individual note


var generateTodoDOM = function generateTodoDOM(todo) {
  var todoEl = document.createElement('label');
  var containerEl = document.createElement('div');
  var checkboxEl = document.createElement('input');
  var todoText = document.createElement('span');
  var removeBtn = document.createElement('button'); // Setup todo checkbox

  checkboxEl.setAttribute('type', 'checkbox');
  checkboxEl.checked = todo.completed;
  containerEl.appendChild(checkboxEl);
  checkboxEl.addEventListener('change', function () {
    (0,_todos__WEBPACK_IMPORTED_MODULE_0__.toggleTodo)(todo.id);
    renderTodos();
  }); // Setup todoText

  todo.text.length > 0 ? todoText.textContent = todo.text : todoText.textContent = 'Empty to do';
  containerEl.appendChild(todoText); // Setup container

  todoEl.classList.add('list-item');
  containerEl.classList.add('list-item__container');
  todoEl.appendChild(containerEl); //  Setup removeBtn

  removeBtn.textContent = 'remove';
  removeBtn.classList.add('button', 'button--text');
  todoEl.appendChild(removeBtn);
  removeBtn.addEventListener('click', function () {
    (0,_todos__WEBPACK_IMPORTED_MODULE_0__.removeTodo)(todo.id);
    renderTodos();
  });
  return todoEl;
};

var generateSummaryDOM = function generateSummaryDOM(incompleteTodos) {
  var summary = document.createElement('h2');
  summary.classList.add('list-title');
  var plural = incompleteTodos.length === 1 ? '' : 's';
  summary.textContent = "You have ".concat(incompleteTodos.length, " todo").concat(plural, " left");
  return summary;
};



/***/ }),

/***/ "./node_modules/uuid/index.js":
/*!************************************!*\
  !*** ./node_modules/uuid/index.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var v1 = __webpack_require__(/*! ./v1 */ "./node_modules/uuid/v1.js");
var v4 = __webpack_require__(/*! ./v4 */ "./node_modules/uuid/v4.js");

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/***/ ((module) => {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/uuid/v1.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v1.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ })

},
0,[["./src/components/app.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL2FwcC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy90b2Rvcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzL3ZpZXdzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3V1aWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvdXVpZC92MS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy91dWlkL3Y0LmpzIl0sIm5hbWVzIjpbInJlbmRlclRvZG9zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzZXRGaWx0ZXJzIiwic2VhcmNoVGV4dCIsInRhcmdldCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJ0ZXh0IiwiZWxlbWVudHMiLCJ0b0RvIiwidHJpbSIsImxlbmd0aCIsImNyZWF0ZVRvZG8iLCJjb25zb2xlIiwibG9nIiwiaGlkZUNvbXBsZXRlZCIsImNoZWNrZWQiLCJ3aW5kb3ciLCJrZXkiLCJsb2FkVG9kb3MiLCJmaWx0ZXJzIiwiZ2V0RmlsdGVycyIsInJlcXVpcmUiLCJ1dWlkdjQiLCJ2NCIsInRvZG9zIiwidG9kb3NKU09OIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInNhdmVUb2RvcyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJnZXRUb2RvcyIsInB1c2giLCJpZCIsImNvbXBsZXRlZCIsInJlbW92ZVRvZG8iLCJ0b2RvSW5kZXgiLCJmaW5kSW5kZXgiLCJ0b2RvIiwic3BsaWNlIiwidG9nZ2xlVG9kbyIsImZpbmQiLCJ0b2RvRWwiLCJmaWx0ZXJlZFRvZG9zIiwiZmlsdGVyIiwic2VhcmNoVGV4dE1hdGNoIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImhpZGVDb21wbGV0ZWRNYXRjaCIsImluY29tcGxldGVUb2RvcyIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiZ2VuZXJhdGVTdW1tYXJ5RE9NIiwiZm9yRWFjaCIsImdlbmVyYXRlVG9kb0RPTSIsIm1lc3NhZ2VFbCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZXh0Q29udGVudCIsImNvbnRhaW5lckVsIiwiY2hlY2tib3hFbCIsInRvZG9UZXh0IiwicmVtb3ZlQnRuIiwic2V0QXR0cmlidXRlIiwic3VtbWFyeSIsInBsdXJhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBQSxtREFBVyxHLENBRVg7O0FBQ0FDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixtQkFBdkIsRUFBNENDLGdCQUE1QyxDQUE2RCxPQUE3RCxFQUFzRSxVQUFDQyxDQUFELEVBQU87QUFDekVDLHNEQUFVLENBQUM7QUFDUEMsY0FBVSxFQUFFRixDQUFDLENBQUNHLE1BQUYsQ0FBU0M7QUFEZCxHQUFELENBQVY7QUFHQVIscURBQVc7QUFDZCxDQUxEO0FBT0FDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixXQUF2QixFQUFvQ0MsZ0JBQXBDLENBQXFELFFBQXJELEVBQStELFVBQUNDLENBQUQsRUFBTztBQUNsRUEsR0FBQyxDQUFDSyxjQUFGO0FBQ0EsTUFBTUMsSUFBSSxHQUFHTixDQUFDLENBQUNHLE1BQUYsQ0FBU0ksUUFBVCxDQUFrQkMsSUFBbEIsQ0FBdUJKLEtBQXZCLENBQTZCSyxJQUE3QixFQUFiOztBQUVBLE1BQUlILElBQUksQ0FBQ0ksTUFBTCxHQUFjLENBQWxCLEVBQXFCO0FBQ2pCQyxzREFBVSxDQUFDTCxJQUFELENBQVY7QUFDQVYsdURBQVc7QUFDWEksS0FBQyxDQUFDRyxNQUFGLENBQVNJLFFBQVQsQ0FBa0JDLElBQWxCLENBQXVCSixLQUF2QixHQUErQixFQUEvQjtBQUNIO0FBQ0osQ0FURDtBQVdBUCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLEVBQTBDQyxnQkFBMUMsQ0FBMkQsUUFBM0QsRUFBcUUsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3hFWSxTQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0FaLHNEQUFVLENBQUM7QUFDUGEsaUJBQWEsRUFBRWQsQ0FBQyxDQUFDRyxNQUFGLENBQVNZO0FBRGpCLEdBQUQsQ0FBVjtBQUdBbkIscURBQVc7QUFDZCxDQU5EO0FBUUFvQixNQUFNLENBQUNqQixnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxVQUFBQyxDQUFDLEVBQUk7QUFDcEMsTUFBSUEsQ0FBQyxDQUFDaUIsR0FBRixLQUFVLE9BQWQsRUFBdUI7QUFDbkJDLHFEQUFTO0FBQ1R0Qix1REFBVztBQUNkO0FBQ0osQ0FMRCxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDakNDLElBQU11QixPQUFPLEdBQUc7QUFDYmpCLFlBQVUsRUFBRSxFQURDO0FBRWJZLGVBQWEsRUFBRTtBQUZGLENBQWhCOztBQUtELElBQU1NLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsU0FBTUQsT0FBTjtBQUFBLENBQW5COztBQUVBLElBQU1sQixVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFtQztBQUFBLE1BQWhDQyxVQUFnQyxRQUFoQ0EsVUFBZ0M7QUFBQSxNQUFwQlksYUFBb0IsUUFBcEJBLGFBQW9COztBQUNuRCxNQUFJLE9BQU9aLFVBQVAsS0FBc0IsUUFBMUIsRUFBb0M7QUFDaENpQixXQUFPLENBQUNqQixVQUFSLEdBQXFCQSxVQUFyQjtBQUNIOztBQUVELE1BQUksT0FBT1ksYUFBUCxLQUF5QixTQUE3QixFQUF3QztBQUNwQ0ssV0FBTyxDQUFDTCxhQUFSLEdBQXdCQSxhQUF4QjtBQUNIO0FBQ0gsQ0FSRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VDUHVCTyxtQkFBTyxDQUFDLDBDQUFELEM7SUFBbEJDLE0sWUFBSkMsRTs7QUFFUixJQUFJQyxLQUFLLEdBQUcsRUFBWixDLENBRUE7O0FBQ0EsSUFBTU4sU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUNwQixNQUFNTyxTQUFTLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUFsQjs7QUFFQSxNQUFJO0FBQ0FILFNBQUssR0FBR0MsU0FBUyxHQUFHRyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osU0FBWCxDQUFILEdBQTJCLEVBQTVDO0FBQ0gsR0FGRCxDQUdBLE9BQU96QixDQUFQLEVBQVU7QUFDTndCLFNBQUssR0FBRyxFQUFSO0FBQ0g7QUFDSixDQVRELEMsQ0FXQTs7O0FBQ0EsSUFBTU0sU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxTQUFNSixZQUFZLENBQUNLLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEJILElBQUksQ0FBQ0ksU0FBTCxDQUFlUixLQUFmLENBQTlCLENBQU47QUFBQSxDQUFsQixDLENBRUE7OztBQUNBLElBQU1TLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsU0FBTVQsS0FBTjtBQUFBLENBQWpCOztBQUVBLElBQU1iLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNMLElBQUQsRUFBVTtBQUN6QmtCLE9BQUssQ0FBQ1UsSUFBTixDQUFXO0FBQ1BDLE1BQUUsRUFBRWIsTUFBTSxFQURIO0FBRVBoQixRQUFJLEVBQUpBLElBRk87QUFHUDhCLGFBQVMsRUFBRTtBQUhKLEdBQVg7QUFLQU4sV0FBUztBQUNaLENBUEQ7O0FBU0EsSUFBTU8sVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQUYsRUFBRSxFQUFJO0FBQ3JCLE1BQU1HLFNBQVMsR0FBR2QsS0FBSyxDQUFDZSxTQUFOLENBQWdCLFVBQUFDLElBQUk7QUFBQSxXQUFJQSxJQUFJLENBQUNMLEVBQUwsS0FBWUEsRUFBaEI7QUFBQSxHQUFwQixDQUFsQjtBQUNBLE1BQUlHLFNBQVMsR0FBRyxDQUFDLENBQWpCLEVBQW9CZCxLQUFLLENBQUNpQixNQUFOLENBQWFILFNBQWIsRUFBd0IsQ0FBeEI7QUFDcEJSLFdBQVM7QUFDWixDQUpELEMsQ0FNQTs7O0FBQ0EsSUFBTVksVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQVAsRUFBRSxFQUFJO0FBQ3JCLE1BQU1LLElBQUksR0FBR2hCLEtBQUssQ0FBQ21CLElBQU4sQ0FBVyxVQUFBSCxJQUFJO0FBQUEsV0FBSUEsSUFBSSxDQUFDTCxFQUFMLEtBQVlBLEVBQWhCO0FBQUEsR0FBZixDQUFiO0FBQ0EsTUFBSUssSUFBSixFQUFVQSxJQUFJLENBQUNKLFNBQUwsR0FBaUIsQ0FBQ0ksSUFBSSxDQUFDSixTQUF2QjtBQUNWTixXQUFTO0FBQ1osQ0FKRDs7QUFNQVosU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q1Q7Q0FHQTs7QUFDQSxJQUFNdEIsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0QixNQUFNZ0QsTUFBTSxHQUFHL0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7O0FBRHNCLG9CQUVnQnNCLG9EQUFVLEVBRjFCO0FBQUEsTUFFZGxCLFVBRmMsZUFFZEEsVUFGYztBQUFBLE1BRUZZLGFBRkUsZUFFRkEsYUFGRTs7QUFJdEIsTUFBTStCLGFBQWEsR0FBR1osZ0RBQVEsR0FBR2EsTUFBWCxDQUFrQixVQUFBTixJQUFJLEVBQUk7QUFDNUMsUUFBTU8sZUFBZSxHQUFHUCxJQUFJLENBQUNsQyxJQUFMLENBQVUwQyxXQUFWLEdBQXdCQyxRQUF4QixDQUFpQy9DLFVBQVUsQ0FBQzhDLFdBQVgsRUFBakMsQ0FBeEI7QUFDQSxRQUFNRSxrQkFBa0IsR0FBRyxDQUFDcEMsYUFBRCxJQUFrQixDQUFDMEIsSUFBSSxDQUFDSixTQUFuRDtBQUVBLFdBQU9XLGVBQWUsSUFBSUcsa0JBQTFCO0FBQ0gsR0FMcUIsQ0FBdEI7QUFPQSxNQUFNQyxlQUFlLEdBQUdOLGFBQWEsQ0FBQ0MsTUFBZCxDQUFxQixVQUFBTixJQUFJO0FBQUEsV0FBSSxDQUFDQSxJQUFJLENBQUNKLFNBQVY7QUFBQSxHQUF6QixDQUF4QjtBQUVBUSxRQUFNLENBQUNRLFNBQVAsR0FBbUIsRUFBbkI7QUFDQVIsUUFBTSxDQUFDUyxXQUFQLENBQW1CQyxrQkFBa0IsQ0FBQ0gsZUFBRCxDQUFyQzs7QUFFQSxNQUFJTixhQUFhLENBQUNuQyxNQUFkLEdBQXVCLENBQTNCLEVBQThCO0FBQzFCbUMsaUJBQWEsQ0FBQ1UsT0FBZCxDQUFzQixVQUFBZixJQUFJO0FBQUEsYUFBSUksTUFBTSxDQUFDUyxXQUFQLENBQW1CRyxlQUFlLENBQUNoQixJQUFELENBQWxDLENBQUo7QUFBQSxLQUExQjtBQUNILEdBRkQsTUFHSztBQUNELFFBQU1pQixTQUFTLEdBQUc1RCxRQUFRLENBQUM2RCxhQUFULENBQXVCLEdBQXZCLENBQWxCO0FBQ0FELGFBQVMsQ0FBQ0UsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsZUFBeEI7QUFDQUgsYUFBUyxDQUFDSSxXQUFWLEdBQXdCLG1CQUF4QjtBQUNBakIsVUFBTSxDQUFDUyxXQUFQLENBQW1CSSxTQUFuQjtBQUNIO0FBQ0osQ0F6QkQsQyxDQTJCQTs7O0FBQ0EsSUFBTUQsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBaEIsSUFBSSxFQUFJO0FBQzVCLE1BQU1JLE1BQU0sR0FBRy9DLFFBQVEsQ0FBQzZELGFBQVQsQ0FBdUIsT0FBdkIsQ0FBZjtBQUNBLE1BQU1JLFdBQVcsR0FBR2pFLFFBQVEsQ0FBQzZELGFBQVQsQ0FBdUIsS0FBdkIsQ0FBcEI7QUFDQSxNQUFNSyxVQUFVLEdBQUdsRSxRQUFRLENBQUM2RCxhQUFULENBQXVCLE9BQXZCLENBQW5CO0FBQ0EsTUFBTU0sUUFBUSxHQUFHbkUsUUFBUSxDQUFDNkQsYUFBVCxDQUF1QixNQUF2QixDQUFqQjtBQUNBLE1BQU1PLFNBQVMsR0FBR3BFLFFBQVEsQ0FBQzZELGFBQVQsQ0FBdUIsUUFBdkIsQ0FBbEIsQ0FMNEIsQ0FPNUI7O0FBQ0FLLFlBQVUsQ0FBQ0csWUFBWCxDQUF3QixNQUF4QixFQUFnQyxVQUFoQztBQUNBSCxZQUFVLENBQUNoRCxPQUFYLEdBQXFCeUIsSUFBSSxDQUFDSixTQUExQjtBQUNBMEIsYUFBVyxDQUFDVCxXQUFaLENBQXdCVSxVQUF4QjtBQUNBQSxZQUFVLENBQUNoRSxnQkFBWCxDQUE0QixRQUE1QixFQUFzQyxZQUFNO0FBQ3hDMkMsc0RBQVUsQ0FBQ0YsSUFBSSxDQUFDTCxFQUFOLENBQVY7QUFDQXZDLGVBQVc7QUFDZCxHQUhELEVBWDRCLENBZ0I1Qjs7QUFDQTRDLE1BQUksQ0FBQ2xDLElBQUwsQ0FBVUksTUFBVixHQUFtQixDQUFuQixHQUF1QnNELFFBQVEsQ0FBQ0gsV0FBVCxHQUF1QnJCLElBQUksQ0FBQ2xDLElBQW5ELEdBQTBEMEQsUUFBUSxDQUFDSCxXQUFULEdBQXVCLGFBQWpGO0FBQ0FDLGFBQVcsQ0FBQ1QsV0FBWixDQUF3QlcsUUFBeEIsRUFsQjRCLENBb0I1Qjs7QUFDQXBCLFFBQU0sQ0FBQ2UsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsV0FBckI7QUFDQUUsYUFBVyxDQUFDSCxTQUFaLENBQXNCQyxHQUF0QixDQUEwQixzQkFBMUI7QUFDQWhCLFFBQU0sQ0FBQ1MsV0FBUCxDQUFtQlMsV0FBbkIsRUF2QjRCLENBeUI1Qjs7QUFDQUcsV0FBUyxDQUFDSixXQUFWLEdBQXdCLFFBQXhCO0FBQ0FJLFdBQVMsQ0FBQ04sU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsUUFBeEIsRUFBa0MsY0FBbEM7QUFDQWhCLFFBQU0sQ0FBQ1MsV0FBUCxDQUFtQlksU0FBbkI7QUFDQUEsV0FBUyxDQUFDbEUsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsWUFBTTtBQUN0Q3NDLHNEQUFVLENBQUNHLElBQUksQ0FBQ0wsRUFBTixDQUFWO0FBQ0F2QyxlQUFXO0FBQ2QsR0FIRDtBQUtBLFNBQU9nRCxNQUFQO0FBQ0gsQ0FuQ0Q7O0FBcUNBLElBQU1VLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQUgsZUFBZSxFQUFJO0FBQzFDLE1BQU1nQixPQUFPLEdBQUd0RSxRQUFRLENBQUM2RCxhQUFULENBQXVCLElBQXZCLENBQWhCO0FBQ0FTLFNBQU8sQ0FBQ1IsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsWUFBdEI7QUFFQSxNQUFNUSxNQUFNLEdBQUdqQixlQUFlLENBQUN6QyxNQUFoQixLQUEyQixDQUEzQixHQUErQixFQUEvQixHQUFvQyxHQUFuRDtBQUNBeUQsU0FBTyxDQUFDTixXQUFSLHNCQUFrQ1YsZUFBZSxDQUFDekMsTUFBbEQsa0JBQWdFMEQsTUFBaEU7QUFDQSxTQUFPRCxPQUFQO0FBQ0gsQ0FQRDs7Ozs7Ozs7Ozs7O0FDckVBLFNBQVMsbUJBQU8sQ0FBQyx1Q0FBTTtBQUN2QixTQUFTLG1CQUFPLENBQUMsdUNBQU07O0FBRXZCO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNqQ0EsVUFBVSxtQkFBTyxDQUFDLHlEQUFXO0FBQzdCLGtCQUFrQixtQkFBTyxDQUFDLGlFQUFtQjs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQztBQUNuQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDNUdBLFVBQVUsbUJBQU8sQ0FBQyx5REFBVztBQUM3QixrQkFBa0IsbUJBQU8sQ0FBQyxpRUFBbUI7O0FBRTdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBIiwiZmlsZSI6ImFwcC42NTM0ODU4OTg2YjE0ZDYyNWQ0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlclRvZG9zIH0gZnJvbSAnLi92aWV3cydcbmltcG9ydCB7IHNldEZpbHRlcnMgfSBmcm9tICcuL2ZpbHRlcnMnXG5pbXBvcnQgeyBjcmVhdGVUb2RvLCBsb2FkVG9kb3MgfSBmcm9tICcuL3RvZG9zJ1xuXG5yZW5kZXJUb2RvcygpO1xuXG4vLyBTZWFyY2ggdG9kb3NcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtdG9kby10ZXh0JykuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgIHNldEZpbHRlcnMoe1xuICAgICAgICBzZWFyY2hUZXh0OiBlLnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICAgIHJlbmRlclRvZG9zKCk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy10b2RvJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGV4dCA9IGUudGFyZ2V0LmVsZW1lbnRzLnRvRG8udmFsdWUudHJpbSgpO1xuXG4gICAgaWYgKHRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICBjcmVhdGVUb2RvKHRleHQpXG4gICAgICAgIHJlbmRlclRvZG9zKCk7XG4gICAgICAgIGUudGFyZ2V0LmVsZW1lbnRzLnRvRG8udmFsdWUgPSAnJztcbiAgICB9XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hpZGUtY29tcGxldGVkJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZygnaGlkZScpXG4gICAgc2V0RmlsdGVycyh7XG4gICAgICAgIGhpZGVDb21wbGV0ZWQ6IGUudGFyZ2V0LmNoZWNrZWRcbiAgICB9KVxuICAgIHJlbmRlclRvZG9zKCk7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCBlID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICd0b2RvcycpIHtcbiAgICAgICAgbG9hZFRvZG9zKCk7XG4gICAgICAgIHJlbmRlclRvZG9zKCk7XG4gICAgfVxufSlcbiIsIiBjb25zdCBmaWx0ZXJzID0ge1xuICAgIHNlYXJjaFRleHQ6ICcnLFxuICAgIGhpZGVDb21wbGV0ZWQ6IGZhbHNlXG59XG5cbmNvbnN0IGdldEZpbHRlcnMgPSAoKSA9PiBmaWx0ZXJzO1xuXG5jb25zdCBzZXRGaWx0ZXJzID0gKHsgc2VhcmNoVGV4dCwgaGlkZUNvbXBsZXRlZCB9KSA9PiB7XG4gICBpZiAodHlwZW9mIHNlYXJjaFRleHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgZmlsdGVycy5zZWFyY2hUZXh0ID0gc2VhcmNoVGV4dDtcbiAgIH1cblxuICAgaWYgKHR5cGVvZiBoaWRlQ29tcGxldGVkID09PSAnYm9vbGVhbicpIHtcbiAgICAgICBmaWx0ZXJzLmhpZGVDb21wbGV0ZWQgPSBoaWRlQ29tcGxldGVkO1xuICAgfVxufVxuXG5leHBvcnQgeyBnZXRGaWx0ZXJzLCBzZXRGaWx0ZXJzIH07XG5cblxuIiwiY29uc3QgeyB2NDogdXVpZHY0IH0gPSByZXF1aXJlKCd1dWlkJyk7XG5cbmxldCB0b2RvcyA9IFtdO1xuXG4vLyBGZXRjaCBFeGlzdGluZyB0b2RvcyBmcm9tIGxvY2FsU3RvcmFnZVxuY29uc3QgbG9hZFRvZG9zID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvZG9zSlNPTiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgdG9kb3MgPSB0b2Rvc0pTT04gPyBKU09OLnBhcnNlKHRvZG9zSlNPTikgOiBbXTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgdG9kb3MgPSBbXTtcbiAgICB9XG59XG5cbi8vIFNhdmUgdG9kb3MgdG8gbG9jYWxTdG9yYWdlXG5jb25zdCBzYXZlVG9kb3MgPSAoKSA9PiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuXG4vLyBHZXQgdG9kb3NcbmNvbnN0IGdldFRvZG9zID0gKCkgPT4gdG9kb3M7XG5cbmNvbnN0IGNyZWF0ZVRvZG8gPSAodGV4dCkgPT4ge1xuICAgIHRvZG9zLnB1c2goe1xuICAgICAgICBpZDogdXVpZHY0KCksXG4gICAgICAgIHRleHQsXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2VcbiAgICB9KVxuICAgIHNhdmVUb2RvcygpXG59XG5cbmNvbnN0IHJlbW92ZVRvZG8gPSBpZCA9PiB7XG4gICAgY29uc3QgdG9kb0luZGV4ID0gdG9kb3MuZmluZEluZGV4KHRvZG8gPT4gdG9kby5pZCA9PT0gaWQpO1xuICAgIGlmICh0b2RvSW5kZXggPiAtMSkgdG9kb3Muc3BsaWNlKHRvZG9JbmRleCwgMSlcbiAgICBzYXZlVG9kb3MoKVxufVxuXG4vLyBUb2dnbGUgdGhlIGNvbXBsZXRlZCB2YWx1ZSBmb3IgYSBnaXZlbiB0b2RvXG5jb25zdCB0b2dnbGVUb2RvID0gaWQgPT4ge1xuICAgIGNvbnN0IHRvZG8gPSB0b2Rvcy5maW5kKHRvZG8gPT4gdG9kby5pZCA9PT0gaWQpO1xuICAgIGlmICh0b2RvKSB0b2RvLmNvbXBsZXRlZCA9ICF0b2RvLmNvbXBsZXRlZDtcbiAgICBzYXZlVG9kb3MoKVxufTtcblxubG9hZFRvZG9zKCk7XG5leHBvcnQgeyBnZXRUb2RvcywgY3JlYXRlVG9kbywgcmVtb3ZlVG9kbywgdG9nZ2xlVG9kbywgbG9hZFRvZG9zIH0gXG5cblxuIiwiaW1wb3J0IHsgZ2V0VG9kb3MsIHRvZ2dsZVRvZG8sIHJlbW92ZVRvZG8gfSBmcm9tICcuL3RvZG9zJ1xuaW1wb3J0IHsgZ2V0RmlsdGVycyB9IGZyb20gJy4vZmlsdGVycydcblxuLy8gUmVuZGVyIGFwcGxpY2F0aW9udG9kb3MgYmFzZWQgb24gZmlsdGVycyBcbmNvbnN0IHJlbmRlclRvZG9zID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvZG9FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvcycpO1xuICAgIGNvbnN0IHsgc2VhcmNoVGV4dCwgaGlkZUNvbXBsZXRlZCB9ID0gZ2V0RmlsdGVycygpO1xuXG4gICAgY29uc3QgZmlsdGVyZWRUb2RvcyA9IGdldFRvZG9zKCkuZmlsdGVyKHRvZG8gPT4ge1xuICAgICAgICBjb25zdCBzZWFyY2hUZXh0TWF0Y2ggPSB0b2RvLnRleHQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXh0LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICBjb25zdCBoaWRlQ29tcGxldGVkTWF0Y2ggPSAhaGlkZUNvbXBsZXRlZCB8fCAhdG9kby5jb21wbGV0ZWQ7XG5cbiAgICAgICAgcmV0dXJuIHNlYXJjaFRleHRNYXRjaCAmJiBoaWRlQ29tcGxldGVkTWF0Y2g7XG4gICAgfSk7XG5cbiAgICBjb25zdCBpbmNvbXBsZXRlVG9kb3MgPSBmaWx0ZXJlZFRvZG9zLmZpbHRlcih0b2RvID0+ICF0b2RvLmNvbXBsZXRlZCk7XG5cbiAgICB0b2RvRWwuaW5uZXJIVE1MID0gJyc7XG4gICAgdG9kb0VsLmFwcGVuZENoaWxkKGdlbmVyYXRlU3VtbWFyeURPTShpbmNvbXBsZXRlVG9kb3MpKTtcblxuICAgIGlmIChmaWx0ZXJlZFRvZG9zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZmlsdGVyZWRUb2Rvcy5mb3JFYWNoKHRvZG8gPT4gdG9kb0VsLmFwcGVuZENoaWxkKGdlbmVyYXRlVG9kb0RPTSh0b2RvKSkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBtZXNzYWdlRWwuY2xhc3NMaXN0LmFkZCgnZW1wdHktbWVzc2FnZScpO1xuICAgICAgICBtZXNzYWdlRWwudGV4dENvbnRlbnQgPSAnTm8gdG8tZG9zIHRvIHNob3cnO1xuICAgICAgICB0b2RvRWwuYXBwZW5kQ2hpbGQobWVzc2FnZUVsKTtcbiAgICB9XG59O1xuXG4vLyBHZXQgdGhlIERPTSBlbGVtZW50cyBmb3IgYW4gaW5kaXZpZHVhbCBub3RlXG5jb25zdCBnZW5lcmF0ZVRvZG9ET00gPSB0b2RvID0+IHtcbiAgICBjb25zdCB0b2RvRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IGNvbnRhaW5lckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY2hlY2tib3hFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgdG9kb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAvLyBTZXR1cCB0b2RvIGNoZWNrYm94XG4gICAgY2hlY2tib3hFbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICBjaGVja2JveEVsLmNoZWNrZWQgPSB0b2RvLmNvbXBsZXRlZDtcbiAgICBjb250YWluZXJFbC5hcHBlbmRDaGlsZChjaGVja2JveEVsKTtcbiAgICBjaGVja2JveEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdG9nZ2xlVG9kbyh0b2RvLmlkKTtcbiAgICAgICAgcmVuZGVyVG9kb3MoKTtcbiAgICB9KTtcblxuICAgIC8vIFNldHVwIHRvZG9UZXh0XG4gICAgdG9kby50ZXh0Lmxlbmd0aCA+IDAgPyB0b2RvVGV4dC50ZXh0Q29udGVudCA9IHRvZG8udGV4dCA6IHRvZG9UZXh0LnRleHRDb250ZW50ID0gJ0VtcHR5IHRvIGRvJztcbiAgICBjb250YWluZXJFbC5hcHBlbmRDaGlsZCh0b2RvVGV4dCk7XG5cbiAgICAvLyBTZXR1cCBjb250YWluZXJcbiAgICB0b2RvRWwuY2xhc3NMaXN0LmFkZCgnbGlzdC1pdGVtJyk7XG4gICAgY29udGFpbmVyRWwuY2xhc3NMaXN0LmFkZCgnbGlzdC1pdGVtX19jb250YWluZXInKTtcbiAgICB0b2RvRWwuYXBwZW5kQ2hpbGQoY29udGFpbmVyRWwpO1xuXG4gICAgLy8gIFNldHVwIHJlbW92ZUJ0blxuICAgIHJlbW92ZUJ0bi50ZXh0Q29udGVudCA9ICdyZW1vdmUnO1xuICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKCdidXR0b24nLCAnYnV0dG9uLS10ZXh0Jyk7XG4gICAgdG9kb0VsLmFwcGVuZENoaWxkKHJlbW92ZUJ0bik7XG4gICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICByZW1vdmVUb2RvKHRvZG8uaWQpO1xuICAgICAgICByZW5kZXJUb2RvcygpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRvZG9FbDtcbn1cblxuY29uc3QgZ2VuZXJhdGVTdW1tYXJ5RE9NID0gaW5jb21wbGV0ZVRvZG9zID0+IHtcbiAgICBjb25zdCBzdW1tYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBzdW1tYXJ5LmNsYXNzTGlzdC5hZGQoJ2xpc3QtdGl0bGUnKTtcblxuICAgIGNvbnN0IHBsdXJhbCA9IGluY29tcGxldGVUb2Rvcy5sZW5ndGggPT09IDEgPyAnJyA6ICdzJztcbiAgICBzdW1tYXJ5LnRleHRDb250ZW50ID0gYFlvdSBoYXZlICR7aW5jb21wbGV0ZVRvZG9zLmxlbmd0aH0gdG9kbyR7cGx1cmFsfSBsZWZ0YDtcbiAgICByZXR1cm4gc3VtbWFyeTtcbn07XG5cbmV4cG9ydCB7IGdlbmVyYXRlVG9kb0RPTSwgcmVuZGVyVG9kb3MsIGdlbmVyYXRlU3VtbWFyeURPTSB9OyIsInZhciB2MSA9IHJlcXVpcmUoJy4vdjEnKTtcbnZhciB2NCA9IHJlcXVpcmUoJy4vdjQnKTtcblxudmFyIHV1aWQgPSB2NDtcbnV1aWQudjEgPSB2MTtcbnV1aWQudjQgPSB2NDtcblxubW9kdWxlLmV4cG9ydHMgPSB1dWlkO1xuIiwiLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG52YXIgYnl0ZVRvSGV4ID0gW107XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleFtpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG59XG5cbmZ1bmN0aW9uIGJ5dGVzVG9VdWlkKGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gb2Zmc2V0IHx8IDA7XG4gIHZhciBidGggPSBieXRlVG9IZXg7XG4gIC8vIGpvaW4gdXNlZCB0byBmaXggbWVtb3J5IGlzc3VlIGNhdXNlZCBieSBjb25jYXRlbmF0aW9uOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMTc1I2M0XG4gIHJldHVybiAoW1xuICAgIGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG4gICAgYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuICAgIGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcbiAgICBidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG4gICAgYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuICAgIGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG4gICAgYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSxcbiAgICBidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dXG4gIF0pLmpvaW4oJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ5dGVzVG9VdWlkO1xuIiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gIEluIHRoZVxuLy8gYnJvd3NlciB0aGlzIGlzIGEgbGl0dGxlIGNvbXBsaWNhdGVkIGR1ZSB0byB1bmtub3duIHF1YWxpdHkgb2YgTWF0aC5yYW5kb20oKVxuLy8gYW5kIGluY29uc2lzdGVudCBzdXBwb3J0IGZvciB0aGUgYGNyeXB0b2AgQVBJLiAgV2UgZG8gdGhlIGJlc3Qgd2UgY2FuIHZpYVxuLy8gZmVhdHVyZS1kZXRlY3Rpb25cblxuLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvXG4vLyBpbXBsZW1lbnRhdGlvbi4gQWxzbywgZmluZCB0aGUgY29tcGxldGUgaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIG9uIElFMTEuXG52YXIgZ2V0UmFuZG9tVmFsdWVzID0gKHR5cGVvZihjcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZihtc0NyeXB0bykgIT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5tc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0bykpO1xuXG5pZiAoZ2V0UmFuZG9tVmFsdWVzKSB7XG4gIC8vIFdIQVRXRyBjcnlwdG8gUk5HIC0gaHR0cDovL3dpa2kud2hhdHdnLm9yZy93aWtpL0NyeXB0b1xuICB2YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHdoYXR3Z1JORygpIHtcbiAgICBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xuICAgIHJldHVybiBybmRzODtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIE1hdGgucmFuZG9tKCktYmFzZWQgKFJORylcbiAgLy9cbiAgLy8gSWYgYWxsIGVsc2UgZmFpbHMsIHVzZSBNYXRoLnJhbmRvbSgpLiAgSXQncyBmYXN0LCBidXQgaXMgb2YgdW5zcGVjaWZpZWRcbiAgLy8gcXVhbGl0eS5cbiAgdmFyIHJuZHMgPSBuZXcgQXJyYXkoMTYpO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWF0aFJORygpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgcjsgaSA8IDE2OyBpKyspIHtcbiAgICAgIGlmICgoaSAmIDB4MDMpID09PSAwKSByID0gTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMDAwO1xuICAgICAgcm5kc1tpXSA9IHIgPj4+ICgoaSAmIDB4MDMpIDw8IDMpICYgMHhmZjtcbiAgICB9XG5cbiAgICByZXR1cm4gcm5kcztcbiAgfTtcbn1cbiIsInZhciBybmcgPSByZXF1aXJlKCcuL2xpYi9ybmcnKTtcbnZhciBieXRlc1RvVXVpZCA9IHJlcXVpcmUoJy4vbGliL2J5dGVzVG9VdWlkJyk7XG5cbi8vICoqYHYxKClgIC0gR2VuZXJhdGUgdGltZS1iYXNlZCBVVUlEKipcbi8vXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vTGlvc0svVVVJRC5qc1xuLy8gYW5kIGh0dHA6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS91dWlkLmh0bWxcblxudmFyIF9ub2RlSWQ7XG52YXIgX2Nsb2Nrc2VxO1xuXG4vLyBQcmV2aW91cyB1dWlkIGNyZWF0aW9uIHRpbWVcbnZhciBfbGFzdE1TZWNzID0gMDtcbnZhciBfbGFzdE5TZWNzID0gMDtcblxuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCBmb3IgQVBJIGRldGFpbHNcbmZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICB2YXIgYiA9IGJ1ZiB8fCBbXTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIG5vZGUgPSBvcHRpb25zLm5vZGUgfHwgX25vZGVJZDtcbiAgdmFyIGNsb2Nrc2VxID0gb3B0aW9ucy5jbG9ja3NlcSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5jbG9ja3NlcSA6IF9jbG9ja3NlcTtcblxuICAvLyBub2RlIGFuZCBjbG9ja3NlcSBuZWVkIHRvIGJlIGluaXRpYWxpemVkIHRvIHJhbmRvbSB2YWx1ZXMgaWYgdGhleSdyZSBub3RcbiAgLy8gc3BlY2lmaWVkLiAgV2UgZG8gdGhpcyBsYXppbHkgdG8gbWluaW1pemUgaXNzdWVzIHJlbGF0ZWQgdG8gaW5zdWZmaWNpZW50XG4gIC8vIHN5c3RlbSBlbnRyb3B5LiAgU2VlICMxODlcbiAgaWYgKG5vZGUgPT0gbnVsbCB8fCBjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgdmFyIHNlZWRCeXRlcyA9IHJuZygpO1xuICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjUsIGNyZWF0ZSBhbmQgNDgtYml0IG5vZGUgaWQsICg0NyByYW5kb20gYml0cyArIG11bHRpY2FzdCBiaXQgPSAxKVxuICAgICAgbm9kZSA9IF9ub2RlSWQgPSBbXG4gICAgICAgIHNlZWRCeXRlc1swXSB8IDB4MDEsXG4gICAgICAgIHNlZWRCeXRlc1sxXSwgc2VlZEJ5dGVzWzJdLCBzZWVkQnl0ZXNbM10sIHNlZWRCeXRlc1s0XSwgc2VlZEJ5dGVzWzVdXG4gICAgICBdO1xuICAgIH1cbiAgICBpZiAoY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcbiAgICAgIGNsb2Nrc2VxID0gX2Nsb2Nrc2VxID0gKHNlZWRCeXRlc1s2XSA8PCA4IHwgc2VlZEJ5dGVzWzddKSAmIDB4M2ZmZjtcbiAgICB9XG4gIH1cblxuICAvLyBVVUlEIHRpbWVzdGFtcHMgYXJlIDEwMCBuYW5vLXNlY29uZCB1bml0cyBzaW5jZSB0aGUgR3JlZ29yaWFuIGVwb2NoLFxuICAvLyAoMTU4Mi0xMC0xNSAwMDowMCkuICBKU051bWJlcnMgYXJlbid0IHByZWNpc2UgZW5vdWdoIGZvciB0aGlzLCBzb1xuICAvLyB0aW1lIGlzIGhhbmRsZWQgaW50ZXJuYWxseSBhcyAnbXNlY3MnIChpbnRlZ2VyIG1pbGxpc2Vjb25kcykgYW5kICduc2VjcydcbiAgLy8gKDEwMC1uYW5vc2Vjb25kcyBvZmZzZXQgZnJvbSBtc2Vjcykgc2luY2UgdW5peCBlcG9jaCwgMTk3MC0wMS0wMSAwMDowMC5cbiAgdmFyIG1zZWNzID0gb3B0aW9ucy5tc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5tc2VjcyA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gIC8vIFBlciA0LjIuMS4yLCB1c2UgY291bnQgb2YgdXVpZCdzIGdlbmVyYXRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgY2xvY2tcbiAgLy8gY3ljbGUgdG8gc2ltdWxhdGUgaGlnaGVyIHJlc29sdXRpb24gY2xvY2tcbiAgdmFyIG5zZWNzID0gb3B0aW9ucy5uc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uc2VjcyA6IF9sYXN0TlNlY3MgKyAxO1xuXG4gIC8vIFRpbWUgc2luY2UgbGFzdCB1dWlkIGNyZWF0aW9uIChpbiBtc2VjcylcbiAgdmFyIGR0ID0gKG1zZWNzIC0gX2xhc3RNU2VjcykgKyAobnNlY3MgLSBfbGFzdE5TZWNzKS8xMDAwMDtcblxuICAvLyBQZXIgNC4yLjEuMiwgQnVtcCBjbG9ja3NlcSBvbiBjbG9jayByZWdyZXNzaW9uXG4gIGlmIChkdCA8IDAgJiYgb3B0aW9ucy5jbG9ja3NlcSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2xvY2tzZXEgPSBjbG9ja3NlcSArIDEgJiAweDNmZmY7XG4gIH1cblxuICAvLyBSZXNldCBuc2VjcyBpZiBjbG9jayByZWdyZXNzZXMgKG5ldyBjbG9ja3NlcSkgb3Igd2UndmUgbW92ZWQgb250byBhIG5ld1xuICAvLyB0aW1lIGludGVydmFsXG4gIGlmICgoZHQgPCAwIHx8IG1zZWNzID4gX2xhc3RNU2VjcykgJiYgb3B0aW9ucy5uc2VjcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbnNlY3MgPSAwO1xuICB9XG5cbiAgLy8gUGVyIDQuMi4xLjIgVGhyb3cgZXJyb3IgaWYgdG9vIG1hbnkgdXVpZHMgYXJlIHJlcXVlc3RlZFxuICBpZiAobnNlY3MgPj0gMTAwMDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3V1aWQudjEoKTogQ2FuXFwndCBjcmVhdGUgbW9yZSB0aGFuIDEwTSB1dWlkcy9zZWMnKTtcbiAgfVxuXG4gIF9sYXN0TVNlY3MgPSBtc2VjcztcbiAgX2xhc3ROU2VjcyA9IG5zZWNzO1xuICBfY2xvY2tzZXEgPSBjbG9ja3NlcTtcblxuICAvLyBQZXIgNC4xLjQgLSBDb252ZXJ0IGZyb20gdW5peCBlcG9jaCB0byBHcmVnb3JpYW4gZXBvY2hcbiAgbXNlY3MgKz0gMTIyMTkyOTI4MDAwMDA7XG5cbiAgLy8gYHRpbWVfbG93YFxuICB2YXIgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gIGJbaSsrXSA9IHRsID4+PiAyNCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiAxNiAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdGwgJiAweGZmO1xuXG4gIC8vIGB0aW1lX21pZGBcbiAgdmFyIHRtaCA9IChtc2VjcyAvIDB4MTAwMDAwMDAwICogMTAwMDApICYgMHhmZmZmZmZmO1xuICBiW2krK10gPSB0bWggPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bWggJiAweGZmO1xuXG4gIC8vIGB0aW1lX2hpZ2hfYW5kX3ZlcnNpb25gXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMjQgJiAweGYgfCAweDEwOyAvLyBpbmNsdWRlIHZlcnNpb25cbiAgYltpKytdID0gdG1oID4+PiAxNiAmIDB4ZmY7XG5cbiAgLy8gYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgIChQZXIgNC4yLjIgLSBpbmNsdWRlIHZhcmlhbnQpXG4gIGJbaSsrXSA9IGNsb2Nrc2VxID4+PiA4IHwgMHg4MDtcblxuICAvLyBgY2xvY2tfc2VxX2xvd2BcbiAgYltpKytdID0gY2xvY2tzZXEgJiAweGZmO1xuXG4gIC8vIGBub2RlYFxuICBmb3IgKHZhciBuID0gMDsgbiA8IDY7ICsrbikge1xuICAgIGJbaSArIG5dID0gbm9kZVtuXTtcbiAgfVxuXG4gIHJldHVybiBidWYgPyBidWYgOiBieXRlc1RvVXVpZChiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2MTtcbiIsInZhciBybmcgPSByZXF1aXJlKCcuL2xpYi9ybmcnKTtcbnZhciBieXRlc1RvVXVpZCA9IHJlcXVpcmUoJy4vbGliL2J5dGVzVG9VdWlkJyk7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuXG4gIGlmICh0eXBlb2Yob3B0aW9ucykgPT0gJ3N0cmluZycpIHtcbiAgICBidWYgPSBvcHRpb25zID09PSAnYmluYXJ5JyA/IG5ldyBBcnJheSgxNikgOiBudWxsO1xuICAgIG9wdGlvbnMgPSBudWxsO1xuICB9XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTtcblxuICAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG4gIHJuZHNbNl0gPSAocm5kc1s2XSAmIDB4MGYpIHwgMHg0MDtcbiAgcm5kc1s4XSA9IChybmRzWzhdICYgMHgzZikgfCAweDgwO1xuXG4gIC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuICBpZiAoYnVmKSB7XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IDE2OyArK2lpKSB7XG4gICAgICBidWZbaSArIGlpXSA9IHJuZHNbaWldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWYgfHwgYnl0ZXNUb1V1aWQocm5kcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdjQ7XG4iXSwic291cmNlUm9vdCI6IiJ9