import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
const BASE_URL = 'https://chitter-backend-api.herokuapp.com/'


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
