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
import { computed, onUpdated, ref } from 'vue';
import type { Ref } from 'vue';
import { useLessonsStore } from '../stores/lessons.js';
import { useTimerStore } from '../stores/timer.js';

const store = useLessonsStore();
const timerStore = useTimerStore();
const videoPlayer: Ref<HTMLVideoElement | null> = ref(null);
const videoUrl = computed(() => store.activeLesson && store.activeLesson.video_url);
const timer = ref();

onUpdated(() => {
  if (!store.activeLesson) return;
  const { video_time } = store.activeLesson;
  timerStore.set(video_time);
});

const unlockEvent = () => {
  const nextId = store.active + 1;
  if (store.list[nextId] && !store.opened.includes(nextId)) {
    store.opened.push(nextId);
    store.showNotification = true;
  }
};

const startPlay = () => {
  if (timerStore.remainingTime > 0) {
    timerStore.start();
    timer.value = setTimeout(unlockEvent, timerStore.remainingTime);
  }
};

const pauseVideo = () => {
  if (timerStore.remainingTime > 0) {
    timerStore.pause();
    clearTimeout(timer.value);
  }
};
</script>

<style lang="scss" scoped>
.lesson-player {
  @apply flex-1;
}
</style>
