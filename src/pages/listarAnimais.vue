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
      <q-item clickable v-ripple v-for="horse in horses" :key="horse.id" :to="`/amostraAnimais/${horse.id}`">
        <q-item-section avatar>
          <q-avatar>
            <font-awesome-icon icon="horse-head" />
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
      horses: []
    }
  },
  methods: {
    async getHorsesByOwnerId (ownerId) {
      const token = JSON.parse(this.$q.localStorage.getItem('@AppCamila:Token'))
      api.defaults.headers.authorization = `Bearer ${token}`
      try {
        const response = await api.get(`/horses?user_id=${ownerId}`)

        this.horses = response.data
      } catch (e) {
        console.log(e)
      }
    }
  },
  async created () {
    const ownerId = this.$route.params.owner_id
    await this.getHorsesByOwnerId(ownerId)
  }
}
</script>
