<template>
  <q-page
    class="window-height window-width row justify-center items-center"
    style="background: white;"
  >
    <div class="column q-pa-lg">
      <center>
        <h5>Perfil do Animal:</h5>
      </center>
      <center>
        <div class="q-pa-md">
          <div class="q-pa-md">
              <q-uploader
              :factory="factoryFn"
              multiple
              style="max-width: 300px"
              />
          </div>
        </div>
      </center>
      <center>
        <div class="q-pa-md">
          <div class="q-gutter-y-md column" style="max-width: 300px">
            <div class="text-bold">
              <h5>NOME:</h5>
            </div>
            <p>
              {{horseName}}
            </p>
          </div>
        </div>
        <div class="q-pa-md">
          <h5>PELAGEM:</h5>
          <div class="q-gutter-y-md column" style="max-width: 300px">
            <p>
              {{fluffy}}
            </p>
          </div>
        </div>
        <div class="q-pa-md">
          <h5>DATA DE NASCIMENTO:</h5>
          <div class="q-gutter-y-md column" style="max-width: 300px">
            <p>
              {{birthDate}}
            </p>
          </div>
        </div>
        <div class="q-pa-md">
          <h5>RAÇA DO ANIMAL:</h5>
          <div class="q-gutter-y-md column" style="max-width: 300px">
            <p>
              {{racaAnimal}}
            </p>
          </div>
        </div>
      </center>
      <center>
        <q-btn unelevated size="lg" color="primary" filled rounded class="center text-white" label="Salvar perfil" @click="salvar()" />
      </center>
    </div>
  </q-page>
</template>

<script>
import {
} from 'boot/axios'

export default {
  name: 'amostraAnimais',
  data () {
    return {
      horseName: 'Junin Pangaré',
      fluffy: 'Preta',
      birthDate: '10/05/2015',
      racaAnimal: 'Manga Larga',
      filesImages: null,
      dense: false
    }
  },
  methods: {
    factoryFn (files) {
      this.filesimages = files
      console.log(this.filesImages)
    }
  }
}
</script>
