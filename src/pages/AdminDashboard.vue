<template>
  <q-page
    class="justify-center items-center"
    style="background: transparent;"
  >
    <div class="column q-pa-lg">
      <q-card square class="shadow-24" style="width:auto;height:auto;">
        <center>
          <q-card-section>
            <h4 class="text-h4 formtitle q-my-sm">Menu</h4>
            <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);"/>
            <div class="linha"></div>
          </q-card-section>
        </center>
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
              <q-btn rounded color="green-13" icon="add" to="/UserList"/>
            </q-item-section>
          </div>
        </q-item>
        <q-separator />

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
      </q-card>
    </div>
    <center>
      <text-overline style="color: gray" size="11px" class="absolute-botttom">CS.VET</text-overline>
    </center>
  </q-page>
</template>

<script>
export default {
  name: 'AdminDashboard'
}
</script>
