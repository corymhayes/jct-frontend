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


var _size;

var color = {
  jctOrange: '#ff7e26',
  jctWhite: '#fcfcfc',
  jctDarkGray: '#464646',
  jctLightGray: '#a2a2a2'
};
var size = (_size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tabletP: '600px'
}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_size, "tabletP", '600px'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_size, "laptop", '1024px'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_size, "laptopL", '1440px'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_size, "desktop", '2560px'), _size);
var standard = {
  mobileS: "only screen and (min-width: ".concat(size.mobileS, ") and (-webkit-min-device-pixel-ratio: 1)"),
  mobileM: "only screen and (min-width: ".concat(size.mobileM, ") and (-webkit-min-device-pixel-ratio: 1)"),
  mobileL: "only screen and (min-width: ".concat(size.mobileL, ") and (-webkit-min-device-pixel-ratio: 1)"),
  tablet: "only screen and (min-width: ".concat(size.tablet, ") and (max-width: ").concat(size.laptop, ") and (-webkit-min-device-pixel-ratio: 1)"),
  laptop: "only screen and (min-width: ".concat(size.laptop, ") and (-webkit-min-device-pixel-ratio: 1)"),
  laptopL: "only screen and (min-width: ".concat(size.laptopL, ") and (-webkit-min-device-pixel-ratio: 1)"),
  desktop: "only screen and (min-width: ".concat(size.desktop, ") and (-webkit-min-device-pixel-ratio: 1)")
};
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
//# sourceMappingURL=index.js.a4e6f8575490506c10a4.hot-update.js.map