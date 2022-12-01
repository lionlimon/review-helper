<template>
  <button
    :class="['icon-button', iconModifiers]"
    :title="title"
  >
    <SvgIcon
      class="icon-button__icon"
      :name="iconName"
      width="17"
      height="17"
    />
  </button>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue';
import { computed } from 'vue';

const props = defineProps<{
  iconName: string,
  title?: string,
  success?: boolean,
  rotated?: boolean,
}>();

const iconModifiers = computed(() => ({
  'icon-button--success': !!props.success,
  'icon-button--rotated-icon': !!props.rotated,
}));
</script>

<style scoped lang="scss" src="./IconButton.scss"></style>
