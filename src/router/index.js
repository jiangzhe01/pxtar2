import Vue from 'vue'
import Router from 'vue-router'

import index            from  '@/components/index'
import about            from  '@/components/about'
import dynamicCartoon   from  '@/components/dynamicCartoon'
import animateCartoon   from  '@/components/animateCartoon'
import authorDetail     from  '@/components/authorDetail'
import search           from  '@/components/search'
import cartoonDetail    from  '@/components/cartoonDetail'
import cartoon          from  '@/components/cartoon'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'index'
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      meta: {title: '首页'}
    },
    {
      path: '/cartoon',
      component: cartoon,
      meta: {title: '漫画'}
    },
    {
      path: '/cartoonDetail',
      component: cartoonDetail,
      meta: {title: '漫画详情'}
    },
    {
      path: '/animateCartoon',
      component: animateCartoon,
      meta: {title: '漫动画'}
    },
    {
      path: '/dynamicCartoon',
      component: dynamicCartoon,
      meta: {title: '动态漫画'}
    },
    {
      path: '/authorDetail',
      component: authorDetail,
      meta: {title: '作者详情'}
    },
    {
      path: '/search',
      component: search,
      meta: {title: '搜索'}
    },
    {
      path: '/about',
      component: about,
      meta: {title: '关于我们'}
    }
  ]
})

export default router
