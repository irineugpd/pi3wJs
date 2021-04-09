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
              <q-tab-panel name="2021/04/01">
                <div class="text-h4 q-mb-md">2021/04/01</div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
              </q-tab-panel>
              <q-tab-panel name="2021/04/05">
                <div class="text-h4 q-mb-md">2021/04/05</div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
              </q-tab-panel>
              <q-tab-panel name="2021/04/06">
                <div class="text-h4 q-mb-md">2021/04/06</div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
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
// import { date } from 'quasar'

export default {
  name: 'cadastroAgenda',
  data () {
    return {
      name_event: ['Name1', 'Name2', 'Name3'],
      description: [' ', ' ', ' '],
      date: '2021/04/09',
      event_date: ['2021/04/01', '2021/04/05', '2021/04/06']
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
