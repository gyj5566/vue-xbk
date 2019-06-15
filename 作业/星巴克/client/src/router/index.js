import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      meta:{
        title:"加班/休假"
      },
      component: ()=>import("@/views/index.vue")
    }, {
      path: '/login',
      name: 'login',
      meta: {
        title: "加班/休假"
      },
      component: () => import("@/views/login.vue")
    }, {
      path: '/batch',
      name: 'batch',
      meta: {
        title: "批量"
      },
      component: () => import("@/views/batch.vue")
    }, {
      path: '/search',
      name: 'search',
      meta: {
        title: "搜索"
      },
      component: () => import("@/views/search.vue")
    }, {
      path: '/sort',
      name: 'sort',
      meta: {
        title: "排序"
      },
      component: () => import("@/views/sort.vue")
    }, {
      path: '/detail/:applicationNumber/:list_type',
      name: 'detail',
      meta: {
        title: "详情"
      },
      component: () => import("@/views/detail.vue")
    }, {
      path: '/application/:type',
      name: 'application',
      meta: {
        title: "申请表"
      },
      component: () => import("@/views/application.vue")
    }, {
      path: '/history/:applicationNumber',
      name: 'history',
      meta: {
        title: "审批历史"
      },
      component: () => import("@/views/history.vue")
    }
  ]
})
