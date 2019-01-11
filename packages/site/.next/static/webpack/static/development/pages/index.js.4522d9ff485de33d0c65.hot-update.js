webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/contact.js":
/*!*******************************!*\
  !*** ./components/contact.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section */ "./components/section/index.js");
var _jsxFileName = "/Users/elmasse/Projects/geut/www/packages/site/components/contact.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Contact =
/*#__PURE__*/
function (_Component) {
  _inherits(Contact, _Component);

  function Contact() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Contact);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Contact)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      honeypot: '',
      name: '',
      email: '',
      company: '',
      comment: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSubmit", function () {});

    return _this;
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          honeypot = _this$state.honeypot,
          name = _this$state.name,
          email = _this$state.email,
          company = _this$state.company,
          comment = _this$state.comment;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_section__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "Contact US",
        subtitle: "Get in touch",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3639594664" + " " + "grid-1-center container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3639594664" + " " + "col-6_sm-12-middle contact-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        className: "jsx-3639594664" + " " + "grid-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          display: "none"
        },
        className: "jsx-3639594664",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        id: "honeypot",
        name: "honeypot",
        value: honeypot,
        className: "jsx-3639594664",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3639594664" + " " + "col field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        id: "name",
        name: "name",
        placeholder: "name*",
        value: name,
        onChange: this.onChange,
        className: "jsx-3639594664",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3639594664" + " " + "col field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        id: "email",
        name: "email",
        placeholder: "email*",
        value: email,
        onChange: this.onChange,
        className: "jsx-3639594664",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3639594664" + " " + "col field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        id: "company",
        name: "company",
        placeholder: "company",
        value: company,
        onChange: this.onChange,
        className: "jsx-3639594664",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3639594664" + " " + "col field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
        id: "comment",
        name: "comment",
        placeholder: "comment*",
        rows: "4",
        value: comment,
        onChange: this.onChange,
        className: "jsx-3639594664",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3639594664" + " " + "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        type: "button",
        className: "jsx-3639594664" + " " + "send btn btn--m btn--black",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Send my ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
        className: "jsx-3639594664",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "question")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3639594664",
        css: ".container.jsx-3639594664{-webkit-flex:1;-ms-flex:1;flex:1;}.field.jsx-3639594664 input.jsx-3639594664:-webkit-autofill{box-shadow:0 0 0 1000px var(--grey) inset !important;}.field.jsx-3639594664 input[type=\"text\"].jsx-3639594664,.field.jsx-3639594664 textarea.jsx-3639594664{display:block;margin:0;width:100%;font-size:18px;-webkit-appearance:none;-moz-appearance:none;appearance:none;box-shadow:none;border-radius:none;padding:10px;border:solid 1px #dcdcdc;border-bottom:solid 2px #c9c9c9;-webkit-transition:border 0.3s;transition:border 0.3s;}.field.jsx-3639594664 input[type=\"text\"].jsx-3639594664:focus,.field.jsx-3639594664 textarea.jsx-3639594664:focus{outline:none;border-bottom:solid 2px black;}.field.error.jsx-3639594664 input.jsx-3639594664,.field.error.jsx-3639594664 textarea.jsx-3639594664{border:solid 1px color( var(--red) l(80%) );border-bottom:solid 2px color( var(--red) l(75%) );}.field.error.jsx-3639594664 .error-message.jsx-3639594664{font-size:0.8em;color:color( var(--red) l(50%) );margin:5px;display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbG1hc3NlL1Byb2plY3RzL2dldXQvd3d3L3BhY2thZ2VzL3NpdGUvY29tcG9uZW50cy9jb250YWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEb0IsQUFJVSxBQUV3RCxBQUl2QyxBQWFELEFBSytCLEFBSzVCLGFBVGMsQ0FickIsRUF1QndCLE9BdEJ0QixVQVJiLENBU2lCLFNBWWpCLENBSXFELEtBZm5DLEFBcUJMLElBNUJiLE9BNkJnQixjQUNoQixxQkFQQSxlQWZrQixnQkFDRyxtQkFDTixhQUNZLHlCQUNPLGdDQUNULHNEQUN6QiIsImZpbGUiOiIvVXNlcnMvZWxtYXNzZS9Qcm9qZWN0cy9nZXV0L3d3dy9wYWNrYWdlcy9zaXRlL2NvbXBvbmVudHMvY29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9zZWN0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgaG9uZXlwb3Q6ICcnLFxuICAgIG5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBjb21wYW55OiAnJyxcbiAgICBjb21tZW50OiAnJ1xuICB9XG5cbiAgb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pXG4gIH1cblxuICBvblN1Ym1pdCA9ICgpID0+IHtcbiAgICBcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGhvbmV5cG90LCBuYW1lLCBlbWFpbCwgY29tcGFueSwgY29tbWVudCB9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8U2VjdGlvbiB0aXRsZT1cIkNvbnRhY3QgVVNcIiBzdWJ0aXRsZT1cIkdldCBpbiB0b3VjaFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtMS1jZW50ZXIgY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNl9zbS0xMi1taWRkbGUgY29udGFjdC1mb3JtXCI+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJncmlkLTFcIj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwibm9uZVwifX0+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJob25leXBvdFwiIG5hbWU9XCJob25leXBvdFwiIHZhbHVlPXtob25leXBvdH0vPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgZmllbGRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwibmFtZSpcIiB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiZW1haWwqXCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0vPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgZmllbGRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImNvbXBhbnlcIiBuYW1lPVwiY29tcGFueVwiIHBsYWNlaG9sZGVyPVwiY29tcGFueVwiIHZhbHVlPXtjb21wYW55fSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0vPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgZmllbGRcIj5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJjb21tZW50XCIgbmFtZT1cImNvbW1lbnRcIiBwbGFjZWhvbGRlcj1cImNvbW1lbnQqXCIgcm93cz1cIjRcIiB2YWx1ZT17Y29tbWVudH0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9PjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInNlbmQgYnRuIGJ0bi0tbSBidG4tLWJsYWNrXCI+XG4gICAgICAgICAgICAgICAgICBTZW5kIG15IDxiPnF1ZXN0aW9uPC9iPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGZsZXg6IDFcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZpZWxkIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGwge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMTAwMHB4IHZhcigtLWdyZXkpIGluc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZpZWxkIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLCAuZmllbGQgdGV4dGFyZWEge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjZGNkY2RjO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICNjOWM5Yzk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXIgMC4zcztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZpZWxkIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzLCAuZmllbGQgdGV4dGFyZWE6Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCBibGFjaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZmllbGQuZXJyb3IgaW5wdXQsIC5maWVsZC5lcnJvciB0ZXh0YXJlYSB7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCBjb2xvciggdmFyKC0tcmVkKSBsKDgwJSkgKTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCBjb2xvciggdmFyKC0tcmVkKSBsKDc1JSkgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZmllbGQuZXJyb3IgLmVycm9yLW1lc3NhZ2Uge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvciggdmFyKC0tcmVkKSBsKDUwJSkgKTtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9TZWN0aW9uPlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/elmasse/Projects/geut/www/packages/site/components/contact.js */",
        __self: this
      }));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.4522d9ff485de33d0c65.hot-update.js.map