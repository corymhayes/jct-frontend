webpackHotUpdate("static/development/pages/[name]/[site].js",{

/***/ "./pages/[name]/[site].js":
/*!********************************!*\
  !*** ./pages/[name]/[site].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_MobileLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/MobileLayout */ "./components/MobileLayout.js");
/* harmony import */ var _components_Details__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Details */ "./components/Details.js");



var _this = undefined,
    _jsxFileName = "/Users/cor-eee/Projects/jct-next/pages/[name]/[site].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var Home = function Home(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, props.isMobileView ? __jsx(_components_MobileLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    company_name: "Doghouse Oil & Gas",
    site_name: "Anchor Battery",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
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
        lineNumber: 16,
        columnNumber: 17
      }
    });
  })) : __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    company_name: "Doghouse Oil & Gas",
    site_name: "Anchor Battery",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, props.equipment.map(function (equip) {
    var _jsx;

    return __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_6__["default"], (_jsx = {
      key: equip.id,
      name: equip.name,
      currentValue: equip.currentLevel,
      totalValue: equip.totalLevel,
      alarmOn: equip.on_level,
      alarmOff: equip.off_level,
      mon: equip.monValue,
      tue: equip.monValue
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsx, "mon", equip.monValue), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsx, "mon", equip.monValue), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsx, "mon", equip.monValue), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsx, "mon", equip.monValue), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsx, "mon", equip.monValue), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsx, "__self", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsx, "__source", {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }), _jsx));
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
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("http://localhost:3001/api/".concat(name, "/").concat(site)));

        case 3:
          res = _context.sent;
          _context.next = 6;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 6:
          json = _context.sent;
          isMobileView = ctx.req.headers['user-agent'].search(/Android|iPhone/i);

          if (!(isMobileView < 0)) {
            _context.next = 12;
            break;
          }

          return _context.abrupt("return", {
            isMobileView: false,
            equipment: json[1]
          });

        case 12:
          return _context.abrupt("return", {
            isMobileView: true,
            equipment: json[1]
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=[site].js.267862e42944d796fc7e.hot-update.js.map