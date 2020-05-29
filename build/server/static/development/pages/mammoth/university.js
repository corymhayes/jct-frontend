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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
})(["display:flex;flex-flow:column;margin-bottom:10rem;"]);
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
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 3
  }
}, __jsx(NameAlarmsContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }
}, __jsx(DetailsName, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 7
  }
}, props.resourceType), props.isTable ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Alarms__WEBPACK_IMPORTED_MODULE_3__["default"], {
  alarmType: 'Alarm',
  on: props.alarmOn,
  off: props.alarmOff,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 13
  }
}), __jsx(_Alarms__WEBPACK_IMPORTED_MODULE_3__["default"], {
  alarmType: 'T-Pump',
  on: props.tpumpOn,
  off: props.tpumpOff,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 13
  }
}))), __jsx(DoughnutChartContainer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
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
})([""]);

const Layout = props => {
  return __jsx(MainContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 3
    }
  }, __jsx(_Sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    company: props.company,
    sites: props.sites,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }), __jsx(SiteDetailsContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, __jsx(SiteNameTime, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx(SiteName, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, props.sitename), __jsx(DateTime, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, props.date, " - ", props.time)), __jsx(SiteDetails, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
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
var _jsxFileName = "/Users/cor-eee/Projects/jct-next/components/mobile/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const MobileMainContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.main.withConfig({
  displayName: "Layout__MobileMainContainer",
  componentId: "sc-8eh4j8-0"
})(["width:100%;height:100vh;display:grid;grid-template-rows:7rem 1fr;"]);
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
        lineNumber: 111,
        columnNumber: 11
      }
    }, __jsx("img", {
      src: `../static/${props.company}-logo.png`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 13
      }
    })), __jsx(SiteNavContainer, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 11
      }
    }, __jsx("h1", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 13
      }
    }, "Sites"), __jsx(SiteLinks, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 13
      }
    }, __jsx("ul", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
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
      lineNumber: 108,
      columnNumber: 5
    }
  }, __jsx(react_sidebar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    sidebar: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(CompanyContainer, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 11
      }
    }, __jsx("img", {
      src: `../static/${props.company}-logo.png`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 13
      }
    })), __jsx(SiteNavContainer, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 11
      }
    }, __jsx("h1", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 13
      }
    }, "Sites"), __jsx(SiteLinks, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 13
      }
    }, __jsx("ul", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 15
      }
    }, props.sites)))),
    open: isAlarmMenuOpen,
    onSetOpen: setIsAlarmMenuOpen,
    pullRight: true,
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
      lineNumber: 138,
      columnNumber: 7
    }
  }, __jsx(MobileMainContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 9
    }
  }, __jsx(MobileCompanyContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 13
    }
  }, __jsx(Menu, {
    onClick: () => setIsSiteMenuOpen(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "../static/menu-icon.svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 17
    }
  })), __jsx(NameDateTimeContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 15
    }
  }, __jsx(MobileSiteName, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 17
    }
  }, props.sitename), __jsx(DateTime, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 17
    }
  }, props.date, " - ", props.time)), __jsx(Menu, {
    onClick: () => setIsAlarmMenuOpen(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "../static/alarm-icon.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 17
    }
  }))), __jsx(MobileCarouselContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
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
var _jsxFileName = "/Users/cor-eee/Projects/jct-next/pages/mammoth/university/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const University = ({
  data,
  sites
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_device_detect__WEBPACK_IMPORTED_MODULE_3__["BrowserView"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 3
  }
}, __jsx(_components_browser_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
  company: "mammoth",
  sites: sites.map((site, i) => __jsx("li", {
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 38
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/mammoth/${site.BATTERY.toLowerCase()}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 50
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 104
    }
  }, site.BATTERY)))),
  sitename: "University",
  date: data[0].mDate,
  time: data[0].mTime,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
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
    lineNumber: 24,
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
    lineNumber: 35,
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
    lineNumber: 36,
    columnNumber: 9
  }
})))), __jsx(react_device_detect__WEBPACK_IMPORTED_MODULE_3__["MobileView"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 3
  }
}, __jsx(_components_mobile_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
  company: "mammoth",
  sites: sites.map((site, i) => __jsx("li", {
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 38
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/mammoth/${site.BATTERY.toLowerCase()}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 50
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 104
    }
  }, site.BATTERY)))),
  sitename: "University",
  date: data[0].mDate,
  time: data[0].mTime,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }
}, __jsx(_components_mobile_Details__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
    lineNumber: 49,
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
    lineNumber: 60,
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
    lineNumber: 61,
    columnNumber: 9
  }
})))));

async function getServerSideProps(ctx) {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()('http://jct-systems.com/api/university');
  const data = await res.json();
  const res1 = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()('http://localhost:3001/api/mammoth');
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

/***/ 4:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FsYXJtcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jyb3dzZXIvRGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jyb3dzZXIvR2F1Z2VDaGFydC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jyb3dzZXIvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnJvd3Nlci9TaWRlYmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9iaWxlL0RldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tb2JpbGUvR2F1Z2VDaGFydC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vYmlsZS9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9tYW1tb3RoL3VuaXZlcnNpdHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NjcmVlbnNpemVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtdW5mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jaGFydGpzLTJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kZXZpY2UtZGV0ZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zaWRlYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiJdLCJuYW1lcyI6WyJEZXRhaWxzQWxhcm1Db250YWluZXIiLCJzdHlsZWQiLCJwIiwiY29sb3IiLCJqY3REYXJrR3JheSIsIkFsYXJtVGl0bGUiLCJoMiIsIkFsYXJtT25PZmYiLCJkaXYiLCJBbGFybU9uT2ZmTnVtIiwic3BhbiIsIkFsYXJtcyIsInByb3BzIiwiYWxhcm1UeXBlIiwib24iLCJ1bmRlZmluZWQiLCJ0b0ZpeGVkIiwib2ZmIiwiRGV0YWlsc0NvbnRhaW5lciIsIk5hbWVBbGFybXNDb250YWluZXIiLCJEZXRhaWxzTmFtZSIsImgxIiwiRG91Z2hudXRDaGFydENvbnRhaW5lciIsIkRldGFpbHMiLCJyZXNvdXJjZVR5cGUiLCJpc1RhYmxlIiwiYWxhcm1PbiIsImFsYXJtT2ZmIiwidHB1bXBPbiIsInRwdW1wT2ZmIiwiY2hpbGRyZW4iLCJEb3VnaG51dENoYXJ0IiwiZGF0YSIsImRhdGFzZXRzIiwiY3VycmVudFZhbHVlIiwidG90YWxWYWx1ZSIsImJhY2tncm91bmRDb2xvciIsImN0eCIsImRhdGFzZXQiLCJib3JkZXJXaWR0aCIsIm5hbWUiLCJjdXRvdXRQZXJjZW50YWdlIiwicm90YXRpb24iLCJNYXRoIiwiUEkiLCJjaXJjdW1mZXJlbmNlIiwidG9vbHRpcHMiLCJob3ZlciIsInVuaXRPZk1lYXN1cmUiLCJHcmFwaENvbnRhaW5lciIsIkdyYXBoVGl0bGUiLCJHcmFwaCIsIlZvbHVtZSIsIkN1cnJlbnRWb2x1bWUiLCJDdXJyZW50Vm9sdW1lTGFiZWwiLCJNYWluQ29udGFpbmVyIiwibWFpbiIsIlNpdGVEZXRhaWxzQ29udGFpbmVyIiwiU2l0ZU5hbWVUaW1lIiwiU2l0ZU5hbWUiLCJEYXRlVGltZSIsImgzIiwiU2l0ZURldGFpbHMiLCJMYXlvdXQiLCJjb21wYW55Iiwic2l0ZXMiLCJzaXRlbmFtZSIsImRhdGUiLCJ0aW1lIiwiU2lkZWJhckNvbnRhaW5lciIsIkNvbXBhbnlDb250YWluZXIiLCJTaXRlTmF2Q29udGFpbmVyIiwiU2l0ZUxpbmtzIiwibmF2IiwiamN0T3JhbmdlIiwiU2lkZWJhciIsIk5ld01vYmlsZURldGFpbHMiLCJNb2JpbGVNYWluQ29udGFpbmVyIiwiTW9iaWxlQ29tcGFueUNvbnRhaW5lciIsIk1lbnUiLCJOYW1lRGF0ZVRpbWVDb250YWluZXIiLCJNb2JpbGVTaXRlTmFtZSIsImpjdFdoaXRlIiwiTW9iaWxlQ2Fyb3VzZWxDb250YWluZXIiLCJNb2JpbGVMYXlvdXQiLCJpc1NpdGVNZW51T3BlbiIsInNldElzU2l0ZU1lbnVPcGVuIiwidXNlU3RhdGUiLCJpc0FsYXJtTWVudU9wZW4iLCJzZXRJc0FsYXJtTWVudU9wZW4iLCJzaWRlYmFyIiwid2lkdGgiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlUm93cyIsIm92ZXJsYXkiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX3VybCIsIl91dGlscyIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsImlzTG9jYWwiLCJocmVmIiwidXJsIiwicGFyc2UiLCJvcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsImhvc3QiLCJwcm90b2NvbCIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0RnVuYyIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImFzIiwicmVzdWx0IiwiZm9ybWF0VXJsIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJvYnNlcnZlciIsImxpc3RlbmVycyIsIk1hcCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImdldE9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImhhcyIsInRhcmdldCIsImNiIiwiZ2V0IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsInVub2JzZXJ2ZSIsImRlbGV0ZSIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJlbCIsIm9ic2VydmUiLCJzZXQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJMaW5rIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJjbGVhblVwTGlzdGVuZXJzIiwiZm9ybWF0VXJscyIsImFzSHJlZiIsImFkZEJhc2VQYXRoIiwibGlua0NsaWNrZWQiLCJlIiwibm9kZU5hbWUiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJwYXRobmFtZSIsImxvY2F0aW9uIiwicmVzb2x2ZSIsInByZXZlbnREZWZhdWx0Iiwic2Nyb2xsIiwiaW5kZXhPZiIsInJlcGxhY2UiLCJzaGFsbG93IiwidGhlbiIsInN1Y2Nlc3MiLCJzY3JvbGxUbyIsImRvY3VtZW50IiwiYm9keSIsImZvY3VzIiwicHJlZmV0Y2giLCJ3YXJuIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRQYXRocyIsInBhcnNlZEhyZWYiLCJwYXJzZWRBcyIsInJlc29sdmVkSHJlZiIsImhhbmRsZVJlZiIsInJlZiIsInRhZ05hbWUiLCJpc1ByZWZldGNoZWQiLCJqb2luIiwib3B0aW9ucyIsInBhdGhzIiwiY2F0Y2giLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjdXJyZW50Iiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsInBhc3NIcmVmIiwidHlwZSIsInByb2Nlc3MiLCJjbG9uZUVsZW1lbnQiLCJleGVjT25jZSIsIlByb3BUeXBlcyIsImV4YWN0IiwicHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImJvb2wiLCJlbGVtZW50IiwicHJvcE5hbWUiLCJ2YWx1ZSIsIl9kZWZhdWx0IiwidXNlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiY3JlYXRlUm91dGVyIiwid2l0aFJvdXRlciIsIlJvdXRlciIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJhcmd1bWVudHMiLCJldmVudCIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJFcnJvciIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiX2xlbiIsImxlbmd0aCIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiYXNzaWduIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsIm1pdHQiLCJhbGwiLCJjcmVhdGUiLCJoYW5kbGVyIiwicHVzaCIsInNwbGljZSIsImVtaXQiLCJldnRzIiwic2xpY2UiLCJtYXAiLCJfX2ltcG9ydERlZmF1bHQiLCJtb2QiLCJ1cmxfMSIsIm1pdHRfMSIsInV0aWxzXzEiLCJpc19keW5hbWljXzEiLCJyb3V0ZV9tYXRjaGVyXzEiLCJyb3V0ZV9yZWdleF8xIiwiYmFzZVBhdGgiLCJwYXRoIiwiZGVsQmFzZVBhdGgiLCJzdWJzdHIiLCJ0b1JvdXRlIiwicHJlcGFyZVJvdXRlIiwiZmV0Y2hOZXh0RGF0YSIsInF1ZXJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJhdHRlbXB0cyIsImdldFJlc3BvbnNlIiwiZmV0Y2giLCJfX05FWFRfREFUQV9fIiwiYnVpbGRJZCIsImNyZWRlbnRpYWxzIiwicmVzIiwib2siLCJzdGF0dXMiLCJqc29uIiwiY29kZSIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsInNkYyIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiaXNTc3IiLCJhc1BhdGgiLCJfYnBzIiwiX2dldFN0YXRpY0RhdGEiLCJQcm9taXNlIiwiX2dldFNlcnZlckRhdGEiLCJyb3V0ZSIsImNvbXBvbmVudHMiLCJfX05fU1NHIiwiX19OX1NTUCIsImlzRHluYW1pY1JvdXRlIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0IiwidXBkYXRlIiwibmV3RGF0YSIsIm5vdGlmeSIsInJlbG9hZCIsImJhY2siLCJoaXN0b3J5IiwiY2hhbmdlIiwibWV0aG9kIiwiX2FzIiwicmVqZWN0IiwiX2giLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsImFib3J0Q29tcG9uZW50TG9hZCIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsInVybElzTmV3IiwiYXNQYXRobmFtZSIsInJvdXRlUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsImdldFJvdXRlTWF0Y2hlciIsIm1pc3NpbmdQYXJhbXMiLCJrZXlzIiwiZ3JvdXBzIiwiZmlsdGVyIiwicGFyYW0iLCJnZXRSb3V0ZUluZm8iLCJyb3V0ZUluZm8iLCJjYW5jZWxsZWQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJjYWNoZWRSb3V0ZUluZm8iLCJoYW5kbGVFcnJvciIsImxvYWRFcnJvckZhaWwiLCJmZXRjaENvbXBvbmVudCIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJfZ2V0RGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNwbGl0IiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsImhhc2giLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicHJlZmV0Y2hEYXRhIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJmbiIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiVEVTVF9ST1VURSIsInRlc3QiLCJyZSIsImV4ZWMiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJfIiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsInJlcGVhdCIsImVzY2FwZVJlZ2V4Iiwic3RyIiwibm9ybWFsaXplZFJvdXRlIiwiZXNjYXBlZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsIiQxIiwiaXNDYXRjaEFsbCIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwia2V5IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsInVzZWQiLCJob3N0bmFtZSIsInBvcnQiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJfYSIsInByb3RvdHlwZSIsInBhZ2VQcm9wcyIsInVybE9iamVjdEtleXMiLCJmb3JtYXQiLCJTUCIsIm1lYXN1cmUiLCJVbml2ZXJzaXR5Iiwic2l0ZSIsImkiLCJCQVRURVJZIiwidG9Mb3dlckNhc2UiLCJtRGF0ZSIsIm1UaW1lIiwiUzEiLCJTMiIsIlYxIiwiVjMiLCJWNCIsIlY1IiwiVjYiLCJTMyIsIlYyIiwiUzQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXMxIiwiamN0TGlnaHRHcmF5Iiwic2l6ZSIsIm1vYmlsZVMiLCJtb2JpbGVNIiwibW9iaWxlTCIsInRhYmxldFAiLCJ0YWJsZXRMIiwibGFwdG9wIiwibGFwdG9wTSIsImxhcHRvcEwiLCJkZXNrdG9wIiwic3RhbmRh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LENBQUNFLE9BQVEsMkNBSHhDO0FBSWJDLFNBQU8sRUFBRywrQkFBOEJILElBQUksQ0FBQ0csT0FBUSwyQ0FKeEM7QUFLYlUsUUFBTSxFQUFHLCtCQUE4QmIsSUFBSSxDQUFDYSxNQUFPLHFCQUFvQmIsSUFBSSxDQUFDTSxNQUFPLDJDQUx0RTtBQU1iQSxRQUFNLEVBQUcsK0JBQThCTixJQUFJLENBQUNNLE1BQU8sMkNBTnRDO0FBT2JDLFNBQU8sRUFBRywrQkFBOEJQLElBQUksQ0FBQ08sT0FBUSwyQ0FQeEM7QUFRYkMsU0FBTyxFQUFHLCtCQUE4QlIsSUFBSSxDQUFDUSxPQUFRLDJDQVJ4QztBQVNiQyxTQUFPLEVBQUcsK0JBQThCVCxJQUFJLENBQUNTLE9BQVE7QUFUeEMsQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBLCtDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InN0YXRpYy9kZXZlbG9wbWVudC9wYWdlcy9tYW1tb3RoL3VuaXZlcnNpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IGNvbG9yIH0gZnJvbSAnLi4vcHVibGljL3NjcmVlbnNpemVzJ1xuXG5jb25zdCBEZXRhaWxzQWxhcm1Db250YWluZXIgPSBzdHlsZWQucGBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke2NvbG9yLmpjdERhcmtHcmF5fTtcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XG5gXG5cbmNvbnN0IEFsYXJtVGl0bGUgPSBzdHlsZWQuaDJgXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuYFxuXG5jb25zdCBBbGFybU9uT2ZmID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAxLjhyZW07XG5gXG5cbmNvbnN0IEFsYXJtT25PZmZOdW0gPSBzdHlsZWQuc3BhbmBcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuYFxuXG5cblxuY29uc3QgQWxhcm1zID0gcHJvcHMgPT4gKFxuICA8RGV0YWlsc0FsYXJtQ29udGFpbmVyPlxuICAgIDxBbGFybVRpdGxlPntwcm9wcy5hbGFybVR5cGV9PC9BbGFybVRpdGxlPlxuICAgIDxBbGFybU9uT2ZmPlxuICAgICAgT246IDxBbGFybU9uT2ZmTnVtPnsgcHJvcHMub24gIT09IHVuZGVmaW5lZCA/IHByb3BzLm9uLnRvRml4ZWQoMikgOiBwcm9wcy5vbiB9PC9BbGFybU9uT2ZmTnVtPiBPZmY6IDxBbGFybU9uT2ZmTnVtPnsgcHJvcHMub2ZmICE9PSB1bmRlZmluZWQgPyBwcm9wcy5vZmYudG9GaXhlZCgyKSA6IHByb3BzLm9mZiB9PC9BbGFybU9uT2ZmTnVtPlxuICAgIDwvQWxhcm1Pbk9mZj5cbiAgPC9EZXRhaWxzQWxhcm1Db250YWluZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEFsYXJtcyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBjb2xvciB9IGZyb20gJy4uLy4uL3B1YmxpYy9zY3JlZW5zaXplcydcblxuaW1wb3J0IEFsYXJtcyBmcm9tICcuLi9BbGFybXMnXG5cbmNvbnN0IERldGFpbHNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgbWFyZ2luLWJvdHRvbTogMTByZW07XG5gXG5cbmNvbnN0IE5hbWVBbGFybXNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xuYFxuXG5jb25zdCBEZXRhaWxzTmFtZSA9IHN0eWxlZC5oMWBcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvci5qY3REYXJrR3JheX07XG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgbWF4LXdpZHRoOiBhdXRvO1xuYFxuY29uc3QgRG91Z2hudXRDaGFydENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG5gXG5cblxuY29uc3QgRGV0YWlscyA9IHByb3BzID0+IChcbiAgPERldGFpbHNDb250YWluZXI+XG4gICAgPE5hbWVBbGFybXNDb250YWluZXI+XG4gICAgICA8RGV0YWlsc05hbWU+e3Byb3BzLnJlc291cmNlVHlwZX08L0RldGFpbHNOYW1lPlxuICAgICAge1xuICAgICAgICBwcm9wcy5pc1RhYmxlID9cbiAgICAgICAgICA8PjwvPlxuICAgICAgICA6XG4gICAgICAgICAgPD4gICAgICAgIFxuICAgICAgICAgICAgPEFsYXJtcyBhbGFybVR5cGU9eydBbGFybSd9IG9uPXtwcm9wcy5hbGFybU9ufSBvZmY9e3Byb3BzLmFsYXJtT2ZmfSAvPlxuICAgICAgICAgICAgPEFsYXJtcyBhbGFybVR5cGU9eydULVB1bXAnfSBvbj17cHJvcHMudHB1bXBPbn0gb2ZmPXtwcm9wcy50cHVtcE9mZn0gLz5cbiAgICAgICAgICA8Lz5cbiAgICAgIH1cbiAgICA8L05hbWVBbGFybXNDb250YWluZXI+XG4gICAgXG4gICAgPERvdWdobnV0Q2hhcnRDb250YWluZXI+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9Eb3VnaG51dENoYXJ0Q29udGFpbmVyPlxuICA8L0RldGFpbHNDb250YWluZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IERldGFpbHMiLCJpbXBvcnQgeyBEb3VnaG51dCB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMidcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBjb2xvciB9IGZyb20gJy4uLy4uL3B1YmxpYy9zY3JlZW5zaXplcydcblxuXG5jb25zdCBEb3VnaG51dENoYXJ0ID0gcHJvcHMgPT4ge1xuICBcbiAgY29uc3QgZGF0YSA9IHtcbiAgICBkYXRhc2V0czogW3tcbiAgICAgIGRhdGE6IFtwcm9wcy5jdXJyZW50VmFsdWUsIChwcm9wcy50b3RhbFZhbHVlIC0gcHJvcHMuY3VycmVudFZhbHVlKV0sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IChjdHgpID0+IHtcbiAgICAgICAgaWYoY3R4LmRhdGFzZXQuZGF0YVswXSA8IHByb3BzLmFsYXJtT2ZmKXtcbiAgICAgICAgcmV0dXJuIFsgJ2xpZ2h0Z3JlZW4nLCAncmdiYSgwLDAsMCwuMDUpJyBdXG4gICAgICB9IGVsc2UgaWYoY3R4LmRhdGFzZXQuZGF0YVswXSA+IHByb3BzLmFsYXJtT24pe1xuICAgICAgICAgIHJldHVybiBbICdyZWQnLCAncmdiYSgwLDAsMCwuMDUpJyBdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFsgJyNmZmNjMDAnLCAncmdiYSgwLDAsMCwuMDUpJyBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBib3JkZXJXaWR0aDogMFxuICAgIH1dXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxHcmFwaENvbnRhaW5lcj5cbiAgICAgIDxHcmFwaFRpdGxlPntwcm9wcy5uYW1lfTwvR3JhcGhUaXRsZT5cbiAgICAgIDxHcmFwaD5cbiAgICAgICAgPERvdWdobnV0IFxuICAgICAgICAgIGRhdGE9eyBkYXRhIH1cbiAgICAgICAgICB3aWR0aD17IDE1MCB9XG4gICAgICAgICAgaGVpZ2h0PXsgMTUwIH1cbiAgICAgICAgICBvcHRpb25zPXt7IFxuICAgICAgICAgICAgY3V0b3V0UGVyY2VudGFnZTogODAsIFxuICAgICAgICAgICAgcm90YXRpb246ICgtMS4yNSAqIE1hdGguUEkpLFxuICAgICAgICAgICAgY2lyY3VtZmVyZW5jZTogKDEuNSAqIE1hdGguUEkpLFxuICAgICAgICAgICAgdG9vbHRpcHM6IGZhbHNlLFxuICAgICAgICAgICAgaG92ZXI6IGZhbHNlXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvR3JhcGg+XG4gICAgICA8Vm9sdW1lPlxuICAgICAgICA8Q3VycmVudFZvbHVtZT57IHByb3BzLmN1cnJlbnRWYWx1ZSAhPT0gbnVsbCA/IHByb3BzLmN1cnJlbnRWYWx1ZS50b0ZpeGVkKDIpIDogcHJvcHMuY3VycmVudFZhbHVlIH08L0N1cnJlbnRWb2x1bWU+XG4gICAgICAgIDxDdXJyZW50Vm9sdW1lTGFiZWw+e3Byb3BzLnVuaXRPZk1lYXN1cmV9PC9DdXJyZW50Vm9sdW1lTGFiZWw+XG4gICAgICA8L1ZvbHVtZT5cbiAgICA8L0dyYXBoQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERvdWdobnV0Q2hhcnQgICAgXG5cblxuY29uc3QgR3JhcGhDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkOiAyNSUgMWZyIC8gMWZyO1xuICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcbiAgd2lkdGg6IDIwcmVtO1xuICBoZWlnaHQ6IDE1cmVtO1xuYFxuY29uc3QgR3JhcGhUaXRsZSA9IHN0eWxlZC5oMWBcbiAgZ3JpZC1jb2x1bW46IDE7XG4gIGdyaWQtcm93OiAxO1xuICBmb250LXNpemU6IDIuNHJlbTtcbmBcblxuY29uc3QgR3JhcGggPSBzdHlsZWQuZGl2YFxuICBncmlkLWNvbHVtbjogMTtcbiAgZ3JpZC1yb3c6IDI7XG5gXG5cbmNvbnN0IFZvbHVtZSA9IHN0eWxlZC5kaXZgXG4gIGdyaWQtY29sdW1uOiAxO1xuICBncmlkLXJvdzogMjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbmBcblxuY29uc3QgQ3VycmVudFZvbHVtZSA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xuICBjb2xvcjogJHtjb2xvci5qY3REYXJrR3JheX07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuYFxuXG5jb25zdCBDdXJyZW50Vm9sdW1lTGFiZWwgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDEuOHJlbTtcbiAgY29sb3I6ICR7Y29sb3IuamN0RGFya0dyYXl9O1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgbWFyZ2luLWJvdHRvbTogLjFyZW07XG4gIG1hcmdpbi1sZWZ0OiAuMnJlbTtcbmAiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgY29sb3IgfSBmcm9tICcuLi8uLi9wdWJsaWMvc2NyZWVuc2l6ZXMnXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL1NpZGViYXInXG5cblxuY29uc3QgTWFpbkNvbnRhaW5lciA9IHN0eWxlZC5tYWluYFxuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xuYFxuXG5jb25zdCBTaXRlRGV0YWlsc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctbGVmdDogN3JlbTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMHJlbSAxZnI7XG4gIHdpZHRoOiAxMDAlO1xuYFxuXG5jb25zdCBTaXRlTmFtZVRpbWUgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IDE1cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gXG5cbmNvbnN0IFNpdGVOYW1lID0gc3R5bGVkLmgyYFxuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogJHtjb2xvci5qY3REYXJrR3JheX07XG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICBmb250LXNpemU6IDM2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5gXG5cbmNvbnN0IERhdGVUaW1lID0gc3R5bGVkLmgzYFxuICBjb2xvcjogJHtjb2xvci5qY3REYXJrR3JheX07XG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWxlZnQ6IC4yNXJlbTtcbmBcblxuY29uc3QgU2l0ZURldGFpbHMgPSBzdHlsZWQuZGl2YFxuXG5gXG5cblxuY29uc3QgTGF5b3V0ID0gcHJvcHMgPT4ge1xuICByZXR1cm4oXG4gIDxNYWluQ29udGFpbmVyPlxuICAgIDxTaWRlYmFyIGNvbXBhbnk9e3Byb3BzLmNvbXBhbnl9IHNpdGVzPXtwcm9wcy5zaXRlc30gLz5cbiAgICA8U2l0ZURldGFpbHNDb250YWluZXI+XG4gICAgICA8U2l0ZU5hbWVUaW1lPlxuICAgICAgICA8U2l0ZU5hbWU+e3Byb3BzLnNpdGVuYW1lfTwvU2l0ZU5hbWU+XG4gICAgICAgIDxEYXRlVGltZT57cHJvcHMuZGF0ZX0gLSB7cHJvcHMudGltZX08L0RhdGVUaW1lPlxuICAgICAgPC9TaXRlTmFtZVRpbWU+XG4gICAgICA8U2l0ZURldGFpbHM+XG4gICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgICAgPC9TaXRlRGV0YWlscz5cbiAgICA8L1NpdGVEZXRhaWxzQ29udGFpbmVyPlxuICA8L01haW5Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IGNvbG9yIH0gZnJvbSAnLi4vLi4vcHVibGljL3NjcmVlbnNpemVzJ1xuXG5jb25zdCBTaWRlYmFyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDMwcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yLmpjdERhcmtHcmF5fTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMi41cmVtIDFmcjtcbiAgcG9zaXRpb246IHN0aWNreTtcbmBcblxuY29uc3QgQ29tcGFueUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEyLjVyZW07XG5cbiAgaW1ne1xuICAgIGhlaWdodDogNzUlO1xuICB9XG5gXG5cbmNvbnN0IFNpdGVOYXZDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBcbiAgaDF7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbmBcblxuY29uc3QgU2l0ZUxpbmtzID0gc3R5bGVkLm5hdmBcbiAgdWx7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gIH1cblxuICBsaXtcbiAgICBoZWlnaHQ6IDVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG5cbiAgbGk6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvci5qY3RPcmFuZ2V9O1xuICB9XG5cbiAgYXtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5gXG5cbmNvbnN0IFNpZGViYXIgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuKFxuICAgIDxTaWRlYmFyQ29udGFpbmVyPlxuICAgICAgPENvbXBhbnlDb250YWluZXI+XG4gICAgICAgIDxpbWcgc3JjPXtgL3N0YXRpYy8ke3Byb3BzLmNvbXBhbnl9LWxvZ28ucG5nYH0gLz5cbiAgICAgIDwvQ29tcGFueUNvbnRhaW5lcj5cbiAgICAgIDxTaXRlTmF2Q29udGFpbmVyPlxuICAgICAgICA8aDE+U2l0ZXM8L2gxPlxuICAgICAgICA8U2l0ZUxpbmtzPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtwcm9wcy5zaXRlc31cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L1NpdGVMaW5rcz5cbiAgICAgIDwvU2l0ZU5hdkNvbnRhaW5lcj5cbiAgICA8L1NpZGViYXJDb250YWluZXI+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IGNvbG9yIH0gZnJvbSAnLi4vLi4vcHVibGljL3NjcmVlbnNpemVzJ1xuXG5jb25zdCBEZXRhaWxzQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG5gXG5cbmNvbnN0IE5hbWVBbGFybXNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuYFxuXG5jb25zdCBEZXRhaWxzTmFtZSA9IHN0eWxlZC5oMWBcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvci5qY3REYXJrR3JheX07XG4gIHdpZHRoOiAxMHJlbTtcbiAgaGVpZ2h0OiA0cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmBcblxuY29uc3QgRG91Z2hudXRDaGFydENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogJHtwcm9wcyA9PiBwcm9wcy5pc1RhYmxlID8gXCJjZW50ZXJcIiA6IFwiZmxleC1zdGFydFwifTtcbmBcblxuXG5jb25zdCBOZXdNb2JpbGVEZXRhaWxzID0gcHJvcHMgPT4gKFxuICA8RGV0YWlsc0NvbnRhaW5lcj5cbiAgICA8TmFtZUFsYXJtc0NvbnRhaW5lcj5cbiAgICAgIDxEZXRhaWxzTmFtZT57cHJvcHMucmVzb3VyY2VUeXBlfTwvRGV0YWlsc05hbWU+XG4gICAgPC9OYW1lQWxhcm1zQ29udGFpbmVyPlxuICAgIFxuICAgIDxEb3VnaG51dENoYXJ0Q29udGFpbmVyIGlzVGFibGU9e3Byb3BzLmlzVGFibGV9ID5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L0RvdWdobnV0Q2hhcnRDb250YWluZXI+XG4gIDwvRGV0YWlsc0NvbnRhaW5lcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTmV3TW9iaWxlRGV0YWlscyIsImltcG9ydCB7IERvdWdobnV0IH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJ1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgY29sb3IgfSBmcm9tICcuLi8uLi9wdWJsaWMvc2NyZWVuc2l6ZXMnXG5cblxuY29uc3QgRG91Z2hudXRDaGFydCA9IHByb3BzID0+IHtcbiAgY29uc3QgZGF0YSA9IHtcbiAgICBkYXRhc2V0czogW3tcbiAgICAgIGRhdGE6IFtwcm9wcy5jdXJyZW50VmFsdWUsIChwcm9wcy50b3RhbFZhbHVlIC0gcHJvcHMuY3VycmVudFZhbHVlKV0sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IChjdHgpID0+IHtcbiAgICAgICAgaWYoY3R4LmRhdGFzZXQuZGF0YVswXSA8IHByb3BzLmFsYXJtT2ZmKXtcbiAgICAgICAgcmV0dXJuIFsgJ2xpZ2h0Z3JlZW4nLCAncmdiYSgwLDAsMCwuMDUpJyBdXG4gICAgICB9IGVsc2UgaWYoY3R4LmRhdGFzZXQuZGF0YVswXSA+IHByb3BzLmFsYXJtT24pe1xuICAgICAgICAgIHJldHVybiBbICdyZWQnLCAncmdiYSgwLDAsMCwuMDUpJyBdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFsgJyNmZmNjMDAnLCAncmdiYSgwLDAsMCwuMDUpJyBdXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBib3JkZXJXaWR0aDogMFxuICAgIH1dXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxHcmFwaENvbnRhaW5lcj5cbiAgICAgIDxHcmFwaFRpdGxlPntwcm9wcy5uYW1lfTwvR3JhcGhUaXRsZT5cbiAgICAgIDxHcmFwaD5cbiAgICAgICAgPERvdWdobnV0IFxuICAgICAgICAgIGRhdGE9eyBkYXRhIH1cbiAgICAgICAgICB3aWR0aD17IDEwMCB9XG4gICAgICAgICAgaGVpZ2h0PXsgMTAwIH1cbiAgICAgICAgICBvcHRpb25zPXt7IFxuICAgICAgICAgICAgY3V0b3V0UGVyY2VudGFnZTogODAsIFxuICAgICAgICAgICAgcm90YXRpb246ICgtMS4yNSAqIE1hdGguUEkpLFxuICAgICAgICAgICAgY2lyY3VtZmVyZW5jZTogKDEuNSAqIE1hdGguUEkpLFxuICAgICAgICAgICAgdG9vbHRpcHM6IGZhbHNlLFxuICAgICAgICAgICAgaG92ZXI6IGZhbHNlXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvR3JhcGg+XG4gICAgICA8Vm9sdW1lPlxuICAgICAgICA8Q3VycmVudFZvbHVtZT57IHByb3BzLmN1cnJlbnRWYWx1ZSAhPT0gbnVsbCA/IHByb3BzLmN1cnJlbnRWYWx1ZS50b0ZpeGVkKDIpIDogcHJvcHMuY3VycmVudFZhbHVlIH08L0N1cnJlbnRWb2x1bWU+XG4gICAgICAgIDxDdXJyZW50Vm9sdW1lTGFiZWw+e3Byb3BzLnVuaXRPZk1lYXN1cmV9PC9DdXJyZW50Vm9sdW1lTGFiZWw+XG4gICAgICA8L1ZvbHVtZT5cbiAgICA8L0dyYXBoQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERvdWdobnV0Q2hhcnQgICAgXG5cblxuY29uc3QgR3JhcGhDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkOiAyMCUgMWZyIC8gMWZyO1xuICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XG5gXG5jb25zdCBHcmFwaFRpdGxlID0gc3R5bGVkLmgxYFxuICBncmlkLWNvbHVtbjogMTtcbiAgZ3JpZC1yb3c6IDE7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbmBcblxuY29uc3QgR3JhcGggPSBzdHlsZWQuZGl2YFxuICBncmlkLWNvbHVtbjogMTtcbiAgZ3JpZC1yb3c6IDI7XG5gXG5cbmNvbnN0IFZvbHVtZSA9IHN0eWxlZC5kaXZgXG4gIGdyaWQtY29sdW1uOiAxO1xuICBncmlkLXJvdzogMjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbmBcblxuY29uc3QgQ3VycmVudFZvbHVtZSA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBjb2xvcjogJHtjb2xvci5qY3REYXJrR3JheX07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuYFxuXG5jb25zdCBDdXJyZW50Vm9sdW1lTGFiZWwgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDEuOHJlbTtcbiAgY29sb3I6ICR7Y29sb3IuamN0RGFya0dyYXl9O1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgbWFyZ2luLWJvdHRvbTogLjFyZW07XG4gIG1hcmdpbi1sZWZ0OiAuMnJlbTtcbmAiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IFNpZGViYXIgZnJvbSAncmVhY3Qtc2lkZWJhcidcbmltcG9ydCB7IGNvbG9yIH0gZnJvbSAnLi4vLi4vcHVibGljL3NjcmVlbnNpemVzJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgTW9iaWxlTWFpbkNvbnRhaW5lciA9IHN0eWxlZC5tYWluYFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3cmVtIDFmcjtcbmBcblxuY29uc3QgTW9iaWxlQ29tcGFueUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDYwJSAyMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3IuamN0RGFya0dyYXl9O1xuICBwbGFjZS1pdGVtczogc3RyZXRjaDtcbmBcblxuY29uc3QgTWVudSA9IHN0eWxlZC5kaXZgXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcbiAgaW1ne1xuICAgIHdpZHRoOiAyNHB4O1xuICB9XG5gXG5cbmNvbnN0IE5hbWVEYXRlVGltZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gXG5cbmNvbnN0IE1vYmlsZVNpdGVOYW1lID0gc3R5bGVkLmgyYFxuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICR7Y29sb3IuamN0V2hpdGV9O1xuYFxuXG5jb25zdCBEYXRlVGltZSA9IHN0eWxlZC5oM2BcbiAgY29sb3I6ICR7Y29sb3IuamN0V2hpdGV9O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbmBcblxuY29uc3QgTW9iaWxlQ2Fyb3VzZWxDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA0cmVtO1xuYFxuXG5jb25zdCBDb21wYW55Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTIuNXJlbTtcblxuICBpbWd7XG4gICAgaGVpZ2h0OiA3NSU7XG4gIH1cbmBcblxuY29uc3QgU2l0ZU5hdkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIFxuICBoMXtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuYFxuXG5jb25zdCBTaXRlTGlua3MgPSBzdHlsZWQubmF2YFxuICB1bHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgfVxuXG4gIGxpe1xuICAgIGhlaWdodDogNXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cblxuICBsaTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yLmpjdE9yYW5nZX07XG4gIH1cblxuICBhe1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbmBcblxuXG5jb25zdCBNb2JpbGVMYXlvdXQgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IFtpc1NpdGVNZW51T3Blbiwgc2V0SXNTaXRlTWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpc0FsYXJtTWVudU9wZW4sIHNldElzQWxhcm1NZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgXG4gIHJldHVybihcbiAgICA8U2lkZWJhclxuICAgICAgc2lkZWJhcj17XG4gICAgICAgIDw+XG4gICAgICAgICAgPENvbXBhbnlDb250YWluZXI+XG4gICAgICAgICAgICA8aW1nIHNyYz17YC4uL3N0YXRpYy8ke3Byb3BzLmNvbXBhbnl9LWxvZ28ucG5nYH0gLz5cbiAgICAgICAgICA8L0NvbXBhbnlDb250YWluZXI+XG4gICAgICAgICAgPFNpdGVOYXZDb250YWluZXI+XG4gICAgICAgICAgICA8aDE+U2l0ZXM8L2gxPlxuICAgICAgICAgICAgPFNpdGVMaW5rcz5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5zaXRlc31cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvU2l0ZUxpbmtzPlxuICAgICAgICAgIDwvU2l0ZU5hdkNvbnRhaW5lcj5cbiAgICAgICAgPC8+XG4gICAgICB9XG4gICAgICBvcGVuPXtpc1NpdGVNZW51T3Blbn1cbiAgICAgIG9uU2V0T3Blbj17c2V0SXNTaXRlTWVudU9wZW59XG4gICAgICBzdHlsZXM9e3tcbiAgICAgICAgc2lkZWJhcjoge1xuICAgICAgICAgIHdpZHRoOiAnMzByZW0nLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7Y29sb3IuamN0RGFya0dyYXl9YCxcbiAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgICAgICAgZ3JpZFRlbXBsYXRlUm93czogJzEyLjVyZW0gMWZyJ1xuICAgICAgICB9LFxuICAgICAgICBvdmVybGF5OiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwKSdcbiAgICAgICAgfVxuICAgICAgfX1cbiAgICA+XG4gICAgICA8U2lkZWJhclxuICAgICAgc2lkZWJhcj17XG4gICAgICAgIDw+XG4gICAgICAgICAgPENvbXBhbnlDb250YWluZXI+XG4gICAgICAgICAgICA8aW1nIHNyYz17YC4uL3N0YXRpYy8ke3Byb3BzLmNvbXBhbnl9LWxvZ28ucG5nYH0gLz5cbiAgICAgICAgICA8L0NvbXBhbnlDb250YWluZXI+XG4gICAgICAgICAgPFNpdGVOYXZDb250YWluZXI+XG4gICAgICAgICAgICA8aDE+U2l0ZXM8L2gxPlxuICAgICAgICAgICAgPFNpdGVMaW5rcz5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5zaXRlc31cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvU2l0ZUxpbmtzPlxuICAgICAgICAgIDwvU2l0ZU5hdkNvbnRhaW5lcj5cbiAgICAgICAgPC8+XG4gICAgICB9XG4gICAgICBvcGVuPXtpc0FsYXJtTWVudU9wZW59XG4gICAgICBvblNldE9wZW49e3NldElzQWxhcm1NZW51T3Blbn1cbiAgICAgIHB1bGxSaWdodD17dHJ1ZX1cbiAgICAgIHN0eWxlcz17e1xuICAgICAgICBzaWRlYmFyOiB7XG4gICAgICAgICAgd2lkdGg6ICczMHJlbScsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHtjb2xvci5qY3REYXJrR3JheX1gLFxuICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICAgICAgICBncmlkVGVtcGxhdGVSb3dzOiAnMTIuNXJlbSAxZnInXG4gICAgICAgIH0sXG4gICAgICAgIG92ZXJsYXk6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDApJ1xuICAgICAgICB9XG4gICAgICB9fVxuICAgICAgPlxuICAgICAgICA8TW9iaWxlTWFpbkNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxNb2JpbGVDb21wYW55Q29udGFpbmVyPlxuICAgICAgICAgICAgICA8TWVudSBvbkNsaWNrPXsoKSA9PiBzZXRJc1NpdGVNZW51T3Blbih0cnVlKX0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9Jy4uL3N0YXRpYy9tZW51LWljb24uc3ZnJyAvPlxuICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICAgIDxOYW1lRGF0ZVRpbWVDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPE1vYmlsZVNpdGVOYW1lPntwcm9wcy5zaXRlbmFtZX08L01vYmlsZVNpdGVOYW1lPlxuICAgICAgICAgICAgICAgIDxEYXRlVGltZT57cHJvcHMuZGF0ZX0gLSB7cHJvcHMudGltZX08L0RhdGVUaW1lPlxuICAgICAgICAgICAgICA8L05hbWVEYXRlVGltZUNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPE1lbnUgb25DbGljaz17KCkgPT4gc2V0SXNBbGFybU1lbnVPcGVuKHRydWUpfT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0nLi4vc3RhdGljL2FsYXJtLWljb24ucG5nJyAvPlxuICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICA8L01vYmlsZUNvbXBhbnlDb250YWluZXI+XG4gICAgICAgICAgICA8TW9iaWxlQ2Fyb3VzZWxDb250YWluZXI+XG4gICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvTW9iaWxlQ2Fyb3VzZWxDb250YWluZXI+XG4gICAgICAgIDwvTW9iaWxlTWFpbkNvbnRhaW5lcj5cbiAgICAgIDwvU2lkZWJhcj5cbiAgICA8L1NpZGViYXI+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVMYXlvdXQiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91cmw9cmVxdWlyZShcInVybFwiKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7dmFyIF9yb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yb3V0ZXJcIikpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7ZnVuY3Rpb24gaXNMb2NhbChocmVmKXt2YXIgdXJsPSgwLF91cmwucGFyc2UpKGhyZWYsZmFsc2UsdHJ1ZSk7dmFyIG9yaWdpbj0oMCxfdXJsLnBhcnNlKSgoMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCksZmFsc2UsdHJ1ZSk7cmV0dXJuIXVybC5ob3N0fHx1cmwucHJvdG9jb2w9PT1vcmlnaW4ucHJvdG9jb2wmJnVybC5ob3N0PT09b3JpZ2luLmhvc3Q7fWZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmMpe3ZhciBsYXN0SHJlZj1udWxsO3ZhciBsYXN0QXM9bnVsbDt2YXIgbGFzdFJlc3VsdD1udWxsO3JldHVybihocmVmLGFzKT0+e2lmKGxhc3RSZXN1bHQmJmhyZWY9PT1sYXN0SHJlZiYmYXM9PT1sYXN0QXMpe3JldHVybiBsYXN0UmVzdWx0O312YXIgcmVzdWx0PWZvcm1hdEZ1bmMoaHJlZixhcyk7bGFzdEhyZWY9aHJlZjtsYXN0QXM9YXM7bGFzdFJlc3VsdD1yZXN1bHQ7cmV0dXJuIHJlc3VsdDt9O31mdW5jdGlvbiBmb3JtYXRVcmwodXJsKXtyZXR1cm4gdXJsJiZ0eXBlb2YgdXJsPT09J29iamVjdCc/KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh1cmwpOnVybDt9dmFyIG9ic2VydmVyO3ZhciBsaXN0ZW5lcnM9bmV3IE1hcCgpO3ZhciBJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/d2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyOm51bGw7dmFyIHByZWZldGNoZWQ9e307ZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKXsvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuaWYob2JzZXJ2ZXIpe3JldHVybiBvYnNlcnZlcjt9Ly8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG5pZighSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpe3JldHVybiB1bmRlZmluZWQ7fXJldHVybiBvYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcz0+e2VudHJpZXMuZm9yRWFjaChlbnRyeT0+e2lmKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpe3JldHVybjt9dmFyIGNiPWxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KTtpZihlbnRyeS5pc0ludGVyc2VjdGluZ3x8ZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8+MCl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7bGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpO2NiKCk7fX0pO30se3Jvb3RNYXJnaW46JzIwMHB4J30pO312YXIgbGlzdGVuVG9JbnRlcnNlY3Rpb25zPShlbCxjYik9Pnt2YXIgb2JzZXJ2ZXI9Z2V0T2JzZXJ2ZXIoKTtpZighb2JzZXJ2ZXIpe3JldHVybigpPT57fTt9b2JzZXJ2ZXIub2JzZXJ2ZShlbCk7bGlzdGVuZXJzLnNldChlbCxjYik7cmV0dXJuKCk9Pnt0cnl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGVycik7fWxpc3RlbmVycy5kZWxldGUoZWwpO307fTtjbGFzcyBMaW5rIGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3Rvcihwcm9wcyl7c3VwZXIocHJvcHMpO3RoaXMucD12b2lkIDA7dGhpcy5jbGVhblVwTGlzdGVuZXJzPSgpPT57fTt0aGlzLmZvcm1hdFVybHM9bWVtb2l6ZWRGb3JtYXRVcmwoKGhyZWYsYXNIcmVmKT0+e3JldHVybntocmVmOigwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoaHJlZikpLGFzOmFzSHJlZj8oMCxfcm91dGVyMi5hZGRCYXNlUGF0aCkoZm9ybWF0VXJsKGFzSHJlZikpOmFzSHJlZn07fSk7dGhpcy5saW5rQ2xpY2tlZD1lPT57dmFye25vZGVOYW1lLHRhcmdldH09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYodGFyZ2V0JiZ0YXJnZXQhPT0nX3NlbGYnfHxlLm1ldGFLZXl8fGUuY3RybEtleXx8ZS5zaGlmdEtleXx8ZS5uYXRpdmVFdmVudCYmZS5uYXRpdmVFdmVudC53aGljaD09PTIpKXsvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG5yZXR1cm47fXZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO2lmKCFpc0xvY2FsKGhyZWYpKXsvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG5yZXR1cm47fXZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO2hyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxocmVmKTthcz1hcz8oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGFzKTpocmVmO2UucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbnZhcntzY3JvbGx9PXRoaXMucHJvcHM7aWYoc2Nyb2xsPT1udWxsKXtzY3JvbGw9YXMuaW5kZXhPZignIycpPDA7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuX3JvdXRlci5kZWZhdWx0W3RoaXMucHJvcHMucmVwbGFjZT8ncmVwbGFjZSc6J3B1c2gnXShocmVmLGFzLHtzaGFsbG93OnRoaXMucHJvcHMuc2hhbGxvd30pLnRoZW4oc3VjY2Vzcz0+e2lmKCFzdWNjZXNzKXJldHVybjtpZihzY3JvbGwpe3dpbmRvdy5zY3JvbGxUbygwLDApO2RvY3VtZW50LmJvZHkuZm9jdXMoKTt9fSk7fTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYocHJvcHMucHJlZmV0Y2gpe2NvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX10aGlzLnA9cHJvcHMucHJlZmV0Y2ghPT1mYWxzZTt9Y29tcG9uZW50V2lsbFVubW91bnQoKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKTt9Z2V0UGF0aHMoKXt2YXJ7cGF0aG5hbWV9PXdpbmRvdy5sb2NhdGlvbjt2YXJ7aHJlZjpwYXJzZWRIcmVmLGFzOnBhcnNlZEFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO3ZhciByZXNvbHZlZEhyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRIcmVmKTtyZXR1cm5bcmVzb2x2ZWRIcmVmLHBhcnNlZEFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUscGFyc2VkQXMpOnJlc29sdmVkSHJlZl07fWhhbmRsZVJlZihyZWYpe2lmKHRoaXMucCYmSW50ZXJzZWN0aW9uT2JzZXJ2ZXImJnJlZiYmcmVmLnRhZ05hbWUpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO3ZhciBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFt0aGlzLmdldFBhdGhzKCkuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV07aWYoIWlzUHJlZmV0Y2hlZCl7dGhpcy5jbGVhblVwTGlzdGVuZXJzPWxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsKCk9Pnt0aGlzLnByZWZldGNoKCk7fSk7fX19Ly8gVGhlIGZ1bmN0aW9uIGlzIG1lbW9pemVkIHNvIHRoYXQgbm8gZXh0cmEgbGlmZWN5Y2xlcyBhcmUgbmVlZGVkXG4vLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbnByZWZldGNoKG9wdGlvbnMpe2lmKCF0aGlzLnB8fHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJylyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxudmFyIHBhdGhzPXRoaXMuZ2V0UGF0aHMoKTsvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4vLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3Rcbi8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuX3JvdXRlci5kZWZhdWx0LnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8wXSxwYXRoc1svKiBhc1BhdGggKi8xXSxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtwcmVmZXRjaGVkW3BhdGhzLmpvaW4oLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiclJyldPXRydWU7fXJlbmRlcigpe3ZhcntjaGlsZHJlbn09dGhpcy5wcm9wczt2YXJ7aHJlZixhc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG52YXIgY2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO3ZhciBwcm9wcz17cmVmOmVsPT57dGhpcy5oYW5kbGVSZWYoZWwpO2lmKGNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmKXtpZih0eXBlb2YgY2hpbGQucmVmPT09J2Z1bmN0aW9uJyljaGlsZC5yZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkLnJlZj09PSdvYmplY3QnKXtjaGlsZC5yZWYuY3VycmVudD1lbDt9fX0sb25Nb3VzZUVudGVyOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9dGhpcy5wcmVmZXRjaCh7cHJpb3JpdHk6dHJ1ZX0pO30sb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7dGhpcy5saW5rQ2xpY2tlZChlKTt9fX07Ly8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4vLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbmlmKHRoaXMucHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtwcm9wcy5ocmVmPWFzfHxocmVmO30vLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4vLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKXt2YXIgcmV3cml0ZVVybEZvck5leHRFeHBvcnQ9cmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JykucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7aWYocHJvcHMuaHJlZiYmdHlwZW9mIF9fTkVYVF9EQVRBX18hPT0ndW5kZWZpbmVkJyYmX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KXtwcm9wcy5ocmVmPXJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpO319cmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxwcm9wcyk7fX1pZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3ZhciB3YXJuPSgwLF91dGlscy5leGVjT25jZSkoY29uc29sZS5lcnJvcik7Ly8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG52YXIgUHJvcFR5cGVzPXJlcXVpcmUoJ3Byb3AtdHlwZXMnKTt2YXIgZXhhY3Q9cmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpOy8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbkxpbmsucHJvcFR5cGVzPWV4YWN0KHtocmVmOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsYXM6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkscHJlZmV0Y2g6UHJvcFR5cGVzLmJvb2wscmVwbGFjZTpQcm9wVHlwZXMuYm9vbCxzaGFsbG93OlByb3BUeXBlcy5ib29sLHBhc3NIcmVmOlByb3BUeXBlcy5ib29sLHNjcm9sbDpQcm9wVHlwZXMuYm9vbCxjaGlsZHJlbjpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwocHJvcHMscHJvcE5hbWUpPT57dmFyIHZhbHVlPXByb3BzW3Byb3BOYW1lXTtpZih0eXBlb2YgdmFsdWU9PT0nc3RyaW5nJyl7d2FybihcIldhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5cIik7fXJldHVybiBudWxsO31dKS5pc1JlcXVpcmVkfSk7fXZhciBfZGVmYXVsdD1MaW5rO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovdmFyIHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbnZhciB1cmxQcm9wZXJ0eUZpZWxkcz1bJ3BhdGhuYW1lJywncm91dGUnLCdxdWVyeScsJ2FzUGF0aCcsJ2NvbXBvbmVudHMnLCdpc0ZhbGxiYWNrJywnYmFzZVBhdGgnXTt2YXIgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO3ZhciBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4vLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbi8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsZmllbGQse2dldCgpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT1mdW5jdGlvbigpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JvdXRlckV2ZW50cy5mb3JFYWNoKGV2ZW50PT57c2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57X3JvdXRlcjIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsZnVuY3Rpb24oKXt2YXIgZXZlbnRGaWVsZD1cIm9uXCIrZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZXZlbnQuc3Vic3RyaW5nKDEpO3ZhciBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmd1bWVudHMpO31jYXRjaChlcnIpey8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKFwiRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6IFwiK2V2ZW50RmllbGQpOy8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKGVyci5tZXNzYWdlK1wiXFxuXCIrZXJyLnN0YWNrKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXt2YXIgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJzt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fXJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO30vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbnZhciBfZGVmYXVsdD1zaW5nbGV0b25Sb3V0ZXI7Ly8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtmdW5jdGlvbiB1c2VSb3V0ZXIoKXtyZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTt9Ly8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbnZhciBjcmVhdGVSb3V0ZXI9ZnVuY3Rpb24gY3JlYXRlUm91dGVyKCl7Zm9yKHZhciBfbGVuPWFyZ3VtZW50cy5sZW5ndGgsYXJncz1uZXcgQXJyYXkoX2xlbiksX2tleT0wO19rZXk8X2xlbjtfa2V5Kyspe2FyZ3NbX2tleV09YXJndW1lbnRzW19rZXldO31zaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7dmFyIF9yb3V0ZXI9cm91dGVyO3ZhciBpbnN0YW5jZT17fTtmb3IodmFyIHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oe30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPWZ1bmN0aW9uKCl7cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3VtZW50cyk7fTt9KTtyZXR1cm4gaW5zdGFuY2U7fSIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3ZhciBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9XCJ3aXRoUm91dGVyKFwiK25hbWUrXCIpXCI7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIG1pdHQoKSB7XG4gICAgY29uc3QgYWxsID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvbih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcik7XG4gICAgICAgIH0sXG4gICAgICAgIG9mZih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW1pdCh0eXBlLCAuLi5ldnRzKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoLi4uZXZ0cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gbWl0dDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuY29uc3QgbWl0dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBpc19keW5hbWljXzEgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xuY29uc3Qgcm91dGVfbWF0Y2hlcl8xID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbmNvbnN0IHJvdXRlX3JlZ2V4XzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSAhPT0gMCA/IGJhc2VQYXRoICsgcGF0aCA6IHBhdGg7XG59XG5leHBvcnRzLmFkZEJhc2VQYXRoID0gYWRkQmFzZVBhdGg7XG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICAgICAgPyBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xuICAgICAgICA6IHBhdGg7XG59XG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XG5mdW5jdGlvbiB0b1JvdXRlKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJztcbn1cbmNvbnN0IHByZXBhcmVSb3V0ZSA9IChwYXRoKSA9PiB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aCk7XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgaXNTZXJ2ZXJSZW5kZXIsIGNiKSB7XG4gICAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMTtcbiAgICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgICBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtkZWxCYXNlUGF0aChwYXRobmFtZSl9Lmpzb25gKSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9KSwge1xuICAgICAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDAgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGE7XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAgIC8vIGxvb3AuXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGVyci5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUic7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRobmFtZSwgcXVlcnksIGFzLCB7IGluaXRpYWxQcm9wcywgcGFnZUxvYWRlciwgQXBwLCB3cmFwQXBwLCBDb21wb25lbnQsIGVyciwgc3Vic2NyaXB0aW9uLCBpc0ZhbGxiYWNrLCB9KSB7XG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gICAgICAgIHRoaXMuc2RjID0ge307XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgdXRpbHNfMS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmIChlLnN0YXRlICYmXG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciAmJlxuICAgICAgICAgICAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICAgICAgICAgICAgdXJsXzEucGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlcGxhY2UodXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldFN0YXRpY0RhdGEgPSAoYXNQYXRoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZSh1cmxfMS5wYXJzZShhc1BhdGgpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgICAgICAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgICAgICAgICAgICA6IGZldGNoTmV4dERhdGEocGF0aG5hbWUsIG51bGwsIHRoaXMuaXNTc3IsIGRhdGEgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U2VydmVyRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdXJsXzEucGFyc2UoYXNQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1Nzcik7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgICAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgdGhpcy5hc1BhdGggPVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgaXNfZHluYW1pY18xLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgYXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gICAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKHJvdXRlLCBtb2QpIHtcbiAgICAgICAgY29uc3QgQ29tcG9uZW50ID0gbW9kLmRlZmF1bHQgfHwgbW9kO1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGF0YSksIHsgQ29tcG9uZW50LCBfX05fU1NHOiBtb2QuX19OX1NTRywgX19OX1NTUDogbW9kLl9fTl9TU1AgfSk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhO1xuICAgICAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICAgICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgICAqL1xuICAgIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwdXNoKHVybCwgYXMgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHJlcGxhY2UodXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGNoYW5nZShtZXRob2QsIF91cmwsIF9hcywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICAgICAgaWYgKHV0aWxzXzEuU1QpIHtcbiAgICAgICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAgICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgICAgICAgbGV0IHVybCA9IHR5cGVvZiBfdXJsID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsO1xuICAgICAgICAgICAgbGV0IGFzID0gdHlwZW9mIF9hcyA9PT0gJ29iamVjdCcgPyB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXM7XG4gICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpO1xuICAgICAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAgICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKTtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGlmIChpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gdXJsXzEucGFyc2UoYXMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSByb3V0ZV9yZWdleF8xLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByb3V0ZV9tYXRjaGVyXzEuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbSA9PiAhcXVlcnlbcGFyYW1dKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2ApKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpO1xuICAgICAgICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4ocm91dGVJbmZvID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcyk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9LCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgdXRpbHNfMS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAgICAgJycsIGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgICAgICAvLyBJZiB0aGUgcm91dGUgaXMgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICAgICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVFcnJvciA9IChlcnIsIGxvYWRFcnJvckZhaWwpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGdpcEVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzID0+IHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICAgIH0pLCByZWplY3QpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldERhdGEoKCkgPT4gX19OX1NTR1xuICAgICAgICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShhcylcbiAgICAgICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGFzKVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgICAgICB9KSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpO1xuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHRoaXMubm90aWZ5KGRhdGEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAgICovXG4gICAgYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgICAgICBpZiAoaWRFbCkge1xuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVybElzTmV3KGFzUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICovXG4gICAgcHJlZmV0Y2godXJsLCBhc1BhdGggPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHVybF8xLnBhcnNlKHVybCk7XG4gICAgICAgICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSk7XG4gICAgICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICAgICAgICAgIF0pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuIHV0aWxzXzEubG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKTtcbiAgICAgICAgICAgIGUuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEpIHtcbiAgICAgICAgdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuUm91dGVyLmV2ZW50cyA9IG1pdHRfMS5kZWZhdWx0KCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztcbmZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlKSB7XG4gICAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7XG59XG5leHBvcnRzLmlzRHluYW1pY1JvdXRlID0gaXNEeW5hbWljUm91dGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KSB7XG4gICAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4O1xuICAgIHJldHVybiAocGF0aG5hbWUpID0+IHtcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWNvZGUgPSAocGFyYW0pID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO1xuICAgICAgICAgICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdO1xuICAgICAgICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdO1xuICAgICAgICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICAgICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKGVudHJ5ID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogZGVjb2RlKG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9O1xufVxuZXhwb3J0cy5nZXRSb3V0ZU1hdGNoZXIgPSBnZXRSb3V0ZU1hdGNoZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpO1xufVxuZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpIHtcbiAgICAvLyBFc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIFJlZ0V4XG4gICAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKTtcbiAgICBjb25zdCBncm91cHMgPSB7fTtcbiAgICBsZXQgZ3JvdXBJbmRleCA9IDE7XG4gICAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgIGdyb3Vwc1skMVxuICAgICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9O1xuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbCA/ICcvKC4rPyknIDogJy8oW14vXSs/KSc7XG4gICAgfSk7XG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlO1xuICAgIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAgIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpO1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gJDFcbiAgICAgICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKTtcbiAgICAgICAgICAgIHJldHVybiBpc0NhdGNoQWxsXG4gICAgICAgICAgICAgICAgPyBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+Lis/KWBcbiAgICAgICAgICAgICAgICA6IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT5bXi9dKz8pYDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLCBncm91cHMgfSwgKG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICAgID8ge1xuICAgICAgICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgICAgICB9XG4gICAgICAgIDoge30pKTtcbn1cbmV4cG9ydHMuZ2V0Um91dGVSZWdleCA9IGdldFJvdXRlUmVnZXg7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbi8qKlxuICogVXRpbHNcbiAqL1xuZnVuY3Rpb24gZXhlY09uY2UoZm4pIHtcbiAgICBsZXQgdXNlZCA9IGZhbHNlO1xuICAgIGxldCByZXN1bHQ7XG4gICAgcmV0dXJuICgoLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoIXVzZWQpIHtcbiAgICAgICAgICAgIHVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZXhlY09uY2UgPSBleGVjT25jZTtcbmZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICAgIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YDtcbn1cbmV4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbjtcbmZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTtcbn1cbmV4cG9ydHMuZ2V0VVJMID0gZ2V0VVJMO1xuZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgICAgID8gQ29tcG9uZW50XG4gICAgICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbn1cbmV4cG9ydHMuZ2V0RGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZTtcbmZ1bmN0aW9uIGlzUmVzU2VudChyZXMpIHtcbiAgICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudDtcbn1cbmV4cG9ydHMuaXNSZXNTZW50ID0gaXNSZXNTZW50O1xuYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIGN0eCkge1xuICAgIHZhciBfYTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoKF9hID0gQXBwLnByb3RvdHlwZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYDtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gICAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcyk7XG4gICAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH1cbiAgICBpZiAoIXByb3BzKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYDtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2ApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wcztcbn1cbmV4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcyA9IGxvYWRHZXRJbml0aWFsUHJvcHM7XG5leHBvcnRzLnVybE9iamVjdEtleXMgPSBbXG4gICAgJ2F1dGgnLFxuICAgICdoYXNoJyxcbiAgICAnaG9zdCcsXG4gICAgJ2hvc3RuYW1lJyxcbiAgICAnaHJlZicsXG4gICAgJ3BhdGgnLFxuICAgICdwYXRobmFtZScsXG4gICAgJ3BvcnQnLFxuICAgICdwcm90b2NvbCcsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnc2VhcmNoJyxcbiAgICAnc2xhc2hlcycsXG5dO1xuZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsLCBvcHRpb25zKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChleHBvcnRzLnVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVybF8xLmZvcm1hdCh1cmwsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5mb3JtYXRXaXRoVmFsaWRhdGlvbiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uO1xuZXhwb3J0cy5TUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCc7XG5leHBvcnRzLlNUID0gZXhwb3J0cy5TUCAmJlxuICAgIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbic7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgQnJvd3NlclZpZXcsIE1vYmlsZVZpZXcgfSBmcm9tICdyZWFjdC1kZXZpY2UtZGV0ZWN0J1xuXG5pbXBvcnQgQnJvd3NlckxheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Jyb3dzZXIvTGF5b3V0J1xuaW1wb3J0IEJyb3dzZXJEZXRhaWxzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvYnJvd3Nlci9EZXRhaWxzJ1xuaW1wb3J0IEJyb3dzZXJHYXVnZUNoYXJ0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvYnJvd3Nlci9HYXVnZUNoYXJ0J1xuXG5pbXBvcnQgTW9iaWxlTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbW9iaWxlL0xheW91dCdcbmltcG9ydCBNb2JpbGVEZXRhaWxzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbW9iaWxlL0RldGFpbHMnXG5pbXBvcnQgTW9iaWxlR2F1Z2VDaGFydCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL21vYmlsZS9HYXVnZUNoYXJ0J1xuXG5cbmNvbnN0IFVuaXZlcnNpdHkgPSAoeyBkYXRhLCBzaXRlcyB9KSA9PiAoXG4gIDw+XG4gIDxCcm93c2VyVmlldz5cbiAgICA8QnJvd3NlckxheW91dCBcbiAgICAgIGNvbXBhbnk9J21hbW1vdGgnXG4gICAgICBzaXRlcz17IHNpdGVzLm1hcCgoc2l0ZSwgaSkgPT4gPGxpIGtleT17aX0+PExpbmsgaHJlZj17YC9tYW1tb3RoLyR7c2l0ZS5CQVRURVJZLnRvTG93ZXJDYXNlKCl9YH0+PGE+e3NpdGUuQkFUVEVSWX08L2E+PC9MaW5rPjwvbGk+KSB9IFxuICAgICAgc2l0ZW5hbWU9e1wiVW5pdmVyc2l0eVwifSBcbiAgICAgIGRhdGU9e2RhdGFbMF0ubURhdGV9IFxuICAgICAgdGltZT17ZGF0YVswXS5tVGltZX1cbiAgICA+XG4gICAgICA8QnJvd3NlckRldGFpbHNcbiAgICAgICAgcmVzb3VyY2VUeXBlPSdXYXRlcidcbiAgICAgICAgbmFtZT17ZGF0YVswXS5TMX0gXG4gICAgICAgIHVuaXRPZk1lYXN1cmU9e2RhdGFbMF0uUzIudG9Mb3dlckNhc2UoKX1cbiAgICAgICAgY3VycmVudFZhbHVlPXtkYXRhWzBdLlYxfVxuICAgICAgICB0b3RhbFZhbHVlPXsxNn1cbiAgICAgICAgdHB1bXBPbj17ZGF0YVswXS5WM31cbiAgICAgICAgdHB1bXBPZmY9e2RhdGFbMF0uVjR9XG4gICAgICAgIGFsYXJtT249e2RhdGFbMF0uVjV9XG4gICAgICAgIGFsYXJtT2ZmPXtkYXRhWzBdLlY2fVxuICAgICAgPlxuICAgICAgICA8QnJvd3NlckdhdWdlQ2hhcnQgbmFtZT17ZGF0YVswXS5TMX0gY3VycmVudFZhbHVlPXtkYXRhWzBdLlYxfSB0b3RhbFZhbHVlPXsxNn0gdW5pdE9mTWVhc3VyZT17ZGF0YVswXS5TMi50b0xvd2VyQ2FzZSgpfSAvPlxuICAgICAgICA8QnJvd3NlckdhdWdlQ2hhcnQgbmFtZT17ZGF0YVswXS5TM30gY3VycmVudFZhbHVlPXtkYXRhWzBdLlYyfSB0b3RhbFZhbHVlPXsxNn0gdW5pdE9mTWVhc3VyZT17ZGF0YVswXS5TNC50b0xvd2VyQ2FzZSgpfSAvPlxuICAgICAgPC9Ccm93c2VyRGV0YWlscz5cbiAgICA8L0Jyb3dzZXJMYXlvdXQ+XG4gIDwvQnJvd3NlclZpZXc+XG4gIFxuICA8TW9iaWxlVmlldz5cbiAgICA8TW9iaWxlTGF5b3V0IFxuICAgICAgY29tcGFueT0nbWFtbW90aCdcbiAgICAgIHNpdGVzPXsgc2l0ZXMubWFwKChzaXRlLCBpKSA9PiA8bGkga2V5PXtpfT48TGluayBocmVmPXtgL21hbW1vdGgvJHtzaXRlLkJBVFRFUlkudG9Mb3dlckNhc2UoKX1gfT48YT57c2l0ZS5CQVRURVJZfTwvYT48L0xpbms+PC9saT4pIH0gXG4gICAgICBzaXRlbmFtZT17XCJVbml2ZXJzaXR5XCJ9IFxuICAgICAgZGF0ZT17ZGF0YVswXS5tRGF0ZX0gXG4gICAgICB0aW1lPXtkYXRhWzBdLm1UaW1lfVxuICAgID5cbiAgICAgIDxNb2JpbGVEZXRhaWxzXG4gICAgICAgIHJlc291cmNlVHlwZT0nV2F0ZXInXG4gICAgICAgIG5hbWU9e2RhdGFbMF0uUzF9IFxuICAgICAgICB1bml0T2ZNZWFzdXJlPXtkYXRhWzBdLlMyLnRvTG93ZXJDYXNlKCl9XG4gICAgICAgIGN1cnJlbnRWYWx1ZT17ZGF0YVswXS5WMX1cbiAgICAgICAgdG90YWxWYWx1ZT17MTZ9XG4gICAgICAgIHRwdW1wT249e2RhdGFbMF0uVjN9XG4gICAgICAgIHRwdW1wT2ZmPXtkYXRhWzBdLlY0fVxuICAgICAgICBhbGFybU9uPXtkYXRhWzBdLlY1fVxuICAgICAgICBhbGFybU9mZj17ZGF0YVswXS5WNn1cbiAgICAgID5cbiAgICAgICAgPE1vYmlsZUdhdWdlQ2hhcnQgbmFtZT17ZGF0YVswXS5TMX0gY3VycmVudFZhbHVlPXtkYXRhWzBdLlYxfSB0b3RhbFZhbHVlPXsxNn0gdW5pdE9mTWVhc3VyZT17ZGF0YVswXS5TMi50b0xvd2VyQ2FzZSgpfSAvPlxuICAgICAgICA8TW9iaWxlR2F1Z2VDaGFydCBuYW1lPXtkYXRhWzBdLlMzfSBjdXJyZW50VmFsdWU9e2RhdGFbMF0uVjJ9IHRvdGFsVmFsdWU9ezE2fSB1bml0T2ZNZWFzdXJlPXtkYXRhWzBdLlM0LnRvTG93ZXJDYXNlKCl9IC8+XG4gICAgICA8L01vYmlsZURldGFpbHM+XG4gICAgPC9Nb2JpbGVMYXlvdXQ+XG4gIDwvTW9iaWxlVmlldz5cbiAgPC8+XG4pXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY3R4KXtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9qY3Qtc3lzdGVtcy5jb20vYXBpL3VuaXZlcnNpdHknKVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICBjb25zdCByZXMxID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvbWFtbW90aCcpXG4gIGNvbnN0IHNpdGVzID0gYXdhaXQgcmVzMS5qc29uKCk7XG4gICAgXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgZGF0YSwgc2l0ZXMgfVxuICB9XG59IFxuXG5cbmV4cG9ydCBkZWZhdWx0IFVuaXZlcnNpdHkiLCJjb25zdCBjb2xvciA9IHtcbiAgamN0T3JhbmdlOiAnI2ZmN2UyNicsXG4gIGpjdFdoaXRlOiAnI2ZjZmNmYycsXG4gIGpjdERhcmtHcmF5OiAnIzI5MjkyOScsXG4gIGpjdExpZ2h0R3JheTogJyNhMmEyYTInXG59XG5cbmNvbnN0IHNpemUgPSB7XG4gIG1vYmlsZVM6ICczMjBweCcsXG4gIG1vYmlsZU06ICczNzVweCcsXG4gIG1vYmlsZUw6ICc0MjVweCcsXG4gIHRhYmxldFA6ICc2MDBweCcsXG4gIHRhYmxldEw6ICc5MDBweCcsXG4gIGxhcHRvcDogJzEwMjRweCcsXG4gIGxhcHRvcE06ICcxMjAwcHgnLFxuICBsYXB0b3BMOiAnMTQ0MHB4JyxcbiAgZGVza3RvcDogJzI1NjBweCdcbn1cblxuY29uc3Qgc3RhbmRhcmQgPSB7XG4gIG1vYmlsZVM6IGBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtzaXplLm1vYmlsZVN9KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMSlgLFxuICBtb2JpbGVNOiBgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7c2l6ZS5tb2JpbGVNfSkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEpYCxcbiAgbW9iaWxlTDogYG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3NpemUubW9iaWxlTH0pIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxKWAsXG4gIHRhYmxldFA6IGBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtzaXplLnRhYmxldFB9KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMSlgLFxuICB0YWJsZXRMOiBgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7c2l6ZS50YWJsZXRMfSkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEpYCxcbiAgbGFwdG9wOiBgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7c2l6ZS5sYXB0b3B9KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMSlgLFxuICBsYXB0b3BNOiBgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7c2l6ZS5sYXB0b3BNfSkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEpYCxcbiAgbGFwdG9wTDogYG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3NpemUubGFwdG9wTH0pIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxKWAsXG4gIGRlc2t0b3A6IGBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtzaXplLmRlc2t0b3B9KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMSlgLFxufTtcblxuY29uc3QgcmV0aW5hID0ge1xuICBtb2JpbGU6IGBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtzaXplLm1vYmlsZUx9KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilgLFxuICBtb2JpbGVTOiBgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7c2l6ZS5tb2JpbGVTfSkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpYCxcbiAgbW9iaWxlTTogYG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3NpemUubW9iaWxlTX0pIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKWAsXG4gIG1vYmlsZUw6IGBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtzaXplLm1vYmlsZUx9KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilgLFxuICB0YWJsZXQ6IGBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtzaXplLnRhYmxldH0pIGFuZCAobWF4LXdpZHRoOiAke3NpemUubGFwdG9wfSkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpYCxcbiAgbGFwdG9wOiBgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7c2l6ZS5sYXB0b3B9KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilgLFxuICBsYXB0b3BNOiBgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7c2l6ZS5sYXB0b3BNfSkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpYCxcbiAgbGFwdG9wTDogYG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3NpemUubGFwdG9wTH0pIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKWAsXG4gIGRlc2t0b3A6IGBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtzaXplLmRlc2t0b3B9KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilgLFxufTtcblxuZXhwb3J0IHsgc3RhbmRhcmQsIHJldGluYSwgY29sb3IgfSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY2hhcnRqcy0yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRldmljZS1kZXRlY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2lkZWJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==