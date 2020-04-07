webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_MobileLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MobileLayout */ "./components/MobileLayout.js");
/* harmony import */ var _components_Details__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Details */ "./components/Details.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var use_mobile_detect_hook__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! use-mobile-detect-hook */ "./node_modules/use-mobile-detect-hook/src/index.js");
/* harmony import */ var use_mobile_detect_hook__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(use_mobile_detect_hook__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_screensizes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/screensizes */ "./public/screensizes.js");


var _this = undefined,
    _jsxFileName = "/Users/cor-eee/Projects/jct-next/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var Home = function Home(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, props.isMobileView ? __jsx(_components_MobileLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    company_name: "Doghouse Oil & Gas",
    site_name: "Anchor Battery",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, props.equipment.map(function (equip) {
    return __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: equip.id,
      name: equip.name,
      currentValue: equip.currentLevel,
      totalValue: equip.totalLevel,
      alarmOn: equip.on_level,
      alarmOff: equip.off_level,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }
    });
  })) : __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    company_name: "Doghouse Oil & Gas",
    site_name: "Anchor Battery",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, props.equipment.map(function (equip) {
    return __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: equip.id,
      name: equip.name,
      currentValue: equip.currentLevel,
      totalValue: equip.totalLevel,
      alarmOn: equip.on_level,
      alarmOff: equip.off_level,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    });
  })));
};

Home.getInitialProps = function _callee(ctx) {
  var _ctx$query, name, site, res, json, isMobileView;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _ctx$query = ctx.query, name = _ctx$query.name, site = _ctx$query.site;
          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("http://jct-systems.com/api/".concat(name, "/").concat(site)));

        case 3:
          res = _context.sent;
          _context.next = 6;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 6:
          json = _context.sent;
          console.log(json);
          isMobileView = ctx.req.headers['user-agent'].search(/Android|iPhone/i);

          if (!(isMobileView < 0)) {
            _context.next = 13;
            break;
          }

          return _context.abrupt("return", {
            isMobileView: false,
            equipment: json[1]
          });

        case 13:
          return _context.abrupt("return", {
            isMobileView: true,
            equipment: json[1]
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.ea3a9fe2b98888f39db8.hot-update.js.map