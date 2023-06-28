import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Loading from 'vue-loading-overlay';
import AOS from 'aos'
import BackToTop from 'vue-backtotop';

import 'vue-loading-overlay/dist/css/index.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import 'aos/dist/aos.css'
import './css/style.css';

library.add([
    faGithub, faLinkedin, faInstagram, faArrowUp
]);

AOS.init();

createApp(App)
.use(BackToTop)
.component('font-awesome-icon', FontAwesomeIcon)
.component('loading', Loading)
.mount('#app');


