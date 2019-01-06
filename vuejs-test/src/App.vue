<template>
  <div>
    <app-header></app-header>
    <app-ninjas></app-ninjas>
    <app-footer></app-footer>
  </div>

</template>

<script>

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import NinjaComponent from './components/Ninjas.vue';


export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-ninjas': NinjaComponent
  },
  data () {
    return {
    }
  }
}

</script>

<style> 

</style>
