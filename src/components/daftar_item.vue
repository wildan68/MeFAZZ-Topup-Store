<template>
    <Freefire />
    <Pubgm />
</template>

<script>
    import Freefire from './itemlist/freefire.vue'
    import Pubgm from './itemlist/pubgm.vue'
    export default {
        name: 'Daftar Item',
        components: {
            Freefire,
            Pubgm,
        },
    }
</script>

<style>
    .item-container {
        width: 90%;
    }

    .item-container .item-list {
        height: 16em;
    }

    .item-list .swiper {
        width: 100%;
        height: 100%;
        display: flex;
    }

    .item-list .swiper-slide {
        background-color: var(--white);
        height: auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        border-radius: 8px;
        overflow: hidden;
        text-align: center;
        cursor: pointer;
        transition: all 0.5s linear;
        font-size: 14px;
        margin: 10px 0 10px 0;
    }
    .item-list .swiper-slide:hover {
        box-shadow: 0px 0px 35px -10px rgba(0, 0, 0, 0.25);
        -webkit-box-shadow: 0px 0px 35px -10px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0px 0px 35px -10px rgba(0, 0, 0, 0.25);
        
    }

    .item-list .swiper-slide .info-item {
        padding: 10px;
    }

    .item-list .swiper-slide .info-item h5 {
        margin: 0;
        font-weight: 700;
        font-size: 14px;
    }

    .item-list .swiper-slide .img {
        height: 10em;
        overflow: hidden;
        width: 100%;
    }

    .item-list .swiper-slide img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    .item-list .price {
        margin-top: 30px;
        font-size: 12px;
        font-weight: 700;
        color: var(--green);
    }
</style>