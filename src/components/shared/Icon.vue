<template>
  <span class="material-icons">
    {{ icon }}
  </span>
</template>

<script>
export default {
  name: "Icon",
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>
