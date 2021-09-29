<template>
  <header>
    <nav
      class="navbar navbar-expand-lg navbar-light"
      style="background-color: #122248"
    >
      <a v-if="!user" class="navbar-brand">
        <router-link to="/">Groupomania</router-link></a
      >
      <img
        id="logoAccueil"
        v-if="user"
        src="../assets/icon-left-font.png"
        height="50"
        alt="Logo entreprise"
      />
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li v-if="!user" class="nav-item">
            <a class="nav-link">
              <router-link to="/Login">Se Connecter</router-link>
            </a>
          </li>
          <li v-if="!user" class="nav-item">
            <a class="nav-link">
              <router-link to="/Signup">S'inscrire</router-link>
            </a>
          </li>
        </ul>
        <button
          type="button"
          v-if="user"
          v-on:click="deconnexion"
          class="btn btn-danger"
        >
          Se deconnecter
        </button>
        <div class="dropdown">
          <button
            v-if="user"
            class="btn btnname btn-danger dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Bonjour {{ user }}
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <button
              v-on:click="deletecompt"
              class="btn btn-secondary"
              id="btnliste"
            >
              Supprimer votre compte
            </button>
            <div class="dropdown show">
              <button
                v-on:click="btnchangePSW"
                class="btn btn-secondary dropdown-toggle"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Changer mot de passe
              </button>
              <div id="changepassword">
                <changepassword />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
import axios from "axios";
import changepassword from "@/components/changepassword.vue";
export default {
  name: "Header",
  components: {
    changepassword,
  },
  data() {
    return {
      user: sessionStorage.getItem("userName"),
      erreur: "",
    };
  },
  methods: {
    btnchangePSW() {
      document.getElementById("changepassword").style.visibility = "visible";
      document.getElementById("changepassword").style.height = "auto";
    },
    deletecompt() {
      const TOKEN = sessionStorage.getItem("token");
      const id = sessionStorage.getItem("userId");
      axios
        .create({
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + TOKEN,
          },
        })
        .delete(`http://localhost:3000/api/users/${id}`)
        .then((response) => {
          this.erreur = response.data;
          sessionStorage.clear();
          alert("Votre compte vient d'etre supprimer");
          window.location.href = "/";
        })
        .catch((error) => console.log(error));
    },
    deconnexion() {
      sessionStorage.clear();
      window.location.href = "/";
    },
  },
};
</script>
<style scoped>
button {
  border: none;
  background-color: transparent;
  margin-right: 2vw;
  color: white;
  margin-top: 0;
  margin-bottom: 0;
}
button:hover {
  height: auto;
  margin-top: 0;
  margin-bottom: 0;
}
#logoAccueil {
  border-radius: none;
}
.btnname {
  text-transform: capitalize;
}
#btnliste {
  color: black;
}
#dropdownMenuLink:hover {
  color: white;
}
#dropdownMenuLink {
  color: black;
}
#btnliste:hover {
  height: auto;
  margin-top: 0;
  margin-bottom: 0;
  color: white;
}
#changepassword {
  visibility: hidden;
  height: 0;
}
a {
  color: white;
}
</style>