import axios from 'axios'

const getUser = {
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
        loadUser({ commit }) {
            axios
                .post(this.state.config.l + this.state.config.get_user, {
                    u: this.state.config.user_session
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

export default getUser