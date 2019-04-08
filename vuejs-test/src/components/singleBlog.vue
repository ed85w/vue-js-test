<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.body}}</article>
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
    this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id).then(function(data){
      console.log(data);
      this.blog = data.body;
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

