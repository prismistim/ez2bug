import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home.vue'
import Report from '../pages/Report.vue'
import Detail from '../pages/Detail.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home,
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
      props: route => ({
        id: Number(route.params.id)
      })
    },
    {
      name: 'report',
      path: '/report',
      component: Report
    },
  ]
})

export default router