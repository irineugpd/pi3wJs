<template>
  <q-page class="backgroundIndex">

    <center class="absolute-bottom q-pa-md q-gutter-md buttonFont">
      <div class="logo"/>
      <q-btn filled rounded color="white" label="LOGIN" class="q-px-lg shadow-24" size="20px" to="/Login" text-color="black"/>
      <q-btn filled rounded color="black" label="REGISTRAR" class="q-px-sm shadow-24" size="20px" to="/cadastroUsuario"/>
    </center>
  </q-page>
</template>

<script>
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
  }
}
</script>
