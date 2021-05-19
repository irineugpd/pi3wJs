<template>
  <q-page
    class="window-height window-width row justify-center items-center"
    style="background: white;"
  >
    <div class="column q-pa-lg">
      <q-card square class="shadow-24" style="width:auto;height:auto;">
        <q-card-section class="registroAnimal">
          <h4 class="text-h5 text-white q-my-sm">Amostra de Animais:</h4>
          <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
          </div>
        </q-card-section>
        <br>
    <center>
      <div class="col-6">
            <q-img :src="`${this.horse.avatar_url}`" native-context-menu>
          <div class="absolute-bottom-right text-subtitle2">
            {{this.horse.name}}
          </div>
        </q-img>
      </div>
    </center>
        <center>
        <div class="q-pa-md">
          <div class="q-gutter-y-md column" style="max-width: 300px">
            <h5 class="text-h5 text-black q-my-sm">Nome:</h5>
            <p>
              {{this.horse.name}}
            </p>
        </div>
        <div class="q-pa-md">
            <h5 class="text-h5 text-black q-my-sm">Pelagem:</h5>
          <div class="q-gutter-y-md column" style="max-width: 200px">
            <p>
              {{this.horse.fluff}}
            </p>
          </div>
        </div>
        <div class="q-pa-md">
            <h5 class="text-h5 text-black q-my-sm">Data de Nascimento:</h5>
          <div class="q-gutter-y-md column" style="max-width: 200px">
            <p>
              {{this.horse.birth_date}}
            </p>
          </div>
        </div>
        <div class="q-pa-md">
            <h5 class="text-h5 text-black q-my-sm">Raça do Animal:</h5>
          <div class="q-gutter-y-md column" style="max-width: 200px">
            <p>
              {{this.horse.race}}
            </p>
          </div>
        </div>
        </div>
        </center>
          <q-card-section class="text-center q-pa-sm">
              <q-btn flat style="color: gray" label="Retornar para LogIn" size="11px" to="/"/>
          </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { api } from 'boot/axios'

export default {
  name: 'amostraAnimais',
  data () {
    return {
      horse: {}
    }
  },
  methods: {
    async getHorse (id) {
      api.defaults.headers.authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjA3MzU0MzcsImV4cCI6MTYyMzMyNzQzNywic3ViIjoie1wiaWRcIjpcImY1ODU0OGQ2LWU5MWQtNGUwOC1iMWYyLTIyZWI4OTJhM2Y4OFwiLFwiaXNfYWRtaW5pc3RyYXRvclwiOnRydWV9In0.O923JprdiG5q2RKmzWQh41FYWV6fqM3oYVbEWAnQ-iQ'
      try {
        const response = await api.get(`/horses/${id}`)
        const birthDate = new Date(response.data.birth_date)
        const year = birthDate.getFullYear()
        const month = String(birthDate.getMonth() + 1).padStart(2, '0')
        const day = String(birthDate.getDate()).padStart(2, '0')

        Object.assign(response.data, {
          birth_date: `${day}/${month}/${year}`
        })

        this.horse = response.data
      } catch (e) {
        console.log(e)
      }
    }
  },
  async created () {
    await this.getHorse('49d37b10-929b-4c05-a75c-9edefb88cab2')
    console.log(this.horse)
  }
}
</script>
