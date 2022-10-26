<template>
  <component
    :is="props.tag"
    class="label"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  tag?: string
}>(), {
  tag: 'button',
});
</script>

<style scoped lang="scss" src="./LabelBox.scss"></style>
