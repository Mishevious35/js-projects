<template>
  <button
    :class="{
      '--flat': flat,
      '--neutral': color === 'neutral',
      '--negative': color === 'negative',
      '--positive': color === 'positive',
      '--not-active': notActive,
    }"
    :disabled="disable"
    @click="$emit('click', $event)"
  >
    <Icon v-if="icon" :icon="icon" />

    <slot>
      {{ label }}
    </slot>
  </button>
</template>

<script>
import Icon from "@/components/shared/Icon.vue";

export default {
  name: "Button",
  components: {
    Icon,
  },
  props: {
    icon: {
      type: String,
      required: false,
      default: "",
    },
    flat: {
      type: Boolean,
      required: false,
      default: false,
    },
    color: {
      type: String,
      required: false,
    },
    disable: {
      type: Boolean,
      required: false,
      default: false,
    },
    label: {
      type: String,
      required: false,
      default: "",
    },
    notActive: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style scoped>
button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ea5414;
  color: #fff;
  cursor: pointer;
  transition: 0.2s;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
}

button:hover {
  filter: brightness(130%);
  box-shadow: 0 0 0.5rem black;
  transform: scale(1.1);
}

button:disabled {
  background-color: #cdcdd3;
  border-color: #cdcdd3;
}
.--negative {
  background-color: #fb343d;
  border: #fb343d;
}
.--positive {
  background-color: #3ec536;
  border: #3ec536;
}
.--neutral {
  background-color: #cdcdd3;
  color: #3f3d56;
  border: #cdcdd3;
}
.--not-active {
  background-color: #cdcdd3;
  border: #cdcdd3;
}
</style>
