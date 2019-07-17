<style lang="less" scoped>
.textlist {
  ul {
    li {
      height: 190px;
      border-bottom: 1px solid #ccc;
      display: flex;
      padding: 15px;
      background-color: #fff;
      a {
        color: #222;
        font-size: 18px;
        &:hover {
          color: #0595c7;
        }
      }
      .img {
        width: 220px;
        height: 150px;
        background-position: center center;
        background-repeat: no-repeat;
        margin-right: 10px;
      }
      div.content {
        flex: 1;
        h2 {
          font-weight: normal;
          font-size: 18px;
        }
        p {
          color: #888;
          font-size: 14px;
        }
        .gap {
          color: #888;
          font-size: 12px;
          margin: 5px 0;
        }
      }
    }
  }
}
.list-tp {
  margin-top: 50px;
}
</style>
<template lang="html">
    <div :class="cls" :id="id" class="textlist">
      <ul>
          <li v-for="a in articles" class="li">
              <router-link :to="a.link">
                  <div class="img" :style="{backgroundImage: 'url(' + a.timg + ')'}"></div>
              </router-link>
              <div class="content">
                <router-link :to="a.link">
                  <h2>{{a.title}}</h2>
                </router-link>
                <div class="gap"><span>{{a.createtime | formatTime}}</span></div>
                <p>{{a.brief}}</p>
              </div>
          </li>
      </ul>
      <el-pagination class="list-tp" :class="cls + '-tp'" :id="id + '-tp'" :current-page="parseInt(param.cp)" :page-size="parseInt(param.mp)" layout="prev, pager, next, jumper" :total="total" v-if="total > 0" @current-change="cpChange">
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
    async getArticles(cp) {
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
