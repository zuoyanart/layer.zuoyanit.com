<style lang="less" scoped>
</style>

<template>
  <div id="main">
    <base-mulmenu @search="search">
      <router-link :to="'/role/edit?groupid='+groupid" v-has:add>添加 {{groupname}} 的角色</router-link>
    </base-mulmenu>
    <el-table :data="tableData" border>
      <el-table-column prop="name" label="组名"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="edit(scope.row.id)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top:30px;text-align:right;margin-right:20px;">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        :page-size="apiParams.mp"
        @current-change="currentChange"
        v-if="total>apiParams.mp"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import baseMixin from '../mixin/index.js';
export default {
  mixins: [baseMixin],
  data() {
    return {
      model: 'adminRole',
      groupname: '',
      groupid: ''
    };
  },
  async mounted() {
    this.groupname = this.$route.query.name;
    this.groupid = this.$route.params.id;
  },
  methods: {
    before() {
      this.apiParams.groupid = this.$route.params.id;
    },
    edit(id = 0) {
      this.$router.push('/userAdminGroup/' + this.model + '/edit/?id=' + id);
    }
  }
};
</script>
