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
    link: '#/Login'
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
    title: 'AMOSTRA DE ANIMAIS',
    caption: 'Lista de Animais',
    icon: 'gesture',
    link: '#/amostraAnimais'
  },
  {
    title: 'CARTAO DE VACINA',
    caption: 'Vacinas do Animal',
    icon: 'dashboard_customize',
    link: '#/cartaoVacina'
  },
  {
    title: 'LISTA DE ANIMAIS',
    caption: 'Perfil de Animais',
    icon: 'list',
    link: '#/listarAnimais'
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
