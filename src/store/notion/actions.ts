import Notion from '@/api/Notion';
import { ActionsThis, GetProblemOptions, NotionActions } from './types';

const actions: NotionActions = {
  async getProblems(this: ActionsThis<NotionActions>, options?: GetProblemOptions) {
    try {
      this._getProblemsIsLoading = true;
      const result = await Notion.getDatabase({
        ...this.currentFilters,
        ...options ?? {},
      });
      this._problems = result.results;

      return result;
    } catch (e) {
      console.error(e);
      throw e;
    } finally {
      this._getProblemsIsLoading = false;
    }
  },

  async setTag(this: ActionsThis<NotionActions>, tag: string) {
    if (this._tags.includes(tag)) return;

    this._tags.push(tag);
    await this.getProblems(this.currentFilters);
  },

  async unsetTag(this: ActionsThis<NotionActions>, tag: string) {
    this._tags = this._tags.filter((tagItem) => tagItem !== tag);
    await this.getProblems(this.currentFilters);
  },

  async setSearch(this: ActionsThis<NotionActions>, search: string) {
    this._search = search;
    await this.getProblems(this.currentFilters);
  },
};

export default actions;
