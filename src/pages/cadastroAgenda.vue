<template>
  <q-page class="justify-center items-center">
    <div class="column q-pa-lg">
      <center>
        <h4 class="text-h4 formtitle q-my-sm">Cadastro de Eventos</h4>
        <div class="linha"></div>
      </center>
      <br/>
      <br/>
      <div class="text-center q-pa-sm">
        <q-form class="q-px-sm q-pt-xl q-pb-lg">
          <q-input class="q-pa-sm" filled v-model="name_event" placeholder="Evento" color="teal-10"/>
          <q-input class="q-pa-sm" filled v-model="description" placeholder="Descrição do evento" color="teal-10"/>
          <q-input class="q-pa-sm" filled v-model="event_date" type="date" color="teal-10"/>
        </q-form>
      </div>
      <div class="q-px-lg">
        <q-btn unelevated size="lg" color="green-13" class="full-width text-white" label="Registrar" @click="register()" />
      </div>
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
      name_event: '',
      description: '',
      event_date: '',
      user_id: ''
    }
  },
  methods: {
    async register () {
      if (this.name_event.length && this.description.length && this.event_date.length > 0) {
        const storage = window.localStorage
        const user = JSON.parse(storage.getItem('@AppCamila:User'))
        api.defaults.headers.authorization = `Bearer ${JSON.parse(storage.getItem('@AppCamila:Token'))}`
        const params = {
          name: this.name_event,
          message: this.description,
          date: this.event_date,
          user_id: user.is_administrator ? this.user_id : user.id

        }
        try {
          await api.post('/appointments', params)
          this.$q.notify({
            type: 'positive',
            message: 'Evento registrado com sucesso!'
          })
          this.$router.back()
        } catch (e) {
          this.$q.notify({
            type: 'negative',
            message: 'Evento não cadastrado, verifique os campos e tente novamente!',
            position: 'bottom'
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
