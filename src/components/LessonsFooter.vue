<template>
  <footer class="lessons-footer">
    <div>
      <h3>У цьому епізоді ви дізнаєтесь:</h3>
      <p>
        {{ lessonDescription }}
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.lessons-footer {
  @apply flex justify-between py-5;

  h3 {
    @apply text-additional text-2xl pb-4;
  }
}
</style>

<script lang="ts" setup>
import { computed } from 'vue';
import { useLessonsStore } from '../stores/lessons.js';

const store = useLessonsStore();
const lessonDescription = computed(() => store.activeLesson && store.activeLesson.description);
</script>
