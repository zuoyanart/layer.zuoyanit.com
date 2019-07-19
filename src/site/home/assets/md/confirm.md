#### 基本
```js
   this.$layer.confirm('确定要<br/>删除吗？', layerid => {
        this.$layer.msg('执行取消');
        this.$layer.close(layerid);
      });
```
#### 自定义
```js
this.$layer.confirm('确定要<br/>删除吗？',{
    title: 'confirm',
    btn: ['确定', '取消'],
    icon: 3
  },
  layerid => {
    this.$layer.msg('执行了删除');
    this.$layer.close(layerid);
  },
  layerid => {
    this.$layer.msg('执行取消');
    this.$layer.close(layerid);
  }
);
```