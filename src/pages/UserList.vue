<template>
  <div class="q-pa-md">
    <center>
      <h4 class="q-my-sm formtitle">Usuários</h4>
      <div class="linha"></div>
    </center>
    <br/>
    <q-list bordered style="width:100%;">
      <!-- <q-table title="Usuários" :data="users" :columns="columns" @row-click="onRowClick" row-key="name"/> -->
      <q-item clickable v-ripple @click="goToNextPage(user.id)" v-for="user in users" :key="user.id">
        <q-item-section avatar>
          <q-avatar>
            <q-icon color="primary" name="perm_identity" />
          </q-avatar>
        </q-item-section>

        <q-item-section class="userList">
          {{user.name}}
        </q-item-section>
        <q-item-section v-if="!eventType" class="userList">
          <center>
              <div class="q-gutter-sm">
                <q-btn padding="xs" icon="list" class="bg-green"/>
                <q-btn padding="xs" icon="edit" class="bg-green"/>
                <q-btn padding="xs" icon="delete" class="bg-green"/>
              </div>
          </center>
        </q-item-section>
      </q-item>
      <q-separator/>
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
      users: [],
      eventType: ''
    }
  },
  methods: {
    // onRowClick (evt, row) {
    //   console.log('clicked on', row)
    // },

    async getUserList () {
      var storage = window.localStorage
      api.defaults.headers.authorization = `Bearer ${JSON.parse(storage.getItem('@AppCamila:Token'))}`
      try {
        const response = await api.get('/users/list')
        this.users = response.data
      } catch (e) {
        console.log(e)
      }
    },
    async goToNextPage (userId) {
      switch (this.eventType) {
        case 'register-horse':
          this.$router.push(`/cadastroAnimais/${userId}`)
          break
        case 'register-vaccine':
          this.$router.push(`/listarAnimais/${userId}`)
          break
        case 'register-event':
          this.$router.push(`/cadastroAgenda/${userId}`)
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
    this.eventType = this.$route.params.event_type
    await this.getUserList()
  }
}
</script>
