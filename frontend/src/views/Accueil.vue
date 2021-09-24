<template>
  <div class="card text-center">
    <div id="create">
      <createPost />
    </div>
    <div id="container" v-for="post in posts" :key="post.id">
      <div class="card-body">
        <div id="titleContained">
          <h5 id="title" class="card-title">{{ post.title }}</h5>
          <p id="contained" class="card-text">
            {{ post.contained }}
          </p>
        </div>
        <span class="postuserId">{{ post.userId }}</span>
        <span id="postUserName">{{ post.userName }}</span>
        <div class="card-footer text-muted">{{ time(post.dateAdd) }}</div>
        <div id="btns" v-if="post.userId == userId">
          <button
            v-on:click="deletePost(post.id)"
            type="button"
            class="btn btn-danger btnSupp"
          >
            Supprimer
          </button>
        
          <button
            id="validerModif"
            type="button"
            class="btn btn-primary"
            v-on:click="modifierPost"
          >
            Valider
          </button>
        </div>
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
   props: ["post"],

  data() {
    return {
      posts: null,
      error: "",
      userId: sessionStorage.getItem("userId"),
      userLevel: sessionStorage.getItem("userLevel"),
    
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

    modifierPost(id) {
      const TOKEN = sessionStorage.getItem("token");
      const userId = parseInt(sessionStorage.getItem("userId"));
      
      axios

        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + TOKEN,
          },
        })
        .put(`http://localhost:3000/api/posts/${id}`, {
          title: "",
          contained: "",
        })
        .then((response) => {
          alert(response.error);
        })
        .catch((err) => console.log(err));
      window.location.href = `/Accueil?id=${userId}`;
    },

    deletePost(id) {
      const TOKEN = sessionStorage.getItem("token");
      const userId = parseInt(sessionStorage.getItem("userId"));
      axios

        .delete(`http://localhost:3000/api/posts/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + TOKEN,
          },
        })
        .then((response) => {
          alert(response.data.message);
        })
        .catch((err) => console.log(err));
      window.location.href = `/Accueil?id=${userId}`;
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
        console.log(response.data);
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
  width: 50%;
  border-radius: 20px;
  margin-top: 1vw;
  box-shadow: -5px 6px 16px -2px rgba(0, 0, 0, 0.78);
  -webkit-box-shadow: -5px 6px 16px -2px rgba(0, 0, 0, 0.78);
  -moz-box-shadow: -5px 6px 16px -2px rgba(0, 0, 0, 0.78);
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
.card-title {
  color: #bc4c54;
  text-decoration: underline #d2646b;
  text-transform: uppercase;
}
.card-text {
  width: 50%;
  margin: auto;
  text-align: center;
}
#container {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#postUserName {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: larger;
  font-style: oblique;
  text-transform: capitalize;
}
.postuserId {
  display: none;
}
#validerModif {
  display: none;
}
</style>