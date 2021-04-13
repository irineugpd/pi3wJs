<template>
  <q-page class="window-height window-width row justify-center items-center" style="background: white;">
    <div class="column q-pa-lg">
      <center>
        <h4 class="text-h5 text-black q-my-sm">Eventos</h4>
      </center>
        <center>
          <div class="overflow-hidden">
            <div class="q-pa-md">
              <q-date v-model="date" today-btn :events="event_date" event-color="black"/>
            </div>
            <q-card style="max-width: 75%;">
            <q-tab-panels v-model="date" animated>
              <q-tab-panel v-for="event_date in event_dates" :key="event_date" :name="event_date">
                <div v-for="name_event in name_events" :key="name_event" class="q-mb-md">
                  <h4 class="text-h4">{{ name_event }}</h4>
                  <p v-for="description in descriptions" :key="description">{{description}}</p>
                </div>
              </q-tab-panel>
              </q-tab-panels>
              </q-card>
          </div>
        </center>
        <center>
          <q-btn flat style="color: gray" label="Retornar para LogIn" size="11px" to="/"/>
        </center>
    </div>
  </q-page>
</template>

<script>
import { api } from 'boot/axios'
import { date } from 'quasar'

const todayDate = Date.now()
const formattedDate = date.formatDate(todayDate, 'YYYY/MM/DD', { })

export default {
  name: 'cadastroAgenda',
  data () {
    return {
      date: formattedDate,
      name_events: ['Evento 1', 'Evento 2', 'Evento 3'],
      descriptions: ['Descrição 1', 'Descrição 2', 'Descrição 3 '],
      event_dates: ['2021/04/01', '2021/04/05', '2021/04/06']
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
