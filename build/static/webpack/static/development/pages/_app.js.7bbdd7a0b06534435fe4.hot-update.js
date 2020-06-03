webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyApp; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/cor-eee/Projects/jct-next/pages/_app.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n\\n  /*  USE FOR DEVELOPMENT */\\n  @font-face{\\n    font-family: 'Industry';\\n    src: url('/static/fonts/Industry-Bold.woff2') format('woff2'),\\n         url('/static/fonts/Industry-Bold.woff') format('woff'),\\n         url('/static/fonts/Industry-Bold.ttf') format('truetype');\\n    font-weight: bold;\\n    font-style: normal;\\n  }\\n\\n  @font-face{\\n    font-family: 'Industry';\\n    src: url('/static/fonts/Industry-Medium.woff2') format('woff2'),\\n         url('/static/fonts/Industry-Medium.woff') format('woff'),\\n         url('/static/fonts/Industry-Medium.ttf') format('truetype'),\\n         url('/static/fonts/Industry-Medium.svg#Industry-Medium') format('svg');\\n    font-weight: 500;\\n    font-style: normal;\\n  }\\n\\n  /*  USE FOR PRODUCTION */  \\n  /* @font-face{\\n    font-family: 'Industry';\\n    src: url('/portal/jct-frontend/static/fonts/Industry-Bold.woff2') format('woff2'),\\n         url('/portal/jct-frontend/static/fonts/Industry-Bold.woff') format('woff'),\\n         url('/portal/jct-frontend/static/fonts/Industry-Bold.ttf') format('truetype');\\n    font-weight: bold;\\n    font-style: normal;\\n  }\\n\\n  @font-face{\\n    font-family: 'Industry';\\n    src: url('/portal/jct-frontend/static/fonts/Industry-Medium.woff2') format('woff2'),\\n         url('/portal/jct-frontend/static/fonts/Industry-Medium.woff') format('woff'),\\n         url('/portal/jct-frontend/static/fonts/Industry-Medium.ttf') format('truetype'),\\n         url('/portal/jct-frontend/static/fonts/Industry-Medium.svg#Industry-Medium') format('svg');\\n    font-weight: 500;\\n    font-style: normal;\\n  } */\\n\\n  *{\\n    margin: 0;\\n    padding: 0;\\n    box-sizing: border-box;\\n    font-size: 10px;\\n  }\\n  \\n  body{\\n    font-family: 'Industry', sans-serif;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"createGlobalStyle\"])(_templateObject());\n_c = GlobalStyle;\nfunction MyApp(_ref) {\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(GlobalStyle, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }\n  }), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }\n  })));\n}\n_c2 = MyApp;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"GlobalStyle\");\n$RefreshReg$(_c2, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBR0MsMkVBQUgsbUJBQWpCO0tBQU1ELFc7QUFzRFMsU0FBU0UsS0FBVCxPQUF3QztBQUFBLE1BQXZCQyxTQUF1QixRQUF2QkEsU0FBdUI7QUFBQSxNQUFaQyxTQUFZLFFBQVpBLFNBQVk7QUFDckQsU0FDRSxtRUFDRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxTQUFELHlGQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FGRixDQURGO0FBTUQ7TUFQdUJGLEsiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcblxuICAvKiAgVVNFIEZPUiBERVZFTE9QTUVOVCAqL1xuICBAZm9udC1mYWNle1xuICAgIGZvbnQtZmFtaWx5OiAnSW5kdXN0cnknO1xuICAgIHNyYzogdXJsKCcvc3RhdGljL2ZvbnRzL0luZHVzdHJ5LUJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICB1cmwoJy9zdGF0aWMvZm9udHMvSW5kdXN0cnktQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG4gICAgICAgICB1cmwoJy9zdGF0aWMvZm9udHMvSW5kdXN0cnktQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG5cbiAgQGZvbnQtZmFjZXtcbiAgICBmb250LWZhbWlseTogJ0luZHVzdHJ5JztcbiAgICBzcmM6IHVybCgnL3N0YXRpYy9mb250cy9JbmR1c3RyeS1NZWRpdW0ud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICB1cmwoJy9zdGF0aWMvZm9udHMvSW5kdXN0cnktTWVkaXVtLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcbiAgICAgICAgIHVybCgnL3N0YXRpYy9mb250cy9JbmR1c3RyeS1NZWRpdW0udHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxuICAgICAgICAgdXJsKCcvc3RhdGljL2ZvbnRzL0luZHVzdHJ5LU1lZGl1bS5zdmcjSW5kdXN0cnktTWVkaXVtJykgZm9ybWF0KCdzdmcnKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgfVxuXG4gIC8qICBVU0UgRk9SIFBST0RVQ1RJT04gKi8gIFxuICAvKiBAZm9udC1mYWNle1xuICAgIGZvbnQtZmFtaWx5OiAnSW5kdXN0cnknO1xuICAgIHNyYzogdXJsKCcvcG9ydGFsL2pjdC1mcm9udGVuZC9zdGF0aWMvZm9udHMvSW5kdXN0cnktQm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgIHVybCgnL3BvcnRhbC9qY3QtZnJvbnRlbmQvc3RhdGljL2ZvbnRzL0luZHVzdHJ5LUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpLFxuICAgICAgICAgdXJsKCcvcG9ydGFsL2pjdC1mcm9udGVuZC9zdGF0aWMvZm9udHMvSW5kdXN0cnktQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG5cbiAgQGZvbnQtZmFjZXtcbiAgICBmb250LWZhbWlseTogJ0luZHVzdHJ5JztcbiAgICBzcmM6IHVybCgnL3BvcnRhbC9qY3QtZnJvbnRlbmQvc3RhdGljL2ZvbnRzL0luZHVzdHJ5LU1lZGl1bS53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgIHVybCgnL3BvcnRhbC9qY3QtZnJvbnRlbmQvc3RhdGljL2ZvbnRzL0luZHVzdHJ5LU1lZGl1bS53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG4gICAgICAgICB1cmwoJy9wb3J0YWwvamN0LWZyb250ZW5kL3N0YXRpYy9mb250cy9JbmR1c3RyeS1NZWRpdW0udHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxuICAgICAgICAgdXJsKCcvcG9ydGFsL2pjdC1mcm9udGVuZC9zdGF0aWMvZm9udHMvSW5kdXN0cnktTWVkaXVtLnN2ZyNJbmR1c3RyeS1NZWRpdW0nKSBmb3JtYXQoJ3N2ZycpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9ICovXG5cbiAgKntcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICBcbiAgYm9keXtcbiAgICBmb250LWZhbWlseTogJ0luZHVzdHJ5Jywgc2Fucy1zZXJpZjtcbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pe1xuICByZXR1cm4oXG4gICAgPD5cbiAgICAgIDxHbG9iYWxTdHlsZSAvPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvPlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})