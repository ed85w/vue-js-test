<template>
  <div v-theme:column=" 'narrow' " id="show-blogs">
    <h1>All Blog Articles</h1>

    <!-- input for search field, note v-model is bound to data (search) -->
    <input type="text" v-model="search" placeholder="search blogs"/>

    <div v-for="blog in filteredBlogs" class="single-blog">

      <!-- v-rainbow is example of custom directive. to-uppercase is an example of a filter (see main.js) -->
      <router-link v-bind:to="'/blog/' + blog.id"><h2 v-rainbow>{{blog.title | toUppercase }}</h2></router-link>
      <article>{{blog.content | snippet}}</article>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return{
      // empty array for storing data from get
      blogs: [],
      search: ""
    }
  },
  methods: {

  },
  created(){ //runs when page created 
    this.$http.get('https://vue-js-test-1f71d.firebaseio.com/posts.json').then(function(data){
      // .json is a promise function (so use then after)
      return data.json();
    }).then(function(data){
      var blogsArray = [];
      //data is returned as an object which contains the blogs (as objects) each of which has a key (unique id)
      for (let key in data) {
        // console.log(key);
        console.log(data[key]);
        data[key].id = key;
        blogsArray.push(data[key])
      }
      // console.log(blogsArray);
      this.blogs = blogsArray
    })
  },
  // locally registered computed property (for search filter)
  computed: {
    filteredBlogs: function(){
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      });
    }
  },
  // locally registered filters etc (will only work in this file)
  filters: {
    toUppercase(value){
      return value.toUpperCase();
    }
  },

  // locally registered directive
  directives: {
    'rainbow': {
      bind(el, binding, vnode){
        el.style.color = "#" + Math.random().toString(16).slice(2,8);
      }
    }
  },
   
}

</script>

<style>

#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}

.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}


</style>

