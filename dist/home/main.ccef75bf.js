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
})({"components/base-waiter/index.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {};
exports.default = _default;
        var $33715c = exports.default || module.exports;
      
      if (typeof $33715c === 'function') {
        $33715c = $33715c.options;
      }
    
        /* template */
        Object.assign($33715c, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "wuyou-waiter" }, [
      _c("ul", { staticClass: "waiter-ul" }, [
        _c("li", { staticClass: "wuyou-shop" }, [
          _c("a", {
            staticClass: "pzcms pzicon-user",
            attrs: {
              href:
                "https://wpa.qq.com/msgrd?v=3&uin=490526801&site=qq&menu=yes",
              target: "_blank"
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "waiter-title" }, [_vm._v("在线咨询")])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "wuyou-contact" }, [
          _c("a", {
            staticClass: "el-icon-phone-outline",
            attrs: { href: "javascript:void(0);" }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "waiter-title" }, [_vm._v("1553717219")])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "wuyou-shop" }, [
          _c("a", {
            staticClass: "pzcms pzicon-weixin",
            attrs: { href: "javascript:void(0);" }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "waiter-img" }, [
            _c("img", {
              attrs: { src: "/wx.1284005f.jpg", alt: "" }
            })
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "wuyou-top" }, [
          _c("a", { staticClass: "el-icon-arrow-up", attrs: { href: "#" } }),
          _vm._v(" "),
          _c("div", { staticClass: "waiter-title" }, [_vm._v("回到顶部")])
        ])
      ])
    ])
  }
]
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: "data-v-33715c",
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
            api.createRecord('$33715c', $33715c);
          } else {
            api.reload('$33715c', $33715c);
          }
        }

        
        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
      }
    })();
},{"./img/wx.jpg":[["wx.1284005f.jpg","components/base-waiter/img/wx.jpg"],"components/base-waiter/img/wx.jpg"],"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js","vue-hot-reload-api":"../../node_modules/vue-hot-reload-api/dist/index.js","vue":"../../node_modules/vue/dist/vue.runtime.esm.js"}],"components/base-mainmenu/index.vue":[function(require,module,exports) {
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
//
//
//
//
//
//
var _default = {
  data: function data() {
    return {
      menuList: []
    };
  },
  methods: {
    getMenu: function () {
      var _getMenu = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var doc;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$tools.httpAgent("/api/tree/main", "post", "pid=1");

              case 2:
                doc = _context.sent;

                if (doc.code === 200) {
                  this.menuList = doc.data;
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getMenu() {
        return _getMenu.apply(this, arguments);
      }

      return getMenu;
    }()
  },
  mounted: function mounted() {
    this.getMenu();
  }
};
exports.default = _default;
        var $aab73f = exports.default || module.exports;
      
      if (typeof $aab73f === 'function') {
        $aab73f = $aab73f.options;
      }
    
        /* template */
        Object.assign($aab73f, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "base-mainmenu" },
    [
      _c(
        "el-menu",
        {
          staticClass: "el-menu-demo",
          attrs: {
            mode: "horizontal",
            "background-color": "#222",
            "text-color": "#fff",
            router: true,
            "active-text-color": "#ffd04b"
          }
        },
        [
          _c("el-menu-item", { attrs: { index: "/" } }, [_vm._v("首页")]),
          _vm._v(" "),
          _vm._l(_vm.menuList, function(m, index) {
            return [
              !m.child || m.child.length === 0
                ? _c("el-menu-item", { attrs: { index: m.link } }, [
                    _vm._v(_vm._s(m.name))
                  ])
                : _c(
                    "el-submenu",
                    { attrs: { index: index + "a" } },
                    [
                      _c("template", { slot: "title" }, [
                        _vm._v(_vm._s(m.name))
                      ]),
                      _vm._v(" "),
                      _vm._l(m.child, function(item, i) {
                        return _c(
                          "el-menu-item",
                          { attrs: { index: item.link } },
                          [_vm._v(_vm._s(item.name))]
                        )
                      })
                    ],
                    2
                  )
            ]
          })
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: "data-v-aab73f",
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
            api.createRecord('$aab73f', $aab73f);
          } else {
            api.reload('$aab73f', $aab73f);
          }
        }

        
        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
      }
    })();
},{"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js","vue-hot-reload-api":"../../node_modules/vue-hot-reload-api/dist/index.js","vue":"../../node_modules/vue/dist/vue.runtime.esm.js"}],"pages/main.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../components/base-waiter/index"));

var _index2 = _interopRequireDefault(require("../components/base-mainmenu/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  data: function data() {
    return {
      menuList: [],
      newsNode: [],
      anliNode: []
    };
  },
  methods: {
    getMenu: function () {
      var _getMenu = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var doc;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$tools.httpAgent("/api/tree/main", "post", "pid=1");

              case 2:
                doc = _context.sent;
                this.menuList = doc.data;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getMenu() {
        return _getMenu.apply(this, arguments);
      }

      return getMenu;
    }(),
    getNodeList: function () {
      var _getNodeList = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(nodeid) {
        var sister;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.$tools.httpAgent("/api/tree/page", "post", {
                  pid: nodeid
                });

              case 2:
                sister = _context2.sent;
                return _context2.abrupt("return", sister.data);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getNodeList(_x) {
        return _getNodeList.apply(this, arguments);
      }

      return getNodeList;
    }()
  },
  components: {
    "base-waiter": _index.default,
    "base-mainmenu": _index2.default
  },
  mounted: function () {
    var _mounted = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function mounted() {
      return _mounted.apply(this, arguments);
    }

    return mounted;
  }(),
  watch: {// $route: function() {
    //   this.setMenu(0);
    // }
  }
};
exports.default = _default;
        var $9e440a = exports.default || module.exports;
      
      if (typeof $9e440a === 'function') {
        $9e440a = $9e440a.options;
      }
    
        /* template */
        Object.assign($9e440a, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "header-menu" }, [
        _c(
          "div",
          { staticClass: "header-menu-c" },
          [
            _c(
              "el-menu",
              {
                staticClass: "el-menu-demo",
                attrs: {
                  mode: "horizontal",
                  "background-color": "transparent",
                  "text-color": "#fff",
                  router: true,
                  "active-text-color": "#ffd04b"
                }
              },
              [
                _c("el-menu-item", { attrs: { index: "/", exact: true } }, [
                  _vm._v("首页")
                ]),
                _vm._v(" "),
                _c("el-menu-item", { attrs: { index: "/chart" } }, [
                  _vm._v("在线聊天")
                ]),
                _vm._v(" "),
                _c("el-menu-item", [
                  _c("a", { attrs: { href: "/doc", target: "_blank" } }, [
                    _vm._v("文档")
                  ])
                ]),
                _vm._v(" "),
                _c("el-menu-item", [
                  _c(
                    "a",
                    {
                      attrs: {
                        href: "https://github.com/zydeasy/deasy-qa/issues",
                        target: "_blank"
                      }
                    },
                    [_vm._v("问题工单")]
                  )
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-menu",
              {
                staticClass: "el-menu-demo1",
                attrs: {
                  mode: "horizontal",
                  "background-color": "transparent",
                  "text-color": "#fff",
                  router: true
                }
              },
              [
                _c("el-menu-item", { attrs: { index: "/reg" } }, [
                  _vm._v("注册")
                ]),
                _vm._v(" "),
                _c("el-menu-item", { attrs: { index: "/login" } }, [
                  _vm._v("登录")
                ])
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("router-view"),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("base-waiter")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "footer" }, [
      _c("div", { staticClass: "footer-c" }, [
        _c("div", { staticClass: "top" }, [
          _c("div", { staticClass: "part" }, [
            _c("h3", [_vm._v("资源")]),
            _vm._v(" "),
            _c("ul", [
              _c("li", [
                _c("a", { attrs: { href: "/doc", target: "_blank" } }, [
                  _vm._v("开发文档")
                ])
              ]),
              _vm._v(" "),
              _c("li", [
                _c(
                  "a",
                  {
                    attrs: {
                      href: "http://www.zuoyanit.com/doc/serversdk.html"
                    }
                  },
                  [_vm._v("SDK下载")]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "part" }, [
            _c("h3", [_vm._v("服务支持")]),
            _vm._v(" "),
            _c("ul", [
              _c("li", [
                _c(
                  "a",
                  {
                    attrs: {
                      href: "https://github.com/zydeasy/deasy-qa/issues"
                    }
                  },
                  [_vm._v("问题咨询")]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "part" }, [
            _c("h3", [_vm._v("联系我们")]),
            _vm._v(" "),
            _c("ul", [
              _c("li", [_vm._v("电话：15537172119")]),
              _vm._v(" "),
              _c("li", [_vm._v("邮箱：deasy@zuoyanit.com")]),
              _vm._v(" "),
              _c("li", [_vm._v("地址：河南省郑州市美盛中心")])
            ])
          ]),
          _vm._v(" "),
          _c("img", {
            staticStyle: { width: "150px", height: "150px" },
            attrs: { src: "/wx.4ab4d3bd.jpg", alt: "" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "bottom" }, [
          _c("a", { attrs: { href: "javascript:void(0);" } }, [
            _vm._v("友情链接   |")
          ]),
          _vm._v(" "),
          _c(
            "a",
            { attrs: { href: "http://news.163.com", target: "_blank" } },
            [_vm._v("网易")]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              attrs: { href: "http://www.miitbeian.gov.cn", target: "_blank" }
            },
            [_vm._v("网易")]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              attrs: { href: "http://www.miitbeian.gov.cn", target: "_blank" }
            },
            [_vm._v("豫ICP备17021117号-1")]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: "data-v-9e440a",
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
            api.createRecord('$9e440a', $9e440a);
          } else {
            api.reload('$9e440a', $9e440a);
          }
        }

        
        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
      }
    })();
},{"../components/base-waiter/index":"components/base-waiter/index.vue","../components/base-mainmenu/index":"components/base-mainmenu/index.vue","./../assets/img/wx.jpg":[["wx.4ab4d3bd.jpg","assets/img/wx.jpg"],"assets/img/wx.jpg"],"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js","vue-hot-reload-api":"../../node_modules/vue-hot-reload-api/dist/index.js","vue":"../../node_modules/vue/dist/vue.runtime.esm.js"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}],"../../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../node_modules/parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"../../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],0:[function(require,module,exports) {
var b=require("../../node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.load([]).then(function(){require("pages/main.vue");});
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/main.ccef75bf.js.map