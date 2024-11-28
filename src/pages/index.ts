import type { RouteRecordRaw } from 'vue-router';
import { defineAsyncComponent } from 'vue';

const EmptyLayout = defineAsyncComponent(() => import('@/layouts/EmptyLayout.vue'));

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('./home.vue'),
    meta: {
      layout: EmptyLayout
    }
  },
  {
    path: '/doctors',
    name: 'doctors',
    component: () => import('./doctors.vue'),
    meta: {
      layout: EmptyLayout
    }
  },
  {
    path: '/nurses',
    name: 'nurses',
    component: () => import('./nurses.vue'),
    meta: {
      layout: EmptyLayout
    }
  }
]