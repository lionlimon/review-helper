<template>
  <header class="header">
    <h1 class="header__title">
      &lt;!&gt; Частые ошибки
    </h1>

    <div class="header__actions">
      <form class="header__search">
        <input
          v-model="searchText"
          :class="['header__search-input', inputModifiers]"
          type="text"
          name="search"
        >
      </form>

      <button
        class="header__action"
        @click="toggleSearch"
      >
        <SvgIcon
          name="search"
          width="18"
          height="18"
        />
      </button>

      <button
        class="header__action"
        @click="closeWindow()"
      >
        <SvgIcon
          name="close"
          width="22"
          height="22"
        />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon';
import { computed, ref, watch } from 'vue';
import useNotionStore from '@/store/notion';
import { debounce } from 'lodash';

const closeWindow = window.close;
const searchText = ref('');
const searchIsVisible = ref(false);
const inputModifiers = computed(() => ({ 'header__search-input--active': searchIsVisible.value }));
const store = useNotionStore();
const setSearchDebounced = debounce(() => store.setSearch(searchText.value), 300);

const toggleSearch = () => {
  searchIsVisible.value = !searchIsVisible.value;
};

watch(searchText, setSearchDebounced);
</script>

<style scoped lang="scss" src="./TheHeader.scss"></style>
