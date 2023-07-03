<template>
  <button
    @click="handleClick"
    class="lessons-item"
    :class="{
      'lessons-item__disabled': isDisabled,
      'lessons-item__active': isActive
    }"
  >
    {{ title }}
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useLessonsStore } from '../stores/lessons.js';

const store = useLessonsStore();
const props = defineProps<{
  title: string;
  id: number;
}>();
const isDisabled = computed(() => !store.opened.includes(props.id));
const isActive = computed(() => props.id === store.active);

const handleClick = () => {
  if (!isDisabled.value) {
    store.active = props.id;
  }
};
</script>

<style lang="scss" scoped>
.lessons-item {
  @apply text-center text-white bg-gray p-3 text-lg cursor-pointer w-full;
  &__disabled {
    @apply pointer-events-none select-none opacity-50;
  }
  &__active {
    @apply bg-additional;
  }
}
</style>
