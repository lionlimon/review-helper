import {
  createRouter, createWebHashHistory, RouteRecordRaw,
} from 'vue-router';

import HomePage from '@/pages/HomePage';
import CheckListPage from '@/pages/CheckListPage';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomePage,
    name: 'home',
  },

  {
    path: '/checklist',
    component: CheckListPage,
    name: 'checklist',
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
