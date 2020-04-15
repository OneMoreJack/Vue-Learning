import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/index'
import store from './store/index'
import App from './App.vue'
import $tool from '@/util/tool'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$tool = $tool

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
