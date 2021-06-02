<template>
  <q-page class="justify-center items-center" style="background: white;">
    <div class="column q-pa-sm">
      <center>
        <h3 class="formtitle q-my-sm">Vacinas</h3>
        <div class="linha1"></div>
      </center>
      <div class="col-sm row items-center q-pa-md">
        <q-card v-for="singleVaccine in vaccineEvents" :key="singleVaccine.vaccineDate" class="my-card2 bg-teal-9 text-white">
          <q-card-section>
            <center>
              <div class="text-h6">{{ singleVaccine.vaccineName }}</div>
              <div class="text-subtitle2">{{ singleVaccine.vaccineDate }}</div>
              <q-separator color="white"/>
            </center>
          </q-card-section>

          <q-card-section class="q-pb-sm">
            <center>
              {{ singleVaccine.diseaseType }}
            </center>
          </q-card-section>

          <q-dialog v-model="singleVaccine.detailBtn">
            <q-card>
              <q-card-section>
                <div class="text-h6">Descrição</div>
              </q-card-section>
              <q-card-section class="q-pt-none">
                {{ singleVaccine.description }}
              </q-card-section>
              <q-card-actions align="right">
                <q-btn flat label="OK" color="primary" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>

          <q-separator dark />
          <q-card-actions vertical>
            <center>
              <div class="q-gutter-sm">
                <q-btn padding="xs" icon="list" class="bg-grey-10" @click="singleVaccine.detailBtn=true"/>
                <q-btn padding="xs" icon="edit" class="bg-grey-10"/>
                <q-btn padding="xs" icon="delete" class="bg-grey-10"/>
              </div>
            </center>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import {
  api
} from 'boot/axios'

export default {
  name: 'cartaoVacina',
  data () {
    return {
      vaccineEvents: [
        {
          detailBtn: false,
          vaccineName: 'Vacina 1',
          description: 'Descrição 1',
          diseaseType: 'Doença 1',
          vaccineDate: '08/05/2021'
        },
        {
          detailBtn: false,
          vaccineName: 'Vacina 2',
          description: 'Descrição 2',
          diseaseType: 'Doença 2',
          vaccineDate: '09/05/2021'
        },
        {
          detailBtn: false,
          vaccineName: 'Vacina 3',
          description: 'Descrição 3',
          diseaseType: 'Doença 3',
          vaccineDate: '10/05/2021'
        },
        {
          detailBtn: false,
          vaccineName: 'Vacina 4',
          description: 'Descrição 4',
          diseaseType: 'Doença 4',
          vaccineDate: '11/05/2021'
        },
        {
          detailBtn: false,
          vaccineName: 'Vacina 5',
          description: 'Descrição 5',
          diseaseType: 'Doença 5',
          vaccineDate: '12/05/2021'
        },
        {
          detailBtn: false,
          vaccineName: 'Vacina 6',
          description: 'Descrição 6',
          diseaseType: 'Doença 6',
          vaccineDate: '13/05/2021'
        },
        {
          detailBtn: false,
          vaccineName: 'Vacina 7',
          description: 'Descrição 7',
          diseaseType: 'Doença 7',
          vaccineDate: '14/05/2021'
        }
      ]
    }
  },
  methods: {
    async getVaccineHistory (horseId) {
      try {
        api.defaults.headers.authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjIxNDk3NjAsImV4cCI6MTYyNDc0MTc2MCwic3ViIjoie1wiaWRcIjpcImU1MGMzODQyLTQ3ZGQtNGIwNi1iNzUxLWVjNGVlOWRlZDE0YVwiLFwiaXNfYWRtaW5pc3RyYXRvclwiOnRydWV9In0.AUEMgIqN4IeeVpufVPNMGPwDVmQNr5t0_ty6sSwHwkw'

        const response = await api.get(`/vaccines/history/${horseId}`)

        const vaccineEvents = response.data.map(vaccine => {
          const vaccineDate = new Date(vaccine.date)
          const year = vaccineDate.getUTCFullYear()
          const month = vaccineDate.getUTCMonth()
          const day = vaccineDate.getUTCDate()

          return {
            detailBtn: false,
            id: vaccine.id,
            vaccineName: vaccine.name,
            description: vaccine.description,
            diseaseType: vaccine.diseases_type,
            vaccineDate: `${day}/${month}/${year}`
          }
        })

        console.log(vaccineEvents)
      } catch (e) {
        console.log(e)
      }
    }
<<<<<<< HEAD
=======
  },
  async created () {
    console.log('ola')
    console.log(this.$route.params.horse_id)
    await this.getVaccineHistory(this.$route.params.horse_id)
>>>>>>> 0f9b006f595abc1d5eed40834c0e6e3417ff52d5
  }
}
</script>
