import Vue from 'vue'
import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://10.0.0.109:3334'
})

Vue.prototype.$axios = axios
Vue.prototype.$api = api
