import Problem from '@/api/Problem';
import { ActionsThis, GetProblemOptions, ProblemActions } from './types';

const actions: ProblemActions = {
  async getProblems(this: ActionsThis<ProblemActions>, options?: GetProblemOptions) {
    try {
      this._getProblemsIsLoading = true;
      const { data: result } = await Problem.getProblems({
        ...this.currentFilters,
        ...options ?? {},
      });
      this._problems = result;

      return result;
    } catch (e) {
      console.error(e);
      throw e;
    } finally {
      this._getProblemsIsLoading = false;
    }
  },

  async setTag(this: ActionsThis<ProblemActions>, tag: string) {
    if (this._tags.includes(tag)) return;

    this._tags.push(tag);
    await this.getProblems(this.currentFilters);
  },

  async unsetTag(this: ActionsThis<ProblemActions>, tag: string) {
    this._tags = this._tags.filter((tagItem) => tagItem !== tag);
    await this.getProblems(this.currentFilters);
  },

  async setSearch(this: ActionsThis<ProblemActions>, search: string) {
    this._search = search;
    await this.getProblems(this.currentFilters);
  },
};

export default actions;
