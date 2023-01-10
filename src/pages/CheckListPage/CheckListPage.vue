<template>
  <div class="check-list">
    <Transition
      mode="out-in"
      name="fade"
    >
      <StripeLoader
        v-if="checkListStore.getCheckListIsLoading || checkListStore.getTagsIsLoading"
      />
    </Transition>

    <CheckListPageGroup />

    <div class="check-list__actions">
      <MainButton
        @click="onSummaryButtonClick"
      >
        <Transition
          mode="out-in"
          name="fade"
        >
          <SvgIcon
            v-if="!copied"
            name="copy"
            width="18"
            height="18"
          />
          <SvgIcon
            v-else
            name="check-thin"
            width="18"
            height="18"
          />
        </Transition>
        Итог для студента
      </MainButton>

      <MainButton @click="checkListStore.clearCheckListRecord">
        Сбросить список
      </MainButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import useCheckListStore from '@/store/checklist';
import StripeLoader from '@/components/StripeLoader/StripeLoader.vue';
import MainButton from '@/components/MainButton';
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue';
import { useClipboard } from '@vueuse/core';
import CheckListPageGroup from './components/CheckListPageGroup';

const { copy, copied } = useClipboard();
const checkListStore = useCheckListStore();

const onSummaryButtonClick = () => {
  copy(checkListStore.summary);
};
</script>

<style scoped lang="scss" src="./CheckListPage.scss"></style>
