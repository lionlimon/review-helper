<template>
  <CardBox
    class="card-list-item"
    :title="title"
  >
    <template #actions>
      <IconButton
        icon-name="copy"
        title="Копировать"
        :success="copied"
        @click="onCopyClick(text)"
      />

      <IconButton
        icon-name="arrow"
        title="Расскрыть/закрыть"
        :rotated="isOpen"
        @click="isOpen = !isOpen"
      />
    </template>

    <div class="card-list-item__tags">
      <LabelBox
        v-for="tag in tags"
        :key="tag"
        @click="$emit('on-tag-click', tag)"
      >
        {{ tag }}
      </LabelBox>
    </div>
    <div
      v-if="isOpen"
      class="card-list-item__text"
      v-html="text"
    />
  </CardBox>
</template>

<script setup lang="ts">
import CardBox from '@/components/CardBox';
import LabelBox from '@/components/LabelBox';
import IconButton from '@/components/IconButton';
import { useClipboard } from '@vueuse/core';
import { ref } from 'vue';

const { copy, copied } = useClipboard();
const isOpen = ref(false);

const onCopyClick = (text: string) => {
  copy(text);
};

defineProps<{
    tags: string[],
    title: string,
    text: string,
}>();

defineEmits(['on-tag-click']);
</script>

<style scoped lang="scss" src="./CardListItem.scss"></style>
