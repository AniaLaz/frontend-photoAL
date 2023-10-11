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
  max-width: 1200px;
  margin: 0 auto;
}
</style>
