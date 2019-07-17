<style lang="css">
</style>

<template lang="html">
  <div id="main">
        <base-mulmenu @search="search">
           <em>审核</em>
        </base-mulmenu>
         <el-table :data="tableData" border  @selection-change="checkAll">>
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column  label="内容">
               <template slot-scope="scope">
                 <template  v-for="key in formatBrief(scope.row.brief)">
                  <el-tag  type="success">{{key}}</el-tag>&nbsp;
                 </template>
              </template>
            </el-table-column>
            <el-table-column label="创建时间"  width="200px">
               <template slot-scope="scope">{{scope.row.createtime | formatTime}}</template>
            </el-table-column>
        </el-table>
  </div>
</template>

<script>
import baseMixin from '../mixin/index.js';
export default {
  mixins: [baseMixin],
  data () {
    return {
      model: 'guestbook'
    };
  },

  methods: {
    pass: function (id) {
      alert(1);
    },
    formatBrief (brief) {
      return brief.split('$'); // .join(' '); // .replace(/$/gi, '');
    }
  },
  components: {}
};
</script>
