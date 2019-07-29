webpackHotUpdate(0,{

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(180);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(134);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_escape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(181);



(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(9)).enterModule;
  enterModule && enterModule(module);
})();


var _default = {
  id: "mapNavigation",
  label: "Map Navigation",
  fields: [{
    name: "name",
    label: "Name",
    widget: "string"
  }, {
    name: "imageSrc",
    label: "Background Image",
    widget: "image"
  }, {
    name: "map",
    label: "Mappings",
    widget: "object",
    fields: [{
      name: "name",
      label: "Name",
      widget: "string"
    }]
  }],
  pattern: new RegExp(":::md-component MapNavigation name=\"(.*?)\" imageSrc=\"(.*?)\" map=\"(.*)\""),
  fromBlock: function fromBlock(match) {
    console.log('MATCH');
    console.log(match);
    console.log(match[3]);
    console.log(Object(_utils_escape__WEBPACK_IMPORTED_MODULE_2__["unescapeWithRegexp"])(match[3]));
    console.log(JSON.parse(Object(_utils_escape__WEBPACK_IMPORTED_MODULE_2__["unescapeWithRegexp"])(match[3])));
    var map = JSON.parse(Object(_utils_escape__WEBPACK_IMPORTED_MODULE_2__["unescapeWithRegexp"])(match[3]));
    var mapArray = [map.name, map.areas];
    return {
      name: Object(_utils_escape__WEBPACK_IMPORTED_MODULE_2__["unescapeWithRegexp"])(match[1]),
      imageSrc: Object(_utils_escape__WEBPACK_IMPORTED_MODULE_2__["unescapeWithRegexp"])(match[2]),
      map: map.name
    };
  },
  toBlock: function toBlock(obj) {
    return ":::md-component MapNavigation name=\"" + escape(obj.name) + "\" imageSrc=\"" + Object(_utils_escape__WEBPACK_IMPORTED_MODULE_2__["escapeWithRegexp"])(obj.imageSrc) + "\"" + (" map=\"" + Object(_utils_escape__WEBPACK_IMPORTED_MODULE_2__["escapeWithRegexp"])(JSON.stringify(obj.map)) + "\"");
  },
  toPreview: function toPreview(obj) {
    return "About the Author " + obj.name;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(9)).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/scottsanzenbacher/Documents/Projects/Spaceship/exploregabii/src/cms/editorComponents/MapNavigation/MapNavigation.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(9)).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)(module)))

/***/ })

})
//# sourceMappingURL=0.1dc392d89d013d576453.hot-update.js.map