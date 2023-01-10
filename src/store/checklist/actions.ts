import CheckList from '@/api/CheckList';
import { CheckListActions, ItemCheckState } from './types';

const actions: CheckListActions = {
  async getCheckList(options) {
    try {
      this._getCheckListIsLoading = true;
      const result = await CheckList.getCheckList(options?.tag);

      this._checkList = result.data;

      return result.data;
    } catch (e) {
      console.error(e);
      throw e;
    } finally {
      this._getCheckListIsLoading = false;
    }
  },

  async getTags() {
    try {
      this._getTagsIsLoading = true;
      const result = await CheckList.getTags();

      this._tags = result.data;

      if (!this._selectedSprint) this._selectedSprint = result.data[0] ?? null;

      return result.data;
    } catch (e) {
      console.error(e);
      throw e;
    } finally {
      this._getTagsIsLoading = false;
    }
  },

  changeChecksRecord(id, payload) {
    if (!this._checked[id]) { // элемент ранее не добавлялся в справочник
      const foundItem = this._checkList.find((item) => item.id === id);
      if (!foundItem) return;

      this._checked[id] = { ...foundItem, state: payload };
    } else {
      this._checked[id].state = payload;
    }
  },

  setSelectedSprint(sprint) {
    this._selectedSprint = sprint;
  },

  clearCheckListRecord() {
    this._checked = {};
  },
};

export default actions;
