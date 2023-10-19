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
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;500;600&family=Playfair+Display:ital,wght@0,600;1,600&family=Raleway:ital,wght@0,100;0,200;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
* {
  margin: 0;
  box-sizing: border-box;
  font-size: 20px;
  font-family: "Roboto Regular", sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 16px;
  color: black;
  margin-bottom: 60px;
}
h1 {
  margin-top: 0;
  margin-bottom: 0;
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
