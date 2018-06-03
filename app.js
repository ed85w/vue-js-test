new Vue ({
  el: '#vue-app',
  data: {
    name: 'Ed',
    job: 'Web Developer',
    website: 'https://www.edwalkerweb.com',
    websiteTag: '<a href ="https://www.edwalkerweb.com">Ed Walker Web</a>',
    age: 32,

    //co-ordinates for axis
    x: 0,
    y: 0
  },
  methods: {
    greet: function(time){
      return 'Good ' + time + ' ' + this.name;
    },

    // function to add year to age var
    addYear: function(inc){
      this.age += inc;
    },

    //function to subtract year from age var
    subtractYear: function(dec){
      this.age -= dec;
    },

    // function to update and output co-ordinates
    updateXY: function(event){
      this.x = event.offsetX;
      this.y = event.offsetY;
    }
  }
});