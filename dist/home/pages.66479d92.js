// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../node_modules/uuid/lib/rng-browser.js":[function(require,module,exports) {
// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

},{}],"../../node_modules/uuid/lib/bytesToUuid.js":[function(require,module,exports) {
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;

},{}],"../../node_modules/uuid/v4.js":[function(require,module,exports) {
var rng = require('./lib/rng');
var bytesToUuid = require('./lib/bytesToUuid');

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;

},{"./lib/rng":"../../node_modules/uuid/lib/rng-browser.js","./lib/bytesToUuid":"../../node_modules/uuid/lib/bytesToUuid.js"}],"components/swiper-bigimg/swiper.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _v = _interopRequireDefault(require("uuid/v4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var swiperOptionDefault = {
  direction: "horizontal",
  autoplay: true,
  // ms
  autoplayDisableOnInteraction: false,
  loop: true,
  speed: 500,
  pagination: ".swiper-pagination",
  grabCursor: true // lazyLoading: true,

};
var _default = {
  name: "swiper",
  data: function data() {
    return {
      id: "",
      news: []
    };
  },
  props: {
    cls: {
      type: String,
      default: ""
    },
    page: {
      type: Object,
      default: function _default() {
        return {
          islink: false,
          nodeid: 0,
          mp: 3
        };
      }
    },
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  computed: {},
  methods: {
    getArticle: function () {
      var _getArticle = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var docs;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.page.nodeid != 0)) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return this.$tools.httpAgent("/api/article/page", "post", {
                  cp: 1,
                  nodeid: this.page.nodeid,
                  mp: this.page.mp
                });

              case 3:
                docs = _context.sent;
                this.news = docs.data.data;

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getArticle() {
        return _getArticle.apply(this, arguments);
      }

      return getArticle;
    }()
  },
  mounted: function mounted() {
    this.id = (0, _v.default)().replace(/-/g, "");
    this.getArticle();
    var option = swiperOptionDefault;

    for (var key in this.options) {
      option[key] = this.options[key];
    }

    option.pagination = "#" + this.id + "pag";
    var self = this;

    window.onload = function () {
      setTimeout(function () {
        if (!window["mySwiper" + self.id]) {
          window["mySwiper" + self.id] = new Swiper("#" + self.id, option);
          console.log("swiper");
        }
      }, 1000);
    };

    setTimeout(function () {
      if (!window["mySwiper" + self.id]) {
        window["mySwiper" + self.id] = new Swiper("#" + self.id, option);
        console.log("swiper111");
      }
    }, 1010);
  }
};
exports.default = _default;
        var $7c331f = exports.default || module.exports;
      
      if (typeof $7c331f === 'function') {
        $7c331f = $7c331f.options;
      }
    
        /* template */
        Object.assign($7c331f, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "swiper-container", class: _vm.cls, attrs: { id: _vm.id } },
    [
      _c(
        "div",
        { staticClass: "swiper-wrapper" },
        [
          _vm._l(this.news, function(n) {
            return !_vm.page.islink
              ? _c(
                  "div",
                  {
                    staticClass: "swiper-slide",
                    style: { backgroundImage: "url(" + n.timg + ")" }
                  },
                  [_vm._v(" ")]
                )
              : _vm._e()
          }),
          _vm._v(" "),
          _vm._l(this.news, function(n) {
            return _vm.page.islink
              ? _c(
                  "div",
                  {
                    staticClass: "swiper-slide",
                    style: { backgroundImage: "url(" + n.timg + ")" }
                  },
                  [_c("router-link", { attrs: { to: n.link } }, [_vm._v(" ")])],
                  1
                )
              : _vm._e()
          })
        ],
        2
      ),
      _vm._v(" "),
      _c("div", {
        staticClass: "swiper-pagination",
        attrs: { id: _vm.id + "pag" }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
    /* hot reload */
    (function () {
      if (module.hot) {
        var api = require('vue-hot-reload-api');
        api.install(require('vue'));
        if (api.compatible) {
          module.hot.accept();
          if (!module.hot.data) {
            api.createRecord('$7c331f', $7c331f);
          } else {
            api.reload('$7c331f', $7c331f);
          }
        }

        
        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
      }
    })();
},{"uuid/v4":"../../node_modules/uuid/v4.js","_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js","vue-hot-reload-api":"../../node_modules/vue-hot-reload-api/dist/index.js","vue":"../../node_modules/vue/dist/vue.runtime.esm.js"}],"components/base-content-list/index.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
var _default = {
  data: function data() {
    return {
      list: []
    };
  },
  props: {
    nodeid: {
      type: Number,
      default: 1
    },
    cp: {
      type: Number,
      default: 1
    },
    mp: {
      type: Number,
      default: 10
    }
  },
  methods: {
    getArticles: function () {
      var _getArticles = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var doc;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$tools.httpAgent("/api/article/page", "post", {
                  nodeid: this.nodeid,
                  cp: this.cp,
                  mp: this.mp
                });

              case 2:
                doc = _context.sent;

                if (doc.code === 200) {
                  this.list = doc.data.data;
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getArticles() {
        return _getArticles.apply(this, arguments);
      }

      return getArticles;
    }()
  },
  mounted: function mounted() {
    this.getArticles();
  }
};
exports.default = _default;
        var $f3ba4c = exports.default || module.exports;
      
      if (typeof $f3ba4c === 'function') {
        $f3ba4c = $f3ba4c.options;
      }
    
        /* template */
        Object.assign($f3ba4c, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    { staticClass: "content-text-list" },
    _vm._l(_vm.list, function(a, index) {
      return _c(
        "li",
        [
          _c("router-link", { attrs: { to: a.link } }, [
            _vm._v(_vm._s(_vm._f("subStr")(a.title, 25)))
          ]),
          _vm._v(" "),
          _c("span", [
            _vm._v(_vm._s(_vm._f("formatTime")(a.createtime, "MM-DD")))
          ])
        ],
        1
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: "data-v-f3ba4c",
            functional: undefined
          };
        })());
      
    /* hot reload */
    (function () {
      if (module.hot) {
        var api = require('vue-hot-reload-api');
        api.install(require('vue'));
        if (api.compatible) {
          module.hot.accept();
          if (!module.hot.data) {
            api.createRecord('$f3ba4c', $f3ba4c);
          } else {
            api.reload('$f3ba4c', $f3ba4c);
          }
        }

        
        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
      }
    })();
},{"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js","vue-hot-reload-api":"../../node_modules/vue-hot-reload-api/dist/index.js","vue":"../../node_modules/vue/dist/vue.runtime.esm.js"}],"pages/index.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _swiper = _interopRequireDefault(require("../components/swiper-bigimg/swiper.vue"));

var _index = _interopRequireDefault(require("../components/base-content-list/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  data: function data() {
    return {
      form: {
        duty: ""
      },
      swiperOption: {
        nodeid: 3
      },
      hangye: [],
      qa: []
    };
  },
  methods: {
    getArticles: function () {
      var _getArticles = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var nodeid,
            cp,
            mp,
            doc,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                nodeid = _args.length > 0 && _args[0] !== undefined ? _args[0] : 1;
                cp = _args.length > 1 && _args[1] !== undefined ? _args[1] : 1;
                mp = _args.length > 2 && _args[2] !== undefined ? _args[2] : 10;
                _context.next = 5;
                return this.$tools.httpAgent("/api/article/page", "post", {
                  nodeid: nodeid,
                  cp: cp,
                  mp: mp
                });

              case 5:
                doc = _context.sent;

                if (!(doc.code === 200)) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", doc.data.data);

              case 8:
                return _context.abrupt("return", []);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getArticles() {
        return _getArticles.apply(this, arguments);
      }

      return getArticles;
    }(),
    jumpReg: function jumpReg() {
      this.$router.push('/reg');
    }
  },
  components: {
    "swiper-bigimg": _swiper.default,
    "content-list": _index.default
  },
  mounted: function () {
    var _mounted = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // const req = [this.getArticles(19, 1, 20), this.getArticles(21, 1, 20)];
              // const result = await Promise.all(req);
              // this.hangye = result[0];
              // this.qa = result[1];
              window["mySwiperhomeswiper"] = new Swiper("#homeswiper", {
                direction: "horizontal",
                autoplay: false,
                // ms
                autoplayDisableOnInteraction: false,
                loop: true,
                speed: 500,
                pagination: ".swiper-pagination",
                grabCursor: true
              });

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function mounted() {
      return _mounted.apply(this, arguments);
    }

    return mounted;
  }()
};
exports.default = _default;
        var $637f94 = exports.default || module.exports;
      
      if (typeof $637f94 === 'function') {
        $637f94 = $637f94.options;
      }
    
        /* template */
        Object.assign($637f94, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "router-main" }, [
    _c("div", { staticClass: "banner" }, [
      _c("div", { staticClass: "banner-c" }, [
        _c(
          "div",
          { staticClass: "swiper-container", attrs: { id: "homeswiper" } },
          [
            _c("div", { staticClass: "swiper-wrapper" }, [
              _c("div", { staticClass: "swiper-slide socket" }, [
                _c("h3", [
                  _c("span", [_vm._v("让Websocket更简单")]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("span", { staticStyle: { "padding-left": "20px" } }, [
                    _vm._v("全面支持web，小程序，安卓和IOS")
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "p",
                    [
                      _c(
                        "el-button",
                        {
                          staticStyle: { "margin-left": "50px" },
                          on: { click: _vm.jumpReg }
                        },
                        [_vm._v("免费试用")]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("img", {
                  attrs: {
                    src:
                      "https://s3.cn-north-1.amazonaws.com.cn/sso-media/baas/ad-img/banner-1.png"
                  }
                })
              ]),
              _vm._v(" "),
              _vm._m(0)
            ]),
            _vm._v(" "),
            _c("div", {
              staticClass: "swiper-pagination",
              attrs: { id: "homeswiperpag" }
            })
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _c("div", { staticClass: "servicedes socketdes" }, [
      _c(
        "div",
        { staticClass: "servicedes-c" },
        [
          _vm._m(2),
          _vm._v(" "),
          _c(
            "el-row",
            { attrs: { gutter: 30 } },
            [
              _c(
                "el-col",
                { attrs: { span: 12 } },
                [
                  _c("el-card", { staticClass: "box-card" }, [
                    _c("div", { staticClass: "socketc" }, [
                      _c("i", {
                        staticClass: "deasy deasyliulanqi",
                        staticStyle: { color: "#67C23A" }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "socketc1" }, [
                        _c("h2", [_vm._v("跨平台")]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v("浏览器，小程序，安卓，IOS都有成熟可靠的SDK")
                        ])
                      ])
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-col",
                { attrs: { span: 12 } },
                [
                  _c("el-card", { staticClass: "box-card" }, [
                    _c("div", { staticClass: "socketc" }, [
                      _c("i", {
                        staticClass: "deasy deasycode",
                        staticStyle: { color: "#409EFF" }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "socketc1" }, [
                        _c("h2", [_vm._v("任何开发语言")]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "PHP,NODE,C#,JAVA,swift,C++，后端API兼容所有语言调用"
                          )
                        ])
                      ])
                    ])
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-row",
            { staticStyle: { "margin-top": "20px" }, attrs: { gutter: 30 } },
            [
              _c(
                "el-col",
                { attrs: { span: 12 } },
                [
                  _c("el-card", { staticClass: "box-card" }, [
                    _c("div", { staticClass: "socketc" }, [
                      _c("i", {
                        staticClass: "deasy deasyshishi",
                        staticStyle: { color: "#E6A23C" }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "socketc1" }, [
                        _c("h2", [_vm._v("实时高效")]),
                        _vm._v(" "),
                        _c("p", [_vm._v("每秒百万级消息实时送达")])
                      ])
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-col",
                { attrs: { span: 12 } },
                [
                  _c("el-card", { staticClass: "box-card" }, [
                    _c("div", { staticClass: "socketc" }, [
                      _c("i", {
                        staticClass: "deasy deasyjiandan",
                        staticStyle: { color: "#F56C6C" }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "socketc1" }, [
                        _c("h2", [_vm._v("简单易用")]),
                        _vm._v(" "),
                        _c("p", [_vm._v("SDK调用快速链接")])
                      ])
                    ])
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "servicedes taskdes" }, [
      _c(
        "div",
        { staticClass: "servicedes-c" },
        [
          _vm._m(3),
          _vm._v(" "),
          _c(
            "el-row",
            { attrs: { gutter: 30 } },
            [
              _c(
                "el-col",
                { attrs: { span: 12 } },
                [
                  _c("el-card", { staticClass: "box-card" }, [
                    _c("div", { staticClass: "socketc" }, [
                      _c("i", {
                        staticClass: "deasy deasywending",
                        staticStyle: { color: "#67C23A" }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "socketc1" }, [
                        _c("h2", [_vm._v("稳定可靠")]),
                        _vm._v(" "),
                        _c("p", [_vm._v("独立子任务，毫秒级延迟")])
                      ])
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-col",
                { attrs: { span: 12 } },
                [
                  _c("el-card", { staticClass: "box-card" }, [
                    _c("div", { staticClass: "socketc" }, [
                      _c("i", {
                        staticClass: "deasy deasytongzhi",
                        staticStyle: { color: "#409EFF" }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "socketc1" }, [
                        _c("h2", [_vm._v("超时通知")]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v("任务超时，实时短信通知，自由设定通知间隔")
                        ])
                      ])
                    ])
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-row",
            { staticStyle: { "margin-top": "20px" }, attrs: { gutter: 30 } },
            [
              _c(
                "el-col",
                { attrs: { span: 12 } },
                [
                  _c("el-card", { staticClass: "box-card" }, [
                    _c("div", { staticClass: "socketc" }, [
                      _c("i", {
                        staticClass: "deasy deasyshezhi",
                        staticStyle: { color: "#E6A23C" }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "socketc1" }, [
                        _c("h2", [_vm._v("自由管理")]),
                        _vm._v(" "),
                        _c("p", [_vm._v("随时启动停止，可视化指定Cron规则")])
                      ])
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-col",
                { attrs: { span: 12 } },
                [
                  _c("el-card", { staticClass: "box-card" }, [
                    _c("div", { staticClass: "socketc" }, [
                      _c("i", {
                        staticClass: "deasy deasyfenzu",
                        staticStyle: { color: "#F56C6C" }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "socketc1" }, [
                        _c("h2", [_vm._v("任务分组")]),
                        _vm._v(" "),
                        _c("p", [_vm._v("方便聚拢归类任务")])
                      ])
                    ])
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "contact" }, [
      _c("div", { staticClass: "contact-c" }, [
        _c(
          "div",
          [
            _vm._v("\n        即刻加入，享受极速开发乐趣\n        "),
            _c(
              "el-button",
              {
                staticStyle: { "margin-left": "100px" },
                on: { click: _vm.jumpReg }
              },
              [_vm._v("立刻体验")]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "swiper-slide socket" }, [
      _c("h3", [
        _c("span", [_vm._v("让定时任务更便捷")]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c(
          "span",
          { staticStyle: { "padding-left": "20px", "font-size": "22px" } },
          [_vm._v("灵活配置，失败提醒，从此告别996")]
        )
      ]),
      _vm._v(" "),
      _c("img", {
        attrs: {
          src:
            "https://s3.cn-north-1.amazonaws.com.cn/sso-media/baas/ad-img/banner-1.png"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "service" }, [
      _c("div", { staticClass: "service-c" }, [
        _c("div", { staticClass: "part-title" }, [
          _c("h5", { staticStyle: { color: "#333" } }, [
            _vm._v("程序开发快人一步")
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "涵盖程序开发的多个角落，帮助开发者快速形成应用，降低研发维护成本"
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "service-item" }, [
          _c("div", { staticClass: "items" }, [
            _c("i", { staticClass: "el-icon-wallet" }),
            _vm._v(" "),
            _c("p", [_vm._v("支付场景")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "items" }, [
            _c("i", { staticClass: "el-icon-message" }),
            _vm._v(" "),
            _c("p", [_vm._v("短信消息")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "items" }, [
            _c("i", { staticClass: "el-icon-set-up" }),
            _vm._v(" "),
            _c("p", [_vm._v("定时任务")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "items" }, [
            _c("i", { staticClass: "el-icon-phone-outline" }),
            _vm._v(" "),
            _c("p", [_vm._v("实时通信")])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "part-title" }, [
      _c("h5", { staticStyle: { color: "#333" } }, [_vm._v("WebSocket")]),
      _vm._v(" "),
      _c("p", [_vm._v("更简单的方式将消息从服务器端推送至客户端")]),
      _vm._v(" "),
      _c("p", [_vm._v("更简单的方式将消息从各种客户端推送至客户端")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "part-title" }, [
      _c("h5", { staticStyle: { color: "#333" } }, [_vm._v("计划任务")]),
      _vm._v(" "),
      _c("p", [_vm._v("轻松的维护定时计划")])
    ])
  }
]
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: "data-v-637f94",
            functional: undefined
          };
        })());
      
    /* hot reload */
    (function () {
      if (module.hot) {
        var api = require('vue-hot-reload-api');
        api.install(require('vue'));
        if (api.compatible) {
          module.hot.accept();
          if (!module.hot.data) {
            api.createRecord('$637f94', $637f94);
          } else {
            api.reload('$637f94', $637f94);
          }
        }

        
        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
      }
    })();
},{"../components/swiper-bigimg/swiper.vue":"components/swiper-bigimg/swiper.vue","../components/base-content-list/index":"components/base-content-list/index.vue","_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js","vue-hot-reload-api":"../../node_modules/vue-hot-reload-api/dist/index.js","vue":"../../node_modules/vue/dist/vue.runtime.esm.js"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "42754" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/pages.66479d92.js.map