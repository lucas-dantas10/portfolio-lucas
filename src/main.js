import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
    faGithub, faLinkedin, faInstagram, faVuejs, faLaravel, faDocker, faHtml5,
    faCss3Alt, faJs, faPhp
 } from '@fortawesome/free-brands-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Loading from 'vue-loading-overlay';
import AOS from 'aos'
import BackToTop from 'vue-backtotop';

import 'vue-loading-overlay/dist/css/index.css';
import 'aos/dist/aos.css'
import './css/style.css';
// import "bootstrap/dist/js/bootstrap.js";
// import "bootstrap/dist/css/bootstrap.css";

library.add([
    faGithub, faLinkedin, faInstagram, faArrowUp, faVuejs, faLaravel, faDocker, faHtml5,
    faCss3Alt, faJs, faPhp
]);

AOS.init();

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.component('loading', Loading)
.use(BackToTop)
.mount('#app');


