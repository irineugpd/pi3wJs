<template>
  <q-page class="justify-center items-center" style="background: white;">
    <div class="column q-pa-sm">
      <center>
        <h3 class="formtitle q-my-sm">Vacinas</h3>
        <div class="linha"></div>
      </center>
      <div class="col-sm row items-center q-pa-md">
        <q-card v-for="singleVaccine in vaccineEvents" :key="singleVaccine.vaccineDate" class="my-card2 bg-green-14 text-white">
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
    async register () {
      const params = {
        owner_id: '60a23d26-2d2b-4827-b20a-fa77385ea659'
      }
      const response = await api.post('/amostraAnimais', params)

      console.log(response.data)
    }
  }
}
</script>
