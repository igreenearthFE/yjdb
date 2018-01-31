import Vue from 'vue'
import Router from 'vue-router'
import Login from '../modules/login/index'
import Reset from '../modules/reset/index'
import Regist from '../modules/regist/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/reset',
      name: 'Reset',
      component: Reset
    },
    {
      path: '/regist',
      name: 'Regist',
      component: Regist
    },
    {
      path: '/',
      redirect: '/login'
    }
  ]
})
