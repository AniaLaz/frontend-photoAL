<template>
  <div class="doing">
    <ul class="doing__list list">
      <li class="doing__item">
        <img
          class="doing__img"
          src="../imeges/children1.jpg"
          alt="дитина"
          width="371"
        />
        <p class="doing__img__title">
          <span class="doing__title__span">Дитяча фотографія</span>
        </p>
      </li>
      <li class="doing__item">
        <img
          class="doing__img"
          src="../imeges/femily.jpg"
          alt="сім'я"
          width="371"
        />
        <p class="doing__img__title">
          <span class="doing__title__span">Сімейна зйомка</span>
        </p>
      </li>
      <li class="doing__item">
        <img
          class="doing__img"
          src="../imeges/love-story.jpg"
          alt="закохані"
          width="371"
        />
        <p class="doing__img__title" lang="en">
          <span class="doing__title__span">love story</span>
        </p>
      </li>
      <li class="doing__item">
        <img
          class="doing__img"
          src="../imeges/clas.jpg"
          alt="однокласники"
          width="371"
        />
        <p class="doing__img__title">
          <span class="doing__title__span">Шкільна фотосесія</span>
        </p>
      </li>
      <li class="doing__item">
        <img
          class="doing__img"
          src="../imeges/christening.jpg"
          alt="хрещення дитини"
          width="371"
        />
        <p class="doing__img__title">
          <span class="doing__title__span">Хрестини</span>
        </p>
      </li>
      <li class="doing__item">
        <img
          class="doing__img"
          src="../imeges/albom.jpg"
          alt="фото-альбоми"
          width="371"
        />
        <p class="doing__img__title">
          <span class="doing__title__span">Фотоальбоми</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
}

.list {
  list-style: none;
}

@media screen and (min-width: 768px) {
  .doing__list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
}

.doing__img {
  width: 100%;
}

.doing__item {
  position: relative;
}

@media screen and (min-width: 768px) {
  .doing__item {
    position: relative;
    width: calc(100% / 3 - 13.5px);

  }
}
@media screen and (min-width: 1200px) {
  .doing__item {
    display: block;
    position: relative;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
}

.doing__img__title {
  position: absolute;
  bottom: -16px;
  display: flex;
  text-align: left;
  align-items: center;
  width: calc(100% - 56px);
  border: 0;
  color: white;
  background: rgba(60, 149, 143, 0.8);
  height: 64px;
  padding: 34px 0 34px 0;
  padding-left: 57px;
}
.doing__title__span {
  font-family: "Raleway", sans-serif;
  font-size: 48px;
  width: 300px;
}
</style>
