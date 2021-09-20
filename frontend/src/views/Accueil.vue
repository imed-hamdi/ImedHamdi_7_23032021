<template>
  <div class="card text-center">
      <div id="create">
      <createPost />
    </div>
    <div v-for="post in posts" :key="post.id">
      <hr />
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">
          {{ post.contained }}
        </p>
        <span id="postuserId">{{ post.userId }}</span>
        <div class="card-footer text-muted">{{ time(post.dateAdd) }}</div>
        <button
          id="btnSupp"
          type="button"
          class="btn btn-danger"
        >
          Supprimer
        </button>
        <button type="button" class="btn btn-primary">Modifier</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import createPost from "@/components/createPost.vue";


export default {
  name: "Accueil",
  components: {
    createPost,


  },

  data() {
    return {
      posts: null,
    };
  },
  methods: {
    
    time(dateAdd) {
      const options = {
        weekday: "short",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      };
      let date = new Date(dateAdd);
      return date.toLocaleDateString("fr-FR", options);
    },
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
        this.posts = response.data;
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style >
button {
  margin: 1vw;
}
.card {
  margin: auto;
  width: 80%;
  justify-content: center;
  align-items: center;
}
.card-body {
  width: 100%;
}
#create {
  box-shadow: 8px 9px 16px 4px rgba(0, 0, 0, 0.6);
  -webkit-box-shadow: 8px 9px 16px 4px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 8px 9px 16px 4px #bc4c54;
  border-radius: 10px;
  width: 80%;
  padding: 1vw;
  margin-top: 1vw;
}
.card-title{
  color: #bc4c54;
  text-decoration: underline #d2646b;
  text-transform: uppercase;
}

</style>