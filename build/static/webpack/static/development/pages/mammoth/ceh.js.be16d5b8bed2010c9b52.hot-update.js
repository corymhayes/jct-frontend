webpackHotUpdate("static/development/pages/mammoth/ceh.js",{

/***/ "./pages/mammoth/ceh/index.js":
/*!************************************!*\
  !*** ./pages/mammoth/ceh/index.js ***!
  \************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-device-detect */ \"./node_modules/react-device-detect/main.js\");\n/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_browser_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/browser/Layout */ \"./components/browser/Layout.js\");\n/* harmony import */ var _components_browser_Details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/browser/Details */ \"./components/browser/Details.js\");\n/* harmony import */ var _components_browser_GaugeChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/browser/GaugeChart */ \"./components/browser/GaugeChart.js\");\n/* harmony import */ var _components_mobile_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/mobile/Layout */ \"./components/mobile/Layout.js\");\n/* harmony import */ var _components_mobile_Details__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/mobile/Details */ \"./components/mobile/Details.js\");\n/* harmony import */ var _components_mobile_GaugeChart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/mobile/GaugeChart */ \"./components/mobile/GaugeChart.js\");\n/* harmony import */ var _components_CEHAlarmList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/CEHAlarmList */ \"./components/CEHAlarmList.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/cor-eee/Projects/jct-next/pages/mammoth/ceh/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nvar CEH = function CEH(_ref) {\n  var data = _ref.data,\n      sites = _ref.sites;\n  return react_device_detect__WEBPACK_IMPORTED_MODULE_2__[\"isMobile\"] ? __jsx(_components_mobile_Layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    sites: sites.map(function (site, i) {\n      return __jsx(\"li\", {\n        key: i,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 38\n        }\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        href: \"./\".concat(site.BATTERY.toLowerCase()),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 50\n        }\n      }, __jsx(\"a\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 97\n        }\n      }, site.BATTERY)));\n    }),\n    company: 'mammoth',\n    sitename: 'CEH',\n    date: data[0].mDate,\n    time: data[0].mTime,\n    sidebarAlarm: __jsx(_components_CEHAlarmList__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      alarmOn: data[0].V5,\n      alarmOff: 10,\n      tpumpOn: 10,\n      tpumpOff: 12,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 21\n      }\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, __jsx(_components_mobile_Details__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    resourceType: \"Water\",\n    name: data[0].S1,\n    unitOfMeasure: data[0].S2.toLowerCase(),\n    currentValue: data[0].V1,\n    totalValue: 16,\n    tpumpOn: data[0].V3,\n    tpumpOff: data[0].V4,\n    alarmOn: data[0].V5,\n    alarmOff: data[0].V6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, __jsx(_components_mobile_GaugeChart__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    name: data[0].S1,\n    currentValue: data[0].V1,\n    totalValue: 16,\n    unitOfMeasure: data[0].S2.toLowerCase(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }), __jsx(_components_mobile_GaugeChart__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    name: data[0].S3,\n    currentValue: data[0].V2,\n    totalValue: 16,\n    unitOfMeasure: data[0].S4.toLowerCase(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }))) : __jsx(_components_browser_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    sites: sites.map(function (site, i) {\n      return __jsx(\"li\", {\n        key: i,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 38\n        }\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        href: \"./\".concat(site.BATTERY.toLowerCase()),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 50\n        }\n      }, __jsx(\"a\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 97\n        }\n      }, site.BATTERY)));\n    }),\n    company: 'mammoth',\n    sitename: 'CEH',\n    date: data[0].mDate,\n    time: data[0].mTime,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }\n  }, __jsx(_components_browser_Details__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    resourceType: \"Water\",\n    name: data[0].S1,\n    unitOfMeasure: data[0].S2.toLowerCase(),\n    currentValue: data[0].V1,\n    totalValue: 16,\n    tpumpOn: data[0].V3,\n    tpumpOff: data[0].V4,\n    alarmOn: data[0].V5,\n    alarmOff: data[0].V6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }, __jsx(_components_browser_GaugeChart__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    name: data[0].S1,\n    currentValue: data[0].V1,\n    totalValue: 16,\n    unitOfMeasure: data[0].S2.toLowerCase(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }), __jsx(_components_browser_GaugeChart__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    name: data[0].S3,\n    currentValue: data[0].V2,\n    totalValue: 16,\n    unitOfMeasure: data[0].S4.toLowerCase(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  })));\n};\n\n_c = CEH;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CEH);\n\nvar _c;\n\n$RefreshReg$(_c, \"CEH\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9tYW1tb3RoL2NlaC9pbmRleC5qcz84YjE1Il0sIm5hbWVzIjpbIkNFSCIsImRhdGEiLCJzaXRlcyIsImlzTW9iaWxlIiwibWFwIiwic2l0ZSIsImkiLCJCQVRURVJZIiwidG9Mb3dlckNhc2UiLCJtRGF0ZSIsIm1UaW1lIiwiVjUiLCJTMSIsIlMyIiwiVjEiLCJWMyIsIlY0IiwiVjYiLCJTMyIsIlYyIiwiUzQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsTUFBU0MsS0FBVCxRQUFTQSxLQUFUO0FBQUEsU0FDVkMsNERBQVEsR0FDTixNQUFDLGlFQUFEO0FBQ0UsU0FBSyxFQUFHRCxLQUFLLENBQUNFLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSxhQUFhO0FBQUksV0FBRyxFQUFFQSxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBWSxNQUFDLGdEQUFEO0FBQU0sWUFBSSxjQUFPRCxJQUFJLENBQUNFLE9BQUwsQ0FBYUMsV0FBYixFQUFQLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUErQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUlILElBQUksQ0FBQ0UsT0FBVCxDQUEvQyxDQUFaLENBQWI7QUFBQSxLQUFWLENBRFY7QUFFRSxXQUFPLEVBQUUsU0FGWDtBQUdFLFlBQVEsRUFBRSxLQUhaO0FBSUUsUUFBSSxFQUFFTixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFRLEtBSmhCO0FBS0UsUUFBSSxFQUFFUixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFTLEtBTGhCO0FBTUUsZ0JBQVksRUFBRSxNQUFDLGdF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IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSAncmVhY3QtZGV2aWNlLWRldGVjdCdcblxuaW1wb3J0IEJyb3dzZXJMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9icm93c2VyL0xheW91dCdcbmltcG9ydCBCcm93c2VyRGV0YWlscyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Jyb3dzZXIvRGV0YWlscydcbmltcG9ydCBCcm93c2VyR2F1Z2VDaGFydCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Jyb3dzZXIvR2F1Z2VDaGFydCdcblxuaW1wb3J0IE1vYmlsZUxheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL21vYmlsZS9MYXlvdXQnXG5pbXBvcnQgTW9iaWxlRGV0YWlscyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL21vYmlsZS9EZXRhaWxzJ1xuaW1wb3J0IE1vYmlsZUdhdWdlQ2hhcnQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9tb2JpbGUvR2F1Z2VDaGFydCdcbmltcG9ydCBDRUhBbGFybUxpc3QgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9DRUhBbGFybUxpc3QnXG5cblxuY29uc3QgQ0VIID0gKHsgZGF0YSwgc2l0ZXMgfSkgPT4gKFxuICBpc01vYmlsZSA/XG4gICAgPE1vYmlsZUxheW91dCBcbiAgICAgIHNpdGVzPXsgc2l0ZXMubWFwKChzaXRlLCBpKSA9PiA8bGkga2V5PXtpfT48TGluayBocmVmPXtgLi8ke3NpdGUuQkFUVEVSWS50b0xvd2VyQ2FzZSgpfWB9PjxhPntzaXRlLkJBVFRFUll9PC9hPjwvTGluaz48L2xpPikgfSBcbiAgICAgIGNvbXBhbnk9eydtYW1tb3RoJ31cbiAgICAgIHNpdGVuYW1lPXsnQ0VIJ30gXG4gICAgICBkYXRlPXtkYXRhWzBdLm1EYXRlfSBcbiAgICAgIHRpbWU9e2RhdGFbMF0ubVRpbWV9XG4gICAgICBzaWRlYmFyQWxhcm09ezxDRUhBbGFybUxpc3QgYWxhcm1Pbj17ZGF0YVswXS5WNX0gYWxhcm1PZmY9ezEwfSB0cHVtcE9uPXsxMH0gdHB1bXBPZmY9ezEyfS8+fVxuICAgID5cbiAgICAgIDxNb2JpbGVEZXRhaWxzXG4gICAgICByZXNvdXJjZVR5cGU9J1dhdGVyJ1xuICAgICAgbmFtZT17ZGF0YVswXS5TMX0gXG4gICAgICB1bml0T2ZNZWFzdXJlPXtkYXRhWzBdLlMyLnRvTG93ZXJDYXNlKCl9XG4gICAgICBjdXJyZW50VmFsdWU9e2RhdGFbMF0uVjF9XG4gICAgICB0b3RhbFZhbHVlPXsxNn1cbiAgICAgIHRwdW1wT249e2RhdGFbMF0uVjN9XG4gICAgICB0cHVtcE9mZj17ZGF0YVswXS5WNH1cbiAgICAgIGFsYXJtT249e2RhdGFbMF0uVjV9XG4gICAgICBhbGFybU9mZj17ZGF0YVswXS5WNn1cbiAgICAgID5cbiAgICAgICAgPE1vYmlsZUdhdWdlQ2hhcnQgbmFtZT17ZGF0YVswXS5TMX0gY3VycmVudFZhbHVlPXtkYXRhWzBdLlYxfSB0b3RhbFZhbHVlPXsxNn0gdW5pdE9mTWVhc3VyZT17ZGF0YVswXS5TMi50b0xvd2VyQ2FzZSgpfSAvPlxuICAgICAgICA8TW9iaWxlR2F1Z2VDaGFydCBuYW1lPXtkYXRhWzBdLlMzfSBjdXJyZW50VmFsdWU9e2RhdGFbMF0uVjJ9IHRvdGFsVmFsdWU9ezE2fSB1bml0T2ZNZWFzdXJlPXtkYXRhWzBdLlM0LnRvTG93ZXJDYXNlKCl9IC8+XG4gICAgICA8L01vYmlsZURldGFpbHM+XG4gICAgPC9Nb2JpbGVMYXlvdXQ+XG4gIDpcbiAgICA8QnJvd3NlckxheW91dCBcbiAgICAgIHNpdGVzPXsgc2l0ZXMubWFwKChzaXRlLCBpKSA9PiA8bGkga2V5PXtpfT48TGluayBocmVmPXtgLi8ke3NpdGUuQkFUVEVSWS50b0xvd2VyQ2FzZSgpfWB9PjxhPntzaXRlLkJBVFRFUll9PC9hPjwvTGluaz48L2xpPikgfSBcbiAgICAgIGNvbXBhbnk9eydtYW1tb3RoJ31cbiAgICAgIHNpdGVuYW1lPXsnQ0VIJ30gXG4gICAgICBkYXRlPXtkYXRhWzBdLm1EYXRlfSBcbiAgICAgIHRpbWU9e2RhdGFbMF0ubVRpbWV9XG4gICAgPlxuICAgICAgPEJyb3dzZXJEZXRhaWxzXG4gICAgICByZXNvdXJjZVR5cGU9J1dhdGVyJ1xuICAgICAgbmFtZT17ZGF0YVswXS5TMX0gXG4gICAgICB1bml0T2ZNZWFzdXJlPXtkYXRhWzBdLlMyLnRvTG93ZXJDYXNlKCl9XG4gICAgICBjdXJyZW50VmFsdWU9e2RhdGFbMF0uVjF9XG4gICAgICB0b3RhbFZhbHVlPXsxNn1cbiAgICAgIHRwdW1wT249e2RhdGFbMF0uVjN9XG4gICAgICB0cHVtcE9mZj17ZGF0YVswXS5WNH1cbiAgICAgIGFsYXJtT249e2RhdGFbMF0uVjV9XG4gICAgICBhbGFybU9mZj17ZGF0YVswXS5WNn1cbiAgICAgID5cbiAgICAgICAgPEJyb3dzZXJHYXVnZUNoYXJ0IG5hbWU9e2RhdGFbMF0uUzF9IGN1cnJlbnRWYWx1ZT17ZGF0YVswXS5WMX0gdG90YWxWYWx1ZT17MTZ9IHVuaXRPZk1lYXN1cmU9e2RhdGFbMF0uUzIudG9Mb3dlckNhc2UoKX0gLz5cbiAgICAgICAgPEJyb3dzZXJHYXVnZUNoYXJ0IG5hbWU9e2RhdGFbMF0uUzN9IGN1cnJlbnRWYWx1ZT17ZGF0YVswXS5WMn0gdG90YWxWYWx1ZT17MTZ9IHVuaXRPZk1lYXN1cmU9e2RhdGFbMF0uUzQudG9Mb3dlckNhc2UoKX0gLz5cbiAgICAgIDwvQnJvd3NlckRldGFpbHM+XG4gICAgPC9Ccm93c2VyTGF5b3V0PlxuKVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGN0eCl7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vamN0LXN5c3RlbXMuY29tL2FwaS9tYW1tb3RoL2NlaCcpXG4gIGNvbnN0IHJlczEgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2pjdC1zeXN0ZW1zLmNvbS9hcGkvbWFtbW90aCcpXG4gIFxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICBjb25zdCBzaXRlcyA9IGF3YWl0IHJlczEuanNvbigpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBkYXRhLCBzaXRlcyB9XG4gIH1cbn0gXG5cblxuZXhwb3J0IGRlZmF1bHQgQ0VIIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/mammoth/ceh/index.js\n");

/***/ })

})