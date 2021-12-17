<template>
    <div class="saldo-card" v-for="d in $store.state.getUser.data_user" :key="d">
        <span class="name">{{ d.nama }}</span>
        <span class="user-id">@{{ d.username }}</span>
        <div class="flex-frame">
            <div class="saldo-frame">
                <ion-icon name="card"></ion-icon>
                <span class="saldo">{{ rupiah(d.saldo) }}</span>
            </div>
            <button class="btn-add-fund">
                <img src="~@/assets/img/ico/add.svg">
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Saldo',
        data() {
            return {
                data_user2: []
            }
        },

        methods: {
            rupiah(angka) {
                var rupiah = '';
                var angkarev = angka.toString().split('').reverse().join('');
                for (var i = 0; i < angkarev.length; i++)
                    if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.';
                return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('');
            }
        },
        mounted() {
            this.$store.dispatch('getUser/loadUser')
        }
    }
</script>

<style scoped>
    .saldo-card {
        flex: 1;
        padding: 30px;
        background-color: var(--white);
        border-radius: 18px;
        display: flex;
        box-shadow: 0px 0px 35px -10px rgba(0, 0, 0, 0.25);
        -webkit-box-shadow: 0px 0px 35px -10px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0px 0px 35px -10px rgba(0, 0, 0, 0.25);
        flex-direction: column;
        margin-right: 2%;
    }
    
    .saldo-card .name {
        color: var(--purple);
        font-size: 24px;
        font-weight: 600;
    }
    
    .saldo-card .user-id {
        color: var(--gray);
    }
    
    .saldo-card .flex-frame {
        display: flex;
        margin-top: 20px;
        align-items: center;
    }
    
    .saldo-card .saldo-frame {
        background-color: var(--green-light);
        color: var(--green);
        font-weight: 700;
        padding: 20px;
        border-radius: 14px;
        display: flex;
        align-items: center;
    }
    
    .saldo-card .saldo-frame ion-icon {
        width: 24px;
        height: 24px;
        z-index: 0;
        position: relative;
    }
    
    .saldo-card .saldo-frame .saldo {
        margin-left: 20px;
    }
    
    .saldo-card .btn-add-fund {
        width: 48px;
        height: 48px;
        background: rgb(119, 238, 150);
        background: linear-gradient(90deg, rgba(119, 238, 150, 1) 4%, rgba(114, 255, 174, 1) 87%);
        border-radius: 14px;
        margin-left: 10px;
        transition: background 0.5s linear;
        cursor: pointer;
    }
    
    .saldo-card .btn-add-fund:hover {
        background: rgb(119, 238, 150);
        background: linear-gradient(90deg, rgba(119, 238, 150, 1) 36%, rgba(114, 255, 174, 1) 100%);
        transition: background 0.5s linear;
    }
    
    .saldo-card .btn-add-fund img {
        width: 24px;
        height: 24px;
        color: var(--white);
    }
    
    @media (max-width: 1000px) {
        .saldo-card {
            margin-bottom: 30px;
            margin-right: 0;
        }
        .saldo-card .saldo-frame ion-icon {
            width: 18px;
            height: 18px;
            z-index: 0;
        }
        .saldo-card .saldo-frame .saldo {
            margin-left: 20px;
            font-size: 14px;
        }
        .saldo-card .btn-add-fund {
            width: 50px;
            background-color: var(--green);
            border-radius: 12px;
            margin-left: 10px;
        }
    }
</style>