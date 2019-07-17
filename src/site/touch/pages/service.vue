<template>
    <yd-layout>
        <div class="top">
            <img src="../assets/img/site/service.jpg" alt="">
            <div>
                <h3>服务项目</h3>
                <p>用我们的专业和诚信赢得您的信赖，从PC到移动互联网均有您想要的服务！</p>
            </div>
        </div>
        <div class="part">
            <div class="divtitle">
                <h3>网站定制</h3>
                <p>各类型网站定制开发建设服务</p>
            </div>
            <div class="content">
                <yd-grids-group :rows="2">
                    <yd-grids-item>
                        <div slot="else" class="items">
                            <h2>企业网站</h2>
                            <img src="../assets/img/site/gw.png" alt="">
                            <p>企业门户官网/企业营销型网站定制开发、设计、建设</p>
                        </div>
                    </yd-grids-item>
                    <yd-grids-item>
                        <div slot="else" class="items">
                            <h2>行业门户</h2>
                            <img src="../assets/img/site/hy.png" alt="">
                            <p>垂直行业综合门户开发，资讯、交易、分类信息、下载等</p>
                        </div>
                    </yd-grids-item>
                    <yd-grids-item>
                        <div slot="else" class="items">
                            <h2>购物商城</h2>
                            <img src="../assets/img/site/shop.png" alt="">
                            <p>单/多用户商城、订单、支付、提现、财务管理</p>
                        </div>
                    </yd-grids-item>
                    <yd-grids-item>
                        <div slot="else" class="items">
                            <h2>社区论坛</h2>
                            <img src="../assets/img/site/bbs.png" alt="">
                            <p>会员管理及分级权限、板块分级及权限、帖子管理</p>
                        </div>
                    </yd-grids-item>
                    <yd-grids-item>
                        <div slot="else" class="items">
                            <h2>政府官网</h2>
                            <img src="../assets/img/site/gov.png" alt="">
                            <p>政府机构信息化建设，便民服务窗口，安全稳定</p>
                        </div>
                    </yd-grids-item>
                    <yd-grids-item>
                        <div slot="else" class="items">
                            <h2>活动官网</h2>
                            <img src="../assets/img/site/action.png" alt="">
                            <p>活动官方网站，信息发布、投票、报名、评比等</p>
                        </div>
                    </yd-grids-item>
                    <yd-grids-item>
                        <div slot="else" class="items">
                            <h2>O2O系统</h2>
                            <img src="../assets/img/site/o2o.png" alt="">
                            <p>商家入驻、LBS定位、商品、附近商家、购物车、会员管理</p>
                        </div>
                    </yd-grids-item>
                    <yd-grids-item>
                        <div slot="else" class="items">
                            <h2>外贸网站</h2>
                            <img src="../assets/img/site/global.png" alt="">
                            <p>企业出海必备，多语言，针对Google针对性优化</p>
                        </div>
                    </yd-grids-item>
                </yd-grids-group>
            </div>
        </div>
        <div class="part">
            <div class="divtitle">
                <h3>移动端/APP开发</h3>
                <p>移动互联网时代，您的想法怎少得了移动端</p>
            </div>
            <div class="content">
                <yd-grids-group :rows="2">
                    <yd-grids-item>
                        <div slot="else" class="items">
                            <h2>手机网站</h2>
                            <img src="../assets/img/site/gw.png" alt="">
                            <p>可以在手机浏览器、微信、独立APP等各种环境浏览的网站</p>
                        </div>
                    </yd-grids-item>
                    <yd-grids-item>
                        <div slot="else" class="items">
                            <h2>APP开发</h2>
                            <img src="../assets/img/site/ios.png" alt="">
                            <p>IOS和安卓两大主流平台的移动APP客户端开发</p>
                        </div>
                    </yd-grids-item>
                    <yd-grids-item>
                        <div slot="else" class="items">
                            <h2>API开发</h2>
                            <img src="../assets/img/site/gov.png" alt="">
                            <p>APP、小程序及网站服务端开发，提供规范的API技术文档</p>
                        </div>
                    </yd-grids-item>
                    <yd-grids-item>
                        <div slot="else" class="items">
                            <h2>H5单页</h2>
                            <img src="../assets/img/site/h5.png" alt="">
                            <p>提供活动、报名、招聘等形式的H5高逼格单页开发</p>
                        </div>
                    </yd-grids-item>
                </yd-grids-group>
            </div>
        </div>
        <div class="part">
            <div class="divtitle">
                <h3>微信/小程序</h3>
                <p>基于微信，又不止于微信</p>
            </div>
            <div class="content">
                <yd-grids-group :rows="2">
                    <yd-grids-item>
                        <div slot="else" class="items">
                            <h2>微信官网</h2>
                            <img src="../assets/img/site/gw.png" alt="">
                            <p>利用微信开发能力结合原生技术开发用于微信浏览的网站</p>
                        </div>
                    </yd-grids-item>
                    <yd-grids-item>
                        <div slot="else" class="items">
                            <h2>小程序</h2>
                            <img src="../assets/img/site/xcx.png" alt="">
                            <p>微信小程序免安装、易推广，拥有丰富组件及API能力</p>
                        </div>
                    </yd-grids-item>
                    <yd-grids-item>
                        <div slot="else" class="items">
                            <h2>微信商城</h2>
                            <img src="../assets/img/site/shop.png" alt="">
                            <p>基于微信支付、微信登录、LBS等能力的电子商务商城</p>
                        </div>
                    </yd-grids-item>
                    <yd-grids-item>
                        <div slot="else" class="items">
                            <h2>微信活动</h2>
                            <img src="../assets/img/site/wx-action.png" alt="">
                            <p>基于微信开放能力开发使用户更加便捷参与活动</p>
                        </div>
                    </yd-grids-item>
                    <yd-grids-item>
                        <div slot="else" class="items">
                            <h2>微信报名</h2>
                            <img src="../assets/img/site/wx-bm.png" alt="">
                            <p>基于微信开放能力开发方便用户快速参与报名</p>
                        </div>
                    </yd-grids-item>
                    <yd-grids-item>
                        <div slot="else" class="items">
                            <h2>微信投票</h2>
                            <img src="../assets/img/site/wx-tp.png" alt="">
                            <p>基于微信开放能力限制微信投票刷票等行为，更易传播</p>
                        </div>
                    </yd-grids-item>
                    <yd-grids-item>
                        <div slot="else" class="items">
                            <h2>微信O2O</h2>
                            <img src="../assets/img/site/wx-o2o.png" alt="">
                            <p>基于微信支付、LBS、消息通知等开发能力开放本地化O2O平台</p>
                        </div>
                    </yd-grids-item>
                    <yd-grids-item>
                        <div slot="else" class="items">
                            <h2>更多应用</h2>
                            <img src="../assets/img/site/all.png" alt="">
                            <p>扫码购物、微订单等更多基于微信/小程序开放能力应用</p>
                        </div>
                    </yd-grids-item>
                </yd-grids-group>
            </div>
        </div>
        <div class="part">
            <div class="divtitle">
                <h3>技术支持服务</h3>
                <p>您所需要，我们刚好擅长</p>
            </div>
            <div class="content">
                <yd-grids-group :rows="2">
                    <yd-grids-item>
                        <div slot="else" class="items">
                            <h2>技术支援</h2>
                            <img src="../assets/img/site/zhiyuan.png" alt="">
                            <p>遇到web开发相关的疑难杂症都可以来找我们尝试一下</p>
                        </div>
                    </yd-grids-item>
                    <yd-grids-item>
                        <div slot="else" class="items">
                            <h2>安全防护</h2>
                            <img src="../assets/img/site/anquan.png" alt="">
                            <p>修复SQL注入、XSS、逻辑缺陷等安全漏洞，API安全评估与审计</p>
                        </div>
                    </yd-grids-item>
                    <yd-grids-item>
                        <div slot="else" class="items">
                            <h2>技术方案</h2>
                            <img src="../assets/img/site/fangan.png" alt="">
                            <p>基于您的项目想法和需求，选择最适合项目的技术方案</p>
                        </div>
                    </yd-grids-item>
                    <yd-grids-item>
                        <div slot="else" class="items">
                            <h2>数据迁移</h2>
                            <img src="../assets/img/site/gov.png" alt="">
                            <p>网站等应用程序数据迁移、数据库跨平台数据迁移等</p>
                        </div>
                    </yd-grids-item>
                    <yd-grids-item>
                        <div slot="else" class="items">
                            <h2>服务器运维</h2>
                            <img src="../assets/img/site/data.png" alt="">
                            <p>服务器环境配置及故障修复、安全防护、日常运维及监控</p>
                        </div>
                    </yd-grids-item>
                    <yd-grids-item>
                        <div slot="else" class="items">
                            <h2>SEO支持</h2>
                            <img src="../assets/img/site/seo.png" alt="">
                            <p>代码SEO优化建议及实施、数据自动主动提交搜索引擎工具开发</p>
                        </div>
                    </yd-grids-item>
                    <yd-grids-item>
                        <div slot="else" class="items">
                            <h2>模板定制</h2>
                            <img src="../assets/img/site/moban.png" alt="">
                            <p>Discuz、Wodrpress等第三方程序及自有JianPHP程序模板定制</p>
                        </div>
                    </yd-grids-item>
                    <yd-grids-item>
                        <div slot="else" class="items">
                            <h2>插件定制</h2>
                            <img src="../assets/img/site/chajian.png" alt="">
                            <p>Discuz、Wodrpress等第三方程序及自有JianPHP程序插件定制</p>
                        </div>
                    </yd-grids-item>
                </yd-grids-group>
            </div>
        </div>
        <!-- 服务优势 -->
        <div class="part youshi">
            <div class="divtitle">
                <h3>服务优势</h3>
                <p>这也许是您即将选择我们的理由</p>
            </div>
            <div class="content">
                <yd-slider style="height:5rem;">
                    <yd-slider-item>
                        <div class="serviceitem">
                            <img src="../assets/img/site/ly-dz.png" alt="">
                            <div>
                                <h3>个性定制</h3>
                                <p>您的想法加上我们的专业技术及服务能力产出您想想要的产品,绝非生搬硬套式。</p>
                            </div>
                        </div>
                        <div class="serviceitem">
                            <img src="../assets/img/site/ly-gf.png" alt="">
                            <div>
                                <h3>开发规范</h3>
                                <p>采用SVN/GIT等工具进行代码版本控制可以溯源代码历史，技术文档更加规范。</p>
                            </div>
                        </div>
                        <div class="serviceitem">
                            <img src="../assets/img/site/ly-js.png" alt="">
                            <div>
                                <h3>极速响应</h3>
                                <p>不管项目开发中，还是售后维护阶段；工程师快速响应，紧急问题下班照常响应。</p>
                            </div>
                        </div>
                    </yd-slider-item>
                    <yd-slider-item>
                        <div class="serviceitem">
                            <img src="../assets/img/site/ly-aq.png" alt="">
                            <div>
                                <h3>安全稳定</h3>
                                <p>实时监测服务器集群运行状态、资源占用率；程序自动进行数据库数据备份。</p>
                            </div>
                        </div>
                        <div class="serviceitem">
                            <img src="../assets/img/site/ly-jf.png" alt="">
                            <div>
                                <h3>完整交付</h3>
                                <p>域名/空间/备案等账号、源代码、技术文档等所有的输出物全部交付给甲方。</p>
                            </div>
                        </div>
                        <div class="serviceitem">
                            <img src="../assets/img/site/ly-sh.png" alt="">
                            <div>
                                <h3>完善售后</h3>
                                <p>不少于一年售后服务期，含故障修复、备案、备份、安全防护、问题咨询等。</p>
                            </div>
                        </div>
                    </yd-slider-item>
                </yd-slider>
            </div>
        </div>
        <!-- 服务优势 -->
        <!-- 典型案例 -->
        <div class="part anli">
            <div class="divtitle">
                <h3>典型案例</h3>
                <p>这是过去我们跟合作伙伴的故事</p>
            </div>
            <div class="content">
                <yd-tab class="alitabs">
                    <yd-tab-panel label="红网图文直播">
                        <div class="alitabs">
                            <img src="../assets/img/site/rednet.png" alt="">
                            <h3>湖南红网新媒体集团</h3>
                            <p class="p1">本直播系统为图文直播+网友互动系统，红网有一个时刻新闻app，网页版也包含图文直播系统，但之前的系统不包含网友互动功能，仅活动发起者单个的在那发布信息，这样互动度不够。因此，在红网论坛添加一个图片直播系统、并且带用户互动功能。</p>
                            <p class="p2">本项目的主要难点是红网千万级甚至更大数据量情况下的性能问题，以及无缝对接主系统的的各个环节，比如主系统内容审核分了三级审核机制，同时还需要保障系统稳定性（顺利通过高考直播考验）。</p>
                            <yd-button size="large" type="warning">更多案例</yd-button>
                        </div>
                    </yd-tab-panel>
                    <yd-tab-panel label="至上租车">
                        <div class="alitabs">
                            <img src="../assets/img/site/zszc.png" alt="">
                            <h3>长沙至上汽车租赁有限公司</h3>
                            <p class="p1">本项目为至上租车公司PC端官网，包括自驾租车和代驾租车信息浏览及预约、企业租车申请及预约、公司业务介绍等，同时打通网站与手机短信，用户填写预约信息后管理员的手机能够实时获取一条通知信息，可以马上联系预约客户，运营管理根本不需要坐在电脑前</p>
                            <p class="p2">
                                本项目的是企业官方网站，只是在展示及营销基础上，增加了在线预约功能，我们针对性的对UI设计、界面编写、用户体验上进行优化，比如实时的通知功能帮助客户节省大量的管理时间，同时让网站用户体验更好，转化率提高50%以上。
                            </p>
                            <yd-button size="large" type="warning">更多案例</yd-button>
                        </div>
                    </yd-tab-panel>
                    <yd-tab-panel label="国防科学技术大学">
                        <div class="alitabs">
                            <img src="../assets/img/site/gfkd.png" alt="">
                            <h3>国防科学技术大学</h3>
                            <p class="p1">本项目为国防科学技术大学科研部网站，分多期完成，后续还会有新的功能模块出现；目前主要包含门户网站、作品发布、师生交流论坛、活动创建、活动报名、活动投票、论文及作品评审系统等，整个系统运行在军网内网中，采用mtn域名。</p>
                            <p class="p2">本项目一个非常重要的要求就是要保障系统的稳定性和安全性，军队院校对信息保密是有非常高的要求的，电脑等设备都不允许与互联网通信；如果稳定性不够好，不管多小的问题都必须去现场进行修复；在线评审系统大大提高校方工作效率。</p>
                            <yd-button size="large" type="warning">更多案例</yd-button>
                        </div>
                    </yd-tab-panel>
                </yd-tab>
            </div>
        </div>
        <!-- 典型案例 -->
        <part-guestbook></part-guestbook>
    </yd-layout>
</template>

<script>
import partGuestBook from '../components/part-gustbook/index';
export default {
  components: {
    'part-guestbook': partGuestBook
  }
};
</script>

<style lang="less" scoped>
.top {
  position: relative;
  img {
    width: 100%;
  }
  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    padding-left: 0.5rem;
    h3 {
      font-size: 20px;
      margin-top: 0.6rem;
    }
    p {
      color: #f0f0f0;
      margin-top: 0.2rem;
    }
  }
}
.part {
  .divtitle {
    text-align: center;
    min-height: 0.56rem;
    padding: 0.4rem 0;
    h3 {
      color: 20px;
    }
    p {
      font-size: 14px;
      color: #aaa;
      margin-top: 0.12rem;
    }
  }
  .items {
    text-align: center;
    padding: 0.2rem;
    h2 {
      font-size: 16px;
    }
    img {
      margin: 0.2rem 0;
    }
    p {
      font-size: 12px;
      color: #aaa;
    }
  }
}
.youshi {
  background-color: #303449;
  color: #fff;
  padding: 0 0.2rem;
  .serviceitem {
    width: 100%;
    height: 1.5rem;
    display: flex;
    align-items: center;
    img {
      width: 0.6rem;
      margin-right: 0.2rem;
    }
    p {
      color: #999;
    }
  }
}
.anli {
  padding: 0 0.2rem;
  .alitabs {
    img {
      width: 100%;
    }
    h3 {
      font-size: 16px;
      color: #333;
      height: 0.8rem;
      line-height: 0.8rem;
    }
    .p1 {
      color: #888;
      font-size: 13px;
      line-height: 0.4rem;
      margin-bottom: 0.2rem;
    }
    .p2 {
      color: #aaa;
      font-size: 13px;
      line-height: 0.4rem;
      margin-bottom: 0.2rem;
    }
  }
}
</style>
