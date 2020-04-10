webpackHotUpdate("static/development/pages/[name]/[site].js",{

/***/ "./components/DoughnutChart.js":
/*!*************************************!*\
  !*** ./components/DoughnutChart.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _public_screensizes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/screensizes */ "./public/screensizes.js");
var _this = undefined,
    _jsxFileName = "/Users/cor-eee/Projects/jct-next/components/DoughnutChart.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var DoughnutChart = function DoughnutChart(props) {
  var data = {
    datasets: [{
      data: [props.currentValue, props.totalValue - props.currentValue],
      backgroundColor: [_public_screensizes__WEBPACK_IMPORTED_MODULE_3__["color"].jctOrange, 'rgba(0,0,0, .05)'],
      borderWidth: 0
    }]
  };
  return __jsx(GraphContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx(Graph, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Doughnut"], {
    data: data,
    width: 150,
    height: 150,
    options: {
      cutoutPercentage: 80,
      rotation: -1.25 * Math.PI,
      circumference: 1.5 * Math.PI,
      tooltips: false,
      hover: false
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  })), __jsx(Volume, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx(CurrentVolume, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, props.currentValue !== 0 ? props.currentValue.toFixed(2) : props.currentValue), __jsx(CurrentVolumeLabel, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, "Volume")));
};

/* harmony default export */ __webpack_exports__["default"] = (DoughnutChart);
var GraphContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "DoughnutChart__GraphContainer",
  componentId: "sc-557kc3-0"
})(["display:grid;grid:1fr / 1fr;place-items:center;"]);
var Graph = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "DoughnutChart__Graph",
  componentId: "sc-557kc3-1"
})(["grid-row:1;grid-column:1;"]);
var Volume = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "DoughnutChart__Volume",
  componentId: "sc-557kc3-2"
})(["grid-row:1;grid-column:1;display:flex;flex-flow:column;align-items:center;margin-top:1.5rem;"]);
var CurrentVolume = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "DoughnutChart__CurrentVolume",
  componentId: "sc-557kc3-3"
})(["font-size:2.5rem;color:", ";font-weight:bold;"], _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["color"].jctDarkGray);
var CurrentVolumeLabel = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "DoughnutChart__CurrentVolumeLabel",
  componentId: "sc-557kc3-4"
})(["font-size:1.5rem;color:", ";"], _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["color"].jctLightGray);

/***/ })

})
//# sourceMappingURL=[site].js.5b0ab6ee458df42d1ade.hot-update.js.map