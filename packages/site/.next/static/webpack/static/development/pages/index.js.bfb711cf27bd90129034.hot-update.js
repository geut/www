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
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3639594664" + " " + "grid-1-center container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3639594664" + " " + "col-6_sm-12-middle contact-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        className: "jsx-3639594664" + " " + "grid-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          display: "none"
        },
        className: "jsx-3639594664",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
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
          lineNumber: 28
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3639594664" + " " + "col field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
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
          lineNumber: 31
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3639594664" + " " + "col field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
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
          lineNumber: 34
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3639594664" + " " + "col field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
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
          lineNumber: 37
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3639594664" + " " + "col field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
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
          lineNumber: 40
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3639594664" + " " + "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        type: "button",
        className: "jsx-3639594664" + " " + "send btn btn--m btn--black",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Send my ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
        className: "jsx-3639594664",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "question")))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3639594664",
        css: ".container.jsx-3639594664{-webkit-flex:1;-ms-flex:1;flex:1;}.field.jsx-3639594664 input.jsx-3639594664:-webkit-autofill{box-shadow:0 0 0 1000px var(--grey) inset !important;}.field.jsx-3639594664 input[type=\"text\"].jsx-3639594664,.field.jsx-3639594664 textarea.jsx-3639594664{display:block;margin:0;width:100%;font-size:18px;-webkit-appearance:none;-moz-appearance:none;appearance:none;box-shadow:none;border-radius:none;padding:10px;border:solid 1px #dcdcdc;border-bottom:solid 2px #c9c9c9;-webkit-transition:border 0.3s;transition:border 0.3s;}.field.jsx-3639594664 input[type=\"text\"].jsx-3639594664:focus,.field.jsx-3639594664 textarea.jsx-3639594664:focus{outline:none;border-bottom:solid 2px black;}.field.error.jsx-3639594664 input.jsx-3639594664,.field.error.jsx-3639594664 textarea.jsx-3639594664{border:solid 1px color( var(--red) l(80%) );border-bottom:solid 2px color( var(--red) l(75%) );}.field.error.jsx-3639594664 .error-message.jsx-3639594664{font-size:0.8em;color:color( var(--red) l(50%) );margin:5px;display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbG1hc3NlL1Byb2plY3RzL2dldXQvd3d3L3BhY2thZ2VzL3NpdGUvY29tcG9uZW50cy9jb250YWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEb0IsQUFJVSxBQUV3RCxBQUl2QyxBQWFELEFBSytCLEFBSzVCLGFBVGMsQ0FickIsRUF1QndCLE9BdEJ0QixVQVJiLENBU2lCLFNBWWpCLENBSXFELEtBZm5DLEFBcUJMLElBNUJiLE9BNkJnQixjQUNoQixxQkFQQSxlQWZrQixnQkFDRyxtQkFDTixhQUNZLHlCQUNPLGdDQUNULHNEQUN6QiIsImZpbGUiOiIvVXNlcnMvZWxtYXNzZS9Qcm9qZWN0cy9nZXV0L3d3dy9wYWNrYWdlcy9zaXRlL2NvbXBvbmVudHMvY29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9zZWN0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgaG9uZXlwb3Q6ICcnLFxuICAgIG5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBjb21wYW55OiAnJyxcbiAgICBjb21tZW50OiAnJ1xuICB9XG5cbiAgb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBob25leXBvdCwgbmFtZSwgZW1haWwsIGNvbXBhbnksIGNvbW1lbnQgfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPFNlY3Rpb24gdGl0bGU9XCJDb250YWN0IFVTXCIgc3VidGl0bGU9XCJHZXQgaW4gdG91Y2hcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLTEtY2VudGVyIGNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZfc20tMTItbWlkZGxlIGNvbnRhY3QtZm9ybVwiPlxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZ3JpZC0xXCI+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcIm5vbmVcIn19PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiaG9uZXlwb3RcIiBuYW1lPVwiaG9uZXlwb3RcIiB2YWx1ZT17aG9uZXlwb3R9Lz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIm5hbWUqXCIgdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfS8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBmaWVsZFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cImVtYWlsKlwiIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJjb21wYW55XCIgbmFtZT1cImNvbXBhbnlcIiBwbGFjZWhvbGRlcj1cImNvbXBhbnlcIiB2YWx1ZT17Y29tcGFueX0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiY29tbWVudFwiIG5hbWU9XCJjb21tZW50XCIgcGxhY2Vob2xkZXI9XCJjb21tZW50KlwiIHJvd3M9XCI0XCIgdmFsdWU9e2NvbW1lbnR9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfT48L3RleHRhcmVhPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJzZW5kIGJ0biBidG4tLW0gYnRuLS1ibGFja1wiPlxuICAgICAgICAgICAgICAgICAgU2VuZCBteSA8Yj5xdWVzdGlvbjwvYj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBmbGV4OiAxXG4gICAgICAgICAgfVxuICAgICAgICAgIC5maWVsZCBpbnB1dDotd2Via2l0LWF1dG9maWxsIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDEwMDBweCB2YXIoLS1ncmV5KSBpbnNldCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5maWVsZCBpbnB1dFt0eXBlPVwidGV4dFwiXSwgLmZpZWxkIHRleHRhcmVhIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2RjZGNkYztcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjYzljOWM5O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyIDAuM3M7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5maWVsZCBpbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cywgLmZpZWxkIHRleHRhcmVhOmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggYmxhY2s7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZpZWxkLmVycm9yIGlucHV0LCAuZmllbGQuZXJyb3IgdGV4dGFyZWEge1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggY29sb3IoIHZhcigtLXJlZCkgbCg4MCUpICk7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggY29sb3IoIHZhcigtLXJlZCkgbCg3NSUpICk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZpZWxkLmVycm9yIC5lcnJvci1tZXNzYWdlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgICAgICBjb2xvcjogY29sb3IoIHZhcigtLXJlZCkgbCg1MCUpICk7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/elmasse/Projects/geut/www/packages/site/components/contact.js */",
        __self: this
      }));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.bfb711cf27bd90129034.hot-update.js.map