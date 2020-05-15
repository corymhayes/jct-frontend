webpackHotUpdate("static/development/pages/jct/jctbty.js",{

/***/ "./components/MobileLayout.js":
/*!************************************!*\
  !*** ./components/MobileLayout.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _public_screensizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/screensizes */ "./public/screensizes.js");
/* harmony import */ var _components_MobileCarousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MobileCarousel */ "./components/MobileCarousel.js");
var _this = undefined,
    _jsxFileName = "/Users/cor-eee/Projects/jct-next/components/MobileLayout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var MobileMainContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].main.withConfig({
  displayName: "MobileLayout__MobileMainContainer",
  componentId: "sc-1sasdph-0"
})(["width:100%;height:100vh;display:grid;grid-template-rows:15% 85%;"]);
var MobileCompanyContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "MobileLayout__MobileCompanyContainer",
  componentId: "sc-1sasdph-1"
})(["display:flex;flex-flow:column;justify-content:center;padding-left:4rem;"]);
var MobileCompanyName = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "MobileLayout__MobileCompanyName",
  componentId: "sc-1sasdph-2"
})(["font-size:3rem;font-weight:600;color:", ";"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["color"].jctWhite);
var MobileSiteName = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "MobileLayout__MobileSiteName",
  componentId: "sc-1sasdph-3"
})(["font-size:2rem;font-weight:600;color:", ";"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["color"].jctOrange);
var DateTime = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h3.withConfig({
  displayName: "MobileLayout__DateTime",
  componentId: "sc-1sasdph-4"
})(["color:rgba(255,255,255,.5);font-size:1.75rem;font-weight:400;"]);
var MobileCarouselContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "MobileLayout__MobileCarouselContainer",
  componentId: "sc-1sasdph-5"
})(["display:grid;grid-row-gap:1rem;"]);

var MobileLayout = function MobileLayout(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(MobileMainContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx(MobileCompanyContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx(MobileCompanyName, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, props.company_name), __jsx(MobileSiteName, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, props.site_name), __jsx(DateTime, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, props.date, " - ", props.time)), __jsx(MobileCarouselContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, props.children)));
};

/* harmony default export */ __webpack_exports__["default"] = (MobileLayout);

/***/ })

})
//# sourceMappingURL=jctbty.js.180c1119f82191e83585.hot-update.js.map