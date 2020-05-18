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
  }, __jsx(Graph, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
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
      lineNumber: 30,
      columnNumber: 9
    }
  })), __jsx(Volume, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx(CurrentVolume, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, props.currentValue !== null ? props.currentValue.toFixed(2) : props.currentValue), __jsx(CurrentVolumeLabel, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, props.unitOfMeasure)));
};

/* harmony default export */ __webpack_exports__["default"] = (DoughnutChart);
const GraphContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "DoughnutChart__GraphContainer",
  componentId: "sc-557kc3-0"
})(["display:grid;grid:1fr / 1fr;place-items:center;"]);
const Graph = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "DoughnutChart__Graph",
  componentId: "sc-557kc3-1"
})(["grid-row:1;grid-column:1;"]);
const Volume = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "DoughnutChart__Volume",
  componentId: "sc-557kc3-2"
})(["grid-row:1;grid-column:1;display:flex;flex-flow:column;align-items:center;margin-top:1.5rem;"]);
const CurrentVolume = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "DoughnutChart__CurrentVolume",
  componentId: "sc-557kc3-3"
})(["font-size:2.5rem;color:", ";font-weight:bold;"], _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["color"].jctDarkGray);
const CurrentVolumeLabel = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "DoughnutChart__CurrentVolumeLabel",
  componentId: "sc-557kc3-4"
})(["font-size:1.5rem;color:", ";"], _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["color"].jctLightGray);

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
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sidebar */ "./components/Sidebar.js");
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
    lineNumber: 114,
    columnNumber: 3
  }
}, __jsx(_Sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
  companyName: "Mammoth",
  siteName: "CEH",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 115,
    columnNumber: 5
  }
}), __jsx(CompanyContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 116,
    columnNumber: 5
  }
}, __jsx(CompanyName, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 117,
    columnNumber: 7
  }
}, props.company_name), __jsx(SiteName, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 118,
    columnNumber: 7
  }
}, props.site_name), __jsx(DateTime, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 119,
    columnNumber: 7
  }
}, props.date, " - ", props.time)), __jsx(SiteDetailsContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 121,
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
})(["height:100vh;width:30rem;background-color:", ";display:grid;grid-template-rows:6% 1fr;position:fixed;"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["color"].jctOrange);
const CompanyNameContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Sidebar__CompanyNameContainer",
  componentId: "sc-8j0zu2-1"
})(["background-color:#ff7e26;display:flex;justify-content:center;align-items:center;"]);
const CompanyName = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "Sidebar__CompanyName",
  componentId: "sc-8j0zu2-2"
})(["color:#fff;font-size:3rem;"]);
const SiteListContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Sidebar__SiteListContainer",
  componentId: "sc-8j0zu2-3"
})(["padding-top:1rem;padding-left:2rem;"]);
const SiteList = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({
  displayName: "Sidebar__SiteList",
  componentId: "sc-8j0zu2-4"
})(["list-style:none;padding:0 0 0 1rem;h2{color:#fff;font-size:2.3rem;}li a{text-decoration:none;}li a span{height:6rem;margin-bottom:1rem;display:flex;align-items:center;padding-left:1rem;font-size:1.8rem;color:#fff;}li a span:hover{background-color:rgba(255,255,255,.125);}"]);

const Sidebar = props => __jsx(SidebarContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 3
  }
}, __jsx(CompanyNameContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 5
  }
}, __jsx(CompanyName, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 7
  }
}, props.companyName)), __jsx(SiteListContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }
}, __jsx(SiteList, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 7
  }
}, __jsx("h2", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 9
  }
}, "Sites"), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 9
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 11
  }
}, __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 13
  }
}, props.siteName))), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 9
  }
}, __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 11
  }
}, __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 13
  }
}, props.siteName))))));

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

/***/ "./pages/jct/jctbty/index.js":
/*!***********************************!*\
  !*** ./pages/jct/jctbty/index.js ***!
  \***********************************/
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
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_MobileLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/MobileLayout */ "./components/MobileLayout.js");
/* harmony import */ var _components_MobileCarousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/MobileCarousel */ "./components/MobileCarousel.js");
/* harmony import */ var _components_FullDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/FullDetails */ "./components/FullDetails.js");
/* harmony import */ var _components_Details__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Details */ "./components/Details.js");
var _jsxFileName = "/Users/cor-eee/Projects/jct-next/pages/jct/jctbty/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const JCTBTY = ({
  data,
  isMobileView
}) => isMobileView ? __jsx(_components_MobileLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
  company_name: "JCT",
  site_name: "JCTBTY",
  date: data[0].mDate,
  time: data[0].mTime,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }
}, __jsx(_components_MobileCarousel__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 7
  }
}, __jsx(_components_FullDetails__WEBPACK_IMPORTED_MODULE_6__["default"], {
  name: data[0].S1,
  unitOfMeasure: data[0].S2.toLowerCase(),
  currentValue: data[0].V1,
  totalValue: 16,
  tPumpOn: data[0].V3,
  tPumpOff: data[0].V4,
  alarmOn: data[0].V5,
  alarmOff: data[0].V6,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }
}), __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_7__["default"], {
  name: data[0].S5,
  unitOfMeasure: data[0].S6.toLowerCase(),
  currentValue: data[0].V1,
  totalValue: 16,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }
}), __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_7__["default"], {
  name: data[0].S7,
  unitOfMeasure: data[0].S8.toLowerCase(),
  currentValue: data[0].V1,
  totalValue: 16,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }
})), __jsx(_components_MobileCarousel__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 7
  }
}, __jsx(_components_FullDetails__WEBPACK_IMPORTED_MODULE_6__["default"], {
  name: data[0].S3,
  unitOfMeasure: data[0].S4.toLowerCase(),
  currentValue: data[0].V1,
  totalValue: 16,
  alarmOn: data[0].V5,
  alarmOff: data[0].V6,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }
}), __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_7__["default"], {
  name: data[0].S9,
  unitOfMeasure: data[0].S10.toLowerCase(),
  currentValue: data[0].V1,
  totalValue: 16,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 9
  }
}), __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_7__["default"], {
  name: data[0].S11,
  unitOfMeasure: data[0].S12.toLowerCase(),
  currentValue: data[0].V1,
  totalValue: 16,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 9
  }
})), __jsx(_components_MobileCarousel__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 7
  }
}, __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_7__["default"], {
  name: data[0].S13,
  unitOfMeasure: data[0].S14.toLowerCase(),
  currentValue: data[0].V1,
  totalValue: 16,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 9
  }
}), __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_7__["default"], {
  name: data[0].S15,
  unitOfMeasure: data[0].S16.toLowerCase(),
  currentValue: data[0].V1,
  totalValue: 16,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 9
  }
}))) : __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
  company_name: "JCT",
  site_name: "JCTBTY",
  date: data[0].mDate,
  time: data[0].mTime,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 5
  }
}, __jsx(_components_FullDetails__WEBPACK_IMPORTED_MODULE_6__["default"], {
  name: data[0].S1,
  unitOfMeasure: data[0].S2.toLowerCase(),
  currentValue: data[0].V1,
  totalValue: 16,
  tPumpOn: data[0].V3,
  tPumpOff: data[0].V4,
  alarmOn: data[0].V5,
  alarmOff: data[0].V6,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 7
  }
}), __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_7__["default"], {
  name: data[0].S5,
  unitOfMeasure: data[0].S6.toLowerCase(),
  currentValue: data[0].V1,
  totalValue: 16,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 7
  }
}), __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_7__["default"], {
  name: data[0].S7,
  unitOfMeasure: data[0].S8.toLowerCase(),
  currentValue: data[0].V1,
  totalValue: 16,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 7
  }
}), __jsx(_components_FullDetails__WEBPACK_IMPORTED_MODULE_6__["default"], {
  name: data[0].S3,
  unitOfMeasure: data[0].S4.toLowerCase(),
  currentValue: data[0].V6,
  totalValue: 16,
  tPumpOn: data[0].V6,
  tPumpOff: data[0].V7,
  alarmOn: data[0].V8,
  alarmOff: data[0].V8,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 109,
    columnNumber: 7
  }
}), __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_7__["default"], {
  name: data[0].S9,
  unitOfMeasure: data[0].S10.toLowerCase(),
  currentValue: data[0].V1,
  totalValue: 16,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 120,
    columnNumber: 7
  }
}), __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_7__["default"], {
  name: data[0].S11,
  unitOfMeasure: data[0].S12.toLowerCase(),
  currentValue: data[0].V1,
  totalValue: 16,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 127,
    columnNumber: 7
  }
}), __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_7__["default"], {
  name: data[0].S13,
  unitOfMeasure: data[0].S14.toLowerCase(),
  currentValue: data[0].V1,
  totalValue: 16,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 134,
    columnNumber: 7
  }
}), __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_7__["default"], {
  name: data[0].S15,
  unitOfMeasure: data[0].S16.toLowerCase(),
  currentValue: data[0].V1,
  totalValue: 16,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 141,
    columnNumber: 7
  }
}));

async function getServerSideProps(ctx) {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()('http://jct-systems.com/api/jctbty');
  const data = await res.json();
  let isMobileView = ctx.req.headers['user-agent'].search(/Android|iPhone/i);

  if (isMobileView < 0) {
    return {
      props: {
        data,
        isMobileView: false
      }
    };
  } else {
    return {
      props: {
        data,
        isMobileView: true
      }
    };
  }
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
  jctDarkGray: '#464646',
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
/*!*****************************************!*\
  !*** multi ./pages/jct/jctbty/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/cor-eee/Projects/jct-next/pages/jct/jctbty/index.js */"./pages/jct/jctbty/index.js");


/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "nuka-carousel":
/*!********************************!*\
  !*** external "nuka-carousel" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nuka-carousel");

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

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=jctbty.js.map