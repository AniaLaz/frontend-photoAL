<template>
  <BoxContainer class="container__post">
    <h1 class="post__title">Сторінка з постами</h1>
    <my-input
      v-focus
      v-model="searchQuery"
      placeholder="Пошук..."
      class="inputPost"
    />
    <div class="app__btns">
      <!-- <my-button @click="showDialog">Створити пост </my-button> -->
      <my-select v-model="selectedSort" :options="sortOptions"></my-select>
    </div>

    <!-- <my-dialog v-model:show="dialogVisible">
      <PostForm @create="createPost" />
    </my-dialog> -->
    <h3>Мої пости</h3>
    <PostList
      class="postList"
      v-bind:posts="sortedAndSerchedPosts"
      @remove="removePost"
      @show="showBigPhoto"
      v-if="!isPostsLoading"
    />
    <div v-else>...іде завантаження</div>
    <!-- <div ref="observer" class="observer"></div> -->
    <div v-intersection="loadMorePage" class="observer"></div>
    <my-dialog v-model:show="dialogVisiblePhoto">
      <h4>yes!!!!!</h4>
    </my-dialog>
  </BoxContainer>
</template>

<script>
import BoxContainer from "@/components/shared/BoxContainer.vue";
// import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      posts: [],
      dialogVisible: false,
      dialogVisiblePhoto: false,
      isPostsLoading: false,
      selectedSort: "",
      searchQuery: "",
      page: 1,
      limit: 4,
      sortOptions: [
        { value: "title", name: "По назві" },
        { value: "body", name: "По опису" },
      ],
    };
  },
  components: {
    // PostForm,
    PostList,
    BoxContainer,
  },
  methods: {
    // createPost(post) {
    //   this.posts.push(post);
    //   this.dialogVisible = false;
    // },
    removePost(post) {
      this.posts = this.posts.filter((p) => p._id !== post._id);
      this.removePosts(post);
    },
    // showDialog() {
    //   this.dialogVisible = true;
    // },
    showBigPhoto() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      console.log("fetch");
      try {
        this.isPostsLoading = true;
        const response = await axios.get(
          "https://backend-photoal-98ep.onrender.com/api/photos",
          {
            params: {
              page: this.page,
              limit: this.limit,
            },
          }
        );
        this.posts = response.data;
        console.log(response);
      } catch (error) {
        alert(error.message);
      } finally {
        this.isPostsLoading = false;
      }
    },
    async loadMorePage() {
      try {
        this.page += 1;

        const response = await axios.get(
          "https://backend-photoal-98ep.onrender.com/api/photos",
          {
            params: {
              page: this.page,
              limit: this.limit,
            },
          }
        );
        this.posts = [...this.posts, ...response.data];
        console.log(response);
      } catch (error) {
        alert(error.message);
      }
    },
    async removePosts(post) {
      console.log("remove");
      console.log(post);
      try {
        await axios.delete(
          `https://backend-photoal-98ep.onrender.com/api/photos/${post._id}`
        );
      } catch (error) {
        alert(error.message);
        console.log(error.message);
      }
    },
  },
  mounted() {
    this.fetchPosts();
    // const options = {
    //   rootMargin: "0px",
    //   threshold: 1.0,
    // };
    // const callback = (entries, observer) => {
    //   if (entries[0].isIntersecting && this.posts.length > 0) {
    //     this.loadMorePage();
    //   }
    //   console.log(entries);
    //   console.log(observer);

    //   /* Content excerpted, show below */
    // };
    // const observer = new IntersectionObserver(callback, options);
    // observer.observe(this.$refs.observer);
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      );
    },
    sortedAndSerchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<style>
.container__post {
  text-align: center;
}
.post__title {
   margin-bottom: 0;
   margin-bottom: 20px;
}
.app__btns {
  display: flex;
  justify-content: right;
  margin-top: 15px;
}
.inputPost {
  max-width: 1078px;
}
.postList {
  margin-top: 15px;
}
.page__erapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid rgb(209, 206, 9);
  padding: 10px;
  border-radius: 10px;
}
.current-page {
  border: 2px solid black;
}
.observer {
  height: 30px;
  background-color: transparent;
}
</style>
