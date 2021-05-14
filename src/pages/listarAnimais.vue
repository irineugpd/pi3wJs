<template>
  <q-page class="window-height window-width row justify-center items-center" style="background: white;">
    <div class="column q-pa-lg">
      <center>
        <h4 class="text-h5 text-black q-my-sm">Listar Animais</h4>
      </center>
      <div class="col-sm row items-center q-pa-lg">
         <q-card class="my-card3">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-bottom">
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
              </div>
            </q-img>

            <q-card-actions>
              <q-btn flat>Abril Perfil</q-btn>
            </q-card-actions>
          </q-card>
        <!-- <q-card v-for="singleVaccine in vaccineEvents" :key="singleVaccine.vaccineDate" class="my-card2 bg-primary text-white">
          <q-card-section>
            <div class="text-h6">{{ singleVaccine.vaccineName }}</div>
            <div class="text-subtitle2">{{ singleVaccine.vaccineDate }}</div>
          </q-card-section>

          <q-card-section>
            {{ singleVaccine.diseaseType }}
          </q-card-section>

          <q-dialog v-model="singleVaccine.detailBtn">
            <q-card>
              <q-card-section>
                <div class="text-h6">Descrição:</div>
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
            <q-btn flat label="Mais Detalhes" @click="singleVaccine.detailBtn=true"/>
          </q-card-actions>
        </q-card> -->
      </div>
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
    }
  },
  methods: {
    async register () {
      const params = {
        owner_id: '60a23d26-2d2b-4827-b20a-fa77385ea659'
      }
      const response = await api.post('/listarAnimais', params)

      console.log(response.data)
    }
  },
  computed: {
    getDescription () {
      return this.horseOptions.map(option => option.description)
    }
  }
}
</script>
