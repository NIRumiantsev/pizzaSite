<template>
    <div class="cart">
        <h1 class="cart__title">Warenkorb</h1>
        <form action="https://formspree.io/xknqgqvz" method="POST" class="form" id="book-form" v-if="cartItems[0]">
            <div v-for="position in cartItems" :key="cartItems.indexOf(position)">
                <cartTable
                        :id="position.id"
                        :title="position.title"
                        :count="position.count"
                        :total="position.total"
                        :image="position.image"
                        :small="position.small"
                />
            </div>
            <div class="cart__total">
                <input type="text" class="cart__total-price" name="ИТОГО" :value="`Gesamtpreis: ${orderTotal} €`" readonly>
            </div>
            <h2 class="cart__subtitle">
                Geben Sie persönliche Daten ein
            </h2>
            <div class="cart__form">
                <input type="text" class="cart__input" placeholder="Ihr Name" name="Имя" required>
                <input type="tel" class="cart__input" placeholder="Deine Telefonnummer" name="Номер телефона" required>
                <input type="tel" class="cart__input" placeholder="Deine Adresse" name="Адресс" required>
            </div>
            <button type="submit" class="cart__order">Bestellen</button>
        </form>
        <h2 class="cart__subtitle" v-else>
            Etwas in den Warenkorb legen
        </h2>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import cartTable from "../components/cartTable";

    export default {
        components: {
            cartTable
        },
        computed: {
            ...mapGetters(['cartItems', 'orderTotal']),
        },
    };
</script>

<style scoped>
    .cart__title {
        font-family: Roboto, sans-serif;
        font-size: 40px;
        color: #2f2b28;
        text-align: center;
    }

    .cart__form {
        margin: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .cart__input {
        font-family: Roboto, sans-serif;
        font-size: 20px;
        color: #2f2b28;
        width: 300px;
        height: 50px;
        border: 1px solid #2f2b28;
        border-radius: 5px;
        padding: 0 10px;
    }

    .cart__total {
        display: flex;
        justify-content: flex-end;
    }

    .cart__total-price {
        display: block;
        padding: 0;
        border: none;
        outline: none;
        font-family: Roboto, sans-serif;
        font-size: 20px;
        color: #2f2b28;
        text-align: center;
    }

    .cart__subtitle {
        margin: 30px 0;
        font-family: Roboto, sans-serif;
        font-size: 20px;
        color: #2f2b28;
        text-align: center;
    }

    .cart__order {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        background: #3d8f41;
        border-radius: 10px;
        border: none;
        font-family: Roboto, sans-serif;
        font-size: 20px;
        color: #ffff;
        outline: none;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
        transition: background-color 0.3s;
        margin: 0 auto;
    }

    .cart__order:hover {
        background: #357538;
    }

    @media screen and (max-width: 1280px) {

        .cart__form {
            flex-direction: column;
        }

        .cart__input{
            margin: 15px 0;
        }

        .cart__total {
            justify-content: center;
        }
    }
</style>