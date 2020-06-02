<template>
    <div class="drink">
        <div class="drink__picture">
            <img class="drink__image" :src="require(`@/assets/${category}/${coverImage}`)" />
            <div class="drink__title">
                {{title}}
            </div>
        </div>
        <div>
            <label class="toggle page__toggle" v-if="volumeLarge">
                <input type="checkbox" id="toggle_checked">
                <span class="toggle__button" @click="chooseSize"></span>
                <span class="toggle__size-small" @click="chooseSize">{{volumeSmall}}</span>
                <span class="toggle__size-large" @click="chooseSize">{{volumeLarge}}</span>
            </label>
            <div v-else class="drink__volume">
                <span>{{volumeSmall}}</span>
            </div>
        </div>
        <div class="drink__price-container">
            <span class="drink__price" v-if="small">{{priceSmall.toString()}} &euro;</span>
            <span class="drink__price" v-else>{{priceLarge.toString()}} &euro;</span>
        </div>
        <div class="drink__button-container" @click="showAlert">
            <button class="drink__button" @click="addItemToCart" >In den Warenkorb legen</button>
            <div class="drink__alert" :id="title">
                <span>&#10004; {{title}} in den Warenkorb gelegt</span>
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
        props: ["id", "title", "priceSmall", "priceLarge", "coverImage", "category", "volumeSmall", "volumeLarge"],
        methods: {
            chooseSize() {
                this.small = !this.small
            },

            showAlert() {
                const alert = document.getElementById(this.title);
                alert.classList.add("drink__alert-visible");
                setTimeout(function () {
                    alert.classList.remove("drink__alert-visible");
                }, 1000)
            },

            addItemToCart() {
                const options = {
                    category: this.category,
                    itemId: this.id,
                    small: this.small,
                };
                this.$store.dispatch('addItemToCart', options)
            }
        }
    }
</script>

<style scoped>

    .drink {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 100px 0;
    }

    .drink__image {
        display: block;
        width: 200px;
        height: 200px;
        position: relative;
        margin: 0;
    }

    .drink__picture {
        position: relative;
    }

    .drink__title {
        position: absolute;
        right: 0;
        top: -30px;
        padding: 10px;
        background: #fcce3d;
        border-radius: 30px;
        font-family: Roboto, sans-serif;
        font-size: 18px;
        color: #2f2b28;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
        text-align: center;
    }

    .drink__volume {
        width: 72px;
        height: 72px;
        border-radius: 50%;
        background: #fcce3d;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
        border: 2px solid #2f2b28;
        font-family: Roboto, sans-serif;
        font-size: 18px;
        color: #2f2b28;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .drink__button-container {
        position: relative;
        width: 260px;
    }

    .drink__button {
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

    .drink__button:hover {
        background: #357538;
    }

    .drink__price {
        font-family: Roboto, sans-serif;
        font-size: 20px;
        color: #2f2b28;
    }

    .drink__price-container {
        width: 100px;
    }

    .drink__alert {
        display: none;
    }

    .drink__alert-visible {
        display: block;
        position: absolute;
        font-family: Roboto, sans-serif;
        font-size: 14px;
        color: #3d8f41;
        top: -40px;
        text-align: center;
        margin: 0 auto;
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
        left: 14px;
    }

    .toggle__size-large {
        top: 28px;
        right: 14px;
    }

    @media screen and (max-width: 1000px) {

        .drink {
            flex-direction: column;
            align-items: center;
            margin: 0 0 100px 0;
        }

        .drink__image {
            display: block;
            height: 250px;
            width: 250px;
            margin: 20px 0;
        }

        .drink__title {
            right: 50%;
            top: 0;
            margin: 0 -50%;
        }

        .drink__price {
            display: block;
            margin: 10px 0;
        }

        .drink__alert-visible {
            top: 70px;
        }
    }

</style>