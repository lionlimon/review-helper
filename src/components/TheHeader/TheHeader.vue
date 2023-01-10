<template>
  <header class="header">
    <div class="header__left-panel">
      <h1 class="header__title">
        &lt;!&gt;
      </h1>

      <nav class="header__nav">
        <ul class="header__menu">
          <li class="header__menu-item">
            <RouterLink
              to="/"
              class="header__menu-link"
            >
              Ошибки
            </RouterLink>
          </li>

          <li class="header__menu-item">
            <RouterLink
              to="/checklist"
              class="header__menu-link"
            >
              Чек-лист
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>

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
import { debounce } from 'lodash';
import useProblemStore from '@/store/problem';

const store = useProblemStore();
const closeWindow = window.close;
const searchText = ref(store.search);
const searchIsVisible = ref(!!store.search);
const inputModifiers = computed(() => ({ 'header__search-input--active': searchIsVisible.value }));

const setSearchDebounced = debounce(() => store.setSearch(searchText.value), 300);

const toggleSearch = () => {
  searchIsVisible.value = !searchIsVisible.value;
};

watch(searchText, setSearchDebounced);
</script>

<style scoped lang="scss" src="./TheHeader.scss"></style>
