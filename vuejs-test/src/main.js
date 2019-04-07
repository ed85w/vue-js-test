import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history' //remove # from urls
});

// CUSTOM DIRECTIVES

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


// FILTERS  

//filter to covert text to upper case
Vue.filter('to-uppercase', function(value){
  return value.toUpperCase();
})

//filter to trim text to 100 characters and add ... to end
Vue.filter('snippet', function(value){
  return value.slice(0, 100) + "...";
})


new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})

