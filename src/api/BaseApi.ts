import { Response } from './types';

export default class BaseApi {
  private static url = 'http://0.0.0.0:8080/api/';

  protected static async http<T>(
    url: string,
    params?: Record<string, string>,
  ): Promise<Response<T>> {
    const searchParams = params ? `?${new URLSearchParams(params).toString()}` : '';

    const response = await fetch(`${this.url}${url}${searchParams}`);
    return response.json();
  }
}
