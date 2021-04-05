<template>
  <q-page class="window-height window-width row justify-center items-center" style="background: white;">
    <div class="column q-pa-lg">
      <q-card square class="shadow-24" style="width:400px;height:600px;">
        <q-card-section class="registroAnimal">
          <h4 class="text-h5 text-white q-my-sm">Eventos</h4>
          <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
            <q-btn fab icon="list" color="green-13" />
          </div>
        </q-card-section>
        <q-card-section>
          <div v-scroll="scrolled" class="scroll overflow-hidden">
            <div class="q-pa-md">
              <q-date v-model="date" :events="event_date" event-color="black"/>
            </div>
            <q-tab-panels v-model="date" animated transition-prev="jump-up" transition-next="jump-up">
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
  </div>
        </q-card-section>
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
      date: '2021/04/01',
      event_date: ['2021/04/01', '2021/04/05', '2021/04/06']
    }
  },
  methods: {
    scrolled (position) {
      // when this method is invoked then it means user
      // has scrolled the page to `position`
      //
      // `position` is an Integer designating the current
      // scroll position in pixels.
    },
    /* onLoad (index, done) {
      setTimeout(() => {
        if (this.event_date) {
          this.event_date.push({}, {})
          done()
        }
      }, 2000)
    },
    */
    async register () {
      const params = {
        // name_event: this.name_event,
        // description: this.description,
        event_date: this.event_date,
        owner_id: '60a23d26-2d2b-4827-b20a-fa77385ea659'

      }
      const response = await api.post('/events', params)

      console.log(response.data)
    }
  }
}
</script>
