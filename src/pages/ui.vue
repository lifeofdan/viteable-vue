<template>
  <div>
    <xButton>
      <template #leftIcon>
        <CheckIcon class="h-5 w-5" />        
      </template>
      Button
      <template #rightIcon>
        <CheckIcon class="h-5 w-5" />        
      </template>
    </xButton><br />
    <xInput label="label">
      <template #leftIcon>
        <CheckIcon class="h-5 w-5" />        
      </template>
      <template #rightIcon>
        <CheckIcon class="h-5 w-5 mr-2" />        
      </template>
    </xInput><br />
  </div>
</template>

<script setup lang="ts">
import xButton from '../components/headless/buttons/xbutton.vue';
import xInput from '../components/headless/inputs/xinput.vue';
import { CheckIcon } from "@heroicons/vue/solid"
</script>

<style scoped>

</style>