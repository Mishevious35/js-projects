<template>
  <div class="input-wrapper">
    <input
      :value="value"
      @input="$emit('input', $event.target.value)"
      v-on:keyup.enter="$emit('keyupEnter', $event)"
      v-bind="$attrs"
    />
    <div class="error" v-show="error !== ''">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    value: {
      type: String,
      default: "",
    },
    error: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.input-wrapper {
  margin-block-start: 1rem;
  margin-block-end: 1rem;
}

.error {
  color: #fb343d;
}

input {
  width: 100%;
  border: none;
  border-left: 8px solid #ea5414;
  padding: 8px;
  border-radius: 4px;
}
</style>
