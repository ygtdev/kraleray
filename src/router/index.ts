import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Ana Sayfa',
            component: () => import('@/views/HomeView.vue')
        },
        {
            path: '/news',
            name: 'Haberler',
            component: () => import('@/views/NewsView.vue')
        },
        {
            path: '/timer',
            name: 'Zamanlayıcılar',
            component: () => import('@/views/TimerView.vue')
        },
        {
            path: '/team',
            name: 'Ekibimiz',
            component: () => import('@/views/TeamView.vue')
        },
        {
            path: '/test',
            name: 'Sen Hangisisin?',
            component: () => import('@/views/TestView.vue')
        }
    ]
})

// router.beforeEach((to, from, next) => {
//     if (to.name) document.title = `Kral Eray | ${to.name}`
//     next()
// })

export default router