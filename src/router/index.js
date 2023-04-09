import { createRouter, createWebHistory } from "vue-router"
import Index from  '@/views/Index.vue'
import MathT1 from  '@/views/MathT1.vue'
import MathP1 from '@/views/MathP1.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path : '/',
            name : 'Index',
            component : Index
        },
        {
            path : '/math/theory1',
            name : 'MathT1',
            component : MathT1
        },
        {
            path : '/math/practice1',
            name : 'MathP1',
            component : MathP1
        }
    ]
})

export default router