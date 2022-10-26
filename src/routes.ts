import {
  createRouter, createWebHashHistory, RouteRecordRaw,
} from 'vue-router';

import HomePage from '@/pages/HomePage';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomePage,
    name: 'home',
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
