<template>
  <div id="form">
    <form>
      <div class="form-group">
        <label>Titre </label>
        <input
          type="text"
          class="form-control"
         v-model="titre"
          placeholder="Le titre de votre pulication ..."
          aria-label="titre"
        />
      </div>

      <div class="form-group">
        <label>Post </label>
        <textarea
         v-model="contenu"
          class="form-control"
          name="post"
          aria-label="post"
          placeholder="Votre publication .."
        >
        </textarea>
      </div>
    </form>
    <button
      
      class="btn btn-danger btn-block"
      title="poster"
    >
      Modifier
    </button>
   
  </div>
</template>
<script>
export default {
    name:"modifyPost",
    data:{
      title:"",
      contained:"",
    },
 created:function(){

    //   console.log(id);
    //   document.getElementById('carte').style.display='none'
    //   document.getElementById('modify').style.display='initial'
      
        // const TOKEN = this.TOKEN;
        // const userId = this.userId;
        // axios
      //   .create({
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: "Bearer " + TOKEN,
      //     },
      //   })
      //   .put(`http://localhost:3000/api/posts/${id}`, {
      //     title: " changer",
      //     contained: "post changer",
      //   })
      //   .then((response) => {
      //     alert(response.data.message);
      //   })
      //   .catch((err) => console.log(err));
      // window.location.href = `/Accueil?id=${userId}`;
      axios
        .get(`http://localhost:3000/api/posts/${id}`)
        .then((response) => {
          this.title=response.data[0].title;
          this.contained=response.data[0].contained;
        })
        .catch((error) => console.log(error));
 
}

</script>
<style scoped>

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