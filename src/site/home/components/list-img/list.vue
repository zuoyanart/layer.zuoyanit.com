<style lang="less" scoped>
.imglist {
  width: 100%;
  min-height: 232px;
  display: flex;
  flex-wrap: wrap;
  div.content {
    width: 280px;
    height: 250px;
    background-color: #fff;
    margin: 10px;
    div {
      width: 282px;
      height: 200px;
      overflow: hidden;
      text-align: center;
      background-repeat: no-repeat;
      background-position: center center;
    }
    h2 {
      color: #333333;
      font-size: 16px;
      text-align: center;
      margin-top: 10px;
    }
  }
}
.list-tp {
  margin-top: 50px;
}
</style>
<template lang="html">
    <div :class="cls" :id="id" class="textlist">
         <div class="imglist">
          <div class="content"  v-for="a in articles">
            <router-link :to="a.link">
              <div :style="{backgroundImage: 'url(' + a.timg + ')'}"></div>
              <h2>{{a.title}}</h2>
            </router-link>
          </div>
        </div>
      <el-pagination class="list-tp" :class="cls + '-tp'" :id="id + '-tp'" :current-page="param.cp" :page-size="param.mp" layout="prev, pager, next, jumper" :total="total" v-if="total > param.mp">
      </el-pagination>
    </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
      total: 0
    };
  },
  props: {
    id: {
      type: String,
      default: ""
    },
    cls: {
      type: String,
      default: ""
    },
    param: {
      type: Object,
      default() {
        return {
          nodeid: 0,
          cp: 1,
          mp: 10,
          istp: false
        };
      }
    }
  },
  methods: {
    async cpChange(cp) {
      let path = this.$route.path;
      if (cp === 1) {
        this.$router.push(path.replace("/" + this.param.cp, ""));
      } else {
        path = path.replace("/" + this.param.cp, "") + "/" + cp;
        this.$router.push(path);
      }
    },
    async getArticles() {
      if (this.param.nodeid && this.param.nodeid !== 0) {
        const article = await this.$tools.httpAgent(
          "/api/article/page",
          "post",
          this.param
        );
        if (article.code === 200) {
          this.total = article.data.total;
          this.articles = article.data.data;
        }
      }
    }
  },
  computed: {},
  async mounted() {
    // await this.getArticles();
  },
  watch: {
    param: async function() {
      if (Object.keys(this.param).length > 0) {
        await this.getArticles();
      }
    }
  }
};
</script>

<style lang="css">
</style>
