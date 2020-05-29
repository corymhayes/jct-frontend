webpackHotUpdate("static/development/pages/mammoth/university.js",{

/***/ "./pages/mammoth/university/index.js":
/*!*******************************************!*\
  !*** ./pages/mammoth/university/index.js ***!
  \*******************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-device-detect */ \"./node_modules/react-device-detect/main.js\");\n/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_browser_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/browser/Layout */ \"./components/browser/Layout.js\");\n/* harmony import */ var _components_browser_Details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/browser/Details */ \"./components/browser/Details.js\");\n/* harmony import */ var _components_browser_GaugeChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/browser/GaugeChart */ \"./components/browser/GaugeChart.js\");\n/* harmony import */ var _components_mobile_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/mobile/Layout */ \"./components/mobile/Layout.js\");\n/* harmony import */ var _components_mobile_Details__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/mobile/Details */ \"./components/mobile/Details.js\");\n/* harmony import */ var _components_mobile_GaugeChart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/mobile/GaugeChart */ \"./components/mobile/GaugeChart.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/cor-eee/Projects/jct-next/pages/mammoth/university/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar University = function University(_ref) {\n  var data = _ref.data,\n      sites = _ref.sites;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_device_detect__WEBPACK_IMPORTED_MODULE_2__[\"BrowserView\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 3\n    }\n  }, __jsx(_components_browser_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    company: \"mammoth\",\n    sites: sites.map(function (site, i) {\n      return __jsx(\"li\", {\n        key: i,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 38\n        }\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        href: \"/mammoth/\".concat(site.BATTERY.toLowerCase()),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 50\n        }\n      }, __jsx(\"a\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 104\n        }\n      }, site.BATTERY)));\n    }),\n    sitename: \"University\",\n    date: data[0].mDate,\n    time: data[0].mTime,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, __jsx(_components_browser_Details__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    resourceType: \"Water\",\n    name: data[0].S1,\n    unitOfMeasure: data[0].S2.toLowerCase(),\n    currentValue: data[0].V1,\n    totalValue: 16,\n    tpumpOn: data[0].V3,\n    tpumpOff: data[0].V4,\n    alarmOn: data[0].V5,\n    alarmOff: data[0].V6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, __jsx(_components_browser_GaugeChart__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    name: data[0].S1,\n    currentValue: data[0].V1,\n    totalValue: 16,\n    unitOfMeasure: data[0].S2.toLowerCase(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }), __jsx(_components_browser_GaugeChart__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    name: data[0].S3,\n    currentValue: data[0].V2,\n    totalValue: 16,\n    unitOfMeasure: data[0].S4.toLowerCase(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  })))), __jsx(react_device_detect__WEBPACK_IMPORTED_MODULE_2__[\"MobileView\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 3\n    }\n  }, __jsx(_components_mobile_Layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    company: \"mammoth\",\n    sites: sites.map(function (site, i) {\n      return __jsx(\"li\", {\n        key: i,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 38\n        }\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        href: \"/mammoth/\".concat(site.BATTERY.toLowerCase()),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 50\n        }\n      }, __jsx(\"a\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 104\n        }\n      }, site.BATTERY)));\n    }),\n    sitename: \"University\",\n    date: data[0].mDate,\n    time: data[0].mTime,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 5\n    }\n  }, __jsx(_components_mobile_Details__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    resourceType: \"Water\",\n    name: data[0].S1,\n    unitOfMeasure: data[0].S2.toLowerCase(),\n    currentValue: data[0].V1,\n    totalValue: 16,\n    tpumpOn: data[0].V3,\n    tpumpOff: data[0].V4,\n    alarmOn: data[0].V5,\n    alarmOff: data[0].V6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }, __jsx(_components_mobile_GaugeChart__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    name: data[0].S1,\n    currentValue: data[0].V1,\n    totalValue: 16,\n    unitOfMeasure: data[0].S2.toLowerCase(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }), __jsx(_components_mobile_GaugeChart__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    name: data[0].S3,\n    currentValue: data[0].V2,\n    totalValue: 16,\n    unitOfMeasure: data[0].S4.toLowerCase(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  })))));\n};\n\n_c = University;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (University);\n\nvar _c;\n\n$RefreshReg$(_c, \"University\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9tYW1tb3RoL3VuaXZlcnNpdHkvaW5kZXguanM/YWFmZCJdLCJuYW1lcyI6WyJVbml2ZXJzaXR5IiwiZGF0YSIsInNpdGVzIiwibWFwIiwic2l0ZSIsImkiLCJCQVRURVJZIiwidG9Mb3dlckNhc2UiLCJtRGF0ZSIsIm1UaW1lIiwiUzEiLCJTMiIsIlYxIiwiVjMiLCJWNCIsIlY1IiwiVjYiLCJTMyIsIlYyIiwiUzQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUdBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsTUFBU0MsS0FBVCxRQUFTQSxLQUFUO0FBQUEsU0FDakIsbUVBQ0EsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrRUFBRDtBQUNFLFdBQU8sRUFBQyxTQURWO0FBRUUsU0FBSyxFQUFHQSxLQUFLLENBQUNDLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSxhQUFhO0FBQUksV0FBRyxFQUFFQSxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBWSxNQUFDLGdEQUFEO0FBQU0sWUFBSSxxQkFBY0QsSUFBSSxDQUFDRSxPQUFMLENBQWFDLFdBQWIsRUFBZCxDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBc0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFJSCxJQUFJLENBQUNFLE9BQVQsQ0FBdEQsQ0FBWixDQUFiO0FBQUEsS0FBVixDQUZWO0FBR0UsWUFBUSxFQUFFLFlBSFo7QUFJRSxRQUFJLEVBQUVMLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUU8sS0FKaEI7QUFLRSxRQUFJLEVBQUVQLElBQUksQ0FBQyxD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RUFBRVgsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRWSxFQU5uQjtBQU9FLFlBQVEsRUFBRVosSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRYSxFQVBwQjtBQVFFLFdBQU8sRUFBRWIsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRYyxFQVJuQjtBQVNFLFlBQVEsRUFBRWQsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRZSxFQVRwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBV0UsTUFBQyxxRUFBRDtBQUFrQixRQUFJLEVBQUVmLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUVMsRUFBaEM7QUFBb0MsZ0JBQVksRUFBRVQsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRVyxFQUExRDtBQUE4RCxjQUFVLEVBQUUsRUFBMUU7QUFBOEUsaUJBQWEsRUFBRVgsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRVSxFQUFSLENBQVdKLFdBQVgsRUFBN0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLEVBWUUsTUFBQyxxRUFBRDtBQUFrQixRQUFJLEVBQUVOLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUWdCLEVBQWhDO0FBQW9DLGdCQUFZLEVBQUVoQixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFpQixFQUExRDtBQUE4RCxjQUFVLEVBQUUsRUFBMUU7QUFBOEUsaUJBQWEsRUFBRWpCLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUWtCLEVBQVIsQ0FBV1osV0FBWCxFQUE3RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkYsQ0FQRixDQURGLENBMUJBLENBRGlCO0FBQUEsQ0FBbkI7O0tBQU1QLFU7O0FBbUVTQSx5RUFBZiIsImZpbGUiOiIuL3BhZ2VzL21hbW1vdGgvdW5pdmVyc2l0eS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBCcm93c2VyVmlldywgTW9iaWxlVmlldyB9IGZyb20gJ3JlYWN0LWRldmljZS1kZXRlY3QnXG5cbmltcG9ydCBCcm93c2VyTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvYnJvd3Nlci9MYXlvdXQnXG5pbXBvcnQgQnJvd3NlckRldGFpbHMgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9icm93c2VyL0RldGFpbHMnXG5pbXBvcnQgQnJvd3NlckdhdWdlQ2hhcnQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9icm93c2VyL0dhdWdlQ2hhcnQnXG5cbmltcG9ydCBNb2JpbGVMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9tb2JpbGUvTGF5b3V0J1xuaW1wb3J0IE1vYmlsZURldGFpbHMgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9tb2JpbGUvRGV0YWlscydcbmltcG9ydCBNb2JpbGVHYXVnZUNoYXJ0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbW9iaWxlL0dhdWdlQ2hhcnQnXG5cblxuY29uc3QgVW5pdmVyc2l0eSA9ICh7IGRhdGEsIHNpdGVzIH0pID0+IChcbiAgPD5cbiAgPEJyb3dzZXJWaWV3PlxuICAgIDxCcm93c2VyTGF5b3V0IFxuICAgICAgY29tcGFueT0nbWFtbW90aCdcbiAgICAgIHNpdGVzPXsgc2l0ZXMubWFwKChzaXRlLCBpKSA9PiA8bGkga2V5PXtpfT48TGluayBocmVmPXtgL21hbW1vdGgvJHtzaXRlLkJBVFRFUlkudG9Mb3dlckNhc2UoKX1gfT48YT57c2l0ZS5CQVRURVJZfTwvYT48L0xpbms+PC9saT4pIH0gXG4gICAgICBzaXRlbmFtZT17XCJVbml2ZXJzaXR5XCJ9IFxuICAgICAgZGF0ZT17ZGF0YVswXS5tRGF0ZX0gXG4gICAgICB0aW1lPXtkYXRhWzBdLm1UaW1lfVxuICAgID5cbiAgICAgIDxCcm93c2VyRGV0YWlsc1xuICAgICAgICByZXNvdXJjZVR5cGU9J1dhdGVyJ1xuICAgICAgICBuYW1lPXtkYXRhWzBdLlMxfSBcbiAgICAgICAgdW5pdE9mTWVhc3VyZT17ZGF0YVswXS5TMi50b0xvd2VyQ2FzZSgpfVxuICAgICAgICBjdXJyZW50VmFsdWU9e2RhdGFbMF0uVjF9XG4gICAgICAgIHRvdGFsVmFsdWU9ezE2fVxuICAgICAgICB0cHVtcE9uPXtkYXRhWzBdLlYzfVxuICAgICAgICB0cHVtcE9mZj17ZGF0YVswXS5WNH1cbiAgICAgICAgYWxhcm1Pbj17ZGF0YVswXS5WNX1cbiAgICAgICAgYWxhcm1PZmY9e2RhdGFbMF0uVjZ9XG4gICAgICA+XG4gICAgICAgIDxCcm93c2VyR2F1Z2VDaGFydCBuYW1lPXtkYXRhWzBdLlMxfSBjdXJyZW50VmFsdWU9e2RhdGFbMF0uVjF9IHRvdGFsVmFsdWU9ezE2fSB1bml0T2ZNZWFzdXJlPXtkYXRhWzBdLlMyLnRvTG93ZXJDYXNlKCl9IC8+XG4gICAgICAgIDxCcm93c2VyR2F1Z2VDaGFydCBuYW1lPXtkYXRhWzBdLlMzfSBjdXJyZW50VmFsdWU9e2RhdGFbMF0uVjJ9IHRvdGFsVmFsdWU9ezE2fSB1bml0T2ZNZWFzdXJlPXtkYXRhWzBdLlM0LnRvTG93ZXJDYXNlKCl9IC8+XG4gICAgICA8L0Jyb3dzZXJEZXRhaWxzPlxuICAgIDwvQnJvd3NlckxheW91dD5cbiAgPC9Ccm93c2VyVmlldz5cbiAgXG4gIDxNb2JpbGVWaWV3PlxuICAgIDxNb2JpbGVMYXlvdXQgXG4gICAgICBjb21wYW55PSdtYW1tb3RoJ1xuICAgICAgc2l0ZXM9eyBzaXRlcy5tYXAoKHNpdGUsIGkpID0+IDxsaSBrZXk9e2l9PjxMaW5rIGhyZWY9e2AvbWFtbW90aC8ke3NpdGUuQkFUVEVSWS50b0xvd2VyQ2FzZSgpfWB9PjxhPntzaXRlLkJBVFRFUll9PC9hPjwvTGluaz48L2xpPikgfSBcbiAgICAgIHNpdGVuYW1lPXtcIlVuaXZlcnNpdHlcIn0gXG4gICAgICBkYXRlPXtkYXRhWzBdLm1EYXRlfSBcbiAgICAgIHRpbWU9e2RhdGFbMF0ubVRpbWV9XG4gICAgPlxuICAgICAgPE1vYmlsZURldGFpbHNcbiAgICAgICAgcmVzb3VyY2VUeXBlPSdXYXRlcidcbiAgICAgICAgbmFtZT17ZGF0YVswXS5TMX0gXG4gICAgICAgIHVuaXRPZk1lYXN1cmU9e2RhdGFbMF0uUzIudG9Mb3dlckNhc2UoKX1cbiAgICAgICAgY3VycmVudFZhbHVlPXtkYXRhWzBdLlYxfVxuICAgICAgICB0b3RhbFZhbHVlPXsxNn1cbiAgICAgICAgdHB1bXBPbj17ZGF0YVswXS5WM31cbiAgICAgICAgdHB1bXBPZmY9e2RhdGFbMF0uVjR9XG4gICAgICAgIGFsYXJtT249e2RhdGFbMF0uVjV9XG4gICAgICAgIGFsYXJtT2ZmPXtkYXRhWzBdLlY2fVxuICAgICAgPlxuICAgICAgICA8TW9iaWxlR2F1Z2VDaGFydCBuYW1lPXtkYXRhWzBdLlMxfSBjdXJyZW50VmFsdWU9e2RhdGFbMF0uVjF9IHRvdGFsVmFsdWU9ezE2fSB1bml0T2ZNZWFzdXJlPXtkYXRhWzBdLlMyLnRvTG93ZXJDYXNlKCl9IC8+XG4gICAgICAgIDxNb2JpbGVHYXVnZUNoYXJ0IG5hbWU9e2RhdGFbMF0uUzN9IGN1cnJlbnRWYWx1ZT17ZGF0YVswXS5WMn0gdG90YWxWYWx1ZT17MTZ9IHVuaXRPZk1lYXN1cmU9e2RhdGFbMF0uUzQudG9Mb3dlckNhc2UoKX0gLz5cbiAgICAgIDwvTW9iaWxlRGV0YWlscz5cbiAgICA8L01vYmlsZUxheW91dD5cbiAgPC9Nb2JpbGVWaWV3PlxuICA8Lz5cbilcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjdHgpe1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2pjdC1zeXN0ZW1zLmNvbS9hcGkvdW5pdmVyc2l0eScpXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIGNvbnN0IHJlczEgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9tYW1tb3RoJylcbiAgY29uc3Qgc2l0ZXMgPSBhd2FpdCByZXMxLmpzb24oKTtcbiAgICBcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBkYXRhLCBzaXRlcyB9XG4gIH1cbn0gXG5cblxuZXhwb3J0IGRlZmF1bHQgVW5pdmVyc2l0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/mammoth/university/index.js\n");

/***/ })

})