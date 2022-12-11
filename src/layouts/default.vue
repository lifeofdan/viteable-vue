<template>
  <div>
    default layout
    <RouterView />

    <button class="p-2 coolbg" @click="toggleDark()">
      <SunIcon v-if="isDark" class="ml-2 h-5 w-5 float-left" />
      <MoonIcon v-if="!isDark" class="ml-2 h-5 w-5 float-left" />
      <span class="mx-2">{{
          isDark ? "Toggle Light Mode" : "Toggle Dark Mode"
      }}</span>
    </button>

    <div class="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div class="flex items-center justify-center w-12 bg-emerald-500">
        <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
        </svg>
      </div>

      <div class="px-4 py-2 -mx-3">
        <div class="mx-3">
          <span class="font-semibold text-emerald-500 dark:text-emerald-400">Success</span>
          <p class="text-sm text-gray-600 dark:text-gray-200">
            Your account was registered!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { SunIcon, MoonIcon } from "@heroicons/vue/20/solid";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style scoped>
.coolbg {
  background: linear-gradient(to left top, rgb(187, 247, 208), rgb(74, 222, 128), rgb(126, 34, 206));
}
</style>
