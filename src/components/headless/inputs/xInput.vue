<template>
  <div>
    <label :class="labelClasses" :style="`text-align: left; ${labelStyles}`">
      {{ label }}
      <div style="display: flex">
        <slot name="leftIcon" />
          <input :class="inputClasses" :style="inputStyles" :type="type" />
        <slot name="rightIcon" />
      </div> 
    </label>
  </div>
</template>

<script setup lang="ts">
interface Props {
  type?: string,
  label?: string,
  labelClasses?: string,
  labelStyles?: string,
  inputClasses?: string,
  inputStyles?: string,
}
withDefaults(defineProps<Props>(), {
  inputClasses: '',
  type: 'text',
  label: '',
  labelClasses: '',
  labelStyles: ''
})
</script>

<style scoped>

</style>