<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light"
      style="background-color: #122248"
    >
      <a class="navbar-brand"> <router-link to="/">Groupomania</router-link></a>
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
          <li class="nav-item">
            <a class="nav-link">
              <router-link to="/Login">Se Connecter</router-link>
         
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <router-link to="/Signup">S'inscrire</router-link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <img src="../assets/icon-left-font-monochrome-black.png" alt="" />
        <h1 class="display-4">Bienvenue</h1>
        <p class="lead">
          Ceci c'est un réseau social interne pour les employés de Groupomania
        </p>
      </div>
    </div>
  </div>
</template>

 
<style >
a {
  color: #bc4c54;
}
a:hover {
  text-decoration: none;
  color: #d2646b;
}
img {
  border-radius: 5%;
  width: auto;
}
.jumbotron {
  background-color: white;
}
</style>
