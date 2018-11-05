<template>
    <div>
     <h2>显示日期</h2>
      <p>{{date|formatDate('YY/MM/DD hh:mm:ss')}}</p>
    </div>
</template>

<script>
    export default {
       data(){
         return{
         date:new Date()
         }
       },
      filters:{
        formatDate(time,format='YY-MM-DD hh:mm:ss'){
        var date = new Date(time);

        var year = date.getFullYear(),
          month = date.getMonth()+1,//月份是从0开始的
          day = date.getDate(),
          hour = date.getHours(),
          min = date.getMinutes(),
          sec = date.getSeconds();
        var preArr = Array.apply(null,Array(10)).map(function(elem, index) {
          return '0'+index;
        });

      var newTime = format.replace(/YY/g,year)
        .replace(/MM/g,preArr[month]||month)
        .replace(/DD/g,preArr[day]||day)
        .replace(/hh/g,preArr[hour]||hour)
        .replace(/mm/g,preArr[min]||min)
        .replace(/ss/g,preArr[sec]||sec);

      return newTime;
    }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>


</style>
