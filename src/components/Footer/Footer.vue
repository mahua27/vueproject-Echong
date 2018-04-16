<template>
  <footer class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item " @click="goto('/msite')" :class="{on: '/msite'===$route.path}">
    <span class="item_icon">
      <i class="iconfont icon-shouye"></i>
    </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/classify')" :class="{on: '/classify'===$route.path}">
    <span class="item_icon">
      <i class="iconfont icon-moduanwangdian"></i>
    </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/shopcart')" :class="{on: '/shopcart'===$route.path}">
    <span class="item_icon">
      <i class="iconfont icon-gouwuche"></i>
    </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/pet')" :class="{on: '/pet'===$route.path}">
    <span class="item_icon">
      <i class="iconfont  icon-atmaway"></i>
    </span>
      <span>我的E宠</span>
    </a>
  </footer>

</template>
<script>
  export default {
    data() {
      return {}
    },
    methods:{
      goto(path){
        this.$router.replace(path)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>

