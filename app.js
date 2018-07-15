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
    y: 0,

    // vars for binding
    bindName: '',
    bindAge: '',

    //vars for computed properties
    a: 0,
    b: 0,
    computedAge: 20,
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
    },

    // example function, alerts
    click: function(){
      alert ("You clicked me!");
    },

    logName: function(){
      console.log('you entered your name');
    },
    logAge: function(){
      console.log('you entered your age');
    },
  },

  //computed properties methods
  //note that parenthese are not used when functions called in html
  //an efficient way of outputting computations to browser without updating state(data)
  computed: {
    addToA: function(){
      console.log("addToA was run")
      return this.a + this.age;
    },
    addToB: function(){
      console.log("addToB was run")
      return this.b + this.age;
    },
  }
});