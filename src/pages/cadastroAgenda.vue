<template>
  <q-page
    class="window-height window-width row justify-center items-center"
    style="background: white;"
  >
    <div class="column q-pa-lg">
        <q-card square class="shadow-24" style="width:300px;height:525px;">
          <q-card-section class="registroAnimal">
            <h4 class="text-h5 text-white q-my-sm">Agenda</h4>
            <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
              <q-btn fab icon="list" color="green-13" />
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl q-pb-lg">
              <q-input class="q-pa-sm" standout v-model="name_event" placeholder="Evento"/>
              <q-input class="q-pa-sm" standout v-model="description" placeholder="Descrição do evento"/>
              <q-input class="q-pa-sm" filled v-model="event_date" type="date" color="white" />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn unelevated size="lg" color="green-13" class="full-width text-white" label="Marcar evento" @click="register()" />
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
      const params = {
        name_event: this.name_event,
        description: this.description,
        event_date: this.event_date,
        owner_id: '60a23d26-2d2b-4827-b20a-fa77385ea659'

      }
      const response = await api.post('/events', params)

      console.log(response.data)
    }
  }
}
</script>
