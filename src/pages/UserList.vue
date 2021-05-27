<template>
  <div class="q-pa-md">
    <center>
      <h4 class="q-my-sm formtitle">Lista de Usuários</h4>
      <div class="linha"></div>
    </center>
    <br/>
    <br/>
    <q-list bordered style="width:100%;">
      <!-- <q-table title="Usuários" :data="users" :columns="columns" @row-click="onRowClick" row-key="name"/> -->
      <q-item clickable v-ripple v-for="user in users" :key="user.users" to="">
        <q-item-section avatar>
          <q-avatar>
            <q-icon color="primary" name="perm_identity" />
          </q-avatar>
        </q-item-section>

        <q-item-section class="userList">
          {{user.id}}
        </q-item-section>
        <q-item-section class="userList">
          {{user.name}}
        </q-item-section>
        <q-item-section class="userList">
          {{user.address}}
        </q-item-section>
        <q-item-section class="userList">
          {{user.phone_number}}
        </q-item-section>
        <q-item-section class="userList">
          {{user.email}}
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
  name: 'UserList',
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
      users: [
        {
          id: 'd34fdbd4-a379-41db-8524-5c45c2b4f79f',
          icon: 'perm_identity',
          name: 'João Mateus 2',
          phone_number: '(34) 9 9811-0950',
          address: 'Fazenda Barroca',
          email: 'joaomabm@gmail.com',
          age: 19,
          is_administrator: false,
          created_at: '2021-05-17T11:34:29.073Z',
          updated_at: '2021-05-17T11:34:29.073Z'
        },
        {
          id: 'd34abcd4-a379-41db-8524-5c45c2b4f79f',
          name: 'Ruan Carlos',
          phone_number: '(34) 9 9680-7891',
          address: 'Doutor Adélio Maciel, 300. Várzea',
          email: 'ruancarlos@unipam.edu.br',
          age: 19,
          is_administrator: false,
          created_at: '2021-05-17T11:34:29.073Z',
          updated_at: '2021-05-17T11:34:29.073Z'
        }
      ]
    }
  },
  methods: {
    // onRowClick (evt, row) {
    //   console.log('clicked on', row)
    // },

    async getUserList () {
      api.defaults.headers.authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjA3MzU0MzcsImV4cCI6MTYyMzMyNzQzNywic3ViIjoie1wiaWRcIjpcImY1ODU0OGQ2LWU5MWQtNGUwOC1iMWYyLTIyZWI4OTJhM2Y4OFwiLFwiaXNfYWRtaW5pc3RyYXRvclwiOnRydWV9In0.O923JprdiG5q2RKmzWQh41FYWV6fqM3oYVbEWAnQ-iQ'
      try {
        const response = await api.get('/users/list')
        this.users = response.data
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
