<template>
    <div class="bg">
        <div v-if="$store.state.register.register_notif == 0" class="failed-register">
            <ion-icon name="alert-circle"></ion-icon> Registrasi Gagal, kesalahan!
        </div>
        <div v-if="$store.state.register.register_notif == 1" class="failed-register success">
            <ion-icon name="checkmark"></ion-icon> Registrasi Berhasil
        </div>
        <div v-if="$store.state.register.register_notif == 2" class="failed-register">
            <ion-icon name="alert-circle"></ion-icon> Username telah digunakan!
        </div>
        <div v-if="field_valid == 0" class="failed-register field">
            <ion-icon name="warning"></ion-icon> Username tidak valid!
        </div>
        <div v-if="field_valid == 1" class="failed-register field">
            <ion-icon name="warning"></ion-icon> Nama tidak valid!
        </div>
        <div v-if="field_valid == 2" class="failed-register field">
            <ion-icon name="warning"></ion-icon> Password yang kamu masukan tidak sama!
        </div>
        <div v-if="field_valid == 3" class="failed-register field">
            <ion-icon name="warning"></ion-icon> Username kosong!
        </div>
        <div v-if="field_valid == 4" class="failed-register field">
            <ion-icon name="warning"></ion-icon> Nama kosong!
        </div>
        <div v-if="field_valid == 5" class="failed-register field">
            <ion-icon name="warning"></ion-icon> Password kosong!
        </div>
        <div v-if="field_valid == 6" class="failed-register field">
            <ion-icon name="warning"></ion-icon> Retype Password kosong!
        </div>
        <div v-if="field_valid == 7" class="failed-register field">
            <ion-icon name="warning"></ion-icon> Email kosong!
        </div>
        <div v-if="field_valid == 8" class="failed-register field">
            <ion-icon name="warning"></ion-icon> Penulisan email salah!
        </div>
        <div v-if="field_valid == 9" class="failed-register field">
            <ion-icon name="warning"></ion-icon> Belum validasi username!
        </div>
        <div v-if="field_valid == 10" class="failed-register field">
            <ion-icon name="warning"></ion-icon> Email telah dipakai!
        </div>
        <div class="register-container">
            <router-link to="/login" class="btn-back" v-if="page1">
                <ion-icon name="arrow-back"></ion-icon>
            </router-link>
            <button class="btn-back" v-if="page2" @click="page1 = true;page2 = false">
                <ion-icon name="arrow-back"></ion-icon>
            </button>
            <h3>MeFAZZ Register</h3>
            <div class="pagination">
                <div class="page" id="active">
                    1
                </div>
                <div class="line"></div>
                <div class="page" :id="page2 || page3 ? 'active' : 'deactive'">
                    2
                </div>
                <div class="line"></div>
                <div class="page" :id="page3 ? 'active' : 'deactive'">
                    3
                </div>
            </div>
            <div v-if="page1" class="pagging">
                <form @submit.prevent="nextPage(2)">
                    <div class="label-container"><label for="email">Email</label></div>
                    <input type="text" name ="email" placeholder="Masukan Email" :value="email" @input="email= $event.target.value">
                    <div class="label-container"><label for="password">Password</label></div>
                    <input type="password" placeholder="Masukan Password" :value="password"
                        @input="password = $event.target.value" name="password">
                    <div class="label-container"><label for="password_retype">Retype Password</label></div>
                    <input type="password" placeholder="Ulangi Password" :value="password_retype"
                        @input="password_retype = $event.target.value" name="password_retype">
                    <div class="btn-flex">
                        <button class="register" type="submit" id="btnRegister">
                            Lanjut <ion-icon name="arrow-forward"></ion-icon>
                        </button>
                    </div>
                </form>
            </div>
            <div v-if="page2" class="pagging">
                <div class="label-container"><label for="username">Username</label></div>
                <div class="username-check">
                    <input type="text" placeholder="Username" :value="username" @input="username = $event.target.value">
                    <button class="check" @click="onCheckUsername">Check</button>
                </div>
                <div class="check-username-result exist" v-if="$store.state.register.check_username.status == 0">
                    <ion-icon name="alert"></ion-icon> Username telah dipakai
                </div>
                <div class="check-username-result available" v-if="$store.state.register.check_username.status == 1">
                    <ion-icon name="checkmark"></ion-icon> Username tersedia
                </div>
                <div class="label-container"><label for="nama">Nama</label></div>
                <input type="text" placeholder="Nama Lengkap" :value="nama" @input="nama = $event.target.value">
                <div class="btn-flex">
                    <button class="register" type="submit" id="btnRegister" @click="onRegister">
                        <span v-if="!clickRegister">Daftar</span>
                        <img src="~@/assets/img/ico/load.svg" v-else>
                    </button>
                </div>
            </div>
            <div v-if="page3" class="pagging">
                <img src="~@/assets/img/ico/success.svg" class="success">
                <h3>Pendaftaran Berhasil</h3>
                <br>
                Yey, Selamat akun kamu berhasil dibuat.
                <div class="btn-flex">
                    <button class="register" id="btnRegister" @click="onDashboard">
                        <span v-if="!clickRegister">Dashboard</span>
                        <img src="~@/assets/img/ico/load.svg" v-else>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import MD5 from "crypto-js/md5";
    export default {
        name: 'Register',
        data() {
            return {
                email: '',
                username: '',
                nama: '',
                password: '',
                password_retype: '',
                no_hp: '',
                field_valid: null,
                clickRegister: false,
                page1: true,
                page2: false,
                page3: false,
                notif_msg: '',
            }
        },
        methods: {
            nextPage(i) {
                if (i == 2) {
                    //eslint-disable-next-line
                    var email_check = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                    if (this.email == '') {
                        this.field_valid = 7
                        setTimeout(() => this.field_valid = null, 2000)
                    } else if (this.password == '') {
                        this.field_valid = 5
                        setTimeout(() => this.field_valid = null, 2000)
                    } else if (this.password_retype == '') {
                        this.field_valid = 6
                        setTimeout(() => this.field_valid = null, 2000)
                    } else if (!email_check.test(this.email)) {
                        this.field_valid = 8
                        setTimeout(() => this.field_valid = null, 2000)
                    } else {
                        if (this.password != this.password_retype) {
                            this.field_valid = 2
                            setTimeout(() => this.field_valid = null, 2000)
                        } else {
                            this.$store.dispatch('register/c', this.email)
                            setTimeout(() => {
                                if (this.$store.state.register.check_email.status == 0) {
                                    this.field_valid = 10
                                    setTimeout(() => this.field_valid = null, 2000)
                                } else {
                                    this.page2 = true
                                    this.page1 = false
                                }
                            }, 1000)
                        }
                    }

                }
            },
            onDashboard() {
                localStorage.setItem('u', this.username)
                localStorage.setItem('p', MD5(this.password).toString())
                location.reload()
            },
            onCheckUsername() {
                //eslint-disable-next-line
                var format_username = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

                if (this.username == '') {
                    this.field_valid = 3
                    setTimeout(() => this.field_valid = null, 2000)
                } else if (format_username.test(this.username)) {
                    this.field_valid = 0
                    setTimeout(() => this.field_valid = null, 2000)
                } else {
                    this.$store.dispatch('register/b', this.username)
                }
            },
            onRegister() {
                //eslint-disable-next-line
                var format_nama = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

                if (this.nama == '') {
                    this.field_valid = 4
                    setTimeout(() => this.field_valid = null, 2000)
                } else if (this.$store.state.register.check_username.status == null) {
                    this.field_valid = 9
                    setTimeout(() => this.field_valid = null, 2000)
                } else if (this.$store.state.register.check_username.status != null) {
                    if (this.$store.state.register.username_temp != this.username) {
                        this.field_valid = 9
                        setTimeout(() => this.field_valid = null, 2000)
                    } else {
                        if (format_nama.test(this.nama)) {
                            this.field_valid = 1
                            setTimeout(() => this.field_valid = null, 2000)
                        } else {
                            this.field_valid = null
                            document.getElementById('btnRegister').style.backgroundColor = 'var(--purple-dark)'
                            this.clickRegister = true
                            setTimeout(() => {
                                document.getElementById('btnRegister').style.backgroundColor = 'var(--purple)'
                                this.$store.dispatch('register/a', [this.username, this.email, MD5(this.password).toString(),
                                    this.nama
                                ])
                                this.clickRegister = false
                            }, 1000)
                            setTimeout(() => {
                                if (this.$store.state.register.payload.status == 1) {
                                    this.page1 = false
                                    this.page2 = false
                                    this.page3 = true
                                }
                            }, 1500)
                        }
                    }
                }

            },
            notif(msg) {
                this.notif_msg = msg
            }
        },
        mounted() {
            if (this.$store.state.config.user_session != null) {
                this.$router.push('/')
            } else {
                this.$store.commit('register/e')
            }
        },
    }
</script>

<style scoped>
    .bg {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        background-color: var(--white-light);
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    
    .register-container {
        background-color: var(--white);
        display: flex;
        flex-direction: column;
        width: 30%;
        height: auto;
        padding: 2em;
        align-items: center;
        border-radius: 18px;
        box-shadow: 0px 0px 35px -10px rgba(0, 0, 0, 0.25);
        -webkit-box-shadow: 0px 0px 35px -10px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0px 0px 35px -10px rgba(0, 0, 0, 0.25);
        position: relative;
        animation: showRegister 0.5s ease;
    }
    
    @keyframes showRegister {
        from {
            transform: translate(100%);
        }
        to {
            transform: translate(0);
        }
    }
    
    .register-container .btn-back {
        color: var(--gray);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1em;
        position: absolute;
        top: 2em;
        left: 2em;
        border-radius: 8px;
        cursor: pointer;
    }
    
    .register-container .btn-back:hover {
        background-color: var(--white-light);
        color: var(--black);
    }
    
    .register-container .btn-back ion-icon {
        width: 24px;
        height: 24px;
    }
    
    .register-container .pagging,
    .register-container form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        justify-content: center;
        text-align: center;
    }
    
    .register-container .pagging img.success {
        width: 50%;
        height: 50%;
    }
    
    .register-container input {
        width: 80%;
        height: 2em;
        margin-bottom: 5px;
        padding: 1em;
        border-radius: 14px;
        background-color: var(--white-light);
    }
    
    .register-container .label-container {
        width: 80%;
        margin-top: 10px;
        display: flex;
    }
    
    .register-container .label-container label {
        width: 10em;
        padding: 0.5em;
        color: var(--white);
        background-color: var(--purple-light);
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        font-size: 12px;
        justify-content: flex-start;
        display: flex;
    }
    
    .register-container .btn-flex {
        display: flex;
        align-items: center;
        width: 80%;
        height: 4em;
        justify-content: space-around;
        margin-top: 30px;
    }
    
    .register-container .btn-flex a.register {
        display: flex;
        height: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        padding: 0 20px 0 20px;
        border-radius: 8px;
        font-size: 14px;
        cursor: pointer;
        font-weight: 700;
        color: var(--purple);
        transition: all 0.5s linear;
    }
    
    .register-container .btn-flex a.register:hover {
        background-color: var(--white-light);
        color: var(--black);
        transition: all 0.5s linear;
    }
    
    .register-container button.register {
        background-color: var(--purple);
        width: 40%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--white);
        font-weight: 500;
        font-size: 14px;
        border-radius: 8px;
        cursor: pointer;
    }
    
    .register-container button.register:hover {
        background-color: var(--purple-dark);
    }
    
    .register-container button.register img {
        width: 80%;
        height: 80%;
    }
    
    .register-container button.register ion-icon {
        margin-left: 24px;
    }
    
    .failed-register {
        width: auto;
        padding: 1em;
        background-color: var(--red-light);
        border-radius: 14px;
        color: var(--red);
        font-weight: 500;
        display: flex;
        align-items: center;
        animation: regNotif 0.5s ease;
        font-size: 12px;
        position: fixed;
        top: 5%;
        z-index: 5;
    }
    
    .failed-register.field {
        background-color: var(--yellow-light);
        color: var(--yellow);
    }
    
    .failed-register ion-icon {
        width: 24px;
        height: 24px;
        margin-right: 10px;
    }
    
    .register-container .pagination {
        display: flex;
        width: 100%;
        margin-bottom: 20px;
        align-items: center;
        justify-content: center;
    }
    
    .register-container .pagination .line {
        background-color: var(--white-light);
        width: 2em;
        height: 0.5em;
    }
    
    .register-container .pagination .page {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: var(--gray);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: 600;
        color: var(--white);
        cursor: pointer;
    }
    
    .register-container .pagination .page#active {
        background-color: var(--purple);
    }
    
    .register-container .username-check {
        display: flex;
        justify-content: center;
        width: 85%;
    }
    
    .register-container .username-check button.check {
        height: 4em;
        padding: 1em;
        background-color: var(--purple);
        cursor: pointer;
        margin-left: 10px;
        border-radius: 8px;
        color: var(--white);
        font-weight: 500;
    }
    
    .register-container .username-check button.check:hover {
        background-color: var(--purple-dark);
    }
    
    .register-container .check-username-result {
        width: 80%;
        height: 2em;
        display: flex;
        align-items: center;
        padding: 5px 15px 5px 15px;
        border-radius: 8px;
        font-size: 12px;
    }
    
    .register-container .check-username-result.exist {
        background-color: var(--red-light);
        color: var(--red);
    }
    
    .register-container .check-username-result.available,
    .failed-register.success {
        background-color: var(--green-light);
        color: var(--green);
    }
    
    .register-container .check-username-result ion-icon {
        width: 14px;
        height: 14px;
        margin-right: 10px;
    }
    
    @keyframes regNotif {
        from {
            transform: scale(0);
        }
        to {
            transform: scale(1);
        }
    }
    
    @media (max-width: 1000px) {
        .register-container {
            width: 40%;
        }
    }
    
    @media (max-width: 768px) {
        .register-container {
            width: 70%;
        }
        .register-container .failed-register {
            width: 90%;
        }
        .register-container .btn-back {
            left: 1em;
        }
        .register-container button.register {
            width: 60%;
        }
    }
</style>