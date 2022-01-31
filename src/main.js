
import Vue from 'vue'
import App from './pages/App.vue'
import './assets/css/main.css'
import VueTailwindElements from 'vue-tailwind-elements';
import 'vue-tailwind-elements/src/tailwind-forms.min.css';
import VueRouter from 'vue-router'


Vue.use(VueTailwindElements);

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
