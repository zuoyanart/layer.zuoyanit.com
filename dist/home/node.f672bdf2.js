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
})({"components/base-guestbook/index.vue":[function(require,module,exports) {
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
//
//
//
//
//
var _default = {
  data: function data() {
    return {
      form: {
        name: "",
        phone: "",
        remark: ""
      },
      rules: {
        name: [{
          required: true,
          message: "请输入活动名称",
          trigger: "blur"
        }, {
          min: 3,
          max: 5,
          message: "长度在 3 到 5 个字符",
          trigger: "blur"
        }],
        phone: [{
          required: true,
          min: 1,
          max: 11,
          message: "请填写手机号",
          trigger: "blur"
        }],
        remark: [{
          required: true,
          min: 1,
          max: 500,
          message: "请填写描述",
          trigger: "blur"
        }]
      }
    };
  },
  methods: {
    guestBook: function () {
      var _guestBook = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.$refs.form.validate(
                /*#__PURE__*/
                function () {
                  var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee(valid) {
                    var doc;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            if (!valid) {
                              _context.next = 5;
                              break;
                            }

                            _context.next = 3;
                            return _this.$tools.httpAgent("/api/guestbook/create", "post", _this.form);

                          case 3:
                            doc = _context.sent;

                            if (doc.code === 200) {
                              _this.$layer.msg("提交成功");

                              _this.form.name = "";
                              _this.form.phone = "";
                              _this.form.remark = "";
                            }

                          case 5:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function guestBook() {
        return _guestBook.apply(this, arguments);
      }

      return guestBook;
    }()
  }
};
exports.default = _default;
        var $89ec84 = exports.default || module.exports;
      
      if (typeof $89ec84 === 'function') {
        $89ec84 = $89ec84.options;
      }
    
        /* template */
        Object.assign($89ec84, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticStyle: { width: "1200px" } },
    [
      _c(
        "el-form",
        {
          ref: "form",
          attrs: {
            inline: true,
            model: _vm.form,
            rules: _vm.rules,
            size: "medium",
            "show-message": false,
            "status-icon": true
          }
        },
        [
          _c(
            "el-form-item",
            { attrs: { prop: "name" } },
            [
              _c("el-input", {
                attrs: { placeholder: "姓名" },
                model: {
                  value: _vm.form.name,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "name", $$v)
                  },
                  expression: "form.name"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { prop: "phone" } },
            [
              _c("el-input", {
                attrs: { placeholder: "手机号" },
                model: {
                  value: _vm.form.phone,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "phone", $$v)
                  },
                  expression: "form.phone"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            { attrs: { prop: "remark" } },
            [
              _c("el-input", {
                staticStyle: { width: "500px" },
                attrs: { placeholder: "您的问题或需求" },
                model: {
                  value: _vm.form.remark,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "remark", $$v)
                  },
                  expression: "form.remark"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            [
              _c(
                "el-button",
                { attrs: { type: "success" }, on: { click: _vm.guestBook } },
                [_vm._v("提交您的需求")]
              ),
              _vm._v(" "),
              _c("el-button", [_vm._v("点击在线咨询")])
            ],
            1
          )
        ],
        1
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
            _scopeId: "data-v-89ec84",
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
            api.createRecord('$89ec84', $89ec84);
          } else {
            api.reload('$89ec84', $89ec84);
          }
        }

        
        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
      }
    })();
},{"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js","vue-hot-reload-api":"../../node_modules/vue-hot-reload-api/dist/index.js","vue":"../../node_modules/vue/dist/vue.runtime.esm.js"}],"pages/node.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../components/base-guestbook/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  data: function data() {
    return {
      tree: {},
      crumbs: [],
      data: [],
      param: {},
      parentNode: {}
    };
  },
  methods: {
    getNodeData: function () {
      var _getNodeData = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(nodeid) {
        var doc;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$tools.httpAgent("/api/tree/get", "post", "id=" + nodeid);

              case 2:
                doc = _context.sent;
                this.tree = doc.data;
                this.$tools.setSeo(doc.data.name, doc.data.keyword, doc.data.seodes);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getNodeData(_x) {
        return _getNodeData.apply(this, arguments);
      }

      return getNodeData;
    }(),
    getSister: function () {
      var _getSister = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(nodeid) {
        var sister;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.$tools.httpAgent("/api/tree/sister", "post", {
                  id: nodeid
                });

              case 2:
                sister = _context2.sent;
                this.data = sister.data.nodelist;

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getSister(_x2) {
        return _getSister.apply(this, arguments);
      }

      return getSister;
    }(),
    getParent: function () {
      var _getParent = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(nodeid) {
        var doc;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.$tools.httpAgent("/api/tree/parent", "post", {
                  id: nodeid
                });

              case 2:
                doc = _context3.sent;
                this.parentNode = doc.data;
                console.log(this.parentNode);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getParent(_x3) {
        return _getParent.apply(this, arguments);
      }

      return getParent;
    }()
  },
  components: {
    "base-guestbook": _index.default
  },
  mounted: function () {
    var _mounted = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee4() {
      var param, nodeid;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              param = this.$route.params;
              nodeid = param.nodeid;
              this.getParent(nodeid);
              this.getNodeData(nodeid);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function mounted() {
      return _mounted.apply(this, arguments);
    }

    return mounted;
  }(),
  watch: {
    $route: function () {
      var _$route = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5() {
        var param, nodeid;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                param = this.$route.params;
                nodeid = param.nodeid; // this.getSister(nodeid);

                this.getNodeData(nodeid);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function $route() {
        return _$route.apply(this, arguments);
      }

      return $route;
    }()
  }
};
exports.default = _default;
        var $be70b2 = exports.default || module.exports;
      
      if (typeof $be70b2 === 'function') {
        $be70b2 = $be70b2.options;
      }
    
        /* template */
        Object.assign($be70b2, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "router-main" },
    [
      _c("base-bannerimg", {
        attrs: {
          "img-url": _vm.parentNode.timg,
          nodename: _vm.parentNode.name,
          remark: _vm.parentNode.remark
        }
      }),
      _vm._v(" "),
      _c("div", { staticStyle: { display: "block" }, attrs: { id: "main" } }, [
        _c("h1", { staticStyle: { "text-align": "center" } }, [
          _vm._v(_vm._s(_vm.tree.name))
        ]),
        _vm._v(" "),
        _c("div", {
          staticClass: "node-content",
          domProps: { innerHTML: _vm._s(_vm.tree.brief) }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "guestbook" }, [
        _c(
          "div",
          { staticClass: "guestbook-c" },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("base-guestbook"),
            _vm._v(" "),
            _c("p", { staticClass: "p4" }, [
              _vm._v(
                "同样的问题每个人侧重点不同，很难有标准的答案；请认真填写表单信息或直接在线联系，我们会给您最合适的答案！"
              )
            ])
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "gstitle" }, [
      _c("h2", [_vm._v("我猜您现在可能存在如下疑问：")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "你们能做什么？需要多少钱？需要多久？我需要做什么?需要提供什么资料？售后服务怎么样？"
        )
      ])
    ])
  }
]
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: "data-v-be70b2",
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
            api.createRecord('$be70b2', $be70b2);
          } else {
            api.reload('$be70b2', $be70b2);
          }
        }

        
        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
      }
    })();
},{"../components/base-guestbook/index":"components/base-guestbook/index.vue","_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js","vue-hot-reload-api":"../../node_modules/vue-hot-reload-api/dist/index.js","vue":"../../node_modules/vue/dist/vue.runtime.esm.js"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
//# sourceMappingURL=/node.f672bdf2.js.map