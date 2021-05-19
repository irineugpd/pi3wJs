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
      </center>
      <center>
        <div class="q-pa-md">
          <h5>NOME:</h5>
          <h6>
            {{this.horse.name}}
          </h6>
        </div>
        <div class="q-pa-md">
          <h5>PELAGEM:</h5>
          <h6>
            {{this.horse.fluffy}}
          </h6>
        </div>
        <div class="q-pa-md">
          <h5>DATA DE NASCIMENTO:</h5>
          <h6>
            {{this.horse.birth_date}}
          </h6>
        </div>
        <div class="q-pa-md">
          <h5>RAÇA DO ANIMAL:</h5>
          <h6>
            {{this.horse.race}}
          </h6>
        </div>
      </center>
      <br/>
      <center>
        <q-btn unelevated size="lg" color="secondary" rounded label="Histórico de Vacinas" class="center" to="/cartaoVacina"/>
      </center>
      <br/>
      <center>
        <!--<q-btn unelevated size="md" color="primary" filled rounded class="q-px-lg" label="Salvar perfil" @click="salvar()" /> -->
        <br/>
        <br/>
        <q-btn unelevated size="md" outline rounded color="red" label="Cancelar" class="center" to="/listarAnimais"/>
      </center>
    </div>
  </q-page>
</template>

<script>
import {
  api
} from 'boot/axios'

export default {
  name: 'amostraAnimais',
  data () {
    return {
      horse: null,
      filesImages: null,
      dense: false
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
