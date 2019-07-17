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
})({"pages/usercenter/task/crontab.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
//
//
//
var _default = {
  props: {
    data: '',
    layerid: ''
  },
  data: function data() {
    return {
      Week: ['天', '一', '二', '三', '四', '五', '六'].map(function (val) {
        return '星期' + val;
      }),
      second: {
        cronEvery: '',
        incrementStart: '*',
        incrementIncrement: '5',
        rangeStart: '',
        rangeEnd: '',
        specificSpecific: []
      },
      minute: {
        cronEvery: '',
        incrementStart: '*',
        incrementIncrement: '5',
        rangeStart: '',
        rangeEnd: '',
        specificSpecific: []
      },
      hour: {
        cronEvery: '',
        incrementStart: '*',
        incrementIncrement: '5',
        rangeStart: '',
        rangeEnd: '',
        specificSpecific: []
      },
      day: {
        cronEvery: '',
        incrementStart: '*',
        incrementIncrement: '1',
        rangeStart: '',
        rangeEnd: '',
        specificSpecific: [],
        cronLastSpecificDomDay: 1,
        cronDaysBeforeEomMinus: '',
        cronDaysNearestWeekday: ''
      },
      week: {
        cronEvery: '',
        incrementStart: '*',
        incrementIncrement: '1',
        specificSpecific: [],
        cronNthDayDay: 1,
        cronNthDayNth: '1'
      },
      month: {
        cronEvery: '',
        incrementStart: '*',
        incrementIncrement: '5',
        rangeStart: '',
        rangeEnd: '',
        specificSpecific: []
      },
      year: {
        cronEvery: '',
        incrementStart: '2017',
        incrementIncrement: '1',
        rangeStart: '',
        rangeEnd: '',
        specificSpecific: []
      },
      output: {
        second: '',
        minute: '',
        hour: '',
        day: '',
        month: '',
        Week: '',
        year: ''
      }
    };
  },
  watch: {
    data: function data() {
      this.rest(this.$data);
    }
  },
  computed: {
    text: function text() {// return Language[this.i18n || 'cn']
    },
    secondsText: function secondsText() {
      var seconds = '';
      var cronEvery = this.second.cronEvery;

      switch (cronEvery.toString()) {
        case '1':
          seconds = '*';
          break;

        case '2':
          seconds = this.second.incrementStart + '/' + this.second.incrementIncrement;
          break;

        case '3':
          this.second.specificSpecific.map(function (val) {
            seconds += val + ',';
          });
          seconds = seconds.slice(0, -1);
          break;

        case '4':
          seconds = this.second.rangeStart + '-' + this.second.rangeEnd;
          break;
      }

      return seconds;
    },
    minutesText: function minutesText() {
      var minutes = '';
      var cronEvery = this.minute.cronEvery;

      switch (cronEvery.toString()) {
        case '1':
          minutes = '*';
          break;

        case '2':
          minutes = this.minute.incrementStart + '/' + this.minute.incrementIncrement;
          break;

        case '3':
          this.minute.specificSpecific.map(function (val) {
            minutes += val + ',';
          });
          minutes = minutes.slice(0, -1);
          break;

        case '4':
          minutes = this.minute.rangeStart + '-' + this.minute.rangeEnd;
          break;
      }

      return minutes;
    },
    hoursText: function hoursText() {
      var hours = '';
      var cronEvery = this.hour.cronEvery;

      switch (cronEvery.toString()) {
        case '1':
          hours = '*';
          break;

        case '2':
          hours = this.hour.incrementStart + '/' + this.hour.incrementIncrement;
          break;

        case '3':
          this.hour.specificSpecific.map(function (val) {
            hours += val + ',';
          });
          hours = hours.slice(0, -1);
          break;

        case '4':
          hours = this.hour.rangeStart + '-' + this.hour.rangeEnd;
          break;
      }

      return hours;
    },
    daysText: function daysText() {
      var days = '';
      var cronEvery = this.day.cronEvery;

      switch (cronEvery.toString()) {
        case '1':
          break;

        case '2':
        case '4':
        case '11':
          days = '?';
          break;

        case '3':
          days = this.day.incrementStart + '/' + this.day.incrementIncrement;
          break;

        case '5':
          this.day.specificSpecific.map(function (val) {
            days += val + ',';
          });
          days = days.slice(0, -1);
          break;

        case '6':
          days = "L";
          break;

        case '7':
          days = "LW";
          break;

        case '8':
          days = this.day.cronLastSpecificDomDay + 'L';
          break;

        case '9':
          days = 'L-' + this.day.cronDaysBeforeEomMinus;
          break;

        case '10':
          days = this.day.cronDaysNearestWeekday + "W";
          break;
      }

      return days;
    },
    weeksText: function weeksText() {
      var weeks = '';
      var cronEvery = this.day.cronEvery;

      switch (cronEvery.toString()) {
        case '1':
        case '3':
        case '5':
          weeks = '?';
          break;

        case '2':
          weeks = this.week.incrementStart + '/' + this.week.incrementIncrement;
          break;

        case '4':
          this.week.specificSpecific.map(function (val) {
            weeks += val + ',';
          });
          weeks = weeks.slice(0, -1);
          break;

        case '6':
        case '7':
        case '8':
        case '9':
        case '10':
          weeks = "?";
          break;

        case '11':
          weeks = this.week.cronNthDayDay + "#" + this.week.cronNthDayNth;
          break;
      }

      return weeks;
    },
    monthsText: function monthsText() {
      var months = '';
      var cronEvery = this.month.cronEvery;

      switch (cronEvery.toString()) {
        case '1':
          months = '*';
          break;

        case '2':
          months = this.month.incrementStart + '/' + this.month.incrementIncrement;
          break;

        case '3':
          this.month.specificSpecific.map(function (val) {
            months += val + ',';
          });
          months = months.slice(0, -1);
          break;

        case '4':
          months = this.month.rangeStart + '-' + this.month.rangeEnd;
          break;
      }

      return months;
    },
    yearsText: function yearsText() {
      var years = '';
      var cronEvery = this.year.cronEvery;

      switch (cronEvery.toString()) {
        case '1':
          years = '*';
          break;

        case '2':
          years = this.year.incrementStart + '/' + this.year.incrementIncrement;
          break;

        case '3':
          this.year.specificSpecific.map(function (val) {
            years += val + ',';
          });
          years = years.slice(0, -1);
          break;

        case '4':
          years = this.year.rangeStart + '-' + this.year.rangeEnd;
          break;
      }

      return years;
    },
    cron: function cron() {
      return "".concat(this.secondsText || '*', " ").concat(this.minutesText || '*', " ").concat(this.hoursText || '*', " ").concat(this.daysText || '*', " ").concat(this.monthsText || '*', " ").concat(this.weeksText || '?');
    }
  },
  methods: {
    getValue: function getValue() {
      return this.cron;
    },
    change: function change() {
      this.$parent.$emit('change', this.cron);
      this.close();
    },
    close: function close() {
      this.$layer.close(this.layerid);
    },
    rest: function rest(data) {
      for (var i in data) {
        if (data[i] instanceof Object) {
          this.rest(data[i]);
        } else {
          switch (_typeof(data[i])) {
            case 'object':
              data[i] = [];
              break;

            case 'string':
              data[i] = '';
              break;
          }
        }
      }
    }
  },
  mounted: function mounted() {}
};
exports.default = _default;
        var $5bd4ee = exports.default || module.exports;
      
      if (typeof $5bd4ee === 'function') {
        $5bd4ee = $5bd4ee.options;
      }
    
        /* template */
        Object.assign($5bd4ee, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "changeContab" } },
    [
      _c(
        "el-tabs",
        { attrs: { type: "border-card" } },
        [
          _c("el-tab-pane", [
            _c("span", { attrs: { slot: "label" }, slot: "label" }, [
              _c("i", { staticClass: "el-icon-date" }),
              _vm._v(" 秒\n      ")
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "tabBody" },
              [
                _c(
                  "el-row",
                  [
                    _c(
                      "el-radio",
                      {
                        attrs: { label: "1" },
                        model: {
                          value: _vm.second.cronEvery,
                          callback: function($$v) {
                            _vm.$set(_vm.second, "cronEvery", $$v)
                          },
                          expression: "second.cronEvery"
                        }
                      },
                      [_vm._v("每一秒")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-row",
                  [
                    _c(
                      "el-radio",
                      {
                        attrs: { label: "2" },
                        model: {
                          value: _vm.second.cronEvery,
                          callback: function($$v) {
                            _vm.$set(_vm.second, "cronEvery", $$v)
                          },
                          expression: "second.cronEvery"
                        }
                      },
                      [
                        _vm._v("\n            每隔\n            "),
                        _c("el-input-number", {
                          attrs: { size: "small", min: 1, max: 60 },
                          model: {
                            value: _vm.second.incrementIncrement,
                            callback: function($$v) {
                              _vm.$set(_vm.second, "incrementIncrement", $$v)
                            },
                            expression: "second.incrementIncrement"
                          }
                        }),
                        _vm._v("秒执行\n            ")
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-row",
                  [
                    _c(
                      "el-radio",
                      {
                        staticClass: "long",
                        attrs: { label: "3" },
                        model: {
                          value: _vm.second.cronEvery,
                          callback: function($$v) {
                            _vm.$set(_vm.second, "cronEvery", $$v)
                          },
                          expression: "second.cronEvery"
                        }
                      },
                      [
                        _vm._v("\n            具体秒数(可多选)\n            "),
                        _c(
                          "el-select",
                          {
                            attrs: { size: "small", multiple: "" },
                            model: {
                              value: _vm.second.specificSpecific,
                              callback: function($$v) {
                                _vm.$set(_vm.second, "specificSpecific", $$v)
                              },
                              expression: "second.specificSpecific"
                            }
                          },
                          _vm._l(60, function(val) {
                            return _c(
                              "el-option",
                              { key: val, attrs: { value: val - 1 } },
                              [_vm._v(_vm._s(val - 1))]
                            )
                          }),
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-row",
                  [
                    _c(
                      "el-radio",
                      {
                        attrs: { label: "4" },
                        model: {
                          value: _vm.second.cronEvery,
                          callback: function($$v) {
                            _vm.$set(_vm.second, "cronEvery", $$v)
                          },
                          expression: "second.cronEvery"
                        }
                      },
                      [
                        _vm._v("\n            周期从\n            "),
                        _c("el-input-number", {
                          attrs: { size: "small", min: 1, max: 60 },
                          model: {
                            value: _vm.second.rangeStart,
                            callback: function($$v) {
                              _vm.$set(_vm.second, "rangeStart", $$v)
                            },
                            expression: "second.rangeStart"
                          }
                        }),
                        _vm._v("到\n            "),
                        _c("el-input-number", {
                          attrs: { size: "small", min: 0, max: 59 },
                          model: {
                            value: _vm.second.rangeEnd,
                            callback: function($$v) {
                              _vm.$set(_vm.second, "rangeEnd", $$v)
                            },
                            expression: "second.rangeEnd"
                          }
                        }),
                        _vm._v("秒\n          ")
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
          _c("el-tab-pane", [
            _c("span", { attrs: { slot: "label" }, slot: "label" }, [
              _c("i", { staticClass: "el-icon-date" }),
              _vm._v("\n        分\n      ")
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "tabBody" },
              [
                _c(
                  "el-row",
                  [
                    _c(
                      "el-radio",
                      {
                        attrs: { label: "1" },
                        model: {
                          value: _vm.minute.cronEvery,
                          callback: function($$v) {
                            _vm.$set(_vm.minute, "cronEvery", $$v)
                          },
                          expression: "minute.cronEvery"
                        }
                      },
                      [_vm._v("每一分钟")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-row",
                  [
                    _c(
                      "el-radio",
                      {
                        attrs: { label: "2" },
                        model: {
                          value: _vm.minute.cronEvery,
                          callback: function($$v) {
                            _vm.$set(_vm.minute, "cronEvery", $$v)
                          },
                          expression: "minute.cronEvery"
                        }
                      },
                      [
                        _vm._v("\n            每隔\n            "),
                        _c("el-input-number", {
                          attrs: { size: "small", min: 1, max: 60 },
                          model: {
                            value: _vm.minute.incrementIncrement,
                            callback: function($$v) {
                              _vm.$set(_vm.minute, "incrementIncrement", $$v)
                            },
                            expression: "minute.incrementIncrement"
                          }
                        }),
                        _vm._v("分执行\n            ")
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-row",
                  [
                    _c(
                      "el-radio",
                      {
                        staticClass: "long",
                        attrs: { label: "3" },
                        model: {
                          value: _vm.minute.cronEvery,
                          callback: function($$v) {
                            _vm.$set(_vm.minute, "cronEvery", $$v)
                          },
                          expression: "minute.cronEvery"
                        }
                      },
                      [
                        _vm._v(
                          "\n            具体分钟数(可多选)\n            "
                        ),
                        _c(
                          "el-select",
                          {
                            attrs: { size: "small", multiple: "" },
                            model: {
                              value: _vm.minute.specificSpecific,
                              callback: function($$v) {
                                _vm.$set(_vm.minute, "specificSpecific", $$v)
                              },
                              expression: "minute.specificSpecific"
                            }
                          },
                          _vm._l(60, function(val) {
                            return _c(
                              "el-option",
                              { key: val, attrs: { value: val - 1 } },
                              [_vm._v(_vm._s(val - 1))]
                            )
                          }),
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-row",
                  [
                    _c(
                      "el-radio",
                      {
                        attrs: { label: "4" },
                        model: {
                          value: _vm.minute.cronEvery,
                          callback: function($$v) {
                            _vm.$set(_vm.minute, "cronEvery", $$v)
                          },
                          expression: "minute.cronEvery"
                        }
                      },
                      [
                        _vm._v("\n            周期从\n            "),
                        _c("el-input-number", {
                          attrs: { size: "small", min: 1, max: 60 },
                          model: {
                            value: _vm.minute.rangeStart,
                            callback: function($$v) {
                              _vm.$set(_vm.minute, "rangeStart", $$v)
                            },
                            expression: "minute.rangeStart"
                          }
                        }),
                        _vm._v("到\n            "),
                        _c("el-input-number", {
                          attrs: { size: "small", min: 0, max: 59 },
                          model: {
                            value: _vm.minute.rangeEnd,
                            callback: function($$v) {
                              _vm.$set(_vm.minute, "rangeEnd", $$v)
                            },
                            expression: "minute.rangeEnd"
                          }
                        }),
                        _vm._v("分\n          ")
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
          _c("el-tab-pane", [
            _c("span", { attrs: { slot: "label" }, slot: "label" }, [
              _c("i", { staticClass: "el-icon-date" }),
              _vm._v("\n        时\n      ")
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "tabBody" },
              [
                _c(
                  "el-row",
                  [
                    _c(
                      "el-radio",
                      {
                        attrs: { label: "1" },
                        model: {
                          value: _vm.hour.cronEvery,
                          callback: function($$v) {
                            _vm.$set(_vm.hour, "cronEvery", $$v)
                          },
                          expression: "hour.cronEvery"
                        }
                      },
                      [_vm._v("每一小时")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-row",
                  [
                    _c(
                      "el-radio",
                      {
                        attrs: { label: "2" },
                        model: {
                          value: _vm.hour.cronEvery,
                          callback: function($$v) {
                            _vm.$set(_vm.hour, "cronEvery", $$v)
                          },
                          expression: "hour.cronEvery"
                        }
                      },
                      [
                        _vm._v("\n            每隔\n            "),
                        _c("el-input-number", {
                          attrs: { size: "small", min: 0, max: 23 },
                          model: {
                            value: _vm.hour.incrementIncrement,
                            callback: function($$v) {
                              _vm.$set(_vm.hour, "incrementIncrement", $$v)
                            },
                            expression: "hour.incrementIncrement"
                          }
                        }),
                        _vm._v("小时执行\n            ")
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-row",
                  [
                    _c(
                      "el-radio",
                      {
                        staticClass: "long",
                        attrs: { label: "3" },
                        model: {
                          value: _vm.hour.cronEvery,
                          callback: function($$v) {
                            _vm.$set(_vm.hour, "cronEvery", $$v)
                          },
                          expression: "hour.cronEvery"
                        }
                      },
                      [
                        _vm._v(
                          "\n            具体小时数(可多选)\n            "
                        ),
                        _c(
                          "el-select",
                          {
                            attrs: { size: "small", multiple: "" },
                            model: {
                              value: _vm.hour.specificSpecific,
                              callback: function($$v) {
                                _vm.$set(_vm.hour, "specificSpecific", $$v)
                              },
                              expression: "hour.specificSpecific"
                            }
                          },
                          _vm._l(24, function(val) {
                            return _c(
                              "el-option",
                              { key: val, attrs: { value: val - 1 } },
                              [_vm._v(_vm._s(val - 1))]
                            )
                          }),
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-row",
                  [
                    _c(
                      "el-radio",
                      {
                        attrs: { label: "4" },
                        model: {
                          value: _vm.hour.cronEvery,
                          callback: function($$v) {
                            _vm.$set(_vm.hour, "cronEvery", $$v)
                          },
                          expression: "hour.cronEvery"
                        }
                      },
                      [
                        _vm._v("\n            周期从\n            "),
                        _c("el-input-number", {
                          attrs: { size: "small", min: 0, max: 23 },
                          model: {
                            value: _vm.hour.rangeStart,
                            callback: function($$v) {
                              _vm.$set(_vm.hour, "rangeStart", $$v)
                            },
                            expression: "hour.rangeStart"
                          }
                        }),
                        _vm._v("到\n            "),
                        _c("el-input-number", {
                          attrs: { size: "small", min: 0, max: 23 },
                          model: {
                            value: _vm.hour.rangeEnd,
                            callback: function($$v) {
                              _vm.$set(_vm.hour, "rangeEnd", $$v)
                            },
                            expression: "hour.rangeEnd"
                          }
                        }),
                        _vm._v("小时\n          ")
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
          _c("el-tab-pane", [
            _c("span", { attrs: { slot: "label" }, slot: "label" }, [
              _c("i", { staticClass: "el-icon-date" }),
              _vm._v("\n        天\n      ")
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "tabBody" },
              [
                _c(
                  "el-row",
                  [
                    _c(
                      "el-radio",
                      {
                        attrs: { label: "1" },
                        model: {
                          value: _vm.day.cronEvery,
                          callback: function($$v) {
                            _vm.$set(_vm.day, "cronEvery", $$v)
                          },
                          expression: "day.cronEvery"
                        }
                      },
                      [_vm._v("每一天")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-row",
                  [
                    _c(
                      "el-radio",
                      {
                        attrs: { label: "2" },
                        model: {
                          value: _vm.day.cronEvery,
                          callback: function($$v) {
                            _vm.$set(_vm.day, "cronEvery", $$v)
                          },
                          expression: "day.cronEvery"
                        }
                      },
                      [
                        _vm._v("\n            每隔\n            "),
                        _c("el-input-number", {
                          attrs: { size: "small", min: 1, max: 7 },
                          model: {
                            value: _vm.week.incrementIncrement,
                            callback: function($$v) {
                              _vm.$set(_vm.week, "incrementIncrement", $$v)
                            },
                            expression: "week.incrementIncrement"
                          }
                        }),
                        _vm._v("周执行\n            ")
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-row",
                  [
                    _c(
                      "el-radio",
                      {
                        attrs: { label: "3" },
                        model: {
                          value: _vm.day.cronEvery,
                          callback: function($$v) {
                            _vm.$set(_vm.day, "cronEvery", $$v)
                          },
                          expression: "day.cronEvery"
                        }
                      },
                      [
                        _vm._v("\n            每隔\n            "),
                        _c("el-input-number", {
                          attrs: { size: "small", min: 1, max: 31 },
                          model: {
                            value: _vm.day.incrementIncrement,
                            callback: function($$v) {
                              _vm.$set(_vm.day, "incrementIncrement", $$v)
                            },
                            expression: "day.incrementIncrement"
                          }
                        }),
                        _vm._v("天执行\n            ")
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-row",
                  [
                    _c(
                      "el-radio",
                      {
                        staticClass: "long",
                        attrs: { label: "4" },
                        model: {
                          value: _vm.day.cronEvery,
                          callback: function($$v) {
                            _vm.$set(_vm.day, "cronEvery", $$v)
                          },
                          expression: "day.cronEvery"
                        }
                      },
                      [
                        _vm._v(
                          "\n            具体星期几(可多选)\n            "
                        ),
                        _c(
                          "el-select",
                          {
                            attrs: { size: "small", multiple: "" },
                            model: {
                              value: _vm.week.specificSpecific,
                              callback: function($$v) {
                                _vm.$set(_vm.week, "specificSpecific", $$v)
                              },
                              expression: "week.specificSpecific"
                            }
                          },
                          _vm._l(7, function(val) {
                            return _c("el-option", {
                              key: val,
                              attrs: {
                                label: _vm.Week[val - 1],
                                value: [
                                  "SUN",
                                  "MON",
                                  "TUE",
                                  "WED",
                                  "THU",
                                  "FRI",
                                  "SAT"
                                ][val - 1]
                              }
                            })
                          }),
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-row",
                  [
                    _c(
                      "el-radio",
                      {
                        staticClass: "long",
                        attrs: { label: "5" },
                        model: {
                          value: _vm.day.cronEvery,
                          callback: function($$v) {
                            _vm.$set(_vm.day, "cronEvery", $$v)
                          },
                          expression: "day.cronEvery"
                        }
                      },
                      [
                        _vm._v("\n            具体天数(可多选)\n            "),
                        _c(
                          "el-select",
                          {
                            attrs: { size: "small", multiple: "" },
                            model: {
                              value: _vm.day.specificSpecific,
                              callback: function($$v) {
                                _vm.$set(_vm.day, "specificSpecific", $$v)
                              },
                              expression: "day.specificSpecific"
                            }
                          },
                          _vm._l(31, function(val) {
                            return _c(
                              "el-option",
                              { key: val, attrs: { value: val } },
                              [_vm._v(_vm._s(val))]
                            )
                          }),
                          1
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
          ]),
          _vm._v(" "),
          _c("el-tab-pane", [
            _c("span", { attrs: { slot: "label" }, slot: "label" }, [
              _c("i", { staticClass: "el-icon-date" }),
              _vm._v("\n        月\n      ")
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "tabBody" },
              [
                _c(
                  "el-row",
                  [
                    _c(
                      "el-radio",
                      {
                        attrs: { label: "1" },
                        model: {
                          value: _vm.month.cronEvery,
                          callback: function($$v) {
                            _vm.$set(_vm.month, "cronEvery", $$v)
                          },
                          expression: "month.cronEvery"
                        }
                      },
                      [_vm._v("每一月")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-row",
                  [
                    _c(
                      "el-radio",
                      {
                        attrs: { label: "2" },
                        model: {
                          value: _vm.month.cronEvery,
                          callback: function($$v) {
                            _vm.$set(_vm.month, "cronEvery", $$v)
                          },
                          expression: "month.cronEvery"
                        }
                      },
                      [
                        _vm._v("\n            每隔\n            "),
                        _c("el-input-number", {
                          attrs: { size: "small", min: 0, max: 12 },
                          model: {
                            value: _vm.month.incrementIncrement,
                            callback: function($$v) {
                              _vm.$set(_vm.month, "incrementIncrement", $$v)
                            },
                            expression: "month.incrementIncrement"
                          }
                        }),
                        _vm._v("月执行\n            ")
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-row",
                  [
                    _c(
                      "el-radio",
                      {
                        staticClass: "long",
                        attrs: { label: "3" },
                        model: {
                          value: _vm.month.cronEvery,
                          callback: function($$v) {
                            _vm.$set(_vm.month, "cronEvery", $$v)
                          },
                          expression: "month.cronEvery"
                        }
                      },
                      [
                        _vm._v("\n            具体月数(可多选)\n            "),
                        _c(
                          "el-select",
                          {
                            attrs: { size: "small", multiple: "" },
                            model: {
                              value: _vm.month.specificSpecific,
                              callback: function($$v) {
                                _vm.$set(_vm.month, "specificSpecific", $$v)
                              },
                              expression: "month.specificSpecific"
                            }
                          },
                          _vm._l(12, function(val) {
                            return _c("el-option", {
                              key: val,
                              attrs: { label: val, value: val }
                            })
                          }),
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "el-row",
                  [
                    _c(
                      "el-radio",
                      {
                        attrs: { label: "4" },
                        model: {
                          value: _vm.month.cronEvery,
                          callback: function($$v) {
                            _vm.$set(_vm.month, "cronEvery", $$v)
                          },
                          expression: "month.cronEvery"
                        }
                      },
                      [
                        _vm._v("\n            从\n            "),
                        _c("el-input-number", {
                          attrs: { size: "small", min: 1, max: 12 },
                          model: {
                            value: _vm.month.rangeStart,
                            callback: function($$v) {
                              _vm.$set(_vm.month, "rangeStart", $$v)
                            },
                            expression: "month.rangeStart"
                          }
                        }),
                        _vm._v("到\n            "),
                        _c("el-input-number", {
                          attrs: { size: "small", min: 1, max: 12 },
                          model: {
                            value: _vm.month.rangeEnd,
                            callback: function($$v) {
                              _vm.$set(_vm.month, "rangeEnd", $$v)
                            },
                            expression: "month.rangeEnd"
                          }
                        }),
                        _vm._v("月之间的每个月\n          ")
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
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "bottom" },
        [
          _c("span", { staticClass: "value" }, [_vm._v(_vm._s(this.cron))]),
          _vm._v(" "),
          _c(
            "el-button",
            { attrs: { type: "primary" }, on: { click: _vm.change } },
            [_vm._v("保存")]
          ),
          _vm._v(" "),
          _c("el-button", { on: { click: _vm.close } }, [_vm._v("关闭")])
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
            _scopeId: "data-v-5bd4ee",
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
            api.createRecord('$5bd4ee', $5bd4ee);
          } else {
            api.reload('$5bd4ee', $5bd4ee);
          }
        }

        
        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
      }
    })();
},{"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js","vue-hot-reload-api":"../../node_modules/vue-hot-reload-api/dist/index.js","vue":"../../node_modules/vue/dist/vue.runtime.esm.js"}],"pages/usercenter/task/taskEdit.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _edit = _interopRequireDefault(require("../mixin/edit.js"));

var _crontab = _interopRequireDefault(require("./crontab"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  mixins: [_edit.default],
  data: function data() {
    return {
      model: 'task',
      form: {
        url: '',
        param: '',
        cron: '* */10 * * * *',
        runstate: 0,
        method: 'get',
        notice: 0,
        buytime: 1
      },
      rules: {
        name: [{
          required: true,
          message: '请填写1-20位的名称',
          trigger: 'blur'
        }, {
          min: 1,
          max: 20,
          message: '长度在1 到 20 个字符',
          trigger: 'blur'
        }],
        url: [{
          required: true,
          message: '请填写1-200位的url',
          trigger: 'blur'
        }, {
          min: 1,
          max: 200,
          message: '长度在1 到 200 个字符',
          trigger: 'blur'
        }, {
          pattern: /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i,
          message: '请输入合法的url地址'
        }]
      }
    };
  },
  components: {
    'base-crontab': _crontab.default
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
    openCron: function openCron() {
      this.$layer.iframe({
        content: {
          content: _crontab.default,
          parent: this,
          data: {
            data: this.form.cron
          }
        },
        area: ['565px', '400px'],
        title: '选择'
      });
    },
    cronChange: function cronChange(data) {
      console.log(data);
    },
    before: function () {
      var _before = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.form.groupid = this.$route.params.groupid;

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function before() {
        return _before.apply(this, arguments);
      }

      return before;
    }()
  },
  mounted: function () {
    var _mounted = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var _this = this;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              this.$on('change', function (data) {
                // this.form.cron = data;
                _this.$set(_this.form, 'cron', data);

                console.log(_this.form);
              });

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function mounted() {
      return _mounted.apply(this, arguments);
    }

    return mounted;
  }()
};
exports.default = _default;
        var $c6cc44 = exports.default || module.exports;
      
      if (typeof $c6cc44 === 'function') {
        $c6cc44 = $c6cc44.options;
      }
    
        /* template */
        Object.assign($c6cc44, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "main" } }, [
    _c(
      "div",
      { staticClass: "list" },
      [
        _c(
          "el-form",
          {
            ref: "form",
            staticStyle: { width: "1000px" },
            attrs: { model: _vm.form, rules: _vm.rules, "label-width": "100px" }
          },
          [
            _c(
              "el-form-item",
              { attrs: { label: "任务名称", prop: "name" } },
              [
                _c("el-input", {
                  attrs: { placeholder: "" },
                  model: {
                    value: _vm.form.name,
                    callback: function($$v) {
                      _vm.$set(
                        _vm.form,
                        "name",
                        typeof $$v === "string" ? $$v.trim() : $$v
                      )
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
              { attrs: { label: "执行规则", prop: "cron" } },
              [
                _c(
                  "el-input",
                  {
                    attrs: { readonly: true },
                    model: {
                      value: _vm.form.cron,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.form,
                          "cron",
                          typeof $$v === "string" ? $$v.trim() : $$v
                        )
                      },
                      expression: "form.cron"
                    }
                  },
                  [
                    _c("el-button", {
                      attrs: { slot: "append", icon: "el-icon-search" },
                      nativeOn: {
                        click: function($event) {
                          return _vm.openCron($event)
                        }
                      },
                      slot: "append"
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("el-form-item", { attrs: { label: "请求地址", prop: "url" } }, [
              _c(
                "div",
                { staticStyle: { display: "flex", "padding-right": "10px" } },
                [
                  _c("el-input", {
                    staticStyle: { flex: "1", "margin-right": "10px" },
                    attrs: { placeholder: "" },
                    model: {
                      value: _vm.form.url,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.form,
                          "url",
                          typeof $$v === "string" ? $$v.trim() : $$v
                        )
                      },
                      expression: "form.url"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "el-select",
                    {
                      staticStyle: { width: "100px" },
                      attrs: { placeholder: "" },
                      model: {
                        value: _vm.form.method,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "method", $$v)
                        },
                        expression: "form.method"
                      }
                    },
                    [
                      _c("el-option", {
                        key: "get",
                        attrs: { value: "get", label: "get" }
                      }),
                      _vm._v(" "),
                      _c("el-option", {
                        key: "post",
                        attrs: { value: "post", label: "post" }
                      }),
                      _vm._v(" "),
                      _c("el-option", {
                        key: "put",
                        attrs: { value: "put", label: "put" }
                      }),
                      _vm._v(" "),
                      _c("el-option", {
                        key: "delete",
                        attrs: { value: "delete", label: "delete" }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "el-form-item",
              { attrs: { label: "请求参数", prop: "param" } },
              [
                _c("el-input", {
                  attrs: {
                    placeholder: "可以为字符串也可以为json，注意避免特殊字符"
                  },
                  model: {
                    value: _vm.form.param,
                    callback: function($$v) {
                      _vm.$set(
                        _vm.form,
                        "param",
                        typeof $$v === "string" ? $$v.trim() : $$v
                      )
                    },
                    expression: "form.param"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-form-item",
              { attrs: { label: "是否告警", prop: "notice" } },
              [
                _c(
                  "el-select",
                  {
                    model: {
                      value: _vm.form.notice,
                      callback: function($$v) {
                        _vm.$set(
                          _vm.form,
                          "notice",
                          typeof $$v === "string" ? $$v.trim() : $$v
                        )
                      },
                      expression: "form.notice"
                    }
                  },
                  [
                    _c("el-option", {
                      key: "0",
                      attrs: { value: 0, label: "告警" }
                    }),
                    _vm._v(" "),
                    _c("el-option", {
                      key: "1",
                      attrs: { value: 1, label: "忽略错误" }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("p", { staticStyle: { color: "#909399" } }, [
                  _vm._v("超时或者http code不为200时，是否发送告警")
                ])
              ],
              1
            ),
            _vm._v(" "),
            _vm.id == 0
              ? [
                  _c(
                    "el-form-item",
                    { attrs: { label: "是否执行", prop: "runstate" } },
                    [
                      _c(
                        "el-select",
                        {
                          model: {
                            value: _vm.form.runstate,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.form,
                                "runstate",
                                typeof $$v === "string" ? $$v.trim() : $$v
                              )
                            },
                            expression: "form.runstate"
                          }
                        },
                        [
                          _c("el-option", {
                            key: "0",
                            attrs: { value: 0, label: "立即执行" }
                          }),
                          _vm._v(" "),
                          _c("el-option", {
                            key: "1",
                            attrs: { value: 1, label: "稍后执行" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-form-item",
                    { attrs: { label: "服务购买", prop: "buytime" } },
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
                      _c("p", { staticStyle: { color: "#909399" } }, [
                        _vm._v("每月2元钱")
                      ])
                    ],
                    1
                  )
                ]
              : _vm._e(),
            _vm._v(" "),
            _c(
              "el-form-item",
              [
                _c(
                  "el-button",
                  {
                    attrs: { type: "primary" },
                    on: { click: _vm.submitHandle }
                  },
                  [_vm._v("提交")]
                )
              ],
              1
            )
          ],
          2
        )
      ],
      1
    )
  ])
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
            api.createRecord('$c6cc44', $c6cc44);
          } else {
            api.reload('$c6cc44', $c6cc44);
          }
        }

        
        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
      }
    })();
},{"../mixin/edit.js":"pages/usercenter/mixin/edit.js","./crontab":"pages/usercenter/task/crontab.vue","_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js","vue-hot-reload-api":"../../node_modules/vue-hot-reload-api/dist/index.js","vue":"../../node_modules/vue/dist/vue.runtime.esm.js"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
//# sourceMappingURL=/taskEdit.3e23fade.js.map