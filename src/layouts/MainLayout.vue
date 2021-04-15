<template>
  <q-layout view="hHh lpR lFr">
    <q-header class="colortop">
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
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      overlay
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Links Rápidos
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
    title: 'LOGIN CS_VET APP',
    caption: 'Login',
    icon: 'account_box',
    link: '/'
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
  },
  {
    title: 'Amostra de Animais',
    caption: 'Lista de Animais',
    icon: 'gesture',
    link: '#/amostraAnimais'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
