<template>
  <BoxContainer>
    <h1>категорії</h1>
    <CategoryList
      @show="showBigPhoto"
      v-if="!isPhotosLoading"
      :photos="photos"
    />
    <div v-else>...іде завантаження</div>
    <div v-intersection="loadMorePage" class="observer"></div>
  </BoxContainer>
</template>

<script>
import BoxContainer from "@/components/shared/BoxContainer.vue";
import CategoryList from "@/components/CategoryList";
import axios from "axios";
export default {
  data() {
    return {
      photos: [],
      isPhotosLoading: false,
      page: 1,
      limit: 4,
    };
  },
  components: {
    BoxContainer,
    CategoryList,
  },
  methods: {
    async fetchPhotos() {
      console.log("fetchPhotos");
      try {
        this.isPhotosLoading = true;
        const response = await axios.get(
          "https://backend-photoal-98ep.onrender.com/api/photos/children",
          {
            params: {
              page: this.page,
              limit: this.limit,
            },
          }
        );
        this.photos = response.data;
      } catch (error) {
        alert(error.message);
      } finally {
        console.log("this.photos", this.photos);
        this.isPhotosLoading = false;
      }
    },
    async loadMorePage() {
      try {
        this.page += 1;

        const response = await axios.get(
          "https://backend-photoal-98ep.onrender.com/api/photos/children",
          {
            params: {
              page: this.page,
              limit: this.limit,
            },
          }
        );
        this.photos = [...this.photos, ...response.data];
        console.log("this.photos2", this.photos);
      } catch (error) {
        alert(error.message);
      }
    },
  },
  mounted() {
    this.fetchPhotos();
  },
};
</script>

<style scoped></style>
