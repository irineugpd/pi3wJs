<template>
  <q-page class="window-height window-width row justify-center items-center" style="background: white;">
    <div class="column q-pa-lg">
      <center>
        <h4 class="text-h5 text-black q-my-sm q-pt-lg absolute-top">Listar Animais</h4>
      </center>
      <q-card class="my-card">
        <q-card-section>
          <div class="text-h6">Perfis dos Animais</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>
    <q-separator />
        <q-card-actions vertical>
          <q-btn flat to="/amostraAnimais/06c2ff10-cd7b-4374-b061-fd58120eecd">Perfil 1</q-btn>
          <q-btn flat to="/amostraAnimais/30d6ef0a-b82b-42b5-a9d9-717ddc99919b">Perfil 2</q-btn>
          <q-btn flat to="/amostraAnimais/a768b60e-e97b-4335-ba3e-01bd1f51ceeb">Perfil 3</q-btn>
          <q-btn flat to="/amostraAniamis/07933137-4481-4fee-a094-590ea80e80a2">Perfil 4</q-btn>
          <q-btn flat to="/amostraAnimais/81165ad8-9b05-485a-b328-723de4210fcb">Perfil 5</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import {
  api
} from 'boot/axios'

export default {
  name: 'listarAnimais',
  data () {
    return {
    }
  },
  methods: {
    async register () {
      const params = {
        owner_id: '60a23d26-2d2b-4827-b20a-fa77385ea659'
      }
      const response = await api.post('/listarAnimais', params)

      console.log(response.data)
    }
  },
  computed: {
    getDescription () {
      return this.horseOptions.map(option => option.description)
    }
  }
}
</script>
