import { createApp } from 'vue'
import router from './router/router.js'
import MainPage from './components/MainPage.vue';

createApp(MainPage).use(router).mount('#app')