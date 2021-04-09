<template>
  <q-page class="q-pa-md">
      <center>
        <h4>Login</h4>
      </center>
      <div class="absolute-bottom q-pb-md">
        <q-form class="q-px-sm q-pb-xl">
          <q-input filled v-model="email" label="E-mail" class="q-pa-sm"/>
          <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" label="Senha" class="q-pa-sm">
            <template v-slot:append>
              <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer q-pa-sm" standout @click="isPwd = !isPwd"/>
            </template>
          </q-input>
        </q-form>
        <center>
          <q-btn unelevated rounded color="primary" class="full-width" label="Entrar"  @click="login()" />
          <q-btn flat color="gray-8" label="Esqueceu a senha ?" to="/confirmarEmail"/>
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
      password: '',
      loading1: false
    }
  },
  methods: {
    async login () {
      const params = {
        email: this.email,
        password: this.password
      }
      const response = await api.post('/users', params)

      console.log(response.data)
    }
  }
}
</script>
