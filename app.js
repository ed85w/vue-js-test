new Vue ({
  el: '#vue-app',
  data: {
    health: 100,
    medMealth: false,
    lowHealth: false,
    ended: false
  },
  methods: {
    punch: function(){
      this.health -= 10;
      if(this.health<= 0){
        this.ended = true;
      }
      if(this.health > 30 && this.health < 80){
        this.medHealth = true;
      }
      if(this.health <= 30){
        this.lowHealth = true;
      }
    },
    restart: function(){
      this.health = 100;
      this.ended = false;
      this.medHealth = false;
      this.lowHealth = false;
    }
  },
  computed: {

  }

});