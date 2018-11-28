<template>
  <!-- all content in this div -->
  <div>
    <h1>{{title}}</h1>
    <p>{{greeting()}} </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'This is the title!'
    }
  },
  methods: {
    greeting: function(){
      return 'This is a function, a greeting!'
    }
  }
}
</script>

<style>

</style>
