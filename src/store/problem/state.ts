import { useStorage } from '@vueuse/core';
import { ProblemItem } from '@/api/Problem/types';
import { ProblemState } from './types';

const state = (): ProblemState => ({
  _problems: useStorage('_problems', []) as unknown as ProblemItem[],
  _tags: useStorage('_tags', []) as unknown as string[],
  _getProblemsIsLoading: false,
  _search: useStorage('_search', '') as unknown as string,
});

export default state;
