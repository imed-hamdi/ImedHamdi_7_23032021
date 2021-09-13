<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Groupomania</h1>
    </div>

    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Adresse E-mail</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="email"
          placeholder="Entrez votre email"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Mot de passe</label>
        <input
          type="password"
          class="form-control"
          v-model="password"
          id="exampleInputPassword1"
          placeholder="Entrez votre mot de passe"
        />
      </div>
      <button  class="btn btn-primary" v-on:click="seConnecter">Se Connecter</button> <br />
      <br />
      <p>{{ error }}</p>
    </form>
  </div>
</template>





<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    seConnecter() {
      axios
        .post("http://localhost:3000/api/users/login", {
          email: this.email,
          password: this.password,
          error: this.error,
        })
        .then((response) => {
          //envoi du token
          sessionStorage.setItem("token", response.data.token);
          sessionStorage.setItem("userName", response.data.user.firstName);
          sessionStorage.setItem("userId", response.data.user.id);
          sessionStorage.setItem("userLevel", response.data.user.Level);
          window.location.href = `/Accueil?id=${response.data.user.id}`;
        })
        .catch((e) => {
          this.error = "Invalid username/password!" + e;
        });
    },
  },
};
</script>
<style >
form {
  width: 50%;
  margin: auto;
  margin-top: 5vw;
}
</style>
