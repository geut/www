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
    className: "jsx-52415397" + " " + "grid-equalHeight",
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
      className: "jsx-52415397" + " " + "col-3_md-6_sm-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "jsx-52415397",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
      className: "jsx-52415397" + " " + "grid-center-noGutter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-52415397" + " " + "avatar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: avatar,
      className: "jsx-52415397",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-52415397" + " " + "col-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, founder && 'Founder. ', role), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "jsx-52415397" + " " + "col-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "jsx-52415397" + " " + "col-12 grid-center grid-middle social",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-52415397" + " " + "col-1",
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
      className: "jsx-52415397",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      "aria-hidden": "true",
      className: "jsx-52415397" + " " + "fa fa-github",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-52415397" + " " + "col-1",
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
      className: "jsx-52415397",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      "aria-hidden": "true",
      className: "jsx-52415397" + " " + "fa fa-twitter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-52415397",
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
    styleId: "52415397",
    css: "section.jsx-52415397{background:#f0f0f0;border-color:var(--blue);border-top:8px solid;}section.jsx-52415397>p.jsx-52415397{padding:1em;font-size:1em;color:#666;}section.jsx-52415397:hover{border-color:var(--violet) box-shadow:2px 4px 8px rgba(0,0,0,.5);}h1.jsx-52415397{font-size:1.2em;margin:0;margin-bottom:.5em;text-transform:uppercase;}h2.jsx-52415397{font-size:.7em;font-weight:100;text-transform:uppercase;margin:0;padding:0;color:#999;}.avatar.jsx-52415397{margin-top:0;}.avatar.jsx-52415397 img.jsx-52415397{display:block;height:100%;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbG1hc3NlL1Byb2plY3RzL2dldXQvd3d3L3BhY2thZ2VzL3NpdGUvY29tcG9uZW50cy9hYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ2tCLEFBRzRCLEFBS1AsQUFNMEIsQUFJdEIsQUFNRCxBQVFGLEFBR0MsWUExQkEsQ0F3QmhCLENBR2MsQ0FYSSxDQU5QLEdBZmdCLE1BZ0JOLENBVlIsQUEyQkEsS0FYYyxNQWYzQixBQTJCQSxPQWpDdUIsQUFnQkksWUFNaEIsU0FyQlgsQUFTQSxBQWFZLElBTlosTUFPYSxXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9lbG1hc3NlL1Byb2plY3RzL2dldXQvd3d3L3BhY2thZ2VzL3NpdGUvY29tcG9uZW50cy9hYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENvbnRlbnQgfSBmcm9tICduZXh0ZWluL3Bvc3QnXG5cbmltcG9ydCBTZWN0aW9uIGZyb20gJy4vc2VjdGlvbidcblxuY29uc3Qgc29ydEJ5SXNGb3VuZGVyID0gKHsgZGF0YTogeyBmb3VuZGVyOiBhID0gZmFsc2UgfSB9LCB7IGRhdGE6IHsgZm91bmRlcjogYiA9IGZhbHNlIH0gfSkgPT4gTnVtYmVyKGIpIC0gTnVtYmVyKGEpXG5cbmV4cG9ydCBkZWZhdWx0ICh7IG1lbWJlcnMgfSkgPT4ge1xuICBjb25zdCB0ZWFtID0gbWVtYmVycy5zb3J0KHNvcnRCeUlzRm91bmRlcilcbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvbiB0aXRsZT1cIkFib3V0IFVzXCIgc3VidGl0bGU9XCJNZWV0IHRoZSBUZWFtXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtZXF1YWxIZWlnaHRcIj5cbiAgICAgICAge3RlYW0ubWFwKChtZW1iZXIpID0+IHtcbiAgICAgICAgICBjb25zdCB7IGRhdGE6IHsgbmFtZSwgdGl0bGUsIHR3aXR0ZXIsIGdpdGh1Yiwgcm9sZSwgYXZhdGFyLCBmb3VuZGVyIH0gfSA9IG1lbWJlclxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zX21kLTZfc20tMTJcIiBrZXk9e25hbWV9PlxuICAgICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImdyaWQtY2VudGVyLW5vR3V0dGVyXCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhdmF0YXJcIj48aW1nIHNyYz17YXZhdGFyfSAvPjwvcD5cbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjb2wtMTJcIj57Zm91bmRlciAmJiAnRm91bmRlci4gJ317cm9sZX08L2gyPlxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNvbC0xMlwiPnt0aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNvbC0xMiBncmlkLWNlbnRlciBncmlkLW1pZGRsZSBzb2NpYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNvbC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke2dpdGh1Yn1gfSB0aXRsZT17YEdpdEh1YiBhY2NvdW50ICR7Z2l0aHVifWB9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vZm9sbG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1naXRodWJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY29sLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly90d2l0dGVyLmNvbS8ke3R3aXR0ZXJ9YH0gdGl0bGU9e2BUd2l0dGVyIGFjY291bnQgJHt0d2l0dGVyfWB9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vZm9sbG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10d2l0dGVyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8Q29udGVudCB7Li4ubWVtYmVyfSAvPlxuICAgICAgICAgICAgICAgIDwvcD4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIHNlY3Rpb24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWJsdWUpO1xuICAgICAgICBib3JkZXItdG9wOiA4cHggc29saWQ7XG4gICAgICB9XG4gICAgICBzZWN0aW9uID4gcCB7XG4gICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgfVxuICAgICAgc2VjdGlvbjpob3ZlcntcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS12aW9sZXQpXG4gICAgICAgIGJveC1zaGFkb3c6IDJweCA0cHggOHB4IHJnYmEoMCwwLDAsLjUpO1xuICAgICAgfVxuXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07ICAgICAgICBcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgfVxuICAgICAgaDIge1xuICAgICAgICBmb250LXNpemU6IC43ZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICB9XG4gICAgICAuYXZhdGFyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIH1cbiAgICAgIC5hdmF0YXIgaW1ne1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9TZWN0aW9uPlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/elmasse/Projects/geut/www/packages/site/components/about.js */",
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.bebad74a1311e8ba0db9.hot-update.js.map