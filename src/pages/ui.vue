<template>
  <div>
    <xButton label="Button" :outline="false">
      <template #leftIcon>
        <RefreshIcon class="h-5 w-5" />
      </template>
    </xButton>

  </div>
</template>

<script setup lang="ts">
import xButton from '../components/ui/x-button.vue';
import { RefreshIcon } from '@heroicons/vue/solid'

</script>

<style scoped>
</style>