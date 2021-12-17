<template>
    <div class="bg">
        <div v-if="$store.state.login.login_notif" class="failed-login">
            <ion-icon name="alert-circle"></ion-icon> Username / Password Salah!
        </div>
        <div v-if="field_empty == 0" class="failed-login field">
            <ion-icon name="warning"></ion-icon> Username kosong!
        </div>
        <div v-if="field_empty == 1" class="failed-login field">
            <ion-icon name="warning"></ion-icon> Password kosong!
        </div>
        <div class="login-container">
            <h3>MeFAZZ Login</h3>
            <form @submit.prevent="onLogin">
                <div class="label-container"><label for="username">Username</label></div>
                <input type="text" placeholder="Username" :value="username" @input="username = $event.target.value">
                <div class="label-container"><label for="password">Password</label></div>
                <input type="password" placeholder="Password" :value="password" @input="password = $event.target.value">
                <div class="btn-flex">
                    <button class="login" type="submit" id="btnLogin">
                        <span v-if="!clickLogin">Masuk</span>
                        <img src="~@/assets/img/ico/load.svg" v-else>
                    </button>
                    <router-link to="/register" class="register">Buat Akun?</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import MD5 from "crypto-js/md5";

    export default {
        name: 'Login',
        data() {
            return {
                username: '',
                password: '',
                clickLogin: false,
                field_empty: null,
            }
        },
        methods: {
            testMD5(t) {
                return MD5(t)
            },
            onLogin() {
                if (this.username == '') {
                    this.field_empty = 0
                    setTimeout(() => this.field_empty = null, 2000)
                } else if (this.password == '') {
                    this.field_empty = 1
                    setTimeout(() => this.field_empty = null, 2000)
                } else {
                    this.field_empty = null
                    
                    this.$store.dispatch('login/a', [this.username, MD5(this.password).toString()])
                    document.getElementById('btnLogin').style.backgroundColor = 'var(--purple-dark)'
                    this.clickLogin = true
                    setTimeout(() => {
                        document.getElementById('btnLogin').style.backgroundColor = 'var(--purple)'
                        this.clickLogin = false
                    }, 1000)
                }
            },
        },
        mounted() {
            if (this.$store.state.config.user_session != null) {
                this.$router.push('/')
            } else if (localStorage.getItem('u')) {
                this.$router.push('/')
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
    
    .login-container {
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
        animation: showLogin 0.5s ease;
    }
    
    @keyframes showLogin {
        from {
            transform: translate(-100%);
        }
        to {
            transform: translate(0);
        }
    }
    
    .login-container form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    
    .login-container input {
        width: 80%;
        height: 2em;
        margin-bottom: 5px;
        padding: 1em;
        border-radius: 14px;
        background-color: var(--white-light);
    }
    
    .login-container .btn-flex {
        display: flex;
        align-items: center;
        width: 80%;
        height: 4em;
        justify-content: space-around;
        margin-top: 30px;
    }
    
    .login-container .btn-flex a.register {
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
        border: 1px solid var(--white-light);
    }
    
    .login-container .btn-flex a.register:hover {
        background-color: var(--white-light);
        color: var(--black);
        transition: all 0.5s linear;
    }
    
    .login-container .label-container {
        width: 80%;
        margin-top: 10px;
        display: flex
    }
    
    .login-container .label-container label {
        width: 10em;
        padding: 0.5em;
        color: var(--white);
        background-color: var(--purple-light);
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        font-size: 12px;
    }
    
    .login-container button.login {
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
    
    .login-container button.login:hover {
        background-color: var(--purple-dark);
    }
    
    .login-container button.login img {
        width: 80%;
        height: 80%;
    }
    
    .failed-login {
        width: auto;
        padding: 1em;
        background-color: var(--red-light);
        border-radius: 14px;
        color: var(--red);
        font-weight: 500;
        display: flex;
        align-items: center;
        animation: loginNotif 0.5s ease;
        font-size: 12px;
        position: fixed;
        top: 15%;
    }
    
    .failed-login.field {
        background-color: var(--yellow-light);
        color: var(--yellow);
    }
    
    .failed-login ion-icon {
        width: 24px;
        height: 24px;
        margin-right: 10px;
    }
    
    @keyframes loginNotif {
        from {
            transform: scale(0);
        }
        to {
            transform: scale(1);
        }
    }
    
    @media (max-width: 1000px) {
        .login-container {
            width: 40%;
        }
    }
    
    @media (max-width: 768px) {
        .login-container {
            width: 70%;
        }
        .login-container .failed-login {
            width: auto;
        }
        .login-container .btn-flex {
            width: 100%;
        }
    }
</style>