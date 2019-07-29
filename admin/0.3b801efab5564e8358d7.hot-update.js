webpackHotUpdate(0,{

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(212);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(180);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(134);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(194);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_escape__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(181);
/* harmony import */ var _components_MapNavigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(195);



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
    console.log('MATCH');
    console.log(match);
    console.log(match[3]);
    console.log(Object(_utils_escape__WEBPACK_IMPORTED_MODULE_5__["unescapeWithRegexp"])(match[3]));
    console.log(JSON.parse(Object(_utils_escape__WEBPACK_IMPORTED_MODULE_5__["unescapeWithRegexp"])(match[3])));
    var map = JSON.parse(Object(_utils_escape__WEBPACK_IMPORTED_MODULE_5__["unescapeWithRegexp"])(match[3]));
    var mapArray = [map.name, map.areas];
    return {
      name: Object(_utils_escape__WEBPACK_IMPORTED_MODULE_5__["unescapeWithRegexp"])(match[1]),
      imageSrc: Object(_utils_escape__WEBPACK_IMPORTED_MODULE_5__["unescapeWithRegexp"])(match[2]),
      map: immutable__WEBPACK_IMPORTED_MODULE_3___default.a.fromJS(map)
    };
  },
  toBlock: function toBlock(obj) {
    if (obj && obj.map && obj.map.areas) {
      obj.map.areas.forEach(function (area) {
        area.coords = JSON.parse(area.coords);
      });
      console.log(obj);
    }

    return ":::md-component MapNavigation name=\"" + escape(obj.name) + "\" imageSrc=\"" + Object(_utils_escape__WEBPACK_IMPORTED_MODULE_5__["escapeWithRegexp"])(obj.imageSrc) + "\"" + (" map=\"" + Object(_utils_escape__WEBPACK_IMPORTED_MODULE_5__["escapeWithRegexp"])(JSON.stringify(obj.map)) + "\"");
  },
  toPreview: function toPreview(obj) {
    console.log('OBJ', obj);
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_MapNavigation__WEBPACK_IMPORTED_MODULE_6__["MapNavigation"], {
      name: obj.name,
      imageSrc: obj.imageSrc,
      map: JSON.stringify(obj.map.toJS()),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
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

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(213);
var getKeys = __webpack_require__(221);
var redefine = __webpack_require__(171);
var global = __webpack_require__(135);
var hide = __webpack_require__(172);
var Iterators = __webpack_require__(216);
var wks = __webpack_require__(169);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(214);
var step = __webpack_require__(215);
var Iterators = __webpack_require__(216);
var toIObject = __webpack_require__(145);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(217)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(169)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(172)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ 215:
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ 216:
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(165);
var $export = __webpack_require__(191);
var redefine = __webpack_require__(171);
var hide = __webpack_require__(172);
var Iterators = __webpack_require__(216);
var $iterCreate = __webpack_require__(218);
var setToStringTag = __webpack_require__(223);
var getPrototypeOf = __webpack_require__(224);
var ITERATOR = __webpack_require__(169)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(219);
var descriptor = __webpack_require__(144);
var setToStringTag = __webpack_require__(223);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(172)(IteratorPrototype, __webpack_require__(169)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(139);
var dPs = __webpack_require__(220);
var enumBugKeys = __webpack_require__(167);
var IE_PROTO = __webpack_require__(162)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(154)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(222).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(155);
var anObject = __webpack_require__(139);
var getKeys = __webpack_require__(221);

module.exports = __webpack_require__(152) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(157);
var enumBugKeys = __webpack_require__(167);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(135).document;
module.exports = document && document.documentElement;


/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(155).f;
var has = __webpack_require__(150);
var TAG = __webpack_require__(169)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(150);
var toObject = __webpack_require__(183);
var IE_PROTO = __webpack_require__(162)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ })

})
//# sourceMappingURL=0.3b801efab5564e8358d7.hot-update.js.map