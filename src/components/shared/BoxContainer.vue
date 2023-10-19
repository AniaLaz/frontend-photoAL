<template>
  <div class="container">
    <slot>Default value</slot>
  </div>
</template>

<script>
export default {
  name: "BoxContainer",
};
</script>

<style scoped>
.container {
  max-width: 1440px;
  margin: 0 auto;
}

@media screen and (min-width: 768px){
  .container {
  max-width: 786px;
  margin: 0 auto;
}
}

@media screen and (min-width: 1440px){
  .container {
  max-width: 1440px;
  margin: 0 auto;
}
}
</style>
