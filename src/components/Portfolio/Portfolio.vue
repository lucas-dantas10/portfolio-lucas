<template>
  <section class="section" id="portfolio">
    <div class="container text-center">
      <p class="section-subtitle">O que eu fiz ?</p>
      <h6 class="section-title mb-5">Portfólio</h6>
      <!-- row -->
      <div class="row">
        <div class="col-md-4" v-for="(project, index) in projects" :key="index">
          <a :href="project.href" class="portfolio-card">
            <img
              src=../../assets/imgs/project-one.png
              class="portfolio-card-img"
              alt="Imagem de um projeto."
              v-if="project.img === 'one'"
            />
            <img
              src=../../assets/imgs/project-two.png
              class="portfolio-card-img"
              alt="Imagem de um projeto."
              v-else
            />
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
export default {
  data() {
    return {
      projects: [
        {
          img: "one",
          title: 'Front End',
          subtitle: 'Categoria: VueJs, vue-router',
          href: '#'
        },
        {
          img: "two",
          title: "Front End",
          subtitle: "Categoria: Html5, Css3, Javascript",
          href: "https://lucas-dantas10.github.io/hzc.github.io/"
        },
        {
          img: "three",
          title: "Full Stack",
          subtitle: "Categoria: Laravel 5.8, VueJs, Vuex",
          href: "#"
        }
      ]
    }
  }
}
</script>

<style scoped>

#portfolio {
  margin-bottom: 20rem;
}

.portfolio-card {
  display: block;
  position: relative;
  overflow: hidden;
}

.portfolio-card img {
  width: 600px;
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
  #portfolio {
    height: 85vh;
  }
}
</style>
