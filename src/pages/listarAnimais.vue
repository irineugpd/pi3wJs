<template>
  <div class="q-pa-md">
    <center>
      <h4 class="q-my-sm formtitle">Lista de Animais</h4>
      <div class="linha"></div>
    </center>
    <br/>
    <br/>
    <q-list bordered style="width:100%;">
      <!-- <q-table title="Usuários" :data="horses" :columns="columns" @row-click="onRowClick" row-key="name"/> -->
      <q-item clickable v-ripple v-for="horse in horses" :key="horse.id" :to="`/amostraAnimais/${horse.id}`">
        <q-item-section avatar>
          <q-avatar>
            <q-icon color="primary" name="perm_identity" />
          </q-avatar>
        </q-item-section>
        <q-item-section class="userList">
          {{horse.name}}
        </q-item-section>
        <q-item-section class="userList">
          {{horse.race}}
        </q-item-section>
        <q-item-section class="userList">
          {{horse.birth_date}}
        </q-item-section>
        <q-item-section class="userList">
          {{horse.pelagem}}
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
      // columns: [
      //   {
      //     name: 'id',
      //     label: 'Cliente',
      //     field: 'id',
      //     align: 'left'
      //   },
      //   {
      //     name: 'name',
      //     required: true,
      //     label: 'Nome',
      //     field: row => row.name,
      //     format: val => `${val}`,
      //     sortable: true
      //   },
      //   { name: 'phone_number', label: 'Contato', field: 'phone_number' },
      //   { name: 'address', label: 'Endereço', field: 'address' },
      //   { name: 'email', label: 'E-Mail', field: 'email' }
      // ],
      horses: [
        {
          id: 'd34abcd4-a379-41db-8524-5c45c2b4f79f',
          name: 'Alasão',
          pelagem: 'Branco',
          race: 'Pangaré',
          birth_date: '19/05/2020'
        },
        {
          id: 'd34abcd4-a379-41db-8524-5c45c2b4f79f',
          name: 'Alasão 2',
          pelagem: 'Branco',
          race: 'Pangaré',
          birth_date: '21/05/2020'
        }
      ]
    }
  },
  methods: {
    // onRowClick (evt, row) {
    //   console.log('clicked on', row)
    // },

    async getHorsesByOwnerId (ownerId) {
      api.defaults.headers.authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjEyNTE1ODEsImV4cCI6MTYyMzg0MzU4MSwic3ViIjoie1wiaWRcIjpcImU1MGMzODQyLTQ3ZGQtNGIwNi1iNzUxLWVjNGVlOWRlZDE0YVwiLFwiaXNfYWRtaW5pc3RyYXRvclwiOnRydWV9In0.VlUiuyIIN4MrocMzn4HJLt93KuWVnz7BTPYGuziUAHU'
      try {
        const response = await api.get(`/horses?user_id=${ownerId}`)

        console.log(response.data)

        this.horses = response.data
      } catch (e) {
        console.log(e)
      }
    }
  },
  async created () {
    await this.getHorsesByOwnerId('d34fdbd4-a379-41db-8524-5c45c2b4f79f')
  }
}
</script>
