<script>
import { api } from 'src/boot/axios'
import { LocalStorage } from 'quasar'
export default {
  methods: {
    verifyIsAuthenticated () {
      const user = JSON.parse(LocalStorage.getItem('@AppCamila:User'))
      const token = JSON.parse(LocalStorage.getItem('@AppCamila:Token'))

      if (user && token) {
        api.defaults.headers.authorization = `Bearer ${token}`
        return true
      } else {
        return false
      }
    }
  }
}
</script>
