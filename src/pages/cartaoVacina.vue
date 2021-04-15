<template>
  <q-page class="window-height window-width row justify-center items-center" style="background: white;">
    <div class="column q-pa-lg">
      <center>
        <h4 class="text-h5 text-black q-my-sm">Vacinas</h4>
      </center>
    <div class="col-sm row items-center q-pa-lg">
      <q-card v-for="vaccine_date in vaccine_date" :key="vaccine_date" class="my-card2 bg-primary text-white">
        <q-card-section>
          <div class="text-h6">{{name}}</div>
          <div class="text-subtitle2">{{vaccine_date}}</div>
        </q-card-section>

        <q-card-section>
          {{diseases_type}}
        </q-card-section>
        <q-separator dark />
        <q-card-actions vertical>
          <q-btn flat label="Mais Detalhes" @click="detailBtn=true"/>
        </q-card-actions>
      </q-card>
      <q-dialog v-model="detailBtn">
        <q-card>
          <q-card-section>
            <div class="text-h6">Descrição:</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{description}}
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="OK" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
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
      name: 'Vacina ABC',
      vaccine_date: ['08/05/2021', '09/05/2021', '10/05/2021', '11/05/2021', '12/05/2021', '13/05/2021', '14/05/2021', '15/05/2021', '16/05/2021', '17/05/2021', '18/05/2021', '19/05/2021', '20/05/2021', '21/05/2021'],
      diseases_type: 'Febre Amarela',
      description: 'Vacina para tratamento precoce da febre amarela em cavalos.',
      detailBtn: false
    }
  },
  methods: {
    async register () {
      const params = {
        name: '',
        diseases_type: '',
        description: '',
        owner_id: '60a23d26-2d2b-4827-b20a-fa77385ea659'
      }
      const response = await api.post('/amostraAnimais', params)

      console.log(response.data)
    }
  }
}
</script>
