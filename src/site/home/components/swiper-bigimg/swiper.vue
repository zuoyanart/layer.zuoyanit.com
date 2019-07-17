<style lang="less">
.swiper-container {
  height: 500px;
}
.swiper-wrapper {
  .swiper-slide {
    background-position: center;
    background-size: cover;
    a {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
}
</style>

<template>
  <div class="swiper-container" :class="cls" :id="id">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :style="{backgroundImage: 'url(' + n.timg + ')'}" v-for="n in this.news" v-if="!page.islink">&nbsp;</div>
      <div class="swiper-slide" :style="{backgroundImage: 'url(' + n.timg + ')'}" v-for="n in this.news" v-if="page.islink">
        <router-link :to="n.link">&nbsp;</router-link>
      </div>
    </div>
    <div class="swiper-pagination" :id="id + 'pag'"></div>
  </div>
</template>

<script>
// let Swiper = require("swiper");
// window.Swiper = Swiper;
import uuidV4 from "uuid/v4";
const swiperOptionDefault = {
  direction: "horizontal",
  autoplay: true, // ms
  autoplayDisableOnInteraction: false,
  loop: true,
  speed: 500,
  pagination: ".swiper-pagination",
  grabCursor: true
  // lazyLoading: true,
};

export default {
  name: "swiper",
  data() {
    return {
      id: "",
      news: []
    };
  },
  props: {
    cls: {
      type: String,
      default: ""
    },
    page: {
      type: Object,
      default() {
        return {
          islink: false,
          nodeid: 0,
          mp: 3
        };
      }
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {},
  methods: {
    async getArticle() {
      if (this.page.nodeid != 0) {
        const docs = await this.$tools.httpAgent("/api/article/page", "post", {
          cp: 1,
          nodeid: this.page.nodeid,
          mp: this.page.mp
        });
        this.news = docs.data.data;
      }
    }
  },
  mounted() {
    this.id = uuidV4().replace(/-/g, "");
    this.getArticle();

    const option = swiperOptionDefault;
    for (const key in this.options) {
      option[key] = this.options[key];
    }
    option.pagination = "#" + this.id + "pag";

    const self = this;
    window.onload = function() {
      setTimeout(function() {
        if (!window["mySwiper" + self.id]) {
          window["mySwiper" + self.id] = new Swiper("#" + self.id, option);
          console.log("swiper");
        }
      }, 1000);
    };
    setTimeout(function() {
      if (!window["mySwiper" + self.id]) {
        window["mySwiper" + self.id] = new Swiper("#" + self.id, option);
        console.log("swiper111");
      }
    }, 1010);
  }
};
</script>
