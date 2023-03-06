import { createApp } from 'vue';
import App from './App.vue';
import './css/style.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

library.add([
    faGithub, faLinkedin, faInstagram
]);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.component('loading', Loading)
.mount('#app');


