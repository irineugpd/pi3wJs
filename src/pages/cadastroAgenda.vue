<template>
  <q-page class="justify-center items-center">
    <div class="column q-pa-lg">
      <center>
        <h4 class="text-h5 q-my-sm">Cadastro de Eventos</h4>
      </center>
      <br/>
      <br/>
      <div class="text-center q-pa-sm">
        <q-form class="q-px-sm q-pt-xl q-pb-lg">
          <q-input class="q-pa-sm" filled v-model="name_event" placeholder="Evento" color="teal-10"/>
          <q-input class="q-pa-sm" filled v-model="description" placeholder="Descrição do evento" color="teal-10"/>
          <q-input class="q-pa-sm" filled v-model="event_date" type="date" color="teal-10"/>
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
  name: 'cadastroAgenda',
  data () {
    return {
      name_event: '',
      description: '',
      event_date: ''
    }
  },
  methods: {
    async register () {
      if (this.name_event.length && this.description.length && this.event_date.length > 0) {
        const params = {
          name: this.name_event,
          message: this.description,
          date: this.event_date,
          user_id: '60a23d26-2d2b-4827-b20a-fa77385ea658'

        }
        try {
          const response = await api.post('/appointments', params)
          console.log(response.data)
          this.$q.notify({
            type: 'positive',
            message: 'Evento registrado com sucesso!'
          })
        } catch (e) {
          this.$q.notify({
            type: 'negative',
            message: 'Evento não cadastrado, verifique os campos e tente novamente!',
            position: 'bottom'
          })
        }
      }
    }
  }
}
</script>
