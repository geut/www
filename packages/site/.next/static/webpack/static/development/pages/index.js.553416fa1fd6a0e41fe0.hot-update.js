webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/about.js":
/*!*****************************!*\
  !*** ./components/about.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nextein_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nextein/post */ "./node_modules/nextein/post.js");
/* harmony import */ var nextein_post__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nextein_post__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./section */ "./components/section/index.js");
var _jsxFileName = "/Users/elmasse/Projects/geut/www/packages/site/components/about.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var members = _ref.members;
  var team = members.slice().sort(function (_ref2) {
    var founder = _ref2.data.founder;
    return founder ? 1 : 0;
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_section__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "About Us",
    subtitle: "Meet the Team",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1650711399" + " " + "grid-equalHeight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, team.map(function (member) {
    var _member$data = member.data,
        name = _member$data.name,
        title = _member$data.title,
        twitter = _member$data.twitter,
        github = _member$data.github,
        role = _member$data.role,
        avatar = _member$data.avatar,
        founder = _member$data.founder;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: name,
      className: "jsx-1650711399" + " " + "col-3_md-6_sm-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "jsx-1650711399",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
      className: "jsx-1650711399" + " " + "grid-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1650711399" + " " + "avatar col-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: avatar,
      className: "jsx-1650711399",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-1650711399" + " " + "col-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, role), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "jsx-1650711399" + " " + "col-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "jsx-1650711399" + " " + "col-12 grid-center grid-middle social",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-1650711399" + " " + "col-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://github.com/".concat(github),
      title: "GitHub account ".concat(github),
      target: "_blank",
      rel: "nofollow",
      className: "jsx-1650711399",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      "aria-hidden": "true",
      className: "jsx-1650711399" + " " + "fa fa-github",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-1650711399" + " " + "col-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://twitter.com/".concat(twitter),
      title: "Twitter account ".concat(twitter),
      target: "_blank",
      rel: "nofollow",
      className: "jsx-1650711399",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      "aria-hidden": "true",
      className: "jsx-1650711399" + " " + "fa fa-twitter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(nextein_post__WEBPACK_IMPORTED_MODULE_2__["Content"], _extends({}, member, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }))));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1650711399",
    css: "section.jsx-1650711399{padding:16px;background:#f0f0f0;border-top:8px solid var(--blue);}h1.jsx-1650711399{font-size:1.2em;margin:0;text-transform:uppercase;}h2.jsx-1650711399{font-size:.7em;font-weight:100;text-transform:uppercase;margin:0;padding:0;color:#999;}.avatar.jsx-1650711399 img.jsx-1650711399{display:block;height:100%;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbG1hc3NlL1Byb2plY3RzL2dldXQvd3d3L3BhY2thZ2VzL3NpdGUvY29tcG9uZW50cy9hYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ2tCLEFBR3NCLEFBS0csQUFNRCxBQVFELGFBbEJLLENBb0JQLENBVEksQ0FMUCxTQUNnQixDQWNkLEtBVGMsQ0FWNUIsS0FxQkMsYUFmQSxNQUtXLFNBWFgsQUFZWSxVQUNDLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2VsbWFzc2UvUHJvamVjdHMvZ2V1dC93d3cvcGFja2FnZXMvc2l0ZS9jb21wb25lbnRzL2Fib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ29udGVudCB9IGZyb20gJ25leHRlaW4vcG9zdCdcblxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9zZWN0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCAoeyBtZW1iZXJzIH0pID0+IHtcbiAgY29uc3QgdGVhbSA9IG1lbWJlcnMuc2xpY2UoKS5zb3J0KCh7IGRhdGE6IHsgZm91bmRlciB9IH0pID0+IGZvdW5kZXIgPyAxIDogMCApXG4gIHJldHVybiAoXG4gICAgPFNlY3Rpb24gdGl0bGU9XCJBYm91dCBVc1wiIHN1YnRpdGxlPVwiTWVldCB0aGUgVGVhbVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWVxdWFsSGVpZ2h0XCI+XG4gICAgICAgIHt0ZWFtLm1hcCgobWVtYmVyKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBkYXRhOiB7IG5hbWUsIHRpdGxlLCB0d2l0dGVyLCBnaXRodWIsIHJvbGUsIGF2YXRhciwgZm91bmRlciB9IH0gPSBtZW1iZXJcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtM19tZC02X3NtLTEyXCIga2V5PXtuYW1lfT5cbiAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJncmlkLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXZhdGFyIGNvbC0xMlwiPjxpbWcgc3JjPXthdmF0YXJ9IC8+PC9wPlxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNvbC0xMlwiPntyb2xlfTwvaDI+XG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY29sLTEyXCI+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29sLTEyIGdyaWQtY2VudGVyIGdyaWQtbWlkZGxlIHNvY2lhbFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY29sLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7Z2l0aHVifWB9IHRpdGxlPXtgR2l0SHViIGFjY291bnQgJHtnaXRodWJ9YH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9mb2xsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWdpdGh1YlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjb2wtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwczovL3R3aXR0ZXIuY29tLyR7dHdpdHRlcn1gfSB0aXRsZT17YFR3aXR0ZXIgYWNjb3VudCAke3R3aXR0ZXJ9YH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9mb2xsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXR3aXR0ZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICA8Q29udGVudCB7Li4ubWVtYmVyfSAvPlxuICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICBzZWN0aW9uIHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcbiAgICAgICAgYm9yZGVyLXRvcDogOHB4IHNvbGlkIHZhcigtLWJsdWUpXG4gICAgICB9XG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgIFxuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICB9XG4gICAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogLjdlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgIH1cbiAgICAgIC5hdmF0YXIgaW1ne1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICB9XG4gICAgICAuc29jaWFsIHtcblxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8L1NlY3Rpb24+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/elmasse/Projects/geut/www/packages/site/components/about.js */",
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.553416fa1fd6a0e41fe0.hot-update.js.map