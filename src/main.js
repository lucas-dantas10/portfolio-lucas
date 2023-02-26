import { createApp } from 'vue';
import App from './App.vue';
import './css/style.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add([
    faFacebook, faTwitter, faInstagram
]);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app');


