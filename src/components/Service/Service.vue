<template>
    <section class="section" id="service">
        <div class="container text-center">
            <p class="secundary-text">O que eu faço ?</p>
            <h1 class="primary-text mb-5">Serviço</h1>

            <div class="row d-flex justify-content-between align-items-center">
                <div class="col-md-6 col-lg-3" v-for="service in services">
                    <div class="service-card">
                        <div class="body">
                            <span class="material-symbols-outlined">
                                {{ service.icon }}
                            </span>
                            <h6 class="title">{{ service.title }}</h6>
                            <p class="subtitle">
                                {{ service.subtitle }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            services: [
                {
                    icon: "school",
                    title: "Graduação",
                    subtitle: "Cursando Sistemas de Informação na Estácio de Sá.",
                },
                {
                    icon: "construction",
                    title: "Habilidades FrontEnd",
                    subtitle: "HTML5, Css3, sass, bootstrap, VueJs, tailwind",
                },
                {
                    icon: "engineering",
                    title: "Habilidades BackEnd",
                    subtitle: "PHP, Laravel, MySql, SqlServer, Apache2, Linux, Docker, Python",
                },
                {
                    icon: "work_history",
                    title: "Experência Profissional",
                    subtitle: "Estagiário de desenvolvimento na Credit Cash, atualmente como Desenvolvedor Junior"
                }
            ],
        };
    },
};
</script>

<style scoped>
#service {
    height: 100%;
    margin-bottom: 10rem;
}

.row {
    margin-top: 4rem;
}

.service-card {
    position: relative;
    min-height: 230px;
    border: 1px solid var(--gray-600);
    overflow: hidden;
    border-radius: 3px;
}

.material-symbols-outlined {
    margin-top: 40px;
    width: 50px;
    margin-bottom: 25px;
    transition: all .3s;
    font-size: 40px;
}

.title {
    color: var(--violet);
    font-size: 20px;
}

.subtitle {
    color: var(--gray-600);

    position: absolute;
    bottom: -100%;
    opacity: 0;
    visibility: hidden;
    transition: all .3s;
}

.service-card:hover .body .material-symbols-outlined {
    margin-top: 5px;
    width: 45px;
    margin-bottom: 15px;
}

.service-card:hover .body .subtitle {
    bottom: 7px;
    opacity: 1;
    visibility: visible;
}


@media only screen and (max-width: 600px) {
    #service {
        margin-top: 15rem;
        height: 153vh;
    }
}
</style>
