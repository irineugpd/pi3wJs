<template>
  <q-page
    class="window-height window-width row justify-center items-center"
    style="background: white;"
  >
    <div class="column q-pa-lg">
        <q-card square class="shadow-24" style="width:300px;height:600px;">
          <q-card-section class="registroAnimal">
            <h4 class="text-h5 text-white q-my-sm">Registro de Animal</h4>
            <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
              <q-btn fab icon="list" color="green-13" />
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl q-pb-lg">
              <q-input filled v-model="name" label="Nome" class="q-pa-sm"/>
              <q-input filled v-model="fluff" label="Pelagem" class="q-pa-sm"/>
              <q-input v-model="birth_date" filled type="date" class="q-pa-sm" />
              <q-input filled v-model="race" label="Raça" class="q-pa-sm"/>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn unelevated size="lg" color="green-13" class="full-width text-white" label="Registrar" @click="register()" />
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
  name: 'cadastroAnimal',
  data () {
    return {
      name: '',
      race: '',
      birth_date: '',
      fluff: ''
    }
  },
  methods: {
    async register () {
      const params = {
        name: this.name,
        fluff: this.fluff,
        birth_date: this.birth_date,
        owner_id: '96bf63d7-5b39-4552-a04f-0b15ef40847a',
        race: this.race
      }
      try {
        console.log(this.birth_date)
        const response = await api.post('/horses', params)
        console.log(response)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
