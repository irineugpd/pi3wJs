<script>
import { api } from 'src/boot/axios'
export default {
  methods: {
    verifyIsAuthenticated () {
      const user = JSON.parse(this.$q.localStorage.getItem('@AppCamila:User'))
      const token = JSON.parse(this.$q.localStorage.getItem('@AppCamila:Token'))

      if (user && token) {
        api.defaults.headers.authorization = `Bearer ${token}`
        this.$router.push('/menu')
      } else {
        this.$router.push('/login')
      }
    }
  }
}
</script>
