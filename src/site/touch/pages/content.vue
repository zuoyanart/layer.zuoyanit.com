<style lang="less" scoped>
.content-h1title {
  color: #546176;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 18px;
  padding-left: 0.4rem;
}
.content-gap {
  border-bottom: 1px dashed #dfe1e2;
  font-size: 12px;
  padding-bottom: 10px;
  color: #546176;
  padding-left: 0.4rem;
}
.content-content {
  padding: 20px;
  color: #546176;
  line-height: 0.45rem;
}
</style>

<template lang="html">

<div id="main">
    <h1 class="content-h1title">{{article.title}}</h1>
    <div class="content-gap">
        <span>{{formatTime}}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;来源：<span>{{article.source}}</span>
    </div>
    <div class="content-content" v-html="article.content"></div>
</div>

</template>

<script>
export default {
  data() {
    return {
      article: {},
      nodelist: []
    };
  },
  components: {},
  motheds: {},
  computed: {
    getArticle: function() {
      return this.article;
    },
    formatTime: function(time) {
      return this.$tools.formatTime(this.article.createtime);
    }
  },
  async mounted() {
    let param = this.$route.params;
    let content = await this.$tools.httpAgent(
      "/api/article/get",
      "post",
      "id=" + param.id
    );
    this.article = content.data;
    // this.nodelist = content.nodelist;
    document.title = this.article.title + "-" + document.title;
    this.$tools.setMetaKey(this.article.title + "-" + document.title);
    this.$tools.setMetaDes(this.article.title + "-" + document.title);
  }
};
</script>
