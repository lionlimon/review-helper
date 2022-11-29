<template>
  <div class="home">
    <Transition
      mode="out-in"
      name="fade"
    >
      <StripeLoader
        v-if="showStripeLoading"
        class="home__loader"
      />
    </Transition>
    <LabelList
      v-if="store.tags?.length"
      class="home__labels"
    />

    <Transition
      mode="out-in"
      name="fade"
    >
      <CardList
        v-if="hasItems"
        class="home__cards"
      />
    </Transition>

    <Transition
      mode="out-in"
      name="fade"
    >
      <SkeletonList v-if="showSkeleton" />
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import CardList from '@/pages/HomePage/components/CardList';
import { computed, onMounted } from 'vue';
import LabelList from '@/pages/HomePage/components/LabelList';
import useProblemStore from '@/store/problem';
import SkeletonList from './components/SkeletonList';
import StripeLoader from './components/StripeLoader';

const store = useProblemStore();

const showSkeleton = computed(() => (
  store.getProblemsIsLoading && !store.problems.length
));

const showStripeLoading = computed(() => (store.getProblemsIsLoading));

const hasItems = computed(() => !!store.problems.length);

onMounted(async () => {
  await store.getProblems();
});
</script>

<style scoped lang="scss" src="./HomePage.scss"></style>
