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
    success2: false,

    // v-for loop properties
    characters: ['mario', 'luigi', 'yoshi', 'bowser'],
    ninjas: [
      {name: 'ryu', age: 20},
      {name: 'ken', age: 25},
      {name: 'ehonda', age: 30},
    ]
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