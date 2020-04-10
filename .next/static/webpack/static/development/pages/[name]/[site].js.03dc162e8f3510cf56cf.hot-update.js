webpackHotUpdate("static/development/pages/[name]/[site].js",{

/***/ "./components/Trend.js":
/*!*****************************!*\
  !*** ./components/Trend.js ***!
  \*****************************/
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
    _jsxFileName = "/Users/cor-eee/Projects/jct-next/components/Trend.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Trend = function Trend(props) {
  react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["defaults"].global.defaultFontFamily = 'Industry';
  react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["defaults"].global.defaultFontColor = _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["color"].jctLightGray;

  var data = function data(canvas) {
    var ctx = canvas.getContext("2d");
    var gradient = ctx.createLinearGradient(0, 0, 0, 165);
    gradient.addColorStop(1, 'rgba(255,255,255,.01)');
    gradient.addColorStop(0, _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["color"].jctLightGray);
    return {
      labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
      datasets: [{
        data: [props.mon, props.tue, props.wed, props.thu, props.fri, props.sat, props.sun],
        borderWidth: 2,
        borderColor: _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["color"].jctOrange,
        pointBackgroundColor: _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["color"].jctOrange,
        backgroundColor: gradient,
        cubicInterpolationMode: 'monotone',
        lineTension: 0
      }]
    };
  };

  return __jsx(Graph, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
    data: data,
    options: {
      legend: false,
      // tooltips: false,
      scales: {
        // Left side of graph
        yAxes: [{
          ticks: {
            min: 0,
            max: 16,
            stepSize: 4,
            display: false
          },
          gridLines: {
            display: false
          }
        }],
        // Bottom of graph
        xAxes: [{
          gridLines: {
            display: false
          }
        }]
      }
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Trend);
var Graph = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Trend__Graph",
  componentId: "pyu4pm-0"
})(["width:100%;"]);

/***/ })

})
//# sourceMappingURL=[site].js.03dc162e8f3510cf56cf.hot-update.js.map