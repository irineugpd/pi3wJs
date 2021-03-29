<template>
  <q-page
    class="window-height window-width row justify-center items-center"
    style="background: white;"
  >
    <div class="column q-pa-lg">
        <q-card square class="shadow-24" style="width:300px;height:600px;">
          <q-card-section class="registroAnimal">
            <h4 class="text-h5 text-white q-my-sm">Resetar senha de usuário(a)</h4>
            <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
              <q-btn fab icon="list" color="green-13" />
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl q-pb-lg">
              <h5 class="text-h5 text-black q-my-sm">Digite a nova senha:</h5>
              <q-input v-model="nPassword" filled :type="isPwd ? 'password' : 'text'" hint="Digite a nova senha">
                <template v-slot:append>
                  <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd"/>
                </template>
              </q-input>
            </q-form>
            <q-form class="q-px-sm q-pt-xl q-pb-lg">
              <h5 class="text-h5 text-black q-my-sm">Digite a nova senha:</h5>
              <q-input v-model="repeatPassword" filled :type="isPwd2 ? 'password' : 'text'" hint="Confirme a nova senha">
                <template v-slot:append>
                  <q-icon :name="isPwd2 ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd2 = !isPwd2"/>
                </template>
              </q-input>
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
  name: 'resetAdm',
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
      const response = await api.post('/resetPw', params)

      console.log(response.data)
    }
  }
}
</script>
