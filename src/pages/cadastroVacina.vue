<template>
  <q-page
    class="window-height window-width row justify-center items-center"
    style="background: white;"
  >
    <div class="column q-pa-lg">
        <q-card square class="shadow-24" style="width:300px;height:725px;">
          <q-card-section class="registroAnimal">
            <h4 class="text-h5 text-white q-my-sm">Cadastro de Vacina</h4>
            <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
              <q-btn fab icon="list" color="green-13" />
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl q-pb-lg">
              <q-input class="q-pa-sm" standout v-model="name" placeholder="Nome da Vacina" type="name" autogrow/>
              <q-input class="q-pa-sm" standout v-model="diseases_type" placeholder="Doença a ser tratada" type="name" autogrow/>
              <q-input class="q-pa-sm" filled v-model="first_date" type="date" color="white" />
              <q-input class="q-pa-sm" standout v-model="number_of_doses" type="number" label="Qtde. de aplicações:"/>
              <q-input class="q-pa-sm" standout v-model="period_days_bettwen_doses" type="number" label="Dias entre aplicações:"/>
              <q-input class="q-pa-sm" standout v-model="description" type="text" placeholder="Descrição" autogrow/>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn unelevated size="lg" color="green-13" class="full-width text-white" label="Registrar" @click="register()" />
          </q-card-actions>
          <q-card-section class="text-center q-pa-sm">
            <q-btn flat style="color: gray" label="Retornar para LogIn" size="11px" to="/"/>
          </q-card-section>
        </q-card>
    </div>
  </q-page>
</template>

<script>
import {
  api
} from 'boot/axios'

export default {
  name: 'cadastroVacina',
  data () {
    return {
      name: '',
      diseases_type: '',
      number_of_doses: '',
      first_date: '',
      period_days_bettwen_doses: '',
      description: ''
    }
  },
  methods: {
    async register () {
      const params = {
        name: this.name,
        diseases_type: this.diseases_type,
        first_date: this.first_date,
        description: this.description,
        number_of_doses: this.number_of_doses,
        period_days_bettwen_doses: this.period_days_bettwen_doses,
        horse_id: '5852b061-293e-4ecf-be55-156d2dee693b',
        user_id: '60a23d26-2d2b-4827-b20a-fa77385ea658'
      }
      const response = await api.post('/vacines', params)

      console.log(response.data)
    }
  }
}
</script>
