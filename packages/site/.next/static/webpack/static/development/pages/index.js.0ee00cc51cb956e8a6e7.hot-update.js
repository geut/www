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





var sortByIsFounder = function sortByIsFounder(_ref, _ref2) {
  var _ref$data$founder = _ref.data.founder,
      a = _ref$data$founder === void 0 ? false : _ref$data$founder;
  var _ref2$data$founder = _ref2.data.founder,
      b = _ref2$data$founder === void 0 ? false : _ref2$data$founder;
  return Number(b) - Number(a);
};

/* harmony default export */ __webpack_exports__["default"] = (function (_ref3) {
  var members = _ref3.members;
  var team = members.sort(sortByIsFounder);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_section__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "About Us",
    subtitle: "Meet the Team",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2540318439" + " " + "grid-equalHeight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
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
      className: "jsx-2540318439" + " " + "col-3_md-6_sm-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "jsx-2540318439",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
      className: "jsx-2540318439" + " " + "grid-center-noGutter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-2540318439" + " " + "avatar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: avatar,
      className: "jsx-2540318439",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-2540318439" + " " + "col-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, founder && 'Founder. ', role), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "jsx-2540318439" + " " + "col-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "jsx-2540318439" + " " + "col-12 grid-center grid-middle social",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-2540318439" + " " + "col-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://github.com/".concat(github),
      title: "GitHub account ".concat(github),
      target: "_blank",
      rel: "nofollow",
      className: "jsx-2540318439",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      "aria-hidden": "true",
      className: "jsx-2540318439" + " " + "fa fa-github",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-2540318439" + " " + "col-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://twitter.com/".concat(twitter),
      title: "Twitter account ".concat(twitter),
      target: "_blank",
      rel: "nofollow",
      className: "jsx-2540318439",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      "aria-hidden": "true",
      className: "jsx-2540318439" + " " + "fa fa-twitter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-2540318439",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(nextein_post__WEBPACK_IMPORTED_MODULE_2__["Content"], _extends({}, member, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    })))));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2540318439",
    css: "section.jsx-2540318439{background:#f0f0f0;border-top:8px solid var(--blue);box-shadow:1px 2px 4px rgba(0,0,0,.1);}section.jsx-2540318439>p.jsx-2540318439{padding:1em;font-size:1em;color:#666;}h1.jsx-2540318439{font-size:1.2em;margin:0;margin-bottom:.5em;text-transform:uppercase;}h2.jsx-2540318439{font-size:.7em;font-weight:100;text-transform:uppercase;margin:0;padding:0;color:#999;}.avatar.jsx-2540318439{margin-top:0;}.avatar.jsx-2540318439 img.jsx-2540318439{display:block;height:100%;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbG1hc3NlL1Byb2plY3RzL2dldXQvd3d3L3BhY2thZ2VzL3NpdGUvY29tcG9uZW50cy9hYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ2tCLEFBRzRCLEFBS1AsQUFLSSxBQU1ELEFBUUYsQUFHQyxZQXJCQSxDQW1CaEIsQ0FHYyxDQVhJLENBTlAsR0FWd0IsTUFXZCxDQUxSLEFBc0JBLEtBWGMsTUFWM0IsQUFzQkEsT0FqQjJCLFFBWGEsSUFpQjdCLFNBQ0MsSUFOWixNQU9hLFdBQ2IsSUFuQkEiLCJmaWxlIjoiL1VzZXJzL2VsbWFzc2UvUHJvamVjdHMvZ2V1dC93d3cvcGFja2FnZXMvc2l0ZS9jb21wb25lbnRzL2Fib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ29udGVudCB9IGZyb20gJ25leHRlaW4vcG9zdCdcblxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9zZWN0aW9uJ1xuXG5jb25zdCBzb3J0QnlJc0ZvdW5kZXIgPSAoeyBkYXRhOiB7IGZvdW5kZXI6IGEgPSBmYWxzZSB9IH0sIHsgZGF0YTogeyBmb3VuZGVyOiBiID0gZmFsc2UgfSB9KSA9PiBOdW1iZXIoYikgLSBOdW1iZXIoYSlcblxuZXhwb3J0IGRlZmF1bHQgKHsgbWVtYmVycyB9KSA9PiB7XG4gIGNvbnN0IHRlYW0gPSBtZW1iZXJzLnNvcnQoc29ydEJ5SXNGb3VuZGVyKVxuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uIHRpdGxlPVwiQWJvdXQgVXNcIiBzdWJ0aXRsZT1cIk1lZXQgdGhlIFRlYW1cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1lcXVhbEhlaWdodFwiPlxuICAgICAgICB7dGVhbS5tYXAoKG1lbWJlcikgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgZGF0YTogeyBuYW1lLCB0aXRsZSwgdHdpdHRlciwgZ2l0aHViLCByb2xlLCBhdmF0YXIsIGZvdW5kZXIgfSB9ID0gbWVtYmVyXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTNfbWQtNl9zbS0xMlwiIGtleT17bmFtZX0+XG4gICAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZ3JpZC1jZW50ZXItbm9HdXR0ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImF2YXRhclwiPjxpbWcgc3JjPXthdmF0YXJ9IC8+PC9wPlxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNvbC0xMlwiPntmb3VuZGVyICYmICdGb3VuZGVyLiAnfXtyb2xlfTwvaDI+XG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY29sLTEyXCI+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29sLTEyIGdyaWQtY2VudGVyIGdyaWQtbWlkZGxlIHNvY2lhbFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY29sLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7Z2l0aHVifWB9IHRpdGxlPXtgR2l0SHViIGFjY291bnQgJHtnaXRodWJ9YH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9mb2xsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWdpdGh1YlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjb2wtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwczovL3R3aXR0ZXIuY29tLyR7dHdpdHRlcn1gfSB0aXRsZT17YFR3aXR0ZXIgYWNjb3VudCAke3R3aXR0ZXJ9YH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9mb2xsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXR3aXR0ZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxDb250ZW50IHsuLi5tZW1iZXJ9IC8+XG4gICAgICAgICAgICAgICAgPC9wPiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgc2VjdGlvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gICAgICAgIGJvcmRlci10b3A6IDhweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDJweCA0cHggcmdiYSgwLDAsMCwuMSk7XG4gICAgICB9XG4gICAgICBzZWN0aW9uID4gcCB7XG4gICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgfVxuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDEuMmVtOyAgICAgICAgXG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLjVlbTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIH1cbiAgICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAuN2VtO1xuICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgfVxuICAgICAgLmF2YXRhciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICB9XG4gICAgICAuYXZhdGFyIGltZ3tcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvU2VjdGlvbj5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/elmasse/Projects/geut/www/packages/site/components/about.js */",
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.0ee00cc51cb956e8a6e7.hot-update.js.map