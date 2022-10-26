<template>
  <main class="home-page">
    <TheHeader />
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheHeader from '@/components/TheHeader';
</script>
