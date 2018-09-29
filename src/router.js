import index from './views/index.vue';
import grid from './views/grid.vue';
import button from './views/button.vue';
import selectOptions from './views/selectOptions.vue';
import icon from './views/icon';
import card from './views/card';
import modal from './views/modal';
import notice from './views/notice';
import drawer from './views/drawer';
import tree from './views/tree';
import time from './views/time';
import childrenA from './views/childrenA';
import parent from './views/parent';
import websitedemo from './views/websitedemo';
const routers = [
    {
        path: '/',
        meta: {
            title: 'index'
        },
        component: index
    },
    {
        path: '/grid',
        meta: {
            title: 'grid'
        },
        component: grid
    },
    {
        path: '/button',
        meta: {
            title: 'button'
        },
        component: button
    },
    {
        path: '/icon',
        meta: {
            title: 'icon'
        },
        component: icon
    },
    {
        path: '/card',
        meta: {
            title: 'card'
        },
        component: card
    },
    {
        path: '/selectOptions',
        meta: {
            title: 'selectOptions'
        },
        component: selectOptions
    },
    {
        path: '/modal',
        meta: {
            title: 'modal'
        },
        component: modal
    },
    {
        path: '/notice',
        meta: {
            title: 'notice'
        },
        component: notice
    },
    {
        path: '/drawer',
        meta: {
            title: 'drawer'
        },
        component: drawer
    },
    {
        path: '/tree',
        meta: {
            title: 'tree'
        },
        component: tree
    },
    {
        path: '/time',
        meta: {
            title: 'time'
        },
        component: time
    },
    {
        path: '/childrenA',
        meta: {
            title: 'childrenA'
        },
        component: childrenA
    },
    {
        path: '/websitedemo',
        meta: {
            title: 'websitedemo'
        },
        component: websitedemo
    },
    {
        path: '/parent',
        meta: {
            title: 'parent'
        },
        component: parent
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