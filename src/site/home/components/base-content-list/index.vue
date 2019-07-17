<template>
  <ul class="content-text-list">
    <li v-for="(a,index) in list">
      <router-link :to="a.link">{{a.title | subStr(25)}}</router-link>
      <span>{{a.createtime | formatTime('MM-DD')}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  props: {
    nodeid: {
      type: Number,
      default: 1
    },
    cp: {
      type: Number,
      default: 1
    },
    mp: {
      type: Number,
      default: 10
    }
  },
  methods: {
    async getArticles() {
      const doc = await this.$tools.httpAgent("/api/article/page", "post", {
        nodeid: this.nodeid,
        cp: this.cp,
        mp: this.mp
      });
      if (doc.code === 200) {
        this.list = doc.data.data;
      }
    }
  },
  mounted() {
    this.getArticles();
  }
};
</script>

<style lang="less" scoped>
.content-text-list {
  width: 100%;
  min-height: 100px;
  li {
    width: 100%;
    height: 24px;
    line-height: 24px;
    display: flex;
    justify-content: space-between;
    padding-left: 15px;
    a {
      color: #555;
      &:hover {
        color: #0595c7;
      }
    }
    i {
      display: inline-block;
      width: 5px;
      height: 5px;
      border-radius: 15px;
      background-color: #555;
      margin-right: 10px;
    }
  }
}
</style>

