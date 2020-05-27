<template>
    <div>
        <div v-for="position in pizza" :key="position.id">
            <pizza-item
                    :id="position.id"
                    :title="position.title"
                    :ingredients="position.ingredients"
                    :coverImage="position.image"
                    :priceSmall="position.prices.small"
                    :priceLarge="position.prices.large"
            />
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import PizzaItem from "./pizzaItem";

    export default {
        components: {PizzaItem},
        created: function () {
            this.$store.dispatch('fetchPizza');
        },
        computed: {
            ...mapGetters(['pizza'])
        }
    }
</script>

<style scoped>

</style>