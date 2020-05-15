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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "4Qt+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Site; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("pI2v");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5Yp1");
/* harmony import */ var _components_MobileLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("6XN1");
/* harmony import */ var _components_Details__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("A0tZ");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class Site extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      companies: []
    });
  }

  static async getInitialProps(ctx) {
    const {
      name,
      site
    } = ctx.query;
    console.log(name, site);
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(`http://jctsystems.com/portal/test.asp`); // const json = await res.json();

    console.log(res[4]); // let isMobileView = ctx.req.headers['user-agent'].search(/Android|iPhone/i)
    // if(isMobileView < 0){
    //   return {
    //     isMobileView: false,
    //     equipment: json[1]
    //   }
    // } else {
    //   return {
    //     isMobileView: true,
    //     equipment: json[1]
    //   }
    // }
  }

  render() {
    return this.props.isMobileView ? __jsx(_components_MobileLayout__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      company_name: "Doghouse Oil & Gas",
      site_name: "Anchor Battery"
    }, this.props.equipment.map(equip => __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      key: equip.id,
      name: equip.name,
      currentValue: equip.currentLevel,
      totalValue: equip.totalLevel,
      alarmOn: equip.on_level,
      alarmOff: equip.off_level,
      mon: equip.monValue,
      tue: equip.tueValue,
      wed: equip.wedValue,
      thu: equip.thuValue,
      fri: equip.friValue,
      sat: equip.satValue,
      sun: equip.sunValue
    }))) : __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      company_name: "Doghouse Oil & Gas",
      site_name: "Anchor Battery"
    }, this.props.equipment.map(equip => __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      key: equip.id,
      name: equip.name,
      currentValue: equip.currentLevel,
      totalValue: equip.totalLevel,
      alarmOn: equip.on_level,
      alarmOff: equip.off_level,
      mon: equip.monValue,
      tue: equip.tueValue,
      wed: equip.wedValue,
      thu: equip.thuValue,
      fri: equip.friValue,
      sat: equip.satValue,
      sun: equip.sunValue
    })));
  }

}

_defineProperty(Site, "defaultProps", {
  company: []
});

/***/ }),

/***/ "5Yp1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_screensizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("UIkl");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.main.withConfig({
  displayName: "Layout__MainContainer",
  componentId: "sc-1xtzfs7-0"
})(["height:100vh;display:grid;@media ", "{width:80%;grid-template-rows:12% 1fr;}@media ", "{width:90%;grid-template-rows:15% 85%;}@media ", "{max-width:50%;grid-template-rows:8% 1fr;}@media ", "{width:65%;grid-template-rows:10% 90%;}"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__[/* standard */ "c"].tabletP, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__[/* standard */ "c"].tabletL, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__[/* standard */ "c"].desktop, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__[/* retina */ "b"].laptopM);
const CompanyContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Layout__CompanyContainer",
  componentId: "sc-1xtzfs7-1"
})(["display:flex;flex-flow:column;justify-content:center;margin-left:1rem;"]);
const CompanyName = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "Layout__CompanyName",
  componentId: "sc-1xtzfs7-2"
})(["font-weight:600;color:#efefef;@media ", "{font-size:3rem;}@media ", "{font-size:5rem;}@media ", "{font-size:4rem;}"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__[/* standard */ "c"].tablet, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__[/* standard */ "c"].desktop, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__[/* retina */ "b"].laptopM);
const SiteName = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2.withConfig({
  displayName: "Layout__SiteName",
  componentId: "sc-1xtzfs7-3"
})(["font-weight:600;color:#FF7E26;@media ", "{font-size:2rem;}@media ", "{font-size:3rem;}@media ", "{font-size:2.75rem;}"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__[/* standard */ "c"].tablet, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__[/* standard */ "c"].desktop, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__[/* retina */ "b"].laptopM);
const SiteDetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Layout__SiteDetailsContainer",
  componentId: "sc-1xtzfs7-4"
})(["background-color:", ";height:auto;padding:9rem 18rem 9rem 0;overflow:scroll;display:grid;@media ", "{padding:3rem 6rem 3rem 3rem;grid:auto-flow / repeat(2,50%);grid-gap:3rem 3rem;}@media ", "{padding:4rem 13rem 4rem 4rem;grid:auto-flow / repeat(3,33%);grid-gap:5rem 5rem;}@media ", "{padding:6rem 27rem 6rem 6rem;grid:auto-flow / repeat(4,25%);grid-gap:10rem 7rem;}@media ", "{padding:5rem 19rem 0 5rem;grid:auto-flow / repeat(3,33%);grid-gap:1rem 7rem;}"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__[/* color */ "a"].jctWhite, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__[/* standard */ "c"].tabletP, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__[/* standard */ "c"].tabletL, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__[/* standard */ "c"].desktop, _public_screensizes__WEBPACK_IMPORTED_MODULE_2__[/* retina */ "b"].laptopM);

const Layout = props => __jsx(MainContainer, null, __jsx(CompanyContainer, null, __jsx(CompanyName, null, props.company_name), __jsx(SiteName, null, props.site_name)), __jsx(SiteDetailsContainer, null, props.children));

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("4Qt+");


/***/ }),

/***/ "6XN1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./public/screensizes.js
var screensizes = __webpack_require__("UIkl");

// EXTERNAL MODULE: external "nuka-carousel"
var external_nuka_carousel_ = __webpack_require__("X5vA");
var external_nuka_carousel_default = /*#__PURE__*/__webpack_require__.n(external_nuka_carousel_);

// CONCATENATED MODULE: ./components/MobileCarousel.js

var __jsx = external_react_default.a.createElement;




const MobileCarousel = props => __jsx(external_nuka_carousel_default.a, {
  cellAlign: 'center',
  cellSpacing: 15,
  slideWidth: '325px',
  withoutControls: true
}, props.children);

/* harmony default export */ var components_MobileCarousel = (MobileCarousel);
const StyledCarousel = external_styled_components_default()(external_nuka_carousel_default.a).withConfig({
  displayName: "MobileCarousel__StyledCarousel",
  componentId: "i2g75e-0"
})(["background-color:blue;"]);
// CONCATENATED MODULE: ./components/MobileLayout.js


var MobileLayout_jsx = external_react_default.a.createElement;



const MobileMainContainer = external_styled_components_default.a.main.withConfig({
  displayName: "MobileLayout__MobileMainContainer",
  componentId: "sc-1sasdph-0"
})(["width:100%;height:100vh;display:grid;grid-template-rows:15% 85%;"]);
const MobileCompanyContainer = external_styled_components_default.a.div.withConfig({
  displayName: "MobileLayout__MobileCompanyContainer",
  componentId: "sc-1sasdph-1"
})(["display:flex;flex-flow:column;justify-content:center;"]);
const MobileCompanyName = external_styled_components_default.a.h1.withConfig({
  displayName: "MobileLayout__MobileCompanyName",
  componentId: "sc-1sasdph-2"
})(["font-size:3rem;font-weight:600;margin-left:4rem;color:", ";"], screensizes["a" /* color */].jctWhite);
const MobileSiteName = external_styled_components_default.a.h2.withConfig({
  displayName: "MobileLayout__MobileSiteName",
  componentId: "sc-1sasdph-3"
})(["font-size:2rem;font-weight:600;color:", ";margin-left:4rem;"], screensizes["a" /* color */].jctOrange);

const MobileLayout = props => MobileLayout_jsx(external_react_default.a.Fragment, null, MobileLayout_jsx(MobileMainContainer, null, MobileLayout_jsx(MobileCompanyContainer, null, MobileLayout_jsx(MobileCompanyName, null, props.company_name), MobileLayout_jsx(MobileSiteName, null, props.site_name)), MobileLayout_jsx(components_MobileCarousel, null, props.children)), MobileLayout_jsx(style_default.a, {
  id: "821711475"
}, ["*{margin:0;padding:0;box-sizing:border-box;font-size:10px;font-weight:100;}", "body{background-color:#292929;}", "#__next{height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}"]));

/* harmony default export */ var components_MobileLayout = __webpack_exports__["a"] = (MobileLayout);

/***/ }),

/***/ "A0tZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./public/screensizes.js
var screensizes = __webpack_require__("UIkl");

// EXTERNAL MODULE: external "react-chartjs-2"
var external_react_chartjs_2_ = __webpack_require__("t3hY");

// CONCATENATED MODULE: ./components/DoughnutChart.js

var __jsx = external_react_default.a.createElement;




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
  return __jsx(GraphContainer, null, __jsx(Graph, null, __jsx(external_react_chartjs_2_["Doughnut"], {
    data: data,
    width: 150,
    height: 150,
    options: {
      cutoutPercentage: 80,
      rotation: -1.25 * Math.PI,
      circumference: 1.5 * Math.PI,
      tooltips: false,
      hover: false
    }
  })), __jsx(Volume, null, __jsx(CurrentVolume, null, props.currentValue !== null ? props.currentValue.toFixed(2) : props.currentValue), __jsx(CurrentVolumeLabel, null, "Volume")));
};

/* harmony default export */ var components_DoughnutChart = (DoughnutChart);
const GraphContainer = external_styled_components_default.a.div.withConfig({
  displayName: "DoughnutChart__GraphContainer",
  componentId: "sc-557kc3-0"
})(["display:grid;grid:1fr / 1fr;place-items:center;"]);
const Graph = external_styled_components_default.a.div.withConfig({
  displayName: "DoughnutChart__Graph",
  componentId: "sc-557kc3-1"
})(["grid-row:1;grid-column:1;"]);
const Volume = external_styled_components_default.a.div.withConfig({
  displayName: "DoughnutChart__Volume",
  componentId: "sc-557kc3-2"
})(["grid-row:1;grid-column:1;display:flex;flex-flow:column;align-items:center;margin-top:1.5rem;"]);
const CurrentVolume = external_styled_components_default.a.div.withConfig({
  displayName: "DoughnutChart__CurrentVolume",
  componentId: "sc-557kc3-3"
})(["font-size:2.5rem;color:", ";font-weight:bold;"], screensizes["a" /* color */].jctDarkGray);
const CurrentVolumeLabel = external_styled_components_default.a.div.withConfig({
  displayName: "DoughnutChart__CurrentVolumeLabel",
  componentId: "sc-557kc3-4"
})(["font-size:1.5rem;color:", ";"], screensizes["a" /* color */].jctLightGray);
// CONCATENATED MODULE: ./components/Alarms.js

var Alarms_jsx = external_react_default.a.createElement;


const Container = external_styled_components_default.a.div.withConfig({
  displayName: "Alarms__Container",
  componentId: "sc-17pmkb0-0"
})(["display:flex;flex-flow:column;@media ", "{margin-left:1rem;}@media ", "{margin-left:1rem;}"], screensizes["c" /* standard */].tabletP, screensizes["c" /* standard */].tabletL);
const Title = external_styled_components_default.a.h3.withConfig({
  displayName: "Alarms__Title",
  componentId: "sc-17pmkb0-1"
})(["font-weight:bold;color:", ";font-size:1.8rem;margin-bottom:.25rem;@media ", "{font-size:1.5rem;}@media ", "{font-size:1.5rem;}@media ", "{font-size:1.8rem;}"], screensizes["a" /* color */].jctOrange, screensizes["c" /* standard */].tabletP, screensizes["c" /* standard */].tabletL, screensizes["b" /* retina */].laptopM);
const AlarmList = external_styled_components_default.a.ul.withConfig({
  displayName: "Alarms__AlarmList",
  componentId: "sc-17pmkb0-2"
})(["list-style:none;margin-bottom:1rem;"]);
const AlarmListItem = external_styled_components_default.a.li.withConfig({
  displayName: "Alarms__AlarmListItem",
  componentId: "sc-17pmkb0-3"
})(["color:", ";font-size:1.8rem;margin-bottom:.25rem;@media ", "{font-size:1.5rem;}@media ", "{font-size:1.5rem;}@media ", "{font-size:1.8rem;}"], screensizes["a" /* color */].jctLightGray, screensizes["c" /* standard */].tabletP, screensizes["c" /* standard */].tabletL, screensizes["b" /* retina */].laptopM);

const Alarms = props => Alarms_jsx(Container, null, Alarms_jsx(Title, null, props.title), Alarms_jsx(AlarmList, null, Alarms_jsx(AlarmListItem, null, "On: ", props.on !== null ? props.on.toFixed(2) : props.on), Alarms_jsx(AlarmListItem, null, "Off: ", props.off !== null ? props.off.toFixed(2) : props.off)));

/* harmony default export */ var components_Alarms = (Alarms);
// CONCATENATED MODULE: ./components/DoughnutAlarms.js

var DoughnutAlarms_jsx = external_react_default.a.createElement;




const DoughnutAlarms = props => DoughnutAlarms_jsx(DoughnutAlarms_Container, null, DoughnutAlarms_jsx(components_DoughnutChart, {
  currentValue: props.currentValue,
  totalValue: props.totalValue,
  alarmOn: props.alarmOn,
  alarmOff: props.alarmOff
}), DoughnutAlarms_jsx(AlarmsContainer, null, DoughnutAlarms_jsx(components_Alarms, {
  title: "Transfer Pump",
  on: props.tPumpOn,
  off: props.tPumpOff
}), DoughnutAlarms_jsx(components_Alarms, {
  title: "Alarm",
  on: props.alarmOn,
  off: props.alarmOff
})));

/* harmony default export */ var components_DoughnutAlarms = (DoughnutAlarms);
const DoughnutAlarms_Container = external_styled_components_default.a.div.withConfig({
  displayName: "DoughnutAlarms__Container",
  componentId: "sc-9gubyt-0"
})(["display:flex;margin-top:2rem;margin-bottom:2rem;justify-content:space-around;align-items:center;"]);
const AlarmsContainer = external_styled_components_default.a.div.withConfig({
  displayName: "DoughnutAlarms__AlarmsContainer",
  componentId: "sc-9gubyt-1"
})(["display:flex;flex-flow:column;&:first-child{margin-bottom:1rem;}"]);
// CONCATENATED MODULE: ./components/Trend.js

var Trend_jsx = external_react_default.a.createElement;




const Trend = props => {
  external_react_chartjs_2_["defaults"].global.defaultFontFamily = 'Industry';
  external_react_chartjs_2_["defaults"].global.defaultFontColor = screensizes["a" /* color */].jctLightGray;

  const data = canvas => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 165);
    gradient.addColorStop(1, 'rgba(255,255,255,.01)');
    gradient.addColorStop(0, screensizes["a" /* color */].jctLightGray);
    return {
      labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
      datasets: [{
        data: [props.mon, props.tue, props.wed, props.thu, props.fri, props.sat, props.sun],
        borderWidth: 2,
        borderColor: screensizes["a" /* color */].jctOrange,
        pointBackgroundColor: screensizes["a" /* color */].jctOrange,
        backgroundColor: gradient,
        cubicInterpolationMode: 'monotone'
      }]
    };
  };

  return Trend_jsx(Trend_Graph, null, Trend_jsx(external_react_chartjs_2_["Line"], {
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
    }
  }));
};

/* harmony default export */ var components_Trend = (Trend);
const Trend_Graph = external_styled_components_default.a.div.withConfig({
  displayName: "Trend__Graph",
  componentId: "pyu4pm-0"
})(["width:100%;"]);
// CONCATENATED MODULE: ./components/Details.js

var Details_jsx = external_react_default.a.createElement;




const DetailsContainer = external_styled_components_default.a.div.withConfig({
  displayName: "Details__DetailsContainer",
  componentId: "sc-1ln1fjq-0"
})(["display:flex;flex-flow:column;background-color:", ";@media ", "{max-width:35rem;}@media ", "{padding:2rem;}"], screensizes["a" /* color */].jctWhite, screensizes["c" /* standard */].desktop, screensizes["b" /* retina */].mobile);
const DetailsName = external_styled_components_default.a.h1.withConfig({
  displayName: "Details__DetailsName",
  componentId: "sc-1ln1fjq-1"
})(["color:#FF7E26;font-size:3rem;font-weight:bold;margin-bottom:1rem;@media ", "{font-size:2rem;}@media ", "{font-size:2rem;}@media ", "{font-size:3rem;}"], screensizes["c" /* standard */].tabletP, screensizes["c" /* standard */].tabletL, screensizes["b" /* retina */].laptopM);
const Underline = external_styled_components_default.a.div.withConfig({
  displayName: "Details__Underline",
  componentId: "sc-1ln1fjq-2"
})(["height:2px;background-color:rgba(41,41,41,.15);"]);

const Details = props => Details_jsx(DetailsContainer, null, Details_jsx(DetailsName, null, props.name), Details_jsx(Underline, null), Details_jsx(components_DoughnutAlarms, {
  currentValue: props.currentValue,
  totalValue: props.totalValue,
  alarmOn: props.alarmOn,
  alarmOff: props.alarmOff,
  tPumpOn: props.tPumpOn,
  tPumpOff: props.tPumpOff
}));

/* harmony default export */ var components_Details = __webpack_exports__["a"] = (Details);

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "UIkl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return standard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return retina; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return color; });
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

/***/ "X5vA":
/***/ (function(module, exports) {

module.exports = require("nuka-carousel");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "pI2v":
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "t3hY":
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ })

/******/ });