parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"79D5":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _edit=_interopRequireDefault(require("../mixin/edit.js"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var _default={mixins:[_edit.default],data:function(){return{model:"smsSigname",form:{name:"",remarks:""},rules:{name:[{required:!0,message:"请填写1-12位的名称",trigger:"blur"},{min:1,max:20,message:"长度在1 到 12个字符",trigger:"blur"}],remarks:[{required:!0,message:"请填写1-100位的名称",trigger:"blur"},{min:1,max:100,message:"长度在1 到 100 个字符",trigger:"blur"}]}}},methods:{}};exports.default=_default;
(function(){var t=exports.default||module.exports;"function"==typeof t&&(t=t.options),Object.assign(t,{render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"main"}},[r("div",{staticClass:"list"},[r("el-form",{ref:"form",staticStyle:{width:"1000px"},attrs:{model:t.form,rules:t.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"签名名称",prop:"name"}},[r("el-input",{attrs:{placeholder:"请输入中英文或数字"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name","string"==typeof e?e.trim():e)},expression:"form.name"}}),t._v(" "),r("p",{staticStyle:{color:"#909399","font-size":"13px",height:"24px"}},[t._v("无须添加【】、()、[]符号，签名发送会自带【】符号，避免重复。")]),t._v(" "),r("p",{staticStyle:{color:"#909399","font-size":"13px",height:"24px"}},[t._v("所有发送的短信都会有敏感词检测，请正规使用。")])],1),t._v(" "),r("el-form-item",{attrs:{label:"备注",prop:"remarks"}},[r("div",{staticStyle:{display:"flex","padding-right":"10px"}},[r("el-input",{staticStyle:{flex:"1","margin-right":"10px"},attrs:{type:"textarea",rows:2,placeholder:""},model:{value:t.form.remarks,callback:function(e){t.$set(t.form,"remarks","string"==typeof e?e.trim():e)},expression:"form.remarks"}})],1)]),t._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:t.submitHandle}},[t._v("提交")])],1)],1)],1)])},staticRenderFns:[],_compiled:!0,_scopeId:null,functional:void 0});})();
},{"../mixin/edit.js":"PtNF"}]},{},[], null)
//# sourceMappingURL=/signameEdit.abce1ba1.js.map