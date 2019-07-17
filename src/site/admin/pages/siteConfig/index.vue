<style lang="css">
</style>

<template>
  <div id="main">
    <el-table
      :data="tableData"
      border
    >
      <el-table-column
        prop="name"
        label="name"
      ></el-table-column>
      <el-table-column
        prop="remark"
        label="remark"
      ></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="edit(scope.row.id)"
          >编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top:30px;text-align:right;margin-right:20px;">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        :page-size="mp"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      total: 10,
      mp: 10
    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
    async getdata(i = 1) {
      const doc = await this.$tools.httpAgent("/config", "get", {
        cp: i,
        mp: 10
      });
      this.total = parseInt(doc.data.total);
      this.tableData = doc.data.data;
    },
    edit(id) {
      this.$router.push("/siteconfig/" + id);
    }
  }
};
</script>
<style scope lang='less' ref='stylesheed/lecc'>
</style>