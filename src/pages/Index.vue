<template>
  <q-page class="backgroundIndex">

    <center class="absolute-bottom q-pa-md q-gutter-md buttonFont">
      <q-btn filled rounded color="green-13" label="Começar" class="q-px-lg" size="20px" to="/Login" text-color="white"/>
      <div class="logo"/>
    </center>
    <div class="logoApp">
      <div class="q-pa-md">
        <div class="q-col-gutter-md row items-start">
          <q-img
          src="/logoCSvet.png"
          :ratio="16/9"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import helper from 'src/utils/helper.vue'
export default {
  data () {
    return {
      sizes: ['XL'],
      email: ''
    }
  },
  methods: {
    emailValidation () {
      this.$q.dialog({
        title: 'E-mail',
        message: 'Digite seu e-mail do gravatar',
        prompt: {
          model: '',
          isValid: val => val.length > 8,
          type: 'text'
        },
        cancel: true,
        persistent: true
      }).onOk(data => {
        this.email = data
      })
    }
  },
  created () {
    helper.verifyIsAuthenticated()
  }
}
</script>
