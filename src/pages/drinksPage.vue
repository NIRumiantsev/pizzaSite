<template>
    <div>
        <h1 class="title">Die Getränke</h1>
        <drinks />
        <router-link to="/cart" class="cart">
            <img class="icon" src="../assets/icons/cart.svg" alt="">
            <div class="score">{{itemsTotal}}</div>
        </router-link>
    </div>
</template>

<script>

    import Drinks from "../components/drinks";
    import {mapGetters} from "vuex";

    export default {
        components: {
            Drinks
        },
        computed: {
            ...mapGetters(['itemsTotal']),
        },
    };
</script>

<style scoped>
    .title {
        font-family: Roboto, sans-serif;
        font-size: 40px;
        color: #2f2b28;
        text-align: center;
    }

    .cart {
        border-radius: 50%;
        background-color: #e7e6f0;
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        bottom: 100px;
        right: 8%;

    }

    .icon {
        display: block;
        width: 50px;
        height: 50px;
    }

    .score {
        position: absolute;
        bottom: -5px;
        right: -5px;
        padding: 4px 10px;
        font-size: 16px;
        border-radius: 13px;
        background: #fcce3d;
        font-family: Roboto, sans-serif;
        color: #2f2b28;
    }
</style>