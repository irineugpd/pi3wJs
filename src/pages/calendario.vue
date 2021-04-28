<template>
  <q-page class="window-height window-width row justify-center items-center" style="background: white;">
    <div class="column q-pa-lg">
      <center>
        <h4 class="text-h5 text-black q-my-sm">Eventos</h4>
      </center>
        <center>
          <div class="overflow-hidden">
            <div class="q-pa-md">
              <q-date v-model="date" @navigation="loadEventsByDateAndYear" today-btn :events="event_date" event-color="black"/>
            </div>
            <q-card v-for="event in events" :key="event.id" v-bind="event.id" style="max-width: 75%;">
              <div class="q-mb-md">
                <h4 class="text-h4">{{ event.title }}</h4>
                <p>{{event.message}}</p>
              </div>
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
      name_event: ['Evento 1', 'Evento 2', 'Evento 3'],
      description: ['Feriado', 'Páscoa', 'Feriado'],
      event_date: [],
      events: []
    }
  },
  watch: {
    date: async function (date) {
      const dateObject = new Date(date)
      const year = dateObject.getUTCFullYear()
      const month = dateObject.getUTCMonth() + 1
      const day = dateObject.getUTCDate()
      api.defaults.headers.authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTk0Njc4MjQsImV4cCI6MTYyMjA1OTgyNCwic3ViIjoie1wiaWRcIjpcImY1ODU0OGQ2LWU5MWQtNGUwOC1iMWYyLTIyZWI4OTJhM2Y4OFwiLFwiaXNfYWRtaW5pc3RyYXRvclwiOnRydWV9In0.JG0FzC4YYJOSCJzfsjME8tFSgGZBVGkdGel2b6hCIv4'
      const response = await api.get(`/appointments/day?month=${month}&year=${year}&day=${day}`)
      const events = response.data.map(element => {
        const date = new Date(element.date)
        const day = String(date.getUTCDate()).padStart(2, '0')
        const month = String(date.getUTCMonth() + 1).padStart(2, '0')
        const year = date.getUTCFullYear()
        return {
          id: element.id,
          name: `${year}/${month}/${day}`,
          title: element.name,
          message: element.message
        }
      })
      this.events = events
      console.log(this.events)
    }
  },
  async created () {
    const currentDate = new Date()
    const month = currentDate.getUTCMonth() + 1
    const year = currentDate.getUTCFullYear()
    api.defaults.headers.authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTk0Njc4MjQsImV4cCI6MTYyMjA1OTgyNCwic3ViIjoie1wiaWRcIjpcImY1ODU0OGQ2LWU5MWQtNGUwOC1iMWYyLTIyZWI4OTJhM2Y4OFwiLFwiaXNfYWRtaW5pc3RyYXRvclwiOnRydWV9In0.JG0FzC4YYJOSCJzfsjME8tFSgGZBVGkdGel2b6hCIv4'
    const response = await api.get(`/availability/month-availability?month=${month}&year=${year}`)
    const hasEventDates = response.data.filter(element => {
      return element.hasEvent
    })
    const datesFormated = hasEventDates.map(element => {
      const formatedDay = String(element.day).padStart(2, '0')
      const formatedMonth = String(month).padStart(2, '0')
      return `${year}/${formatedMonth}/${formatedDay}`
    })
    this.event_date = datesFormated
  },
  methods: {
    async loadEventsByDateAndYear ({ year, month }) {
      api.defaults.headers.authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTk0Njc4MjQsImV4cCI6MTYyMjA1OTgyNCwic3ViIjoie1wiaWRcIjpcImY1ODU0OGQ2LWU5MWQtNGUwOC1iMWYyLTIyZWI4OTJhM2Y4OFwiLFwiaXNfYWRtaW5pc3RyYXRvclwiOnRydWV9In0.JG0FzC4YYJOSCJzfsjME8tFSgGZBVGkdGel2b6hCIv4'
      const response = await api.get(`/availability/month-availability?month=${month}&year=${year}`)
      const hasEventDates = response.data.filter(element => {
        return element.hasEvent
      })
      const datesFormated = hasEventDates.map(element => {
        const formatedDay = String(element.day).padStart(2, '0')
        const formatedMonth = String(month).padStart(2, '0')
        return `${year}/${formatedMonth}/${formatedDay}`
      })
      this.event_date = datesFormated
    }
  }

}
</script>
