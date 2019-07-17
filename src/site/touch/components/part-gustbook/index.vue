<template>
  <div class="partguestbook">
    <h3 class="title">我猜您现在可能存在如下疑问：</h3>
    <ul class="ul">
      <li>你们能做什么？</li>
      <li>需要多少钱？</li>
      <li>需要多久？</li>
      <li>我需要做什么?</li>
      <li>需要提供什么资料？</li>
      <li>售后服务怎么样？</li>
    </ul>
    <base-guestbook></base-guestbook>
    <p class="des">*同样的问题每个人侧重点不同，很难有标准的答案；请认真填写表单信息或直接在线联系，我们会给您最合适的答案！</p>
  </div>
</template>

<script>
import guestbook from '../base-guestbook/index';

export default {
  data() {
    return {};
  },
  components: {
    'base-guestbook': guestbook
  }
};
</script>

<style lang="less" scoped>
.partguestbook {
  background-color: #0595c7;
  margin-top: 0.3rem;
  padding: 0.5rem 0.2rem;
  .title {
    color: #fff;
    font-size: 20px;
  }
  .ul {
    width: 100%;
    min-height: 0.2rem;
    margin: 0.2rem 0;
    color: #ddd;
    display: flex;
    flex-wrap: wrap;
    li {
      margin-right: 0.32rem;
      height: 0.4rem;
      line-height: 0.4rem;
    }
  }
  .des {
    color: #ccc;
    margin-top: 0.3rem;
    font-size: 12px;
    line-height: 0.4rem;
  }
}
</style>
