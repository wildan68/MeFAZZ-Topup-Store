import axios from 'axios'

const session = {
    namespaced: true,
    state: {
        payload: null,
        data_user: [],
        cWidth: '',
        sbWidth: '',
    },
    getters: {},
    mutations: {
        updatePayload(state, payload) {
            state.payload = payload
            if (window.screen.width <= 768) {
                state.cWidth = 3
                state.sbWidth = 10
            }
            if (window.screen.width <= 1000) {
                state.cWidth = 4
                state.sbWidth = 20
            } else {
                state.cWidth = 6
                state.sbWidth = 30
            }
        },
        updateDataUser(state, a) {
            state.data_user = a
        },
    },
    actions: {
        a({ commit }, [u, p]) {
            axios
                .post(this.state.config.l + this.state.config.l_session, {
                    u,
                    p,
                })
                .then(response => {
                    commit('updatePayload', response.data)
                    commit('updateDataUser', response.data.data)
                })
                .catch(error => {
                    console.log(error)
                })
                .finally()
        },
    }
}

export default session