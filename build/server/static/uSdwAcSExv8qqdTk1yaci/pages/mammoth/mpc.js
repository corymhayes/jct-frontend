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

/***/ "/jkW":
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

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

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

/***/ "3i5l":
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

// CONCATENATED MODULE: ./components/browser/Sidebar.js

var __jsx = external_react_default.a.createElement;


const SidebarContainer = external_styled_components_default.a.div.withConfig({
  displayName: "Sidebar__SidebarContainer",
  componentId: "sc-1wi8syt-0"
})(["width:30rem;background-color:", ";display:grid;grid-template-rows:12.5rem 1fr;position:sticky;"], screensizes["a" /* color */].jctDarkGray);
const CompanyContainer = external_styled_components_default.a.div.withConfig({
  displayName: "Sidebar__CompanyContainer",
  componentId: "sc-1wi8syt-1"
})(["display:flex;align-items:center;justify-content:center;height:12.5rem;img{height:75%;}"]);
const SiteNavContainer = external_styled_components_default.a.div.withConfig({
  displayName: "Sidebar__SiteNavContainer",
  componentId: "sc-1wi8syt-2"
})(["width:100%;height:100%;padding-left:3rem;padding-top:1rem;h1{color:#fff;font-size:18px;font-weight:500;}"]);
const SiteLinks = external_styled_components_default.a.nav.withConfig({
  displayName: "Sidebar__SiteLinks",
  componentId: "sc-1wi8syt-3"
})(["ul{list-style:none;margin-top:1.5rem;}li{height:5rem;display:flex;align-items:center;padding-left:2rem;margin-bottom:1rem;}li:hover{background-color:", ";}a{color:#fff;text-decoration:none;font-size:16px;}"], screensizes["a" /* color */].jctOrange);

const Sidebar = props => {
  return __jsx(SidebarContainer, null, __jsx(CompanyContainer, null, __jsx("img", {
    src: `../static/${props.company}-logo.png`
  })), __jsx(SiteNavContainer, null, __jsx("h1", null, "Sites"), __jsx(SiteLinks, null, __jsx("ul", null, props.sites))));
};

/* harmony default export */ var browser_Sidebar = (Sidebar);
// CONCATENATED MODULE: ./components/browser/Layout.js

var Layout_jsx = external_react_default.a.createElement;



const MainContainer = external_styled_components_default.a.main.withConfig({
  displayName: "Layout__MainContainer",
  componentId: "q874ff-0"
})(["height:100vh;width:100vw;display:flex;flex-flow:row;"]);
const SiteDetailsContainer = external_styled_components_default.a.div.withConfig({
  displayName: "Layout__SiteDetailsContainer",
  componentId: "q874ff-1"
})(["padding-left:7rem;overflow:scroll;display:grid;grid-template-rows:20rem 1fr;width:100%;"]);
const SiteNameTime = external_styled_components_default.a.div.withConfig({
  displayName: "Layout__SiteNameTime",
  componentId: "q874ff-2"
})(["height:15rem;display:flex;flex-flow:column;justify-content:center;"]);
const SiteName = external_styled_components_default.a.h2.withConfig({
  displayName: "Layout__SiteName",
  componentId: "q874ff-3"
})(["font-weight:600;color:", ";margin-bottom:.5rem;font-size:36px;text-transform:uppercase;"], screensizes["a" /* color */].jctDarkGray);
const DateTime = external_styled_components_default.a.h3.withConfig({
  displayName: "Layout__DateTime",
  componentId: "q874ff-4"
})(["color:", ";font-size:1.75rem;font-weight:400;margin-left:.25rem;"], screensizes["a" /* color */].jctDarkGray);
const SiteDetails = external_styled_components_default.a.div.withConfig({
  displayName: "Layout__SiteDetails",
  componentId: "q874ff-5"
})(["display:grid;grid-template-columns:1fr 1fr;"]);

const Layout = props => {
  return Layout_jsx(MainContainer, null, Layout_jsx(browser_Sidebar, {
    company: props.company,
    sites: props.sites
  }), Layout_jsx(SiteDetailsContainer, null, Layout_jsx(SiteNameTime, null, Layout_jsx(SiteName, null, props.sitename), Layout_jsx(DateTime, null, props.date, " - ", props.time)), Layout_jsx(SiteDetails, null, props.children)));
};

/* harmony default export */ var browser_Layout = __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("FJsG");


/***/ }),

/***/ "CT85":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("x9QG");
/* harmony import */ var react_sidebar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_sidebar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_screensizes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("UIkl");
/* harmony import */ var _MPCAlarmList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("EnJe");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const MobileMainContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.main.withConfig({
  displayName: "Layout__MobileMainContainer",
  componentId: "sc-8eh4j8-0"
})(["width:100%;display:grid;grid-template-rows:7rem 1fr;"]);
const MobileCompanyContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Layout__MobileCompanyContainer",
  componentId: "sc-8eh4j8-1"
})(["display:grid;grid-template-columns:20% 60% 20%;background-color:", ";place-items:stretch;"], _public_screensizes__WEBPACK_IMPORTED_MODULE_3__[/* color */ "a"].jctDarkGray);
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
})(["font-size:1.8rem;font-weight:600;color:", ";"], _public_screensizes__WEBPACK_IMPORTED_MODULE_3__[/* color */ "a"].jctWhite);
const DateTime = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3.withConfig({
  displayName: "Layout__DateTime",
  componentId: "sc-8eh4j8-5"
})(["color:", ";font-size:1.4rem;font-weight:400;"], _public_screensizes__WEBPACK_IMPORTED_MODULE_3__[/* color */ "a"].jctWhite);
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
})(["ul{list-style:none;margin-top:1.5rem;}li{height:5rem;display:flex;align-items:center;padding-left:2rem;margin-bottom:1rem;}li:hover{background-color:", ";}a{color:#fff;text-decoration:none;font-size:16px;}"], _public_screensizes__WEBPACK_IMPORTED_MODULE_3__[/* color */ "a"].jctOrange);
const AlarmTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Layout__AlarmTitle",
  componentId: "sc-8eh4j8-10"
})(["align-self:flex-start;margin-top:2rem;display:flex;align-items:center;justify-content:center;background-color:", ";height:4rem;width:10rem;color:#fff;font-size:1.6rem;font-weight:bold;"], _public_screensizes__WEBPACK_IMPORTED_MODULE_3__[/* color */ "a"].jctDarkGray);

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
    sidebar: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(CompanyContainer, null, __jsx("img", {
      src: `../static/${props.company}-logo.png`
    })), __jsx(SiteNavContainer, null, __jsx("h1", null, "Sites"), __jsx(SiteLinks, null, __jsx("ul", null, props.sites)))),
    open: isSiteMenuOpen,
    onSetOpen: setIsSiteMenuOpen,
    styles: {
      sidebar: {
        width: '30rem',
        backgroundColor: `${_public_screensizes__WEBPACK_IMPORTED_MODULE_3__[/* color */ "a"].jctDarkGray}`,
        display: 'grid',
        gridTemplateRows: '12.5rem 1fr'
      },
      overlay: {
        backgroundColor: 'rgba(255,255,255,0)'
      }
    }
  }, __jsx(react_sidebar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    sidebar: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(AlarmTitle, null, "Alarms"), props.sidebarAlarm),
    open: isAlarmMenuOpen,
    onSetOpen: setIsAlarmMenuOpen,
    pullRight: true,
    styles: {
      sidebar: {
        width: '33rem',
        backgroundColor: '#fff',
        display: 'flex',
        flexFlow: 'column',
        color: `${_public_screensizes__WEBPACK_IMPORTED_MODULE_3__[/* color */ "a"].jctDarkGray}`,
        marginTop: '19%',
        paddingLeft: '3rem'
      },
      overlay: {
        backgroundColor: 'rgba(255,255,255,0)'
      }
    }
  }, __jsx(MobileMainContainer, null, __jsx(MobileCompanyContainer, null, __jsx(Menu, {
    onClick: () => setIsSiteMenuOpen(true)
  }, __jsx("img", {
    src: "../static/menu-icon.svg"
  })), __jsx(NameDateTimeContainer, null, __jsx(MobileSiteName, null, props.sitename), __jsx(DateTime, null, props.date, " - ", props.time)), __jsx(Menu, {
    onClick: () => setIsAlarmMenuOpen(true)
  }, __jsx("img", {
    src: "../static/alarm-icon.png"
  }))), __jsx(MobileCarouselContainer, null, props.children))));
};

/* harmony default export */ __webpack_exports__["a"] = (MobileLayout);

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "EnJe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_screensizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("UIkl");

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

const MPCAlarmList = props => __jsx(AlarmList, null, __jsx(GeneralList, null, __jsx(ListTitle, null, "General"), __jsx(AlarmListItem, null, __jsx(Indicator, null), " Local Emergency Stop"), __jsx(AlarmListItem, null, __jsx(Indicator, null), " Spare Di02 Shutdown"), __jsx(AlarmListItem, null, __jsx(Indicator, null), " Low Compressor Oil Level"), __jsx(AlarmListItem, null, __jsx(Indicator, null), " Low Compressor Cooling Water Level")), __jsx(ScrubberList, null, __jsx(ListTitle, null, "Scrubber Liquid Level"), __jsx(AlarmListItem, null, __jsx(Indicator, null), " High 1st Stage"), __jsx(AlarmListItem, null, __jsx(Indicator, null), " High 2nd Stage"), __jsx(AlarmListItem, null, __jsx(Indicator, null), " High 3rd Stage")), __jsx(HiHiList, null, __jsx(ListTitle, null, "HiHi"), __jsx(AlarmListItem, null, __jsx(Indicator, null), " Suction Pressure"), __jsx(AlarmListItem, null, __jsx(Indicator, {
  active: true
}), " 1st Stage Discharge Pressure"), __jsx(AlarmListItem, null, __jsx(Indicator, null), " 2nd Stage Discharge Pressure"), __jsx(AlarmListItem, null, __jsx(Indicator, null), " 3rd Stage Discharge Pressure")), __jsx(LoLoList, null, __jsx(ListTitle, null, "LoLo"), __jsx(AlarmListItem, null, __jsx(Indicator, null), " Suction Pressure"), __jsx(AlarmListItem, null, __jsx(Indicator, null), " 1st Stage Discharge Pressure"), __jsx(AlarmListItem, null, __jsx(Indicator, null), " 2nd Stage Discharge Pressure"), __jsx(AlarmListItem, null, __jsx(Indicator, null), " 3rd Stage Discharge Pressure"), __jsx(AlarmListItem, null, __jsx(Indicator, null), " Compressor Oil Pressure")));

/* harmony default export */ __webpack_exports__["a"] = (MPCAlarmList);

/***/ }),

/***/ "FJsG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-device-detect"
var external_react_device_detect_ = __webpack_require__("xXj+");

// EXTERNAL MODULE: ./components/browser/Layout.js + 1 modules
var Layout = __webpack_require__("3i5l");

// EXTERNAL MODULE: ./components/browser/Details.js + 1 modules
var Details = __webpack_require__("XkHA");

// EXTERNAL MODULE: ./components/mobile/Layout.js
var mobile_Layout = __webpack_require__("CT85");

// EXTERNAL MODULE: ./components/mobile/Details.js
var mobile_Details = __webpack_require__("MNT3");

// CONCATENATED MODULE: ./components/Table.js

var __jsx = external_react_default.a.createElement;


const TableContainer = external_styled_components_default.a.div.withConfig({
  displayName: "Table__TableContainer",
  componentId: "sc-1x898lj-0"
})(["display:grid;grid-template:auto / 1fr;width:75%;"]);
const MobileTableContainer = external_styled_components_default.a.div.withConfig({
  displayName: "Table__MobileTableContainer",
  componentId: "sc-1x898lj-1"
})(["display:grid;grid-template:auto / 1fr;width:75%;"]);

const Table = props => external_react_device_detect_["isBrowser"] ? __jsx(TableContainer, null, props.children) : __jsx(MobileTableContainer, null, props.children);

/* harmony default export */ var components_Table = (Table);
// EXTERNAL MODULE: ./components/MPCAlarmList.js
var MPCAlarmList = __webpack_require__("EnJe");

// CONCATENATED MODULE: ./pages/mammoth/mpc/index.js

var mpc_jsx = external_react_default.a.createElement;










const TableRow = external_styled_components_default.a.div.withConfig({
  displayName: "mpc__TableRow",
  componentId: "crykp-0"
})(["display:grid;grid-template-columns:75% 25%;padding:1rem 1.5rem;&:nth-child(odd){background-color:rgba(0,0,0,.1);}"]);
const CellHeader = external_styled_components_default.a.span.withConfig({
  displayName: "mpc__CellHeader",
  componentId: "crykp-1"
})(["font-size:1.4rem;font-weight:bold;"]);
const CellData = external_styled_components_default.a.span.withConfig({
  displayName: "mpc__CellData",
  componentId: "crykp-2"
})(["font-size:1.4rem;justify-self:end;"]);

const MPC = ({
  data,
  sites
}) => mpc_jsx(external_react_default.a.Fragment, null, mpc_jsx(external_react_device_detect_["BrowserView"], null, mpc_jsx(Layout["a" /* default */], {
  sites: sites.map((site, i) => mpc_jsx("li", {
    key: i
  }, mpc_jsx(link_default.a, {
    href: `./${site.BATTERY.toLowerCase()}`
  }, mpc_jsx("a", null, site.BATTERY)))),
  company: "mammoth",
  sitename: "Mary Price Compressor",
  date: data[0].mDate,
  time: data[0].mTime
}, mpc_jsx(Details["a" /* default */], {
  resourceType: "PSI",
  isTable: true
}, mpc_jsx(components_Table, null, mpc_jsx(TableRow, null, mpc_jsx(CellHeader, null, "Suction"), mpc_jsx(CellData, null, data[0].D0)), mpc_jsx(TableRow, null, mpc_jsx(CellHeader, null, "Stage 1 Discharge"), mpc_jsx(CellData, null, data[0].D1)), mpc_jsx(TableRow, null, mpc_jsx(CellHeader, null, "Stage 1 Discharge"), mpc_jsx(CellData, null, data[0].D2)), mpc_jsx(TableRow, null, mpc_jsx(CellHeader, null, "Stage 2 Discharge"), mpc_jsx(CellData, null, data[0].D3)))), mpc_jsx(Details["a" /* default */], {
  resourceType: "RPM",
  isTable: true
}, mpc_jsx(components_Table, null, mpc_jsx(TableRow, null, mpc_jsx(CellHeader, null, "Motor VFD"), mpc_jsx(CellData, null, data[0].D4)))), mpc_jsx(Details["a" /* default */], {
  resourceType: "Temp",
  isTable: true
}, mpc_jsx(components_Table, null, mpc_jsx(TableRow, null, mpc_jsx(CellHeader, null, "Discharge Cylinder #1"), mpc_jsx(CellData, null, data[0].D5, "\xB0")), mpc_jsx(TableRow, null, mpc_jsx(CellHeader, null, "Discharge Cylinder #2"), mpc_jsx(CellData, null, data[0].D6, "\xB0")), mpc_jsx(TableRow, null, mpc_jsx(CellHeader, null, "Discharge Cylinder #3"), mpc_jsx(CellData, null, data[0].D7, "\xB0")), mpc_jsx(TableRow, null, mpc_jsx(CellHeader, null, "Motor Winding #1"), mpc_jsx(CellData, null, data[0].D8, "\xB0")), mpc_jsx(TableRow, null, mpc_jsx(CellHeader, null, "Motor Winding #2"), mpc_jsx(CellData, null, data[0].D9, "\xB0")), mpc_jsx(TableRow, null, mpc_jsx(CellHeader, null, "Motor Winding #3"), mpc_jsx(CellData, null, data[0].D10, "\xB0")), mpc_jsx(TableRow, null, mpc_jsx(CellHeader, null, "Motor Winding #4"), mpc_jsx(CellData, null, data[0].D11, "\xB0")), mpc_jsx(TableRow, null, mpc_jsx(CellHeader, null, "Motor Winding #5"), mpc_jsx(CellData, null, data[0].D12, "\xB0")), mpc_jsx(TableRow, null, mpc_jsx(CellHeader, null, "Motor Winding #6"), mpc_jsx(CellData, null, data[0].D13, "\xB0")), mpc_jsx(TableRow, null, mpc_jsx(CellHeader, null, "Stage 3 Suction"), mpc_jsx(CellData, null, data[0].D14, "\xB0")), mpc_jsx(TableRow, null, mpc_jsx(CellHeader, null, "Compressor Oil"), mpc_jsx(CellData, null, data[0].D15, "\xB0")))), mpc_jsx(Details["a" /* default */], {
  resourceType: "Alarms",
  isTable: true,
  right: true,
  start: "true"
}, mpc_jsx(MPCAlarmList["a" /* default */], null)))), mpc_jsx(external_react_device_detect_["MobileView"], null, mpc_jsx(mobile_Layout["a" /* default */], {
  sites: sites.map((site, i) => mpc_jsx("li", {
    key: i
  }, mpc_jsx(link_default.a, {
    href: `./${site.BATTERY.toLowerCase()}`
  }, mpc_jsx("a", null, site.BATTERY)))),
  company: "mammoth",
  sitename: "Mary Price Compressor",
  date: data[0].mDate,
  time: data[0].mTime,
  sidebarAlarm: mpc_jsx(MPCAlarmList["a" /* default */], null)
}, mpc_jsx(mobile_Details["a" /* default */], {
  resourceType: "PSI",
  isTable: true
}, mpc_jsx(components_Table, null, mpc_jsx(TableRow, null, mpc_jsx(CellHeader, null, "Suction"), mpc_jsx(CellData, null, data[0].D0)), mpc_jsx(TableRow, null, mpc_jsx(CellHeader, null, "Stage 1 Discharge"), mpc_jsx(CellData, null, data[0].D1)), mpc_jsx(TableRow, null, mpc_jsx(CellHeader, null, "Stage 1 Discharge"), mpc_jsx(CellData, null, data[0].D2)), mpc_jsx(TableRow, null, mpc_jsx(CellHeader, null, "Stage 2 Discharge"), mpc_jsx(CellData, null, data[0].D3)))), mpc_jsx(mobile_Details["a" /* default */], {
  resourceType: "RPM",
  isTable: true
}, mpc_jsx(components_Table, null, mpc_jsx(TableRow, null, mpc_jsx(CellHeader, null, "Motor VFD"), mpc_jsx(CellData, null, data[0].D4)))), mpc_jsx(mobile_Details["a" /* default */], {
  resourceType: "Temp",
  isTable: true
}, mpc_jsx(components_Table, null, mpc_jsx(TableRow, null, mpc_jsx(CellHeader, null, "Discharge Cylinder #1"), mpc_jsx(CellData, null, data[0].D5, "\xB0")), mpc_jsx(TableRow, null, mpc_jsx(CellHeader, null, "Discharge Cylinder #2"), mpc_jsx(CellData, null, data[0].D6, "\xB0")), mpc_jsx(TableRow, null, mpc_jsx(CellHeader, null, "Discharge Cylinder #3"), mpc_jsx(CellData, null, data[0].D7, "\xB0")), mpc_jsx(TableRow, null, mpc_jsx(CellHeader, null, "Motor Winding #1"), mpc_jsx(CellData, null, data[0].D8, "\xB0")), mpc_jsx(TableRow, null, mpc_jsx(CellHeader, null, "Motor Winding #2"), mpc_jsx(CellData, null, data[0].D9, "\xB0")), mpc_jsx(TableRow, null, mpc_jsx(CellHeader, null, "Motor Winding #3"), mpc_jsx(CellData, null, data[0].D10, "\xB0")), mpc_jsx(TableRow, null, mpc_jsx(CellHeader, null, "Motor Winding #4"), mpc_jsx(CellData, null, data[0].D11, "\xB0")), mpc_jsx(TableRow, null, mpc_jsx(CellHeader, null, "Motor Winding #5"), mpc_jsx(CellData, null, data[0].D12, "\xB0")), mpc_jsx(TableRow, null, mpc_jsx(CellHeader, null, "Motor Winding #6"), mpc_jsx(CellData, null, data[0].D13, "\xB0")), mpc_jsx(TableRow, null, mpc_jsx(CellHeader, null, "Stage 3 Suction"), mpc_jsx(CellData, null, data[0].D14, "\xB0")), mpc_jsx(TableRow, null, mpc_jsx(CellHeader, null, "Compressor Oil"), mpc_jsx(CellData, null, data[0].D15, "\xB0")))))));

async function getServerSideProps(ctx) {
  const res1 = await external_isomorphic_unfetch_default()('http://jct-systems.com/api/mammoth');
  const res = await external_isomorphic_unfetch_default()('http://jct-systems.com/api/mammoth/mpc');
  const sites = await res1.json();
  const data = await res.json();
  return {
    props: {
      data,
      sites
    }
  };
}
/* harmony default export */ var mpc = __webpack_exports__["default"] = (MPC);

/***/ }),

/***/ "MNT3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_screensizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("UIkl");

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
})(["color:#fff;font-size:1.8rem;font-weight:bold;background-color:", ";width:10rem;height:4rem;display:flex;align-items:center;justify-content:center;"], _public_screensizes__WEBPACK_IMPORTED_MODULE_2__[/* color */ "a"].jctDarkGray);
const DoughnutChartContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Details__DoughnutChartContainer",
  componentId: "sc-1i9jyzd-3"
})(["display:flex;justify-content:", ";"], props => props.isTable ? "center" : "flex-start");

const NewMobileDetails = props => __jsx(DetailsContainer, null, __jsx(NameAlarmsContainer, null, __jsx(DetailsName, null, props.resourceType)), __jsx(DoughnutChartContainer, {
  isTable: props.isTable
}, props.children));

/* harmony default export */ __webpack_exports__["a"] = (NewMobileDetails);

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UIkl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export standard */
/* unused harmony export retina */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return color; });
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

/***/ "XkHA":
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

// CONCATENATED MODULE: ./components/Alarms.js

var __jsx = external_react_default.a.createElement;


const DetailsAlarmContainer = external_styled_components_default.a.p.withConfig({
  displayName: "Alarms__DetailsAlarmContainer",
  componentId: "sc-17pmkb0-0"
})(["display:flex;flex-flow:column;border-bottom:1px solid ", ";margin-left:2rem;"], screensizes["a" /* color */].jctDarkGray);
const AlarmTitle = external_styled_components_default.a.h2.withConfig({
  displayName: "Alarms__AlarmTitle",
  componentId: "sc-17pmkb0-1"
})(["font-size:1.8rem;font-weight:500;"]);
const AlarmOnOff = external_styled_components_default.a.div.withConfig({
  displayName: "Alarms__AlarmOnOff",
  componentId: "sc-17pmkb0-2"
})(["font-size:1.8rem;"]);
const AlarmOnOffNum = external_styled_components_default.a.span.withConfig({
  displayName: "Alarms__AlarmOnOffNum",
  componentId: "sc-17pmkb0-3"
})(["font-weight:bold;font-size:1.8rem;"]);

const Alarms = props => __jsx(DetailsAlarmContainer, null, __jsx(AlarmTitle, null, props.alarmType), __jsx(AlarmOnOff, null, "On: ", __jsx(AlarmOnOffNum, null, props.on !== undefined ? props.on.toFixed(2) : props.on), " Off: ", __jsx(AlarmOnOffNum, null, props.off !== undefined ? props.off.toFixed(2) : props.off)));

/* harmony default export */ var components_Alarms = (Alarms);
// CONCATENATED MODULE: ./components/browser/Details.js

var Details_jsx = external_react_default.a.createElement;



const DetailsContainer = external_styled_components_default.a.div.withConfig({
  displayName: "Details__DetailsContainer",
  componentId: "sc-1ocsdw7-0"
})(["display:flex;flex-flow:column;margin-bottom:10rem;grid-column:", ";grid-row:", ";"], props => props.right ? 2 : 1, props => props.start ? '1 / 4' : 'auto');
const NameAlarmsContainer = external_styled_components_default.a.div.withConfig({
  displayName: "Details__NameAlarmsContainer",
  componentId: "sc-1ocsdw7-1"
})(["display:flex;margin-bottom:4rem;"]);
const DetailsName = external_styled_components_default.a.h1.withConfig({
  displayName: "Details__DetailsName",
  componentId: "sc-1ocsdw7-2"
})(["color:#fff;font-size:2.4rem;font-weight:bold;background-color:", ";padding:1rem 2rem;max-width:auto;"], screensizes["a" /* color */].jctDarkGray);
const DoughnutChartContainer = external_styled_components_default.a.div.withConfig({
  displayName: "Details__DoughnutChartContainer",
  componentId: "sc-1ocsdw7-3"
})(["display:flex;"]);

const Details = props => Details_jsx(DetailsContainer, {
  right: props.right,
  start: props.start
}, Details_jsx(NameAlarmsContainer, null, Details_jsx(DetailsName, null, props.resourceType), props.isTable ? Details_jsx(external_react_default.a.Fragment, null) : Details_jsx(external_react_default.a.Fragment, null, Details_jsx(components_Alarms, {
  alarmType: 'Alarm',
  on: props.alarmOn,
  off: props.alarmOff
}), Details_jsx(components_Alarms, {
  alarmType: 'T-Pump',
  on: props.tpumpOn,
  off: props.tpumpOff
}))), Details_jsx(DoughnutChartContainer, null, props.children));

/* harmony default export */ var browser_Details = __webpack_exports__["a"] = (Details);

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
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

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
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

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

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

    if (false) {}

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
      if (false) {}
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

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
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

/***/ "elyg":
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

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

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

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
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
        if (false) {}

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
            if (false) {}

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

        if (false) {}

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
    if (false) {}

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

      if (false) {}

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
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

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

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
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

  if (false) {} // when called from _app `ctx` is nested in `ctx`


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

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
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

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

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

/***/ "x9QG":
/***/ (function(module, exports) {

module.exports = require("react-sidebar");

/***/ }),

/***/ "xXj+":
/***/ (function(module, exports) {

module.exports = require("react-device-detect");

/***/ })

/******/ });