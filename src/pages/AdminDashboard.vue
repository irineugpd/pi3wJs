<template>
  <q-page class="items-center justify-center" style="background: transparent;">
    <div class="q-pa-md justify-center items-center q-gutter-md">
      <q-card square class="shadow-24" style="width:auto;height:auto;">
        <center>
          <q-card-section>
            <h4 class="text-h4 formtitle q-my-sm">Registros</h4>
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
              <q-btn rounded color="green-13" icon="add" to="/UserList/register-horse"/>
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
              <q-btn rounded color="green-13" icon="add" to="/UserList/register-vaccine"/>
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
              <q-btn rounded color="green-13" icon="add" to="/UserList/register-event"/>
            </q-item-section>
          </div>
        </q-item>
        <center>
          <div class="linha"></div>
        </center>
      </q-card>
      <q-card square class="shadow-24" style="width:auto;height:auto;">
        <center>
          <q-card-section>
            <h4 class="text-h4 formtitle q-my-sm">Gerenciamento</h4>
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
            <q-item-label>Listar Animais</q-item-label>
          </q-item-section>
          <div class="q-pl-xl q-pa-sm q-gutter-md">
            <q-item-section>
              <q-btn rounded color="green-13" icon="arrow_right" to="/UserList/show-horse"/>
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
            <q-item-label>Calendário</q-item-label>
          </q-item-section>
          <div class="q-pl-xl q-pa-sm q-gutter-md">
            <q-item-section>
              <q-btn rounded color="green-13" icon="arrow_right" to="/calendario"/>
            </q-item-section>
          </div>
        </q-item>
        <center>
          <div class="linha"></div>
        </center>
      </q-card>
      <center>
        <text-overline style="color: gray" size="11px" class="absolute-botttom">CS.VET</text-overline>
      </center>
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
