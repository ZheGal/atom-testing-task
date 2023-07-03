<template>
  <div class="fixed bottom-0 w-full left-0" v-if="store.showNotification">
    <div class="border bg-white m-5 p-5 shadow-2xl">
      Ура! Відкрито доступ до наступного уроку!
      <button class="font-bold underline" @click="store.goToNext">Переглянути</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLessonsStore } from '../stores/lessons.js';
const store = useLessonsStore();
</script>
