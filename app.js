new Vue ({
  el: '#vue-app',
  data: {
    name: 'Ed',
    job: 'Web Developer',
    website: 'https://www.edwalkerweb.com',
    websiteTag: '<a href ="https://www.edwalkerweb.com">Ed Walker Web</a>'
  },
  methods: {
    greet: function(time){
      return 'Good ' + time + ' ' + this.name;
    }
  }
});