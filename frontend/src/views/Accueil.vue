<template>
  <div class="postList">
    <div v-for="post in posts" :key="post.id">
      <h1>{{ post.title }}</h1>
      <p>{{ post.contained }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Accueil",

  data() {
    return {
      posts: null,
    };
  },
  //récupération des posts depuis la BDD via axios
  created() {
    const TOKEN = sessionStorage.getItem("token");
    axios
      .create({
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + TOKEN,
        },
      })
      .get("http://localhost:3000/api/posts")
      .then((response) => {
        console.log(response);
        this.posts = response.data;
        sessionStorage.setItem("post", response.data.length);
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style scoped>
.postList {
  width: 80%;
  margin: auto;
}
</style>