<template>
  <q-page class="q-pa-md">
      <center>
        <!--<h4 class="loginTitle">SEJA<br/>BEM VINDO!</h4>-->
      </center>
      <div class="absolute-bottom q-pb-md">
        <q-form class="q-px-sm q-pb-xl">
          <q-input
            bg-color="grey-4"
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
            bg-color="grey-4"
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
          <q-btn flat style="color: gray" label="REGISTRAR" size="11px" to="/cadastroUsuario" class="q-pt-md absolute-botttom"/>
        </center>
      </div>
  </q-page>
</template>

<script>
import {
  api
} from 'boot/axios'
import { LocalStorage } from 'quasar'

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
      if (this.email.length > 0 && this.password.length > 0) {
        const params = {
          email: this.email,
          password: this.password
        }

        try {
          const response = await api.post('/sessions', params)

          LocalStorage.set('@AppCamila:User', JSON.stringify(response.data.user))
          LocalStorage.set('@AppCamila:Token', JSON.stringify(response.data.token))

          if (response.data.token.is_administrator) {
            this.$router.push('/AdminDashboard')
          } else {
            this.$router.push('/UserDashboard')
          }
        } catch (e) {
          console.log(e)
          this.$q.notify({
            type: 'negative',
            message: 'Email ou senha incorretos, tente novamente!'
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
