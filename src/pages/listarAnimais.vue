<template>
  <q-page class="window-height window-width row justify-center items-center" style="background: white;">
    <div class="column q-pa-lg">
      <center>
        <h4 class="text-h5 text-black q-my-sm q-pt-lg absolute-top">Listar Animais</h4>
      </center>
      <q-card class="my-card">
        <q-card-section>
          <div class="text-h6">Perfis dos Animais</div>
        </q-card-section>
    <q-separator />
        <q-card-actions vertical>
          <q-btn v-bind="horse.id" v-for="horse in horses" :key="horse.id" flat :to="`/amostraAnimais/${horse.id}`">{{horse.name}}</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import {
  api
} from 'boot/axios'

export default {
  name: 'listarAnimais',
  data () {
    return {
      horses: []
    }
  },
  methods: {
    async getHorsesByOwnerId (ownerId) {
      api.defaults.headers.authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjEyNTE1ODEsImV4cCI6MTYyMzg0MzU4MSwic3ViIjoie1wiaWRcIjpcImU1MGMzODQyLTQ3ZGQtNGIwNi1iNzUxLWVjNGVlOWRlZDE0YVwiLFwiaXNfYWRtaW5pc3RyYXRvclwiOnRydWV9In0.VlUiuyIIN4MrocMzn4HJLt93KuWVnz7BTPYGuziUAHU'
      try {
        const response = await api.get(`/horses?user_id=${ownerId}`)

        console.log(response.data)

        this.horses = response.data
      } catch (e) {
        console.log(e)
      }
    }
  },
  computed: {
    getDescription () {
      return this.horseOptions.map(option => option.description)
    }
  },
  async created () {
    await this.getHorsesByOwnerId('d34fdbd4-a379-41db-8524-5c45c2b4f79f')
  }
}
</script>
