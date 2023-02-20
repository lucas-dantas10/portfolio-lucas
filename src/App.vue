<template>
  <div class="main">
    <div class="container">
      <NavBar></NavBar>
    </div>

    <div class="container">
      <Header></Header>
    </div>

    <div class="container">
      <About></About>
    </div>

    <div class="container">
      <Service></Service>
    </div>

    <div class="container">
      <Portfolio></Portfolio>
    </div>
    
  </div>
</template>

<script>
import NavBar from './components/NavBar/NavBar.vue';
import Header from './components/Header/Header.vue';
import About from './components/About/About.vue';
import Service from './components/Service/Service.vue';
import Portfolio from './components/Portfolio/Portfolio.vue';

export default {
  components: {
    NavBar,
    Header,
    About,
    Service,
    Portfolio,
  }
}
</script>
