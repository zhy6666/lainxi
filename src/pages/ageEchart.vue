<template>
<div class="wrap">
  <div class="title"><span>柱状图</span></div>
  <div class="echart_wrap" ref="age"></div>
</div>
</template>

<script>

    export default {
      mounted(){
        var myChart = echarts.init(this.$refs.age);
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.wrap
  width 100%
  .title
    padding-top 5px
    padding-left 8px
    padding-bottom 5px
    span
     font-size 15px
     font-family "Microsoft PhagsPa"
  .echart_wrap
   width 100%
   height 300px
   background-color green
</style>
