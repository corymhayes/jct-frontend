webpackHotUpdate("static/development/pages/test.js",{

/***/ "./pages/test/index.js":
/*!*****************************!*\
  !*** ./pages/test/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Site; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_MobileLayout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/MobileLayout */ "./components/MobileLayout.js");
/* harmony import */ var _components_Details__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Details */ "./components/Details.js");








var _jsxFileName = "/Users/cor-eee/Projects/jct-next/pages/test/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var Site = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Site, _Component);

  var _super = _createSuper(Site);

  function Site() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Site);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      companies: []
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Site, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return this.props.isMobileView ? __jsx(_components_MobileLayout__WEBPACK_IMPORTED_MODULE_12__["default"], {
        company_name: "Doghouse Oil & Gas",
        site_name: "Anchor Battery",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 9
        }
      }, this.props.equipment.map(function (equip) {
        return __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
          sun: equip.sunValue,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 17
          }
        });
      })) : __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        company_name: "Doghouse Oil & Gas",
        site_name: "Anchor Battery",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }
      }, this.props.equipment.map(function (equip) {
        return __jsx(_components_Details__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
          sun: equip.sunValue,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 17
          }
        });
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(ctx) {
      var _ctx$query, name, site, res;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ctx$query = ctx.query, name = _ctx$query.name, site = _ctx$query.site;
              console.log(name, site);
              _context.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()("http://jctsystems.com/portal/test.asp"));

            case 4:
              res = _context.sent;
              // const json = await res.json();
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

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }]);

  return Site;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Site, "defaultProps", {
  company: []
});



/***/ })

})
//# sourceMappingURL=test.js.294f6cc8441a5df4eba3.hot-update.js.map