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

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("srvn");


/***/ }),

/***/ "srvn":
/***/ (function(module, exports) {

// import fetch from 'isomorphic-unfetch'
// import Link from 'next/link'
// import { BrowserView, MobileView } from 'react-device-detect'
// import NewLayout from '../../../components/NewLayout'
// import NewDetails from '../../../components/NewDetails'
// import DoughnutChart from '../../../components/DoughnutChart'
// import NewMobileLayout from '../../../components/NewMobileLayout'
// import NewMobileDetails from '../../../components/NewMobileDetails'
// import NewMobileDoughnutChart from '../../../components/NewMobileDoughnutChart'
// const North = ({ data, sites }) => (
//   <>
//   <BrowserView>
//     <NewLayout
//       sites={ sites.map((site, i) => <li key={i}><Link href={`/jct/${site.BATTERY.toLowerCase()}`}><a>{site.BATTERY}</a></Link></li>) } 
//       company={"jct"} 
//       sitename={"North"} 
//       date={data[0].mDate} 
//       time={data[0].mTime}
//     >
//       <NewDetails
//         resourceType='Water'
//         name={data[0].S1} 
//         unitOfMeasure={data[0].S2.toLowerCase()}
//         currentValue={data[0].V1}
//         totalValue={16}
//         tPumpOn={data[0].V3}
//         tPumpOff={data[0].V4}
//         alarmOn={data[0].V5}
//         alarmOff={data[0].V6}
//       >
//         <DoughnutChart name={data[0].S1} currentValue={data[0].V1} totalValue={16} unitOfMeasure={data[0].S2.toLowerCase()} />
//       </NewDetails>
//     </NewLayout>
//   </BrowserView>
//   <MobileView>
//       <NewMobileLayout
//         sites={ sites.map((site, i) => <li key={i}><Link href={`/jct/${site.BATTERY.toLowerCase()}`}><a>{site.BATTERY}</a></Link></li>) } 
//         company={"jct"} 
//         sitename={"North"} 
//         date={data[0].mDate} 
//         time={data[0].mTime}
//       >
//         <NewMobileDetails
//           resourceType='Water'
//           name={data[0].S1} 
//           unitOfMeasure={data[0].S2.toLowerCase()}
//           currentValue={data[0].V1}
//           totalValue={16}
//           tPumpOn={data[0].V3}
//           tPumpOff={data[0].V4}
//           alarmOn={data[0].V5}
//           alarmOff={data[0].V6}
//         >
//           <NewMobileDoughnutChart name={data[0].S1} currentValue={data[0].V1} totalValue={16} unitOfMeasure={data[0].S2.toLowerCase()} />
//         </NewMobileDetails>
//       </NewMobileLayout>
//     </MobileView>
//   </>
// )
// export async function getServerSideProps(ctx){
//   const res1 = await fetch('http://localhost:3001/api/jct')
//   const res = await fetch('http://localhost:3001/api/jct/jctbty')
//   const sites = await res1.json();
//   const data = await res.json();
//   return {
//     props: { data, sites }
//   }
// } 
// export default North

/***/ })

/******/ });