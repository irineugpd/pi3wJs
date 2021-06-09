<template>
  <q-page class="justify-center items-center" style="background: white;">
    <div class="column q-pa-lg">
      <center>
        <h3 class="formtitle q-my-sm">Eventos</h3>
        <div class="linha"></div>
      </center>
        <center>
          <div class="overflow-hidden">
            <div class="q-pa-md q-pt-xl">
              <q-date v-model="date" @navigation="loadEventsByMonthAndYear" today-btn :events="event_date" event-color="black" color="green-13"/>
            </div>
            <q-card v-for="event in events" :key="event.id" v-bind="event.id" style="max-width: 75%;">
              <div class="q-mb-md">
                <h4 class="text-h4">{{ event.title }}</h4>
                <p>{{event.message}}</p>
              </div>
            </q-card>
          </div>
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
      event_date: [],
      events: []
    }
  },
  watch: {
    date: async function (date) {
      await this.loadEventsInDay(date)
    }
  },
  async created () {
    const currentDate = new Date()
    await this.loadEventsInDay(currentDate)
    const month = currentDate.getUTCMonth() + 1
    const year = currentDate.getUTCFullYear()

    this.loadEventsByMonthAndYear({ year, month })
  },
  methods: {
    async loadEventsByMonthAndYear ({ year, month }) {
      var storage = window.localStorage

      const token = JSON.parse(storage.getItem('@AppCamila:Token'))

      api.defaults.headers.authorization = `Bearer ${token}`

      try {
        const response = await api.get(`/appointments/month-availability?month=${month}&year=${year}`)
        const hasEventDates = response.data.filter(element => {
          return element.hasEvent
        })
        const datesFormated = hasEventDates.map(element => {
          const formatedDay = String(element.day).padStart(2, '0')
          const formatedMonth = String(month).padStart(2, '0')
          return `${year}/${formatedMonth}/${formatedDay}`
        })
        this.event_date = datesFormated
      } catch (e) {
        this.$q.notify({
          type: 'negative',
          message: 'Falha ao campos e tente novamente!',
          position: 'top'
        })
      }
    },
    async loadEventsInDay (date) {
      const dateObject = new Date(date)
      const year = dateObject.getUTCFullYear()
      const month = dateObject.getUTCMonth() + 1
      const day = dateObject.getUTCDate()
      var storage = window.localStorage

      const token = JSON.parse(storage.getItem('@AppCamila:Token'))

      api.defaults.headers.authorization = `Bearer ${token}`
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
    }
  }

}
</script>
