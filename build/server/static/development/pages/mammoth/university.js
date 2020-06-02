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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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


const DetailsAlarmContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "Alarms__DetailsAlarmContainer",
  componentId: "sc-17pmkb0-0"
})(["display:flex;flex-flow:column;border-bottom:1px solid ", ";margin-left:2rem;"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["color"].jctDarkGray);
const AlarmTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2.withConfig({
  displayName: "Alarms__AlarmTitle",
  componentId: "sc-17pmkb0-1"
})(["font-size:1.8rem;font-weight:500;"]);
const AlarmOnOff = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Alarms__AlarmOnOff",
  componentId: "sc-17pmkb0-2"
})(["font-size:1.8rem;"]);
const AlarmOnOffNum = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "Alarms__AlarmOnOffNum",
  componentId: "sc-17pmkb0-3"
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
    lineNumber: 31,
    columnNumber: 11
  }
}, props.on !== undefined ? props.on.toFixed(2) : props.on), " Off: ", __jsx(AlarmOnOffNum, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 107
  }
}, props.off !== undefined ? props.off.toFixed(2) : props.off)));

/* harmony default export */ __webpack_exports__["default"] = (Alarms);

/***/ }),

/***/ "./components/MPCAlarmList.js":
/*!************************************!*\
  !*** ./components/MPCAlarmList.js ***!
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
var _jsxFileName = "/Users/cor-eee/Projects/jct-next/components/MPCAlarmList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const AlarmList = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "MPCAlarmList__AlarmList",
  componentId: "sc-1xuub9d-0"
})(["display:flex;flex-flow:column;padding-top:2rem;"]);
const GeneralList = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({
  displayName: "MPCAlarmList__GeneralList",
  componentId: "sc-1xuub9d-1"
})(["list-style:none;margin-bottom:2rem;"]);
const ScrubberList = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({
  displayName: "MPCAlarmList__ScrubberList",
  componentId: "sc-1xuub9d-2"
})(["list-style:none;margin-bottom:2rem;"]);
const HiHiList = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({
  displayName: "MPCAlarmList__HiHiList",
  componentId: "sc-1xuub9d-3"
})(["list-style:none;margin-bottom:2rem;"]);
const LoLoList = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({
  displayName: "MPCAlarmList__LoLoList",
  componentId: "sc-1xuub9d-4"
})(["list-style:none;"]);
const AlarmListItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li.withConfig({
  displayName: "MPCAlarmList__AlarmListItem",
  componentId: "sc-1xuub9d-5"
})(["display:flex;align-items:center;font-size:1.4rem;margin-bottom:1rem;"]);
const Indicator = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "MPCAlarmList__Indicator",
  componentId: "sc-1xuub9d-6"
})(["height:1.8rem;width:1.8rem;border-radius:100%;background-color:", ";margin-right:1rem;"], props => props.active ? "#6fcf97" : "#eaeaea");
const ListTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2.withConfig({
  displayName: "MPCAlarmList__ListTitle",
  componentId: "sc-1xuub9d-7"
})(["font-size:1.8rem;margin-bottom:1rem;"]);

const MPCAlarmList = props => __jsx(AlarmList, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 3
  }
}, __jsx(GeneralList, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }
}, __jsx(ListTitle, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 7
  }
}, "General"), __jsx(AlarmListItem, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 7
  }
}, __jsx(Indicator, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 9
  }
}), " Local Emergency Stop"), __jsx(AlarmListItem, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 7
  }
}, __jsx(Indicator, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 9
  }
}), " Spare Di02 Shutdown"), __jsx(AlarmListItem, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 7
  }
}, __jsx(Indicator, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 9
  }
}), " Low Compressor Oil Level"), __jsx(AlarmListItem, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 7
  }
}, __jsx(Indicator, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 9
  }
}), " Low Compressor Cooling Water Level")), __jsx(ScrubberList, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 5
  }
}, __jsx(ListTitle, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 7
  }
}, "Scrubber Liquid Level"), __jsx(AlarmListItem, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 7
  }
}, __jsx(Indicator, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 9
  }
}), " High 1st Stage"), __jsx(AlarmListItem, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 7
  }
}, __jsx(Indicator, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 9
  }
}), " High 2nd Stage"), __jsx(AlarmListItem, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 7
  }
}, __jsx(Indicator, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 9
  }
}), " High 3rd Stage")), __jsx(HiHiList, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 5
  }
}, __jsx(ListTitle, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 7
  }
}, "HiHi"), __jsx(AlarmListItem, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 7
  }
}, __jsx(Indicator, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 9
  }
}), " Suction Pressure"), __jsx(AlarmListItem, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 7
  }
}, __jsx(Indicator, {
  active: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 9
  }
}), " 1st Stage Discharge Pressure"), __jsx(AlarmListItem, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 7
  }
}, __jsx(Indicator, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 9
  }
}), " 2nd Stage Discharge Pressure"), __jsx(AlarmListItem, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 7
  }
}, __jsx(Indicator, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 9
  }
}), " 3rd Stage Discharge Pressure")), __jsx(LoLoList, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 5
  }
}, __jsx(ListTitle, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 7
  }
}, "LoLo"), __jsx(AlarmListItem, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 7
  }
}, __jsx(Indicator, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 9
  }
}), " Suction Pressure"), __jsx(AlarmListItem, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 7
  }
}, __jsx(Indicator, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 9
  }
}), " 1st Stage Discharge Pressure"), __jsx(AlarmListItem, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 7
  }
}, __jsx(Indicator, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 9
  }
}), " 2nd Stage Discharge Pressure"), __jsx(AlarmListItem, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 7
  }
}, __jsx(Indicator, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 9
  }
}), " 3rd Stage Discharge Pressure"), __jsx(AlarmListItem, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 7
  }
}, __jsx(Indicator, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108,
    columnNumber: 9
  }
}), " Compressor Oil Pressure")));

/* harmony default export */ __webpack_exports__["default"] = (MPCAlarmList);

/***/ }),

/***/ "./components/SidebarAlarm.js":
/*!************************************!*\
  !*** ./components/SidebarAlarm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/cor-eee/Projects/jct-next/components/SidebarAlarm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const AlarmList = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SidebarAlarm__AlarmList",
  componentId: "sc-14cjqix-0"
})(["display:flex;flex-flow:column;padding-top:2rem;"]);
const GeneralList = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SidebarAlarm__GeneralList",
  componentId: "sc-14cjqix-1"
})(["margin-top:2rem;"]);
const ListTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SidebarAlarm__ListTitle",
  componentId: "sc-14cjqix-2"
})(["font-size:1.8rem;margin-bottom:.5rem;width:10rem;display:flex;font-weight:bold;"]);
const DetailsAlarmContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SidebarAlarm__DetailsAlarmContainer",
  componentId: "sc-14cjqix-3"
})(["display:flex;flex-flow:column;margin-bottom:1rem;padding-top:1rem;width:50%;&:first-of-type{border-top:1px solid #000;}"]);
const AlarmTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2.withConfig({
  displayName: "SidebarAlarm__AlarmTitle",
  componentId: "sc-14cjqix-4"
})(["font-size:1.6rem;font-weight:500;"]);
const AlarmOnOff = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SidebarAlarm__AlarmOnOff",
  componentId: "sc-14cjqix-5"
})(["font-size:1.6rem;"]);
const AlarmOnOffNum = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "SidebarAlarm__AlarmOnOffNum",
  componentId: "sc-14cjqix-6"
})(["font-weight:bold;font-size:1.6rem;"]);

const MPCAlarmList = props => __jsx(AlarmList, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 3
  }
}, __jsx(GeneralList, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }
}, __jsx(ListTitle, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 7
  }
}, "Water"), __jsx(DetailsAlarmContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 7
  }
}, __jsx(AlarmTitle, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 9
  }
}, "Alarm"), __jsx(AlarmOnOff, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 9
  }
}, "On: ", __jsx(AlarmOnOffNum, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 15
  }
}, props.alarmOn !== undefined ? props.alarmOn.toFixed(2) : props.alarmOn), " Off: ", __jsx(AlarmOnOffNum, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 126
  }
}, props.alarmOff !== undefined ? props.alarmOff.toFixed(2) : props.alarmOff))), __jsx(DetailsAlarmContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 7
  }
}, __jsx(AlarmTitle, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 9
  }
}, "T-Pump"), __jsx(AlarmOnOff, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 9
  }
}, "On: ", __jsx(AlarmOnOffNum, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 15
  }
}, props.tpumpOn !== undefined ? props.tpumpOn.toFixed(2) : props.tpumpOn), " Off: ", __jsx(AlarmOnOffNum, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 126
  }
}, props.tpumpOff !== undefined ? props.tpumpOff.toFixed(2) : props.tpumpOff)))));

/* harmony default export */ __webpack_exports__["default"] = (MPCAlarmList);

/***/ }),

/***/ "./components/browser/Details.js":
/*!***************************************!*\
  !*** ./components/browser/Details.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_screensizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/screensizes */ "./public/screensizes.js");
/* harmony import */ var _Alarms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Alarms */ "./components/Alarms.js");
var _jsxFileName = "/Users/cor-eee/Projects/jct-next/components/browser/Details.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const DetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Details__DetailsContainer",
  componentId: "sc-1ocsdw7-0"
})(["display:flex;flex-flow:column;margin-bottom:10rem;grid-column:", ";grid-row:", ";"], props => props.right ? 2 : 1, props => props.start ? '1 / 4' : 'auto');
const NameAlarmsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Details__NameAlarmsContainer",
  componentId: "sc-1ocsdw7-1"
})(["display:flex;margin-bottom:4rem;"]);
const DetailsName = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "Details__DetailsName",
  componentId: "sc-1ocsdw7-2"
})(["color:#fff;font-size:2.4rem;font-weight:bold;background-color:", ";padding:1rem 2rem;max-width:auto;"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["color"].jctDarkGray);
const DoughnutChartContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Details__DoughnutChartContainer",
  componentId: "sc-1ocsdw7-3"
})(["display:flex;"]);

const Details = props => __jsx(DetailsContainer, {
  right: props.right,
  start: props.start,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 3
  }
}, __jsx(NameAlarmsContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }
}, __jsx(DetailsName, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 7
  }
}, props.resourceType), props.isTable ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Alarms__WEBPACK_IMPORTED_MODULE_3__["default"], {
  alarmType: 'Alarm',
  on: props.alarmOn,
  off: props.alarmOff,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 13
  }
}), __jsx(_Alarms__WEBPACK_IMPORTED_MODULE_3__["default"], {
  alarmType: 'T-Pump',
  on: props.tpumpOn,
  off: props.tpumpOff,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 13
  }
}))), __jsx(DoughnutChartContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }
}, props.children));

/* harmony default export */ __webpack_exports__["default"] = (Details);

/***/ }),

/***/ "./components/browser/GaugeChart.js":
/*!******************************************!*\
  !*** ./components/browser/GaugeChart.js ***!
  \******************************************/
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
/* harmony import */ var _public_screensizes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/screensizes */ "./public/screensizes.js");
var _jsxFileName = "/Users/cor-eee/Projects/jct-next/components/browser/GaugeChart.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const DoughnutChart = props => {
  const data = {
    datasets: [{
      data: [props.currentValue, props.totalValue - props.currentValue],
      backgroundColor: ctx => {
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
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(GraphTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, props.name), __jsx(Graph, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
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
      lineNumber: 28,
      columnNumber: 9
    }
  })), __jsx(Volume, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx(CurrentVolume, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, props.currentValue !== null ? props.currentValue.toFixed(2) : props.currentValue), __jsx(CurrentVolumeLabel, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, props.unitOfMeasure)));
};

/* harmony default export */ __webpack_exports__["default"] = (DoughnutChart);
const GraphContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "GaugeChart__GraphContainer",
  componentId: "sc-6sptya-0"
})(["display:grid;grid:25% 1fr / 1fr;place-items:center center;width:20rem;height:15rem;"]);
const GraphTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h1.withConfig({
  displayName: "GaugeChart__GraphTitle",
  componentId: "sc-6sptya-1"
})(["grid-column:1;grid-row:1;font-size:2.4rem;"]);
const Graph = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "GaugeChart__Graph",
  componentId: "sc-6sptya-2"
})(["grid-column:1;grid-row:2;"]);
const Volume = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "GaugeChart__Volume",
  componentId: "sc-6sptya-3"
})(["grid-column:1;grid-row:2;display:flex;align-items:center;justify-content:center;margin-top:1.5rem;"]);
const CurrentVolume = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "GaugeChart__CurrentVolume",
  componentId: "sc-6sptya-4"
})(["font-size:2.4rem;color:", ";font-weight:bold;"], _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["color"].jctDarkGray);
const CurrentVolumeLabel = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "GaugeChart__CurrentVolumeLabel",
  componentId: "sc-6sptya-5"
})(["font-size:1.8rem;color:", ";align-self:flex-end;margin-bottom:.1rem;margin-left:.2rem;"], _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["color"].jctDarkGray);

/***/ }),

/***/ "./components/browser/Layout.js":
/*!**************************************!*\
  !*** ./components/browser/Layout.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_screensizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/screensizes */ "./public/screensizes.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sidebar */ "./components/browser/Sidebar.js");
var _jsxFileName = "/Users/cor-eee/Projects/jct-next/components/browser/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.main.withConfig({
  displayName: "Layout__MainContainer",
  componentId: "q874ff-0"
})(["height:100vh;width:100vw;display:flex;flex-flow:row;"]);
const SiteDetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Layout__SiteDetailsContainer",
  componentId: "q874ff-1"
})(["padding-left:7rem;overflow:scroll;display:grid;grid-template-rows:20rem 1fr;width:100%;"]);
const SiteNameTime = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Layout__SiteNameTime",
  componentId: "q874ff-2"
})(["height:15rem;display:flex;flex-flow:column;justify-content:center;"]);
const SiteName = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2.withConfig({
  displayName: "Layout__SiteName",
  componentId: "q874ff-3"
})(["font-weight:600;color:", ";margin-bottom:.5rem;font-size:36px;text-transform:uppercase;"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["color"].jctDarkGray);
const DateTime = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3.withConfig({
  displayName: "Layout__DateTime",
  componentId: "q874ff-4"
})(["color:", ";font-size:1.75rem;font-weight:400;margin-left:.25rem;"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["color"].jctDarkGray);
const SiteDetails = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Layout__SiteDetails",
  componentId: "q874ff-5"
})(["display:grid;grid-template-columns:1fr 1fr;"]);

const Layout = props => {
  return __jsx(MainContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 3
    }
  }, __jsx(_Sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    company: props.company,
    sites: props.sites,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }), __jsx(SiteDetailsContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, __jsx(SiteNameTime, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx(SiteName, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, props.sitename), __jsx(DateTime, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, props.date, " - ", props.time)), __jsx(SiteDetails, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, props.children)));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/browser/Sidebar.js":
/*!***************************************!*\
  !*** ./components/browser/Sidebar.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_screensizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/screensizes */ "./public/screensizes.js");
var _jsxFileName = "/Users/cor-eee/Projects/jct-next/components/browser/Sidebar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SidebarContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Sidebar__SidebarContainer",
  componentId: "sc-1wi8syt-0"
})(["width:30rem;background-color:", ";display:grid;grid-template-rows:12.5rem 1fr;position:sticky;"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["color"].jctDarkGray);
const CompanyContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Sidebar__CompanyContainer",
  componentId: "sc-1wi8syt-1"
})(["display:flex;align-items:center;justify-content:center;height:12.5rem;img{height:75%;}"]);
const SiteNavContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Sidebar__SiteNavContainer",
  componentId: "sc-1wi8syt-2"
})(["width:100%;height:100%;padding-left:3rem;padding-top:1rem;h1{color:#fff;font-size:18px;font-weight:500;}"]);
const SiteLinks = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.nav.withConfig({
  displayName: "Sidebar__SiteLinks",
  componentId: "sc-1wi8syt-3"
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
    src: `../static/${props.company}-logo.png`,
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

/***/ "./components/mobile/Details.js":
/*!**************************************!*\
  !*** ./components/mobile/Details.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_screensizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/screensizes */ "./public/screensizes.js");
var _jsxFileName = "/Users/cor-eee/Projects/jct-next/components/mobile/Details.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const DetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Details__DetailsContainer",
  componentId: "sc-1i9jyzd-0"
})(["display:flex;flex-flow:column;margin-bottom:2rem;"]);
const NameAlarmsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Details__NameAlarmsContainer",
  componentId: "sc-1i9jyzd-1"
})(["display:flex;margin-bottom:1rem;"]);
const DetailsName = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "Details__DetailsName",
  componentId: "sc-1i9jyzd-2"
})(["color:#fff;font-size:1.8rem;font-weight:bold;background-color:", ";width:10rem;height:4rem;display:flex;align-items:center;justify-content:center;"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["color"].jctDarkGray);
const DoughnutChartContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Details__DoughnutChartContainer",
  componentId: "sc-1i9jyzd-3"
})(["display:flex;justify-content:", ";"], props => props.isTable ? "center" : "flex-start");

const NewMobileDetails = props => __jsx(DetailsContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 3
  }
}, __jsx(NameAlarmsContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }
}, __jsx(DetailsName, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 7
  }
}, props.resourceType)), __jsx(DoughnutChartContainer, {
  isTable: props.isTable,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }
}, props.children));

/* harmony default export */ __webpack_exports__["default"] = (NewMobileDetails);

/***/ }),

/***/ "./components/mobile/GaugeChart.js":
/*!*****************************************!*\
  !*** ./components/mobile/GaugeChart.js ***!
  \*****************************************/
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
/* harmony import */ var _public_screensizes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/screensizes */ "./public/screensizes.js");
var _jsxFileName = "/Users/cor-eee/Projects/jct-next/components/mobile/GaugeChart.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const DoughnutChart = props => {
  const data = {
    datasets: [{
      data: [props.currentValue, props.totalValue - props.currentValue],
      backgroundColor: ctx => {
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
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(GraphTitle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, props.name), __jsx(Graph, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Doughnut"], {
    data: data,
    width: 100,
    height: 100,
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
      lineNumber: 28,
      columnNumber: 9
    }
  })), __jsx(Volume, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx(CurrentVolume, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, props.currentValue !== null ? props.currentValue.toFixed(2) : props.currentValue), __jsx(CurrentVolumeLabel, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, props.unitOfMeasure)));
};

/* harmony default export */ __webpack_exports__["default"] = (DoughnutChart);
const GraphContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "GaugeChart__GraphContainer",
  componentId: "nw4m3o-0"
})(["display:grid;grid:20% 1fr / 1fr;place-items:center center;margin-left:2rem;"]);
const GraphTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h1.withConfig({
  displayName: "GaugeChart__GraphTitle",
  componentId: "nw4m3o-1"
})(["grid-column:1;grid-row:1;font-size:2rem;"]);
const Graph = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "GaugeChart__Graph",
  componentId: "nw4m3o-2"
})(["grid-column:1;grid-row:2;"]);
const Volume = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "GaugeChart__Volume",
  componentId: "nw4m3o-3"
})(["grid-column:1;grid-row:2;display:flex;align-items:center;justify-content:center;margin-top:1.5rem;"]);
const CurrentVolume = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "GaugeChart__CurrentVolume",
  componentId: "nw4m3o-4"
})(["font-size:1.8rem;color:", ";font-weight:bold;"], _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["color"].jctDarkGray);
const CurrentVolumeLabel = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "GaugeChart__CurrentVolumeLabel",
  componentId: "nw4m3o-5"
})(["font-size:1.8rem;color:", ";align-self:flex-end;margin-bottom:.1rem;margin-left:.2rem;"], _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["color"].jctDarkGray);

/***/ }),

/***/ "./components/mobile/Layout.js":
/*!*************************************!*\
  !*** ./components/mobile/Layout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-sidebar */ "react-sidebar");
/* harmony import */ var react_sidebar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_sidebar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_screensizes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/screensizes */ "./public/screensizes.js");
/* harmony import */ var _MPCAlarmList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MPCAlarmList */ "./components/MPCAlarmList.js");
var _jsxFileName = "/Users/cor-eee/Projects/jct-next/components/mobile/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const MobileMainContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.main.withConfig({
  displayName: "Layout__MobileMainContainer",
  componentId: "sc-8eh4j8-0"
})(["width:100%;display:grid;grid-template-rows:7rem 1fr;"]);
const MobileCompanyContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Layout__MobileCompanyContainer",
  componentId: "sc-8eh4j8-1"
})(["display:grid;grid-template-columns:20% 60% 20%;background-color:", ";place-items:stretch;"], _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["color"].jctDarkGray);
const Menu = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Layout__Menu",
  componentId: "sc-8eh4j8-2"
})(["place-self:center;img{width:24px;}"]);
const NameDateTimeContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Layout__NameDateTimeContainer",
  componentId: "sc-8eh4j8-3"
})(["place-self:center;display:flex;flex-flow:column;align-items:center;"]);
const MobileSiteName = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2.withConfig({
  displayName: "Layout__MobileSiteName",
  componentId: "sc-8eh4j8-4"
})(["font-size:1.8rem;font-weight:600;color:", ";"], _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["color"].jctWhite);
const DateTime = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3.withConfig({
  displayName: "Layout__DateTime",
  componentId: "sc-8eh4j8-5"
})(["color:", ";font-size:1.4rem;font-weight:400;"], _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["color"].jctWhite);
const MobileCarouselContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Layout__MobileCarouselContainer",
  componentId: "sc-8eh4j8-6"
})(["display:flex;flex-flow:column;width:100%;padding-top:4rem;"]);
const CompanyContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Layout__CompanyContainer",
  componentId: "sc-8eh4j8-7"
})(["display:flex;align-items:center;justify-content:center;height:12.5rem;img{height:75%;}"]);
const SiteNavContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Layout__SiteNavContainer",
  componentId: "sc-8eh4j8-8"
})(["width:100%;height:100%;padding-left:3rem;padding-top:1rem;h1{color:#fff;font-size:18px;font-weight:500;}"]);
const SiteLinks = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.nav.withConfig({
  displayName: "Layout__SiteLinks",
  componentId: "sc-8eh4j8-9"
})(["ul{list-style:none;margin-top:1.5rem;}li{height:5rem;display:flex;align-items:center;padding-left:2rem;margin-bottom:1rem;}li:hover{background-color:", ";}a{color:#fff;text-decoration:none;font-size:16px;}"], _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["color"].jctOrange);
const AlarmTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Layout__AlarmTitle",
  componentId: "sc-8eh4j8-10"
})(["align-self:flex-start;margin-top:2rem;display:flex;align-items:center;justify-content:center;background-color:", ";height:4rem;width:10rem;color:#fff;font-size:1.6rem;font-weight:bold;"], _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["color"].jctDarkGray);

const MobileLayout = props => {
  const {
    0: isSiteMenuOpen,
    1: setIsSiteMenuOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isAlarmMenuOpen,
    1: setIsAlarmMenuOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(react_sidebar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    sidebar: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(CompanyContainer, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 11
      }
    }, __jsx("img", {
      src: `../static/${props.company}-logo.png`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 13
      }
    })), __jsx(SiteNavContainer, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 11
      }
    }, __jsx("h1", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 13
      }
    }, "Sites"), __jsx(SiteLinks, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 13
      }
    }, __jsx("ul", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 15
      }
    }, props.sites)))),
    open: isSiteMenuOpen,
    onSetOpen: setIsSiteMenuOpen,
    styles: {
      sidebar: {
        width: '30rem',
        backgroundColor: `${_public_screensizes__WEBPACK_IMPORTED_MODULE_3__["color"].jctDarkGray}`,
        display: 'grid',
        gridTemplateRows: '12.5rem 1fr'
      },
      overlay: {
        backgroundColor: 'rgba(255,255,255,0)'
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 5
    }
  }, __jsx(react_sidebar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    sidebar: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(AlarmTitle, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 13
      }
    }, "Alarms"), props.sidebarAlarm),
    open: isAlarmMenuOpen,
    onSetOpen: setIsAlarmMenuOpen,
    pullRight: true,
    styles: {
      sidebar: {
        width: '33rem',
        backgroundColor: '#fff',
        display: 'flex',
        flexFlow: 'column',
        color: `${_public_screensizes__WEBPACK_IMPORTED_MODULE_3__["color"].jctDarkGray}`,
        marginTop: '19%',
        paddingLeft: '3rem'
      },
      overlay: {
        backgroundColor: 'rgba(255,255,255,0)'
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }
  }, __jsx(MobileMainContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 9
    }
  }, __jsx(MobileCompanyContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 13
    }
  }, __jsx(Menu, {
    onClick: () => setIsSiteMenuOpen(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "../static/menu-icon.svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 17
    }
  })), __jsx(NameDateTimeContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 15
    }
  }, __jsx(MobileSiteName, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 17
    }
  }, props.sitename), __jsx(DateTime, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 17
    }
  }, props.date, " - ", props.time)), __jsx(Menu, {
    onClick: () => setIsAlarmMenuOpen(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "../static/alarm-icon.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 17
    }
  }))), __jsx(MobileCarouselContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 13
    }
  }, props.children))));
};

/* harmony default export */ __webpack_exports__["default"] = (MobileLayout);

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
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-device-detect */ "react-device-detect");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_browser_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/browser/Layout */ "./components/browser/Layout.js");
/* harmony import */ var _components_browser_Details__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/browser/Details */ "./components/browser/Details.js");
/* harmony import */ var _components_browser_GaugeChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/browser/GaugeChart */ "./components/browser/GaugeChart.js");
/* harmony import */ var _components_mobile_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/mobile/Layout */ "./components/mobile/Layout.js");
/* harmony import */ var _components_mobile_Details__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/mobile/Details */ "./components/mobile/Details.js");
/* harmony import */ var _components_mobile_GaugeChart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/mobile/GaugeChart */ "./components/mobile/GaugeChart.js");
/* harmony import */ var _components_SidebarAlarm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/SidebarAlarm */ "./components/SidebarAlarm.js");
var _jsxFileName = "/Users/cor-eee/Projects/jct-next/pages/mammoth/university/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const University = ({
  data,
  sites
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_device_detect__WEBPACK_IMPORTED_MODULE_3__["BrowserView"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 3
  }
}, __jsx(_components_browser_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
  company: "mammoth",
  sites: sites.map((site, i) => __jsx("li", {
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 38
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `./${site.BATTERY.toLowerCase()}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 50
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 97
    }
  }, site.BATTERY)))),
  sitename: "University",
  date: data[0].mDate,
  time: data[0].mTime,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }
}, __jsx(_components_browser_Details__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
    lineNumber: 25,
    columnNumber: 7
  }
}, __jsx(_components_browser_GaugeChart__WEBPACK_IMPORTED_MODULE_6__["default"], {
  name: data[0].S1,
  currentValue: data[0].V1,
  totalValue: 16,
  unitOfMeasure: data[0].S2.toLowerCase(),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }
}), __jsx(_components_browser_GaugeChart__WEBPACK_IMPORTED_MODULE_6__["default"], {
  name: data[0].S3,
  currentValue: data[0].V2,
  totalValue: 16,
  unitOfMeasure: data[0].S4.toLowerCase(),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 9
  }
})))), __jsx(react_device_detect__WEBPACK_IMPORTED_MODULE_3__["MobileView"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 3
  }
}, __jsx(_components_mobile_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
  company: "mammoth",
  sites: sites.map((site, i) => __jsx("li", {
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 38
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `./${site.BATTERY.toLowerCase()}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 50
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 97
    }
  }, site.BATTERY)))),
  sitename: "University",
  date: data[0].mDate,
  time: data[0].mTime,
  sidebarAlarm: __jsx(_components_SidebarAlarm__WEBPACK_IMPORTED_MODULE_10__["default"], {
    alarmOn: data[0].V5,
    alarmOff: data[0].V6,
    tpumpOn: data[0].V3,
    tpumpOff: data[0].V4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }
}, __jsx(_components_mobile_Details__WEBPACK_IMPORTED_MODULE_8__["default"], {
  resourceType: "Water",
  name: data[0].S1,
  unitOfMeasure: data[0].S2.toLowerCase(),
  currentValue: data[0].V1,
  totalValue: 16,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 7
  }
}, __jsx(_components_mobile_GaugeChart__WEBPACK_IMPORTED_MODULE_9__["default"], {
  name: data[0].S1,
  currentValue: data[0].V1,
  totalValue: 16,
  unitOfMeasure: data[0].S2.toLowerCase(),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 9
  }
}), __jsx(_components_mobile_GaugeChart__WEBPACK_IMPORTED_MODULE_9__["default"], {
  name: data[0].S3,
  currentValue: data[0].V2,
  totalValue: 16,
  unitOfMeasure: data[0].S4.toLowerCase(),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 9
  }
})))));

async function getServerSideProps(ctx) {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()('http://jct-systems.com/api/mammoth/university');
  const data = await res.json();
  const res1 = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()('http://jct-systems.com/api/mammoth');
  const sites = await res1.json();
  return {
    props: {
      data,
      sites
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (University);

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

/***/ 7:
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

/***/ "react-device-detect":
/*!**************************************!*\
  !*** external "react-device-detect" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-device-detect");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-sidebar":
/*!********************************!*\
  !*** external "react-sidebar" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-sidebar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FsYXJtcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01QQ0FsYXJtTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NpZGViYXJBbGFybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jyb3dzZXIvRGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jyb3dzZXIvR2F1Z2VDaGFydC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jyb3dzZXIvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnJvd3Nlci9TaWRlYmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9iaWxlL0RldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2JpbGUvR2F1Z2VDaGFydC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vYmlsZS9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9tYW1tb3RoL3VuaXZlcnNpdHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NjcmVlbnNpemVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtdW5mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jaGFydGpzLTJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kZXZpY2UtZGV0ZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zaWRlYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJEZXRhaWxzQWxhcm1Db250YWluZXIiLCJzdHlsZWQiLCJwIiwiY29sb3IiLCJqY3REYXJrR3JheSIsIkFsYXJtVGl0bGUiLCJoMiIsIkFsYXJtT25PZmYiLCJkaXYiLCJBbGFybU9uT2ZmTnVtIiwic3BhbiIsIkFsYXJtcyIsInByb3BzIiwiYWxhcm1UeXBlIiwib24iLCJ1bmRlZmluZWQiLCJ0b0ZpeGVkIiwib2ZmIiwiQWxhcm1MaXN0IiwiR2VuZXJhbExpc3QiLCJ1bCIsIlNjcnViYmVyTGlzdCIsIkhpSGlMaXN0IiwiTG9Mb0xpc3QiLCJBbGFybUxpc3RJdGVtIiwibGkiLCJJbmRpY2F0b3IiLCJhY3RpdmUiLCJMaXN0VGl0bGUiLCJNUENBbGFybUxpc3QiLCJhbGFybU9uIiwiYWxhcm1PZmYiLCJ0cHVtcE9uIiwidHB1bXBPZmYiLCJEZXRhaWxzQ29udGFpbmVyIiwicmlnaHQiLCJzdGFydCIsIk5hbWVBbGFybXNDb250YWluZXIiLCJEZXRhaWxzTmFtZSIsImgxIiwiRG91Z2hudXRDaGFydENvbnRhaW5lciIsIkRldGFpbHMiLCJyZXNvdXJjZVR5cGUiLCJpc1RhYmxlIiwiY2hpbGRyZW4iLCJEb3VnaG51dENoYXJ0IiwiZGF0YSIsImRhdGFzZXRzIiwiY3VycmVudFZhbHVlIiwidG90YWxWYWx1ZSIsImJhY2tncm91bmRDb2xvciIsImN0eCIsImRhdGFzZXQiLCJib3JkZXJXaWR0aCIsIm5hbWUiLCJjdXRvdXRQZXJjZW50YWdlIiwicm90YXRpb24iLCJNYXRoIiwiUEkiLCJjaXJjdW1mZXJlbmNlIiwidG9vbHRpcHMiLCJob3ZlciIsInVuaXRPZk1lYXN1cmUiLCJHcmFwaENvbnRhaW5lciIsIkdyYXBoVGl0bGUiLCJHcmFwaCIsIlZvbHVtZSIsIkN1cnJlbnRWb2x1bWUiLCJDdXJyZW50Vm9sdW1lTGFiZWwiLCJNYWluQ29udGFpbmVyIiwibWFpbiIsIlNpdGVEZXRhaWxzQ29udGFpbmVyIiwiU2l0ZU5hbWVUaW1lIiwiU2l0ZU5hbWUiLCJEYXRlVGltZSIsImgzIiwiU2l0ZURldGFpbHMiLCJMYXlvdXQiLCJjb21wYW55Iiwic2l0ZXMiLCJzaXRlbmFtZSIsImRhdGUiLCJ0aW1lIiwiU2lkZWJhckNvbnRhaW5lciIsIkNvbXBhbnlDb250YWluZXIiLCJTaXRlTmF2Q29udGFpbmVyIiwiU2l0ZUxpbmtzIiwibmF2IiwiamN0T3JhbmdlIiwiU2lkZWJhciIsIk5ld01vYmlsZURldGFpbHMiLCJNb2JpbGVNYWluQ29udGFpbmVyIiwiTW9iaWxlQ29tcGFueUNvbnRhaW5lciIsIk1lbnUiLCJOYW1lRGF0ZVRpbWVDb250YWluZXIiLCJNb2JpbGVTaXRlTmFtZSIsImpjdFdoaXRlIiwiTW9iaWxlQ2Fyb3VzZWxDb250YWluZXIiLCJNb2JpbGVMYXlvdXQiLCJpc1NpdGVNZW51T3BlbiIsInNldElzU2l0ZU1lbnVPcGVuIiwidXNlU3RhdGUiLCJpc0FsYXJtTWVudU9wZW4iLCJzZXRJc0FsYXJtTWVudU9wZW4iLCJzaWRlYmFyIiwid2lkdGgiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlUm93cyIsIm92ZXJsYXkiLCJzaWRlYmFyQWxhcm0iLCJmbGV4RmxvdyIsIm1hcmdpblRvcCIsInBhZGRpbmdMZWZ0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl91cmwiLCJfdXRpbHMiLCJfcm91dGVyIiwiX3JvdXRlcjIiLCJpc0xvY2FsIiwiaHJlZiIsInVybCIsInBhcnNlIiwib3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJob3N0IiwicHJvdG9jb2wiLCJtZW1vaXplZEZvcm1hdFVybCIsImZvcm1hdEZ1bmMiLCJsYXN0SHJlZiIsImxhc3RBcyIsImxhc3RSZXN1bHQiLCJhcyIsInJlc3VsdCIsImZvcm1hdFVybCIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwib2JzZXJ2ZXIiLCJsaXN0ZW5lcnMiLCJNYXAiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJnZXRPYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJoYXMiLCJ0YXJnZXQiLCJjYiIsImdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJkZWxldGUiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZWwiLCJvYnNlcnZlIiwic2V0IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiTGluayIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwiY2xlYW5VcExpc3RlbmVycyIsImZvcm1hdFVybHMiLCJhc0hyZWYiLCJhZGRCYXNlUGF0aCIsImxpbmtDbGlja2VkIiwiZSIsIm5vZGVOYW1lIiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwicGF0aG5hbWUiLCJsb2NhdGlvbiIsInJlc29sdmUiLCJwcmV2ZW50RGVmYXVsdCIsInNjcm9sbCIsImluZGV4T2YiLCJyZXBsYWNlIiwic2hhbGxvdyIsInRoZW4iLCJzdWNjZXNzIiwic2Nyb2xsVG8iLCJkb2N1bWVudCIsImJvZHkiLCJmb2N1cyIsInByZWZldGNoIiwid2FybiIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0UGF0aHMiLCJwYXJzZWRIcmVmIiwicGFyc2VkQXMiLCJyZXNvbHZlZEhyZWYiLCJoYW5kbGVSZWYiLCJyZWYiLCJ0YWdOYW1lIiwiaXNQcmVmZXRjaGVkIiwiam9pbiIsIm9wdGlvbnMiLCJwYXRocyIsImNhdGNoIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY3VycmVudCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5Iiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJwYXNzSHJlZiIsInR5cGUiLCJwcm9jZXNzIiwiY2xvbmVFbGVtZW50IiwiZXhlY09uY2UiLCJQcm9wVHlwZXMiLCJleGFjdCIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJib29sIiwiZWxlbWVudCIsInByb3BOYW1lIiwidmFsdWUiLCJfZGVmYXVsdCIsInVzZVJvdXRlciIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsImNyZWF0ZVJvdXRlciIsIndpdGhSb3V0ZXIiLCJSb3V0ZXIiLCJOZXh0Um91dGVyIiwiX3JvdXRlckNvbnRleHQiLCJfd2l0aFJvdXRlciIsInNpbmdsZXRvblJvdXRlciIsInJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwiYXJndW1lbnRzIiwiZXZlbnQiLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiRXJyb3IiLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsIl9sZW4iLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsImFzc2lnbiIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZGlzcGxheU5hbWUiLCJtaXR0IiwiYWxsIiwiY3JlYXRlIiwiaGFuZGxlciIsInB1c2giLCJzcGxpY2UiLCJlbWl0IiwiZXZ0cyIsInNsaWNlIiwibWFwIiwiX19pbXBvcnREZWZhdWx0IiwibW9kIiwidXJsXzEiLCJtaXR0XzEiLCJ1dGlsc18xIiwiaXNfZHluYW1pY18xIiwicm91dGVfbWF0Y2hlcl8xIiwicm91dGVfcmVnZXhfMSIsImJhc2VQYXRoIiwicGF0aCIsImRlbEJhc2VQYXRoIiwic3Vic3RyIiwidG9Sb3V0ZSIsInByZXBhcmVSb3V0ZSIsImZldGNoTmV4dERhdGEiLCJxdWVyeSIsImlzU2VydmVyUmVuZGVyIiwiYXR0ZW1wdHMiLCJnZXRSZXNwb25zZSIsImZldGNoIiwiX19ORVhUX0RBVEFfXyIsImJ1aWxkSWQiLCJjcmVkZW50aWFscyIsInJlcyIsIm9rIiwic3RhdHVzIiwianNvbiIsImNvZGUiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJzZGMiLCJvblBvcFN0YXRlIiwic3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsImlzU3NyIiwiYXNQYXRoIiwiX2JwcyIsIl9nZXRTdGF0aWNEYXRhIiwiUHJvbWlzZSIsIl9nZXRTZXJ2ZXJEYXRhIiwicm91dGUiLCJjb21wb25lbnRzIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJpc0R5bmFtaWNSb3V0ZSIsImF1dG9FeHBvcnQiLCJzdWIiLCJjbGMiLCJfd3JhcEFwcCIsIl9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCIsInVwZGF0ZSIsIm5ld0RhdGEiLCJub3RpZnkiLCJyZWxvYWQiLCJiYWNrIiwiaGlzdG9yeSIsImNoYW5nZSIsIm1ldGhvZCIsIl9hcyIsInJlamVjdCIsIl9oIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJhYm9ydENvbXBvbmVudExvYWQiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJ1cmxJc05ldyIsImFzUGF0aG5hbWUiLCJyb3V0ZVJlZ2V4IiwiZ2V0Um91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJnZXRSb3V0ZU1hdGNoZXIiLCJtaXNzaW5nUGFyYW1zIiwia2V5cyIsImdyb3VwcyIsImZpbHRlciIsInBhcmFtIiwiZ2V0Um91dGVJbmZvIiwicm91dGVJbmZvIiwiY2FuY2VsbGVkIiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwiY2FjaGVkUm91dGVJbmZvIiwiaGFuZGxlRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZmV0Y2hDb21wb25lbnQiLCJwYWdlIiwiZ2lwRXJyIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiX2dldERhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzcGxpdCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJoYXNoIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsInByZWZldGNoRGF0YSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiZm4iLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIlRFU1RfUk9VVEUiLCJ0ZXN0IiwicmUiLCJleGVjIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiXyIsInBhcmFtcyIsInNsdWdOYW1lIiwiZyIsIm0iLCJwb3MiLCJyZXBlYXQiLCJlc2NhcGVSZWdleCIsInN0ciIsIm5vcm1hbGl6ZWRSb3V0ZSIsImVzY2FwZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCIkMSIsImlzQ2F0Y2hBbGwiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImtleSIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwiaG9zdG5hbWUiLCJwb3J0IiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwiX2EiLCJwcm90b3R5cGUiLCJwYWdlUHJvcHMiLCJ1cmxPYmplY3RLZXlzIiwiZm9ybWF0IiwiU1AiLCJtZWFzdXJlIiwiVW5pdmVyc2l0eSIsInNpdGUiLCJpIiwiQkFUVEVSWSIsInRvTG93ZXJDYXNlIiwibURhdGUiLCJtVGltZSIsIlMxIiwiUzIiLCJWMSIsIlYzIiwiVjQiLCJWNSIsIlY2IiwiUzMiLCJWMiIsIlM0IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVzMSIsImpjdExpZ2h0R3JheSIsInNpemUiLCJtb2JpbGVTIiwibW9iaWxlTSIsIm1vYmlsZUwiLCJ0YWJsZXRQIiwidGFibGV0TCIsImxhcHRvcCIsImxhcHRvcE0iLCJsYXB0b3BMIiwiZGVza3RvcCIsInN0YW5kYXJkIiwicmV0aW5hIiwibW9iaWxlIiwidGFibGV0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFFQSxNQUFNQSxxQkFBcUIsR0FBR0Msd0RBQU0sQ0FBQ0MsQ0FBVjtBQUFBO0FBQUE7QUFBQSxxRkFHRUMseURBQUssQ0FBQ0MsV0FIUixDQUEzQjtBQU9BLE1BQU1DLFVBQVUsR0FBR0osd0RBQU0sQ0FBQ0ssRUFBVjtBQUFBO0FBQUE7QUFBQSx5Q0FBaEI7QUFLQSxNQUFNQyxVQUFVLEdBQUdOLHdEQUFNLENBQUNPLEdBQVY7QUFBQTtBQUFBO0FBQUEseUJBQWhCO0FBSUEsTUFBTUMsYUFBYSxHQUFHUix3REFBTSxDQUFDUyxJQUFWO0FBQUE7QUFBQTtBQUFBLDBDQUFuQjs7QUFPQSxNQUFNQyxNQUFNLEdBQUdDLEtBQUssSUFDbEIsTUFBQyxxQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBYUEsS0FBSyxDQUFDQyxTQUFuQixDQURGLEVBRUUsTUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDTSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFpQkQsS0FBSyxDQUFDRSxFQUFOLEtBQWFDLFNBQWIsR0FBeUJILEtBQUssQ0FBQ0UsRUFBTixDQUFTRSxPQUFULENBQWlCLENBQWpCLENBQXpCLEdBQStDSixLQUFLLENBQUNFLEVBQXRFLENBRE4sWUFDc0csTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBaUJGLEtBQUssQ0FBQ0ssR0FBTixLQUFjRixTQUFkLEdBQTBCSCxLQUFLLENBQUNLLEdBQU4sQ0FBVUQsT0FBVixDQUFrQixDQUFsQixDQUExQixHQUFpREosS0FBSyxDQUFDSyxHQUF4RSxDQUR0RyxDQUZGLENBREY7O0FBU2VOLHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBRUEsTUFBTU8sU0FBUyxHQUFHakIsd0RBQU0sQ0FBQ08sR0FBVjtBQUFBO0FBQUE7QUFBQSx1REFBZjtBQU1BLE1BQU1XLFdBQVcsR0FBR2xCLHdEQUFNLENBQUNtQixFQUFWO0FBQUE7QUFBQTtBQUFBLDJDQUFqQjtBQUlBLE1BQU1DLFlBQVksR0FBR3BCLHdEQUFNLENBQUNtQixFQUFWO0FBQUE7QUFBQTtBQUFBLDJDQUFsQjtBQUlBLE1BQU1FLFFBQVEsR0FBR3JCLHdEQUFNLENBQUNtQixFQUFWO0FBQUE7QUFBQTtBQUFBLDJDQUFkO0FBSUEsTUFBTUcsUUFBUSxHQUFHdEIsd0RBQU0sQ0FBQ21CLEVBQVY7QUFBQTtBQUFBO0FBQUEsd0JBQWQ7QUFJQSxNQUFNSSxhQUFhLEdBQUd2Qix3REFBTSxDQUFDd0IsRUFBVjtBQUFBO0FBQUE7QUFBQSw0RUFBbkI7QUFPQSxNQUFNQyxTQUFTLEdBQUd6Qix3REFBTSxDQUFDTyxHQUFWO0FBQUE7QUFBQTtBQUFBLCtGQUlPSSxLQUFLLElBQUlBLEtBQUssQ0FBQ2UsTUFBTixHQUFlLFNBQWYsR0FBMkIsU0FKM0MsQ0FBZjtBQVFBLE1BQU1DLFNBQVMsR0FBRzNCLHdEQUFNLENBQUNLLEVBQVY7QUFBQTtBQUFBO0FBQUEsNENBQWY7O0FBS0EsTUFBTXVCLFlBQVksR0FBR2pCLEtBQUssSUFDeEIsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFRSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsMEJBRkYsRUFLRSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYseUJBTEYsRUFRRSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsOEJBUkYsRUFXRSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsd0NBWEYsQ0FERixFQWlCRSxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLEVBRUUsTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLG9CQUZGLEVBS0UsTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLG9CQUxGLEVBUUUsTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLG9CQVJGLENBakJGLEVBOEJFLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixFQUVFLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FB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OztBQy9CQSwrQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWMvZGV2ZWxvcG1lbnQvcGFnZXMvbWFtbW90aC91bml2ZXJzaXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBjb2xvciB9IGZyb20gJy4uL3B1YmxpYy9zY3JlZW5zaXplcydcblxuY29uc3QgRGV0YWlsc0FsYXJtQ29udGFpbmVyID0gc3R5bGVkLnBgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtjb2xvci5qY3REYXJrR3JheX07XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xuYFxuXG5jb25zdCBBbGFybVRpdGxlID0gc3R5bGVkLmgyYFxuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbmBcblxuY29uc3QgQWxhcm1Pbk9mZiA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuYFxuXG5jb25zdCBBbGFybU9uT2ZmTnVtID0gc3R5bGVkLnNwYW5gXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuOHJlbTtcbmBcblxuXG5cbmNvbnN0IEFsYXJtcyA9IHByb3BzID0+IChcbiAgPERldGFpbHNBbGFybUNvbnRhaW5lcj5cbiAgICA8QWxhcm1UaXRsZT57cHJvcHMuYWxhcm1UeXBlfTwvQWxhcm1UaXRsZT5cbiAgICA8QWxhcm1Pbk9mZj5cbiAgICAgIE9uOiA8QWxhcm1Pbk9mZk51bT57IHByb3BzLm9uICE9PSB1bmRlZmluZWQgPyBwcm9wcy5vbi50b0ZpeGVkKDIpIDogcHJvcHMub24gfTwvQWxhcm1Pbk9mZk51bT4gT2ZmOiA8QWxhcm1Pbk9mZk51bT57IHByb3BzLm9mZiAhPT0gdW5kZWZpbmVkID8gcHJvcHMub2ZmLnRvRml4ZWQoMikgOiBwcm9wcy5vZmYgfTwvQWxhcm1Pbk9mZk51bT5cbiAgICA8L0FsYXJtT25PZmY+XG4gIDwvRGV0YWlsc0FsYXJtQ29udGFpbmVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBBbGFybXMiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgY29sb3IgfSBmcm9tICcuLi9wdWJsaWMvc2NyZWVuc2l6ZXMnXG5cbmNvbnN0IEFsYXJtTGlzdCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBwYWRkaW5nLXRvcDogMnJlbTtcbmBcblxuY29uc3QgR2VuZXJhbExpc3QgPSBzdHlsZWQudWxgXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG5gXG5jb25zdCBTY3J1YmJlckxpc3QgPSBzdHlsZWQudWxgXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG5gXG5jb25zdCBIaUhpTGlzdCA9IHN0eWxlZC51bGBcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbmBcbmNvbnN0IExvTG9MaXN0ID0gc3R5bGVkLnVsYFxuICBsaXN0LXN0eWxlOiBub25lO1xuYFxuXG5jb25zdCBBbGFybUxpc3RJdGVtID0gc3R5bGVkLmxpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbmBcblxuY29uc3QgSW5kaWNhdG9yID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAxLjhyZW07XG4gIHdpZHRoOiAxLjhyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuYWN0aXZlID8gXCIjNmZjZjk3XCIgOiBcIiNlYWVhZWFcIn07XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbmBcblxuY29uc3QgTGlzdFRpdGxlID0gc3R5bGVkLmgyYFxuICBmb250LXNpemU6IDEuOHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbmBcblxuY29uc3QgTVBDQWxhcm1MaXN0ID0gcHJvcHMgPT4gKFxuICA8QWxhcm1MaXN0PlxuICAgIDxHZW5lcmFsTGlzdD5cbiAgICAgIDxMaXN0VGl0bGU+R2VuZXJhbDwvTGlzdFRpdGxlPlxuICAgICAgPEFsYXJtTGlzdEl0ZW0+XG4gICAgICAgIDxJbmRpY2F0b3IgLz4gTG9jYWwgRW1lcmdlbmN5IFN0b3BcbiAgICAgIDwvQWxhcm1MaXN0SXRlbT5cbiAgICAgIDxBbGFybUxpc3RJdGVtPlxuICAgICAgICA8SW5kaWNhdG9yIC8+IFNwYXJlIERpMDIgU2h1dGRvd25cbiAgICAgIDwvQWxhcm1MaXN0SXRlbT5cbiAgICAgIDxBbGFybUxpc3RJdGVtPlxuICAgICAgICA8SW5kaWNhdG9yIC8+IExvdyBDb21wcmVzc29yIE9pbCBMZXZlbFxuICAgICAgPC9BbGFybUxpc3RJdGVtPlxuICAgICAgPEFsYXJtTGlzdEl0ZW0+XG4gICAgICAgIDxJbmRpY2F0b3IgLz4gTG93IENvbXByZXNzb3IgQ29vbGluZyBXYXRlciBMZXZlbFxuICAgICAgPC9BbGFybUxpc3RJdGVtPlxuICAgIDwvR2VuZXJhbExpc3Q+XG5cbiAgICA8U2NydWJiZXJMaXN0PlxuICAgICAgPExpc3RUaXRsZT5TY3J1YmJlciBMaXF1aWQgTGV2ZWw8L0xpc3RUaXRsZT5cbiAgICAgIDxBbGFybUxpc3RJdGVtPlxuICAgICAgICA8SW5kaWNhdG9yIC8+IEhpZ2ggMXN0IFN0YWdlXG4gICAgICA8L0FsYXJtTGlzdEl0ZW0+XG4gICAgICA8QWxhcm1MaXN0SXRlbT5cbiAgICAgICAgPEluZGljYXRvciAvPiBIaWdoIDJuZCBTdGFnZVxuICAgICAgPC9BbGFybUxpc3RJdGVtPlxuICAgICAgPEFsYXJtTGlzdEl0ZW0+XG4gICAgICAgIDxJbmRpY2F0b3IgLz4gSGlnaCAzcmQgU3RhZ2VcbiAgICAgIDwvQWxhcm1MaXN0SXRlbT5cbiAgICA8L1NjcnViYmVyTGlzdD5cblxuICAgIDxIaUhpTGlzdD5cbiAgICAgIDxMaXN0VGl0bGU+SGlIaTwvTGlzdFRpdGxlPlxuICAgICAgPEFsYXJtTGlzdEl0ZW0+XG4gICAgICAgIDxJbmRpY2F0b3IgLz4gU3VjdGlvbiBQcmVzc3VyZVxuICAgICAgPC9BbGFybUxpc3RJdGVtPlxuICAgICAgPEFsYXJtTGlzdEl0ZW0+XG4gICAgICAgIDxJbmRpY2F0b3IgYWN0aXZlLz4gMXN0IFN0YWdlIERpc2NoYXJnZSBQcmVzc3VyZVxuICAgICAgPC9BbGFybUxpc3RJdGVtPlxuICAgICAgPEFsYXJtTGlzdEl0ZW0+XG4gICAgICAgIDxJbmRpY2F0b3IgLz4gMm5kIFN0YWdlIERpc2NoYXJnZSBQcmVzc3VyZVxuICAgICAgPC9BbGFybUxpc3RJdGVtPlxuICAgICAgPEFsYXJtTGlzdEl0ZW0+XG4gICAgICAgIDxJbmRpY2F0b3IgLz4gM3JkIFN0YWdlIERpc2NoYXJnZSBQcmVzc3VyZVxuICAgICAgPC9BbGFybUxpc3RJdGVtPlxuICAgIDwvSGlIaUxpc3Q+XG5cbiAgICA8TG9Mb0xpc3Q+XG4gICAgICA8TGlzdFRpdGxlPkxvTG88L0xpc3RUaXRsZT5cbiAgICAgIDxBbGFybUxpc3RJdGVtPlxuICAgICAgICA8SW5kaWNhdG9yIC8+IFN1Y3Rpb24gUHJlc3N1cmVcbiAgICAgIDwvQWxhcm1MaXN0SXRlbT5cbiAgICAgIDxBbGFybUxpc3RJdGVtPlxuICAgICAgICA8SW5kaWNhdG9yIC8+IDFzdCBTdGFnZSBEaXNjaGFyZ2UgUHJlc3N1cmVcbiAgICAgIDwvQWxhcm1MaXN0SXRlbT5cbiAgICAgIDxBbGFybUxpc3RJdGVtPlxuICAgICAgICA8SW5kaWNhdG9yIC8+IDJuZCBTdGFnZSBEaXNjaGFyZ2UgUHJlc3N1cmVcbiAgICAgIDwvQWxhcm1MaXN0SXRlbT5cbiAgICAgIDxBbGFybUxpc3RJdGVtPlxuICAgICAgICA8SW5kaWNhdG9yIC8+IDNyZCBTdGFnZSBEaXNjaGFyZ2UgUHJlc3N1cmVcbiAgICAgIDwvQWxhcm1MaXN0SXRlbT5cbiAgICAgIDxBbGFybUxpc3RJdGVtPlxuICAgICAgICA8SW5kaWNhdG9yIC8+IENvbXByZXNzb3IgT2lsIFByZXNzdXJlXG4gICAgICA8L0FsYXJtTGlzdEl0ZW0+XG4gICAgPC9Mb0xvTGlzdD5cbiAgPC9BbGFybUxpc3Q+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE1QQ0FsYXJtTGlzdCIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNvbnN0IEFsYXJtTGlzdCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBwYWRkaW5nLXRvcDogMnJlbTtcbmBcblxuY29uc3QgR2VuZXJhbExpc3QgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAycmVtO1xuYFxuXG5jb25zdCBMaXN0VGl0bGUgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDEuOHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gIHdpZHRoOiAxMHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5gXG5cbmNvbnN0IERldGFpbHNBbGFybUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgd2lkdGg6IDUwJTtcbiAgXG4gICY6Zmlyc3Qtb2YtdHlwZXtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDtcbiAgfVxuYFxuXG5jb25zdCBBbGFybVRpdGxlID0gc3R5bGVkLmgyYFxuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbmBcblxuY29uc3QgQWxhcm1Pbk9mZiA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuYFxuXG5jb25zdCBBbGFybU9uT2ZmTnVtID0gc3R5bGVkLnNwYW5gXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuNnJlbTtcbmBcblxuY29uc3QgTVBDQWxhcm1MaXN0ID0gcHJvcHMgPT4gKFxuICA8QWxhcm1MaXN0PlxuICAgIDxHZW5lcmFsTGlzdD5cbiAgICAgIDxMaXN0VGl0bGU+V2F0ZXI8L0xpc3RUaXRsZT5cbiAgICAgIDxEZXRhaWxzQWxhcm1Db250YWluZXI+XG4gICAgICAgIDxBbGFybVRpdGxlPkFsYXJtPC9BbGFybVRpdGxlPlxuICAgICAgICA8QWxhcm1Pbk9mZj5cbiAgICAgICAgICBPbjogPEFsYXJtT25PZmZOdW0+eyBwcm9wcy5hbGFybU9uICE9PSB1bmRlZmluZWQgPyBwcm9wcy5hbGFybU9uLnRvRml4ZWQoMikgOiBwcm9wcy5hbGFybU9uIH08L0FsYXJtT25PZmZOdW0+IE9mZjogPEFsYXJtT25PZmZOdW0+eyBwcm9wcy5hbGFybU9mZiAhPT0gdW5kZWZpbmVkID8gcHJvcHMuYWxhcm1PZmYudG9GaXhlZCgyKSA6IHByb3BzLmFsYXJtT2ZmIH08L0FsYXJtT25PZmZOdW0+XG4gICAgICAgIDwvQWxhcm1Pbk9mZj5cbiAgICAgIDwvRGV0YWlsc0FsYXJtQ29udGFpbmVyPlxuICAgICAgPERldGFpbHNBbGFybUNvbnRhaW5lcj5cbiAgICAgICAgPEFsYXJtVGl0bGU+VC1QdW1wPC9BbGFybVRpdGxlPlxuICAgICAgICA8QWxhcm1Pbk9mZj5cbiAgICAgICAgICBPbjogPEFsYXJtT25PZmZOdW0+eyBwcm9wcy50cHVtcE9uICE9PSB1bmRlZmluZWQgPyBwcm9wcy50cHVtcE9uLnRvRml4ZWQoMikgOiBwcm9wcy50cHVtcE9uIH08L0FsYXJtT25PZmZOdW0+IE9mZjogPEFsYXJtT25PZmZOdW0+eyBwcm9wcy50cHVtcE9mZiAhPT0gdW5kZWZpbmVkID8gcHJvcHMudHB1bXBPZmYudG9GaXhlZCgyKSA6IHByb3BzLnRwdW1wT2ZmIH08L0FsYXJtT25PZmZOdW0+XG4gICAgICAgIDwvQWxhcm1Pbk9mZj5cbiAgICAgIDwvRGV0YWlsc0FsYXJtQ29udGFpbmVyPlxuICAgIDwvR2VuZXJhbExpc3Q+XG4gIDwvQWxhcm1MaXN0PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBNUENBbGFybUxpc3QiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgY29sb3IgfSBmcm9tICcuLi8uLi9wdWJsaWMvc2NyZWVuc2l6ZXMnXG5cbmltcG9ydCBBbGFybXMgZnJvbSAnLi4vQWxhcm1zJ1xuXG5jb25zdCBEZXRhaWxzQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIG1hcmdpbi1ib3R0b206IDEwcmVtO1xuICBncmlkLWNvbHVtbjogJHtwcm9wcyA9PiBwcm9wcy5yaWdodCA/IDIgOiAxfTtcbiAgZ3JpZC1yb3c6ICR7cHJvcHMgPT4gcHJvcHMuc3RhcnQgPyAnMSAvIDQnIDogJ2F1dG8nfTtcbmBcblxuY29uc3QgTmFtZUFsYXJtc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDRyZW07XG5gXG5cbmNvbnN0IERldGFpbHNOYW1lID0gc3R5bGVkLmgxYFxuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yLmpjdERhcmtHcmF5fTtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICBtYXgtd2lkdGg6IGF1dG87XG5gXG5jb25zdCBEb3VnaG51dENoYXJ0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbmBcblxuXG5jb25zdCBEZXRhaWxzID0gcHJvcHMgPT4gKFxuICA8RGV0YWlsc0NvbnRhaW5lciByaWdodD17cHJvcHMucmlnaHR9IHN0YXJ0PXtwcm9wcy5zdGFydH0+XG4gICAgPE5hbWVBbGFybXNDb250YWluZXI+XG4gICAgICA8RGV0YWlsc05hbWU+e3Byb3BzLnJlc291cmNlVHlwZX08L0RldGFpbHNOYW1lPlxuICAgICAge1xuICAgICAgICBwcm9wcy5pc1RhYmxlID9cbiAgICAgICAgICA8PjwvPlxuICAgICAgICA6XG4gICAgICAgICAgPD4gICAgICAgIFxuICAgICAgICAgICAgPEFsYXJtcyBhbGFybVR5cGU9eydBbGFybSd9IG9uPXtwcm9wcy5hbGFybU9ufSBvZmY9e3Byb3BzLmFsYXJtT2ZmfSAvPlxuICAgICAgICAgICAgPEFsYXJtcyBhbGFybVR5cGU9eydULVB1bXAnfSBvbj17cHJvcHMudHB1bXBPbn0gb2ZmPXtwcm9wcy50cHVtcE9mZn0gLz5cbiAgICAgICAgICA8Lz5cbiAgICAgIH1cbiAgICA8L05hbWVBbGFybXNDb250YWluZXI+XG4gICAgXG4gICAgPERvdWdobnV0Q2hhcnRDb250YWluZXI+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9Eb3VnaG51dENoYXJ0Q29udGFpbmVyPlxuICA8L0RldGFpbHNDb250YWluZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IERldGFpbHMiLCJpbXBvcnQgeyBEb3VnaG51dCB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMidcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBjb2xvciB9IGZyb20gJy4uLy4uL3B1YmxpYy9zY3JlZW5zaXplcydcblxuXG5jb25zdCBEb3VnaG51dENoYXJ0ID0gcHJvcHMgPT4ge1xuICBcbiAgY29uc3QgZGF0YSA9IHtcbiAgICBkYXRhc2V0czogW3tcbiAgICAgIGRhdGE6IFtwcm9wcy5jdXJyZW50VmFsdWUsIChwcm9wcy50b3RhbFZhbHVlIC0gcHJvcHMuY3VycmVudFZhbHVlKV0sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IChjdHgpID0+IHtcbiAgICAgICAgaWYoY3R4LmRhdGFzZXQuZGF0YVswXSA8IHByb3BzLmFsYXJtT2ZmKXtcbiAgICAgICAgcmV0dXJuIFsgJ2xpZ2h0Z3JlZW4nLCAncmdiYSgwLDAsMCwuMDUpJyBdXG4gICAgICB9IGVsc2UgaWYoY3R4LmRhdGFzZXQuZGF0YVswXSA+IHByb3BzLmFsYXJtT24pe1xuICAgICAgICAgIHJldHVybiBbICdyZWQnLCAncmdiYSgwLDAsMCwuMDUpJyBdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFsgJyNmZmNjMDAnLCAncmdiYSgwLDAsMCwuMDUpJyBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBib3JkZXJXaWR0aDogMFxuICAgIH1dXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxHcmFwaENvbnRhaW5lcj5cbiAgICAgIDxHcmFwaFRpdGxlPntwcm9wcy5uYW1lfTwvR3JhcGhUaXRsZT5cbiAgICAgIDxHcmFwaD5cbiAgICAgICAgPERvdWdobnV0IFxuICAgICAgICAgIGRhdGE9eyBkYXRhIH1cbiAgICAgICAgICB3aWR0aD17IDE1MCB9XG4gICAgICAgICAgaGVpZ2h0PXsgMTUwIH1cbiAgICAgICAgICBvcHRpb25zPXt7IFxuICAgICAgICAgICAgY3V0b3V0UGVyY2VudGFnZTogODAsIFxuICAgICAgICAgICAgcm90YXRpb246ICgtMS4yNSAqIE1hdGguUEkpLFxuICAgICAgICAgICAgY2lyY3VtZmVyZW5jZTogKDEuNSAqIE1hdGguUEkpLFxuICAgICAgICAgICAgdG9vbHRpcHM6IGZhbHNlLFxuICAgICAgICAgICAgaG92ZXI6IGZhbHNlXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvR3JhcGg+XG4gICAgICA8Vm9sdW1lPlxuICAgICAgICA8Q3VycmVudFZvbHVtZT57IHByb3BzLmN1cnJlbnRWYWx1ZSAhPT0gbnVsbCA/IHByb3BzLmN1cnJlbnRWYWx1ZS50b0ZpeGVkKDIpIDogcHJvcHMuY3VycmVudFZhbHVlIH08L0N1cnJlbnRWb2x1bWU+XG4gICAgICAgIDxDdXJyZW50Vm9sdW1lTGFiZWw+e3Byb3BzLnVuaXRPZk1lYXN1cmV9PC9DdXJyZW50Vm9sdW1lTGFiZWw+XG4gICAgICA8L1ZvbHVtZT5cbiAgICA8L0dyYXBoQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERvdWdobnV0Q2hhcnQgICAgXG5cblxuY29uc3QgR3JhcGhDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkOiAyNSUgMWZyIC8gMWZyO1xuICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcbiAgd2lkdGg6IDIwcmVtO1xuICBoZWlnaHQ6IDE1cmVtO1xuYFxuY29uc3QgR3JhcGhUaXRsZSA9IHN0eWxlZC5oMWBcbiAgZ3JpZC1jb2x1bW46IDE7XG4gIGdyaWQtcm93OiAxO1xuICBmb250LXNpemU6IDIuNHJlbTtcbmBcblxuY29uc3QgR3JhcGggPSBzdHlsZWQuZGl2YFxuICBncmlkLWNvbHVtbjogMTtcbiAgZ3JpZC1yb3c6IDI7XG5gXG5cbmNvbnN0IFZvbHVtZSA9IHN0eWxlZC5kaXZgXG4gIGdyaWQtY29sdW1uOiAxO1xuICBncmlkLXJvdzogMjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbmBcblxuY29uc3QgQ3VycmVudFZvbHVtZSA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xuICBjb2xvcjogJHtjb2xvci5qY3REYXJrR3JheX07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuYFxuXG5jb25zdCBDdXJyZW50Vm9sdW1lTGFiZWwgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDEuOHJlbTtcbiAgY29sb3I6ICR7Y29sb3IuamN0RGFya0dyYXl9O1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgbWFyZ2luLWJvdHRvbTogLjFyZW07XG4gIG1hcmdpbi1sZWZ0OiAuMnJlbTtcbmAiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgY29sb3IgfSBmcm9tICcuLi8uLi9wdWJsaWMvc2NyZWVuc2l6ZXMnXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL1NpZGViYXInXG5cblxuY29uc3QgTWFpbkNvbnRhaW5lciA9IHN0eWxlZC5tYWluYFxuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xuYFxuXG5jb25zdCBTaXRlRGV0YWlsc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctbGVmdDogN3JlbTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMHJlbSAxZnI7XG4gIHdpZHRoOiAxMDAlO1xuYFxuXG5jb25zdCBTaXRlTmFtZVRpbWUgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IDE1cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gXG5cbmNvbnN0IFNpdGVOYW1lID0gc3R5bGVkLmgyYFxuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogJHtjb2xvci5qY3REYXJrR3JheX07XG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICBmb250LXNpemU6IDM2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5gXG5cbmNvbnN0IERhdGVUaW1lID0gc3R5bGVkLmgzYFxuICBjb2xvcjogJHtjb2xvci5qY3REYXJrR3JheX07XG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWxlZnQ6IC4yNXJlbTtcbmBcblxuY29uc3QgU2l0ZURldGFpbHMgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG5gXG5cblxuY29uc3QgTGF5b3V0ID0gcHJvcHMgPT4ge1xuICByZXR1cm4oXG4gIDxNYWluQ29udGFpbmVyPlxuICAgIDxTaWRlYmFyIGNvbXBhbnk9e3Byb3BzLmNvbXBhbnl9IHNpdGVzPXtwcm9wcy5zaXRlc30gLz5cbiAgICA8U2l0ZURldGFpbHNDb250YWluZXI+XG4gICAgICA8U2l0ZU5hbWVUaW1lPlxuICAgICAgICA8U2l0ZU5hbWU+e3Byb3BzLnNpdGVuYW1lfTwvU2l0ZU5hbWU+XG4gICAgICAgIDxEYXRlVGltZT57cHJvcHMuZGF0ZX0gLSB7cHJvcHMudGltZX08L0RhdGVUaW1lPlxuICAgICAgPC9TaXRlTmFtZVRpbWU+XG4gICAgICA8U2l0ZURldGFpbHM+XG4gICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgICAgPC9TaXRlRGV0YWlscz5cbiAgICA8L1NpdGVEZXRhaWxzQ29udGFpbmVyPlxuICA8L01haW5Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IGNvbG9yIH0gZnJvbSAnLi4vLi4vcHVibGljL3NjcmVlbnNpemVzJ1xuXG5jb25zdCBTaWRlYmFyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDMwcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yLmpjdERhcmtHcmF5fTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMi41cmVtIDFmcjtcbiAgcG9zaXRpb246IHN0aWNreTtcbmBcblxuY29uc3QgQ29tcGFueUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEyLjVyZW07XG5cbiAgaW1ne1xuICAgIGhlaWdodDogNzUlO1xuICB9XG5gXG5cbmNvbnN0IFNpdGVOYXZDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBcbiAgaDF7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbmBcblxuY29uc3QgU2l0ZUxpbmtzID0gc3R5bGVkLm5hdmBcbiAgdWx7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gIH1cblxuICBsaXtcbiAgICBoZWlnaHQ6IDVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG5cbiAgbGk6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvci5qY3RPcmFuZ2V9O1xuICB9XG5cbiAgYXtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5gXG5cbmNvbnN0IFNpZGViYXIgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuKFxuICAgIDxTaWRlYmFyQ29udGFpbmVyPlxuICAgICAgPENvbXBhbnlDb250YWluZXI+XG4gICAgICAgIDxpbWcgc3JjPXtgLi4vc3RhdGljLyR7cHJvcHMuY29tcGFueX0tbG9nby5wbmdgfSAvPlxuICAgICAgPC9Db21wYW55Q29udGFpbmVyPlxuICAgICAgPFNpdGVOYXZDb250YWluZXI+XG4gICAgICAgIDxoMT5TaXRlczwvaDE+XG4gICAgICAgIDxTaXRlTGlua3M+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge3Byb3BzLnNpdGVzfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvU2l0ZUxpbmtzPlxuICAgICAgPC9TaXRlTmF2Q29udGFpbmVyPlxuICAgIDwvU2lkZWJhckNvbnRhaW5lcj5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXIiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgY29sb3IgfSBmcm9tICcuLi8uLi9wdWJsaWMvc2NyZWVuc2l6ZXMnXG5cbmNvbnN0IERldGFpbHNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbmBcblxuY29uc3QgTmFtZUFsYXJtc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG5gXG5cbmNvbnN0IERldGFpbHNOYW1lID0gc3R5bGVkLmgxYFxuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yLmpjdERhcmtHcmF5fTtcbiAgd2lkdGg6IDEwcmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYFxuXG5jb25zdCBEb3VnaG51dENoYXJ0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiAke3Byb3BzID0+IHByb3BzLmlzVGFibGUgPyBcImNlbnRlclwiIDogXCJmbGV4LXN0YXJ0XCJ9O1xuYFxuXG5cbmNvbnN0IE5ld01vYmlsZURldGFpbHMgPSBwcm9wcyA9PiAoXG4gIDxEZXRhaWxzQ29udGFpbmVyPlxuICAgIDxOYW1lQWxhcm1zQ29udGFpbmVyPlxuICAgICAgPERldGFpbHNOYW1lPntwcm9wcy5yZXNvdXJjZVR5cGV9PC9EZXRhaWxzTmFtZT5cbiAgICA8L05hbWVBbGFybXNDb250YWluZXI+XG4gICAgXG4gICAgPERvdWdobnV0Q2hhcnRDb250YWluZXIgaXNUYWJsZT17cHJvcHMuaXNUYWJsZX0gPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvRG91Z2hudXRDaGFydENvbnRhaW5lcj5cbiAgPC9EZXRhaWxzQ29udGFpbmVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBOZXdNb2JpbGVEZXRhaWxzIiwiaW1wb3J0IHsgRG91Z2hudXQgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInXG5cbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBjb2xvciB9IGZyb20gJy4uLy4uL3B1YmxpYy9zY3JlZW5zaXplcydcblxuXG5jb25zdCBEb3VnaG51dENoYXJ0ID0gcHJvcHMgPT4ge1xuICBjb25zdCBkYXRhID0ge1xuICAgIGRhdGFzZXRzOiBbe1xuICAgICAgZGF0YTogW3Byb3BzLmN1cnJlbnRWYWx1ZSwgKHByb3BzLnRvdGFsVmFsdWUgLSBwcm9wcy5jdXJyZW50VmFsdWUpXSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogKGN0eCkgPT4ge1xuICAgICAgICBpZihjdHguZGF0YXNldC5kYXRhWzBdIDwgcHJvcHMuYWxhcm1PZmYpe1xuICAgICAgICByZXR1cm4gWyAnbGlnaHRncmVlbicsICdyZ2JhKDAsMCwwLC4wNSknIF1cbiAgICAgIH0gZWxzZSBpZihjdHguZGF0YXNldC5kYXRhWzBdID4gcHJvcHMuYWxhcm1Pbil7XG4gICAgICAgICAgcmV0dXJuIFsgJ3JlZCcsICdyZ2JhKDAsMCwwLC4wNSknIF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gWyAnI2ZmY2MwMCcsICdyZ2JhKDAsMCwwLC4wNSknIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGJvcmRlcldpZHRoOiAwXG4gICAgfV1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEdyYXBoQ29udGFpbmVyPlxuICAgICAgPEdyYXBoVGl0bGU+e3Byb3BzLm5hbWV9PC9HcmFwaFRpdGxlPlxuICAgICAgPEdyYXBoPlxuICAgICAgICA8RG91Z2hudXQgXG4gICAgICAgICAgZGF0YT17IGRhdGEgfVxuICAgICAgICAgIHdpZHRoPXsgMTAwIH1cbiAgICAgICAgICBoZWlnaHQ9eyAxMDAgfVxuICAgICAgICAgIG9wdGlvbnM9e3sgXG4gICAgICAgICAgICBjdXRvdXRQZXJjZW50YWdlOiA4MCwgXG4gICAgICAgICAgICByb3RhdGlvbjogKC0xLjI1ICogTWF0aC5QSSksXG4gICAgICAgICAgICBjaXJjdW1mZXJlbmNlOiAoMS41ICogTWF0aC5QSSksXG4gICAgICAgICAgICB0b29sdGlwczogZmFsc2UsXG4gICAgICAgICAgICBob3ZlcjogZmFsc2VcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9HcmFwaD5cbiAgICAgIDxWb2x1bWU+XG4gICAgICAgIDxDdXJyZW50Vm9sdW1lPnsgcHJvcHMuY3VycmVudFZhbHVlICE9PSBudWxsID8gcHJvcHMuY3VycmVudFZhbHVlLnRvRml4ZWQoMikgOiBwcm9wcy5jdXJyZW50VmFsdWUgfTwvQ3VycmVudFZvbHVtZT5cbiAgICAgICAgPEN1cnJlbnRWb2x1bWVMYWJlbD57cHJvcHMudW5pdE9mTWVhc3VyZX08L0N1cnJlbnRWb2x1bWVMYWJlbD5cbiAgICAgIDwvVm9sdW1lPlxuICAgIDwvR3JhcGhDb250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRG91Z2hudXRDaGFydCAgICBcblxuXG5jb25zdCBHcmFwaENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQ6IDIwJSAxZnIgLyAxZnI7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMnJlbTtcbmBcbmNvbnN0IEdyYXBoVGl0bGUgPSBzdHlsZWQuaDFgXG4gIGdyaWQtY29sdW1uOiAxO1xuICBncmlkLXJvdzogMTtcbiAgZm9udC1zaXplOiAycmVtO1xuYFxuXG5jb25zdCBHcmFwaCA9IHN0eWxlZC5kaXZgXG4gIGdyaWQtY29sdW1uOiAxO1xuICBncmlkLXJvdzogMjtcbmBcblxuY29uc3QgVm9sdW1lID0gc3R5bGVkLmRpdmBcbiAgZ3JpZC1jb2x1bW46IDE7XG4gIGdyaWQtcm93OiAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xuYFxuXG5jb25zdCBDdXJyZW50Vm9sdW1lID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGNvbG9yOiAke2NvbG9yLmpjdERhcmtHcmF5fTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5gXG5cbmNvbnN0IEN1cnJlbnRWb2x1bWVMYWJlbCA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBjb2xvcjogJHtjb2xvci5qY3REYXJrR3JheX07XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBtYXJnaW4tYm90dG9tOiAuMXJlbTtcbiAgbWFyZ2luLWxlZnQ6IC4ycmVtO1xuYCIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgU2lkZWJhciBmcm9tICdyZWFjdC1zaWRlYmFyJ1xuaW1wb3J0IHsgY29sb3IgfSBmcm9tICcuLi8uLi9wdWJsaWMvc2NyZWVuc2l6ZXMnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1QQ0FsYXJtTGlzdCBmcm9tICcuLi9NUENBbGFybUxpc3QnXG5cbmNvbnN0IE1vYmlsZU1haW5Db250YWluZXIgPSBzdHlsZWQubWFpbmBcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIGhlaWdodDogMTAwdmg7ICovXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogN3JlbSAxZnI7XG5gXG5cbmNvbnN0IE1vYmlsZUNvbXBhbnlDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA2MCUgMjAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yLmpjdERhcmtHcmF5fTtcbiAgcGxhY2UtaXRlbXM6IHN0cmV0Y2g7XG5gXG5cbmNvbnN0IE1lbnUgPSBzdHlsZWQuZGl2YFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XG4gIGltZ3tcbiAgICB3aWR0aDogMjRweDtcbiAgfVxuYFxuXG5jb25zdCBOYW1lRGF0ZVRpbWVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYFxuXG5jb25zdCBNb2JpbGVTaXRlTmFtZSA9IHN0eWxlZC5oMmBcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAke2NvbG9yLmpjdFdoaXRlfTtcbmBcblxuY29uc3QgRGF0ZVRpbWUgPSBzdHlsZWQuaDNgXG4gIGNvbG9yOiAke2NvbG9yLmpjdFdoaXRlfTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG5gXG5cbmNvbnN0IE1vYmlsZUNhcm91c2VsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogNHJlbTtcbmBcblxuY29uc3QgQ29tcGFueUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEyLjVyZW07XG5cbiAgaW1ne1xuICAgIGhlaWdodDogNzUlO1xuICB9XG5gXG5cbmNvbnN0IFNpdGVOYXZDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBcbiAgaDF7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbmBcblxuY29uc3QgU2l0ZUxpbmtzID0gc3R5bGVkLm5hdmBcbiAgdWx7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gIH1cblxuICBsaXtcbiAgICBoZWlnaHQ6IDVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG5cbiAgbGk6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvci5qY3RPcmFuZ2V9O1xuICB9XG5cbiAgYXtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5gXG5cbmNvbnN0IEFsYXJtVGl0bGUgPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvci5qY3REYXJrR3JheX07XG4gIGhlaWdodDogNHJlbTtcbiAgd2lkdGg6IDEwcmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuYFxuXG5cbmNvbnN0IE1vYmlsZUxheW91dCA9IHByb3BzID0+IHtcbiAgY29uc3QgW2lzU2l0ZU1lbnVPcGVuLCBzZXRJc1NpdGVNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2lzQWxhcm1NZW51T3Blbiwgc2V0SXNBbGFybU1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBcbiAgcmV0dXJuKFxuICAgIDxTaWRlYmFyXG4gICAgICBzaWRlYmFyPXtcbiAgICAgICAgPD5cbiAgICAgICAgICA8Q29tcGFueUNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtgLi4vc3RhdGljLyR7cHJvcHMuY29tcGFueX0tbG9nby5wbmdgfSAvPlxuICAgICAgICAgIDwvQ29tcGFueUNvbnRhaW5lcj5cbiAgICAgICAgICA8U2l0ZU5hdkNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxoMT5TaXRlczwvaDE+XG4gICAgICAgICAgICA8U2l0ZUxpbmtzPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3Byb3BzLnNpdGVzfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9TaXRlTGlua3M+XG4gICAgICAgICAgPC9TaXRlTmF2Q29udGFpbmVyPlxuICAgICAgICA8Lz5cbiAgICAgIH1cbiAgICAgIG9wZW49e2lzU2l0ZU1lbnVPcGVufVxuICAgICAgb25TZXRPcGVuPXtzZXRJc1NpdGVNZW51T3Blbn1cbiAgICAgIHN0eWxlcz17e1xuICAgICAgICBzaWRlYmFyOiB7XG4gICAgICAgICAgd2lkdGg6ICczMHJlbScsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHtjb2xvci5qY3REYXJrR3JheX1gLFxuICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICAgICAgICBncmlkVGVtcGxhdGVSb3dzOiAnMTIuNXJlbSAxZnInXG4gICAgICAgIH0sXG4gICAgICAgIG92ZXJsYXk6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDApJ1xuICAgICAgICB9XG4gICAgICB9fVxuICAgID5cbiAgICAgIDxTaWRlYmFyXG4gICAgICAgIHNpZGViYXI9eyBcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPEFsYXJtVGl0bGU+QWxhcm1zPC9BbGFybVRpdGxlPlxuICAgICAgICAgICAge3Byb3BzLnNpZGViYXJBbGFybX1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgfVxuICAgICAgICBvcGVuPXtpc0FsYXJtTWVudU9wZW59XG4gICAgICAgIG9uU2V0T3Blbj17c2V0SXNBbGFybU1lbnVPcGVufVxuICAgICAgICBwdWxsUmlnaHQ9e3RydWV9XG4gICAgICAgIHN0eWxlcz17e1xuICAgICAgICAgIHNpZGViYXI6IHtcbiAgICAgICAgICAgIHdpZHRoOiAnMzNyZW0nLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBmbGV4RmxvdzogJ2NvbHVtbicsXG4gICAgICAgICAgICBjb2xvcjogYCR7Y29sb3IuamN0RGFya0dyYXl9YCxcbiAgICAgICAgICAgIG1hcmdpblRvcDogJzE5JScsXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogJzNyZW0nXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvdmVybGF5OiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDApJ1xuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPE1vYmlsZU1haW5Db250YWluZXI+XG4gICAgICAgICAgICA8TW9iaWxlQ29tcGFueUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPE1lbnUgb25DbGljaz17KCkgPT4gc2V0SXNTaXRlTWVudU9wZW4odHJ1ZSl9PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPScuLi9zdGF0aWMvbWVudS1pY29uLnN2ZycgLz5cbiAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgICA8TmFtZURhdGVUaW1lQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxNb2JpbGVTaXRlTmFtZT57cHJvcHMuc2l0ZW5hbWV9PC9Nb2JpbGVTaXRlTmFtZT5cbiAgICAgICAgICAgICAgICA8RGF0ZVRpbWU+e3Byb3BzLmRhdGV9IC0ge3Byb3BzLnRpbWV9PC9EYXRlVGltZT5cbiAgICAgICAgICAgICAgPC9OYW1lRGF0ZVRpbWVDb250YWluZXI+XG4gICAgICAgICAgICAgIDxNZW51IG9uQ2xpY2s9eygpID0+IHNldElzQWxhcm1NZW51T3Blbih0cnVlKX0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9Jy4uL3N0YXRpYy9hbGFybS1pY29uLnBuZycgLz5cbiAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgPC9Nb2JpbGVDb21wYW55Q29udGFpbmVyPlxuICAgICAgICAgICAgPE1vYmlsZUNhcm91c2VsQ29udGFpbmVyPlxuICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L01vYmlsZUNhcm91c2VsQ29udGFpbmVyPlxuICAgICAgICA8L01vYmlsZU1haW5Db250YWluZXI+XG4gICAgICA8L1NpZGViYXI+XG4gICAgPC9TaWRlYmFyPlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlTGF5b3V0IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfdXJsPXJlcXVpcmUoXCJ1cmxcIik7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzXCIpO3ZhciBfcm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcm91dGVyXCIpKTt2YXIgX3JvdXRlcjI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpO2Z1bmN0aW9uIGlzTG9jYWwoaHJlZil7dmFyIHVybD0oMCxfdXJsLnBhcnNlKShocmVmLGZhbHNlLHRydWUpO3ZhciBvcmlnaW49KDAsX3VybC5wYXJzZSkoKDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpLGZhbHNlLHRydWUpO3JldHVybiF1cmwuaG9zdHx8dXJsLnByb3RvY29sPT09b3JpZ2luLnByb3RvY29sJiZ1cmwuaG9zdD09PW9yaWdpbi5ob3N0O31mdW5jdGlvbiBtZW1vaXplZEZvcm1hdFVybChmb3JtYXRGdW5jKXt2YXIgbGFzdEhyZWY9bnVsbDt2YXIgbGFzdEFzPW51bGw7dmFyIGxhc3RSZXN1bHQ9bnVsbDtyZXR1cm4oaHJlZixhcyk9PntpZihsYXN0UmVzdWx0JiZocmVmPT09bGFzdEhyZWYmJmFzPT09bGFzdEFzKXtyZXR1cm4gbGFzdFJlc3VsdDt9dmFyIHJlc3VsdD1mb3JtYXRGdW5jKGhyZWYsYXMpO2xhc3RIcmVmPWhyZWY7bGFzdEFzPWFzO2xhc3RSZXN1bHQ9cmVzdWx0O3JldHVybiByZXN1bHQ7fTt9ZnVuY3Rpb24gZm9ybWF0VXJsKHVybCl7cmV0dXJuIHVybCYmdHlwZW9mIHVybD09PSdvYmplY3QnPygwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikodXJsKTp1cmw7fXZhciBvYnNlcnZlcjt2YXIgbGlzdGVuZXJzPW5ldyBNYXAoKTt2YXIgSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP3dpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlcjpudWxsO3ZhciBwcmVmZXRjaGVkPXt9O2Z1bmN0aW9uIGdldE9ic2VydmVyKCl7Ly8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbmlmKG9ic2VydmVyKXtyZXR1cm4gb2JzZXJ2ZXI7fS8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuaWYoIUludGVyc2VjdGlvbk9ic2VydmVyKXtyZXR1cm4gdW5kZWZpbmVkO31yZXR1cm4gb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9PntpZighbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKXtyZXR1cm47fXZhciBjYj1saXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCk7aWYoZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjApe29ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO2xpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KTtjYigpO319KTt9LHtyb290TWFyZ2luOicyMDBweCd9KTt9dmFyIGxpc3RlblRvSW50ZXJzZWN0aW9ucz0oZWwsY2IpPT57dmFyIG9ic2VydmVyPWdldE9ic2VydmVyKCk7aWYoIW9ic2VydmVyKXtyZXR1cm4oKT0+e307fW9ic2VydmVyLm9ic2VydmUoZWwpO2xpc3RlbmVycy5zZXQoZWwsY2IpO3JldHVybigpPT57dHJ5e29ic2VydmVyLnVub2JzZXJ2ZShlbCk7fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcihlcnIpO31saXN0ZW5lcnMuZGVsZXRlKGVsKTt9O307Y2xhc3MgTGluayBleHRlbmRzIF9yZWFjdC5Db21wb25lbnR7Y29uc3RydWN0b3IocHJvcHMpe3N1cGVyKHByb3BzKTt0aGlzLnA9dm9pZCAwO3RoaXMuY2xlYW5VcExpc3RlbmVycz0oKT0+e307dGhpcy5mb3JtYXRVcmxzPW1lbW9pemVkRm9ybWF0VXJsKChocmVmLGFzSHJlZik9PntyZXR1cm57aHJlZjooMCxfcm91dGVyMi5hZGRCYXNlUGF0aCkoZm9ybWF0VXJsKGhyZWYpKSxhczphc0hyZWY/KDAsX3JvdXRlcjIuYWRkQmFzZVBhdGgpKGZvcm1hdFVybChhc0hyZWYpKTphc0hyZWZ9O30pO3RoaXMubGlua0NsaWNrZWQ9ZT0+e3Zhcntub2RlTmFtZSx0YXJnZXR9PWUuY3VycmVudFRhcmdldDtpZihub2RlTmFtZT09PSdBJyYmKHRhcmdldCYmdGFyZ2V0IT09J19zZWxmJ3x8ZS5tZXRhS2V5fHxlLmN0cmxLZXl8fGUuc2hpZnRLZXl8fGUubmF0aXZlRXZlbnQmJmUubmF0aXZlRXZlbnQud2hpY2g9PT0yKSl7Ly8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxucmV0dXJuO312YXJ7aHJlZixhc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTtpZighaXNMb2NhbChocmVmKSl7Ly8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxucmV0dXJuO312YXJ7cGF0aG5hbWV9PXdpbmRvdy5sb2NhdGlvbjtocmVmPSgwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUsaHJlZik7YXM9YXM/KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxhcyk6aHJlZjtlLnByZXZlbnREZWZhdWx0KCk7Ly8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG52YXJ7c2Nyb2xsfT10aGlzLnByb3BzO2lmKHNjcm9sbD09bnVsbCl7c2Nyb2xsPWFzLmluZGV4T2YoJyMnKTwwO30vLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbl9yb3V0ZXIuZGVmYXVsdFt0aGlzLnByb3BzLnJlcGxhY2U/J3JlcGxhY2UnOidwdXNoJ10oaHJlZixhcyx7c2hhbGxvdzp0aGlzLnByb3BzLnNoYWxsb3d9KS50aGVuKHN1Y2Nlc3M9PntpZighc3VjY2VzcylyZXR1cm47aWYoc2Nyb2xsKXt3aW5kb3cuc2Nyb2xsVG8oMCwwKTtkb2N1bWVudC5ib2R5LmZvY3VzKCk7fX0pO307aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHByb3BzLnByZWZldGNoKXtjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO319dGhpcy5wPXByb3BzLnByZWZldGNoIT09ZmFsc2U7fWNvbXBvbmVudFdpbGxVbm1vdW50KCl7dGhpcy5jbGVhblVwTGlzdGVuZXJzKCk7fWdldFBhdGhzKCl7dmFye3BhdGhuYW1lfT13aW5kb3cubG9jYXRpb247dmFye2hyZWY6cGFyc2VkSHJlZixhczpwYXJzZWRBc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTt2YXIgcmVzb2x2ZWRIcmVmPSgwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUscGFyc2VkSHJlZik7cmV0dXJuW3Jlc29sdmVkSHJlZixwYXJzZWRBcz8oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLHBhcnNlZEFzKTpyZXNvbHZlZEhyZWZdO31oYW5kbGVSZWYocmVmKXtpZih0aGlzLnAmJkludGVyc2VjdGlvbk9ic2VydmVyJiZyZWYmJnJlZi50YWdOYW1lKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKTt2YXIgaXNQcmVmZXRjaGVkPXByZWZldGNoZWRbdGhpcy5nZXRQYXRocygpLmpvaW4oLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiclJyldO2lmKCFpc1ByZWZldGNoZWQpe3RoaXMuY2xlYW5VcExpc3RlbmVycz1saXN0ZW5Ub0ludGVyc2VjdGlvbnMocmVmLCgpPT57dGhpcy5wcmVmZXRjaCgpO30pO319fS8vIFRoZSBmdW5jdGlvbiBpcyBtZW1vaXplZCBzbyB0aGF0IG5vIGV4dHJhIGxpZmVjeWNsZXMgYXJlIG5lZWRlZFxuLy8gYXMgcGVyIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sXG5wcmVmZXRjaChvcHRpb25zKXtpZighdGhpcy5wfHx0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpcmV0dXJuOy8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbnZhciBwYXRocz10aGlzLmdldFBhdGhzKCk7Ly8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4vLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbl9yb3V0ZXIuZGVmYXVsdC5wcmVmZXRjaChwYXRoc1svKiBocmVmICovMF0scGF0aHNbLyogYXNQYXRoICovMV0sb3B0aW9ucykuY2F0Y2goZXJyPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpey8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbnRocm93IGVycjt9fSk7cHJlZmV0Y2hlZFtwYXRocy5qb2luKC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4nJScpXT10cnVlO31yZW5kZXIoKXt2YXJ7Y2hpbGRyZW59PXRoaXMucHJvcHM7dmFye2hyZWYsYXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7Ly8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG5pZih0eXBlb2YgY2hpbGRyZW49PT0nc3RyaW5nJyl7Y2hpbGRyZW49LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsbnVsbCxjaGlsZHJlbik7fS8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxudmFyIGNoaWxkPV9yZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTt2YXIgcHJvcHM9e3JlZjplbD0+e3RoaXMuaGFuZGxlUmVmKGVsKTtpZihjaGlsZCYmdHlwZW9mIGNoaWxkPT09J29iamVjdCcmJmNoaWxkLnJlZil7aWYodHlwZW9mIGNoaWxkLnJlZj09PSdmdW5jdGlvbicpY2hpbGQucmVmKGVsKTtlbHNlIGlmKHR5cGVvZiBjaGlsZC5yZWY9PT0nb2JqZWN0Jyl7Y2hpbGQucmVmLmN1cnJlbnQ9ZWw7fX19LG9uTW91c2VFbnRlcjplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXI9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7fXRoaXMucHJlZmV0Y2goe3ByaW9yaXR5OnRydWV9KTt9LG9uQ2xpY2s6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25DbGljaz09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uQ2xpY2soZSk7fWlmKCFlLmRlZmF1bHRQcmV2ZW50ZWQpe3RoaXMubGlua0NsaWNrZWQoZSk7fX19Oy8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG5pZih0aGlzLnByb3BzLnBhc3NIcmVmfHxjaGlsZC50eXBlPT09J2EnJiYhKCdocmVmJ2luIGNoaWxkLnByb3BzKSl7cHJvcHMuaHJlZj1hc3x8aHJlZjt9Ly8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5LlxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCl7dmFyIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0PXJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O2lmKHByb3BzLmhyZWYmJnR5cGVvZiBfX05FWFRfREFUQV9fIT09J3VuZGVmaW5lZCcmJl9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCl7cHJvcHMuaHJlZj1yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChwcm9wcy5ocmVmKTt9fXJldHVybiBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQscHJvcHMpO319aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXt2YXIgd2Fybj0oMCxfdXRpbHMuZXhlY09uY2UpKGNvbnNvbGUuZXJyb3IpOy8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxudmFyIFByb3BUeXBlcz1yZXF1aXJlKCdwcm9wLXR5cGVzJyk7dmFyIGV4YWN0PXJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKTsvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG5MaW5rLnByb3BUeXBlcz1leGFjdCh7aHJlZjpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLGFzOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsUHJvcFR5cGVzLm9iamVjdF0pLHByZWZldGNoOlByb3BUeXBlcy5ib29sLHJlcGxhY2U6UHJvcFR5cGVzLmJvb2wsc2hhbGxvdzpQcm9wVHlwZXMuYm9vbCxwYXNzSHJlZjpQcm9wVHlwZXMuYm9vbCxzY3JvbGw6UHJvcFR5cGVzLmJvb2wsY2hpbGRyZW46UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsKHByb3BzLHByb3BOYW1lKT0+e3ZhciB2YWx1ZT1wcm9wc1twcm9wTmFtZV07aWYodHlwZW9mIHZhbHVlPT09J3N0cmluZycpe3dhcm4oXCJXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+XCIpO31yZXR1cm4gbnVsbDt9XSkuaXNSZXF1aXJlZH0pO312YXIgX2RlZmF1bHQ9TGluaztleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlUm91dGVyPXVzZVJvdXRlcjtleHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZT1tYWtlUHVibGljUm91dGVySW5zdGFuY2U7ZXhwb3J0cy5jcmVhdGVSb3V0ZXI9ZXhwb3J0cy53aXRoUm91dGVyPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKSk7ZXhwb3J0cy5Sb3V0ZXI9X3JvdXRlcjIuZGVmYXVsdDtleHBvcnRzLk5leHRSb3V0ZXI9X3JvdXRlcjIuTmV4dFJvdXRlcjt2YXIgX3JvdXRlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dFwiKTt2YXIgX3dpdGhSb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7ZXhwb3J0cy53aXRoUm91dGVyPV93aXRoUm91dGVyLmRlZmF1bHQ7LyogZ2xvYmFsIHdpbmRvdyAqL3ZhciBzaW5nbGV0b25Sb3V0ZXI9e3JvdXRlcjpudWxsLC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG5yZWFkeUNhbGxiYWNrczpbXSxyZWFkeShjYil7aWYodGhpcy5yb3V0ZXIpcmV0dXJuIGNiKCk7aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXt0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO319fTsvLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG52YXIgdXJsUHJvcGVydHlGaWVsZHM9WydwYXRobmFtZScsJ3JvdXRlJywncXVlcnknLCdhc1BhdGgnLCdjb21wb25lbnRzJywnaXNGYWxsYmFjaycsJ2Jhc2VQYXRoJ107dmFyIHJvdXRlckV2ZW50cz1bJ3JvdXRlQ2hhbmdlU3RhcnQnLCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywncm91dGVDaGFuZ2VDb21wbGV0ZScsJ3JvdXRlQ2hhbmdlRXJyb3InLCdoYXNoQ2hhbmdlU3RhcnQnLCdoYXNoQ2hhbmdlQ29tcGxldGUnXTt2YXIgY29yZU1ldGhvZEZpZWxkcz1bJ3B1c2gnLCdyZXBsYWNlJywncmVsb2FkJywnYmFjaycsJ3ByZWZldGNoJywnYmVmb3JlUG9wU3RhdGUnXTsvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCdldmVudHMnLHtnZXQoKXtyZXR1cm4gX3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7fX0pO3VybFByb3BlcnR5RmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXt2YXIgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdO319KTt9KTtjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuO3NpbmdsZXRvblJvdXRlcltmaWVsZF09ZnVuY3Rpb24oKXt2YXIgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3VtZW50cyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LGZ1bmN0aW9uKCl7dmFyIGV2ZW50RmllbGQ9XCJvblwiK2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2V2ZW50LnN1YnN0cmluZygxKTt2YXIgX3NpbmdsZXRvblJvdXRlcj1zaW5nbGV0b25Sb3V0ZXI7aWYoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSl7dHJ5e19zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJndW1lbnRzKTt9Y2F0Y2goZXJyKXsvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuY29uc29sZS5lcnJvcihcIkVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiBcIitldmVudEZpZWxkKTsvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuY29uc29sZS5lcnJvcihlcnIubWVzc2FnZStcIlxcblwiK2Vyci5zdGFjayk7fX19KTt9KTt9KTtmdW5jdGlvbiBnZXRSb3V0ZXIoKXtpZighc2luZ2xldG9uUm91dGVyLnJvdXRlcil7dmFyIG1lc3NhZ2U9J05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nKydZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG52YXIgY3JlYXRlUm91dGVyPWZ1bmN0aW9uIGNyZWF0ZVJvdXRlcigpe2Zvcih2YXIgX2xlbj1hcmd1bWVudHMubGVuZ3RoLGFyZ3M9bmV3IEFycmF5KF9sZW4pLF9rZXk9MDtfa2V5PF9sZW47X2tleSsrKXthcmdzW19rZXldPWFyZ3VtZW50c1tfa2V5XTt9c2luZ2xldG9uUm91dGVyLnJvdXRlcj1uZXcgX3JvdXRlcjIuZGVmYXVsdCguLi5hcmdzKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaChjYj0+Y2IoKSk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzPVtdO3JldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO307Ly8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0cy5jcmVhdGVSb3V0ZXI9Y3JlYXRlUm91dGVyO2Z1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpe3ZhciBfcm91dGVyPXJvdXRlcjt2YXIgaW5zdGFuY2U9e307Zm9yKHZhciBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7aWYodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldPT09J29iamVjdCcpe2luc3RhbmNlW3Byb3BlcnR5XT1PYmplY3QuYXNzaWduKHt9LF9yb3V0ZXJbcHJvcGVydHldKTsvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuY29udGludWU7fWluc3RhbmNlW3Byb3BlcnR5XT1fcm91dGVyW3Byb3BlcnR5XTt9Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuaW5zdGFuY2UuZXZlbnRzPV9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+e2luc3RhbmNlW2ZpZWxkXT1mdW5jdGlvbigpe3JldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmd1bWVudHMpO307fSk7cmV0dXJuIGluc3RhbmNlO30iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXdpdGhSb3V0ZXI7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4vcm91dGVyXCIpO2Z1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpe2Z1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCxPYmplY3QuYXNzaWduKHtyb3V0ZXI6KDAsX3JvdXRlci51c2VSb3V0ZXIpKCl9LHByb3BzKSk7fVdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG47V2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt2YXIgbmFtZT1Db21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9zZWRDb21wb25lbnQubmFtZXx8J1Vua25vd24nO1dpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lPVwid2l0aFJvdXRlcihcIituYW1lK1wiKVwiO31yZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7fSIsIlwidXNlIHN0cmljdFwiO1xuLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBtaXR0KCkge1xuICAgIGNvbnN0IGFsbCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb24odHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgKGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpO1xuICAgICAgICB9LFxuICAgICAgICBvZmYodHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgICAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVtaXQodHlwZSwgLi4uZXZ0cykge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgKGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKC4uLmV2dHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IG1pdHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbmNvbnN0IG1pdHRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgaXNfZHluYW1pY18xID0gcmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTtcbmNvbnN0IHJvdXRlX21hdGNoZXJfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7XG5jb25zdCByb3V0ZV9yZWdleF8xID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5jb25zdCBiYXNlUGF0aCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggfHwgJyc7XG5mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgIT09IDAgPyBiYXNlUGF0aCArIHBhdGggOiBwYXRoO1xufVxuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpID09PSAwXG4gICAgICAgID8gcGF0aC5zdWJzdHIoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbiAgICAgICAgOiBwYXRoO1xufVxuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZnVuY3Rpb24gdG9Sb3V0ZShwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLyc7XG59XG5jb25zdCBwcmVwYXJlUm91dGUgPSAocGF0aCkgPT4gdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpO1xuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIGlzU2VydmVyUmVuZGVyLCBjYikge1xuICAgIGxldCBhdHRlbXB0cyA9IGlzU2VydmVyUmVuZGVyID8gMyA6IDE7XG4gICAgZnVuY3Rpb24gZ2V0UmVzcG9uc2UoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaCh1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgICAgYC9fbmV4dC9kYXRhLyR7X19ORVhUX0RBVEFfXy5idWlsZElkfSR7ZGVsQmFzZVBhdGgocGF0aG5hbWUpfS5qc29uYCksXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSksIHtcbiAgICAgICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgaWYgKC0tYXR0ZW1wdHMgPiAwICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhO1xuICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBlcnIuY29kZSA9ICdQQUdFX0xPQURfRVJST1InO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUsIHF1ZXJ5LCBhcywgeyBpbml0aWFsUHJvcHMsIHBhZ2VMb2FkZXIsIEFwcCwgd3JhcEFwcCwgQ29tcG9uZW50LCBlcnIsIHN1YnNjcmlwdGlvbiwgaXNGYWxsYmFjaywgfSkge1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHt9O1xuICAgICAgICB0aGlzLm9uUG9wU3RhdGUgPSAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlLnN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAgICAgICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAgICAgICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgICAgICAgICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAgICAgICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAgICAgICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsIHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksIHV0aWxzXzEuZ2V0VVJMKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgICAgICAgICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgICAgICAgICBpZiAoZS5zdGF0ZSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuaXNTc3IgJiZcbiAgICAgICAgICAgICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgICAgICAgICAgIHVybF8xLnBhcnNlKGUuc3RhdGUudXJsKS5wYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAgICAgICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgICAgICAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IGUuc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgYXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignYHBvcHN0YXRlYCBldmVudCB0cmlnZ2VyZWQgYnV0IGBldmVudC5zdGF0ZWAgZGlkIG5vdCBoYXZlIGB1cmxgIG9yIGBhc2AgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9nZXRTdGF0aWNEYXRhID0gKGFzUGF0aCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUodXJsXzEucGFyc2UoYXNQYXRoKS5wYXRobmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgICAgICAgICAgICA/IFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1twYXRobmFtZV0pXG4gICAgICAgICAgICAgICAgOiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBudWxsLCB0aGlzLmlzU3NyLCBkYXRhID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldFNlcnZlckRhdGEgPSAoYXNQYXRoKSA9PiB7XG4gICAgICAgICAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHVybF8xLnBhcnNlKGFzUGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXRobmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIHRoaXMuaXNTc3IpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0ge307XG4gICAgICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAgICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgICAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH07XG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50cztcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlcjtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgICAgIHRoaXMuYXNQYXRoID1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgICAgIGlzX2R5bmFtaWNfMS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhcztcbiAgICAgICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgICAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcDtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgICAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICB0aGlzLmlzU3NyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFjaztcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgICAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsIHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksIGFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICAgIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O1xuICAgICAgICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZShyb3V0ZSwgbW9kKSB7XG4gICAgICAgIGNvbnN0IENvbXBvbmVudCA9IG1vZC5kZWZhdWx0IHx8IG1vZDtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRhdGEpLCB7IENvbXBvbmVudCwgX19OX1NTRzogbW9kLl9fTl9TU0csIF9fTl9TU1A6IG1vZC5fX05fU1NQIH0pO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YTtcbiAgICAgICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICAgKi9cbiAgICBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAgICovXG4gICAgcHVzaCh1cmwsIGFzID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICAgKi9cbiAgICByZXBsYWNlKHVybCwgYXMgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBjaGFuZ2UobWV0aG9kLCBfdXJsLCBfYXMsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgICAgIGlmICh1dGlsc18xLlNUKSB7XG4gICAgICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgICAgICAgICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICAgICAgICAgIGxldCB1cmwgPSB0eXBlb2YgX3VybCA9PT0gJ29iamVjdCcgPyB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKF91cmwpIDogX3VybDtcbiAgICAgICAgICAgIGxldCBhcyA9IHR5cGVvZiBfYXMgPT09ICdvYmplY3QnID8gdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbihfYXMpIDogX2FzO1xuICAgICAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKTtcbiAgICAgICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYXMpO1xuICAgICAgICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAgICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0O1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgICAgICAgICBpZiAoX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKGFzKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAgICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4gICAgICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAgICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShhcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcyk7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSwgcHJvdG9jb2wgfSA9IHVybF8xLnBhcnNlKHVybCwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAgICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoYXMpKSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBpZiAoaXNfZHluYW1pY18xLmlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHVybF8xLnBhcnNlKGFzKTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gcm91dGVfcmVnZXhfMS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gcm91dGVfbWF0Y2hlcl8xLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIocGFyYW0gPT4gIXF1ZXJ5W3BhcmFtXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKTtcbiAgICAgICAgICAgIC8vIElmIHNoYWxsb3cgaXMgdHJ1ZSBhbmQgdGhlIHJvdXRlIGV4aXN0cyBpbiB0aGUgcm91dGVyIGNhY2hlIHdlIHJldXNlIHRoZSBwcmV2aW91cyByZXN1bHRcbiAgICAgICAgICAgIHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93KS50aGVuKHJvdXRlSW5mbyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFwcENvbXAgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IHV0aWxzXzEuZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93ID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSBzaGFsbG93IHJvdXRlIHRyYW5zaXRpb24gcG9zc2libGVcbiAgICAgICAgLy8gSWYgdGhlIHJvdXRlIGlzIGFscmVhZHkgcmVuZGVyZWQgb24gdGhlIHNjcmVlbi5cbiAgICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoZXJyLCBsb2FkRXJyb3JGYWlsKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVyci5jb2RlID09PSAnUEFHRV9MT0FEX0VSUk9SJyB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvLCB3ZSBuZWVkIHRvIG1hcmsgaXQgYXMgYSBjYW5jZWxsZWQgZXJyb3IgYW5kIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gcmVzO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocHJvcHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBnaXBFcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGNhY2hlZFJvdXRlSW5mbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKHJlcyA9PiByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgICB9KSwgcmVqZWN0KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXREYXRhKCgpID0+IF9fTl9TU0dcbiAgICAgICAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoYXMpXG4gICAgICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShhcylcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIFxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgfSkpLnRoZW4ocHJvcHMgPT4ge1xuICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKTtcbiAgICB9XG4gICAgc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzO1xuICAgICAgICB0aGlzLm5vdGlmeShkYXRhKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgICAqL1xuICAgIGJlZm9yZVBvcFN0YXRlKGNiKSB7XG4gICAgICAgIHRoaXMuX2JwcyA9IGNiO1xuICAgIH1cbiAgICBvbmx5QUhhc2hDaGFuZ2UoYXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFzUGF0aClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpO1xuICAgICAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICAgICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgICAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgICAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgICAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgICAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaDtcbiAgICB9XG4gICAgc2Nyb2xsVG9IYXNoKGFzKSB7XG4gICAgICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgICAqL1xuICAgIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHByb3RvY29sIH0gPSB1cmxfMS5wYXJzZSh1cmwpO1xuICAgICAgICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpO1xuICAgICAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgICAgICAgICBdKS50aGVuKCgpID0+IHJlc29sdmUoKSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJvdXRlID0gZGVsQmFzZVBhdGgocm91dGUpO1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO1xuICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7XG4gICAgICAgICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0O1xuICAgIH1cbiAgICBfZ2V0RGF0YShmbikge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2xjID0gY2FuY2VsO1xuICAgICAgICByZXR1cm4gZm4oKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddO1xuICAgICAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiB1dGlsc18xLmxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLCB7XG4gICAgICAgICAgICBBcHBUcmVlLFxuICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgICAgICAgY3R4LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWJvcnRDb21wb25lbnRMb2FkKGFzKSB7XG4gICAgICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyk7XG4gICAgICAgICAgICBlLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlLCBhcyk7XG4gICAgICAgICAgICB0aGlzLmNsYygpO1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5vdGlmeShkYXRhKSB7XG4gICAgICAgIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFJvdXRlcjtcblJvdXRlci5ldmVudHMgPSBtaXR0XzEuZGVmYXVsdCgpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS87XG5mdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZSkge1xuICAgIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpO1xufVxuZXhwb3J0cy5pc0R5bmFtaWNSb3V0ZSA9IGlzRHluYW1pY1JvdXRlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkge1xuICAgIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleDtcbiAgICByZXR1cm4gKHBhdGhuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVjb2RlID0gKHBhcmFtKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKTtcbiAgICAgICAgICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJztcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXTtcbiAgICAgICAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXTtcbiAgICAgICAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcChlbnRyeSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgICAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGRlY29kZShtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfTtcbn1cbmV4cG9ydHMuZ2V0Um91dGVNYXRjaGVyID0gZ2V0Um91dGVNYXRjaGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKTtcbn1cbmZ1bmN0aW9uIGdldFJvdXRlUmVnZXgobm9ybWFsaXplZFJvdXRlKSB7XG4gICAgLy8gRXNjYXBlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgY291bGQgYmUgY29uc2lkZXJlZCBSZWdFeFxuICAgIGNvbnN0IGVzY2FwZWRSb3V0ZSA9IGVzY2FwZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJyk7XG4gICAgY29uc3QgZ3JvdXBzID0ge307XG4gICAgbGV0IGdyb3VwSW5kZXggPSAxO1xuICAgIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csIChfLCAkMSkgPT4ge1xuICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpO1xuICAgICAgICBncm91cHNbJDFcbiAgICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIF0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQ6IGlzQ2F0Y2hBbGwgfTtcbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGwgPyAnLyguKz8pJyA6ICcvKFteL10rPyknO1xuICAgIH0pO1xuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZTtcbiAgICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csIChfLCAkMSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKTtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9ICQxXG4gICAgICAgICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJyk7XG4gICAgICAgICAgICByZXR1cm4gaXNDYXRjaEFsbFxuICAgICAgICAgICAgICAgID8gYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9Pi4rPylgXG4gICAgICAgICAgICAgICAgOiBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+W14vXSs/KWA7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7IHJlOiBuZXcgUmVnRXhwKCdeJyArIHBhcmFtZXRlcml6ZWRSb3V0ZSArICcoPzovKT8kJywgJ2knKSwgZ3JvdXBzIH0sIChuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZVxuICAgICAgICA/IHtcbiAgICAgICAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICAgICAgfVxuICAgICAgICA6IHt9KSk7XG59XG5leHBvcnRzLmdldFJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCJ1cmxcIik7XG4vKipcbiAqIFV0aWxzXG4gKi9cbmZ1bmN0aW9uIGV4ZWNPbmNlKGZuKSB7XG4gICAgbGV0IHVzZWQgPSBmYWxzZTtcbiAgICBsZXQgcmVzdWx0O1xuICAgIHJldHVybiAoKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgaWYgKCF1c2VkKSB7XG4gICAgICAgICAgICB1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG59XG5leHBvcnRzLmV4ZWNPbmNlID0gZXhlY09uY2U7XG5mdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWA7XG59XG5leHBvcnRzLmdldExvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW47XG5mdW5jdGlvbiBnZXRVUkwoKSB7XG4gICAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk7XG59XG5leHBvcnRzLmdldFVSTCA9IGdldFVSTDtcbmZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCkge1xuICAgIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgICAgICA/IENvbXBvbmVudFxuICAgICAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG59XG5leHBvcnRzLmdldERpc3BsYXlOYW1lID0gZ2V0RGlzcGxheU5hbWU7XG5mdW5jdGlvbiBpc1Jlc1NlbnQocmVzKSB7XG4gICAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnQ7XG59XG5leHBvcnRzLmlzUmVzU2VudCA9IGlzUmVzU2VudDtcbmFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLCBjdHgpIHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKChfYSA9IEFwcC5wcm90b3R5cGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmA7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICAgIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpO1xuICAgIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgICAgIHJldHVybiBwcm9wcztcbiAgICB9XG4gICAgaWYgKCFwcm9wcykge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmA7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtnZXREaXNwbGF5TmFtZShBcHApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcHM7XG59XG5leHBvcnRzLmxvYWRHZXRJbml0aWFsUHJvcHMgPSBsb2FkR2V0SW5pdGlhbFByb3BzO1xuZXhwb3J0cy51cmxPYmplY3RLZXlzID0gW1xuICAgICdhdXRoJyxcbiAgICAnaGFzaCcsXG4gICAgJ2hvc3QnLFxuICAgICdob3N0bmFtZScsXG4gICAgJ2hyZWYnLFxuICAgICdwYXRoJyxcbiAgICAncGF0aG5hbWUnLFxuICAgICdwb3J0JyxcbiAgICAncHJvdG9jb2wnLFxuICAgICdxdWVyeScsXG4gICAgJ3NlYXJjaCcsXG4gICAgJ3NsYXNoZXMnLFxuXTtcbmZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCwgb3B0aW9ucykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXhwb3J0cy51cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1cmxfMS5mb3JtYXQodXJsLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuZm9ybWF0V2l0aFZhbGlkYXRpb24gPSBmb3JtYXRXaXRoVmFsaWRhdGlvbjtcbmV4cG9ydHMuU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnO1xuZXhwb3J0cy5TVCA9IGV4cG9ydHMuU1AgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IEJyb3dzZXJWaWV3LCBNb2JpbGVWaWV3IH0gZnJvbSAncmVhY3QtZGV2aWNlLWRldGVjdCdcblxuaW1wb3J0IEJyb3dzZXJMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9icm93c2VyL0xheW91dCdcbmltcG9ydCBCcm93c2VyRGV0YWlscyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Jyb3dzZXIvRGV0YWlscydcbmltcG9ydCBCcm93c2VyR2F1Z2VDaGFydCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Jyb3dzZXIvR2F1Z2VDaGFydCdcblxuaW1wb3J0IE1vYmlsZUxheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL21vYmlsZS9MYXlvdXQnXG5pbXBvcnQgTW9iaWxlRGV0YWlscyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL21vYmlsZS9EZXRhaWxzJ1xuaW1wb3J0IE1vYmlsZUdhdWdlQ2hhcnQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9tb2JpbGUvR2F1Z2VDaGFydCdcbmltcG9ydCBTaWRlYmFyQWxhcm0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9TaWRlYmFyQWxhcm0nXG5cblxuY29uc3QgVW5pdmVyc2l0eSA9ICh7IGRhdGEsIHNpdGVzIH0pID0+IChcbiAgPD5cbiAgPEJyb3dzZXJWaWV3PlxuICAgIDxCcm93c2VyTGF5b3V0IFxuICAgICAgY29tcGFueT0nbWFtbW90aCdcbiAgICAgIHNpdGVzPXsgc2l0ZXMubWFwKChzaXRlLCBpKSA9PiA8bGkga2V5PXtpfT48TGluayBocmVmPXtgLi8ke3NpdGUuQkFUVEVSWS50b0xvd2VyQ2FzZSgpfWB9PjxhPntzaXRlLkJBVFRFUll9PC9hPjwvTGluaz48L2xpPikgfSBcbiAgICAgIHNpdGVuYW1lPXtcIlVuaXZlcnNpdHlcIn0gXG4gICAgICBkYXRlPXtkYXRhWzBdLm1EYXRlfSBcbiAgICAgIHRpbWU9e2RhdGFbMF0ubVRpbWV9XG4gICAgPlxuICAgICAgPEJyb3dzZXJEZXRhaWxzXG4gICAgICAgIHJlc291cmNlVHlwZT0nV2F0ZXInXG4gICAgICAgIG5hbWU9e2RhdGFbMF0uUzF9IFxuICAgICAgICB1bml0T2ZNZWFzdXJlPXtkYXRhWzBdLlMyLnRvTG93ZXJDYXNlKCl9XG4gICAgICAgIGN1cnJlbnRWYWx1ZT17ZGF0YVswXS5WMX1cbiAgICAgICAgdG90YWxWYWx1ZT17MTZ9XG4gICAgICAgIHRwdW1wT249e2RhdGFbMF0uVjN9XG4gICAgICAgIHRwdW1wT2ZmPXtkYXRhWzBdLlY0fVxuICAgICAgICBhbGFybU9uPXtkYXRhWzBdLlY1fVxuICAgICAgICBhbGFybU9mZj17ZGF0YVswXS5WNn1cbiAgICAgID5cbiAgICAgICAgPEJyb3dzZXJHYXVnZUNoYXJ0IG5hbWU9e2RhdGFbMF0uUzF9IGN1cnJlbnRWYWx1ZT17ZGF0YVswXS5WMX0gdG90YWxWYWx1ZT17MTZ9IHVuaXRPZk1lYXN1cmU9e2RhdGFbMF0uUzIudG9Mb3dlckNhc2UoKX0gLz5cbiAgICAgICAgPEJyb3dzZXJHYXVnZUNoYXJ0IG5hbWU9e2RhdGFbMF0uUzN9IGN1cnJlbnRWYWx1ZT17ZGF0YVswXS5WMn0gdG90YWxWYWx1ZT17MTZ9IHVuaXRPZk1lYXN1cmU9e2RhdGFbMF0uUzQudG9Mb3dlckNhc2UoKX0gLz5cbiAgICAgIDwvQnJvd3NlckRldGFpbHM+XG4gICAgPC9Ccm93c2VyTGF5b3V0PlxuICA8L0Jyb3dzZXJWaWV3PlxuICBcbiAgPE1vYmlsZVZpZXc+XG4gICAgPE1vYmlsZUxheW91dCBcbiAgICAgIGNvbXBhbnk9J21hbW1vdGgnXG4gICAgICBzaXRlcz17IHNpdGVzLm1hcCgoc2l0ZSwgaSkgPT4gPGxpIGtleT17aX0+PExpbmsgaHJlZj17YC4vJHtzaXRlLkJBVFRFUlkudG9Mb3dlckNhc2UoKX1gfT48YT57c2l0ZS5CQVRURVJZfTwvYT48L0xpbms+PC9saT4pIH0gXG4gICAgICBzaXRlbmFtZT17XCJVbml2ZXJzaXR5XCJ9IFxuICAgICAgZGF0ZT17ZGF0YVswXS5tRGF0ZX0gXG4gICAgICB0aW1lPXtkYXRhWzBdLm1UaW1lfVxuICAgICAgc2lkZWJhckFsYXJtPXs8U2lkZWJhckFsYXJtIGFsYXJtT249e2RhdGFbMF0uVjV9IGFsYXJtT2ZmPXtkYXRhWzBdLlY2fSB0cHVtcE9uPXtkYXRhWzBdLlYzfSB0cHVtcE9mZj17ZGF0YVswXS5WNH0vPn1cbiAgICA+XG4gICAgICA8TW9iaWxlRGV0YWlsc1xuICAgICAgICByZXNvdXJjZVR5cGU9J1dhdGVyJ1xuICAgICAgICBuYW1lPXtkYXRhWzBdLlMxfSBcbiAgICAgICAgdW5pdE9mTWVhc3VyZT17ZGF0YVswXS5TMi50b0xvd2VyQ2FzZSgpfVxuICAgICAgICBjdXJyZW50VmFsdWU9e2RhdGFbMF0uVjF9XG4gICAgICAgIHRvdGFsVmFsdWU9ezE2fVxuICAgICAgPlxuICAgICAgICA8TW9iaWxlR2F1Z2VDaGFydCBuYW1lPXtkYXRhWzBdLlMxfSBjdXJyZW50VmFsdWU9e2RhdGFbMF0uVjF9IHRvdGFsVmFsdWU9ezE2fSB1bml0T2ZNZWFzdXJlPXtkYXRhWzBdLlMyLnRvTG93ZXJDYXNlKCl9IC8+XG4gICAgICAgIDxNb2JpbGVHYXVnZUNoYXJ0IG5hbWU9e2RhdGFbMF0uUzN9IGN1cnJlbnRWYWx1ZT17ZGF0YVswXS5WMn0gdG90YWxWYWx1ZT17MTZ9IHVuaXRPZk1lYXN1cmU9e2RhdGFbMF0uUzQudG9Mb3dlckNhc2UoKX0gLz5cbiAgICAgIDwvTW9iaWxlRGV0YWlscz5cbiAgICA8L01vYmlsZUxheW91dD5cbiAgPC9Nb2JpbGVWaWV3PlxuICA8Lz5cbilcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjdHgpe1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2pjdC1zeXN0ZW1zLmNvbS9hcGkvbWFtbW90aC91bml2ZXJzaXR5JylcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgY29uc3QgcmVzMSA9IGF3YWl0IGZldGNoKCdodHRwOi8vamN0LXN5c3RlbXMuY29tL2FwaS9tYW1tb3RoJylcbiAgY29uc3Qgc2l0ZXMgPSBhd2FpdCByZXMxLmpzb24oKTtcbiAgICBcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBkYXRhLCBzaXRlcyB9XG4gIH1cbn0gXG5cblxuZXhwb3J0IGRlZmF1bHQgVW5pdmVyc2l0eSIsImNvbnN0IGNvbG9yID0ge1xuICBqY3RPcmFuZ2U6ICcjZmY3ZTI2JyxcbiAgamN0V2hpdGU6ICcjZmNmY2ZjJyxcbiAgamN0RGFya0dyYXk6ICcjMjkyOTI5JyxcbiAgamN0TGlnaHRHcmF5OiAnI2EyYTJhMidcbn1cblxuY29uc3Qgc2l6ZSA9IHtcbiAgbW9iaWxlUzogJzMyMHB4JyxcbiAgbW9iaWxlTTogJzM3NXB4JyxcbiAgbW9iaWxlTDogJzQyNXB4JyxcbiAgdGFibGV0UDogJzYwMHB4JyxcbiAgdGFibGV0TDogJzkwMHB4JyxcbiAgbGFwdG9wOiAnMTAyNHB4JyxcbiAgbGFwdG9wTTogJzEyMDBweCcsXG4gIGxhcHRvcEw6ICcxNDQwcHgnLFxuICBkZXNrdG9wOiAnMjU2MHB4J1xufVxuXG5jb25zdCBzdGFuZGFyZCA9IHtcbiAgbW9iaWxlUzogYG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3NpemUubW9iaWxlU30pIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxKWAsXG4gIG1vYmlsZU06IGBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtzaXplLm1vYmlsZU19KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMSlgLFxuICBtb2JpbGVMOiBgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7c2l6ZS5tb2JpbGVMfSkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEpYCxcbiAgdGFibGV0UDogYG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3NpemUudGFibGV0UH0pIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxKWAsXG4gIHRhYmxldEw6IGBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtzaXplLnRhYmxldEx9KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMSlgLFxuICBsYXB0b3A6IGBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtzaXplLmxhcHRvcH0pIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxKWAsXG4gIGxhcHRvcE06IGBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtzaXplLmxhcHRvcE19KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMSlgLFxuICBsYXB0b3BMOiBgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7c2l6ZS5sYXB0b3BMfSkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEpYCxcbiAgZGVza3RvcDogYG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3NpemUuZGVza3RvcH0pIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxKWAsXG59O1xuXG5jb25zdCByZXRpbmEgPSB7XG4gIG1vYmlsZTogYG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke3NpemUubW9iaWxlTH0pIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKWAsXG4gIG1vYmlsZVM6IGBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtzaXplLm1vYmlsZVN9KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilgLFxuICBtb2JpbGVNOiBgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7c2l6ZS5tb2JpbGVNfSkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpYCxcbiAgbW9iaWxlTDogYG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3NpemUubW9iaWxlTH0pIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKWAsXG4gIHRhYmxldDogYG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3NpemUudGFibGV0fSkgYW5kIChtYXgtd2lkdGg6ICR7c2l6ZS5sYXB0b3B9KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilgLFxuICBsYXB0b3A6IGBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtzaXplLmxhcHRvcH0pIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKWAsXG4gIGxhcHRvcE06IGBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtzaXplLmxhcHRvcE19KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilgLFxuICBsYXB0b3BMOiBgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7c2l6ZS5sYXB0b3BMfSkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpYCxcbiAgZGVza3RvcDogYG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3NpemUuZGVza3RvcH0pIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKWAsXG59O1xuXG5leHBvcnQgeyBzdGFuZGFyZCwgcmV0aW5hLCBjb2xvciB9IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy11bmZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jaGFydGpzLTJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZGV2aWNlLWRldGVjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zaWRlYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9