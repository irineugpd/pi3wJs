<template>
  <q-page class="q-pa-md">
      <div class="absolute-bottom q-pb-md">
        <q-form class="q-px-sm q-pb-xl">
          <q-input
            bg-color="grey-4"
            filled
            v-model="email"
            hint="Confirme seu e-mail"
            label="E-mail"
            class="q-pa-md"
            :rules="[val => val && val.length > 0 || 'E-mail Obrigatório!']"
            color="teal-10"
          >
            <template v-slot:append>
              <q-icon name="mail" class="q-pr-sm"/>
            </template>
          </q-input>
        </q-form>
        <center>
          <q-btn unelevated rounded color="green-13" label="Confirmar" class="q-px-lg" @click="confirmar()"/>
          <q-btn flat color="gray-8" label="Voltar para o Login" to="/Login"/>
        </center>
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
    async confirmar () {
      if (this.email.length > 0) {
        this.$q.notify({
          type: 'positive',
          message: 'Solicitação enviada com sucesso!',
          position: 'top'
        })
        const params = {
          email: this.email
        }
        const response = await api.post('/confirmarEmail', params)
        console.log(response.data)
      } else {
        this.$q.notify({
          type: 'negative',
          message: 'Solicitação não enviada, verifique o e-mail e tente novamente.',
          position: 'top'
        })
      }
    }
  }
}
</script>
