<template>
    <div>
        <div class="drink__types">
            <div class="drink__button" @click="showOnly">Alle</div>
            <div class="drink__button" @click="showOnly(1)">Kalte Getränke</div>
            <div class="drink__button" @click="showOnly(2)">Heißgetränk</div>
            <div class="drink__button" @click="showOnly(3)">Bier</div>
        </div>
        <div id="cold-drinks">
            <h2 class="drink__title">Kalte Getränke</h2>
            <div v-for="position in coldDrinks" :key="position.title">
                <drinks-item
                        :id="position.id"
                        :title="position.title"
                        :volumeSmall="position.volume.small"
                        :volumeLarge="position.volume.large"
                        :coverImage="position.image"
                        :priceSmall="position.prices.small"
                        :priceLarge="position.prices.large"
                        :category="position.category"
                />
            </div>
        </div>
        <div id="hot-drinks">
            <h2 class="drink__title">Heißgetränk</h2>
            <div v-for="position in hotDrinks" :key="position.title" >
                <drinks-item
                        :id="position.id"
                        :title="position.title"
                        :volumeSmall="position.volume.small"
                        :volumeLarge="position.volume.large"
                        :coverImage="position.image"
                        :priceSmall="position.prices.small"
                        :priceLarge="position.prices.large"
                        :category="position.category"
                />
            </div>
        </div>
        <div id="beer-drinks">
            <h2 class="drink__title">Bier</h2>
            <div v-for="position in beerDrinks" :key="position.title" >
                <drinks-item
                        :id="position.id"
                        :title="position.title"
                        :volumeSmall="position.volume.small"
                        :volumeLarge="position.volume.large"
                        :coverImage="position.image"
                        :priceSmall="position.prices.small"
                        :priceLarge="position.prices.large"
                        :category="position.category"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import DrinksItem from "./drinksItem";

    export default {
        components: {DrinksItem},
        created: function () {
            this.$store.dispatch('fetchColdDrinks');
            this.$store.dispatch('fetchHotDrinks');
            this.$store.dispatch('fetchBeerDrinks');
        },
        computed: {
            ...mapGetters(['coldDrinks', 'hotDrinks', 'beerDrinks'])
        },
        methods: {
            showOnly(type) {
                const coldDrinks = document.getElementById('cold-drinks');
                const hotDrinks = document.getElementById('hot-drinks');
                const beerDrinks = document.getElementById('beer-drinks');

                switch (type) {
                    case 1:
                        coldDrinks.classList.remove('drink__disabled');
                        hotDrinks.classList.add('drink__disabled');
                        beerDrinks.classList.add('drink__disabled');
                        break;
                    case 2:
                        coldDrinks.classList.add('drink__disabled');
                        hotDrinks.classList.remove('drink__disabled');
                        beerDrinks.classList.add('drink__disabled');
                        break;
                    case 3:
                        coldDrinks.classList.add('drink__disabled');
                        hotDrinks.classList.add('drink__disabled');
                        beerDrinks.classList.remove('drink__disabled');
                        break;
                    default:
                        coldDrinks.classList.remove('drink__disabled');
                        hotDrinks.classList.remove('drink__disabled');
                        beerDrinks.classList.remove('drink__disabled');
                }
            }
        }
    }
</script>

<style scoped>
    .drink__types {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 60px 0;
    }

    .drink__button {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        background: #3d8f41;
        border-radius: 5px;
        border: none;
        font-family: Roboto, sans-serif;
        font-size: 14px;
        color: #ffff;
        outline: none;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
        transition: background-color 0.3s;
        margin: 0 auto;
        user-select: none;
    }

    .drink__button:hover {
        background: #357538;
    }

    .drink__title {
        font-family: Roboto, sans-serif;
        font-size: 30px;
        color: #2f2b28;
        text-align: center;
    }

    .drink__disabled {
        display: none;
    }

    @media screen and (max-width: 500px) {

        .drink__types {
            flex-direction: column;
        }

        .drink__button {
            margin: 10px 0;
        }
    }
</style>