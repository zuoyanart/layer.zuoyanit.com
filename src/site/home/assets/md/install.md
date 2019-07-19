```js
npm install vue-layer
```
##### 在入口js中引用
```js
import Vue from 'vue';
import layer from 'vue-layer'
import 'vue-layer/lib/vue-layer.css';

Vue.prototype.$layer = layer(Vue);
```
##### 全局配置项
```js
Vue.prototype.$layer = layer(Vue, {
    msgtime: 3,//目前只有一项，即msg方法的默认消失时间，单位：秒
});
```