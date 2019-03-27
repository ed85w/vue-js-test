import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

// Custom directives
Vue.directive('rainbow', { //directive name
  bind(el, binding, vnode) { // run on bind lifecycle hook (when directive is bound to element)
    // apply to element style color # + random 6 string num (e.g random #color)
    el.style.color = "#" + Math.random().toString().slice(2,8);
  }
})

Vue.directive('theme', {
  bind(el, binding, vnode){
    if(binding.value == 'wide'){
      el.style.maxWidth = "1200px";
    } else if (binding.value == 'narrow'){
      el.style.maxWidth = "560px";
    }
    //argument (ie after :) - see showBlog.vue file
    if(binding.arg == 'column'){
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})

