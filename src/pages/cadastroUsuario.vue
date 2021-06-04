<template>
  <q-page class="q-pa-md">
      <center>
        <h4 class="loginTitle">USUÁRIO</h4>
      </center>
      <div class="absolute-bottom q-pb-md">
        <q-form class="q-px-sm q-pb-xl">
          <q-input
            filled
            bg-color="grey-3"
            v-model="name"
            label="Nome Completo"
            class="q-pa-md"
            :rules="[val => val && val.length > 0 || 'Nome Obrigatório']"
            color="teal-10"
          >
            <template v-slot:append>
              <q-icon name="person" class="q-pr-sm"/>
            </template>
          </q-input>
          <q-input
            filled
            bg-color="grey-3"
            v-model="cpf"
            label="CPF"
            class="q-pa-md"
            mask="###.###.###-##"
            :rules="[val => val && val.length > 0 || 'CPF Obrigatório']"
          >
            <template v-slot:append>
              <q-icon name="badge" class="q-pr-sm"/>
            </template>
          </q-input>
          <q-input
            filled
            bg-color="grey-3"
            v-model="email"
            label="E-mail"
            class="q-pa-md"
            :rules="[val => val && val.length > 0 || 'E-mail Obrigatorio']"
            color="teal-10"
          >
            <template v-slot:append>
              <q-icon name="mail" class="q-pr-sm"/>
            </template>
          </q-input>
          <q-input
            bg-color="grey-3"
            v-model="password"
            filled :type="isPwd ? 'password' : 'text'"
            label="Senha"
            class="q-pa-md"
            :rules="[val => val.length || 'Insira sua senha']"
            color="teal-10"
          >
            <template v-slot:append>
              <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer q-pa-sm" standout @click="isPwd = !isPwd"/>
            </template>
          </q-input>
          <q-input
            bg-color="grey-3"
            v-model="password2"
            filled :type="isPwd2 ? 'password' : 'text'"
            label="Confirme a senha"
            class="q-pa-md"
            :rules="[val => val.length || 'Confirme a sua senha']"
            color="teal-10"
          >
            <template v-slot:append>
              <q-icon :name="isPwd2 ? 'visibility_off' : 'visibility'" class="cursor-pointer q-pa-sm" standout @click="isPwd2 = !isPwd2"/>
            </template>
          </q-input>
        </q-form>
        <center>
          <q-btn unelevated rounded color="green-13" label="Confirmar" class="q-px-lg" @click="cadastrar()" />
          <q-btn flat color="gray-8" label="Já me cadastrei" to="/Login"/>
        </center>
      </div>
  </q-page>
</template>

<script>
import {
  api
} from 'boot/axios'

export default {

  data () {
    return {
      isPwd: true,
      isPwd2: true,
      name: '',
      email: '',
      cpf: '',
      password: '',
      password2: ''
    }
  },
  methods: {
    async cadastrar () {
      if (this.email.length && this.password.length && this.password2.length && this.name.length > 0) {
        if (this.cpf.length > 13) {
          if (this.password === this.password2) {
            try {
              const cleanCPF = this.cpf.replace(/(?:\.|-|\/|\s)/g, '')
              const params = {
                email: this.email,
                name: this.name,
                password: this.password,
                cpf: cleanCPF,
                address: 'Fazenda perto da puta que te pariu',
                age: 19,
                phone_number: '34998827490'
              }
              await api.post('/users', params)
              this.$router.push('/login')
            } catch (e) {
              this.$q.notify({
                type: 'negative',
                message: 'Erro ao criar seu usuário, tente novamente mais tarde.',
                position: 'top'
              })
            }
          } else {
            this.$q.notify({
              type: 'negative',
              message: 'As senhas devem ser iguais.',
              position: 'top'
            })
          }
        } else {
          this.$q.notify({
            type: 'negative',
            message: 'O CPF deve ser preenchido corretamente!',
            position: 'top'
          })
        }
      } else {
        this.$q.notify({
          type: 'negative',
          message: 'Preencha os campos.',
          position: 'top'
        })
      }
    }
  }
}
</script>
