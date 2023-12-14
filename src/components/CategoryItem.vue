<template>
  <div class="photo">
    <div class="photo__content">
      <img
        :src="imgSrc"
        :alt="title"
        class="photo__content__img"
        @click="$emit('show', photo)"
      />
      <div>
       </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    photo: {
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
.photo {
  position: relative;
  display: block;
  text-align: left;

}
@media screen and (min-width: 1200px) {
  .photo {
    text-align: left;
  }
}
.photo__content {
  display: flex;
}
.photo__btns {
  display: flex;
}
.btn__oupen {
  position: absolute;
  bottom: 0;
  right: 0;
}
.photo__content__img {
  margin-right: 20px;
}

@media screen and (min-width: 768px) {
  .photo__content__img {
    width: 100%;
    margin-right: 20px;
  }
}
.photo__content__text{
 padding-bottom: 30px;
}
</style>
