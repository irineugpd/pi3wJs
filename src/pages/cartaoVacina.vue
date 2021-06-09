<template>
  <q-page class="justify-center items-center" style="background: white;">
    <div class="column q-pa-sm">
      <center>
        <h3 class="formtitle q-my-sm">Histórico</h3>
        <div class="linha"></div>
      </center>
      <div class="col-sm row items-center q-pa-md">
        <q-card v-for="singleVaccine in vaccineEvents" :key="singleVaccine.id" class="my-card2 text-white" style="background: #35e675">
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
                <!--<q-btn padding="xs" icon="edit" class="bg-grey-10"/>-->
                <q-btn padding="xs" icon="delete" class="bg-grey-10" @click="deleteVaccine(singleVaccine.id, singleVaccine.user_id, singleVaccine.horse_id)"/>
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
      vaccineEvents: []
    }
  },
  methods: {
    async getVaccineHistory (horseId) {
      var storage = window.localStorage
      try {
        api.defaults.headers.authorization = `Bearer ${JSON.parse(storage.getItem('@AppCamila:Token'))}`

        const response = await api.get(`/vaccines/history/${horseId}`)

        const vaccineEvents = response.data.map(vaccine => {
          const vaccineDate = new Date(vaccine.date)
          const year = vaccineDate.getUTCFullYear()
          const month = String(vaccineDate.getUTCMonth()).padStart(2, '0')
          const day = String(vaccineDate.getUTCDate()).padStart(2, '0')

          return {
            detailBtn: false,
            id: vaccine.id,
            user_id: vaccine.user_id,
            horse_id: vaccine.horse_id,
            vaccineName: vaccine.name,
            description: vaccine.description,
            diseaseType: vaccine.diseases_type,
            vaccineDate: `${day}/${month}/${year}`
          }
        })

        this.vaccineEvents = vaccineEvents
      } catch (e) {
        this.$q.notify({
          type: 'negative',
          message: 'Erro ao obter o histŕico de vacinas, tente novamente!'
        })
      }
    },
    async deleteVaccine (vaccinId, userId, horseId) {
      try {
        await api.delete(`/vaccines?user_id=${userId}&vaccine_id=${vaccinId}&horse_id=${horseId}`)

        await this.getVaccineHistory(this.$route.params.horse_id)
      } catch (e) {
        this.$q.notify({
          type: 'negative',
          message: 'Erro ao deletar a vacina, tente novamente!'
        })
      }
    }
  },
  async created () {
    await this.getVaccineHistory(this.$route.params.horse_id)
  }
}
</script>
