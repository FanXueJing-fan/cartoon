// 引入所有的组件名大写
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

import Classify from '../views/Classify/index'
import Hello from '../views/Hello'
import Home from '../views/Home'
import History from '../views/Hello/History.vue'
import Favorite from '../views/Hello/Favorite.vue'
import Login from '../views/Login'
import My from '../views/My'
import Ranking from '../views/Ranking'
import Register from '../views/Register'
import Search from '../views/Search'
import SearchResult from '../views/SearchResult'
import Vip from '../views/Vip'
import City from '../views/City'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
nprogress.configure({ showSpinner: false })

Vue.use(VueRouter)

// 路由对象
const router = new VueRouter({
  // 路由规则
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/classify', component: Classify },
    {
      path: '/hello',
      component: Hello,
      children: [
        {
          path: 'history',
          component: History
        },
        {
          path: 'favorite',
          component: Favorite
        },
        {
          path: '',
          redirect: '/hello/favorite'
        }
      ]
    },
    { path: '/home', component: Home },
    { path: '/login', component: Login },
    { path: '/my', component: My },
    { path: '/ranking', component: Ranking },
    { path: '/register', component: Register },
    { path: '/search', component: Search },
    { path: '/searchResult', component: SearchResult },
    { path: '/vip', component: Vip },
    { path: '/city', component: City }
  ]
})

router.beforeEach((to, from, next) => {
  nprogress.start()
  // to是当前页面 store.state.city.curCity是因为给模块起了名字
  if (!store.state.city.curCity && to.path !== '/city') {
    next({
      path: '/city',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
})
router.afterEach((to, from) => {
  nprogress.done()
})
export default router
