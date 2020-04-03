webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


var _standard;

var color = {
  jctOrange: '#ff7e26',
  jctWhite: '#fcfcfc',
  jctDarkGray: '#464646',
  jctLightGray: '#a2a2a2'
};
var size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tabletP: '600px',
  tabletL: '900px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};
var standard = (_standard = {
  mobileS: "only screen and (min-width: ".concat(size.mobileS, ") and (-webkit-min-device-pixel-ratio: 1)"),
  mobileM: "only screen and (min-width: ".concat(size.mobileM, ") and (-webkit-min-device-pixel-ratio: 1)"),
  mobileL: "only screen and (min-width: ".concat(size.mobileL, ") and (-webkit-min-device-pixel-ratio: 1)"),
  tablet: "only screen and (min-width: ".concat(size.tablet, ") and (-webkit-min-device-pixel-ratio: 1)")
}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_standard, "tablet", "only screen and (min-width: ".concat(size.tablet, ") and (-webkit-min-device-pixel-ratio: 1)")), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_standard, "laptop", "only screen and (min-width: ".concat(size.laptop, ") and (-webkit-min-device-pixel-ratio: 1)")), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_standard, "laptopL", "only screen and (min-width: ".concat(size.laptopL, ") and (-webkit-min-device-pixel-ratio: 1)")), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_standard, "desktop", "only screen and (min-width: ".concat(size.desktop, ") and (-webkit-min-device-pixel-ratio: 1)")), _standard);
var retina = {
  mobileS: "only screen and (min-width: ".concat(size.mobileS, ") and (-webkit-min-device-pixel-ratio: 2)"),
  mobileM: "only screen and (min-width: ".concat(size.mobileM, ") and (-webkit-min-device-pixel-ratio: 2)"),
  mobileL: "only screen and (min-width: ".concat(size.mobileL, ") and (-webkit-min-device-pixel-ratio: 2)"),
  tablet: "only screen and (min-width: ".concat(size.tablet, ") and (max-width: ").concat(size.laptop, ") and (-webkit-min-device-pixel-ratio: 2)"),
  laptop: "only screen and (min-width: ".concat(size.laptop, ") and (-webkit-min-device-pixel-ratio: 2)"),
  laptopL: "only screen and (min-width: ".concat(size.laptopL, ") and (-webkit-min-device-pixel-ratio: 2)"),
  desktop: "only screen and (min-width: ".concat(size.desktop, ") and (-webkit-min-device-pixel-ratio: 2)")
};


/***/ })

})
//# sourceMappingURL=index.js.60045a4333b7dfd8d86f.hot-update.js.map