<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Groupomania</h1>
    </div>

    <form>
      <div class="form-group">
        <label for="firstName">Nom </label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          v-model="firstName"
          placeholder="Entrez votre Nom"
        />
      </div>
      <div class="form-group">
        <label for="lastName">Prénom</label>
        <input
          type="text"
          class="form-control"
          id="lastName"
          v-model="lastName"
          placeholder="Entrez votre Prénom"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Adresse E-mail</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"

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
      <button  class="btn btn-primary" v-on:click="inscrire">S'inscrire</button> <br />
      <br />
      <p>{{ error }}</p>
    </form>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Signup",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    inscrire() {
     
      axios
        .post("http://localhost:3000/api/users/auth", {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
      
        })
        .then((response) => {
          //envoi du token
          localStorage.setItem("token", response.data.token);
          
        })
        .then(this.$router.push("/Login"))
        .catch((e) => {
        this.error = "Veuillez vérifier tout les champs ..ou" + e;
        });
    },
  },
};
</script>