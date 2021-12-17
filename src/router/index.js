import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/home.vue'
import DaftarItem from '../components/daftar_item.vue'
import RiwayatTransaksi from '../components/riwayat_transaksi.vue'
import Deposit from '../components/deposit.vue'
import Profile from '../components/profil.vue'
import NotFound from '../components/not_found.vue'
import Login from '../components/login.vue'
import Register from '../components/register.vue'
import Item from '../components/itemlist/item.vue'


const routes = [{
        path: '/',
        component: Home,
        name: 'Home',
    },
    {
        path: '/daftar-item',
        component: DaftarItem,
        name: 'Daftar Item',
    },
    {
        path: '/riwayat-transaksi',
        component: RiwayatTransaksi,
        name: 'Riwayat Transaksi',
    },
    {
        path: '/deposit',
        component: Deposit,
        name: 'Deposit',
    },
    {
        path: '/profil',
        component: Profile,
        name: 'Profil'
    },
    {
        path: '/login',
        component: Login,
        name: 'Login',
    },
    {
        path: '/register',
        component: Register,
        name: 'Register',
    },
    {
        path: '/item',
        component: Item,
        name: 'Item',
    },
    {
        path: '/:catchAll(.*)',
        component: NotFound,
        name: '404',
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router