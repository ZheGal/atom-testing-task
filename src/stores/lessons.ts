import axios from 'axios';
import { ref, computed, watch } from 'vue';
import type { Ref, ComputedRef } from 'vue';
import { defineStore } from 'pinia';

interface Lesson {
  title: string;
  subtitle: string;
  video_url: string;
  video_time: number;
  description: string;
}

export const useLessonsStore = defineStore('lessons', () => {
  const list: Ref<Lesson[]> = ref([]);
  const active: Ref<number> = ref(0);
  const opened: Ref<number[]> = ref([0]);
  const showNotification: Ref<boolean> = ref(false);

  watch(active, () => {
    showNotification.value = false;
  });

  const activeLesson: ComputedRef<Lesson | 0> = computed(
    () => list.value.length && list.value[active.value]
  );

  async function getLessons() {
    const { data } = await axios.get('/api.json');
    list.value = data;
  }

  function goToNext() {
    active.value = active.value + 1;
  }

  function init() {
    getLessons();
  }

  return {
    init,
    list,
    active,
    opened,
    goToNext,
    activeLesson,
    showNotification
  };
});
