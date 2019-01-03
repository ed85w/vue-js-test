<template>
  <!-- all content in this div (one root element)-->
  <div>
    <h1>{{title}}</h1>
    <ninjas></ninjas>
  </div>
</template>

<script>

// locally registered component (only works in this file)
import NinjasApp from './Ninjas.vue'

export default {
  components: {
    'ninjas': NinjasApp
  },
  data () {
    return {
      title: 'This is the title!'
    }
  }
}
</script>

<!-- omit 'scoped' to apply styles to all components -->
<style scoped> 

h1{
  color: purple;
}
</style>
