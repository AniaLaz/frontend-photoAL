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
  font-weight: bold;
  padding: 18px 50px;
  color: #ffff;
  background-color: rgba(12, 123, 117, 1);
  border: 1px solid rgba(12, 123, 117, 1);
  border-radius: 50px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
.btn:hover {
  background: none;

  color: black;
}
</style>
