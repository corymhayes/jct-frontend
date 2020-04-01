module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
})(["display:flex;flex-flow:column;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3.withConfig({
  displayName: "Alarms__Title",
  componentId: "sc-17pmkb0-1"
})(["font-family:'Industry';font-weight:bold;color:", ";font-size:1.8rem;margin-bottom:.25rem;"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["color"].jctOrange);
const AlarmList = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({
  displayName: "Alarms__AlarmList",
  componentId: "sc-17pmkb0-2"
})(["list-style:none;"]);
const AlarmListItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li.withConfig({
  displayName: "Alarms__AlarmListItem",
  componentId: "sc-17pmkb0-3"
})(["color:", ";font-size:1.8rem;font-family:'Industry';margin-bottom:.25rem;"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["color"].jctLightGray);

const Alarms = props => __jsx(Container, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 3
  }
}, __jsx(Title, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }
}, "Alarms"), __jsx(AlarmList, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }
}, __jsx(AlarmListItem, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 7
  }
}, "On: ", props.on), __jsx(AlarmListItem, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 7
  }
}, "Off: ", props.off)));

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
/* harmony import */ var _components_DoughnutAlarms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/DoughnutAlarms */ "./components/DoughnutAlarms.js");
/* harmony import */ var _components_Trend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Trend */ "./components/Trend.js");
var _jsxFileName = "/Users/cor-eee/Projects/jct-next/components/Details.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const DetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Details__DetailsContainer",
  componentId: "sc-1ln1fjq-0"
})(["display:flex;flex-flow:column;background-color:", ";padding:1rem;"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__["color"].jctWhite);
const DetailsName = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "Details__DetailsName",
  componentId: "sc-1ln1fjq-1"
})(["font-family:'Industry';color:#FF7E26;font-size:3rem;font-weight:bold;margin-bottom:1rem;"]);
const Underline = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Details__Underline",
  componentId: "sc-1ln1fjq-2"
})(["height:2px;background-color:rgba(41,41,41,.15)"]);

const Details = props => __jsx(DetailsContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 3
  }
}, __jsx(DetailsName, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }
}, props.name), __jsx(Underline, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }
}), __jsx(_components_DoughnutAlarms__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }
}), __jsx(_components_Trend__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
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
  currentValue: "8.00",
  totalValue: "16",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
}), __jsx(_Alarms__WEBPACK_IMPORTED_MODULE_3__["default"], {
  on: "8.00",
  off: "12.00",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (DoughnutAlarms);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "DoughnutAlarms__Container",
  componentId: "sc-9gubyt-0"
})(["display:flex;margin-top:4rem;margin-bottom:2rem;justify-content:space-around;align-items:center;"]);

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
      backgroundColor: [_public_screensizes__WEBPACK_IMPORTED_MODULE_3__["color"].jctOrange, 'rgba(0,0,0, .05)'],
      borderWidth: 0
    }]
  };
  return __jsx(GraphContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx(Graph, {
    __self: undefined,
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
      tooltips: false
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  })), __jsx(Volume, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx(CurrentVolume, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, props.currentValue), __jsx(CurrentVolumeLabel, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "Volume")));
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
})(["font-family:'Industry';font-size:2.5rem;color:", ";font-weight:bold;"], _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["color"].jctDarkGray);
const CurrentVolumeLabel = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "DoughnutChart__CurrentVolumeLabel",
  componentId: "sc-557kc3-4"
})(["font-family:'Industry';font-size:1.5rem;color:", ";"], _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["color"].jctLightGray);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_screensizes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/screensizes */ "./public/screensizes.js");
var _jsxFileName = "/Users/cor-eee/Projects/jct-next/components/Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.main.withConfig({
  displayName: "Layout__MainContainer",
  componentId: "sc-1xtzfs7-0"
})(["margin:0;padding:0;width:60%;height:100vh;display:flex;flex-flow:column;@media ", "{width:50%;}@media ", "{width:75%;}"], _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["standard"].desktop, _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["retina"].laptop);
const CompanyContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Layout__CompanyContainer",
  componentId: "sc-1xtzfs7-1"
})(["margin:3rem 0;display:flex;flex-flow:column;justify-content:center;margin-left:1rem;"]);
const CompanyName = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h1.withConfig({
  displayName: "Layout__CompanyName",
  componentId: "sc-1xtzfs7-2"
})(["@media ", "{font-size:6rem;font-weight:600;color:#efefef;font-family:'Industry';}@media ", "{font-size:4rem;font-weight:600;color:#efefef;font-family:'Industry';}"], _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["standard"].desktop, _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["retina"].laptop);
const SiteName = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h2.withConfig({
  displayName: "Layout__SiteName",
  componentId: "sc-1xtzfs7-3"
})(["font-size:4rem;font-weight:600;color:#FF7E26;font-family:'Industry';@media ", "{font-size:4rem;font-weight:600;color:#FF7E26;font-family:'Industry';}@media ", "{font-size:2.75rem;font-weight:600;color:#FF7E26;font-family:'Industry';}"], _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["standard"].desktop, _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["retina"].laptop);
const SiteDetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Layout__SiteDetailsContainer",
  componentId: "sc-1xtzfs7-4"
})(["background-color:", ";height:auto;padding:9rem 18rem 9rem 0;display:grid;overflow:scroll;@media ", "{column-gap:12rem;grid:auto-flow / repeat(4,25%);padding:12rem 48rem 0 12rem;}@media ", "{column-gap:10rem;grid:auto-flow / repeat(3,33%);padding:10rem 30rem 0rem 10rem;}"], _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["color"].jctWhite, _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["standard"].desktop, _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["retina"].laptop);

const Layout = props => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(MainContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 5
  }
}, __jsx(CompanyContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 7
  }
}, __jsx(CompanyName, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 9
  }
}, props.company_name), __jsx(SiteName, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 9
  }
}, props.site_name)), __jsx(SiteDetailsContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 7
  }
}, props.children)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "410025255",
  __self: undefined
}, "*{margin:0;padding:0;box-sizing:border-box;font-size:10px;font-family:sans-serif;font-weight:100;}body{background-color:#292929;}#__next{height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3ItZWVlL1Byb2plY3RzL2pjdC1uZXh0L2NvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9HdUIsQUFHa0IsQUFTZ0IsQUFJYixTQVpGLEdBYUMsT0FaVyxJQWFULEVBTGYsZ0JBUGlCLGVBQ1EsdUJBQ1AsZ0JBQ2xCLEVBVW1CLCtEQUNFLDZGQUNJLG1HQUN6QiIsImZpbGUiOiIvVXNlcnMvY29yLWVlZS9Qcm9qZWN0cy9qY3QtbmV4dC9jb21wb25lbnRzL0xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBzdGFuZGFyZCwgcmV0aW5hLCBjb2xvciB9IGZyb20gJy4uL3B1YmxpYy9zY3JlZW5zaXplcydcblxuY29uc3QgTWFpbkNvbnRhaW5lciA9IHN0eWxlZC5tYWluYFxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuXG4gIEBtZWRpYSAke3N0YW5kYXJkLmRlc2t0b3B9IHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIFxuICBAbWVkaWEgJHtyZXRpbmEubGFwdG9wfSB7XG4gICAgd2lkdGg6IDc1JTtcbiAgfVxuYFxuXG5jb25zdCBDb21wYW55Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAzcmVtIDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG5gXG5cbmNvbnN0IENvbXBhbnlOYW1lID0gc3R5bGVkLmgxYFxuICBAbWVkaWEgJHtzdGFuZGFyZC5kZXNrdG9wfSB7XG4gICAgZm9udC1zaXplOiA2cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICNlZmVmZWY7XG4gICAgZm9udC1mYW1pbHk6ICdJbmR1c3RyeSc7XG4gIH1cbiAgXG4gIEBtZWRpYSAke3JldGluYS5sYXB0b3B9IHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogI2VmZWZlZjtcbiAgICBmb250LWZhbWlseTogJ0luZHVzdHJ5JztcbiAgfVxuYFxuXG5cbmNvbnN0IFNpdGVOYW1lID0gc3R5bGVkLmgyYFxuICBmb250LXNpemU6IDRyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjRkY3RTI2O1xuICBmb250LWZhbWlseTogJ0luZHVzdHJ5JztcblxuICBAbWVkaWEgJHtzdGFuZGFyZC5kZXNrdG9wfSB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICNGRjdFMjY7XG4gICAgZm9udC1mYW1pbHk6ICdJbmR1c3RyeSc7XG4gIH1cbiAgXG4gIEBtZWRpYSAke3JldGluYS5sYXB0b3B9IHtcbiAgICBmb250LXNpemU6IDIuNzVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogI0ZGN0UyNjtcbiAgICBmb250LWZhbWlseTogJ0luZHVzdHJ5JztcbiAgfVxuYFxuXG5jb25zdCBTaXRlRGV0YWlsc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3IuamN0V2hpdGV9O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDlyZW0gMThyZW0gOXJlbSAwO1xuICBkaXNwbGF5OiBncmlkO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBcbiAgQG1lZGlhICR7c3RhbmRhcmQuZGVza3RvcH0ge1xuICAgIGNvbHVtbi1nYXA6IDEycmVtO1xuICAgIGdyaWQ6IGF1dG8tZmxvdyAvIHJlcGVhdCg0LCAyNSUpO1xuICAgIHBhZGRpbmc6IDEycmVtIDQ4cmVtIDAgMTJyZW07XG5cbiAgfVxuICBcbiAgQG1lZGlhICR7cmV0aW5hLmxhcHRvcH0ge1xuICAgIGNvbHVtbi1nYXA6IDEwcmVtO1xuICAgIGdyaWQ6IGF1dG8tZmxvdyAvIHJlcGVhdCgzLCAzMyUpO1xuICAgIHBhZGRpbmc6IDEwcmVtIDMwcmVtIDByZW0gMTByZW07XG4gIH1cbmBcblxuY29uc3QgTGF5b3V0ID0gcHJvcHMgPT4gKFxuICA8PlxuXG4gICAgPE1haW5Db250YWluZXI+XG4gICAgICA8Q29tcGFueUNvbnRhaW5lcj5cbiAgICAgICAgPENvbXBhbnlOYW1lPntwcm9wcy5jb21wYW55X25hbWV9PC9Db21wYW55TmFtZT5cbiAgICAgICAgPFNpdGVOYW1lPntwcm9wcy5zaXRlX25hbWV9PC9TaXRlTmFtZT5cbiAgICAgIDwvQ29tcGFueUNvbnRhaW5lcj5cbiAgICAgIDxTaXRlRGV0YWlsc0NvbnRhaW5lcj5cbiAgICAgICAgeyBwcm9wcy5jaGlsZHJlbiB9XG4gICAgICA8L1NpdGVEZXRhaWxzQ29udGFpbmVyPlxuICAgIDwvTWFpbkNvbnRhaW5lcj5cbiAgICBcbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgKntcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgfVxuXG4gICAgICBib2R5e1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xuICAgICAgfVxuXG4gICAgICAjX19uZXh0e1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuXG4gIDwvPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQiXX0= */\n/*@ sourceURL=/Users/cor-eee/Projects/jct-next/components/Layout.js */"));

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
  slidesToShow: 3,
  cellSpacing: 20,
  slideWidth: '300px',
  withoutControls: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }
}, props.children);

/* harmony default export */ __webpack_exports__["default"] = (MobileCarousel);

/***/ }),

/***/ "./components/MobileLayout.js":
/*!************************************!*\
  !*** ./components/MobileLayout.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_screensizes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/screensizes */ "./public/screensizes.js");
/* harmony import */ var _components_MobileCarousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MobileCarousel */ "./components/MobileCarousel.js");
var _jsxFileName = "/Users/cor-eee/Projects/jct-next/components/MobileLayout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const MobileMainContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.main.withConfig({
  displayName: "MobileLayout__MobileMainContainer",
  componentId: "sc-1sasdph-0"
})(["margin:0;padding:0;width:100%;height:100vh;display:flex;flex-flow:column;"]);
const MobileCompanyContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "MobileLayout__MobileCompanyContainer",
  componentId: "sc-1sasdph-1"
})(["margin:3rem 0;display:flex;flex-flow:column;justify-content:center;margin-left:3rem;"]);
const MobileCompanyName = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h1.withConfig({
  displayName: "MobileLayout__MobileCompanyName",
  componentId: "sc-1sasdph-2"
})(["font-size:3rem;font-weight:600;color:", ";font-family:'Industry';"], _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["color"].jctWhite);
const MobileSiteName = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h2.withConfig({
  displayName: "MobileLayout__MobileSiteName",
  componentId: "sc-1sasdph-3"
})(["font-size:2rem;font-weight:600;color:#FF7E26;font-family:'Industry';"]);

const MobileLayout = props => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(MobileMainContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }
}, __jsx(MobileCompanyContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 7
  }
}, __jsx(MobileCompanyName, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 9
  }
}, props.company_name), __jsx(MobileSiteName, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 9
  }
}, props.site_name)), __jsx(_components_MobileCarousel__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 7
  }
}, props.children)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "410025255",
  __self: undefined
}, "*{margin:0;padding:0;box-sizing:border-box;font-size:10px;font-family:sans-serif;font-weight:100;}body{background-color:#292929;}#__next{height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jb3ItZWVlL1Byb2plY3RzL2pjdC1uZXh0L2NvbXBvbmVudHMvTW9iaWxlTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1EdUIsQUFHa0IsQUFTZ0IsQUFJYixTQVpGLEdBYUMsT0FaVyxJQWFULEVBTGYsZ0JBUGlCLGVBQ1EsdUJBQ1AsZ0JBQ2xCLEVBVW1CLCtEQUNFLDZGQUNJLG1HQUN6QiIsImZpbGUiOiIvVXNlcnMvY29yLWVlZS9Qcm9qZWN0cy9qY3QtbmV4dC9jb21wb25lbnRzL01vYmlsZUxheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBzdGFuZGFyZCwgcmV0aW5hLCBjb2xvciB9IGZyb20gJy4uL3B1YmxpYy9zY3JlZW5zaXplcydcblxuaW1wb3J0IE1vYmlsZUNhcm91c2VsIGZyb20gJy4uL2NvbXBvbmVudHMvTW9iaWxlQ2Fyb3VzZWwnXG5cbmNvbnN0IE1vYmlsZU1haW5Db250YWluZXIgPSBzdHlsZWQubWFpbmBcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG5gXG5cbmNvbnN0IE1vYmlsZUNvbXBhbnlDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDNyZW0gMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogM3JlbTtcbmBcblxuY29uc3QgTW9iaWxlQ29tcGFueU5hbWUgPSBzdHlsZWQuaDFgXG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICR7Y29sb3IuamN0V2hpdGV9O1xuICBmb250LWZhbWlseTogJ0luZHVzdHJ5JztcbmBcblxuXG5jb25zdCBNb2JpbGVTaXRlTmFtZSA9IHN0eWxlZC5oMmBcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogI0ZGN0UyNjtcbiAgZm9udC1mYW1pbHk6ICdJbmR1c3RyeSc7XG5gXG5cblxuY29uc3QgTW9iaWxlTGF5b3V0ID0gcHJvcHMgPT4gKFxuICA8PlxuXG4gICAgPE1vYmlsZU1haW5Db250YWluZXI+XG4gICAgICA8TW9iaWxlQ29tcGFueUNvbnRhaW5lcj5cbiAgICAgICAgPE1vYmlsZUNvbXBhbnlOYW1lPntwcm9wcy5jb21wYW55X25hbWV9PC9Nb2JpbGVDb21wYW55TmFtZT5cbiAgICAgICAgPE1vYmlsZVNpdGVOYW1lPntwcm9wcy5zaXRlX25hbWV9PC9Nb2JpbGVTaXRlTmFtZT5cbiAgICAgIDwvTW9iaWxlQ29tcGFueUNvbnRhaW5lcj5cbiAgICAgIDxNb2JpbGVDYXJvdXNlbD5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgPC9Nb2JpbGVDYXJvdXNlbD5cbiAgICA8L01vYmlsZU1haW5Db250YWluZXI+XG4gICAgIFxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAqe1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICB9XG5cbiAgICAgIGJvZHl7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTI5Mjk7XG4gICAgICB9XG5cbiAgICAgICNfX25leHR7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG5cbiAgPC8+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE1vYmlsZUxheW91dCJdfQ== */\n/*@ sourceURL=/Users/cor-eee/Projects/jct-next/components/MobileLayout.js */"));

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
        data: [4, 8, 6, 9, 11, 7, 9],
        borderWidth: 2,
        borderColor: _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["color"].jctOrange,
        pointBackgroundColor: _public_screensizes__WEBPACK_IMPORTED_MODULE_3__["color"].jctOrange,
        backgroundColor: gradient,
        cubicInterpolationMode: 'monotone' // lineTension: 0

      }]
    };
  };

  return __jsx(Graph, {
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_MobileLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MobileLayout */ "./components/MobileLayout.js");
/* harmony import */ var _components_Details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Details */ "./components/Details.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-device-detect */ "react-device-detect");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var use_mobile_detect_hook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! use-mobile-detect-hook */ "use-mobile-detect-hook");
/* harmony import */ var use_mobile_detect_hook__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(use_mobile_detect_hook__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_screensizes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/screensizes */ "./public/screensizes.js");
var _jsxFileName = "/Users/cor-eee/Projects/jct-next/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Home = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.isMobileView ? __jsx(_components_MobileLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    company_name: "Doghouse Oil & Gas",
    site_name: "Anchor Battery",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Oil Tank 1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }), __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Oil Tank 2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }), __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Water Tank 1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }), __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Water Tank 2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  })) : __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    company_name: "Doghouse Oil & Gas",
    site_name: "Anchor Battery",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Oil Tank 1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }), __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Oil Tank 2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }), __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Oil Tank 3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }), __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Water Tank 1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }), __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Water Tank 2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }), __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Water Tank 3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  })));
};

Home.getInitialProps = async ctx => {
  let isMobileView = ctx.req.headers['user-agent'].search(/Android|iPhone/i);

  if (isMobileView < 0) {
    return {
      isMobileView: false
    };
  } else {
    return {
      isMobileView: true
    };
  }
};

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
  jctDarkGray: '#464646',
  jctLightGray: '#a2a2a2'
};
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};
const standard = {
  mobileS: `screen and (min-width: ${size.mobileS}) and (-webkit-min-device-pixel-ratio: 1)`,
  mobileM: `screen and (min-width: ${size.mobileM}) and (-webkit-min-device-pixel-ratio: 1)`,
  mobileL: `screen and (min-width: ${size.mobileL}) and (-webkit-min-device-pixel-ratio: 1)`,
  tablet: `screen and (min-width: ${size.tablet}) and (-webkit-min-device-pixel-ratio: 1)`,
  laptop: `screen and (min-width: ${size.laptop}) and (-webkit-min-device-pixel-ratio: 1)`,
  laptopL: `screen and (min-width: ${size.laptopL}) and (-webkit-min-device-pixel-ratio: 1)`,
  desktop: `screen and (min-width: ${size.desktop}) and (-webkit-min-device-pixel-ratio: 1)`
};
const retina = {
  mobileS: `screen and (min-width: ${size.mobileS}) and (-webkit-min-device-pixel-ratio: 2)`,
  mobileM: `screen and (min-width: ${size.mobileM}) and (-webkit-min-device-pixel-ratio: 2)`,
  mobileL: `screen and (min-width: ${size.mobileL}) and (-webkit-min-device-pixel-ratio: 2)`,
  tablet: `screen and (min-width: ${size.tablet}) and (-webkit-min-device-pixel-ratio: 2)`,
  laptop: `screen and (min-width: ${size.laptop}) and (-webkit-min-device-pixel-ratio: 2)`,
  laptopL: `screen and (min-width: ${size.laptopL}) and (-webkit-min-device-pixel-ratio: 2)`,
  desktop: `screen and (min-width: ${size.desktop}) and (-webkit-min-device-pixel-ratio: 2)`
};


/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/cor-eee/Projects/jct-next/pages/index.js */"./pages/index.js");


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

/***/ "react-device-detect":
/*!**************************************!*\
  !*** external "react-device-detect" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-device-detect");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "use-mobile-detect-hook":
/*!*****************************************!*\
  !*** external "use-mobile-detect-hook" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("use-mobile-detect-hook");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map