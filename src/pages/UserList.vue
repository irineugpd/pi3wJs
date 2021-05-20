<template>
  <div class="q-pa-md" style="width:auto">
    <q-list bordered>
      <q-item
      clickable
      v-ripple
      v-for="user in users"
      :key="user.id"
      >
        <q-item-section avatar>
          <q-avatar>
            <q-icon color="primary" name="perm_identity" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          {{users}}
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
      users: [
        {
          id: 'd34fdbd4-a379-41db-8524-5c45c2b4f79f',
          name: 'João Mateus 2',
          phone_number: '34998110950',
          address: 'Fazenda Barroca',
          email: 'joaomabm@gmail.com',
          age: 19,
          is_administrator: false,
          created_at: '2021-05-17T11:34:29.073Z',
          updated_at: '2021-05-17T11:34:29.073Z'
        }
      ]
    }
  },
  methods: {
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
