import { createApp } from 'vue';
import { createHead } from '@vueuse/head';

import '~/main.css';

import App from '~/app.vue';
import router from '~/router';
import createPinia from '~/stores';

const app = createApp(App);
const head = createHead();
const pinia = createPinia();

app.use(router);
app.use(head);
app.use(pinia);

app.mount('#vue-root');
