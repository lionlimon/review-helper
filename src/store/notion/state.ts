import { useStorage } from '@vueuse/core';
import { Problem } from '@/api/Notion/types';
import { NotionState } from './types';

const state = (): NotionState => ({
  _problems: useStorage('_problems', []) as unknown as Problem[],
  _tags: useStorage('_tags', []) as unknown as string[],
  _getProblemsIsLoading: false,
  _search: useStorage('_search', '') as unknown as string,
});

export default state;
