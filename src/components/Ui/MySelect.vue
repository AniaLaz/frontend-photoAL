<template>
  <select :value="modelValue" @change="changeOption" class="selected">
    <option disabled value="">Виберіть зі списку</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.selected {
  padding: 10px 15px;
  background: none;
  color: black;
  border: 1px solid black;
  border-bottom-left-radius: 12px;
  border-top-right-radius: 12px;
}
</style>
