import { App } from 'vue';
import { VueInstance } from '@vueuse/core';

/**
 * This helper checks for a component slot by slot name
 */
export function hasSlot(this: VueInstance, name = 'default') {
  return !!this.$slots[name];
}

export default {
  install(app: App) {
    app.config.globalProperties.$hasSlot = hasSlot;
  },
};
