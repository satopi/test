import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import router from './assets/js/router.js'
import axios from 'axios'

import Mint from 'mint-ui'
import '../node_modules/mint-ui/lib/style.css'

import './assets/css/commonCSS.css'
import './assets/css/animate.css'
import './assets/iconfont/iconfont.css'

Vue.prototype.$http = axios
Vue.use(VueRouter)
Vue.use(Mint)
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
