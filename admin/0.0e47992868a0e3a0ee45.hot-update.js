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
    name: "areas",
    label: "Areas",
    widget: "list",
    fields: [{
      name: "shape",
      label: "Shape",
      widget: "select",
      options: [{
        label: "Rectangle",
        value: "rect"
      }, {
        label: "Circle",
        value: "circle"
      }, {
        label: "Polygohn",
        value: "poly"
      }, {
        label: "Default",
        value: "default"
      }]
    }, {
      name: "name",
      label: "Name",
      widget: "string"
    }, {
      name: "coords",
      label: "Coordinates",
      widget: "string"
    }, {
      name: "href",
      label: "Link To URL",
      widget: "string"
    }, {
      name: "alt",
      label: "Alternate Text",
      widget: "string"
    }]
  }],
  pattern: new RegExp(":::md-component MapNavigation imageSrc=\"(.*?)\" map={(.*)}"),
  fromBlock: function fromBlock(match) {
    return {
      headshot: Object(_utils_escape__WEBPACK_IMPORTED_MODULE_2__["unescapeWithRegexp"])(match[1]),
      name: Object(_utils_escape__WEBPACK_IMPORTED_MODULE_2__["unescapeWithRegexp"])(match[2]),
      bio: Object(_utils_escape__WEBPACK_IMPORTED_MODULE_2__["unescapeWithRegexp"])(match[3]),
      chapterDescription: Object(_utils_escape__WEBPACK_IMPORTED_MODULE_2__["unescapeWithRegexp"])(match[4]),
      interviewDescription: Object(_utils_escape__WEBPACK_IMPORTED_MODULE_2__["unescapeWithRegexp"])(match[5])
    };
  },
  toBlock: function toBlock(obj) {
    var MAP = {
      name: 'my-map',
      areas: obj.areas
    };
    return ":::md-component MapNavigation imageSrc=\"" + Object(_utils_escape__WEBPACK_IMPORTED_MODULE_2__["escapeWithRegexp"])(obj.imageSrc) + "\"" + (" map={" + JSON.stringify(MAP) + "}");
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
//# sourceMappingURL=0.0e47992868a0e3a0ee45.hot-update.js.map