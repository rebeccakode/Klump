
import Vue from 'vue'
import App from './pages/App.vue'
import './assets/css/tailwind.css'
import 'tw-elements'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
