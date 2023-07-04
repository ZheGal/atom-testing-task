import { ref, computed, watch } from 'vue';
import type { Ref, ComputedRef } from 'vue';
import { defineStore } from 'pinia';

export const useTimerStore = defineStore('timer', () => {
  const remainingTime: Ref<number> = ref(0);
  const started: Ref<any> = ref(null);

  function set(sec) {
    remainingTime.value = sec * 1000;
  }

  function start() {
    started.value = Date.now();
  }

  function pause() {
    const paused = Date.now();
    const result = remainingTime.value - (paused - started.value);
    remainingTime.value = result > 0 ? result : 0;
  }

  return { remainingTime, set, start, pause };
});
