import { createStore } from "vuex";

const store = createStore({
    state: {
        user: {
            data: { name: 'Yael' },
            token:null,
        },
        portfolioY:[
            {
                id: 1, show: 'show1', title: 'Budokan', done: true, description: 'Refonte complète du site pour une association sportive. Effectué en équipe de 6. 2 Front, 2 Back et 2 Full-stack. Premier stage fait, très formateur. On a appris Laravel en autodidacte',
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
    },
    getters: {},
    actions: {},
    mutations: {},
    modules: {},
});
export default store;