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
            <q-uploader :factory="factoryFn" multiple style="max-width: 75%;"/>
        </div>
      </center>
      <center>
        <div class="q-pa-md">
          <h5>NOME:</h5>
          <h6>
            {{horseName}}
          </h6>
        </div>
        <div class="q-pa-md">
          <h5>PELAGEM:</h5>
          <h6>
            {{fluffy}}
          </h6>
        </div>
        <div class="q-pa-md">
          <h5>DATA DE NASCIMENTO:</h5>
          <h6>
            {{birthDate}}
          </h6>
        </div>
        <div class="q-pa-md">
          <h5>RAÇA DO ANIMAL:</h5>
          <h6>
            {{racaAnimal}}
          </h6>
        </div>
      </center>
      <br/>
      <center>
        <q-btn unelevated size="lg" color="secondary" rounded label="Histórico de Vacinas" class="center" to="/cartaoVacina"/>
      </center>
      <br/>
      <center>
        <q-btn unelevated size="md" color="primary" filled rounded class="q-px-lg" label="Salvar perfil" @click="salvar()" />
        <br/>
        <br/>
        <q-btn unelevated size="md" outline rounded color="red" label="Cancelar" class="center" to="/listarAnimais"/>
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
