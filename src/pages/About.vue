<template>
  <BoxContainer>
    <div class="about">
      <div>
            <p class="text">
          Мене звати Аня і я хочу стати вашим сімейним фотографом. Я не
          представляю себе без камери, я обожнюю ловити справжні щирі почуття та
          зберігати їх на світлині. Я отримую неймовірне задоволення від
          спілкування з дітками під час зйомки. Дітей фотографувати одночасно і
          найлегше, бо в них завжди справжні емоції але і найважче, бо зловити в
          якісному знимку маленьке шило не так і легко. Так діти, то моє
          захоплення. Але і дорослих я не залишу без уваги, не хвилюйтеся.
        </p>
      </div>
      <img src="../imeges/photo_my.jpg" alt="Аня Лазаренко" class="img" />
    </div>
  </BoxContainer>
</template>

<script>
import BoxContainer from "@/components/shared/BoxContainer";
export default {
  components: {
    BoxContainer,
  },
  name: "my-about",
};
</script>

<style>
.title {
  text-align: center;
}
.text {
  text-align: justify;
  margin: 0 10px 0 0;
  padding-left: 5px;
  font-size: 14px;
  line-height: 1.14;
}
@media screen and (min-width: 768px) {
  .text {
    margin-bottom: 20px;
    font-size: 25px;
    margin: 0 20px 0 0;
    padding-left: 30px;
  }
}
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 20px 0;
}
.img {
  max-width: 150px;
  max-height: 100%;

}
@media screen and (min-width: 768px){
  .img {
  max-width: 300px;
}
}

</style>
