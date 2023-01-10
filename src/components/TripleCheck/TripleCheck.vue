<template>
  <label :class="['triple-check', modifiers]">
    <input
      class="triple-check__checkbox"
      type="checkbox"
      @change="onChange"
    >

    <div class="triple-check__styled">
      <SvgIcon
        v-if="checkBoxState === 'checked'"
        class="triple-check__icon"
        name="check"
        width="10"
        height="8"
      />

      <SvgIcon
        v-if="checkBoxState === 'unchecked'"
        class="triple-check__icon"
        name="line"
        width="10"
        height="2"
      />
    </div>

    <span
      v-if="$hasSlot()"
      class="triple-check__label"
    >
      <slot />
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue';
import { CheckState } from './types';

const props = defineProps<{
  value?: CheckState
}>();

const emit = defineEmits<{(e: 'onChangeState', state: CheckState): void }>();

const checkBoxState = ref<CheckState>(props.value ?? 'empty');
const onChange = (e: Event) => {
  switch (checkBoxState.value) {
    case 'empty':
      checkBoxState.value = 'checked';
      break;
    case 'checked':
      (e.target as HTMLInputElement)!.checked = false;
      checkBoxState.value = 'unchecked';
      break;
    case 'unchecked':
      checkBoxState.value = 'empty';
      break;
    default:
  }

  emit('onChangeState', checkBoxState.value);
};

const modifiers = computed(() => ({
  'triple-check--unchecked': checkBoxState.value === 'unchecked',
  'triple-check--checked': checkBoxState.value === 'checked',
}));

watch(() => props.value, () => {
  if (props.value) checkBoxState.value = props.value;
});
</script>

<style scoped lang="scss" src="./TripleCheck.scss"></style>
