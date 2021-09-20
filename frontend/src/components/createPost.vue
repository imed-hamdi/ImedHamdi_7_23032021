<template>
  <div id="form">
    <h3>Créer une publication :</h3>
    <form>
      <div class="form-group">
        <label>Titre  </label>
        <input
          type="text"
          class="form-control"
          v-model="title"
          placeholder="Le titre de votre pulication ..."
          aria-label="titre"
        />
      </div>

      <div class="form-group">
        <label>Post  </label>
        <textarea
          v-model="contained"
          class="form-control"
          name="post"
          aria-label="post"
          placeholder="Votre publication .."
        >
        </textarea>
      </div>
    </form>
      <button
        v-on:click="createPost"
        class="btn btn-primary btn-block"
        title="poster"
      >
        Ajouter
      </button>
      <p>{{ error }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "createPost",
  data() {
    return {
      title: "",
      contained: "",
      userId: "",
      error: "",
    };
  },
  methods: {
    createPost() {
      const TOKEN = sessionStorage.getItem("token");
      const id = sessionStorage.getItem("userId");
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + TOKEN,
          },
        })
        .post("http://localhost:3000/api/posts", {
          title: this.title,
          contained: this.contained,
          userId: id,
        })
        .then((response) => {
          console.log(response);
          this.error = "Post ajouté avec succés ";
        })
        .catch((e) => {
          this.error = "Veuillez vérifier les champs..." + e;
        });
      window.location.href = `/Accueil?id=${id}`;
    },
  },
};
</script>

<style scoped>
h3 {
  color: #bc4c54;
}
button {
  width: max-content;
  border-radius: 10px;
  margin: auto;
  display: flex;
}
form {
  width: 80%;
  margin-top: 1vw;
}
.form-group {
  display: flex;
  align-items: center;
  justify-content: center;
}
input {
  width: 50%;
}
textarea {
  width: 50%;
  resize: none;
}
label {
  width: max-content;
  margin-right: 1vw;
}
</style>