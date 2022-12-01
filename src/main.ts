import { createApp } from 'vue';
import '@/styles/style.scss';
import hasSlot from '@/helpers/hasSlot';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './routes';
// eslint-disable-next-line import/no-unresolved
import 'virtual:svg-icons-register';

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(hasSlot);
app.use(pinia);
app.mount('#app');
