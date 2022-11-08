import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        name: 'home',
        path: '/',
        component: () => import('../pages/home.vue'),
    },
    {
        name: 'create',
        path: '/create',
        component: () => import('../pages/create-and-edit.vue'),
    },
    {
        name: 'details',
        path: '/details/:id',
        component: () => import('../pages/details.vue'),
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: () => import('../pages/create-and-edit.vue'),
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
