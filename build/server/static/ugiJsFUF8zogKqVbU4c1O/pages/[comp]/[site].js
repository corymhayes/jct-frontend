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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("YiK5");


/***/ }),

/***/ "YiK5":
/***/ (function(module, exports) {

// import { Component } from 'react'
// import io from 'socket.io-client'
// import fetch from 'isomorphic-unfetch'
// import Layout from '../../components/Layout'
// import MobileLayout from '../../components/MobileLayout' 
// import Details from '../../components/Details'
// export default class Site extends Component {
//   static defaultProps = {
//     company: []
//   }
//   state = {
//     companies: []
//   }
//   static async getInitialProps(ctx){
//     const { name, site } = ctx.query
//     const res = await fetch(`http://jct-systems.com/api/${name}/${site}`)
//     const json = await res.json();
//     let isMobileView = ctx.req.headers['user-agent'].search(/Android|iPhone/i)
//     if(isMobileView < 0){
//       return {
//         isMobileView: false,
//         equipment: json[1]
//       }
//     } else {
//       return {
//         isMobileView: true,
//         equipment: json[1]
//       }
//     }
//   }
//   render(){
//     return(
//         this.props.isMobileView ?
//         <MobileLayout company_name="Doghouse Oil & Gas" site_name="Anchor Battery">
//             {
//               this.props.equipment.map(equip => (
//                 <Details 
//                   key={equip.id} 
//                   name={equip.name}
//                   currentValue={equip.currentLevel}
//                   totalValue={equip.totalLevel}
//                   alarmOn={equip.on_level}
//                   alarmOff={equip.off_level}
//                   mon={equip.monValue}
//                   tue={equip.tueValue}
//                   wed={equip.wedValue}
//                   thu={equip.thuValue}
//                   fri={equip.friValue}
//                   sat={equip.satValue}
//                   sun={equip.sunValue}
//                 />
//               ))
//             }
//           </MobileLayout>
//         :       
//           <Layout company_name="Doghouse Oil & Gas" site_name="Anchor Battery">
//             {
//               this.props.equipment.map(equip => (
//                 <Details 
//                   key={equip.id} 
//                   name={equip.name}
//                   currentValue={equip.currentLevel}
//                   totalValue={equip.totalLevel}
//                   alarmOn={equip.on_level}
//                   alarmOff={equip.off_level}
//                   mon={equip.monValue}
//                   tue={equip.tueValue}
//                   wed={equip.wedValue}
//                   thu={equip.thuValue}
//                   fri={equip.friValue}
//                   sat={equip.satValue}
//                   sun={equip.sunValue}
//                 />
//               ))
//             }
//           </Layout>          
//     )
//   }
// }

/***/ })

/******/ });