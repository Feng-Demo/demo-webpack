const route = [
    {
        path: '/',
        name: 'index',
        meta: {
            title: '首页'
        },
        component: resolve => require(['../views/index.vue'],resolve)

    },
];
export default route;