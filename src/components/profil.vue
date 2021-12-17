<template>
    <div class="profil">
        <div v-if="$route.query.uid != null">
            <div v-for="d in $store.state.getUserProfil.data_user" :key="d">
                <div class="profil-cover">
                    <img src="~@/assets/img/cover1.jpg">
                </div>
                <div class="profil-container">
                    <div class="avatar">
                        <img src="~@/assets/img/Cat1.jpg">
                    </div>
                    <button class="btn-edit-profil"
                        v-if="d.username == $route.query.uid"
                        @click="editProfil">
                        <ion-icon :name="edit_profil ? 'close' : 'create'"></ion-icon>
                    </button>
                    <span class="name-tag">{{ d.nama }}</span>
                    <span class="uid-tag">@{{ d.username }}</span>

                    <div class="edit-profil" v-if="edit_profil">
                        <div class="load" v-if="edit_load">
                            <img src="~@/assets/img/ico/load.svg">
                            Mohon tunggu..
                        </div>
                        <div v-else>
                            <h3>Edit Profil</h3>
                            <div class="input">
                                <label for="nama">Nama</label>
                                <input type="text" placeholder="Masukan Nama"
                                    :value="d.nama" id="nama" @input="nama = $event.target.value">
                            </div>
                            <div class="input">
                                <label for="nama">Password</label>
                                <input type="text" placeholder="Masukan Nama"
                                    :value="d.nama" id="password">
                            </div>
                            <button class="save" @click="editProfilSave">
                                Simpan
                            </button>
                            <div class="overlay-result" v-if="save_loading"></div>
                            <div class="result" v-if="save_loading">
                                <div class="load" v-if="!save_success">
                                        <img src="~@/assets/img/ico/load.svg">
                                        Memproses data..
                                </div>
                                <div class="load" v-else>
                                    <h3>Profil berhasil diperbarui</h3>
                                    <button class="btn-save-ok" @click="btnOkSave">OK</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    ASDssad
                </div>
            </div>
        </div>
        <div v-else>
            Profil tidak ditemukan
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Profil',
        data() {
            return {
                edit_profil: false,
                edit_load: true,
                nama: '',
                save_loading: false,
                save_success: false,
            }
        },
        methods: {
            editProfil() {
                if (this.edit_profil) {
                    this.edit_profil = false
                    this.edit_load = true
                } else {
                    this.edit_profil = true
                    setTimeout(() => this.edit_load = false, 1000)
                }
            },
            editProfilSave() {
                this.save_loading = true;

                setTimeout(() => {
                    this.save_success = true
                    this.$store.dispatch('editUserProfil/a', [this.$store.state.config.user_session, this.nama])
                }, 1000)
            },
            btnOkSave() {
                this.save_loading = false
                this.save_success = false  
                this.edit_profil = false
                this.$store.dispatch('getUserProfil/loadUser', this.$route.query.uid)
            }
        },
        mounted() {
            if (this.$route.query.uid != null) {
                this.$store.dispatch('getUserProfil/loadUser', this.$route.query.uid)
                this.$store.dispatch('getUser/loadUser')
            }
        }
    }
</script>

<style scoped>
    .profil {
        width: 97%;
        display: flex;
        flex-direction: column;
    }
    
    .profil .profil-cover {
        height: 15em;
        background-color: var(--gray);
        overflow: hidden;
    }
    
    .profil .profil-cover img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .profil .profil-container {
        height: 30em;
        margin-top: -3em;
        background-color: var(--white);
        border-radius: 24px 24px 0 0;
        padding: 5em;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }
    
    .profil .profil-container .avatar {
        width: 104px;
        height: 104px;
        border-radius: 14px;
        overflow: hidden;
        position: absolute;
        top: -52px;
        background-color: var(--white);
        border: 5px solid var(--white);
    }
    
    .profil .profil-container .avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .profil .profil-container .name-tag {
        color: var(--purple);
        font-weight: 600;
        font-size: 24px;
    }
    
    .profil .profil-container .uid-tag {
        color: var(--gray);
    }
    
    .profil .profil-container .btn-edit-profil {
        position: absolute;
        right: 5%;
        padding: 1em;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        color: var(--gray);
        cursor: pointer;
    }
    
    .profil .profil-container .btn-edit-profil ion-icon {
        width: 24px;
        height: 24px;
    }
    
    .profil .profil-container .btn-edit-profil:hover {
        background-color: var(--white-light);
        color: var(--black)
    }
    
    .profil .profil-container .edit-profil {
        width: 100%;
        padding: 1em;
        margin-top: 10px;
        border: 2px solid var(--white-light);
        border-radius: 14px;
        transition: all 0.5s linear;
        position: relative;
    }
    
    .profil .profil-container .edit-profil .load {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        position: relative;
    }
    
    .profil .profil-container .edit-profil .load img {
        width: 10%;
        height: 10%;
    }
    
    .profil .profil-container .edit-profil h3 {
        color: var(--purple);
    }
    
    .profil .profil-container .edit-profil label {
        margin-right: 10px;
        font-weight: 500;
        width: 10%;
    }
    
    .profil .profil-container .edit-profil .input {
        display: flex;
        align-items: center;
    }
    
    .profil .profil-container .edit-profil input {
        background-color: var(--white-light);
        width: 50%;
        padding: 1em;
        border-radius: 8px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    
    .profil .profil-container .edit-profil .save {
        background-color: var(--purple);
        color: var(--white);
        padding: 1em;
        border-radius: 8px;
        margin-top: 30px;
        cursor: pointer;
    }
    .profil .profil-container .edit-profil .save:hover {
        background-color: var(--purple-dark);
    }
    .profil .profil-container .edit-profil .overlay-result {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.25);
        z-index: 5;
    }
    
    .profil .profil-container .edit-profil .result {
        position: fixed;
        width: 50%;
        left: 25%;
        top: 20%;
        padding: 2em;
        display: flex;
        align-items: center;
        background-color: var(--white);
        box-shadow: 0px 0px 35px -10px rgba(0, 0, 0, 0.25);
        -webkit-box-shadow: 0px 0px 35px -10px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0px 0px 35px -10px rgba(0, 0, 0, 0.25);
        border-radius: 14px;
        z-index: 6;
    }
    
    .profil .profil-container .edit-profil .btn-save-ok {
        padding: 1em;
        width: 30%;
        margin-top: 30px;
        border-radius: 8px;
        background-color: var(--purple);
        color: var(--white);
        font-weight: 600;
        font-size: 14px;
        cursor: pointer;
    }
    
    .profil .profil-container .edit-profil .btn-save-ok:hover {
        background-color: var(--purple-dark);
    }
    
    @media (max-width: 1000px) {
        .profil .profil-container .edit-profil label {
            width: 30%;
        }
    }
    
    @media (max-width: 768px) {
        .profil {
            width: 100%;
        }
        .profil .profil-container {
            padding: 5em 3em 5em 3em;
        }
        .profil .profil-container .edit-profil label {
            width: 30%;
        }
        .profil .profil-container .edit-profil .result {
            left: 10%;
            top: 30%;
            right: 10%;
            width: 63%;
        }
    }
</style>