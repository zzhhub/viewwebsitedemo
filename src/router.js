import index from './views/index.vue';

const routers = [
    {
        path: '/',
        meta: {
            title: 'index'
        },
        component: index
    },
    {
        path: '**',
        meta: {
            title: 'index'
        },
        redirect: '/index'
    },
]
export default routers;