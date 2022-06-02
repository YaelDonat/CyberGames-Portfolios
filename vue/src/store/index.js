import axios from 'axios';
import { createStore } from "vuex";
import axiosClient from '../axios';

/*const tmpComments = [
    {
        id: 1,
        user_id: 6,
        ratings_id: 1,
        content: "Test de commentaire pour notre magnifique jeu vidéo",
        title : "Titre de test" ,
        created_at: "2022-05-10 13:00",
        updated_at: "2022-05-10 13:00",
    },

    {
        id: 2,
        user_id: 6,
        ratings_id: 2,
        title : "Titre de test 2",
        content: "Test de commentaire pour notre magnifique jeu vidéo 2ème du nom",
        created_at: "2022-05-10 13:00",
        updated_at: "2022-05-10 13:00",
    },

     {
        id: 3,
        user_id: 6,
        ratings_id: 3,
        title : "Titre de test 3",
        content: "Test de commentaire pour notre magnifique jeu vidéo 3ème du nom",
        created_at: "2022-05-10 13:00",
        updated_at: "2022-05-10 13:00",
    },
];
*/
const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem("TOKEN"),
        },
        //comments: [...tmpComments],
        comments:[],
        portfolioY:[
            {
                id: 1, show: 'show1', title: 'Budokan', done: true, description: 'Refonte complète du site pour une association sportive. Effectué en équipe de 6. 2 Front, 2 Back et 2 Full-stack. Premier stage fait, très formateur. On a appris Laravel en autodidacte, grâce aux documentations et aux vidéos de Laracast.',
                mainPicture: '../src/assets/images/PortfolioY/budokan-Logo.png', poste: 'Développeur Fullstack', link: 'http://budokanthiais.fr/', images: ['../src/assets/images/logo.png', '../src/assets/images/logo.png'], outils : ['Laravel','Bootstrap','OVH','MySQL'],duree : '2 mois'
            },
            {
                id: 2, show: 'show2', title: 'BedBoat', done: true, description: 'Pour ce stage ma mission était de faire la maintenance du site, ajouter de nouvelles fonctionnalitées. J\'ai mis en place la connexion par Google / Facebook, les envoies de messages automatiques(sur le site) et des mails aussi. La confirmation du mail, la réinitialisation du mot de passe, la compression des images, les contraintes des formulaires. J\'ai appris beacoup de ce stage et j\'ai renforcé mes connaissances en Symfony, javascript, github, css, linux, gestion de serveur distant en ssh. J\'ai aussi acquis des connaissances en SEO et pour le debugging. Ce stage a été très formateur pour moi je remercie grandement les deux créateurs de BedBoat pour cette expérience unique. Avoir été 2 mois en total "liberté"(seul développeur back de la startup) m\'a beacoup aidé à m\'améliorer, apprendre à gérer mon temps, mes missions, la pression',
                mainPicture: '../src/assets/images/PortfolioY/logoBedboat.png', poste: 'Développeur Backend', link: 'https://bedboat.fr/', images: ['../src/assets/images/PortfolioY/unreadMsg.png', '../src/assets/images/PortfolioY/loginBedboat.png','../src/assets/images/PortfolioY/loginGoogleBedboat.png'], outils : ['Symfony','Github','Javascript','VPS-Ubuntu','OVH','MySQL'],duree : '2 mois'
            },
            {
                id: 3, show: 'show3', title: 'RPG C#', done: true, description: "Projet effectué en binôme sur une durée de 5 jours, le but étant de donner le maximum sur une courte période. On à fait un jeu vidéo fonctionnel de type rogue-like en C#. Nous avons d'abord effectué le projet en console et ensuite nous l'avons adapté à l'interface graphique.",
                mainPicture: '../src/assets/images/PortfolioY/Csharp_logo.png', poste: 'Développeur', link: 'https://github.com/Axel-A78/RPGCGUI', images: ['../src/assets/images/PortfolioY/rpgc1.jpg','../src/assets/images/PortfolioY/rpgc2.jpg','../src/assets/images/PortfolioY/rpgc3.jpg','../src/assets/images/PortfolioY/rpgc4.jpg','../src/assets/images/PortfolioY/rpgc5.jpg',], outils : ['C#','VSCode','Github'],duree : '5 jours'
            },
            {
                id: 4, show: 'show4', title: 'Portfolio', done: false, description: 'cccc'
                , mainPicture: '../src/assets/images/logo.png', poste: 'Développeur Fullstack', link: '#', images: ['', ''], outils : ['Vue3Js','Laravel','Tailwindcss','MySQL'],duree : ''
            },
        ],
        userEric: {
            data: { nameE: 'Eric'},
            token:null,
        },
        portfolioE:[
            {
                id: 1, show: 'show1', title: 'Budokan', done: true, description: 'Refonte complète du site pour une association sportive. Effectué en équipe de 6. 2 Front, 2 Back et 2 Full-stack. Premier stage fait, très formateur. On a appris Laravel en autodidacte, grâce aux documentations et aux vidéos de Laracast.',
                mainPicture: '../src/assets/images/PortfolioY/budokan-Logo.png', poste: 'Développeur Fullstack', link: 'http://budokanthiais.fr/', images: ['../src/assets/images/logo.png', '../src/assets/images/logo.png'], outils : ['Laravel','Bootstrap','OVH','MySQL'],duree : '2 mois'
            }
        ],
        gameImage:[
            {slug:'menu_principal',title :'Menu principal' ,name : '../src/assets/images/gamePics/mainMenuGame.png'},
            {slug:'carte',title :'Carte' ,name : '../src/assets/images/gamePics/GameMap.png'},
            {slug:'boutique',title :'Boutique' ,name : '../src/assets/images/gamePics/GameShop.png'},
            {slug:'boutique',title :'Boutique' ,name : '../src/assets/images/gamePics/GameShop.png'},
            {slug:'boutique',title :'Boutique' ,name : '../src/assets/images/gamePics/GameShop.png'},
            {slug:'boutique',title :'Boutique' ,name : '../src/assets/images/gamePics/GameShop.png'},
        ]
    },

    getters: {
        comments:state=>{
            return state.comments
        }
    },

    actions: {
        register({ commit }, user){
            return axiosClient.post('/register', user)
            .then(({ data }) => {
                commit('setUser', data);
                return data;
            })
        },
        login({ commit }, user){
            return axiosClient.post('/login', user)
            .then(({ data }) => {
                commit('setUser', data);
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
        
        saveComment({commit},comment){
            let response;
            if(comment.id){
                response = axiosClient
                .put(`/comments/${comment.id}`,comment)
                .then((res)=>{
                    commit("updateComment",res.data);
                    return res;
                });
            } else{
                response = axiosClient.post("/comments/",comment).then((res)=>{
                    return res;
                });
            }
            return response;
        },
    },

    mutations: {
        logout: (state) => {
            state.user.data = {};
            state.user.token = null;
            sessionStorage.clear();
        },
        setUser: (state, userData) => {
            state.user.token = userData.token;
            state.user.data = userData.data;
            sessionStorage.setItem('TOKEN', userData.token);
            sessionStorage.setItem('UserPseudo', userData.data);
        },
        FETCH_COMMENTS(state, comments) {
            return state.comments = comments
        },
        DELETE_COMMENT(state, comment) {
            let index = state.comments.findIndex(item => item.id === comment.id)
            state.comments.splice(index, 1)
        },
        saveComment:(state,comment)=>{
            state.comments = [...state.comments, comment.data];
        },
        updateComment:(state,comment)=>{
            state.comments = state.comments.map((c)=>{
                if(c.id == comment.data.id){
                    return comment.data;
                }
                return c;
            });
        },
    },

    modules: {},

});
export default store;
