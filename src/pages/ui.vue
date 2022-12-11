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
    <xSelect @select="onSelect" label="select" />
    <xCard>
      <template #card-header>Header</template>
      Body
      <template #card-footer>Footer</template>
    </xCard><br />
  </div>
</template>

<script setup lang="ts">
import xButton from '../components/headless/buttons/xButton.vue';
import xInput from '../components/headless/inputs/xInput.vue';
import xSelect, { SelectOption } from '../components/headless/select/xSelect.vue'
import xCard from '../components/headless/card/xCard.vue'
import { CheckIcon } from "@heroicons/vue/20/solid"

const onSelect = (e: SelectOption) => {
  console.log(e.value);
}
</script>

<style scoped>

</style>