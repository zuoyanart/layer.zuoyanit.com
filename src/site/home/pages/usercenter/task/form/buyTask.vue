<template>
  <el-form style="margin:10px;width:100%;">
    <el-form-item label="服务期限" prop="buytime">
      <el-select v-model.trim="form.buytime">
        <el-option
          :key="item.value"
          :value="item.value"
          :label="item.label"
          v-for="item in getByTimeOption()"
        ></el-option>
      </el-select>
      <span style="color:#909399;">每月2元钱</span>
    </el-form-item>
    <el-form-item style="margin-top:50px;">
      <el-button @click="buy" type="success" style="width:90%;">确认购买</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        buytime: 6
      }
    };
  },
  props: {
    taskInfo: {
      type: Object,
      default: () => {
        return {};
      }
    },
    layerid: '',
    index: {
      type: Number,
      default: -1
    }
  },
  methods: {
    getByTimeOption() {
      const time = [];
      for (let i = 1; i < 13; i++) {
        time.push({
          label: i + '个月',
          value: i
        })
      }
      return time;
    },
    async buy() {
      const doc = await this.$tools.httpAgent('/buy/task', 'post', {
        taskid: this.taskInfo.id,
        buytime: this.form.buytime
      });
      if (doc.code === 200) {
        this.$parent.$emit('updateData', {
          index: this.index,
          key: 'expire_time',
          value: doc.data
        });
        this.$layer.close(this.layerid);
      }
    }
  }
}
</script>

<style>
</style>
