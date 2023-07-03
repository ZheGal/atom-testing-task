<template>
  <section class="lessons-header">
    <h1>
      Як заробляти <span>від $100</span> на день на налаштуванні рекламних кампаній
      Facebook+Instagram
    </h1>
    <p>
      <span>Епізод {{ activeLesson }}.</span> {{ lessonTitle }}
    </p>
  </section>
</template>

<style lang="scss" scoped>
.lessons-header {
  @apply text-center flex flex-col gap-[20px];

  h1 {
    @apply font-black text-3xl max-w-[760px] m-auto;
    span {
      @apply text-additional;
    }
  }

  p {
    @apply text-xl font-medium;
    span {
      @apply text-additional;
    }
  }
}
</style>

<script setup lang="ts">
import { computed } from 'vue';
import { useLessonsStore } from '../stores/lessons.js';

const store = useLessonsStore();
const activeLesson = computed(() => store.active + 1);
const lessonTitle = computed(() => (store.activeLesson && store.activeLesson.title) || null);
</script>
