webpackHotUpdate(0,{

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(180);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(134);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(207);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_escape__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(181);
/* harmony import */ var _components_MapNavigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(208);


var _jsxFileName = "/Users/scottsanzenbacher/Documents/Projects/Spaceship/exploregabii/src/cms/editorComponents/MapNavigation/MapNavigation.js";

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
    }]
  }],
  pattern: new RegExp(":::md-component MapNavigation name=\"(.*?)\" imageSrc=\"(.*?)\" map=\"(.*)\""),
  fromBlock: function fromBlock(match) {
    /*console.log('MATCH');
    console.log(match);
    console.log(match[3]);
    console.log(unescapeWithRegexp(match[3]));
    console.log(JSON.parse(unescapeWithRegexp(match[3])));*/
    var map = JSON.parse(Object(_utils_escape__WEBPACK_IMPORTED_MODULE_4__["unescapeWithRegexp"])(match[3]));
    return {
      name: Object(_utils_escape__WEBPACK_IMPORTED_MODULE_4__["unescapeWithRegexp"])(match[1]),
      imageSrc: Object(_utils_escape__WEBPACK_IMPORTED_MODULE_4__["unescapeWithRegexp"])(match[2]),
      map: immutable__WEBPACK_IMPORTED_MODULE_2___default.a.fromJS(map)
    };
  },
  toBlock: function toBlock(obj) {
    return ":::md-component MapNavigation name=\"" + escape(obj.name) + "\" imageSrc=\"" + Object(_utils_escape__WEBPACK_IMPORTED_MODULE_4__["escapeWithRegexp"])(obj.imageSrc) + "\"" + (" map=\"" + Object(_utils_escape__WEBPACK_IMPORTED_MODULE_4__["escapeWithRegexp"])(JSON.stringify(obj.map)) + "\"");
  },
  toPreview: function toPreview(obj) {
    console.log('OBJ', obj);
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_MapNavigation__WEBPACK_IMPORTED_MODULE_5__["MapNavigation"], {
      name: obj.name,
      imageSrc: obj.imageSrc,
      map: JSON.stringify(obj.map.toJS()),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    });
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
//# sourceMappingURL=0.b2933b03fba04da6a72f.hot-update.js.map