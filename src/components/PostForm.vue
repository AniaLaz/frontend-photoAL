<template>
  <form @submit.prevent class="form">
    <h4>Створити пост</h4>

    <my-input
      v-model.trim="post.category"
      type="text"
      placeholder="Категорія"
    />
    <my-input
      v-focus
      v-model.trim="post.title"
      type="text"
      placeholder="Назва"
    />

    <my-input v-model.trim="post.body" type="text" placeholder="Опис" />

    <my-button class="form__submit" @click="createPost"> Створити</my-button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
        category: "",
      },
    };
  },
  methods: {
    async fetchPosts() {
      console.log("add post");
      const str = JSON.stringify(this.post);
      console.log("str", str);
      try {
        console.log("try");
        const response = await axios.post(
          "https://backend-photoal-98ep.onrender.com/api/photos",
          str
        );
        // this.post = response.data;
        console.log(response);
      } catch (error) {
        alert(error.message);
        console.log(error);
      }
    },
    createPost() {
      this.fetchPosts();
      this.post.id = Date.now();
      this.$emit("create", this.post);
      console.log(this.post);
      this.post = {
        title: "",
        body: "",
        category: "",
      };
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}

.form__submit {
  align-self: flex-end;
  margin-top: 15px;
}
</style>
