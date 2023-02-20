<template>
    <header id="home" class="header">
        <div class="overlay"></div>
        <div class="header-content container">
            <h1 class="header-title">
                <span class="up">Olá!<br></span>
                <span class="down">Eu sou Lucas<br>Dantas</span>
            </h1>
            <p class="header-subtitle">Desenvolvedor FullStack</p>            

            <a class="btn btn-primary" href="#portfolio">Visite Meus Trabalhos</a>
        </div>              
    </header>
</template>

<style scoped>

@media only screen and (max-width: 600px) {
    #home {
        margin: 0;
    }
}
.header {
    margin: 4rem 8rem;
    height: 50vh;
}

.header-title span {
    font-size: 70px;
}

.header-subtitle {
    text-transform: uppercase;
    font-size: 30px;
    font-weight: 100;
}

.btn {
    border-radius: 30px;
}
</style>