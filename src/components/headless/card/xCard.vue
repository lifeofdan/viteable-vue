<template>
  <div :class="cardClasses" :style="cardStyles">
    <div :class="cardHeaderClasses" :style="cardHeaderStyles">
      <slot name="card-header"/>
    </div>
    <div :class="cardBodyClasses" :style="cardBodyStyles">
      <slot />
    </div>
    <div :class="cardFooterClasses" :style="cardFooterStyles">
      <slot name="card-footer"/>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  cardClasses?: string,
  cardStyles?: string,
  cardHeaderClasses?: string,
  cardHeaderStyles?: string,
  cardBodyClasses?: string,
  cardBodyStyles?: string,
  cardFooterClasses?: string,
  cardFooterStyles?: string 
}
withDefaults(defineProps<Props>(), {
  cardClasses: '',
  cardStyles: '',
  cardHeaderClasses: '',
  cardHeaderStyles: '',
  cardBodyClasses: '',
  cardBodyStyles: '',
  cardFooterClasses: '',
  cardFooterStyles: ''
})
</script>

<style scoped>

</style>