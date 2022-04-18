/*
 * @Author: zhangxd-i
 * @Date: 2022-04-15 16:57:24
 * @LastEditors: zhangxd-i
 * @LastEditTime: 2022-04-15 17:30:57
 * @Descripttion:
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-gui'
import 'element-gui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
