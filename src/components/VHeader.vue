<template>
  <div class="header">
    <div class="left-nav">
      <i class="iconfont icon-menu1"></i>
    </div>

    <div class="right-nav">
      <i class="iconfont icon-NotificationFilled"></i>
      <i class="iconfont icon-i-more"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-header"
};
</script>

<style lang="stylus" scoped>
.header
    background #0096ff
    color white
    height 50px
    line-height 50px
    font-size 30px
    position fixed
    width 100%
    z-index 10
    .right-nav
      float right
      height 100%
    .left-nav
      float left
      height 100%
    .iconfont
      font-size 20px
      padding 12px
</style>
