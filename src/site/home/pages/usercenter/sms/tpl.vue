<style lang="css">
</style>

<template>
  <div id="main">
    <base-mulmenu @search="page">
      <router-link :to="newTask()">新建模版</router-link>
      <em @click="del()">删除</em>
    </base-mulmenu>
    <el-table :data="tableData" border @selection-change="checkAll">
      >
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="tpl" label="模板" width="150"></el-table-column>
      <el-table-column prop="remarks" label="备注" :min-width="100"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.row.id)">编辑</el-button>
          <el-dropdown type="primary" @command="handleCommand">
            <el-button type="primary">
              更多
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item :command="formatCommand('del',scope.row)">删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
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
      model: 'smsTpl'
    };
  },
  async mounted() { },
  methods: {
    formatCommand(type, row) {
      return {
        type,
        row
      }
    },
    handleCommand(command) {
      switch (command.type) {
        case 'del':
          this.del(command.row);
          break;
      }
    }
  }
};
</script>
