<template>
  <div class="chart">
    <div id="content">
      <div class="content-item" v-for="item in contents">
        <p v-if="item.event=='joined'" class="joined">用户 user_{{item.msg.from}}加入群聊</p>
        <p v-else-if="item.event=='closed'" class="joined">用户 user_{{item.msg.from}}离开了群聊</p>
        <template v-else>
          <div v-if="item.from == user" class="msg right">
            <p class="p1">user_{{item.from}}</p>
            <p class="p2">{{item.msg}}</p>
          </div>
          <div v-else class="msg">
            <p class="p1">user_{{item.from}}</p>
            <p class="p2">{{item.msg}}</p>
          </div>
        </template>
      </div>
    </div>
    <div class="sendbtn">
      <input class="send" v-model="msg" @keydown.enter.native="sendMsg" placeholder="请输入聊天内容">
      <yd-button @click.native="sendMsg">提交</yd-button>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client';
export default {
  data() {
    return {
      ioSocket: {},
      msg: '',
      contents: [],
      user: new Date().getTime() + ''
    }
  },
  methods: {
    sendMsg() {
      if (this.msg == '') {
        return;
      }
      this.ioSocket.emit('push', this.msg);
      this.msg = '';
    }
  },
  mounted() {
    this.ioSocket = io(this.$siteConfig.domain + '?appkey=5cdad8fab007211b603c705c&group=test&user=' + this.user);
    this.ioSocket.on('pull', (data) => {
      console.log(data);
      this.contents.push(data);
      // document.getElementById('end').scrollIntoView();
      setTimeout(() => {
        let o = document.getElementById('content');
        o.scrollTop = o.scrollHeight;
      }, 200);

    });


  }
}
</script>

<style lang="less" scoped>
.chart {
  margin: 0.1rem auto;
  width: 100%;
  height: calc(100% - 1.5rem);
  position: relative;
  display: flex;
  flex-direction: column;
  #content {
    // height: 100%;
    flex: 1;
    padding: 0.25rem 0.1rem;
    overflow-y: auto;
    // border: 1px solid #ccc;
    line-height: 0.22rem;
    background-color: #f1f1f1;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    .content-item {
      min-height: 10px;
      clear: both;
    }
    .joined {
      text-align: center;
      color: #ccc;
      font-size: 0.26rem;
      margin: 0.15rem 0;
    }
    .msg {
      margin: 0.13rem 0;
      display: inline-block;
      min-width: 0.1rem;
      p {
        margin: 0.05rem 0;
        word-break: break-all;
        font-size: 0.28rem;
        line-height: 1em;
      }
      .p1 {
        color: #999;
        font-size: 0.23rem;
      }
      .p2 {
        background: #fff;
        padding: 0.24rem 0.2rem;
        border: 1px solid #ccc;
        border-radius: 6px;
        display: inline-block;
      }
      &.right {
        float: right;
        clear: both;
        .p1 {
          text-align: right;
        }
        .p2 {
          background: #5fb878;
          text-align: right;
          float: right;
          color: #fff;
        }
      }
    }
  }
  .sendbtn {
    // position: fixed;
    bottom: 1rem;
    width: 100%;
    height: 1rem;
    display: flex;
    padding: 0 0.1rem;
    vertical-align: middle;
    input {
      flex: 1;
      border: 1px solid #ccc;
      height: 0.8rem;
      padding: 0.13rem;
      margin: 0;
    }
    button {
      height: 0.8rem;
      width: 1rem;
    }
  }
}
</style>

