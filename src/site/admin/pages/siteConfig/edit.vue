<template>
  <div id="main">
    <el-form
      ref="form"
      :model="form"
      label-width="130px"
    >
      <el-form-item
        :label="key"
        v-for="(item,key) in form"
      >
        <el-input v-model="form[key]"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="pushdata"
        >更新</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: "",
      form: {}
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getdata();
  },
  methods: {
    async getdata() {
      const doc = await this.$tools.httpAgent("/config/" + this.id, "get", {
        id: this.id
      });
      this.form = JSON.parse(doc.data.value);
    },
    async pushdata() {
      const doc = await this.$tools.httpAgent("/config/" + this.id, "PUT", {
        id: this.id,
        value: JSON.stringify(this.form)
      });
      if (doc.code === 200) {
        this.$router.push("/siteconfig");
      }
    }
  }
};
</script>

<style ref="stylesheet" lang="less" scoped>
#main li {
  margin: 10px 0;
  span {
    width: 200px;
    display: block;
    float: left;
  }
  .el-input {
    width: 400px;
  }
}
</style>