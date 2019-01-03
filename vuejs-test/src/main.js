import Vue from 'vue'
import App from './App.vue'
// import Ninjas from './Ninjas.vue'

//globaly registered component (see App.vue for use)
// Vue.component('ninjas', Ninjas)

new Vue({
  el: '#app',
  render: h => h(App)
})
