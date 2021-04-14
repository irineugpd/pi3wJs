<template>
  <q-page
    class="window-height window-width row justify-center items-center"
    style="background: white;"
  >
    <div class="column q-pa-lg">
      <q-card square class="shadow-24" style="width:auto;height:auto;">
        <q-card-section class="registroAnimal">
          <h4 class="text-h5 text-white q-my-sm">Amostra de Animais:</h4>
          <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
            <q-btn fab icon="list" color="green-13" />
          </div>
        </q-card-section>
        <center>
          <q-avatar class="q-pt-sm">
            <img src="https://cdn.icon-icons.com/icons2/1286/PNG/512/94_85291.png">
          </q-avatar>
        </center>
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card-section class="my-card">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </q-card-section>
        </div>
        <center>
          <q-avatar>
            <img src="https://cdn.icon-icons.com/icons2/1286/PNG/512/94_85291.png">
          </q-avatar>
        </center>
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </q-card-section>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import {
  api
} from 'boot/axios'

export default {
  name: 'amostraAnimais',
  data () {
    return {
      isPwd: true,
      isPwd2: true,
      nPassword: '',
      repeatPassword: ''
    }
  },
  methods: {
    async register () {
      const params = {
        nPassword: this.nPassword,
        repeatPassword: this.repeatPassword,
        owner_id: '60a23d26-2d2b-4827-b20a-fa77385ea659'

      }
      const response = await api.post('/amostraAnimais', params)

      console.log(response.data)
    }
  }
}
</script>
