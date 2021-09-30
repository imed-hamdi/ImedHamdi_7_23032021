<template>
  <div id="body" class="card text-center">
    <div id="create">
      <createPost />
    </div>
    <div
      id="container"
      v-for="post in posts"
      :class="{ editing: post.id === editing }"
      :key="post.id"
    >
      <div class="card-body">
        <div id="carte">
          <h4 id="title" class="card-title">
            {{ post.title }}
          </h4>
          <p v-if="editing != post.id" id="contained" class="card-text">
            {{ post.contained }}
          </p>
          <textarea
            v-if="editing === post.id"
            v-model="post.contained"
            id="edit"
            rows="5"
            cols="33"
            v-on:keyup.enter="ModifyPost(post.id)"
          >
          </textarea>
        </div>
        <span class="postuserId">{{ post.userId }} </span>

        <hr />
        <div class="dateadd">
          <span id="postUserName">{{ post.userName }}</span>
          {{ time(post.dateAdd) }}
        </div>
        <hr />

        <button
          v-if="
            post.userId == userId ||
            userLevel == '487f7b22f68312d2c1bbc93b1aea445b'
          "
          v-on:click="deletePost(post.id)"
          type="button"
          class="btn btn-danger btnSupp"
        >
          Supprimer
        </button>
        <button
          v-if="
            post.userId == userId ||
            userLevel == '487f7b22f68312d2c1bbc93b1aea445b'
          "
          v-on:click="editPost(post)"
          type="button"
          class="btn btn-primary btnSupp"
        >
          Modifier
        </button>
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
      error: "",
      TOKEN: sessionStorage.getItem("token"),
      userId: sessionStorage.getItem("userId"),
      userLevel: sessionStorage.getItem("userLevel"),
      editing: null,
      title:"",
      containedChanged:""
      
    };
  },

  methods: {
    ModifyPost(id) {
     
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.TOKEN,
          },
        })
      
        .put(`http://localhost:3000/api/posts/${id}`, {
        title: this.title,
        contained: "this.containedChanged"
        })
        .then((response) => {
          console.log(response.data.message);
          alert("Votre publication vient d'etre modifier");
          window.location.href = `/Accueil?id=${id}`;
        })
        .catch((error) => console.log(error));
    },
    editPost(postId) {
      this.editing = postId.id;
      this.title=postId.title
    
      
    },
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

    deletePost(id) {
      const TOKEN = this.TOKEN;
      const userId = this.userId;
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
    axios
      .create({
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.TOKEN,
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
  text-transform: capitalize;
  font-family: cursive;
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
.dateadd {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  margin: auto;
}
#contained {
  text-transform: capitalize;
  font-family: cursive;
  font-style: oblique;
}
#modify {
  display: none;
}
</style>