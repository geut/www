webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nextein_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nextein/posts */ "./node_modules/nextein/posts.js");
/* harmony import */ var nextein_posts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nextein_posts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nextein_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nextein/post */ "./node_modules/nextein/post.js");
/* harmony import */ var nextein_post__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nextein_post__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../site */ "./site.json");
var _site__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../site */ "./site.json", 1);
/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/hero */ "./components/hero.js");
/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/section */ "./components/section/index.js");
/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/about */ "./components/about.js");
/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/contact */ "./components/contact.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
var _jsxFileName = "/Users/elmasse/Projects/geut/www/packages/site/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












var sortByOrder = function sortByOrder(_ref, _ref2) {
  var a = _ref.data.order;
  var b = _ref2.data.order;
  return a - b;
};

var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, _getPrototypeOf(Index).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      var posts = this.props.posts;
      var sections = posts.filter(Object(nextein_posts__WEBPACK_IMPORTED_MODULE_2__["inCategory"])('front')).slice().sort(sortByOrder);
      var members = posts.filter(Object(nextein_posts__WEBPACK_IMPORTED_MODULE_2__["inCategory"])('team'));
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
        role: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, _site__WEBPACK_IMPORTED_MODULE_4__["name"])), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_hero__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), sections.map(function (post) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_section__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
          key: post.data.name
        }, post.data, {
          className: post.data.section,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(nextein_post__WEBPACK_IMPORTED_MODULE_3__["Content"], _extends({}, post, {
          renderers: {
            p: _components_section__WEBPACK_IMPORTED_MODULE_6__["Paragraph"]
          },
          className: "grid-1-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        })));
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_about__WEBPACK_IMPORTED_MODULE_7__["default"], {
        members: members,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_contact__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(nextein_posts__WEBPACK_IMPORTED_MODULE_2__["withPostsFilterBy"])(function (post) {
  return Object(nextein_posts__WEBPACK_IMPORTED_MODULE_2__["inCategory"])('front')(post) || Object(nextein_posts__WEBPACK_IMPORTED_MODULE_2__["inCategory"])('team');
})(Index));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.44b4dec472f8ad1432a7.hot-update.js.map