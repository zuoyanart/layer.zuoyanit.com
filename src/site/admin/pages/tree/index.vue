<style lang="css">
</style>

<template lang="html">
<div id="main">
    <pztree :docs="datalist" :handle="handle"></pztree>
</div>

</template>

<script>
import pztree from '../../components/tree/tree.vue';

export default {
  data () {
    return {
      datalist: {
        options: {},
        more: [],
        rows: {},
        button: []
      },
      handle: {} // 传递方法
    };
  },
  async mounted () {
    // 获取数据
    const doc = await this.$tools.httpAgent('/tree', 'get', {
      pid: 1
    });
    if (doc.code === 200) {
      const data = doc.data;
      const level1 = {};
      for (var i = 0, l = data.length; i < l; i++) {
        level1[data[i].id] = {
          id: data[i].id,
          pid: data[i].pid,
          name: data[i].name,
          path: data[i].nodepath.split(','),
          ishide: data[i].ishide,
          weight: data[i].weight,
          fold: false // 是否展开
        };
      }
      this.datalist.rows = level1;
      this.handle = {
        fold: this.fold
      };
    }
  },
  methods: {
    fold: async function (id, nodepath) {
      const doc = await this.$tools.httpAgent('/tree', 'get', {
        pid: id
      });

      const data = doc.data;
      if (data.length === 0) {
        return;
      }
      const level = {};
      for (let i = 0, l = data.length; i < l; i++) {
        level[data[i].id] = {
          id: data[i].id,
          name: data[i].name,
          pid: data[i].pid,
          path: data[i].nodepath.split(','),
          ishide: data[i].ishide,
          fold: false // 是否展开
        };
      }
      const path = (',0' + nodepath + '0,').replace(/,0,/g, '').split(',');
      let key = this.datalist.rows[path[1]];
      for (let i = 2, l = path.length; i < l; i++) {
        key = key.children[path[i]];
      }
      this.$set(key, 'children', level);
    }
  },
  components: {
    pztree
  }
};
</script>
