import {createRouter, createWebHistory} from 'vue-router'
import Login from '../views/LogIn.vue'
import Reservacion from '../views/ReservationPage.vue'


const routes = [
    {
        path: '/login', 
        name: 'login', 
        component: Login
    },
    {
        path: '/reservacion', 
        name: 'reservacion',
        component: Reservacion,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router