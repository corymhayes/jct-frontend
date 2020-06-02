webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
false,

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
false,

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
false,

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
false,

/***/ "./node_modules/function-bind/implementation.js":
false,

/***/ "./node_modules/function-bind/index.js":
false,

/***/ "./node_modules/has/src/index.js":
false,

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
false,

/***/ "./node_modules/native-url/dist/index.js":
false,

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
false,

/***/ "./node_modules/next/dist/build/polyfills/object.assign/index.js":
false,

/***/ "./node_modules/next/dist/client/link.js":
false,

/***/ "./node_modules/next/dist/client/router.js":
false,

/***/ "./node_modules/next/dist/client/with-router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
false,

/***/ "./node_modules/next/link.js":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
false,

/***/ "./node_modules/prop-types-exact/build/index.js":
false,

/***/ "./node_modules/prop-types/checkPropTypes.js":
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
false,

/***/ "./node_modules/querystring-es3/decode.js":
false,

/***/ "./node_modules/querystring-es3/encode.js":
false,

/***/ "./node_modules/querystring-es3/index.js":
false,

/***/ "./node_modules/react-device-detect/main.js":
false,

/***/ "./node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "./node_modules/react-is/index.js":
false,

/***/ "./node_modules/react/index.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false,

/***/ "./node_modules/shallowequal/index.js":
false,

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
false,

/***/ "./node_modules/ua-parser-js/dist/ua-parser.min.js":
false,

/***/ "./node_modules/webpack/buildin/harmony-module.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {// import styled from 'styled-components'\n// import Link from 'next/link'\n// import { isMobile } from 'react-device-detect'\n// const Container = styled.main`\n//   display: grid;\n//   grid-template-columns: 35% 65%;\n//   width: 100vw;\n//   height: 100vh;\n// `\n// const LogoSide = styled.div`\n//   display: flex;\n//   justify-content: center;\n//   align-items: center;\n//   background-color: #292929;\n//   width: 100%;\n//   img{\n//     width: 50%;\n//   }\n// `\n// const LoginSide = styled.div`\n//   display: flex;\n//   justify-content: center;\n//   align-items: center;\n//   width: 100%;\n//   height: 100%;\n//   form{\n//     display: flex;\n//     flex-flow: column;\n//   }\n//   label{\n//     font-size: 1.4rem;\n//     margin-bottom: .5rem;\n//   }\n//   input[type=\"text\"]{\n//     height: 5rem;\n//     width: 35rem;\n//     margin-bottom: 2rem;\n//   }\n//   input[type=\"text\"]:last-of-type{\n//     margin-bottom: 7rem;\n//   }\n//   button, a{\n//     height: 6rem;\n//     background-color: #ff7e26;\n//     border: none;\n//     font-family: 'Industry';\n//     color: #fff;\n//     font-size: 1.8rem;\n//     text-decoration: none;\n//   }\n// `\n// const Home = ({ data }) => {\n//   if(isMobile) { return( <></> ) }\n//   return(\n//     <Container>\n//       <LogoSide>\n//         <img src=\"./static/jct-logo.png\" />\n//       </LogoSide>\n//       <LoginSide>\n//         <form>\n//           <label htmlFor=\"username\">username</label>\n//           <input type=\"text\" name=\"username\" />\n//           <label htmlFor=\"password\">password</label>\n//           <input type=\"text\" name=\"password\" />\n//           <button><Link href=\"./mammoth\"><a>LOGIN</a></Link></button>\n//         </form>\n//       </LoginSide>\n//     </Container>\n//   )\n// }\n// export default Home\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG4vLyBpbXBvcnQgeyBpc01vYmlsZSB9IGZyb20gJ3JlYWN0LWRldmljZS1kZXRlY3QnXG5cbi8vIGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5tYWluYFxuLy8gICBkaXNwbGF5OiBncmlkO1xuLy8gICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM1JSA2NSU7XG4vLyAgIHdpZHRoOiAxMDB2dztcbi8vICAgaGVpZ2h0OiAxMDB2aDtcbi8vIGBcblxuLy8gY29uc3QgTG9nb1NpZGUgPSBzdHlsZWQuZGl2YFxuLy8gICBkaXNwbGF5OiBmbGV4O1xuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyOTtcbi8vICAgd2lkdGg6IDEwMCU7XG5cbi8vICAgaW1ne1xuLy8gICAgIHdpZHRoOiA1MCU7XG4vLyAgIH1cbi8vIGBcblxuLy8gY29uc3QgTG9naW5TaWRlID0gc3R5bGVkLmRpdmBcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gICBoZWlnaHQ6IDEwMCU7XG5cbi8vICAgZm9ybXtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGZsZXgtZmxvdzogY29sdW1uO1xuLy8gICB9XG5cbi8vICAgbGFiZWx7XG4vLyAgICAgZm9udC1zaXplOiAxLjRyZW07XG4vLyAgICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4vLyAgIH1cblxuLy8gICBpbnB1dFt0eXBlPVwidGV4dFwiXXtcbi8vICAgICBoZWlnaHQ6IDVyZW07XG4vLyAgICAgd2lkdGg6IDM1cmVtO1xuLy8gICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4vLyAgIH1cblxuLy8gICBpbnB1dFt0eXBlPVwidGV4dFwiXTpsYXN0LW9mLXR5cGV7XG4vLyAgICAgbWFyZ2luLWJvdHRvbTogN3JlbTtcbi8vICAgfVxuXG4vLyAgIGJ1dHRvbiwgYXtcbi8vICAgICBoZWlnaHQ6IDZyZW07XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmN2UyNjtcbi8vICAgICBib3JkZXI6IG5vbmU7XG4vLyAgICAgZm9udC1mYW1pbHk6ICdJbmR1c3RyeSc7XG4vLyAgICAgY29sb3I6ICNmZmY7XG4vLyAgICAgZm9udC1zaXplOiAxLjhyZW07XG4vLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuLy8gICB9XG4vLyBgXG5cblxuXG4vLyBjb25zdCBIb21lID0gKHsgZGF0YSB9KSA9PiB7XG4gIFxuLy8gICBpZihpc01vYmlsZSkgeyByZXR1cm4oIDw+PC8+ICkgfVxuXG4vLyAgIHJldHVybihcbi8vICAgICA8Q29udGFpbmVyPlxuLy8gICAgICAgPExvZ29TaWRlPlxuLy8gICAgICAgICA8aW1nIHNyYz1cIi4vc3RhdGljL2pjdC1sb2dvLnBuZ1wiIC8+XG4vLyAgICAgICA8L0xvZ29TaWRlPlxuLy8gICAgICAgPExvZ2luU2lkZT5cbi8vICAgICAgICAgPGZvcm0+XG4vLyAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPnVzZXJuYW1lPC9sYWJlbD5cbi8vICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiAvPlxuLy8gICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5wYXNzd29yZDwvbGFiZWw+XG4vLyAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBhc3N3b3JkXCIgLz5cbi8vICAgICAgICAgICA8YnV0dG9uPjxMaW5rIGhyZWY9XCIuL21hbW1vdGhcIj48YT5MT0dJTjwvYT48L0xpbms+PC9idXR0b24+XG4vLyAgICAgICAgIDwvZm9ybT5cbi8vICAgICAgIDwvTG9naW5TaWRlPlxuLy8gICAgIDwvQ29udGFpbmVyPlxuLy8gICApXG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IEhvbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
false

})