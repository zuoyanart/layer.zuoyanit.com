
<template lang="html">
  <div class="bannerimg" :style="getBgStyle">
    <div class="bannerimg-c">
      <h4>{{nodename}}</h4>
      <div class="line"></div>
      <p>{{remark}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "base-bannerimg",
  data() {
    return {};
  },
  props: {
    imgUrl: {
      type: String,
      default: ""
    },
    nodename: "",
    remark: ""
  },
  computed: {
    getBgStyle() {
      if (this.imgUrl === "") {
        return {};
      }
      return {
        backgroundImage: "url(" + this.imgUrl + ")"
      };
    }
  }
};
</script>
<style lang="less" scoped>
.bannerimg {
  width: 100%;
  height: 380px;
  background-color: #ccc;
  background-repeat: no-repeat;
  background-position: center center;
  margin-bottom: 30px;
  // background-image: url(./b1.jpg);
  .bannerimg-c {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    color: #fff;
    padding-top: 100px;
    h4 {
      font-size: 28px;
      color: #eee;
    }
    .line {
      border-bottom: 2px solid #0595c7;
      display: inline-block;
      width: 80px;
    }
    p {
      font-size: 16px;
      color: #ddd;
      margin-top: 10px;
    }
  }
}
</style>
