import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Portfolios from "../views/Portfolios.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
const routes = [
    {
        path: '/',
        redirect:'/',
        component: DefaultLayout,
        children:[
            { path: '/', name: 'Home', component: Home },
            { path: '/register', name: 'Register', component: Register},
            { path: '/login', name:'Login', component: Login},
            { path: '/portfolios', name:'Portfolios', component: Portfolios},
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;