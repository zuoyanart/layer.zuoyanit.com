<template>
  <div class="wuyou-waiter">
    <ul class="waiter-ul">
      <li class="wuyou-shop">
        <a
          class="pzcms pzicon-user"
          href="https://wpa.qq.com/msgrd?v=3&uin=490526801&site=qq&menu=yes"
          target="_blank"
        ></a>
        <div class="waiter-title">在线咨询</div>
      </li>
      <li class="wuyou-contact">
        <a class="el-icon-phone-outline" href="javascript:void(0);"></a>
        <div class="waiter-title">1553717219</div>
      </li>
      <li class="wuyou-shop">
        <a class="pzcms pzicon-weixin" href="javascript:void(0);"></a>
        <div class="waiter-img">
          <img src="./img/wx.jpg" alt>
        </div>
      </li>
      <li class="wuyou-top">
        <a class="el-icon-arrow-up" href="#"></a>
        <div class="waiter-title">回到顶部</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.wuyou-waiter {
  position: fixed;
  right: 0px;
  top: 50%;
  margin-top: -90px;
  width: 45px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  z-index: 999;
}
.waiter-ul li {
  position: relative;
  height: 45px;
  line-height: 45px;
  border-bottom: 1px solid #fff;
}
.waiter-ul li a {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  color: #fff;
  display: block;
  width: 45px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  transition: all 0.6s;
  text-decoration: none;
  font-size: 24px;
}
.waiter-title {
  position: absolute;
  right: 0px;
  bottom: 1px;
  color: #fff;
  min-width: 10px;
  display: inline-block;
  padding: 0 20px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  transition: all 0.6s;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  z-index: 1;
  opacity: 0;
  white-space: nowrap;
}
.waiter-title:before {
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  position: absolute;
  right: -5px;
  top: 14px;
  background-color: #fff;
  transform: rotate(45deg);
}
.waiter-img {
  position: absolute;
  right: 0px;
  bottom: 1px;
  color: #fff;
  min-width: 10px;
  display: inline-block;
  padding: 0 20px;
  height: 100px;
  text-align: center;
  -webkit-transition: all 0.6s;
  -ms-transition: all 0.6s;
  -moz-transition: all 0.6s;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  z-index: 1;
  opacity: 0;
  img {
    width: 100px;
    height: 100px;
  }
}

.waiter-ul li:hover .waiter-title {
  right: 70px;
  opacity: 1;
}
.waiter-ul li:hover .waiter-img {
  right: 40px;
  opacity: 1;
}

.waiter-ul li.wuyou-shop a {
  background-image: -webkit-linear-gradient(left, #f60, #ffb443);
  background-image: -moz-linear-gradient(left, #f60, #ffb443);
  background-image: -ms-linear-gradient(left, #f60, #ffb443);
}
.waiter-ul li.wuyou-shop .waiter-title {
  background-color: #f60;
}
.waiter-ul li.wuyou-shop .waiter-title:before {
  background-color: #f60;
}

.waiter-ul li.wuyou-contact a {
  background-image: -webkit-linear-gradient(left, #00b7ee, #55d8ff);
  background-image: -moz-linear-gradient(left, #00b7ee, #55d8ff);
  background-image: -ms-linear-gradient(left, #00b7ee, #55d8ff);
}
.waiter-ul li.wuyou-contact .waiter-title {
  background-color: #00b7ee;
}
.waiter-ul li.wuyou-contact .waiter-title:before {
  background-color: #00b7ee;
}

.waiter-ul li.wuyou-top a {
  background-image: -webkit-linear-gradient(left, #333, #666);
  background-image: -moz-linear-gradient(left, #333, #666);
  background-image: -ms-linear-gradient(left, #333, #666);
}
.waiter-ul li.wuyou-top .waiter-title {
  background-color: #333;
}
.waiter-ul li.wuyou-top .waiter-title:before {
  background-color: #333;
}
</style>
