import BaseApi from '@/api/BaseApi';
import { ProblemItem } from './types';

export type GetDatabaseParams = {
  tags?: string[],
  title?: string,
};

class Problem extends BaseApi {
  public static getProblems(options?: GetDatabaseParams) {
    const params: Record<string, string> = {};

    if (options?.tags) options.tags.forEach((tag, i) => params[`tags[${i}]`] = tag);

    if (options?.title) params.title = options.title;

    return this.http<ProblemItem[]>(
      'problems',
      params,
    );
  }
}

export default Problem;
