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
            <q-btn fab icon="list" color="green-13" />
          </div>
        </q-card-section>
        <center>
          <h5>Insira uma imagem para</h5>
          <h5>para o perfil do animal:</h5>
        </center>
        <center>
          <div class="q-pa-md">
            <div class="q-pa-md">
                <q-uploader
                :factory="factoryFn"
                multiple
                style="max-width: 300px"
                />
            </div>
          </div>
        </center>
        <center>
        <div class="q-pa-md">
          <div class="q-gutter-y-md column" style="max-width: 300px">
            <div class="text-bold">
              <h5>NOME:</h5>
            </div>
            <p>
              {{this.horse.name}}
            </p>
          </div>
        </div>
        <div class="q-pa-md">
          <h5>PELAGEM:</h5>
          <div class="q-gutter-y-md column" style="max-width: 300px">
            <p>
              {{this.horse.fluff}}
            </p>
          </div>
        </div>
        <div class="q-pa-md">
          <h5>DATA DE NASCIMENTO:</h5>
          <div class="q-gutter-y-md column" style="max-width: 300px">
            <p>
              {{this.horse.birth_date}}
            </p>
          </div>
        </div>
        <div class="q-pa-md">
          <h5>RAÇA DO ANIMAL:</h5>
          <div class="q-gutter-y-md column" style="max-width: 300px">
            <p>
              {{this.horse.race}}
            </p>
          </div>
        </div>
        </center>
          <!--<q-card-actions class="q-px-lg">
            <q-btn unelevated size="lg" color="green-13" class="full-width text-white" label="Salvar perfil" @click="register()" />
          </q-card-actions>
          -->
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
        this.horse = response.data
        const birthDate = new Date(response.data.birth_date)
        const year = birthDate.getFullYear()

        console.log(year)
      } catch (e) {
        console.log(e)
      }
    }
  },
  async created () {
    await this.getHorse('c84f48ba-a1f8-4097-aa96-07e01a37be64')
    console.log(this.horse)
  }
}
</script>
