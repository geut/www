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
  var a = _ref.data.founder;
  var b = _ref2.data.founder;
  return Number(b) - Number(a);
};

/* harmony default export */ __webpack_exports__["default"] = (function (_ref3) {
  var members = _ref3.members;
  var team = members.sort(sortByIsFounder);
  console.log(team, members);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_section__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "About Us",
    subtitle: "Meet the Team",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1650711399" + " " + "grid-equalHeight",
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
    console.log(member);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: name,
      className: "jsx-1650711399" + " " + "col-3_md-6_sm-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "jsx-1650711399",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
      className: "jsx-1650711399" + " " + "grid-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1650711399" + " " + "avatar col-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: avatar,
      className: "jsx-1650711399",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-1650711399" + " " + "col-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, role), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "jsx-1650711399" + " " + "col-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "jsx-1650711399" + " " + "col-12 grid-center grid-middle social",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-1650711399" + " " + "col-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
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
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      "aria-hidden": "true",
      className: "jsx-1650711399" + " " + "fa fa-github",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-1650711399" + " " + "col-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
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
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      "aria-hidden": "true",
      className: "jsx-1650711399" + " " + "fa fa-twitter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(nextein_post__WEBPACK_IMPORTED_MODULE_2__["Content"], _extends({}, member, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }))));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1650711399",
    css: "section.jsx-1650711399{padding:16px;background:#f0f0f0;border-top:8px solid var(--blue);}h1.jsx-1650711399{font-size:1.2em;margin:0;text-transform:uppercase;}h2.jsx-1650711399{font-size:.7em;font-weight:100;text-transform:uppercase;margin:0;padding:0;color:#999;}.avatar.jsx-1650711399 img.jsx-1650711399{display:block;height:100%;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbG1hc3NlL1Byb2plY3RzL2dldXQvd3d3L3BhY2thZ2VzL3NpdGUvY29tcG9uZW50cy9hYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q2tCLEFBR3NCLEFBS0csQUFNRCxBQVFELGFBbEJLLENBb0JQLENBVEksQ0FMUCxTQUNnQixDQWNkLEtBVGMsQ0FWNUIsS0FxQkMsYUFmQSxNQUtXLFNBWFgsQUFZWSxVQUNDLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2VsbWFzc2UvUHJvamVjdHMvZ2V1dC93d3cvcGFja2FnZXMvc2l0ZS9jb21wb25lbnRzL2Fib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ29udGVudCB9IGZyb20gJ25leHRlaW4vcG9zdCdcblxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9zZWN0aW9uJ1xuY29uc3Qgc29ydEJ5SXNGb3VuZGVyID0gKHsgZGF0YTogeyBmb3VuZGVyOiBhIH0gfSwgeyBkYXRhOiB7IGZvdW5kZXI6IGIgfSB9KSA9PiBOdW1iZXIoYikgLSBOdW1iZXIoYSlcblxuZXhwb3J0IGRlZmF1bHQgKHsgbWVtYmVycyB9KSA9PiB7XG4gIGNvbnN0IHRlYW0gPSBtZW1iZXJzLnNvcnQoc29ydEJ5SXNGb3VuZGVyKVxuICBjb25zb2xlLmxvZyh0ZWFtLCBtZW1iZXJzKVxuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uIHRpdGxlPVwiQWJvdXQgVXNcIiBzdWJ0aXRsZT1cIk1lZXQgdGhlIFRlYW1cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1lcXVhbEhlaWdodFwiPlxuICAgICAgICB7dGVhbS5tYXAoKG1lbWJlcikgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgZGF0YTogeyBuYW1lLCB0aXRsZSwgdHdpdHRlciwgZ2l0aHViLCByb2xlLCBhdmF0YXIsIGZvdW5kZXIgfSB9ID0gbWVtYmVyXG4gICAgICAgICAgY29uc29sZS5sb2cobWVtYmVyKVxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zX21kLTZfc20tMTJcIiBrZXk9e25hbWV9PlxuICAgICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImdyaWQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhdmF0YXIgY29sLTEyXCI+PGltZyBzcmM9e2F2YXRhcn0gLz48L3A+XG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY29sLTEyXCI+e3JvbGV9PC9oMj5cbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjb2wtMTJcIj57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb2wtMTIgZ3JpZC1jZW50ZXIgZ3JpZC1taWRkbGUgc29jaWFsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjb2wtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwczovL2dpdGh1Yi5jb20vJHtnaXRodWJ9YH0gdGl0bGU9e2BHaXRIdWIgYWNjb3VudCAke2dpdGh1Yn1gfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub2ZvbGxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZ2l0aHViXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNvbC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YGh0dHBzOi8vdHdpdHRlci5jb20vJHt0d2l0dGVyfWB9IHRpdGxlPXtgVHdpdHRlciBhY2NvdW50ICR7dHdpdHRlcn1gfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub2ZvbGxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdHdpdHRlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgICAgIDxDb250ZW50IHsuLi5tZW1iZXJ9IC8+XG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIHNlY3Rpb24ge1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICAgICAgICBib3JkZXItdG9wOiA4cHggc29saWQgdmFyKC0tYmx1ZSlcbiAgICAgIH1cbiAgICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgXG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIH1cbiAgICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAuN2VtO1xuICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgfVxuICAgICAgLmF2YXRhciBpbWd7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIH1cbiAgICAgIC5zb2NpYWwge1xuXG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvU2VjdGlvbj5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/elmasse/Projects/geut/www/packages/site/components/about.js */",
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.5562e256276ca14d3541.hot-update.js.map