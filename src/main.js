import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import AuthService from './services/AuthService';
import i18n from './i18n'; // dil çevirisi için i18n modülü

axios.defaults.baseURL = 'http://localhost:8086';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '@/assets/style.css';

const app = createApp(App);

// AuthService'i Vue uygulamanızın içinde kullanılabilir hale getirin
app.config.globalProperties.$auth = AuthService;

app.use(store).use(router).use(i18n).mount('#app'); // i18n modülünü kullanmak için use() fonksiyonunu ekleyin