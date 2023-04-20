<template>
  <nav id="navbar-example2" class="navbar px-3 mb-3">
    <a class="navbar-brand" id="navbar-brand" href="#">Lucas</a>
    <ul class="nav nav-pills">
      <div class="content" ref="content">
        <li class="nav-item d-none">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item d-none">
          <a class="nav-link" href="#about">Sobre</a>
        </li>

        <li class="nav-item d-none">
          <a class="nav-link" href="#service">Serviços</a>
        </li>

        <li class="nav-item d-none">
          <a class="nav-link" href="#portfolio">Portfólio</a>
        </li>

        <li class="nav-item d-none">
          <a class="nav-link" href="#contact">Contato</a>
        </li>

        <input
          class="checkbox"
          type="checkbox"
          @click="open()"
          id="checkbox-menu"
        />

        <label for="checkbox-menu">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    open() {
      const items = document.querySelectorAll(".nav-item");
      const contentMenu = this.$refs.content;

      items.forEach(item => {
        item.classList.toggle('d-none');
        contentMenu.classList.toggle('content-sidebar');
      })
    },
  },
};
</script>

<style scoped>

#navbar-example2 {
  padding-top: 2rem;
}

#navbar-brand {
  color: var(--white);
  font-size: 30px;
}

.nav-item .nav-link {
  color: var(--white);
  transition: 0.2s ease-in-out;
  font-size: 20px;
}

.nav-item .nav-link:hover {
  color: var(--gray-700);
}

.nav .content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav .content #checkbox-menu {
  position: absolute;
  opacity: 0;
}

.nav .content label {
  cursor: pointer;
  position: relative;
  display: block;
  height: 22px;
  width: 30px;
}

.nav .content label span {
  position: absolute;
  display: block;
  height: 5px;
  width: 100%;
  border-radius: 30px;
  background-color: var(--black);
  transition: 0.25s ease-in-out;
}

.nav .content label span:nth-child(1) {
  top: 0;
}

.nav .content label span:nth-child(2) {
  top: 8px;
}

.nav .content label span:nth-child(3) {
  top: 16px;
}

.nav .content #checkbox-menu:checked + label span:nth-child(1) {
  transform: rotate(-45deg);
  top: 8px;
}

.nav .content #checkbox-menu:checked + label span:nth-child(2) {
  opacity: 0;
}

.nav .content #checkbox-menu:checked + label span:nth-child(3) {
  transform: rotate(45deg);
  top: 8px;
}

@media only screen and (max-width: 600px) {

  
  @keyframes sidebar {
    0% {
      width: 5%;
    }

    25% {
      width: 25%;
    }

    50% {
      width: 30%;
    }

    100% {
      width: 40%;
    }
  }
  .nav .content-sidebar {
    animation: sidebar;
    animation-duration: initial;
    flex-direction: column-reverse;
    justify-content: start;
    align-items: center;
    position: fixed;
    top: 0;
    padding-top: 3rem;
    padding-right: 1rem;
    right: 0;
    width: 40%;
    height: 100%;
    background-color: var(--violet);
  }

  .nav .content li a {
    display: block;
    padding: 12px;
    text-decoration: none;
    color: #333;
  }
}
</style>
