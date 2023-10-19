<template>
  <div class="main">
    <my-hero />
    <BoxContainer>
      <div class="about">
        <div>
          <h2 class="about__name">
            Анна <br />
            Лазаренко
          </h2>
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
      <div class="form__container">
        <OrderAService class="footer__form">
          <f4 class="form__title">Маєте питання?</f4>
        </OrderAService>
      </div>
    </BoxContainer>
  </div>
</template>

<script>
import OrderAService from "@/components/OrderAService.vue";
import MyHero from "@/components/MyHero";
import WhatIDo from "@/components/WhatIDo.vue";
import BoxContainer from "@/components/shared/BoxContainer";
export default {
  name: "my-main",
  components: {
    BoxContainer,
    OrderAService,

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
    font-size: 24px;
    margin: 34px 0 0 0;
    padding-left: 114px;
    padding-right: 85px;
    padding-bottom: 20px;
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
  font-family: "Raleway", sans-serif;
  font-size: 20px;
  text-align: left;
  padding: 0 15px;
  margin-top: 20px;
  font-weight: bold;
}
@media screen and (min-width: 768px) {
  .about__title {
    font-size: 64px;
    margin-top: 168px;
    padding-left: 114px;
  }
}
.about__name {
  font-family: "Raleway", sans-serif;
  padding-left: 114px;
  font-weight: lighter;
  line-height: 1.04;
}
@media screen and (min-width: 768px) {
  .about__name {
    font-size: 96px;
    padding-top: 73px;
  }
}
.about__info {
  padding: 0 114px;
  display: flex;
  font-size: 15px;
  color: black;
  font-size: 11px;
  margin-top: 10px;
  font-weight: bold;
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
    width: 635px;
  }
}
.about__what_do {
  padding: 106px 0 0 0px;
  background: black;
}
.about__what_do_titel {
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  font-size: 64px;
  text-align: left;
  color: white;
  margin-bottom: 20px;
  padding-left: 110px;
  margin-bottom: 57px;
}
.footer__form {
  width: 50%;
  background-color: black;
  color: white;
  margin-left: auto;
  margin-right: auto;
}
.form__container {
  background-color: black;
    padding-top: 78px;
  padding-bottom: 146px;

}
.form__title {
  font-family: "Raleway", sans-serif;
  font-size: 48px;
}
</style>
