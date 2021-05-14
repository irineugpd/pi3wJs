<template>
  <q-page class="window-height window-width row items-center justify-center">
    <div class="q-pa-md row justify-center items-center q-gutter-md">
      <q-card class="my-card bg-secondary text-white">
        <q-card-section>
          <div class="text-h6">Cadastro Animais</div>
        </q-card-section>

        <q-card-section>
          Página do Cadastro de Animais
        </q-card-section>

        <q-separator dark />

        <q-card-actions>
          <q-btn flat label="Cadastrar Animais" to="/cadastroAnimais"/>
        </q-card-actions>
      </q-card>
      <q-card class="my-card bg-secondary text-white">
        <q-card-section>
          <div class="text-h6">Cadastro Eventos</div>
        </q-card-section>

        <q-card-section>
          Página do Cadastro de Eventos
        </q-card-section>

        <q-separator dark />

        <q-card-actions>
          <q-btn flat label="Cadastrar Evento" to="/cadastroAgenda"/>
        </q-card-actions>
      </q-card>
      <q-card class="my-card bg-secondary text-white">
        <q-card-section>
          <div class="text-h6">Cadastro Vacina</div>
        </q-card-section>

        <q-card-section>
          Página do Cadastro de Vacinas
        </q-card-section>

        <q-separator dark />

        <q-card-actions>
          <q-btn flat label="Cadastrar Vacina" to="/cadastroVacina"/>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'menu',
  data () {
    return {
      lorem: 'text'
    }
  }
}
</script>
