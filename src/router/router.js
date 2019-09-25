import Nav from '@/components/AppNav.vue'
export default  [
    {
        path: '/',
        name: 'Main',
        components: {
            default: () => import('@/views/home/HomePage'),
            nav: Nav,
        },
    },{
        path: '/dynamic-components',
        name: 'dynamic-components',
        component:() => import('@/views/components-in-depth/DynamicComponent'),
    }
]
