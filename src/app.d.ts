import { hasSlot } from '@/helpers/hasSlot';

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $hasSlot: typeof hasSlot;
  }
}
