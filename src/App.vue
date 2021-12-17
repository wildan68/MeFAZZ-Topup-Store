<template>
  <div v-if="$store.state.config.user_session == null">
    <router-view></router-view>
  </div>
  <div v-else>
    <Dashboard />
  </div>
</template>

<script>
    import Dashboard from './components/dashboard.vue'


    export default {
        name: 'App',
        data() {
            return {}
        },
        components: {
            Dashboard,
        },
        mounted() {
            /* if (localStorage.getItem('u')) {
                this.$store.state.config.user_session = localStorage.getItem('u')
            } else {
                this.$router.push('login')
            } */
            if (localStorage.getItem('u') && localStorage.getItem('p')) {
                this.$store.dispatch('session/a', [localStorage.getItem('u'), localStorage.getItem('p')])
                setTimeout(() => {
                    if (this.$store.state.session.payload.status == 1) {
                        this.$store.state.config.session = true
                        this.$store.state.config.user_session = localStorage.getItem('u')
                        this.$store.state.config.password_session = localStorage.getItem('p')
                    } else {
                        localStorage.removeItem('u')
                        localStorage.removeItem('p')
                        this.$router.push('login')
                    }
                }, 500)
            } else {
                this.$router.push('login')
            }

        }
    }
</script>