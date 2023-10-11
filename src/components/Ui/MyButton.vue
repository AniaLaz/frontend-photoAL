<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style scoped>
.btn {
  cursor: pointer;
  font-family: "Playfair Display", serif;
  padding: 10px 15px;
  color: #ffff;
    background-color: teal;
  border: 1px solid teal;
  border-radius: 50px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
.btn:hover {  background: none;

  color: black;
}
</style>
