<template>
  <div class="home">
    <LabelList
      v-if="store.tags?.length"
      class="home__labels"
    />

    <Transition
      mode="out-in"
      name="fade"
    >
      <CardList
        v-if="!store.getProblemsIsLoading"
        class="home__cards"
      />

      <SkeletonList v-else />
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import CardList from '@/pages/HomePage/components/CardList';
import useNotionStore from '@/store/notion';
import { onMounted } from 'vue';
import LabelList from '@/pages/HomePage/components/LabelList';
import SkeletonList from './components/SkeletonList';

const store = useNotionStore();

onMounted(async () => {
  await store.getProblems();
});
</script>

<style scoped lang="scss" src="./HomePage.scss"></style>
