<template>
  <div>
    <!-- keep alive retains data when switching between components -->
    <keep-alive>
    <component v-bind:is="component"></component>
    </keep-alive>
    <button v-on:click="component = 'form-one'">Show form 1</button>
    <button v-on:click="component = 'form-two'">Show form 2</button>
  </div>
</template>

<script>
import formOne from './components/formOne.vue'
import formTwo from './components/formTwo.vue'

export default {
  components: {
    'form-one': formOne,
    'form-two': formTwo
  },
  data(){
    return {
      component: 'form-two'
    }
  },
  methods: {

  }
}
</script>

<style> 

</style>
