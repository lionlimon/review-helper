import { useStorage } from '@vueuse/core';
import { CheckListItem } from '@/api/CheckList/types';
import { CheckListState, ItemCheckState } from './types';

const state = (): CheckListState => ({
  _tags: useStorage('checkList._tags', []) as unknown as string[],
  _getCheckListIsLoading: false,
  _getTagsIsLoading: false,
  _checkList: useStorage('_checkList', []) as unknown as CheckListItem[],
  _checked: useStorage('_checked', {}) as unknown as Record<string, CheckListItem & { state: ItemCheckState | undefined }>,
  _selectedSprint: useStorage('_selectedSprint', null) as unknown as string | null,
});

export default state;
