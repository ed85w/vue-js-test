new Vue({
  el: '#vue-app',
  data: {
    output: 'nothing',
  },
  methods: {
    readRefs: function(){
      console.log(this.$refs.test.innerText); //this will log innerText of 'test' div
      this.output = this.$refs.thisisaninput.value;
    }
  }
});