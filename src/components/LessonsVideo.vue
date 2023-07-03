<template>
  <div class="lesson-player">
    <video
      v-if="videoUrl"
      :src="videoUrl"
      controls
      @play="startPlay"
      @pause="pauseVideo"
      ref="videoPlayer"
      class="w-full h-[350px] bg-black"
    ></video>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Ref } from 'vue';
import { useLessonsStore } from '../stores/lessons.js';

const store = useLessonsStore();
const videoPlayer: Ref<HTMLVideoElement | null> = ref(null);
const videoUrl = computed(() => store.activeLesson && store.activeLesson.video_url);
const timer = ref();

const unlockEvent = () => {
  const nextId = store.active + 1;
  if (store.list[nextId] && !store.opened.includes(nextId)) {
    store.opened.push(nextId);
    store.showNotification = true;
  }
};

const startPlay = () => {
  const time = store.activeLesson && store.activeLesson.video_time * 1000;
  const currentTime = (videoPlayer.value && videoPlayer.value.currentTime * 1000) || 0;
  timer.value = setTimeout(unlockEvent, time - currentTime);
};

const pauseVideo = () => {
  clearTimeout(timer.value);
};
</script>

<style lang="scss" scoped>
.lesson-player {
  @apply flex-1;
}
</style>
