import Vue from 'vue'
import Vuex from 'vuex'
import pizzaList from './modules/pizza'
import cart from './modules/shopping-cart'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        pizzaList,
        cart
    }
});