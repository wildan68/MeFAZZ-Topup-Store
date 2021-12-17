<template>
    <div class="item-container">
        <div v-for="d in $store.state.plFreeFire.payload" :key="d">
            <div v-if="d.pulsa_code == $route.query.i" class="container">
                <div class="navigation">
                    <router-link to="daftar-item" class="back">
                        <ion-icon name="arrow-back"></ion-icon>
                    </router-link>
                    <div class="title">
                        {{ d.pulsa_op }} <b>({{ d.pulsa_nominal }})</b>
                    </div>
                    <button class="option">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </button>
                </div>
                <div class="flex-box">
                    <div class="cover">
                        <img src="~@/assets/img/banner/freefire.jpg"
                            v-if="rSpace(d.pulsa_op.toLowerCase()) == 'freefire'" />
                    </div>
                    <div class="data-form">
                        <form>
                            <h2>{{ d.pulsa_op }}</h2>
                            Masukan USERID<br>
                            <input type="text" placeholder="UID" /><br>
                            <div class="nom">{{ d.pulsa_nominal }}</div>
                            <div class="pay-info">
                                <div class="flex-box-pay">
                                    <span class="title-pay">Total Pembayaran</span><span class="price">{{ rupiah(d.pulsa_price) }}</span>
                                </div>
                                <button class="pay" type="submit">Beli Sekarang</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Item',
        methods: {
            rSpace(t) {
                return t.replace(/\s/g, '')
            },
            rupiah(angka) {
                var rupiah = '';
                var angkarev = angka.toString().split('').reverse().join('');
                for (var i = 0; i < angkarev.length; i++)
                    if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.';
                return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('');
            }
        },
        mounted() {
            if (this.$route.query.i == null) {
                this.$router.push('/')
            }


        }
    }
</script>

<style scoped>
    .item-container {
        margin-top: 30px;
    }
    
    .item-container .container {
        height: auto;
    }
    
    .item-container .container .navigation {
        align-items: center;
        display: flex;
        padding: 0 20px 0 20px;
        height: 5em;
        background-color: var(--white);
    }
    
    .item-container .container .back {
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        cursor: pointer;
        color: var(--gray);
        transition: all 0.5s linear;
    }
    
    .item-container .container .back:hover {
        background-color: var(--white-light);
        color: var(--black);
        transition: all 0.5s linear;
    }
    
    .item-container .container .back ion-icon {
        width: 24px;
        height: 24px;
    }
    
    .item-container .container .title {
        width: 100%;
        display: flex;
        justify-content: center;
        font-weight: 600;
    }
    
    .item-container .container .title b {
        margin-left: 10px;
        color: var(--purple);
    }
    
    .item-container .container .option {
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        color: var(--gray);
        cursor: pointer;
    }
    
    .item-container .container .option:hover {
        background-color: var(--white-light);
        color: var(--black);
    }
    
    .item-container .container .option ion-icon {
        width: 24px;
        height: 24px;
    }
    
    .item-container .container .flex-box {
        display: flex;
        margin-top: 10px;
        height: 25em;
    }
    
    .item-container .container .cover {
        flex: 1;
        overflow: hidden;
    }
    
    .item-container .container .cover img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    
    .item-container .container .data-form {
        flex: 1;
        background-color: var(--white);
        padding: 0 1em 1em 1em;
        position: relative;
    }
    
    .item-container .container .data-form input[type=text] {
        height: 3em;
        background-color: var(--white-light);
        width: 50%;
        padding: 0 20px 0 20px;
        border-radius: 8px;
    }
    
    .item-container .container .data-form .nom {
        margin-top: 10px;
        background-color: var(--green-light);
        display: inline-block;
        padding: 1em;
        color: var(--green);
        font-weight: 600;
        font-size: 14px;
    }
    
    .item-container .container .data-form .pay-info {
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: var(--white);
        height: 5em;
        border-top-left-radius: 14px;
        border-top-right-radius: 14px;
        padding: 1em;
        box-shadow: 0px -10px 30px -15px rgba(0, 0, 0, 0.25);
        -webkit-box-shadow: 0px -10px 30px -15px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0px -10px 30px -15px rgba(0, 0, 0, 0.25);
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .item-container .container .data-form .flex-box-pay {
        display: flex;
        width: 100%;
        margin-bottom: 10px;
    }
    
    .item-container .container .data-form .pay-info .price {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        color: var(--green);
        font-size: 18px;
        font-weight: 600;
    }
    
    .item-container .container .data-form .pay-info .pay {
        width: 50%;
        background-color: var(--purple);
        height: 3.5em;
        border-radius: 14px;
        color: var(--white);
        font-weight: 600;
        cursor: pointer;
    }
    
    .item-container .container .data-form .pay-info .pay:hover {
        background-color: var(--purple-dark)
    }
    
    @media (max-width: 768px) {
        .item-container {
            margin-top: 0px;
            width: 95%;
        }
        .item-container .container .flex-box {
            display: block;
            height: auto;
        }
        .item-container .container .data-form {
            margin-top: -20px;
            height: 20em;
            padding: 0 1em 1em 1em;
        }
        .item-container .container .data-form .pay-info {
            position: fixed;
        }
    }
</style>