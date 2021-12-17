<template>
    <div class="sidebar">
        <div class="logo" id="logo"><span class="logo-1">M</span><span class="logo-2">MeFAZZ</span><button class="toggle-menu" @click="toggleMenu"><ion-icon :name="menuShow ? 'close' : 'menu'"></ion-icon></button></div>
        <div class="sidebar-menu" id="list-menu">
            <router-link to="/" class="btn-menu" :id="$route.name == 'Profil' ? 'active' : isActive('Home')" @mouseover="hoverMenu('home')" @mouseleave="blurMenu('home')" @click="toggleMenu">
                <ion-icon name="home"></ion-icon> <span class="title-menu" id="home">Home</span>
            </router-link>
            <span class="title">Menu Utama</span> <span class="title-2">::</span>
            <router-link to="/daftar-item" class="btn-menu" :id="isActive('Daftar Item')" @mouseover="hoverMenu('daftaritem')" @mouseleave="blurMenu('daftaritem')" @click="toggleMenu">
                <ion-icon name="pricetag"></ion-icon> <span class="title-menu" id="daftaritem">Daftar Item</span>
            </router-link>
            <router-link to="/riwayat-transaksi" class="btn-menu" :id="isActive('Riwayat Transaksi')" @mouseover="hoverMenu('riwayattransaksi')" @mouseleave="blurMenu('riwayattransaksi')" @click="toggleMenu">
                <ion-icon name="bag-check"></ion-icon> <span class="title-menu" id="riwayattransaksi">Riwayat Transaksi</span>
            </router-link>
            <router-link to="/deposit" class="btn-menu" :id="isActive('Deposit')" @mouseover="hoverMenu('deposit')" @mouseleave="blurMenu('deposit')" @click="toggleMenu">
                <ion-icon name="card"></ion-icon> <span class="title-menu" id="deposit">Deposit</span>
            </router-link>
            <span class="title">Akun</span> <span class="title-2">::</span>
            <a href="" class="btn-menu" @mouseover="hoverMenu('logout')" @mouseleave="blurMenu('logout')" @click="onLogout">
                <ion-icon name="log-out"></ion-icon> <span class="title-menu" id="logout">Keluar</span>
            </a>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'Sidebar',
        data() {
            return {
                menuShow: false,
            }
        },
        methods: {
            isActive(idmenu) {
                if (idmenu == this.$route.name) {
                    return 'active'
                } else {
                    return 'deactive'
                }
            },
            hoverMenu(idmenu) {
                if (window.innerWidth < '1000' && window.innerWidth > '768') {
                    var x = document.getElementById(idmenu);
                    x.style.display = "block"
                }
            },
            blurMenu(idmenu) {
                if (window.innerWidth < '1000' && window.innerWidth > '768') {
                    var x = document.getElementById(idmenu);
                    x.style.display = "none"
                }
            },
            toggleMenu() {
                if (window.innerWidth <= '768') {
                    if (this.menuShow) {
                        document.getElementById("list-menu").style.animation = "sidebarMenuClose 0.5s linear"
                        document.getElementById("wrapper-content").style.marginLeft = "0"
                        document.getElementById("wrapper").style.width = "100%"
                        document.getElementById("logo").style.marginLeft = "0"

                        var x = setInterval(function() {
                            document.getElementById("list-menu").style.display = "none"
                            clearInterval(x)

                        }, 300)
                        this.menuShow = false

                    } else {
                        document.getElementById("list-menu").style.animation = "sidebarMenuOpen 0.5s linear"
                        document.getElementById("list-menu").style.display = "flex"
                        document.getElementById("wrapper-content").style.marginLeft = "13em"
                        document.getElementById("wrapper").style.width = "150%"
                        document.getElementById("logo").style.marginLeft = "15em"
                        this.menuShow = true
                    }
                }
            },
            onLogout() {
                if (localStorage.getItem('u') && localStorage.getItem('p')) {
                    localStorage.removeItem('u')
                    localStorage.removeItem('p')
                }
            }
        },
    }
</script>

<style scoped>
    .sidebar {
        left: 0;
        top: 0;
        bottom: 0;
        position: fixed;
        width: 20em;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--white);
        box-shadow: 5px 0px 35px -10px rgba(0, 0, 0, 0.25);
        -webkit-box-shadow: 5px 0px 35px -10px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 5px 0px 35px -10px rgba(0, 0, 0, 0.25);
        transition: all 0.5s linear;
        z-index: 5;
    }
    
    .sidebar .logo {
        width: 100%;
        height: 5em;
        font-size: 24px;
        font-weight: 600;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        transition: all 0.5s linear;
    }
    
    .sidebar .logo .toggle-menu {
        display: none;
    }
    
    .sidebar .logo .logo-1 {
        display: none;
    }
    
    .sidebar .logo .logo-2 {
        display: block;
    }
    
    .sidebar .sidebar-menu {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .sidebar .btn-menu {
        width: 70%;
        height: 60px;
        display: flex;
        align-items: center;
        font-size: 18px;
        font-weight: 500;
        padding: 0 20px 0 20px;
        border-radius: 14px;
        color: var(--gray);
        cursor: pointer;
        z-index: 5;
    }
    
    .sidebar .btn-menu ion-icon {
        margin-right: 20px;
    }
    
    .sidebar .btn-menu:hover {
        background-color: var(--white-light);
        color: var(--black);
        animation: btnMenu 0.5s linear;
    }
    
    .sidebar #active {
        background: rgb(142, 68, 173);
        background: linear-gradient(90deg, rgba(142, 68, 173, 1) 0%, rgba(222, 145, 255, 1) 100%);
        box-shadow: 5px 0px 35px 0px rgba(142, 68, 173, 0.25);
        -webkit-box-shadow: 5px 0px 35px 0px rgba(142, 68, 173, 0.25);
        -moz-box-shadow: 5px 0px 35px 0px rgba(142, 68, 173, 0.25);
        color: var(--white);
    }
    
    .sidebar .title {
        color: var(--gray);
        margin: 30px 0 30px 0;
        width: 90%;
        font-size: 14px;
    }
    
    .sidebar .title-2 {
        display: none;
    }
    
    .sidebar .btn-menu .title-menu {
        display: block;
    }
    
    @keyframes btnMenu {
        from {
            padding: 0 20px 0 20px;
        }
        70% {
            padding: 0 30px 0 20px;
        }
        to {
            padding: 0 20px 0 20px;
        }
    }
    
    @media (max-width: 1000px) {
        .sidebar {
            width: 5em;
            transition: all 0.5s linear;
        }
        .sidebar .logo .logo-1 {
            display: block;
        }
        .sidebar .logo .logo-2 {
            display: none;
        }
        .sidebar .sidebar-menu {
            width: 80%;
            display: flex;
        }
        .sidebar .title {
            display: none;
        }
        .sidebar .title-2 {
            display: flex;
            color: var(--gray);
            margin: 30px 0 30px 0;
            width: 90%;
            font-size: 24px;
            justify-content: center;
        }
        .sidebar .btn-menu {
            width: 100%;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        }
        .sidebar .btn-menu:hover {
            animation: none;
        }
        .sidebar .btn-menu ion-icon {
            margin-right: 0px;
        }
        .sidebar .btn-menu .title-menu {
            display: none;
            position: absolute;
            left: 120%;
            width: 10em;
            background-color: var(--black);
            color: var(--white);
            padding: 1em;
            border-radius: 7px;
            font-size: 14px;
            z-index: 1;
        }
    }
    
    @media (max-width: 768px) {
        .sidebar {
            left: 0;
            top: 0;
            width: 100%;
            height: 5em;
        }
        .sidebar .logo .logo-1 {
            display: none;
        }
        .sidebar .logo .logo-2 {
            display: block;
        }
        .sidebar .title {
            display: block;
        }
        .sidebar .title-2 {
            display: none;
        }
        .sidebar .sidebar-menu {
            display: none;
            z-index: 5;
            position: fixed;
            background-color: var(--white);
            left: 0;
            height: 100%;
            width: 13em;
            padding-top: 30px;
            background-color: var(--white);
            animation: sidebarMenuOpen 0.5s linear;
            z-index: 5;
        }
        @keyframes sidebarMenuOpen {
            from {
                width: 0;
            }
            to {
                width: 13em;
            }
        }
        @keyframes sidebarMenuClose {
            from {
                width: 13em;
            }
            to {
                width: 0;
            }
        }
        .sidebar .btn-menu {
            width: 80%;
            justify-content: flex-start;
            padding-left: 20px;
            font-size: 14px;
        }
        .sidebar .btn-menu .title-menu {
            display: block;
            left: 0;
            position: relative;
            width: auto;
            background-color: inherit;
            color: inherit;
            padding: 0;
            border-radius: 0;
            font-size: 14px;
            z-index: 1;
            margin-left: 20px;
        }
        .sidebar .logo .toggle-menu {
            display: block;
            padding: 1em;
            border-radius: 8px;
            position: absolute;
            left: 30px;
            color: var(--gray);
            cursor: pointer;
        }
        .sidebar .logo .toggle-menu ion-icon {
            width: 24px;
            height: 24px;
        }
        .sidebar .logo .toggle-menu:hover {
            background-color: var(--white-light);
            color: var(--black);
        }
    }
</style>