<template>
    <div class="pizza">
        <div class="pizza__picture">
            <img class="pizza__image" :src="require(`@/assets/pizza/${coverImage}`)" />
            <div class="pizza__title">
                <span>{{title}}</span>
            </div>
            <div class="pizza__ingredients">
                <span>{{ingredients}}</span>
            </div>
        </div>
        <div>
            <label class="toggle page__toggle" >
                <input type="checkbox" id="toggle_checked">
                <span class="toggle__button" @click="choosePizzaSize"></span>
                <span class="toggle__size-small" @click="choosePizzaSize">&empty; 26cm</span>
                <span class="toggle__size-large" @click="choosePizzaSize">&empty; 36cm</span>
            </label>
        </div>
        <div class="pizza__price-container">
            <span class="pizza__price" v-if="small">{{priceSmall.toString()}} &euro;</span>
            <span class="pizza__price" v-else>{{priceLarge.toString()}} &euro;</span>
        </div>
        <div class="pizza__button-container" @click="showAlert">
            <button class="pizza__button" @click="addPizzaToCart" >In den Warenkorb legen</button>
            <div class="pizza__alert">
                <span>&#10004; Pizza {{title}} in den Warenkorb gelegt</span>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                small: true
            }
        },
        props: ["id", "title", "priceSmall", "priceLarge", "ingredients", "coverImage"],
        methods: {
            choosePizzaSize() {
                this.small = !this.small
            },

            showAlert() {
                const alerts = document.getElementsByClassName('pizza__alert');
                const alert = alerts[this.id - 1];
                alert.classList.add("pizza__alert-visible");
                setTimeout(function () {
                    alert.classList.remove("pizza__alert-visible");
                }, 1000)
            },

            addPizzaToCart() {
                const options = {
                    pizzaId: this.id,
                    small: this.small,
                };
                this.$store.dispatch('addPizzaToCart', options)
            }
        }
    }
</script>

<style scoped>

    .pizza {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 70px 0;
    }

    .pizza__picture {
        position: relative;
    }

    .pizza__title {
        position: absolute;
        right: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        background: #fcce3d;
        border-radius: 30px;
        font-family: Roboto, sans-serif;
        font-size: 26px;
        color: #2f2b28;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
    }

    .pizza__ingredients {
        position: absolute;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        background: #ffffff;
        border-radius: 30px;
        border: 2px solid #2f2b28;
        font-family: Roboto, sans-serif;
        font-size: 14px;
        color: #2f2b28;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
    }

    .pizza__button-container {
        position: relative;
        width: 260px;
    }

    .pizza__button {
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

    .pizza__button:hover {
        background: #357538;
    }

    .pizza__price {
        font-family: Roboto, sans-serif;
        font-size: 20px;
        color: #2f2b28;
    }

    .pizza__price-container {
        width: 100px;
    }

    .pizza__alert {
        display: none;
    }

    .pizza__alert-visible {
        display: block;
        position: absolute;
        font-family: Roboto, sans-serif;
        font-size: 14px;
        color: #3d8f41;
        top: -40px;
        text-align: center;
    }

    .toggle {
        position: relative;
        display: inline-block;
        width: 150px;
        height: 74px;
        user-select: none
    }

    .toggle input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .toggle__button {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #fcce3d;
        transition: 0.4s;
        border-radius: 37px;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
    }

    .toggle__button:before {
        position: absolute;
        content: "";
        height: 72px;
        width: 72px;
        border-radius: 50%;
        left: 0;
        top: 0;
        background-color: transparent;
        transition: .4s;
        border: 2px solid #2f2b28;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
    }

    input:focus + .toggle__button {
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
    }

    input:checked + .toggle__button:before {
        transform: translateX(74px);
        border: 2px solid #2f2b28;
    }

    .toggle__button.round {
        border-radius: 50%;
    }

    .toggle__button.round:before {
        border-radius: 50%;
    }

    .toggle__size-small, .toggle__size-large {
        cursor: pointer;
        font-family: Roboto, sans-serif;
        font-size: 18px;
        color: #2f2b28;
        position: absolute;
    }

    .toggle__size-small {
        top: 28px;
        left: 7px;
    }

    .toggle__size-large {
        top: 28px;
        right: 7px;
    }

    @media screen and (max-width: 1000px) {

        .pizza {
            flex-direction: column;
            align-items: center;
        }

        .pizza__image {
            display: block;
            height: 250px;
            width: 250px;
            margin: 20px 0;
        }

        .pizza__ingredients {
            bottom: 20px;
        }

        .pizza__price {
            display: block;
            margin: 10px 0;
        }

        .pizza__alert-visible {
            top: 70px;
        }
    }

</style>