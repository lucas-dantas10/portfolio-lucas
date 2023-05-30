<template>
  <section class="section" id="portfolio">
    <div class="container text-center">
      <p class="section-subtitle">O que eu fiz ?</p>
      <h6 class="section-title mb-5">Portfólio</h6>
      <!-- row -->
      <div class="row">
        <div class="portfolio-container col-md-4" v-for="project in projects">
          <a :href="project.href" target="_blank" class="portfolio-card">
            <img
              :src="project.img"
              class="portfolio-card-img"
              :alt="project.title"
            />
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
          img: "/src/assets/imgs/project-one.png",
          title: 'Front End',
          subtitle: 'Categoria: VueJs, vue-router',
          href: '#'
        },
        {
          img: "/src/assets/imgs/project-two.png",
          title: "Front End",
          subtitle: "Categoria: Html5, Css3, Javascript",
          href: "https://lucas-dantas10.github.io/hzc.github.io/"
        },
        {
          img: "/src/assets/imgs/project-three.png",
          title: "Full Stack",
          subtitle: "Categoria: Laravel 5.8, VueJs, Vuex, Notification, Echo, Web Socket",
          href: "#"
        }
      ]
    }
  }
}
</script>

<style scoped>

.portfolio-container {
  height: 30vh;
}
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
  #portfolio {
    height: 115vh;
  }
}



</style>
