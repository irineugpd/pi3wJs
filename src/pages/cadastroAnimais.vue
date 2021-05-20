<template>
  <q-page
    class="justify-center items-center backgroundform"
  >
    <div class="column q-pa-lg">
      <center>
        <h4 class="q-my-sm formtitle">Cadastro de Animais</h4>
        <div class="linha"></div>
      </center>
      <br/>
      <div class="text-center q-pa-sm">
        <q-form class="q-px-sm q-pb-lg">
          <q-input
            filled
            rounded
            v-model="name"
            label="Nome"
            class="q-pa-md"
            :rules="[val => !!val || 'Campo Obrigatorio']"
          />
          <q-input
              filled
              rounded
              v-model="fluff"
              label="Pelagem"
              class="q-pa-md"
              :rules="[val => !!val || 'Campo Obrigatorio']"
            />
          <q-input
            rounded
            v-model="birth_date"
            filled type="date"
            class="q-pa-md"
            :rules="[val => !!val || 'Campo Obrigatorio']"
          />
          <q-input
            filled
            rounded
            v-model="race"
            label="Raça"
            class="q-pa-md"
            :rules="[val => !!val || 'Campo Obrigatorio']"
          />
        </q-form>
        <!--<div class="q-px-lg">-->
          <q-btn
              unelevated
              rounded
              size="lg"
              color="green-13"
              class="full-width text-white"
              label="Registrar"
              @click="register()"
          />
        </div>
      </div>
    <!--</div>-->
  </q-page>
</template>

<script>
import {
  api
} from 'boot/axios'

export default {
  name: 'cadastroAnimal',
  data () {
    return {
      name: '',
      race: '',
      birth_date: '',
      fluff: '',
      avatar: null
    }
  },
  methods: {
    async register () {
      if (this.name.length && this.race.length && this.birth_date.length && this.fluff.length > 0) {
        const data = new FormData()
        data.append('name', this.name)
        data.append('user_id', '1c59d308-76d3-4645-9921-8b759a1565dd')
        data.append('fluff', this.fluff)
        data.append('birth_date', this.birth_date)
        data.append('race', this.race)
        // data.append('avatar', this.avatar)
        try {
          api.defaults.headers.authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjA3MzU0MzcsImV4cCI6MTYyMzMyNzQzNywic3ViIjoie1wiaWRcIjpcImY1ODU0OGQ2LWU5MWQtNGUwOC1iMWYyLTIyZWI4OTJhM2Y4OFwiLFwiaXNfYWRtaW5pc3RyYXRvclwiOnRydWV9In0.O923JprdiG5q2RKmzWQh41FYWV6fqM3oYVbEWAnQ-iQ'
          const response = await api.post('/horses', data)
          console.log(response)
          this.$q.notify({
            type: 'positive',
            message: 'Animal registrado com sucesso!'
          })
        } catch (e) {
          this.$q.notify({
            type: 'negative',
            message: 'Animal não cadastrado, verifique os campos e tente novamente!'
          })
        }
      }
    }
  }
}
</script>
