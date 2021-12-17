<template>
    <div class="banner-info">
        <swiper :navigation="true"  :pagination='{"clickable": true}' :mousewheel="true" :keyboard="true" :autoplay='{"delay": 2500}' class="swipper">
            <swiper-slide class="img"><img src="~@/assets/img/poster/poster1.jpg"></swiper-slide>
            <swiper-slide class="img"><img src="~@/assets/img/poster/poster2.jpg"></swiper-slide>
            <swiper-slide class="img"><img src="~@/assets/img/poster/poster3.jpg"></swiper-slide>
        </swiper>
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
        name: 'BannerInfo',
        components: {
            Swiper,
            SwiperSlide,
        }
    }
</script>

<style scoped>
    .banner-info {
        margin-left: 2%;
        display: flex;
        overflow: hidden;
        width: 50%;
    }
    
    .banner-info .img {
        width: 100%;
        height: 300px;
        background-color: red;
        overflow: hidden;
    }
    
    .banner-info .swipper {
        display: flex;
        border-radius: 14px;
        width: 100%;
        height: 100%;
        object-fit: fill;
    }
    
    .banner-info .img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    @media (max-width: 768px) {
        .banner-info {
            margin-left: 0;
            width: 100%;
        }

    }
</style>