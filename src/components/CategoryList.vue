<template>
  <div class="photos-container">
    <CategoryItem
      class="list"
      v-for="photo in photos"
      :photo="photo"
      :imgSrc="photo.url"
      :title="photo.title"
      :key="photo._id"
      @show="$emit('show', photo.url)"
    />
  </div>
  <!-- <h3 v-else style="color: red">
    Поки що не має фото цієї категорії
  </h3> -->
</template>

<script>
import CategoryItem from "./CategoryItem.vue";
export default {
  components: { CategoryItem },
  props: {
    photos: {
      type: Array,
      required: true,
    },
  },
};
console.log("photos");
</script>

<style scoped>
.list {
  display: inline-flex;
}
.photos-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
