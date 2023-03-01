<template>
  <section id="contact" class="section">
    <div class="container text-center">
      <p class="section-subtitle">Como você pode se comunicar?</p>
      <h1 class="section-title mb-5">Contate Me</h1>

      <form class="form" @submit.prevent="sendEmail">
        <div class="row">
          <div class="form-group col-sm-6">
            <input
              type="text"
              id="text-input"
              v-model="contact.name"
              class="form-control"
              placeholder="Seu Nome"
              required
            />
          </div>

          <div class="form-group col-sm-6">
            <input
              type="email"
              v-model="contact.email"
              class="form-control"
              placeholder="Seu E-mail"
              required
            />
          </div>

          <div class="form-group mt-4 col-sm-12">
            <textarea
              v-model="contact.message"
              placeholder="Escreva algo"
              class="form-control"
            ></textarea>
          </div>
        </div>

        <div class="form-group">
          <button class="btn btn-primary mt-5" type="submit" id="button-send">
            Enviar Mensagem
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

export default {
  data() {
    return {
      contact: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    sendEmail(event) {
      NProgress.start();
      const templateParans = {
        name: this.contact.name,
        email: this.contact.email,
        message: this.contact.message,
      };
      emailjs
        .send(
          "service_il1cbic",
          "template_9fol4op",
          templateParans,
          "Mo0mHfqz-r1pWDrbu"
        )
        .then(
          function (response) {
            NProgress.done();
            Swal.fire({
              title: "Mensagem enviada!",
              text: "Obrigado por enviar esta mensagem ;)",
              icon: "success",
            });
          },
          function (error) {
            Swal.fire({
              title: "Erro ao enviar a mensagem!",
              text: "Desculpa :(",
              icon: "error",
            });
            return;
          }
        );

        this.contact.name = "";
        this.contact.email = "";
        this.contact.message = "";
    },
  },
};
</script>

<style>

#nprogress .spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1031;
  height: 100vh;
  width: 100vw;
}

#nprogress .spinner-icon {
  width: 10rem;
  height: 10rem;
  box-sizing: border-box;
  border: solid 2px transparent;
  border-top-color: #29d;
  border-left-color: #29d;
  border-radius: 50%;

  -webkit-animation: nprogress-spinner 400ms linear infinite;
          animation: nprogress-spinner 400ms linear infinite;
}

#contact {
  margin: 10rem 10rem;
}

#button-send {
  background-color: var(--white);
  border-color: var(--violet);
  color: var(--violet);
  transition: 0.5s ease-in-out;
}

#button-send:hover {
  color: var(--white);
  background-color: var(--violet);
  border-color: var(--white);
}

@media only screen and (max-width: 600px) {
  #contact {
    margin: 0;
    height: 60vh;
  }

  #text-input {
    margin-bottom: 1.5rem;
  }
}

@media only screen and (max-width: 600px) {
  #contact {
    margin: 0;
    height: 85vh;
  }
}
</style>
