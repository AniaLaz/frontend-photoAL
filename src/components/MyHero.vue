<template>
  <section class="hero">
    <div>
      <h1 class="hero__title">Лови момент</h1>
      <div class="hero__info">
        <p class="hero__info__fiorst">Професійна фотосесія</p>
        <p class="hero__info__second">Фотокниги</p>
        <p class="hero__info__last">Ретуш</p>
      </div>
      <my-button type="button" class="hero__button" @click="showDialog">
        Замовити
      </my-button>
      <my-dialog v-model:show="dialogVisible" class="hero__dialog">
        <OrderAService @submit="closeDialog">
          <h4>Напишіть Ваше побажання і чекайте на відповідь</h4>
        </OrderAService>
      </my-dialog>
    </div>

    <!-- <div class="hero__info">
      <p class="hero__info__fiorst">Анна Лазаренко</p>
      <p class="hero__info__second">Фотограф Львів</p>
    </div> -->
  </section>
</template>

<script>
import OrderAService from "@/components/OrderAService.vue";

export default {
  data() {
    return {
      orders: [],
      dialogVisible: false,
    };
  },
  components: {
    OrderAService,
  },
  methods: {
    //   createOrder(order) {
    //     console.log("createOrder");
    // console.log(order,"order");
    //     this.orders.push(order);
    //     this.dialogVisible = false;
    // },

    closeDialog() {
      this.dialogVisible = false;
    },

    showDialog() {
      this.dialogVisible = true;
    },
  },
};
</script>

<style scoped>
.hero {
  padding-top: 60px;
  height: 840px;
  margin-left: auto;
  margin-right: auto;
  background-image: url("../imeges/heroyLviv2.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.hero__dialog {
  z-index: 999;
}
.hero__title {
  font-family: "Raleway", sans-serif;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  margin-bottom: 0;

  font-size: 35px;
  line-height: 1.62;
  text-align: center;
  letter-spacing: 0.06em;

  color: black;
}

@media screen and (min-width: 768px) {
  .hero__title {
    font-size: 100px;
  }
}
.hero__button {
  font-size: 25px;
  margin-top: 15px;
}
@media screen and (min-width: 768px) {
  .hero__button {
    font-size: 24px;
    margin-top: 56px;
  }
}
.hero__info {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-size: 15px;
  color: black;
}
@media screen and (min-width: 768px) {
  .hero__info {
    font-size: 24px;
    font-weight: bold;
  }
}

.hero__info__fiorst {
  padding-right: 20px;
  border-right: 1px solid black;
  margin: 0;
}
.hero__info__second {
  padding-left: 20px;
  padding-right: 20px;
  margin: 0;
  border-right: 1px solid black;
}
.hero__info__last {
  padding-left: 20px;
  margin: 0;
}
</style>
