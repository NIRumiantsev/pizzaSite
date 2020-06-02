<template>
    <div class="cart" v-if="cartItems">
        <img :src="require(`@/assets/${category}/${image}`)" class="cart__image"/>
        <input type="text" class="cart__text" name="Name der Pizza" :value="title" readonly>
        <input type="text" class="cart__text" name="Die Größe" :value="volumeSmall" readonly v-if="small">
        <input type="text" class="cart__text" name="Die Größe" :value="volumeLarge" readonly v-else>
        <input type="text" class="cart__text" name="Menge" :value="count" readonly>
        <input type="text" class="cart__text" name="Positionskosten" :value="`${total} €`" readonly>
        <div class="cart__buttons">
            <img :src="require(`@/assets/icons/trash.svg`)" class="cart__button" @click="delItemFromCart" alt=""/>
            <img :src="require(`@/assets/icons/more.svg`)" class="cart__button" @click="addItemToCart" alt=""/>
            <img :src="require(`@/assets/icons/minus.svg`)" class="cart__button" @click="decItemInCart" alt=""/>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters(['cartItems'])
        },
        props: ["id", "title", "count", "total", "image", "small", "category","volumeSmall", "volumeLarge"],
        methods: {
            addItemToCart() {
                const options = {
                    category: this.category,
                    itemId: this.id,
                    small: this.small,
                };
                this.$store.dispatch('addItemToCart', options);
            },
            delItemFromCart() {
                const options = {
                    category: this.category,
                    itemId: this.id,
                    small: this.small,
                };
                this.$store.dispatch('delItemFromCart', options);
            },
            decItemInCart() {
                const options = {
                    category: this.category,
                    itemId: this.id,
                    small: this.small,
                };
                this.$store.dispatch('decItemInCart', options);
            }
        }
    }
</script>

<style scoped>

    .cart {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 50px 0;
    }

    .cart__image {
        display: block;
        width: 100px;
        height: 100px;
    }

    .cart__text {
        font-family: Roboto, sans-serif;
        font-size: 16px;
        color: #2f2b28;
        border: none;
        width: auto;
        display: block;
        outline: none;
        text-align: center;
    }

    .cart__button {
        display: block;
        width: 25px;
        height: 25px;
        cursor: pointer;
        margin: 0 6px;
    }

    .cart__buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media screen and (max-width: 1280px) {

        .cart {
            flex-direction: column;
        }

        .cart__text {
            margin: 3px 0;
        }

        .cart__buttons {
            margin: 10px 0 0 0;
        }

        .cart__button {
            margin: 0 15px;
        }

    }
</style>