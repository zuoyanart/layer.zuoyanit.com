<template>
  <div class="page404">
    <span>404</span>
    <span>NOT FOUND</span>
    <br>
    <br>
    <br>
    <yd-button type="primary" @click.native="back">返回首页</yd-button>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.push('/');
    }
  }
};
</script>

<style lang="less" scoped>
.page404 {
  width: 100%;
  min-height: 403px;
  padding: 1rem 0;
  text-align: center;
  span {
    color: #000;
    font-size: 0.5rem;
  }
}
</style>
