<template>
  <heder class="navbar">
    <img
      class="logo"
      src="../imeges/logoAL.png"
      width="60"
      alt="Ania Lazarenko"
      @click="$router.push('/')"
    />
    <div class="navbar__btns">
      <a class="navbar__btn" @click="$router.push('/post')">Пости</a>
      <a class="navbar__btn left" @click="$router.push('/about')">Про мене</a>
      <a class="navbar__btn left" @click="$router.push('/shares')">Акції</a>
    </div>
  </heder>
</template>

<script>
export default {};
</script>

<style>
.navbar {
  top: 30px;
  left: 30px;
  padding: 30px;
  height: 50px;
  display: flex;
  align-items: center;
}
.navbar__btns {
  margin-left: auto;
}
.navbar__btn {
  position: relative;
  cursor: pointer;
  font-size: 14px;
  padding: 5px 10px;
}
@media screen and (min-width: 768px) {
  .navbar__btn {
    font-size: 18px;
  }
}

.navbar__btn::before {
  content: "";
  display: block;
  height: 5px;
  background: teal;
  position: absolute;
  top: -0.5em;
  left: 0;
  right: 0;
  transform: scale(0,1);
   transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
  .navbar__btn:hover::before {
  transform: scale(1,1);
  }
.left {
  margin-left: 5px;
}
@media screen and (min-width: 768px) {
  .left {
    margin-left: 20px;
  }
}
.logo {
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
.logo:hover {
  transform: translate(2px, 5%);
}
</style>

<!-- background: linear-gradient(135deg,rgb(2, 87, 23), orange 60%, cyan); -->
