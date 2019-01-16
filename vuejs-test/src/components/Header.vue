<template>
  <header>
    <h1 v-on:click="changeTitle">{{title}}</h1>
  </header>
</template>

<script>

export default {
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  methods: {
    //event (allows root data (app.vue)  change for primitive data types)
    changeTitle: function(){
      //$emit emits event. Event name is 1st param 'changeTitleRoot'. Can also send data as 2nd param, in this case 'Vue Wizards'
      this.$emit('changeTitleRoot', 'Vue Wizards');
    }
  }
}
</script>

<style scoped> 

header{
  background: lightgreen;
  padding: 10px;
}

h1 {
  color: #222;
  text-align: center;
}

</style>
