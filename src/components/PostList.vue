<template>
  <div class="post-container" v-if="posts.length > 0">
      <transition-group name="post-list">
      <post-item
        class="list"
        v-for="post in posts"
        :post="post"
        :imgSrc="post.urlMin"
        :title="post.title"
        :key="post._id"
        @remove="$emit('remove', post)"
        @show="$emit('show', post.url)"
      />
    </transition-group>
  </div>
  <h3 v-else style="color: red">
    В тебе немає постів. Створи свій перший пост!
  </h3>
</template>

<script>
import PostItem from "./PostItem.vue";
export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.list{
  display: inline-flex;
}
.post-container{
  display: flex;
  flex-wrap: wrap;
  gap: 20px
}
.post-list-item {
  display: inline-block;
  margin-right: 10px;
  }
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.post-list-move {
  transition: transform 0.4s ease;
}
</style>
