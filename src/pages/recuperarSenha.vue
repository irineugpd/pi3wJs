<template>
  <q-page class="q-pa-md">
      <center>
        <h4 class="loginTitle">RECUPERAÇÃO DE SENHA</h4>
      </center>
      <div class="absolute-bottom q-pb-md">
        <q-form class="q-px-sm q-pb-xl">
          <q-input
            v-model="password"
            filled :type="isPwd ? 'password' : 'text'"
            label="Senha"
            class="q-pa-md"
            :rules="[val => val.length || 'Insira sua senha']"
            color="teal-10"
          >
            <template v-slot:append>
              <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer q-pa-sm" standout @click="isPwd = !isPwd"/>
            </template>
          </q-input>
          <q-input
            v-model="password2"
            filled :type="isPwd2 ? 'password' : 'text'"
            label="Confirme a senha"
            class="q-pa-md"
            :rules="[val => val.length || 'Confirme a sua senha']"
            color="teal-10"
          >
            <template v-slot:append>
              <q-icon :name="isPwd2 ? 'visibility_off' : 'visibility'" class="cursor-pointer q-pa-sm" standout @click="isPwd2 = !isPwd2"/>
            </template>
          </q-input>
        </q-form>
        <center>
          <q-btn unelevated rounded color="green-13" label="Confirmar" class="q-px-lg" @click="recuperar()" />
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

  data () {
    return {
      isPwd: true,
      isPwd2: true,
      password: '',
      password2: ''
    }
  },
  methods: {
    async recuperar () {
      if (this.password.length && this.password2.length > 0) {
        if (this.password === this.password2) {
          const params = {
            password: this.password
          }
          const response = await api.post('/users', params)
          console.log(response.data)
        } else {
          this.$q.notify({
            type: 'negative',
            message: 'As senhas devem ser iguais.',
            position: 'top'
          })
        }
      } else {
        this.$q.notify({
          type: 'negative',
          message: 'Preencha os campos.',
          position: 'top'
        })
      }
    }
  }
}
</script>
