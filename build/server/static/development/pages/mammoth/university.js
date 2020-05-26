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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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

/***/ "./pages/mammoth/university/index.js":
/*!*******************************************!*\
  !*** ./pages/mammoth/university/index.js ***!
  \*******************************************/
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
/* harmony import */ var _components_FullDetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/FullDetails */ "./components/FullDetails.js");
/* harmony import */ var _components_Details__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Details */ "./components/Details.js");
/* harmony import */ var _components_NewDetails__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/NewDetails */ "./components/NewDetails.js");
/* harmony import */ var _components_DoughnutChart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/DoughnutChart */ "./components/DoughnutChart.js");
var _jsxFileName = "/Users/cor-eee/Projects/jct-next/pages/mammoth/university/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const Home = ({
  data,
  sites,
  isMobileView
}) => // isMobileView ?
//   <MobileLayout company_name={"Mammoth"} site_name={"University"} date={data[0].mDate} time={`${data[0].mTime.substr(0, 4)} ${data[0].mTime.substr(-2)}`}>
//     <FullDetails 
//       name={data[0].S1} 
//       currentValue={data[0].V1}
//       totalValue={16}
//       unitOfMeasure={data[0].S2.toLowerCase()}
//       tPumpOn={data[0].V3}
//       tPumpOff={data[0].V4}
//       alarmOn={data[0].V5}
//       alarmOff={data[0].V6}
//     />
//     <Details 
//       name={data[0].S3} 
//       currentValue={data[0].V2}
//       totalValue={16}
//       unitOfMeasure={data[0].S4.toLowerCase()}
//     />
//   </MobileLayout>
//   :
// <NewLayout site_name={"University"} date={data[0].mDate} time={`${data[0].mTime.substr(0, 4)} ${data[0].mTime.substr(-2)}`}>
//   <FullDetails 
//     name={data[0].S1} 
//     currentValue={data[0].V1}
//     totalValue={16}
//     unitOfMeasure={data[0].S2.toLowerCase()}
//     tPumpOn={data[0].V3}
//     tPumpOff={data[0].V4}
//     alarmOn={data[0].V5}
//     alarmOff={data[0].V6}
//   />
//   <Details 
//     name={data[0].S3} 
//     currentValue={data[0].V2}
//     totalValue={16}
//     unitOfMeasure={data[0].S4.toLowerCase()}
//   />
// </NewLayout>
__jsx(_components_NewLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
  company: "mammoth",
  sites: sites.map((site, i) => __jsx("li", {
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 36
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: `/mammoth/${site.BATTERY.toLowerCase()}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 48
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 102
    }
  }, site.BATTERY)))),
  sitename: "University",
  date: data[0].mDate,
  time: data[0].mTime,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 3
  }
}, __jsx(_components_NewDetails__WEBPACK_IMPORTED_MODULE_9__["default"], {
  resourceType: "Water",
  name: data[0].S1,
  unitOfMeasure: data[0].S2.toLowerCase(),
  currentValue: data[0].V1,
  totalValue: 16,
  tpumpOn: data[0].V3,
  tpumpOff: data[0].V4,
  alarmOn: data[0].V5,
  alarmOff: data[0].V6,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }
}, __jsx(_components_DoughnutChart__WEBPACK_IMPORTED_MODULE_10__["default"], {
  name: data[0].S1,
  currentValue: data[0].V1,
  totalValue: 16,
  unitOfMeasure: data[0].S2.toLowerCase(),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 7
  }
}), __jsx(_components_DoughnutChart__WEBPACK_IMPORTED_MODULE_10__["default"], {
  name: data[0].S3,
  currentValue: data[0].V2,
  totalValue: 16,
  unitOfMeasure: data[0].S4.toLowerCase(),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 7
  }
})));

async function getServerSideProps(ctx) {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()('http://jct-systems.com/api/university');
  const data = await res.json();
  const res1 = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()('http://localhost:3001/api/mammoth');
  const sites = await res1.json();
  let isMobileView = ctx.req.headers['user-agent'].search(/Android|iPhone/i);

  if (isMobileView < 0) {
    return {
      props: {
        data,
        sites,
        isMobileView: false
      }
    };
  } else {
    return {
      props: {
        data,
        sites,
        isMobileView: true
      }
    };
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Home);

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

/***/ 6:
/*!*************************************************!*\
  !*** multi ./pages/mammoth/university/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/cor-eee/Projects/jct-next/pages/mammoth/university/index.js */"./pages/mammoth/university/index.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FsYXJtcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Eb3VnaG51dEFsYXJtcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RvdWdobnV0Q2hhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GdWxsRGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01vYmlsZUNhcm91c2VsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTW9iaWxlTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmV3QWxhcm1zLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmV3RGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05ld0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UcmVuZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbWl0dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL21hbW1vdGgvdW5pdmVyc2l0eS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvc2NyZWVuc2l6ZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy11bmZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJudWthLWNhcm91c2VsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWNoYXJ0anMtMlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJzdGFuZGFyZCIsInRhYmxldFAiLCJ0YWJsZXRMIiwiVGl0bGUiLCJoMyIsImNvbG9yIiwiamN0T3JhbmdlIiwicmV0aW5hIiwibGFwdG9wTSIsIkFsYXJtTGlzdCIsInVsIiwiQWxhcm1MaXN0SXRlbSIsImxpIiwiamN0TGlnaHRHcmF5IiwiQWxhcm1zIiwicHJvcHMiLCJ0aXRsZSIsIm9uIiwidW5kZWZpbmVkIiwidG9GaXhlZCIsIm9mZiIsIkRldGFpbHNDb250YWluZXIiLCJqY3RXaGl0ZSIsImRlc2t0b3AiLCJtb2JpbGUiLCJEZXRhaWxzTmFtZSIsImgxIiwiVW5kZXJsaW5lIiwiRGV0YWlscyIsIm5hbWUiLCJjdXJyZW50VmFsdWUiLCJ0b3RhbFZhbHVlIiwidW5pdE9mTWVhc3VyZSIsIkRvdWdobnV0QWxhcm1zIiwiYWxhcm1PbiIsImFsYXJtT2ZmIiwidFB1bXBPbiIsInRQdW1wT2ZmIiwiQWxhcm1zQ29udGFpbmVyIiwiRG91Z2hudXRDaGFydCIsImRhdGEiLCJkYXRhc2V0cyIsImJhY2tncm91bmRDb2xvciIsImN0eCIsImRhdGFzZXQiLCJib3JkZXJXaWR0aCIsImN1dG91dFBlcmNlbnRhZ2UiLCJyb3RhdGlvbiIsIk1hdGgiLCJQSSIsImNpcmN1bWZlcmVuY2UiLCJ0b29sdGlwcyIsImhvdmVyIiwiR3JhcGhDb250YWluZXIiLCJHcmFwaFRpdGxlIiwiR3JhcGgiLCJWb2x1bWUiLCJDdXJyZW50Vm9sdW1lIiwiamN0RGFya0dyYXkiLCJDdXJyZW50Vm9sdW1lTGFiZWwiLCJGdWxsRGV0YWlscyIsIk1haW5Db250YWluZXIiLCJtYWluIiwibGFwdG9wUyIsIkNvbXBhbnlDb250YWluZXIiLCJDb21wYW55TmFtZSIsInRhYmxldCIsIlNpdGVOYW1lIiwiaDIiLCJEYXRlVGltZSIsIlNpdGVEZXRhaWxzQ29udGFpbmVyIiwiTGF5b3V0IiwiY29tcGFueV9uYW1lIiwic2l0ZV9uYW1lIiwiZGF0ZSIsInRpbWUiLCJjaGlsZHJlbiIsIk1vYmlsZUNhcm91c2VsIiwiU3R5bGVkQ2Fyb3VzZWwiLCJDYXJvdXNlbCIsIk1vYmlsZU1haW5Db250YWluZXIiLCJNb2JpbGVDb21wYW55Q29udGFpbmVyIiwiTW9iaWxlQ29tcGFueU5hbWUiLCJNb2JpbGVTaXRlTmFtZSIsIk1vYmlsZUNhcm91c2VsQ29udGFpbmVyIiwiTW9iaWxlTGF5b3V0IiwiRGV0YWlsc0FsYXJtQ29udGFpbmVyIiwicCIsIkFsYXJtVGl0bGUiLCJBbGFybU9uT2ZmIiwiQWxhcm1Pbk9mZk51bSIsInNwYW4iLCJhbGFybVR5cGUiLCJOYW1lQWxhcm1zQ29udGFpbmVyIiwiRG91Z2hudXRDaGFydENvbnRhaW5lciIsInJlc291cmNlVHlwZSIsInRwdW1wT24iLCJ0cHVtcE9mZiIsIlNpdGVOYW1lVGltZSIsIlNpdGVEZXRhaWxzIiwiY29tcGFueSIsInNpdGVzIiwic2l0ZW5hbWUiLCJTaWRlYmFyQ29udGFpbmVyIiwiU2l0ZU5hdkNvbnRhaW5lciIsIlNpdGVMaW5rcyIsIm5hdiIsIlNpZGViYXIiLCJUcmVuZCIsImRlZmF1bHRzIiwiZ2xvYmFsIiwiZGVmYXVsdEZvbnRGYW1pbHkiLCJkZWZhdWx0Rm9udENvbG9yIiwiY2FudmFzIiwiZ2V0Q29udGV4dCIsImdyYWRpZW50IiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJsYWJlbHMiLCJtb24iLCJ0dWUiLCJ3ZWQiLCJ0aHUiLCJmcmkiLCJzYXQiLCJzdW4iLCJib3JkZXJDb2xvciIsInBvaW50QmFja2dyb3VuZENvbG9yIiwiY3ViaWNJbnRlcnBvbGF0aW9uTW9kZSIsImxlZ2VuZCIsInNjYWxlcyIsInlBeGVzIiwidGlja3MiLCJtaW4iLCJtYXgiLCJzdGVwU2l6ZSIsImRpc3BsYXkiLCJncmlkTGluZXMiLCJ4QXhlcyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfcmVhY3QiLCJfdXJsIiwiX3V0aWxzIiwiX3JvdXRlciIsIl9yb3V0ZXIyIiwiaXNMb2NhbCIsImhyZWYiLCJ1cmwiLCJwYXJzZSIsIm9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwiaG9zdCIsInByb3RvY29sIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRGdW5jIiwibGFzdEhyZWYiLCJsYXN0QXMiLCJsYXN0UmVzdWx0IiwiYXMiLCJyZXN1bHQiLCJmb3JtYXRVcmwiLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsIm9ic2VydmVyIiwibGlzdGVuZXJzIiwiTWFwIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiZ2V0T2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaGFzIiwidGFyZ2V0IiwiY2IiLCJnZXQiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwidW5vYnNlcnZlIiwiZGVsZXRlIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImVsIiwib2JzZXJ2ZSIsInNldCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIkxpbmsiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsImNsZWFuVXBMaXN0ZW5lcnMiLCJmb3JtYXRVcmxzIiwiYXNIcmVmIiwiYWRkQmFzZVBhdGgiLCJsaW5rQ2xpY2tlZCIsImUiLCJub2RlTmFtZSIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsInBhdGhuYW1lIiwibG9jYXRpb24iLCJyZXNvbHZlIiwicHJldmVudERlZmF1bHQiLCJzY3JvbGwiLCJpbmRleE9mIiwicmVwbGFjZSIsInNoYWxsb3ciLCJ0aGVuIiwic3VjY2VzcyIsInNjcm9sbFRvIiwiZG9jdW1lbnQiLCJib2R5IiwiZm9jdXMiLCJwcmVmZXRjaCIsIndhcm4iLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImdldFBhdGhzIiwicGFyc2VkSHJlZiIsInBhcnNlZEFzIiwicmVzb2x2ZWRIcmVmIiwiaGFuZGxlUmVmIiwicmVmIiwidGFnTmFtZSIsImlzUHJlZmV0Y2hlZCIsImpvaW4iLCJvcHRpb25zIiwicGF0aHMiLCJjYXRjaCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImN1cnJlbnQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwicGFzc0hyZWYiLCJ0eXBlIiwicHJvY2VzcyIsImNsb25lRWxlbWVudCIsImV4ZWNPbmNlIiwiUHJvcFR5cGVzIiwiZXhhY3QiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiYm9vbCIsImVsZW1lbnQiLCJwcm9wTmFtZSIsInZhbHVlIiwiX2RlZmF1bHQiLCJ1c2VSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJjcmVhdGVSb3V0ZXIiLCJ3aXRoUm91dGVyIiwiUm91dGVyIiwiTmV4dFJvdXRlciIsIl9yb3V0ZXJDb250ZXh0IiwiX3dpdGhSb3V0ZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsImFyZ3VtZW50cyIsImV2ZW50IiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIkVycm9yIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJfbGVuIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImluc3RhbmNlIiwicHJvcGVydHkiLCJhc3NpZ24iLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwibWl0dCIsImFsbCIsImNyZWF0ZSIsImhhbmRsZXIiLCJwdXNoIiwic3BsaWNlIiwiZW1pdCIsImV2dHMiLCJzbGljZSIsIm1hcCIsIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsInVybF8xIiwibWl0dF8xIiwidXRpbHNfMSIsImlzX2R5bmFtaWNfMSIsInJvdXRlX21hdGNoZXJfMSIsInJvdXRlX3JlZ2V4XzEiLCJiYXNlUGF0aCIsInBhdGgiLCJkZWxCYXNlUGF0aCIsInN1YnN0ciIsInRvUm91dGUiLCJwcmVwYXJlUm91dGUiLCJmZXRjaE5leHREYXRhIiwicXVlcnkiLCJpc1NlcnZlclJlbmRlciIsImF0dGVtcHRzIiwiZ2V0UmVzcG9uc2UiLCJmZXRjaCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJvayIsInN0YXR1cyIsImpzb24iLCJjb2RlIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwic2RjIiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJpc1NzciIsImFzUGF0aCIsIl9icHMiLCJfZ2V0U3RhdGljRGF0YSIsIlByb21pc2UiLCJfZ2V0U2VydmVyRGF0YSIsInJvdXRlIiwiY29tcG9uZW50cyIsIl9fTl9TU0ciLCJfX05fU1NQIiwiaXNEeW5hbWljUm91dGUiLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJfcmV3cml0ZVVybEZvck5leHRFeHBvcnQiLCJ1cGRhdGUiLCJuZXdEYXRhIiwibm90aWZ5IiwicmVsb2FkIiwiYmFjayIsImhpc3RvcnkiLCJjaGFuZ2UiLCJtZXRob2QiLCJfYXMiLCJyZWplY3QiLCJfaCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiYWJvcnRDb21wb25lbnRMb2FkIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwidXJsSXNOZXciLCJhc1BhdGhuYW1lIiwicm91dGVSZWdleCIsImdldFJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwiZ2V0Um91dGVNYXRjaGVyIiwibWlzc2luZ1BhcmFtcyIsImtleXMiLCJncm91cHMiLCJmaWx0ZXIiLCJwYXJhbSIsImdldFJvdXRlSW5mbyIsInJvdXRlSW5mbyIsImNhbmNlbGxlZCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwibG9hZEVycm9yRmFpbCIsImZldGNoQ29tcG9uZW50IiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsIl9nZXREYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic3BsaXQiLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaGFzaCIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwcmVmZXRjaERhdGEiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImZuIiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJURVNUX1JPVVRFIiwidGVzdCIsInJlIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIl8iLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwicmVwZWF0IiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJub3JtYWxpemVkUm91dGUiLCJlc2NhcGVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiJDEiLCJpc0NhdGNoQWxsIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJrZXkiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwidXNlZCIsImhvc3RuYW1lIiwicG9ydCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9hIiwicHJvdG90eXBlIiwicGFnZVByb3BzIiwidXJsT2JqZWN0S2V5cyIsImZvcm1hdCIsIlNQIiwibWVhc3VyZSIsIkhvbWUiLCJpc01vYmlsZVZpZXciLCJzaXRlIiwiaSIsIkJBVFRFUlkiLCJ0b0xvd2VyQ2FzZSIsIm1EYXRlIiwibVRpbWUiLCJTMSIsIlMyIiwiVjEiLCJWMyIsIlY0IiwiVjUiLCJWNiIsIlMzIiwiVjIiLCJTNCIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlczEiLCJyZXEiLCJoZWFkZXJzIiwic2VhcmNoIiwic2l6ZSIsIm1vYmlsZVMiLCJtb2JpbGVNIiwibW9iaWxlTCIsImxhcHRvcCIsImxhcHRvcEwiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3RTs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxtR0FJSkMsNERBQVEsQ0FBQ0MsT0FKTCxFQVFKRCw0REFBUSxDQUFDRSxPQVJMLENBQWY7QUFhQSxNQUFNQyxLQUFLLEdBQUdMLHdEQUFNLENBQUNNLEVBQVY7QUFBQTtBQUFBO0FBQUEscUtBRUFDLHlEQUFLLENBQUNDLFNBRk4sRUFNQU4sNERBQVEsQ0FBQ0MsT0FOVCxFQVNBRCw0REFBUSxDQUFDRSxPQVRULEVBYUFLLDBEQUFNLENBQUNDLE9BYlAsQ0FBWDtBQWtCQSxNQUFNQyxTQUFTLEdBQUdYLHdEQUFNLENBQUNZLEVBQVY7QUFBQTtBQUFBO0FBQUEsMkNBQWY7QUFLQSxNQUFNQyxhQUFhLEdBQUdiLHdEQUFNLENBQUNjLEVBQVY7QUFBQTtBQUFBO0FBQUEsb0pBQ1JQLHlEQUFLLENBQUNRLFlBREUsRUFLUmIsNERBQVEsQ0FBQ0MsT0FMRCxFQVNSRCw0REFBUSxDQUFDRSxPQVRELEVBYVJLLDBEQUFNLENBQUNDLE9BYkMsQ0FBbkI7O0FBbUJBLE1BQU1NLE1BQU0sR0FBR0MsS0FBSyxJQUNsQixNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQVFBLEtBQUssQ0FBQ0MsS0FBZCxDQURGLEVBR0UsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFxQkQsS0FBSyxDQUFDRSxFQUFOLEtBQWFDLFNBQWIsR0FBeUJILEtBQUssQ0FBQ0UsRUFBTixDQUFTRSxPQUFULENBQWlCLENBQWpCLENBQXpCLEdBQStDSixLQUFLLENBQUNFLEVBQTFFLENBREYsRUFFRSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFzQkYsS0FBSyxDQUFDSyxHQUFOLEtBQWNGLFNBQWQsR0FBMEJILEtBQUssQ0FBQ0ssR0FBTixDQUFVRCxPQUFWLENBQWtCLENBQWxCLENBQTFCLEdBQWlESixLQUFLLENBQUNLLEdBQTdFLENBRkYsQ0FIRixDQURGOztBQVdlTixxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JFQTtBQUNBO0FBRUE7QUFDQTtBQUVBLE1BQU1PLGdCQUFnQixHQUFHdkIsd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxvSkFHQU0seURBQUssQ0FBQ2lCLFFBSE4sRUFLWHRCLDREQUFRLENBQUN1QixPQUxFLEVBVVhoQiwwREFBTSxDQUFDaUIsTUFWSSxDQUF0QjtBQWVBLE1BQU1DLFdBQVcsR0FBRzNCLHdEQUFNLENBQUM0QixFQUFWO0FBQUE7QUFBQTtBQUFBLDhKQU1OMUIsNERBQVEsQ0FBQ0MsT0FOSCxFQVVORCw0REFBUSxDQUFDRSxPQVZILEVBY05LLDBEQUFNLENBQUNDLE9BZEQsQ0FBakI7QUFtQkEsTUFBTW1CLFNBQVMsR0FBRzdCLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMEVBQWY7O0FBTUEsTUFBTTZCLE9BQU8sR0FBR2IsS0FBSyxJQUNuQixNQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFjQSxLQUFLLENBQUNjLElBQXBCLENBREYsRUFFRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUZGLEVBR0UsTUFBQyxzREFBRDtBQUFlLGNBQVksRUFBRWQsS0FBSyxDQUFDZSxZQUFuQztBQUFpRCxZQUFVLEVBQUVmLEtBQUssQ0FBQ2dCLFVBQW5FO0FBQStFLGVBQWEsRUFBRWhCLEtBQUssQ0FBQ2lCLGFBQXBHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFIRixDQURGOztBQWlCZUosc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9EQTtBQUVBO0FBQ0E7O0FBR0EsTUFBTUssY0FBYyxHQUFHbEIsS0FBSyxJQUMxQixNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsc0RBQUQ7QUFBZSxjQUFZLEVBQUVBLEtBQUssQ0FBQ2UsWUFBbkM7QUFBaUQsWUFBVSxFQUFFZixLQUFLLENBQUNnQixVQUFuRTtBQUErRSxlQUFhLEVBQUVoQixLQUFLLENBQUNpQixhQUFwRztBQUFtSCxTQUFPLEVBQUVqQixLQUFLLENBQUNtQixPQUFsSTtBQUEySSxVQUFRLEVBQUVuQixLQUFLLENBQUNvQixRQUEzSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsRUFFRSxNQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsK0NBQUQ7QUFBUSxPQUFLLEVBQUMsZUFBZDtBQUE4QixJQUFFLEVBQUVwQixLQUFLLENBQUNxQixPQUF4QztBQUFpRCxLQUFHLEVBQUVyQixLQUFLLENBQUNzQixRQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsRUFFRSxNQUFDLCtDQUFEO0FBQVEsT0FBSyxFQUFDLE9BQWQ7QUFBc0IsSUFBRSxFQUFFdEIsS0FBSyxDQUFDbUIsT0FBaEM7QUFBeUMsS0FBRyxFQUFFbkIsS0FBSyxDQUFDb0IsUUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUZGLENBRkYsQ0FERjs7QUFVZUYsNkVBQWY7QUFFQSxNQUFNcEMsU0FBUyxHQUFHQyx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdHQUFmO0FBUUEsTUFBTXVDLGVBQWUsR0FBR3hDLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsd0VBQXJCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBRUE7QUFDQTs7QUFHQSxNQUFNd0MsYUFBYSxHQUFHeEIsS0FBSyxJQUFJO0FBRTdCLFFBQU15QixJQUFJLEdBQUc7QUFDWEMsWUFBUSxFQUFFLENBQUM7QUFDVEQsVUFBSSxFQUFFLENBQUN6QixLQUFLLENBQUNlLFlBQVAsRUFBc0JmLEtBQUssQ0FBQ2dCLFVBQU4sR0FBbUJoQixLQUFLLENBQUNlLFlBQS9DLENBREc7QUFFVDtBQUNBWSxxQkFBZSxFQUFHQyxHQUFELElBQVM7QUFDeEI7QUFDQSxZQUFHQSxHQUFHLENBQUNDLE9BQUosQ0FBWUosSUFBWixDQUFpQixDQUFqQixJQUFzQnpCLEtBQUssQ0FBQ29CLFFBQS9CLEVBQXdDO0FBQ3hDLGlCQUFPLENBQUUsWUFBRixFQUFnQixpQkFBaEIsQ0FBUDtBQUNELFNBRkMsTUFFSyxJQUFHUSxHQUFHLENBQUNDLE9BQUosQ0FBWUosSUFBWixDQUFpQixDQUFqQixJQUFzQnpCLEtBQUssQ0FBQ21CLE9BQS9CLEVBQXVDO0FBQzFDLGlCQUFPLENBQUUsS0FBRixFQUFTLGlCQUFULENBQVA7QUFDRCxTQUZJLE1BRUU7QUFDTCxpQkFBTyxDQUFFLFNBQUYsRUFBYSxpQkFBYixDQUFQO0FBQ0Q7QUFDRixPQVpRO0FBYVRXLGlCQUFXLEVBQUU7QUFiSixLQUFEO0FBREMsR0FBYjtBQWtCQSxTQUNFLE1BQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBYTlCLEtBQUssQ0FBQ2MsSUFBbkIsQ0FERixFQUVFLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUNFLFFBQUksRUFBR1csSUFEVDtBQUVFLFNBQUssRUFBRyxHQUZWO0FBR0UsVUFBTSxFQUFHLEdBSFg7QUFJRSxXQUFPLEVBQUU7QUFDUE0sc0JBQWdCLEVBQUUsRUFEWDtBQUVQQyxjQUFRLEVBQUcsQ0FBQyxJQUFELEdBQVFDLElBQUksQ0FBQ0MsRUFGakI7QUFHUEMsbUJBQWEsRUFBRyxNQUFNRixJQUFJLENBQUNDLEVBSHBCO0FBSVBFLGNBQVEsRUFBRSxLQUpIO0FBS1BDLFdBQUssRUFBRTtBQUxBLEtBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRkYsRUFnQkUsTUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpQnJDLEtBQUssQ0FBQ2UsWUFBTixLQUF1QixJQUF2QixHQUE4QmYsS0FBSyxDQUFDZSxZQUFOLENBQW1CWCxPQUFuQixDQUEyQixDQUEzQixDQUE5QixHQUE4REosS0FBSyxDQUFDZSxZQUFyRixDQURGLEVBRUUsTUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXFCZixLQUFLLENBQUNpQixhQUEzQixDQUZGLENBaEJGLENBREY7QUF1QkQsQ0EzQ0Q7O0FBNkNlTyw0RUFBZjtBQUdBLE1BQU1jLGNBQWMsR0FBR3ZELHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMkZBQXBCO0FBT0EsTUFBTXVELFVBQVUsR0FBR3hELHdEQUFNLENBQUM0QixFQUFWO0FBQUE7QUFBQTtBQUFBLGtEQUFoQjtBQU1BLE1BQU02QixLQUFLLEdBQUd6RCx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGlDQUFYO0FBS0EsTUFBTXlELE1BQU0sR0FBRzFELHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMEdBQVo7QUFTQSxNQUFNMEQsYUFBYSxHQUFHM0Qsd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzREFFUk0seURBQUssQ0FBQ3FELFdBRkUsQ0FBbkI7QUFNQSxNQUFNQyxrQkFBa0IsR0FBRzdELHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsK0ZBRWJNLHlEQUFLLENBQUNxRCxXQUZPLENBQXhCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkZBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsTUFBTXJDLGdCQUFnQixHQUFHdkIsd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxvSEFHQU0seURBQUssQ0FBQ2lCLFFBSE4sRUFLWHRCLDREQUFRLENBQUN1QixPQUxFLEVBU1hoQiwwREFBTSxDQUFDaUIsTUFUSSxDQUF0QjtBQWNBLE1BQU1DLFdBQVcsR0FBRzNCLHdEQUFNLENBQUM0QixFQUFWO0FBQUE7QUFBQTtBQUFBLDhKQU1OMUIsNERBQVEsQ0FBQ0MsT0FOSCxFQVVORCw0REFBUSxDQUFDRSxPQVZILEVBY05LLDBEQUFNLENBQUNDLE9BZEQsQ0FBakI7QUFtQkEsTUFBTW1CLFNBQVMsR0FBRzdCLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsdURBQWY7O0FBS0EsTUFBTTZELFdBQVcsR0FBRzdDLEtBQUssSUFDdkIsTUFBQyxnQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBY0EsS0FBSyxDQUFDYyxJQUFwQixDQURGLEVBRUUsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFGRixFQUdFLE1BQUMsa0VBQUQ7QUFDRSxjQUFZLEVBQUVkLEtBQUssQ0FBQ2UsWUFEdEI7QUFFRSxZQUFVLEVBQUVmLEtBQUssQ0FBQ2dCLFVBRnBCO0FBR0UsZUFBYSxFQUFFaEIsS0FBSyxDQUFDaUIsYUFIdkI7QUFJRSxTQUFPLEVBQUVqQixLQUFLLENBQUNxQixPQUpqQjtBQUtFLFVBQVEsRUFBRXJCLEtBQUssQ0FBQ3NCLFFBTGxCO0FBTUUsU0FBTyxFQUFFdEIsS0FBSyxDQUFDbUIsT0FOakI7QUFPRSxVQUFRLEVBQUVuQixLQUFLLENBQUNvQixRQVBsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSEYsQ0FERjs7QUF5QmV5QiwwRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRUE7QUFDQTtBQUVBLE1BQU1DLGFBQWEsR0FBRy9ELHdEQUFNLENBQUNnRSxJQUFWO0FBQUE7QUFBQTtBQUFBLDJQQUlSOUQsNERBQVEsQ0FBQ0MsT0FKRCxFQVNSRCw0REFBUSxDQUFDRSxPQVRELEVBY1JGLDREQUFRLENBQUMrRCxPQWRELEVBbUJSL0QsNERBQVEsQ0FBQ3VCLE9BbkJELENBQW5CO0FBMEJBLE1BQU15QyxnQkFBZ0IsR0FBR2xFLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsOEVBQXRCO0FBT0EsTUFBTWtFLFdBQVcsR0FBR25FLHdEQUFNLENBQUM0QixFQUFWO0FBQUE7QUFBQTtBQUFBLDJIQUlOMUIsNERBQVEsQ0FBQ2tFLE1BSkgsRUFRTmxFLDREQUFRLENBQUN1QixPQVJILEVBWU5oQiwwREFBTSxDQUFDQyxPQVpELENBQWpCO0FBaUJBLE1BQU0yRCxRQUFRLEdBQUdyRSx3REFBTSxDQUFDc0UsRUFBVjtBQUFBO0FBQUE7QUFBQSxrSkFLSHBFLDREQUFRLENBQUNrRSxNQUxOLEVBU0hsRSw0REFBUSxDQUFDdUIsT0FUTixFQWFIaEIsMERBQU0sQ0FBQ0MsT0FiSixDQUFkO0FBa0JBLE1BQU02RCxRQUFRLEdBQUd2RSx3REFBTSxDQUFDTSxFQUFWO0FBQUE7QUFBQTtBQUFBLHdGQUFkO0FBT0EsTUFBTWtFLG9CQUFvQixHQUFHeEUsd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw4Y0FDSk0seURBQUssQ0FBQ2lCLFFBREYsRUFPZnRCLDREQUFRLENBQUNDLE9BUE0sRUFhZkQsNERBQVEsQ0FBQ0UsT0FiTSxFQW1CZkYsNERBQVEsQ0FBQ3VCLE9BbkJNLEVBMEJmaEIsMERBQU0sQ0FBQ0MsT0ExQlEsQ0FBMUI7O0FBaUNBLE1BQU0rRCxNQUFNLEdBQUd4RCxLQUFLLElBQ2xCLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQyxnQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBY0EsS0FBSyxDQUFDeUQsWUFBcEIsQ0FERixFQUVFLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQVd6RCxLQUFLLENBQUMwRCxTQUFqQixDQUZGLEVBR0UsTUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBVzFELEtBQUssQ0FBQzJELElBQWpCLFNBQTBCM0QsS0FBSyxDQUFDNEQsSUFBaEMsQ0FIRixDQURGLEVBTUUsTUFBQyxvQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0k1RCxLQUFLLENBQUM2RCxRQURWLENBTkYsQ0FERjs7QUFhZUwscUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SEE7QUFDQTtBQUNBOztBQUVBLE1BQU1NLGNBQWMsR0FBRzlELEtBQUssSUFDMUIsTUFBQyxvREFBRDtBQUNFLFdBQVMsRUFBRyxRQURkO0FBRUUsYUFBVyxFQUFHLEVBRmhCO0FBR0UsWUFBVSxFQUFHLE9BSGY7QUFJRSxpQkFBZSxNQUpqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBTUlBLEtBQUssQ0FBQzZELFFBTlYsQ0FERjs7QUFXZUMsNkVBQWY7QUFFQSxNQUFNQyxjQUFjLEdBQUdoRix3REFBTSxDQUFDaUYsb0RBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSw4QkFBcEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBRUE7QUFFQSxNQUFNQyxtQkFBbUIsR0FBR2xGLHdEQUFNLENBQUNnRSxJQUFWO0FBQUE7QUFBQTtBQUFBLHdFQUF6QjtBQU9BLE1BQU1tQixzQkFBc0IsR0FBR25GLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNEVBQTVCO0FBT0EsTUFBTW1GLGlCQUFpQixHQUFHcEYsd0RBQU0sQ0FBQzRCLEVBQVY7QUFBQTtBQUFBO0FBQUEsbURBR1pyQix5REFBSyxDQUFDaUIsUUFITSxDQUF2QjtBQU1BLE1BQU02RCxjQUFjLEdBQUdyRix3REFBTSxDQUFDc0UsRUFBVjtBQUFBO0FBQUE7QUFBQSxtREFHVC9ELHlEQUFLLENBQUNDLFNBSEcsQ0FBcEI7QUFNQSxNQUFNK0QsUUFBUSxHQUFHdkUsd0RBQU0sQ0FBQ00sRUFBVjtBQUFBO0FBQUE7QUFBQSxxRUFBZDtBQU1BLE1BQU1nRix1QkFBdUIsR0FBR3RGLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsdUNBQTdCOztBQU1BLE1BQU1zRixZQUFZLEdBQUd0RSxLQUFLLElBQ3hCLG1FQUNFLE1BQUMsbUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsc0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsaUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFvQkEsS0FBSyxDQUFDeUQsWUFBMUIsQ0FERixFQUVFLE1BQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWlCekQsS0FBSyxDQUFDMEQsU0FBdkIsQ0FGRixFQUdFLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQVcxRCxLQUFLLENBQUMyRCxJQUFqQixTQUEwQjNELEtBQUssQ0FBQzRELElBQWhDLENBSEYsQ0FERixFQU1FLE1BQUMsdUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNHNUQsS0FBSyxDQUFDNkQsUUFEVCxDQU5GLENBREYsQ0FERjs7QUF1Q2VTLDJFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBRUEsTUFBTUMscUJBQXFCLEdBQUd4Rix3REFBTSxDQUFDeUYsQ0FBVjtBQUFBO0FBQUE7QUFBQSxxRkFHRWxGLHlEQUFLLENBQUNxRCxXQUhSLENBQTNCO0FBT0EsTUFBTThCLFVBQVUsR0FBRzFGLHdEQUFNLENBQUNzRSxFQUFWO0FBQUE7QUFBQTtBQUFBLHlDQUFoQjtBQUtBLE1BQU1xQixVQUFVLEdBQUczRix3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHlCQUFoQjtBQUlBLE1BQU0yRixhQUFhLEdBQUc1Rix3REFBTSxDQUFDNkYsSUFBVjtBQUFBO0FBQUE7QUFBQSwwQ0FBbkI7O0FBT0EsTUFBTTdFLE1BQU0sR0FBR0MsS0FBSyxJQUNsQixNQUFDLHFCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFhQSxLQUFLLENBQUM2RSxTQUFuQixDQURGLEVBRUUsTUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBZ0IsTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBaUI3RSxLQUFLLENBQUNFLEVBQU4sS0FBYUMsU0FBYixHQUF5QkgsS0FBSyxDQUFDRSxFQUFOLENBQVNFLE9BQVQsQ0FBaUIsQ0FBakIsQ0FBekIsR0FBK0NKLEtBQUssQ0FBQ0UsRUFBdEUsQ0FBaEIsWUFBZ0gsTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBaUJGLEtBQUssQ0FBQ0ssR0FBTixLQUFjRixTQUFkLEdBQTBCSCxLQUFLLENBQUNLLEdBQU4sQ0FBVUQsT0FBVixDQUFrQixDQUFsQixDQUExQixHQUFpREosS0FBSyxDQUFDSyxHQUF4RSxDQUFoSCxDQUZGLENBREY7O0FBT2VOLHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsTUFBTU8sZ0JBQWdCLEdBQUd2Qix3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDBEQUF0QjtBQWVBLE1BQU04RixtQkFBbUIsR0FBRy9GLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsd0NBQXpCO0FBS0EsTUFBTTBCLFdBQVcsR0FBRzNCLHdEQUFNLENBQUM0QixFQUFWO0FBQUE7QUFBQTtBQUFBLDZHQUlLckIseURBQUssQ0FBQ3FELFdBSlgsQ0FBakI7QUFvQkEsTUFBTW9DLHNCQUFzQixHQUFHaEcsd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxxQkFBNUI7O0FBS0EsTUFBTTZCLE9BQU8sR0FBR2IsS0FBSyxJQUNuQixNQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLG1CQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFjQSxLQUFLLENBQUNnRixZQUFwQixDQURGLEVBRUUsTUFBQyxrREFBRDtBQUFXLFdBQVMsRUFBRSxPQUF0QjtBQUErQixJQUFFLEVBQUVoRixLQUFLLENBQUNtQixPQUF6QztBQUFrRCxLQUFHLEVBQUVuQixLQUFLLENBQUNvQixRQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBRkYsRUFHRSxNQUFDLGtEQUFEO0FBQVcsV0FBUyxFQUFFLFFBQXRCO0FBQWdDLElBQUUsRUFBRXBCLEtBQUssQ0FBQ2lGLE9BQTFDO0FBQW1ELEtBQUcsRUFBRWpGLEtBQUssQ0FBQ2tGLFFBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFIRixDQURGLEVBT0UsTUFBQyxzQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0dsRixLQUFLLENBQUM2RCxRQURULENBUEYsQ0FERjs7QUFjZWhELHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLE1BQU1pQyxhQUFhLEdBQUcvRCx3REFBTSxDQUFDZ0UsSUFBVjtBQUFBO0FBQUE7QUFBQSw0REFBbkI7QUFPQSxNQUFNUSxvQkFBb0IsR0FBR3hFLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsb0ZBQTFCO0FBT0EsTUFBTW1HLFlBQVksR0FBR3BHLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMEVBQWxCO0FBT0EsTUFBTW9FLFFBQVEsR0FBR3JFLHdEQUFNLENBQUNzRSxFQUFWO0FBQUE7QUFBQTtBQUFBLGdHQUVIL0QseURBQUssQ0FBQ3FELFdBRkgsQ0FBZDtBQVFBLE1BQU1XLFFBQVEsR0FBR3ZFLHdEQUFNLENBQUNNLEVBQVY7QUFBQTtBQUFBO0FBQUEseUVBQ0hDLHlEQUFLLENBQUNxRCxXQURILENBQWQ7QUFPQSxNQUFNeUMsV0FBVyxHQUFHckcsd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxRQUFqQjs7QUFLQSxNQUFNd0UsTUFBTSxHQUFHeEQsS0FBSyxJQUFJO0FBQ3RCLFNBQ0EsTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQVMsV0FBTyxFQUFFQSxLQUFLLENBQUNxRixPQUF4QjtBQUFpQyxTQUFLLEVBQUVyRixLQUFLLENBQUNzRixLQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLG9CQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVd0RixLQUFLLENBQUN1RixRQUFqQixDQURGLEVBRUUsTUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBV3ZGLEtBQUssQ0FBQzJELElBQWpCLFNBQTBCM0QsS0FBSyxDQUFDNEQsSUFBaEMsQ0FGRixDQURGLEVBS0UsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTVELEtBQUssQ0FBQzZELFFBRFYsQ0FMRixDQUZGLENBREE7QUFjRCxDQWZEOztBQWlCZUwscUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEVBO0FBQ0E7QUFFQSxNQUFNZ0MsZ0JBQWdCLEdBQUd6Ryx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHVHQUVBTSx5REFBSyxDQUFDcUQsV0FGTixDQUF0QjtBQVFBLE1BQU1NLGdCQUFnQixHQUFHbEUsd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw4RkFBdEI7QUFXQSxNQUFNeUcsZ0JBQWdCLEdBQUcxRyx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGdIQUF0QjtBQWFBLE1BQU0wRyxTQUFTLEdBQUczRyx3REFBTSxDQUFDNEcsR0FBVjtBQUFBO0FBQUE7QUFBQSxzTkFlU3JHLHlEQUFLLENBQUNDLFNBZmYsQ0FBZjs7QUF5QkEsTUFBTXFHLE9BQU8sR0FBSTVGLEtBQUQsSUFBVztBQUN6QixTQUNFLE1BQUMsZ0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFHLFdBQVVBLEtBQUssQ0FBQ3FGLE9BQVEsV0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRSxNQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR3JGLEtBQUssQ0FBQ3NGLEtBRFQsQ0FERixDQUZGLENBSkYsQ0FERjtBQWVELENBaEJEOztBQW1CZU0sc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRUE7QUFFQTtBQUNBOztBQUdBLE1BQU1DLEtBQUssR0FBRzdGLEtBQUssSUFBSTtBQUNyQjhGLDBEQUFRLENBQUNDLE1BQVQsQ0FBZ0JDLGlCQUFoQixHQUFvQyxVQUFwQztBQUNBRiwwREFBUSxDQUFDQyxNQUFULENBQWdCRSxnQkFBaEIsR0FBbUMzRyx5REFBSyxDQUFDUSxZQUF6Qzs7QUFFQSxRQUFNMkIsSUFBSSxHQUFHeUUsTUFBTSxJQUFJO0FBQ3JCLFVBQU10RSxHQUFHLEdBQUdzRSxNQUFNLENBQUNDLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUNBLFVBQU1DLFFBQVEsR0FBR3hFLEdBQUcsQ0FBQ3lFLG9CQUFKLENBQXlCLENBQXpCLEVBQTJCLENBQTNCLEVBQTZCLENBQTdCLEVBQStCLEdBQS9CLENBQWpCO0FBQ0FELFlBQVEsQ0FBQ0UsWUFBVCxDQUFzQixDQUF0QixFQUF5Qix1QkFBekI7QUFDQUYsWUFBUSxDQUFDRSxZQUFULENBQXNCLENBQXRCLEVBQXlCaEgseURBQUssQ0FBQ1EsWUFBL0I7QUFFQSxXQUFPO0FBQ0x5RyxZQUFNLEVBQUUsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsS0FBN0IsRUFBb0MsS0FBcEMsRUFBMkMsS0FBM0MsQ0FESDtBQUVMN0UsY0FBUSxFQUFFLENBQUM7QUFDVEQsWUFBSSxFQUFFLENBQUN6QixLQUFLLENBQUN3RyxHQUFQLEVBQVl4RyxLQUFLLENBQUN5RyxHQUFsQixFQUF1QnpHLEtBQUssQ0FBQzBHLEdBQTdCLEVBQWtDMUcsS0FBSyxDQUFDMkcsR0FBeEMsRUFBNkMzRyxLQUFLLENBQUM0RyxHQUFuRCxFQUF3RDVHLEtBQUssQ0FBQzZHLEdBQTlELEVBQW1FN0csS0FBSyxDQUFDOEcsR0FBekUsQ0FERztBQUVUaEYsbUJBQVcsRUFBRSxDQUZKO0FBR1RpRixtQkFBVyxFQUFFekgseURBQUssQ0FBQ0MsU0FIVjtBQUlUeUgsNEJBQW9CLEVBQUUxSCx5REFBSyxDQUFDQyxTQUpuQjtBQUtUb0MsdUJBQWUsRUFBRXlFLFFBTFI7QUFNVGEsOEJBQXNCLEVBQUU7QUFOZixPQUFEO0FBRkwsS0FBUDtBQVdELEdBakJEOztBQW1CQSxTQUNFLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRDtBQUNFLFFBQUksRUFBR3hGLElBRFQ7QUFFRSxXQUFPLEVBQUU7QUFDUHlGLFlBQU0sRUFBRSxLQUREO0FBRVA5RSxjQUFRLEVBQUUsS0FGSDtBQUdQQyxXQUFLLEVBQUUsS0FIQTtBQUlQOEUsWUFBTSxFQUFFO0FBQ047QUFDQUMsYUFBSyxFQUFFLENBQUM7QUFDTkMsZUFBSyxFQUFFO0FBQ0xDLGVBQUcsRUFBRSxDQURBO0FBRUxDLGVBQUcsRUFBRSxFQUZBO0FBR0xDLG9CQUFRLEVBQUUsQ0FITDtBQUlMQyxtQkFBTyxFQUFFO0FBSkosV0FERDtBQU9OQyxtQkFBUyxFQUFFO0FBQ1RELG1CQUFPLEVBQUU7QUFEQTtBQVBMLFNBQUQsQ0FGRDtBQWFOO0FBQ0FFLGFBQUssRUFBRSxDQUFDO0FBQ05ELG1CQUFTLEVBQUU7QUFDVEQsbUJBQU8sRUFBRTtBQURBO0FBREwsU0FBRDtBQWREO0FBSkQsS0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERjtBQWdDRCxDQXZERDs7QUF5RGU1QixvRUFBZjtBQUVBLE1BQU1yRCxLQUFLLEdBQUd6RCx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG1CQUFYLEM7Ozs7Ozs7Ozs7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLDBFQUFtQjs7QUFFekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUM7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qjs7Ozs7Ozs7Ozs7O0FDaEJhOztBQUFBLElBQUk0SSxzQkFBc0IsR0FBQ0MsbUJBQU8sQ0FBQyxvSEFBRCxDQUFsQzs7QUFBbUYsSUFBSUMsdUJBQXVCLEdBQUNELG1CQUFPLENBQUMsc0hBQUQsQ0FBbkM7O0FBQXFGRSxPQUFPLENBQUNDLFVBQVIsR0FBbUIsSUFBbkI7QUFBd0JELE9BQU8sQ0FBQ0UsT0FBUixHQUFnQixLQUFLLENBQXJCOztBQUF1QixJQUFJQyxNQUFNLEdBQUNKLHVCQUF1QixDQUFDRCxtQkFBTyxDQUFDLG9CQUFELENBQVIsQ0FBbEM7O0FBQXFELElBQUlNLElBQUksR0FBQ04sbUJBQU8sQ0FBQyxnQkFBRCxDQUFoQjs7QUFBd0IsSUFBSU8sTUFBTSxHQUFDUCxtQkFBTyxDQUFDLDBEQUFELENBQWxCOztBQUErQyxJQUFJUSxPQUFPLEdBQUNULHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLDJEQUFELENBQVIsQ0FBbEM7O0FBQXdELElBQUlTLFFBQVEsR0FBQ1QsbUJBQU8sQ0FBQyxtR0FBRCxDQUFwQjs7QUFBeUQsU0FBU1UsT0FBVCxDQUFpQkMsSUFBakIsRUFBc0I7QUFBQyxNQUFJQyxHQUFHLEdBQUMsQ0FBQyxHQUFFTixJQUFJLENBQUNPLEtBQVIsRUFBZUYsSUFBZixFQUFvQixLQUFwQixFQUEwQixJQUExQixDQUFSO0FBQXdDLE1BQUlHLE1BQU0sR0FBQyxDQUFDLEdBQUVSLElBQUksQ0FBQ08sS0FBUixFQUFlLENBQUMsR0FBRU4sTUFBTSxDQUFDUSxpQkFBVixHQUFmLEVBQThDLEtBQTlDLEVBQW9ELElBQXBELENBQVg7QUFBcUUsU0FBTSxDQUFDSCxHQUFHLENBQUNJLElBQUwsSUFBV0osR0FBRyxDQUFDSyxRQUFKLEtBQWVILE1BQU0sQ0FBQ0csUUFBdEIsSUFBZ0NMLEdBQUcsQ0FBQ0ksSUFBSixLQUFXRixNQUFNLENBQUNFLElBQW5FO0FBQXlFOztBQUFBLFNBQVNFLGlCQUFULENBQTJCQyxVQUEzQixFQUFzQztBQUFDLE1BQUlDLFFBQVEsR0FBQyxJQUFiO0FBQWtCLE1BQUlDLE1BQU0sR0FBQyxJQUFYO0FBQWdCLE1BQUlDLFVBQVUsR0FBQyxJQUFmO0FBQW9CLFNBQU0sQ0FBQ1gsSUFBRCxFQUFNWSxFQUFOLEtBQVc7QUFBQyxRQUFHRCxVQUFVLElBQUVYLElBQUksS0FBR1MsUUFBbkIsSUFBNkJHLEVBQUUsS0FBR0YsTUFBckMsRUFBNEM7QUFBQyxhQUFPQyxVQUFQO0FBQW1COztBQUFBLFFBQUlFLE1BQU0sR0FBQ0wsVUFBVSxDQUFDUixJQUFELEVBQU1ZLEVBQU4sQ0FBckI7QUFBK0JILFlBQVEsR0FBQ1QsSUFBVDtBQUFjVSxVQUFNLEdBQUNFLEVBQVA7QUFBVUQsY0FBVSxHQUFDRSxNQUFYO0FBQWtCLFdBQU9BLE1BQVA7QUFBZSxHQUExSztBQUE0Szs7QUFBQSxTQUFTQyxTQUFULENBQW1CYixHQUFuQixFQUF1QjtBQUFDLFNBQU9BLEdBQUcsSUFBRSxPQUFPQSxHQUFQLEtBQWEsUUFBbEIsR0FBMkIsQ0FBQyxHQUFFTCxNQUFNLENBQUNtQixvQkFBVixFQUFnQ2QsR0FBaEMsQ0FBM0IsR0FBZ0VBLEdBQXZFO0FBQTRFOztBQUFBLElBQUllLFFBQUo7QUFBYSxJQUFJQyxTQUFTLEdBQUMsSUFBSUMsR0FBSixFQUFkO0FBQXdCLElBQUlDLG9CQUFvQixHQUFDLFFBQTRCQyxTQUE1QixHQUF3RCxJQUFqRjtBQUFzRixJQUFJQyxVQUFVLEdBQUMsRUFBZjs7QUFBa0IsU0FBU0MsV0FBVCxHQUFzQjtBQUFDO0FBQy9xQyxNQUFHTixRQUFILEVBQVk7QUFBQyxXQUFPQSxRQUFQO0FBQWlCLEdBRGdwQyxDQUNocEM7OztBQUM5QixNQUFHLENBQUNHLG9CQUFKLEVBQXlCO0FBQUMsV0FBT3hKLFNBQVA7QUFBa0I7O0FBQUEsU0FBT3FKLFFBQVEsR0FBQyxJQUFJRyxvQkFBSixDQUF5QkksT0FBTyxJQUFFO0FBQUNBLFdBQU8sQ0FBQ0MsT0FBUixDQUFnQkMsS0FBSyxJQUFFO0FBQUMsVUFBRyxDQUFDUixTQUFTLENBQUNTLEdBQVYsQ0FBY0QsS0FBSyxDQUFDRSxNQUFwQixDQUFKLEVBQWdDO0FBQUM7QUFBUTs7QUFBQSxVQUFJQyxFQUFFLEdBQUNYLFNBQVMsQ0FBQ1ksR0FBVixDQUFjSixLQUFLLENBQUNFLE1BQXBCLENBQVA7O0FBQW1DLFVBQUdGLEtBQUssQ0FBQ0ssY0FBTixJQUFzQkwsS0FBSyxDQUFDTSxpQkFBTixHQUF3QixDQUFqRCxFQUFtRDtBQUFDZixnQkFBUSxDQUFDZ0IsU0FBVCxDQUFtQlAsS0FBSyxDQUFDRSxNQUF6QjtBQUFpQ1YsaUJBQVMsQ0FBQ2dCLE1BQVYsQ0FBaUJSLEtBQUssQ0FBQ0UsTUFBdkI7QUFBK0JDLFVBQUU7QUFBSTtBQUFDLEtBQS9OO0FBQWtPLEdBQXJRLEVBQXNRO0FBQUNNLGNBQVUsRUFBQztBQUFaLEdBQXRRLENBQWhCO0FBQTZTOztBQUFBLElBQUlDLHFCQUFxQixHQUFDLENBQUNDLEVBQUQsRUFBSVIsRUFBSixLQUFTO0FBQUMsTUFBSVosUUFBUSxHQUFDTSxXQUFXLEVBQXhCOztBQUEyQixNQUFHLENBQUNOLFFBQUosRUFBYTtBQUFDLFdBQU0sTUFBSSxDQUFFLENBQVo7QUFBYzs7QUFBQUEsVUFBUSxDQUFDcUIsT0FBVCxDQUFpQkQsRUFBakI7QUFBcUJuQixXQUFTLENBQUNxQixHQUFWLENBQWNGLEVBQWQsRUFBaUJSLEVBQWpCO0FBQXFCLFNBQU0sTUFBSTtBQUFDLFFBQUc7QUFBQ1osY0FBUSxDQUFDZ0IsU0FBVCxDQUFtQkksRUFBbkI7QUFBd0IsS0FBNUIsQ0FBNEIsT0FBTUcsR0FBTixFQUFVO0FBQUNDLGFBQU8sQ0FBQ0MsS0FBUixDQUFjRixHQUFkO0FBQW9COztBQUFBdEIsYUFBUyxDQUFDZ0IsTUFBVixDQUFpQkcsRUFBakI7QUFBc0IsR0FBNUY7QUFBOEYsQ0FBbk87O0FBQW9PLE1BQU1NLElBQU4sU0FBbUJoRCxNQUFNLENBQUNpRCxTQUExQixDQUFtQztBQUFDQyxhQUFXLENBQUNwTCxLQUFELEVBQU87QUFBQyxVQUFNQSxLQUFOO0FBQWEsU0FBS3dFLENBQUwsR0FBTyxLQUFLLENBQVo7O0FBQWMsU0FBSzZHLGdCQUFMLEdBQXNCLE1BQUksQ0FBRSxDQUE1Qjs7QUFBNkIsU0FBS0MsVUFBTCxHQUFnQnZDLGlCQUFpQixDQUFDLENBQUNQLElBQUQsRUFBTStDLE1BQU4sS0FBZTtBQUFDLGFBQU07QUFBQy9DLFlBQUksRUFBQyxDQUFDLEdBQUVGLFFBQVEsQ0FBQ2tELFdBQVosRUFBeUJsQyxTQUFTLENBQUNkLElBQUQsQ0FBbEMsQ0FBTjtBQUFnRFksVUFBRSxFQUFDbUMsTUFBTSxHQUFDLENBQUMsR0FBRWpELFFBQVEsQ0FBQ2tELFdBQVosRUFBeUJsQyxTQUFTLENBQUNpQyxNQUFELENBQWxDLENBQUQsR0FBNkNBO0FBQXRHLE9BQU47QUFBcUgsS0FBdEksQ0FBakM7O0FBQXlLLFNBQUtFLFdBQUwsR0FBaUJDLENBQUMsSUFBRTtBQUFDLFVBQUc7QUFBQ0MsZ0JBQUQ7QUFBVXhCO0FBQVYsVUFBa0J1QixDQUFDLENBQUNFLGFBQXZCOztBQUFxQyxVQUFHRCxRQUFRLEtBQUcsR0FBWCxLQUFpQnhCLE1BQU0sSUFBRUEsTUFBTSxLQUFHLE9BQWpCLElBQTBCdUIsQ0FBQyxDQUFDRyxPQUE1QixJQUFxQ0gsQ0FBQyxDQUFDSSxPQUF2QyxJQUFnREosQ0FBQyxDQUFDSyxRQUFsRCxJQUE0REwsQ0FBQyxDQUFDTSxXQUFGLElBQWVOLENBQUMsQ0FBQ00sV0FBRixDQUFjQyxLQUFkLEtBQXNCLENBQWxILENBQUgsRUFBd0g7QUFBQztBQUN4Z0M7QUFBUTs7QUFBQSxVQUFHO0FBQUN6RCxZQUFEO0FBQU1ZO0FBQU4sVUFBVSxLQUFLa0MsVUFBTCxDQUFnQixLQUFLdEwsS0FBTCxDQUFXd0ksSUFBM0IsRUFBZ0MsS0FBS3hJLEtBQUwsQ0FBV29KLEVBQTNDLENBQWI7O0FBQTRELFVBQUcsQ0FBQ2IsT0FBTyxDQUFDQyxJQUFELENBQVgsRUFBa0I7QUFBQztBQUN2RjtBQUFROztBQUFBLFVBQUc7QUFBQzBEO0FBQUQsVUFBV3RDLE1BQU0sQ0FBQ3VDLFFBQXJCO0FBQThCM0QsVUFBSSxHQUFDLENBQUMsR0FBRUwsSUFBSSxDQUFDaUUsT0FBUixFQUFpQkYsUUFBakIsRUFBMEIxRCxJQUExQixDQUFMO0FBQXFDWSxRQUFFLEdBQUNBLEVBQUUsR0FBQyxDQUFDLEdBQUVqQixJQUFJLENBQUNpRSxPQUFSLEVBQWlCRixRQUFqQixFQUEwQjlDLEVBQTFCLENBQUQsR0FBK0JaLElBQXBDO0FBQXlDa0QsT0FBQyxDQUFDVyxjQUFGLEdBRnF2QixDQUVsdUI7O0FBQ3ZJLFVBQUc7QUFBQ0M7QUFBRCxVQUFTLEtBQUt0TSxLQUFqQjs7QUFBdUIsVUFBR3NNLE1BQU0sSUFBRSxJQUFYLEVBQWdCO0FBQUNBLGNBQU0sR0FBQ2xELEVBQUUsQ0FBQ21ELE9BQUgsQ0FBVyxHQUFYLElBQWdCLENBQXZCO0FBQTBCLE9BSHV5QixDQUd2eUI7OztBQUNsRWxFLGFBQU8sQ0FBQ0osT0FBUixDQUFnQixLQUFLakksS0FBTCxDQUFXd00sT0FBWCxHQUFtQixTQUFuQixHQUE2QixNQUE3QyxFQUFxRGhFLElBQXJELEVBQTBEWSxFQUExRCxFQUE2RDtBQUFDcUQsZUFBTyxFQUFDLEtBQUt6TSxLQUFMLENBQVd5TTtBQUFwQixPQUE3RCxFQUEyRkMsSUFBM0YsQ0FBZ0dDLE9BQU8sSUFBRTtBQUFDLFlBQUcsQ0FBQ0EsT0FBSixFQUFZOztBQUFPLFlBQUdMLE1BQUgsRUFBVTtBQUFDMUMsZ0JBQU0sQ0FBQ2dELFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBa0IsQ0FBbEI7QUFBcUJDLGtCQUFRLENBQUNDLElBQVQsQ0FBY0MsS0FBZDtBQUF1QjtBQUFDLE9BQXJMO0FBQXdMLEtBSjZwQjs7QUFJNXBCLGNBQXVDO0FBQUMsVUFBRy9NLEtBQUssQ0FBQ2dOLFFBQVQsRUFBa0I7QUFBQ2hDLGVBQU8sQ0FBQ2lDLElBQVIsQ0FBYSxpS0FBYjtBQUFpTDtBQUFDOztBQUFBLFNBQUt6SSxDQUFMLEdBQU94RSxLQUFLLENBQUNnTixRQUFOLEtBQWlCLEtBQXhCO0FBQStCOztBQUFBRSxzQkFBb0IsR0FBRTtBQUFDLFNBQUs3QixnQkFBTDtBQUF5Qjs7QUFBQThCLFVBQVEsR0FBRTtBQUFDLFFBQUc7QUFBQ2pCO0FBQUQsUUFBV3RDLE1BQU0sQ0FBQ3VDLFFBQXJCO0FBQThCLFFBQUc7QUFBQzNELFVBQUksRUFBQzRFLFVBQU47QUFBaUJoRSxRQUFFLEVBQUNpRTtBQUFwQixRQUE4QixLQUFLL0IsVUFBTCxDQUFnQixLQUFLdEwsS0FBTCxDQUFXd0ksSUFBM0IsRUFBZ0MsS0FBS3hJLEtBQUwsQ0FBV29KLEVBQTNDLENBQWpDO0FBQWdGLFFBQUlrRSxZQUFZLEdBQUMsQ0FBQyxHQUFFbkYsSUFBSSxDQUFDaUUsT0FBUixFQUFpQkYsUUFBakIsRUFBMEJrQixVQUExQixDQUFqQjtBQUF1RCxXQUFNLENBQUNFLFlBQUQsRUFBY0QsUUFBUSxHQUFDLENBQUMsR0FBRWxGLElBQUksQ0FBQ2lFLE9BQVIsRUFBaUJGLFFBQWpCLEVBQTBCbUIsUUFBMUIsQ0FBRCxHQUFxQ0MsWUFBM0QsQ0FBTjtBQUFnRjs7QUFBQUMsV0FBUyxDQUFDQyxHQUFELEVBQUs7QUFBQyxRQUFHLEtBQUtoSixDQUFMLElBQVFtRixvQkFBUixJQUE4QjZELEdBQTlCLElBQW1DQSxHQUFHLENBQUNDLE9BQTFDLEVBQWtEO0FBQUMsV0FBS3BDLGdCQUFMO0FBQXdCLFVBQUlxQyxZQUFZLEdBQUM3RCxVQUFVLENBQUMsS0FBS3NELFFBQUwsR0FBZ0JRLElBQWhCLEVBQXFCO0FBQ2g0QixTQUQyMkIsQ0FBRCxDQUEzQjs7QUFDejBCLFVBQUcsQ0FBQ0QsWUFBSixFQUFpQjtBQUFDLGFBQUtyQyxnQkFBTCxHQUFzQlYscUJBQXFCLENBQUM2QyxHQUFELEVBQUssTUFBSTtBQUFDLGVBQUtSLFFBQUw7QUFBaUIsU0FBM0IsQ0FBM0M7QUFBeUU7QUFBQztBQUFDLEdBTDZmLENBSzdmO0FBQ25HOzs7QUFDQUEsVUFBUSxDQUFDWSxPQUFELEVBQVM7QUFBQyxRQUFHLENBQUMsS0FBS3BKLENBQU4sUUFBSCxFQUF3QyxPQUF6QyxDQUFnRDs7QUFDakUsUUFBSXFKLEtBQUssR0FBQyxLQUFLVixRQUFMLEVBQVYsQ0FEaUIsQ0FDUztBQUMxQjtBQUNBOztBQUNBOUUsV0FBTyxDQUFDSixPQUFSLENBQWdCK0UsUUFBaEIsQ0FBeUJhLEtBQUs7QUFBQztBQUFVLEtBQVgsQ0FBOUIsRUFBNENBLEtBQUs7QUFBQztBQUFZLEtBQWIsQ0FBakQsRUFBaUVELE9BQWpFLEVBQTBFRSxLQUExRSxDQUFnRi9DLEdBQUcsSUFBRTtBQUFDLGdCQUF1QztBQUFDO0FBQzlILGNBQU1BLEdBQU47QUFBVztBQUFDLEtBRFo7O0FBQ2NsQixjQUFVLENBQUNnRSxLQUFLLENBQUNGLElBQU4sRUFBVztBQUNwQyxPQUR5QixDQUFELENBQVYsR0FDUixJQURRO0FBQ0Y7O0FBQUFJLFFBQU0sR0FBRTtBQUFDLFFBQUc7QUFBQ2xLO0FBQUQsUUFBVyxLQUFLN0QsS0FBbkI7QUFBeUIsUUFBRztBQUFDd0ksVUFBRDtBQUFNWTtBQUFOLFFBQVUsS0FBS2tDLFVBQUwsQ0FBZ0IsS0FBS3RMLEtBQUwsQ0FBV3dJLElBQTNCLEVBQWdDLEtBQUt4SSxLQUFMLENBQVdvSixFQUEzQyxDQUFiLENBQTFCLENBQXNGOztBQUMxRyxRQUFHLE9BQU92RixRQUFQLEtBQWtCLFFBQXJCLEVBQThCO0FBQUNBLGNBQVEsR0FBQyxhQUFhcUUsTUFBTSxDQUFDRCxPQUFQLENBQWUrRixhQUFmLENBQTZCLEdBQTdCLEVBQWlDLElBQWpDLEVBQXNDbkssUUFBdEMsQ0FBdEI7QUFBdUUsS0FEbEYsQ0FDa0Y7OztBQUN0RyxRQUFJb0ssS0FBSyxHQUFDL0YsTUFBTSxDQUFDZ0csUUFBUCxDQUFnQkMsSUFBaEIsQ0FBcUJ0SyxRQUFyQixDQUFWOztBQUF5QyxRQUFJN0QsS0FBSyxHQUFDO0FBQUN3TixTQUFHLEVBQUM1QyxFQUFFLElBQUU7QUFBQyxhQUFLMkMsU0FBTCxDQUFlM0MsRUFBZjs7QUFBbUIsWUFBR3FELEtBQUssSUFBRSxPQUFPQSxLQUFQLEtBQWUsUUFBdEIsSUFBZ0NBLEtBQUssQ0FBQ1QsR0FBekMsRUFBNkM7QUFBQyxjQUFHLE9BQU9TLEtBQUssQ0FBQ1QsR0FBYixLQUFtQixVQUF0QixFQUFpQ1MsS0FBSyxDQUFDVCxHQUFOLENBQVU1QyxFQUFWLEVBQWpDLEtBQW9ELElBQUcsT0FBT3FELEtBQUssQ0FBQ1QsR0FBYixLQUFtQixRQUF0QixFQUErQjtBQUFDUyxpQkFBSyxDQUFDVCxHQUFOLENBQVVZLE9BQVYsR0FBa0J4RCxFQUFsQjtBQUFzQjtBQUFDO0FBQUMsT0FBdkw7QUFBd0x5RCxrQkFBWSxFQUFDM0MsQ0FBQyxJQUFFO0FBQUMsWUFBR3VDLEtBQUssQ0FBQ2pPLEtBQU4sSUFBYSxPQUFPaU8sS0FBSyxDQUFDak8sS0FBTixDQUFZcU8sWUFBbkIsS0FBa0MsVUFBbEQsRUFBNkQ7QUFBQ0osZUFBSyxDQUFDak8sS0FBTixDQUFZcU8sWUFBWixDQUF5QjNDLENBQXpCO0FBQTZCOztBQUFBLGFBQUtzQixRQUFMLENBQWM7QUFBQ3NCLGtCQUFRLEVBQUM7QUFBVixTQUFkO0FBQWdDLE9BQXBVO0FBQXFVQyxhQUFPLEVBQUM3QyxDQUFDLElBQUU7QUFBQyxZQUFHdUMsS0FBSyxDQUFDak8sS0FBTixJQUFhLE9BQU9pTyxLQUFLLENBQUNqTyxLQUFOLENBQVl1TyxPQUFuQixLQUE2QixVQUE3QyxFQUF3RDtBQUFDTixlQUFLLENBQUNqTyxLQUFOLENBQVl1TyxPQUFaLENBQW9CN0MsQ0FBcEI7QUFBd0I7O0FBQUEsWUFBRyxDQUFDQSxDQUFDLENBQUM4QyxnQkFBTixFQUF1QjtBQUFDLGVBQUsvQyxXQUFMLENBQWlCQyxDQUFqQjtBQUFxQjtBQUFDO0FBQWhkLEtBQVYsQ0FGckIsQ0FFaWY7QUFDcmdCOztBQUNBLFFBQUcsS0FBSzFMLEtBQUwsQ0FBV3lPLFFBQVgsSUFBcUJSLEtBQUssQ0FBQ1MsSUFBTixLQUFhLEdBQWIsSUFBa0IsRUFBRSxVQUFTVCxLQUFLLENBQUNqTyxLQUFqQixDQUExQyxFQUFrRTtBQUFDQSxXQUFLLENBQUN3SSxJQUFOLEdBQVdZLEVBQUUsSUFBRVosSUFBZjtBQUFxQixLQUpwRSxDQUlvRTtBQUN4Rjs7O0FBQ0EsUUFBR21HLEtBQUgsRUFBNEMsZ0NBQStPOztBQUFBLFdBQU96RyxNQUFNLENBQUNELE9BQVAsQ0FBZTJHLFlBQWYsQ0FBNEJYLEtBQTVCLEVBQWtDak8sS0FBbEMsQ0FBUDtBQUFpRDs7QUFuQm9SOztBQW1CblIsVUFBd0M7QUFBQyxNQUFJaU4sSUFBSSxHQUFDLENBQUMsR0FBRTdFLE1BQU0sQ0FBQ3lHLFFBQVYsRUFBb0I3RCxPQUFPLENBQUNDLEtBQTVCLENBQVQsQ0FBRCxDQUE2Qzs7QUFDbGEsTUFBSTZELFNBQVMsR0FBQ2pILG1CQUFPLENBQUMsOEJBQUQsQ0FBckI7O0FBQW9DLE1BQUlrSCxLQUFLLEdBQUNsSCxtQkFBTyxDQUFDLDBDQUFELENBQWpCLENBRGlWLENBQzNTOzs7QUFDMUVxRCxNQUFJLENBQUM4RCxTQUFMLEdBQWVELEtBQUssQ0FBQztBQUFDdkcsUUFBSSxFQUFDc0csU0FBUyxDQUFDRyxTQUFWLENBQW9CLENBQUNILFNBQVMsQ0FBQ0ksTUFBWCxFQUFrQkosU0FBUyxDQUFDSyxNQUE1QixDQUFwQixFQUF5REMsVUFBL0Q7QUFBMEVoRyxNQUFFLEVBQUMwRixTQUFTLENBQUNHLFNBQVYsQ0FBb0IsQ0FBQ0gsU0FBUyxDQUFDSSxNQUFYLEVBQWtCSixTQUFTLENBQUNLLE1BQTVCLENBQXBCLENBQTdFO0FBQXNJbkMsWUFBUSxFQUFDOEIsU0FBUyxDQUFDTyxJQUF6SjtBQUE4SjdDLFdBQU8sRUFBQ3NDLFNBQVMsQ0FBQ08sSUFBaEw7QUFBcUw1QyxXQUFPLEVBQUNxQyxTQUFTLENBQUNPLElBQXZNO0FBQTRNWixZQUFRLEVBQUNLLFNBQVMsQ0FBQ08sSUFBL047QUFBb08vQyxVQUFNLEVBQUN3QyxTQUFTLENBQUNPLElBQXJQO0FBQTBQeEwsWUFBUSxFQUFDaUwsU0FBUyxDQUFDRyxTQUFWLENBQW9CLENBQUNILFNBQVMsQ0FBQ1EsT0FBWCxFQUFtQixDQUFDdFAsS0FBRCxFQUFPdVAsUUFBUCxLQUFrQjtBQUFDLFVBQUlDLEtBQUssR0FBQ3hQLEtBQUssQ0FBQ3VQLFFBQUQsQ0FBZjs7QUFBMEIsVUFBRyxPQUFPQyxLQUFQLEtBQWUsUUFBbEIsRUFBMkI7QUFBQ3ZDLFlBQUksQ0FBQyxpSUFBRCxDQUFKO0FBQXlJOztBQUFBLGFBQU8sSUFBUDtBQUFhLEtBQWxQLENBQXBCLEVBQXlRbUM7QUFBNWdCLEdBQUQsQ0FBcEI7QUFBK2lCOztBQUFBLElBQUlLLFFBQVEsR0FBQ3ZFLElBQWI7QUFBa0JuRCxPQUFPLENBQUNFLE9BQVIsR0FBZ0J3SCxRQUFoQixDOzs7Ozs7Ozs7Ozs7QUN2QnBqQjs7QUFBQSxJQUFJM0gsdUJBQXVCLEdBQUNELG1CQUFPLENBQUMsc0hBQUQsQ0FBbkM7O0FBQXFGLElBQUlELHNCQUFzQixHQUFDQyxtQkFBTyxDQUFDLG9IQUFELENBQWxDOztBQUFtRkUsT0FBTyxDQUFDQyxVQUFSLEdBQW1CLElBQW5CO0FBQXdCRCxPQUFPLENBQUMySCxTQUFSLEdBQWtCQSxTQUFsQjtBQUE0QjNILE9BQU8sQ0FBQzRILHdCQUFSLEdBQWlDQSx3QkFBakM7QUFBMEQ1SCxPQUFPLENBQUM2SCxZQUFSLEdBQXFCN0gsT0FBTyxDQUFDOEgsVUFBUixHQUFtQjlILE9BQU8sQ0FBQ0UsT0FBUixHQUFnQixLQUFLLENBQTdEOztBQUErRCxJQUFJQyxNQUFNLEdBQUNOLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLG9CQUFELENBQVIsQ0FBakM7O0FBQW9ELElBQUlTLFFBQVEsR0FBQ1IsdUJBQXVCLENBQUNELG1CQUFPLENBQUMsbUdBQUQsQ0FBUixDQUFwQzs7QUFBa0ZFLE9BQU8sQ0FBQytILE1BQVIsR0FBZXhILFFBQVEsQ0FBQ0wsT0FBeEI7QUFBZ0NGLE9BQU8sQ0FBQ2dJLFVBQVIsR0FBbUJ6SCxRQUFRLENBQUN5SCxVQUE1Qjs7QUFBdUMsSUFBSUMsY0FBYyxHQUFDbkksbUJBQU8sQ0FBQyw0RUFBRCxDQUExQjs7QUFBZ0UsSUFBSW9JLFdBQVcsR0FBQ3JJLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLHFFQUFELENBQVIsQ0FBdEM7O0FBQWlFRSxPQUFPLENBQUM4SCxVQUFSLEdBQW1CSSxXQUFXLENBQUNoSSxPQUEvQjtBQUF1Qzs7QUFBbUIsSUFBSWlJLGVBQWUsR0FBQztBQUFDQyxRQUFNLEVBQUMsSUFBUjtBQUFhO0FBQzN3QkMsZ0JBQWMsRUFBQyxFQUQrdUI7O0FBQzV1QkMsT0FBSyxDQUFDakcsRUFBRCxFQUFJO0FBQUMsUUFBRyxLQUFLK0YsTUFBUixFQUFlLE9BQU8vRixFQUFFLEVBQVQ7O0FBQVksZUFBK0IsRUFBK0I7QUFBQzs7QUFEd29CLENBQXBCLEMsQ0FDbG5COztBQUN4SCxJQUFJa0csaUJBQWlCLEdBQUMsQ0FBQyxVQUFELEVBQVksT0FBWixFQUFvQixPQUFwQixFQUE0QixRQUE1QixFQUFxQyxZQUFyQyxFQUFrRCxZQUFsRCxFQUErRCxVQUEvRCxDQUF0QjtBQUFpRyxJQUFJQyxZQUFZLEdBQUMsQ0FBQyxrQkFBRCxFQUFvQixxQkFBcEIsRUFBMEMscUJBQTFDLEVBQWdFLGtCQUFoRSxFQUFtRixpQkFBbkYsRUFBcUcsb0JBQXJHLENBQWpCO0FBQTRJLElBQUlDLGdCQUFnQixHQUFDLENBQUMsTUFBRCxFQUFRLFNBQVIsRUFBa0IsUUFBbEIsRUFBMkIsTUFBM0IsRUFBa0MsVUFBbEMsRUFBNkMsZ0JBQTdDLENBQXJCLEMsQ0FBb0Y7O0FBQ2pVQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JSLGVBQXRCLEVBQXNDLFFBQXRDLEVBQStDO0FBQUM3RixLQUFHLEdBQUU7QUFBQyxXQUFPL0IsUUFBUSxDQUFDTCxPQUFULENBQWlCMEksTUFBeEI7QUFBZ0M7O0FBQXZDLENBQS9DO0FBQXlGTCxpQkFBaUIsQ0FBQ3RHLE9BQWxCLENBQTBCNEcsS0FBSyxJQUFFO0FBQUM7QUFDM0g7QUFDQTtBQUNBO0FBQ0FILFFBQU0sQ0FBQ0MsY0FBUCxDQUFzQlIsZUFBdEIsRUFBc0NVLEtBQXRDLEVBQTRDO0FBQUN2RyxPQUFHLEdBQUU7QUFBQyxVQUFJOEYsTUFBTSxHQUFDVSxTQUFTLEVBQXBCO0FBQXVCLGFBQU9WLE1BQU0sQ0FBQ1MsS0FBRCxDQUFiO0FBQXNCOztBQUFwRCxHQUE1QztBQUFvRyxDQUpYO0FBSWFKLGdCQUFnQixDQUFDeEcsT0FBakIsQ0FBeUI0RyxLQUFLLElBQUU7QUFBQztBQUN2STs7QUFBQ1YsaUJBQWUsQ0FBQ1UsS0FBRCxDQUFmLEdBQXVCLFlBQVU7QUFBQyxRQUFJVCxNQUFNLEdBQUNVLFNBQVMsRUFBcEI7QUFBdUIsV0FBT1YsTUFBTSxDQUFDUyxLQUFELENBQU4sQ0FBYyxHQUFHRSxTQUFqQixDQUFQO0FBQW9DLEdBQTdGO0FBQStGLENBRE07QUFDSlAsWUFBWSxDQUFDdkcsT0FBYixDQUFxQitHLEtBQUssSUFBRTtBQUFDYixpQkFBZSxDQUFDRyxLQUFoQixDQUFzQixNQUFJO0FBQUMvSCxZQUFRLENBQUNMLE9BQVQsQ0FBaUIwSSxNQUFqQixDQUF3QnpRLEVBQXhCLENBQTJCNlEsS0FBM0IsRUFBaUMsWUFBVTtBQUFDLFVBQUlDLFVBQVUsR0FBQyxPQUFLRCxLQUFLLENBQUNFLE1BQU4sQ0FBYSxDQUFiLEVBQWdCQyxXQUFoQixFQUFMLEdBQW1DSCxLQUFLLENBQUNJLFNBQU4sQ0FBZ0IsQ0FBaEIsQ0FBbEQ7QUFBcUUsVUFBSUMsZ0JBQWdCLEdBQUNsQixlQUFyQjs7QUFBcUMsVUFBR2tCLGdCQUFnQixDQUFDSixVQUFELENBQW5CLEVBQWdDO0FBQUMsWUFBRztBQUFDSSwwQkFBZ0IsQ0FBQ0osVUFBRCxDQUFoQixDQUE2QixHQUFHRixTQUFoQztBQUE0QyxTQUFoRCxDQUFnRCxPQUFNL0YsR0FBTixFQUFVO0FBQUM7QUFDNVlDLGlCQUFPLENBQUNDLEtBQVIsQ0FBYywwQ0FBd0MrRixVQUF0RCxFQUQyWSxDQUN6VTs7QUFDbEVoRyxpQkFBTyxDQUFDQyxLQUFSLENBQWNGLEdBQUcsQ0FBQ3NHLE9BQUosR0FBWSxJQUFaLEdBQWlCdEcsR0FBRyxDQUFDdUcsS0FBbkM7QUFBMkM7QUFBQztBQUFDLEtBRjZHO0FBRTFHLEdBRitFO0FBRTVFLENBRitDOztBQUU3QyxTQUFTVCxTQUFULEdBQW9CO0FBQUMsTUFBRyxDQUFDWCxlQUFlLENBQUNDLE1BQXBCLEVBQTJCO0FBQUMsUUFBSWtCLE9BQU8sR0FBQyxnQ0FBOEIseUVBQTFDO0FBQW9ILFVBQU0sSUFBSUUsS0FBSixDQUFVRixPQUFWLENBQU47QUFBMEI7O0FBQUEsU0FBT25CLGVBQWUsQ0FBQ0MsTUFBdkI7QUFBK0IsQyxDQUFBOzs7QUFDblIsSUFBSVYsUUFBUSxHQUFDUyxlQUFiLEMsQ0FBNkI7O0FBQzdCbkksT0FBTyxDQUFDRSxPQUFSLEdBQWdCd0gsUUFBaEI7O0FBQXlCLFNBQVNDLFNBQVQsR0FBb0I7QUFBQyxTQUFPeEgsTUFBTSxDQUFDRCxPQUFQLENBQWV1SixVQUFmLENBQTBCeEIsY0FBYyxDQUFDeUIsYUFBekMsQ0FBUDtBQUFnRSxDLENBQUE7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBSTdCLFlBQVksR0FBQyxTQUFTQSxZQUFULEdBQXVCO0FBQUMsT0FBSSxJQUFJOEIsSUFBSSxHQUFDWixTQUFTLENBQUNhLE1BQW5CLEVBQTBCQyxJQUFJLEdBQUMsSUFBSUMsS0FBSixDQUFVSCxJQUFWLENBQS9CLEVBQStDSSxJQUFJLEdBQUMsQ0FBeEQsRUFBMERBLElBQUksR0FBQ0osSUFBL0QsRUFBb0VJLElBQUksRUFBeEUsRUFBMkU7QUFBQ0YsUUFBSSxDQUFDRSxJQUFELENBQUosR0FBV2hCLFNBQVMsQ0FBQ2dCLElBQUQsQ0FBcEI7QUFBNEI7O0FBQUE1QixpQkFBZSxDQUFDQyxNQUFoQixHQUF1QixJQUFJN0gsUUFBUSxDQUFDTCxPQUFiLENBQXFCLEdBQUcySixJQUF4QixDQUF2QjtBQUFxRDFCLGlCQUFlLENBQUNFLGNBQWhCLENBQStCcEcsT0FBL0IsQ0FBdUNJLEVBQUUsSUFBRUEsRUFBRSxFQUE3QztBQUFpRDhGLGlCQUFlLENBQUNFLGNBQWhCLEdBQStCLEVBQS9CO0FBQWtDLFNBQU9GLGVBQWUsQ0FBQ0MsTUFBdkI7QUFBK0IsQ0FBeFQsQyxDQUF5VDs7O0FBQ3pUcEksT0FBTyxDQUFDNkgsWUFBUixHQUFxQkEsWUFBckI7O0FBQWtDLFNBQVNELHdCQUFULENBQWtDUSxNQUFsQyxFQUF5QztBQUFDLE1BQUk5SCxPQUFPLEdBQUM4SCxNQUFaO0FBQW1CLE1BQUk0QixRQUFRLEdBQUMsRUFBYjs7QUFBZ0IsT0FBSSxJQUFJQyxRQUFSLElBQW9CMUIsaUJBQXBCLEVBQXNDO0FBQUMsUUFBRyxPQUFPakksT0FBTyxDQUFDMkosUUFBRCxDQUFkLEtBQTJCLFFBQTlCLEVBQXVDO0FBQUNELGNBQVEsQ0FBQ0MsUUFBRCxDQUFSLEdBQW1CdkIsTUFBTSxDQUFDd0IsTUFBUCxDQUFjLEVBQWQsRUFBaUI1SixPQUFPLENBQUMySixRQUFELENBQXhCLENBQW5CLENBQUQsQ0FBd0Q7O0FBQ3JQO0FBQVU7O0FBQUFELFlBQVEsQ0FBQ0MsUUFBRCxDQUFSLEdBQW1CM0osT0FBTyxDQUFDMkosUUFBRCxDQUExQjtBQUFzQyxHQUQyQixDQUMzQjs7O0FBQ2hERCxVQUFRLENBQUNwQixNQUFULEdBQWdCckksUUFBUSxDQUFDTCxPQUFULENBQWlCMEksTUFBakM7QUFBd0NILGtCQUFnQixDQUFDeEcsT0FBakIsQ0FBeUI0RyxLQUFLLElBQUU7QUFBQ21CLFlBQVEsQ0FBQ25CLEtBQUQsQ0FBUixHQUFnQixZQUFVO0FBQUMsYUFBT3ZJLE9BQU8sQ0FBQ3VJLEtBQUQsQ0FBUCxDQUFlLEdBQUdFLFNBQWxCLENBQVA7QUFBcUMsS0FBaEU7QUFBa0UsR0FBbkc7QUFBcUcsU0FBT2lCLFFBQVA7QUFBaUIsQzs7Ozs7Ozs7Ozs7O0FDckJqSjs7QUFBQSxJQUFJbkssc0JBQXNCLEdBQUNDLG1CQUFPLENBQUMsb0hBQUQsQ0FBbEM7O0FBQW1GRSxPQUFPLENBQUNDLFVBQVIsR0FBbUIsSUFBbkI7QUFBd0JELE9BQU8sQ0FBQ0UsT0FBUixHQUFnQjRILFVBQWhCOztBQUEyQixJQUFJM0gsTUFBTSxHQUFDTixzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvQkFBRCxDQUFSLENBQWpDOztBQUFvRCxJQUFJUSxPQUFPLEdBQUNSLG1CQUFPLENBQUMsMkRBQUQsQ0FBbkI7O0FBQWdDLFNBQVNnSSxVQUFULENBQW9CcUMsaUJBQXBCLEVBQXNDO0FBQUMsV0FBU0MsaUJBQVQsQ0FBMkJuUyxLQUEzQixFQUFpQztBQUFDLFdBQU0sYUFBYWtJLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlK0YsYUFBZixDQUE2QmtFLGlCQUE3QixFQUErQ3pCLE1BQU0sQ0FBQ3dCLE1BQVAsQ0FBYztBQUFDOUIsWUFBTSxFQUFDLENBQUMsR0FBRTlILE9BQU8sQ0FBQ3FILFNBQVg7QUFBUixLQUFkLEVBQStDMVAsS0FBL0MsQ0FBL0MsQ0FBbkI7QUFBMEg7O0FBQUFtUyxtQkFBaUIsQ0FBQ0MsZUFBbEIsR0FBa0NGLGlCQUFpQixDQUFDRSxlQUFwRCxDQUFtRTtBQUFuRTtBQUN6YUQsbUJBQWlCLENBQUNFLG1CQUFsQixHQUFzQ0gsaUJBQWlCLENBQUNHLG1CQUF4RDs7QUFBNEUsWUFBdUM7QUFBQyxRQUFJdlIsSUFBSSxHQUFDb1IsaUJBQWlCLENBQUNJLFdBQWxCLElBQStCSixpQkFBaUIsQ0FBQ3BSLElBQWpELElBQXVELFNBQWhFO0FBQTBFcVIscUJBQWlCLENBQUNHLFdBQWxCLEdBQThCLGdCQUFjeFIsSUFBZCxHQUFtQixHQUFqRDtBQUFzRDs7QUFBQSxTQUFPcVIsaUJBQVA7QUFBMEIsQzs7Ozs7Ozs7Ozs7O0FDRGxRO0FBQ2I7Ozs7Ozs7Ozs7OztBQVdBMUIsTUFBTSxDQUFDQyxjQUFQLENBQXNCM0ksT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFBRXlILE9BQUssRUFBRTtBQUFULENBQTdDOztBQUNBLFNBQVMrQyxJQUFULEdBQWdCO0FBQ1osUUFBTUMsR0FBRyxHQUFHL0IsTUFBTSxDQUFDZ0MsTUFBUCxDQUFjLElBQWQsQ0FBWjtBQUNBLFNBQU87QUFDSHZTLE1BQUUsQ0FBQ3dPLElBQUQsRUFBT2dFLE9BQVAsRUFBZ0I7QUFDZDtBQUNBLE9BQUNGLEdBQUcsQ0FBQzlELElBQUQsQ0FBSCxLQUFjOEQsR0FBRyxDQUFDOUQsSUFBRCxDQUFILEdBQVksRUFBMUIsQ0FBRCxFQUFnQ2lFLElBQWhDLENBQXFDRCxPQUFyQztBQUNILEtBSkU7O0FBS0hyUyxPQUFHLENBQUNxTyxJQUFELEVBQU9nRSxPQUFQLEVBQWdCO0FBQ2YsVUFBSUYsR0FBRyxDQUFDOUQsSUFBRCxDQUFQLEVBQWU7QUFDWDtBQUNBOEQsV0FBRyxDQUFDOUQsSUFBRCxDQUFILENBQVVrRSxNQUFWLENBQWlCSixHQUFHLENBQUM5RCxJQUFELENBQUgsQ0FBVW5DLE9BQVYsQ0FBa0JtRyxPQUFsQixNQUErQixDQUFoRCxFQUFtRCxDQUFuRDtBQUNIO0FBQ0osS0FWRTs7QUFXSEcsUUFBSSxDQUFDbkUsSUFBRCxFQUFPLEdBQUdvRSxJQUFWLEVBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxPQUFDTixHQUFHLENBQUM5RCxJQUFELENBQUgsSUFBYSxFQUFkLEVBQWtCcUUsS0FBbEIsR0FBMEJDLEdBQTFCLENBQStCTixPQUFELElBQWE7QUFDdkNBLGVBQU8sQ0FBQyxHQUFHSSxJQUFKLENBQVA7QUFDSCxPQUZEO0FBR0g7O0FBakJFLEdBQVA7QUFtQkg7O0FBQ0QvSyxPQUFPLENBQUNFLE9BQVIsR0FBa0JzSyxJQUFsQixDOzs7Ozs7Ozs7Ozs7QUNuQ2E7O0FBQ2IsSUFBSVUsZUFBZSxHQUFJLFFBQVEsS0FBS0EsZUFBZCxJQUFrQyxVQUFVQyxHQUFWLEVBQWU7QUFDbkUsU0FBUUEsR0FBRyxJQUFJQSxHQUFHLENBQUNsTCxVQUFaLEdBQTBCa0wsR0FBMUIsR0FBZ0M7QUFBRSxlQUFXQTtBQUFiLEdBQXZDO0FBQ0gsQ0FGRDs7QUFHQXpDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQjNJLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQUV5SCxPQUFLLEVBQUU7QUFBVCxDQUE3Qzs7QUFDQSxNQUFNMkQsS0FBSyxHQUFHdEwsbUJBQU8sQ0FBQyxnQkFBRCxDQUFyQjs7QUFDQSxNQUFNdUwsTUFBTSxHQUFHSCxlQUFlLENBQUNwTCxtQkFBTyxDQUFDLGlFQUFELENBQVIsQ0FBOUI7O0FBQ0EsTUFBTXdMLE9BQU8sR0FBR3hMLG1CQUFPLENBQUMsbUVBQUQsQ0FBdkI7O0FBQ0EsTUFBTXlMLFlBQVksR0FBR3pMLG1CQUFPLENBQUMsK0ZBQUQsQ0FBNUI7O0FBQ0EsTUFBTTBMLGVBQWUsR0FBRzFMLG1CQUFPLENBQUMscUdBQUQsQ0FBL0I7O0FBQ0EsTUFBTTJMLGFBQWEsR0FBRzNMLG1CQUFPLENBQUMsaUdBQUQsQ0FBN0I7O0FBQ0EsTUFBTTRMLFFBQVEsR0FBRzlFLE1BQUEsSUFBc0MsRUFBdkQ7O0FBQ0EsU0FBU25ELFdBQVQsQ0FBcUJrSSxJQUFyQixFQUEyQjtBQUN2QixTQUFPQSxJQUFJLENBQUNuSCxPQUFMLENBQWFrSCxRQUFiLE1BQTJCLENBQTNCLEdBQStCQSxRQUFRLEdBQUdDLElBQTFDLEdBQWlEQSxJQUF4RDtBQUNIOztBQUNEM0wsT0FBTyxDQUFDeUQsV0FBUixHQUFzQkEsV0FBdEI7O0FBQ0EsU0FBU21JLFdBQVQsQ0FBcUJELElBQXJCLEVBQTJCO0FBQ3ZCLFNBQU9BLElBQUksQ0FBQ25ILE9BQUwsQ0FBYWtILFFBQWIsTUFBMkIsQ0FBM0IsR0FDREMsSUFBSSxDQUFDRSxNQUFMLENBQVlILFFBQVEsQ0FBQzlCLE1BQXJCLEtBQWdDLEdBRC9CLEdBRUQrQixJQUZOO0FBR0g7O0FBQ0QzTCxPQUFPLENBQUM0TCxXQUFSLEdBQXNCQSxXQUF0Qjs7QUFDQSxTQUFTRSxPQUFULENBQWlCSCxJQUFqQixFQUF1QjtBQUNuQixTQUFPQSxJQUFJLENBQUNsSCxPQUFMLENBQWEsS0FBYixFQUFvQixFQUFwQixLQUEyQixHQUFsQztBQUNIOztBQUNELE1BQU1zSCxZQUFZLEdBQUlKLElBQUQsSUFBVUcsT0FBTyxDQUFDLENBQUNILElBQUQsSUFBU0EsSUFBSSxLQUFLLEdBQWxCLEdBQXdCLFFBQXhCLEdBQW1DQSxJQUFwQyxDQUF0Qzs7QUFDQSxTQUFTSyxhQUFULENBQXVCN0gsUUFBdkIsRUFBaUM4SCxLQUFqQyxFQUF3Q0MsY0FBeEMsRUFBd0Q3SixFQUF4RCxFQUE0RDtBQUN4RCxNQUFJOEosUUFBUSxHQUFHRCxjQUFjLEdBQUcsQ0FBSCxHQUFPLENBQXBDOztBQUNBLFdBQVNFLFdBQVQsR0FBdUI7QUFDbkIsV0FBT0MsS0FBSyxDQUFDZixPQUFPLENBQUM5SixvQkFBUixDQUE2QjtBQUN0QzJDLGNBQVEsRUFBRVYsV0FBVyxFQUNyQjtBQUNDLHFCQUFjNkksYUFBYSxDQUFDQyxPQUFRLEdBQUVYLFdBQVcsQ0FBQ3pILFFBQUQsQ0FBVyxPQUZ4QyxDQURpQjtBQUl0QzhIO0FBSnNDLEtBQTdCLENBQUQsRUFLUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQU8saUJBQVcsRUFBRTtBQVpiLEtBTFEsQ0FBTCxDQWtCSjdILElBbEJJLENBa0JDOEgsR0FBRyxJQUFJO0FBQ1gsVUFBSSxDQUFDQSxHQUFHLENBQUNDLEVBQVQsRUFBYTtBQUNULFlBQUksRUFBRVAsUUFBRixHQUFhLENBQWIsSUFBa0JNLEdBQUcsQ0FBQ0UsTUFBSixJQUFjLEdBQXBDLEVBQXlDO0FBQ3JDLGlCQUFPUCxXQUFXLEVBQWxCO0FBQ0g7O0FBQ0QsY0FBTSxJQUFJNUMsS0FBSixDQUFXLDZCQUFYLENBQU47QUFDSDs7QUFDRCxhQUFPaUQsR0FBRyxDQUFDRyxJQUFKLEVBQVA7QUFDSCxLQTFCTSxDQUFQO0FBMkJIOztBQUNELFNBQU9SLFdBQVcsR0FDYnpILElBREUsQ0FDR2pMLElBQUksSUFBSTtBQUNkLFdBQU8ySSxFQUFFLEdBQUdBLEVBQUUsQ0FBQzNJLElBQUQsQ0FBTCxHQUFjQSxJQUF2QjtBQUNILEdBSE0sRUFJRnFNLEtBSkUsQ0FJSy9DLEdBQUQsSUFBUztBQUNoQjtBQUNBO0FBQ0E7QUFDQSxRQUFJLENBQUNrSixjQUFMLEVBQXFCO0FBQ2pCO0FBQ0FsSixTQUFHLENBQUM2SixJQUFKLEdBQVcsaUJBQVg7QUFDSDs7QUFDRCxVQUFNN0osR0FBTjtBQUNILEdBYk0sQ0FBUDtBQWNIOztBQUNELE1BQU0rRSxNQUFOLENBQWE7QUFDVDFFLGFBQVcsQ0FBQ2MsUUFBRCxFQUFXOEgsS0FBWCxFQUFrQjVLLEVBQWxCLEVBQXNCO0FBQUV5TCxnQkFBRjtBQUFnQkMsY0FBaEI7QUFBNEJDLE9BQTVCO0FBQWlDQyxXQUFqQztBQUEwQzdKLGFBQTFDO0FBQXFESixPQUFyRDtBQUEwRGtLLGdCQUExRDtBQUF3RUM7QUFBeEUsR0FBdEIsRUFBNkc7QUFDcEg7QUFDQSxTQUFLQyxHQUFMLEdBQVcsRUFBWDs7QUFDQSxTQUFLQyxVQUFMLEdBQW1CMUosQ0FBRCxJQUFPO0FBQ3JCLFVBQUksQ0FBQ0EsQ0FBQyxDQUFDMkosS0FBUCxFQUFjO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUFFbkosa0JBQUY7QUFBWThIO0FBQVosWUFBc0IsSUFBNUI7QUFDQSxhQUFLc0IsV0FBTCxDQUFpQixjQUFqQixFQUFpQ2pDLE9BQU8sQ0FBQzlKLG9CQUFSLENBQTZCO0FBQUUyQyxrQkFBRjtBQUFZOEg7QUFBWixTQUE3QixDQUFqQyxFQUFvRlgsT0FBTyxDQUFDa0MsTUFBUixFQUFwRjtBQUNBO0FBQ0gsT0Fkb0IsQ0FlckI7QUFDQTs7O0FBQ0EsVUFBSTdKLENBQUMsQ0FBQzJKLEtBQUYsSUFDQSxLQUFLRyxLQURMLElBRUE5SixDQUFDLENBQUMySixLQUFGLENBQVFqTSxFQUFSLEtBQWUsS0FBS3FNLE1BRnBCLElBR0F0QyxLQUFLLENBQUN6SyxLQUFOLENBQVlnRCxDQUFDLENBQUMySixLQUFGLENBQVE1TSxHQUFwQixFQUF5QnlELFFBQXpCLEtBQXNDLEtBQUtBLFFBSC9DLEVBR3lEO0FBQ3JEO0FBQ0gsT0F0Qm9CLENBdUJyQjtBQUNBOzs7QUFDQSxVQUFJLEtBQUt3SixJQUFMLElBQWEsQ0FBQyxLQUFLQSxJQUFMLENBQVVoSyxDQUFDLENBQUMySixLQUFaLENBQWxCLEVBQXNDO0FBQ2xDO0FBQ0g7O0FBQ0QsWUFBTTtBQUFFNU0sV0FBRjtBQUFPVyxVQUFQO0FBQVd3RTtBQUFYLFVBQXVCbEMsQ0FBQyxDQUFDMkosS0FBL0I7O0FBQ0EsZ0JBQTJDO0FBQ3ZDLFlBQUksT0FBTzVNLEdBQVAsS0FBZSxXQUFmLElBQThCLE9BQU9XLEVBQVAsS0FBYyxXQUFoRCxFQUE2RDtBQUN6RDRCLGlCQUFPLENBQUNpQyxJQUFSLENBQWEsMEhBQWI7QUFDSDtBQUNKOztBQUNELFdBQUtULE9BQUwsQ0FBYS9ELEdBQWIsRUFBa0JXLEVBQWxCLEVBQXNCd0UsT0FBdEI7QUFDSCxLQW5DRDs7QUFvQ0EsU0FBSytILGNBQUwsR0FBdUJGLE1BQUQsSUFBWTtBQUM5QixZQUFNdkosUUFBUSxHQUFHNEgsWUFBWSxDQUFDWCxLQUFLLENBQUN6SyxLQUFOLENBQVkrTSxNQUFaLEVBQW9CdkosUUFBckIsQ0FBN0I7QUFDQSxhQUFPLFNBQ0QwSixTQURDLEdBRUQ3QixhQUFhLENBQUM3SCxRQUFELEVBQVcsSUFBWCxFQUFpQixLQUFLc0osS0FBdEIsRUFBNkIvVCxJQUFJLElBQUssS0FBSzBULEdBQUwsQ0FBU2pKLFFBQVQsSUFBcUJ6SyxJQUEzRCxDQUZuQjtBQUdILEtBTEQ7O0FBTUEsU0FBS29VLGNBQUwsR0FBdUJKLE1BQUQsSUFBWTtBQUM5QixVQUFJO0FBQUV2SixnQkFBRjtBQUFZOEg7QUFBWixVQUFzQmIsS0FBSyxDQUFDekssS0FBTixDQUFZK00sTUFBWixFQUFvQixJQUFwQixDQUExQjtBQUNBdkosY0FBUSxHQUFHNEgsWUFBWSxDQUFDNUgsUUFBRCxDQUF2QjtBQUNBLGFBQU82SCxhQUFhLENBQUM3SCxRQUFELEVBQVc4SCxLQUFYLEVBQWtCLEtBQUt3QixLQUF2QixDQUFwQjtBQUNILEtBSkQsQ0E3Q29ILENBa0RwSDs7O0FBQ0EsU0FBS00sS0FBTCxHQUFhakMsT0FBTyxDQUFDM0gsUUFBRCxDQUFwQixDQW5Eb0gsQ0FvRHBIOztBQUNBLFNBQUs2SixVQUFMLEdBQWtCLEVBQWxCLENBckRvSCxDQXNEcEg7QUFDQTtBQUNBOztBQUNBLFFBQUk3SixRQUFRLEtBQUssU0FBakIsRUFBNEI7QUFDeEIsV0FBSzZKLFVBQUwsQ0FBZ0IsS0FBS0QsS0FBckIsSUFBOEI7QUFDMUIzSyxpQkFEMEI7QUFFMUJuTCxhQUFLLEVBQUU2VSxZQUZtQjtBQUcxQjlKLFdBSDBCO0FBSTFCaUwsZUFBTyxFQUFFbkIsWUFBWSxJQUFJQSxZQUFZLENBQUNtQixPQUpaO0FBSzFCQyxlQUFPLEVBQUVwQixZQUFZLElBQUlBLFlBQVksQ0FBQ29CO0FBTFosT0FBOUI7QUFPSDs7QUFDRCxTQUFLRixVQUFMLENBQWdCLE9BQWhCLElBQTJCO0FBQUU1SyxlQUFTLEVBQUU0SjtBQUFiLEtBQTNCLENBbEVvSCxDQW1FcEg7QUFDQTs7QUFDQSxTQUFLcEUsTUFBTCxHQUFjYixNQUFNLENBQUNhLE1BQXJCO0FBQ0EsU0FBS21FLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBSzVJLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBSzhILEtBQUwsR0FBYUEsS0FBYixDQXhFb0gsQ0F5RXBIO0FBQ0E7O0FBQ0EsU0FBS3lCLE1BQUwsR0FDSTtBQUNBbkMsZ0JBQVksQ0FBQzRDLGNBQWIsQ0FBNEJoSyxRQUE1QixLQUF5Q21JLGFBQWEsQ0FBQzhCLFVBQXZELEdBQW9FakssUUFBcEUsR0FBK0U5QyxFQUZuRjtBQUdBLFNBQUtxSyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUsyQyxHQUFMLEdBQVduQixZQUFYO0FBQ0EsU0FBS29CLEdBQUwsR0FBVyxJQUFYO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQnRCLE9BQWhCLENBakZvSCxDQWtGcEg7QUFDQTs7QUFDQSxTQUFLUSxLQUFMLEdBQWEsSUFBYjtBQUNBLFNBQUtOLFVBQUwsR0FBa0JBLFVBQWxCOztBQUNBLGVBQW1DLEVBU2xDO0FBQ0osR0FqR1EsQ0FrR1Q7OztBQUNBLFNBQU9xQix3QkFBUCxDQUFnQzlOLEdBQWhDLEVBQXFDO0FBQ2pDLFFBQUlrRyxLQUFKLEVBQThDLEVBQTlDLE1BS0s7QUFDRCxhQUFPbEcsR0FBUDtBQUNIO0FBQ0o7O0FBQ0QrTixRQUFNLENBQUNWLEtBQUQsRUFBUTVDLEdBQVIsRUFBYTtBQUNmLFVBQU0vSCxTQUFTLEdBQUcrSCxHQUFHLENBQUNqTCxPQUFKLElBQWVpTCxHQUFqQztBQUNBLFVBQU16UixJQUFJLEdBQUcsS0FBS3NVLFVBQUwsQ0FBZ0JELEtBQWhCLENBQWI7O0FBQ0EsUUFBSSxDQUFDclUsSUFBTCxFQUFXO0FBQ1AsWUFBTSxJQUFJOFAsS0FBSixDQUFXLG9DQUFtQ3VFLEtBQU0sRUFBcEQsQ0FBTjtBQUNIOztBQUNELFVBQU1XLE9BQU8sR0FBR2hHLE1BQU0sQ0FBQ3dCLE1BQVAsQ0FBY3hCLE1BQU0sQ0FBQ3dCLE1BQVAsQ0FBYyxFQUFkLEVBQWtCeFEsSUFBbEIsQ0FBZCxFQUF1QztBQUFFMEosZUFBRjtBQUFhNkssYUFBTyxFQUFFOUMsR0FBRyxDQUFDOEMsT0FBMUI7QUFBbUNDLGFBQU8sRUFBRS9DLEdBQUcsQ0FBQytDO0FBQWhELEtBQXZDLENBQWhCO0FBQ0EsU0FBS0YsVUFBTCxDQUFnQkQsS0FBaEIsSUFBeUJXLE9BQXpCLENBUGUsQ0FRZjs7QUFDQSxRQUFJWCxLQUFLLEtBQUssT0FBZCxFQUF1QjtBQUNuQixXQUFLWSxNQUFMLENBQVksS0FBS1gsVUFBTCxDQUFnQixLQUFLRCxLQUFyQixDQUFaO0FBQ0E7QUFDSDs7QUFDRCxRQUFJQSxLQUFLLEtBQUssS0FBS0EsS0FBbkIsRUFBMEI7QUFDdEIsV0FBS1ksTUFBTCxDQUFZRCxPQUFaO0FBQ0g7QUFDSjs7QUFDREUsUUFBTSxHQUFHO0FBQ0wvTSxVQUFNLENBQUN1QyxRQUFQLENBQWdCd0ssTUFBaEI7QUFDSDtBQUNEOzs7OztBQUdBQyxNQUFJLEdBQUc7QUFDSGhOLFVBQU0sQ0FBQ2lOLE9BQVAsQ0FBZUQsSUFBZjtBQUNIO0FBQ0Q7Ozs7Ozs7O0FBTUFqRSxNQUFJLENBQUNsSyxHQUFELEVBQU1XLEVBQUUsR0FBR1gsR0FBWCxFQUFnQm1GLE9BQU8sR0FBRyxFQUExQixFQUE4QjtBQUM5QixXQUFPLEtBQUtrSixNQUFMLENBQVksV0FBWixFQUF5QnJPLEdBQXpCLEVBQThCVyxFQUE5QixFQUFrQ3dFLE9BQWxDLENBQVA7QUFDSDtBQUNEOzs7Ozs7OztBQU1BcEIsU0FBTyxDQUFDL0QsR0FBRCxFQUFNVyxFQUFFLEdBQUdYLEdBQVgsRUFBZ0JtRixPQUFPLEdBQUcsRUFBMUIsRUFBOEI7QUFDakMsV0FBTyxLQUFLa0osTUFBTCxDQUFZLGNBQVosRUFBNEJyTyxHQUE1QixFQUFpQ1csRUFBakMsRUFBcUN3RSxPQUFyQyxDQUFQO0FBQ0g7O0FBQ0RrSixRQUFNLENBQUNDLE1BQUQsRUFBUzVPLElBQVQsRUFBZTZPLEdBQWYsRUFBb0JwSixPQUFwQixFQUE2QjtBQUMvQixXQUFPLElBQUlnSSxPQUFKLENBQVksQ0FBQ3hKLE9BQUQsRUFBVTZLLE1BQVYsS0FBcUI7QUFDcEMsVUFBSSxDQUFDckosT0FBTyxDQUFDc0osRUFBYixFQUFpQjtBQUNiLGFBQUsxQixLQUFMLEdBQWEsS0FBYjtBQUNILE9BSG1DLENBSXBDOzs7QUFDQSxVQUFJbkMsT0FBTyxDQUFDOEQsRUFBWixFQUFnQjtBQUNaQyxtQkFBVyxDQUFDQyxJQUFaLENBQWlCLGFBQWpCO0FBQ0gsT0FQbUMsQ0FRcEM7QUFDQTs7O0FBQ0EsVUFBSTVPLEdBQUcsR0FBRyxPQUFPTixJQUFQLEtBQWdCLFFBQWhCLEdBQTJCa0wsT0FBTyxDQUFDOUosb0JBQVIsQ0FBNkJwQixJQUE3QixDQUEzQixHQUFnRUEsSUFBMUU7QUFDQSxVQUFJaUIsRUFBRSxHQUFHLE9BQU80TixHQUFQLEtBQWUsUUFBZixHQUEwQjNELE9BQU8sQ0FBQzlKLG9CQUFSLENBQTZCeU4sR0FBN0IsQ0FBMUIsR0FBOERBLEdBQXZFO0FBQ0F2TyxTQUFHLEdBQUcrQyxXQUFXLENBQUMvQyxHQUFELENBQWpCO0FBQ0FXLFFBQUUsR0FBR29DLFdBQVcsQ0FBQ3BDLEVBQUQsQ0FBaEIsQ0Fib0MsQ0FjcEM7QUFDQTs7QUFDQSxVQUFJdUYsS0FBSixFQUE4QyxFQU83Qzs7QUFDRCxXQUFLMkksa0JBQUwsQ0FBd0JsTyxFQUF4QixFQXhCb0MsQ0F5QnBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsVUFBSSxDQUFDd0UsT0FBTyxDQUFDc0osRUFBVCxJQUFlLEtBQUtLLGVBQUwsQ0FBcUJuTyxFQUFyQixDQUFuQixFQUE2QztBQUN6QyxhQUFLcU0sTUFBTCxHQUFjck0sRUFBZDtBQUNBMEcsY0FBTSxDQUFDYSxNQUFQLENBQWNrQyxJQUFkLENBQW1CLGlCQUFuQixFQUFzQ3pKLEVBQXRDO0FBQ0EsYUFBS2tNLFdBQUwsQ0FBaUJ5QixNQUFqQixFQUF5QnRPLEdBQXpCLEVBQThCVyxFQUE5QixFQUFrQ3dFLE9BQWxDO0FBQ0EsYUFBSzRKLFlBQUwsQ0FBa0JwTyxFQUFsQjtBQUNBMEcsY0FBTSxDQUFDYSxNQUFQLENBQWNrQyxJQUFkLENBQW1CLG9CQUFuQixFQUF5Q3pKLEVBQXpDO0FBQ0EsZUFBT2dELE9BQU8sQ0FBQyxJQUFELENBQWQ7QUFDSDs7QUFDRCxZQUFNO0FBQUVGLGdCQUFGO0FBQVk4SCxhQUFaO0FBQW1CbEw7QUFBbkIsVUFBZ0NxSyxLQUFLLENBQUN6SyxLQUFOLENBQVlELEdBQVosRUFBaUIsSUFBakIsQ0FBdEM7O0FBQ0EsVUFBSSxDQUFDeUQsUUFBRCxJQUFhcEQsUUFBakIsRUFBMkI7QUFDdkIsa0JBQTJDO0FBQ3ZDLGdCQUFNLElBQUl5SSxLQUFKLENBQVcsa0NBQWlDOUksR0FBSSxrREFBaEQsQ0FBTjtBQUNIOztBQUNELGVBQU8yRCxPQUFPLENBQUMsS0FBRCxDQUFkO0FBQ0gsT0E1Q21DLENBNkNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxVQUFJLENBQUMsS0FBS3FMLFFBQUwsQ0FBY3JPLEVBQWQsQ0FBTCxFQUF3QjtBQUNwQjJOLGNBQU0sR0FBRyxjQUFUO0FBQ0g7O0FBQ0QsWUFBTWpCLEtBQUssR0FBR2pDLE9BQU8sQ0FBQzNILFFBQUQsQ0FBckI7QUFDQSxZQUFNO0FBQUVPLGVBQU8sR0FBRztBQUFaLFVBQXNCbUIsT0FBNUI7O0FBQ0EsVUFBSTBGLFlBQVksQ0FBQzRDLGNBQWIsQ0FBNEJKLEtBQTVCLENBQUosRUFBd0M7QUFDcEMsY0FBTTtBQUFFNUosa0JBQVEsRUFBRXdMO0FBQVosWUFBMkJ2RSxLQUFLLENBQUN6SyxLQUFOLENBQVlVLEVBQVosQ0FBakM7QUFDQSxjQUFNdU8sVUFBVSxHQUFHbkUsYUFBYSxDQUFDb0UsYUFBZCxDQUE0QjlCLEtBQTVCLENBQW5CO0FBQ0EsY0FBTStCLFVBQVUsR0FBR3RFLGVBQWUsQ0FBQ3VFLGVBQWhCLENBQWdDSCxVQUFoQyxFQUE0Q0QsVUFBNUMsQ0FBbkI7O0FBQ0EsWUFBSSxDQUFDRyxVQUFMLEVBQWlCO0FBQ2IsZ0JBQU1FLGFBQWEsR0FBR3RILE1BQU0sQ0FBQ3VILElBQVAsQ0FBWUwsVUFBVSxDQUFDTSxNQUF2QixFQUErQkMsTUFBL0IsQ0FBc0NDLEtBQUssSUFBSSxDQUFDbkUsS0FBSyxDQUFDbUUsS0FBRCxDQUFyRCxDQUF0Qjs7QUFDQSxjQUFJSixhQUFhLENBQUNwRyxNQUFkLEdBQXVCLENBQTNCLEVBQThCO0FBQzFCLHNCQUEyQztBQUN2QzNHLHFCQUFPLENBQUNpQyxJQUFSLENBQWMsNkRBQUQsR0FDUixlQUFjOEssYUFBYSxDQUFDcEssSUFBZCxDQUFtQixJQUFuQixDQUF5Qiw4QkFENUM7QUFFSDs7QUFDRCxtQkFBT3NKLE1BQU0sQ0FBQyxJQUFJMUYsS0FBSixDQUFXLDhCQUE2Qm1HLFVBQVcsOENBQTZDNUIsS0FBTSxLQUE1RixHQUNuQiw2REFEUyxDQUFELENBQWI7QUFFSDtBQUNKLFNBVkQsTUFXSztBQUNEO0FBQ0FyRixnQkFBTSxDQUFDd0IsTUFBUCxDQUFjK0IsS0FBZCxFQUFxQjZELFVBQXJCO0FBQ0g7QUFDSjs7QUFDRC9ILFlBQU0sQ0FBQ2EsTUFBUCxDQUFja0MsSUFBZCxDQUFtQixrQkFBbkIsRUFBdUN6SixFQUF2QyxFQTNFb0MsQ0E0RXBDOztBQUNBLFdBQUtnUCxZQUFMLENBQWtCdEMsS0FBbEIsRUFBeUI1SixRQUF6QixFQUFtQzhILEtBQW5DLEVBQTBDNUssRUFBMUMsRUFBOENxRCxPQUE5QyxFQUF1REMsSUFBdkQsQ0FBNEQyTCxTQUFTLElBQUk7QUFDckUsY0FBTTtBQUFFcE47QUFBRixZQUFZb04sU0FBbEI7O0FBQ0EsWUFBSXBOLEtBQUssSUFBSUEsS0FBSyxDQUFDcU4sU0FBbkIsRUFBOEI7QUFDMUIsaUJBQU9sTSxPQUFPLENBQUMsS0FBRCxDQUFkO0FBQ0g7O0FBQ0QwRCxjQUFNLENBQUNhLE1BQVAsQ0FBY2tDLElBQWQsQ0FBbUIscUJBQW5CLEVBQTBDekosRUFBMUM7QUFDQSxhQUFLa00sV0FBTCxDQUFpQnlCLE1BQWpCLEVBQXlCdE8sR0FBekIsRUFBOEJXLEVBQTlCLEVBQWtDd0UsT0FBbEM7O0FBQ0Esa0JBQTJDO0FBQ3ZDLGdCQUFNMkssT0FBTyxHQUFHLEtBQUt4QyxVQUFMLENBQWdCLE9BQWhCLEVBQXlCNUssU0FBekM7QUFDQXZCLGdCQUFNLENBQUM0TyxJQUFQLENBQVlDLGFBQVosR0FDSUYsT0FBTyxDQUFDbkcsZUFBUixLQUE0Qm1HLE9BQU8sQ0FBQ2xHLG1CQUFwQyxJQUNJLENBQUNnRyxTQUFTLENBQUNsTixTQUFWLENBQW9CaUgsZUFGN0I7QUFHSDs7QUFDRCxhQUFLdEgsR0FBTCxDQUFTZ0wsS0FBVCxFQUFnQjVKLFFBQWhCLEVBQTBCOEgsS0FBMUIsRUFBaUM1SyxFQUFqQyxFQUFxQ2lQLFNBQXJDOztBQUNBLFlBQUlwTixLQUFKLEVBQVc7QUFDUDZFLGdCQUFNLENBQUNhLE1BQVAsQ0FBY2tDLElBQWQsQ0FBbUIsa0JBQW5CLEVBQXVDNUgsS0FBdkMsRUFBOEM3QixFQUE5QztBQUNBLGdCQUFNNkIsS0FBTjtBQUNIOztBQUNENkUsY0FBTSxDQUFDYSxNQUFQLENBQWNrQyxJQUFkLENBQW1CLHFCQUFuQixFQUEwQ3pKLEVBQTFDO0FBQ0EsZUFBT2dELE9BQU8sQ0FBQyxJQUFELENBQWQ7QUFDSCxPQXBCRCxFQW9CRzZLLE1BcEJIO0FBcUJILEtBbEdNLENBQVA7QUFtR0g7O0FBQ0QzQixhQUFXLENBQUN5QixNQUFELEVBQVN0TyxHQUFULEVBQWNXLEVBQWQsRUFBa0J3RSxPQUFPLEdBQUcsRUFBNUIsRUFBZ0M7QUFDdkMsY0FBMkM7QUFDdkMsVUFBSSxPQUFPaEUsTUFBTSxDQUFDaU4sT0FBZCxLQUEwQixXQUE5QixFQUEyQztBQUN2QzdMLGVBQU8sQ0FBQ0MsS0FBUixDQUFlLDJDQUFmO0FBQ0E7QUFDSDs7QUFDRCxVQUFJLE9BQU9yQixNQUFNLENBQUNpTixPQUFQLENBQWVFLE1BQWYsQ0FBUCxLQUFrQyxXQUF0QyxFQUFtRDtBQUMvQy9MLGVBQU8sQ0FBQ0MsS0FBUixDQUFlLDJCQUEwQjhMLE1BQU8sbUJBQWhEO0FBQ0E7QUFDSDtBQUNKOztBQUNELFFBQUlBLE1BQU0sS0FBSyxXQUFYLElBQTBCMUQsT0FBTyxDQUFDa0MsTUFBUixPQUFxQm5NLEVBQW5ELEVBQXVEO0FBQ25EUSxZQUFNLENBQUNpTixPQUFQLENBQWVFLE1BQWYsRUFBdUI7QUFDbkJ0TyxXQURtQjtBQUVuQlcsVUFGbUI7QUFHbkJ3RTtBQUhtQixPQUF2QixFQUtBO0FBQ0E7QUFDQTtBQUNBLFFBUkEsRUFRSXhFLEVBUko7QUFTSDtBQUNKOztBQUNEZ1AsY0FBWSxDQUFDdEMsS0FBRCxFQUFRNUosUUFBUixFQUFrQjhILEtBQWxCLEVBQXlCNUssRUFBekIsRUFBNkJxRCxPQUFPLEdBQUcsS0FBdkMsRUFBOEM7QUFDdEQsVUFBTWlNLGVBQWUsR0FBRyxLQUFLM0MsVUFBTCxDQUFnQkQsS0FBaEIsQ0FBeEIsQ0FEc0QsQ0FFdEQ7QUFDQTs7QUFDQSxRQUFJckosT0FBTyxJQUFJaU0sZUFBWCxJQUE4QixLQUFLNUMsS0FBTCxLQUFlQSxLQUFqRCxFQUF3RDtBQUNwRCxhQUFPRixPQUFPLENBQUN4SixPQUFSLENBQWdCc00sZUFBaEIsQ0FBUDtBQUNIOztBQUNELFVBQU1DLFdBQVcsR0FBRyxDQUFDNU4sR0FBRCxFQUFNNk4sYUFBTixLQUF3QjtBQUN4QyxhQUFPLElBQUloRCxPQUFKLENBQVl4SixPQUFPLElBQUk7QUFDMUIsWUFBSXJCLEdBQUcsQ0FBQzZKLElBQUosS0FBYSxpQkFBYixJQUFrQ2dFLGFBQXRDLEVBQXFEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQWhQLGdCQUFNLENBQUN1QyxRQUFQLENBQWdCM0QsSUFBaEIsR0FBdUJZLEVBQXZCLENBTmlELENBT2pEO0FBQ0E7O0FBQ0EyQixhQUFHLENBQUN1TixTQUFKLEdBQWdCLElBQWhCLENBVGlELENBVWpEOztBQUNBLGlCQUFPbE0sT0FBTyxDQUFDO0FBQUVuQixpQkFBSyxFQUFFRjtBQUFULFdBQUQsQ0FBZDtBQUNIOztBQUNELFlBQUlBLEdBQUcsQ0FBQ3VOLFNBQVIsRUFBbUI7QUFDZjtBQUNBLGlCQUFPbE0sT0FBTyxDQUFDO0FBQUVuQixpQkFBSyxFQUFFRjtBQUFULFdBQUQsQ0FBZDtBQUNIOztBQUNEcUIsZUFBTyxDQUFDLEtBQUt5TSxjQUFMLENBQW9CLFNBQXBCLEVBQ0huTSxJQURHLENBQ0U4SCxHQUFHLElBQUk7QUFDYixnQkFBTTtBQUFFc0UsZ0JBQUksRUFBRTNOO0FBQVIsY0FBc0JxSixHQUE1QjtBQUNBLGdCQUFNNkQsU0FBUyxHQUFHO0FBQUVsTixxQkFBRjtBQUFhSjtBQUFiLFdBQWxCO0FBQ0EsaUJBQU8sSUFBSTZLLE9BQUosQ0FBWXhKLE9BQU8sSUFBSTtBQUMxQixpQkFBS2dHLGVBQUwsQ0FBcUJqSCxTQUFyQixFQUFnQztBQUM1QkosaUJBRDRCO0FBRTVCbUIsc0JBRjRCO0FBRzVCOEg7QUFINEIsYUFBaEMsRUFJR3RILElBSkgsQ0FJUTFNLEtBQUssSUFBSTtBQUNicVksdUJBQVMsQ0FBQ3JZLEtBQVYsR0FBa0JBLEtBQWxCO0FBQ0FxWSx1QkFBUyxDQUFDcE4sS0FBVixHQUFrQkYsR0FBbEI7QUFDQXFCLHFCQUFPLENBQUNpTSxTQUFELENBQVA7QUFDSCxhQVJELEVBUUdVLE1BQU0sSUFBSTtBQUNUL04scUJBQU8sQ0FBQ0MsS0FBUixDQUFjLHlDQUFkLEVBQXlEOE4sTUFBekQ7QUFDQVYsdUJBQVMsQ0FBQ3BOLEtBQVYsR0FBa0JGLEdBQWxCO0FBQ0FzTix1QkFBUyxDQUFDclksS0FBVixHQUFrQixFQUFsQjtBQUNBb00scUJBQU8sQ0FBQ2lNLFNBQUQsQ0FBUDtBQUNILGFBYkQ7QUFjSCxXQWZNLENBQVA7QUFnQkgsU0FwQk8sRUFxQkh2SyxLQXJCRyxDQXFCRy9DLEdBQUcsSUFBSTROLFdBQVcsQ0FBQzVOLEdBQUQsRUFBTSxJQUFOLENBckJyQixDQUFELENBQVA7QUFzQkgsT0F4Q00sQ0FBUDtBQXlDSCxLQTFDRDs7QUEyQ0EsV0FBTyxJQUFJNkssT0FBSixDQUFZLENBQUN4SixPQUFELEVBQVU2SyxNQUFWLEtBQXFCO0FBQ3BDLFVBQUl5QixlQUFKLEVBQXFCO0FBQ2pCLGVBQU90TSxPQUFPLENBQUNzTSxlQUFELENBQWQ7QUFDSDs7QUFDRCxXQUFLRyxjQUFMLENBQW9CL0MsS0FBcEIsRUFBMkJwSixJQUEzQixDQUFnQzhILEdBQUcsSUFBSXBJLE9BQU8sQ0FBQztBQUMzQ2pCLGlCQUFTLEVBQUVxSixHQUFHLENBQUNzRSxJQUQ0QjtBQUUzQzlDLGVBQU8sRUFBRXhCLEdBQUcsQ0FBQ3RCLEdBQUosQ0FBUThDLE9BRjBCO0FBRzNDQyxlQUFPLEVBQUV6QixHQUFHLENBQUN0QixHQUFKLENBQVErQztBQUgwQixPQUFELENBQTlDLEVBSUlnQixNQUpKO0FBS0gsS0FUTSxFQVVGdkssSUFWRSxDQVVJMkwsU0FBRCxJQUFlO0FBQ3JCLFlBQU07QUFBRWxOLGlCQUFGO0FBQWE2SyxlQUFiO0FBQXNCQztBQUF0QixVQUFrQ29DLFNBQXhDOztBQUNBLGdCQUEyQztBQUN2QyxjQUFNO0FBQUVXO0FBQUYsWUFBeUJuUixtQkFBTyxDQUFDLDBCQUFELENBQXRDOztBQUNBLFlBQUksQ0FBQ21SLGtCQUFrQixDQUFDN04sU0FBRCxDQUF2QixFQUFvQztBQUNoQyxnQkFBTSxJQUFJb0csS0FBSixDQUFXLHlEQUF3RHJGLFFBQVMsR0FBNUUsQ0FBTjtBQUNIO0FBQ0o7O0FBQ0QsYUFBTyxLQUFLK00sUUFBTCxDQUFjLE1BQU1qRCxPQUFPLEdBQzVCLEtBQUtMLGNBQUwsQ0FBb0J2TSxFQUFwQixDQUQ0QixHQUU1QjZNLE9BQU8sR0FDSCxLQUFLSixjQUFMLENBQW9Cek0sRUFBcEIsQ0FERyxHQUVILEtBQUtnSixlQUFMLENBQXFCakgsU0FBckIsRUFDRjtBQUNBO0FBQ0llLGdCQURKO0FBRUk4SCxhQUZKO0FBR0l5QixjQUFNLEVBQUVyTTtBQUhaLE9BRkUsQ0FKSCxFQVVLc0QsSUFWTCxDQVVVMU0sS0FBSyxJQUFJO0FBQ3RCcVksaUJBQVMsQ0FBQ3JZLEtBQVYsR0FBa0JBLEtBQWxCO0FBQ0EsYUFBSytWLFVBQUwsQ0FBZ0JELEtBQWhCLElBQXlCdUMsU0FBekI7QUFDQSxlQUFPQSxTQUFQO0FBQ0gsT0FkTSxDQUFQO0FBZUgsS0FqQ00sRUFrQ0Z2SyxLQWxDRSxDQWtDSTZLLFdBbENKLENBQVA7QUFtQ0g7O0FBQ0Q3TixLQUFHLENBQUNnTCxLQUFELEVBQVE1SixRQUFSLEVBQWtCOEgsS0FBbEIsRUFBeUI1SyxFQUF6QixFQUE2QjNILElBQTdCLEVBQW1DO0FBQ2xDLFNBQUt5VCxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsU0FBS1ksS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBSzVKLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBSzhILEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUt5QixNQUFMLEdBQWNyTSxFQUFkO0FBQ0EsU0FBS3NOLE1BQUwsQ0FBWWpWLElBQVo7QUFDSDtBQUNEOzs7Ozs7QUFJQXlYLGdCQUFjLENBQUM5TyxFQUFELEVBQUs7QUFDZixTQUFLc0wsSUFBTCxHQUFZdEwsRUFBWjtBQUNIOztBQUNEbU4saUJBQWUsQ0FBQ25PLEVBQUQsRUFBSztBQUNoQixRQUFJLENBQUMsS0FBS3FNLE1BQVYsRUFDSSxPQUFPLEtBQVA7QUFDSixVQUFNLENBQUMwRCxZQUFELEVBQWVDLE9BQWYsSUFBMEIsS0FBSzNELE1BQUwsQ0FBWTRELEtBQVosQ0FBa0IsR0FBbEIsQ0FBaEM7QUFDQSxVQUFNLENBQUNDLFlBQUQsRUFBZUMsT0FBZixJQUEwQm5RLEVBQUUsQ0FBQ2lRLEtBQUgsQ0FBUyxHQUFULENBQWhDLENBSmdCLENBS2hCOztBQUNBLFFBQUlFLE9BQU8sSUFBSUosWUFBWSxLQUFLRyxZQUE1QixJQUE0Q0YsT0FBTyxLQUFLRyxPQUE1RCxFQUFxRTtBQUNqRSxhQUFPLElBQVA7QUFDSCxLQVJlLENBU2hCOzs7QUFDQSxRQUFJSixZQUFZLEtBQUtHLFlBQXJCLEVBQW1DO0FBQy9CLGFBQU8sS0FBUDtBQUNILEtBWmUsQ0FhaEI7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFdBQU9GLE9BQU8sS0FBS0csT0FBbkI7QUFDSDs7QUFDRC9CLGNBQVksQ0FBQ3BPLEVBQUQsRUFBSztBQUNiLFVBQU0sR0FBR29RLElBQUgsSUFBV3BRLEVBQUUsQ0FBQ2lRLEtBQUgsQ0FBUyxHQUFULENBQWpCLENBRGEsQ0FFYjs7QUFDQSxRQUFJRyxJQUFJLEtBQUssRUFBYixFQUFpQjtBQUNiNVAsWUFBTSxDQUFDZ0QsUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQjtBQUNBO0FBQ0gsS0FOWSxDQU9iOzs7QUFDQSxVQUFNNk0sSUFBSSxHQUFHNU0sUUFBUSxDQUFDNk0sY0FBVCxDQUF3QkYsSUFBeEIsQ0FBYjs7QUFDQSxRQUFJQyxJQUFKLEVBQVU7QUFDTkEsVUFBSSxDQUFDRSxjQUFMO0FBQ0E7QUFDSCxLQVpZLENBYWI7QUFDQTs7O0FBQ0EsVUFBTUMsTUFBTSxHQUFHL00sUUFBUSxDQUFDZ04saUJBQVQsQ0FBMkJMLElBQTNCLEVBQWlDLENBQWpDLENBQWY7O0FBQ0EsUUFBSUksTUFBSixFQUFZO0FBQ1JBLFlBQU0sQ0FBQ0QsY0FBUDtBQUNIO0FBQ0o7O0FBQ0RsQyxVQUFRLENBQUNoQyxNQUFELEVBQVM7QUFDYixXQUFPLEtBQUtBLE1BQUwsS0FBZ0JBLE1BQXZCO0FBQ0g7QUFDRDs7Ozs7Ozs7QUFNQXpJLFVBQVEsQ0FBQ3ZFLEdBQUQsRUFBTWdOLE1BQU0sR0FBR2hOLEdBQWYsRUFBb0JtRixPQUFPLEdBQUcsRUFBOUIsRUFBa0M7QUFDdEMsV0FBTyxJQUFJZ0ksT0FBSixDQUFZLENBQUN4SixPQUFELEVBQVU2SyxNQUFWLEtBQXFCO0FBQ3BDLFlBQU07QUFBRS9LLGdCQUFGO0FBQVlwRDtBQUFaLFVBQXlCcUssS0FBSyxDQUFDekssS0FBTixDQUFZRCxHQUFaLENBQS9COztBQUNBLFVBQUksQ0FBQ3lELFFBQUQsSUFBYXBELFFBQWpCLEVBQTJCO0FBQ3ZCLGtCQUEyQztBQUN2QyxnQkFBTSxJQUFJeUksS0FBSixDQUFXLGtDQUFpQzlJLEdBQUksa0RBQWhELENBQU47QUFDSDs7QUFDRDtBQUNILE9BUG1DLENBUXBDOzs7QUFDQSxnQkFBMkM7QUFDdkM7QUFDSDs7QUFDRCxZQUFNcU4sS0FBSyxHQUFHbkMsV0FBVyxDQUFDRSxPQUFPLENBQUMzSCxRQUFELENBQVIsQ0FBekI7QUFDQTBKLGFBQU8sQ0FBQ3BELEdBQVIsQ0FBWSxDQUNSLEtBQUtzQyxVQUFMLENBQWdCZ0YsWUFBaEIsQ0FBNkJyUixHQUE3QixFQUFrQ2tMLFdBQVcsQ0FBQzhCLE1BQUQsQ0FBN0MsQ0FEUSxFQUVSLEtBQUtYLFVBQUwsQ0FBZ0JsSCxPQUFPLENBQUNVLFFBQVIsR0FBbUIsVUFBbkIsR0FBZ0MsVUFBaEQsRUFBNER3SCxLQUE1RCxDQUZRLENBQVosRUFHR3BKLElBSEgsQ0FHUSxNQUFNTixPQUFPLEVBSHJCLEVBR3lCNkssTUFIekI7QUFJSCxLQWpCTSxDQUFQO0FBa0JIOztBQUNELFFBQU00QixjQUFOLENBQXFCL0MsS0FBckIsRUFBNEI7QUFDeEIsUUFBSXdDLFNBQVMsR0FBRyxLQUFoQjs7QUFDQSxVQUFNeUIsTUFBTSxHQUFJLEtBQUsxRCxHQUFMLEdBQVcsTUFBTTtBQUM3QmlDLGVBQVMsR0FBRyxJQUFaO0FBQ0gsS0FGRDs7QUFHQXhDLFNBQUssR0FBR25DLFdBQVcsQ0FBQ21DLEtBQUQsQ0FBbkI7QUFDQSxVQUFNa0UsZUFBZSxHQUFHLE1BQU0sS0FBS2xGLFVBQUwsQ0FBZ0JtRixRQUFoQixDQUF5Qm5FLEtBQXpCLENBQTlCOztBQUNBLFFBQUl3QyxTQUFKLEVBQWU7QUFDWCxZQUFNck4sS0FBSyxHQUFHLElBQUlzRyxLQUFKLENBQVcsd0NBQXVDdUUsS0FBTSxHQUF4RCxDQUFkO0FBQ0E3SyxXQUFLLENBQUNxTixTQUFOLEdBQWtCLElBQWxCO0FBQ0EsWUFBTXJOLEtBQU47QUFDSDs7QUFDRCxRQUFJOE8sTUFBTSxLQUFLLEtBQUsxRCxHQUFwQixFQUF5QjtBQUNyQixXQUFLQSxHQUFMLEdBQVcsSUFBWDtBQUNIOztBQUNELFdBQU8yRCxlQUFQO0FBQ0g7O0FBQ0RmLFVBQVEsQ0FBQ2lCLEVBQUQsRUFBSztBQUNULFFBQUk1QixTQUFTLEdBQUcsS0FBaEI7O0FBQ0EsVUFBTXlCLE1BQU0sR0FBRyxNQUFNO0FBQ2pCekIsZUFBUyxHQUFHLElBQVo7QUFDSCxLQUZEOztBQUdBLFNBQUtqQyxHQUFMLEdBQVcwRCxNQUFYO0FBQ0EsV0FBT0csRUFBRSxHQUFHeE4sSUFBTCxDQUFVakwsSUFBSSxJQUFJO0FBQ3JCLFVBQUlzWSxNQUFNLEtBQUssS0FBSzFELEdBQXBCLEVBQXlCO0FBQ3JCLGFBQUtBLEdBQUwsR0FBVyxJQUFYO0FBQ0g7O0FBQ0QsVUFBSWlDLFNBQUosRUFBZTtBQUNYLGNBQU12TixHQUFHLEdBQUcsSUFBSXdHLEtBQUosQ0FBVSxpQ0FBVixDQUFaO0FBQ0F4RyxXQUFHLENBQUN1TixTQUFKLEdBQWdCLElBQWhCO0FBQ0EsY0FBTXZOLEdBQU47QUFDSDs7QUFDRCxhQUFPdEosSUFBUDtBQUNILEtBVk0sQ0FBUDtBQVdIOztBQUNEMlEsaUJBQWUsQ0FBQ2pILFNBQUQsRUFBWXZKLEdBQVosRUFBaUI7QUFDNUIsVUFBTTtBQUFFdUosZUFBUyxFQUFFNEo7QUFBYixRQUFxQixLQUFLZ0IsVUFBTCxDQUFnQixPQUFoQixDQUEzQjs7QUFDQSxVQUFNb0UsT0FBTyxHQUFHLEtBQUs3RCxRQUFMLENBQWN2QixHQUFkLENBQWhCOztBQUNBblQsT0FBRyxDQUFDdVksT0FBSixHQUFjQSxPQUFkO0FBQ0EsV0FBTzlHLE9BQU8sQ0FBQytHLG1CQUFSLENBQTRCckYsR0FBNUIsRUFBaUM7QUFDcENvRixhQURvQztBQUVwQ2hQLGVBRm9DO0FBR3BDZ0YsWUFBTSxFQUFFLElBSDRCO0FBSXBDdk87QUFKb0MsS0FBakMsQ0FBUDtBQU1IOztBQUNEMFYsb0JBQWtCLENBQUNsTyxFQUFELEVBQUs7QUFDbkIsUUFBSSxLQUFLaU4sR0FBVCxFQUFjO0FBQ1YsWUFBTTNLLENBQUMsR0FBRyxJQUFJNkYsS0FBSixDQUFVLGlCQUFWLENBQVY7QUFDQTdGLE9BQUMsQ0FBQzRNLFNBQUYsR0FBYyxJQUFkO0FBQ0F4SSxZQUFNLENBQUNhLE1BQVAsQ0FBY2tDLElBQWQsQ0FBbUIsa0JBQW5CLEVBQXVDbkgsQ0FBdkMsRUFBMEN0QyxFQUExQztBQUNBLFdBQUtpTixHQUFMO0FBQ0EsV0FBS0EsR0FBTCxHQUFXLElBQVg7QUFDSDtBQUNKOztBQUNESyxRQUFNLENBQUNqVixJQUFELEVBQU87QUFDVCxTQUFLMlUsR0FBTCxDQUFTM1UsSUFBVCxFQUFlLEtBQUtzVSxVQUFMLENBQWdCLE9BQWhCLEVBQXlCNUssU0FBeEM7QUFDSDs7QUF2ZlE7O0FBeWZicEQsT0FBTyxDQUFDRSxPQUFSLEdBQWtCNkgsTUFBbEI7QUFDQUEsTUFBTSxDQUFDYSxNQUFQLEdBQWdCeUMsTUFBTSxDQUFDbkwsT0FBUCxFQUFoQixDOzs7Ozs7Ozs7Ozs7QUNsa0JhOztBQUNid0ksTUFBTSxDQUFDQyxjQUFQLENBQXNCM0ksT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFBRXlILE9BQUssRUFBRTtBQUFULENBQTdDLEUsQ0FDQTs7QUFDQSxNQUFNNkssVUFBVSxHQUFHLHNCQUFuQjs7QUFDQSxTQUFTbkUsY0FBVCxDQUF3QkosS0FBeEIsRUFBK0I7QUFDM0IsU0FBT3VFLFVBQVUsQ0FBQ0MsSUFBWCxDQUFnQnhFLEtBQWhCLENBQVA7QUFDSDs7QUFDRC9OLE9BQU8sQ0FBQ21PLGNBQVIsR0FBeUJBLGNBQXpCLEM7Ozs7Ozs7Ozs7OztBQ1BhOztBQUNiekYsTUFBTSxDQUFDQyxjQUFQLENBQXNCM0ksT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFBRXlILE9BQUssRUFBRTtBQUFULENBQTdDOztBQUNBLFNBQVNzSSxlQUFULENBQXlCSCxVQUF6QixFQUFxQztBQUNqQyxRQUFNO0FBQUU0QyxNQUFGO0FBQU10QztBQUFOLE1BQWlCTixVQUF2QjtBQUNBLFNBQVF6TCxRQUFELElBQWM7QUFDakIsVUFBTTJMLFVBQVUsR0FBRzBDLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRdE8sUUFBUixDQUFuQjs7QUFDQSxRQUFJLENBQUMyTCxVQUFMLEVBQWlCO0FBQ2IsYUFBTyxLQUFQO0FBQ0g7O0FBQ0QsVUFBTTRDLE1BQU0sR0FBSXRDLEtBQUQsSUFBVztBQUN0QixVQUFJO0FBQ0EsZUFBT3VDLGtCQUFrQixDQUFDdkMsS0FBRCxDQUF6QjtBQUNILE9BRkQsQ0FHQSxPQUFPd0MsQ0FBUCxFQUFVO0FBQ04sY0FBTTVQLEdBQUcsR0FBRyxJQUFJd0csS0FBSixDQUFVLHdCQUFWLENBQVo7QUFDQXhHLFdBQUcsQ0FBQzZKLElBQUosR0FBVyxlQUFYO0FBQ0EsY0FBTTdKLEdBQU47QUFDSDtBQUNKLEtBVEQ7O0FBVUEsVUFBTTZQLE1BQU0sR0FBRyxFQUFmO0FBQ0FuSyxVQUFNLENBQUN1SCxJQUFQLENBQVlDLE1BQVosRUFBb0JqTyxPQUFwQixDQUE2QjZRLFFBQUQsSUFBYztBQUN0QyxZQUFNQyxDQUFDLEdBQUc3QyxNQUFNLENBQUM0QyxRQUFELENBQWhCO0FBQ0EsWUFBTUUsQ0FBQyxHQUFHbEQsVUFBVSxDQUFDaUQsQ0FBQyxDQUFDRSxHQUFILENBQXBCOztBQUNBLFVBQUlELENBQUMsS0FBSzVhLFNBQVYsRUFBcUI7QUFDakJ5YSxjQUFNLENBQUNDLFFBQUQsQ0FBTixHQUFtQixDQUFDRSxDQUFDLENBQUN4TyxPQUFGLENBQVUsR0FBVixDQUFELEdBQ2J3TyxDQUFDLENBQUMxQixLQUFGLENBQVEsR0FBUixFQUFhckcsR0FBYixDQUFpQi9JLEtBQUssSUFBSXdRLE1BQU0sQ0FBQ3hRLEtBQUQsQ0FBaEMsQ0FEYSxHQUViNlEsQ0FBQyxDQUFDRyxNQUFGLEdBQ0ksQ0FBQ1IsTUFBTSxDQUFDTSxDQUFELENBQVAsQ0FESixHQUVJTixNQUFNLENBQUNNLENBQUQsQ0FKaEI7QUFLSDtBQUNKLEtBVkQ7QUFXQSxXQUFPSCxNQUFQO0FBQ0gsR0E1QkQ7QUE2Qkg7O0FBQ0Q3UyxPQUFPLENBQUMrUCxlQUFSLEdBQTBCQSxlQUExQixDOzs7Ozs7Ozs7Ozs7QUNsQ2E7O0FBQ2JySCxNQUFNLENBQUNDLGNBQVAsQ0FBc0IzSSxPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUFFeUgsT0FBSyxFQUFFO0FBQVQsQ0FBN0MsRSxDQUNBO0FBQ0E7O0FBQ0EsU0FBUzBMLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQTBCO0FBQ3RCLFNBQU9BLEdBQUcsQ0FBQzNPLE9BQUosQ0FBWSxzQkFBWixFQUFvQyxNQUFwQyxDQUFQO0FBQ0g7O0FBQ0QsU0FBU29MLGFBQVQsQ0FBdUJ3RCxlQUF2QixFQUF3QztBQUNwQztBQUNBLFFBQU1DLFlBQVksR0FBR0gsV0FBVyxDQUFDRSxlQUFlLENBQUM1TyxPQUFoQixDQUF3QixLQUF4QixFQUErQixFQUEvQixLQUFzQyxHQUF2QyxDQUFoQztBQUNBLFFBQU15TCxNQUFNLEdBQUcsRUFBZjtBQUNBLE1BQUlxRCxVQUFVLEdBQUcsQ0FBakI7QUFDQSxRQUFNQyxrQkFBa0IsR0FBR0YsWUFBWSxDQUFDN08sT0FBYixDQUFxQiw2QkFBckIsRUFBb0QsQ0FBQ21PLENBQUQsRUFBSWEsRUFBSixLQUFXO0FBQ3RGLFVBQU1DLFVBQVUsR0FBRyxhQUFhbkIsSUFBYixDQUFrQmtCLEVBQWxCLENBQW5CO0FBQ0F2RCxVQUFNLENBQUN1RCxFQUFFLENBQ0w7QUFESyxLQUVKaFAsT0FGRSxDQUVNLDBCQUZOLEVBRWtDLElBRmxDLEVBR0ZBLE9BSEUsQ0FHTSxRQUhOLEVBR2dCLEVBSGhCLENBQUQsQ0FJTjtBQUpNLEtBQU4sR0FLSTtBQUFFd08sU0FBRyxFQUFFTSxVQUFVLEVBQWpCO0FBQXFCTCxZQUFNLEVBQUVRO0FBQTdCLEtBTEo7QUFNQSxXQUFPQSxVQUFVLEdBQUcsUUFBSCxHQUFjLFdBQS9CO0FBQ0gsR0FUMEIsQ0FBM0I7QUFVQSxNQUFJQyx1QkFBSixDQWZvQyxDQWdCcEM7QUFDQTs7QUFDQSxZQUFtQztBQUMvQkEsMkJBQXVCLEdBQUdMLFlBQVksQ0FBQzdPLE9BQWIsQ0FBcUIsNkJBQXJCLEVBQW9ELENBQUNtTyxDQUFELEVBQUlhLEVBQUosS0FBVztBQUNyRixZQUFNQyxVQUFVLEdBQUcsYUFBYW5CLElBQWIsQ0FBa0JrQixFQUFsQixDQUFuQjtBQUNBLFlBQU1HLEdBQUcsR0FBR0gsRUFBRSxDQUNWO0FBRFUsT0FFVGhQLE9BRk8sQ0FFQywwQkFGRCxFQUU2QixJQUY3QixFQUdQQSxPQUhPLENBR0MsUUFIRCxFQUdXLEVBSFgsQ0FBWjtBQUlBLGFBQU9pUCxVQUFVLEdBQ1YsT0FBTVAsV0FBVyxDQUFDUyxHQUFELENBQU0sT0FEYixHQUVWLE9BQU1ULFdBQVcsQ0FBQ1MsR0FBRCxDQUFNLFVBRjlCO0FBR0gsS0FUeUIsQ0FBMUI7QUFVSDs7QUFDRCxTQUFPbEwsTUFBTSxDQUFDd0IsTUFBUCxDQUFjO0FBQUVzSSxNQUFFLEVBQUUsSUFBSXFCLE1BQUosQ0FBVyxNQUFNTCxrQkFBTixHQUEyQixTQUF0QyxFQUFpRCxHQUFqRCxDQUFOO0FBQTZEdEQ7QUFBN0QsR0FBZCxFQUFzRnlELHVCQUF1QixHQUM5RztBQUNFRyxjQUFVLEVBQUcsSUFBR0gsdUJBQXdCO0FBRDFDLEdBRDhHLEdBSTlHLEVBSkMsQ0FBUDtBQUtIOztBQUNEM1QsT0FBTyxDQUFDNlAsYUFBUixHQUF3QkEsYUFBeEIsQzs7Ozs7Ozs7Ozs7O0FDM0NhOztBQUNibkgsTUFBTSxDQUFDQyxjQUFQLENBQXNCM0ksT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFBRXlILE9BQUssRUFBRTtBQUFULENBQTdDOztBQUNBLE1BQU0yRCxLQUFLLEdBQUd0TCxtQkFBTyxDQUFDLGdCQUFELENBQXJCO0FBQ0E7Ozs7O0FBR0EsU0FBU2dILFFBQVQsQ0FBa0JxTCxFQUFsQixFQUFzQjtBQUNsQixNQUFJNEIsSUFBSSxHQUFHLEtBQVg7QUFDQSxNQUFJelMsTUFBSjtBQUNBLFNBQVEsQ0FBQyxHQUFHdUksSUFBSixLQUFhO0FBQ2pCLFFBQUksQ0FBQ2tLLElBQUwsRUFBVztBQUNQQSxVQUFJLEdBQUcsSUFBUDtBQUNBelMsWUFBTSxHQUFHNlEsRUFBRSxDQUFDLEdBQUd0SSxJQUFKLENBQVg7QUFDSDs7QUFDRCxXQUFPdkksTUFBUDtBQUNILEdBTkQ7QUFPSDs7QUFDRHRCLE9BQU8sQ0FBQzhHLFFBQVIsR0FBbUJBLFFBQW5COztBQUNBLFNBQVNqRyxpQkFBVCxHQUE2QjtBQUN6QixRQUFNO0FBQUVFLFlBQUY7QUFBWWlULFlBQVo7QUFBc0JDO0FBQXRCLE1BQStCcFMsTUFBTSxDQUFDdUMsUUFBNUM7QUFDQSxTQUFRLEdBQUVyRCxRQUFTLEtBQUlpVCxRQUFTLEdBQUVDLElBQUksR0FBRyxNQUFNQSxJQUFULEdBQWdCLEVBQUcsRUFBekQ7QUFDSDs7QUFDRGpVLE9BQU8sQ0FBQ2EsaUJBQVIsR0FBNEJBLGlCQUE1Qjs7QUFDQSxTQUFTMk0sTUFBVCxHQUFrQjtBQUNkLFFBQU07QUFBRS9NO0FBQUYsTUFBV29CLE1BQU0sQ0FBQ3VDLFFBQXhCO0FBQ0EsUUFBTXhELE1BQU0sR0FBR0MsaUJBQWlCLEVBQWhDO0FBQ0EsU0FBT0osSUFBSSxDQUFDMkksU0FBTCxDQUFleEksTUFBTSxDQUFDZ0osTUFBdEIsQ0FBUDtBQUNIOztBQUNENUosT0FBTyxDQUFDd04sTUFBUixHQUFpQkEsTUFBakI7O0FBQ0EsU0FBUzBHLGNBQVQsQ0FBd0I5USxTQUF4QixFQUFtQztBQUMvQixTQUFPLE9BQU9BLFNBQVAsS0FBcUIsUUFBckIsR0FDREEsU0FEQyxHQUVEQSxTQUFTLENBQUNtSCxXQUFWLElBQXlCbkgsU0FBUyxDQUFDckssSUFBbkMsSUFBMkMsU0FGakQ7QUFHSDs7QUFDRGlILE9BQU8sQ0FBQ2tVLGNBQVIsR0FBeUJBLGNBQXpCOztBQUNBLFNBQVNDLFNBQVQsQ0FBbUIxSCxHQUFuQixFQUF3QjtBQUNwQixTQUFPQSxHQUFHLENBQUMySCxRQUFKLElBQWdCM0gsR0FBRyxDQUFDNEgsV0FBM0I7QUFDSDs7QUFDRHJVLE9BQU8sQ0FBQ21VLFNBQVIsR0FBb0JBLFNBQXBCOztBQUNBLGVBQWU5QixtQkFBZixDQUFtQ3JGLEdBQW5DLEVBQXdDblQsR0FBeEMsRUFBNkM7QUFDekMsTUFBSXlhLEVBQUo7O0FBQ0EsWUFBMkM7QUFDdkMsUUFBSSxDQUFDQSxFQUFFLEdBQUd0SCxHQUFHLENBQUN1SCxTQUFWLE1BQXlCLElBQXpCLElBQWlDRCxFQUFFLEtBQUssS0FBSyxDQUE3QyxHQUFpRCxLQUFLLENBQXRELEdBQTBEQSxFQUFFLENBQUNqSyxlQUFqRSxFQUFrRjtBQUM5RSxZQUFNZixPQUFPLEdBQUksSUFBRzRLLGNBQWMsQ0FBQ2xILEdBQUQsQ0FBTSx3SkFBeEM7QUFDQSxZQUFNLElBQUl4RCxLQUFKLENBQVVGLE9BQVYsQ0FBTjtBQUNIO0FBQ0osR0FQd0MsQ0FRekM7OztBQUNBLFFBQU1tRCxHQUFHLEdBQUc1UyxHQUFHLENBQUM0UyxHQUFKLElBQVk1UyxHQUFHLENBQUNBLEdBQUosSUFBV0EsR0FBRyxDQUFDQSxHQUFKLENBQVE0UyxHQUEzQzs7QUFDQSxNQUFJLENBQUNPLEdBQUcsQ0FBQzNDLGVBQVQsRUFBMEI7QUFDdEIsUUFBSXhRLEdBQUcsQ0FBQ0EsR0FBSixJQUFXQSxHQUFHLENBQUN1SixTQUFuQixFQUE4QjtBQUMxQjtBQUNBLGFBQU87QUFDSG9SLGlCQUFTLEVBQUUsTUFBTW5DLG1CQUFtQixDQUFDeFksR0FBRyxDQUFDdUosU0FBTCxFQUFnQnZKLEdBQUcsQ0FBQ0EsR0FBcEI7QUFEakMsT0FBUDtBQUdIOztBQUNELFdBQU8sRUFBUDtBQUNIOztBQUNELFFBQU01QixLQUFLLEdBQUcsTUFBTStVLEdBQUcsQ0FBQzNDLGVBQUosQ0FBb0J4USxHQUFwQixDQUFwQjs7QUFDQSxNQUFJNFMsR0FBRyxJQUFJMEgsU0FBUyxDQUFDMUgsR0FBRCxDQUFwQixFQUEyQjtBQUN2QixXQUFPeFUsS0FBUDtBQUNIOztBQUNELE1BQUksQ0FBQ0EsS0FBTCxFQUFZO0FBQ1IsVUFBTXFSLE9BQU8sR0FBSSxJQUFHNEssY0FBYyxDQUFDbEgsR0FBRCxDQUFNLCtEQUE4RC9VLEtBQU0sWUFBNUc7QUFDQSxVQUFNLElBQUl1UixLQUFKLENBQVVGLE9BQVYsQ0FBTjtBQUNIOztBQUNELFlBQTJDO0FBQ3ZDLFFBQUlaLE1BQU0sQ0FBQ3VILElBQVAsQ0FBWWhZLEtBQVosRUFBbUIyUixNQUFuQixLQUE4QixDQUE5QixJQUFtQyxDQUFDL1AsR0FBRyxDQUFDQSxHQUE1QyxFQUFpRDtBQUM3Q29KLGFBQU8sQ0FBQ2lDLElBQVIsQ0FBYyxHQUFFZ1AsY0FBYyxDQUFDbEgsR0FBRCxDQUFNLDRLQUFwQztBQUNIO0FBQ0o7O0FBQ0QsU0FBTy9VLEtBQVA7QUFDSDs7QUFDRCtILE9BQU8sQ0FBQ3FTLG1CQUFSLEdBQThCQSxtQkFBOUI7QUFDQXJTLE9BQU8sQ0FBQ3lVLGFBQVIsR0FBd0IsQ0FDcEIsTUFEb0IsRUFFcEIsTUFGb0IsRUFHcEIsTUFIb0IsRUFJcEIsVUFKb0IsRUFLcEIsTUFMb0IsRUFNcEIsTUFOb0IsRUFPcEIsVUFQb0IsRUFRcEIsTUFSb0IsRUFTcEIsVUFUb0IsRUFVcEIsT0FWb0IsRUFXcEIsUUFYb0IsRUFZcEIsU0Fab0IsQ0FBeEI7O0FBY0EsU0FBU2pULG9CQUFULENBQThCZCxHQUE5QixFQUFtQ21GLE9BQW5DLEVBQTRDO0FBQ3hDLFlBQTRDO0FBQ3hDLFFBQUluRixHQUFHLEtBQUssSUFBUixJQUFnQixPQUFPQSxHQUFQLEtBQWUsUUFBbkMsRUFBNkM7QUFDekNnSSxZQUFNLENBQUN1SCxJQUFQLENBQVl2UCxHQUFaLEVBQWlCdUIsT0FBakIsQ0FBeUIyUixHQUFHLElBQUk7QUFDNUIsWUFBSTVULE9BQU8sQ0FBQ3lVLGFBQVIsQ0FBc0JqUSxPQUF0QixDQUE4Qm9QLEdBQTlCLE1BQXVDLENBQUMsQ0FBNUMsRUFBK0M7QUFDM0MzUSxpQkFBTyxDQUFDaUMsSUFBUixDQUFjLHFEQUFvRDBPLEdBQUksRUFBdEU7QUFDSDtBQUNKLE9BSkQ7QUFLSDtBQUNKOztBQUNELFNBQU94SSxLQUFLLENBQUNzSixNQUFOLENBQWFoVSxHQUFiLEVBQWtCbUYsT0FBbEIsQ0FBUDtBQUNIOztBQUNEN0YsT0FBTyxDQUFDd0Isb0JBQVIsR0FBK0JBLG9CQUEvQjtBQUNBeEIsT0FBTyxDQUFDMlUsRUFBUixHQUFhLE9BQU90RixXQUFQLEtBQXVCLFdBQXBDO0FBQ0FyUCxPQUFPLENBQUNvUCxFQUFSLEdBQWFwUCxPQUFPLENBQUMyVSxFQUFSLElBQ1QsT0FBT3RGLFdBQVcsQ0FBQ0MsSUFBbkIsS0FBNEIsVUFEbkIsSUFFVCxPQUFPRCxXQUFXLENBQUN1RixPQUFuQixLQUErQixVQUZuQyxDOzs7Ozs7Ozs7OztBQ3RHQSxpQkFBaUIsbUJBQU8sQ0FBQyxtRUFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E3QztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxNQUFNQyxJQUFJLEdBQUcsQ0FBQztBQUFFbmIsTUFBRjtBQUFRNkQsT0FBUjtBQUFldVg7QUFBZixDQUFELEtBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVGLE1BQUMsNkRBQUQ7QUFDRSxTQUFPLEVBQUMsU0FEVjtBQUVFLE9BQUssRUFBR3ZYLEtBQUssQ0FBQzBOLEdBQU4sQ0FBVSxDQUFDOEosSUFBRCxFQUFPQyxDQUFQLEtBQWE7QUFBSSxPQUFHLEVBQUVBLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFZLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUcsWUFBV0QsSUFBSSxDQUFDRSxPQUFMLENBQWFDLFdBQWIsRUFBMkIsRUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlILElBQUksQ0FBQ0UsT0FBVCxDQUF0RCxDQUFaLENBQXZCLENBRlY7QUFHRSxVQUFRLEVBQUUsWUFIWjtBQUlFLE1BQUksRUFBRXZiLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUXliLEtBSmhCO0FBS0UsTUFBSSxFQUFFemIsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRMGIsS0FMaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQU9FLE1BQUMsOERBQUQ7QUFDRSxjQUFZLEVBQUMsT0FEZjtBQUVFLE1BQUksRUFBRTFiLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUTJiLEVBRmhCO0FBR0UsZUFBYSxFQUFFM2IsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRNGIsRUFBUixDQUFXSixXQUFYLEVBSGpCO0FBSUUsY0FBWSxFQUFFeGIsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRNmIsRUFKeEI7QUFLRSxZQUFVLEVBQUUsRUFMZDtBQU1FLFNBQU8sRUFBRTdiLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUThiLEVBTm5CO0FBT0UsVUFBUSxFQUFFOWIsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRK2IsRUFQcEI7QUFRRSxTQUFPLEVBQUUvYixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFnYyxFQVJuQjtBQVNFLFVBQVEsRUFBRWhjLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUWljLEVBVHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FXRSxNQUFDLGtFQUFEO0FBQWUsTUFBSSxFQUFFamMsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRMmIsRUFBN0I7QUFBaUMsY0FBWSxFQUFFM2IsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRNmIsRUFBdkQ7QUFBMkQsWUFBVSxFQUFFLEVBQXZFO0FBQTJFLGVBQWEsRUFBRTdiLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUTRiLEVBQVIsQ0FBV0osV0FBWCxFQUExRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBWEYsRUFZRSxNQUFDLGtFQUFEO0FBQWUsTUFBSSxFQUFFeGIsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRa2MsRUFBN0I7QUFBaUMsY0FBWSxFQUFFbGMsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRbWMsRUFBdkQ7QUFBMkQsWUFBVSxFQUFFLEVBQXZFO0FBQTJFLGVBQWEsRUFBRW5jLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUW9jLEVBQVIsQ0FBV1osV0FBWCxFQUExRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBWkYsQ0FQRixDQXhDRjs7QUFnRU8sZUFBZWEsa0JBQWYsQ0FBa0NsYyxHQUFsQyxFQUFzQztBQUMzQyxRQUFNNFMsR0FBRyxHQUFHLE1BQU1KLHlEQUFLLENBQUMsdUNBQUQsQ0FBdkI7QUFDQSxRQUFNM1MsSUFBSSxHQUFHLE1BQU0rUyxHQUFHLENBQUNHLElBQUosRUFBbkI7QUFFQSxRQUFNb0osSUFBSSxHQUFHLE1BQU0zSix5REFBSyxDQUFDLG1DQUFELENBQXhCO0FBQ0EsUUFBTTlPLEtBQUssR0FBRyxNQUFNeVksSUFBSSxDQUFDcEosSUFBTCxFQUFwQjtBQUVBLE1BQUlrSSxZQUFZLEdBQUdqYixHQUFHLENBQUNvYyxHQUFKLENBQVFDLE9BQVIsQ0FBZ0IsWUFBaEIsRUFBOEJDLE1BQTlCLENBQXFDLGlCQUFyQyxDQUFuQjs7QUFFQSxNQUFHckIsWUFBWSxHQUFHLENBQWxCLEVBQW9CO0FBQ2xCLFdBQU87QUFDTDdjLFdBQUssRUFBRTtBQUFFeUIsWUFBRjtBQUFRNkQsYUFBUjtBQUFldVgsb0JBQVksRUFBRTtBQUE3QjtBQURGLEtBQVA7QUFHRCxHQUpELE1BSU87QUFDTCxXQUFPO0FBQ0w3YyxXQUFLLEVBQUU7QUFBRXlCLFlBQUY7QUFBUTZELGFBQVI7QUFBZXVYLG9CQUFZLEVBQUU7QUFBN0I7QUFERixLQUFQO0FBR0Q7QUFDRjtBQUdjRCxtRUFBZixFOzs7Ozs7Ozs7Ozs7QUNsR0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFNdGQsS0FBSyxHQUFHO0FBQ1pDLFdBQVMsRUFBRSxTQURDO0FBRVpnQixVQUFRLEVBQUUsU0FGRTtBQUdab0MsYUFBVyxFQUFFLFNBSEQ7QUFJWjdDLGNBQVksRUFBRTtBQUpGLENBQWQ7QUFPQSxNQUFNcWUsSUFBSSxHQUFHO0FBQ1hDLFNBQU8sRUFBRSxPQURFO0FBRVhDLFNBQU8sRUFBRSxPQUZFO0FBR1hDLFNBQU8sRUFBRSxPQUhFO0FBSVhwZixTQUFPLEVBQUUsT0FKRTtBQUtYQyxTQUFPLEVBQUUsT0FMRTtBQU1Yb2YsUUFBTSxFQUFFLFFBTkc7QUFPWDllLFNBQU8sRUFBRSxRQVBFO0FBUVgrZSxTQUFPLEVBQUUsUUFSRTtBQVNYaGUsU0FBTyxFQUFFO0FBVEUsQ0FBYjtBQVlBLE1BQU12QixRQUFRLEdBQUc7QUFDZm1mLFNBQU8sRUFBRywrQkFBOEJELElBQUksQ0FBQ0MsT0FBUSwyQ0FEdEM7QUFFZkMsU0FBTyxFQUFHLCtCQUE4QkYsSUFBSSxDQUFDRSxPQUFRLDJDQUZ0QztBQUdmQyxTQUFPLEVBQUcsK0JBQThCSCxJQUFJLENBQUNHLE9BQVEsMkNBSHRDO0FBSWZwZixTQUFPLEVBQUcsK0JBQThCaWYsSUFBSSxDQUFDamYsT0FBUSwyQ0FKdEM7QUFLZkMsU0FBTyxFQUFHLCtCQUE4QmdmLElBQUksQ0FBQ2hmLE9BQVEsMkNBTHRDO0FBTWZvZixRQUFNLEVBQUcsK0JBQThCSixJQUFJLENBQUNJLE1BQU8sMkNBTnBDO0FBT2Y5ZSxTQUFPLEVBQUcsK0JBQThCMGUsSUFBSSxDQUFDMWUsT0FBUSwyQ0FQdEM7QUFRZitlLFNBQU8sRUFBRywrQkFBOEJMLElBQUksQ0FBQ0ssT0FBUSwyQ0FSdEM7QUFTZmhlLFNBQU8sRUFBRywrQkFBOEIyZCxJQUFJLENBQUMzZCxPQUFRO0FBVHRDLENBQWpCO0FBWUEsTUFBTWhCLE1BQU0sR0FBRztBQUNiaUIsUUFBTSxFQUFHLCtCQUE4QjBkLElBQUksQ0FBQ0csT0FBUSwyQ0FEdkM7QUFFYkYsU0FBTyxFQUFHLCtCQUE4QkQsSUFBSSxDQUFDQyxPQUFRLDJDQUZ4QztBQUdiQyxTQUFPLEVBQUcsK0JBQThCRixJQUFJLENBQUNFLE9BQVEsMkNBSHhDO0FBSWJDLFNBQU8sRUFBRywrQkFBOEJILElBQUksQ0FBQ0csT0FBUSwyQ0FKeEM7QUFLYm5iLFFBQU0sRUFBRywrQkFBOEJnYixJQUFJLENBQUNoYixNQUFPLHFCQUFvQmdiLElBQUksQ0FBQ0ksTUFBTywyQ0FMdEU7QUFNYkEsUUFBTSxFQUFHLCtCQUE4QkosSUFBSSxDQUFDSSxNQUFPLDJDQU50QztBQU9iOWUsU0FBTyxFQUFHLCtCQUE4QjBlLElBQUksQ0FBQzFlLE9BQVEsMkNBUHhDO0FBUWIrZSxTQUFPLEVBQUcsK0JBQThCTCxJQUFJLENBQUNLLE9BQVEsMkNBUnhDO0FBU2JoZSxTQUFPLEVBQUcsK0JBQThCMmQsSUFBSSxDQUFDM2QsT0FBUTtBQVR4QyxDQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkEsK0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoic3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL21hbW1vdGgvdW5pdmVyc2l0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgcmV0aW5hLCBzdGFuZGFyZCwgY29sb3IgfSBmcm9tICcuLi9wdWJsaWMvc2NyZWVuc2l6ZXMnXG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuXG4gIEBtZWRpYSAke3N0YW5kYXJkLnRhYmxldFB9e1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICB9XG5cbiAgQG1lZGlhICR7c3RhbmRhcmQudGFibGV0TH17XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIH1cbmBcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDNgXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogJHtjb2xvci5qY3RPcmFuZ2V9O1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogLjI1cmVtO1xuICBcbiAgQG1lZGlhICR7c3RhbmRhcmQudGFibGV0UH17XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgQG1lZGlhICR7c3RhbmRhcmQudGFibGV0TH17XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cblxuICBAbWVkaWEgJHtyZXRpbmEubGFwdG9wTX17XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gIH1cbmBcblxuY29uc3QgQWxhcm1MaXN0ID0gc3R5bGVkLnVsYFxuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuYFxuXG5jb25zdCBBbGFybUxpc3RJdGVtID0gc3R5bGVkLmxpYFxuICBjb2xvcjogJHtjb2xvci5qY3RMaWdodEdyYXl9O1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogLjI1cmVtO1xuICBcbiAgQG1lZGlhICR7c3RhbmRhcmQudGFibGV0UH17XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cblxuICBAbWVkaWEgJHtzdGFuZGFyZC50YWJsZXRMfXtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuICBcbiAgQG1lZGlhICR7cmV0aW5hLmxhcHRvcE19e1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICB9XG5gXG5cblxuY29uc3QgQWxhcm1zID0gcHJvcHMgPT4gKFxuICA8Q29udGFpbmVyPlxuICAgIDxUaXRsZT57cHJvcHMudGl0bGV9PC9UaXRsZT5cblxuICAgIDxBbGFybUxpc3Q+XG4gICAgICA8QWxhcm1MaXN0SXRlbT5PbjogeyBwcm9wcy5vbiAhPT0gdW5kZWZpbmVkID8gcHJvcHMub24udG9GaXhlZCgyKSA6IHByb3BzLm9uIH08L0FsYXJtTGlzdEl0ZW0+XG4gICAgICA8QWxhcm1MaXN0SXRlbT5PZmY6IHsgcHJvcHMub2ZmICE9PSB1bmRlZmluZWQgPyBwcm9wcy5vZmYudG9GaXhlZCgyKSA6IHByb3BzLm9mZiB9PC9BbGFybUxpc3RJdGVtPlxuICAgIDwvQWxhcm1MaXN0PlxuICA8L0NvbnRhaW5lcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgQWxhcm1zIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IGNvbG9yLCBzdGFuZGFyZCwgcmV0aW5hIH0gZnJvbSAnLi4vcHVibGljL3NjcmVlbnNpemVzJ1xuXG5pbXBvcnQgVHJlbmQgZnJvbSAnLi4vY29tcG9uZW50cy9UcmVuZCdcbmltcG9ydCBEb3VnaG51dENoYXJ0IGZyb20gJy4vRG91Z2hudXRDaGFydCdcblxuY29uc3QgRGV0YWlsc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yLmpjdFdoaXRlfTtcbiAgXG4gIEBtZWRpYSAke3N0YW5kYXJkLmRlc2t0b3B9e1xuICAgIG1heC13aWR0aDogMzVyZW07XG4gICAgbWF4LWhlaWdodDogMzVyZW07XG4gIH1cblxuICBAbWVkaWEgJHtyZXRpbmEubW9iaWxlfXtcbiAgICBwYWRkaW5nOiAycmVtIDJyZW0gNHJlbSAycmVtO1xuICB9XG5gXG5cbmNvbnN0IERldGFpbHNOYW1lID0gc3R5bGVkLmgxYFxuICBjb2xvcjogI0ZGN0UyNjtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcblxuICBAbWVkaWEgJHtzdGFuZGFyZC50YWJsZXRQfXtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cblxuICBAbWVkaWEgJHtzdGFuZGFyZC50YWJsZXRMfXtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cblxuICBAbWVkaWEgJHtyZXRpbmEubGFwdG9wTX17XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICB9XG5gXG5cbmNvbnN0IFVuZGVybGluZSA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogMnB4O1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQxLDQxLDQxLC4xNSk7XG5gXG5cbmNvbnN0IERldGFpbHMgPSBwcm9wcyA9PiAoXG4gIDxEZXRhaWxzQ29udGFpbmVyPlxuICAgIDxEZXRhaWxzTmFtZT57cHJvcHMubmFtZX08L0RldGFpbHNOYW1lPlxuICAgIDxVbmRlcmxpbmUgLz5cbiAgICA8RG91Z2hudXRDaGFydCBjdXJyZW50VmFsdWU9e3Byb3BzLmN1cnJlbnRWYWx1ZX0gdG90YWxWYWx1ZT17cHJvcHMudG90YWxWYWx1ZX0gdW5pdE9mTWVhc3VyZT17cHJvcHMudW5pdE9mTWVhc3VyZX0gLz5cbiAgICB7LyogPFRyZW5kIFxuICAgICAgbW9uPXtwcm9wcy5tb259XG4gICAgICB0dWU9e3Byb3BzLnR1ZX1cbiAgICAgIHdlZD17cHJvcHMud2VkfVxuICAgICAgdGh1PXtwcm9wcy50aHV9XG4gICAgICBmcmk9e3Byb3BzLmZyaX1cbiAgICAgIHNhdD17cHJvcHMuc2F0fVxuICAgICAgc3VuPXtwcm9wcy5zdW59XG4gICAgLz4gKi99XG4gIDwvRGV0YWlsc0NvbnRhaW5lcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlscyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmltcG9ydCBEb3VnaG51dENoYXJ0IGZyb20gJy4vRG91Z2hudXRDaGFydCdcbmltcG9ydCBBbGFybXMgZnJvbSAnLi9BbGFybXMnXG5cblxuY29uc3QgRG91Z2hudXRBbGFybXMgPSBwcm9wcyA9PiAoXG4gIDxDb250YWluZXI+XG4gICAgPERvdWdobnV0Q2hhcnQgY3VycmVudFZhbHVlPXtwcm9wcy5jdXJyZW50VmFsdWV9IHRvdGFsVmFsdWU9e3Byb3BzLnRvdGFsVmFsdWV9IHVuaXRPZk1lYXN1cmU9e3Byb3BzLnVuaXRPZk1lYXN1cmV9IGFsYXJtT249e3Byb3BzLmFsYXJtT259IGFsYXJtT2ZmPXtwcm9wcy5hbGFybU9mZn0gLz5cbiAgICA8QWxhcm1zQ29udGFpbmVyPlxuICAgICAgPEFsYXJtcyB0aXRsZT1cIlRyYW5zZmVyIFB1bXBcIiBvbj17cHJvcHMudFB1bXBPbn0gb2ZmPXtwcm9wcy50UHVtcE9mZn0gLz5cbiAgICAgIDxBbGFybXMgdGl0bGU9XCJBbGFybVwiIG9uPXtwcm9wcy5hbGFybU9ufSBvZmY9e3Byb3BzLmFsYXJtT2ZmfSAvPlxuICAgIDwvQWxhcm1zQ29udGFpbmVyPlxuICA8L0NvbnRhaW5lcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgRG91Z2hudXRBbGFybXNcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxuYFxuXG5jb25zdCBBbGFybXNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcblxuICAmOmZpcnN0LWNoaWxke1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbmAiLCJpbXBvcnQgeyBEb3VnaG51dCB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMidcblxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IGNvbG9yIH0gZnJvbSAnLi4vcHVibGljL3NjcmVlbnNpemVzJ1xuXG5cbmNvbnN0IERvdWdobnV0Q2hhcnQgPSBwcm9wcyA9PiB7XG4gIFxuICBjb25zdCBkYXRhID0ge1xuICAgIGRhdGFzZXRzOiBbe1xuICAgICAgZGF0YTogW3Byb3BzLmN1cnJlbnRWYWx1ZSwgKHByb3BzLnRvdGFsVmFsdWUgLSBwcm9wcy5jdXJyZW50VmFsdWUpXSxcbiAgICAgIC8vIGJhY2tncm91bmRDb2xvcjogWyBjb2xvci5qY3RPcmFuZ2UsICdyZ2JhKDAsMCwwLCAuMDUpJyBdLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAoY3R4KSA9PiB7XG4gICAgICAgIC8vIGNvbnN0IGkgPSBjdHguZGF0YUluZGV4XG4gICAgICAgIGlmKGN0eC5kYXRhc2V0LmRhdGFbMF0gPCBwcm9wcy5hbGFybU9mZil7XG4gICAgICAgIHJldHVybiBbICdsaWdodGdyZWVuJywgJ3JnYmEoMCwwLDAsLjA1KScgXVxuICAgICAgfSBlbHNlIGlmKGN0eC5kYXRhc2V0LmRhdGFbMF0gPiBwcm9wcy5hbGFybU9uKXtcbiAgICAgICAgICByZXR1cm4gWyAncmVkJywgJ3JnYmEoMCwwLDAsLjA1KScgXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBbICcjZmZjYzAwJywgJ3JnYmEoMCwwLDAsLjA1KScgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYm9yZGVyV2lkdGg6IDBcbiAgICB9XVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8R3JhcGhDb250YWluZXI+XG4gICAgICA8R3JhcGhUaXRsZT57cHJvcHMubmFtZX08L0dyYXBoVGl0bGU+XG4gICAgICA8R3JhcGg+XG4gICAgICAgIDxEb3VnaG51dCBcbiAgICAgICAgICBkYXRhPXsgZGF0YSB9XG4gICAgICAgICAgd2lkdGg9eyAxNTAgfVxuICAgICAgICAgIGhlaWdodD17IDE1MCB9XG4gICAgICAgICAgb3B0aW9ucz17eyBcbiAgICAgICAgICAgIGN1dG91dFBlcmNlbnRhZ2U6IDgwLCBcbiAgICAgICAgICAgIHJvdGF0aW9uOiAoLTEuMjUgKiBNYXRoLlBJKSxcbiAgICAgICAgICAgIGNpcmN1bWZlcmVuY2U6ICgxLjUgKiBNYXRoLlBJKSxcbiAgICAgICAgICAgIHRvb2x0aXBzOiBmYWxzZSxcbiAgICAgICAgICAgIGhvdmVyOiBmYWxzZVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L0dyYXBoPlxuICAgICAgPFZvbHVtZT5cbiAgICAgICAgPEN1cnJlbnRWb2x1bWU+eyBwcm9wcy5jdXJyZW50VmFsdWUgIT09IG51bGwgPyBwcm9wcy5jdXJyZW50VmFsdWUudG9GaXhlZCgyKSA6IHByb3BzLmN1cnJlbnRWYWx1ZSB9PC9DdXJyZW50Vm9sdW1lPlxuICAgICAgICA8Q3VycmVudFZvbHVtZUxhYmVsPntwcm9wcy51bml0T2ZNZWFzdXJlfTwvQ3VycmVudFZvbHVtZUxhYmVsPlxuICAgICAgPC9Wb2x1bWU+XG4gICAgPC9HcmFwaENvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEb3VnaG51dENoYXJ0ICAgIFxuXG5cbmNvbnN0IEdyYXBoQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZDogMjUlIDFmciAvIDFmcjtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XG4gIHdpZHRoOiAyMHJlbTtcbiAgaGVpZ2h0OiAxNXJlbTtcbmBcbmNvbnN0IEdyYXBoVGl0bGUgPSBzdHlsZWQuaDFgXG4gIGdyaWQtY29sdW1uOiAxO1xuICBncmlkLXJvdzogMTtcbiAgZm9udC1zaXplOiAyLjRyZW07XG5gXG5cbmNvbnN0IEdyYXBoID0gc3R5bGVkLmRpdmBcbiAgZ3JpZC1jb2x1bW46IDE7XG4gIGdyaWQtcm93OiAyO1xuYFxuXG5jb25zdCBWb2x1bWUgPSBzdHlsZWQuZGl2YFxuICBncmlkLWNvbHVtbjogMTtcbiAgZ3JpZC1yb3c6IDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG5gXG5cbmNvbnN0IEN1cnJlbnRWb2x1bWUgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDIuNHJlbTtcbiAgY29sb3I6ICR7Y29sb3IuamN0RGFya0dyYXl9O1xuICBmb250LXdlaWdodDogYm9sZDtcbmBcblxuY29uc3QgQ3VycmVudFZvbHVtZUxhYmVsID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGNvbG9yOiAke2NvbG9yLmpjdERhcmtHcmF5fTtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIG1hcmdpbi1ib3R0b206IC4xcmVtO1xuICBtYXJnaW4tbGVmdDogLjJyZW07XG5gIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IGNvbG9yLCBzdGFuZGFyZCwgcmV0aW5hIH0gZnJvbSAnLi4vcHVibGljL3NjcmVlbnNpemVzJ1xuXG5pbXBvcnQgRG91Z2hudXRBbGFybXMgZnJvbSAnLi4vY29tcG9uZW50cy9Eb3VnaG51dEFsYXJtcydcbmltcG9ydCBUcmVuZCBmcm9tICcuLi9jb21wb25lbnRzL1RyZW5kJ1xuXG5jb25zdCBEZXRhaWxzQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3IuamN0V2hpdGV9O1xuICBcbiAgQG1lZGlhICR7c3RhbmRhcmQuZGVza3RvcH17XG4gICAgbWF4LXdpZHRoOiAzNXJlbTtcbiAgfVxuXG4gIEBtZWRpYSAke3JldGluYS5tb2JpbGV9e1xuICAgIHBhZGRpbmc6IDJyZW07XG4gIH1cbmBcblxuY29uc3QgRGV0YWlsc05hbWUgPSBzdHlsZWQuaDFgXG4gIGNvbG9yOiAjRkY3RTI2O1xuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuXG4gIEBtZWRpYSAke3N0YW5kYXJkLnRhYmxldFB9e1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuXG4gIEBtZWRpYSAke3N0YW5kYXJkLnRhYmxldEx9e1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuXG4gIEBtZWRpYSAke3JldGluYS5sYXB0b3BNfXtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cbmBcblxuY29uc3QgVW5kZXJsaW5lID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDEsNDEsNDEsLjE1KTtcbmBcblxuY29uc3QgRnVsbERldGFpbHMgPSBwcm9wcyA9PiAoXG4gIDxEZXRhaWxzQ29udGFpbmVyPlxuICAgIDxEZXRhaWxzTmFtZT57cHJvcHMubmFtZX08L0RldGFpbHNOYW1lPlxuICAgIDxVbmRlcmxpbmUgLz5cbiAgICA8RG91Z2hudXRBbGFybXMgXG4gICAgICBjdXJyZW50VmFsdWU9e3Byb3BzLmN1cnJlbnRWYWx1ZX0gXG4gICAgICB0b3RhbFZhbHVlPXtwcm9wcy50b3RhbFZhbHVlfSBcbiAgICAgIHVuaXRPZk1lYXN1cmU9e3Byb3BzLnVuaXRPZk1lYXN1cmV9XG4gICAgICB0UHVtcE9uPXtwcm9wcy50UHVtcE9ufVxuICAgICAgdFB1bXBPZmY9e3Byb3BzLnRQdW1wT2ZmfVxuICAgICAgYWxhcm1Pbj17cHJvcHMuYWxhcm1Pbn1cbiAgICAgIGFsYXJtT2ZmPXtwcm9wcy5hbGFybU9mZn1cbiAgICAvPlxuICAgIHsvKiA8VHJlbmQgXG4gICAgICBtb249e3Byb3BzLm1vbn1cbiAgICAgIHR1ZT17cHJvcHMudHVlfVxuICAgICAgd2VkPXtwcm9wcy53ZWR9XG4gICAgICB0aHU9e3Byb3BzLnRodX1cbiAgICAgIGZyaT17cHJvcHMuZnJpfVxuICAgICAgc2F0PXtwcm9wcy5zYXR9XG4gICAgICBzdW49e3Byb3BzLnN1bn1cbiAgICAvPiAqL31cbiAgPC9EZXRhaWxzQ29udGFpbmVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBGdWxsRGV0YWlscyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBzdGFuZGFyZCwgcmV0aW5hLCBjb2xvciB9IGZyb20gJy4uL3B1YmxpYy9zY3JlZW5zaXplcydcblxuY29uc3QgTWFpbkNvbnRhaW5lciA9IHN0eWxlZC5tYWluYFxuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBcbiAgQG1lZGlhICR7c3RhbmRhcmQudGFibGV0UH17XG4gICAgd2lkdGg6IDgwJTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEyJSAxZnI7XG4gIH1cbiAgXG4gIEBtZWRpYSAke3N0YW5kYXJkLnRhYmxldEx9e1xuICAgIHdpZHRoOiA5MCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNSUgODUlO1xuICB9XG5cbiAgQG1lZGlhICR7c3RhbmRhcmQubGFwdG9wU30ge1xuICAgIHdpZHRoOiA2NSU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMiUgOTAlO1xuICB9XG5cbiAgQG1lZGlhICR7c3RhbmRhcmQuZGVza3RvcH0ge1xuICAgIGhlaWdodDogNjB2aDtcbiAgICBtYXgtd2lkdGg6IDMwJTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEyJSAxZnI7XG4gIH1cbmBcblxuY29uc3QgQ29tcGFueUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG5gXG5cbmNvbnN0IENvbXBhbnlOYW1lID0gc3R5bGVkLmgxYFxuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogI2VmZWZlZjtcblxuICBAbWVkaWEgJHtzdGFuZGFyZC50YWJsZXR9IHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cblxuICBAbWVkaWEgJHtzdGFuZGFyZC5kZXNrdG9wfSB7XG4gICAgZm9udC1zaXplOiA1cmVtO1xuICB9XG4gIFxuICBAbWVkaWEgJHtyZXRpbmEubGFwdG9wTX0ge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgfVxuYFxuXG5jb25zdCBTaXRlTmFtZSA9IHN0eWxlZC5oMmBcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICNGRjdFMjY7XG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xuXG4gIEBtZWRpYSAke3N0YW5kYXJkLnRhYmxldH0ge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuICBcbiAgQG1lZGlhICR7c3RhbmRhcmQuZGVza3RvcH0ge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgfVxuICBcbiAgQG1lZGlhICR7cmV0aW5hLmxhcHRvcE19IHtcbiAgICBmb250LXNpemU6IDIuNzVyZW07XG4gIH1cbmBcblxuY29uc3QgRGF0ZVRpbWUgPSBzdHlsZWQuaDNgXG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC41KTtcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tbGVmdDogLjI1cmVtO1xuYFxuXG5jb25zdCBTaXRlRGV0YWlsc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3IuamN0V2hpdGV9O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDlyZW0gMThyZW0gOXJlbSAwO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBkaXNwbGF5OiBncmlkO1xuICBcbiAgQG1lZGlhICR7c3RhbmRhcmQudGFibGV0UH17XG4gICAgcGFkZGluZzogM3JlbSA2cmVtIDNyZW0gM3JlbTtcbiAgICBncmlkOiBhdXRvLWZsb3cgLyByZXBlYXQoMiwgNTAlKTtcbiAgICBncmlkLWdhcDogM3JlbSAzcmVtO1xuICB9XG4gIFxuICBAbWVkaWEgJHtzdGFuZGFyZC50YWJsZXRMfXtcbiAgICBwYWRkaW5nOiA0cmVtIDEzcmVtIDRyZW0gNHJlbTtcbiAgICBncmlkOiBhdXRvLWZsb3cgLyByZXBlYXQoMywgMzMlKTtcbiAgICBncmlkLWdhcDogNXJlbSA1cmVtO1xuICB9XG4gIFxuICBAbWVkaWEgJHtzdGFuZGFyZC5kZXNrdG9wfSB7XG4gICAgcGFkZGluZzogNnJlbSAyMHJlbSA2cmVtIDZyZW07XG4gICAgZ3JpZDogYXV0by1mbG93IC8gcmVwZWF0KDMsIDMzJSk7XG4gICAgZ3JpZC1nYXA6IDByZW0gN3JlbTtcblxuICB9XG4gIFxuICBAbWVkaWEgJHtyZXRpbmEubGFwdG9wTX0ge1xuICAgIHBhZGRpbmc6IDVyZW0gMTlyZW0gMCA1cmVtO1xuICAgIGdyaWQ6IGF1dG8tZmxvdyAvIHJlcGVhdCgzLCAzMyUpO1xuICAgIGdyaWQtZ2FwOiAxcmVtIDdyZW07XG4gIH1cbmBcblxuY29uc3QgTGF5b3V0ID0gcHJvcHMgPT4gKFxuICA8TWFpbkNvbnRhaW5lcj5cbiAgICA8Q29tcGFueUNvbnRhaW5lcj5cbiAgICAgIDxDb21wYW55TmFtZT57cHJvcHMuY29tcGFueV9uYW1lfTwvQ29tcGFueU5hbWU+XG4gICAgICA8U2l0ZU5hbWU+e3Byb3BzLnNpdGVfbmFtZX08L1NpdGVOYW1lPlxuICAgICAgPERhdGVUaW1lPntwcm9wcy5kYXRlfSAtIHtwcm9wcy50aW1lfTwvRGF0ZVRpbWU+XG4gICAgPC9Db21wYW55Q29udGFpbmVyPlxuICAgIDxTaXRlRGV0YWlsc0NvbnRhaW5lcj5cbiAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgIDwvU2l0ZURldGFpbHNDb250YWluZXI+XG4gIDwvTWFpbkNvbnRhaW5lcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdudWthLWNhcm91c2VsJ1xuaW1wb3J0IHsgc3RhbmRhcmQsIHJldGluYSwgY29sb3IgfSBmcm9tICcuLi9wdWJsaWMvc2NyZWVuc2l6ZXMnXG5cbmNvbnN0IE1vYmlsZUNhcm91c2VsID0gcHJvcHMgPT4gKFxuICA8Q2Fyb3VzZWxcbiAgICBjZWxsQWxpZ249eyAnY2VudGVyJyB9XG4gICAgY2VsbFNwYWNpbmc9eyAxNSB9XG4gICAgc2xpZGVXaWR0aD17ICczMjVweCcgfVxuICAgIHdpdGhvdXRDb250cm9sc1xuICA+XG4gICAgeyBwcm9wcy5jaGlsZHJlbiB9XG4gIDwvQ2Fyb3VzZWw+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE1vYmlsZUNhcm91c2VsXG5cbmNvbnN0IFN0eWxlZENhcm91c2VsID0gc3R5bGVkKENhcm91c2VsKWBcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbmAiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgc3RhbmRhcmQsIHJldGluYSwgY29sb3IgfSBmcm9tICcuLi9wdWJsaWMvc2NyZWVuc2l6ZXMnXG5cbmltcG9ydCBNb2JpbGVDYXJvdXNlbCBmcm9tICcuLi9jb21wb25lbnRzL01vYmlsZUNhcm91c2VsJ1xuXG5jb25zdCBNb2JpbGVNYWluQ29udGFpbmVyID0gc3R5bGVkLm1haW5gXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1JSA4NSU7XG5gXG5cbmNvbnN0IE1vYmlsZUNvbXBhbnlDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgNHJlbTtcbmBcblxuY29uc3QgTW9iaWxlQ29tcGFueU5hbWUgPSBzdHlsZWQuaDFgXG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICR7Y29sb3IuamN0V2hpdGV9O1xuYFxuXG5jb25zdCBNb2JpbGVTaXRlTmFtZSA9IHN0eWxlZC5oMmBcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogJHtjb2xvci5qY3RPcmFuZ2V9O1xuYFxuXG5jb25zdCBEYXRlVGltZSA9IHN0eWxlZC5oM2BcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xuICBmb250LXNpemU6IDEuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG5gXG5cbmNvbnN0IE1vYmlsZUNhcm91c2VsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1yb3ctZ2FwOiAxcmVtO1xuYFxuXG5cbmNvbnN0IE1vYmlsZUxheW91dCA9IHByb3BzID0+IChcbiAgPD5cbiAgICA8TW9iaWxlTWFpbkNvbnRhaW5lcj5cbiAgICAgIDxNb2JpbGVDb21wYW55Q29udGFpbmVyPlxuICAgICAgICA8TW9iaWxlQ29tcGFueU5hbWU+e3Byb3BzLmNvbXBhbnlfbmFtZX08L01vYmlsZUNvbXBhbnlOYW1lPlxuICAgICAgICA8TW9iaWxlU2l0ZU5hbWU+e3Byb3BzLnNpdGVfbmFtZX08L01vYmlsZVNpdGVOYW1lPlxuICAgICAgICA8RGF0ZVRpbWU+e3Byb3BzLmRhdGV9IC0ge3Byb3BzLnRpbWV9PC9EYXRlVGltZT5cbiAgICAgIDwvTW9iaWxlQ29tcGFueUNvbnRhaW5lcj5cbiAgICAgIDxNb2JpbGVDYXJvdXNlbENvbnRhaW5lcj5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgPC9Nb2JpbGVDYXJvdXNlbENvbnRhaW5lcj5cbiAgICA8L01vYmlsZU1haW5Db250YWluZXI+XG4gICAgIFxuICAgIHsvKiA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgKntcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICB9XG5cbiAgICAgIGJvZHl7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTI5Mjk7XG4gICAgICB9XG5cbiAgICAgICNfX25leHR7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+ICovfVxuXG4gIDwvPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVMYXlvdXQiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgcmV0aW5hLCBzdGFuZGFyZCwgY29sb3IgfSBmcm9tICcuLi9wdWJsaWMvc2NyZWVuc2l6ZXMnXG5cbmNvbnN0IERldGFpbHNBbGFybUNvbnRhaW5lciA9IHN0eWxlZC5wYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7Y29sb3IuamN0RGFya0dyYXl9O1xuICBtYXJnaW4tbGVmdDogMnJlbTtcbmBcblxuY29uc3QgQWxhcm1UaXRsZSA9IHN0eWxlZC5oMmBcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG5gXG5cbmNvbnN0IEFsYXJtT25PZmYgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDEuOHJlbTtcbmBcblxuY29uc3QgQWxhcm1Pbk9mZk51bSA9IHN0eWxlZC5zcGFuYFxuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjhyZW07XG5gXG5cblxuXG5jb25zdCBBbGFybXMgPSBwcm9wcyA9PiAoXG4gIDxEZXRhaWxzQWxhcm1Db250YWluZXI+XG4gICAgPEFsYXJtVGl0bGU+e3Byb3BzLmFsYXJtVHlwZX08L0FsYXJtVGl0bGU+XG4gICAgPEFsYXJtT25PZmY+T246IDxBbGFybU9uT2ZmTnVtPnsgcHJvcHMub24gIT09IHVuZGVmaW5lZCA/IHByb3BzLm9uLnRvRml4ZWQoMikgOiBwcm9wcy5vbiB9PC9BbGFybU9uT2ZmTnVtPiBPZmY6IDxBbGFybU9uT2ZmTnVtPnsgcHJvcHMub2ZmICE9PSB1bmRlZmluZWQgPyBwcm9wcy5vZmYudG9GaXhlZCgyKSA6IHByb3BzLm9mZiB9PC9BbGFybU9uT2ZmTnVtPjwvQWxhcm1Pbk9mZj5cbiAgPC9EZXRhaWxzQWxhcm1Db250YWluZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEFsYXJtcyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBjb2xvciwgc3RhbmRhcmQsIHJldGluYSB9IGZyb20gJy4uL3B1YmxpYy9zY3JlZW5zaXplcydcblxuaW1wb3J0IFRyZW5kIGZyb20gJy4vVHJlbmQnXG5pbXBvcnQgRG91Z2hudXRDaGFydCBmcm9tICcuL0RvdWdobnV0Q2hhcnQnXG5pbXBvcnQgTmV3QWxhcm1zIGZyb20gJy4vTmV3QWxhcm1zJ1xuXG5jb25zdCBEZXRhaWxzQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIG1hcmdpbi1ib3R0b206IDE1cmVtO1xuICBcbiAgLyogQG1lZGlhICR7c3RhbmRhcmQuZGVza3RvcH17XG4gICAgbWF4LXdpZHRoOiAzNXJlbTtcbiAgICBtYXgtaGVpZ2h0OiAzNXJlbTtcbiAgfVxuXG4gIEBtZWRpYSAke3JldGluYS5tb2JpbGV9e1xuICAgIHBhZGRpbmc6IDJyZW0gMnJlbSA0cmVtIDJyZW07XG4gIH0gKi9cbmBcblxuY29uc3QgTmFtZUFsYXJtc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDRyZW07XG5gXG5cbmNvbnN0IERldGFpbHNOYW1lID0gc3R5bGVkLmgxYFxuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yLmpjdERhcmtHcmF5fTtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICBtYXgtd2lkdGg6IGF1dG87XG5cbiAgLyogQG1lZGlhICR7c3RhbmRhcmQudGFibGV0UH17XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG5cbiAgQG1lZGlhICR7c3RhbmRhcmQudGFibGV0TH17XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG5cbiAgQG1lZGlhICR7cmV0aW5hLmxhcHRvcE19e1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgfSAqL1xuYFxuY29uc3QgRG91Z2hudXRDaGFydENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG5gXG5cblxuY29uc3QgRGV0YWlscyA9IHByb3BzID0+IChcbiAgPERldGFpbHNDb250YWluZXI+XG4gICAgPE5hbWVBbGFybXNDb250YWluZXI+XG4gICAgICA8RGV0YWlsc05hbWU+e3Byb3BzLnJlc291cmNlVHlwZX08L0RldGFpbHNOYW1lPlxuICAgICAgPE5ld0FsYXJtcyBhbGFybVR5cGU9eydBbGFybSd9IG9uPXtwcm9wcy5hbGFybU9ufSBvZmY9e3Byb3BzLmFsYXJtT2ZmfSAvPlxuICAgICAgPE5ld0FsYXJtcyBhbGFybVR5cGU9eydULVB1bXAnfSBvbj17cHJvcHMudHB1bXBPbn0gb2ZmPXtwcm9wcy50cHVtcE9mZn0gLz5cbiAgICA8L05hbWVBbGFybXNDb250YWluZXI+XG4gICAgXG4gICAgPERvdWdobnV0Q2hhcnRDb250YWluZXI+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9Eb3VnaG51dENoYXJ0Q29udGFpbmVyPlxuICA8L0RldGFpbHNDb250YWluZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IERldGFpbHMiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgc3RhbmRhcmQsIHJldGluYSwgY29sb3IgfSBmcm9tICcuLi9wdWJsaWMvc2NyZWVuc2l6ZXMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL1NpZGViYXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuXG5jb25zdCBNYWluQ29udGFpbmVyID0gc3R5bGVkLm1haW5gXG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG5gXG5cbmNvbnN0IFNpdGVEZXRhaWxzQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZy1sZWZ0OiA3cmVtO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwcmVtIDFmcjtcbmBcblxuY29uc3QgU2l0ZU5hbWVUaW1lID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAxNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYFxuXG5jb25zdCBTaXRlTmFtZSA9IHN0eWxlZC5oMmBcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICR7Y29sb3IuamN0RGFya0dyYXl9O1xuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgZm9udC1zaXplOiAzNnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuYFxuXG5jb25zdCBEYXRlVGltZSA9IHN0eWxlZC5oM2BcbiAgY29sb3I6ICR7Y29sb3IuamN0RGFya0dyYXl9O1xuICBmb250LXNpemU6IDEuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1sZWZ0OiAuMjVyZW07XG5gXG5cbmNvbnN0IFNpdGVEZXRhaWxzID0gc3R5bGVkLmRpdmBcblxuYFxuXG5cbmNvbnN0IExheW91dCA9IHByb3BzID0+IHtcbiAgcmV0dXJuKFxuICA8TWFpbkNvbnRhaW5lcj5cbiAgICA8U2lkZWJhciBjb21wYW55PXtwcm9wcy5jb21wYW55fSBzaXRlcz17cHJvcHMuc2l0ZXN9IC8+XG4gICAgPFNpdGVEZXRhaWxzQ29udGFpbmVyPlxuICAgICAgPFNpdGVOYW1lVGltZT5cbiAgICAgICAgPFNpdGVOYW1lPntwcm9wcy5zaXRlbmFtZX08L1NpdGVOYW1lPlxuICAgICAgICA8RGF0ZVRpbWU+e3Byb3BzLmRhdGV9IC0ge3Byb3BzLnRpbWV9PC9EYXRlVGltZT5cbiAgICAgIDwvU2l0ZU5hbWVUaW1lPlxuICAgICAgPFNpdGVEZXRhaWxzPlxuICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cbiAgICAgIDwvU2l0ZURldGFpbHM+XG4gICAgPC9TaXRlRGV0YWlsc0NvbnRhaW5lcj5cbiAgPC9NYWluQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dCIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBzdGFuZGFyZCwgcmV0aW5hLCBjb2xvciB9IGZyb20gJy4uL3B1YmxpYy9zY3JlZW5zaXplcydcblxuY29uc3QgU2lkZWJhckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAzMHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvci5qY3REYXJrR3JheX07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTIuNXJlbSAxZnI7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG5gXG5cbmNvbnN0IENvbXBhbnlDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMi41cmVtO1xuXG4gIGltZ3tcbiAgICBoZWlnaHQ6IDc1JTtcbiAgfVxuYFxuXG5jb25zdCBTaXRlTmF2Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgXG4gIGgxe1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG5gXG5cbmNvbnN0IFNpdGVMaW5rcyA9IHN0eWxlZC5uYXZgXG4gIHVse1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICB9XG5cbiAgbGl7XG4gICAgaGVpZ2h0OiA1cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuXG4gIGxpOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3IuamN0T3JhbmdlfTtcbiAgfVxuXG4gIGF7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuYFxuXG5jb25zdCBTaWRlYmFyID0gKHByb3BzKSA9PiB7XG4gIHJldHVybihcbiAgICA8U2lkZWJhckNvbnRhaW5lcj5cbiAgICAgIDxDb21wYW55Q29udGFpbmVyPlxuICAgICAgICA8aW1nIHNyYz17YC9zdGF0aWMvJHtwcm9wcy5jb21wYW55fS1sb2dvLnBuZ2B9IC8+XG4gICAgICA8L0NvbXBhbnlDb250YWluZXI+XG4gICAgICA8U2l0ZU5hdkNvbnRhaW5lcj5cbiAgICAgICAgPGgxPlNpdGVzPC9oMT5cbiAgICAgICAgPFNpdGVMaW5rcz5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7cHJvcHMuc2l0ZXN9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9TaXRlTGlua3M+XG4gICAgICA8L1NpdGVOYXZDb250YWluZXI+XG4gICAgPC9TaWRlYmFyQ29udGFpbmVyPlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhciIsImltcG9ydCB7IGRlZmF1bHRzLCBMaW5lIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJ1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgY29sb3IgfSBmcm9tICcuLi9wdWJsaWMvc2NyZWVuc2l6ZXMnXG5cblxuY29uc3QgVHJlbmQgPSBwcm9wcyA9PiB7XG4gIGRlZmF1bHRzLmdsb2JhbC5kZWZhdWx0Rm9udEZhbWlseSA9ICdJbmR1c3RyeSdcbiAgZGVmYXVsdHMuZ2xvYmFsLmRlZmF1bHRGb250Q29sb3IgPSBjb2xvci5qY3RMaWdodEdyYXlcblxuICBjb25zdCBkYXRhID0gY2FudmFzID0+IHtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpXG4gICAgY29uc3QgZ3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwwLDAsMTY1KTtcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMjU1LDI1NSwyNTUsLjAxKScpXG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsIGNvbG9yLmpjdExpZ2h0R3JheSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbGFiZWxzOiBbJ21vbicsICd0dWUnLCAnd2VkJywgJ3RodScsICdmcmknLCAnc2F0JywgJ3N1biddLFxuICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgIGRhdGE6IFtwcm9wcy5tb24sIHByb3BzLnR1ZSwgcHJvcHMud2VkLCBwcm9wcy50aHUsIHByb3BzLmZyaSwgcHJvcHMuc2F0LCBwcm9wcy5zdW5dLFxuICAgICAgICBib3JkZXJXaWR0aDogMixcbiAgICAgICAgYm9yZGVyQ29sb3I6IGNvbG9yLmpjdE9yYW5nZSxcbiAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLmpjdE9yYW5nZSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBncmFkaWVudCxcbiAgICAgICAgY3ViaWNJbnRlcnBvbGF0aW9uTW9kZTogJ21vbm90b25lJyxcbiAgICAgIH1dXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxHcmFwaD5cbiAgICAgIDxMaW5lXG4gICAgICAgIGRhdGE9eyBkYXRhIH1cbiAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgIGxlZ2VuZDogZmFsc2UsXG4gICAgICAgICAgdG9vbHRpcHM6IGZhbHNlLFxuICAgICAgICAgIGhvdmVyOiBmYWxzZSxcbiAgICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICAgIC8vIExlZnQgc2lkZSBvZiBncmFwaFxuICAgICAgICAgICAgeUF4ZXM6IFt7XG4gICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgIG1heDogMTYsXG4gICAgICAgICAgICAgICAgc3RlcFNpemU6IDQsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgLy8gQm90dG9tIG9mIGdyYXBoXG4gICAgICAgICAgICB4QXhlczogW3tcbiAgICAgICAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvR3JhcGg+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJlbmRcblxuY29uc3QgR3JhcGggPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbmAiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91cmw9cmVxdWlyZShcInVybFwiKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7dmFyIF9yb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yb3V0ZXJcIikpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7ZnVuY3Rpb24gaXNMb2NhbChocmVmKXt2YXIgdXJsPSgwLF91cmwucGFyc2UpKGhyZWYsZmFsc2UsdHJ1ZSk7dmFyIG9yaWdpbj0oMCxfdXJsLnBhcnNlKSgoMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCksZmFsc2UsdHJ1ZSk7cmV0dXJuIXVybC5ob3N0fHx1cmwucHJvdG9jb2w9PT1vcmlnaW4ucHJvdG9jb2wmJnVybC5ob3N0PT09b3JpZ2luLmhvc3Q7fWZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmMpe3ZhciBsYXN0SHJlZj1udWxsO3ZhciBsYXN0QXM9bnVsbDt2YXIgbGFzdFJlc3VsdD1udWxsO3JldHVybihocmVmLGFzKT0+e2lmKGxhc3RSZXN1bHQmJmhyZWY9PT1sYXN0SHJlZiYmYXM9PT1sYXN0QXMpe3JldHVybiBsYXN0UmVzdWx0O312YXIgcmVzdWx0PWZvcm1hdEZ1bmMoaHJlZixhcyk7bGFzdEhyZWY9aHJlZjtsYXN0QXM9YXM7bGFzdFJlc3VsdD1yZXN1bHQ7cmV0dXJuIHJlc3VsdDt9O31mdW5jdGlvbiBmb3JtYXRVcmwodXJsKXtyZXR1cm4gdXJsJiZ0eXBlb2YgdXJsPT09J29iamVjdCc/KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh1cmwpOnVybDt9dmFyIG9ic2VydmVyO3ZhciBsaXN0ZW5lcnM9bmV3IE1hcCgpO3ZhciBJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/d2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyOm51bGw7dmFyIHByZWZldGNoZWQ9e307ZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKXsvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuaWYob2JzZXJ2ZXIpe3JldHVybiBvYnNlcnZlcjt9Ly8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG5pZighSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpe3JldHVybiB1bmRlZmluZWQ7fXJldHVybiBvYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcz0+e2VudHJpZXMuZm9yRWFjaChlbnRyeT0+e2lmKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpe3JldHVybjt9dmFyIGNiPWxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KTtpZihlbnRyeS5pc0ludGVyc2VjdGluZ3x8ZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8+MCl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7bGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpO2NiKCk7fX0pO30se3Jvb3RNYXJnaW46JzIwMHB4J30pO312YXIgbGlzdGVuVG9JbnRlcnNlY3Rpb25zPShlbCxjYik9Pnt2YXIgb2JzZXJ2ZXI9Z2V0T2JzZXJ2ZXIoKTtpZighb2JzZXJ2ZXIpe3JldHVybigpPT57fTt9b2JzZXJ2ZXIub2JzZXJ2ZShlbCk7bGlzdGVuZXJzLnNldChlbCxjYik7cmV0dXJuKCk9Pnt0cnl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGVycik7fWxpc3RlbmVycy5kZWxldGUoZWwpO307fTtjbGFzcyBMaW5rIGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3Rvcihwcm9wcyl7c3VwZXIocHJvcHMpO3RoaXMucD12b2lkIDA7dGhpcy5jbGVhblVwTGlzdGVuZXJzPSgpPT57fTt0aGlzLmZvcm1hdFVybHM9bWVtb2l6ZWRGb3JtYXRVcmwoKGhyZWYsYXNIcmVmKT0+e3JldHVybntocmVmOigwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoaHJlZikpLGFzOmFzSHJlZj8oMCxfcm91dGVyMi5hZGRCYXNlUGF0aCkoZm9ybWF0VXJsKGFzSHJlZikpOmFzSHJlZn07fSk7dGhpcy5saW5rQ2xpY2tlZD1lPT57dmFye25vZGVOYW1lLHRhcmdldH09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYodGFyZ2V0JiZ0YXJnZXQhPT0nX3NlbGYnfHxlLm1ldGFLZXl8fGUuY3RybEtleXx8ZS5zaGlmdEtleXx8ZS5uYXRpdmVFdmVudCYmZS5uYXRpdmVFdmVudC53aGljaD09PTIpKXsvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG5yZXR1cm47fXZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO2lmKCFpc0xvY2FsKGhyZWYpKXsvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG5yZXR1cm47fXZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO2hyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxocmVmKTthcz1hcz8oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGFzKTpocmVmO2UucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbnZhcntzY3JvbGx9PXRoaXMucHJvcHM7aWYoc2Nyb2xsPT1udWxsKXtzY3JvbGw9YXMuaW5kZXhPZignIycpPDA7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuX3JvdXRlci5kZWZhdWx0W3RoaXMucHJvcHMucmVwbGFjZT8ncmVwbGFjZSc6J3B1c2gnXShocmVmLGFzLHtzaGFsbG93OnRoaXMucHJvcHMuc2hhbGxvd30pLnRoZW4oc3VjY2Vzcz0+e2lmKCFzdWNjZXNzKXJldHVybjtpZihzY3JvbGwpe3dpbmRvdy5zY3JvbGxUbygwLDApO2RvY3VtZW50LmJvZHkuZm9jdXMoKTt9fSk7fTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYocHJvcHMucHJlZmV0Y2gpe2NvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX10aGlzLnA9cHJvcHMucHJlZmV0Y2ghPT1mYWxzZTt9Y29tcG9uZW50V2lsbFVubW91bnQoKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKTt9Z2V0UGF0aHMoKXt2YXJ7cGF0aG5hbWV9PXdpbmRvdy5sb2NhdGlvbjt2YXJ7aHJlZjpwYXJzZWRIcmVmLGFzOnBhcnNlZEFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO3ZhciByZXNvbHZlZEhyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRIcmVmKTtyZXR1cm5bcmVzb2x2ZWRIcmVmLHBhcnNlZEFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUscGFyc2VkQXMpOnJlc29sdmVkSHJlZl07fWhhbmRsZVJlZihyZWYpe2lmKHRoaXMucCYmSW50ZXJzZWN0aW9uT2JzZXJ2ZXImJnJlZiYmcmVmLnRhZ05hbWUpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO3ZhciBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFt0aGlzLmdldFBhdGhzKCkuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV07aWYoIWlzUHJlZmV0Y2hlZCl7dGhpcy5jbGVhblVwTGlzdGVuZXJzPWxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsKCk9Pnt0aGlzLnByZWZldGNoKCk7fSk7fX19Ly8gVGhlIGZ1bmN0aW9uIGlzIG1lbW9pemVkIHNvIHRoYXQgbm8gZXh0cmEgbGlmZWN5Y2xlcyBhcmUgbmVlZGVkXG4vLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbnByZWZldGNoKG9wdGlvbnMpe2lmKCF0aGlzLnB8fHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJylyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxudmFyIHBhdGhzPXRoaXMuZ2V0UGF0aHMoKTsvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4vLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3Rcbi8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuX3JvdXRlci5kZWZhdWx0LnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8wXSxwYXRoc1svKiBhc1BhdGggKi8xXSxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtwcmVmZXRjaGVkW3BhdGhzLmpvaW4oLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiclJyldPXRydWU7fXJlbmRlcigpe3ZhcntjaGlsZHJlbn09dGhpcy5wcm9wczt2YXJ7aHJlZixhc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG52YXIgY2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO3ZhciBwcm9wcz17cmVmOmVsPT57dGhpcy5oYW5kbGVSZWYoZWwpO2lmKGNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmKXtpZih0eXBlb2YgY2hpbGQucmVmPT09J2Z1bmN0aW9uJyljaGlsZC5yZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkLnJlZj09PSdvYmplY3QnKXtjaGlsZC5yZWYuY3VycmVudD1lbDt9fX0sb25Nb3VzZUVudGVyOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9dGhpcy5wcmVmZXRjaCh7cHJpb3JpdHk6dHJ1ZX0pO30sb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7dGhpcy5saW5rQ2xpY2tlZChlKTt9fX07Ly8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4vLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbmlmKHRoaXMucHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtwcm9wcy5ocmVmPWFzfHxocmVmO30vLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4vLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKXt2YXIgcmV3cml0ZVVybEZvck5leHRFeHBvcnQ9cmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JykucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7aWYocHJvcHMuaHJlZiYmdHlwZW9mIF9fTkVYVF9EQVRBX18hPT0ndW5kZWZpbmVkJyYmX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KXtwcm9wcy5ocmVmPXJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpO319cmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxwcm9wcyk7fX1pZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3ZhciB3YXJuPSgwLF91dGlscy5leGVjT25jZSkoY29uc29sZS5lcnJvcik7Ly8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG52YXIgUHJvcFR5cGVzPXJlcXVpcmUoJ3Byb3AtdHlwZXMnKTt2YXIgZXhhY3Q9cmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpOy8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbkxpbmsucHJvcFR5cGVzPWV4YWN0KHtocmVmOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsYXM6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkscHJlZmV0Y2g6UHJvcFR5cGVzLmJvb2wscmVwbGFjZTpQcm9wVHlwZXMuYm9vbCxzaGFsbG93OlByb3BUeXBlcy5ib29sLHBhc3NIcmVmOlByb3BUeXBlcy5ib29sLHNjcm9sbDpQcm9wVHlwZXMuYm9vbCxjaGlsZHJlbjpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwocHJvcHMscHJvcE5hbWUpPT57dmFyIHZhbHVlPXByb3BzW3Byb3BOYW1lXTtpZih0eXBlb2YgdmFsdWU9PT0nc3RyaW5nJyl7d2FybihcIldhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5cIik7fXJldHVybiBudWxsO31dKS5pc1JlcXVpcmVkfSk7fXZhciBfZGVmYXVsdD1MaW5rO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovdmFyIHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbnZhciB1cmxQcm9wZXJ0eUZpZWxkcz1bJ3BhdGhuYW1lJywncm91dGUnLCdxdWVyeScsJ2FzUGF0aCcsJ2NvbXBvbmVudHMnLCdpc0ZhbGxiYWNrJywnYmFzZVBhdGgnXTt2YXIgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO3ZhciBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4vLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbi8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsZmllbGQse2dldCgpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT1mdW5jdGlvbigpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JvdXRlckV2ZW50cy5mb3JFYWNoKGV2ZW50PT57c2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57X3JvdXRlcjIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsZnVuY3Rpb24oKXt2YXIgZXZlbnRGaWVsZD1cIm9uXCIrZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZXZlbnQuc3Vic3RyaW5nKDEpO3ZhciBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmd1bWVudHMpO31jYXRjaChlcnIpey8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKFwiRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6IFwiK2V2ZW50RmllbGQpOy8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKGVyci5tZXNzYWdlK1wiXFxuXCIrZXJyLnN0YWNrKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXt2YXIgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJzt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fXJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO30vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbnZhciBfZGVmYXVsdD1zaW5nbGV0b25Sb3V0ZXI7Ly8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtmdW5jdGlvbiB1c2VSb3V0ZXIoKXtyZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTt9Ly8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbnZhciBjcmVhdGVSb3V0ZXI9ZnVuY3Rpb24gY3JlYXRlUm91dGVyKCl7Zm9yKHZhciBfbGVuPWFyZ3VtZW50cy5sZW5ndGgsYXJncz1uZXcgQXJyYXkoX2xlbiksX2tleT0wO19rZXk8X2xlbjtfa2V5Kyspe2FyZ3NbX2tleV09YXJndW1lbnRzW19rZXldO31zaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7dmFyIF9yb3V0ZXI9cm91dGVyO3ZhciBpbnN0YW5jZT17fTtmb3IodmFyIHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oe30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPWZ1bmN0aW9uKCl7cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3VtZW50cyk7fTt9KTtyZXR1cm4gaW5zdGFuY2U7fSIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3ZhciBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9XCJ3aXRoUm91dGVyKFwiK25hbWUrXCIpXCI7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIG1pdHQoKSB7XG4gICAgY29uc3QgYWxsID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvbih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcik7XG4gICAgICAgIH0sXG4gICAgICAgIG9mZih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW1pdCh0eXBlLCAuLi5ldnRzKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoLi4uZXZ0cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gbWl0dDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuY29uc3QgbWl0dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBpc19keW5hbWljXzEgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xuY29uc3Qgcm91dGVfbWF0Y2hlcl8xID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbmNvbnN0IHJvdXRlX3JlZ2V4XzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSAhPT0gMCA/IGJhc2VQYXRoICsgcGF0aCA6IHBhdGg7XG59XG5leHBvcnRzLmFkZEJhc2VQYXRoID0gYWRkQmFzZVBhdGg7XG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICAgICAgPyBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xuICAgICAgICA6IHBhdGg7XG59XG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XG5mdW5jdGlvbiB0b1JvdXRlKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJztcbn1cbmNvbnN0IHByZXBhcmVSb3V0ZSA9IChwYXRoKSA9PiB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aCk7XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgaXNTZXJ2ZXJSZW5kZXIsIGNiKSB7XG4gICAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMTtcbiAgICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgICBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtkZWxCYXNlUGF0aChwYXRobmFtZSl9Lmpzb25gKSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9KSwge1xuICAgICAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDAgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGE7XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAgIC8vIGxvb3AuXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGVyci5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUic7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRobmFtZSwgcXVlcnksIGFzLCB7IGluaXRpYWxQcm9wcywgcGFnZUxvYWRlciwgQXBwLCB3cmFwQXBwLCBDb21wb25lbnQsIGVyciwgc3Vic2NyaXB0aW9uLCBpc0ZhbGxiYWNrLCB9KSB7XG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gICAgICAgIHRoaXMuc2RjID0ge307XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgdXRpbHNfMS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmIChlLnN0YXRlICYmXG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciAmJlxuICAgICAgICAgICAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICAgICAgICAgICAgdXJsXzEucGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlcGxhY2UodXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldFN0YXRpY0RhdGEgPSAoYXNQYXRoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZSh1cmxfMS5wYXJzZShhc1BhdGgpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgICAgICAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgICAgICAgICAgICA6IGZldGNoTmV4dERhdGEocGF0aG5hbWUsIG51bGwsIHRoaXMuaXNTc3IsIGRhdGEgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U2VydmVyRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdXJsXzEucGFyc2UoYXNQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1Nzcik7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgICAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgdGhpcy5hc1BhdGggPVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgaXNfZHluYW1pY18xLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgYXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gICAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKHJvdXRlLCBtb2QpIHtcbiAgICAgICAgY29uc3QgQ29tcG9uZW50ID0gbW9kLmRlZmF1bHQgfHwgbW9kO1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGF0YSksIHsgQ29tcG9uZW50LCBfX05fU1NHOiBtb2QuX19OX1NTRywgX19OX1NTUDogbW9kLl9fTl9TU1AgfSk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhO1xuICAgICAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICAgICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgICAqL1xuICAgIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwdXNoKHVybCwgYXMgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHJlcGxhY2UodXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGNoYW5nZShtZXRob2QsIF91cmwsIF9hcywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICAgICAgaWYgKHV0aWxzXzEuU1QpIHtcbiAgICAgICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAgICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgICAgICAgbGV0IHVybCA9IHR5cGVvZiBfdXJsID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsO1xuICAgICAgICAgICAgbGV0IGFzID0gdHlwZW9mIF9hcyA9PT0gJ29iamVjdCcgPyB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXM7XG4gICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpO1xuICAgICAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAgICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKTtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGlmIChpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gdXJsXzEucGFyc2UoYXMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSByb3V0ZV9yZWdleF8xLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByb3V0ZV9tYXRjaGVyXzEuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbSA9PiAhcXVlcnlbcGFyYW1dKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2ApKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpO1xuICAgICAgICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4ocm91dGVJbmZvID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcyk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9LCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgdXRpbHNfMS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAgICAgJycsIGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgICAgICAvLyBJZiB0aGUgcm91dGUgaXMgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICAgICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVFcnJvciA9IChlcnIsIGxvYWRFcnJvckZhaWwpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGdpcEVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzID0+IHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICAgIH0pLCByZWplY3QpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldERhdGEoKCkgPT4gX19OX1NTR1xuICAgICAgICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShhcylcbiAgICAgICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGFzKVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgICAgICB9KSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpO1xuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHRoaXMubm90aWZ5KGRhdGEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAgICovXG4gICAgYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgICAgICBpZiAoaWRFbCkge1xuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVybElzTmV3KGFzUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICovXG4gICAgcHJlZmV0Y2godXJsLCBhc1BhdGggPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHVybF8xLnBhcnNlKHVybCk7XG4gICAgICAgICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSk7XG4gICAgICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICAgICAgICAgIF0pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuIHV0aWxzXzEubG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKTtcbiAgICAgICAgICAgIGUuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEpIHtcbiAgICAgICAgdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuUm91dGVyLmV2ZW50cyA9IG1pdHRfMS5kZWZhdWx0KCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztcbmZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlKSB7XG4gICAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7XG59XG5leHBvcnRzLmlzRHluYW1pY1JvdXRlID0gaXNEeW5hbWljUm91dGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KSB7XG4gICAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4O1xuICAgIHJldHVybiAocGF0aG5hbWUpID0+IHtcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWNvZGUgPSAocGFyYW0pID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO1xuICAgICAgICAgICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdO1xuICAgICAgICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdO1xuICAgICAgICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICAgICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKGVudHJ5ID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogZGVjb2RlKG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9O1xufVxuZXhwb3J0cy5nZXRSb3V0ZU1hdGNoZXIgPSBnZXRSb3V0ZU1hdGNoZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpO1xufVxuZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpIHtcbiAgICAvLyBFc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIFJlZ0V4XG4gICAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKTtcbiAgICBjb25zdCBncm91cHMgPSB7fTtcbiAgICBsZXQgZ3JvdXBJbmRleCA9IDE7XG4gICAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgIGdyb3Vwc1skMVxuICAgICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9O1xuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbCA/ICcvKC4rPyknIDogJy8oW14vXSs/KSc7XG4gICAgfSk7XG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlO1xuICAgIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAgIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpO1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gJDFcbiAgICAgICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKTtcbiAgICAgICAgICAgIHJldHVybiBpc0NhdGNoQWxsXG4gICAgICAgICAgICAgICAgPyBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+Lis/KWBcbiAgICAgICAgICAgICAgICA6IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT5bXi9dKz8pYDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLCBncm91cHMgfSwgKG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICAgID8ge1xuICAgICAgICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgICAgICB9XG4gICAgICAgIDoge30pKTtcbn1cbmV4cG9ydHMuZ2V0Um91dGVSZWdleCA9IGdldFJvdXRlUmVnZXg7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbi8qKlxuICogVXRpbHNcbiAqL1xuZnVuY3Rpb24gZXhlY09uY2UoZm4pIHtcbiAgICBsZXQgdXNlZCA9IGZhbHNlO1xuICAgIGxldCByZXN1bHQ7XG4gICAgcmV0dXJuICgoLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoIXVzZWQpIHtcbiAgICAgICAgICAgIHVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZXhlY09uY2UgPSBleGVjT25jZTtcbmZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICAgIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YDtcbn1cbmV4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbjtcbmZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTtcbn1cbmV4cG9ydHMuZ2V0VVJMID0gZ2V0VVJMO1xuZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgICAgID8gQ29tcG9uZW50XG4gICAgICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbn1cbmV4cG9ydHMuZ2V0RGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZTtcbmZ1bmN0aW9uIGlzUmVzU2VudChyZXMpIHtcbiAgICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudDtcbn1cbmV4cG9ydHMuaXNSZXNTZW50ID0gaXNSZXNTZW50O1xuYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIGN0eCkge1xuICAgIHZhciBfYTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoKF9hID0gQXBwLnByb3RvdHlwZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYDtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gICAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcyk7XG4gICAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH1cbiAgICBpZiAoIXByb3BzKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYDtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2ApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wcztcbn1cbmV4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcyA9IGxvYWRHZXRJbml0aWFsUHJvcHM7XG5leHBvcnRzLnVybE9iamVjdEtleXMgPSBbXG4gICAgJ2F1dGgnLFxuICAgICdoYXNoJyxcbiAgICAnaG9zdCcsXG4gICAgJ2hvc3RuYW1lJyxcbiAgICAnaHJlZicsXG4gICAgJ3BhdGgnLFxuICAgICdwYXRobmFtZScsXG4gICAgJ3BvcnQnLFxuICAgICdwcm90b2NvbCcsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnc2VhcmNoJyxcbiAgICAnc2xhc2hlcycsXG5dO1xuZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsLCBvcHRpb25zKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChleHBvcnRzLnVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVybF8xLmZvcm1hdCh1cmwsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5mb3JtYXRXaXRoVmFsaWRhdGlvbiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uO1xuZXhwb3J0cy5TUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCc7XG5leHBvcnRzLlNUID0gZXhwb3J0cy5TUCAmJlxuICAgIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbic7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBOZXdMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9OZXdMYXlvdXQnXG5pbXBvcnQgTW9iaWxlTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTW9iaWxlTGF5b3V0J1xuaW1wb3J0IEZ1bGxEZXRhaWxzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvRnVsbERldGFpbHMnXG5pbXBvcnQgRGV0YWlscyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0RldGFpbHMnXG5pbXBvcnQgTmV3RGV0YWlscyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL05ld0RldGFpbHMnXG5pbXBvcnQgRG91Z2hudXRDaGFydCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0RvdWdobnV0Q2hhcnQnXG5cblxuY29uc3QgSG9tZSA9ICh7IGRhdGEsIHNpdGVzLCBpc01vYmlsZVZpZXcgfSkgPT4gKFxuICAvLyBpc01vYmlsZVZpZXcgP1xuICAvLyAgIDxNb2JpbGVMYXlvdXQgY29tcGFueV9uYW1lPXtcIk1hbW1vdGhcIn0gc2l0ZV9uYW1lPXtcIlVuaXZlcnNpdHlcIn0gZGF0ZT17ZGF0YVswXS5tRGF0ZX0gdGltZT17YCR7ZGF0YVswXS5tVGltZS5zdWJzdHIoMCwgNCl9ICR7ZGF0YVswXS5tVGltZS5zdWJzdHIoLTIpfWB9PlxuICAvLyAgICAgPEZ1bGxEZXRhaWxzIFxuICAvLyAgICAgICBuYW1lPXtkYXRhWzBdLlMxfSBcbiAgLy8gICAgICAgY3VycmVudFZhbHVlPXtkYXRhWzBdLlYxfVxuICAvLyAgICAgICB0b3RhbFZhbHVlPXsxNn1cbiAgLy8gICAgICAgdW5pdE9mTWVhc3VyZT17ZGF0YVswXS5TMi50b0xvd2VyQ2FzZSgpfVxuICAvLyAgICAgICB0UHVtcE9uPXtkYXRhWzBdLlYzfVxuICAvLyAgICAgICB0UHVtcE9mZj17ZGF0YVswXS5WNH1cbiAgLy8gICAgICAgYWxhcm1Pbj17ZGF0YVswXS5WNX1cbiAgLy8gICAgICAgYWxhcm1PZmY9e2RhdGFbMF0uVjZ9XG4gIC8vICAgICAvPlxuICAvLyAgICAgPERldGFpbHMgXG4gIC8vICAgICAgIG5hbWU9e2RhdGFbMF0uUzN9IFxuICAvLyAgICAgICBjdXJyZW50VmFsdWU9e2RhdGFbMF0uVjJ9XG4gIC8vICAgICAgIHRvdGFsVmFsdWU9ezE2fVxuICAvLyAgICAgICB1bml0T2ZNZWFzdXJlPXtkYXRhWzBdLlM0LnRvTG93ZXJDYXNlKCl9XG4gIC8vICAgICAvPlxuICAvLyAgIDwvTW9iaWxlTGF5b3V0PlxuICAvLyAgIDpcbiAgICAvLyA8TmV3TGF5b3V0IHNpdGVfbmFtZT17XCJVbml2ZXJzaXR5XCJ9IGRhdGU9e2RhdGFbMF0ubURhdGV9IHRpbWU9e2Ake2RhdGFbMF0ubVRpbWUuc3Vic3RyKDAsIDQpfSAke2RhdGFbMF0ubVRpbWUuc3Vic3RyKC0yKX1gfT5cbiAgICAvLyAgIDxGdWxsRGV0YWlscyBcbiAgICAvLyAgICAgbmFtZT17ZGF0YVswXS5TMX0gXG4gICAgLy8gICAgIGN1cnJlbnRWYWx1ZT17ZGF0YVswXS5WMX1cbiAgICAvLyAgICAgdG90YWxWYWx1ZT17MTZ9XG4gICAgLy8gICAgIHVuaXRPZk1lYXN1cmU9e2RhdGFbMF0uUzIudG9Mb3dlckNhc2UoKX1cbiAgICAvLyAgICAgdFB1bXBPbj17ZGF0YVswXS5WM31cbiAgICAvLyAgICAgdFB1bXBPZmY9e2RhdGFbMF0uVjR9XG4gICAgLy8gICAgIGFsYXJtT249e2RhdGFbMF0uVjV9XG4gICAgLy8gICAgIGFsYXJtT2ZmPXtkYXRhWzBdLlY2fVxuICAgIC8vICAgLz5cbiAgICAvLyAgIDxEZXRhaWxzIFxuICAgIC8vICAgICBuYW1lPXtkYXRhWzBdLlMzfSBcbiAgICAvLyAgICAgY3VycmVudFZhbHVlPXtkYXRhWzBdLlYyfVxuICAgIC8vICAgICB0b3RhbFZhbHVlPXsxNn1cbiAgICAvLyAgICAgdW5pdE9mTWVhc3VyZT17ZGF0YVswXS5TNC50b0xvd2VyQ2FzZSgpfVxuICAgIC8vICAgLz5cbiAgICAvLyA8L05ld0xheW91dD5cblxuICA8TmV3TGF5b3V0IFxuICAgIGNvbXBhbnk9J21hbW1vdGgnXG4gICAgc2l0ZXM9eyBzaXRlcy5tYXAoKHNpdGUsIGkpID0+IDxsaSBrZXk9e2l9PjxMaW5rIGhyZWY9e2AvbWFtbW90aC8ke3NpdGUuQkFUVEVSWS50b0xvd2VyQ2FzZSgpfWB9PjxhPntzaXRlLkJBVFRFUll9PC9hPjwvTGluaz48L2xpPikgfSBcbiAgICBzaXRlbmFtZT17XCJVbml2ZXJzaXR5XCJ9IFxuICAgIGRhdGU9e2RhdGFbMF0ubURhdGV9IFxuICAgIHRpbWU9e2RhdGFbMF0ubVRpbWV9XG4gID5cbiAgICA8TmV3RGV0YWlsc1xuICAgICAgcmVzb3VyY2VUeXBlPSdXYXRlcidcbiAgICAgIG5hbWU9e2RhdGFbMF0uUzF9IFxuICAgICAgdW5pdE9mTWVhc3VyZT17ZGF0YVswXS5TMi50b0xvd2VyQ2FzZSgpfVxuICAgICAgY3VycmVudFZhbHVlPXtkYXRhWzBdLlYxfVxuICAgICAgdG90YWxWYWx1ZT17MTZ9XG4gICAgICB0cHVtcE9uPXtkYXRhWzBdLlYzfVxuICAgICAgdHB1bXBPZmY9e2RhdGFbMF0uVjR9XG4gICAgICBhbGFybU9uPXtkYXRhWzBdLlY1fVxuICAgICAgYWxhcm1PZmY9e2RhdGFbMF0uVjZ9XG4gICAgPlxuICAgICAgPERvdWdobnV0Q2hhcnQgbmFtZT17ZGF0YVswXS5TMX0gY3VycmVudFZhbHVlPXtkYXRhWzBdLlYxfSB0b3RhbFZhbHVlPXsxNn0gdW5pdE9mTWVhc3VyZT17ZGF0YVswXS5TMi50b0xvd2VyQ2FzZSgpfSAvPlxuICAgICAgPERvdWdobnV0Q2hhcnQgbmFtZT17ZGF0YVswXS5TM30gY3VycmVudFZhbHVlPXtkYXRhWzBdLlYyfSB0b3RhbFZhbHVlPXsxNn0gdW5pdE9mTWVhc3VyZT17ZGF0YVswXS5TNC50b0xvd2VyQ2FzZSgpfSAvPlxuICAgIDwvTmV3RGV0YWlscz5cbiAgPC9OZXdMYXlvdXQ+XG4pXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY3R4KXtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9qY3Qtc3lzdGVtcy5jb20vYXBpL3VuaXZlcnNpdHknKVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICBjb25zdCByZXMxID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvbWFtbW90aCcpXG4gIGNvbnN0IHNpdGVzID0gYXdhaXQgcmVzMS5qc29uKCk7XG5cbiAgbGV0IGlzTW9iaWxlVmlldyA9IGN0eC5yZXEuaGVhZGVyc1sndXNlci1hZ2VudCddLnNlYXJjaCgvQW5kcm9pZHxpUGhvbmUvaSlcbiAgICBcbiAgaWYoaXNNb2JpbGVWaWV3IDwgMCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7IGRhdGEsIHNpdGVzLCBpc01vYmlsZVZpZXc6IGZhbHNlIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7IGRhdGEsIHNpdGVzLCBpc01vYmlsZVZpZXc6IHRydWUgfVxuICAgIH1cbiAgfVxufSBcblxuXG5leHBvcnQgZGVmYXVsdCBIb21lIiwiY29uc3QgY29sb3IgPSB7XG4gIGpjdE9yYW5nZTogJyNmZjdlMjYnLFxuICBqY3RXaGl0ZTogJyNmY2ZjZmMnLFxuICBqY3REYXJrR3JheTogJyMyOTI5MjknLFxuICBqY3RMaWdodEdyYXk6ICcjYTJhMmEyJ1xufVxuXG5jb25zdCBzaXplID0ge1xuICBtb2JpbGVTOiAnMzIwcHgnLFxuICBtb2JpbGVNOiAnMzc1cHgnLFxuICBtb2JpbGVMOiAnNDI1cHgnLFxuICB0YWJsZXRQOiAnNjAwcHgnLFxuICB0YWJsZXRMOiAnOTAwcHgnLFxuICBsYXB0b3A6ICcxMDI0cHgnLFxuICBsYXB0b3BNOiAnMTIwMHB4JyxcbiAgbGFwdG9wTDogJzE0NDBweCcsXG4gIGRlc2t0b3A6ICcyNTYwcHgnXG59XG5cbmNvbnN0IHN0YW5kYXJkID0ge1xuICBtb2JpbGVTOiBgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7c2l6ZS5tb2JpbGVTfSkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEpYCxcbiAgbW9iaWxlTTogYG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3NpemUubW9iaWxlTX0pIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxKWAsXG4gIG1vYmlsZUw6IGBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtzaXplLm1vYmlsZUx9KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMSlgLFxuICB0YWJsZXRQOiBgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7c2l6ZS50YWJsZXRQfSkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEpYCxcbiAgdGFibGV0TDogYG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3NpemUudGFibGV0TH0pIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxKWAsXG4gIGxhcHRvcDogYG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3NpemUubGFwdG9wfSkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEpYCxcbiAgbGFwdG9wTTogYG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3NpemUubGFwdG9wTX0pIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxKWAsXG4gIGxhcHRvcEw6IGBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtzaXplLmxhcHRvcEx9KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMSlgLFxuICBkZXNrdG9wOiBgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7c2l6ZS5kZXNrdG9wfSkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEpYCxcbn07XG5cbmNvbnN0IHJldGluYSA9IHtcbiAgbW9iaWxlOiBgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7c2l6ZS5tb2JpbGVMfSkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpYCxcbiAgbW9iaWxlUzogYG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3NpemUubW9iaWxlU30pIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKWAsXG4gIG1vYmlsZU06IGBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtzaXplLm1vYmlsZU19KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilgLFxuICBtb2JpbGVMOiBgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7c2l6ZS5tb2JpbGVMfSkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpYCxcbiAgdGFibGV0OiBgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7c2l6ZS50YWJsZXR9KSBhbmQgKG1heC13aWR0aDogJHtzaXplLmxhcHRvcH0pIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKWAsXG4gIGxhcHRvcDogYG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3NpemUubGFwdG9wfSkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpYCxcbiAgbGFwdG9wTTogYG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3NpemUubGFwdG9wTX0pIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKWAsXG4gIGxhcHRvcEw6IGBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtzaXplLmxhcHRvcEx9KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilgLFxuICBkZXNrdG9wOiBgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7c2l6ZS5kZXNrdG9wfSkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpYCxcbn07XG5cbmV4cG9ydCB7IHN0YW5kYXJkLCByZXRpbmEsIGNvbG9yIH0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLXVuZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibnVrYS1jYXJvdXNlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY2hhcnRqcy0yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9