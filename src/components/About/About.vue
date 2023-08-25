<template>
    <section class="section pt-0" id="about">
        <div class="container text-center">
            <div class="about d-flex" id="about-me">
                <div class="about-img-holder">
                    <img src="../../assets/imgs/lucas.png" class="about-img mt-5" alt="Imagem do Lucas em Avatar">
                </div>
                <div class="about-caption">
                    <p class="section-subtitle">Quem Eu Sou ?</p>
                    <h2 class="section-title mb-5">Sobre Mim</h2>
                    <p>
                        Desenvolvedor Full Stack com mais de 1 ano de experiência na área de desenvolvimento de software,
                        tendo como principais
                        linguagens de programação no FrontEnd o <span class="emphases">Vuejs e pro BackEnd o Laravel e 
                            python, para o banco de dados o
                            MySql e SqlServer, e conhecimentos em
                            Apache e Docker.</span> Minha primeira oportunidade foi na Credit Cash como estagiário de
                        desenvolvimento, acompanhando
                        e desenvolvendo sistemas em equipe e aprendendo muito, fui efetivado para analista de
                        desenvolvimento junior,
                        atuando em sistemas mais robustos, aprendendo mais sobre arquiteturas, aprofundando mais nas linguagens
                        e muito mais. Com grande
                        paixão pela programação
                        e dedicação em aprender, busco continuar a crescer e aprimorar minhas habilidades em desenvolvimento
                        de software.
                    </p>

                    <div class="about-languages mt-3">
                        <h4 class="title-language">Idiomas</h4>

                        <div class="container-languages">
                            <img src="../../assets/imgs/brasil.webp" alt="" style="width: 110px;">

                            <ul class="d-flex flex-column align-items-start list-unstyled">
                                <li class="fs-4">Português</li>
                                <li>Nativo</li>
                            </ul>
                        </div>

                        <div class="container-languages">
                            <img src="../../assets/imgs/eua.webp" alt="" style="width: 110px;">

                            <ul class="d-flex flex-column align-items-start list-unstyled">
                                <li class="fs-4">Inglês</li>
                                <li>Intermediário</li>
                            </ul>
                        </div>
                    </div>

                    <a href="https://drive.google.com/file/d/1vz6pMsbE7Z-LD1fpPB7JkaZHASfaO4Nm/view?usp=sharing"
                        download="Lucas-Dantas.pdf" target="_blank"
                        class="btn-rounded btn btn-outline-primary mt-4">Download CV</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import BtnGoTop from '../Button/BtnGoTop.vue';

export default {
    components: {
        BtnGoTop
    },
}
</script>

<style scoped>
.section {
    height: 100%;
    margin-bottom: 10rem;
}

.section-subtitle {
    color: var(--gray-600);
}

.section-title {
    font-size: 35px;
    color: var(--violet);
}

.title-language {
    color: var(--violet);
}

.about-languages {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
}

.about-languages .container-languages {
    display: flex;
    gap: 1rem;
}

.emphases {
    color: var(--violet);
    font-weight: 900;
}

@media only screen and (max-width: 600px) {
    #about-me {
        flex-direction: column;
        margin-top: 10rem;
    }
}

@media only screen and (max-width: 1366px) {
    .section {
        height: 100%;
    }
}</style>