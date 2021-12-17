import axios from 'axios'

const register = {
    namespaced: true,
    state: {
        payload: null,
        data_user: [],
        register_notif: null,
        check_username: [],
        username_valid: null,
        username_temp: '',
        check_email: [],
        email_temp: '',
    },
    getters: {},
    mutations: {
        updatePayload(state, payload) {
            state.payload = payload
        },
        checkRegister(state) {
            if (state.payload != null) {
                if (state.payload.status == 0) {
                    state.register_notif = 0
                    setTimeout(() => state.register_notif = null, 3500)
                }
                if (state.payload.status == 1) {
                    state.register_notif = 1
                    setTimeout(() => state.register_notif = null, 3500)
                }
                if (state.payload.status == 2) {
                    state.register_notif = 2
                    setTimeout(() => state.register_notif = null, 3500)
                }
            }
        },
        c(state, a) { /*Username Check*/
            state.check_username = a
        },
        d(state, a) { /*Handle Username Bug*/
            state.username_temp = a
        },
        e(state) { /*Handling data user clear */
            state.data_user = null
        },
        f(state, a) { /* Check Email */
            state.check_email = a
        },
        g(state, a) { /*Handle email Bug*/
            state.email_temp = a
        },
    },
    actions: {
        a({ commit }, [u, e, p, n]) {
            axios
                .post(this.state.config.l + this.state.config.register, {
                    u,
                    e,
                    p,
                    n,
                })
                .then(response => {
                    commit('updatePayload', response.data)
                    setTimeout(() => {
                        commit('checkRegister')
                    }, 1000)

                })
                .catch(error => {
                    console.log(error)
                })
                .finally()
        },
        b({ commit }, u) {
            axios
                .post(this.state.config.l + this.state.config.register + '?func=check', {
                    u,
                })
                .then(response => {
                    setTimeout(() => {
                        commit('c', response.data)
                        commit('d', u)
                    }, 1000)
                })
                .catch(error => {
                    console.log(error)
                })
                .finally()
        },
        c({ commit }, e) {
            axios
                .post(this.state.config.l + this.state.config.register + '?func=check_email', {
                    e,
                })
                .then(response => {
                    commit('f', response.data)
                    commit('g', e)
                })
                .catch(error => {
                    console.log(error)
                })
                .finally()
        },
    }
}

export default register