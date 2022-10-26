import { Problem } from '@/api/Notion/types';
import { NotionState } from './types';

const state = (): NotionState => ({
  _problems: [] as Problem[],
  _tags: [],
  _getProblemsIsLoading: false,
  _search: '',
});

export default state;
