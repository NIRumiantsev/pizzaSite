<template>
    <div>
        <h1 class="pizza__title">Pizza</h1>
        <pizza />
        <router-link to="/cart" class="pizza__cart">
            <img class="pizza__icon" src="../assets/icons/cart.svg" alt="">
            <div class="pizza__score">{{itemsTotal}}</div>
        </router-link>
    </div>
</template>

<script>
    import pizza from "../components/pizza";
    import {mapGetters} from "vuex";

    export default {
        components: {
            pizza
        },
        computed: {
            ...mapGetters(['itemsTotal']),
        },
    };
</script>

<style scoped>

    .pizza__title {
        font-family: Roboto, sans-serif;
        font-size: 40px;
        color: #2f2b28;
        text-align: center;
    }

    .pizza__cart {
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

    .pizza__icon {
        display: block;
        width: 50px;
        height: 50px;
    }

    .pizza__score {
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