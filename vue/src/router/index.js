import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Portfolios from "../views/Portfolios.vue";
import Axel from "../views/Axel.vue";
import Eric from "../views/Eric.vue";
import Anojan from "../views/Anojan.vue";
import Yael from "../views/Yael.vue";
import CommentsShow from "../views/CommentsShow.vue";
import Contact from "../views/Contact.vue";
import Comments from "../views/Comments.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import PortfolioLayout from '../components/PortfolioLayout.vue';
import AuthLayout from '../components/AuthLayout.vue';
import store from "../store";
const routes = [
    {
        path: '/',
        redirect:'/home',
        component: DefaultLayout,
        meta:{requireAuth:true},
        children:[
            {path: '/home', name: 'Home', component: Home },
            {path: '/portfolios', name: 'Portfolios', component: Portfolios},
            {path: '/comments', name : 'Comments', component : Comments},
            {path: '/comments/create', name:'CommentsCreate', component : CommentsShow},
            {path: '/comments/:id', name:'CommentsShow', component : CommentsShow},
            {path: '/contact', name:'Contact', component : Contact},
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

    {
        path: '/auth',
        redirect: '/login',
        name: 'Auth',
        component: AuthLayout,
        meta: { isGuest : true },
        children: [
            { path: '/register', name: 'Register', component: Register},
            { path: '/login', name:'Login', component: Login},
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth && !store.state.user.token) {
        next({ name: 'Login' });
    }
    else if(store.state.user.token && (to.meta.isGuest)){
        next({name : 'Home'});
    }
    else {
        next();
    }
});

export default router;