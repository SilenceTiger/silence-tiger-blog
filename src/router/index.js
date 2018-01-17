import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Js from '@/components/Js'
import Dc from '@/components/Dc'

import ThreeBegin1 from '@/papers/jspaper/ThreeBegin1'
import MockServer from '@/papers/jspaper/MockServer'
import YouDontKnowJs from '@/papers/jspaper/YouDontKnowJs'

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
      component: ThreeBegin1,
    },{
      path: '/js/3',
      name: 'MockServer',
      component: MockServer,
    },{
      path: '/js/4',
      name: 'YouDontKnowJs.',
      component: YouDontKnowJs,
    }
  ]
})
