#### 基本
```js
this.$layer.alert("这是个演示",{
    title: '演示'
  },layerid => {
    this.$layer.close(layerid);
  }
);
```

### icon
```js
this.$layer.alert("这是个演示",{
    title: '演示',
    icon:2  //0,1,2,3
  },layerid => {
    this.$layer.close(layerid);
  }
);
```