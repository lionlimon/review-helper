import router from '@/routes/routes';

{
  // Сохранение последнего роута для удобства использования расширения
  let isFirstTransition = true;
  router.afterEach((to) => {
    if (!to.name) return;
    localStorage.setItem('lastRoute', to.name as string);
  });
  router.beforeEach((to, from, next) => {
    const lastRouteName = localStorage.getItem('lastRoute');

    if (lastRouteName && isFirstTransition) {
      next({ name: lastRouteName });
    } else {
      next();
    }

    isFirstTransition = false;
  });
}
