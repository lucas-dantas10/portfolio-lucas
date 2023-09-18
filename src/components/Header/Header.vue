<template>
    <header id="home" class="header">
        <div class="overlay"></div>
        <div class="header-content container">
            <h1 class="header-title">
                <span class="down">Lucas Dantas</span>
            </h1>
            <p class="header-subtitle">Desenvolvedor FullStack</p>

            <p class="fs-5 ln-lg">Este é meu Portfólio Oficial.</p>
            <p class="fs-5 ln-lg">Todos os detalhes dos trabalhos desenvolvidos<br> por mim estão aqui.</p>

            <div class="habilities d-flex align-items-center gap-4 mt-4 mb-4">
                <font-awesome-icon :icon="['fab', 'laravel']" class="icons" style="color: red" />
                <font-awesome-icon :icon="['fab', 'vuejs']" class="icons" style="color: #42b983" />
                <font-awesome-icon :icon="['fab', 'php']" class="icons" style="color: #777BB3" />
                <font-awesome-icon :icon="['fab', 'html5']" class="icons" style="color: red" />
                <font-awesome-icon :icon="['fab', 'css3-alt']" class="icons" style="color: #2489C4" />
                <font-awesome-icon :icon="['fab', 'js']" class="icons" style="color: #FFA500" />
                <font-awesome-icon :icon="['fab', 'docker']" class="icons" style="color: blue" />
            </div>

            <a class="btn btn-primary" href="#portfolio">Visite Meus Trabalhos</a>
        </div>              
    </header>
</template>

<style scoped>

#home {
    margin-bottom: 12rem;
}

/* .habilities {
    border: 1px solid #d3d3d3;
} */

.icons {
    font-size: 2rem;
}
.header {
    margin: 4rem 8rem;
    height: 50vh;
}

.header-title span {
    font-size: 3rem;
}

.header-subtitle {
    font-size: 30px;
    font-weight: 100;
}

.btn {
    border-radius: 30px;
}

@media only screen and (max-width: 600px) {
    #home {
        margin: 0;
    }
}

@media only screen and (max-width: 375px) {
    #home {
        margin: 0;
        height: 70vh;
    }
}
</style>