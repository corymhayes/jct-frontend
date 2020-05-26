module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/Alarms.js":
/*!******************************!*\
  !*** ./components/Alarms.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_screensizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/screensizes */ "./public/screensizes.js");
var _jsxFileName = "/Users/cor-eee/Projects/jct-next/components/Alarms.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Alarms__Container",
  componentId: "sc-17pmkb0-0"
})(["display:flex;flex-flow:column;@media ", "{margin-left:1rem;}@media ", "{margin-left:1rem;}"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["standard"].tabletP, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["standard"].tabletL);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3.withConfig({
  displayName: "Alarms__Title",
  componentId: "sc-17pmkb0-1"
})(["font-weight:bold;color:", ";font-size:1.8rem;margin-bottom:.25rem;@media ", "{font-size:1.5rem;}@media ", "{font-size:1.5rem;}@media ", "{font-size:1.8rem;}"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["color"].jctOrange, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["standard"].tabletP, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["standard"].tabletL, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["retina"].laptopM);
const AlarmList = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({
  displayName: "Alarms__AlarmList",
  componentId: "sc-17pmkb0-2"
})(["list-style:none;margin-bottom:1rem;"]);
const AlarmListItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li.withConfig({
  displayName: "Alarms__AlarmListItem",
  componentId: "sc-17pmkb0-3"
})(["color:", ";font-size:1.8rem;margin-bottom:.25rem;@media ", "{font-size:1.5rem;}@media ", "{font-size:1.5rem;}@media ", "{font-size:1.8rem;}"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["color"].jctLightGray, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["standard"].tabletP, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["standard"].tabletL, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["retina"].laptopM);

const Alarms = props => __jsx(Container, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 3
  }
}, __jsx(Title, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }
}, props.title), __jsx(AlarmList, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
  }
}, __jsx(AlarmListItem, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 7
  }
}, "On: ", props.on !== undefined ? props.on.toFixed(2) : props.on), __jsx(AlarmListItem, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 7
  }
}, "Off: ", props.off !== undefined ? props.off.toFixed(2) : props.off)));

/* harmony default export */ __webpack_exports__["default"] = (Alarms);

/***/ }),

/***/ "./components/Details.js":
/*!*******************************!*\
  !*** ./components/Details.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_screensizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/screensizes */ "./public/screensizes.js");
/* harmony import */ var _components_Trend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Trend */ "./components/Trend.js");
/* harmony import */ var _DoughnutChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DoughnutChart */ "./components/DoughnutChart.js");
var _jsxFileName = "/Users/cor-eee/Projects/jct-next/components/Details.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const DetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Details__DetailsContainer",
  componentId: "sc-1ln1fjq-0"
})(["display:flex;flex-flow:column;background-color:", ";@media ", "{max-width:35rem;max-height:35rem;}@media ", "{padding:2rem 2rem 4rem 2rem;}"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["color"].jctWhite, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["standard"].desktop, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["retina"].mobile);
const DetailsName = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "Details__DetailsName",
  componentId: "sc-1ln1fjq-1"
})(["color:#FF7E26;font-size:3rem;font-weight:bold;margin-bottom:1rem;@media ", "{font-size:2rem;}@media ", "{font-size:2rem;}@media ", "{font-size:3rem;}"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["standard"].tabletP, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["standard"].tabletL, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["retina"].laptopM);
const Underline = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Details__Underline",
  componentId: "sc-1ln1fjq-2"
})(["height:2px;margin-bottom:2rem;background-color:rgba(41,41,41,.15);"]);

const Details = props => __jsx(DetailsContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 3
  }
}, __jsx(DetailsName, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }
}, props.name), __jsx(Underline, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }
}), __jsx(_DoughnutChart__WEBPACK_IMPORTED_MODULE_4__["default"], {
  currentValue: props.currentValue,
  totalValue: props.totalValue,
  unitOfMeasure: props.unitOfMeasure,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (Details);

/***/ }),

/***/ "./components/DoughnutAlarms.js":
/*!**************************************!*\
  !*** ./components/DoughnutAlarms.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DoughnutChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DoughnutChart */ "./components/DoughnutChart.js");
/* harmony import */ var _Alarms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Alarms */ "./components/Alarms.js");
var _jsxFileName = "/Users/cor-eee/Projects/jct-next/components/DoughnutAlarms.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const DoughnutAlarms = props => __jsx(Container, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}, __jsx(_DoughnutChart__WEBPACK_IMPORTED_MODULE_2__["default"], {
  currentValue: props.currentValue,
  totalValue: props.totalValue,
  unitOfMeasure: props.unitOfMeasure,
  alarmOn: props.alarmOn,
  alarmOff: props.alarmOff,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
}), __jsx(AlarmsContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
}, __jsx(_Alarms__WEBPACK_IMPORTED_MODULE_3__["default"], {
  title: "Transfer Pump",
  on: props.tPumpOn,
  off: props.tPumpOff,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 7
  }
}), __jsx(_Alarms__WEBPACK_IMPORTED_MODULE_3__["default"], {
  title: "Alarm",
  on: props.alarmOn,
  off: props.alarmOff,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (DoughnutAlarms);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "DoughnutAlarms__Container",
  componentId: "sc-9gubyt-0"
})(["display:flex;margin-top:2rem;margin-bottom:2rem;justify-content:space-around;align-items:center;"]);
const AlarmsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "DoughnutAlarms__AlarmsContainer",
  componentId: "sc-9gubyt-1"
})(["display:flex;flex-flow:column;&:first-child{margin-bottom:1rem;}"]);

/***/ }),

/***/ "./components/DoughnutChart.js":
/*!*************************************!*\
  !*** ./components/DoughnutChart.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_screensizes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/screensizes */ "./public/screensizes.js");
var _jsxFileName = "/Users/cor-eee/Projects/jct-next/components/DoughnutChart.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const DoughnutChart = props => {
  const data = {
    datasets: [{
      data: [props.currentValue, props.totalValue - props.currentValue],
      // backgroundColor: [ color.jctOrange, 'rgba(0,0,0, .05)' ],
      backgroundColor: ctx => {
        // const i = ctx.dataIndex
        if (ctx.dataset.data[0] < props.alarmOff) {
          return ['lightgreen', 'rgba(0,0,0,.05)'];
        } else if (ctx.dataset.data[0] > props.alarmOn) {
          return ['red', 'rgba(0,0,0,.05)'];
        } else {
          return ['#ffcc00', 'rgba(0,0,0,.05)'];
        }
      },
      borderWidth: 0
    }]
  };
  return __jsx(GraphContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(GraphTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, props.name), __jsx(Graph, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  })), __jsx(Volume, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx(CurrentVolume, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, props.currentValue !== null ? props.currentValue.toFixed(2) : props.currentValue), __jsx(CurrentVolumeLabel, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, props.unitOfMeasure)));
};

/* harmony default export */ __webpack_exports__["default"] = (DoughnutChart);
const GraphContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "DoughnutChart__GraphContainer",
  componentId: "sc-557kc3-0"
})(["display:grid;grid:25% 1fr / 1fr;place-items:center center;width:20rem;height:15rem;"]);
const GraphTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h1.withConfig({
  displayName: "DoughnutChart__GraphTitle",
  componentId: "sc-557kc3-1"
})(["grid-column:1;grid-row:1;font-size:2.4rem;"]);
const Graph = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "DoughnutChart__Graph",
  componentId: "sc-557kc3-2"
})(["grid-column:1;grid-row:2;"]);
const Volume = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "DoughnutChart__Volume",
  componentId: "sc-557kc3-3"
})(["grid-column:1;grid-row:2;display:flex;align-items:center;justify-content:center;margin-top:1.5rem;"]);
const CurrentVolume = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "DoughnutChart__CurrentVolume",
  componentId: "sc-557kc3-4"
})(["font-size:2.4rem;color:", ";font-weight:bold;"], _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["color"].jctDarkGray);
const CurrentVolumeLabel = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "DoughnutChart__CurrentVolumeLabel",
  componentId: "sc-557kc3-5"
})(["font-size:1.8rem;color:", ";align-self:flex-end;margin-bottom:.1rem;margin-left:.2rem;"], _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["color"].jctDarkGray);

/***/ }),

/***/ "./components/FullDetails.js":
/*!***********************************!*\
  !*** ./components/FullDetails.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_screensizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/screensizes */ "./public/screensizes.js");
/* harmony import */ var _components_DoughnutAlarms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/DoughnutAlarms */ "./components/DoughnutAlarms.js");
/* harmony import */ var _components_Trend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Trend */ "./components/Trend.js");
var _jsxFileName = "/Users/cor-eee/Projects/jct-next/components/FullDetails.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const DetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "FullDetails__DetailsContainer",
  componentId: "sc-1tojwhx-0"
})(["display:flex;flex-flow:column;background-color:", ";@media ", "{max-width:35rem;}@media ", "{padding:2rem;}"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["color"].jctWhite, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["standard"].desktop, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["retina"].mobile);
const DetailsName = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "FullDetails__DetailsName",
  componentId: "sc-1tojwhx-1"
})(["color:#FF7E26;font-size:3rem;font-weight:bold;margin-bottom:1rem;@media ", "{font-size:2rem;}@media ", "{font-size:2rem;}@media ", "{font-size:3rem;}"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["standard"].tabletP, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["standard"].tabletL, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["retina"].laptopM);
const Underline = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "FullDetails__Underline",
  componentId: "sc-1tojwhx-2"
})(["height:2px;background-color:rgba(41,41,41,.15);"]);

const FullDetails = props => __jsx(DetailsContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 3
  }
}, __jsx(DetailsName, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }
}, props.name), __jsx(Underline, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }
}), __jsx(_components_DoughnutAlarms__WEBPACK_IMPORTED_MODULE_3__["default"], {
  currentValue: props.currentValue,
  totalValue: props.totalValue,
  unitOfMeasure: props.unitOfMeasure,
  tPumpOn: props.tPumpOn,
  tPumpOff: props.tPumpOff,
  alarmOn: props.alarmOn,
  alarmOff: props.alarmOff,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (FullDetails);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_screensizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/screensizes */ "./public/screensizes.js");
var _jsxFileName = "/Users/cor-eee/Projects/jct-next/components/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.main.withConfig({
  displayName: "Layout__MainContainer",
  componentId: "sc-1xtzfs7-0"
})(["height:100vh;display:grid;@media ", "{width:80%;grid-template-rows:12% 1fr;}@media ", "{width:90%;grid-template-rows:15% 85%;}@media ", "{width:65%;grid-template-rows:12% 90%;}@media ", "{height:60vh;max-width:30%;grid-template-rows:12% 1fr;}"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["standard"].tabletP, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["standard"].tabletL, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["standard"].laptopS, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["standard"].desktop);
const CompanyContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Layout__CompanyContainer",
  componentId: "sc-1xtzfs7-1"
})(["display:flex;flex-flow:column;justify-content:center;margin-left:1rem;"]);
const CompanyName = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "Layout__CompanyName",
  componentId: "sc-1xtzfs7-2"
})(["font-weight:600;color:#efefef;@media ", "{font-size:3rem;}@media ", "{font-size:5rem;}@media ", "{font-size:4rem;}"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["standard"].tablet, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["standard"].desktop, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["retina"].laptopM);
const SiteName = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2.withConfig({
  displayName: "Layout__SiteName",
  componentId: "sc-1xtzfs7-3"
})(["font-weight:600;color:#FF7E26;margin-bottom:.5rem;@media ", "{font-size:2rem;}@media ", "{font-size:3rem;}@media ", "{font-size:2.75rem;}"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["standard"].tablet, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["standard"].desktop, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["retina"].laptopM);
const DateTime = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3.withConfig({
  displayName: "Layout__DateTime",
  componentId: "sc-1xtzfs7-4"
})(["color:rgba(255,255,255,.5);font-size:1.75rem;font-weight:400;margin-left:.25rem;"]);
const SiteDetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Layout__SiteDetailsContainer",
  componentId: "sc-1xtzfs7-5"
})(["background-color:", ";height:auto;padding:9rem 18rem 9rem 0;overflow:scroll;display:grid;@media ", "{padding:3rem 6rem 3rem 3rem;grid:auto-flow / repeat(2,50%);grid-gap:3rem 3rem;}@media ", "{padding:4rem 13rem 4rem 4rem;grid:auto-flow / repeat(3,33%);grid-gap:5rem 5rem;}@media ", "{padding:6rem 20rem 6rem 6rem;grid:auto-flow / repeat(3,33%);grid-gap:0rem 7rem;}@media ", "{padding:5rem 19rem 0 5rem;grid:auto-flow / repeat(3,33%);grid-gap:1rem 7rem;}"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["color"].jctWhite, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["standard"].tabletP, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["standard"].tabletL, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["standard"].desktop, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["retina"].laptopM);

const Layout = props => __jsx(MainContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 3
  }
}, __jsx(CompanyContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 114,
    columnNumber: 5
  }
}, __jsx(CompanyName, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 115,
    columnNumber: 7
  }
}, props.company_name), __jsx(SiteName, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 116,
    columnNumber: 7
  }
}, props.site_name), __jsx(DateTime, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 117,
    columnNumber: 7
  }
}, props.date, " - ", props.time)), __jsx(SiteDetailsContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 119,
    columnNumber: 5
  }
}, props.children));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/MobileCarousel.js":
/*!**************************************!*\
  !*** ./components/MobileCarousel.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nuka_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nuka-carousel */ "nuka-carousel");
/* harmony import */ var nuka_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nuka_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_screensizes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/screensizes */ "./public/screensizes.js");
var _jsxFileName = "/Users/cor-eee/Projects/jct-next/components/MobileCarousel.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const MobileCarousel = props => __jsx(nuka_carousel__WEBPACK_IMPORTED_MODULE_2___default.a, {
  cellAlign: 'center',
  cellSpacing: 15,
  slideWidth: '325px',
  withoutControls: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }
}, props.children);

/* harmony default export */ __webpack_exports__["default"] = (MobileCarousel);
const StyledCarousel = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(nuka_carousel__WEBPACK_IMPORTED_MODULE_2___default.a).withConfig({
  displayName: "MobileCarousel__StyledCarousel",
  componentId: "i2g75e-0"
})(["background-color:blue;"]);

/***/ }),

/***/ "./components/MobileLayout.js":
/*!************************************!*\
  !*** ./components/MobileLayout.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_screensizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/screensizes */ "./public/screensizes.js");
/* harmony import */ var _components_MobileCarousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MobileCarousel */ "./components/MobileCarousel.js");
var _jsxFileName = "/Users/cor-eee/Projects/jct-next/components/MobileLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const MobileMainContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.main.withConfig({
  displayName: "MobileLayout__MobileMainContainer",
  componentId: "sc-1sasdph-0"
})(["width:100%;height:100vh;display:grid;grid-template-rows:15% 85%;"]);
const MobileCompanyContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "MobileLayout__MobileCompanyContainer",
  componentId: "sc-1sasdph-1"
})(["display:flex;flex-flow:column;justify-content:center;padding:0 4rem;"]);
const MobileCompanyName = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "MobileLayout__MobileCompanyName",
  componentId: "sc-1sasdph-2"
})(["font-size:3rem;font-weight:600;color:", ";"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["color"].jctWhite);
const MobileSiteName = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2.withConfig({
  displayName: "MobileLayout__MobileSiteName",
  componentId: "sc-1sasdph-3"
})(["font-size:2rem;font-weight:600;color:", ";"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["color"].jctOrange);
const DateTime = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3.withConfig({
  displayName: "MobileLayout__DateTime",
  componentId: "sc-1sasdph-4"
})(["color:rgba(255,255,255,.5);font-size:1.75rem;font-weight:400;"]);
const MobileCarouselContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "MobileLayout__MobileCarouselContainer",
  componentId: "sc-1sasdph-5"
})(["display:grid;grid-row-gap:1rem;"]);

const MobileLayout = props => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(MobileMainContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }
}, __jsx(MobileCompanyContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 7
  }
}, __jsx(MobileCompanyName, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 9
  }
}, props.company_name), __jsx(MobileSiteName, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 9
  }
}, props.site_name), __jsx(DateTime, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 9
  }
}, props.date, " - ", props.time)), __jsx(MobileCarouselContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 7
  }
}, props.children)));

/* harmony default export */ __webpack_exports__["default"] = (MobileLayout);

/***/ }),

/***/ "./components/NewAlarms.js":
/*!*********************************!*\
  !*** ./components/NewAlarms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_screensizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/screensizes */ "./public/screensizes.js");
var _jsxFileName = "/Users/cor-eee/Projects/jct-next/components/NewAlarms.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const DetailsAlarmContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "NewAlarms__DetailsAlarmContainer",
  componentId: "sc-1b4bg86-0"
})(["display:flex;flex-flow:column;border-bottom:1px solid ", ";margin-left:2rem;"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["color"].jctDarkGray);
const AlarmTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2.withConfig({
  displayName: "NewAlarms__AlarmTitle",
  componentId: "sc-1b4bg86-1"
})(["font-size:1.8rem;font-weight:500;"]);
const AlarmOnOff = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "NewAlarms__AlarmOnOff",
  componentId: "sc-1b4bg86-2"
})(["font-size:1.8rem;"]);
const AlarmOnOffNum = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "NewAlarms__AlarmOnOffNum",
  componentId: "sc-1b4bg86-3"
})(["font-weight:bold;font-size:1.8rem;"]);

const Alarms = props => __jsx(DetailsAlarmContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 3
  }
}, __jsx(AlarmTitle, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }
}, props.alarmType), __jsx(AlarmOnOff, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }
}, "On: ", __jsx(AlarmOnOffNum, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 21
  }
}, props.on !== undefined ? props.on.toFixed(2) : props.on), " Off: ", __jsx(AlarmOnOffNum, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 117
  }
}, props.off !== undefined ? props.off.toFixed(2) : props.off)));

/* harmony default export */ __webpack_exports__["default"] = (Alarms);

/***/ }),

/***/ "./components/NewDetails.js":
/*!**********************************!*\
  !*** ./components/NewDetails.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_screensizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/screensizes */ "./public/screensizes.js");
/* harmony import */ var _Trend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Trend */ "./components/Trend.js");
/* harmony import */ var _DoughnutChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DoughnutChart */ "./components/DoughnutChart.js");
/* harmony import */ var _NewAlarms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NewAlarms */ "./components/NewAlarms.js");
var _jsxFileName = "/Users/cor-eee/Projects/jct-next/components/NewDetails.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const DetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "NewDetails__DetailsContainer",
  componentId: "vw8q5g-0"
})(["display:flex;flex-flow:column;margin-bottom:15rem;"]);
const NameAlarmsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "NewDetails__NameAlarmsContainer",
  componentId: "vw8q5g-1"
})(["display:flex;margin-bottom:4rem;"]);
const DetailsName = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "NewDetails__DetailsName",
  componentId: "vw8q5g-2"
})(["color:#fff;font-size:2.4rem;font-weight:bold;background-color:", ";padding:1rem 2rem;max-width:auto;"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["color"].jctDarkGray);
const DoughnutChartContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "NewDetails__DoughnutChartContainer",
  componentId: "vw8q5g-3"
})(["display:flex;"]);

const Details = props => __jsx(DetailsContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 3
  }
}, __jsx(NameAlarmsContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }
}, __jsx(DetailsName, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 7
  }
}, props.resourceType), __jsx(_NewAlarms__WEBPACK_IMPORTED_MODULE_5__["default"], {
  alarmType: 'Alarm',
  on: props.alarmOn,
  off: props.alarmOff,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 7
  }
}), __jsx(_NewAlarms__WEBPACK_IMPORTED_MODULE_5__["default"], {
  alarmType: 'T-Pump',
  on: props.tpumpOn,
  off: props.tpumpOff,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 7
  }
})), __jsx(DoughnutChartContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }
}, props.children));

/* harmony default export */ __webpack_exports__["default"] = (Details);

/***/ }),

/***/ "./components/NewLayout.js":
/*!*********************************!*\
  !*** ./components/NewLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_screensizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/screensizes */ "./public/screensizes.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sidebar */ "./components/Sidebar.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/cor-eee/Projects/jct-next/components/NewLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.main.withConfig({
  displayName: "NewLayout__MainContainer",
  componentId: "sc-1ycplq9-0"
})(["height:100vh;width:100vw;display:flex;flex-flow:row;"]);
const SiteDetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "NewLayout__SiteDetailsContainer",
  componentId: "sc-1ycplq9-1"
})(["padding-left:7rem;overflow:scroll;display:grid;grid-template-rows:20rem 1fr;"]);
const SiteNameTime = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "NewLayout__SiteNameTime",
  componentId: "sc-1ycplq9-2"
})(["height:15rem;display:flex;flex-flow:column;justify-content:center;"]);
const SiteName = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2.withConfig({
  displayName: "NewLayout__SiteName",
  componentId: "sc-1ycplq9-3"
})(["font-weight:600;color:", ";margin-bottom:.5rem;font-size:36px;text-transform:uppercase;"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["color"].jctDarkGray);
const DateTime = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3.withConfig({
  displayName: "NewLayout__DateTime",
  componentId: "sc-1ycplq9-4"
})(["color:", ";font-size:1.75rem;font-weight:400;margin-left:.25rem;"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["color"].jctDarkGray);
const SiteDetails = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "NewLayout__SiteDetails",
  componentId: "sc-1ycplq9-5"
})([""]);

const Layout = props => {
  return __jsx(MainContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 3
    }
  }, __jsx(_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    company: props.company,
    sites: props.sites,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }), __jsx(SiteDetailsContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx(SiteNameTime, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx(SiteName, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, props.sitename), __jsx(DateTime, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, props.date, " - ", props.time)), __jsx(SiteDetails, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, props.children)));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_screensizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/screensizes */ "./public/screensizes.js");
var _jsxFileName = "/Users/cor-eee/Projects/jct-next/components/Sidebar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SidebarContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Sidebar__SidebarContainer",
  componentId: "sc-8j0zu2-0"
})(["width:30rem;background-color:", ";display:grid;grid-template-rows:12.5rem 1fr;position:sticky;"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["color"].jctDarkGray);
const CompanyContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Sidebar__CompanyContainer",
  componentId: "sc-8j0zu2-1"
})(["display:flex;align-items:center;justify-content:center;height:12.5rem;img{height:75%;}"]);
const SiteNavContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Sidebar__SiteNavContainer",
  componentId: "sc-8j0zu2-2"
})(["width:100%;height:100%;padding-left:3rem;padding-top:1rem;h1{color:#fff;font-size:18px;font-weight:500;}"]);
const SiteLinks = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.nav.withConfig({
  displayName: "Sidebar__SiteLinks",
  componentId: "sc-8j0zu2-3"
})(["ul{list-style:none;margin-top:1.5rem;}li{height:5rem;display:flex;align-items:center;padding-left:2rem;margin-bottom:1rem;}li:hover{background-color:", ";}a{color:#fff;text-decoration:none;font-size:16px;}"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["color"].jctOrange);

const Sidebar = props => {
  return __jsx(SidebarContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, __jsx(CompanyContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: `/static/${props.company}-logo.png`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  })), __jsx(SiteNavContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, "Sites"), __jsx(SiteLinks, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, props.sites))));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./components/Trend.js":
/*!*****************************!*\
  !*** ./components/Trend.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_screensizes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/screensizes */ "./public/screensizes.js");
var _jsxFileName = "/Users/cor-eee/Projects/jct-next/components/Trend.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Trend = props => {
  react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["defaults"].global.defaultFontFamily = 'Industry';
  react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["defaults"].global.defaultFontColor = _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["color"].jctLightGray;

  const data = canvas => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 165);
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
        cubicInterpolationMode: 'monotone'
      }]
    };
  };

  return __jsx(Graph, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
    data: data,
    options: {
      legend: false,
      tooltips: false,
      hover: false,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Trend);
const Graph = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Trend__Graph",
  componentId: "pyu4pm-0"
})(["width:100%;"]);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/jct/bty/index.js":
/*!********************************!*\
  !*** ./pages/jct/bty/index.js ***!
  \********************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_NewLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/NewLayout */ "./components/NewLayout.js");
/* harmony import */ var _components_MobileLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/MobileLayout */ "./components/MobileLayout.js");
/* harmony import */ var _components_MobileCarousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/MobileCarousel */ "./components/MobileCarousel.js");
/* harmony import */ var _components_FullDetails__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/FullDetails */ "./components/FullDetails.js");
/* harmony import */ var _components_Details__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/Details */ "./components/Details.js");
/* harmony import */ var _components_NewDetails__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/NewDetails */ "./components/NewDetails.js");
/* harmony import */ var _components_DoughnutChart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/DoughnutChart */ "./components/DoughnutChart.js");
var _jsxFileName = "/Users/cor-eee/Projects/jct-next/pages/jct/bty/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const JCTBTY = ({
  data,
  sites
}) => __jsx(_components_NewLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
  sites: sites.map((site, i) => __jsx("li", {
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 38
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: `/jct/${site.BATTERY.toLowerCase()}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 50
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 100
    }
  }, site.BATTERY)))),
  company: "jct",
  sitename: "BTY",
  date: data[0].mDate,
  time: data[0].mTime,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }
}, __jsx(_components_NewDetails__WEBPACK_IMPORTED_MODULE_10__["default"], {
  resourceType: "Water",
  tPumpOn: data[0].V3,
  tPumpOff: data[0].V4,
  alarmOn: data[0].V5,
  alarmOff: data[0].V6,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 7
  }
}, __jsx(_components_DoughnutChart__WEBPACK_IMPORTED_MODULE_11__["default"], {
  name: data[0].S1,
  currentValue: data[0].V1,
  totalValue: 16,
  unitOfMeasure: data[0].S2.toLowerCase(),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }
}), __jsx(_components_DoughnutChart__WEBPACK_IMPORTED_MODULE_11__["default"], {
  name: data[0].S5,
  currentValue: data[0].V9,
  totalValue: 16,
  unitOfMeasure: data[0].S6.toLowerCase(),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }
}), __jsx(_components_DoughnutChart__WEBPACK_IMPORTED_MODULE_11__["default"], {
  name: data[0].S7,
  currentValue: data[0].V10,
  totalValue: 16,
  unitOfMeasure: data[0].S8.toLowerCase(),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }
})), __jsx(_components_NewDetails__WEBPACK_IMPORTED_MODULE_10__["default"], {
  resourceType: "Oil",
  tPumpOn: data[0].V3,
  tPumpOff: data[0].V4,
  alarmOn: data[0].V5,
  alarmOff: data[0].V6,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 7
  }
}, __jsx(_components_DoughnutChart__WEBPACK_IMPORTED_MODULE_11__["default"], {
  name: data[0].S3,
  currentValue: data[0].V6,
  totalValue: 16,
  unitOfMeasure: data[0].S4.toLowerCase(),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }
}), __jsx(_components_DoughnutChart__WEBPACK_IMPORTED_MODULE_11__["default"], {
  name: data[0].S9,
  currentValue: data[0].V11,
  totalValue: 16,
  unitOfMeasure: data[0].S10.toLowerCase(),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }
}), __jsx(_components_DoughnutChart__WEBPACK_IMPORTED_MODULE_11__["default"], {
  name: data[0].S11,
  currentValue: data[0].V12,
  totalValue: 16,
  unitOfMeasure: data[0].S12.toLowerCase(),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 9
  }
})), __jsx(_components_NewDetails__WEBPACK_IMPORTED_MODULE_10__["default"], {
  resourceType: "Aux" // tPumpOn={data[0].V3}
  // tPumpOff={data[0].V4}
  // alarmOn={data[0].V5}
  // alarmOff={data[0].V6}
  ,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 7
  }
}, __jsx(_components_DoughnutChart__WEBPACK_IMPORTED_MODULE_11__["default"], {
  name: data[0].S13,
  currentValue: data[0].V13,
  totalValue: 16,
  unitOfMeasure: data[0].S14.toLowerCase(),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 9
  }
}), __jsx(_components_DoughnutChart__WEBPACK_IMPORTED_MODULE_11__["default"], {
  name: data[0].S15,
  currentValue: data[0].V14,
  totalValue: 16,
  unitOfMeasure: data[0].S16.toLowerCase(),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 9
  }
})));

async function getServerSideProps(ctx) {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(`http://jct-systems.com/api/jctbty`);
  const res1 = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(`http://localhost:3001/api/jct`);
  const data = await res.json();
  const sites = await res1.json();
  return {
    props: {
      data,
      sites,
      isMobileView: false
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (JCTBTY);

/***/ }),

/***/ "./public/screensizes.js":
/*!*******************************!*\
  !*** ./public/screensizes.js ***!
  \*******************************/
/*! exports provided: standard, retina, color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "standard", function() { return standard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retina", function() { return retina; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
const color = {
  jctOrange: '#ff7e26',
  jctWhite: '#fcfcfc',
  jctDarkGray: '#292929',
  jctLightGray: '#a2a2a2'
};
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tabletP: '600px',
  tabletL: '900px',
  laptop: '1024px',
  laptopM: '1200px',
  laptopL: '1440px',
  desktop: '2560px'
};
const standard = {
  mobileS: `only screen and (min-width: ${size.mobileS}) and (-webkit-min-device-pixel-ratio: 1)`,
  mobileM: `only screen and (min-width: ${size.mobileM}) and (-webkit-min-device-pixel-ratio: 1)`,
  mobileL: `only screen and (min-width: ${size.mobileL}) and (-webkit-min-device-pixel-ratio: 1)`,
  tabletP: `only screen and (min-width: ${size.tabletP}) and (-webkit-min-device-pixel-ratio: 1)`,
  tabletL: `only screen and (min-width: ${size.tabletL}) and (-webkit-min-device-pixel-ratio: 1)`,
  laptop: `only screen and (min-width: ${size.laptop}) and (-webkit-min-device-pixel-ratio: 1)`,
  laptopM: `only screen and (min-width: ${size.laptopM}) and (-webkit-min-device-pixel-ratio: 1)`,
  laptopL: `only screen and (min-width: ${size.laptopL}) and (-webkit-min-device-pixel-ratio: 1)`,
  desktop: `only screen and (min-width: ${size.desktop}) and (-webkit-min-device-pixel-ratio: 1)`
};
const retina = {
  mobile: `only screen and (max-width: ${size.mobileL}) and (-webkit-min-device-pixel-ratio: 2)`,
  mobileS: `only screen and (min-width: ${size.mobileS}) and (-webkit-min-device-pixel-ratio: 2)`,
  mobileM: `only screen and (min-width: ${size.mobileM}) and (-webkit-min-device-pixel-ratio: 2)`,
  mobileL: `only screen and (min-width: ${size.mobileL}) and (-webkit-min-device-pixel-ratio: 2)`,
  tablet: `only screen and (min-width: ${size.tablet}) and (max-width: ${size.laptop}) and (-webkit-min-device-pixel-ratio: 2)`,
  laptop: `only screen and (min-width: ${size.laptop}) and (-webkit-min-device-pixel-ratio: 2)`,
  laptopM: `only screen and (min-width: ${size.laptopM}) and (-webkit-min-device-pixel-ratio: 2)`,
  laptopL: `only screen and (min-width: ${size.laptopL}) and (-webkit-min-device-pixel-ratio: 2)`,
  desktop: `only screen and (min-width: ${size.desktop}) and (-webkit-min-device-pixel-ratio: 2)`
};


/***/ }),

/***/ 5:
/*!**************************************!*\
  !*** multi ./pages/jct/bty/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/cor-eee/Projects/jct-next/pages/jct/bty/index.js */"./pages/jct/bty/index.js");


/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nuka-carousel":
/*!********************************!*\
  !*** external "nuka-carousel" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nuka-carousel");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FsYXJtcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Eb3VnaG51dEFsYXJtcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RvdWdobnV0Q2hhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GdWxsRGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01vYmlsZUNhcm91c2VsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTW9iaWxlTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmV3QWxhcm1zLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmV3RGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05ld0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UcmVuZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbWl0dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2pjdC9idHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NjcmVlbnNpemVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtdW5mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibnVrYS1jYXJvdXNlbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jaGFydGpzLTJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2Iiwic3RhbmRhcmQiLCJ0YWJsZXRQIiwidGFibGV0TCIsIlRpdGxlIiwiaDMiLCJjb2xvciIsImpjdE9yYW5nZSIsInJldGluYSIsImxhcHRvcE0iLCJBbGFybUxpc3QiLCJ1bCIsIkFsYXJtTGlzdEl0ZW0iLCJsaSIsImpjdExpZ2h0R3JheSIsIkFsYXJtcyIsInByb3BzIiwidGl0bGUiLCJvbiIsInVuZGVmaW5lZCIsInRvRml4ZWQiLCJvZmYiLCJEZXRhaWxzQ29udGFpbmVyIiwiamN0V2hpdGUiLCJkZXNrdG9wIiwibW9iaWxlIiwiRGV0YWlsc05hbWUiLCJoMSIsIlVuZGVybGluZSIsIkRldGFpbHMiLCJuYW1lIiwiY3VycmVudFZhbHVlIiwidG90YWxWYWx1ZSIsInVuaXRPZk1lYXN1cmUiLCJEb3VnaG51dEFsYXJtcyIsImFsYXJtT24iLCJhbGFybU9mZiIsInRQdW1wT24iLCJ0UHVtcE9mZiIsIkFsYXJtc0NvbnRhaW5lciIsIkRvdWdobnV0Q2hhcnQiLCJkYXRhIiwiZGF0YXNldHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjdHgiLCJkYXRhc2V0IiwiYm9yZGVyV2lkdGgiLCJjdXRvdXRQZXJjZW50YWdlIiwicm90YXRpb24iLCJNYXRoIiwiUEkiLCJjaXJjdW1mZXJlbmNlIiwidG9vbHRpcHMiLCJob3ZlciIsIkdyYXBoQ29udGFpbmVyIiwiR3JhcGhUaXRsZSIsIkdyYXBoIiwiVm9sdW1lIiwiQ3VycmVudFZvbHVtZSIsImpjdERhcmtHcmF5IiwiQ3VycmVudFZvbHVtZUxhYmVsIiwiRnVsbERldGFpbHMiLCJNYWluQ29udGFpbmVyIiwibWFpbiIsImxhcHRvcFMiLCJDb21wYW55Q29udGFpbmVyIiwiQ29tcGFueU5hbWUiLCJ0YWJsZXQiLCJTaXRlTmFtZSIsImgyIiwiRGF0ZVRpbWUiLCJTaXRlRGV0YWlsc0NvbnRhaW5lciIsIkxheW91dCIsImNvbXBhbnlfbmFtZSIsInNpdGVfbmFtZSIsImRhdGUiLCJ0aW1lIiwiY2hpbGRyZW4iLCJNb2JpbGVDYXJvdXNlbCIsIlN0eWxlZENhcm91c2VsIiwiQ2Fyb3VzZWwiLCJNb2JpbGVNYWluQ29udGFpbmVyIiwiTW9iaWxlQ29tcGFueUNvbnRhaW5lciIsIk1vYmlsZUNvbXBhbnlOYW1lIiwiTW9iaWxlU2l0ZU5hbWUiLCJNb2JpbGVDYXJvdXNlbENvbnRhaW5lciIsIk1vYmlsZUxheW91dCIsIkRldGFpbHNBbGFybUNvbnRhaW5lciIsInAiLCJBbGFybVRpdGxlIiwiQWxhcm1Pbk9mZiIsIkFsYXJtT25PZmZOdW0iLCJzcGFuIiwiYWxhcm1UeXBlIiwiTmFtZUFsYXJtc0NvbnRhaW5lciIsIkRvdWdobnV0Q2hhcnRDb250YWluZXIiLCJyZXNvdXJjZVR5cGUiLCJ0cHVtcE9uIiwidHB1bXBPZmYiLCJTaXRlTmFtZVRpbWUiLCJTaXRlRGV0YWlscyIsImNvbXBhbnkiLCJzaXRlcyIsInNpdGVuYW1lIiwiU2lkZWJhckNvbnRhaW5lciIsIlNpdGVOYXZDb250YWluZXIiLCJTaXRlTGlua3MiLCJuYXYiLCJTaWRlYmFyIiwiVHJlbmQiLCJkZWZhdWx0cyIsImdsb2JhbCIsImRlZmF1bHRGb250RmFtaWx5IiwiZGVmYXVsdEZvbnRDb2xvciIsImNhbnZhcyIsImdldENvbnRleHQiLCJncmFkaWVudCIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwibGFiZWxzIiwibW9uIiwidHVlIiwid2VkIiwidGh1IiwiZnJpIiwic2F0Iiwic3VuIiwiYm9yZGVyQ29sb3IiLCJwb2ludEJhY2tncm91bmRDb2xvciIsImN1YmljSW50ZXJwb2xhdGlvbk1vZGUiLCJsZWdlbmQiLCJzY2FsZXMiLCJ5QXhlcyIsInRpY2tzIiwibWluIiwibWF4Iiwic3RlcFNpemUiLCJkaXNwbGF5IiwiZ3JpZExpbmVzIiwieEF4ZXMiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX3VybCIsIl91dGlscyIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsImlzTG9jYWwiLCJocmVmIiwidXJsIiwicGFyc2UiLCJvcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsImhvc3QiLCJwcm90b2NvbCIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0RnVuYyIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImFzIiwicmVzdWx0IiwiZm9ybWF0VXJsIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJvYnNlcnZlciIsImxpc3RlbmVycyIsIk1hcCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImdldE9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImhhcyIsInRhcmdldCIsImNiIiwiZ2V0IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsInVub2JzZXJ2ZSIsImRlbGV0ZSIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJlbCIsIm9ic2VydmUiLCJzZXQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJMaW5rIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJjbGVhblVwTGlzdGVuZXJzIiwiZm9ybWF0VXJscyIsImFzSHJlZiIsImFkZEJhc2VQYXRoIiwibGlua0NsaWNrZWQiLCJlIiwibm9kZU5hbWUiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJwYXRobmFtZSIsImxvY2F0aW9uIiwicmVzb2x2ZSIsInByZXZlbnREZWZhdWx0Iiwic2Nyb2xsIiwiaW5kZXhPZiIsInJlcGxhY2UiLCJzaGFsbG93IiwidGhlbiIsInN1Y2Nlc3MiLCJzY3JvbGxUbyIsImRvY3VtZW50IiwiYm9keSIsImZvY3VzIiwicHJlZmV0Y2giLCJ3YXJuIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRQYXRocyIsInBhcnNlZEhyZWYiLCJwYXJzZWRBcyIsInJlc29sdmVkSHJlZiIsImhhbmRsZVJlZiIsInJlZiIsInRhZ05hbWUiLCJpc1ByZWZldGNoZWQiLCJqb2luIiwib3B0aW9ucyIsInBhdGhzIiwiY2F0Y2giLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjdXJyZW50Iiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsInBhc3NIcmVmIiwidHlwZSIsInByb2Nlc3MiLCJjbG9uZUVsZW1lbnQiLCJleGVjT25jZSIsIlByb3BUeXBlcyIsImV4YWN0IiwicHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImJvb2wiLCJlbGVtZW50IiwicHJvcE5hbWUiLCJ2YWx1ZSIsIl9kZWZhdWx0IiwidXNlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiY3JlYXRlUm91dGVyIiwid2l0aFJvdXRlciIsIlJvdXRlciIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJhcmd1bWVudHMiLCJldmVudCIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJFcnJvciIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiX2xlbiIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiYXNzaWduIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsIm1pdHQiLCJhbGwiLCJjcmVhdGUiLCJoYW5kbGVyIiwicHVzaCIsInNwbGljZSIsImVtaXQiLCJldnRzIiwic2xpY2UiLCJtYXAiLCJfX2ltcG9ydERlZmF1bHQiLCJtb2QiLCJ1cmxfMSIsIm1pdHRfMSIsInV0aWxzXzEiLCJpc19keW5hbWljXzEiLCJyb3V0ZV9tYXRjaGVyXzEiLCJyb3V0ZV9yZWdleF8xIiwiYmFzZVBhdGgiLCJwYXRoIiwiZGVsQmFzZVBhdGgiLCJzdWJzdHIiLCJ0b1JvdXRlIiwicHJlcGFyZVJvdXRlIiwiZmV0Y2hOZXh0RGF0YSIsInF1ZXJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJhdHRlbXB0cyIsImdldFJlc3BvbnNlIiwiZmV0Y2giLCJfX05FWFRfREFUQV9fIiwiYnVpbGRJZCIsImNyZWRlbnRpYWxzIiwicmVzIiwib2siLCJzdGF0dXMiLCJqc29uIiwiY29kZSIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsInNkYyIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiaXNTc3IiLCJhc1BhdGgiLCJfYnBzIiwiX2dldFN0YXRpY0RhdGEiLCJQcm9taXNlIiwiX2dldFNlcnZlckRhdGEiLCJyb3V0ZSIsImNvbXBvbmVudHMiLCJfX05fU1NHIiwiX19OX1NTUCIsImlzRHluYW1pY1JvdXRlIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0IiwidXBkYXRlIiwibmV3RGF0YSIsIm5vdGlmeSIsInJlbG9hZCIsImJhY2siLCJoaXN0b3J5IiwiY2hhbmdlIiwibWV0aG9kIiwiX2FzIiwicmVqZWN0IiwiX2giLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsImFib3J0Q29tcG9uZW50TG9hZCIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsInVybElzTmV3IiwiYXNQYXRobmFtZSIsInJvdXRlUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsImdldFJvdXRlTWF0Y2hlciIsIm1pc3NpbmdQYXJhbXMiLCJrZXlzIiwiZ3JvdXBzIiwiZmlsdGVyIiwicGFyYW0iLCJnZXRSb3V0ZUluZm8iLCJyb3V0ZUluZm8iLCJjYW5jZWxsZWQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJjYWNoZWRSb3V0ZUluZm8iLCJoYW5kbGVFcnJvciIsImxvYWRFcnJvckZhaWwiLCJmZXRjaENvbXBvbmVudCIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJfZ2V0RGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNwbGl0IiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsImhhc2giLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicHJlZmV0Y2hEYXRhIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJmbiIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiVEVTVF9ST1VURSIsInRlc3QiLCJyZSIsImV4ZWMiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJfIiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsInJlcGVhdCIsImVzY2FwZVJlZ2V4Iiwic3RyIiwibm9ybWFsaXplZFJvdXRlIiwiZXNjYXBlZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsIiQxIiwiaXNDYXRjaEFsbCIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwia2V5IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsInVzZWQiLCJob3N0bmFtZSIsInBvcnQiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJfYSIsInByb3RvdHlwZSIsInBhZ2VQcm9wcyIsInVybE9iamVjdEtleXMiLCJmb3JtYXQiLCJTUCIsIm1lYXN1cmUiLCJKQ1RCVFkiLCJzaXRlIiwiaSIsIkJBVFRFUlkiLCJ0b0xvd2VyQ2FzZSIsIm1EYXRlIiwibVRpbWUiLCJWMyIsIlY0IiwiVjUiLCJWNiIsIlMxIiwiVjEiLCJTMiIsIlM1IiwiVjkiLCJTNiIsIlM3IiwiVjEwIiwiUzgiLCJTMyIsIlM0IiwiUzkiLCJWMTEiLCJTMTAiLCJTMTEiLCJWMTIiLCJTMTIiLCJTMTMiLCJWMTMiLCJTMTQiLCJTMTUiLCJWMTQiLCJTMTYiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXMxIiwiaXNNb2JpbGVWaWV3Iiwic2l6ZSIsIm1vYmlsZVMiLCJtb2JpbGVNIiwibW9iaWxlTCIsImxhcHRvcCIsImxhcHRvcEwiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFD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R0FBRztBQUNiaUIsUUFBTSxFQUFHLCtCQUE4QndlLElBQUksQ0FBQ0csT0FBUSwyQ0FEdkM7QUFFYkYsU0FBTyxFQUFHLCtCQUE4QkQsSUFBSSxDQUFDQyxPQUFRLDJDQUZ4QztBQUdiQyxTQUFPLEVBQUcsK0JBQThCRixJQUFJLENBQUNFLE9BQVEsMkNBSHhDO0FBSWJDLFNBQU8sRUFBRywrQkFBOEJILElBQUksQ0FBQ0csT0FBUSwyQ0FKeEM7QUFLYmpjLFFBQU0sRUFBRywrQkFBOEI4YixJQUFJLENBQUM5YixNQUFPLHFCQUFvQjhiLElBQUksQ0FBQ0ksTUFBTywyQ0FMdEU7QUFNYkEsUUFBTSxFQUFHLCtCQUE4QkosSUFBSSxDQUFDSSxNQUFPLDJDQU50QztBQU9iNWYsU0FBTyxFQUFHLCtCQUE4QndmLElBQUksQ0FBQ3hmLE9BQVEsMkNBUHhDO0FBUWI2ZixTQUFPLEVBQUcsK0JBQThCTCxJQUFJLENBQUNLLE9BQVEsMkNBUnhDO0FBU2I5ZSxTQUFPLEVBQUcsK0JBQThCeWUsSUFBSSxDQUFDemUsT0FBUTtBQVR4QyxDQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkEsK0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoic3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL2pjdC9idHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IHJldGluYSwgc3RhbmRhcmQsIGNvbG9yIH0gZnJvbSAnLi4vcHVibGljL3NjcmVlbnNpemVzJ1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcblxuICBAbWVkaWEgJHtzdGFuZGFyZC50YWJsZXRQfXtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgfVxuXG4gIEBtZWRpYSAke3N0YW5kYXJkLnRhYmxldEx9e1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICB9XG5gXG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgzYFxuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICR7Y29sb3IuamN0T3JhbmdlfTtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIG1hcmdpbi1ib3R0b206IC4yNXJlbTtcbiAgXG4gIEBtZWRpYSAke3N0YW5kYXJkLnRhYmxldFB9e1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIEBtZWRpYSAke3N0YW5kYXJkLnRhYmxldEx9e1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG5cbiAgQG1lZGlhICR7cmV0aW5hLmxhcHRvcE19e1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICB9XG5gXG5cbmNvbnN0IEFsYXJtTGlzdCA9IHN0eWxlZC51bGBcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbmBcblxuY29uc3QgQWxhcm1MaXN0SXRlbSA9IHN0eWxlZC5saWBcbiAgY29sb3I6ICR7Y29sb3IuamN0TGlnaHRHcmF5fTtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIG1hcmdpbi1ib3R0b206IC4yNXJlbTtcbiAgXG4gIEBtZWRpYSAke3N0YW5kYXJkLnRhYmxldFB9e1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG5cbiAgQG1lZGlhICR7c3RhbmRhcmQudGFibGV0TH17XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgXG4gIEBtZWRpYSAke3JldGluYS5sYXB0b3BNfXtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgfVxuYFxuXG5cbmNvbnN0IEFsYXJtcyA9IHByb3BzID0+IChcbiAgPENvbnRhaW5lcj5cbiAgICA8VGl0bGU+e3Byb3BzLnRpdGxlfTwvVGl0bGU+XG5cbiAgICA8QWxhcm1MaXN0PlxuICAgICAgPEFsYXJtTGlzdEl0ZW0+T246IHsgcHJvcHMub24gIT09IHVuZGVmaW5lZCA/IHByb3BzLm9uLnRvRml4ZWQoMikgOiBwcm9wcy5vbiB9PC9BbGFybUxpc3RJdGVtPlxuICAgICAgPEFsYXJtTGlzdEl0ZW0+T2ZmOiB7IHByb3BzLm9mZiAhPT0gdW5kZWZpbmVkID8gcHJvcHMub2ZmLnRvRml4ZWQoMikgOiBwcm9wcy5vZmYgfTwvQWxhcm1MaXN0SXRlbT5cbiAgICA8L0FsYXJtTGlzdD5cbiAgPC9Db250YWluZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEFsYXJtcyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBjb2xvciwgc3RhbmRhcmQsIHJldGluYSB9IGZyb20gJy4uL3B1YmxpYy9zY3JlZW5zaXplcydcblxuaW1wb3J0IFRyZW5kIGZyb20gJy4uL2NvbXBvbmVudHMvVHJlbmQnXG5pbXBvcnQgRG91Z2hudXRDaGFydCBmcm9tICcuL0RvdWdobnV0Q2hhcnQnXG5cbmNvbnN0IERldGFpbHNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvci5qY3RXaGl0ZX07XG4gIFxuICBAbWVkaWEgJHtzdGFuZGFyZC5kZXNrdG9wfXtcbiAgICBtYXgtd2lkdGg6IDM1cmVtO1xuICAgIG1heC1oZWlnaHQ6IDM1cmVtO1xuICB9XG5cbiAgQG1lZGlhICR7cmV0aW5hLm1vYmlsZX17XG4gICAgcGFkZGluZzogMnJlbSAycmVtIDRyZW0gMnJlbTtcbiAgfVxuYFxuXG5jb25zdCBEZXRhaWxzTmFtZSA9IHN0eWxlZC5oMWBcbiAgY29sb3I6ICNGRjdFMjY7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG5cbiAgQG1lZGlhICR7c3RhbmRhcmQudGFibGV0UH17XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG5cbiAgQG1lZGlhICR7c3RhbmRhcmQudGFibGV0TH17XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG5cbiAgQG1lZGlhICR7cmV0aW5hLmxhcHRvcE19e1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgfVxuYFxuXG5jb25zdCBVbmRlcmxpbmUgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MSw0MSw0MSwuMTUpO1xuYFxuXG5jb25zdCBEZXRhaWxzID0gcHJvcHMgPT4gKFxuICA8RGV0YWlsc0NvbnRhaW5lcj5cbiAgICA8RGV0YWlsc05hbWU+e3Byb3BzLm5hbWV9PC9EZXRhaWxzTmFtZT5cbiAgICA8VW5kZXJsaW5lIC8+XG4gICAgPERvdWdobnV0Q2hhcnQgY3VycmVudFZhbHVlPXtwcm9wcy5jdXJyZW50VmFsdWV9IHRvdGFsVmFsdWU9e3Byb3BzLnRvdGFsVmFsdWV9IHVuaXRPZk1lYXN1cmU9e3Byb3BzLnVuaXRPZk1lYXN1cmV9IC8+XG4gICAgey8qIDxUcmVuZCBcbiAgICAgIG1vbj17cHJvcHMubW9ufVxuICAgICAgdHVlPXtwcm9wcy50dWV9XG4gICAgICB3ZWQ9e3Byb3BzLndlZH1cbiAgICAgIHRodT17cHJvcHMudGh1fVxuICAgICAgZnJpPXtwcm9wcy5mcml9XG4gICAgICBzYXQ9e3Byb3BzLnNhdH1cbiAgICAgIHN1bj17cHJvcHMuc3VufVxuICAgIC8+ICovfVxuICA8L0RldGFpbHNDb250YWluZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IERldGFpbHMiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5pbXBvcnQgRG91Z2hudXRDaGFydCBmcm9tICcuL0RvdWdobnV0Q2hhcnQnXG5pbXBvcnQgQWxhcm1zIGZyb20gJy4vQWxhcm1zJ1xuXG5cbmNvbnN0IERvdWdobnV0QWxhcm1zID0gcHJvcHMgPT4gKFxuICA8Q29udGFpbmVyPlxuICAgIDxEb3VnaG51dENoYXJ0IGN1cnJlbnRWYWx1ZT17cHJvcHMuY3VycmVudFZhbHVlfSB0b3RhbFZhbHVlPXtwcm9wcy50b3RhbFZhbHVlfSB1bml0T2ZNZWFzdXJlPXtwcm9wcy51bml0T2ZNZWFzdXJlfSBhbGFybU9uPXtwcm9wcy5hbGFybU9ufSBhbGFybU9mZj17cHJvcHMuYWxhcm1PZmZ9IC8+XG4gICAgPEFsYXJtc0NvbnRhaW5lcj5cbiAgICAgIDxBbGFybXMgdGl0bGU9XCJUcmFuc2ZlciBQdW1wXCIgb249e3Byb3BzLnRQdW1wT259IG9mZj17cHJvcHMudFB1bXBPZmZ9IC8+XG4gICAgICA8QWxhcm1zIHRpdGxlPVwiQWxhcm1cIiBvbj17cHJvcHMuYWxhcm1Pbn0gb2ZmPXtwcm9wcy5hbGFybU9mZn0gLz5cbiAgICA8L0FsYXJtc0NvbnRhaW5lcj5cbiAgPC9Db250YWluZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IERvdWdobnV0QWxhcm1zXG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyBcbmBcblxuY29uc3QgQWxhcm1zQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG5cbiAgJjpmaXJzdC1jaGlsZHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG5gIiwiaW1wb3J0IHsgRG91Z2hudXQgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInXG5cbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBjb2xvciB9IGZyb20gJy4uL3B1YmxpYy9zY3JlZW5zaXplcydcblxuXG5jb25zdCBEb3VnaG51dENoYXJ0ID0gcHJvcHMgPT4ge1xuICBcbiAgY29uc3QgZGF0YSA9IHtcbiAgICBkYXRhc2V0czogW3tcbiAgICAgIGRhdGE6IFtwcm9wcy5jdXJyZW50VmFsdWUsIChwcm9wcy50b3RhbFZhbHVlIC0gcHJvcHMuY3VycmVudFZhbHVlKV0sXG4gICAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6IFsgY29sb3IuamN0T3JhbmdlLCAncmdiYSgwLDAsMCwgLjA1KScgXSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogKGN0eCkgPT4ge1xuICAgICAgICAvLyBjb25zdCBpID0gY3R4LmRhdGFJbmRleFxuICAgICAgICBpZihjdHguZGF0YXNldC5kYXRhWzBdIDwgcHJvcHMuYWxhcm1PZmYpe1xuICAgICAgICByZXR1cm4gWyAnbGlnaHRncmVlbicsICdyZ2JhKDAsMCwwLC4wNSknIF1cbiAgICAgIH0gZWxzZSBpZihjdHguZGF0YXNldC5kYXRhWzBdID4gcHJvcHMuYWxhcm1Pbil7XG4gICAgICAgICAgcmV0dXJuIFsgJ3JlZCcsICdyZ2JhKDAsMCwwLC4wNSknIF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gWyAnI2ZmY2MwMCcsICdyZ2JhKDAsMCwwLC4wNSknIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGJvcmRlcldpZHRoOiAwXG4gICAgfV1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEdyYXBoQ29udGFpbmVyPlxuICAgICAgPEdyYXBoVGl0bGU+e3Byb3BzLm5hbWV9PC9HcmFwaFRpdGxlPlxuICAgICAgPEdyYXBoPlxuICAgICAgICA8RG91Z2hudXQgXG4gICAgICAgICAgZGF0YT17IGRhdGEgfVxuICAgICAgICAgIHdpZHRoPXsgMTUwIH1cbiAgICAgICAgICBoZWlnaHQ9eyAxNTAgfVxuICAgICAgICAgIG9wdGlvbnM9e3sgXG4gICAgICAgICAgICBjdXRvdXRQZXJjZW50YWdlOiA4MCwgXG4gICAgICAgICAgICByb3RhdGlvbjogKC0xLjI1ICogTWF0aC5QSSksXG4gICAgICAgICAgICBjaXJjdW1mZXJlbmNlOiAoMS41ICogTWF0aC5QSSksXG4gICAgICAgICAgICB0b29sdGlwczogZmFsc2UsXG4gICAgICAgICAgICBob3ZlcjogZmFsc2VcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9HcmFwaD5cbiAgICAgIDxWb2x1bWU+XG4gICAgICAgIDxDdXJyZW50Vm9sdW1lPnsgcHJvcHMuY3VycmVudFZhbHVlICE9PSBudWxsID8gcHJvcHMuY3VycmVudFZhbHVlLnRvRml4ZWQoMikgOiBwcm9wcy5jdXJyZW50VmFsdWUgfTwvQ3VycmVudFZvbHVtZT5cbiAgICAgICAgPEN1cnJlbnRWb2x1bWVMYWJlbD57cHJvcHMudW5pdE9mTWVhc3VyZX08L0N1cnJlbnRWb2x1bWVMYWJlbD5cbiAgICAgIDwvVm9sdW1lPlxuICAgIDwvR3JhcGhDb250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRG91Z2hudXRDaGFydCAgICBcblxuXG5jb25zdCBHcmFwaENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQ6IDI1JSAxZnIgLyAxZnI7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xuICB3aWR0aDogMjByZW07XG4gIGhlaWdodDogMTVyZW07XG5gXG5jb25zdCBHcmFwaFRpdGxlID0gc3R5bGVkLmgxYFxuICBncmlkLWNvbHVtbjogMTtcbiAgZ3JpZC1yb3c6IDE7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xuYFxuXG5jb25zdCBHcmFwaCA9IHN0eWxlZC5kaXZgXG4gIGdyaWQtY29sdW1uOiAxO1xuICBncmlkLXJvdzogMjtcbmBcblxuY29uc3QgVm9sdW1lID0gc3R5bGVkLmRpdmBcbiAgZ3JpZC1jb2x1bW46IDE7XG4gIGdyaWQtcm93OiAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xuYFxuXG5jb25zdCBDdXJyZW50Vm9sdW1lID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAyLjRyZW07XG4gIGNvbG9yOiAke2NvbG9yLmpjdERhcmtHcmF5fTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5gXG5cbmNvbnN0IEN1cnJlbnRWb2x1bWVMYWJlbCA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBjb2xvcjogJHtjb2xvci5qY3REYXJrR3JheX07XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBtYXJnaW4tYm90dG9tOiAuMXJlbTtcbiAgbWFyZ2luLWxlZnQ6IC4ycmVtO1xuYCIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBjb2xvciwgc3RhbmRhcmQsIHJldGluYSB9IGZyb20gJy4uL3B1YmxpYy9zY3JlZW5zaXplcydcblxuaW1wb3J0IERvdWdobnV0QWxhcm1zIGZyb20gJy4uL2NvbXBvbmVudHMvRG91Z2hudXRBbGFybXMnXG5pbXBvcnQgVHJlbmQgZnJvbSAnLi4vY29tcG9uZW50cy9UcmVuZCdcblxuY29uc3QgRGV0YWlsc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yLmpjdFdoaXRlfTtcbiAgXG4gIEBtZWRpYSAke3N0YW5kYXJkLmRlc2t0b3B9e1xuICAgIG1heC13aWR0aDogMzVyZW07XG4gIH1cblxuICBAbWVkaWEgJHtyZXRpbmEubW9iaWxlfXtcbiAgICBwYWRkaW5nOiAycmVtO1xuICB9XG5gXG5cbmNvbnN0IERldGFpbHNOYW1lID0gc3R5bGVkLmgxYFxuICBjb2xvcjogI0ZGN0UyNjtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcblxuICBAbWVkaWEgJHtzdGFuZGFyZC50YWJsZXRQfXtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cblxuICBAbWVkaWEgJHtzdGFuZGFyZC50YWJsZXRMfXtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cblxuICBAbWVkaWEgJHtyZXRpbmEubGFwdG9wTX17XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICB9XG5gXG5cbmNvbnN0IFVuZGVybGluZSA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQxLDQxLDQxLC4xNSk7XG5gXG5cbmNvbnN0IEZ1bGxEZXRhaWxzID0gcHJvcHMgPT4gKFxuICA8RGV0YWlsc0NvbnRhaW5lcj5cbiAgICA8RGV0YWlsc05hbWU+e3Byb3BzLm5hbWV9PC9EZXRhaWxzTmFtZT5cbiAgICA8VW5kZXJsaW5lIC8+XG4gICAgPERvdWdobnV0QWxhcm1zIFxuICAgICAgY3VycmVudFZhbHVlPXtwcm9wcy5jdXJyZW50VmFsdWV9IFxuICAgICAgdG90YWxWYWx1ZT17cHJvcHMudG90YWxWYWx1ZX0gXG4gICAgICB1bml0T2ZNZWFzdXJlPXtwcm9wcy51bml0T2ZNZWFzdXJlfVxuICAgICAgdFB1bXBPbj17cHJvcHMudFB1bXBPbn1cbiAgICAgIHRQdW1wT2ZmPXtwcm9wcy50UHVtcE9mZn1cbiAgICAgIGFsYXJtT249e3Byb3BzLmFsYXJtT259XG4gICAgICBhbGFybU9mZj17cHJvcHMuYWxhcm1PZmZ9XG4gICAgLz5cbiAgICB7LyogPFRyZW5kIFxuICAgICAgbW9uPXtwcm9wcy5tb259XG4gICAgICB0dWU9e3Byb3BzLnR1ZX1cbiAgICAgIHdlZD17cHJvcHMud2VkfVxuICAgICAgdGh1PXtwcm9wcy50aHV9XG4gICAgICBmcmk9e3Byb3BzLmZyaX1cbiAgICAgIHNhdD17cHJvcHMuc2F0fVxuICAgICAgc3VuPXtwcm9wcy5zdW59XG4gICAgLz4gKi99XG4gIDwvRGV0YWlsc0NvbnRhaW5lcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgRnVsbERldGFpbHMiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgc3RhbmRhcmQsIHJldGluYSwgY29sb3IgfSBmcm9tICcuLi9wdWJsaWMvc2NyZWVuc2l6ZXMnXG5cbmNvbnN0IE1haW5Db250YWluZXIgPSBzdHlsZWQubWFpbmBcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgXG4gIEBtZWRpYSAke3N0YW5kYXJkLnRhYmxldFB9e1xuICAgIHdpZHRoOiA4MCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMiUgMWZyO1xuICB9XG4gIFxuICBAbWVkaWEgJHtzdGFuZGFyZC50YWJsZXRMfXtcbiAgICB3aWR0aDogOTAlO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTUlIDg1JTtcbiAgfVxuXG4gIEBtZWRpYSAke3N0YW5kYXJkLmxhcHRvcFN9IHtcbiAgICB3aWR0aDogNjUlO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTIlIDkwJTtcbiAgfVxuXG4gIEBtZWRpYSAke3N0YW5kYXJkLmRlc2t0b3B9IHtcbiAgICBoZWlnaHQ6IDYwdmg7XG4gICAgbWF4LXdpZHRoOiAzMCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMiUgMWZyO1xuICB9XG5gXG5cbmNvbnN0IENvbXBhbnlDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuYFxuXG5jb25zdCBDb21wYW55TmFtZSA9IHN0eWxlZC5oMWBcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICNlZmVmZWY7XG5cbiAgQG1lZGlhICR7c3RhbmRhcmQudGFibGV0fSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICB9XG5cbiAgQG1lZGlhICR7c3RhbmRhcmQuZGVza3RvcH0ge1xuICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgfVxuICBcbiAgQG1lZGlhICR7cmV0aW5hLmxhcHRvcE19IHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gIH1cbmBcblxuY29uc3QgU2l0ZU5hbWUgPSBzdHlsZWQuaDJgXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjRkY3RTI2O1xuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcblxuICBAbWVkaWEgJHtzdGFuZGFyZC50YWJsZXR9IHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbiAgXG4gIEBtZWRpYSAke3N0YW5kYXJkLmRlc2t0b3B9IHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cbiAgXG4gIEBtZWRpYSAke3JldGluYS5sYXB0b3BNfSB7XG4gICAgZm9udC1zaXplOiAyLjc1cmVtO1xuICB9XG5gXG5cbmNvbnN0IERhdGVUaW1lID0gc3R5bGVkLmgzYFxuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNSk7XG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWxlZnQ6IC4yNXJlbTtcbmBcblxuY29uc3QgU2l0ZURldGFpbHNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yLmpjdFdoaXRlfTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiA5cmVtIDE4cmVtIDlyZW0gMDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgXG4gIEBtZWRpYSAke3N0YW5kYXJkLnRhYmxldFB9e1xuICAgIHBhZGRpbmc6IDNyZW0gNnJlbSAzcmVtIDNyZW07XG4gICAgZ3JpZDogYXV0by1mbG93IC8gcmVwZWF0KDIsIDUwJSk7XG4gICAgZ3JpZC1nYXA6IDNyZW0gM3JlbTtcbiAgfVxuICBcbiAgQG1lZGlhICR7c3RhbmRhcmQudGFibGV0TH17XG4gICAgcGFkZGluZzogNHJlbSAxM3JlbSA0cmVtIDRyZW07XG4gICAgZ3JpZDogYXV0by1mbG93IC8gcmVwZWF0KDMsIDMzJSk7XG4gICAgZ3JpZC1nYXA6IDVyZW0gNXJlbTtcbiAgfVxuICBcbiAgQG1lZGlhICR7c3RhbmRhcmQuZGVza3RvcH0ge1xuICAgIHBhZGRpbmc6IDZyZW0gMjByZW0gNnJlbSA2cmVtO1xuICAgIGdyaWQ6IGF1dG8tZmxvdyAvIHJlcGVhdCgzLCAzMyUpO1xuICAgIGdyaWQtZ2FwOiAwcmVtIDdyZW07XG5cbiAgfVxuICBcbiAgQG1lZGlhICR7cmV0aW5hLmxhcHRvcE19IHtcbiAgICBwYWRkaW5nOiA1cmVtIDE5cmVtIDAgNXJlbTtcbiAgICBncmlkOiBhdXRvLWZsb3cgLyByZXBlYXQoMywgMzMlKTtcbiAgICBncmlkLWdhcDogMXJlbSA3cmVtO1xuICB9XG5gXG5cbmNvbnN0IExheW91dCA9IHByb3BzID0+IChcbiAgPE1haW5Db250YWluZXI+XG4gICAgPENvbXBhbnlDb250YWluZXI+XG4gICAgICA8Q29tcGFueU5hbWU+e3Byb3BzLmNvbXBhbnlfbmFtZX08L0NvbXBhbnlOYW1lPlxuICAgICAgPFNpdGVOYW1lPntwcm9wcy5zaXRlX25hbWV9PC9TaXRlTmFtZT5cbiAgICAgIDxEYXRlVGltZT57cHJvcHMuZGF0ZX0gLSB7cHJvcHMudGltZX08L0RhdGVUaW1lPlxuICAgIDwvQ29tcGFueUNvbnRhaW5lcj5cbiAgICA8U2l0ZURldGFpbHNDb250YWluZXI+XG4gICAgICB7IHByb3BzLmNoaWxkcmVuIH1cbiAgICA8L1NpdGVEZXRhaWxzQ29udGFpbmVyPlxuICA8L01haW5Db250YWluZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dCIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnbnVrYS1jYXJvdXNlbCdcbmltcG9ydCB7IHN0YW5kYXJkLCByZXRpbmEsIGNvbG9yIH0gZnJvbSAnLi4vcHVibGljL3NjcmVlbnNpemVzJ1xuXG5jb25zdCBNb2JpbGVDYXJvdXNlbCA9IHByb3BzID0+IChcbiAgPENhcm91c2VsXG4gICAgY2VsbEFsaWduPXsgJ2NlbnRlcicgfVxuICAgIGNlbGxTcGFjaW5nPXsgMTUgfVxuICAgIHNsaWRlV2lkdGg9eyAnMzI1cHgnIH1cbiAgICB3aXRob3V0Q29udHJvbHNcbiAgPlxuICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICA8L0Nhcm91c2VsPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVDYXJvdXNlbFxuXG5jb25zdCBTdHlsZWRDYXJvdXNlbCA9IHN0eWxlZChDYXJvdXNlbClgXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG5gIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IHN0YW5kYXJkLCByZXRpbmEsIGNvbG9yIH0gZnJvbSAnLi4vcHVibGljL3NjcmVlbnNpemVzJ1xuXG5pbXBvcnQgTW9iaWxlQ2Fyb3VzZWwgZnJvbSAnLi4vY29tcG9uZW50cy9Nb2JpbGVDYXJvdXNlbCdcblxuY29uc3QgTW9iaWxlTWFpbkNvbnRhaW5lciA9IHN0eWxlZC5tYWluYFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNSUgODUlO1xuYFxuXG5jb25zdCBNb2JpbGVDb21wYW55Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwIDRyZW07XG5gXG5cbmNvbnN0IE1vYmlsZUNvbXBhbnlOYW1lID0gc3R5bGVkLmgxYFxuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAke2NvbG9yLmpjdFdoaXRlfTtcbmBcblxuY29uc3QgTW9iaWxlU2l0ZU5hbWUgPSBzdHlsZWQuaDJgXG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICR7Y29sb3IuamN0T3JhbmdlfTtcbmBcblxuY29uc3QgRGF0ZVRpbWUgPSBzdHlsZWQuaDNgXG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC41KTtcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuYFxuXG5jb25zdCBNb2JpbGVDYXJvdXNlbENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtcm93LWdhcDogMXJlbTtcbmBcblxuXG5jb25zdCBNb2JpbGVMYXlvdXQgPSBwcm9wcyA9PiAoXG4gIDw+XG4gICAgPE1vYmlsZU1haW5Db250YWluZXI+XG4gICAgICA8TW9iaWxlQ29tcGFueUNvbnRhaW5lcj5cbiAgICAgICAgPE1vYmlsZUNvbXBhbnlOYW1lPntwcm9wcy5jb21wYW55X25hbWV9PC9Nb2JpbGVDb21wYW55TmFtZT5cbiAgICAgICAgPE1vYmlsZVNpdGVOYW1lPntwcm9wcy5zaXRlX25hbWV9PC9Nb2JpbGVTaXRlTmFtZT5cbiAgICAgICAgPERhdGVUaW1lPntwcm9wcy5kYXRlfSAtIHtwcm9wcy50aW1lfTwvRGF0ZVRpbWU+XG4gICAgICA8L01vYmlsZUNvbXBhbnlDb250YWluZXI+XG4gICAgICA8TW9iaWxlQ2Fyb3VzZWxDb250YWluZXI+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvTW9iaWxlQ2Fyb3VzZWxDb250YWluZXI+XG4gICAgPC9Nb2JpbGVNYWluQ29udGFpbmVyPlxuICAgICBcbiAgICB7LyogPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICp7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgfVxuXG4gICAgICBib2R5e1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xuICAgICAgfVxuXG4gICAgICAjX19uZXh0e1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPiAqL31cblxuICA8Lz5cbilcblxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlTGF5b3V0IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IHJldGluYSwgc3RhbmRhcmQsIGNvbG9yIH0gZnJvbSAnLi4vcHVibGljL3NjcmVlbnNpemVzJ1xuXG5jb25zdCBEZXRhaWxzQWxhcm1Db250YWluZXIgPSBzdHlsZWQucGBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke2NvbG9yLmpjdERhcmtHcmF5fTtcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XG5gXG5cbmNvbnN0IEFsYXJtVGl0bGUgPSBzdHlsZWQuaDJgXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuYFxuXG5jb25zdCBBbGFybU9uT2ZmID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAxLjhyZW07XG5gXG5cbmNvbnN0IEFsYXJtT25PZmZOdW0gPSBzdHlsZWQuc3BhbmBcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuYFxuXG5cblxuY29uc3QgQWxhcm1zID0gcHJvcHMgPT4gKFxuICA8RGV0YWlsc0FsYXJtQ29udGFpbmVyPlxuICAgIDxBbGFybVRpdGxlPntwcm9wcy5hbGFybVR5cGV9PC9BbGFybVRpdGxlPlxuICAgIDxBbGFybU9uT2ZmPk9uOiA8QWxhcm1Pbk9mZk51bT57IHByb3BzLm9uICE9PSB1bmRlZmluZWQgPyBwcm9wcy5vbi50b0ZpeGVkKDIpIDogcHJvcHMub24gfTwvQWxhcm1Pbk9mZk51bT4gT2ZmOiA8QWxhcm1Pbk9mZk51bT57IHByb3BzLm9mZiAhPT0gdW5kZWZpbmVkID8gcHJvcHMub2ZmLnRvRml4ZWQoMikgOiBwcm9wcy5vZmYgfTwvQWxhcm1Pbk9mZk51bT48L0FsYXJtT25PZmY+XG4gIDwvRGV0YWlsc0FsYXJtQ29udGFpbmVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBBbGFybXMiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgY29sb3IsIHN0YW5kYXJkLCByZXRpbmEgfSBmcm9tICcuLi9wdWJsaWMvc2NyZWVuc2l6ZXMnXG5cbmltcG9ydCBUcmVuZCBmcm9tICcuL1RyZW5kJ1xuaW1wb3J0IERvdWdobnV0Q2hhcnQgZnJvbSAnLi9Eb3VnaG51dENoYXJ0J1xuaW1wb3J0IE5ld0FsYXJtcyBmcm9tICcuL05ld0FsYXJtcydcblxuY29uc3QgRGV0YWlsc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiAxNXJlbTtcbiAgXG4gIC8qIEBtZWRpYSAke3N0YW5kYXJkLmRlc2t0b3B9e1xuICAgIG1heC13aWR0aDogMzVyZW07XG4gICAgbWF4LWhlaWdodDogMzVyZW07XG4gIH1cblxuICBAbWVkaWEgJHtyZXRpbmEubW9iaWxlfXtcbiAgICBwYWRkaW5nOiAycmVtIDJyZW0gNHJlbSAycmVtO1xuICB9ICovXG5gXG5cbmNvbnN0IE5hbWVBbGFybXNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xuYFxuXG5jb25zdCBEZXRhaWxzTmFtZSA9IHN0eWxlZC5oMWBcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvci5qY3REYXJrR3JheX07XG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgbWF4LXdpZHRoOiBhdXRvO1xuXG4gIC8qIEBtZWRpYSAke3N0YW5kYXJkLnRhYmxldFB9e1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuXG4gIEBtZWRpYSAke3N0YW5kYXJkLnRhYmxldEx9e1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuXG4gIEBtZWRpYSAke3JldGluYS5sYXB0b3BNfXtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH0gKi9cbmBcbmNvbnN0IERvdWdobnV0Q2hhcnRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuYFxuXG5cbmNvbnN0IERldGFpbHMgPSBwcm9wcyA9PiAoXG4gIDxEZXRhaWxzQ29udGFpbmVyPlxuICAgIDxOYW1lQWxhcm1zQ29udGFpbmVyPlxuICAgICAgPERldGFpbHNOYW1lPntwcm9wcy5yZXNvdXJjZVR5cGV9PC9EZXRhaWxzTmFtZT5cbiAgICAgIDxOZXdBbGFybXMgYWxhcm1UeXBlPXsnQWxhcm0nfSBvbj17cHJvcHMuYWxhcm1Pbn0gb2ZmPXtwcm9wcy5hbGFybU9mZn0gLz5cbiAgICAgIDxOZXdBbGFybXMgYWxhcm1UeXBlPXsnVC1QdW1wJ30gb249e3Byb3BzLnRwdW1wT259IG9mZj17cHJvcHMudHB1bXBPZmZ9IC8+XG4gICAgPC9OYW1lQWxhcm1zQ29udGFpbmVyPlxuICAgIFxuICAgIDxEb3VnaG51dENoYXJ0Q29udGFpbmVyPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvRG91Z2hudXRDaGFydENvbnRhaW5lcj5cbiAgPC9EZXRhaWxzQ29udGFpbmVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxzIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IHN0YW5kYXJkLCByZXRpbmEsIGNvbG9yIH0gZnJvbSAnLi4vcHVibGljL3NjcmVlbnNpemVzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9TaWRlYmFyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cblxuY29uc3QgTWFpbkNvbnRhaW5lciA9IHN0eWxlZC5tYWluYFxuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xuYFxuXG5jb25zdCBTaXRlRGV0YWlsc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctbGVmdDogN3JlbTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMHJlbSAxZnI7XG5gXG5cbmNvbnN0IFNpdGVOYW1lVGltZSA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogMTVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmBcblxuY29uc3QgU2l0ZU5hbWUgPSBzdHlsZWQuaDJgXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAke2NvbG9yLmpjdERhcmtHcmF5fTtcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbmBcblxuY29uc3QgRGF0ZVRpbWUgPSBzdHlsZWQuaDNgXG4gIGNvbG9yOiAke2NvbG9yLmpjdERhcmtHcmF5fTtcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tbGVmdDogLjI1cmVtO1xuYFxuXG5jb25zdCBTaXRlRGV0YWlscyA9IHN0eWxlZC5kaXZgXG5cbmBcblxuXG5jb25zdCBMYXlvdXQgPSBwcm9wcyA9PiB7XG4gIHJldHVybihcbiAgPE1haW5Db250YWluZXI+XG4gICAgPFNpZGViYXIgY29tcGFueT17cHJvcHMuY29tcGFueX0gc2l0ZXM9e3Byb3BzLnNpdGVzfSAvPlxuICAgIDxTaXRlRGV0YWlsc0NvbnRhaW5lcj5cbiAgICAgIDxTaXRlTmFtZVRpbWU+XG4gICAgICAgIDxTaXRlTmFtZT57cHJvcHMuc2l0ZW5hbWV9PC9TaXRlTmFtZT5cbiAgICAgICAgPERhdGVUaW1lPntwcm9wcy5kYXRlfSAtIHtwcm9wcy50aW1lfTwvRGF0ZVRpbWU+XG4gICAgICA8L1NpdGVOYW1lVGltZT5cbiAgICAgIDxTaXRlRGV0YWlscz5cbiAgICAgICAgeyBwcm9wcy5jaGlsZHJlbiB9XG4gICAgICA8L1NpdGVEZXRhaWxzPlxuICAgIDwvU2l0ZURldGFpbHNDb250YWluZXI+XG4gIDwvTWFpbkNvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgc3RhbmRhcmQsIHJldGluYSwgY29sb3IgfSBmcm9tICcuLi9wdWJsaWMvc2NyZWVuc2l6ZXMnXG5cbmNvbnN0IFNpZGViYXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMzByZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3IuamN0RGFya0dyYXl9O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEyLjVyZW0gMWZyO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuYFxuXG5jb25zdCBDb21wYW55Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTIuNXJlbTtcblxuICBpbWd7XG4gICAgaGVpZ2h0OiA3NSU7XG4gIH1cbmBcblxuY29uc3QgU2l0ZU5hdkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIFxuICBoMXtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuYFxuXG5jb25zdCBTaXRlTGlua3MgPSBzdHlsZWQubmF2YFxuICB1bHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgfVxuXG4gIGxpe1xuICAgIGhlaWdodDogNXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cblxuICBsaTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yLmpjdE9yYW5nZX07XG4gIH1cblxuICBhe1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbmBcblxuY29uc3QgU2lkZWJhciA9IChwcm9wcykgPT4ge1xuICByZXR1cm4oXG4gICAgPFNpZGViYXJDb250YWluZXI+XG4gICAgICA8Q29tcGFueUNvbnRhaW5lcj5cbiAgICAgICAgPGltZyBzcmM9e2Avc3RhdGljLyR7cHJvcHMuY29tcGFueX0tbG9nby5wbmdgfSAvPlxuICAgICAgPC9Db21wYW55Q29udGFpbmVyPlxuICAgICAgPFNpdGVOYXZDb250YWluZXI+XG4gICAgICAgIDxoMT5TaXRlczwvaDE+XG4gICAgICAgIDxTaXRlTGlua3M+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge3Byb3BzLnNpdGVzfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvU2l0ZUxpbmtzPlxuICAgICAgPC9TaXRlTmF2Q29udGFpbmVyPlxuICAgIDwvU2lkZWJhckNvbnRhaW5lcj5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXIiLCJpbXBvcnQgeyBkZWZhdWx0cywgTGluZSB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMidcblxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IGNvbG9yIH0gZnJvbSAnLi4vcHVibGljL3NjcmVlbnNpemVzJ1xuXG5cbmNvbnN0IFRyZW5kID0gcHJvcHMgPT4ge1xuICBkZWZhdWx0cy5nbG9iYWwuZGVmYXVsdEZvbnRGYW1pbHkgPSAnSW5kdXN0cnknXG4gIGRlZmF1bHRzLmdsb2JhbC5kZWZhdWx0Rm9udENvbG9yID0gY29sb3IuamN0TGlnaHRHcmF5XG5cbiAgY29uc3QgZGF0YSA9IGNhbnZhcyA9PiB7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKVxuICAgIGNvbnN0IGdyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsMCwwLDE2NSk7XG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDI1NSwyNTUsMjU1LC4wMSknKVxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBjb2xvci5qY3RMaWdodEdyYXkpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGxhYmVsczogWydtb24nLCAndHVlJywgJ3dlZCcsICd0aHUnLCAnZnJpJywgJ3NhdCcsICdzdW4nXSxcbiAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICBkYXRhOiBbcHJvcHMubW9uLCBwcm9wcy50dWUsIHByb3BzLndlZCwgcHJvcHMudGh1LCBwcm9wcy5mcmksIHByb3BzLnNhdCwgcHJvcHMuc3VuXSxcbiAgICAgICAgYm9yZGVyV2lkdGg6IDIsXG4gICAgICAgIGJvcmRlckNvbG9yOiBjb2xvci5qY3RPcmFuZ2UsXG4gICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiBjb2xvci5qY3RPcmFuZ2UsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogZ3JhZGllbnQsXG4gICAgICAgIGN1YmljSW50ZXJwb2xhdGlvbk1vZGU6ICdtb25vdG9uZScsXG4gICAgICB9XVxuICAgIH1cbiAgfVxuXG4gIHJldHVybihcbiAgICA8R3JhcGg+XG4gICAgICA8TGluZVxuICAgICAgICBkYXRhPXsgZGF0YSB9XG4gICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICBsZWdlbmQ6IGZhbHNlLFxuICAgICAgICAgIHRvb2x0aXBzOiBmYWxzZSxcbiAgICAgICAgICBob3ZlcjogZmFsc2UsXG4gICAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgICAvLyBMZWZ0IHNpZGUgb2YgZ3JhcGhcbiAgICAgICAgICAgIHlBeGVzOiBbe1xuICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgICBtYXg6IDE2LFxuICAgICAgICAgICAgICAgIHN0ZXBTaXplOiA0LFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIC8vIEJvdHRvbSBvZiBncmFwaFxuICAgICAgICAgICAgeEF4ZXM6IFt7XG4gICAgICAgICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L0dyYXBoPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyZW5kXG5cbmNvbnN0IEdyYXBoID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG5gIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfdXJsPXJlcXVpcmUoXCJ1cmxcIik7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzXCIpO3ZhciBfcm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcm91dGVyXCIpKTt2YXIgX3JvdXRlcjI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpO2Z1bmN0aW9uIGlzTG9jYWwoaHJlZil7dmFyIHVybD0oMCxfdXJsLnBhcnNlKShocmVmLGZhbHNlLHRydWUpO3ZhciBvcmlnaW49KDAsX3VybC5wYXJzZSkoKDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpLGZhbHNlLHRydWUpO3JldHVybiF1cmwuaG9zdHx8dXJsLnByb3RvY29sPT09b3JpZ2luLnByb3RvY29sJiZ1cmwuaG9zdD09PW9yaWdpbi5ob3N0O31mdW5jdGlvbiBtZW1vaXplZEZvcm1hdFVybChmb3JtYXRGdW5jKXt2YXIgbGFzdEhyZWY9bnVsbDt2YXIgbGFzdEFzPW51bGw7dmFyIGxhc3RSZXN1bHQ9bnVsbDtyZXR1cm4oaHJlZixhcyk9PntpZihsYXN0UmVzdWx0JiZocmVmPT09bGFzdEhyZWYmJmFzPT09bGFzdEFzKXtyZXR1cm4gbGFzdFJlc3VsdDt9dmFyIHJlc3VsdD1mb3JtYXRGdW5jKGhyZWYsYXMpO2xhc3RIcmVmPWhyZWY7bGFzdEFzPWFzO2xhc3RSZXN1bHQ9cmVzdWx0O3JldHVybiByZXN1bHQ7fTt9ZnVuY3Rpb24gZm9ybWF0VXJsKHVybCl7cmV0dXJuIHVybCYmdHlwZW9mIHVybD09PSdvYmplY3QnPygwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikodXJsKTp1cmw7fXZhciBvYnNlcnZlcjt2YXIgbGlzdGVuZXJzPW5ldyBNYXAoKTt2YXIgSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP3dpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlcjpudWxsO3ZhciBwcmVmZXRjaGVkPXt9O2Z1bmN0aW9uIGdldE9ic2VydmVyKCl7Ly8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbmlmKG9ic2VydmVyKXtyZXR1cm4gb2JzZXJ2ZXI7fS8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuaWYoIUludGVyc2VjdGlvbk9ic2VydmVyKXtyZXR1cm4gdW5kZWZpbmVkO31yZXR1cm4gb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9PntpZighbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKXtyZXR1cm47fXZhciBjYj1saXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCk7aWYoZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjApe29ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO2xpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KTtjYigpO319KTt9LHtyb290TWFyZ2luOicyMDBweCd9KTt9dmFyIGxpc3RlblRvSW50ZXJzZWN0aW9ucz0oZWwsY2IpPT57dmFyIG9ic2VydmVyPWdldE9ic2VydmVyKCk7aWYoIW9ic2VydmVyKXtyZXR1cm4oKT0+e307fW9ic2VydmVyLm9ic2VydmUoZWwpO2xpc3RlbmVycy5zZXQoZWwsY2IpO3JldHVybigpPT57dHJ5e29ic2VydmVyLnVub2JzZXJ2ZShlbCk7fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcihlcnIpO31saXN0ZW5lcnMuZGVsZXRlKGVsKTt9O307Y2xhc3MgTGluayBleHRlbmRzIF9yZWFjdC5Db21wb25lbnR7Y29uc3RydWN0b3IocHJvcHMpe3N1cGVyKHByb3BzKTt0aGlzLnA9dm9pZCAwO3RoaXMuY2xlYW5VcExpc3RlbmVycz0oKT0+e307dGhpcy5mb3JtYXRVcmxzPW1lbW9pemVkRm9ybWF0VXJsKChocmVmLGFzSHJlZik9PntyZXR1cm57aHJlZjooMCxfcm91dGVyMi5hZGRCYXNlUGF0aCkoZm9ybWF0VXJsKGhyZWYpKSxhczphc0hyZWY/KDAsX3JvdXRlcjIuYWRkQmFzZVBhdGgpKGZvcm1hdFVybChhc0hyZWYpKTphc0hyZWZ9O30pO3RoaXMubGlua0NsaWNrZWQ9ZT0+e3Zhcntub2RlTmFtZSx0YXJnZXR9PWUuY3VycmVudFRhcmdldDtpZihub2RlTmFtZT09PSdBJyYmKHRhcmdldCYmdGFyZ2V0IT09J19zZWxmJ3x8ZS5tZXRhS2V5fHxlLmN0cmxLZXl8fGUuc2hpZnRLZXl8fGUubmF0aXZlRXZlbnQmJmUubmF0aXZlRXZlbnQud2hpY2g9PT0yKSl7Ly8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxucmV0dXJuO312YXJ7aHJlZixhc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTtpZighaXNMb2NhbChocmVmKSl7Ly8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxucmV0dXJuO312YXJ7cGF0aG5hbWV9PXdpbmRvdy5sb2NhdGlvbjtocmVmPSgwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUsaHJlZik7YXM9YXM/KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxhcyk6aHJlZjtlLnByZXZlbnREZWZhdWx0KCk7Ly8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG52YXJ7c2Nyb2xsfT10aGlzLnByb3BzO2lmKHNjcm9sbD09bnVsbCl7c2Nyb2xsPWFzLmluZGV4T2YoJyMnKTwwO30vLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbl9yb3V0ZXIuZGVmYXVsdFt0aGlzLnByb3BzLnJlcGxhY2U/J3JlcGxhY2UnOidwdXNoJ10oaHJlZixhcyx7c2hhbGxvdzp0aGlzLnByb3BzLnNoYWxsb3d9KS50aGVuKHN1Y2Nlc3M9PntpZighc3VjY2VzcylyZXR1cm47aWYoc2Nyb2xsKXt3aW5kb3cuc2Nyb2xsVG8oMCwwKTtkb2N1bWVudC5ib2R5LmZvY3VzKCk7fX0pO307aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHByb3BzLnByZWZldGNoKXtjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO319dGhpcy5wPXByb3BzLnByZWZldGNoIT09ZmFsc2U7fWNvbXBvbmVudFdpbGxVbm1vdW50KCl7dGhpcy5jbGVhblVwTGlzdGVuZXJzKCk7fWdldFBhdGhzKCl7dmFye3BhdGhuYW1lfT13aW5kb3cubG9jYXRpb247dmFye2hyZWY6cGFyc2VkSHJlZixhczpwYXJzZWRBc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTt2YXIgcmVzb2x2ZWRIcmVmPSgwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUscGFyc2VkSHJlZik7cmV0dXJuW3Jlc29sdmVkSHJlZixwYXJzZWRBcz8oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLHBhcnNlZEFzKTpyZXNvbHZlZEhyZWZdO31oYW5kbGVSZWYocmVmKXtpZih0aGlzLnAmJkludGVyc2VjdGlvbk9ic2VydmVyJiZyZWYmJnJlZi50YWdOYW1lKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKTt2YXIgaXNQcmVmZXRjaGVkPXByZWZldGNoZWRbdGhpcy5nZXRQYXRocygpLmpvaW4oLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiclJyldO2lmKCFpc1ByZWZldGNoZWQpe3RoaXMuY2xlYW5VcExpc3RlbmVycz1saXN0ZW5Ub0ludGVyc2VjdGlvbnMocmVmLCgpPT57dGhpcy5wcmVmZXRjaCgpO30pO319fS8vIFRoZSBmdW5jdGlvbiBpcyBtZW1vaXplZCBzbyB0aGF0IG5vIGV4dHJhIGxpZmVjeWNsZXMgYXJlIG5lZWRlZFxuLy8gYXMgcGVyIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sXG5wcmVmZXRjaChvcHRpb25zKXtpZighdGhpcy5wfHx0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpcmV0dXJuOy8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbnZhciBwYXRocz10aGlzLmdldFBhdGhzKCk7Ly8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4vLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbl9yb3V0ZXIuZGVmYXVsdC5wcmVmZXRjaChwYXRoc1svKiBocmVmICovMF0scGF0aHNbLyogYXNQYXRoICovMV0sb3B0aW9ucykuY2F0Y2goZXJyPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpey8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbnRocm93IGVycjt9fSk7cHJlZmV0Y2hlZFtwYXRocy5qb2luKC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4nJScpXT10cnVlO31yZW5kZXIoKXt2YXJ7Y2hpbGRyZW59PXRoaXMucHJvcHM7dmFye2hyZWYsYXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7Ly8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG5pZih0eXBlb2YgY2hpbGRyZW49PT0nc3RyaW5nJyl7Y2hpbGRyZW49LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsbnVsbCxjaGlsZHJlbik7fS8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxudmFyIGNoaWxkPV9yZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTt2YXIgcHJvcHM9e3JlZjplbD0+e3RoaXMuaGFuZGxlUmVmKGVsKTtpZihjaGlsZCYmdHlwZW9mIGNoaWxkPT09J29iamVjdCcmJmNoaWxkLnJlZil7aWYodHlwZW9mIGNoaWxkLnJlZj09PSdmdW5jdGlvbicpY2hpbGQucmVmKGVsKTtlbHNlIGlmKHR5cGVvZiBjaGlsZC5yZWY9PT0nb2JqZWN0Jyl7Y2hpbGQucmVmLmN1cnJlbnQ9ZWw7fX19LG9uTW91c2VFbnRlcjplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXI9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7fXRoaXMucHJlZmV0Y2goe3ByaW9yaXR5OnRydWV9KTt9LG9uQ2xpY2s6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25DbGljaz09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uQ2xpY2soZSk7fWlmKCFlLmRlZmF1bHRQcmV2ZW50ZWQpe3RoaXMubGlua0NsaWNrZWQoZSk7fX19Oy8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG5pZih0aGlzLnByb3BzLnBhc3NIcmVmfHxjaGlsZC50eXBlPT09J2EnJiYhKCdocmVmJ2luIGNoaWxkLnByb3BzKSl7cHJvcHMuaHJlZj1hc3x8aHJlZjt9Ly8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5LlxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCl7dmFyIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0PXJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O2lmKHByb3BzLmhyZWYmJnR5cGVvZiBfX05FWFRfREFUQV9fIT09J3VuZGVmaW5lZCcmJl9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCl7cHJvcHMuaHJlZj1yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChwcm9wcy5ocmVmKTt9fXJldHVybiBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQscHJvcHMpO319aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXt2YXIgd2Fybj0oMCxfdXRpbHMuZXhlY09uY2UpKGNvbnNvbGUuZXJyb3IpOy8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxudmFyIFByb3BUeXBlcz1yZXF1aXJlKCdwcm9wLXR5cGVzJyk7dmFyIGV4YWN0PXJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKTsvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG5MaW5rLnByb3BUeXBlcz1leGFjdCh7aHJlZjpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLGFzOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsUHJvcFR5cGVzLm9iamVjdF0pLHByZWZldGNoOlByb3BUeXBlcy5ib29sLHJlcGxhY2U6UHJvcFR5cGVzLmJvb2wsc2hhbGxvdzpQcm9wVHlwZXMuYm9vbCxwYXNzSHJlZjpQcm9wVHlwZXMuYm9vbCxzY3JvbGw6UHJvcFR5cGVzLmJvb2wsY2hpbGRyZW46UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsKHByb3BzLHByb3BOYW1lKT0+e3ZhciB2YWx1ZT1wcm9wc1twcm9wTmFtZV07aWYodHlwZW9mIHZhbHVlPT09J3N0cmluZycpe3dhcm4oXCJXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+XCIpO31yZXR1cm4gbnVsbDt9XSkuaXNSZXF1aXJlZH0pO312YXIgX2RlZmF1bHQ9TGluaztleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlUm91dGVyPXVzZVJvdXRlcjtleHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZT1tYWtlUHVibGljUm91dGVySW5zdGFuY2U7ZXhwb3J0cy5jcmVhdGVSb3V0ZXI9ZXhwb3J0cy53aXRoUm91dGVyPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKSk7ZXhwb3J0cy5Sb3V0ZXI9X3JvdXRlcjIuZGVmYXVsdDtleHBvcnRzLk5leHRSb3V0ZXI9X3JvdXRlcjIuTmV4dFJvdXRlcjt2YXIgX3JvdXRlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dFwiKTt2YXIgX3dpdGhSb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7ZXhwb3J0cy53aXRoUm91dGVyPV93aXRoUm91dGVyLmRlZmF1bHQ7LyogZ2xvYmFsIHdpbmRvdyAqL3ZhciBzaW5nbGV0b25Sb3V0ZXI9e3JvdXRlcjpudWxsLC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG5yZWFkeUNhbGxiYWNrczpbXSxyZWFkeShjYil7aWYodGhpcy5yb3V0ZXIpcmV0dXJuIGNiKCk7aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXt0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO319fTsvLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG52YXIgdXJsUHJvcGVydHlGaWVsZHM9WydwYXRobmFtZScsJ3JvdXRlJywncXVlcnknLCdhc1BhdGgnLCdjb21wb25lbnRzJywnaXNGYWxsYmFjaycsJ2Jhc2VQYXRoJ107dmFyIHJvdXRlckV2ZW50cz1bJ3JvdXRlQ2hhbmdlU3RhcnQnLCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywncm91dGVDaGFuZ2VDb21wbGV0ZScsJ3JvdXRlQ2hhbmdlRXJyb3InLCdoYXNoQ2hhbmdlU3RhcnQnLCdoYXNoQ2hhbmdlQ29tcGxldGUnXTt2YXIgY29yZU1ldGhvZEZpZWxkcz1bJ3B1c2gnLCdyZXBsYWNlJywncmVsb2FkJywnYmFjaycsJ3ByZWZldGNoJywnYmVmb3JlUG9wU3RhdGUnXTsvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCdldmVudHMnLHtnZXQoKXtyZXR1cm4gX3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7fX0pO3VybFByb3BlcnR5RmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXt2YXIgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdO319KTt9KTtjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuO3NpbmdsZXRvblJvdXRlcltmaWVsZF09ZnVuY3Rpb24oKXt2YXIgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3VtZW50cyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LGZ1bmN0aW9uKCl7dmFyIGV2ZW50RmllbGQ9XCJvblwiK2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2V2ZW50LnN1YnN0cmluZygxKTt2YXIgX3NpbmdsZXRvblJvdXRlcj1zaW5nbGV0b25Sb3V0ZXI7aWYoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSl7dHJ5e19zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJndW1lbnRzKTt9Y2F0Y2goZXJyKXsvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuY29uc29sZS5lcnJvcihcIkVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiBcIitldmVudEZpZWxkKTsvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuY29uc29sZS5lcnJvcihlcnIubWVzc2FnZStcIlxcblwiK2Vyci5zdGFjayk7fX19KTt9KTt9KTtmdW5jdGlvbiBnZXRSb3V0ZXIoKXtpZighc2luZ2xldG9uUm91dGVyLnJvdXRlcil7dmFyIG1lc3NhZ2U9J05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nKydZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG52YXIgY3JlYXRlUm91dGVyPWZ1bmN0aW9uIGNyZWF0ZVJvdXRlcigpe2Zvcih2YXIgX2xlbj1hcmd1bWVudHMubGVuZ3RoLGFyZ3M9bmV3IEFycmF5KF9sZW4pLF9rZXk9MDtfa2V5PF9sZW47X2tleSsrKXthcmdzW19rZXldPWFyZ3VtZW50c1tfa2V5XTt9c2luZ2xldG9uUm91dGVyLnJvdXRlcj1uZXcgX3JvdXRlcjIuZGVmYXVsdCguLi5hcmdzKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaChjYj0+Y2IoKSk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzPVtdO3JldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO307Ly8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0cy5jcmVhdGVSb3V0ZXI9Y3JlYXRlUm91dGVyO2Z1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpe3ZhciBfcm91dGVyPXJvdXRlcjt2YXIgaW5zdGFuY2U9e307Zm9yKHZhciBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7aWYodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldPT09J29iamVjdCcpe2luc3RhbmNlW3Byb3BlcnR5XT1PYmplY3QuYXNzaWduKHt9LF9yb3V0ZXJbcHJvcGVydHldKTsvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuY29udGludWU7fWluc3RhbmNlW3Byb3BlcnR5XT1fcm91dGVyW3Byb3BlcnR5XTt9Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuaW5zdGFuY2UuZXZlbnRzPV9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+e2luc3RhbmNlW2ZpZWxkXT1mdW5jdGlvbigpe3JldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmd1bWVudHMpO307fSk7cmV0dXJuIGluc3RhbmNlO30iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXdpdGhSb3V0ZXI7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4vcm91dGVyXCIpO2Z1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpe2Z1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCxPYmplY3QuYXNzaWduKHtyb3V0ZXI6KDAsX3JvdXRlci51c2VSb3V0ZXIpKCl9LHByb3BzKSk7fVdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG47V2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt2YXIgbmFtZT1Db21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9zZWRDb21wb25lbnQubmFtZXx8J1Vua25vd24nO1dpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lPVwid2l0aFJvdXRlcihcIituYW1lK1wiKVwiO31yZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7fSIsIlwidXNlIHN0cmljdFwiO1xuLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBtaXR0KCkge1xuICAgIGNvbnN0IGFsbCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb24odHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgKGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpO1xuICAgICAgICB9LFxuICAgICAgICBvZmYodHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgICAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVtaXQodHlwZSwgLi4uZXZ0cykge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgKGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKC4uLmV2dHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IG1pdHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbmNvbnN0IG1pdHRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgaXNfZHluYW1pY18xID0gcmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTtcbmNvbnN0IHJvdXRlX21hdGNoZXJfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7XG5jb25zdCByb3V0ZV9yZWdleF8xID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5jb25zdCBiYXNlUGF0aCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggfHwgJyc7XG5mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgIT09IDAgPyBiYXNlUGF0aCArIHBhdGggOiBwYXRoO1xufVxuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpID09PSAwXG4gICAgICAgID8gcGF0aC5zdWJzdHIoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbiAgICAgICAgOiBwYXRoO1xufVxuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZnVuY3Rpb24gdG9Sb3V0ZShwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLyc7XG59XG5jb25zdCBwcmVwYXJlUm91dGUgPSAocGF0aCkgPT4gdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpO1xuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIGlzU2VydmVyUmVuZGVyLCBjYikge1xuICAgIGxldCBhdHRlbXB0cyA9IGlzU2VydmVyUmVuZGVyID8gMyA6IDE7XG4gICAgZnVuY3Rpb24gZ2V0UmVzcG9uc2UoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaCh1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgICAgYC9fbmV4dC9kYXRhLyR7X19ORVhUX0RBVEFfXy5idWlsZElkfSR7ZGVsQmFzZVBhdGgocGF0aG5hbWUpfS5qc29uYCksXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSksIHtcbiAgICAgICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgaWYgKC0tYXR0ZW1wdHMgPiAwICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhO1xuICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBlcnIuY29kZSA9ICdQQUdFX0xPQURfRVJST1InO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUsIHF1ZXJ5LCBhcywgeyBpbml0aWFsUHJvcHMsIHBhZ2VMb2FkZXIsIEFwcCwgd3JhcEFwcCwgQ29tcG9uZW50LCBlcnIsIHN1YnNjcmlwdGlvbiwgaXNGYWxsYmFjaywgfSkge1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHt9O1xuICAgICAgICB0aGlzLm9uUG9wU3RhdGUgPSAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAgICAgICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAgICAgICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgICAgICAgICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAgICAgICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAgICAgICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsIHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksIHV0aWxzXzEuZ2V0VVJMKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgICAgICAgICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgICAgICAgICBpZiAoZS5zdGF0ZSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuaXNTc3IgJiZcbiAgICAgICAgICAgICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgICAgICAgICAgIHVybF8xLnBhcnNlKGUuc3RhdGUudXJsKS5wYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAgICAgICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgICAgICAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IGUuc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgYXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignYHBvcHN0YXRlYCBldmVudCB0cmlnZ2VyZWQgYnV0IGBldmVudC5zdGF0ZWAgZGlkIG5vdCBoYXZlIGB1cmxgIG9yIGBhc2AgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9nZXRTdGF0aWNEYXRhID0gKGFzUGF0aCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUodXJsXzEucGFyc2UoYXNQYXRoKS5wYXRobmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgICAgICAgICAgICA/IFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1twYXRobmFtZV0pXG4gICAgICAgICAgICAgICAgOiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBudWxsLCB0aGlzLmlzU3NyLCBkYXRhID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldFNlcnZlckRhdGEgPSAoYXNQYXRoKSA9PiB7XG4gICAgICAgICAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHVybF8xLnBhcnNlKGFzUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXRobmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIHRoaXMuaXNTc3IpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0ge307XG4gICAgICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAgICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgICAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH07XG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50cztcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlcjtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgICAgIHRoaXMuYXNQYXRoID1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgICAgIGlzX2R5bmFtaWNfMS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhcztcbiAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgICAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcDtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgICAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICB0aGlzLmlzU3NyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFjaztcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgICAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsIHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksIGFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICAgIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O1xuICAgICAgICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZShyb3V0ZSwgbW9kKSB7XG4gICAgICAgIGNvbnN0IENvbXBvbmVudCA9IG1vZC5kZWZhdWx0IHx8IG1vZDtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRhdGEpLCB7IENvbXBvbmVudCwgX19OX1NTRzogbW9kLl9fTl9TU0csIF9fTl9TU1A6IG1vZC5fX05fU1NQIH0pO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YTtcbiAgICAgICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICAgKi9cbiAgICBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAgICovXG4gICAgcHVzaCh1cmwsIGFzID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICAgKi9cbiAgICByZXBsYWNlKHVybCwgYXMgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBjaGFuZ2UobWV0aG9kLCBfdXJsLCBfYXMsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgICAgIGlmICh1dGlsc18xLlNUKSB7XG4gICAgICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgICAgICAgICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICAgICAgICAgIGxldCB1cmwgPSB0eXBlb2YgX3VybCA9PT0gJ29iamVjdCcgPyB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKF91cmwpIDogX3VybDtcbiAgICAgICAgICAgIGxldCBhcyA9IHR5cGVvZiBfYXMgPT09ICdvYmplY3QnID8gdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbihfYXMpIDogX2FzO1xuICAgICAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKTtcbiAgICAgICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYXMpO1xuICAgICAgICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAgICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgICAgICAgICBpZiAoX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKGFzKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAgICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4gICAgICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAgICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShhcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcyk7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSwgcHJvdG9jb2wgfSA9IHVybF8xLnBhcnNlKHVybCwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAgICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoYXMpKSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoaXNfZHluYW1pY18xLmlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHVybF8xLnBhcnNlKGFzKTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gcm91dGVfcmVnZXhfMS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gcm91dGVfbWF0Y2hlcl8xLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIocGFyYW0gPT4gIXF1ZXJ5W3BhcmFtXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKTtcbiAgICAgICAgICAgIC8vIElmIHNoYWxsb3cgaXMgdHJ1ZSBhbmQgdGhlIHJvdXRlIGV4aXN0cyBpbiB0aGUgcm91dGVyIGNhY2hlIHdlIHJldXNlIHRoZSBwcmV2aW91cyByZXN1bHRcbiAgICAgICAgICAgIHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93KS50aGVuKHJvdXRlSW5mbyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFwcENvbXAgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IHV0aWxzXzEuZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93ID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSBzaGFsbG93IHJvdXRlIHRyYW5zaXRpb24gcG9zc2libGVcbiAgICAgICAgLy8gSWYgdGhlIHJvdXRlIGlzIGFscmVhZHkgcmVuZGVyZWQgb24gdGhlIHNjcmVlbi5cbiAgICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoZXJyLCBsb2FkRXJyb3JGYWlsKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVyci5jb2RlID09PSAnUEFHRV9MT0FEX0VSUk9SJyB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvLCB3ZSBuZWVkIHRvIG1hcmsgaXQgYXMgYSBjYW5jZWxsZWQgZXJyb3IgYW5kIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gcmVzO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocHJvcHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBnaXBFcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGNhY2hlZFJvdXRlSW5mbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKHJlcyA9PiByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgICB9KSwgcmVqZWN0KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXREYXRhKCgpID0+IF9fTl9TU0dcbiAgICAgICAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoYXMpXG4gICAgICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShhcylcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIFxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgfSkpLnRoZW4ocHJvcHMgPT4ge1xuICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKTtcbiAgICB9XG4gICAgc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICB0aGlzLm5vdGlmeShkYXRhKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgICAqL1xuICAgIGJlZm9yZVBvcFN0YXRlKGNiKSB7XG4gICAgICAgIHRoaXMuX2JwcyA9IGNiO1xuICAgIH1cbiAgICBvbmx5QUhhc2hDaGFuZ2UoYXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFzUGF0aClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpO1xuICAgICAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICAgICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgICAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgICAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgICAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgICAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaDtcbiAgICB9XG4gICAgc2Nyb2xsVG9IYXNoKGFzKSB7XG4gICAgICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgICAqL1xuICAgIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHByb3RvY29sIH0gPSB1cmxfMS5wYXJzZSh1cmwpO1xuICAgICAgICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpO1xuICAgICAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgICAgICAgICBdKS50aGVuKCgpID0+IHJlc29sdmUoKSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJvdXRlID0gZGVsQmFzZVBhdGgocm91dGUpO1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO1xuICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7XG4gICAgICAgICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0O1xuICAgIH1cbiAgICBfZ2V0RGF0YShmbikge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xjID0gY2FuY2VsO1xuICAgICAgICByZXR1cm4gZm4oKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddO1xuICAgICAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiB1dGlsc18xLmxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLCB7XG4gICAgICAgICAgICBBcHBUcmVlLFxuICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgICAgICAgY3R4LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWJvcnRDb21wb25lbnRMb2FkKGFzKSB7XG4gICAgICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyk7XG4gICAgICAgICAgICBlLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlLCBhcyk7XG4gICAgICAgICAgICB0aGlzLmNsYygpO1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5vdGlmeShkYXRhKSB7XG4gICAgICAgIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFJvdXRlcjtcblJvdXRlci5ldmVudHMgPSBtaXR0XzEuZGVmYXVsdCgpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS87XG5mdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZSkge1xuICAgIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpO1xufVxuZXhwb3J0cy5pc0R5bmFtaWNSb3V0ZSA9IGlzRHluYW1pY1JvdXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkge1xuICAgIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleDtcbiAgICByZXR1cm4gKHBhdGhuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVjb2RlID0gKHBhcmFtKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKTtcbiAgICAgICAgICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJztcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXTtcbiAgICAgICAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXTtcbiAgICAgICAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcChlbnRyeSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgICAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGRlY29kZShtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfTtcbn1cbmV4cG9ydHMuZ2V0Um91dGVNYXRjaGVyID0gZ2V0Um91dGVNYXRjaGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKTtcbn1cbmZ1bmN0aW9uIGdldFJvdXRlUmVnZXgobm9ybWFsaXplZFJvdXRlKSB7XG4gICAgLy8gRXNjYXBlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgY291bGQgYmUgY29uc2lkZXJlZCBSZWdFeFxuICAgIGNvbnN0IGVzY2FwZWRSb3V0ZSA9IGVzY2FwZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJyk7XG4gICAgY29uc3QgZ3JvdXBzID0ge307XG4gICAgbGV0IGdyb3VwSW5kZXggPSAxO1xuICAgIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csIChfLCAkMSkgPT4ge1xuICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpO1xuICAgICAgICBncm91cHNbJDFcbiAgICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIF0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQ6IGlzQ2F0Y2hBbGwgfTtcbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGwgPyAnLyguKz8pJyA6ICcvKFteL10rPyknO1xuICAgIH0pO1xuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZTtcbiAgICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csIChfLCAkMSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKTtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9ICQxXG4gICAgICAgICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJyk7XG4gICAgICAgICAgICByZXR1cm4gaXNDYXRjaEFsbFxuICAgICAgICAgICAgICAgID8gYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9Pi4rPylgXG4gICAgICAgICAgICAgICAgOiBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+W14vXSs/KWA7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7IHJlOiBuZXcgUmVnRXhwKCdeJyArIHBhcmFtZXRlcml6ZWRSb3V0ZSArICcoPzovKT8kJywgJ2knKSwgZ3JvdXBzIH0sIChuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZVxuICAgICAgICA/IHtcbiAgICAgICAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICAgICAgfVxuICAgICAgICA6IHt9KSk7XG59XG5leHBvcnRzLmdldFJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCJ1cmxcIik7XG4vKipcbiAqIFV0aWxzXG4gKi9cbmZ1bmN0aW9uIGV4ZWNPbmNlKGZuKSB7XG4gICAgbGV0IHVzZWQgPSBmYWxzZTtcbiAgICBsZXQgcmVzdWx0O1xuICAgIHJldHVybiAoKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgaWYgKCF1c2VkKSB7XG4gICAgICAgICAgICB1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG59XG5leHBvcnRzLmV4ZWNPbmNlID0gZXhlY09uY2U7XG5mdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWA7XG59XG5leHBvcnRzLmdldExvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW47XG5mdW5jdGlvbiBnZXRVUkwoKSB7XG4gICAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk7XG59XG5leHBvcnRzLmdldFVSTCA9IGdldFVSTDtcbmZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCkge1xuICAgIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgICAgICA/IENvbXBvbmVudFxuICAgICAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG59XG5leHBvcnRzLmdldERpc3BsYXlOYW1lID0gZ2V0RGlzcGxheU5hbWU7XG5mdW5jdGlvbiBpc1Jlc1NlbnQocmVzKSB7XG4gICAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnQ7XG59XG5leHBvcnRzLmlzUmVzU2VudCA9IGlzUmVzU2VudDtcbmFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLCBjdHgpIHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKChfYSA9IEFwcC5wcm90b3R5cGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmA7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICAgIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpO1xuICAgIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgICAgIHJldHVybiBwcm9wcztcbiAgICB9XG4gICAgaWYgKCFwcm9wcykge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmA7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtnZXREaXNwbGF5TmFtZShBcHApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcHM7XG59XG5leHBvcnRzLmxvYWRHZXRJbml0aWFsUHJvcHMgPSBsb2FkR2V0SW5pdGlhbFByb3BzO1xuZXhwb3J0cy51cmxPYmplY3RLZXlzID0gW1xuICAgICdhdXRoJyxcbiAgICAnaGFzaCcsXG4gICAgJ2hvc3QnLFxuICAgICdob3N0bmFtZScsXG4gICAgJ2hyZWYnLFxuICAgICdwYXRoJyxcbiAgICAncGF0aG5hbWUnLFxuICAgICdwb3J0JyxcbiAgICAncHJvdG9jb2wnLFxuICAgICdxdWVyeScsXG4gICAgJ3NlYXJjaCcsXG4gICAgJ3NsYXNoZXMnLFxuXTtcbmZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCwgb3B0aW9ucykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXhwb3J0cy51cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1cmxfMS5mb3JtYXQodXJsLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuZm9ybWF0V2l0aFZhbGlkYXRpb24gPSBmb3JtYXRXaXRoVmFsaWRhdGlvbjtcbmV4cG9ydHMuU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnO1xuZXhwb3J0cy5TVCA9IGV4cG9ydHMuU1AgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgTmV3TGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTmV3TGF5b3V0J1xuaW1wb3J0IE1vYmlsZUxheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL01vYmlsZUxheW91dCdcbmltcG9ydCBNb2JpbGVDYXJvdXNlbCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL01vYmlsZUNhcm91c2VsJ1xuaW1wb3J0IEZ1bGxEZXRhaWxzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvRnVsbERldGFpbHMnXG5pbXBvcnQgRGV0YWlscyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0RldGFpbHMnXG5pbXBvcnQgTmV3RGV0YWlscyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL05ld0RldGFpbHMnXG5pbXBvcnQgRG91Z2hudXRDaGFydCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0RvdWdobnV0Q2hhcnQnXG5cblxuY29uc3QgSkNUQlRZID0gKHsgZGF0YSwgc2l0ZXMgfSkgPT4gKFxuICAgIDxOZXdMYXlvdXQgXG4gICAgICBzaXRlcz17IHNpdGVzLm1hcCgoc2l0ZSwgaSkgPT4gPGxpIGtleT17aX0+PExpbmsgaHJlZj17YC9qY3QvJHtzaXRlLkJBVFRFUlkudG9Mb3dlckNhc2UoKX1gfT48YT57c2l0ZS5CQVRURVJZfTwvYT48L0xpbms+PC9saT4pIH0gXG4gICAgICBjb21wYW55PXtcImpjdFwifSBcbiAgICAgIHNpdGVuYW1lPXtcIkJUWVwifSBcbiAgICAgIGRhdGU9e2RhdGFbMF0ubURhdGV9IFxuICAgICAgdGltZT17ZGF0YVswXS5tVGltZX1cbiAgICA+XG4gICAgICA8TmV3RGV0YWlscyBcbiAgICAgICAgcmVzb3VyY2VUeXBlPVwiV2F0ZXJcIlxuICAgICAgICB0UHVtcE9uPXtkYXRhWzBdLlYzfVxuICAgICAgICB0UHVtcE9mZj17ZGF0YVswXS5WNH1cbiAgICAgICAgYWxhcm1Pbj17ZGF0YVswXS5WNX1cbiAgICAgICAgYWxhcm1PZmY9e2RhdGFbMF0uVjZ9XG4gICAgICA+XG4gICAgICAgIDxEb3VnaG51dENoYXJ0IG5hbWU9e2RhdGFbMF0uUzF9IGN1cnJlbnRWYWx1ZT17ZGF0YVswXS5WMX0gdG90YWxWYWx1ZT17MTZ9IHVuaXRPZk1lYXN1cmU9e2RhdGFbMF0uUzIudG9Mb3dlckNhc2UoKX0gLz5cbiAgICAgICAgPERvdWdobnV0Q2hhcnQgbmFtZT17ZGF0YVswXS5TNX0gY3VycmVudFZhbHVlPXtkYXRhWzBdLlY5fSB0b3RhbFZhbHVlPXsxNn0gdW5pdE9mTWVhc3VyZT17ZGF0YVswXS5TNi50b0xvd2VyQ2FzZSgpfSAvPlxuICAgICAgICA8RG91Z2hudXRDaGFydCBuYW1lPXtkYXRhWzBdLlM3fSBjdXJyZW50VmFsdWU9e2RhdGFbMF0uVjEwfSB0b3RhbFZhbHVlPXsxNn0gdW5pdE9mTWVhc3VyZT17ZGF0YVswXS5TOC50b0xvd2VyQ2FzZSgpfSAvPlxuICAgICAgPC9OZXdEZXRhaWxzPlxuXG4gICAgICA8TmV3RGV0YWlscyBcbiAgICAgICAgcmVzb3VyY2VUeXBlPVwiT2lsXCJcbiAgICAgICAgdFB1bXBPbj17ZGF0YVswXS5WM31cbiAgICAgICAgdFB1bXBPZmY9e2RhdGFbMF0uVjR9XG4gICAgICAgIGFsYXJtT249e2RhdGFbMF0uVjV9XG4gICAgICAgIGFsYXJtT2ZmPXtkYXRhWzBdLlY2fVxuICAgICAgPlxuICAgICAgICA8RG91Z2hudXRDaGFydCBuYW1lPXtkYXRhWzBdLlMzfSBjdXJyZW50VmFsdWU9e2RhdGFbMF0uVjZ9IHRvdGFsVmFsdWU9ezE2fSB1bml0T2ZNZWFzdXJlPXtkYXRhWzBdLlM0LnRvTG93ZXJDYXNlKCl9IC8+XG4gICAgICAgIDxEb3VnaG51dENoYXJ0IG5hbWU9e2RhdGFbMF0uUzl9IGN1cnJlbnRWYWx1ZT17ZGF0YVswXS5WMTF9IHRvdGFsVmFsdWU9ezE2fSB1bml0T2ZNZWFzdXJlPXtkYXRhWzBdLlMxMC50b0xvd2VyQ2FzZSgpfSAvPlxuICAgICAgICA8RG91Z2hudXRDaGFydCBuYW1lPXtkYXRhWzBdLlMxMX0gY3VycmVudFZhbHVlPXtkYXRhWzBdLlYxMn0gdG90YWxWYWx1ZT17MTZ9IHVuaXRPZk1lYXN1cmU9e2RhdGFbMF0uUzEyLnRvTG93ZXJDYXNlKCl9IC8+XG4gICAgICA8L05ld0RldGFpbHM+XG5cbiAgICAgIDxOZXdEZXRhaWxzIFxuICAgICAgICByZXNvdXJjZVR5cGU9XCJBdXhcIiBcbiAgICAgICAgLy8gdFB1bXBPbj17ZGF0YVswXS5WM31cbiAgICAgICAgLy8gdFB1bXBPZmY9e2RhdGFbMF0uVjR9XG4gICAgICAgIC8vIGFsYXJtT249e2RhdGFbMF0uVjV9XG4gICAgICAgIC8vIGFsYXJtT2ZmPXtkYXRhWzBdLlY2fVxuICAgICAgPlxuICAgICAgICA8RG91Z2hudXRDaGFydCBuYW1lPXtkYXRhWzBdLlMxM30gY3VycmVudFZhbHVlPXtkYXRhWzBdLlYxM30gdG90YWxWYWx1ZT17MTZ9IHVuaXRPZk1lYXN1cmU9e2RhdGFbMF0uUzE0LnRvTG93ZXJDYXNlKCl9IC8+XG4gICAgICAgIDxEb3VnaG51dENoYXJ0IG5hbWU9e2RhdGFbMF0uUzE1fSBjdXJyZW50VmFsdWU9e2RhdGFbMF0uVjE0fSB0b3RhbFZhbHVlPXsxNn0gdW5pdE9mTWVhc3VyZT17ZGF0YVswXS5TMTYudG9Mb3dlckNhc2UoKX0gLz5cbiAgICAgIDwvTmV3RGV0YWlscz5cblxuICAgIDwvTmV3TGF5b3V0PlxuKVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGN0eCl7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vamN0LXN5c3RlbXMuY29tL2FwaS9qY3RidHlgKVxuICBjb25zdCByZXMxID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvamN0YClcbiAgXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICBjb25zdCBzaXRlcyA9IGF3YWl0IHJlczEuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgZGF0YSwgc2l0ZXMsIGlzTW9iaWxlVmlldzogZmFsc2UgfVxuICB9XG59IFxuXG5cbmV4cG9ydCBkZWZhdWx0IEpDVEJUWSIsImNvbnN0IGNvbG9yID0ge1xuICBqY3RPcmFuZ2U6ICcjZmY3ZTI2JyxcbiAgamN0V2hpdGU6ICcjZmNmY2ZjJyxcbiAgamN0RGFya0dyYXk6ICcjMjkyOTI5JyxcbiAgamN0TGlnaHRHcmF5OiAnI2EyYTJhMidcbn1cblxuY29uc3Qgc2l6ZSA9IHtcbiAgbW9iaWxlUzogJzMyMHB4JyxcbiAgbW9iaWxlTTogJzM3NXB4JyxcbiAgbW9iaWxlTDogJzQyNXB4JyxcbiAgdGFibGV0UDogJzYwMHB4JyxcbiAgdGFibGV0TDogJzkwMHB4JyxcbiAgbGFwdG9wOiAnMTAyNHB4JyxcbiAgbGFwdG9wTTogJzEyMDBweCcsXG4gIGxhcHRvcEw6ICcxNDQwcHgnLFxuICBkZXNrdG9wOiAnMjU2MHB4J1xufVxuXG5jb25zdCBzdGFuZGFyZCA9IHtcbiAgbW9iaWxlUzogYG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3NpemUubW9iaWxlU30pIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxKWAsXG4gIG1vYmlsZU06IGBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtzaXplLm1vYmlsZU19KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMSlgLFxuICBtb2JpbGVMOiBgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7c2l6ZS5tb2JpbGVMfSkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEpYCxcbiAgdGFibGV0UDogYG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3NpemUudGFibGV0UH0pIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxKWAsXG4gIHRhYmxldEw6IGBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtzaXplLnRhYmxldEx9KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMSlgLFxuICBsYXB0b3A6IGBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtzaXplLmxhcHRvcH0pIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxKWAsXG4gIGxhcHRvcE06IGBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtzaXplLmxhcHRvcE19KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMSlgLFxuICBsYXB0b3BMOiBgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7c2l6ZS5sYXB0b3BMfSkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEpYCxcbiAgZGVza3RvcDogYG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3NpemUuZGVza3RvcH0pIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxKWAsXG59O1xuXG5jb25zdCByZXRpbmEgPSB7XG4gIG1vYmlsZTogYG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke3NpemUubW9iaWxlTH0pIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKWAsXG4gIG1vYmlsZVM6IGBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtzaXplLm1vYmlsZVN9KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilgLFxuICBtb2JpbGVNOiBgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7c2l6ZS5tb2JpbGVNfSkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpYCxcbiAgbW9iaWxlTDogYG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3NpemUubW9iaWxlTH0pIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKWAsXG4gIHRhYmxldDogYG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3NpemUudGFibGV0fSkgYW5kIChtYXgtd2lkdGg6ICR7c2l6ZS5sYXB0b3B9KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilgLFxuICBsYXB0b3A6IGBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtzaXplLmxhcHRvcH0pIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKWAsXG4gIGxhcHRvcE06IGBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtzaXplLmxhcHRvcE19KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilgLFxuICBsYXB0b3BMOiBgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7c2l6ZS5sYXB0b3BMfSkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpYCxcbiAgZGVza3RvcDogYG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3NpemUuZGVza3RvcH0pIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKWAsXG59O1xuXG5leHBvcnQgeyBzdGFuZGFyZCwgcmV0aW5hLCBjb2xvciB9IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy11bmZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm51a2EtY2Fyb3VzZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNoYXJ0anMtMlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==