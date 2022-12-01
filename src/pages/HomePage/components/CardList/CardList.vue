<template>
  <div class="card-list">
    <CardListItem
      v-for="problem in store.problems"
      :key="problem.id"
      class="card-list__item"
      :title="problem.title"
      :tags="problem.tags"
      :text="problem.text"
      @on-tag-click="tag => store.setTag(tag)"
    />
  </div>
</template>

<script setup lang="ts">
import useProblemStore from '@/store/problem';
import { useClipboard } from '@vueuse/core';
import CardListItem from '../CardListItem';

const onCopyClick = (text: string) => {
  useClipboard({ source: text });
};

const store = useProblemStore();
</script>

<style scoped lang="scss" src="./CardList.scss"></style>
