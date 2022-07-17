<template>
  <div>
    <button :class="btnStyle" type="button">
      <slot name="leftIcon" />
      <span class="mx-1">{{ label }}</span>
      <slot name="rightIcon" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  label?: string,
  outline?: boolean,
  color?: string,
}
const props = withDefaults(defineProps<Props>(), {
  label: '',
  outline: false,
  color: 'blue-600'
})

const btnStyle = computed(() => {
  const baseStyle = "flex items-center px-2 py-2 font-medium tracking-wide capitalize transition-colors duration-200 transform  rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
  const solidStyle = `${baseStyle} bg-${props.color} text-white`;
  const outlineStyle = `${baseStyle} border-${props.color} text-${props.color} hover:text-white`;
  return props.outline ? outlineStyle : solidStyle
})

</script>

<style scoped>
</style>