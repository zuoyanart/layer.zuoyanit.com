<style lang="css">
</style>

<template>
  <div id="main">
    <base-mulmenu @search="page">
      <router-link to="/userAdmin/edit" v-has:add>添加</router-link>
      <em @click="del()" v-has:del>删除</em>
    </base-mulmenu>
    <el-table :data="tableData" border @selection-change="checkAll">
      >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column prop="nickname" label="昵称"></el-table-column>
      <el-table-column prop="groupname" label="用户组"></el-table-column>
      <el-table-column prop="rolename" label="角色"></el-table-column>
      <el-table-column prop="state" label="状态" :formatter="formatState"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="edit(scope.row.id)">编辑</el-button>

          <el-button
            size="mini"
            type="primary"
            @click="freeze(scope.row, 1)"
            v-if="scope.row.state === 0"
            v-has:freeze
          >冻结</el-button>
          <el-button size="mini" type="info" @click="freeze(scope.row,0)" v-has:freeze v-else>取消冻结</el-button>

          <el-button size="mini" @click="del(scope.row)" v-has:del>删除</el-button>
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
      model: 'userAdmin'
    };
  },
  async mounted() { },
  methods: {
    formatState(row) {
      let s = '冻结';
      switch (row.state) {
        case 0:
          s = '正常';
          break;
      }
      return s;
    }
  }
};
</script>
