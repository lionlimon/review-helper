<template>
  <div class="card">
    <header class="card__header">
      <h2 class="card__title">
        {{ props.title }}
      </h2>

      <div
        v-if="$hasSlot('actions')"
        class="card__actions"
      >
        <slot name="actions" />
      </div>
    </header>

    <div class="card__content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
}>();
</script>

<style scoped lang="scss" src="./CardBox.scss"></style>
