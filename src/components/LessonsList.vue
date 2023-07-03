<script setup lang="ts">
import LessonsItem from './LessonsItem.vue';
import { computed, onMounted } from 'vue';
import { useLessonsStore } from '../stores/lessons.js';

const store = useLessonsStore();
const lessons = computed(() => store.list);

onMounted(() => {
  store.init();
});
</script>

<template>
  <ul class="lessons-list">
    <li
      class="lessons-list__item"
      v-for="(lesson, index) in lessons"
      v-bind:key="`lesson_${index}`"
    >
      <lessons-item :title="lesson.title" :id="index" />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.lessons-list {
  @apply flex flex-col gap-3;
}
</style>
