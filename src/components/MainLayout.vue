<script setup lang="ts">
import MainHeader from './MainHeader.vue';
import LessonsHeader from './LessonsHeader.vue';
import LessonsContent from './LessonsContent.vue';
import LessonsNotification from './LessonsNotification.vue';
</script>

<template>
  <div class="layout">
    <main-header />
    <main>
      <lessons-header />
      <lessons-content />
      <lessons-notification />
    </main>
  </div>
</template>

<style lang="scss">
.layout {
  @apply font-default;
}

main {
  @apply container m-auto flex flex-col gap-5 relative;
}
</style>
