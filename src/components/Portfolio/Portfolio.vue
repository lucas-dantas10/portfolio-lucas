<template>
    <section class="section" id="portfolio">
        <div class="container text-center">
            <p class="secundary-text">O que eu fiz ?</p>
            <h1 class="primary-text mb-5">Portfólio</h1>

            <div class="row portfolio-project">
                <div class="portfolio-container col-md-4" v-for="project in projects">
                    <a :href="project.href" target="_blank" class="portfolio-card">
                        <img :src="project.img" class="portfolio-card-img" :alt="project.title" />
                        <span class="portfolio-card-overlay" target="_blank">
                            <span class="portfolio-card-caption">
                                <h5>{{ project.title }}</h5>
                                <p class="font-weight-normal">{{ project.subtitle }}</p>
                            </span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import image1 from '../../assets/imgs/alura.png';
import image2 from '../../assets/imgs/hzc-alura.png';
import image3 from '../../assets/imgs/notification.png';
import Modal from '../Modal/Modal.vue';
export default {
    data() {
        return {
            projects: [
                {
                    img: image1,
                    title: 'Front End',
                    subtitle: 'Categoria: VueJs, vue-router',
                    href: '#'
                },
                {
                    img: image2,
                    title: "Front End",
                    subtitle: "Categoria: Html5, Css3, Javascript",
                    href: "https://lucas-dantas10.github.io/hzc.github.io/"
                },
                {
                    img: image3,
                    title: "Full Stack",
                    subtitle: "Categoria: Laravel 5.8, VueJs, Vuex, Notification, Echo, Web Socket",
                    href: "#"
                }
            ]
        }
    },

    components: {
        Modal
    }
}
</script>

<style scoped>
#portfolio {
    height: 100%;
    margin-bottom: 10rem;
}

/* .portfolio-container {
  height: 40vh;
  margin
} */

.portfolio-card {
    display: block;
    position: relative;
    overflow: hidden;
    height: 100%;
}

.portfolio-card img {
    width: 600px;
    max-height: 100%;
    height: 100%;
}

.portfolio-card:hover .portfolio-card-overlay {
    opacity: 1;
    visibility: visible;
    width: 100%;
    height: 100%;
    border-radius: 0;
    background-color: white;
}

.portfolio-card-overlay {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    text-align: center;
    visibility: hidden;
    opacity: 0;
    transition: .3s all;
    width: 0;
    height: 0;
    border-radius: 50%;
    overflow: hidden;
}

.portfolio-card-caption {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
}

@media only screen and (max-width: 600px) {
    .portfolio-container {
        height: 25vh;
    }

    .portfolio-project {
        gap: 1.5rem;
    }
}
</style>
