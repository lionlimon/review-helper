<template>
  <div class="label-list">
    Выбранные тэги:
    <LabelBox
      v-for="tag in store.tags"
      :key="tag"
      @click="store.unsetTag(tag)"
    >
      {{ tag }}
      <SvgIcon
        width="14"
        height="14"
        name="close"
      />
    </LabelBox>
  </div>
</template>

<script setup lang="ts">
import LabelBox from '@/components/LabelBox';
import SvgIcon from '@/components/SvgIcon';
import useProblemStore from '@/store/problem';

const store = useProblemStore();
</script>

<style scoped lang="scss" src="./LabelList.scss"></style>
