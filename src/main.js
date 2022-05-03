import { createApp } from 'vue';

import App from './App.vue';
import routes from './routers/routers';

createApp(App).use(routes).mount('#app');
