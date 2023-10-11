<template>
  <div class="post">
    <div class="post__content">
      <img
        :src="imgSrc"
        :alt="title"
        class="post__content__img"
        @click="$emit('show', post)"
      />
      <div>
        <div   class="post__content__text">
          <h3>{{ title }}</h3>
          <div>{{ post.body }}</div>
        </div>
        <div class="post__btns">
          <my-button
            class="btn__oupen"
            @click="$router.push(`/post/${post._id}`)"
            >відкрити
          </my-button>
          <!-- <my-button class="btnDalite" @click="$emit('remove', post)"
            >Стерти
          </my-button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      tipe: Object,
      required: true,
    },
    title: {
      tipe: String,
      default: "",
    },
    imgSrc: {
      tipe: String,
      default:
        "https://img3.akspic.ru/previews/5/5/4/1/7/171455/171455-zhivopis-illustracia-art-voda-oblako-550x310.jpg",
    },
  },
  methods: {},
};
</script>

<style scoped>
.post {
  position: relative;
  display: block;
  padding: 15px;
  border: 2px solid black;
  text-align: left;
  width: 100%;
  margin-bottom: 20px;
}
@media screen and (min-width: 1200px) {
  .post {
    padding: 15px;
    border: 2px solid black;
    text-align: left;
    max-width: 45%;
    margin-bottom: 0;
  }
}
.post__content {
  display: flex;
}
.post__btns {
  display: flex;
}
.btn__oupen {
  position: absolute;
  bottom: 0;
  right: 0;
}
.post__content__img {
  width: 150px;
  height: 150px;
  margin-right: 20px;
}

@media screen and (min-width: 768px) {
  .post__content__img {
    width: 300px;
    height: 300px;
    margin-right: 20px;
  }
}
.post__content__text{
 padding-bottom: 30px;
}
</style>
