<template>
  <Card class="example-inputs-filters">
    <div class="example-inputs-filter__input-group">
      <div class="example-inputs-filter__input">
        <Input
          v-model="currentValue"
          placeholder="Type string"
          @keyupEnter="addValue"
        />
      </div>
      <div><Button label="Add" @click="addValue" /></div>
    </div>
    <div class="example-inputs-filter__filter-group">
      <Button
        class="example-inputs-filter__filter"
        v-for="filter in filters"
        :key="filter.label"
        :label="filter.label"
        :color="filter.value === currentFilter ? 'positive' : 'neutral'"
        @click="$emit('change-filter', filter.value)"
      />
    </div>
  </Card>
</template>

<script>
import Card from "@/components/shared/Card.vue";
import Input from "@/components/shared/Input.vue";
import Button from "@/components/shared/Button.vue";

export default {
  components: { Card, Input, Button },
  data() {
    return { currentValue: "" };
  },
  props: {
    currentFilter: {
      type: String,
    },
    filters: {
      type: Array,
      required: true,
    },
  },
  methods: {
    addValue() {
      this.$emit("add-value", this.currentValue);
      this.currentValue = "";
    },
  },
  computed: {},
};
</script>

<style scoped>
.example-inputs-filters {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.example-inputs-filter__input-group {
  display: flex;
  width: 100%;
  align-items: center;
}

.example-inputs-filter__input {
  flex: 1;
  padding-right: 12px;
}

.example-inputs-filter__filter-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.example-inputs-filter__filter {
  margin: 8px;
  font-size: 24px;
}
</style>
