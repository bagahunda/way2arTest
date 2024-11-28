import { createApp } from "vue";
import { router } from './providers';
import App from './index.vue';
import '../style.css';

const app = createApp(App);

export const Application = app.use(router)