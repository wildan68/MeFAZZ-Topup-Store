import axios from 'axios'

const login = {
    namespaced: true,
    state: {
        payload: null,
        data_user: [],
        login_notif: false,
    },
    getters: {},
    mutations: {
        updatePayload(state, payload) {
            state.payload = payload
        },
        updateDataUser(state, a) {
            state.data_user = a
        },
        checkLogin(state) {
            if (state.payload != null) {
                if (state.payload.status == 0) {
                    state.login_notif = true
                    setTimeout(() => state.login_notif = false, 3500)
                }
                if (state.payload.status == 1) {
                    localStorage.setItem('u', state.data_user[0].username)
                    localStorage.setItem('p', state.data_user[0].password)
                    this.state.config.session = true
                    location.reload()
                }
            }
        },
    },
    actions: {
        a({ commit }, [u, p]) {
            axios
                .post(this.state.config.l + this.state.config.login, {
                    u,
                    p,
                })
                .then(response => {
                    commit('updatePayload', response.data)
                    commit('updateDataUser', response.data.data)
                    setTimeout(() => {
                        commit('checkLogin')
                    }, 1000)

                })
                .catch(error => {
                    console.log(error)
                })
                .finally()
        },
    }
}

export default login