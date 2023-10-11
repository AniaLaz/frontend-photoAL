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
        <p class="doing__img__title">Дитяча фотографія</p>
      </li>
      <li class="doing__item">
        <img
          class="doing__img"
          src="../imeges/femily.jpg"
          alt="сім'я"
          width="371"
        />
        <p class="doing__img__title">Сімейна зйомка</p>
      </li>
      <li class="doing__item">
        <img
          class="doing__img"
          src="../imeges/love-story.jpg"
          alt="закохані"
          width="371"
        />
        <p class="doing__img__title" lang="en">love story</p>
      </li>
      <li class="doing__item">
        <img
          class="doing__img"
          src="../imeges/clas.jpg"
          alt="однокласники"
          width="371"
        />
        <p class="doing__img__title">шкільна фотосесія</p>
      </li>
      <li class="doing__item">
        <img
          class="doing__img"
          src="../imeges/christening.jpg"
          alt="хрещення дитини"
          width="371"
        />
        <p class="doing__img__title">Хрестини</p>
      </li>
      <li class="doing__item">
        <img
          class="doing__img"
          src="../imeges/albom.jpg"
          alt="фото-альбоми"
          width="371"
        />
        <p class="doing__img__title">фото-альбоми</p>
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
    margin-top: 20px;
    flex-wrap: wrap;
    gap: 20px;
  }
}

@media screen and (min-width: 1200px) {
  .doing__list {
    gap: 30px;
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
    width: calc((100% - 40px) / 2);
  }
}
@media screen and (min-width: 1200px) {
  .doing__item {
    position: relative;
    width: calc((100% - 60px) / 3);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
}

.doing__item:hover {
  transform: translate(1px, 2%);
}

.doing__img__title {
  position: absolute;
  bottom: -11px;
  display: flex;
  font-style: normal;
  text-align: center;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 0;
  color: white;
  background: rgb(0, 128, 128, 0.3);

  font-weight: 700;
  font-size: 14px;
  height: 70px;
}
</style>
