<template>
  <div class="card-list">
    <CardBox
      v-for="problem in store.problems"
      :key="problem.id"
      class="card-list__item"
      :title="problem.title"
    >
      <div class="card-list__item-tags">
        <LabelBox
          v-for="tag in problem.tags"
          :key="tag"
          @click="store.setTag(tag)"
        >
          {{ tag }}
        </LabelBox>
      </div>
      {{ problem.text }}
    </CardBox>
  </div>
</template>

<script setup lang="ts">
import CardBox from '@/components/CardBox';
import LabelBox from '@/components/LabelBox';
import useProblemStore from '@/store/problem';

const store = useProblemStore();
</script>

<style scoped lang="scss" src="./CardList.scss"></style>
