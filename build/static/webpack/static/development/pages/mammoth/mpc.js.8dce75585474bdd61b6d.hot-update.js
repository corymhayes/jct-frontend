webpackHotUpdate("static/development/pages/mammoth/mpc.js",{

/***/ "./components/mobile/Layout.js":
/*!*************************************!*\
  !*** ./components/mobile/Layout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-sidebar */ \"./node_modules/react-sidebar/dist/react-sidebar.esm.js\");\n/* harmony import */ var _public_screensizes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/screensizes */ \"./public/screensizes.js\");\n/* harmony import */ var _MPCAlarmList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MPCAlarmList */ \"./components/MPCAlarmList.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/cor-eee/Projects/jct-next/components/mobile/Layout.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar MobileMainContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].main.withConfig({\n  displayName: \"Layout__MobileMainContainer\",\n  componentId: \"sc-8eh4j8-0\"\n})([\"width:100%;height:100vh;display:grid;grid-template-rows:7rem 1fr;\"]);\n_c = MobileMainContainer;\nvar MobileCompanyContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Layout__MobileCompanyContainer\",\n  componentId: \"sc-8eh4j8-1\"\n})([\"display:grid;grid-template-columns:20% 60% 20%;background-color:\", \";place-items:stretch;\"], _public_screensizes__WEBPACK_IMPORTED_MODULE_3__[\"color\"].jctDarkGray);\n_c2 = MobileCompanyContainer;\nvar Menu = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Layout__Menu\",\n  componentId: \"sc-8eh4j8-2\"\n})([\"place-self:center;img{width:24px;}\"]);\n_c3 = Menu;\nvar NameDateTimeContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Layout__NameDateTimeContainer\",\n  componentId: \"sc-8eh4j8-3\"\n})([\"place-self:center;display:flex;flex-flow:column;align-items:center;\"]);\n_c4 = NameDateTimeContainer;\nvar MobileSiteName = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h2.withConfig({\n  displayName: \"Layout__MobileSiteName\",\n  componentId: \"sc-8eh4j8-4\"\n})([\"font-size:1.8rem;font-weight:600;color:\", \";\"], _public_screensizes__WEBPACK_IMPORTED_MODULE_3__[\"color\"].jctWhite);\n_c5 = MobileSiteName;\nvar DateTime = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h3.withConfig({\n  displayName: \"Layout__DateTime\",\n  componentId: \"sc-8eh4j8-5\"\n})([\"color:\", \";font-size:1.4rem;font-weight:400;\"], _public_screensizes__WEBPACK_IMPORTED_MODULE_3__[\"color\"].jctWhite);\n_c6 = DateTime;\nvar MobileCarouselContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Layout__MobileCarouselContainer\",\n  componentId: \"sc-8eh4j8-6\"\n})([\"display:flex;flex-flow:column;width:100%;padding-top:4rem;\"]);\n_c7 = MobileCarouselContainer;\nvar CompanyContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Layout__CompanyContainer\",\n  componentId: \"sc-8eh4j8-7\"\n})([\"display:flex;align-items:center;justify-content:center;height:12.5rem;img{height:75%;}\"]);\n_c8 = CompanyContainer;\nvar SiteNavContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Layout__SiteNavContainer\",\n  componentId: \"sc-8eh4j8-8\"\n})([\"width:100%;height:100%;padding-left:3rem;padding-top:1rem;h1{color:#fff;font-size:18px;font-weight:500;}\"]);\n_c9 = SiteNavContainer;\nvar SiteLinks = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].nav.withConfig({\n  displayName: \"Layout__SiteLinks\",\n  componentId: \"sc-8eh4j8-9\"\n})([\"ul{list-style:none;margin-top:1.5rem;}li{height:5rem;display:flex;align-items:center;padding-left:2rem;margin-bottom:1rem;}li:hover{background-color:\", \";}a{color:#fff;text-decoration:none;font-size:16px;}\"], _public_screensizes__WEBPACK_IMPORTED_MODULE_3__[\"color\"].jctOrange);\n_c10 = SiteLinks;\nvar AlarmTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Layout__AlarmTitle\",\n  componentId: \"sc-8eh4j8-10\"\n})([\"align-self:flex-start;margin-top:2rem;margin-left:3rem;display:flex;align-items:center;justify-content:center;background-color:\", \";height:4rem;width:10rem;color:#fff;font-size:1.6rem;\"], _public_screensizes__WEBPACK_IMPORTED_MODULE_3__[\"color\"].jctDarkGray);\n_c11 = AlarmTitle;\n\nvar MobileLayout = function MobileLayout(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isSiteMenuOpen = _useState[0],\n      setIsSiteMenuOpen = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isAlarmMenuOpen = _useState2[0],\n      setIsAlarmMenuOpen = _useState2[1];\n\n  return __jsx(react_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    sidebar: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(CompanyContainer, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 126,\n        columnNumber: 11\n      }\n    }, __jsx(\"img\", {\n      src: \"../static/\".concat(props.company, \"-logo.png\"),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 13\n      }\n    })), __jsx(SiteNavContainer, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 11\n      }\n    }, __jsx(\"h1\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 13\n      }\n    }, \"Sites\"), __jsx(SiteLinks, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 131,\n        columnNumber: 13\n      }\n    }, __jsx(\"ul\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 132,\n        columnNumber: 15\n      }\n    }, props.sites)))),\n    open: isSiteMenuOpen,\n    onSetOpen: setIsSiteMenuOpen,\n    styles: {\n      sidebar: {\n        width: '30rem',\n        backgroundColor: \"\".concat(_public_screensizes__WEBPACK_IMPORTED_MODULE_3__[\"color\"].jctDarkGray),\n        display: 'grid',\n        gridTemplateRows: '12.5rem 1fr'\n      },\n      overlay: {\n        backgroundColor: 'rgba(255,255,255,0)'\n      }\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 5\n    }\n  }, __jsx(react_sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    sidebar: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(AlarmTitle, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 156,\n        columnNumber: 13\n      }\n    }, \"Alarms\"), props.sidebarAlarm),\n    open: isAlarmMenuOpen,\n    onSetOpen: setIsAlarmMenuOpen,\n    pullRight: true,\n    styles: {\n      sidebar: {\n        width: '33rem',\n        backgroundColor: '#fff',\n        display: 'flex',\n        flexFlow: 'column',\n        // alignItems: 'center',\n        color: \"\".concat(_public_screensizes__WEBPACK_IMPORTED_MODULE_3__[\"color\"].jctDarkGray),\n        marginTop: '19%'\n      },\n      overlay: {\n        backgroundColor: 'rgba(255,255,255,0)'\n      }\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 7\n    }\n  }, __jsx(MobileMainContainer, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 178,\n      columnNumber: 9\n    }\n  }, __jsx(MobileCompanyContainer, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 179,\n      columnNumber: 13\n    }\n  }, __jsx(Menu, {\n    onClick: function onClick() {\n      return setIsSiteMenuOpen(true);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 180,\n      columnNumber: 15\n    }\n  }, __jsx(\"img\", {\n    src: \"../static/menu-icon.svg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 181,\n      columnNumber: 17\n    }\n  })), __jsx(NameDateTimeContainer, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 183,\n      columnNumber: 15\n    }\n  }, __jsx(MobileSiteName, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 184,\n      columnNumber: 17\n    }\n  }, props.sitename), __jsx(DateTime, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 185,\n      columnNumber: 17\n    }\n  }, props.date, \" - \", props.time)), __jsx(Menu, {\n    onClick: function onClick() {\n      return setIsAlarmMenuOpen(true);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 187,\n      columnNumber: 15\n    }\n  }, __jsx(\"img\", {\n    src: \"../static/alarm-icon.png\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 188,\n      columnNumber: 17\n    }\n  }))), __jsx(MobileCarouselContainer, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 191,\n      columnNumber: 13\n    }\n  }, props.children))));\n};\n\n_s(MobileLayout, \"DCkJ2y7eK+B5WowErNR8+t9d8KU=\");\n\n_c12 = MobileLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileLayout);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;\n\n$RefreshReg$(_c, \"MobileMainContainer\");\n$RefreshReg$(_c2, \"MobileCompanyContainer\");\n$RefreshReg$(_c3, \"Menu\");\n$RefreshReg$(_c4, \"NameDateTimeContainer\");\n$RefreshReg$(_c5, \"MobileSiteName\");\n$RefreshReg$(_c6, \"DateTime\");\n$RefreshReg$(_c7, \"MobileCarouselContainer\");\n$RefreshReg$(_c8, \"CompanyContainer\");\n$RefreshReg$(_c9, \"SiteNavContainer\");\n$RefreshReg$(_c10, \"SiteLinks\");\n$RefreshReg$(_c11, \"AlarmTitle\");\n$RefreshReg$(_c12, \"MobileLayout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vYmlsZS9MYXlvdXQuanM/MDkzZiJdLCJuYW1lcyI6WyJNb2JpbGVNYWluQ29udGFpbmVyIiwic3R5bGVkIiwibWFpbiIsIk1vYmlsZUNvbXBhbnlDb250YWluZXIiLCJkaXYiLCJjb2xvciIsImpjdERhcmtHcmF5IiwiTWVudSIsIk5hbWVEYXRlVGltZUNvbnRhaW5lciIsIk1vYmlsZVNpdGVOYW1lIiwiaDIiLCJqY3RXaGl0ZSIsIkRhdGVUaW1lIiwiaDMiLCJNb2JpbGVDYXJvdXNlbENvbnRhaW5lciIsIkNvbXBhbnlDb250YWluZXIiLCJTaXRlTmF2Q29udGFpbmVyIiwiU2l0ZUxpbmtzIiwibmF2IiwiamN0T3JhbmdlIiwiQWxhcm1UaXRsZSIsIk1vYmlsZUxheW91dCIsInByb3BzIiwidXNlU3RhdGUiLCJpc1NpdGVNZW51T3BlbiIsInNldElzU2l0ZU1lbnVPcGVuIiwiaXNBbGFybU1lbnVPcGVuIiwic2V0SXNBbGFybU1lbnVPcGVuIiwiY29tcGFueSIsInNpdGVzIiwic2lkZWJhciIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZVJvd3MiLCJvdmVybGF5Iiwic2lkZWJhckFsYXJtIiwiZmxleEZsb3ciLCJtYXJnaW5Ub3AiLCJzaXRlbmFtZSIsImRhdGUiLCJ0aW1lIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsbUJBQW1CLEdBQUdDLHlEQUFNLENBQUNDLElBQVY7QUFBQTtBQUFBO0FBQUEseUVBQXpCO0tBQU1GLG1CO0FBT04sSUFBTUcsc0JBQXNCLEdBQUdGLHlEQUFNLENBQUNHLEdBQVY7QUFBQTtBQUFBO0FBQUEsa0dBR05DLHlEQUFLLENBQUNDLFdBSEEsQ0FBNUI7TUFBTUgsc0I7QUFPTixJQUFNSSxJQUFJLEdBQUdOLHlEQUFNLENBQUNHLEdBQVY7QUFBQTtB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O0FBQUEsSUFERixDQVJGLENBREosRUFhSSxNQUFDLHVCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0wsS0FBSyxDQUFDb0IsUUFEVCxDQWJKLENBekJGLENBOUJGLENBREY7QUE0RUQsQ0FoRkQ7O0dBQU1yQixZOztPQUFBQSxZO0FBbUZTQSwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbW9iaWxlL0xheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgU2lkZWJhciBmcm9tICdyZWFjdC1zaWRlYmFyJ1xuaW1wb3J0IHsgY29sb3IgfSBmcm9tICcuLi8uLi9wdWJsaWMvc2NyZWVuc2l6ZXMnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1QQ0FsYXJtTGlzdCBmcm9tICcuLi9NUENBbGFybUxpc3QnXG5cbmNvbnN0IE1vYmlsZU1haW5Db250YWluZXIgPSBzdHlsZWQubWFpbmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogN3JlbSAxZnI7XG5gXG5cbmNvbnN0IE1vYmlsZUNvbXBhbnlDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA2MCUgMjAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yLmpjdERhcmtHcmF5fTtcbiAgcGxhY2UtaXRlbXM6IHN0cmV0Y2g7XG5gXG5cbmNvbnN0IE1lbnUgPSBzdHlsZWQuZGl2YFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XG4gIGltZ3tcbiAgICB3aWR0aDogMjRweDtcbiAgfVxuYFxuXG5jb25zdCBOYW1lRGF0ZVRpbWVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYFxuXG5jb25zdCBNb2JpbGVTaXRlTmFtZSA9IHN0eWxlZC5oMmBcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAke2NvbG9yLmpjdFdoaXRlfTtcbmBcblxuY29uc3QgRGF0ZVRpbWUgPSBzdHlsZWQuaDNgXG4gIGNvbG9yOiAke2NvbG9yLmpjdFdoaXRlfTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG5gXG5cbmNvbnN0IE1vYmlsZUNhcm91c2VsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogNHJlbTtcbmBcblxuY29uc3QgQ29tcGFueUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEyLjVyZW07XG5cbiAgaW1ne1xuICAgIGhlaWdodDogNzUlO1xuICB9XG5gXG5cbmNvbnN0IFNpdGVOYXZDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBcbiAgaDF7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbmBcblxuY29uc3QgU2l0ZUxpbmtzID0gc3R5bGVkLm5hdmBcbiAgdWx7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gIH1cblxuICBsaXtcbiAgICBoZWlnaHQ6IDVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG5cbiAgbGk6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvci5qY3RPcmFuZ2V9O1xuICB9XG5cbiAgYXtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5gXG5cbmNvbnN0IEFsYXJtVGl0bGUgPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBtYXJnaW4tbGVmdDogM3JlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3IuamN0RGFya0dyYXl9O1xuICBoZWlnaHQ6IDRyZW07XG4gIHdpZHRoOiAxMHJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuYFxuXG5cbmNvbnN0IE1vYmlsZUxheW91dCA9IHByb3BzID0+IHtcbiAgY29uc3QgW2lzU2l0ZU1lbnVPcGVuLCBzZXRJc1NpdGVNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2lzQWxhcm1NZW51T3Blbiwgc2V0SXNBbGFybU1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBcbiAgcmV0dXJuKFxuICAgIDxTaWRlYmFyXG4gICAgICBzaWRlYmFyPXtcbiAgICAgICAgPD5cbiAgICAgICAgICA8Q29tcGFueUNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtgLi4vc3RhdGljLyR7cHJvcHMuY29tcGFueX0tbG9nby5wbmdgfSAvPlxuICAgICAgICAgIDwvQ29tcGFueUNvbnRhaW5lcj5cbiAgICAgICAgICA8U2l0ZU5hdkNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxoMT5TaXRlczwvaDE+XG4gICAgICAgICAgICA8U2l0ZUxpbmtzPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3Byb3BzLnNpdGVzfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9TaXRlTGlua3M+XG4gICAgICAgICAgPC9TaXRlTmF2Q29udGFpbmVyPlxuICAgICAgICA8Lz5cbiAgICAgIH1cbiAgICAgIG9wZW49e2lzU2l0ZU1lbnVPcGVufVxuICAgICAgb25TZXRPcGVuPXtzZXRJc1NpdGVNZW51T3Blbn1cbiAgICAgIHN0eWxlcz17e1xuICAgICAgICBzaWRlYmFyOiB7XG4gICAgICAgICAgd2lkdGg6ICczMHJlbScsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHtjb2xvci5qY3REYXJrR3JheX1gLFxuICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICAgICAgICBncmlkVGVtcGxhdGVSb3dzOiAnMTIuNXJlbSAxZnInXG4gICAgICAgIH0sXG4gICAgICAgIG92ZXJsYXk6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDApJ1xuICAgICAgICB9XG4gICAgICB9fVxuICAgID5cbiAgICAgIDxTaWRlYmFyXG4gICAgICAgIHNpZGViYXI9eyBcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPEFsYXJtVGl0bGU+QWxhcm1zPC9BbGFybVRpdGxlPlxuICAgICAgICAgICAge3Byb3BzLnNpZGViYXJBbGFybX1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgfVxuICAgICAgICBvcGVuPXtpc0FsYXJtTWVudU9wZW59XG4gICAgICAgIG9uU2V0T3Blbj17c2V0SXNBbGFybU1lbnVPcGVufVxuICAgICAgICBwdWxsUmlnaHQ9e3RydWV9XG4gICAgICAgIHN0eWxlcz17e1xuICAgICAgICAgIHNpZGViYXI6IHtcbiAgICAgICAgICAgIHdpZHRoOiAnMzNyZW0nLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBmbGV4RmxvdzogJ2NvbHVtbicsXG4gICAgICAgICAgICAvLyBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgIGNvbG9yOiBgJHtjb2xvci5qY3REYXJrR3JheX1gLFxuICAgICAgICAgICAgbWFyZ2luVG9wOiAnMTklJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG92ZXJsYXk6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMCknXG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8TW9iaWxlTWFpbkNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxNb2JpbGVDb21wYW55Q29udGFpbmVyPlxuICAgICAgICAgICAgICA8TWVudSBvbkNsaWNrPXsoKSA9PiBzZXRJc1NpdGVNZW51T3Blbih0cnVlKX0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9Jy4uL3N0YXRpYy9tZW51LWljb24uc3ZnJyAvPlxuICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICAgIDxOYW1lRGF0ZVRpbWVDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPE1vYmlsZVNpdGVOYW1lPntwcm9wcy5zaXRlbmFtZX08L01vYmlsZVNpdGVOYW1lPlxuICAgICAgICAgICAgICAgIDxEYXRlVGltZT57cHJvcHMuZGF0ZX0gLSB7cHJvcHMudGltZX08L0RhdGVUaW1lPlxuICAgICAgICAgICAgICA8L05hbWVEYXRlVGltZUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPE1lbnUgb25DbGljaz17KCkgPT4gc2V0SXNBbGFybU1lbnVPcGVuKHRydWUpfT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0nLi4vc3RhdGljL2FsYXJtLWljb24ucG5nJyAvPlxuICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICA8L01vYmlsZUNvbXBhbnlDb250YWluZXI+XG4gICAgICAgICAgICA8TW9iaWxlQ2Fyb3VzZWxDb250YWluZXI+XG4gICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvTW9iaWxlQ2Fyb3VzZWxDb250YWluZXI+XG4gICAgICAgIDwvTW9iaWxlTWFpbkNvbnRhaW5lcj5cbiAgICAgIDwvU2lkZWJhcj5cbiAgICA8L1NpZGViYXI+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVMYXlvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/mobile/Layout.js\n");

/***/ })

})