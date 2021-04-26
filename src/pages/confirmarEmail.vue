<template>
  <q-page
    class="justify-center items-center"
    style="background: white;"
  >
    <div class="column q-pa-lg">
        <q-card square class="shadow-24" style="width:auto;height:auto;">
          <q-card-section class="registroAnimal">
            <h4 class="text-h5 text-white q-my-sm">Esqueci minha senha</h4>
            <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
              <q-btn fab icon="list" color="green-13" />
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl q-pb-lg">
              <h5 class="text-h5 text-black q-my-sm">Digite o e-mail cadastrado:</h5>
              <q-input class="q-pa-sm" filled v-model="email" placeholder="E-mail:" type="text" color="teal-10"/>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn unelevated size="lg" color="green-13" class="full-width text-white" label="Solicitar" @click="solicitar()" />
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
      email: '',
      fullWidth: false
    }
  },
  methods: {
    async solicitar () {
      const params = {
        email: this.email
      }
      try {
        const response = await api.post('/confirmarEmail', params)
        console.log(response.data)
        this.$q.notify({
          type: 'positive',
          message: 'Solicitação enviada com sucesso!',
          position: 'center'
        })
      } catch (e) {
        this.$q.notify({
          type: 'negative',
          message: 'Solicitação não enviada, verifique o e-mail e tente novamente'
        })
      }
    }
  }
}
</script>
