#### 上
```js
      this.$layer.tips('在很久很久以前', '#tips', {
        tips: 0,
        time: 100
      });
```
#### 右
```js
      this.$layer.tips(
        '在很久很久以前，在很久很久以前，在很久很久以前，在很久很久以前，在很久很久以前，在很久很久以前，',
        '#tips1',
        {
          tips: 1,
          time: 100
        }
      );
    
  ```
  #### 下
  ```js
    tips2Handle () {
      this.$layer.tips(
        '在很久很久以前，在很久很久以前，在很久很久以前，在很久很久以前，在很久很久以前，在很久很久以前，',
        '#tips2',
        {
          tips: 2
        }
      );
    },
  ```
  #### 左-自定义class
  ```js
    tips3Handle () {
      this.$layer.tips(
        '在很久很久以前，在很久很久以前，在很久很久以前，在很久很久以前，在很久很久以前，在很久很久以前，',
        '#tips3',
        {
          tips: [
            3,
            {
              selfClassName: true
            }
          ],
          time: 10
        }
      );
    }
```