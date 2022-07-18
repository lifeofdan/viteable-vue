<template>
  <div>
    <button style="display: flex" type="button">
      <slot name="leftIcon" />
      <slot />
      <slot name="rightIcon" />
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label?: string,
}
withDefaults(defineProps<Props>(), {
  label: ''
})
</script>

<style scoped>

</style>