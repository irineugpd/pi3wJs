<template>
  <q-page
    class="window-height window-width row justify-center items-center"
    style="background: white;"
  >
    <div class="column q-pa-lg">
      <q-card square class="shadow-24" style="width:auto;height:auto;">
        <q-card-section class="registroAnimal">
          <h4 class="text-h5 text-white q-my-sm">Amostra de Animais:</h4>
          <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
            <q-btn fab icon="list" color="green-13" />
          </div>
        </q-card-section>
        <center>
          <h5>Insira uma imagem para</h5>
          <h5>para o perfil do animal:</h5>
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
          <q-card-actions class="q-px-lg">
            <q-btn unelevated size="lg" color="green-13" class="full-width text-white" label="Salvar perfil" @click="register()" />
          </q-card-actions>
          <q-card-section class="text-center q-pa-sm">
              <q-btn flat style="color: gray" label="Retornar para LogIn" size="11px" to="/"/>
          </q-card-section>
      </q-card>
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
      text: '',
      ph: '',
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
