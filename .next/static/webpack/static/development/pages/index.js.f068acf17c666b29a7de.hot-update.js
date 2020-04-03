webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _public_screensizes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/screensizes */ "./public/screensizes.js");
var _this = undefined,
    _jsxFileName = "/Users/cor-eee/Projects/jct-next/components/Layout.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].main.withConfig({
  displayName: "Layout__MainContainer",
  componentId: "sc-1xtzfs7-0"
})(["height:100vh;display:grid;@media ", "{width:80%;grid-template-rows:10% 90%;}@media ", "{width:90%;grid-template-rows:15% 85%;}@media ", "{width:50%;}@media ", "{width:65%;grid-template-rows:10% 90%;}"], _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["standard"].tabletP, _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["standard"].tabletL, _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["standard"].desktop, _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["retina"].laptopM);
var CompanyContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Layout__CompanyContainer",
  componentId: "sc-1xtzfs7-1"
})(["margin:2rem 0 2rem 1rem;display:flex;flex-flow:column;justify-content:center;@media ", "{margin:4rem 0 4rem 1rem;}@media ", "{margin:5rem 0 5rem 1rem;}@media ", "{margin:3rem 0 3rem 1rem;}"], _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["standard"].tablet, _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["standard"].desktop, _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["retina"].laptopM);
var CompanyName = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "Layout__CompanyName",
  componentId: "sc-1xtzfs7-2"
})(["font-weight:600;color:#efefef;@media ", "{font-size:3rem;}@media ", "{font-size:5rem;}@media ", "{font-size:4rem;}"], _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["standard"].tablet, _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["standard"].desktop, _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["retina"].laptopM);
var SiteName = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2.withConfig({
  displayName: "Layout__SiteName",
  componentId: "sc-1xtzfs7-3"
})(["font-weight:600;color:#FF7E26;@media ", "{font-size:2rem;}@media ", "{font-size:3rem;}@media ", "{font-size:2.75rem;}"], _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["standard"].tablet, _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["standard"].desktop, _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["retina"].laptopM);
var SiteDetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Layout__SiteDetailsContainer",
  componentId: "sc-1xtzfs7-4"
})(["background-color:", ";height:auto;padding:9rem 18rem 9rem 0;overflow:scroll;display:grid;@media ", "{padding:3rem 6rem 3rem 3rem;grid:auto-flow / repeat(2,50%);grid-gap:3rem 3rem;}@media ", "{padding:4rem 13rem 4rem 4rem;grid:auto-flow / repeat(3,33%);grid-gap:5rem 5rem;}@media ", "{padding:6rem 27rem 6rem 6rem;grid:auto-flow / repeat(4,25%);grid-gap:10rem 7rem;}@media ", "{grid:auto-flow / repeat(3,33%);}"], _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["color"].jctWhite, _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["standard"].tabletP, _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["standard"].tabletL, _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["standard"].desktop, _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["retina"].laptopM);

var Layout = function Layout(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(MainContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 5
    }
  }, __jsx(CompanyContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, __jsx(CompanyName, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, props.company_name), __jsx(SiteName, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, props.site_name)), __jsx(SiteDetailsContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }
  }, props.children)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2461236782",
    __self: _this
  }, "*{margin:0;padding:0;box-sizing:border-box;font-size:10px;}body{background-color:#292929;}#__next{height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3ItZWVlL1Byb2plY3RzL2pjdC1uZXh0L2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlJdUIsQUFHa0IsQUFPZ0IsQUFJYixTQVZGLEdBV0MsT0FWVyxJQVdULEVBTGYsZ0JBTGlCLGVBQ2pCLHlDQVVtQiwrREFDRSw2RkFDSSxtR0FDekIiLCJmaWxlIjoiL1VzZXJzL2Nvci1lZWUvUHJvamVjdHMvamN0LW5leHQvY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgc3RhbmRhcmQsIHJldGluYSwgY29sb3IgfSBmcm9tICcuLi9wdWJsaWMvc2NyZWVuc2l6ZXMnXG5cbmNvbnN0IE1haW5Db250YWluZXIgPSBzdHlsZWQubWFpbmBcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgXG4gIEBtZWRpYSAke3N0YW5kYXJkLnRhYmxldFB9e1xuICAgIHdpZHRoOiA4MCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgOTAlO1xuICB9XG4gIFxuICBAbWVkaWEgJHtzdGFuZGFyZC50YWJsZXRMfXtcbiAgICB3aWR0aDogOTAlO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTUlIDg1JTtcbiAgfVxuXG4gIEBtZWRpYSAke3N0YW5kYXJkLmRlc2t0b3B9IHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIFxuICBAbWVkaWEgJHtyZXRpbmEubGFwdG9wTX0ge1xuICAgIHdpZHRoOiA2NSU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgOTAlO1xuICB9XG5cbmBcblxuY29uc3QgQ29tcGFueUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogMnJlbSAwIDJyZW0gMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBcblxuICBAbWVkaWEgJHtzdGFuZGFyZC50YWJsZXR9e1xuICAgIG1hcmdpbjogNHJlbSAwIDRyZW0gMXJlbTtcbiAgfVxuICBcbiAgQG1lZGlhICR7c3RhbmRhcmQuZGVza3RvcH17XG4gICAgbWFyZ2luOiA1cmVtIDAgNXJlbSAxcmVtO1xuICB9XG4gIFxuICBAbWVkaWEgJHtyZXRpbmEubGFwdG9wTX17XG4gICAgbWFyZ2luOiAzcmVtIDAgM3JlbSAxcmVtO1xuICB9XG5gXG5cbmNvbnN0IENvbXBhbnlOYW1lID0gc3R5bGVkLmgxYFxuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogI2VmZWZlZjtcblxuICBAbWVkaWEgJHtzdGFuZGFyZC50YWJsZXR9IHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cblxuICBAbWVkaWEgJHtzdGFuZGFyZC5kZXNrdG9wfSB7XG4gICAgZm9udC1zaXplOiA1cmVtO1xuICB9XG4gIFxuICBAbWVkaWEgJHtyZXRpbmEubGFwdG9wTX0ge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgfVxuYFxuXG5cbmNvbnN0IFNpdGVOYW1lID0gc3R5bGVkLmgyYFxuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogI0ZGN0UyNjtcblxuICBAbWVkaWEgJHtzdGFuZGFyZC50YWJsZXR9IHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbiAgXG4gIEBtZWRpYSAke3N0YW5kYXJkLmRlc2t0b3B9IHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cbiAgXG4gIEBtZWRpYSAke3JldGluYS5sYXB0b3BNfSB7XG4gICAgZm9udC1zaXplOiAyLjc1cmVtO1xuICB9XG5gXG5cbmNvbnN0IFNpdGVEZXRhaWxzQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvci5qY3RXaGl0ZX07XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogOXJlbSAxOHJlbSA5cmVtIDA7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIFxuICBAbWVkaWEgJHtzdGFuZGFyZC50YWJsZXRQfXtcbiAgICBwYWRkaW5nOiAzcmVtIDZyZW0gM3JlbSAzcmVtO1xuICAgIGdyaWQ6IGF1dG8tZmxvdyAvIHJlcGVhdCgyLCA1MCUpO1xuICAgIGdyaWQtZ2FwOiAzcmVtIDNyZW07XG4gIH1cbiAgXG4gIEBtZWRpYSAke3N0YW5kYXJkLnRhYmxldEx9e1xuICAgIHBhZGRpbmc6IDRyZW0gMTNyZW0gNHJlbSA0cmVtO1xuICAgIGdyaWQ6IGF1dG8tZmxvdyAvIHJlcGVhdCgzLCAzMyUpO1xuICAgIGdyaWQtZ2FwOiA1cmVtIDVyZW07XG4gIH1cbiAgXG4gIEBtZWRpYSAke3N0YW5kYXJkLmRlc2t0b3B9IHtcbiAgICBwYWRkaW5nOiA2cmVtIDI3cmVtIDZyZW0gNnJlbTtcbiAgICBncmlkOiBhdXRvLWZsb3cgLyByZXBlYXQoNCwgMjUlKTtcbiAgICBncmlkLWdhcDogMTByZW0gN3JlbTtcblxuICB9XG4gIFxuICBAbWVkaWEgJHtyZXRpbmEubGFwdG9wTX0ge1xuICAgIC8qIHBhZGRpbmc6IDFyZW0gMTlyZW0gMCA1cmVtOyAqL1xuICAgIGdyaWQ6IGF1dG8tZmxvdyAvIHJlcGVhdCgzLCAzMyUpO1xuICAgIC8qIGdyaWQtZ2FwOiAxcmVtIDdyZW07ICovXG4gIH1cbmBcblxuY29uc3QgTGF5b3V0ID0gcHJvcHMgPT4gKFxuICA8PlxuXG4gICAgPE1haW5Db250YWluZXI+XG4gICAgICA8Q29tcGFueUNvbnRhaW5lcj5cbiAgICAgICAgPENvbXBhbnlOYW1lPntwcm9wcy5jb21wYW55X25hbWV9PC9Db21wYW55TmFtZT5cbiAgICAgICAgPFNpdGVOYW1lPntwcm9wcy5zaXRlX25hbWV9PC9TaXRlTmFtZT5cbiAgICAgIDwvQ29tcGFueUNvbnRhaW5lcj5cbiAgICAgIDxTaXRlRGV0YWlsc0NvbnRhaW5lcj5cbiAgICAgICAgeyBwcm9wcy5jaGlsZHJlbiB9XG4gICAgICA8L1NpdGVEZXRhaWxzQ29udGFpbmVyPlxuICAgIDwvTWFpbkNvbnRhaW5lcj5cbiAgICBcbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgKntcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGJvZHl7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTI5Mjk7XG4gICAgICB9XG4gICAgICBcbiAgICAgICNfX25leHR7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG5cbiAgPC8+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dCJdfQ== */\n/*@ sourceURL=/Users/cor-eee/Projects/jct-next/components/Layout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.f068acf17c666b29a7de.hot-update.js.map