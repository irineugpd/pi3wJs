<template>
  <q-page
    class="justify-center items-center"
  >
    <div class="column q-pa-lg">
      <center>
        <h4 class="text-h5 q-my-sm">Cadastro de Vacina</h4>
      </center>
      <br/>
      <br/>
      <div class="text-center q-pa-sm">
        <q-form class="q-px-sm q-pt-xl q-pb-lg">
          <q-input class="q-pa-md" filled v-model="name" placeholder="Nome da Vacina" type="name" color="teal-10" :rules="[val => val && val.length > 0 || 'Campo Obrigatório']"/>
          <q-input class="q-pa-md" filled v-model="diseases_type" placeholder="Doença a ser tratada" type="name" color="teal-10" :rules="[val => val && val.length > 0 || 'Campo Obrigatório']"/>
          <q-input class="q-pa-md" filled v-model="first_date" type="date" color="white" :rules="[val => val && val.length > 0 || 'Campo Obrigatório']"/>
          <q-input class="q-pa-md" filled v-model="number_of_doses" type="number" label="Qtde. de aplicações:" color="teal-10" :rules="[val => val && val.length > 0 || 'Campo Obrigatório']"/>
          <q-input class="q-pa-md" filled v-model="period_days_bettwen_doses" type="number" label="Dias entre aplicações:" color="teal-10" :rules="[val => val && val.length > 0 || 'Campo Obrigatório']"/>
          <q-input class="q-pa-md" filled v-model="description" type="text" placeholder="Descrição" color="teal-10" :rules="[val => val && val.length > 0 || 'Campo Obrigatório']"/>
        </q-form>
      </div>
      <div class="q-px-lg">
        <q-btn unelevated size="lg" color="primary" class="full-width text-white" label="Registrar" @click="register()" />
      </div>
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
      if (this.name.length && this.diseases_type.length && this.number_of_doses.length && this.first_date.length && this.period_days_bettwen_doses.length && this.description.length > 0) {
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
        try {
          const response = await api.post('/vacines', params)
          console.log(response.data)
          this.$q.notify({
            type: 'positive',
            message: 'Vacina cadastrada com sucesso!'
          })
        } catch (e) {
          this.$q.notify({
            type: 'negative',
            message: 'Vacina não cadastrada, verifique os campos e tente novamente!',
            position: 'top'
          })
        }
      }
    }
  }
}
</script>
