<template>
  <div class="page404">
    <img src="../assets/img/global/404.png" />
    <br />
    <el-button type="success" @click="back">返回首页</el-button>
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
  padding: 100px;
  text-align: center;
}
</style>
