<template>
  <q-page class="row items-center justify-evenly">
    <q-card square class="card" id="register">
      <q-card-section class="registroVacina dark">
            <h4 class="text-h5 q-my-sm">Registro de Vacina</h4>
          </q-card-section>
      <q-card-section class="card-content">
        <q-input label="Nome da Vacina:"
            v-model="vaccine">
        </q-input>
        <br>
        <!--<q-input label="Qtde. de aplicações:"
            v-model="name"
            type="number">
        </q-input>
        <br>
        <q-input label="Dias entre aplicações:"
            v-model="days"
            type="number">
        </q-input>
        <br> -->
        <q-input label="Descrição"
            v-model="description"
            type="text"
            filled
            autogrow>
        </q-input>
      </q-card-section>
      <q-card-section class="card-actions vertical-middle text-center">
        <div class="row">
          <q-btn class="full-width"
                  label="Cadastrar"
                  @click="register()"
                  color="positive">
          </q-btn>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import {
  api
} from 'boot/axios'

export default {

  data () {
    return {
      vaccine: '',
      /* quantity: '',
      days: 0, */
      description: ''
    }
  },
  methods: {
    async register () {
      const params = {
        vaccine: this.vaccine,
        /* quantity: this.quantity,
        days: this.days, */
        description: this.description
      }
      const response = await api.post('/vaccines', params)

      console.log(response.data)
    }
  }
}
</script>
