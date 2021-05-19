<template>
  <q-page class="q-pa-md">
      <center>
        <h4 class="loginTitle">SEJA<br/>BEM VINDO!</h4>
      </center>
      <div class="absolute-bottom q-pb-md">
        <q-form class="q-px-sm q-pb-xl">
          <q-input
            filled
            v-model="email"
            label="E-mail"
            class="q-pa-md"
            :rules="[val => val && val.length > 0 || 'E-mail Obrigatorio']"
            color="teal-10"
          >
            <template v-slot:append>
              <q-icon name="person" class="q-pr-sm"/>
            </template>
          </q-input>
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
        </q-form>
        <center>
          <q-btn unelevated rounded color="green-13" label="Entrar" class="q-px-lg" @click="login()"/>
          <q-btn flat color="gray-8" label="Esqueceu a senha ?" to="/confirmarEmail"/>
        </center>
        <center>
          <q-btn flat style="color: gray" label="REGISTRAR" size="11px" to="/" class="q-pt-md absolute-botttom"/>
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
      email: '',
      password: ''
    }
  },
  methods: {
    async login () {
      if (this.email.length && this.password.length > 0) {
        const params = {
          email: this.email,
          password: this.password
        }
        const response = await api.post('/users', params)

        console.log(response.data)
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
