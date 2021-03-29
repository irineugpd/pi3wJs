<template>
  <q-page
    class="window-height window-width row justify-center items-center"
    style="background: white;"
  >
    <div class="column q-pa-lg">
        <q-card square class="shadow-24" style="width:300px;height:600px;">
          <q-card-section class="registroAnimal">
            <h4 class="text-h5 text-white q-my-sm">Login</h4>
            <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
              <q-btn fab icon="login" color="green-13" />
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl q-pb-lg">
              <q-input filled v-model="email" label="E-mail" class="q-pa-sm"/>
              <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" label="Senha" class="q-pa-sm">
                <template v-slot:append>
                  <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer q-pa-sm" standout @click="isPwd = !isPwd"/>
                </template>
              </q-input>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn unelevated size="lg" color="green-13" class="full-width text-white" label="Entrar" @click="login()" />
          </q-card-actions>
          <q-card-section class="text-center q-pa-sm">
            <q-btn flat style="color: gray" label="Esqueceu a senha ?" size="11px" to="/confirmarEmail"/>
          </q-card-section>
        </q-card>
        <q-btn flat style="color: gray" label="Cadastro de Animais" size="10px" to="/cadastroAnimais"/>
        <q-btn flat style="color: gray" label="Cadastro de Vacinas" size="10px" to="/cadastroVacina"/>
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
