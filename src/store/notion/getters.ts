import { GetProblemOptions, NotionState } from './types';

const getters = {
  problems(state: NotionState) {
    return state._problems.map((problem) => ({
      title: problem.properties.title.title[0].text.content,
      id: problem.id,
      tags: problem.properties.Tags.multi_select.map((tag) => tag.name),
      text: problem.properties.text
        .rich_text.map((item) => item.plain_text).join(''),
    }));
  },

  tags(state: NotionState) {
    return state._tags;
  },

  getProblemsIsLoading(state: NotionState) {
    return state._getProblemsIsLoading;
  },

  search(state: NotionState) {
    return state._search;
  },

  currentFilters(state: NotionState) {
    const filters: GetProblemOptions = {};

    if (state._tags) filters.tags = [...state._tags];
    if (state._search) filters.title = state._search;

    return filters;
  },
};

export default getters;
