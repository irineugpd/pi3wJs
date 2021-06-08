<template>
  <q-layout view="hHh Lpr lFr">
    <q-header>
      <q-toolbar>
        <q-btn
          class="absolute-top"
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
    caption: 'Login',
    icon: 'account_box',
    link: '#/Login'
  },
  {
    title: 'CALENDÁRIO DE EVENTOS',
    caption: 'Eventos marcados',
    icon: 'event',
    link: '#/calendario'
  },
  {
    title: 'CARTAO DE VACINA',
    caption: 'Vacinas do Animal',
    icon: 'dashboard_customize',
    link: '#/cartaoVacina'
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
