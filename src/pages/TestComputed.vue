<template>
    <div class="wrap">
      <!--姓：<input type="text" placeholder="firstName" :class="{active:isActive}" v-model="firstName"/><br/>-->
      <!--名：<input type="text" placeholder="lastName" v-model="lastName"/><br/>-->
      <!--全名:<input type="text" placeholder="fullName" v-model="fullName"/><br/>-->
      <!--全向:<input type="text" placeholder="fullName" v-model="fullName1"/>-->
      <!--<button class="btn" @click="change">更换</button>-->
      <input type="text" v-model="searchName"/>
      <ul>
        <li v-for="(p,index) in filterPersons" :key="index">{{index}}----{{p.name}}-----{{p.age}}</li>
      </ul>
      <button @click="setOrderType(1)">年龄升序</button>
      <button @click="setOrderType(2)">年龄降序</button>
      <button @click="setOrderType(0)">原本顺序</button>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          orderType:'0',//1升序    2降序
          searchName:'',
           persons:[{name:'Tom',age:'14'},{name:'Jack',age:'15'},{name:'Rose',age:'29'},{name:'Jim',age:'12'}]
        }
      },
     mounted(){

     },
      computed:{
          filterPersons(){
            const {searchName,persons,orderType}=this
            let fPersons;
            fPersons=persons.filter(p=>p.name.indexOf(searchName)>=0)
            if(orderType!==0){
              fPersons.sort(function (p1,p2) {
                if(orderType==2){
                  return p2.age-p1.age
                }else{
                  return p1.age-p2.age
                }
              })
            }
            return fPersons
          }
      },
      methods:{
        setOrderType(type){
            this.orderType=type
          }
        }

    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 .wrap
  margin 0
  padding 0
  input
   margin-bottom 20px
   border-radius 0px 0px
  .active
   border 1px solid red


</style>
