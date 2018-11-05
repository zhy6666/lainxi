import Vue from 'vue'
import Router from 'vue-router'
import TestComputed from  '../pages/TestComputed'
import ageEchart from '../pages/ageEchart'
import buJu from '../pages/buJu'
import demo from '../pages/demo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/testcomputed',
      component: TestComputed
    },
    {
      path:'/ageechart',
      component:ageEchart
    },
    {
      path:'/buju',
      component:buJu
    },
    {
      path:'/demo',
      component:demo
    },
    {
      path:'/',
      redirect:'/demo'
    }
  ]
})
