<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <!-- form is hidden if submitted=true -->
    <form v-if="!submitted">
      <label>Blog Title:</label>
      <!-- .lazy means that input will only show up in preview (div below) once tab is pressed -->
      <input type="text" v-model.lazy="blog.title" required>
      <label>Blog Content</label>
      <textarea v-model="blog.content"></textarea>
      <div id="checkboxes">
        <!-- checkbox value is automatically added to blog.categories array  -->
        <label>Ninjas</label>
        <input type="checkbox" value="ninjas" v-model="blog.categories">
        <label>Wizards</label>
        <input type="checkbox" value="wizards" v-model="blog.categories">
        <label>Mario</label>
        <input type="checkbox" value="mario" v-model="blog.categories">
        <label>Cheese</label>
        <input type="checkbox" value="cheese" v-model="blog.categories">

      </div>
      <label>Author:</label>
      <select v-model="blog.author">
        <option v-for="author in authors">{{author}}</option>
      </select>

      <!-- .prevent prevents default behaviour -->
      <button v-on:click.prevent="post">Add Blog</button>

    </form>

    <!-- only visible if submitted=true -->
    <div v-if="submitted">
      <h3>Thanks for adding your post</h3>
    </div>

    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog title: {{blog.title}}</p>
      <p>Blog content:</p>
      <p>{{blog.content}}</p>
      <p>Blog Categories:</p>
      <ul>
        <li v-for="category in blog.categories">{{category}}</li>
      </ul>
      <p>Author: {{blog.author}}</p>
    </div>


  </div>
</template>

<script>
export default {
  
  data() {
    return{
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },

      // note authors not in blog object
      authors:['Steven King', 'Tom King Smith', 'JRR Tolkien'],
      submitted: false
    }
  },
  methods: {
    post: function(){
      // using VueResource .post(where to send, what to send)
      this.$http.post('https://vue-js-test-1f71d.firebaseio.com/posts.json', this.blog).then(function(data){
        console.log(data);
        // .then is a promise. runs function after post completes
        // modifies data bool above to true on successful post
        this.submitted=true;
      });
    }
  }
}
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
}
</style>

