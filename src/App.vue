<template>
    <div class="main">
        <div class="container">
            <NavBar></NavBar>
        </div>

        <div class="container">
            <Header></Header>
        </div>

        <div class="container" data-aos="fade-up" data-aos-duration="1000">
            <About></About>
        </div>

        <div class="container" data-aos="fade-up" data-aos-duration="1000">
            <Service></Service>
        </div>

        <div class="container" data-aos="fade-up" data-aos-duration="1000">
            <Portfolio></Portfolio>
        </div>

        <div class="container" data-aos="fade-up" data-aos-duration="1000">
            <Contact></Contact>
        </div>

        <div class="container">
            <Footer></Footer>
            <BtnGoTop></BtnGoTop>
        </div>

    </div>
</template>

<script>
import NavBar from './components/NavBar/NavBar.vue';
import Header from './components/Header/Header.vue';
import About from './components/About/About.vue';
import Service from './components/Service/Service.vue';
import Portfolio from './components/Portfolio/Portfolio.vue';
import Contact from './components/Contact/Contact.vue';
import Footer from './components/Footer/Footer.vue';
import BtnGoTop from './components/Button/BtnGoTop.vue';

export default {
    components: {
    NavBar,
    Header,
    About,
    Service,
    Portfolio,
    Contact,
    Footer,
    BtnGoTop
}
}
</script>
