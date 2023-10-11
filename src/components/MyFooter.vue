<template>
  <footer class="footer">
    <img
      class="logo"
      src="../imeges/logoAL.png"
      width="100"
      alt="Ania Lazarenko"
      @click="$router.push('/')"
    />
    <div class="footer__info">
      <ul class="footer__list">
        <li class="footer__city">м. Львів</li>
        <li class="footer__item">
          <a
            href="mailto:lazarenko.ania.sg@gmail.com"
            class="link footer__contact"
            >lazarenko.ania.sg@gmail.com</a
          >
        </li>
        <li class="footer__item">
          <a href="tel:+380967419449" class="link footer__contact"
            >+38 096 741 94 49</a
          >
        </li>
      </ul>

      <OrderAService class="footer__form">
      <f4>Маєте питання?</f4>
      </OrderAService>

      <div class="add">
        <p>Приєднуйтесь</p>
        <a
          target="_blank"
          href="https://www.facebook.com/ania.kryghevych"
          class="add-link f"
        >
          <svg class="add-icon" width="20" height="20">
            <use href="../imeges/icons.svg#icon-facebook"></use>
          </svg>
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/ania_kr5/"
          class="add-link i"
        >
          <svg class="add-icon" width="20" height="20">
            <use href="../imeges/icons.svg#icon-instagram"></use>
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import OrderAService from "@/components/OrderAService.vue";
export default {
  data() {
    return {};
  },
  components: {
    OrderAService,
  },
};
</script>

<style scoped>
.footer {
  padding: 15px;
  min-height: 100px;
  background: black;
  display: flex;
  align-items: center;

  max-width: 1200px;
}
.footer__info {
  display: block;
  padding-left: 30px;
  font-size: 12px;
}

@media screen and (min-width: 768px) {
  .footer__info {
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 17px;
  }
}
@media screen and (min-width: 1200px) {
  .footer__info {
    font-size: 20px;
  }
}
.footer__list {
  color: white;
  list-style-type: none;
  padding-left: 0;
}
.add-link {
  display: inline-flex;

  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  align-items: center;
  justify-content: center;
  padding: 7px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: gray;
  }
}
@media screen and (min-width: 768px) {
  .footer_box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }
}
.f {
  margin-right: 10px;
}
.add {
  margin-left: auto;
  color: white;
}

.add-icon {
  fill: white;
}
.footer__city {
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.footer__contact {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.6);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.footer__item {
  margin-top: 9px;
}

.footer__city:hover,
.footer__:focus,
.footer__contact:hover,
.footer__contact:focus {
  color: white;
}
.footer__form{
  width: 50vw;
  background-color: black;
  color: white;
}
@media screen and (min-width: 768px){
.footer__form{
margin:0 20px;
width: 20vw;
}
}

</style>
