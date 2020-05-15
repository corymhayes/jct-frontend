webpackHotUpdate("static/development/pages/jct/jctbty.js",{

/***/ "./pages/jct/jctbty/index.js":
/*!***********************************!*\
  !*** ./pages/jct/jctbty/index.js ***!
  \***********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_MobileLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/MobileLayout */ "./components/MobileLayout.js");
/* harmony import */ var _components_FullDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/FullDetails */ "./components/FullDetails.js");
/* harmony import */ var _components_Details__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Details */ "./components/Details.js");
var _this = undefined,
    _jsxFileName = "/Users/cor-eee/Projects/jct-next/pages/jct/jctbty/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var JCTBTY = function JCTBTY(_ref) {
  var data = _ref.data,
      isMobileView = _ref.isMobileView;
  return isMobileView ? // <MobileLayout company_name={"JCT"} site_name={"JCTBTY"} date={data[0].mDate} time={data[0].mTime}>
  __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_FullDetails__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: data[0].S1,
    unitOfMeasure: data[0].S2.toLowerCase(),
    currentValue: data[0].V1,
    totalValue: 16,
    tPumpOn: data[0].V3,
    tPumpOff: data[0].V4,
    alarmOn: data[0].V5,
    alarmOff: data[0].V6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: data[0].S5,
    unitOfMeasure: data[0].S6.toLowerCase(),
    currentValue: data[0].V1,
    totalValue: 16,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: data[0].S7,
    unitOfMeasure: data[0].S8.toLowerCase(),
    currentValue: data[0].V1,
    totalValue: 16,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), __jsx(_components_FullDetails__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: data[0].S3,
    unitOfMeasure: data[0].S4.toLowerCase(),
    currentValue: data[0].V1,
    totalValue: 16,
    alarmOn: data[0].V5,
    alarmOff: data[0].V6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }), __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: data[0].S9,
    unitOfMeasure: data[0].S10.toLowerCase(),
    currentValue: data[0].V1,
    totalValue: 16,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }), __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: data[0].S11,
    unitOfMeasure: data[0].S12.toLowerCase(),
    currentValue: data[0].V1,
    totalValue: 16,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }), __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: data[0].S13,
    unitOfMeasure: data[0].S14.toLowerCase(),
    currentValue: data[0].V1,
    totalValue: 16,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }), __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: data[0].S15,
    unitOfMeasure: data[0].S16.toLowerCase(),
    currentValue: data[0].V1,
    totalValue: 16,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  })) // </MobileLayout>
  : __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    company_name: "JCT",
    site_name: "JCTBTY",
    date: data[0].mDate,
    time: data[0].mTime,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }, __jsx(_components_FullDetails__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: data[0].S1,
    unitOfMeasure: data[0].S2.toLowerCase(),
    currentValue: data[0].V1,
    totalValue: 16,
    tPumpOn: data[0].V3,
    tPumpOff: data[0].V4,
    alarmOn: data[0].V5,
    alarmOff: data[0].V6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }), __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: data[0].S5,
    unitOfMeasure: data[0].S6.toLowerCase(),
    currentValue: data[0].V1,
    totalValue: 16,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }), __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: data[0].S7,
    unitOfMeasure: data[0].S8.toLowerCase(),
    currentValue: data[0].V1,
    totalValue: 16,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }), __jsx(_components_FullDetails__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: data[0].S3,
    unitOfMeasure: data[0].S4.toLowerCase(),
    currentValue: data[0].V6,
    totalValue: 16,
    tPumpOn: data[0].V6,
    tPumpOff: data[0].V7,
    alarmOn: data[0].V8,
    alarmOff: data[0].V8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  }), __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: data[0].S9,
    unitOfMeasure: data[0].S10.toLowerCase(),
    currentValue: data[0].V1,
    totalValue: 16,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }), __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: data[0].S11,
    unitOfMeasure: data[0].S12.toLowerCase(),
    currentValue: data[0].V1,
    totalValue: 16,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }), __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: data[0].S13,
    unitOfMeasure: data[0].S14.toLowerCase(),
    currentValue: data[0].V1,
    totalValue: 16,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }), __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: data[0].S15,
    unitOfMeasure: data[0].S16.toLowerCase(),
    currentValue: data[0].V1,
    totalValue: 16,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }
  }));
};

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (JCTBTY);

/***/ })

})
//# sourceMappingURL=jctbty.js.f5dd1bb12575f7b876e7.hot-update.js.map