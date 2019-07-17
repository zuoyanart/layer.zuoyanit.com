<style lang="css">
</style>

<template>
  <div id="main">
    <base-mulmenu @search="page">
      <router-link to="/usercenter/taskgroup/edit">新建分组</router-link>
      <!-- <em @click="del()">删除</em> -->
    </base-mulmenu>
    <el-table :data="tableData" border @selection-change="checkAll">
      >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="groupname" label="名称"></el-table-column>
      <el-table-column prop="remarks" label="描述"></el-table-column>
      <el-table-column label="创建时间">
        <template slot-scope="scope">{{scope.row.create_time | formatTime}}</template>
      </el-table-column>
      <el-table-column label="操作" :min-width="130">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.row.taskgroupid)">编辑</el-button>
          <el-button
            type="primary"
            @click="jumpOther('/usercenter/taskgroup/task/' + scope.row.taskgroupid)"
          >查看任务</el-button>
          <!-- <el-dropdown @command="handleCommand">
            <el-button type="primary">
              更多
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item :disabled="true" :command="formatCommand('upgrade',scope.row)">购买配额</el-dropdown-item>
              <el-dropdown-item :disabled="true" :command="formatCommand('buy',scope.row)">续费</el-dropdown-item>
              <el-dropdown-item :command="formatCommand('del',scope.row)">删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>-->
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
      model: 'taskgroup'
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
