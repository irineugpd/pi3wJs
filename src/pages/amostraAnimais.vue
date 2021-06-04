<template>
  <q-page
    class="justify-center items-center"
    style="background: transparent;"
  >
    <div class="column q-pa-lg">
      <q-card square class="shadow-24" style="width:auto;height:auto;">
        <center>
          <q-card-section>
            <h4 class="text-h4 formtitle q-my-sm">Perfil do Animal</h4>
            <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);"/>
            <div class="linha"></div>
          </q-card-section>
        </center>
        <center>
          <div class="col-6 q-pa-md">
            <q-img :src="`${this.horse.avatar_url}`" native-context-menu>
              <div class="absolute-bottom-right text-subtitle2">
                {{this.horse.name}}
              </div>
            </q-img>
          </div>
        </center>
        <center>
          <q-list bordered padding class="rounded-borders" style="max-width: 350px">

            <q-item clickable v-ripple>
              <q-item-section avatar top>
                <q-avatar size="sm" icon="arrow_forward_ios" color="black" text-color="white" />
              </q-item-section>

              <q-item-section class="absolute-center">
                <q-item-label lines="1">{{this.horse.name}}</q-item-label>
                <q-item-label caption>NOME</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator color="grey-4"/>

            <q-item clickable v-ripple>
              <q-item-section avatar top>
                <q-avatar size="sm" icon="arrow_forward_ios" color="black" text-color="white" />
              </q-item-section>

              <q-item-section class="absolute-center">
                <q-item-label lines="1">{{this.horse.fluff}}</q-item-label>
                <q-item-label caption>PELAGEM</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator color="grey-4"/>

            <q-item clickable v-ripple>
              <q-item-section avatar top>
                <q-avatar size="sm" icon="arrow_forward_ios" color="black" text-color="white" />
              </q-item-section>

              <q-item-section class="absolute-center">
                <q-item-label lines="1">{{this.horse.birth_date}}</q-item-label>
                <q-item-label caption>DATA DE NASCIMENTO</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator color="grey-4"/>

            <q-item clickable v-ripple>
              <q-item-section avatar top>
                <q-avatar size="sm" icon="arrow_forward_ios" color="black" text-color="white" />
              </q-item-section>

              <q-item-section class="absolute-center">
                <q-item-label lines="1">{{this.horse.race}}</q-item-label>
                <q-item-label caption>RAÇA</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </center>
        <div class="q-py-md">
          <center>
            <q-btn
                rounded
                unelevated
                size="md"
                color="green-13"
                class="text-white"
                label="VACINAS"
                :to="`/cartaoVacina/${horse.id}`"
              />
          </center>
        </div>

        <div class="q-pb-md">
          <center>
            <!--<q-btn unelevated size="md" color="primary" filled rounded class="q-px-lg" label="Salvar perfil" @click="salvar()" />-->
            <q-btn unelevated size="md" outline rounded color="red" label="Cancelar" class="center" :to="`/listarAnimais/${this.horse.owner_id}`"/>
          </center>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { api } from 'boot/axios'
import { LocalStorage } from 'quasar'

export default {
  name: 'amostraAnimais',
  props: [
    'horse_id'
  ],
  data () {
    return {
      horse: {}
    }
  },
  methods: {
    async getHorse (id) {
      api.defaults.headers.authorization = `Bearer ${JSON.parse(LocalStorage.getItem('@AppCamila:Token'))}`
      try {
        const response = await api.get(`/horses/${id}`)
        const birthDate = new Date(response.data.birth_date)
        const year = birthDate.getFullYear()
        const month = String(birthDate.getMonth() + 1).padStart(2, '0')
        const day = String(birthDate.getDate()).padStart(2, '0')

        Object.assign(response.data, {
          birth_date: `${day}/${month}/${year}`
        })

        this.horse = response.data
      } catch (e) {
        console.log(e)
      }
    }
  },
  async created () {
    console.log(this.$route.params.horse_id)
    await this.getHorse(this.$route.params.horse_id)
    console.log(this.horse)
  }
}
</script>
