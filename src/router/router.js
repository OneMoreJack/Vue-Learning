import Nav from '@/components/AppNav.vue'
export default  [
    {
        path: '/',
        name: 'Main',
        components: {
            default: () => import('@/views/home/HomePage'),
            nav: Nav,
        },
        // children: [
        //     {
        //         path: 'home',
        //         name: 'home',
        //         alias: '/',
        //         component: () => import('@/views/home/HomePage') 
        //     }
        // ]
    },{
        path: '/basic',
        name: 'basic',
        alias: '/basic/dynamic-components',
        components: {
            default: () => import('@/views/basic/BasicPage'),
            nav: Nav,
        },
        children: [
            {
                path: 'dynamic-components',
                name: 'dynamic-components',
                component:() => import('@/views/basic/DynamicComponent'),
            }
        ]
    }
]
