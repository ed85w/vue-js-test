<template>
  <div v-theme:column=" 'narrow' " id="show-blogs">
    <h1>All Blog Articles</h1>
    <div v-for="blog in blogs" class="single-blog">
      <!-- v-rainbow is example of custom directive. to-uppercase is an example of a filter -->
      <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      <article>{{blog.body | snippet}}</article>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return{
      // empty array for storing data from get
      blogs: []
    }
  },
  methods: {

  },
  created(){ //runs when page created 
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
      console.log(data);
      //get first 10 instances of array (body property)
      this.blogs = data.body.slice(0,10)
    })
  }
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

