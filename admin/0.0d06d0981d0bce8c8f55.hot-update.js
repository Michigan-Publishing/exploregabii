webpackHotUpdate(0,{

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapNavigation", function() { return MapNavigation; });
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(180);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(199);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(200);
/* harmony import */ var react_image_mapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(210);
/* harmony import */ var react_image_mapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_image_mapper__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/Users/scottsanzenbacher/Documents/Projects/Spaceship/exploregabii/src/components/MapNavigation/MapNavigation.js";

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(9)).enterModule;
  enterModule && enterModule(module);
})();




var AreaTag = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span.withConfig({
  displayName: "MapNavigation__AreaTag"
})(["position:absolute;color:#fff;padding:10px;background:rgba(0,0,0,0.8);transform:translate3d(-50%,-50%,0);border-radius:5px;pointer-events:none;z-index:1000;"]);
var MapNavigation =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(MapNavigation, _Component);

  function MapNavigation(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      areaCoords: null
    };
    return _this;
  }

  var _proto = MapNavigation.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    if (this.mapper && this.mapper.computeCenter) {
      var areaCoords = JSON.parse(this.props.map).areas.reduce(function (accum, area) {
        var convertedArea = {
          name: area.name,
          coords: JSON.parse(area.coords)
        };
        console.log('CONVERTED AREA', convertedArea);
        accum[area.name] = _this2.mapper.computeCenter(convertedArea);
        return accum;
      }, {});
      this.setState({
        areaCoords: areaCoords
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        imageSrc = _this$props.imageSrc,
        mapString = _this$props.map;
    var map = JSON.parse(mapString);
    console.log('MAP: ', map);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        position: 'absolute'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_image_mapper__WEBPACK_IMPORTED_MODULE_4___default.a, {
      ref: function ref(mapper) {
        return _this3.mapper = mapper;
      },
      src: imageSrc,
      map: map,
      key: "mapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), this.mapper && this.state.areaCoords && map.areas.map(function (area) {
      var coords = _this3.state.areaCoords[area.name];
      console.log('COORDS', coords);
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AreaTag, {
        key: area.name,
        style: {
          top: coords[1] + "px",
          left: coords[0] + "px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, area.name);
    }));
  };

  // @ts-ignore
  _proto.__reactstandin__regenerateByEval = function __reactstandin__regenerateByEval(key, code) {
    // @ts-ignore
    this[key] = eval(code);
  };

  return MapNavigation;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(9)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AreaTag, "AreaTag", "/Users/scottsanzenbacher/Documents/Projects/Spaceship/exploregabii/src/components/MapNavigation/MapNavigation.js");
  reactHotLoader.register(MapNavigation, "MapNavigation", "/Users/scottsanzenbacher/Documents/Projects/Spaceship/exploregabii/src/components/MapNavigation/MapNavigation.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(9)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)(module)))

/***/ })

})
//# sourceMappingURL=0.0d06d0981d0bce8c8f55.hot-update.js.map