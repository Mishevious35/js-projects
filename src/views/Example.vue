<template>
  <div class="example-dashboard">
    <ExampleList class="example-dashboard__item" />
    <ExampleInputsAndFilters
      :filters="filters"
      :current-filter="currentFilter"
      class="example-dashboard__item"
      @change-filter="changeFilter"
      @add-value="addValue"
    />
    <DisplayValues
      :filter="currentFilter"
      :values="valueList"
      class="example-dashboard__item"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import ExampleList from "@/components/example/ExampleList.vue";
import ExampleInputsAndFilters from "@/components/example/ExampleInputsAndFilters.vue";
import DisplayValues from "@/components/example/DisplayValues.vue";
const filters = [
  { label: "Filter by created date", value: "createdAt" },
  { label: "Filter by name a-Z", value: "value" },
];
export default {
  name: "ExampleDashboard",
  components: {
    ExampleList,
    ExampleInputsAndFilters,
    DisplayValues,
  },
  data() {
    return {
      filters,
      currentFilter: filters[0].value,
      valueList: [],
    };
  },
  methods: {
    changeFilter(filter) {
      this.currentFilter = filter;
    },
    isValueUniq(value) {
      return this.valueList.findIndex((v) => v.value === value) === -1;
    },
    addValue(value) {
      if (value && this.isValueUniq(value)) {
        this.valueList.push({ value, createdAt: new Date() });
      }
    },
  },
};
</script>

<style scoped>
.example-dashboard {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.example-dashboard__item {
  width: 40vw;
  height: 340px;
  margin: 1rem;
}
</style>
