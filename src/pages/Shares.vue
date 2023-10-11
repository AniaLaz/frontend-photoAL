<template>
  <BoxContainer>
    <div class="shares">
      <img src="../imeges/autumn.jpg" alt="autumn" class="shares__img" />
      <p class="shares__text">-50% на осінню фотосесію</p>
       </div>
  </BoxContainer>
</template>

<script>
import BoxContainer from "@/components/shared/BoxContainer";
export default {
  components: {
    BoxContainer,
  },
  name: "my-shares",
};
</script>

<style>
.shares {
  width: 100%;
  position: relative;
}
.shares__img {
  width: 100%;
}
.shares__text {
  color: white;
  font-size: 30px;
  position: absolute;
  bottom: 0px;
  left: 30px;
}
@media screen and (min-width: 768px) {
    .shares__text {

  font-size: 80px;

}
}

</style>

<!-- top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%); -->
