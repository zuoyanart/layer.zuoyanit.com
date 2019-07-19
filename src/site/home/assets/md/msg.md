#### 基本
```js
 this.$layer.msg('弱弱的提示');
```
#### 带事件
```js
this.$layer.msg('5s后执行',{
    time: 5
  },
  layerid => {
    this.$layer.close(layerid);
  }
);
```