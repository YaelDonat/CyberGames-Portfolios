import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Portfolios from "../views/Portfolios.vue";
import Axel from "../views/Axel.vue";
import Eric from "../views/Eric.vue";
import Anojan from "../views/Anojan.vue";
import Yael from "../views/Yael.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import PortfolioLayout from '../components/PortfolioLayout.vue';
const routes = [
    {
        path: '/',
        redirect:'/',
        component: DefaultLayout,
        children:[
            { path: '/', name: 'Home', component: Home },
            { path: '/register', name: 'Register', component: Register},
            { path: '/login', name:'Login', component: Login},
            { path: '/portfolios', name: 'Portfolios', component: Portfolios},
            {path: '/portfolios/axel',name: 'Axel',component: Axel},
            {path: '/portfolios/Eric',name: 'Eric',component: Eric},
            {path: '/portfolios/Yael',name: 'Yael',component: Yael},
            {path: '/portfolios/Anojan',name: 'Anojan',component: Anojan},
        ],
    },

    {
        path: '/portfolios',
        redirect:'/portfolios',
        component: PortfolioLayout,
        children:[
            {path: '/portfolios/axel',name: 'Axel',component: Axel},
            {path: '/portfolios/Eric',name: 'Eric',component: Eric},
            {path: '/portfolios/Yael',name: 'Yael',component: Yael},
            {path: '/portfolios/Anojan',name: 'Anojan',component: Anojan},
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;