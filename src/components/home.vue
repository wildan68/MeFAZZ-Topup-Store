<template>
    <div class="banner-welcome">
        <div class="left">
            Selamat Datang
            <span class="name" :style="'margin-left:5px'" v-for="d in $store.state.getUser.data_user" :key="d">
                {{ d.nama }}
            </span>
        </div>
        <div class="right">
            <button class="btn-notif" @click="notifications ? notifications = false : notifications = true, profil_menu = false" :id="notifications ? 'active' :  'deactive'">
                <ion-icon name="notifications"></ion-icon>
            </button>
            <div class="profil" @click="profil_menu ? profil_menu = false : profil_menu = true, notifications = false">
                <img src="~@/assets/img/Cat1.jpg">
            </div>
            <div class="notifications" v-if="notifications">
                Tidak Ada Notifikasi 
            </div>
            <div class="profil-menu" v-if="profil_menu">
                <router-link :to="'/profil?uid='+$store.state.getUser.data_user[0].username"> My Profil</router-link>
                <span class="line"></span>
                <a href="#">Teman</a>
            </div>
        </div>
    </div>
    <div class="flex-info">
        <SaldoCard/>
        <BannerInfo/>
    </div>
    <ItemPopuler/>
</template>

<script>
    import SaldoCard from './saldo_card.vue'
    import BannerInfo from './banner_info.vue'
    import ItemPopuler from './item_populer.vue'
    export default {
        name: 'Home',
        props: {
            u: String,
        },
        data() {
            return {
                notifications: false,
                profil_menu: false,
            }
        },
        components: {
            SaldoCard,
            BannerInfo,
            ItemPopuler,
        }
    }
</script>

<style scoped>
    .banner-welcome {
        margin-top: 30px;
        width: 80%;
        height: 100px;
        background-color: var(--white);
        display: flex;
        align-items: center;
        padding: 0 5% 0 5%;
        border-radius: 18px;
        color: gray;
        box-shadow: 0px 0px 35px -10px rgba(0, 0, 0, 0.25);
        -webkit-box-shadow: 0px 0px 35px -10px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0px 0px 35px -10px rgba(0, 0, 0, 0.25);
    }
    
    .name {
        color: var(--purple);
        font-weight: 600;
    }
    
    .banner-welcome .left {
        flex: 1;
    }
    
    .banner-welcome .right {
        flex: 1;
        justify-content: flex-end;
        display: flex;
        position: relative;
    }
    
    .banner-welcome .right .btn-notif {
        padding: 1em 1.5em 1em 1.5em;
        border-radius: 14px;
        color: var(--gray);
        cursor: pointer;
        z-index: 0;
    }
    
    .banner-welcome .right .btn-notif:hover {
        background-color: var(--white-light);
        color: var(--black);
    }
    .banner-welcome .right .btn-notif#active {
        background-color: var(--white-light);
        color: var(--black);
    }
    .banner-welcome .right ion-icon {
        width: 24px;
        height: 24px;
    }
    
    .banner-welcome .right .notifications {
        height: 5em;
        width: 10em;
        background-color: var(--white);
        box-shadow: 0px 0px 35px -10px rgba(0, 0, 0, 0.25);
        -webkit-box-shadow: 0px 0px 35px -10px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0px 0px 35px -10px rgba(0, 0, 0, 0.25);
        position: absolute;
        bottom: -7em;
        right: 5em;
        z-index: 3;
        padding: 1em;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .banner-welcome .right .profil {
        cursor: pointer;
        width: 48px;
        height: 48px;
        border-radius: 14px;
        overflow: hidden;
        margin-left: 10px;
    }
    .banner-welcome .right .profil img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    .banner-welcome .right .profil-menu {
        height: 5em;
        width: 10em;
        background-color: var(--white);
        box-shadow: 0px 0px 35px -10px rgba(0, 0, 0, 0.25);
        -webkit-box-shadow: 0px 0px 35px -10px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0px 0px 35px -10px rgba(0, 0, 0, 0.25);
        position: absolute;
        bottom: -7em;
        right: 0;
        z-index: 3;
        padding: 1em;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .banner-welcome .right .profil-menu a:hover {
        color: var(--purple)
    }
    .banner-welcome .right .profil-menu .line {
        background-color: var(--white-light);
        width: 100%;
        height: 3px;
        margin: 5px 0 5px 0;
    }
    .flex-info {
        width: 90%;
        height: auto;
        margin-top: 30px;
        display: flex;
        justify-content: space-around;
    }
    
    @media (max-width: 768px) {
        .flex-info {
            display: block;
        }
    }
</style>