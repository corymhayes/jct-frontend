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
var _jsxFileName = "C:\\inetpub\\jctsystems\\portal\\jct-frontend\\components\\Alarms.js";

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
var _jsxFileName = "C:\\inetpub\\jctsystems\\portal\\jct-frontend\\components\\Details.js";

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
var _jsxFileName = "C:\\inetpub\\jctsystems\\portal\\jct-frontend\\components\\DoughnutAlarms.js";

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
var _jsxFileName = "C:\\inetpub\\jctsystems\\portal\\jct-frontend\\components\\DoughnutChart.js";

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
var _jsxFileName = "C:\\inetpub\\jctsystems\\portal\\jct-frontend\\components\\FullDetails.js";

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
var _jsxFileName = "C:\\inetpub\\jctsystems\\portal\\jct-frontend\\components\\Layout.js";

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
var _jsxFileName = "C:\\inetpub\\jctsystems\\portal\\jct-frontend\\components\\MobileCarousel.js";

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
var _jsxFileName = "C:\\inetpub\\jctsystems\\portal\\jct-frontend\\components\\MobileLayout.js";

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
var _jsxFileName = "C:\\inetpub\\jctsystems\\portal\\jct-frontend\\components\\Trend.js";

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
var _jsxFileName = "C:\\inetpub\\jctsystems\\portal\\jct-frontend\\pages\\jct\\jctbty\\index.js";

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

module.exports = __webpack_require__(/*! C:\inetpub\jctsystems\portal\jct-frontend\pages\jct\jctbty\index.js */"./pages/jct/jctbty/index.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BbGFybXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EZXRhaWxzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRG91Z2hudXRBbGFybXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Eb3VnaG51dENoYXJ0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRnVsbERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb2JpbGVDYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01vYmlsZUxheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RyZW5kLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2pjdC9qY3RidHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NjcmVlbnNpemVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtdW5mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm51a2EtY2Fyb3VzZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWNoYXJ0anMtMlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2Iiwic3RhbmRhcmQiLCJ0YWJsZXRQIiwidGFibGV0TCIsIlRpdGxlIiwiaDMiLCJjb2xvciIsImpjdE9yYW5nZSIsInJldGluYSIsImxhcHRvcE0iLCJBbGFybUxpc3QiLCJ1bCIsIkFsYXJtTGlzdEl0ZW0iLCJsaSIsImpjdExpZ2h0R3JheSIsIkFsYXJtcyIsInByb3BzIiwidGl0bGUiLCJvbiIsInVuZGVmaW5lZCIsInRvRml4ZWQiLCJvZmYiLCJEZXRhaWxzQ29udGFpbmVyIiwiamN0V2hpdGUiLCJkZXNrdG9wIiwibW9iaWxlIiwiRGV0YWlsc05hbWUiLCJoMSIsIlVuZGVybGluZSIsIkRldGFpbHMiLCJuYW1lIiwiY3VycmVudFZhbHVlIiwidG90YWxWYWx1ZSIsInVuaXRPZk1lYXN1cmUiLCJEb3VnaG51dEFsYXJtcyIsImFsYXJtT24iLCJhbGFybU9mZiIsInRQdW1wT24iLCJ0UHVtcE9mZiIsIkFsYXJtc0NvbnRhaW5lciIsIkRvdWdobnV0Q2hhcnQiLCJkYXRhIiwiZGF0YXNldHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjdHgiLCJkYXRhc2V0IiwiYm9yZGVyV2lkdGgiLCJjdXRvdXRQZXJjZW50YWdlIiwicm90YXRpb24iLCJNYXRoIiwiUEkiLCJjaXJjdW1mZXJlbmNlIiwidG9vbHRpcHMiLCJob3ZlciIsIkdyYXBoQ29udGFpbmVyIiwiR3JhcGgiLCJWb2x1bWUiLCJDdXJyZW50Vm9sdW1lIiwiamN0RGFya0dyYXkiLCJDdXJyZW50Vm9sdW1lTGFiZWwiLCJGdWxsRGV0YWlscyIsIk1haW5Db250YWluZXIiLCJtYWluIiwibGFwdG9wUyIsIkNvbXBhbnlDb250YWluZXIiLCJDb21wYW55TmFtZSIsInRhYmxldCIsIlNpdGVOYW1lIiwiaDIiLCJEYXRlVGltZSIsIlNpdGVEZXRhaWxzQ29udGFpbmVyIiwiTGF5b3V0IiwiY29tcGFueV9uYW1lIiwic2l0ZV9uYW1lIiwiZGF0ZSIsInRpbWUiLCJjaGlsZHJlbiIsIk1vYmlsZUNhcm91c2VsIiwiU3R5bGVkQ2Fyb3VzZWwiLCJDYXJvdXNlbCIsIk1vYmlsZU1haW5Db250YWluZXIiLCJNb2JpbGVDb21wYW55Q29udGFpbmVyIiwiTW9iaWxlQ29tcGFueU5hbWUiLCJNb2JpbGVTaXRlTmFtZSIsIk1vYmlsZUNhcm91c2VsQ29udGFpbmVyIiwiTW9iaWxlTGF5b3V0IiwiVHJlbmQiLCJkZWZhdWx0cyIsImdsb2JhbCIsImRlZmF1bHRGb250RmFtaWx5IiwiZGVmYXVsdEZvbnRDb2xvciIsImNhbnZhcyIsImdldENvbnRleHQiLCJncmFkaWVudCIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwibGFiZWxzIiwibW9uIiwidHVlIiwid2VkIiwidGh1IiwiZnJpIiwic2F0Iiwic3VuIiwiYm9yZGVyQ29sb3IiLCJwb2ludEJhY2tncm91bmRDb2xvciIsImN1YmljSW50ZXJwb2xhdGlvbk1vZGUiLCJsZWdlbmQiLCJzY2FsZXMiLCJ5QXhlcyIsInRpY2tzIiwibWluIiwibWF4Iiwic3RlcFNpemUiLCJkaXNwbGF5IiwiZ3JpZExpbmVzIiwieEF4ZXMiLCJKQ1RCVFkiLCJpc01vYmlsZVZpZXciLCJtRGF0ZSIsIm1UaW1lIiwiUzEiLCJTMiIsInRvTG93ZXJDYXNlIiwiVjEiLCJWMyIsIlY0IiwiVjUiLCJWNiIsIlM1IiwiUzYiLCJTNyIsIlM4IiwiUzMiLCJTNCIsIlM5IiwiUzEwIiwiUzExIiwiUzEyIiwiUzEzIiwiUzE0IiwiUzE1IiwiUzE2IiwiVjciLCJWOCIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlcyIsImZldGNoIiwianNvbiIsInJlcSIsImhlYWRlcnMiLCJzZWFyY2giLCJzaXplIiwibW9iaWxlUyIsIm1vYmlsZU0iLCJtb2JpbGVMIiwibGFwdG9wIiwibGFwdG9wTCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQyx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG1HQUlKQyw0REFBUSxDQUFDQyxPQUpMLEVBUUpELDREQUFRLENBQUNFLE9BUkwsQ0FBZjtBQWFBLE1BQU1DLEtBQUssR0FBR0wsd0RBQU0sQ0FBQ00sRUFBVjtBQUFBO0FBQUE7QUFBQSxxS0FFQUMseURBQUssQ0FBQ0MsU0FGTixFQU1BTiw0REFBUSxDQUFDQyxPQU5ULEVBU0FELDREQUFRLENBQUNFLE9BVFQsRUFhQUssMERBQU0sQ0FBQ0MsT0FiUCxDQUFYO0FBa0JBLE1BQU1DLFNBQVMsR0FBR1gsd0RBQU0sQ0FBQ1ksRUFBVjtBQUFBO0FBQUE7QUFBQSwyQ0FBZjtBQUtBLE1BQU1DLGFBQWEsR0FBR2Isd0RBQU0sQ0FBQ2MsRUFBVjtBQUFBO0FBQUE7QUFBQSxvSkFDUlAseURBQUssQ0FBQ1EsWUFERSxFQUtSYiw0REFBUSxDQUFDQyxPQUxELEVBU1JELDREQUFRLENBQUNFLE9BVEQsRUFhUkssMERBQU0sQ0FBQ0MsT0FiQyxDQUFuQjs7QUFtQkEsTUFBTU0sTUFBTSxHQUFHQyxLQUFLLElBQ2xCLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBUUEsS0FBSyxDQUFDQyxLQUFkLENBREYsRUFHRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXFCRCxLQUFLLENBQUNFLEVBQU4sS0FBYUMsU0FBYixHQUF5QkgsS0FBSyxDQUFDRSxFQUFOLENBQVNFLE9BQVQsQ0FBaUIsQ0FBakIsQ0FBekIsR0FBK0NKLEtBQUssQ0FBQ0UsRUFBMUUsQ0FERixFQUVFLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXNCRixLQUFLLENBQUNLLEdBQU4sS0FBY0YsU0FBZCxHQUEwQkgsS0FBSyxDQUFDSyxHQUFOLENBQVVELE9BQVYsQ0FBa0IsQ0FBbEIsQ0FBMUIsR0FBaURKLEtBQUssQ0FBQ0ssR0FBN0UsQ0FGRixDQUhGLENBREY7O0FBV2VOLHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckVBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsTUFBTU8sZ0JBQWdCLEdBQUd2Qix3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9KQUdBTSx5REFBSyxDQUFDaUIsUUFITixFQUtYdEIsNERBQVEsQ0FBQ3VCLE9BTEUsRUFVWGhCLDBEQUFNLENBQUNpQixNQVZJLENBQXRCO0FBZUEsTUFBTUMsV0FBVyxHQUFHM0Isd0RBQU0sQ0FBQzRCLEVBQVY7QUFBQTtBQUFBO0FBQUEsOEpBTU4xQiw0REFBUSxDQUFDQyxPQU5ILEVBVU5ELDREQUFRLENBQUNFLE9BVkgsRUFjTkssMERBQU0sQ0FBQ0MsT0FkRCxDQUFqQjtBQW1CQSxNQUFNbUIsU0FBUyxHQUFHN0Isd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwwRUFBZjs7QUFNQSxNQUFNNkIsT0FBTyxHQUFHYixLQUFLLElBQ25CLE1BQUMsZ0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWNBLEtBQUssQ0FBQ2MsSUFBcEIsQ0FERixFQUVFLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBRkYsRUFHRSxNQUFDLHNEQUFEO0FBQWUsY0FBWSxFQUFFZCxLQUFLLENBQUNlLFlBQW5DO0FBQWlELFlBQVUsRUFBRWYsS0FBSyxDQUFDZ0IsVUFBbkU7QUFBK0UsZUFBYSxFQUFFaEIsS0FBSyxDQUFDaUIsYUFBcEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUhGLENBREY7O0FBaUJlSixzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0RBO0FBRUE7QUFDQTs7QUFHQSxNQUFNSyxjQUFjLEdBQUdsQixLQUFLLElBQzFCLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQyxzREFBRDtBQUFlLGNBQVksRUFBRUEsS0FBSyxDQUFDZSxZQUFuQztBQUFpRCxZQUFVLEVBQUVmLEtBQUssQ0FBQ2dCLFVBQW5FO0FBQStFLGVBQWEsRUFBRWhCLEtBQUssQ0FBQ2lCLGFBQXBHO0FBQW1ILFNBQU8sRUFBRWpCLEtBQUssQ0FBQ21CLE9BQWxJO0FBQTJJLFVBQVEsRUFBRW5CLEtBQUssQ0FBQ29CLFFBQTNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixFQUVFLE1BQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQywrQ0FBRDtBQUFRLE9BQUssRUFBQyxlQUFkO0FBQThCLElBQUUsRUFBRXBCLEtBQUssQ0FBQ3FCLE9BQXhDO0FBQWlELEtBQUcsRUFBRXJCLEtBQUssQ0FBQ3NCLFFBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixFQUVFLE1BQUMsK0NBQUQ7QUFBUSxPQUFLLEVBQUMsT0FBZDtBQUFzQixJQUFFLEVBQUV0QixLQUFLLENBQUNtQixPQUFoQztBQUF5QyxLQUFHLEVBQUVuQixLQUFLLENBQUNvQixRQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBRkYsQ0FGRixDQURGOztBQVVlRiw2RUFBZjtBQUVBLE1BQU1wQyxTQUFTLEdBQUdDLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsd0dBQWY7QUFRQSxNQUFNdUMsZUFBZSxHQUFHeEMsd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3RUFBckIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFFQTtBQUNBOztBQUdBLE1BQU13QyxhQUFhLEdBQUd4QixLQUFLLElBQUk7QUFFN0IsUUFBTXlCLElBQUksR0FBRztBQUNYQyxZQUFRLEVBQUUsQ0FBQztBQUNURCxVQUFJLEVBQUUsQ0FBQ3pCLEtBQUssQ0FBQ2UsWUFBUCxFQUFzQmYsS0FBSyxDQUFDZ0IsVUFBTixHQUFtQmhCLEtBQUssQ0FBQ2UsWUFBL0MsQ0FERztBQUVUO0FBQ0FZLHFCQUFlLEVBQUdDLEdBQUQsSUFBUztBQUN4QjtBQUNBLFlBQUdBLEdBQUcsQ0FBQ0MsT0FBSixDQUFZSixJQUFaLENBQWlCLENBQWpCLElBQXNCekIsS0FBSyxDQUFDb0IsUUFBL0IsRUFBd0M7QUFDeEMsaUJBQU8sQ0FBRSxZQUFGLEVBQWdCLGlCQUFoQixDQUFQO0FBQ0QsU0FGQyxNQUVLLElBQUdRLEdBQUcsQ0FBQ0MsT0FBSixDQUFZSixJQUFaLENBQWlCLENBQWpCLElBQXNCekIsS0FBSyxDQUFDbUIsT0FBL0IsRUFBdUM7QUFDMUMsaUJBQU8sQ0FBRSxLQUFGLEVBQVMsaUJBQVQsQ0FBUDtBQUNELFNBRkksTUFFRTtBQUNMLGlCQUFPLENBQUUsU0FBRixFQUFhLGlCQUFiLENBQVA7QUFDRDtBQUNGLE9BWlE7QUFhVFcsaUJBQVcsRUFBRTtBQWJKLEtBQUQ7QUFEQyxHQUFiO0FBa0JBLFNBQ0UsTUFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFDRSxRQUFJLEVBQUdMLElBRFQ7QUFFRSxTQUFLLEVBQUcsR0FGVjtBQUdFLFVBQU0sRUFBRyxHQUhYO0FBSUUsV0FBTyxFQUFFO0FBQ1BNLHNCQUFnQixFQUFFLEVBRFg7QUFFUEMsY0FBUSxFQUFHLENBQUMsSUFBRCxHQUFRQyxJQUFJLENBQUNDLEVBRmpCO0FBR1BDLG1CQUFhLEVBQUcsTUFBTUYsSUFBSSxDQUFDQyxFQUhwQjtBQUlQRSxjQUFRLEVBQUUsS0FKSDtBQUtQQyxXQUFLLEVBQUU7QUFMQSxLQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBZUUsTUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpQnJDLEtBQUssQ0FBQ2UsWUFBTixLQUF1QixJQUF2QixHQUE4QmYsS0FBSyxDQUFDZSxZQUFOLENBQW1CWCxPQUFuQixDQUEyQixDQUEzQixDQUE5QixHQUE4REosS0FBSyxDQUFDZSxZQUFyRixDQURGLEVBRUUsTUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXFCZixLQUFLLENBQUNpQixhQUEzQixDQUZGLENBZkYsQ0FERjtBQXNCRCxDQTFDRDs7QUE0Q2VPLDRFQUFmO0FBR0EsTUFBTWMsY0FBYyxHQUFHdkQsd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1REFBcEI7QUFNQSxNQUFNdUQsS0FBSyxHQUFHeEQsd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxpQ0FBWDtBQUtBLE1BQU13RCxNQUFNLEdBQUd6RCx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9HQUFaO0FBU0EsTUFBTXlELGFBQWEsR0FBRzFELHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsc0RBRVJNLHlEQUFLLENBQUNvRCxXQUZFLENBQW5CO0FBTUEsTUFBTUMsa0JBQWtCLEdBQUc1RCx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHFDQUViTSx5REFBSyxDQUFDUSxZQUZPLENBQXhCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0VBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsTUFBTVEsZ0JBQWdCLEdBQUd2Qix3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9IQUdBTSx5REFBSyxDQUFDaUIsUUFITixFQUtYdEIsNERBQVEsQ0FBQ3VCLE9BTEUsRUFTWGhCLDBEQUFNLENBQUNpQixNQVRJLENBQXRCO0FBY0EsTUFBTUMsV0FBVyxHQUFHM0Isd0RBQU0sQ0FBQzRCLEVBQVY7QUFBQTtBQUFBO0FBQUEsOEpBTU4xQiw0REFBUSxDQUFDQyxPQU5ILEVBVU5ELDREQUFRLENBQUNFLE9BVkgsRUFjTkssMERBQU0sQ0FBQ0MsT0FkRCxDQUFqQjtBQW1CQSxNQUFNbUIsU0FBUyxHQUFHN0Isd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1REFBZjs7QUFLQSxNQUFNNEQsV0FBVyxHQUFHNUMsS0FBSyxJQUN2QixNQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFjQSxLQUFLLENBQUNjLElBQXBCLENBREYsRUFFRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUZGLEVBR0UsTUFBQyxrRUFBRDtBQUNFLGNBQVksRUFBRWQsS0FBSyxDQUFDZSxZQUR0QjtBQUVFLFlBQVUsRUFBRWYsS0FBSyxDQUFDZ0IsVUFGcEI7QUFHRSxlQUFhLEVBQUVoQixLQUFLLENBQUNpQixhQUh2QjtBQUlFLFNBQU8sRUFBRWpCLEtBQUssQ0FBQ3FCLE9BSmpCO0FBS0UsVUFBUSxFQUFFckIsS0FBSyxDQUFDc0IsUUFMbEI7QUFNRSxTQUFPLEVBQUV0QixLQUFLLENBQUNtQixPQU5qQjtBQU9FLFVBQVEsRUFBRW5CLEtBQUssQ0FBQ29CLFFBUGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFIRixDQURGOztBQXlCZXdCLDBFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JFQTtBQUNBO0FBRUEsTUFBTUMsYUFBYSxHQUFHOUQsd0RBQU0sQ0FBQytELElBQVY7QUFBQTtBQUFBO0FBQUEsMlBBSVI3RCw0REFBUSxDQUFDQyxPQUpELEVBU1JELDREQUFRLENBQUNFLE9BVEQsRUFjUkYsNERBQVEsQ0FBQzhELE9BZEQsRUFtQlI5RCw0REFBUSxDQUFDdUIsT0FuQkQsQ0FBbkI7QUEwQkEsTUFBTXdDLGdCQUFnQixHQUFHakUsd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw4RUFBdEI7QUFPQSxNQUFNaUUsV0FBVyxHQUFHbEUsd0RBQU0sQ0FBQzRCLEVBQVY7QUFBQTtBQUFBO0FBQUEsMkhBSU4xQiw0REFBUSxDQUFDaUUsTUFKSCxFQVFOakUsNERBQVEsQ0FBQ3VCLE9BUkgsRUFZTmhCLDBEQUFNLENBQUNDLE9BWkQsQ0FBakI7QUFpQkEsTUFBTTBELFFBQVEsR0FBR3BFLHdEQUFNLENBQUNxRSxFQUFWO0FBQUE7QUFBQTtBQUFBLGtKQUtIbkUsNERBQVEsQ0FBQ2lFLE1BTE4sRUFTSGpFLDREQUFRLENBQUN1QixPQVROLEVBYUhoQiwwREFBTSxDQUFDQyxPQWJKLENBQWQ7QUFrQkEsTUFBTTRELFFBQVEsR0FBR3RFLHdEQUFNLENBQUNNLEVBQVY7QUFBQTtBQUFBO0FBQUEsd0ZBQWQ7QUFPQSxNQUFNaUUsb0JBQW9CLEdBQUd2RSx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDhjQUNKTSx5REFBSyxDQUFDaUIsUUFERixFQU9mdEIsNERBQVEsQ0FBQ0MsT0FQTSxFQWFmRCw0REFBUSxDQUFDRSxPQWJNLEVBbUJmRiw0REFBUSxDQUFDdUIsT0FuQk0sRUEwQmZoQiwwREFBTSxDQUFDQyxPQTFCUSxDQUExQjs7QUFpQ0EsTUFBTThELE1BQU0sR0FBR3ZELEtBQUssSUFDbEIsTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFjQSxLQUFLLENBQUN3RCxZQUFwQixDQURGLEVBRUUsTUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBV3hELEtBQUssQ0FBQ3lELFNBQWpCLENBRkYsRUFHRSxNQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFXekQsS0FBSyxDQUFDMEQsSUFBakIsU0FBMEIxRCxLQUFLLENBQUMyRCxJQUFoQyxDQUhGLENBREYsRUFNRSxNQUFDLG9CQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDSTNELEtBQUssQ0FBQzRELFFBRFYsQ0FORixDQURGOztBQWFlTCxxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVIQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTU0sY0FBYyxHQUFHN0QsS0FBSyxJQUMxQixNQUFDLG9EQUFEO0FBQ0UsV0FBUyxFQUFHLFFBRGQ7QUFFRSxhQUFXLEVBQUcsRUFGaEI7QUFHRSxZQUFVLEVBQUcsT0FIZjtBQUlFLGlCQUFlLE1BSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FNSUEsS0FBSyxDQUFDNEQsUUFOVixDQURGOztBQVdlQyw2RUFBZjtBQUVBLE1BQU1DLGNBQWMsR0FBRy9FLHdEQUFNLENBQUNnRixvREFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLDhCQUFwQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFFQTtBQUVBLE1BQU1DLG1CQUFtQixHQUFHakYsd0RBQU0sQ0FBQytELElBQVY7QUFBQTtBQUFBO0FBQUEsd0VBQXpCO0FBT0EsTUFBTW1CLHNCQUFzQixHQUFHbEYsd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw0RUFBNUI7QUFPQSxNQUFNa0YsaUJBQWlCLEdBQUduRix3REFBTSxDQUFDNEIsRUFBVjtBQUFBO0FBQUE7QUFBQSxtREFHWnJCLHlEQUFLLENBQUNpQixRQUhNLENBQXZCO0FBTUEsTUFBTTRELGNBQWMsR0FBR3BGLHdEQUFNLENBQUNxRSxFQUFWO0FBQUE7QUFBQTtBQUFBLG1EQUdUOUQseURBQUssQ0FBQ0MsU0FIRyxDQUFwQjtBQU1BLE1BQU04RCxRQUFRLEdBQUd0RSx3REFBTSxDQUFDTSxFQUFWO0FBQUE7QUFBQTtBQUFBLHFFQUFkO0FBTUEsTUFBTStFLHVCQUF1QixHQUFHckYsd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1Q0FBN0I7O0FBTUEsTUFBTXFGLFlBQVksR0FBR3JFLEtBQUssSUFDeEIsbUVBQ0UsTUFBQyxtQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQyxzQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQyxpQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQW9CQSxLQUFLLENBQUN3RCxZQUExQixDQURGLEVBRUUsTUFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBaUJ4RCxLQUFLLENBQUN5RCxTQUF2QixDQUZGLEVBR0UsTUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBV3pELEtBQUssQ0FBQzBELElBQWpCLFNBQTBCMUQsS0FBSyxDQUFDMkQsSUFBaEMsQ0FIRixDQURGLEVBTUUsTUFBQyx1QkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0czRCxLQUFLLENBQUM0RCxRQURULENBTkYsQ0FERixDQURGOztBQXVDZVMsMkVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFFQTtBQUNBOztBQUdBLE1BQU1DLEtBQUssR0FBR3RFLEtBQUssSUFBSTtBQUNyQnVFLDBEQUFRLENBQUNDLE1BQVQsQ0FBZ0JDLGlCQUFoQixHQUFvQyxVQUFwQztBQUNBRiwwREFBUSxDQUFDQyxNQUFULENBQWdCRSxnQkFBaEIsR0FBbUNwRix5REFBSyxDQUFDUSxZQUF6Qzs7QUFFQSxRQUFNMkIsSUFBSSxHQUFHa0QsTUFBTSxJQUFJO0FBQ3JCLFVBQU0vQyxHQUFHLEdBQUcrQyxNQUFNLENBQUNDLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUNBLFVBQU1DLFFBQVEsR0FBR2pELEdBQUcsQ0FBQ2tELG9CQUFKLENBQXlCLENBQXpCLEVBQTJCLENBQTNCLEVBQTZCLENBQTdCLEVBQStCLEdBQS9CLENBQWpCO0FBQ0FELFlBQVEsQ0FBQ0UsWUFBVCxDQUFzQixDQUF0QixFQUF5Qix1QkFBekI7QUFDQUYsWUFBUSxDQUFDRSxZQUFULENBQXNCLENBQXRCLEVBQXlCekYseURBQUssQ0FBQ1EsWUFBL0I7QUFFQSxXQUFPO0FBQ0xrRixZQUFNLEVBQUUsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsS0FBN0IsRUFBb0MsS0FBcEMsRUFBMkMsS0FBM0MsQ0FESDtBQUVMdEQsY0FBUSxFQUFFLENBQUM7QUFDVEQsWUFBSSxFQUFFLENBQUN6QixLQUFLLENBQUNpRixHQUFQLEVBQVlqRixLQUFLLENBQUNrRixHQUFsQixFQUF1QmxGLEtBQUssQ0FBQ21GLEdBQTdCLEVBQWtDbkYsS0FBSyxDQUFDb0YsR0FBeEMsRUFBNkNwRixLQUFLLENBQUNxRixHQUFuRCxFQUF3RHJGLEtBQUssQ0FBQ3NGLEdBQTlELEVBQW1FdEYsS0FBSyxDQUFDdUYsR0FBekUsQ0FERztBQUVUekQsbUJBQVcsRUFBRSxDQUZKO0FBR1QwRCxtQkFBVyxFQUFFbEcseURBQUssQ0FBQ0MsU0FIVjtBQUlUa0csNEJBQW9CLEVBQUVuRyx5REFBSyxDQUFDQyxTQUpuQjtBQUtUb0MsdUJBQWUsRUFBRWtELFFBTFI7QUFNVGEsOEJBQXNCLEVBQUU7QUFOZixPQUFEO0FBRkwsS0FBUDtBQVdELEdBakJEOztBQW1CQSxTQUNFLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRDtBQUNFLFFBQUksRUFBR2pFLElBRFQ7QUFFRSxXQUFPLEVBQUU7QUFDUGtFLFlBQU0sRUFBRSxLQUREO0FBRVB2RCxjQUFRLEVBQUUsS0FGSDtBQUdQQyxXQUFLLEVBQUUsS0FIQTtBQUlQdUQsWUFBTSxFQUFFO0FBQ047QUFDQUMsYUFBSyxFQUFFLENBQUM7QUFDTkMsZUFBSyxFQUFFO0FBQ0xDLGVBQUcsRUFBRSxDQURBO0FBRUxDLGVBQUcsRUFBRSxFQUZBO0FBR0xDLG9CQUFRLEVBQUUsQ0FITDtBQUlMQyxtQkFBTyxFQUFFO0FBSkosV0FERDtBQU9OQyxtQkFBUyxFQUFFO0FBQ1RELG1CQUFPLEVBQUU7QUFEQTtBQVBMLFNBQUQsQ0FGRDtBQWFOO0FBQ0FFLGFBQUssRUFBRSxDQUFDO0FBQ05ELG1CQUFTLEVBQUU7QUFDVEQsbUJBQU8sRUFBRTtBQURBO0FBREwsU0FBRDtBQWREO0FBSkQsS0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERjtBQWdDRCxDQXZERDs7QUF5RGU1QixvRUFBZjtBQUVBLE1BQU0vQixLQUFLLEdBQUd4RCx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG1CQUFYLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsTUFBTXFILE1BQU0sR0FBRyxDQUFDO0FBQUU1RSxNQUFGO0FBQVE2RTtBQUFSLENBQUQsS0FDYkEsWUFBWSxHQUNWLE1BQUMsZ0VBQUQ7QUFBYyxjQUFZLEVBQUUsS0FBNUI7QUFBbUMsV0FBUyxFQUFFLFFBQTlDO0FBQXdELE1BQUksRUFBRTdFLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUThFLEtBQXRFO0FBQTZFLE1BQUksRUFBRTlFLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUStFLEtBQTNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLCtEQUFEO0FBQ0UsTUFBSSxFQUFFL0UsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRZ0YsRUFEaEI7QUFFRSxlQUFhLEVBQUVoRixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFpRixFQUFSLENBQVdDLFdBQVgsRUFGakI7QUFHRSxjQUFZLEVBQUVsRixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFtRixFQUh4QjtBQUlFLFlBQVUsRUFBRSxFQUpkO0FBS0UsU0FBTyxFQUFFbkYsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRb0YsRUFMbkI7QUFNRSxVQUFRLEVBQUVwRixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFxRixFQU5wQjtBQU9FLFNBQU8sRUFBRXJGLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUXNGLEVBUG5CO0FBUUUsVUFBUSxFQUFFdEYsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRdUYsRUFScEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLEVBWUUsTUFBQywyREFBRDtBQUNFLE1BQUksRUFBRXZGLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUXdGLEVBRGhCO0FBRUUsZUFBYSxFQUFFeEYsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFReUYsRUFBUixDQUFXUCxXQUFYLEVBRmpCO0FBR0UsY0FBWSxFQUFFbEYsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRbUYsRUFIeEI7QUFJRSxZQUFVLEVBQUUsRUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBWkYsRUFtQkUsTUFBQywyREFBRDtBQUNFLE1BQUksRUFBRW5GLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUTBGLEVBRGhCO0FBRUUsZUFBYSxFQUFFMUYsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRMkYsRUFBUixDQUFXVCxXQUFYLEVBRmpCO0FBR0UsY0FBWSxFQUFFbEYsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRbUYsRUFIeEI7QUFJRSxZQUFVLEVBQUUsRUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBbkJGLENBREYsRUE0QkUsTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQywrREFBRDtBQUNFLE1BQUksRUFBRW5GLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUTRGLEVBRGhCO0FBRUUsZUFBYSxFQUFFNUYsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRNkYsRUFBUixDQUFXWCxXQUFYLEVBRmpCO0FBR0UsY0FBWSxFQUFFbEYsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRbUYsRUFIeEI7QUFJRSxZQUFVLEVBQUUsRUFKZDtBQUtFLFNBQU8sRUFBRW5GLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUXNGLEVBTG5CO0FBTUUsVUFBUSxFQUFFdEYsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRdUYsRUFOcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLEVBVUUsTUFBQywyREFBRDtBQUNFLE1BQUksRUFBRXZGLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUThGLEVBRGhCO0FBRUUsZUFBYSxFQUFFOUYsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRK0YsR0FBUixDQUFZYixXQUFaLEVBRmpCO0FBR0UsY0FBWSxFQUFFbEYsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRbUYsRUFIeEI7QUFJRSxZQUFVLEVBQUUsRUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBVkYsRUFpQkUsTUFBQywyREFBRDtBQUNFLE1BQUksRUFBRW5GLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUWdHLEdBRGhCO0FBRUUsZUFBYSxFQUFFaEcsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRaUcsR0FBUixDQUFZZixXQUFaLEVBRmpCO0FBR0UsY0FBWSxFQUFFbEYsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRbUYsRUFIeEI7QUFJRSxZQUFVLEVBQUUsRUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBakJGLENBNUJGLEVBcURFLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsMkRBQUQ7QUFDRSxNQUFJLEVBQUVuRixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFrRyxHQURoQjtBQUVFLGVBQWEsRUFBRWxHLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUW1HLEdBQVIsQ0FBWWpCLFdBQVosRUFGakI7QUFHRSxjQUFZLEVBQUVsRixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFtRixFQUh4QjtBQUlFLFlBQVUsRUFBRSxFQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixFQVFFLE1BQUMsMkRBQUQ7QUFDRSxNQUFJLEVBQUVuRixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFvRyxHQURoQjtBQUVFLGVBQWEsRUFBRXBHLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUXFHLEdBQVIsQ0FBWW5CLFdBQVosRUFGakI7QUFHRSxjQUFZLEVBQUVsRixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFtRixFQUh4QjtBQUlFLFlBQVUsRUFBRSxFQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFSRixDQXJERixDQURVLEdBdUVWLE1BQUMsMERBQUQ7QUFBUSxjQUFZLEVBQUUsS0FBdEI7QUFBNkIsV0FBUyxFQUFFLFFBQXhDO0FBQWtELE1BQUksRUFBRW5GLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUThFLEtBQWhFO0FBQXVFLE1BQUksRUFBRTlFLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUStFLEtBQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLCtEQUFEO0FBQ0UsTUFBSSxFQUFFL0UsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRZ0YsRUFEaEI7QUFFRSxlQUFhLEVBQUVoRixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFpRixFQUFSLENBQVdDLFdBQVgsRUFGakI7QUFHRSxjQUFZLEVBQUVsRixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFtRixFQUh4QjtBQUlFLFlBQVUsRUFBRSxFQUpkO0FBS0UsU0FBTyxFQUFFbkYsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRb0YsRUFMbkI7QUFNRSxVQUFRLEVBQUVwRixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFxRixFQU5wQjtBQU9FLFNBQU8sRUFBRXJGLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUXNGLEVBUG5CO0FBUUUsVUFBUSxFQUFFdEYsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRdUYsRUFScEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLEVBWUUsTUFBQywyREFBRDtBQUNFLE1BQUksRUFBRXZGLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUXdGLEVBRGhCO0FBRUUsZUFBYSxFQUFFeEYsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFReUYsRUFBUixDQUFXUCxXQUFYLEVBRmpCO0FBR0UsY0FBWSxFQUFFbEYsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRbUYsRUFIeEI7QUFJRSxZQUFVLEVBQUUsRUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBWkYsRUFtQkUsTUFBQywyREFBRDtBQUNFLE1BQUksRUFBRW5GLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUTBGLEVBRGhCO0FBRUUsZUFBYSxFQUFFMUYsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRMkYsRUFBUixDQUFXVCxXQUFYLEVBRmpCO0FBR0UsY0FBWSxFQUFFbEYsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRbUYsRUFIeEI7QUFJRSxZQUFVLEVBQUUsRUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBbkJGLEVBMEJFLE1BQUMsK0RBQUQ7QUFDRSxNQUFJLEVBQUVuRixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVE0RixFQURoQjtBQUVFLGVBQWEsRUFBRTVGLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUTZGLEVBQVIsQ0FBV1gsV0FBWCxFQUZqQjtBQUdFLGNBQVksRUFBRWxGLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUXVGLEVBSHhCO0FBSUUsWUFBVSxFQUFFLEVBSmQ7QUFLRSxTQUFPLEVBQUV2RixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVF1RixFQUxuQjtBQU1FLFVBQVEsRUFBRXZGLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUXNHLEVBTnBCO0FBT0UsU0FBTyxFQUFFdEcsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRdUcsRUFQbkI7QUFRRSxVQUFRLEVBQUV2RyxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVF1RyxFQVJwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBMUJGLEVBcUNFLE1BQUMsMkRBQUQ7QUFDRSxNQUFJLEVBQUV2RyxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVE4RixFQURoQjtBQUVFLGVBQWEsRUFBRTlGLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUStGLEdBQVIsQ0FBWWIsV0FBWixFQUZqQjtBQUdFLGNBQVksRUFBRWxGLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUW1GLEVBSHhCO0FBSUUsWUFBVSxFQUFFLEVBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQXJDRixFQTRDRSxNQUFDLDJEQUFEO0FBQ0UsTUFBSSxFQUFFbkYsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRZ0csR0FEaEI7QUFFRSxlQUFhLEVBQUVoRyxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFpRyxHQUFSLENBQVlmLFdBQVosRUFGakI7QUFHRSxjQUFZLEVBQUVsRixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFtRixFQUh4QjtBQUlFLFlBQVUsRUFBRSxFQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUE1Q0YsRUFtREUsTUFBQywyREFBRDtBQUNFLE1BQUksRUFBRW5GLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUWtHLEdBRGhCO0FBRUUsZUFBYSxFQUFFbEcsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRbUcsR0FBUixDQUFZakIsV0FBWixFQUZqQjtBQUdFLGNBQVksRUFBRWxGLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUW1GLEVBSHhCO0FBSUUsWUFBVSxFQUFFLEVBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQW5ERixFQTBERSxNQUFDLDJEQUFEO0FBQ0UsTUFBSSxFQUFFbkYsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRb0csR0FEaEI7QUFFRSxlQUFhLEVBQUVwRyxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFxRyxHQUFSLENBQVluQixXQUFaLEVBRmpCO0FBR0UsY0FBWSxFQUFFbEYsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRbUYsRUFIeEI7QUFJRSxZQUFVLEVBQUUsRUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBMURGLENBeEVKOztBQTJJTyxlQUFlcUIsa0JBQWYsQ0FBa0NyRyxHQUFsQyxFQUFzQztBQUMzQyxRQUFNc0csR0FBRyxHQUFHLE1BQU1DLHlEQUFLLENBQUMsbUNBQUQsQ0FBdkI7QUFDQSxRQUFNMUcsSUFBSSxHQUFHLE1BQU15RyxHQUFHLENBQUNFLElBQUosRUFBbkI7QUFFQSxNQUFJOUIsWUFBWSxHQUFHMUUsR0FBRyxDQUFDeUcsR0FBSixDQUFRQyxPQUFSLENBQWdCLFlBQWhCLEVBQThCQyxNQUE5QixDQUFxQyxpQkFBckMsQ0FBbkI7O0FBRUEsTUFBR2pDLFlBQVksR0FBRyxDQUFsQixFQUFvQjtBQUNsQixXQUFPO0FBQ0x0RyxXQUFLLEVBQUU7QUFBRXlCLFlBQUY7QUFBUTZFLG9CQUFZLEVBQUU7QUFBdEI7QUFERixLQUFQO0FBR0QsR0FKRCxNQUlPO0FBQ0wsV0FBTztBQUNMdEcsV0FBSyxFQUFFO0FBQUV5QixZQUFGO0FBQVE2RSxvQkFBWSxFQUFFO0FBQXRCO0FBREYsS0FBUDtBQUdEO0FBQ0Y7QUFHY0QscUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDdktBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBTS9HLEtBQUssR0FBRztBQUNaQyxXQUFTLEVBQUUsU0FEQztBQUVaZ0IsVUFBUSxFQUFFLFNBRkU7QUFHWm1DLGFBQVcsRUFBRSxTQUhEO0FBSVo1QyxjQUFZLEVBQUU7QUFKRixDQUFkO0FBT0EsTUFBTTBJLElBQUksR0FBRztBQUNYQyxTQUFPLEVBQUUsT0FERTtBQUVYQyxTQUFPLEVBQUUsT0FGRTtBQUdYQyxTQUFPLEVBQUUsT0FIRTtBQUlYekosU0FBTyxFQUFFLE9BSkU7QUFLWEMsU0FBTyxFQUFFLE9BTEU7QUFNWHlKLFFBQU0sRUFBRSxRQU5HO0FBT1huSixTQUFPLEVBQUUsUUFQRTtBQVFYb0osU0FBTyxFQUFFLFFBUkU7QUFTWHJJLFNBQU8sRUFBRTtBQVRFLENBQWI7QUFZQSxNQUFNdkIsUUFBUSxHQUFHO0FBQ2Z3SixTQUFPLEVBQUcsK0JBQThCRCxJQUFJLENBQUNDLE9BQVEsMkNBRHRDO0FBRWZDLFNBQU8sRUFBRywrQkFBOEJGLElBQUksQ0FBQ0UsT0FBUSwyQ0FGdEM7QUFHZkMsU0FBTyxFQUFHLCtCQUE4QkgsSUFBSSxDQUFDRyxPQUFRLDJDQUh0QztBQUlmekosU0FBTyxFQUFHLCtCQUE4QnNKLElBQUksQ0FBQ3RKLE9BQVEsMkNBSnRDO0FBS2ZDLFNBQU8sRUFBRywrQkFBOEJxSixJQUFJLENBQUNySixPQUFRLDJDQUx0QztBQU1meUosUUFBTSxFQUFHLCtCQUE4QkosSUFBSSxDQUFDSSxNQUFPLDJDQU5wQztBQU9mbkosU0FBTyxFQUFHLCtCQUE4QitJLElBQUksQ0FBQy9JLE9BQVEsMkNBUHRDO0FBUWZvSixTQUFPLEVBQUcsK0JBQThCTCxJQUFJLENBQUNLLE9BQVEsMkNBUnRDO0FBU2ZySSxTQUFPLEVBQUcsK0JBQThCZ0ksSUFBSSxDQUFDaEksT0FBUTtBQVR0QyxDQUFqQjtBQVlBLE1BQU1oQixNQUFNLEdBQUc7QUFDYmlCLFFBQU0sRUFBRywrQkFBOEIrSCxJQUFJLENBQUNHLE9BQVEsMkNBRHZDO0FBRWJGLFNBQU8sRUFBRywrQkFBOEJELElBQUksQ0FBQ0MsT0FBUSwyQ0FGeEM7QUFHYkMsU0FBTyxFQUFHLCtCQUE4QkYsSUFBSSxDQUFDRSxPQUFRLDJDQUh4QztBQUliQyxTQUFPLEVBQUcsK0JBQThCSCxJQUFJLENBQUNHLE9BQVEsMkNBSnhDO0FBS2J6RixRQUFNLEVBQUcsK0JBQThCc0YsSUFBSSxDQUFDdEYsTUFBTyxxQkFBb0JzRixJQUFJLENBQUNJLE1BQU8sMkNBTHRFO0FBTWJBLFFBQU0sRUFBRywrQkFBOEJKLElBQUksQ0FBQ0ksTUFBTywyQ0FOdEM7QUFPYm5KLFNBQU8sRUFBRywrQkFBOEIrSSxJQUFJLENBQUMvSSxPQUFRLDJDQVB4QztBQVFib0osU0FBTyxFQUFHLCtCQUE4QkwsSUFBSSxDQUFDSyxPQUFRLDJDQVJ4QztBQVNickksU0FBTyxFQUFHLCtCQUE4QmdJLElBQUksQ0FBQ2hJLE9BQVE7QUFUeEMsQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBLCtDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxqY3RcXGpjdGJ0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IHJldGluYSwgc3RhbmRhcmQsIGNvbG9yIH0gZnJvbSAnLi4vcHVibGljL3NjcmVlbnNpemVzJ1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG5cclxuICBAbWVkaWEgJHtzdGFuZGFyZC50YWJsZXRQfXtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7c3RhbmRhcmQudGFibGV0TH17XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgzYFxyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAke2NvbG9yLmpjdE9yYW5nZX07XHJcbiAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogLjI1cmVtO1xyXG4gIFxyXG4gIEBtZWRpYSAke3N0YW5kYXJkLnRhYmxldFB9e1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG4gIEBtZWRpYSAke3N0YW5kYXJkLnRhYmxldEx9e1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHtyZXRpbmEubGFwdG9wTX17XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IEFsYXJtTGlzdCA9IHN0eWxlZC51bGBcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbmBcclxuXHJcbmNvbnN0IEFsYXJtTGlzdEl0ZW0gPSBzdHlsZWQubGlgXHJcbiAgY29sb3I6ICR7Y29sb3IuamN0TGlnaHRHcmF5fTtcclxuICBmb250LXNpemU6IDEuOHJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAuMjVyZW07XHJcbiAgXHJcbiAgQG1lZGlhICR7c3RhbmRhcmQudGFibGV0UH17XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAke3N0YW5kYXJkLnRhYmxldEx9e1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAke3JldGluYS5sYXB0b3BNfXtcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gIH1cclxuYFxyXG5cclxuXHJcbmNvbnN0IEFsYXJtcyA9IHByb3BzID0+IChcclxuICA8Q29udGFpbmVyPlxyXG4gICAgPFRpdGxlPntwcm9wcy50aXRsZX08L1RpdGxlPlxyXG5cclxuICAgIDxBbGFybUxpc3Q+XHJcbiAgICAgIDxBbGFybUxpc3RJdGVtPk9uOiB7IHByb3BzLm9uICE9PSB1bmRlZmluZWQgPyBwcm9wcy5vbi50b0ZpeGVkKDIpIDogcHJvcHMub24gfTwvQWxhcm1MaXN0SXRlbT5cclxuICAgICAgPEFsYXJtTGlzdEl0ZW0+T2ZmOiB7IHByb3BzLm9mZiAhPT0gdW5kZWZpbmVkID8gcHJvcHMub2ZmLnRvRml4ZWQoMikgOiBwcm9wcy5vZmYgfTwvQWxhcm1MaXN0SXRlbT5cclxuICAgIDwvQWxhcm1MaXN0PlxyXG4gIDwvQ29udGFpbmVyPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGFybXMiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyBjb2xvciwgc3RhbmRhcmQsIHJldGluYSB9IGZyb20gJy4uL3B1YmxpYy9zY3JlZW5zaXplcydcclxuXHJcbmltcG9ydCBUcmVuZCBmcm9tICcuLi9jb21wb25lbnRzL1RyZW5kJ1xyXG5pbXBvcnQgRG91Z2hudXRDaGFydCBmcm9tICcuL0RvdWdobnV0Q2hhcnQnXHJcblxyXG5jb25zdCBEZXRhaWxzQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3IuamN0V2hpdGV9O1xyXG4gIFxyXG4gIEBtZWRpYSAke3N0YW5kYXJkLmRlc2t0b3B9e1xyXG4gICAgbWF4LXdpZHRoOiAzNXJlbTtcclxuICAgIG1heC1oZWlnaHQ6IDM1cmVtO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7cmV0aW5hLm1vYmlsZX17XHJcbiAgICBwYWRkaW5nOiAycmVtIDJyZW0gNHJlbSAycmVtO1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgRGV0YWlsc05hbWUgPSBzdHlsZWQuaDFgXHJcbiAgY29sb3I6ICNGRjdFMjY7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcblxyXG4gIEBtZWRpYSAke3N0YW5kYXJkLnRhYmxldFB9e1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7c3RhbmRhcmQudGFibGV0TH17XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHtyZXRpbmEubGFwdG9wTX17XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBVbmRlcmxpbmUgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MSw0MSw0MSwuMTUpO1xyXG5gXHJcblxyXG5jb25zdCBEZXRhaWxzID0gcHJvcHMgPT4gKFxyXG4gIDxEZXRhaWxzQ29udGFpbmVyPlxyXG4gICAgPERldGFpbHNOYW1lPntwcm9wcy5uYW1lfTwvRGV0YWlsc05hbWU+XHJcbiAgICA8VW5kZXJsaW5lIC8+XHJcbiAgICA8RG91Z2hudXRDaGFydCBjdXJyZW50VmFsdWU9e3Byb3BzLmN1cnJlbnRWYWx1ZX0gdG90YWxWYWx1ZT17cHJvcHMudG90YWxWYWx1ZX0gdW5pdE9mTWVhc3VyZT17cHJvcHMudW5pdE9mTWVhc3VyZX0gLz5cclxuICAgIHsvKiA8VHJlbmQgXHJcbiAgICAgIG1vbj17cHJvcHMubW9ufVxyXG4gICAgICB0dWU9e3Byb3BzLnR1ZX1cclxuICAgICAgd2VkPXtwcm9wcy53ZWR9XHJcbiAgICAgIHRodT17cHJvcHMudGh1fVxyXG4gICAgICBmcmk9e3Byb3BzLmZyaX1cclxuICAgICAgc2F0PXtwcm9wcy5zYXR9XHJcbiAgICAgIHN1bj17cHJvcHMuc3VufVxyXG4gICAgLz4gKi99XHJcbiAgPC9EZXRhaWxzQ29udGFpbmVyPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxzIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmltcG9ydCBEb3VnaG51dENoYXJ0IGZyb20gJy4vRG91Z2hudXRDaGFydCdcclxuaW1wb3J0IEFsYXJtcyBmcm9tICcuL0FsYXJtcydcclxuXHJcblxyXG5jb25zdCBEb3VnaG51dEFsYXJtcyA9IHByb3BzID0+IChcclxuICA8Q29udGFpbmVyPlxyXG4gICAgPERvdWdobnV0Q2hhcnQgY3VycmVudFZhbHVlPXtwcm9wcy5jdXJyZW50VmFsdWV9IHRvdGFsVmFsdWU9e3Byb3BzLnRvdGFsVmFsdWV9IHVuaXRPZk1lYXN1cmU9e3Byb3BzLnVuaXRPZk1lYXN1cmV9IGFsYXJtT249e3Byb3BzLmFsYXJtT259IGFsYXJtT2ZmPXtwcm9wcy5hbGFybU9mZn0gLz5cclxuICAgIDxBbGFybXNDb250YWluZXI+XHJcbiAgICAgIDxBbGFybXMgdGl0bGU9XCJUcmFuc2ZlciBQdW1wXCIgb249e3Byb3BzLnRQdW1wT259IG9mZj17cHJvcHMudFB1bXBPZmZ9IC8+XHJcbiAgICAgIDxBbGFybXMgdGl0bGU9XCJBbGFybVwiIG9uPXtwcm9wcy5hbGFybU9ufSBvZmY9e3Byb3BzLmFsYXJtT2ZmfSAvPlxyXG4gICAgPC9BbGFybXNDb250YWluZXI+XHJcbiAgPC9Db250YWluZXI+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERvdWdobnV0QWxhcm1zXHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxyXG5gXHJcblxyXG5jb25zdCBBbGFybXNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcblxyXG4gICY6Zmlyc3QtY2hpbGR7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuYCIsImltcG9ydCB7IERvdWdobnV0IH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJ1xyXG5cclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgY29sb3IgfSBmcm9tICcuLi9wdWJsaWMvc2NyZWVuc2l6ZXMnXHJcblxyXG5cclxuY29uc3QgRG91Z2hudXRDaGFydCA9IHByb3BzID0+IHtcclxuICBcclxuICBjb25zdCBkYXRhID0ge1xyXG4gICAgZGF0YXNldHM6IFt7XHJcbiAgICAgIGRhdGE6IFtwcm9wcy5jdXJyZW50VmFsdWUsIChwcm9wcy50b3RhbFZhbHVlIC0gcHJvcHMuY3VycmVudFZhbHVlKV0sXHJcbiAgICAgIC8vIGJhY2tncm91bmRDb2xvcjogWyBjb2xvci5qY3RPcmFuZ2UsICdyZ2JhKDAsMCwwLCAuMDUpJyBdLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IChjdHgpID0+IHtcclxuICAgICAgICAvLyBjb25zdCBpID0gY3R4LmRhdGFJbmRleFxyXG4gICAgICAgIGlmKGN0eC5kYXRhc2V0LmRhdGFbMF0gPCBwcm9wcy5hbGFybU9mZil7XHJcbiAgICAgICAgcmV0dXJuIFsgJ2xpZ2h0Z3JlZW4nLCAncmdiYSgwLDAsMCwuMDUpJyBdXHJcbiAgICAgIH0gZWxzZSBpZihjdHguZGF0YXNldC5kYXRhWzBdID4gcHJvcHMuYWxhcm1Pbil7XHJcbiAgICAgICAgICByZXR1cm4gWyAncmVkJywgJ3JnYmEoMCwwLDAsLjA1KScgXVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gWyAnI2ZmY2MwMCcsICdyZ2JhKDAsMCwwLC4wNSknIF1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGJvcmRlcldpZHRoOiAwXHJcbiAgICB9XVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmFwaENvbnRhaW5lcj5cclxuICAgICAgPEdyYXBoPlxyXG4gICAgICAgIDxEb3VnaG51dCBcclxuICAgICAgICAgIGRhdGE9eyBkYXRhIH1cclxuICAgICAgICAgIHdpZHRoPXsgMTUwIH1cclxuICAgICAgICAgIGhlaWdodD17IDE1MCB9XHJcbiAgICAgICAgICBvcHRpb25zPXt7IFxyXG4gICAgICAgICAgICBjdXRvdXRQZXJjZW50YWdlOiA4MCwgXHJcbiAgICAgICAgICAgIHJvdGF0aW9uOiAoLTEuMjUgKiBNYXRoLlBJKSxcclxuICAgICAgICAgICAgY2lyY3VtZmVyZW5jZTogKDEuNSAqIE1hdGguUEkpLFxyXG4gICAgICAgICAgICB0b29sdGlwczogZmFsc2UsXHJcbiAgICAgICAgICAgIGhvdmVyOiBmYWxzZVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0dyYXBoPlxyXG4gICAgICA8Vm9sdW1lPlxyXG4gICAgICAgIDxDdXJyZW50Vm9sdW1lPnsgcHJvcHMuY3VycmVudFZhbHVlICE9PSBudWxsID8gcHJvcHMuY3VycmVudFZhbHVlLnRvRml4ZWQoMikgOiBwcm9wcy5jdXJyZW50VmFsdWUgfTwvQ3VycmVudFZvbHVtZT5cclxuICAgICAgICA8Q3VycmVudFZvbHVtZUxhYmVsPntwcm9wcy51bml0T2ZNZWFzdXJlfTwvQ3VycmVudFZvbHVtZUxhYmVsPlxyXG4gICAgICA8L1ZvbHVtZT5cclxuICAgIDwvR3JhcGhDb250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb3VnaG51dENoYXJ0ICAgIFxyXG5cclxuXHJcbmNvbnN0IEdyYXBoQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQ6IDFmciAvIDFmcjtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG5gXHJcblxyXG5jb25zdCBHcmFwaCA9IHN0eWxlZC5kaXZgXHJcbiAgZ3JpZC1yb3c6IDE7XHJcbiAgZ3JpZC1jb2x1bW46IDE7XHJcbmBcclxuXHJcbmNvbnN0IFZvbHVtZSA9IHN0eWxlZC5kaXZgXHJcbiAgZ3JpZC1yb3c6IDE7XHJcbiAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuYFxyXG5cclxuY29uc3QgQ3VycmVudFZvbHVtZSA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgY29sb3I6ICR7Y29sb3IuamN0RGFya0dyYXl9O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5gXHJcblxyXG5jb25zdCBDdXJyZW50Vm9sdW1lTGFiZWwgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGNvbG9yOiAke2NvbG9yLmpjdExpZ2h0R3JheX07XHJcbmAiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyBjb2xvciwgc3RhbmRhcmQsIHJldGluYSB9IGZyb20gJy4uL3B1YmxpYy9zY3JlZW5zaXplcydcclxuXHJcbmltcG9ydCBEb3VnaG51dEFsYXJtcyBmcm9tICcuLi9jb21wb25lbnRzL0RvdWdobnV0QWxhcm1zJ1xyXG5pbXBvcnQgVHJlbmQgZnJvbSAnLi4vY29tcG9uZW50cy9UcmVuZCdcclxuXHJcbmNvbnN0IERldGFpbHNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvci5qY3RXaGl0ZX07XHJcbiAgXHJcbiAgQG1lZGlhICR7c3RhbmRhcmQuZGVza3RvcH17XHJcbiAgICBtYXgtd2lkdGg6IDM1cmVtO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7cmV0aW5hLm1vYmlsZX17XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgRGV0YWlsc05hbWUgPSBzdHlsZWQuaDFgXHJcbiAgY29sb3I6ICNGRjdFMjY7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcblxyXG4gIEBtZWRpYSAke3N0YW5kYXJkLnRhYmxldFB9e1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7c3RhbmRhcmQudGFibGV0TH17XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHtyZXRpbmEubGFwdG9wTX17XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBVbmRlcmxpbmUgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDEsNDEsNDEsLjE1KTtcclxuYFxyXG5cclxuY29uc3QgRnVsbERldGFpbHMgPSBwcm9wcyA9PiAoXHJcbiAgPERldGFpbHNDb250YWluZXI+XHJcbiAgICA8RGV0YWlsc05hbWU+e3Byb3BzLm5hbWV9PC9EZXRhaWxzTmFtZT5cclxuICAgIDxVbmRlcmxpbmUgLz5cclxuICAgIDxEb3VnaG51dEFsYXJtcyBcclxuICAgICAgY3VycmVudFZhbHVlPXtwcm9wcy5jdXJyZW50VmFsdWV9IFxyXG4gICAgICB0b3RhbFZhbHVlPXtwcm9wcy50b3RhbFZhbHVlfSBcclxuICAgICAgdW5pdE9mTWVhc3VyZT17cHJvcHMudW5pdE9mTWVhc3VyZX1cclxuICAgICAgdFB1bXBPbj17cHJvcHMudFB1bXBPbn1cclxuICAgICAgdFB1bXBPZmY9e3Byb3BzLnRQdW1wT2ZmfVxyXG4gICAgICBhbGFybU9uPXtwcm9wcy5hbGFybU9ufVxyXG4gICAgICBhbGFybU9mZj17cHJvcHMuYWxhcm1PZmZ9XHJcbiAgICAvPlxyXG4gICAgey8qIDxUcmVuZCBcclxuICAgICAgbW9uPXtwcm9wcy5tb259XHJcbiAgICAgIHR1ZT17cHJvcHMudHVlfVxyXG4gICAgICB3ZWQ9e3Byb3BzLndlZH1cclxuICAgICAgdGh1PXtwcm9wcy50aHV9XHJcbiAgICAgIGZyaT17cHJvcHMuZnJpfVxyXG4gICAgICBzYXQ9e3Byb3BzLnNhdH1cclxuICAgICAgc3VuPXtwcm9wcy5zdW59XHJcbiAgICAvPiAqL31cclxuICA8L0RldGFpbHNDb250YWluZXI+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZ1bGxEZXRhaWxzIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgc3RhbmRhcmQsIHJldGluYSwgY29sb3IgfSBmcm9tICcuLi9wdWJsaWMvc2NyZWVuc2l6ZXMnXHJcblxyXG5jb25zdCBNYWluQ29udGFpbmVyID0gc3R5bGVkLm1haW5gXHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIFxyXG4gIEBtZWRpYSAke3N0YW5kYXJkLnRhYmxldFB9e1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTIlIDFmcjtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhICR7c3RhbmRhcmQudGFibGV0TH17XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNSUgODUlO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7c3RhbmRhcmQubGFwdG9wU30ge1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTIlIDkwJTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAke3N0YW5kYXJkLmRlc2t0b3B9IHtcclxuICAgIGhlaWdodDogNjB2aDtcclxuICAgIG1heC13aWR0aDogMzAlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMiUgMWZyO1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgQ29tcGFueUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxuYFxyXG5cclxuY29uc3QgQ29tcGFueU5hbWUgPSBzdHlsZWQuaDFgXHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogI2VmZWZlZjtcclxuXHJcbiAgQG1lZGlhICR7c3RhbmRhcmQudGFibGV0fSB7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHtzdGFuZGFyZC5kZXNrdG9wfSB7XHJcbiAgICBmb250LXNpemU6IDVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAke3JldGluYS5sYXB0b3BNfSB7XHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBTaXRlTmFtZSA9IHN0eWxlZC5oMmBcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjRkY3RTI2O1xyXG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG5cclxuICBAbWVkaWEgJHtzdGFuZGFyZC50YWJsZXR9IHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhICR7c3RhbmRhcmQuZGVza3RvcH0ge1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgJHtyZXRpbmEubGFwdG9wTX0ge1xyXG4gICAgZm9udC1zaXplOiAyLjc1cmVtO1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgRGF0ZVRpbWUgPSBzdHlsZWQuaDNgXHJcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjUpO1xyXG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAuMjVyZW07XHJcbmBcclxuXHJcbmNvbnN0IFNpdGVEZXRhaWxzQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yLmpjdFdoaXRlfTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogOXJlbSAxOHJlbSA5cmVtIDA7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIFxyXG4gIEBtZWRpYSAke3N0YW5kYXJkLnRhYmxldFB9e1xyXG4gICAgcGFkZGluZzogM3JlbSA2cmVtIDNyZW0gM3JlbTtcclxuICAgIGdyaWQ6IGF1dG8tZmxvdyAvIHJlcGVhdCgyLCA1MCUpO1xyXG4gICAgZ3JpZC1nYXA6IDNyZW0gM3JlbTtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhICR7c3RhbmRhcmQudGFibGV0TH17XHJcbiAgICBwYWRkaW5nOiA0cmVtIDEzcmVtIDRyZW0gNHJlbTtcclxuICAgIGdyaWQ6IGF1dG8tZmxvdyAvIHJlcGVhdCgzLCAzMyUpO1xyXG4gICAgZ3JpZC1nYXA6IDVyZW0gNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhICR7c3RhbmRhcmQuZGVza3RvcH0ge1xyXG4gICAgcGFkZGluZzogNnJlbSAyMHJlbSA2cmVtIDZyZW07XHJcbiAgICBncmlkOiBhdXRvLWZsb3cgLyByZXBlYXQoMywgMzMlKTtcclxuICAgIGdyaWQtZ2FwOiAwcmVtIDdyZW07XHJcblxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgJHtyZXRpbmEubGFwdG9wTX0ge1xyXG4gICAgcGFkZGluZzogNXJlbSAxOXJlbSAwIDVyZW07XHJcbiAgICBncmlkOiBhdXRvLWZsb3cgLyByZXBlYXQoMywgMzMlKTtcclxuICAgIGdyaWQtZ2FwOiAxcmVtIDdyZW07XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBMYXlvdXQgPSBwcm9wcyA9PiAoXHJcbiAgPE1haW5Db250YWluZXI+XHJcbiAgICA8Q29tcGFueUNvbnRhaW5lcj5cclxuICAgICAgPENvbXBhbnlOYW1lPntwcm9wcy5jb21wYW55X25hbWV9PC9Db21wYW55TmFtZT5cclxuICAgICAgPFNpdGVOYW1lPntwcm9wcy5zaXRlX25hbWV9PC9TaXRlTmFtZT5cclxuICAgICAgPERhdGVUaW1lPntwcm9wcy5kYXRlfSAtIHtwcm9wcy50aW1lfTwvRGF0ZVRpbWU+XHJcbiAgICA8L0NvbXBhbnlDb250YWluZXI+XHJcbiAgICA8U2l0ZURldGFpbHNDb250YWluZXI+XHJcbiAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxyXG4gICAgPC9TaXRlRGV0YWlsc0NvbnRhaW5lcj5cclxuICA8L01haW5Db250YWluZXI+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dCIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdudWthLWNhcm91c2VsJ1xyXG5pbXBvcnQgeyBzdGFuZGFyZCwgcmV0aW5hLCBjb2xvciB9IGZyb20gJy4uL3B1YmxpYy9zY3JlZW5zaXplcydcclxuXHJcbmNvbnN0IE1vYmlsZUNhcm91c2VsID0gcHJvcHMgPT4gKFxyXG4gIDxDYXJvdXNlbFxyXG4gICAgY2VsbEFsaWduPXsgJ2NlbnRlcicgfVxyXG4gICAgY2VsbFNwYWNpbmc9eyAxNSB9XHJcbiAgICBzbGlkZVdpZHRoPXsgJzMyNXB4JyB9XHJcbiAgICB3aXRob3V0Q29udHJvbHNcclxuICA+XHJcbiAgICB7IHByb3BzLmNoaWxkcmVuIH1cclxuICA8L0Nhcm91c2VsPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVDYXJvdXNlbFxyXG5cclxuY29uc3QgU3R5bGVkQ2Fyb3VzZWwgPSBzdHlsZWQoQ2Fyb3VzZWwpYFxyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbmAiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyBzdGFuZGFyZCwgcmV0aW5hLCBjb2xvciB9IGZyb20gJy4uL3B1YmxpYy9zY3JlZW5zaXplcydcclxuXHJcbmltcG9ydCBNb2JpbGVDYXJvdXNlbCBmcm9tICcuLi9jb21wb25lbnRzL01vYmlsZUNhcm91c2VsJ1xyXG5cclxuY29uc3QgTW9iaWxlTWFpbkNvbnRhaW5lciA9IHN0eWxlZC5tYWluYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1JSA4NSU7XHJcbmBcclxuXHJcbmNvbnN0IE1vYmlsZUNvbXBhbnlDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMCA0cmVtO1xyXG5gXHJcblxyXG5jb25zdCBNb2JpbGVDb21wYW55TmFtZSA9IHN0eWxlZC5oMWBcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogJHtjb2xvci5qY3RXaGl0ZX07XHJcbmBcclxuXHJcbmNvbnN0IE1vYmlsZVNpdGVOYW1lID0gc3R5bGVkLmgyYFxyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAke2NvbG9yLmpjdE9yYW5nZX07XHJcbmBcclxuXHJcbmNvbnN0IERhdGVUaW1lID0gc3R5bGVkLmgzYFxyXG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC41KTtcclxuICBmb250LXNpemU6IDEuNzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuYFxyXG5cclxuY29uc3QgTW9iaWxlQ2Fyb3VzZWxDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC1yb3ctZ2FwOiAxcmVtO1xyXG5gXHJcblxyXG5cclxuY29uc3QgTW9iaWxlTGF5b3V0ID0gcHJvcHMgPT4gKFxyXG4gIDw+XHJcbiAgICA8TW9iaWxlTWFpbkNvbnRhaW5lcj5cclxuICAgICAgPE1vYmlsZUNvbXBhbnlDb250YWluZXI+XHJcbiAgICAgICAgPE1vYmlsZUNvbXBhbnlOYW1lPntwcm9wcy5jb21wYW55X25hbWV9PC9Nb2JpbGVDb21wYW55TmFtZT5cclxuICAgICAgICA8TW9iaWxlU2l0ZU5hbWU+e3Byb3BzLnNpdGVfbmFtZX08L01vYmlsZVNpdGVOYW1lPlxyXG4gICAgICAgIDxEYXRlVGltZT57cHJvcHMuZGF0ZX0gLSB7cHJvcHMudGltZX08L0RhdGVUaW1lPlxyXG4gICAgICA8L01vYmlsZUNvbXBhbnlDb250YWluZXI+XHJcbiAgICAgIDxNb2JpbGVDYXJvdXNlbENvbnRhaW5lcj5cclxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgIDwvTW9iaWxlQ2Fyb3VzZWxDb250YWluZXI+XHJcbiAgICA8L01vYmlsZU1haW5Db250YWluZXI+XHJcbiAgICAgXHJcbiAgICB7LyogPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgKntcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBib2R5e1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTI5Mjk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNfX25leHR7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPiAqL31cclxuXHJcbiAgPC8+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vYmlsZUxheW91dCIsImltcG9ydCB7IGRlZmF1bHRzLCBMaW5lIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJ1xyXG5cclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgY29sb3IgfSBmcm9tICcuLi9wdWJsaWMvc2NyZWVuc2l6ZXMnXHJcblxyXG5cclxuY29uc3QgVHJlbmQgPSBwcm9wcyA9PiB7XHJcbiAgZGVmYXVsdHMuZ2xvYmFsLmRlZmF1bHRGb250RmFtaWx5ID0gJ0luZHVzdHJ5J1xyXG4gIGRlZmF1bHRzLmdsb2JhbC5kZWZhdWx0Rm9udENvbG9yID0gY29sb3IuamN0TGlnaHRHcmF5XHJcblxyXG4gIGNvbnN0IGRhdGEgPSBjYW52YXMgPT4ge1xyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKVxyXG4gICAgY29uc3QgZ3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwwLDAsMTY1KTtcclxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCAncmdiYSgyNTUsMjU1LDI1NSwuMDEpJylcclxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBjb2xvci5qY3RMaWdodEdyYXkpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGxhYmVsczogWydtb24nLCAndHVlJywgJ3dlZCcsICd0aHUnLCAnZnJpJywgJ3NhdCcsICdzdW4nXSxcclxuICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgZGF0YTogW3Byb3BzLm1vbiwgcHJvcHMudHVlLCBwcm9wcy53ZWQsIHByb3BzLnRodSwgcHJvcHMuZnJpLCBwcm9wcy5zYXQsIHByb3BzLnN1bl0sXHJcbiAgICAgICAgYm9yZGVyV2lkdGg6IDIsXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IGNvbG9yLmpjdE9yYW5nZSxcclxuICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogY29sb3IuamN0T3JhbmdlLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogZ3JhZGllbnQsXHJcbiAgICAgICAgY3ViaWNJbnRlcnBvbGF0aW9uTW9kZTogJ21vbm90b25lJyxcclxuICAgICAgfV1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybihcclxuICAgIDxHcmFwaD5cclxuICAgICAgPExpbmVcclxuICAgICAgICBkYXRhPXsgZGF0YSB9XHJcbiAgICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgICAgbGVnZW5kOiBmYWxzZSxcclxuICAgICAgICAgIHRvb2x0aXBzOiBmYWxzZSxcclxuICAgICAgICAgIGhvdmVyOiBmYWxzZSxcclxuICAgICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgICAvLyBMZWZ0IHNpZGUgb2YgZ3JhcGhcclxuICAgICAgICAgICAgeUF4ZXM6IFt7XHJcbiAgICAgICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgICAgIG1heDogMTYsXHJcbiAgICAgICAgICAgICAgICBzdGVwU2l6ZTogNCxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBncmlkTGluZXM6IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIC8vIEJvdHRvbSBvZiBncmFwaFxyXG4gICAgICAgICAgICB4QXhlczogW3tcclxuICAgICAgICAgICAgICBncmlkTGluZXM6IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICA8L0dyYXBoPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJlbmRcclxuXHJcbmNvbnN0IEdyYXBoID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuYCIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXHJcblxyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQgTW9iaWxlTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTW9iaWxlTGF5b3V0J1xyXG5pbXBvcnQgTW9iaWxlQ2Fyb3VzZWwgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9Nb2JpbGVDYXJvdXNlbCdcclxuaW1wb3J0IEZ1bGxEZXRhaWxzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvRnVsbERldGFpbHMnXHJcbmltcG9ydCBEZXRhaWxzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvRGV0YWlscydcclxuXHJcblxyXG5jb25zdCBKQ1RCVFkgPSAoeyBkYXRhLCBpc01vYmlsZVZpZXcgfSkgPT4gKFxyXG4gIGlzTW9iaWxlVmlldyA/XHJcbiAgICA8TW9iaWxlTGF5b3V0IGNvbXBhbnlfbmFtZT17XCJKQ1RcIn0gc2l0ZV9uYW1lPXtcIkpDVEJUWVwifSBkYXRlPXtkYXRhWzBdLm1EYXRlfSB0aW1lPXtkYXRhWzBdLm1UaW1lfT5cclxuICAgICAgPE1vYmlsZUNhcm91c2VsPlxyXG4gICAgICAgIDxGdWxsRGV0YWlscyBcclxuICAgICAgICAgIG5hbWU9e2RhdGFbMF0uUzF9IFxyXG4gICAgICAgICAgdW5pdE9mTWVhc3VyZT17ZGF0YVswXS5TMi50b0xvd2VyQ2FzZSgpfVxyXG4gICAgICAgICAgY3VycmVudFZhbHVlPXtkYXRhWzBdLlYxfVxyXG4gICAgICAgICAgdG90YWxWYWx1ZT17MTZ9XHJcbiAgICAgICAgICB0UHVtcE9uPXtkYXRhWzBdLlYzfVxyXG4gICAgICAgICAgdFB1bXBPZmY9e2RhdGFbMF0uVjR9XHJcbiAgICAgICAgICBhbGFybU9uPXtkYXRhWzBdLlY1fVxyXG4gICAgICAgICAgYWxhcm1PZmY9e2RhdGFbMF0uVjZ9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPERldGFpbHMgXHJcbiAgICAgICAgICBuYW1lPXtkYXRhWzBdLlM1fSBcclxuICAgICAgICAgIHVuaXRPZk1lYXN1cmU9e2RhdGFbMF0uUzYudG9Mb3dlckNhc2UoKX1cclxuICAgICAgICAgIGN1cnJlbnRWYWx1ZT17ZGF0YVswXS5WMX1cclxuICAgICAgICAgIHRvdGFsVmFsdWU9ezE2fVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxEZXRhaWxzIFxyXG4gICAgICAgICAgbmFtZT17ZGF0YVswXS5TN30gXHJcbiAgICAgICAgICB1bml0T2ZNZWFzdXJlPXtkYXRhWzBdLlM4LnRvTG93ZXJDYXNlKCl9XHJcbiAgICAgICAgICBjdXJyZW50VmFsdWU9e2RhdGFbMF0uVjF9XHJcbiAgICAgICAgICB0b3RhbFZhbHVlPXsxNn1cclxuICAgICAgICAvPlxyXG4gICAgICA8L01vYmlsZUNhcm91c2VsPlxyXG5cclxuICAgICAgPE1vYmlsZUNhcm91c2VsPlxyXG4gICAgICAgIDxGdWxsRGV0YWlscyBcclxuICAgICAgICAgIG5hbWU9e2RhdGFbMF0uUzN9IFxyXG4gICAgICAgICAgdW5pdE9mTWVhc3VyZT17ZGF0YVswXS5TNC50b0xvd2VyQ2FzZSgpfVxyXG4gICAgICAgICAgY3VycmVudFZhbHVlPXtkYXRhWzBdLlYxfVxyXG4gICAgICAgICAgdG90YWxWYWx1ZT17MTZ9XHJcbiAgICAgICAgICBhbGFybU9uPXtkYXRhWzBdLlY1fVxyXG4gICAgICAgICAgYWxhcm1PZmY9e2RhdGFbMF0uVjZ9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPERldGFpbHMgXHJcbiAgICAgICAgICBuYW1lPXtkYXRhWzBdLlM5fSBcclxuICAgICAgICAgIHVuaXRPZk1lYXN1cmU9e2RhdGFbMF0uUzEwLnRvTG93ZXJDYXNlKCl9XHJcbiAgICAgICAgICBjdXJyZW50VmFsdWU9e2RhdGFbMF0uVjF9XHJcbiAgICAgICAgICB0b3RhbFZhbHVlPXsxNn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxEZXRhaWxzIFxyXG4gICAgICAgICAgbmFtZT17ZGF0YVswXS5TMTF9IFxyXG4gICAgICAgICAgdW5pdE9mTWVhc3VyZT17ZGF0YVswXS5TMTIudG9Mb3dlckNhc2UoKX1cclxuICAgICAgICAgIGN1cnJlbnRWYWx1ZT17ZGF0YVswXS5WMX1cclxuICAgICAgICAgIHRvdGFsVmFsdWU9ezE2fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvTW9iaWxlQ2Fyb3VzZWw+XHJcblxyXG4gICAgICA8TW9iaWxlQ2Fyb3VzZWw+XHJcbiAgICAgICAgPERldGFpbHMgXHJcbiAgICAgICAgICBuYW1lPXtkYXRhWzBdLlMxM30gXHJcbiAgICAgICAgICB1bml0T2ZNZWFzdXJlPXtkYXRhWzBdLlMxNC50b0xvd2VyQ2FzZSgpfVxyXG4gICAgICAgICAgY3VycmVudFZhbHVlPXtkYXRhWzBdLlYxfVxyXG4gICAgICAgICAgdG90YWxWYWx1ZT17MTZ9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPERldGFpbHMgXHJcbiAgICAgICAgICBuYW1lPXtkYXRhWzBdLlMxNX0gXHJcbiAgICAgICAgICB1bml0T2ZNZWFzdXJlPXtkYXRhWzBdLlMxNi50b0xvd2VyQ2FzZSgpfVxyXG4gICAgICAgICAgY3VycmVudFZhbHVlPXtkYXRhWzBdLlYxfVxyXG4gICAgICAgICAgdG90YWxWYWx1ZT17MTZ9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Nb2JpbGVDYXJvdXNlbD5cclxuICAgIDwvTW9iaWxlTGF5b3V0PlxyXG4gICAgOlxyXG4gICAgPExheW91dCBjb21wYW55X25hbWU9e1wiSkNUXCJ9IHNpdGVfbmFtZT17XCJKQ1RCVFlcIn0gZGF0ZT17ZGF0YVswXS5tRGF0ZX0gdGltZT17ZGF0YVswXS5tVGltZX0+XHJcbiAgICAgIDxGdWxsRGV0YWlscyBcclxuICAgICAgICBuYW1lPXtkYXRhWzBdLlMxfSBcclxuICAgICAgICB1bml0T2ZNZWFzdXJlPXtkYXRhWzBdLlMyLnRvTG93ZXJDYXNlKCl9XHJcbiAgICAgICAgY3VycmVudFZhbHVlPXtkYXRhWzBdLlYxfVxyXG4gICAgICAgIHRvdGFsVmFsdWU9ezE2fVxyXG4gICAgICAgIHRQdW1wT249e2RhdGFbMF0uVjN9XHJcbiAgICAgICAgdFB1bXBPZmY9e2RhdGFbMF0uVjR9XHJcbiAgICAgICAgYWxhcm1Pbj17ZGF0YVswXS5WNX1cclxuICAgICAgICBhbGFybU9mZj17ZGF0YVswXS5WNn1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxEZXRhaWxzIFxyXG4gICAgICAgIG5hbWU9e2RhdGFbMF0uUzV9IFxyXG4gICAgICAgIHVuaXRPZk1lYXN1cmU9e2RhdGFbMF0uUzYudG9Mb3dlckNhc2UoKX1cclxuICAgICAgICBjdXJyZW50VmFsdWU9e2RhdGFbMF0uVjF9XHJcbiAgICAgICAgdG90YWxWYWx1ZT17MTZ9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8RGV0YWlscyBcclxuICAgICAgICBuYW1lPXtkYXRhWzBdLlM3fSBcclxuICAgICAgICB1bml0T2ZNZWFzdXJlPXtkYXRhWzBdLlM4LnRvTG93ZXJDYXNlKCl9XHJcbiAgICAgICAgY3VycmVudFZhbHVlPXtkYXRhWzBdLlYxfVxyXG4gICAgICAgIHRvdGFsVmFsdWU9ezE2fVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPEZ1bGxEZXRhaWxzIFxyXG4gICAgICAgIG5hbWU9e2RhdGFbMF0uUzN9IFxyXG4gICAgICAgIHVuaXRPZk1lYXN1cmU9e2RhdGFbMF0uUzQudG9Mb3dlckNhc2UoKX1cclxuICAgICAgICBjdXJyZW50VmFsdWU9e2RhdGFbMF0uVjZ9XHJcbiAgICAgICAgdG90YWxWYWx1ZT17MTZ9XHJcbiAgICAgICAgdFB1bXBPbj17ZGF0YVswXS5WNn1cclxuICAgICAgICB0UHVtcE9mZj17ZGF0YVswXS5WN31cclxuICAgICAgICBhbGFybU9uPXtkYXRhWzBdLlY4fVxyXG4gICAgICAgIGFsYXJtT2ZmPXtkYXRhWzBdLlY4fVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPERldGFpbHMgXHJcbiAgICAgICAgbmFtZT17ZGF0YVswXS5TOX0gXHJcbiAgICAgICAgdW5pdE9mTWVhc3VyZT17ZGF0YVswXS5TMTAudG9Mb3dlckNhc2UoKX1cclxuICAgICAgICBjdXJyZW50VmFsdWU9e2RhdGFbMF0uVjF9XHJcbiAgICAgICAgdG90YWxWYWx1ZT17MTZ9XHJcbiAgICAgIC8+XHJcbiAgICAgIFxyXG4gICAgICA8RGV0YWlscyBcclxuICAgICAgICBuYW1lPXtkYXRhWzBdLlMxMX0gXHJcbiAgICAgICAgdW5pdE9mTWVhc3VyZT17ZGF0YVswXS5TMTIudG9Mb3dlckNhc2UoKX1cclxuICAgICAgICBjdXJyZW50VmFsdWU9e2RhdGFbMF0uVjF9XHJcbiAgICAgICAgdG90YWxWYWx1ZT17MTZ9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8RGV0YWlscyBcclxuICAgICAgICBuYW1lPXtkYXRhWzBdLlMxM30gXHJcbiAgICAgICAgdW5pdE9mTWVhc3VyZT17ZGF0YVswXS5TMTQudG9Mb3dlckNhc2UoKX1cclxuICAgICAgICBjdXJyZW50VmFsdWU9e2RhdGFbMF0uVjF9XHJcbiAgICAgICAgdG90YWxWYWx1ZT17MTZ9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8RGV0YWlscyBcclxuICAgICAgICBuYW1lPXtkYXRhWzBdLlMxNX0gXHJcbiAgICAgICAgdW5pdE9mTWVhc3VyZT17ZGF0YVswXS5TMTYudG9Mb3dlckNhc2UoKX1cclxuICAgICAgICBjdXJyZW50VmFsdWU9e2RhdGFbMF0uVjF9XHJcbiAgICAgICAgdG90YWxWYWx1ZT17MTZ9XHJcbiAgICAgIC8+XHJcbiAgICA8L0xheW91dD5cclxuKVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjdHgpe1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vamN0LXN5c3RlbXMuY29tL2FwaS9qY3RidHknKVxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICBsZXQgaXNNb2JpbGVWaWV3ID0gY3R4LnJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J10uc2VhcmNoKC9BbmRyb2lkfGlQaG9uZS9pKVxyXG4gICAgXHJcbiAgaWYoaXNNb2JpbGVWaWV3IDwgMCl7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczogeyBkYXRhLCBpc01vYmlsZVZpZXc6IGZhbHNlIH1cclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHsgZGF0YSwgaXNNb2JpbGVWaWV3OiB0cnVlIH1cclxuICAgIH1cclxuICB9XHJcbn0gXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSkNUQlRZIiwiY29uc3QgY29sb3IgPSB7XHJcbiAgamN0T3JhbmdlOiAnI2ZmN2UyNicsXHJcbiAgamN0V2hpdGU6ICcjZmNmY2ZjJyxcclxuICBqY3REYXJrR3JheTogJyM0NjQ2NDYnLFxyXG4gIGpjdExpZ2h0R3JheTogJyNhMmEyYTInXHJcbn1cclxuXHJcbmNvbnN0IHNpemUgPSB7XHJcbiAgbW9iaWxlUzogJzMyMHB4JyxcclxuICBtb2JpbGVNOiAnMzc1cHgnLFxyXG4gIG1vYmlsZUw6ICc0MjVweCcsXHJcbiAgdGFibGV0UDogJzYwMHB4JyxcclxuICB0YWJsZXRMOiAnOTAwcHgnLFxyXG4gIGxhcHRvcDogJzEwMjRweCcsXHJcbiAgbGFwdG9wTTogJzEyMDBweCcsXHJcbiAgbGFwdG9wTDogJzE0NDBweCcsXHJcbiAgZGVza3RvcDogJzI1NjBweCdcclxufVxyXG5cclxuY29uc3Qgc3RhbmRhcmQgPSB7XHJcbiAgbW9iaWxlUzogYG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3NpemUubW9iaWxlU30pIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxKWAsXHJcbiAgbW9iaWxlTTogYG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3NpemUubW9iaWxlTX0pIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxKWAsXHJcbiAgbW9iaWxlTDogYG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3NpemUubW9iaWxlTH0pIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxKWAsXHJcbiAgdGFibGV0UDogYG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3NpemUudGFibGV0UH0pIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxKWAsXHJcbiAgdGFibGV0TDogYG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3NpemUudGFibGV0TH0pIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxKWAsXHJcbiAgbGFwdG9wOiBgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7c2l6ZS5sYXB0b3B9KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMSlgLFxyXG4gIGxhcHRvcE06IGBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtzaXplLmxhcHRvcE19KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMSlgLFxyXG4gIGxhcHRvcEw6IGBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtzaXplLmxhcHRvcEx9KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMSlgLFxyXG4gIGRlc2t0b3A6IGBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtzaXplLmRlc2t0b3B9KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMSlgLFxyXG59O1xyXG5cclxuY29uc3QgcmV0aW5hID0ge1xyXG4gIG1vYmlsZTogYG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke3NpemUubW9iaWxlTH0pIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKWAsXHJcbiAgbW9iaWxlUzogYG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3NpemUubW9iaWxlU30pIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKWAsXHJcbiAgbW9iaWxlTTogYG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3NpemUubW9iaWxlTX0pIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKWAsXHJcbiAgbW9iaWxlTDogYG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3NpemUubW9iaWxlTH0pIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKWAsXHJcbiAgdGFibGV0OiBgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7c2l6ZS50YWJsZXR9KSBhbmQgKG1heC13aWR0aDogJHtzaXplLmxhcHRvcH0pIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKWAsXHJcbiAgbGFwdG9wOiBgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7c2l6ZS5sYXB0b3B9KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilgLFxyXG4gIGxhcHRvcE06IGBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtzaXplLmxhcHRvcE19KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilgLFxyXG4gIGxhcHRvcEw6IGBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtzaXplLmxhcHRvcEx9KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilgLFxyXG4gIGRlc2t0b3A6IGBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtzaXplLmRlc2t0b3B9KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilgLFxyXG59O1xyXG5cclxuZXhwb3J0IHsgc3RhbmRhcmQsIHJldGluYSwgY29sb3IgfSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJudWthLWNhcm91c2VsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNoYXJ0anMtMlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9