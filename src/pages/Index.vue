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
              <q-input class="q-pa-sm" standout v-model="name" placeholder="Nome"/>
              <q-input class="q-pa-sm" standout v-model="email" placeholder="E-mail"/>
              <q-input class="q-pa-sm" standout v-model="age" placeholder="Idade"/>
              <q-input class="q-pa-sm" standout v-model="password" placeholder="Senha"/>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn unelevated size="lg" color="green-13" class="full-width text-white" label="Entrar" @click="login()" />
          </q-card-actions>
          <q-card-section class="text-center q-pa-sm">
            <q-btn flat style="color: gray" label="Esqueceu a senha ?" size="11px"/>
          </q-card-section>
        </q-card>
        <q-btn flat style="color: gray" label="Cadastro de Animais" size="10px" to="/cadastroAnimais"/>
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
      name: '',
      email: '',
      age: 0,
      password: ''
    }
  },
  methods: {
    async login () {
      const params = {
        name: this.name,
        email: this.email,
        age: this.age,
        password: this.password
      }
      const response = await api.post('/users', params)

      console.log(response.data)
    }
  }
}
</script>
