import { createApp } from 'vue'
import store from './store'
import router from './router'
import './input.css'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, fab, far);

createApp(App)
    .component('fa', FontAwesomeIcon)
    .use(store)
    .use(router)
    .mount('#app')
