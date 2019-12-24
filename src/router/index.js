import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import NProgress from 'nprogress'
// 通过此方式得到store
import store from '../store'

Vue.use(VueRouter)

/**
 * /login 登录界面
 * /register 注册界面
 * /home / 主界面, 非登陆状态转到login
 */
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    alias: '/home'
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // 判断转向非登录注册页面时需要判断是否已经登录
  NProgress.start();
  if(to.name === 'login' || to.name === 'register') {
    next();
  } else {
      if(store.state.logined) {
        // 已登录
        next();
      } else {
        next('login');
        NProgress.done();
      }

    
  }
  
})

router.afterEach((to, from, next) => {
  NProgress.done();
})

export default router
