<template>
  <div class="msite">
    <!--头部-->

  <div class="header">
    <img src="../../../page_ing/010.jpg" alt="">
  </div>

    <!--搜索部分-->
  <div class="nav_search">
    <div class="nav_left">
      <span>狗狗</span>
      <span>|</span>
      <span>重庆</span>
      <i></i>
    </div>
    <div class="nav_center">
      <input type="text" placeholder="输入搜索内容">
      <span class="iconfont icon-wxbsousuotuiguang search" ></span>
    </div>
    <div class="nav_right">
      <a href="">
        <!--<img src="//static.epetbar.com/static_web/wap/src/images/mydope.png" alt="">-->
      </a>
    </div>
  </div>
    <!--导航部分-->
    <div class="nav_find">
      <ul>
        <li><a href="">首页</a></li>
        <li><a href="">狗狗主粮</a></li>
        <li><a href="">俱乐部</a></li>
        <li><a href="">零食</a></li>
        <li><a href="">康医疗保健</a></li>
      </ul>

    </div>

    <!--轮播-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><a href=""><img src="../../../page_ing/006.jpg" alt=""></a></div>
        <div class="swiper-slide"><a href=""><img src="../../../page_ing/003.jpg" alt=""></a></div>
        <div class="swiper-slide"><a href=""><img src="../../../page_ing/007.jpg" alt=""></a></div>
      </div>
      <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
    <!--商品列表-->
    <div class="shopMassage">
      <ul>
        <li><a href=""><img src="../../../page_ing/009.jpg" alt=""></a></li>
        <li><a href=""><img src="../../../page_ing/009.jpg" alt=""></a></li>
        <li><a href=""><img src="../../../page_ing/009.jpg" alt=""></a></li>
        <li><a href=""><img src="../../../page_ing/009.jpg" alt=""></a></li>
        <li><a href=""><img src="../../../page_ing/009.jpg" alt=""></a></li>
      </ul>
      <ul>
        <li><a href=""><img src="../../../page_ing/init9.jpg" alt=""></a></li>
        <li><a href=""><img src="../../../page_ing/init9.jpg" alt=""></a></li>
        <li><a href=""><img src="../../../page_ing/init9.jpg" alt=""></a></li>
        <li><a href=""><img src="../../../page_ing/init9.jpg" alt=""></a></li>
        <li><a href=""><img src="../../../page_ing/init9.jpg" alt=""></a></li>
      </ul>
    </div>
    <!--活动部分-->
    <div class="actity">
      <div><img src="../../../page_ing/images/pageone/01.gif" alt="">
      </div>
    </div>
    <!--surprise 部分-->
    <div class="surprise">
      <div class="surprise-title">
        <div><img src="../../../page_ing/11.png" alt=""></div>
        <div class="next-time">下一场时间</div>
        <div class="time-box1"></div>
        <div class="time-box2"></div>
        <div class="more"></div>

      </div>
      <div class="surprise-props">

      </div>
    </div>


  </div>
</template>
<script>
  import Swiper from "swiper"
  import "swiper/dist/css/swiper.min.css"
  export default {
    mounted(){
      new Swiper(".swiper-container",{
        pagination: {
          el: '.swiper-pagination',
        },
        loop:true
      })

    },
    data() {
      return {}
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .msite
    width 100%
    height:2000px
    bottom-border-1px(#e4e4e4)

  .header img
      height 55px
      width 100%

  .nav_search
      height 51px
      width 100%
      /*background-color pink*/
    .nav_left
      position relative
      float left
      margin-top  10px
      margin-left 6px
      span
        font-size 14px
    .nav_search i
      position absolute
      top: 9px
      left: 73px
      width: 0;
      height: 0;
      border-width: 5px;
      border-style: solid;
      border-color: red transparent transparent transparent;

    .nav_center
      position relative
      margin-left 25px
    .nav_center input
      margin-top 12px
      margin-left 15px
      height  25px
      width 225px
      font-size 12px
      background-color #c8c8cd
      color #ccc
      border-radius 5px
      padding-left 10px
      .nav_center .search
        position absolute
        display block
        font-size 16px
        padding-left 20px

      .nav_right
        position: relative
        float right
      .nav_right a img
        position absolute
        font-size 25px
        top 20px
        left 20px

  .nav_find
    width 100%
    height 36px
    margin-left 20px
  .nav_find  ul li
    display inline-block
    float: left
    margin: 12px

  .nav_find  ul li a
    font-size 14px
  .swiper-container
    width 100%
    height 160px
  .swiper-container .swiper-slide  img
    width 100%
    height 160px

  .shopMassage
    height 180px
    width 100%

  .shopMassage ul li img
    float: left
    width 75px
    height 90px

  .actity
    width 100%
    height 120px
  .actity img
    margin 0 auto
    width 100%
    height 120px
  .surprise
    position  relative
    width 100%
    height 170px
    background-color #c8c8cd
    .surprise-title img
      margin-left 10px
      margin-top 10px
      height 19px
      width 85px
    .surprise-title .next-time
      position absolute
      top 12px
      right 135px
      font-size 12px
    .surprise-title .time-box1
      position absolute
      top 12px
      right 20px
      width 12px
      height 12px
      border 1px solid #eeeeee
    .surprise-title .time-box2
      position absolute
      top 12px
      width 12px
      height 12px
      border 1px solid #eeeeee













</style>

