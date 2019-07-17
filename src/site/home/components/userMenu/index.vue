<template>
  <div class="userMenu">
    <!-- <el-button @click="getNode">生成</el-button> -->
    <el-tree
      :data="data2"
      show-checkbox
      node-key="key"
      ref="tree"
      :default-expand-all="true"
      :default-checked-keys="getMenuKey"
    ></el-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data2: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      keys: [1, '3$page', '3$add', '4$page', '4$add', '4$rols', '4$addRols', '4$editRols']
    };
  },
  props: {
    menukey: {
      type: String,
      default: '[]'
    }
  },
  computed: {
    getMenuKey() {
      return JSON.parse(this.menukey);
    }
  },
  methods: {
    async page() {
      const doc = await this.$tools.httpAgent('/usermenu', 'get');
      this.data2 = doc.data;
    },
    getNode() {
      const nodeData = JSON.parse(JSON.stringify(this.$refs.tree.getCheckedNodes(false, true)));
      const userMenu = [];
      const apiMenu = [];
      const menuKey = [];
      let index = -1;
      for (let i = 0, len = nodeData.length; i < len; i++) {
        if (!nodeData[i].children || nodeData[i].children.length === 0) {
          menuKey.push(nodeData[i].key);
        }
        nodeData[i].children = [];

        if (nodeData[i].pid === 0) {
          delete nodeData[i].pid;
          userMenu.push(nodeData[i]);
          index = -1;
        } else if (nodeData[i].pid > 0) {
          delete nodeData[i].pid;
          userMenu[userMenu.length - 1].children.push(nodeData[i]);
          index++;
        } else {
          if (!userMenu[userMenu.length - 1].children[index].meta) {
            userMenu[userMenu.length - 1].children[index].meta = [];
          }
          userMenu[userMenu.length - 1].children[index].meta.push(nodeData[i].op);
          apiMenu.push([nodeData[i].api, nodeData[i].type]);
        }
      }
      // console.log(JSON.stringify(userMenu));
      // console.log(JSON.stringify(apiMenu));
      // console.log(JSON.stringify(menuKey));
      return [JSON.stringify(userMenu), JSON.stringify(apiMenu), JSON.stringify(menuKey)];
    }

  },
  mounted() {
    this.page();
  }

};
</script>

<style lang="less" scoped>
.userMenu {
  width: 100%;
  max-height: 600px;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
