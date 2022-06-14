<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style scoped>
.card {
  background: #2a2a2a;
  border: 1px solid #2a2a2a;
  box-shadow: 0 0 0.5rem #2a2a2a;
  border-radius: 0.5rem;
  padding: 1rem 0.5rem;
  border-top: 4px solid #ea5414;
  border-bottom: 4px solid #ea5414;
}
</style>
