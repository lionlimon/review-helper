<template>
  <div class="check-list-page-group">
    <select
      v-model="selectedSprint"
      class="check-list-page-group__select"
    >
      <option
        v-for="sprint in checkListStore.tags"
        :key="sprint"
        :value="sprint"
        :selected="checkListStore.selectedSprint === sprint"
      >
        {{ sprint }}
      </option>
    </select>

    <CardBox>
      <ul class="check-list-page-group__list">
        <li
          v-for="check in checkListStore.checkList"
          :key="check.id"
          class="check-list-page-group__item"
        >
          <TripleCheck
            :value="checkListStore.getCheckType(check.id)"
            @on-change-state="(state) => onChangeCheckState(state, check.id)"
          >
            {{ check.title }}
          </TripleCheck>
        </li>
      </ul>
    </CardBox>
  </div>
</template>

<script setup lang="ts">
import CardBox from '@/components/CardBox/CardBox.vue';
import TripleCheck from '@/components/TripleCheck';
import { CheckState } from '@/components/TripleCheck/types';
import useCheckListStore from '@/store/checklist';
import { onMounted, ref, watch } from 'vue';

const checkListStore = useCheckListStore();
const selectedSprint = ref(checkListStore.selectedSprint ?? checkListStore.tags?.[0] ?? 'Спринт 1');
const onChangeCheckState = (state: CheckState, id: string) => {
  checkListStore.changeChecksRecord(id, state);
};

onMounted(() => {
  checkListStore.getTags();
  checkListStore.getCheckList({ tag: selectedSprint.value });
});

watch(selectedSprint, () => {
  checkListStore.setSelectedSprint(selectedSprint.value);
  checkListStore.getCheckList({ tag: selectedSprint.value });
});
</script>

<style scoped lang="scss" src="./CheckListPageGroup.scss"></style>
