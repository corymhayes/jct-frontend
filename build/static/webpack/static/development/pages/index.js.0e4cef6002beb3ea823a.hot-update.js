webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/cor-eee/Projects/jct-next/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n // import { isMobile } from 'react-device-detect'\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].main.withConfig({\n  displayName: \"pages__Container\",\n  componentId: \"sc-1i3xtr-0\"\n})([\"display:grid;grid-template-columns:35% 65%;width:100vw;height:100vh;\"]);\n_c = Container;\nvar LogoSide = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"pages__LogoSide\",\n  componentId: \"sc-1i3xtr-1\"\n})([\"display:flex;justify-content:center;align-items:center;background-color:#292929;width:100%;img{width:50%;}\"]);\nvar LoginSide = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"pages__LoginSide\",\n  componentId: \"sc-1i3xtr-2\"\n})([\"display:flex;justify-content:center;align-items:center;width:100%;height:100%;form{display:flex;flex-flow:column;}label{font-size:1.4rem;margin-bottom:.5rem;}input[type=\\\"text\\\"]{height:5rem;width:35rem;margin-bottom:2rem;}input[type=\\\"text\\\"]:last-of-type{margin-bottom:7rem;}button,a{height:6rem;background-color:#ff7e26;border:none;font-family:'Industry';color:#fff;font-size:1.8rem;text-decoration:none;}\"]);\nvar MobileContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"pages__MobileContainer\",\n  componentId: \"sc-1i3xtr-3\"\n})([\"display:grid;grid-template-rows:35% 1fr;height:100vh;width:100vw;\"]); // const Home = ({ data }) => {\n//   if(isMobile) { return( <></> ) }\n//   return(\n//     <Container>\n//       <LogoSide>\n//         <img src=\"./static/jct-logo.png\" />\n//       </LogoSide>\n//       <LoginSide>\n//         <form>\n//           <label htmlFor=\"username\">username</label>\n//           <input type=\"text\" name=\"username\" />\n//           <label htmlFor=\"password\">password</label>\n//           <input type=\"text\" name=\"password\" />\n//           <button><Link href=\"./mammoth\"><a>LOGIN</a></Link></button>\n//         </form>\n//       </LoginSide>\n//     </Container>\n//   )\n// }\n// export default Home\n\n_c2 = MobileContainer;\n\nvar Home = function Home(_ref) {\n  var isMobile = _ref.isMobile;\n  return isMobile ? __jsx(MobileContainer, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }\n  }) : __jsx(Container, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 7\n    }\n  });\n};\n\n_c3 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nHome.getInitialProps = function (_ref2) {\n  var req = _ref2.req;\n  var userAgent;\n\n  if (req) {\n    // if you are on the server and you get a 'req' property from your context\n    userAgent = req.headers['user-agent']; // get the user-agent from the headers\n  } else {\n    userAgent = navigator.userAgent; // if you are on the client you can access the navigator from the window object\n  }\n\n  var isMobile = Boolean(userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));\n  return {\n    isMobile: isMobile\n  };\n};\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"MobileContainer\");\n$RefreshReg$(_c3, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsIm1haW4iLCJMb2dvU2lkZSIsImRpdiIsIkxvZ2luU2lkZSIsIk1vYmlsZUNvbnRhaW5lciIsIkhvbWUiLCJpc01vYmlsZSIsImdldEluaXRpYWxQcm9wcyIsInJlcSIsInVzZXJBZ2VudCIsImhlYWRlcnMiLCJuYXZpZ2F0b3IiLCJCb29sZWFuIiwibWF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLElBQVY7QUFBQTtBQUFBO0FBQUEsNEVBQWY7S0FBTUYsUztBQU9OLElBQU1HLFFBQVEsR0FBR0YseURBQU0sQ0FBQ0csR0FBVjtBQUFBO0FBQUE7QUFBQSxrSEFBZDtBQVlBLElBQU1DLFNBQVMsR0FBR0oseURBQU0sQ0FBQ0csR0FBVjtBQUFBO0FBQUE7QUFBQSxnYUFBZjtBQXNDQSxJQUFNRSxlQUFlLEdBQUdMLHlEQUFNLENBQUNHLEdBQVY7QUFBQTtBQUFBO0FBQUEseUVBQXJCLEMsQ0FTQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztNQS9CTUUsZTs7QUFrQ04sSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBa0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFFN0IsU0FDRUEsUUFBUSxHQUNOLE1BQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRE0sR0FHTixNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKO0FBTUQsQ0FSRDs7TUFBTUQsSTtBQVVTQSxtRUFBZjs7QUFFQUEsSUFBSSxDQUFDRSxlQUFMLEdBQXVCLGlCQUFhO0FBQUEsTUFBVkMsR0FBVSxTQUFWQSxHQUFVO0FBQ2xDLE1BQUlDLFNBQUo7O0FBRUEsTUFBSUQsR0FBSixFQUFTO0FBQUU7QUFDVEMsYUFBUyxHQUFHRCxHQUFHLENBQUNFLE9BQUosQ0FBWSxZQUFaLENBQVosQ0FETyxDQUMrQjtBQUN2QyxHQUZELE1BRU87QUFDTEQsYUFBUyxHQUFHRSxTQUFTLENBQUNGLFNBQXRCLENBREssQ0FDMkI7QUFDakM7O0FBRUQsTUFBSUgsUUFBUSxHQUFHTSxPQUFPLENBQUNILFNBQVMsQ0FBQ0ksS0FBVixDQUNyQixvRUFEcUIsQ0FBRCxDQUF0QjtBQUlBLFNBQU87QUFBRVAsWUFBUSxFQUFSQTtBQUFGLEdBQVA7QUFDRCxDQWREIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuLy8gaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICdyZWFjdC1kZXZpY2UtZGV0ZWN0J1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQubWFpbmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNSUgNjUlO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG5gXG5cbmNvbnN0IExvZ29TaWRlID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTI5Mjk7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGltZ3tcbiAgICB3aWR0aDogNTAlO1xuICB9XG5gXG5cbmNvbnN0IExvZ2luU2lkZSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIGZvcm17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgfVxuXG4gIGxhYmVse1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICB9XG5cbiAgaW5wdXRbdHlwZT1cInRleHRcIl17XG4gICAgaGVpZ2h0OiA1cmVtO1xuICAgIHdpZHRoOiAzNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB9XG5cbiAgaW5wdXRbdHlwZT1cInRleHRcIl06bGFzdC1vZi10eXBle1xuICAgIG1hcmdpbi1ib3R0b206IDdyZW07XG4gIH1cblxuICBidXR0b24sIGF7XG4gICAgaGVpZ2h0OiA2cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjdlMjY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiAnSW5kdXN0cnknO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuYFxuXG5jb25zdCBNb2JpbGVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDM1JSAxZnI7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbmBcblxuXG5cbi8vIGNvbnN0IEhvbWUgPSAoeyBkYXRhIH0pID0+IHtcbiAgXG4vLyAgIGlmKGlzTW9iaWxlKSB7IHJldHVybiggPD48Lz4gKSB9XG5cbi8vICAgcmV0dXJuKFxuLy8gICAgIDxDb250YWluZXI+XG4vLyAgICAgICA8TG9nb1NpZGU+XG4vLyAgICAgICAgIDxpbWcgc3JjPVwiLi9zdGF0aWMvamN0LWxvZ28ucG5nXCIgLz5cbi8vICAgICAgIDwvTG9nb1NpZGU+XG4vLyAgICAgICA8TG9naW5TaWRlPlxuLy8gICAgICAgICA8Zm9ybT5cbi8vICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+dXNlcm5hbWU8L2xhYmVsPlxuLy8gICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIC8+XG4vLyAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPnBhc3N3b3JkPC9sYWJlbD5cbi8vICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGFzc3dvcmRcIiAvPlxuLy8gICAgICAgICAgIDxidXR0b24+PExpbmsgaHJlZj1cIi4vbWFtbW90aFwiPjxhPkxPR0lOPC9hPjwvTGluaz48L2J1dHRvbj5cbi8vICAgICAgICAgPC9mb3JtPlxuLy8gICAgICAgPC9Mb2dpblNpZGU+XG4vLyAgICAgPC9Db250YWluZXI+XG4vLyAgIClcbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgSG9tZVxuXG5cbmNvbnN0IEhvbWUgPSAoeyBpc01vYmlsZSB9KSA9PiB7XG5cbiAgcmV0dXJuKFxuICAgIGlzTW9iaWxlID8gXG4gICAgICA8TW9iaWxlQ29udGFpbmVyPjwvTW9iaWxlQ29udGFpbmVyPlxuICAgICAgOlxuICAgICAgPENvbnRhaW5lcj48L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG5cbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gKHsgcmVxIH0pID0+IHtcbiAgbGV0IHVzZXJBZ2VudDtcbiAgXG4gIGlmIChyZXEpIHsgLy8gaWYgeW91IGFyZSBvbiB0aGUgc2VydmVyIGFuZCB5b3UgZ2V0IGEgJ3JlcScgcHJvcGVydHkgZnJvbSB5b3VyIGNvbnRleHRcbiAgICB1c2VyQWdlbnQgPSByZXEuaGVhZGVyc1sndXNlci1hZ2VudCddIC8vIGdldCB0aGUgdXNlci1hZ2VudCBmcm9tIHRoZSBoZWFkZXJzXG4gIH0gZWxzZSB7XG4gICAgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudCAvLyBpZiB5b3UgYXJlIG9uIHRoZSBjbGllbnQgeW91IGNhbiBhY2Nlc3MgdGhlIG5hdmlnYXRvciBmcm9tIHRoZSB3aW5kb3cgb2JqZWN0XG4gIH1cblxuICBsZXQgaXNNb2JpbGUgPSBCb29sZWFuKHVzZXJBZ2VudC5tYXRjaChcbiAgICAvQW5kcm9pZHxCbGFja0JlcnJ5fGlQaG9uZXxpUGFkfGlQb2R8T3BlcmEgTWluaXxJRU1vYmlsZXxXUERlc2t0b3AvaVxuICApKVxuXG4gIHJldHVybiB7IGlzTW9iaWxlIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})