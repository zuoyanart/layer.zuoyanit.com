<template>
  <div id="main">
    <el-button @click="getNode">生成</el-button>
    <el-tree :data="data2" show-checkbox node-key="id" ref="tree" :default-expand-all="true"></el-tree>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data2: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };
  },
  methods: {
    async page () {
      const doc = await this.$tools.httpAgent('/usermenu', 'get');
      this.data2 = doc.data;
    },
    getNode () {
      const nodeData = JSON.parse(JSON.stringify(this.$refs.tree.getCheckedNodes(false, true)));
      const userMenu = [];
      const apiMenu = [];
      let index = -1;
      for (let i = 0, len = nodeData.length; i < len; i++) {
        if (nodeData[i].children) {
          nodeData[i].children = [];
        }
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
      console.log(JSON.stringify(userMenu));
      console.log(JSON.stringify(apiMenu));
    }

  },
  mounted () {
    this.page();
  }

};
</script>

<style lang="less" scoped>
</style>
