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
})({"pages/usercenter/task/form/buyTask.vue":[function(require,module,exports) {
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
var _default = {
  data: function data() {
    return {
      form: {
        buytime: 6
      }
    };
  },
  props: {
    taskInfo: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    layerid: '',
    index: {
      type: Number,
      default: -1
    }
  },
  methods: {
    getByTimeOption: function getByTimeOption() {
      var time = [];

      for (var i = 1; i < 13; i++) {
        time.push({
          label: i + '个月',
          value: i
        });
      }

      return time;
    },
    buy: function () {
      var _buy = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var doc;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$tools.httpAgent('/buy/task', 'post', {
                  taskid: this.taskInfo.id,
                  buytime: this.form.buytime
                });

              case 2:
                doc = _context.sent;

                if (doc.code === 200) {
                  this.$parent.$emit('updateData', {
                    index: this.index,
                    key: 'expire_time',
                    value: doc.data
                  });
                  this.$layer.close(this.layerid);
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function buy() {
        return _buy.apply(this, arguments);
      }

      return buy;
    }()
  }
};
exports.default = _default;
        var $714d8a = exports.default || module.exports;
      
      if (typeof $714d8a === 'function') {
        $714d8a = $714d8a.options;
      }
    
        /* template */
        Object.assign($714d8a, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-form",
    { staticStyle: { margin: "10px", width: "100%" } },
    [
      _c(
        "el-form-item",
        { attrs: { label: "服务期限", prop: "buytime" } },
        [
          _c(
            "el-select",
            {
              model: {
                value: _vm.form.buytime,
                callback: function($$v) {
                  _vm.$set(
                    _vm.form,
                    "buytime",
                    typeof $$v === "string" ? $$v.trim() : $$v
                  )
                },
                expression: "form.buytime"
              }
            },
            _vm._l(_vm.getByTimeOption(), function(item) {
              return _c("el-option", {
                key: item.value,
                attrs: { value: item.value, label: item.label }
              })
            }),
            1
          ),
          _vm._v(" "),
          _c("span", { staticStyle: { color: "#909399" } }, [
            _vm._v("每月2元钱")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-form-item",
        { staticStyle: { "margin-top": "50px" } },
        [
          _c(
            "el-button",
            {
              staticStyle: { width: "90%" },
              attrs: { type: "success" },
              on: { click: _vm.buy }
            },
            [_vm._v("确认购买")]
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
            api.createRecord('$714d8a', $714d8a);
          } else {
            api.reload('$714d8a', $714d8a);
          }
        }

        
        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
      }
    })();
},{"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js","vue-hot-reload-api":"../../node_modules/vue-hot-reload-api/dist/index.js","vue":"../../node_modules/vue/dist/vue.runtime.esm.js"}],"pages/usercenter/task/task.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../mixin/index.js"));

var _buyTask2 = _interopRequireDefault(require("./form/buyTask"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  mixins: [_index.default],
  data: function data() {
    return {
      model: 'task'
    };
  },
  mounted: function () {
    var _mounted = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var _this = this;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.$on('updateData', function (data) {
                _this.$set(_this.tableData[data.index], data.key, data.value);
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function mounted() {
      return _mounted.apply(this, arguments);
    }

    return mounted;
  }(),
  methods: {
    before: function before() {
      this.apiParams.groupid = this.$route.params.groupid;
    },
    newTask: function newTask() {
      return '/usercenter/taskgroup/task/' + this.$route.params.groupid + '/edit';
    },
    stopTask: function () {
      var _stopTask = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(row) {
        var doc;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.$tools.httpAgent('/task/stop', 'get', {
                  id: row.id
                });

              case 2:
                doc = _context2.sent;

                if (doc.code === 200) {
                  row.runstate = 1;
                  this.$layer.msg('停止成功');
                }

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function stopTask(_x) {
        return _stopTask.apply(this, arguments);
      }

      return stopTask;
    }(),
    startTask: function () {
      var _startTask = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(row) {
        var doc;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.$tools.httpAgent('/task/start', 'get', {
                  id: row.id
                });

              case 2:
                doc = _context3.sent;

                if (doc.code === 200) {
                  row.runstate = 0;
                  this.$layer.msg('开启成功');
                }

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function startTask(_x2) {
        return _startTask.apply(this, arguments);
      }

      return startTask;
    }(),
    buyTask: function buyTask() {
      var row = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var index = arguments.length > 1 ? arguments[1] : undefined;
      //续费
      this.$layer.iframe({
        title: '',
        content: {
          content: _buyTask2.default,
          parent: this,
          data: {
            taskInfo: row,
            index: index
          }
        },
        area: ['500px', '250px']
      });
    },
    formatCommand: function formatCommand(type, row) {
      var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
      return {
        type: type,
        row: row,
        index: index
      };
    },
    handleCommand: function handleCommand(command) {
      switch (command.type) {
        case 'del':
          this.del(command.row);
          break;

        case 'stop':
          this.stopTask(command.row);
          break;

        case 'start':
          this.startTask(command.row);
          break;

        case 'buy':
          this.buyTask(command.row, command.index);
          break;
      }
    }
  }
};
exports.default = _default;
        var $1bb14e = exports.default || module.exports;
      
      if (typeof $1bb14e === 'function') {
        $1bb14e = $1bb14e.options;
      }
    
        /* template */
        Object.assign($1bb14e, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "main" } },
    [
      _c(
        "base-mulmenu",
        { on: { search: _vm.page } },
        [
          _c("router-link", { attrs: { to: _vm.newTask() } }, [
            _vm._v("新建任务")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-table",
        {
          attrs: { data: _vm.tableData, border: "" },
          on: { "selection-change": _vm.checkAll }
        },
        [
          _vm._v("\n    >\n    "),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "name", label: "名称" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    scope.row.runstate == 0
                      ? _c("i", {
                          staticClass: "el-icon-loading",
                          staticStyle: { color: "green" }
                        })
                      : _c("i", { staticClass: "el-icon-warning-outline" }),
                    _vm._v("\n        " + _vm._s(scope.row.name) + "\n      ")
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "cron", label: "执行规则", width: "150" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "url", label: "地址", "min-width": 100 }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { prop: "method", label: "请求方法", width: "80" }
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "状态码" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [_vm._v(_vm._s(scope.row.lastcode))]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "最后一次错误信息" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [_vm._v(_vm._s(scope.row.lastresult))]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "执行时间" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _vm._v(_vm._s(_vm._f("formatTime")(scope.row.lasttime)))
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "执行结束" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _vm._v(_vm._s(_vm._f("formatTime")(scope.row.lasttimeend)))
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "有效期" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _vm._v(_vm._s(_vm._f("formatTime")(scope.row.expire_time)))
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "操作" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c(
                      "el-button",
                      {
                        attrs: { type: "primary" },
                        on: {
                          click: function($event) {
                            return _vm.edit(scope.row.id)
                          }
                        }
                      },
                      [_vm._v("编辑")]
                    ),
                    _vm._v(" "),
                    _c(
                      "el-dropdown",
                      {
                        attrs: { type: "primary" },
                        on: { command: _vm.handleCommand }
                      },
                      [
                        _c("el-button", { attrs: { type: "primary" } }, [
                          _vm._v("\n            更多\n            "),
                          _c("i", {
                            staticClass: "el-icon-arrow-down el-icon--right"
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "el-dropdown-menu",
                          { attrs: { slot: "dropdown" }, slot: "dropdown" },
                          [
                            scope.row.runstate == 0
                              ? _c(
                                  "el-dropdown-item",
                                  {
                                    attrs: {
                                      command: _vm.formatCommand(
                                        "stop",
                                        scope.row
                                      )
                                    }
                                  },
                                  [_vm._v("停止")]
                                )
                              : _c(
                                  "el-dropdown-item",
                                  {
                                    attrs: {
                                      command: _vm.formatCommand(
                                        "start",
                                        scope.row
                                      )
                                    }
                                  },
                                  [_vm._v("启动")]
                                ),
                            _vm._v(" "),
                            _c(
                              "el-dropdown-item",
                              {
                                attrs: {
                                  command: _vm.formatCommand(
                                    "buy",
                                    scope.row,
                                    scope.$index
                                  )
                                }
                              },
                              [_vm._v("续费")]
                            ),
                            _vm._v(" "),
                            _c(
                              "el-dropdown-item",
                              {
                                attrs: {
                                  command: _vm.formatCommand("del", scope.row)
                                }
                              },
                              [_vm._v("删除")]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticStyle: {
            "margin-top": "30px",
            "text-align": "right",
            "margin-right": "20px"
          }
        },
        [
          _vm.total > _vm.apiParams.mp
            ? _c("el-pagination", {
                attrs: {
                  background: "",
                  layout: "prev, pager, next",
                  total: _vm.total,
                  "page-size": _vm.apiParams.mp
                },
                on: { "current-change": _vm.currentChange }
              })
            : _vm._e()
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
            api.createRecord('$1bb14e', $1bb14e);
          } else {
            api.reload('$1bb14e', $1bb14e);
          }
        }

        
        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
      }
    })();
},{"../mixin/index.js":"pages/usercenter/mixin/index.js","./form/buyTask":"pages/usercenter/task/form/buyTask.vue","_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js","vue-hot-reload-api":"../../node_modules/vue-hot-reload-api/dist/index.js","vue":"../../node_modules/vue/dist/vue.runtime.esm.js"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
//# sourceMappingURL=/task.3d7f759a.js.map