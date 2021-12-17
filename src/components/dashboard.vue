<template>
    <div class="wrapper" id="wrapper">
        <div class="wrap-sidebar">
            <Sidebar id="wrap-sidebar"/>
        </div>
        <div class="wrap-content" id="wrapper-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Sidebar from './sidebar.vue'

    export default {
        name: 'Dashboard',
        props: {
            u: String,
        },
        components: {
            Sidebar,
        },
        mounted() {
            this.$store.dispatch('plFreeFire/a')
            this.$store.dispatch('plPubgm/a')
        },
    }
</script>

<style scoped>
    .wrapper {
        display: flex;
        overflow-y: hidden;
    }
    
    .wrapper .wrap-sidebar {
        position: relative;
    }
    
    .wrapper .wrap-content {
        margin-left: 20em;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: all 0.5s linear;
        overflow-y: hidden;
    }
    
    @media (max-width: 1000px) {
        .wrapper .wrap-content {
            margin-left: 5em;
            transition: all 0.5s linear;
        }
    }
    
    @media (max-width: 768px) {
        .wrapper .wrap-content {
            margin: 0;
            margin-top: 5em;
            overflow-y: hidden;
        }
    }
</style>