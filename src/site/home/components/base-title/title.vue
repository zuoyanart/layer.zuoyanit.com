<template>
  <h3 class="basetitle">
    <span>{{title}}</span>
  </h3>
</template>

<script>
export default {
  name: 'base-title',
  data() {
    return {};
  },
  props: {
    title: ''
  }
};
</script>

<style lang="less" scoped>
.basetitle {
  width: 100%;
  height: 46px;
  border-bottom: 1px solid #999;
  position: relative;
  margin-bottom: 20px;
  span {
    display: inline-block;
    min-width: 50px;
    height: 46px;
    line-height: 47px;
    text-align: center;
    padding: 0 10px;
    position: absolute;
    border-bottom: 1px solid #000;
    color: #2b2b2b;
    font-size: 16px;
  }
}
</style>

