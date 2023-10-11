<template>
  <div class="main">
    <my-hero />
    <BoxContainer>
      <div class="about">
        <div>
          <h2 class="about__name">Анна</h2>
          <h2 class="about__name">Лазаренко</h2>
          <div class="about__info">
            <p class="about__info__fiorst">Фотограф</p>
            <p class="about__info__second">Львів</p>
          </div>
          <h2 class="about__title">Про мене</h2>
          <p class="about__text">
            Привіт. Мене звати Аня і я хочу стати вашим сімейним фотографом. Я
            не уявляю себе без камери, я обожнюю ловити справжні щирі почуття та
            зберігати їх на світлині. Я отримую неймовірне задоволення від
            спілкування з дітками під час зйомки. Дітей фотографувати одночасно
            і найлегше, бо в них завжди справжні емоції але і найважче, бо
            зловити в якісному знимку маленьке шило не так і легко. Так діти, то
            моє захоплення. Але і дорослих я не залишу без уваги, не хвилюйтеся.
          </p>
        </div>
        <img
          src="../imeges/photo_my.jpg"
          alt="Аня Лазаренко"
          class="about__portret"
        />
      </div>
      <div class="about__what_do">
        <h2 class="about__what_do_titel">Портфоліо</h2>
        <WhatIDo />
      </div>
    </BoxContainer>
  </div>
</template>

<script>
import MyHero from "@/components/MyHero";
import WhatIDo from "@/components/WhatIDo.vue";
import BoxContainer from "@/components/shared/BoxContainer";
export default {
  name: "my-main",
  components: {
    BoxContainer,
    MyHero,
    WhatIDo,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
h2 {
  margin-top: 0;
  margin-bottom: 0;
}
.main {
  text-align: center;
}
.about {
  padding: 0;
  text-align: left;
}

.about__text {
  text-align: justify;
  margin: 10px 10px 0 0;
  font-size: 7px;
  line-height: 1.14;
  color: black;
  padding: 0 15px;
}
@media screen and (min-width: 768px) {
  .about__text {
    font-size: 15px;
    margin: 0 20px 0 0;
    padding-left: 15px;
  }
}
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-top: 0;
  border: 0;
}
.about__title {
  font-size: 20px;
  text-align: left;
  padding: 0 15px;
  margin-top: 20px;
}
@media screen and (min-width: 768px) {
  .about__title {
    font-size: 35px;
  }
}
.about__name {
  padding: 0 15px;
}
@media screen and (min-width: 768px) {
  .about__name {
   font-size: 35px;
}
}
.about__info {
  padding: 0 15px;
  display: flex;
  font-size: 15px;
  color: black;
  font-size: 11px;
  margin-top: 10px;
}
@media screen and (min-width: 768px) {
  .about__info {
    font-size: 20px;
  }
}
.about__info__fiorst {
  padding-right: 20px;
  border-right: 1px solid black;
  margin: 0;
}
.about__info__second {
  padding-left: 20px;

  margin: 0;
}

.about__portret {
  width: 160px;
  height: 100%;
}
@media screen and (min-width: 768px) {
  .about__portret {
    width: 400px;
  }
}
.about__what_do {
  padding: 20px 0 0 0;
  background: black;
}
.about__what_do_titel {
  color: white;
  margin-bottom: 20px;
}
</style>
