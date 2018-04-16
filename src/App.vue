<template>
  <div id="app">

    <Footer></Footer>
    <router-view></router-view>
  </div>
</template>

<script>
  import Footer from './components/Footer/Footer.vue'

  export default {
    components: {
      Footer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    position relative
</style>
