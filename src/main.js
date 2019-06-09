import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI  from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css'

Vue.use(ElementUI);
Vue.config.productionTip = false

import echarts from 'echarts'
Vue.prototype.$echarts = echarts 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
