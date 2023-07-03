<script setup lang="ts">
import LessonsList from './LessonsList.vue';
import LessonsVideo from './LessonsVideo.vue';
import LessonsFooter from './LessonsFooter.vue';
</script>

<template>
  <div class="lessons-player">
    <div class="lessons-player__top">
      <lessons-video />
      <lessons-list />
    </div>
    <lessons-footer />
  </div>
</template>

<style lang="scss" scoped>
.lessons-player {
  @apply flex flex-col w-full gap-5;

  &__top {
    @apply flex w-full justify-between gap-5;
  }
}
</style>
