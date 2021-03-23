<template>
  <q-page
    class="window-height window-width row justify-center items-center"
    style="background: white;"
  >
    <div class="column q-pa-lg">
        <q-card square class="shadow-24" style="width:300px;height:600px;">
          <q-card-section class="registroAnimal">
            <h4 class="text-h5 text-white q-my-sm">Cadastro de Vacina</h4>
            <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
              <q-btn fab icon="list" color="green-13" />
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl q-pb-lg">
              <q-input class="q-pa-sm" standout v-model="vaccine" placeholder="Nome da Vacina" type="name" autogrow/>
              <q-input class="q-pa-sm" standout v-model="quantity" type="number" label="Qtde. de aplicações:"/>
              <q-input class="q-pa-sm" standout v-model="days" type="number" label="Dias entre aplicações:"/>
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
      quantity: '',
      days: '',
      description: ''
    }
  },
  methods: {
    async register () {
      const params = {
        vaccine: this.vaccine,
        quantity: this.quantity,
        days: this.days,
        horse_id: '',
        description: this.description
      }
      const response = await api.post('/vaccine', params)

      console.log(response.data)
    }
  }
}
</script>
