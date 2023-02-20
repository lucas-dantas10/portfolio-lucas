<template>
    <section class="section pt-0" id="about">
        <div class="container text-center">            
            <div class="about d-flex align-items-center" id="about-me">
                <div class="about-img-holder">
                    <img src="../../assets/imgs/lucas.png" class="about-img" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page">
                </div>
                <div class="about-caption">
                    <p class="section-subtitle">Quem Eu Sou ?</p>
                    <h2 class="section-title mb-3">Sobre Mim</h2>
                    <p>
                        Profissional com experiência de menos de 1 ano na área de TI, em busca de ganhar experiência
                        e conhecimento nas linguagens de programação, se desenvolver como profissional e sempre com
                        vontade de aprender mais. Hoje atuo como estágiário na Credit Cash, trabalhando com PHP, Laravel, Vuejs, Javascript, Html5, Css3.
                    </p>
                    <a href="https://drive.google.com/file/d/1ocreTfy0QALbrQeixBA3j8Q89PxO5fae/view" download="Lucas-Dantas.pdf" target="_blank" class="btn-rounded btn btn-outline-primary mt-4">Download CV</a>
                </div>              
            </div>
        </div>
    </section> 

</template>

<style scoped>

@media only screen and (max-width: 600px) {
    #about-me {
        flex-direction: column;
        margin-top:10rem;
    }
}
.section {
    height: 50vh;
}

.section-subtitle {
    color: var(--gray-600);
}

.section-title {
    font-size: 35px;
    color: var(--violet);
}
</style>