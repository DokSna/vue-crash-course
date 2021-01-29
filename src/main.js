import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  // router передаём как ключ и значение, но т.к. они совпадают - можно указать прсто router 1 раз
  router,
  render: h => h(App),
}).$mount('#app')
