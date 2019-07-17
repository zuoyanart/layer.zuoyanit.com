
<template lang="html">

<div id="main">
   <yd-flexbox class="submenu">
    <yd-flexbox-item v-for="n in sisterNode">
      <router-link :to="n.link">{{n.name}}</router-link>
    </yd-flexbox-item>
  </yd-flexbox>
    <div class="" v-html="tree.brief">

    </div>
</div>

</template>

<script>
export default {
  data() {
    return {
      sisterNode: [],
      tree: {}
    };
  },
  async mounted() {
    const param = this.$route.params;
    const nodeid = param.nodeid;
    this.getNodeData(nodeid);
    this.getSister(nodeid);
  },
  watch: {
    $route: function() {
      const param = this.$route.params;
      const nodeid = param.nodeid;
      const cp = param.cp ? param.cp : 1;
      this.getNodeData(nodeid);
      this.getSister(nodeid);
    }
  },
  methods: {
    async getNodeData(nodeid) {
      const content = await this.$tools.httpAgent(
        "/api/tree/get",
        "post",
        "id=" + nodeid
      );
      this.tree = content.data;
    },
    getSister: async function(nodeid) {
      const doc = await this.$tools.httpAgent("/api/tree/sister", "post", {
        nodeid: nodeid
      });
      this.sisterNode = doc.data.nodelist;
    }
  },
  components: {}
};
</script>
