import index from './pages/index.vue';
import details from './pages/details.vue';
import orderList from './pages/orderList.vue';
import product0 from './pages/details/product0.vue';
import product1 from './pages/details/product1.vue';
import product2 from './pages/details/product2.vue';
import product3 from './pages/details/product3.vue';

const routers = [
    {
        path: '/',
        meta: {
            title: 'index'
        },
        component: index
    },
    {
        path: '/orderList',
        meta: {
            title: 'orderList'
        },
        component: orderList
    },
    {
        path: '/details',
        meta: {
            title: 'details'
        },
        component: details,
        redirect:'/details/product0',
        children:[
            {
                path: 'product0',
                meta: {
                    title: 'product0'
                },
                component: product0
            },
            {
                path: 'product1',
                meta: {
                    title: 'product1'
                },
                component: product1
            },
            {
                path: 'product2',
                meta: {
                    title: 'product2'
                },
                component: product2
            },
            {
                path: 'product3',
                meta: {
                    title: 'product3'
                },
                component: product3
            }
        ]
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