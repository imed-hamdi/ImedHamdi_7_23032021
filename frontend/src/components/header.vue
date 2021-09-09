<template>
  <header>
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
  </header>
</template>
<script>
export default {
  name: "Header"
};
</script>