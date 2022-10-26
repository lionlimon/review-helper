import { defineStore } from 'pinia';
import actions from './actions';
import getters from './getters';
import state from './state';

const store = defineStore('notion', {
  state,
  getters,
  actions,
});

export default store;
