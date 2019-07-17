<style lang="less" scoped>
</style>

<template>
  <div id="main">
    <base-mulmenu @search="search">
      <router-link to="/userAdminGroup/edit" v-has:add>添加</router-link>
    </base-mulmenu>
    <el-table :data="tableData" border>
      <el-table-column prop="name" label="组名"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="edit(scope.row.id)" v-has:edit>编辑</el-button>
          <el-button
            size="mini"
            type="primary"
            @click="toRole(scope.row.id,scope.row.name)"
            v-has:rols
          >查看角色</el-button>
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
      model: 'userAdminGroup'
    };
  },
  async mounted() { },
  methods: {
    toRole(id, name) {
      this.$router.push('/userAdminGroup/adminRole/' + id + '?name=' + name);
    }
  }
};
</script>
