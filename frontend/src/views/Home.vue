<template>
  <div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <img src="../assets/icon-left-font-monochrome-black.png" alt="" />
        <h1 class="display-4">Bienvenue</h1>
        <p class="lead">
          Ceci est un réseau social interne pour les employés de Groupomania
        </p>
      </div>
    </div>
  </div>
</template>
<script>
// import Login from "@/views/Login.vue";

export default {
  name: "Home",
};
</script>
 
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
