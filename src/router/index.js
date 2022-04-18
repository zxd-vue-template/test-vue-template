/*
 * @Author: zhangxd-i
 * @Date: 2022-04-15 16:57:24
 * @LastEditors: zhangxd-i
 * @LastEditTime: 2022-04-15 17:25:31
 * @Descripttion:
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
