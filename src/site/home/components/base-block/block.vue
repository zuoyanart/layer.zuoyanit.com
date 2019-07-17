<template lang="html">
  <div :class="cls" v-html="blockContent"></div>
</template>

<script>
export default {
  name: "base-block",
  data() {
    return {
      blockContent: "" //正文内容
    };
  },
  props: {
    cls: {
      type: String,
      default: ""
    },
    blockid: {
      type: Number,
      default: 0
    }
  },
  methods: {
    async getBlock() {
      if (this.blockid > 0) {
        let block = await tools.httpAgent(
          "/api/block/get",
          "post",
          "id=" + this.blockid
        );
        if (block.code === 200) {
          this.blockContent = block.data.content;
        }
      }
    }
  },
  async mounted() {
    await this.getBlock();
  },
  watch: {
    blockid: async function() {
      await this.getBlock();
    }
  }
};
</script>

<style lang="css">
</style>
