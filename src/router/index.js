import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Js from '@/components/Js'
import Dc from '@/components/Dc'

import ThreeBegin from '@/papers/jspaper/ThreeBegin'
import MockServer from '@/papers/jspaper/MockServer'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect:'/home',
    },{
      path: '/home',
      name: 'Home',
      component: Home
    },{
      path: '/js',
      name: 'Js',
      component: Js,
    },{
      path: '/dc',
      name: 'Dc',
      component: Dc
    },{
      path: '/js/1',
      name: 'ThreeBegin',
      component: ThreeBegin,
    },{
      path: '/js/3',
      name: 'MockServer',
      component: MockServer,
    }
  ]
})
