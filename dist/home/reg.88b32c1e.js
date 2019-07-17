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
})({"pages/reg.vue":[function(require,module,exports) {
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
      src: '',
      form: {
        username: '',
        password: '',
        repassword: '',
        code: ''
      },
      rules: {
        username: [{
          validator: this.validateUsername,
          trigger: 'blur',
          message: '请填写您的手机号'
        }],
        password: [{
          validator: this.validatePassword,
          trigger: 'blur',
          message: '请填写6-20位的密码'
        }],
        repassword: [{
          validator: this.validateRePassword,
          trigger: 'blur',
          message: '两次密码不一致'
        }],
        code: [{
          validator: this.validateCode,
          message: '请填写4位的验证码',
          trigger: 'blur'
        }]
      }
    };
  },
  methods: {
    submitNative: function submitNative() {
      return false;
    },
    validateUsername: function validateUsername(rule, value, callback) {
      var len = value.length;

      if (len != 11) {
        callback(new Error('请填写您的手机号'));
      } else {
        callback();
      }
    },
    validatePassword: function validatePassword(rule, value, callback) {
      var len = value.length;

      if (len > 20 || len < 6) {
        callback(new Error('请填写密码'));
      } else {
        callback();
      }
    },
    validateRePassword: function validateRePassword(rule, value, callback) {
      var len = value.length;

      if (len > 20 || len < 6) {
        callback(new Error('请填写密码'));
      } else if (value !== this.form.password) {
        callback(new Error('两次密码不一致'));
      } else {
        callback();
      }
    },
    validateCode: function validateCode(rule, value, callback) {
      var len = value.length;

      if (len == 0 || len > 4) {
        callback(new Error('请填位验证码'));
      } else {
        callback();
      }
    },
    setSrc: function () {
      var _setSrc = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var doc;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$tools.httpAgent('/plugin/captcha', 'get', {
                  1: 1
                });

              case 2:
                doc = _context.sent;
                this.src = doc.data.captcha;
                localStorage.setItem('captcha', doc.data.captchaid);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setSrc() {
        return _setSrc.apply(this, arguments);
      }

      return setSrc;
    }(),
    submitHandle: function () {
      var _submitHandle = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // const self = this;
                this.$refs.form.validate(
                /*#__PURE__*/
                function () {
                  var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee2(valid) {
                    var doc;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            if (!valid) {
                              _context2.next = 6;
                              break;
                            }

                            _this.form.captcha = localStorage.getItem('captcha');
                            _context2.next = 4;
                            return _this.$tools.httpAgent('/reg', 'post', _this.form, {
                              login: false
                            });

                          case 4:
                            doc = _context2.sent;

                            if (doc.code === 200) {
                              localStorage.setItem('jwt', JSON.stringify(doc.data));

                              _this.$router.push('/usercenter');
                            } else {
                              // self.$layer.msg('帐号或者密码错误');
                              _this.setSrc();
                            }

                          case 6:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function submitHandle() {
        return _submitHandle.apply(this, arguments);
      }

      return submitHandle;
    }()
  },
  mounted: function mounted() {
    this.setSrc();
  }
};
exports.default = _default;
        var $3143be = exports.default || module.exports;
      
      if (typeof $3143be === 'function') {
        $3143be = $3143be.options;
      }
    
        /* template */
        Object.assign($3143be, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "router-main login-main" }, [
    _c(
      "div",
      { staticClass: "login" },
      [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "el-form",
          {
            ref: "form",
            staticClass: "loginform",
            attrs: { model: _vm.form, rules: _vm.rules, "label-width": "70px" }
          },
          [
            _c(
              "el-form-item",
              { attrs: { label: "手机号", prop: "username" } },
              [
                _c("el-input", {
                  attrs: { placeholder: "该手机号为找回密码唯一途径" },
                  model: {
                    value: _vm.form.username,
                    callback: function($$v) {
                      _vm.$set(
                        _vm.form,
                        "username",
                        typeof $$v === "string" ? $$v.trim() : $$v
                      )
                    },
                    expression: "form.username"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-form-item",
              { attrs: { label: "密码", prop: "password" } },
              [
                _c("el-input", {
                  attrs: { type: "password", placeholder: "密码" },
                  model: {
                    value: _vm.form.password,
                    callback: function($$v) {
                      _vm.$set(
                        _vm.form,
                        "password",
                        typeof $$v === "string" ? $$v.trim() : $$v
                      )
                    },
                    expression: "form.password"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-form-item",
              { attrs: { label: "重复密码", prop: "repassword" } },
              [
                _c("el-input", {
                  attrs: { type: "password", placeholder: "密码" },
                  model: {
                    value: _vm.form.repassword,
                    callback: function($$v) {
                      _vm.$set(
                        _vm.form,
                        "repassword",
                        typeof $$v === "string" ? $$v.trim() : $$v
                      )
                    },
                    expression: "form.repassword"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-form-item",
              { staticClass: "code", attrs: { label: "验证码", prop: "code" } },
              [
                _c("el-input", {
                  attrs: { placeholder: "请输入验证码" },
                  model: {
                    value: _vm.form.code,
                    callback: function($$v) {
                      _vm.$set(
                        _vm.form,
                        "code",
                        typeof $$v === "string" ? $$v.trim() : $$v
                      )
                    },
                    expression: "form.code"
                  }
                }),
                _vm._v(" "),
                _c("div", {
                  staticClass: "img",
                  domProps: { innerHTML: _vm._s(_vm.src) },
                  on: { click: _vm.setSrc }
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
                  {
                    staticStyle: { width: "100%" },
                    attrs: { type: "success", size: "medium" },
                    on: { click: _vm.submitHandle }
                  },
                  [_vm._v("注册")]
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", [_vm._v("\n      免费注册\n      "), _c("span")])
  }
]
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: "data-v-3143be",
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
            api.createRecord('$3143be', $3143be);
          } else {
            api.reload('$3143be', $3143be);
          }
        }

        
        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
      }
    })();
},{"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js","vue-hot-reload-api":"../../node_modules/vue-hot-reload-api/dist/index.js","vue":"../../node_modules/vue/dist/vue.runtime.esm.js"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
//# sourceMappingURL=/reg.88b32c1e.js.map