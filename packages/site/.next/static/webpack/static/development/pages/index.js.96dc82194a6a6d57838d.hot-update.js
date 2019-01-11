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
    className: "jsx-204358181" + " " + "grid-equalHeight",
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
      className: "jsx-204358181" + " " + "col-3_md-6_sm-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "jsx-204358181",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
      className: "jsx-204358181" + " " + "grid-center-noGutter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-204358181" + " " + "avatar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: avatar,
      className: "jsx-204358181",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-204358181" + " " + "col-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, founder && 'Founder. ', role), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "jsx-204358181" + " " + "col-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      className: "jsx-204358181" + " " + "col-12 grid-center grid-middle social",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-204358181" + " " + "col-1",
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
      className: "jsx-204358181",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      "aria-hidden": "true",
      className: "jsx-204358181" + " " + "fa fa-github",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "jsx-204358181" + " " + "col-1",
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
      className: "jsx-204358181",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      "aria-hidden": "true",
      className: "jsx-204358181" + " " + "fa fa-twitter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-204358181",
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
    styleId: "204358181",
    css: "section.jsx-204358181{background:#f0f0f0;border-top-color:var(--blue);border-top:8px solid;}section.jsx-204358181>p.jsx-204358181{padding:1em;font-size:1em;color:#666;}section.jsx-204358181:hover{border-color:var(--violet) box-shadow:2px 4px 8px rgba(0,0,0,.5);}h1.jsx-204358181{font-size:1.2em;margin:0;margin-bottom:.5em;text-transform:uppercase;}h2.jsx-204358181{font-size:.7em;font-weight:100;text-transform:uppercase;margin:0;padding:0;color:#999;}.avatar.jsx-204358181{margin-top:0;}.avatar.jsx-204358181 img.jsx-204358181{display:block;height:100%;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbG1hc3NlL1Byb2plY3RzL2dldXQvd3d3L3BhY2thZ2VzL3NpdGUvY29tcG9uZW50cy9hYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ2tCLEFBRzRCLEFBS1AsQUFNMEIsQUFJdEIsQUFNRCxBQVFGLEFBR0MsWUExQkEsQ0F3QmhCLENBR2MsQ0FYSSxDQU5QLEdBZm9CLE1BZ0JWLENBVlIsQUEyQkEsS0FYYyxNQWYzQixBQTJCQSxPQWpCMkIsSUFoQkosUUFzQlosU0FaWCxBQWFZLElBdEJaLEFBZ0JBLE1BT2EsV0FDYiIsImZpbGUiOiIvVXNlcnMvZWxtYXNzZS9Qcm9qZWN0cy9nZXV0L3d3dy9wYWNrYWdlcy9zaXRlL2NvbXBvbmVudHMvYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDb250ZW50IH0gZnJvbSAnbmV4dGVpbi9wb3N0J1xuXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL3NlY3Rpb24nXG5cbmNvbnN0IHNvcnRCeUlzRm91bmRlciA9ICh7IGRhdGE6IHsgZm91bmRlcjogYSA9IGZhbHNlIH0gfSwgeyBkYXRhOiB7IGZvdW5kZXI6IGIgPSBmYWxzZSB9IH0pID0+IE51bWJlcihiKSAtIE51bWJlcihhKVxuXG5leHBvcnQgZGVmYXVsdCAoeyBtZW1iZXJzIH0pID0+IHtcbiAgY29uc3QgdGVhbSA9IG1lbWJlcnMuc29ydChzb3J0QnlJc0ZvdW5kZXIpXG4gIHJldHVybiAoXG4gICAgPFNlY3Rpb24gdGl0bGU9XCJBYm91dCBVc1wiIHN1YnRpdGxlPVwiTWVldCB0aGUgVGVhbVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWVxdWFsSGVpZ2h0XCI+XG4gICAgICAgIHt0ZWFtLm1hcCgobWVtYmVyKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBkYXRhOiB7IG5hbWUsIHRpdGxlLCB0d2l0dGVyLCBnaXRodWIsIHJvbGUsIGF2YXRhciwgZm91bmRlciB9IH0gPSBtZW1iZXJcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtM19tZC02X3NtLTEyXCIga2V5PXtuYW1lfT5cbiAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJncmlkLWNlbnRlci1ub0d1dHRlclwiPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXZhdGFyXCI+PGltZyBzcmM9e2F2YXRhcn0gLz48L3A+XG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY29sLTEyXCI+e2ZvdW5kZXIgJiYgJ0ZvdW5kZXIuICd9e3JvbGV9PC9oMj5cbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjb2wtMTJcIj57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb2wtMTIgZ3JpZC1jZW50ZXIgZ3JpZC1taWRkbGUgc29jaWFsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjb2wtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BodHRwczovL2dpdGh1Yi5jb20vJHtnaXRodWJ9YH0gdGl0bGU9e2BHaXRIdWIgYWNjb3VudCAke2dpdGh1Yn1gfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub2ZvbGxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZ2l0aHViXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNvbC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YGh0dHBzOi8vdHdpdHRlci5jb20vJHt0d2l0dGVyfWB9IHRpdGxlPXtgVHdpdHRlciBhY2NvdW50ICR7dHdpdHRlcn1gfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub2ZvbGxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdHdpdHRlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPENvbnRlbnQgey4uLm1lbWJlcn0gLz5cbiAgICAgICAgICAgICAgICA8L3A+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICBzZWN0aW9uIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tYmx1ZSk7XG4gICAgICAgIGJvcmRlci10b3A6IDhweCBzb2xpZDtcbiAgICAgIH1cbiAgICAgIHNlY3Rpb24gPiBwIHtcbiAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICB9XG4gICAgICBzZWN0aW9uOmhvdmVye1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXZpb2xldClcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDRweCA4cHggcmdiYSgwLDAsMCwuNSk7XG4gICAgICB9XG5cbiAgICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTsgICAgICAgIFxuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC41ZW07XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICB9XG4gICAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogLjdlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgIH1cbiAgICAgIC5hdmF0YXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgfVxuICAgICAgLmF2YXRhciBpbWd7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8L1NlY3Rpb24+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/elmasse/Projects/geut/www/packages/site/components/about.js */",
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.96dc82194a6a6d57838d.hot-update.js.map