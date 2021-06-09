<template>
  <div class="q-pa-md">
    <center>
      <h4 class="q-my-sm formtitle">Animais</h4>
      <div class="linha"></div>
    </center>
    <br/>
    <br/>
    <q-list bordered style="width:100%;">
      <!-- <q-table title="Usuários" :data="horses" :columns="columns" @row-click="onRowClick" row-key="name"/> -->
      <q-item clickable v-ripple v-for="horse in horses" :key="horse.id" @click="goToNextPage(horse.id)">
        <q-item-section avatar>
          <q-avatar>
            <font-awesome-icon :icon="['fas', 'horse-head']" />
          </q-avatar>
        </q-item-section>
        <q-item-section class="userList">
          {{horse.name}}
          <q-item-label caption>Nome</q-item-label>
        </q-item-section>
        <q-item-section class="userList">
          {{horse.race}}
          <q-item-label caption>Raça</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator />
    </q-list>
  </div>
</template>

<script>
import {
  api
} from 'boot/axios'

export default {
  name: 'horseList',
  data () {
    return {
      horses: [],
      owner_id: '',
      eventType: ''
    }
  },
  methods: {
    async getHorsesByOwnerId (ownerId) {
      var storage = window.localStorage
      api.defaults.headers.authorization = `Bearer ${JSON.parse(storage.getItem('@AppCamila:Token'))}`
      try {
        const response = await api.get(`/horses?user_id=${ownerId}`)

        this.horses = response.data
      } catch (e) {
        this.$q.notify({
          type: 'negative',
          message: 'Não foi possível carregar a lista de animais, tente novamente mais tarde!',
          position: 'bottom'
        })
      }
    },
    async goToNextPage (horseId) {
      switch (this.eventType) {
        case 'register-vaccine':
          this.$router.push(`/cadastroVacina/${this.owner_id}/${horseId}`)
          break
        case 'show-profile':
          this.$router.push(`/amostraAnimais/${horseId}`)
          break
        default:
          this.$q.notify({
            type: 'negative',
            message: 'Ops, parece que algo deu errado, tente novamente mais tarde!',
            position: 'bottom'
          })
      }
    }
  },
  async created () {
    const ownerId = this.$route.params.owner_id
    this.eventType = this.$route.params.event_type
    this.owner_id = ownerId
    await this.getHorsesByOwnerId(ownerId)
  }
}
</script>
