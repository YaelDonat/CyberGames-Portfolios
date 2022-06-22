import axios from 'axios';
import { createStore } from "vuex";
import axiosClient from '../axios';

const store = createStore({
    state: {
        user: {
            data: {id:sessionStorage.getItem('id') ,name : sessionStorage.getItem('name'), email : sessionStorage.getItem('email')},
            token:sessionStorage.getItem("TOKEN"),
        },
        currentComment: {
            loading: false,
            data:{}
        },
        notification: {
            show: false,
            type: null,
            message: null,
        },
        comments:{
            loading:false,
            data:[],
            links:[],
        },
        ratings:{
            data:[],
        },
        currentRating:{
            data:{}
        },
        portfolioY:[
            {
                id: 1, show: 'show1', title: 'Budokan', done: true, description: 'Refonte complète du site pour une association sportive. Effectué en équipe de 6. 2 Front, 2 Back et 2 Full-stack. Premier stage fait, très formateur. On a appris Laravel en autodidacte, grâce aux documentations et aux vidéos de Laracast.',
                mainPicture: '../../public/images/portfolioY/budokan-Logo.webp', poste: 'Développeur Fullstack', link: 'http://budokanthiais.fr/', images: ['../../public/images/portfolioY/logo.webp', '../../public/images/portfolioY/logo.webp'], outils : ['Laravel','Bootstrap','OVH','MySQL'],duree : '2 mois'
            },
            {
                id: 2, show: 'show2', title: 'BedBoat', done: true, description: 'Pour ce stage ma mission était de faire la maintenance du site, ajouter de nouvelles fonctionnalitées. J\'ai mis en place la connexion par Google / Facebook, les envoies de messages automatiques(sur le site) et des mails aussi. La confirmation du mail, la réinitialisation du mot de passe, la compression des images, les contraintes des formulaires. J\'ai appris beacoup de ce stage et j\'ai renforcé mes connaissances en Symfony, javascript, github, css, linux, gestion de serveur distant en ssh. J\'ai aussi acquis des connaissances en SEO et pour le debugging. Ce stage a été très formateur pour moi je remercie grandement les deux créateurs de BedBoat pour cette expérience unique. Avoir été 2 mois en total "liberté"(seul développeur back de la startup) m\'a beacoup aidé à m\'améliorer, apprendre à gérer mon temps, mes missions, la pression',
                mainPicture: '../../public/images/portfolioY/logoBedboat.webp', poste: 'Développeur Backend', link: 'https://bedboat.fr/', images: ['../../public/images/portfolioY/unreadMsg.webp', '../../public/images/portfolioY/loginBedboat.webp','../../public/images/portfolioY/loginGoogleBedboat.webp'], outils : ['Symfony','Github','Javascript','VPS-Ubuntu','OVH','MySQL'],duree : '2 mois'
            },
            {
                id: 3, show: 'show3', title: 'RPG C#', done: true, description: "Projet effectué en binôme sur une durée de 5 jours, le but étant de donner le maximum sur une courte période. On à fait un jeu vidéo fonctionnel de type rogue-like en C#. Nous avons d'abord effectué le projet en console et ensuite nous l'avons adapté à l'interface graphique.",
                mainPicture: '../../public/images/portfolioY/Csharp_logo.webp', poste: 'Développeur', link: 'https://github.com/Axel-A78/RPGCGUI', images: ['../../public/images/portfolioY/rpgc1.webp','../../public/images/portfolioY/rpgc2.webp','../../public/images/portfolioY/rpgc3.webp','../../public/images/portfolioY/rpgc4.webp','../../public/images/portfolioY/rpgc5.webp',], outils : ['C#','VSCode','Github'],duree : '5 jours'
            },
            {
                id: 4, show: 'show4', title: 'Portfolio', done: false, description: 'cccc'
                , mainPicture: '../../public/images/portfolioY/logo.webp', poste: 'Développeur Fullstack', link: '#', images: ['', ''], outils : ['Vue3Js','Laravel','Tailwindcss','MySQL'],duree : ''
            },
        ],
        userEric: {
            data: { nameE: 'Eric'},
            token:null,
        },
        portfolioE:[
            {
                id: 1, show: 'show1', title: 'Budokan', done: true, description: 'Refonte complète du site pour une association sportive. Effectué en équipe de 6. 2 Front, 2 Back et 2 Full-stack. Premier stage fait, très formateur. On a appris Laravel en autodidacte, grâce aux documentations et aux vidéos de Laracast.',
                mainPicture: '../../public/images/portfolioY/budokan-Logo.webp', poste: 'Développeur Fullstack', link: 'http://budokanthiais.fr/', images: ['../../public/images/logo.png', '../../public/images/logo.png'], outils : ['Laravel','Bootstrap','OVH','MySQL'],duree : '2 mois'
            }
        ],
        gameImage:[
            {slug:'menu_principal',title :'Menu principal' ,name : '../../public/images/gamePics/mainMenuGame.webp'},
            {slug:'carte',title :'Carte' ,name : '../../public/images/gamePics/GameMap.webp'},
            {slug:'boutique',title :'Boutique' ,name : '../../public/images/gamePics/GameShop.webp'},
            {slug:'boutique',title :'Boutique' ,name : '../../public/images/gamePics/GameShop.webp'},
            {slug:'boutique',title :'Boutique' ,name : '../../public/images/gamePics/GameShop.webp'},
            {slug:'boutique',title :'Boutique' ,name : '../../public/images/gamePics/GameShop.webp'},
        ]
    },

    getters: {
        comments:state=>{
            return state.comments
        },
        ratings:state=>{
            return state.ratings;
        },
    },

    actions: {
        register({ commit }, user){
            return axiosClient.post('/register', user)
            .then(({ data }) => {
                commit('setUser', data.user);
                commit('setToken', data.user);
                return data;
            })
        },
        login({ commit }, user){
            return axiosClient.post('/login', user)
            .then(({ data }) => {
                commit('setUser', data.user);
                commit('setToken', data.token)
                return data;
            })
        },
        logout({ commit }){
            return axiosClient.post('/logout')
            .then(response => {
                commit('logout')
                return response;
            })
        },
        reset({commit},email){
            return axiosClient.post('/reset')
        },
        
        saveComment({commit},comment){
            let response;
            if(comment.id){
                response = axiosClient
                .put(`/comments/${comment.id}`,comment)
                .then((res)=>{
                    commit("setCurrentComment",res.data);
                    return res;
                });
            } else{
                response = axiosClient.post("/comments/",comment).then((res)=>{
                    commit('setCurrentComment', res.data)
                    return res;
                });
            }
            return response;
        },
        saveRating({commit},rating){
            let response;
            if(rating.user_id){
                response = axiosClient
                .put(`/ratings/${rating.user_id}`,rating)
                .then((res)=>{
                    commit("setCurrentRating",res.data);
                    return res;
                });
            } else{
                response = axiosClient.post("/ratings/",rating).then((res)=>{
                    commit('setCurrentRating', res.data)
                    return res;
                });
            }
            return response;
        },
        deleteComment({ dispatch }, id) {
            return axiosClient.delete(`/comments/${id}`).then((res) => {
            dispatch('getComments')
            return res;
            });
        },
        getComment({commit},id){
            commit("setCurrentCommentLoading", true);
            return axiosClient
            .get(`/comments/${id}`)
            .then((res)=>{
                commit("setCurrentComment", res.data);
                commit("setCurrentCommentLoading", false);
                return res;
            })
            .catch((err)=>{
                throw err;
            })
        },
        getComments({ commit }, {url = null} = {}) {
            commit('setCommentsLoading', true)
            url = url || "/comments";
            return axiosClient.get(url).then((res) => { 
                commit("setComments", res.data);
                commit('setCommentsLoading', false)
            return res;
            });
        },

        getRating({commit},id){
            return axiosClient
            .get(`/ratings/${id}`)
            .then((res)=>{
                commit("setCurrentRating", res.data);
                return res;
            })
            .catch((err)=>{
                throw err;
            })
        },

        getRatings({ commit }, {url = null} = {}) {
            url = url || "/ratings";
            return axiosClient.get(url).then((res) => { 
                commit("setRatings", res.data);
            return res;
            });
        },
    },

    mutations: {
        logout: (state) => {
            state.user.data = {};
            state.user.token = null;
            sessionStorage.removeItem('TOKEN');
            sessionStorage.removeItem('name');
            sessionStorage.removeItem('id');
            sessionStorage.removeItem('email');
        },
        setUser: (state, user) => {
            state.user.data = user
            sessionStorage.setItem('name', user.name);
            sessionStorage.setItem('id', user.id);
            sessionStorage.setItem('email', user.email);
        },
        setToken: (state, token) => {
            state.user.token = token;
            sessionStorage.setItem('TOKEN', token);
        },
        saveComment:(state,comment)=>{
            state.comments = [...state.comments, comment.data];
        },
        setCurrentComment:(state,comment)=>{
            state.currentComment.data = comment.data;
        },
        setComments: (state, comments) => {
            state.comments.links = comments.meta.links;
            state.comments.data = comments.data;
        },

        saveRating:(state,rating)=>{
            state.ratings = [...state.ratings, rating.data];
        },
        setCurrentRating:(state,rating)=>{
            state.currentRating.data = rating.data;
        },
        setRatings: (state, ratings) => {
            state.ratings.data = ratings.data;
        },
        
        notify: (state, {message, type}) => {
            state.notification.show = true;
            state.notification.type = type;
            state.notification.message = message;
            setTimeout(() => {
            state.notification.show = false;
            }, 5000)
        },
        setCurrentCommentLoading: (state, loading) => {
            state.currentComment.loading = loading;
        },
        setCommentsLoading: (state, loading) => {
            state.comments.loading = loading;
        },
    },

    modules: {},

});
export default store;
