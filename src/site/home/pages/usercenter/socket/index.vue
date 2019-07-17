<style lang="css">
</style>

<template>
  <div id="main">
    <base-mulmenu @search="page">
      <router-link to="/usercenter/socket/edit">创建应用</router-link>
      <em @click="del()">删除</em>
    </base-mulmenu>
    <el-table :data="tableData" border @selection-change="checkAll">
      >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="key" label="appkey" :min-width="100"></el-table-column>
      <el-table-column prop="secret" label="appsecret" :min-width="100"></el-table-column>
      <el-table-column prop="connectmax" label="最大并发数"></el-table-column>
      <el-table-column label="消息数量">
        <template slot-scope="scope">{{scope.row.msgcount}}&nbsp;(max:{{scope.row.msgmax}})</template>
      </el-table-column>
      <!-- <el-table-column prop="end_time" label="到期时间">
        <template slot-scope="scope">{{scope.row.end_time | formatTime}}</template>
      </el-table-column>-->
      <el-table-column label="操作" :min-width="110">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.row.id)">编辑</el-button>
          <el-dropdown type="primary" @command="handleCommand">
            <el-button type="primary">
              更多
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item :command="formatCommand('editsecret',scope.row)">刷新密钥</el-dropdown-item>
              <el-dropdown-item :disabled="true" :command="formatCommand('upgrade',scope.row)">升级</el-dropdown-item>
              <el-dropdown-item :disabled="true" :command="formatCommand('buy',scope.row)">续费</el-dropdown-item>
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
      model: 'socket'
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
    async editSecret(row) {
      this.$layer.alert('您确定要刷新密钥吗？刷新会影响到鉴权', async () => {
        const doc = await this.$tools.httpAgent('/socket/secret', 'put', {
          id: row.id
        });
        this.$layer.closeAll();
        if (doc.code === 200) {
          row.secret = doc.data.secret;
        }
      });

    },
    handleCommand(command) {
      switch (command.type) {
        case 'editsecret':
          this.editSecret(command.row);
          break;
        case 'del':
          this.del(command.row);
          break;
      }
    }
  }
};
</script>
