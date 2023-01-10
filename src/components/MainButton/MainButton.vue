<template>
  <button
    :class="['button', modifiers]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue';
import { computed } from 'vue';

const props = defineProps<{
  accent?: boolean,
}>();

const modifiers = computed(() => ({
  'button--accent': props.accent,
}));
</script>

<style scoped lang="scss" src="./MainButton.scss"></style>
