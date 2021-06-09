<template>
  <q-page
    class="justify-center items-center backgroundform"
  >
    <div class="column q-pa-lg">
      <center>
        <h4 class="q-my-sm formtitle">Animais</h4>
        <div class="linha"></div>
      </center>
      <br/>
      <div class="text-center q-pa-sm">
        <q-form @submit.prevent.stop="register" class="q-px-sm q-pb-lg">
          <q-input
            ref="name"
            bg-color="grey-4"
            filled
            rounded
            v-model="name"
            hint="Nome"
            class="q-pa-md"
            :rules="[val => !!val || 'Campo Obrigatorio']"
          />
          <q-input
            ref="fluff"
            bg-color="grey-4"
            filled
            rounded
            v-model="fluff"
            hint="Pelagem"
            class="q-pa-md"
            :rules="[val => !!val || 'Campo Obrigatorio']"
          />
          <q-input
            ref="birth_date"
            bg-color="grey-4"
            rounded
            v-model="birth_date"
            filled
            type="date"
            class="q-pa-md"
            :rules="[val => !!val || 'Campo Obrigatorio']"
            hint="Data de nascimento"
          />
          <q-input
            ref="race"
            bg-color="grey-4"
            filled
            rounded
            v-model="race"
            hint="Raça"
            class="q-pa-md"
            :rules="[val => !!val || 'Campo Obrigatorio']"
          />
          <q-input
            ref="avatar"
            bg-color="grey-4"
            v-model="avatar"
            @input="val => { file = val[0] }"
            filled
            rounded
            class="q-pa-md"
            type="file"
            hint="Foto do Animal"
          />
        </q-form>
        <!--<div class="q-px-lg">-->
          <q-btn
              unelevated
              rounded
              size="lg"
              color="green-13"
              class="full-width text-white"
              label="Cadastrar"
              @click="register"
          />
        </div>
      </div>
    <!--</div>-->
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
      fluff: '',
      avatar: null,
      user_id: ''
    }
  },
  methods: {
    async register () {
      var storage = window.localStorage
      if (this.name.length && this.race.length && this.birth_date.length && this.fluff.length > 0) {
        const data = new FormData()
        data.append('name', this.name)
        data.append('user_id', this.user_id)
        data.append('fluff', this.fluff)
        data.append('birth_date', this.birth_date)
        data.append('race', this.race)
        data.append('avatar', this.avatar[0])
        try {
          api.defaults.headers.authorization = `Bearer ${JSON.parse(storage.getItem('@AppCamila:Token'))}`
          await api.post('/horses', data)
          this.$q.notify({
            type: 'positive',
            message: 'Animal registrado com sucesso!'
          })
          this.$router.back()
        } catch (e) {
          this.$q.notify({
            type: 'negative',
            message: 'Não foi possível registrar o animal, tente novamente mais tarde!'
          })
        }
      }
    }
  },
  created () {
    this.user_id = this.$route.params.user_id
  }
}
</script>
