<style lang="less" scoped>
.router-link-active {
  color: #09bb07 !important;
}
</style>

<template>
  <yd-layout>
    <router-view></router-view>
    <yd-tabbar slot="tabbar" :fixed="true">
      <yd-tabbar-item title="首页" link="/" type="a">
        <yd-icon name="home" slot="icon"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="在线聊天" link="/chart">
        <yd-icon name="shopcart-outline" slot="icon"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="文档" link="/rdocr">
        <yd-icon name="discover" slot="icon"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="联系我们" link="/about">
        <yd-icon name="feedback" slot="icon"></yd-icon>
      </yd-tabbar-item>
    </yd-tabbar>
  </yd-layout>
</template>

<script>
export default {
  data() {
    return {
      isMenuShow: false
    };
  },
  methods: {
    menuSwitch() {
      // 菜单开关
      this.isMenuShow = !this.isMenuShow;
    },
    goback() {
      console.log("asd55a4sd45");
      this.$router.go(-1);
    }
  },
  mounted() { }
};
</script>
