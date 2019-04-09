<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.content}}</article>
    <p>Author: {{blog.author}}</p>
    <ul>
      <li v-for="category in blog.categories">{{category}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //below ($route) uses vue router, id comes from routes.js file :id
      id: this.$route.params.id, 
      // 'containerr' object for data from get below
      blog: {}
    }
  },
  //created lifecycle hook (when created)
  created() {
    this.$http.get('https://vue-js-test-1f71d.firebaseio.com/posts/' + this.id + '.json').then(function(data){
      return data.json();
    }).then(function(data){
      this.blog = data;
    });
  }
}
</script>

<style>

#single-blog{
  max-width: 960px;
  margin: 0 auto;
}
</style>

