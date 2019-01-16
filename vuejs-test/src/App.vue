<template>
  <div>
    <app-header v-bind:title="title" v-on:changeTitleRoot="updateTitle($event)"></app-header><!-- $event is event data (e.g 'Vue Wizards' from Header.vue file) -->
    <app-ninjas v-bind:ninjasEtc="ninjasEtc"></app-ninjas><!-- v-bind ninjas data below to app-ninjas -->
    <app-footer v-bind:title="title"></app-footer>
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
      //primitive = strings, booleans & numbers
      //reference = arrays, objects
      ninjasEtc: [
        {name: 'Ryu', speciality: 'Vue Components', show: false},
        {name: 'Ken', speciality: 'Something else', show: false},
        {name: 'Ehonda', speciality: 'Eating pies', show: false},
        {name: 'Kami', speciality: 'Kicking things', show: false},
        {name: 'Person', speciality: 'Being a Person', show: false},
        {name: 'Thing', speciality: 'Not Sure', show: false},
      ],
      title: "Vue Ninjas App"
    }
  },
  methods:{
    updateTitle: function(updatedTitle){
      this.title = updatedTitle
    }

  }
}

</script>

<style> 

</style>
