import Vue from 'vue'
import Vuex from 'vuex'
import pizza from './modules/pizza'
import cart from './modules/shopping-cart'
import drinks from "./modules/drinks";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        pizza,
        drinks,
        cart
    }
});