<template>
    <div class="item-container">
        <h3>Free Fire</h3>
        <div class="item-list">
            <swiper :slidesPerView="cWidth" :spaceBetween="sbWidth" class="swiper">
                <swiper-slide class="swiper-slide" v-for="d in $store.state.plFreeFire.payload" :key="d">
                    <router-link :to="'item?i='+d.pulsa_code">
                        <div class="img">
                            <img src="~@/assets/img/banner/freefire.jpg">
                        </div>
                        <div class="info-item">
                            <h5>{{ d.pulsa_op}}</h5>
                            {{ d.pulsa_nominal }}<br>
                            <span class="price">{{ rupiah(d.pulsa_price) }}</span>
                        </div>
                    </router-link>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
    import {
        Swiper,
        SwiperSlide
    } from "swiper/vue";
    import "swiper/swiper-bundle.min.css";
    import "swiper/components/navigation"
    import "swiper/components/pagination"

    import SwiperCore, {
        Navigation,
        Pagination,
        Mousewheel,
        Keyboard,
        Autoplay,
    } from 'swiper/core';

    SwiperCore.use([Autoplay, Navigation, Pagination, Mousewheel, Keyboard]);

    export default {
        name: 'Freefire',
        data() {
            return {
                cWidth: null,
                sbWidth: null,
            }
        },
        components: {
            Swiper,
            SwiperSlide,
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
            setTimeout(() => {
                if (window.screen.width <= 768) {
                    this.cWidth = 3
                    this.sbWidth = 10
                } else if (window.screen.width <= 1000) {
                    this.cWidth = 4
                    this.sbWidth = 20
                } else {
                    this.cWidth = 6
                    this.sbWidth = 30
                }
            }, 500)

        }
    }
</script>

<style scoped>

</style>