<template>
    <div class="item-populer">
        <span class="title">Item Populer</span>
        <div class="item-container">
            <swiper :slidesPerView="cWidth()" :spaceBetween="sbWidth()" class="swiper">
                <swiper-slide class="swiper-slide">
                    <div class="img">
                        <img src="~@/assets/img/banner/freefire.jpg">
                    </div>
                    <div class="info-item">
                        <h4>Free Fire Diamonds</h4>
                    </div>
                </swiper-slide>
                <swiper-slide class="swiper-slide">
                    <div class="img">
                        <img src="~@/assets/img/banner/mobilelegends.jpg">
                    </div>
                    <div class="info-item">
                        <h4>Mobile Legends Diamonds</h4>
                    </div>
                </swiper-slide>
                <swiper-slide class="swiper-slide">
                    <div class="img">
                        <img src="~@/assets/img/banner/wildrift.jpg">
                    </div>
                    <div class="info-item">
                        <h4>Wild Rift Wild Core</h4>
                    </div>
                </swiper-slide>
                <swiper-slide class="swiper-slide">
                    <div class="img">
                        <img src="~@/assets/img/banner/pubgm.jpg">
                    </div>
                    <div class="info-item">
                        <h4>PUBG Mobile UC</h4>
                    </div>
                </swiper-slide>
                <swiper-slide class="swiper-slide">
                    <div class="img">
                        <img src="~@/assets/img/banner/arena_of_valor.jpg">
                    </div>
                    <div class="info-item">
                        <h4>Arena of Valor Voucher</h4>
                    </div>
                </swiper-slide>
                <swiper-slide class="swiper-slide">
                    <div class="img">
                        <img src="~@/assets/img/banner/higgsdomino.png">
                    </div>
                    <div class="info-item">
                        <h4>Higgs Domino Chip</h4>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
    <br>
    <br>
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
        name: 'Item Populer',
        components: {
            Swiper,
            SwiperSlide
        },
        methods: {
            cWidth() {
                if (window.screen.width <= 768) {
                    return 3
                }
                if (window.screen.width <= 1000) {
                    return 4
                } else {
                    return 6
                }
            },
            sbWidth() {
                if (window.screen.width <= 768) {
                    return 10
                }
                if (window.screen.width <= 1000) {
                    return 20
                } else {
                    return 30
                }
            }
        }
    }
</script>

<style scoped>
    .item-populer {
        width: 90%;
        margin-top: 30px;
    }
    
    .item-populer .title {
        font-size: 18px;
        font-weight: 500;
        color: var(--gray);
    }
    
    .item-populer .item-container {
        width: 100%;
        height: auto;
        margin-top: 30px;
    }
    
    .item-populer .swiper {
        width: 100%;
        height: 100%;
        display: flex;
        margin: 0 !important;
    }
    
    .item-populer .swiper-slide {
        background-color: var(--white);
        height: 13em;
        display: flex;
        align-items: center;
        flex-direction: column;
        border-radius: 8px;
        overflow: hidden;
        text-align: center;
        cursor: pointer;
        transition: all 0.5s linear;
    }
    
    .item-populer .swiper-slide:hover {
        background-color: var(--white);
        transition: all 0.5s linear;
    }
    
    .item-populer .swiper-slide .info-item {
        padding: 10px;
    }
    
    .item-populer .swiper-slide .info-item h4 {
        margin: 0;
        font-weight: 500;
        font-size: 14px;
    }
    
    .item-populer .swiper-slide .img {
        height: 8em;
        overflow: hidden;
        width: 100%;
    }
    
    .item-populer .swiper-slide img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
</style>