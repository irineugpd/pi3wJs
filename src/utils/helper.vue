<script>
import { api } from 'src/boot/axios'
export default {
  methods: {
    verifyIsAuthenticated () {
      var storage = window.localStorage
      const user = JSON.parse(storage.getItem('@AppCamila:User'))
      const token = JSON.parse(storage.getItem('@AppCamila:Token'))

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
