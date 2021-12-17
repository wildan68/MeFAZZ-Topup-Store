import axios from 'axios'

const editUserProfil = {
    namespaced: true,
    state: {
        payload: [],
    },
    getters: {},
    mutations: {
        updatePosts(state, payload) {
            state.payload = payload
        },
    },
    actions: {
        a({ commit }, [u, n]) {
            axios
                .post(this.state.config.l + this.state.config.edit_profil, {
                    u,
                    n,
                })
                .then(response => {
                    commit('updatePosts', response.data)
                })
                .catch(error => {
                    console.log(error)
                })
                .finally()
        }
    }
}

export default editUserProfil