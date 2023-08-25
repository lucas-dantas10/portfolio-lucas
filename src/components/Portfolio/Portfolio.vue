<template>
    <section class="section" id="portfolio">
        <div class="container text-center" data-aos="fade-up" data-aos-duration="1000">
            <p class="secundary-text">O que eu fiz ?</p>
            <h1 class="primary-text mb-5">Portfólio</h1>

            <div class="portfolio-container d-flex align-items-center justify-content-between gap-4">
                <div class="card d-flex" v-for="project in projects">
                    <img :src="project.img" class="card-img-top" :alt="project.title">
                    <div class="card-body">
                        <h5 class="card-title">{{ project.title }}</h5>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" @click.prevent="dataProject(project)">
                            Veja Mais
                        </button>
                    </div>
                </div>
            </div>

        </div>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{{ project.title }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p><span class="primary-text">Estado Do Projeto:</span> {{ project.state }}</p>
                        <p><span class="primary-text">Categoria:</span> {{ project.category }}</p>
                        <p><span class="primary-text">Projeto:</span> {{ project.description }}</p>
                        <p><span class="primary-text">Link:</span> <a :href="project.href" class="link-info" target="_blank">link do projeto</a></p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import alura from '../../assets/imgs/alura.png';
import hzc from '../../assets/imgs/hzc-alura.png';
import notification from '../../assets/imgs/notification.png';
import todolist from '../../assets/imgs/todolist.png';
import Modal from '../Modal/Modal.vue';
export default {
    components: {
        Modal
    },

    data() {
        return {
            projects: [
                {
                    img: alura,
                    title: 'Alura Track',
                    state: 'Concluído',
                    category: 'VueJs com Typescript, vue-router, vuex',
                    description: 'Projeto feito em acompanhamento do curso de VueJs na Alura. O projeto do Alura Track consiste em um site para criar tarefas e utilizar o conceito de pomodoro, guardando os dados como estados salvos na aplicação em vez de banco de dados.',
                    href: 'https://github.com/lucas-dantas10/Alura-Tracker'
                },
                {
                    img: hzc,
                    title: "HZC",
                    state: 'Concluído',
                    category: "Html5, Css3, Javascript",
                    description: 'Projeto feito em acompanhamento do curso de VueJs na Alura. O projeto consiste em um site estático para aprimorar conceitos como o flex, grid e o responsivo.',
                    href: "https://lucas-dantas10.github.io/hzc.github.io/"
                },
                {
                    img: notification,
                    title: "Posts",
                    state: 'Concluído',
                    category: "Laravel 5.8, VueJs, Vuex, Notification, Echo, Web Socket",
                    description: 'O projeto consiste em um site de posts, onde qualquer pessoa logada consegue criar varios posts e outros usuários conseguem comentar nos posts, e quando algum usuário comenta no seu post, chega uma notificação no site, um alerta avisando quem comentou, qual post foi comentado, e envia um email para o receptor do comentário .',
                    href: "https://github.com/lucas-dantas10/laravel-notification"
                },
                {
                    img: todolist,
                    title: "TodoList",
                    state: 'Em Desenvolvimento || Mobile First',
                    category: "Laravel 10, VueJs, Vuex, tailwind, Docker",
                    description: 'Projeto pessoal que consiste em um site que pode adicionar tarefas, adicionar categorias e o dia para serem realizadas, terá área de perfil, de cronômetro, calendário para consultar as tarefas. Este projeto é Full Stack e estou utilizando o Laravel com Laravel Sail para construir a API deste site, o VueJs para o Front End e MySql pro banco de dados.',
                    href: "https://todolistapp01.netlify.app/"
                },
            ],
            project: {}
        }
    },

    methods: {
        dataProject(project) {
            this.project = project;
        }
    }
}
</script>

<style scoped>
#portfolio {
    height: 100%;
    margin-bottom: 10rem;
}

.portfolio-container .card {
    width: 25%;
}

.portfolio-container .card img {
    max-height: 28rem;
    height: 10rem;
}

@media only screen and (max-width: 600px) {
    .portfolio-container {
        flex-direction: column;
        gap: 2rem;
    }

    .portfolio-container .card {
        width: 100%;
    }
}
</style>
