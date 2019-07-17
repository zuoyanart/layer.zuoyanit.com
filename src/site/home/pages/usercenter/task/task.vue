<style lang="css">
</style>

<template>
  <div id="main">
    <base-mulmenu @search="page">
      <router-link :to="newTask()">新建任务</router-link>
      <!-- <em @click="del()">删除</em> -->
    </base-mulmenu>
    <el-table :data="tableData" border @selection-change="checkAll">
      >
      <!-- <el-table-column type="selection" width="55"></el-table-column> -->
      <el-table-column prop="name" label="名称">
        <template slot-scope="scope">
          <i class="el-icon-loading" style="color:green;" v-if="scope.row.runstate==0"></i>
          <i class="el-icon-warning-outline" v-else></i>
          {{scope.row.name}}
        </template>
      </el-table-column>
      <el-table-column prop="cron" label="执行规则" width="150"></el-table-column>
      <el-table-column prop="url" label="地址" :min-width="100"></el-table-column>
      <el-table-column prop="method" label="请求方法" width="80"></el-table-column>
      <el-table-column label="状态码">
        <template slot-scope="scope">{{scope.row.lastcode}}</template>
      </el-table-column>
      <el-table-column label="最后一次错误信息">
        <template slot-scope="scope">{{scope.row.lastresult}}</template>
      </el-table-column>
      <el-table-column label="执行时间">
        <template slot-scope="scope">{{scope.row.lasttime | formatTime}}</template>
      </el-table-column>
      <el-table-column label="执行结束">
        <template slot-scope="scope">{{scope.row.lasttimeend | formatTime}}</template>
      </el-table-column>
      <el-table-column label="有效期">
        <template slot-scope="scope">{{scope.row.expire_time | formatTime}}</template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.row.id)">编辑</el-button>
          <el-dropdown type="primary" @command="handleCommand">
            <el-button type="primary">
              更多
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                :command="formatCommand('stop',scope.row)"
                v-if="scope.row.runstate==0"
              >停止</el-dropdown-item>
              <el-dropdown-item :command="formatCommand('start',scope.row)" v-else>启动</el-dropdown-item>
              <el-dropdown-item :command="formatCommand('buy',scope.row, scope.$index)">续费</el-dropdown-item>
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
import buyTask from './form/buyTask';

export default {
  mixins: [baseMixin],
  data() {
    return {
      model: 'task'
    };
  },
  async mounted() {
    this.$on('updateData', (data) => {
      this.$set(this.tableData[data.index], data.key, data.value);
    });
  },
  methods: {
    before() {
      this.apiParams.groupid = this.$route.params.groupid;
    },
    newTask() {
      return '/usercenter/taskgroup/task/' + this.$route.params.groupid + '/edit';
    },
    async stopTask(row) {
      const doc = await this.$tools.httpAgent('/task/stop', 'get', {
        id: row.id
      });
      if (doc.code === 200) {
        row.runstate = 1;
        this.$layer.msg('停止成功');
      }
    },
    async startTask(row) {
      const doc = await this.$tools.httpAgent('/task/start', 'get', {
        id: row.id
      });
      if (doc.code === 200) {
        row.runstate = 0;
        this.$layer.msg('开启成功');
      }
    },
    buyTask(row = {}, index) {//续费
      this.$layer.iframe({
        title: '',
        content: {
          content: buyTask,
          parent: this,
          data: {
            taskInfo: row,
            index: index
          }
        },
        area: ['500px', '250px']
      });
    },
    formatCommand(type, row, index = -1) {
      return {
        type,
        row,
        index
      }
    },
    handleCommand(command) {
      switch (command.type) {
        case 'del':
          this.del(command.row);
          break;
        case 'stop':
          this.stopTask(command.row);
          break;
        case 'start':
          this.startTask(command.row);
          break;
        case 'buy':
          this.buyTask(command.row, command.index);
          break;
      }
    }
  }
};
</script>
