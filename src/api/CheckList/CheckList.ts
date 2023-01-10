import BaseApi from '@/api/BaseApi';
import { CheckListItem } from './types';

class CheckList extends BaseApi {
  static async getCheckList(tag?: string) {
    const params = tag ? { tag } : undefined;

    return this.http<CheckListItem[]>('checklist', params);
  }

  static async getTags() {
    return this.http<string[]>('checklist/tags');
  }
}

export default CheckList;
