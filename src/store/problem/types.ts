import { GetDatabaseResponse, Problem } from '@/api/Problem/types';

export type ProblemState = {
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

export type ProblemGettersValues = {
  problems: FilteredProblem[],
  tags: string[],
  getProblemsIsLoading: boolean,
  search: string,
  currentFilters: GetProblemOptions
}

export type ActionsThis<A> = ProblemState & ProblemGettersValues & A;

export type ProblemActions = {
  getProblems(options?: GetProblemOptions):
    Promise<GetDatabaseResponse>,
  setTag(tag: string): Promise<void>,
  unsetTag(tag: string): Promise<void>,
  setSearch(search: string): Promise<void>,
}
