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
  return a - b;
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
    css: "section.jsx-1650711399{padding:16px;background:#f0f0f0;border-top:8px solid var(--blue);}h1.jsx-1650711399{font-size:1.2em;margin:0;text-transform:uppercase;}h2.jsx-1650711399{font-size:.7em;font-weight:100;text-transform:uppercase;margin:0;padding:0;color:#999;}.avatar.jsx-1650711399 img.jsx-1650711399{display:block;height:100%;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbG1hc3NlL1Byb2plY3RzL2dldXQvd3d3L3BhY2thZ2VzL3NpdGUvY29tcG9uZW50cy9hYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q2tCLEFBR3NCLEFBS0csQUFNRCxBQVFELGFBbEJLLENBb0JQLENBVEksQ0FMUCxTQUNnQixDQWNkLEtBVGMsQ0FWNUIsS0FxQkMsYUFmQSxNQUtXLFNBWFgsQUFZWSxVQUNDLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2VsbWFzc2UvUHJvamVjdHMvZ2V1dC93d3cvcGFja2FnZXMvc2l0ZS9jb21wb25lbnRzL2Fib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ29udGVudCB9IGZyb20gJ25leHRlaW4vcG9zdCdcblxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9zZWN0aW9uJ1xuY29uc3Qgc29ydEJ5SXNGb3VuZGVyID0gKHsgZGF0YTogeyBmb3VuZGVyOiBhIH0gfSwgeyBkYXRhOiB7IGZvdW5kZXI6IGIgfSB9KSA9PiBhIC0gYlxuXG5leHBvcnQgZGVmYXVsdCAoeyBtZW1iZXJzIH0pID0+IHtcbiAgY29uc3QgdGVhbSA9IG1lbWJlcnMuc29ydChzb3J0QnlJc0ZvdW5kZXIpXG4gIGNvbnNvbGUubG9nKHRlYW0sIG1lbWJlcnMpXG4gIHJldHVybiAoXG4gICAgPFNlY3Rpb24gdGl0bGU9XCJBYm91dCBVc1wiIHN1YnRpdGxlPVwiTWVldCB0aGUgVGVhbVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWVxdWFsSGVpZ2h0XCI+XG4gICAgICAgIHt0ZWFtLm1hcCgobWVtYmVyKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBkYXRhOiB7IG5hbWUsIHRpdGxlLCB0d2l0dGVyLCBnaXRodWIsIHJvbGUsIGF2YXRhciwgZm91bmRlciB9IH0gPSBtZW1iZXJcbiAgICAgICAgICBjb25zb2xlLmxvZyhtZW1iZXIpXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTNfbWQtNl9zbS0xMlwiIGtleT17bmFtZX0+XG4gICAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZ3JpZC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImF2YXRhciBjb2wtMTJcIj48aW1nIHNyYz17YXZhdGFyfSAvPjwvcD5cbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjb2wtMTJcIj57cm9sZX08L2gyPlxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNvbC0xMlwiPnt0aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNvbC0xMiBncmlkLWNlbnRlciBncmlkLW1pZGRsZSBzb2NpYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNvbC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke2dpdGh1Yn1gfSB0aXRsZT17YEdpdEh1YiBhY2NvdW50ICR7Z2l0aHVifWB9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vZm9sbG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1naXRodWJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY29sLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly90d2l0dGVyLmNvbS8ke3R3aXR0ZXJ9YH0gdGl0bGU9e2BUd2l0dGVyIGFjY291bnQgJHt0d2l0dGVyfWB9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vZm9sbG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10d2l0dGVyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgPENvbnRlbnQgey4uLm1lbWJlcn0gLz5cbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgc2VjdGlvbiB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gICAgICAgIGJvcmRlci10b3A6IDhweCBzb2xpZCB2YXIoLS1ibHVlKVxuICAgICAgfVxuICAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICBcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgfVxuICAgICAgaDIge1xuICAgICAgICBmb250LXNpemU6IC43ZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICB9XG4gICAgICAuYXZhdGFyIGltZ3tcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgfVxuICAgICAgLnNvY2lhbCB7XG5cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9TZWN0aW9uPlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/elmasse/Projects/geut/www/packages/site/components/about.js */",
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.143729f0914b8b751b6f.hot-update.js.map