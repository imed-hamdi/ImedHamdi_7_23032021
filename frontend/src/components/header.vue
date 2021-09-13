<template>
  <header>
    <nav
      class="navbar navbar-expand-lg navbar-light"
      style="background-color: #122248"
    >
      <a v-if="!user" class="navbar-brand">
        <router-link to="/">Groupomania</router-link></a
      >
     <img id="logoAccueil" v-if="user" src="../assets/icon-left-font.png"  height="50" alt="Logo entreprise" />
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
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      user: sessionStorage.getItem("userName"),
    };
  },
  methods: {
    deconnexion() {
      sessionStorage.removeItem("userName");
      sessionStorage.removeItem("userId");
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("userLevel");
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
  color: #bc4c54;
    margin-top: 0;
  margin-bottom: 0;
}
button:hover{
  height: 50px;
  margin-top: 0;
  margin-bottom: 0;
}
#logoAccueil{
  border-radius: none;
}
</style>