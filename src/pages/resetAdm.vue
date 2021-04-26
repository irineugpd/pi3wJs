<template>
  <q-page
    class="justify-center items-center"
    style="background: white;"
  >
    <div class="column q-pa-lg">
        <q-card square class="shadow-24" style="width:auto;height:auto;">
          <q-card-section class="registroAnimal">
            <h4 class="text-h5 text-white q-my-sm">Resetar senha de usuário(a)</h4>
            <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
              <q-btn fab icon="list" color="green-13" />
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl q-pb-lg">
              <h6 class="text-h6 text-black q-my-sm">Digite a nova senha:</h6>
              <q-input v-model="nPassword" filled :type="isPwd ? 'password' : 'text'" label="Digite a nova senha" color="teal-10">
                <template v-slot:append>
                  <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer q-pa-sm" standout @click="isPwd = !isPwd"/>
                </template>
              </q-input>
              <h6 class="text-h6 text-black q-my-sm">Confirme a nova senha:</h6>
              <q-input v-model="repeatPassword" filled :type="isPwd2 ? 'password' : 'text'" label="Confirme a nova senha" color="teal-10">
                <template v-slot:append>
                  <q-icon :name="isPwd2 ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd2 = !isPwd2"/>
                </template>
              </q-input>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn unelevated size="lg" color="green-13" class="full-width text-white" label="Resetar Senha" @click="register()" />
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
      try {
        const response = await api.post('/resetPw', params)
        console.log(response.data)
        this.$q.notify({
          type: 'positive',
          message: 'Senha alterada com sucesso'
        })
      } catch (e) {
        this.$q.notify({
          type: 'negative',
          message: 'Senha não redefinida, verifique os campos e digite novamente',
          position: 'bottom'
        })
      }
    }
  }
}
</script>
