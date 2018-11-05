<template>
  <div>
    <div class="one_wrap"><span>1.双飞翼布局</span></div>
    <div class="main_wrap">
      <div class="main">中间</div>
    </div>
    <div class="left">左边</div>
    <div class="right">右边</div>
    <div class="two_wrap"><span>2.圣杯布局</span></div>
    <div class="sb_content">
      <div class="sb_main">中间</div>
      <div class="sb_left">左边</div>
      <div class="sb_right">右边</div>
    </div>
    <div class="content">
      <p>打算大啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
    </div>
  </div>
</template>

<script>
    export default {

    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .one_wrap
      width 100%
      text-align center
      span
       font-size 12px
    .main_wrap
     float left
     width 100%
     height 200px
     text-align center
     .main
      height 200px
      margin-left 100px
      margin-right  100px
      background-color #FF7D5D
    .left
     margin-left -100%
     float left
     width 100px
     height 200px
     background-color gray
    .right
     margin-left -100px
     float left
     width 100px
     height 200px
     background-color gray
    .two_wrap
     width 100%
     text-align center
     span
      font-size 12px
    .sb_content
     width 100%
     height 200px
     padding-left 100px
     padding-right 100px
     .sb_main
      width 100%
      height 200px
      float left
      background-color green
     .sb_left
      width 100px
      height 200px
      position relative
      left -100px
      float left
      margin-left -100%
      background-color fuchsia
     .sb_right
      position relative
      right -100px
      margin-left -100px
      width 100px
      height 200px
      float left
      background-color coral

    .content
     width 100%
     p
      height 20px
      border-radius 50%
</style>
