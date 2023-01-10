import { GetCheckListOptions, CheckListState } from './types';

const getters = {
  checkList(state: CheckListState) {
    return state._checkList;
  },

  tags(state: CheckListState) {
    return state._tags;
  },

  getCheckListIsLoading(state: CheckListState) {
    return state._getCheckListIsLoading;
  },

  getTagsIsLoading(state: CheckListState) {
    return state._getTagsIsLoading;
  },

  getCheckType(state: CheckListState) {
    return (id: string) => state._checked[id]?.state ?? 'empty';
  },

  selectedSprint(state: CheckListState) {
    return state._selectedSprint;
  },

  summary(state: CheckListState) {
    const startString = 'Не выполнены следующие задания:\n\n';
    const uncheckedItems = Object.values(state._checked)
      .filter((item) => item.subTask)
      .sort((a, b) => {
        if (Number(a.subTask) > Number(b.subTask)) return 1;

        return -1;
      })
      .reduce((summaryText, item) => `${summaryText}${item.subTask ?? ''} ${item.explainText}\n`, startString);

    return uncheckedItems;
  },
};

export default getters;
