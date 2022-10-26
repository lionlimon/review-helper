import { GetDatabaseResponse } from '@/api/Notion/types';

export type GetDatabaseParams = {
  tags?: string[],
  title?: string,
};

class Notion {
  private static url = 'http://0.0.0.0:8080/api/';

  private static async http<T>(url: string): Promise<T> {
    const response = await fetch(`${this.url}${url}`);
    return response.json();
  }

  public static getDatabase(options?: GetDatabaseParams) {
    const params: [string, string][] = [];

    if (options?.tags) options?.tags.forEach((tag) => params.push(['tags[]', tag]));

    if (options?.title) params.push(['title', options.title]);

    return this.http<GetDatabaseResponse>(
      `database${options ? `?${new URLSearchParams(params)}` : ''}`,
    );
  }
}

export default Notion;
