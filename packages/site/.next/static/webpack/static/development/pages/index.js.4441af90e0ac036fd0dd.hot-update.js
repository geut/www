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

    return _this;
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_section__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: "Contact US",
        subtitle: "Get in touch",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3639594664" + " " + "grid-1-center container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3639594664" + " " + "col-6_sm-12-middle contact-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        method: "post",
        className: "jsx-3639594664" + " " + "grid-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          display: "none"
        },
        className: "jsx-3639594664",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        id: "honeypot",
        name: "honeypot",
        value: "",
        className: "jsx-3639594664",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3639594664" + " " + "col field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        id: "name",
        name: "name",
        placeholder: "name*",
        className: "jsx-3639594664",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3639594664" + " " + "col field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        id: "email",
        name: "email",
        placeholder: "email*",
        className: "jsx-3639594664",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3639594664" + " " + "col field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        id: "company",
        name: "company",
        placeholder: "company",
        className: "jsx-3639594664",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3639594664" + " " + "col field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
        id: "comment",
        name: "comment",
        placeholder: "comment*",
        rows: "4",
        className: "jsx-3639594664",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3639594664" + " " + "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        type: "button",
        className: "jsx-3639594664" + " " + "send btn btn--m btn--black",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Send my ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
        className: "jsx-3639594664",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "question")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3639594664",
        css: ".container.jsx-3639594664{-webkit-flex:1;-ms-flex:1;flex:1;}.field.jsx-3639594664 input.jsx-3639594664:-webkit-autofill{box-shadow:0 0 0 1000px var(--grey) inset !important;}.field.jsx-3639594664 input[type=\"text\"].jsx-3639594664,.field.jsx-3639594664 textarea.jsx-3639594664{display:block;margin:0;width:100%;font-size:18px;-webkit-appearance:none;-moz-appearance:none;appearance:none;box-shadow:none;border-radius:none;padding:10px;border:solid 1px #dcdcdc;border-bottom:solid 2px #c9c9c9;-webkit-transition:border 0.3s;transition:border 0.3s;}.field.jsx-3639594664 input[type=\"text\"].jsx-3639594664:focus,.field.jsx-3639594664 textarea.jsx-3639594664:focus{outline:none;border-bottom:solid 2px black;}.field.error.jsx-3639594664 input.jsx-3639594664,.field.error.jsx-3639594664 textarea.jsx-3639594664{border:solid 1px color( var(--red) l(80%) );border-bottom:solid 2px color( var(--red) l(75%) );}.field.error.jsx-3639594664 .error-message.jsx-3639594664{font-size:0.8em;color:color( var(--red) l(50%) );margin:5px;display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbG1hc3NlL1Byb2plY3RzL2dldXQvd3d3L3BhY2thZ2VzL3NpdGUvY29tcG9uZW50cy9jb250YWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDb0IsQUFJVSxBQUV3RCxBQUl2QyxBQWFELEFBSytCLEFBSzVCLGFBVGMsQ0FickIsRUF1QndCLE9BdEJ0QixVQVJiLENBU2lCLFNBWWpCLENBSXFELEtBZm5DLEFBcUJMLElBNUJiLE9BNkJnQixjQUNoQixxQkFQQSxlQWZrQixnQkFDRyxtQkFDTixhQUNZLHlCQUNPLGdDQUNULHNEQUN6QiIsImZpbGUiOiIvVXNlcnMvZWxtYXNzZS9Qcm9qZWN0cy9nZXV0L3d3dy9wYWNrYWdlcy9zaXRlL2NvbXBvbmVudHMvY29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9zZWN0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgaG9uZXlwb3Q6ICcnLFxuICAgIG5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBjb21wYW55OiAnJyxcbiAgICBjb21tZW50OiAnJ1xuICB9XG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiAoXG4gICAgICA8U2VjdGlvbiB0aXRsZT1cIkNvbnRhY3QgVVNcIiBzdWJ0aXRsZT1cIkdldCBpbiB0b3VjaFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtMS1jZW50ZXIgY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNl9zbS0xMi1taWRkbGUgY29udGFjdC1mb3JtXCI+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJncmlkLTFcIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcIm5vbmVcIn19PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaG9uZXlwb3RcIiBuYW1lPVwiaG9uZXlwb3RcIiB2YWx1ZT1cIlwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBmaWVsZFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJuYW1lKlwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBmaWVsZFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cImVtYWlsKlwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBmaWVsZFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiY29tcGFueVwiIG5hbWU9XCJjb21wYW55XCIgcGxhY2Vob2xkZXI9XCJjb21wYW55XCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiY29tbWVudFwiIG5hbWU9XCJjb21tZW50XCIgcGxhY2Vob2xkZXI9XCJjb21tZW50KlwiIHJvd3M9XCI0XCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwic2VuZCBidG4gYnRuLS1tIGJ0bi0tYmxhY2tcIj5cbiAgICAgICAgICAgICAgICAgIFNlbmQgbXkgPGI+cXVlc3Rpb248L2I+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgZmxleDogMVxuICAgICAgICAgIH1cbiAgICAgICAgICAuZmllbGQgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxMDAwcHggdmFyKC0tZ3JleSkgaW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZmllbGQgaW5wdXRbdHlwZT1cInRleHRcIl0sIC5maWVsZCB0ZXh0YXJlYSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNkY2RjZGM7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggI2M5YzljOTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlciAwLjNzO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZmllbGQgaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMsIC5maWVsZCB0ZXh0YXJlYTpmb2N1cyB7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IGJsYWNrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5maWVsZC5lcnJvciBpbnB1dCwgLmZpZWxkLmVycm9yIHRleHRhcmVhIHtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4IGNvbG9yKCB2YXIoLS1yZWQpIGwoODAlKSApO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IGNvbG9yKCB2YXIoLS1yZWQpIGwoNzUlKSApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5maWVsZC5lcnJvciAuZXJyb3ItbWVzc2FnZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgICAgY29sb3I6IGNvbG9yKCB2YXIoLS1yZWQpIGwoNTAlKSApO1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/elmasse/Projects/geut/www/packages/site/components/contact.js */",
        __self: this
      }));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.4441af90e0ac036fd0dd.hot-update.js.map