import { ProblemItem } from '@/api/Problem/types';
import { Response } from '@/api/Response';

export type GetDatabaseParams = {
  tags?: string[],
  title?: string,
};

class Problem {
  private static url = 'http://0.0.0.0:8080/api/';

  private static async http<T>(url: string): Promise<Response<T>> {
    const response = await fetch(`${this.url}${url}`);
    return response.json();
  }

  public static getProblems(options?: GetDatabaseParams) {
    const params: [string, string][] = [];

    if (options?.tags) options?.tags.forEach((tag) => params.push(['tags[]', tag]));

    if (options?.title) params.push(['title', options.title]);

    return this.http<ProblemItem[]>(
      `problems${options ? `?${new URLSearchParams(params)}` : ''}`,
    );
  }
}

export default Problem;
