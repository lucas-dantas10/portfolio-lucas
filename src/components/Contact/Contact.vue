<template>
    <section id="contact" class="section">
        <div class="container text-center">
            <p class="secundary-text">Como você pode se comunicar?</p>
            <h1 class="primary-text mb-5">Contate Me</h1>

            <form class="form" @submit.prevent="sendEmail">
                <div class="row">
                    <div class="form-group col-sm-6">
                        <input type="text" id="text-input" v-model="contact.name" class="form-control"
                            placeholder="Seu Nome" required />
                    </div>

                    <div class="form-group col-sm-6">
                        <input type="email" v-model="contact.email" class="form-control" placeholder="Seu E-mail"
                            required />
                    </div>

                    <div class="form-group mt-4 col-sm-12">
                        <textarea v-model="contact.message" placeholder="Escreva algo" class="form-control"></textarea>
                    </div>
                </div>

                <div class="form-group">
                    <button class="btn btn-primary mt-5" type="submit" id="button-send">
                        Enviar Mensagem
                    </button>
                </div>
            </form>

            <loading v-model:active="isLoading" :can-cancel="false" :is-full-page="fullPage" :color="'#695aa6'"
                :loader="'dots'" :height="120" :width="120" />
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
            isLoading: false,
            fullPage: true
        };
    },
    methods: {
        sendEmail() {
            this.isLoading = true;
            const templateParams = {
                name: this.contact.name,
                email: this.contact.email,
                message: this.contact.message,
            };
            emailjs
                .send(
                    "service_il1cbic",
                    "template_9fol4op",
                    templateParams,
                    "Mo0mHfqz-r1pWDrbu"
                )
                .then(response => {
                    console.log('oi');
                    Swal.fire({
                        title: "Mensagem enviada!",
                        text: "Obrigado por enviar esta mensagem ;)",
                        icon: "success",
                    });

                    this.isLoading = false;
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

<style scoped>
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
        margin: 0 !important;
        height: 85vh;
    }
}
</style>
