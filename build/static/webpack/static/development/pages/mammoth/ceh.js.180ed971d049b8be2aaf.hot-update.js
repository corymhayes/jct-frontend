webpackHotUpdate("static/development/pages/mammoth/ceh.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _public_screensizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/screensizes */ "./public/screensizes.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sidebar */ "./components/Sidebar.js");
var _this = undefined,
    _jsxFileName = "/Users/cor-eee/Projects/jct-next/components/Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].main.withConfig({
  displayName: "Layout__MainContainer",
  componentId: "sc-1xtzfs7-0"
})(["height:100vh;display:grid;@media ", "{width:80%;grid-template-rows:12% 1fr;}@media ", "{width:90%;grid-template-rows:15% 85%;}@media ", "{width:65%;grid-template-rows:12% 90%;}@media ", "{height:60vh;max-width:30%;grid-template-rows:12% 1fr;}"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["standard"].tabletP, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["standard"].tabletL, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["standard"].laptopS, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["standard"].desktop);
var CompanyContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__CompanyContainer",
  componentId: "sc-1xtzfs7-1"
})(["display:flex;flex-flow:column;justify-content:center;margin-left:1rem;"]);
var CompanyName = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "Layout__CompanyName",
  componentId: "sc-1xtzfs7-2"
})(["font-weight:600;color:#efefef;@media ", "{font-size:3rem;}@media ", "{font-size:5rem;}@media ", "{font-size:4rem;}"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["standard"].tablet, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["standard"].desktop, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["retina"].laptopM);
var SiteName = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "Layout__SiteName",
  componentId: "sc-1xtzfs7-3"
})(["font-weight:600;color:#FF7E26;margin-bottom:.5rem;@media ", "{font-size:2rem;}@media ", "{font-size:3rem;}@media ", "{font-size:2.75rem;}"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["standard"].tablet, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["standard"].desktop, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["retina"].laptopM);
var DateTime = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h3.withConfig({
  displayName: "Layout__DateTime",
  componentId: "sc-1xtzfs7-4"
})(["color:rgba(255,255,255,.5);font-size:1.75rem;font-weight:400;margin-left:.25rem;"]);
var SiteDetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__SiteDetailsContainer",
  componentId: "sc-1xtzfs7-5"
})(["background-color:", ";height:auto;padding:9rem 18rem 9rem 0;overflow:scroll;display:grid;@media ", "{padding:3rem 6rem 3rem 3rem;grid:auto-flow / repeat(2,50%);grid-gap:3rem 3rem;}@media ", "{padding:4rem 13rem 4rem 4rem;grid:auto-flow / repeat(3,33%);grid-gap:5rem 5rem;}@media ", "{padding:6rem 20rem 6rem 6rem;grid:auto-flow / repeat(3,33%);grid-gap:0rem 7rem;}@media ", "{padding:5rem 19rem 0 5rem;grid:auto-flow / repeat(3,33%);grid-gap:1rem 7rem;}"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["color"].jctWhite, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["standard"].tabletP, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["standard"].tabletL, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["standard"].desktop, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["retina"].laptopM);

var Layout = function Layout(props) {
  return __jsx(MainContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 3
    }
  }, __jsx(_Sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    companyName: "Mammoth",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 5
    }
  }), __jsx(CompanyContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 5
    }
  }, __jsx(CompanyName, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }, props.company_name), __jsx(SiteName, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, props.site_name), __jsx(DateTime, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, props.date, " - ", props.time)), __jsx(SiteDetailsContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 5
    }
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=ceh.js.180ed971d049b8be2aaf.hot-update.js.map