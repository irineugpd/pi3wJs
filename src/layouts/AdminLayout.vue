<template>
  <q-layout view="hHh Lpr lFr">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          color="black"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <!--<p class="titleDashboard">CS.VET</p>-->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      overlay
      bordered
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          CS.VET
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'MENU',
    caption: 'Página Principal',
    icon: 'home',
    link: '#/AdminDashboard'
  },
  {
    title: 'LISTA DE USUÁRIOS',
    caption: 'Clientes cadastrados',
    icon: 'account_box',
    link: '#/UserList'
  },
  {
    title: 'CADASTRO ANIMAL',
    caption: 'Cadastro de Animais',
    icon: 'pets',
    link: '#/cadastroAnimais'
  },
  {
    title: 'CADASTRO DE VACINAS',
    caption: 'Cadastro Vacina',
    icon: 'medical_services',
    link: '#/cadastroVacina'
  },
  {
    title: 'CALENDÁRIO DE EVENTOS',
    caption: 'Eventos marcados',
    icon: 'event',
    link: '#/calendario'
  }
]

export default {
  name: 'AdmLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
