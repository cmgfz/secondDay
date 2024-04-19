import Page from '../views/Page.vue'
const routers = [
    {
        path: '/page',
        meta: {
            title: '商品列表'
        },
        component: Page
    },
    // {
    //     path: '/product/:id',
    //     meta: {
    //         title: '商品详情'
    //     },
    //     component: Product
    // },
    // {
    //     path: '/cart',
    //     meta: {
    //         title: '购物车'
    //     },
    //     component: Cart
    // },
    {
        path: "/:catchAll(.*)",
        redirect: '/page'
    }
];
export default routers;