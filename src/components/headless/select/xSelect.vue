<template>
  <div>
    <label :style="`text-align: left; ${labelStyles}`">
      {{ label }}
      <div style="display: flex">
        <select v-model="selected">
          <option 
            v-for="option in options" 
            :value="option"
          >
            {{option.label}}
          </option>
        </select>
      </div>
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

export type SelectOption = { value: string, label: string }
interface Props {
  label?: string,
  labelStyles?: string,
  options?: SelectOption[]
}

interface Emits {
  (e: 'select', value: SelectOption): void
}

withDefaults(defineProps<Props>(), {
  label: '',
  labelStyles: '',
  options: () => [
    { value: 'option1', label: 'option1' },
    { value: 'option2', label: 'option2' }
  ]
})

const emit = defineEmits<Emits>()
const selected = ref({ value: '', label: '' })

watch(() => selected.value, () => emitOption())
const emitOption = () => {
  emit('select', selected.value)
}

</script>

<style scoped>

</style>