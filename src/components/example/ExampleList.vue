<template>
  <Card class="example-list">
    <div
      v-for="item in formattedData"
      :key="item.label"
      class="example-list__item"
    >
      <div class="example-list-item__info">
        <div class="example-list-item-info__label">{{ item.label }}</div>
        <div class="example-list-item-info__date">
          created at {{ toDate(item.createdAt) }}
        </div>
      </div>
      <div class="example-list-item__actions"><Button label="Action" /></div>
    </div>
  </Card>
</template>

<script>
import Card from "@/components/shared/Card.vue";
import { toDate } from "@/utils/date.js";
import Button from "@/components/shared/Button.vue";
import { compareLabel } from "@/utils/string.js";

export default {
  components: {
    Card,
    Button,
  },
  data() {
    return {
      toDate,
      data: [
        {
          label: "Item 1",
          createdAt: new Date(),
        },
        {
          label: "Item 2",
          createdAt: new Date(),
        },
        {
          label: "Item 3",
          createdAt: new Date(),
        },
        {
          label: "Item 7",
          createdAt: new Date(),
        },
        {
          label: "Item 4",
          createdAt: new Date(),
        },
        {
          label: "Item 5",
          createdAt: new Date(),
        },
        {
          label: "Item 6",
          createdAt: new Date(),
        },
      ],
    };
  },
  computed: {
    formattedData() {
      return [...this.data].sort(compareLabel);
    },
  },
};
</script>

<style scoped>
.example-list {
  overflow: auto;
}

.example-list__item {
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #5a5a5a;
}

.example-list-item__info {
  display: flex;
  align-items: center;
}

.example-list-item-info__label {
  padding-right: 12px;
}
.example-list-item-info__date {
  color: greenyellow;
  padding-right: 12px;
}
.example-list-item__actions {
  justify-self: end;
}
</style>
