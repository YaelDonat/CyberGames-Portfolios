import { createStore } from "vuex";

const store = createStore({
    state: {
        user: {
            data: { name: 'Yael' },
            token:null,
        },
        portfolioY:[
            {id:1 , title:'Budokan', done:true, description: '', mainPicture : '../src/assets/images/logo.png', poste: 'Développeur Fullstack', link:'http://budokanthiais.fr/', images:['./src/assets/images/logo.png','./src/assets/images/logo.png']},
            {id:2 , title:'BedBoat', done:true, description: '', mainPicture : '../src/assets/images/logo.png', poste: 'Développeur Backend', link:'https://bedboat.fr/', images:['','']},
            {id:3 , title:'RPG C#', done:true, description: '', mainPicture : '../src/assets/images/logo.png',  poste: 'Développeur', link:'https://github.com/Axel-A78/RPGCGUI', images:['','']},
            {id:4 , title:'Portfolio', done:false, description: '', mainPicture : '../src/assets/images/logo.png', poste: 'Développeur Fullstack', link:'#', images:['','']},
        ],
    },
    getters: {},
    actions: {},
    mutations: {},
    modules: {},
});
export default store;