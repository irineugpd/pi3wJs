import Vue from 'vue'
import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3334'
})

Vue.prototype.$axios = axios
Vue.prototype.$api = api
