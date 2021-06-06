<template>
  <q-page class="items-center justify-center">
    <div class="q-pa-md justify-center items-center q-gutter-md">
      <q-card class="my-card" flat bordered>
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="/horse.png">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Cadastro De Animais</q-item-label>
          </q-item-section>
          <div class="q-pl-xl q-pa-sm q-gutter-md">
            <q-item-section>
              <q-btn rounded color="green-13" icon="add" to="/cadastroAnimais"/>
            </q-item-section>
          </div>
        </q-item>

        <q-separator />
      </q-card>

      <q-card class="my-card" flat bordered>
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="/medical_services.png">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Cadastro De Vacinas</q-item-label>
          </q-item-section>
          <div class="q-pl-xl q-pa-sm q-gutter-md">
            <q-item-section>
              <q-btn rounded color="green-13" icon="add" to="/cadastroVacina"/>
            </q-item-section>
          </div>
        </q-item>

        <q-separator />
      </q-card>

      <q-card class="my-card" flat bordered>
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="/event.png">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Cadastro De Eventos</q-item-label>
          </q-item-section>
          <div class="q-pl-xl q-pa-sm q-gutter-md">
            <q-item-section>
              <q-btn rounded color="green-13" icon="add" to="/cadastroAgenda"/>
            </q-item-section>
          </div>
        </q-item>
        <q-separator/>
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
