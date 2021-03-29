<template>
  <q-page
    class="window-height window-width row justify-center items-center"
    style="background: white;"
  >
    <div class="column q-pa-lg">
        <q-card square class="shadow-24" style="width:300px;height:525px;">
          <q-card-section class="registroAnimal">
            <h4 class="text-h5 text-white q-my-sm">Recuperar Senha</h4>
            <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
              <q-btn fab icon="list" color="green-13" />
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl q-pb-lg">
              <h5 class="text-h5 text-black q-my-sm">Digite a nova senha:</h5>
              <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" label="Senha">
                <template v-slot:append>
                  <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer q-pa-sm" standout @click="isPwd = !isPwd"/>
                </template>
              </q-input>
              <h5 class="text-h5 text-black q-my-sm">Repita a senha:</h5>
              <q-input v-model="password2" filled :type="isPwd2 ? 'password' : 'text'" label="Repita a senha">
                <template v-slot:append>
                  <q-icon :name="isPwd2 ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd2 = !isPwd2"/>
                </template>
              </q-input>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn unelevated size="lg" color="green-13" class="full-width text-white" label="Solicitar" @click="solicitar()" />
          </q-card-actions>
          <q-card-section class="text-center q-pa-sm">
            <q-btn flat style="color: gray" label="Retornar para LogIn" size="11px" to="/"/>
          </q-card-section>
        </q-card>
    </div>
  </q-page>
</template>

<script>
import { api } from 'boot/axios'

export default {
  name: 'recuperarSenha',
  data () {
    return {
      isPwd: true,
      isPwd2: true,
      password: '',
      password2: ''
    }
  },
  methods: {
    async solicitar () {
      const params = {
        password: this.password
      }
      const response = await api.post('/recuperarSenha', params)

      console.log(response.data)
    }
  }
}
</script>
