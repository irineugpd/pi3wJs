<template>
  <q-page class="window-height window-width row justify-center items-center" style="background: white;">
    <div class="column q-pa-lg">
      <center>
        <h4 class="text-h5 text-black q-my-sm">Eventos</h4>
      </center>
        <center>
          <div class="overflow-hidden">
            <div class="q-pa-md">
              <q-date v-model="date" today-btn :events="getEventDate" event-color="black"/>
            </div>
            <q-card style="max-width: 75%;">
            <q-tab-panels v-model="date" animated>

              <q-tab-panel v-for="singleEvent in events_options" :key="singleEvent.event_date" :name="singleEvent.event_date">
                <div class="q-mb-md">
                  <h4 class="text-h4">{{ singleEvent.name_event }}</h4>
                  <p>{{ singleEvent.description }}</p>
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
import { date } from 'quasar'

const todayDate = Date.now()
const formattedDate = date.formatDate(todayDate, 'YYYY/MM/DD', { })

export default {
  name: 'cadastroAgenda',
  data () {
    return {
      date: formattedDate,
      /* name_event: ['Evento 1', 'Evento 2', 'Evento 3'],
      description: ['Feriado', 'Páscoa', 'Feriado'],
      event_date: ['2021/04/02', '2021/04/04', '2021/04/21'], */
      events_options: [
        {
          name_event: 'Evento 1',
          description: 'Feriado',
          event_date: '2021/04/02'
        },
        {
          name_event: 'Evento 2',
          description: 'Páscoa',
          event_date: '2021/04/04'
        },
        {
          name_event: 'Evento 3',
          description: 'Feriado',
          event_date: '2021/04/21'
        }
      ]
    }
  },
  computed: {
    getEventDate () {
      return this.events_options.map(option => option.event_date)
    }
  }
}
</script>
