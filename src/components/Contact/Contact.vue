<template>
  <section id="contact" class="section">
    <div class="container text-center">
      <p class="section-subtitle">Como você pode se comunicar?</p>
      <h1 class="section-title mb-5">Contate Me</h1>

      <form class="form" @submit.prevent="send()">
        <div class="row">
          <div class="form-group col-sm-6">
            <input type="text" name="nome" class="form-control" placeholder="Seu Nome" />
          </div>

          <div class="form-group col-sm-6">
            <input type="text" name="email" class="form-control" placeholder="Seu E-mail" />
          </div>

          <div class="form-group mt-4 col-sm-12">
            <textarea placeholder="Escreva algo" class="form-control"></textarea>
          </div>
        </div>

        <div class="form-group">
            <button class="btn btn-primary mt-5" id="button-send">Enviar Mensagem</button>
        </div>
      </form>

    </div>

    <hr>
  </section>
</template>

<script>
import Swal from 'sweetalert2';

export default {
    methods: {
        send() {
            Swal.fire({
                title: 'Mensagem enviada!',
                text: 'Obrigado por enviar esta mensagem ;)',
                icon: 'success'
            });
        }
    }
}
</script>

<style>
#contact {
  margin: 10rem 10rem;
}

#button-send {
    background-color: var(--white);
    border-color: var(--violet);
    color: var(--violet);
    transition: .5s ease-in-out;
}

#button-send:hover {
    color: var(--white);
    background-color: var(--violet);
    border-color: var(--white);
}

</style>
