webpackHotUpdate("static/development/pages/mammoth.js",{

/***/ "./pages/mammoth/index.js":
/*!********************************!*\
  !*** ./pages/mammoth/index.js ***!
  \********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/cor-eee/Projects/jct-next/pages/mammoth/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"mammoth__Container\",\n  componentId: \"wulb8y-0\"\n})([\"display:grid;grid-template-columns:35% 65%;width:100vw;height:100vh;\"]);\n_c = Container;\nvar LogoSide = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"mammoth__LogoSide\",\n  componentId: \"wulb8y-1\"\n})([\"display:flex;justify-content:center;align-items:center;background-color:#292929;width:100%;img{width:50%;}\"]);\n_c2 = LogoSide;\nvar LoginSide = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"mammoth__LoginSide\",\n  componentId: \"wulb8y-2\"\n})([\"display:flex;justify-content:center;align-items:center;width:100%;flex-flow:column;\"]);\n_c3 = LoginSide;\nvar SiteHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"mammoth__SiteHeader\",\n  componentId: \"wulb8y-3\"\n})([\"height:4rem;width:10rem;background-color:#292929;color:#eee;font-size:2.4rem;font-weight:bold;display:flex;align-items:center;justify-content:center;margin-top:10rem;\"]);\n_c4 = SiteHeader;\nvar SiteList = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ul.withConfig({\n  displayName: \"mammoth__SiteList\",\n  componentId: \"wulb8y-4\"\n})([\"list-style:none;margin-top:2rem;li,a{font-size:1.8rem;text-align:center;height:5rem;width:20rem;display:flex;align-items:center;justify-content:center;text-decoration:none;color:#292929;}a:hover,li:hover{background-color:#ff7e26;color:#fff;}\"]);\n_c5 = SiteList;\nvar MobileContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"mammoth__MobileContainer\",\n  componentId: \"wulb8y-5\"\n})([\"display:grid;grid-template-rows:35% 65%;width:100vw;height:100vh;\"]);\n_c6 = MobileContainer;\n\nvar Home = function Home(_ref) {\n  var data = _ref.data,\n      isMobile = _ref.isMobile;\n  return isMobile ? __jsx(MobileContainer, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }\n  }, __jsx(LogoSide, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: \"./static/mammoth-logo.png\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 11\n    }\n  })), __jsx(LoginSide, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 9\n    }\n  }, __jsx(SiteHeader, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 11\n    }\n  }, \"Sites\"), __jsx(SiteList, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 11\n    }\n  }, data.map(function (d, i) {\n    return __jsx(\"li\", {\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 17\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: \"./mammoth/\".concat(d.BATTERY.toLowerCase()),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 29\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 81\n      }\n    }, d.BATTERY)));\n  })))) : __jsx(Container, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }\n  }, __jsx(LogoSide, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: \"./static/mammoth-logo.png\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 11\n    }\n  })), __jsx(LoginSide, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 9\n    }\n  }, __jsx(SiteHeader, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 11\n    }\n  }, \"Sites\"), __jsx(SiteList, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 11\n    }\n  }, data.map(function (d, i) {\n    return __jsx(\"li\", {\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 17\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: \"./mammoth/\".concat(d.BATTERY.toLowerCase()),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 29\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 81\n      }\n    }, d.BATTERY)));\n  }))));\n};\n\n_c7 = Home;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"LogoSide\");\n$RefreshReg$(_c3, \"LoginSide\");\n$RefreshReg$(_c4, \"SiteHeader\");\n$RefreshReg$(_c5, \"SiteList\");\n$RefreshReg$(_c6, \"MobileContainer\");\n$RefreshReg$(_c7, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9tYW1tb3RoL2luZGV4LmpzPzk2MjgiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiTG9nb1NpZGUiLCJMb2dpblNpZGUiLCJTaXRlSGVhZGVyIiwiU2l0ZUxpc3QiLCJ1bCIsIk1vYmlsZUNvbnRhaW5lciIsIkhvbWUiLCJkYXRhIiwiaXNNb2JpbGUiLCJtYXAiLCJkIiwiaSIsIkJBVFRFUlkiLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw0RUFBZjtLQUFNRixTO0FBT04sSUFBTUcsUUFBUSxHQUFHRix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtIQUFkO01BQU1DLFE7QUFZTixJQUFNQyxTQUFTLEdBQUdILHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMkZBQWY7TUFBTUUsUztBQVFOLElBQU1DLFVBQVUsR0FBR0oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw4S0FBaEI7TUFBTUcsVTtBQWFOLElBQU1DLFFBQVEsR0FBR0wseURBQU0sQ0FBQ00sRUFBVjtBQUFBO0FBQUE7QUFBQSx5UEFBZDtNQUFNRCxRO0FBc0JOLElBQU1FLGVBQWUsR0FBR1AseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx5RUFBckI7TUFBTU0sZTs7QUFRTixJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUF3QjtBQUFBLE1BQXJCQyxJQUFxQixRQUFyQkEsSUFBcUI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDbkMsU0FDRUEsUUFBUSxHQUNOLE1BQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQywyQkFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVFLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUlELElBQUksQ0FBQ0UsR0FBTCxDQUFTLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQ1A7QUFBSSxTQUFHLEVBQUVBLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFZLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLHNCQUFlRCxDQUFDLENBQUNFLE9BQUYsQ0FBVUMsV0FBVixFQUFmLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlILENBQUMsQ0FBQ0UsT0FBTixDQUFwRCxDQUFaLENBRE87QUFBQSxHQUFULENBRkosQ0FGRixDQUpGLENBRE0sR0FpQk4sTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLDJCQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUUsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUUsTUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSUwsSUFBSSxDQUFDRSxHQUFMLENBQVMsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsV0FDUDtBQUFJLFNBQUcsRUFBRUEsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVksTUFBQyxnREFBRDtBQUFNLFVBQUksc0JBQWVELENBQUMsQ0FBQ0UsT0FBRixDQUFVQyxXQUFWLEVBQWYsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQW9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUgsQ0FBQyxDQUFDRSxPQUFOLENBQXBELENBQVosQ0FETztBQUFBLEdBQVQsQ0FGSixDQUZGLENBSkYsQ0FsQko7QUFrQ0QsQ0FuQ0Q7O01BQU1OLEk7O0FBb0RTQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL21hbW1vdGgvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNSUgNjUlO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG5gXG5cbmNvbnN0IExvZ29TaWRlID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTI5Mjk7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGltZ3tcbiAgICB3aWR0aDogNTAlO1xuICB9XG5gXG5cbmNvbnN0IExvZ2luU2lkZSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1mbG93OiBjb2x1bW47XG5gXG5cbmNvbnN0IFNpdGVIZWFkZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IDRyZW07XG4gIHdpZHRoOiAxMHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyOTtcbiAgY29sb3I6ICNlZWU7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcmVtO1xuYFxuXG5jb25zdCBTaXRlTGlzdCA9IHN0eWxlZC51bGBcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luLXRvcDogMnJlbTtcblxuICBsaSwgYXtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA1cmVtO1xuICAgIHdpZHRoOiAyMHJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjMjkyOTI5O1xuICB9XG5cbiAgYTpob3ZlciwgbGk6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmN2UyNjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuYFxuXG5jb25zdCBNb2JpbGVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDM1JSA2NSU7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbmBcblxuXG5jb25zdCBIb21lID0gKHsgZGF0YSwgaXNNb2JpbGUgfSkgPT4ge1xuICByZXR1cm4oXG4gICAgaXNNb2JpbGUgP1xuICAgICAgPE1vYmlsZUNvbnRhaW5lcj5cbiAgICAgICAgPExvZ29TaWRlPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9zdGF0aWMvbWFtbW90aC1sb2dvLnBuZ1wiIC8+XG4gICAgICAgIDwvTG9nb1NpZGU+XG4gICAgICAgIDxMb2dpblNpZGU+XG4gICAgICAgICAgPFNpdGVIZWFkZXI+U2l0ZXM8L1NpdGVIZWFkZXI+XG4gICAgICAgICAgPFNpdGVMaXN0PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkYXRhLm1hcCgoZCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PjxMaW5rIGhyZWY9e2AuL21hbW1vdGgvJHtkLkJBVFRFUlkudG9Mb3dlckNhc2UoKX1gfT48YT57ZC5CQVRURVJZfTwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L1NpdGVMaXN0PlxuICAgICAgICA8L0xvZ2luU2lkZT5cbiAgICAgIDwvTW9iaWxlQ29udGFpbmVyPlxuICAgICAgOlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPExvZ29TaWRlPlxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9zdGF0aWMvbWFtbW90aC1sb2dvLnBuZ1wiIC8+XG4gICAgICAgIDwvTG9nb1NpZGU+XG4gICAgICAgIDxMb2dpblNpZGU+XG4gICAgICAgICAgPFNpdGVIZWFkZXI+U2l0ZXM8L1NpdGVIZWFkZXI+XG4gICAgICAgICAgPFNpdGVMaXN0PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkYXRhLm1hcCgoZCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PjxMaW5rIGhyZWY9e2AuL21hbW1vdGgvJHtkLkJBVFRFUlkudG9Mb3dlckNhc2UoKX1gfT48YT57ZC5CQVRURVJZfTwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L1NpdGVMaXN0PlxuICAgICAgICA8L0xvZ2luU2lkZT5cbiAgICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY3R4KXtcbiAgbGV0IHVzZXJBZ2VudDtcbiAgY3R4ID8gdXNlckFnZW50ID0gY3R4LnJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J10gOiB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50XG4gIGxldCBpc01vYmlsZSA9IEJvb2xlYW4odXNlckFnZW50Lm1hdGNoKFxuICAgIC9BbmRyb2lkfEJsYWNrQmVycnl8aVBob25lfGlQYWR8aVBvZHxPcGVyYSBNaW5pfElFTW9iaWxlfFdQRGVza3RvcC9pXG4gICkpXG5cbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9qY3Qtc3lzdGVtcy5jb20vYXBpL21hbW1vdGgnKVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGRhdGEsIGlzTW9iaWxlIH1cbiAgfVxufSBcblxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/mammoth/index.js\n");

/***/ })

})