import { CheckListItem } from '@/api/CheckList/types';

export type ItemCheckState = 'empty' | 'checked' | 'unchecked';

export type CheckListState = {
  _checkList: CheckListItem[],
  _tags: string[],
  _getCheckListIsLoading: boolean,
  _getTagsIsLoading: boolean,
  _checked: Record<string, CheckListItem & { state: ItemCheckState | undefined }>,
  _selectedSprint: null | string,
}

export type GetCheckListOptions = { tag: string };

export type CheckListGettersValues = {
  checkList: CheckListItem[],
  tags: string[],
  getCheckListsIsLoading: boolean,
}

export type ActionsThis<A> = CheckListState & CheckListGettersValues & A;

export type CheckListActions = {
  getCheckList(this: CheckListState, options?: GetCheckListOptions):
    Promise<CheckListItem[]>,

  getTags(this: CheckListState):
    Promise<string[]>,

  changeChecksRecord(this: CheckListState, id: string, isChecked: ItemCheckState): void,

  setSelectedSprint(this: CheckListState, sprint: string): void,

  clearCheckListRecord(this: CheckListState): void,
}
