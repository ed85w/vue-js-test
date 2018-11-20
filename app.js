new Vue ({
  el: '#vue-app',
  data: {
    // computed classes properties
    available: false,
    nearby: false,
    // conditionals properties
    error: false,
    success: false,
    error2: false,
    success2: false
  },
  methods: {

  },
  computed: {
    compClasses: function(){
      return {
        available: this.available,
        nearby: this.nearby
      }
    }
  }
});