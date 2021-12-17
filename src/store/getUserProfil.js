import axios from 'axios'

const getUserProfil = {
    namespaced: true,
    state: {
        data_user: [],
    },
    getters: {},
    mutations: {
        updatePosts(state, data_user) {
            state.data_user = data_user
        },
    },
    actions: {
        loadUser({ commit }, u) {
            axios
                .post(this.state.config.l + this.state.config.get_user, {
                    u
                })
                .then(response => {
                    commit('updatePosts', response.data.data)
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
                .finally()
        }
    }
}

export default getUserProfil