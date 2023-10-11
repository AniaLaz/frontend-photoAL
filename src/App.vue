<template>
  <div class="app">
    <BoxContainer>
      <MyNavbar />

      <div>
        <router-view />
      </div>

      <MyFooter />
    </BoxContainer>
  </div>
</template>

<script>
import MyNavbar from "@/components/MyNavbar";
import MyFooter from "./components/MyFooter.vue";
import BoxContainer from "@/components/shared/BoxContainer";

export default {
  components: {
    BoxContainer,
    MyNavbar,
    MyFooter,
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;500;600&family=Playfair+Display:ital,wght@0,600;1,600&display=swap');
* {
  margin: 0;
  box-sizing: border-box;
  font-family: 'Oswald', sans-serif, Arial, sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 16px;
  color: black;
  margin-bottom: 60px;
}

</style>

<!-- прописний шрифт -->
<!-- @import url("https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap"); -->
<!-- font-family: "Caveat", cursive, Arial, sans-serif; -->

<!-- npm run serve -->

<!-- DEPLOY -->

<!-- git add .   --------- зберігаєм зміни на git-->
<!-- git commit -m "what i do"     ----------- робимо коміт-->
<!-- git push -->
<!--npm run deploy   ------------- робимо деплой проекту-->
