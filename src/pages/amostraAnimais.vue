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
          <q-btn unelevated size="md" color="primary" filled rounded class="q-px-lg" label="Salvar perfil" @click="salvar()" />
          <br/>
          <br/>
          <q-btn unelevated size="md" outline rounded color="red" label="Cancelar" class="center" to="/listarAnimais"/>
        </center>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { api } from 'boot/axios'

export default {
  name: 'amostraAnimais',
  props: [
    'horse_id'
  ],
  data () {
    return {
      horse: {}
    }
  },
  methods: {
    async getHorse (id) {
      api.defaults.headers.authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjEyNTE1ODEsImV4cCI6MTYyMzg0MzU4MSwic3ViIjoie1wiaWRcIjpcImU1MGMzODQyLTQ3ZGQtNGIwNi1iNzUxLWVjNGVlOWRlZDE0YVwiLFwiaXNfYWRtaW5pc3RyYXRvclwiOnRydWV9In0.VlUiuyIIN4MrocMzn4HJLt93KuWVnz7BTPYGuziUAHU'
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
    console.log(this.$route.params.horse_id)
    await this.getHorse(this.$route.params.horse_id)
    console.log(this.horse)
  }
}
</script>
