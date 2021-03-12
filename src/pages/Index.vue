<template>
  <q-page class="row items-center justify-evenly">
    <q-card square class="card" id="register">
      <q-card-section class="card-content">
        <q-input label="E-mail"
            v-model="email">
        </q-input>
        <q-input label="Nome"
            v-model="name"
            type="text">
        </q-input>
        <q-input label="Idade"
            v-model="age"
            type="number">
        </q-input>
        <q-input label="Senha"
            v-model="password"
            type="password">
        </q-input>
      </q-card-section>
      <q-card-section class="card-actions vertical-middle text-center">
        <div class="row">
          <q-btn class="full-width"
                  label="Login"
                  @click="register()"
                  color="accent">
          </q-btn>
        </div>
      </q-card-section>
    </q-card>
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
    async register () {
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
