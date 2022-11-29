import { useStorage } from '@vueuse/core';
import { Problem } from '@/api/Problem/types';
import { ProblemState } from './types';

const state = (): ProblemState => ({
  _problems: useStorage('_problems', []) as unknown as Problem[],
  _tags: useStorage('_tags', []) as unknown as string[],
  _getProblemsIsLoading: false,
  _search: useStorage('_search', '') as unknown as string,
});

export default state;
