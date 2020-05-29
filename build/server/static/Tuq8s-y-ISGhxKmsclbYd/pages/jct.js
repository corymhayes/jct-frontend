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

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("N5zV");


/***/ }),

/***/ "N5zV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

// import styled from 'styled-components'
// import fetch from 'isomorphic-unfetch'
// import Link from 'next/link'
// import { withOrientationChange } from 'react-device-detect'
// import BrowserLayout from '../../components/browser/Layout'
// import MobileLayout from '../../components/mobile/Layout'
// import MobileDetails from '../../components/mobile/Details'
// import GaugeChart from '../../components/mobile/GaugeChart'
// import TankCarousel from '../../components/TankCarousel'
// import Layout from '../../../components/Layout'
// import MobileLayout from '../../../components/MobileLayout'
// import MobileCarousel from '../../../components/MobileCarousel'
// import FullDetails from '../../../components/FullDetails'
// import Details from '../../../components/Details'
let Home = (props, {
  data,
  isMobileView
}) => {
  // const { isLandscape, isPortrait } = props
  // if(isLandscape){
  //   return(
  //     <MobileLayout company="mammoth" site_name='University' date='01/01/2020' time='5:20 PM'>
  //       <MobileDetails resourceType='Water' alarmOn={12} alarmOff={10}>
  //         <GaugeChart name={'Tank 1'} currentValue={7} totalValue={16} unitOfMeasure={'ft'} />
  //         <GaugeChart name={'Tank 2'} currentValue={9.6} totalValue={16} unitOfMeasure={'ft'} />
  //         <GaugeChart name={'Tank 3'} currentValue={9.6} totalValue={16} unitOfMeasure={'ft'} />
  //         <GaugeChart name={'Tank 4'} currentValue={9.6} totalValue={16} unitOfMeasure={'ft'} />
  //       </MobileDetails>
  //       <MobileDetails resourceType='Oil' alarmOn={12} alarmOff={10}>
  //         <GaugeChart name={'Tank 1'} currentValue={9.6} totalValue={16} unitOfMeasure={'ft'} />
  //       </MobileDetails>
  //     </MobileLayout>
  //   )
  // }
  // if(isPortrait){
  //   return(
  //     <MobileLayout sites={
  //         props.data.map((site, i) => (
  //           <li key={i}>
  //             <Link href={`jct/${site.BATTERY.toLowerCase()}`}><a>{site.BATTERY}</a></Link>
  //           </li>
  //         ))
  //       }company="jct" site_name='University' date='01/01/2020' time='5:20 PM'>
  //       <MobileDetails resourceType='Water' alarmOn={12} alarmOff={10}>
  //         <TankCarousel slideNum={4}>
  //           <GaugeChart name={'Tank 1'} currentValue={7} totalValue={16} alarmOn={12} alarmOff={10} unitOfMeasure={'ft'} />
  //           <GaugeChart name={'Tank 2'} currentValue={9.6} totalValue={16} alarmOn={12} alarmOff={10} unitOfMeasure={'ft'} />
  //           <GaugeChart name={'Tank 3'} currentValue={12} totalValue={16} alarmOn={12} alarmOff={10} unitOfMeasure={'ft'} />
  //           <GaugeChart name={'Tank 4'} currentValue={13} totalValue={16} alarmOn={12} alarmOff={10} unitOfMeasure={'ft'} />
  //           <GaugeChart name={'Tank 5'} currentValue={9.6} totalValue={16} alarmOn={12} alarmOff={10} unitOfMeasure={'ft'} />
  //           <GaugeChart name={'Tank 6'} currentValue={9.6} totalValue={16} alarmOn={12} alarmOff={10} unitOfMeasure={'ft'} />
  //         </TankCarousel>
  //       </MobileDetails>
  //       <MobileDetails resourceType='Oil' alarmOn={12} alarmOff={10}>
  //         <GaugeChart name={'Tank 1'} currentValue={9.6} totalValue={16} unitOfMeasure={'ft'} />
  //       </MobileDetails>
  //     </MobileLayout>
  //   )
  // }
  return (//   <BrowserLayout
    //     company="jct" 
    //     sites={
    //       props.data.map((site, i) => (
    //         <li key={i}>
    //           <Link href={`jct/${site.BATTERY.toLowerCase()}`}><a>{site.BATTERY}</a></Link>
    //         </li>
    //       ))
    //     }
    //   />
    __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null)
  );
}; // export async function getServerSideProps(ctx){
//   const res = await fetch('http://localhost:3001/api/jct')
//   const data = await res.json();
//   let isMobileView = ctx.req.headers['user-agent'].search(/Android|iPhone/i)
//     if(isMobileView < 0){
//       return {
//         props: {
//           isMobileView: false,
//           data
//         }
//       }
//     } else {
//       return {
//         props: {
//           isMobileView: true,
//           data
//         }
//       }
//     }
// } 
// Home = withOrientationChange(Home)


/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });