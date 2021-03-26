<template>
  <q-page
    class="window-height window-width row justify-center items-center"
    style="background: white;"
  >
    <div class="column q-pa-lg">
        <q-card square class="shadow-24" style="width:300px;height:450px;">
          <q-card-section class="registroAnimal">
            <h4 class="text-h5 text-white q-my-sm">Esqueci minha senha</h4>
            <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
              <q-btn fab icon="list" color="green-13" />
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl q-pb-lg">
              <h5 class="text-h5 text-black q-my-sm">Digite o e-mail cadastrado:</h5>
              <q-input class="q-pa-sm" standout v-model="email" placeholder="E-mail:" type="text"/>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-lg">
              <q-btn unelevated size="lg" color="green-13" class="full-width text-white" label="Solicitar" @click="alert=true, solicitar()" />

              <q-dialog v-model="alert">
                <q-card>
                  <q-card-section>
                    <div class="text-h6">Alert</div>
                  </q-card-section>

                  <q-card-section class="q-pt-none">
                    Um link para redefinição de senha foi enviado para o E-mail solicitado. O link tem duração de 5 minutos para que a troca de senha seja realizada.
                  </q-card-section>

                  <q-card-actions align="right">
                    <q-btn flat label="OK" color="primary" v-close-popup></q-btn>
                  </q-card-actions>
                </q-card>
              </q-dialog>

          </q-card-actions>
          <q-card-section class="text-center q-pa-sm">
            <q-btn flat style="color: gray" label="Retornar para LogIn" size="11px" to="/"/>
          </q-card-section>
        </q-card>
    </div>
  </q-page>
</template>

<script>
import {
  api
} from 'boot/axios'

export default {
  name: 'confirmarEmail',
  data () {
    return {
      alert: false,
      email: ''
    }
  },
  methods: {
    async solicitar () {
      const params = {
        email: this.email
      }
      const response = await api.post('/confirmarEmail', params)

      console.log(response.data)
    }
  }
}
</script>
