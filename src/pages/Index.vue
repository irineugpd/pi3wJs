<template>
  <q-page class="backgroundIndex">
    <div class="avatar">
      <q-avatar size="70px"/>
    </div>
    <p class="emailInstagram">
      @dracamilasilveiravet
    </p>
    <center class="absolute-bottom q-pa-md q-gutter-md buttonFont">
      <q-btn outline rounded color="black" label="LOGIN" class="q-px-lg" size="20px" to="/Login"/>
      <q-btn filled rounded color="black" label="REGISTRAR" class="q-px-sm" size="20px" to="/cadastroUsuario"/>
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
