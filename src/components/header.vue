<template>
    <header class="header">
        <div class="header__container">
            <router-link to="/" class="link--header">
                <img :src="require(`@/assets/logo.png`)" alt="" class="logo--header">
            </router-link>
            <div class="nav__navbar" id="navbar">
                <span id="nav__trigger" class="nav__trigger" @click="showNavigation"></span>
                <ul class="nav" id="nav">
                    <li @click="showNavigation">
                        <router-link to="/" class="link--header" >Pizza</router-link>
                    </li>
                    <li @click="showNavigation">
                        <router-link to="/drinks" class="link--header">Die Getränke</router-link>
                    </li>
                    <li @click="showNavigation">
                        <router-link to="/sauces" class="link--header">Saucen</router-link>
                    </li>
                    <li @click="showNavigation">
                        <router-link to="/deserts" class="link--header">Dessert</router-link>
                    </li>
                </ul>
            </div>
            <router-link to="/cart" class="cart--header">
                <img src="../assets/icons/cart.svg" alt="">
                <div class="score--header">{{itemsTotal}}</div>
            </router-link>
        </div>
    </header>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "header",
        computed: {
            ...mapGetters(['itemsTotal']),
        },
        methods: {
            showNavigation() {
                const trigger = document.getElementById("nav__trigger");
                const nav = document.getElementById("nav");
                const navbar = document.getElementById("navbar");
                nav.classList.toggle("nav__show");
                navbar.classList.toggle("nav__hamburger");
                trigger.classList.toggle("nav__cross");
            }
        }
    }
</script>

<style scoped>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px 0;
        background: #ffffff;
        width: 100%;
        font-family: Roboto, sans-serif;
    }

    .header__container {
        margin: 0 auto;
        width: 1180px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo--header {
        width: 300px;
        height: 60px;
    }

    .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style-type: none;
    }

    .link--header {
        text-align: center;
        margin: 0 30px;
        text-decoration: none;
        font-size: 25px;
        color: #2f2b28;
        transition: color 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .link--header:hover {
        color: #3d8f41;
    }

    .cart--header {
        width: 65px;
        height: 65px;
        display: block;
        position: relative;
    }

    .score--header {
        position: absolute;
        bottom: -20px;
        right: -20px;
        padding: 4px 10px;
        font-size: 14px;
        border-radius: 12px;
        background: #fcce3d;
        font-family: Roboto, sans-serif;
        color: #2f2b28;
    }

    @media screen and (max-width: 1280px) {

        .nav {
            display: none;
            width: 100%;
            padding: 0;
        }

        .nav__hamburger {
            display: flex;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 110vh;
            background: rgba(0, 0, 0, 0.8);
            z-index: 10;
            justify-content: center;
        }

        .nav__trigger {
            content: url("../assets/icons/menu__icon.svg");
            width: 60px;
            height: 60px;
            display: inline-block;
            cursor: pointer;
        }

        .nav__cross {
            content: url("../assets/icons/cross__icon.svg");
            position: absolute;
            top: 40px;
            right: 20px;
            width: 40px;
            height: 40px;
        }

        .nav li {
            color: #ffffff;
            margin: 30px 0;
            width: auto;
            list-style-type: none
        }

        .nav__show {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
            z-index: 10;
            height: 100%;
            width: auto;
            margin: 0 auto;
        }

        .navigation--footer {
            flex-direction: column;
        }

        .link--header {
            color: #ffffff;
            font-size: 40px;
        }

    }
        @media screen and (max-width: 700px) {

            .header__container {
                flex-direction: column;
                align-items: center;
            }

            .nav__trigger {
                margin: 15px 0;
            }

            .logo--header {
                width: 200px;
                height: 40px;
                margin-bottom: 15px;
            }

            .cart--header {
                margin-top: 15px;
            }
        }

        @media screen and (max-width: 500px) {

            .nav li {
                margin: 20px 0;
            }

            .link--header {
                font-size: 30px;
            }
        }
</style>