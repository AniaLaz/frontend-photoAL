<template>
  <footer class="footer">
    <p class="footer__logo">Анна Лазаренко</p>
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

      <div class="add">
        <a
          target="_blank"
          href="https://www.facebook.com/ania.kryghevych"
          class="add-link f"
        >
          <svg class="add-icon" width="20" height="20">
            <use href="../imeges/icons.svg#test-face"></use>
          </svg>
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/ania_kr5/"
          class="add-link f"
        >
          <svg class="add-icon" width="20" height="20">
            <use href="../imeges/icons.svg#test-ins"></use>
          </svg>
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/ania_kr5/"
          class="add-link i"
        >
          <svg class="add-icon" width="20" height="20">
            <use href="../imeges/icons.svg#test-linc"></use>
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.footer {
  padding: 43px 102px 43px 54px;
  min-height: 100px;
  background: black;
  display: flex;
  align-items: center;
  border-top: 1px solid white;
}
.footer__logo {
  display: inline;
  color: white;
  font-family: "Raleway", sans-serif;
  font-weight: lighter;
  font-size: 48px;
  white-space: nowrap;
}
.footer__info {
  display: block;
  padding-left: 200px;
  font-size: 12px;
  text-align: center;
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
  width: 51px;
  height: 51px;
  border-radius: 10%;
  background-color: transparent;

  align-items: center;
  justify-content: center;

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
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
}

.add-icon {
  fill: white;
  width: 100%;
  height: 100%;
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
</style>
