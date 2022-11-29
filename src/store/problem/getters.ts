import { GetProblemOptions, ProblemState } from './types';

const getters = {
  problems(state: ProblemState) {
    return state._problems;
  },

  tags(state: ProblemState) {
    return state._tags;
  },

  getProblemsIsLoading(state: ProblemState) {
    return state._getProblemsIsLoading;
  },

  search(state: ProblemState) {
    return state._search;
  },

  currentFilters(state: ProblemState) {
    const filters: GetProblemOptions = {};

    if (state._tags) filters.tags = [...state._tags];
    if (state._search) filters.title = state._search;

    return filters;
  },
};

export default getters;
