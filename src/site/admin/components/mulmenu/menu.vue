<template lang="html">
    <div class="menu">
        <slot></slot>
        <!-- <el-input class="searchkw" placeholder="请输入搜索关键字" @keyup.native.enter="enter" v-model="kw" ></el-input> -->
        <el-input
            class="searchkw"
            placeholder="请输入关键字"
             prefix-icon="el-icon-search"
            v-model="kw"
            @keyup.native.enter="enter"
            @clear="enter(true)"
            clearable>
        </el-input>
    </div>
</template>

<script>
export default {
  data () {
    return {
      kw: ''
    };
  },
  methods: {
    enter (isClear) {
      if (isClear === true) {
        this.kw = '';
        this.$emit('search', {
          kw: '',
          cp: 1
        });
        return;
      }
      this.$emit('search', {
        kw: this.kw,
        cp: 1
      });
    }
  }
};
</script>

<style lang="less">
.searchkw {
  position: absolute !important;
  right: 10px;
  width: 200px !important;
  color: #fff;
}
</style>
