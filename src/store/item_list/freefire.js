import axios from 'axios'

const plFreeFire = {
    namespaced: true,
    state: {
        payload: null,
    },
    getters: {},
    mutations: {
        updatePosts(state, payload) {
            state.payload = payload
        },
    },
    actions: {
        a({ commit }) {
            axios
                .post(this.state.config.l + this.state.config.pl + '?g=free_fire', {
                    u: this.state.config.user_session,
                    p: this.state.config.password_session,
                })
                .then(response => {
                    commit('updatePosts', response.data.data)
                })
                .catch(error => {
                    console.log(error)
                })
                .finally()
        }
    }
}

export default plFreeFire