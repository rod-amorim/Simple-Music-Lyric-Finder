import { createRouter, createWebHashHistory } from 'vue-router';
import MusicFormComponent from '../components/MusicFormComponent.vue';
import LyricViewComponent from '../components/LyricViewComponent.vue';

const routes = [
    { path: '/',  redirect: '/musicForm' },
    { path: '/musicForm', component: MusicFormComponent },
    { path: '/lyricView', component: LyricViewComponent }
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
  });

export default router