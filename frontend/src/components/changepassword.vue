<template>
  <div class="input-group">
    <div class="input-group-prepend">
      <span class="input-group-text">Nouveau mot de passe :</span>
    </div>
    <input
      v-model="password"
      type="password"
      class="form-control"
      aria-label="password"
    />
    <button v-on:click="changePassword" type="button" class="btn btn-primary">
      Changer votre mot de passe
    </button>
    <p>
      N.B : Le mot de passe doit contenir au moins 5 caratctes :
      miniscule,majuscule, chiffres et caracteres spéciaux
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "changepassword",
  data() {
    return {
      password: "",
      erreur: "",
    };
  },
  methods: {
    changePassword() {
      const TOKEN = sessionStorage.getItem("token");
      const id = sessionStorage.getItem("userId");
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + TOKEN,
          },
        })
        .put(`http://localhost:3000/api/users/${id}`, {
          password: this.password,
        })
        .then((response) => {
          console.log(response.data.message);
          this.erreur = response.data.message;
          alert("Votre mot de passe vient d'etre changé");
          window.location.href = `/Accueil?id=${id}`;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style lang="scss" scoped>
.input-group {
  display: flex;
  padding: 1vw;
  align-items: center;
  justify-content: center;
}
#erreur {
  color: red;
}
</style>