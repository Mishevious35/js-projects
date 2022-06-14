<template>
  <Card class="display-values">
    <div
      v-for="value in sortedValues"
      :key="value.value"
      class="display-values__value"
    >
      [{{ value.value }}]
    </div>
  </Card>
</template>

<script>
import Card from "@/components/shared/Card.vue";
import { compare } from "@/utils/string.js";

export default {
  components: {
    Card,
  },
  props: {
    values: {
      type: Array,
      default: () => [],
    },
    filter: {
      type: String,
    },
  },
  computed: {
    sortedValues() {
      return [...this.values].sort((a, b) => compare(this.filter, a, b));
    },
  },
};
</script>

<style scoped>
.display-values__value {
  display: inline-block;
  padding: 4px;
}
</style>
