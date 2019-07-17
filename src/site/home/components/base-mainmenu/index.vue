<template>
  <div class="base-mainmenu">
    <el-menu class="el-menu-demo" mode="horizontal" background-color="#222" text-color="#fff" :router="true" active-text-color="#ffd04b">
      <el-menu-item index="/">首页</el-menu-item>
      <template v-for="(m,index) in menuList">
        <el-menu-item :index="m.link" v-if="!m.child || m.child.length === 0">{{m.name}}</el-menu-item>
        <el-submenu :index="index+'a'" v-else>
          <template slot="title">{{m.name}}</template>
          <el-menu-item :index="item.link" v-for="(item,i) in m.child">{{item.name}}</el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: []
    };
  },
  methods: {
    async getMenu() {
      const doc = await this.$tools.httpAgent(
        "/api/tree/main",
        "post",
        "pid=1"
      );
      if (doc.code === 200) {
        this.menuList = doc.data;
      }
    }
  },
  mounted() {
    this.getMenu();
  }
};
</script>

<style lang="less" scoped>
.el-menu-demo {
  border-bottom: 1px solid transparent !important;
}
</style>

