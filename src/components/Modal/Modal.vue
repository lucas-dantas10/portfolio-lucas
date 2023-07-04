<template>
    <button type="button" class="btn btn-primary" @click.prevent="openModal()">
        Open Modal
    </button>

    <div class="modal fade modal-dialog modal-dialog-centered" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Titulo Modal</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    TESTE
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                    <button type="button" class="btn btn-primary">Salvar Mudanças</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                modal: ""
            }
        },

        mounted() {
            this.modal = new bootstrap.Modal(document.getElementById('exampleModal'), {
                keyboard: false
            })
        },

        methods: {
            openModal() {
                this.modal.show();
            }
        }
    }
</script>