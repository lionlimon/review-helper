import { GetDatabaseResponse, Problem } from '@/api/Notion/types';

export type NotionState = {
  _problems: Problem[],
  _tags: string[],
  _getProblemsIsLoading: boolean,
  _search: string,
}

export type FilteredProblem = {
  id: string,
  title: string,
  tags: string[],
  text: string,
}

export type GetProblemOptions = { tags?: string[], title?: string };

export type NotionGettersValues = {
  problems: FilteredProblem[],
  tags: string[],
  getProblemsIsLoading: boolean,
  search: string,
  currentFilters: GetProblemOptions
}

export type ActionsThis<A> = NotionState & NotionGettersValues & A;

export type NotionActions = {
  getProblems(options?: GetProblemOptions):
    Promise<GetDatabaseResponse>,
  setTag(tag: string): Promise<void>,
  unsetTag(tag: string): Promise<void>,
  setSearch(search: string): Promise<void>,
}
